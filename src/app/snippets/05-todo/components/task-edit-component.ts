import { Component, View, EventEmitter, Input, Output, NgClass, NgIf, FORM_DIRECTIVES } from "angular2/angular2";
import { BaseTaskComponent } from "./task-base-component";
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
			${BaseTaskComponent.baseStyles}

			.task-list-line .col1 { width: 3em; }
			.task-list-line .col2 .task-label { width: 10em; }
			.task-list-line .col2 .task-done { width: 2em; }			
		</style>
		
		<ul class="task-list-line">
			<li class="col1">
				<button (click)="saveTask()">save</button>
			</li>
			<li class="col2" [ng-class]="{completed: task.isDone}">
				<label>
					<input type="textbox" [(ng-model)]="task.task" />
				</label>
			</li>
		</ul>
	`,
	directives: [NgClass, NgIf, FORM_DIRECTIVES]
})

export class TaskEditComponent extends BaseTaskComponent {

	constructor() {
		super();
	}

	saveTask() {
		super.emitCommand(CommandTypes.TASK_SAVE);
	}
	
}