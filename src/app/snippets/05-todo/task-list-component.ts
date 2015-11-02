import { Component, View, Input, Output, EventEmitter, NgFor } from "angular2/angular2";
import { TaskItem } from "./models";
import { TaskComponent } from "./task-component";

@Component({
	selector: "task-list"	
})

@View({
	template: `
		<style>
			.task-list {
				list-style: none;
			}
		</style>
		
		<h5>Your task list</h5>
		<ul class="task-list">
			<li *ng-for="#t of tasks">
				<task-line [task]="t" (commander)="doCommand($event)"></task-line>
			</li>
		</ul>
	`,
	directives: [NgFor, TaskComponent]
})

export class TaskListComponent {
	@Input() tasks: Array<TaskItem>;
	@Output() commander: EventEmitter: null;
	
	constructor() {
		this.commander = new EventEmitter();
	}
	
	doCommand(cmd) {
		// task-list doesn't care about this, so forward on
		this.commander.next(cmd);
	}
	
}

