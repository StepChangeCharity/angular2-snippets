/// <reference path="../../../../references.ts" />

import { Component, View, EventEmitter, Input, Output, NgClass, NgIf, FORM_DIRECTIVES } from "angular2/angular2";
import { Command, CommandType } from "../models/command";
import { TaskItem } from "../models/task-item";

export class TaskBaseComponent {
	
	// "task" will be initialised via AngularJS DI
	task: TaskItem;

	// "commander" is initialised in the constructor as EventEmitter is not 
	// created by Angular DI
	commander: EventEmitter<Command> = null;
	
	constructor() {
		this.commander = new EventEmitter<Command>();		
	}
	
	/// <summary>
	/// Sends a command to the parent/owning component about
	/// "something" that happened (e.g. task was saved).
	/// </summary>
	emitCommand(cmdType: CommandType) {
		var c: Command = new Command(cmdType, this.task);
		
		this.commander.next(c);
	}
	
	/// <summary>
	/// Common styles used by inherited components
	/// </summary>
	static baseStyles: string = `
		.task-list-line {
			list-style: none;				
			padding: 0;
		}
		.task-list-line li {
			float: left;
		}

		.task-list-line button {
			cursor: pointer;
		}
		.task-list-line input[type="text"] {
			width: 100%;
		}

		.task-list-line li.completed .task-label {
			text-decoration: line-through;
		}
		
		.task-list-line .col0 { width: 2em;  }
		.task-list-line .col1 { width: 3em;  }
		.task-list-line .col2 { width: 20em; }
		.task-list-line .col3 { width: 2em;  }		
	`;
	
}
