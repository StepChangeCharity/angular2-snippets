/// <reference path="../../../references.ts" />

import { Component, View, Injector, Observable, EventEmitter } from "angular2/angular2";
import { TaskListComponent } from "./task-list-component";
import { TaskItem, CommandTypes, Command } from "./models";
import { MemoryStore } from "./services/store/store";
import { ToasterComponent } from "./components/toaster-component";
import { CommsService } from "./services/comms-service"; 
import { ToasterTypes, Toaster } from "./models"; 


@Component({
	selector: "todo-app"
})

@View({
	template: `
		<div class="left-pane">
			<h2>ToDo Application</h2>
			
			<p>
				Brings together key concepts for building Angular2 apps, including:			
			</p>
			<ul>
				<li>Breaking down an app into components</li>
				<li>Component inheritance (and possible approach to component style inhertiance)</li>
				<li>Using models</li>
				<li>Component communication with inputs &amp; outputs</li>
				<li>Using a [root] component orchestrator (for communication)</li>
				<li>View/Edit mode handling</li>
				<li>Interfaces</li>
			</ul>

			<h3>Issues - Component Inheritance</h3>
			<p>
				When using <i>Component Inheritance</i> use the <strong>inputs: ["xyz"]</strong> form
				for defining inputs &amp; outputs.
			</p>
			<p>
				When using the <strong>@Input ...</strong> approach you end up with two distinct variables
				- the one in your component, and one in the base (aka super) version.  This isn't what we want
				- using the <strong>inputs: ["sadf"]</strong> method the input is created via DI, and Angular
				in essence creates it in the super class (which is what we <i>do</i> want).
			</p>

			<h3>Resources</h3>
			<p>n/a</p>
		</div>
		<div class="right-pane">
			<toaster></toaster>			
			<h3>Snippet</h3>
			<hr/>
			
			<task-list [tasks]="store.data" (commander)="doCommand($event)"></task-list>
			
			<button (click)="onLoadList()">Load List</button>
		</div>
	`,
	directives: [TaskListComponent, ToasterComponent]
})

export class ToDoApp {
	store: MemoryStore;
	commsService: CommsService; 
	
	constructor(store: MemoryStore, comms: CommsService) {
		this.commsService = comms;
		this.commsService.apiPipeline.toRx().subscribe( (cmd) => this.processCommand(cmd) );
		this.commsService.toasterPipeline.toRx().subscribe( (cmd) => this.processCommand(cmd) );
		this.store = store;
	}
	
	onInit() {
		// wait to load the list until all the subscribers are registered
		this.store.loadList();		
	}
	
	processCommand(cmd: Command) {
		let t: Toaster = null;
		
		switch (cmd.Type) {
			case CommandTypes.TASK_GETALL_START:
				t = new Toaster(ToasterTypes.TOAST_WARNING, "Loading data .. this may take a while ...");
				this.commsService.toasterPipeline.next(t);
			break;
			case CommandTypes.TASK_GETALL_COMPLETE:
				t = new Toaster(ToasterTypes.TOAST_SUCCESS, "Data loaded ...");
				this.commsService.toasterPipeline.next(t);
			break;
			case CommandTypes.TASK_GETALL_ERROR:
				t = new Toaster(ToasterTypes.TOAST_ERROR, <string>cmd.Data);
				this.commsService.toasterPipeline.next(t);
			break;
		}

	}
	
	onLoadList(): void {
		this.store.loadList();
	}
	
	doCommand(cmd: Command) {
		let task = <TaskItem>cmd.Data;
		
		switch (cmd.Type) {
			case CommandTypes.TASK_EDIT:
				// nothing to do
			break;
			case CommandTypes.TASK_SAVE:
				this.store.saveTask(task);
			break;
		}
		
	} 
	
}