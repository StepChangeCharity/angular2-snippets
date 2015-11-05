import { Injectable } from 'angular2/angular2';
import { TaskItem, CommandTypes, Command } from "../../models";

export interface IStore {
	
	saveList(items: Array<TaskItem>): void;
	
	loadList(): Array<TaskItem>;
	
	makeDefaultList(): void;
}

class BaseStore {
	protected _data: Array<TaskItem> = null;
	
	public get data(): Array<TaskItem> {
		return this._data;
	}
	
	public set data(value: Array<TaskItem>) {
		this._data = value;
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

export class MemoryStore extends BaseStore implements IStore {

	constructor() {
		super();
		console.log("ToDo app using MemoryStore");
	}

	loadList(): Array<TaskItem> {
		// default store has no persistence, just use the default list
		super.makeDefaultList();
		
		return this._data;
	}
	
	saveList(items: Array<TaskItem>): void {
		// no saving on in-memory version
		this._data = items;
	}

	makeDefaultList(): void {
		super.makeDefaultList();
	}
	
}

export class LocalStorageStore extends BaseStore implements IStore {

	static STORE_KEY: string = "todo::list";

	constructor() {
		super();
		console.log("ToDo app using LocalStorage");
	}

	loadList(): Array<TaskItem> {
		let json = window.localStorage.getItem( LocalStorageStore.STORE_KEY );
		if (json) {
			this._data = JSON.parse(json);
		}
		return new Array<TaskItem>();
	}

	saveList(items: Array<TaskItem>): void {
		// update local store
		this._data = items;
		
		// and save to local storage
		let json = JSON.stringify(items);
		window.localStorage.setItem(LocalStorageStore.STORE_KEY, json);
	}

	makeDefaultList(): void {
		return super.makeDefaultList();
	}


}

