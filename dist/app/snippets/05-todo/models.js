/// <reference path="../../../node_modules/angular2/typings/tsd.d.ts" />

System.register([], function(exports_1) {
    var EditMode, TaskItem, CommandTypes, Command;
    return {
        setters:[],
        execute: function() {
            EditMode = (function () {
                function EditMode() {
                }
                EditMode.READ_ONLY = "READ_ONLY";
                EditMode.READ_WRITE = "READ_WRITE";
                return EditMode;
            })();
            exports_1("EditMode", EditMode);
            TaskItem = (function () {
                function TaskItem(taskDescription, completed) {
                    if (completed === void 0) { completed = false; }
                    this.taskId = 1;
                    this.task = "";
                    this.createdOn = new Date();
                    this.modifiedOn = new Date();
                    this.isDone = false;
                    this.task = taskDescription;
                    this.isDone = completed;
                    this.taskId = TaskItem._currId++;
                }
                TaskItem._currId = 0;
                return TaskItem;
            })();
            exports_1("TaskItem", TaskItem);
            CommandTypes = (function () {
                function CommandTypes() {
                }
                CommandTypes.TASK_EDIT = "TASK_EDIT";
                CommandTypes.TASK_SAVE = "TASK_SAVE";
                CommandTypes.TASK_DELETE = "TASK_DELETE";
                CommandTypes.TASK_ARCHIVE = "TASK_ARCHIVE";
                CommandTypes.TASK_COMPLETE_TOGGLE = "TASK_COMPLETE_TOGGLE";
                return CommandTypes;
            })();
            exports_1("CommandTypes", CommandTypes);
            Command = (function () {
                function Command(type, data) {
                    this.Type = ""; // e.g. "TASK_EDIT"
                    this.Data = null;
                    this.Type = type;
                    this.Data = data;
                }
                return Command;
            })();
            exports_1("Command", Command);
        }
    }
});
//# sourceMappingURL=models.js.map