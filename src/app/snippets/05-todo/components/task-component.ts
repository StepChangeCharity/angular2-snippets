import { Component, View, EventEmitter, Input, Output, NgClass, NgIf, FORM_DIRECTIVES } from "angular2/angular2";
import { TaskViewComponent } from "./task-view-component";
import { TaskEditComponent } from "./task-edit-component";

@Component({
	selector: "task"	
})

@View({
	template: `
		<task-view [task]="task"></task-view>
		<task-edit [task]="task"></task-edit>

		<div class="clear"></div>
	`,
	directives: [TaskViewComponent, TaskEditComponent]
})

export class TaskComponent {
	@Input() task: TaskItem;
	@Output() commander: EventEmitter = null;
	
	constructor() {
		this.commander = new EventEmitter();
	}
	
	commandBubbler(cmd) {
		// task line doesn't care about this, so just bubble up
		this.commander.next(cmd);
	}
	
}

