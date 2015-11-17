/// <reference path="../../../../references.ts" />

/** @enum
	* @name CommandType
	* @desc Specifies what commands can be sent through the system
	*       - i.e. communication that _some_ action has occured
	*/
export enum CommandType {
	Empty,
	TaskEdit,
	TaskSave,
	TaskDelete,
	TaskArchive,
	TaskCompleteToggle,
	TaskGetAllStart,
	TaskGetAllComplete,
	TaskGetAllError
}


/** @class
	* @name Command
	* @desc Used to communication _some_thing_ has happended in the system 
	* (cross component communication basically)
	*/
export class Command {
	Type: CommandType = CommandType.Empty;		// e.g. "TASK_EDIT"
	Data: Object = null;
	
	constructor(type: CommandType, data: Object) {
		this.Type = type;
		this.Data = data;
	}
}
