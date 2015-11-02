/// <reference path="../../../typings/tsd.d.ts" />



export class TaskItem {
	static _currId: integer = 0;
	
	taskId: integer = 0;
	task: string = "";
	createdOn: Date = new Date();
	modifiedOn: Date = new Date();
	isDone: boolean = false;
	
	constructor(taskDescription: string, completed: boolean = false) {
		this.task = taskDescription;
		this.isDone = completed;
		this.taskId = this._currId++;
	}
}


export class CommandTypes {
	static EDIT_TASK: string = "EDIT_TASK";
	
	
}

export class Command {
	Type: string = "";		// e.g. "EDIT_TASK"
	Data: object = null;
	
	constructor(type: string, data: object) {
		this.Type = type;
		this.Data = data;
	}
}