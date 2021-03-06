/// <reference path="../../../../../references.ts" />

import { Injectable } from 'angular2/angular2';
import { Observable } from 'angular2/core';
import { IStore } from "./_istore"
import { BaseStore } from "./_base-store"
import { TaskItem } from "../../models/task-item";
import { Toaster, ToasterType } from "../../models/toaster";
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
			.subscribe((storageEvent: any) => {
				if (this.isIE()) {
					console.log("Internet Explorer notifications are disabled in this noddy app (coz IE is rubbush!)");
					return;
				}
				
				// TODO: Change this to a flatten or reduce type thing (better illustration)
				// Perhaps took at the throttling stuff so we can show multiple edits in the same toast?
				let json = storageEvent.newValue;
				let changedTask: TaskItem = <TaskItem>JSON.parse(json);
				
				this.saveTask(changedTask);		
				
				// And notify client the data has changed		
				let t = new Toaster(ToasterType.Success, `Task ${changedTask.Id} has been updated.`)
				this._comms.toasterPipeline.next(t);
			})
		;
	}

	isIE(): boolean {
		let ua: string = navigator.userAgent;
		if (ua.indexOf("Trident") > 0 || ua.indexOf("MSIE") > 0)
			return true;
			
		return false;
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
		// update the UI
		super.saveTask(task);
		
		let json = JSON.stringify(task);
		window.localStorage.setItem( task.Id.toString(), json );
	}

}

