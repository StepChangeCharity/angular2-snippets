import { Component, View, EventEmitter, Input, Output, NgClass, NgIf, FORM_DIRECTIVES } from "angular2/angular2";
import { BaseTaskComponent } from "./base-task-component";
import { TaskItem, Command, CommandTypes, EditMode } from "../models";

@Component({
	selector: "task-view"
})

@View({
	template: `
		<style>
			${BaseTaskComponent.baseStyles}

			.task-list-line .col1 { width: 3em; }
			.task-list-line .col2 .task-label { width: 10em; }
			.task-list-line .col2 .task-done { width: 2em; }			
		</style>
		
		<ul class="task-list-line">
			<li class="col1">
				<button (click)="editTask()" [disabled]="!canEdit()">edit</button>
			</li>
			<li class="col2" [ng-class]="{completed: task.isDone}">
				<label>
					<span class="task-label ib">{{task.task}}</span>
					<input class="task-done" type="checkbox" [checked]="task.isDone" (change)="toggleDone()" />
				</label>
			</li>
		</ul>		

	`,
	directives: [NgClass, NgIf, FORM_DIRECTIVES]
})



export class TaskViewComponent extends BaseTaskComponent {
	@Input() task: TaskItem = null;
	@Output() commander: EventEmitter = null;

	constructor() {
		this.commander = new EventEmitter();
	}

	toggleDone() {
		this.task.isDone = !this.task.isDone;
		
		super.emitCommand(CommandTypes.TASK_COMPLETE_TOGGLE);
	}

	editTask() {
		super.emitCommand(CommandTypes.TASK_EDIT);
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