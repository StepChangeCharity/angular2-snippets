import { Injector, Injectable, Inject } from 'angular2/angular2';
import { HTTP_BINDINGS, Http, RequestOptions, Response, Headers } from 'angular2/http';
import { TaskItem, CommandTypes, Command, Toaster, ToasterTypes } from "../../models";
import { CommsService } from "../comms-service";


/**
 * Specifies how a storage mechanism should be implemented
 */
export interface IStore {
	/** @function 
	 * @name clearList
	 * @desc Clears the list back to an empty list
	*/
	clearList(): void;
	
	/** @function 
	 * @name saveList
	 * @desc Persists the list to whatever persistence mechanism is being implemented.
	*/
	saveList(): void;
	
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
	
	/** @function 
	 * @name makeDefaultList
	 * @desc Clears the current list and adds some default noddy data in it's place.
	*/
	makeDefaultList(): void;
}



/**
 * BaseStore:
 * Provides the underlying [memory] data store for the items
 * in the ToDo list.
 */
class BaseStore {
	protected _data: Array<TaskItem> = null;
	
	constructor() {
		this.clearList();
	}
	
	public get data(): Array<TaskItem> {
		return this._data;
	}
	
	public set data(value: Array<TaskItem>) {
		this._data = value;
	}
	
	clearList(): void {
		this._data = new Array<TaskItem>();
	}
	
	findById(tsk: TaskItem): TaskItem {
		let foundTask = this._data.find( (t) => {
			return t.taskId === tsk.taskId;
		});
		
		return foundTask;
	}
	
	saveTask(task: TaskItem): void {
		let tsk = this.findById(task);
		console.log(tsk);
		
	}
		
	makeDefaultList(): void {
		let defaultList: Array<TaskItem> = null;
		
		this._data = [
			new TaskItem("Do big shop"),
			new TaskItem("Make tea", true),
			new TaskItem("Eat mice with sugar"),
		];		
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
		// default store has no persistence, just use the default list
		super.makeDefaultList();
		
		return this.data;
	}
	
	saveList(): void {
		// no saving on in-memory version		
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
			this.clearList();
		}
		
		return this.data;
	}

	saveList(): void {
		let json = JSON.stringify(this.data);

		window.localStorage.setItem(LocalStorageStore.STORE_KEY, json);
	}
	
	clearList(): void {
		super.clearList();
		
		localStorage.removeItem(LocalStorageStore.STORE_KEY);
	}
	
	saveTask(task: TaskItem): void {
		throw new Error("NotYetImplemented.");		
	}

}


/**
 * ApiStorageStore:
 * An IStore store using the sheetsUI Google Sheets API for persistence.
 */
@Injectable()
export class ApiStorageStore extends BaseStore implements IStore {
	static API_ENDPOINT: string = "https://sheetsu.com/apis/d4299c26";
	_http: Http = null;
	_comms: CommsService = null;
	
	constructor(cs: CommsService) {
		super();
		this.resolveDependencies();

		this._comms = cs;		
		this.resolveDependencies();
		this._comms.apiPipeline.toRx().subscribe((c) => this.processCommand(c));
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
				// Loaded list afresh from the db
				this.clearList();
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

	loadList(): Array<TaskItem> {
		let cmd: Command = null;
		let options: RequestOptions = this.getRequestOptions();
		
		// We're re-populating, so clear out what we already have
		this.clearList();
		
		cmd = new Command(CommandTypes.TASK_GETALL_START, null);
		this._comms.apiPipeline.next(cmd);

		this._http
			.get(ApiStorageStore.API_ENDPOINT, options)
			.subscribe( (res: Response) => {
				if (res.status === 200) {
					// OK
					let result: Array<Object> = <Array<Object>>JSON.parse(res.text()).result;
					
					this.data = TaskItem.TaskItemsMapper(result);
					
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
			
						
		
		// let t = new Toaster(ToasterTypes.TOAST_SUCCESS, "onClear called!");
		// this.commsService.pipeline.next(t);		
		
		return new Array<TaskItem>();
	}
	
	saveList(): void {
		
	}
	
	clearList(): void {
		// DELETE is not yet supported by the sheetsu api :-()
		let c: Command = new Command(ToasterTypes.TOAST_WARNING, "Clear is not supported by the api :-()");
		this._comms.toasterPipeline.next(c);
		
		// super.clearList();
		
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
				console.log(res);
			})
		;	
	}
	
}

