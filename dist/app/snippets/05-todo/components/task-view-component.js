System.register(["angular2/angular2", "./task-base-component", "../models"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
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
    var angular2_1, task_base_component_1, models_1;
    var TaskViewComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (task_base_component_1_1) {
                task_base_component_1 = task_base_component_1_1;
            },
            function (models_1_1) {
                models_1 = models_1_1;
            }],
        execute: function() {
            TaskViewComponent = (function (_super) {
                __extends(TaskViewComponent, _super);
                function TaskViewComponent() {
                    _super.call(this);
                }
                TaskViewComponent.prototype.toggleDone = function () {
                    this.task.isDone = !this.task.isDone;
                    this.emitCommand(models_1.CommandTypes.TASK_COMPLETE_TOGGLE);
                };
                TaskViewComponent.prototype.editTask = function () {
                    this.emitCommand(models_1.CommandTypes.TASK_EDIT);
                };
                TaskViewComponent.prototype.canEdit = function () {
                    var canBeEdited = true;
                    if (this.task.isDone) {
                        // can only edit incomplete tasks
                        canBeEdited = false;
                    }
                    return canBeEdited;
                };
                TaskViewComponent = __decorate([
                    angular2_1.Component({
                        selector: "task-view",
                        // _Must_ use this method of inputs/outputs when using component inheritance 
                        inputs: ["task"],
                        outputs: ["commander"]
                    }),
                    angular2_1.View({
                        template: "\n\t\t<style>\n\t\t\t" + task_base_component_1.TaskBaseComponent.baseStyles + "\n\t\t</style>\n\t\t\n\t\t<ul class=\"task-list-line\">\n\t\t\t<li class=\"col1\">\n\t\t\t\t<button (click)=\"editTask()\" [disabled]=\"!canEdit()\">edit</button>\n\t\t\t</li>\n\t\t\t<li [ng-class]=\"{completed: task.isDone}\">\n\t\t\t\t<label>\n\t\t\t\t\t<span class=\"col2 task-label ib\">{{task.task}}</span>\n\t\t\t\t\t<input class=\"col3 task-done\" type=\"checkbox\" [checked]=\"task.isDone\" (change)=\"toggleDone()\" />\n\t\t\t\t</label>\n\t\t\t</li>\n\t\t</ul>\t\t\n\n\t",
                        directives: [angular2_1.NgClass, angular2_1.NgIf, angular2_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskViewComponent);
                return TaskViewComponent;
            })(task_base_component_1.TaskBaseComponent);
            exports_1("TaskViewComponent", TaskViewComponent);
        }
    }
});
//# sourceMappingURL=task-view-component.js.map