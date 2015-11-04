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
    var TaskEditComponent;
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
            TaskEditComponent = (function (_super) {
                __extends(TaskEditComponent, _super);
                function TaskEditComponent() {
                    _super.call(this);
                }
                TaskEditComponent.prototype.saveTask = function () {
                    _super.prototype.emitCommand.call(this, models_1.CommandTypes.TASK_SAVE);
                };
                TaskEditComponent = __decorate([
                    angular2_1.Component({
                        selector: "task-edit",
                        // _Must_ use this method of inputs/outputs when using component inheritance 
                        inputs: ["task"],
                        outputs: ["commander"]
                    }),
                    angular2_1.View({
                        template: "\n\t\t<style>\n\t\t\t" + task_base_component_1.TaskBaseComponent.baseStyles + "\n\t\t</style>\n\t\t\n\t\t<ul class=\"task-list-line\">\n\t\t\t<li class=\"col1\">\n\t\t\t\t<button (click)=\"saveTask()\">save</button>\n\t\t\t</li>\n\t\t\t<li class=\"col2\" [ng-class]=\"{completed: task.isDone}\">\n\t\t\t\t<label>\n\t\t\t\t\t<input type=\"text\" [(ng-model)]=\"task.task\" />\n\t\t\t\t</label>\n\t\t\t</li>\n\t\t</ul>\n\t",
                        directives: [angular2_1.NgClass, angular2_1.NgIf, angular2_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskEditComponent);
                return TaskEditComponent;
            })(task_base_component_1.TaskBaseComponent);
            exports_1("TaskEditComponent", TaskEditComponent);
        }
    }
});
//# sourceMappingURL=task-edit-component.js.map