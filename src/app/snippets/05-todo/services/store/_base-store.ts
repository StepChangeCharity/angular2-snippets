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
		let tsk = TaskItem.findById(this.data, task.Id);

		// Id remains unchanged
		tsk.isDone = task.isDone;
		tsk.task = task.task;
	}
	
	makeList(): void {
		this._data = [
			new TaskItem("Do big shop!"),
			new TaskItem("Make tea, milkly, no sugar please!"),
			new TaskItem("Cats eat mice for power")			
		];
	}
		
}

