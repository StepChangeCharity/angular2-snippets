import { TaskItem } from "../../models/task-item";

/**
 * Specifies how a storage mechanism should be implemented
 */
export interface IStore {
	/** @function
	 * @name saveTask
	 * @desc Saves a single task to the persistence store
	 */
	saveTask(task: TaskItem): void;
	
	/** @function 
	 * @name loadList
	 * @desc Loads the list from whatever persistence mechanism is being implemented.
	*/
	loadList(): Array<TaskItem>;
	
	/** @function 
	 * @name makeList
	 * @desc Makes a default list to work with
	*/
	makeList(): void;
	
	/** @function 
	 * @name storageType
	 * @desc Reports the type of storage engine being used.
	*/
	storageType(): string;
	
}


