/// <reference path="../../../references.ts" />

import { Component, View, Injector } from "angular2/angular2";
import { TaskListComponent } from "./task-list-component";
import { TaskItem, CommandTypes, Command } from "./models";
import { MemoryStore } from "./services/store/store";
import { ToasterComponent } from "./components/toaster-component";

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
			
			<button (click)="onSave()">Save</button>
			<button (click)="onClear()">Clear</button>
			<button (click)="onDefaults()">Default List</button>
		</div>
	`,
	directives: [TaskListComponent, ToasterComponent]
})

export class ToDoApp {
	store: MemoryStore;
	
	constructor(store: MemoryStore) {
		this.store = store;
		this.store.loadList();
		if (this.store.data.length === 0) {
			// use the default list
			this.store.makeDefaultList();
			this.store.loadList();
		}
	}
	
	onSave(): void {
		this.store.saveList();
	}
	
	onClear(): void {
		this.store.clearList();
	}
	
	onDefaults(): void {
		this.store.makeDefaultList();
	}

	doCommand(cmd: Command) {
		let task = <TaskItem>cmd.Data;
		
		if (cmd.Type === CommandTypes.TASK_EDIT) {
			console.log("BOOM!");
			// TODO: add a edit/add line
			// transfer the task over when editing (perhaps disable the row too), put it in a red background or something
			// replace existing data (I suspect it's a reference of data flying around so we won't need to replace it in the list)
			//		- though will need to add to the array when we're doing an "add" command
		}
		
		
	} 
	
}