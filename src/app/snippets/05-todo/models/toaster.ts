/// <reference path="../../../../references.ts" />

/**
* @desc Types of toasts that are supported
*/
export enum ToasterType {
	Empty,
	Success,
	Warning,
	Error
}


/**
* @desc Encapsulates a toast (i.e. notification) that can be passed around the system 
*/
export class Toaster {
	constructor(type: ToasterType, msg: string) {
		this.type = type;
		this.message = msg;
	}
	
	type: ToasterType;
	
	message: string;	
}

