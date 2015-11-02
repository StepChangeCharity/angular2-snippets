import { Component, View, EventEmitter, Input, Output, NgClass, NgIf, FORM_DIRECTIVES } from "angular2/angular2";

export class BaseTaskComponent {
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

	
}
