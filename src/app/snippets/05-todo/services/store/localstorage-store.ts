import { IStore } from "./_istore"
import { BaseStore } from "./_base-store"
import { TaskItem } from "../../models/task-item";

/**
 * LocalStorageStore:
 * An IStore store using local storage for persistence.
 */
export class LocalStorageStore extends BaseStore implements IStore {

	static STORE_KEY: string = "todo::list";

	constructor() {
		super();
		console.log("ToDo app using LocalStorageStore");
	}

	loadList(): Array<TaskItem> {
		let json = window.localStorage.getItem( LocalStorageStore.STORE_KEY );
		 
		if (json) {
			this.data = JSON.parse(json);
		} else	{
			this.data = new Array<TaskItem>();
		}
		
		return this.data;
	}

	saveTask(task: TaskItem): void {
		let json = JSON.stringify(this.data);
		window.localStorage.setItem( LocalStorageStore.STORE_KEY, json );
	}

}

