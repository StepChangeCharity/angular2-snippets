/// <reference path="../../../../references.ts" />
import { Response } from 'angular2/http';

export class EditMode {
	static READ_ONLY: string = "READ_ONLY";
	static READ_WRITE: string = "READ_WRITE";
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

