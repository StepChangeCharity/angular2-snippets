/// <reference path="../../../../../references.ts" />

import { Injectable } from 'angular2/angular2';
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

	static STORE_KEY: string = "todo::list";
	_comms: CommsService = null;

	constructor(cs: CommsService) {
		super();
		this._comms = cs;
		this._comms.apiPipeline.toRx().subscribe( (c) => {
			this.processCommand(c);
		});
		console.log("ToDo app using LocalStorageStore");
	}

	processCommand(c: Command): void {
		switch (c.Type) {
			case CommandType.TaskCompleteToggle:
				this.data = <Array<TaskItem>> c.Data;
			break;
		}
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

	storageType(): string {
		return "Local Storage";
	}


	saveTask(task: TaskItem): void {
		let json = JSON.stringify(this.data);
		window.localStorage.setItem( LocalStorageStore.STORE_KEY, json );
	}

}

