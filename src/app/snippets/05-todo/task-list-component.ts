/// <reference path="../../../references.ts" />

import { Component, View, Input, Output, EventEmitter, NgFor, NgIf } from "angular2/angular2";
import { TaskItem } from "./models/task-item";
import { Command, CommandType } from "./models/command"
import { TaskComponent } from "./components/_task-component";
import { TaskBaseComponent } from "./components/task-base-component";
import { LocalStorageStore } from "./services/store/localstorage-store";

@Component({
	selector: "task-list"	
})

@View({
	template: `
		<style>
			.task-list {
				padding: 0;
			}
			.task-list li {
				list-style: none;
			}
		
			<!-- for the header column widths --> 
			${TaskBaseComponent.baseStyles}

			.task-list-line {
				padding:0;
			}
			.task-list-line-header {
				font-weight: bold;
			}
		</style>
		
		<h5>
			Your task list 
			(<span style='color:red' [inner-html]>{{getStorageEngine()}}</span>)
			<span *ng-if="_dataLocation.length > 0">(<a href="{{_dataLocation}}">remote Data Store</a>)</span>	
		</h5>
		
		<!-- header - separate component would be a little extreme! -->

		<ul class="task-list">
			<li>
				<ul class="task-list-line task-list-line-header">
					<li class="col0">Id</li>
					<li class="col1">&nbsp;</li>
					<li class="col2">Task description</li>
					<li class="col3">Completed?</li>
				</ul>
				<div class="clear"></div>
			</li>
			<li *ng-for="#t of tasks">
				<task [task]="t" (commander)="doCommand($event)"></task>
			</li>
		</ul>
	`,
	directives: [NgIf, NgFor, TaskComponent]
})

export class TaskListComponent {
	@Input() tasks: Array<TaskItem>;
	@Output() commander: EventEmitter<Command> = null;
	_engineType: string = "";
	_dataLocation: string = "";
	
	constructor(store: LocalStorageStore) {
		this.commander = new EventEmitter<Command>();
		this._engineType = store.storageType();
		this._dataLocation = store.storageLocation();
		//console.table(this.tasks);
	}
	
	getStorageEngine(): string {
		return this._engineType;
	}
	
	doCommand(cmd: Command) {
		// task-list doesn't care about this, so forward on
		this.commander.next(cmd);
	}
	
}

