/// <reference path="../../../references.ts" />

import { Component, View, EventEmitter, Input, Output, NgClass, NgIf, FORM_DIRECTIVES } from "angular2/angular2";
import { TaskViewComponent } from "./task-view-component";
import { TaskEditComponent } from "./task-edit-component";
import { TaskItem, Command, CommandTypes, EditMode } from "../models";

@Component({
	selector: "task"	
})

@View({
	template: `
		<task-view *ng-if="isViewRO()" [task]="task" (commander)="doCommand($event)"></task-view>
		<task-edit *ng-if="isViewRW()" [task]="task" (commander)="doCommand($event)"></task-edit>

		<div class="clear"></div>
	`,
	directives: [NgIf, TaskViewComponent, TaskEditComponent]
})

export class TaskComponent {
	@Input() task: TaskItem;
	@Output() commander: EventEmitter = null;
	
	currMode: string = EditMode.READ_ONLY;

	constructor() {
		this.commander = new EventEmitter();
	}
	
	isViewRO() {
		return (this.currMode === EditMode.READ_ONLY);
	}
	
	isViewRW() {
		return (this.currMode === EditMode.READ_WRITE);
	}
		
	startEditing() {
		this.currMode = EditMode.READ_WRITE;
	}
	
	finishEditing() {
		this.currMode = EditMode.READ_ONLY;
	}
	
		
	
	doCommand(cmd) {
		let bubbleUp: Boolean = false;		
		
		switch (cmd.Type) {
			case CommandTypes.TASK_EDIT:
				this.currMode = EditMode.READ_WRITE;
			break;
			
			case CommandTypes.TASK_SAVE:
				this.currMode = EditMode.READ_ONLY;
				bubbleUp = true;
			break;
			
			case CommandTypes.TASK_COMPLETE_TOGGLE:
				bubbleUp = true;
			break;
			
		}
		
		console.log("task::event", `bubbleUp=${bubbleUp}`, cmd.Type, cmd.Data);
		
		if (bubbleUp) {
			// tell parent about this event
			this.commander.next(cmd);
		}
	}
	
}

