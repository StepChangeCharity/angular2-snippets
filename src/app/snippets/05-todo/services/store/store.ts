import { Injector, Injectable, Inject } from 'angular2/angular2';
import { HTTP_BINDINGS, Http, RequestOptions, Response, Headers } from 'angular2/http';
import { TaskItem, CommandTypes, Command, Toaster, ToasterTypes } from "../../models";
import { CommsService } from "../comms-service";


/**
 * Specifies how a storage mechanism should be implemented
 */
export interface IStore {
	/** @function
	 * @name saveTask
	 * @desc Saves a single task to the persistence store
	 */
	saveTask(task: TaskItem): void;
	
	/** @function 
	 * @name loadList
	 * @desc Loads the list from whatever persistence mechanism is being implemented.
	*/
	loadList(): Array<TaskItem>;
	
}



/**
 * BaseStore:
 * Provides the underlying [memory] data store for the items
 * in the ToDo list.
 */
class BaseStore {
	protected _data: Array<TaskItem> = null;
	
	constructor() {
	}
	
	public get data(): Array<TaskItem> {
		return this._data;
	}
	
	public set data(value: Array<TaskItem>) {
		this._data = value;
	}
	
	saveTask(task: TaskItem): void {
		let tsk = TaskItem.findById(this.data, task.taskId);

		// taskId remains unchanged
		tsk.isDone = task.isDone;
		tsk.createdOn = task.createdOn;
		tsk.modifiedOn = task.modifiedOn;
		tsk.task = task.task;
	}
		
}


/**
 * MemoryStore:
 * An in-memory storage mechanism for an IStore (i.e. saving does nothing!).
 */
export class MemoryStore extends BaseStore implements IStore {

	constructor() {
		super();
		console.log("ToDo app using MemoryStore");
	}

	loadList(): Array<TaskItem> {
		return this.data;
	}
	
	saveTask(task: TaskItem): void {
		// no saving on in-memory version		
	}	

}



/**
 * LocalStorageStore:
 * An IStore store using local storage for persistence.
 */
export class LocalStorageStore extends BaseStore implements IStore {

	static STORE_KEY: string = "todo::list";

	constructor() {
		super();
		console.log("ToDo app using LocalStorageStore");
	}

	loadList(): Array<TaskItem> {
		let json = window.localStorage.getItem( LocalStorageStore.STORE_KEY );
		 
		if (json) {
			this.data = JSON.parse(json);
		} else	{
			this.data = new Array<TaskItem>();
		}
		
		return this.data;
	}

	saveTask(task: TaskItem): void {
		let json = JSON.stringify(this.data);
		window.localStorage.setItem( LocalStorageStore.STORE_KEY, json );
	}

}


/**
 * ApiStorageStore:
 * An IStore store using the sheetsUI Google Sheets API for persistence.
 */
@Injectable()
export class ApiStorageStore extends BaseStore implements IStore {
	static API_ENDPOINT: string = "https://sheetsu.com/apis/d4299c26";
	static CHANGE_CHECK_TIME: number = 5000;
	
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
			case CommandTypes.TASK_GETALL_COMPLETE:
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
							ToasterTypes.TOAST_WARNING, 
							`Source data has changed, use "Load List" to update your version.`
						);
						self._comms.toasterPipeline.next(t);
					}				
				})
			;
			
			this.changeCheck();
		}.bind(this), ApiStorageStore.CHANGE_CHECK_TIME);
	}

	loadList(): Array<TaskItem> {
		let cmd: Command = null;
		let options: RequestOptions = this.getRequestOptions();
		
		// We're re-populating, so clear out what we already have
		this.data = new Array<TaskItem>();
		
		cmd = new Command(CommandTypes.TASK_GETALL_START, null);
		this._comms.apiPipeline.next(cmd);

		this._http
			.get(ApiStorageStore.API_ENDPOINT, options)
			.subscribe( (res: Response) => {
				if (res.status === 200) {
					// OK
					let result: Array<Object> = <Array<Object>>JSON.parse(res.text()).result;
					
					this.data = TaskItem.taskItemsMapper(result);
					
					let c: Command = new Command(CommandTypes.TASK_GETALL_COMPLETE, this.data);
					
					this._comms.apiPipeline.next(c);

				} else {
					// oh dear
					let error = JSON.parse(res.text());
					let c: Command = new Command(CommandTypes.TASK_GETALL_ERROR, error.error);
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
				let t = new Toaster(ToasterTypes.TOAST_SUCCESS, "Task saved - note the SheetSu api creates a new task everytime :-(");
				this._comms.toasterPipeline.next(t);
			})
		;	
	}
	
}

