import { Component, View, EventEmitter, Input, Output, NgClass } from "angular2/angular2";
import { TaskItem, Command, CommandTypes } from "./models";

@Component({
	selector: "task-line"
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
				<button (click)="askForEdit()" [disabled]="!canEdit()">edit</button>
			</li>
			<li class="col2" [ng-class]="{completed: task.isDone}">
				<label>
					<span class="task-label ib">{{task.task}}</span>
					<input class="task-done" type="checkbox" [checked]="task.isDone" (change)="toggleDone()" />
				</label>
			</li>
		</ul>
		<div style="clear:both"></div>
	`,
	directives: [NgClass]
})

export class TaskComponent {
	@Input() task: TaskItem = null;
	@Output() commander: EventEmitter = null;
	
	constructor() {
		this.commander = new EventEmitter();
	}
	
	askForEdit() {
		Command c = new Command(CommandTypes.EDIT_TASK, this.task);
		
		this.commander.next(c);
	}
	
	toggleDone() {
		this.task.isDone = !this.task.isDone;
	}
	
	canEdit() {
		// can only edit incomplete tasks
		return !(this.task.isDone);
	}
	
}

