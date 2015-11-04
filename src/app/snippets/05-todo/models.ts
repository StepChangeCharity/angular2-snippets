/// <reference path="../../../node_modules/angular2/typings/tsd.d.ts" />

export class EditMode {
	static READ_ONLY: string = "READ_ONLY";
	static READ_WRITE: string = "READ_WRITE";
}


export class TaskItem {
	static _currId: number = 0;
	
	taskId: number = 1;
	task: string = "";
	createdOn: Date = new Date();
	modifiedOn: Date = new Date();
	isDone: boolean = false;
	
	constructor(taskDescription: string, completed: boolean = false) {
		this.task = taskDescription;
		this.isDone = completed;
		this.taskId = TaskItem._currId++;
	}
}


export class CommandTypes {
	static TASK_EDIT: string = "TASK_EDIT";
	static TASK_SAVE: string = "TASK_SAVE";
	static TASK_DELETE: string = "TASK_DELETE";
	static TASK_ARCHIVE: string = "TASK_ARCHIVE";
	static TASK_COMPLETE_TOGGLE: string = "TASK_COMPLETE_TOGGLE";	
	
}

export class Command {
	Type: string = "";		// e.g. "TASK_EDIT"
	Data: Object = null;
	
	constructor(type: string, data: Object) {
		this.Type = type;
		this.Data = data;
	}
}