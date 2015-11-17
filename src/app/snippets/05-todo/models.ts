/// <reference path="../../../references.ts" />
import { Response } from 'angular2/http';

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
	
	static TaskItemMapper(item: Object): TaskItem {
		// TODO: This might be improved by using a JSON revivier? 

		let newTask: TaskItem = new TaskItem("", false);
		
		newTask.createdOn = <Date>item["createdOn"];
		newTask.modifiedOn = <Date>item["modifiedOn"];
		newTask.taskId = <number>item["taskId"];
		newTask.task = <string>item["task"];
		newTask.isDone = <boolean>(item["isDone"] === "TRUE");

		return newTask;
	}
	
	static TaskItemsMapper(items: Array<Object>): Array<TaskItem> {
		let newTasks: Array<TaskItem> = new Array<TaskItem>();
		
		items.forEach((value, index, array) => {
			let newItem = TaskItem.TaskItemMapper(value);

			newTasks.push(newItem);
		});
		
		return newTasks;
	}
	
}


export class CommandTypes {
	static TASK_EDIT: string = "TASK_EDIT";
	static TASK_SAVE: string = "TASK_SAVE";
	static TASK_DELETE: string = "TASK_DELETE";
	static TASK_ARCHIVE: string = "TASK_ARCHIVE";
	static TASK_COMPLETE_TOGGLE: string = "TASK_COMPLETE_TOGGLE";
	static TASK_GETALL_START: string = "TASK_GETALL_START";
	static TASK_GETALL_COMPLETE: string = "TASK_GETALL_COMPLETE";
	static TASK_GETALL_ERROR: string = "TASK_GETALL_ERROR";
}

export class Command {
	Type: string = "";		// e.g. "TASK_EDIT"
	Data: Object = null;
	
	constructor(type: string, data: Object) {
		this.Type = type;
		this.Data = data;
	}
}

export class ToasterTypes {
	static TOAST_SUCCESS: string = "TOAST_SUCCESS";
	static TOAST_WARNING: string = "TOAST_WARNING";
	static TOAST_ERROR: string = "TOAST_ERROR";
}

export class Toaster {
	constructor(type: string, msg: string) {
		this.type = type;
		this.message = msg;
	}
	
	// "success" | "warning" | "error"
	type: string;
	
	message: string;	
}

