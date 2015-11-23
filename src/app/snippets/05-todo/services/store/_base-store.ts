import { TaskItem } from "../../models/task-item";

/**
 * BaseStore:
 * Provides the underlying [memory] data store for the items
 * in the ToDo list.
 */
export class BaseStore {
	protected _data: Array<TaskItem> = null;
	
	constructor() {
	}
	
	public get data(): Array<TaskItem> {
		return this._data;
	}
	
	public set data(value: Array<TaskItem>) {
		this._data = value;
	}
	
	saveTask(task: TaskItem): void {
		// find where this "Id" is in the array
		let ndx: number = this.findIndexOf(task);
		// and update it with the new task
		this.data[ndx] = task;
	}
	
	makeList(): void {
		this._data = [
			new TaskItem("Do big shop!"),
			new TaskItem("Make tea, milkly, no sugar please!"),
			new TaskItem("Cats eat mice for power")			
		];
	}
		
	/**
	* @desc Convenience method to find a task in an array by it's "Id".
	*/
	findById(id: number): TaskItem {
		let foundTask = this.data.find( (t) => {
			return t.Id === id;
		});
		
		return foundTask;
	}
	
	findIndexOf(thisTask: TaskItem): number {
		let foundIndex: number = -1;
		this.data.forEach((item: TaskItem, index: number) => {
			if (thisTask.Id === item.Id)
				foundIndex = index;
		});
		return foundIndex;
	}
	
	

		
}

