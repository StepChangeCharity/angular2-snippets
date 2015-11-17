/// <reference path="../../../references.ts" />

import { Component, View, Injector, Observable, EventEmitter } from "angular2/angular2";
import { TaskListComponent } from "./task-list-component";
import { Command, CommandType } from "./models/command";
import { TaskItem } from "./models/task-item";
import { LocalStorageStore } from "./services/store/localstorage-store";
import { ToasterComponent } from "./components/toaster-component";
import { CommsService } from "./services/comms-service"; 
import { ToasterType, Toaster } from "./models/toaster";

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
			<ol>
				<li>
					When using <i>Component Inheritance</i> use the <strong>inputs: ["xyz"]</strong> form
					for defining inputs &amp; outputs.
				</li>
				<li>
					When using the <strong>@Input ...</strong> approach you end up with two distinct variables
					- the one in your component, and one in the base (aka super) version.  This isn't what we want
					- using the <strong>inputs: ["sadf"]</strong> method the input is created via DI, and Angular
					in essence creates it in the super class (which is what we <i>do</i> want).
				</li>
				<li>
					In the <strong>ApiStorageStore</strong> model the class is annotated with
					<strong>@Injectable</strong>, but this isn't required elsewhere.  I <strong>think</strong>
					this is because it's a normal class, rather than something intrinsic to Angular2
					so you have to decorate it as Injectable.<br/>
					In addition I couldn't get the <strong>Http</strong> to inject normally and resorted
					to using <strong>Injector.resolveAndCreate</strong> - still can't work out why - if you 
					find out, please let me know!
				</li>
			</ol>

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
	store: LocalStorageStore;
	commsService: CommsService; 
	
	constructor(store: LocalStorageStore, comms: CommsService) {
		this.commsService = comms;
		this.store = store;

		// setup subscriptions to receive notifications from components in the app
		this.commsService.apiPipeline.toRx().subscribe( (cmd) => this.processCommand(cmd) );
		this.commsService.toasterPipeline.toRx().subscribe( (cmd) => this.processCommand(cmd) );
	}
	
	onInit() {
		// wait to load the list until all the subscribers are registered
		this.store.loadList();		
	}
	
	
	/**
	 * @desc Receives any messages from other components in the system and acts on them
	 *       (or forwards for attention elsewhere). 
	 */
	processCommand(cmd: Command) {
		let t: Toaster = null;
		
		switch (cmd.Type) {
			case CommandType.TaskGetAllStart:
				t = new Toaster(ToasterType.Warning, "Loading data .. this may take a while ...");
				this.commsService.toasterPipeline.next(t);
			break;
			case CommandType.TaskGetAllComplete:
				t = new Toaster(ToasterType.Success, "Data loaded ...");
				this.commsService.toasterPipeline.next(t);
			break;
			case CommandType.TaskGetAllError:
				t = new Toaster(ToasterType.Error, <string>cmd.Data);
				this.commsService.toasterPipeline.next(t);
			break;
		}

	}
	
	onLoadList(): void {
		this.store.loadList();
	}
	
	
	/**
	 * @desc Processes the output of a command from a task component (e.g. save the data) 
	 */
	doCommand(cmd: Command) {
		let task = <TaskItem>cmd.Data;
		
		switch (cmd.Type) {
			case CommandType.TaskEdit:
				// nothing to do
			break;
			case CommandType.TaskSave:
				this.store.saveTask(task);
			break;
		}
		
	} 
	
}