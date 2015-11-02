import { Component, View } from "angular2/angular2";
import { TaskListComponent } from "./task-list-component";
import { TaskItem, CommandTypes, Command } from "./models";

@Component({
	selector: "todo-app"
})

@View({
	template: `
		<h2>ToDo Application</h2>

		<task-list [tasks]="masterList" (commander)="doCommand($event)"></task-list>
	`,
	directives: [TaskListComponent]
})

export class ToDoApp {
	masterList: Array<TaskItem>;
	
	constructor() {
		this.createStarterList();
	}
	
	
	createStarterList() {
		this.masterList = [
			new TaskItem("Do big shop"),
			new TaskItem("Make tea", true),
			new TaskItem("Eat mice with sugar"),
		];		
		
		//console.table(this.masterList);
	}
	
	doCommand(cmd) {
		if (cmd.Type === CommandTypes.TASK_EDIT) {
			console.log("BOOM!");
			// TODO: add a edit/add line
			// transfer the task over when editing (perhaps disable the row too), put it in a red background or something
			// replace existing data (I suspect it's a reference of data flying around so we won't need to replace it in the list)
			//		- though will need to add to the array when we're doing an "add" command
		}
	} 
	
}