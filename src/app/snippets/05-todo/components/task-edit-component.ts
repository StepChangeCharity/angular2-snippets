/// <reference path="../../../references.ts" />

import { Component, View, EventEmitter, Input, Output, NgClass, NgIf, FORM_DIRECTIVES } from "angular2/angular2";
import { TaskBaseComponent } from "./task-base-component";
import { TaskItem, Command, CommandTypes, EditMode } from "../models";

@Component({
	selector: "task-edit",

	// _Must_ use this method of inputs/outputs when using component inheritance 
	inputs: ["task"],
	outputs: ["commander"]
})

@View({
	template:`
		<style>
			${TaskBaseComponent.baseStyles}
		</style>
		
		<ul class="task-list-line">
			<li class="col1">
				<button (click)="saveTask()">save</button>
			</li>
			<li class="col2" [ng-class]="{completed: task.isDone}">
				<label>
					<input type="text" [(ng-model)]="task.task" />
				</label>
			</li>
		</ul>
	`,
	directives: [NgClass, NgIf, FORM_DIRECTIVES]
})

export class TaskEditComponent extends TaskBaseComponent {

	constructor() {
		super();
	}

	saveTask() {
		super.emitCommand(CommandTypes.TASK_SAVE);
	}
	
}