import { Injector, Injectable, Inject } from 'angular2/angular2';
import { HTTP_BINDINGS, Http } from 'angular2/http';
import { TaskItem, CommandTypes, Command } from "../../models";


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

}


/**
 * ApiStorageStore:
 * An IStore store using the sheetsUI Google Sheets API for persistence.
 */
export class ApiStorageStore extends BaseStore implements IStore {
	static API_ENDPOINT: string = "https://sheetsu.com/apis/d4299c26";
	_http: Http = null;
	
	constructor() {
		super();
		this.resolveDependencies();
		
		console.log("ToDo app using ApiStorageStore", this._http);
	}
	
	resolveDependencies(): void {
		let injector = Injector.resolveAndCreate([
			HTTP_BINDINGS
		]);
		this._http = injector.get(Http);
	}

	loadList(): Array<TaskItem> {
		
		
		return new Array<TaskItem>();
	}
	
	saveList(): void {
		
	}
	
	clearList(): void {
		super.clearList();
		
	}
	
}

