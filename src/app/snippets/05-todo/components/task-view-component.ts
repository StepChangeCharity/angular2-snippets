/// <reference path="../../../../references.ts" />

import { Component, View, EventEmitter, Input, Output, NgClass, NgIf, FORM_DIRECTIVES } from "angular2/angular2";
import { TaskBaseComponent } from "./task-base-component";
import { TaskItem, Command, CommandTypes, EditMode } from "../models/models";

@Component({
	selector: "task-view",

	// _Must_ use this method of inputs/outputs when using component inheritance 
	inputs: ["task"],
	outputs: ["commander"]
})

@View({
	template: `
		<style>
			${TaskBaseComponent.baseStyles}
		</style>
		
		<ul class="task-list-line">
			<li class="col0">{{task.taskId}}</li>
			<li class="col1">
				<button (click)="editTask()" [disabled]="!canEdit()">edit</button>
			</li>
			<li [ng-class]="{completed: task.isDone}">
				<label>
					<span class="col2 task-label ib">{{task.task}}</span>
					<input class="col3 task-done" type="checkbox" [checked]="task.isDone" (change)="toggleDone()" />
				</label>
			</li>
		</ul>		

	`,
	directives: [NgClass, NgIf, FORM_DIRECTIVES]
})

export class TaskViewComponent extends TaskBaseComponent {

	constructor() {
 		super();		
	}

	toggleDone() {
		this.task.isDone = !this.task.isDone;
		
		this.emitCommand(CommandTypes.TASK_COMPLETE_TOGGLE);
	}

	editTask() {
		this.emitCommand(CommandTypes.TASK_EDIT);
	}
	
	canEdit() {
		let canBeEdited = true;
		
		if (this.task.isDone) {
			// can only edit incomplete tasks
			canBeEdited = false;
		}
		
		return canBeEdited;
	}
	
}