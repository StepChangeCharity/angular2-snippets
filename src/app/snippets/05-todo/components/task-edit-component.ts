import { Component, View, EventEmitter, Input, Output, NgClass, NgIf, FORM_DIRECTIVES } from "angular2/angular2";
import { BaseTaskComponent } from "./base-task-component";
import { TaskItem, Command, CommandTypes, EditMode } from "../models";

@Component({
	selector: "task-edit"
})

@View({
	template: `
		<style>
			.task-list-line {
				list-style: none;				
			}
			.task-list-line li {
				float: left;
			}
			.task-list-line li.completed .task-label {
				text-decoration: line-through;
			}
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



export class TaskEditComponent {
	@Input() task: TaskItem = null;
	@Output() commander: EventEmitter = null;

	currMode: string = EditMode.READ_ONLY;

	constructor() {
		this.commander = new EventEmitter();
	}

	isReading() {
		return (this.currMode === EditMode.READ_ONLY);
	}
	isEditing() {
		return (this.currMode === EditMode.READ_WRITE);
	}

	toggleDone() {
		this.task.isDone = !this.task.isDone;
	}



		
	startEditing() {
		this.currMode = EditMode.READ_WRITE;
	}
	
	finishEditing() {
		this.currMode = EditMode.READ_ONLY;
	}
	
	editTask() {
		this.startEditing();
		
		Command c = new Command(CommandTypes.TASK_EDIT, this.task);
		
		this.commander.next(c);
	}
	
	saveTask() {
		this.finishEditing();
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