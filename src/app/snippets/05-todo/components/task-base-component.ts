import { Component, View, EventEmitter, Input, Output, NgClass, NgIf, FORM_DIRECTIVES } from "angular2/angular2";
import { TaskItem, Command, CommandTypes, EditMode } from "../models";

export class BaseTaskComponent {
	
	// "task" will be initialised via AngularJS DI
	task: TaskItem;

	// "commander" is initialised in the constructor as EventEmitter is not 
	// created by Angular DI
	commander: EventEmitter;
	
	constructor() {
		this.commander = new EventEmitter();		
	}
	
	/// <summary>
	/// Sends a command to the parent/owning component about
	/// "something" that happened (e.g. task was saved).
	/// </summary>
	emitCommand(cmdType: string) {
		Command c = new Command(cmdType, this.task);
		
		this.commander.next(c);
	}
	
	/// <summary>
	/// Common styles used by inherited components
	/// </summary>
	static baseStyles: string = `
		button {
			cursor: pointer;
		}
		.task-list-line {
			list-style: none;				
		}
		.task-list-line li {
			float: left;
		}
		.task-list-line li.completed .task-label {
			text-decoration: line-through;
		}
	`;
	
}
