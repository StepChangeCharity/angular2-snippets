/// <reference path="../../../../references.ts" />

import { Component, View, EventEmitter, Input, Output, NgClass, NgIf, FORM_DIRECTIVES } from "angular2/angular2";
import { TaskViewComponent } from "./task-view-component";
import { TaskEditComponent } from "./task-edit-component";
import { Command, CommandType } from "../models/command";
import { TaskItem } from "../models/task-item";


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
	@Output() commander: EventEmitter<Command> = null;
	
	currMode: EditMode = EditMode.ReadOnly;

	constructor() {
		this.commander = new EventEmitter<Command>();
	}
	
	isViewRO() {
		return (this.currMode === EditMode.ReadOnly);
	}
	
	isViewRW() {
		return (this.currMode === EditMode.ReadWrite);
	}
		
	startEditing() {
		this.currMode = EditMode.ReadWrite;
	}
	
	finishEditing() {
		this.currMode = EditMode.ReadOnly;
	}
	
		
	
	doCommand(cmd: Command) {
		let bubbleUp: Boolean = false;		
				
		switch (cmd.Type) {
			case CommandType.TaskEdit:
				this.currMode = EditMode.ReadWrite;
			break;
			
			case CommandType.TaskSave:
				this.currMode = EditMode.ReadOnly;
				bubbleUp = true;
			break;
			
			case CommandType.TaskCompleteToggle:
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


enum EditMode {
	Empty,
	ReadOnly,
	ReadWrite
}
