/// <reference path="../../../../references.ts" />
import { Response } from 'angular2/http';

/** @class
	* @name TaskItem
	* @desc Encapsulates a "task" on the ToDo list
	*/
export class TaskItem {
	
/** @member
	* @name _currId
	* @desc Tracks the next task id (mimics identity columns)
	*/
	static _currId: number = 0;
	
	Id: number = 1;
	task: string = "";
	isDone: boolean = false;
	
	constructor(taskDescription: string, completed: boolean = false) {
		this.task = taskDescription;
		this.isDone = completed;
		this.Id = TaskItem._currId++;
	}
	
	
	/**
	* @desc Maps an object (prob derived via JSON) to a typed TaskItem object
	*/
	static taskItemMapper(item: Object): TaskItem {
		// TODO: This might be improved by using a JSON revivier? 

		let newTask: TaskItem = new TaskItem("", false);
		
		newTask.Id = <number>item["Id"];
		newTask.task = <string>item["task"];
		newTask.isDone = <boolean>(item["isDone"] === "TRUE");

		return newTask;
	}
	

	/**
	* @desc Maps an array of objects (prob derived via JSON) to a typed array of TaskItem objects
	*/
	static taskItemsMapper(items: Array<Object>): Array<TaskItem> {
		let newTasks: Array<TaskItem> = new Array<TaskItem>();
		
		items.forEach((value, index, array) => {
			let newItem = TaskItem.taskItemMapper(value);

			newTasks.push(newItem);
		});
		
		return newTasks;
	}


	/**
	* @desc Compares two tasks to see if they the same
	* (note this is the relevant data, not the two objects)
	*/
	static equals(task1: TaskItem, task2: TaskItem): boolean {
		if (task1.isDone !== task2.isDone)
			return false;
		if (task1.task !== task2.task)
			return false;
		if (task1.Id !== task1.Id)
			return false;
			
		// all properties equal ..
		return true;
	}
	
	
	/**
	* @desc Compares two lists of TaskItems to see if the data is the same
	*/
	static listEquals(list1: Array<TaskItem>, list2: Array<TaskItem>): boolean {
		let isEqual: boolean = true;
		
		if (list1.length !== list2.length)
			isEqual = false;
		else {
			list1.forEach((t1) => {
				let t2 = list2.find( (t) => {
					return t.Id === t1.Id;
				});				
				
				if (!TaskItem.equals(t1, t2)) 
					isEqual = false;
			});
		}
		
		return isEqual;
	}
	
}

