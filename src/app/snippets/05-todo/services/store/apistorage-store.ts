import { Injector, Injectable, Inject } from 'angular2/angular2';
import { HTTP_BINDINGS, Http, RequestOptions, Response, Headers } from 'angular2/http';
import { IStore } from "./_istore"
import { BaseStore } from "./_base-store"
import { Command, CommandType } from "../../models/command";
import { Toaster, ToasterType } from "../../models/toaster";
import { TaskItem } from "../../models/task-item";
import { CommsService } from "../comms-service";


/**
 * ApiStorageStore:
 * An IStore store using the sheetsUI Google Sheets API for persistence.
 */
@Injectable()
export class ApiStorageStore extends BaseStore implements IStore {
	static API_ENDPOINT: string = "https://sheetsu.com/apis/d4299c26";
	static CHANGE_CHECK_TIME: number = 60000;
	
	_http: Http = null;
	_comms: CommsService = null;
	
	constructor(cs: CommsService) {
		super();
		this.resolveDependencies();

		this._comms = cs;		
		this.resolveDependencies();
		this._comms.apiPipeline.toRx().subscribe((c) => this.processCommand(c));
		
		// Periodically check the api to see if more data has been added ...
		// Poor man's signal r :-(
		this.changeCheck();
	}
	
	resolveDependencies(): void {
		let injector = Injector.resolveAndCreate([
			HTTP_BINDINGS, 
			CommsService
		]);
		this._http = injector.get(Http);
	}
	
	processCommand(c: Command) {
		switch (c.Type) {
			case CommandType.TaskCompleteToggle:
				this.data = <Array<TaskItem>> c.Data;
			break;
		}
	}
	
	getRequestOptions(): RequestOptions {
		let o = new RequestOptions();
		
		o.headers = new Headers();
		o.headers.append("Content-Type", "application/json");
		
		return o;
	}
	
	changeCheck(): void {		
		
		setTimeout(function() {
			// TODO: Hit api and check local version
			let self: ApiStorageStore = this;
			let options: RequestOptions = self.getRequestOptions();
			self._http
				.get(ApiStorageStore.API_ENDPOINT, options)
				.subscribe( (res: Response) => {
					if (res.status !== 200)
						// .. not fussed about failures in this one
						return;
					
					let result: Array<Object> = <Array<Object>>JSON.parse(res.text()).result;
					let newData: Array<TaskItem> = TaskItem.taskItemsMapper(result);

					if (!TaskItem.listEquals(self.data, newData)) {
						// Data from underlying source changed, just tell the user to update if they want
						let t: Toaster = new Toaster(
							ToasterType.Warning, 
							`Source data has changed, use "Load List" to update your version.`
						);
						self._comms.toasterPipeline.next(t);
					}				
				})
			;
			
			this.changeCheck();
		}.bind(this), ApiStorageStore.CHANGE_CHECK_TIME);
	}
	
	storageType(): string {
		return "API Storage";
	}

	loadList(): Array<TaskItem> {
		let cmd: Command = null;
		let options: RequestOptions = this.getRequestOptions();
		
		// We're re-populating, so clear out what we already have
		this.data = new Array<TaskItem>();
		
		cmd = new Command(CommandType.TaskGetAllStart, null);
		this._comms.apiPipeline.next(cmd);

		this._http
			.get(ApiStorageStore.API_ENDPOINT, options)
			.subscribe( (res: Response) => {
				if (res.status === 200) {
					// OK
					let result: Array<Object> = <Array<Object>>JSON.parse(res.text()).result;
					
					this.data = TaskItem.taskItemsMapper(result);
					
					let c: Command = new Command(CommandType.TaskGetAllComplete, this.data);
					
					this._comms.apiPipeline.next(c);

				} else {
					// oh dear
					let error = JSON.parse(res.text());
					let c: Command = new Command(CommandType.TaskGetAllError, error.error);
					this._comms.apiPipeline.next(c);					
				}
			})
		;
		
		return new Array<TaskItem>();
	}
	
	saveTask(task: TaskItem): void {
		// update the in-memory version
		super.saveTask(task);
		
		// sync up the remote persistence layer
		let json = JSON.stringify(task);
		
		let options = this.getRequestOptions();
		
		this._http
			.post(ApiStorageStore.API_ENDPOINT, json, options)
			.subscribe( (res: Response) => {
				let t = new Toaster(ToasterType.Success, "Task saved - note the SheetSu api creates a new task everytime :-(");
				this._comms.toasterPipeline.next(t);
			})
		;	
	}
	
}

