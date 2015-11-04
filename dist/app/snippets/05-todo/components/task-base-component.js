System.register(["angular2/angular2", "../models"], function(exports_1) {
    var angular2_1, models_1;
    var TaskBaseComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (models_1_1) {
                models_1 = models_1_1;
            }],
        execute: function() {
            TaskBaseComponent = (function () {
                function TaskBaseComponent() {
                    this.commander = new angular2_1.EventEmitter();
                }
                /// <summary>
                /// Sends a command to the parent/owning component about
                /// "something" that happened (e.g. task was saved).
                /// </summary>
                TaskBaseComponent.prototype.emitCommand = function (cmdType) {
                    var c = new models_1.Command(cmdType, this.task);
                    this.commander.next(c);
                };
                /// <summary>
                /// Common styles used by inherited components
                /// </summary>
                TaskBaseComponent.baseStyles = "\n\t\t.task-list-line button {\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.task-list-line input[type=\"text\"] {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.task-list-line {\n\t\t\tlist-style: none;\t\t\t\t\n\t\t}\n\t\t.task-list-line li {\n\t\t\tfloat: left;\n\t\t}\n\t\t.task-list-line li.completed .task-label {\n\t\t\ttext-decoration: line-through;\n\t\t}\n\t\t\n\t\t.task-list-line .col1 { width: 3em;  }\n\t\t.task-list-line .col2 { width: 20em; }\n\t\t.task-list-line .col3 { width: 2em;  }\t\t\n\t";
                return TaskBaseComponent;
            })();
            exports_1("TaskBaseComponent", TaskBaseComponent);
        }
    }
});
//# sourceMappingURL=task-base-component.js.map