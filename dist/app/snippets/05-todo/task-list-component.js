System.register(["angular2/angular2", "./components/_task-component", "./components/task-base-component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, _task_component_1, task_base_component_1;
    var TaskListComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (_task_component_1_1) {
                _task_component_1 = _task_component_1_1;
            },
            function (task_base_component_1_1) {
                task_base_component_1 = task_base_component_1_1;
            }],
        execute: function() {
            TaskListComponent = (function () {
                function TaskListComponent() {
                    this.commander = null;
                    this.commander = new angular2_1.EventEmitter();
                    //console.table(this.tasks);
                }
                TaskListComponent.prototype.doCommand = function (cmd) {
                    // task-list doesn't care about this, so forward on
                    this.commander.next(cmd);
                };
                __decorate([
                    angular2_1.Input(), 
                    __metadata('design:type', Array)
                ], TaskListComponent.prototype, "tasks");
                __decorate([
                    angular2_1.Output(), 
                    __metadata('design:type', angular2_1.EventEmitter)
                ], TaskListComponent.prototype, "commander");
                TaskListComponent = __decorate([
                    angular2_1.Component({
                        selector: "task-list"
                    }),
                    angular2_1.View({
                        template: "\n\t\t<style>\n\t\t\t.task-list {\n\t\t\t\tlist-style: none;\n\t\t\t}\n\t\t\n\t\t\t<!-- for the header column widths --> \n\t\t\t" + task_base_component_1.TaskBaseComponent.baseStyles + "\n\n\t\t\t.task-list-line-header {\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t</style>\n\t\t\n\t\t<h5>Your task list</h5>\n\t\t\n\t\t<!-- header - separate component would be a little extreme! -->\n\n\t\t<ul class=\"task-list\">\n\t\t\t<li>\n\t\t\t\t<ul class=\"task-list-line task-list-line-header\">\n\t\t\t\t\t<li class=\"col1\">&nbsp;</li>\n\t\t\t\t\t<li class=\"col2\">Task description</li>\n\t\t\t\t\t<li class=\"col3\">Completed?</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t</li>\n\t\t\t<li *ng-for=\"#t of tasks\">\n\t\t\t\t<task [task]=\"t\" (commander)=\"doCommand($event)\"></task>\n\t\t\t</li>\n\t\t</ul>\n\t",
                        directives: [angular2_1.NgIf, angular2_1.NgFor, _task_component_1.TaskComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskListComponent);
                return TaskListComponent;
            })();
            exports_1("TaskListComponent", TaskListComponent);
        }
    }
});
//# sourceMappingURL=task-list-component.js.map