/// <reference path="../../../../../references.ts" />

import { Injectable } from 'angular2/angular2';
import { Observable } from 'angular2/core';
import { IStore } from "./_istore"
import { BaseStore } from "./_base-store"
import { TaskItem } from "../../models/task-item";
import { Command, CommandType } from "../../models/command";
import { CommsService } from "../comms-service";

/**
 * LocalStorageStore:
 * An IStore store using local storage for persistence.
 */
@Injectable()
export class LocalStorageStore extends BaseStore implements IStore {

	_comms: CommsService = null;

	constructor(cs: CommsService) {
		super();
		this._comms = cs;
		console.log("ToDo app using LocalStorageStore");
		this.monitorChanges();
	}


	storageType(): string {
		return "Local Storage";
	}

	storageLocation(): string {
		return "";
	}

	monitorChanges(): void {
		Observable.fromEvent(window, "storage")
			.subscribe((storageEvent) => {
				console.log(storageEvent);
			})
		;
	}
	
	
	loadList(): Array<TaskItem> {
		let storedData: Array<TaskItem> = new Array<TaskItem>();
		
		for (var i=0; i < window.localStorage.length; i++) {
			let key = window.localStorage.key(i);
			let json = window.localStorage.getItem(key);
			let currTask = JSON.parse(json);
				
			storedData.push(currTask);
		}
		
		this.data = storedData;
		
		return this.data;
	}
	
	
	makeList(): void {
		super.makeList();
		
		// and save all
		this.data.forEach((task: TaskItem) => {
			this.saveTask(task);
		});
	}


	saveTask(task: TaskItem): void {
		super.saveTask(task);
		
		let json = JSON.stringify(task);
		window.localStorage.setItem( task.Id.toString(), json );
	}

}

