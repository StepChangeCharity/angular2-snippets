System.register(["angular2/angular2", "./task-view-component", "./task-edit-component", "../models"], function(exports_1) {
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
    var angular2_1, task_view_component_1, task_edit_component_1, models_1;
    var TaskComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (task_view_component_1_1) {
                task_view_component_1 = task_view_component_1_1;
            },
            function (task_edit_component_1_1) {
                task_edit_component_1 = task_edit_component_1_1;
            },
            function (models_1_1) {
                models_1 = models_1_1;
            }],
        execute: function() {
            TaskComponent = (function () {
                function TaskComponent() {
                    this.commander = null;
                    this.currMode = models_1.EditMode.READ_ONLY;
                    this.commander = new angular2_1.EventEmitter();
                }
                TaskComponent.prototype.isViewRO = function () {
                    return (this.currMode === models_1.EditMode.READ_ONLY);
                };
                TaskComponent.prototype.isViewRW = function () {
                    return (this.currMode === models_1.EditMode.READ_WRITE);
                };
                TaskComponent.prototype.startEditing = function () {
                    this.currMode = models_1.EditMode.READ_WRITE;
                };
                TaskComponent.prototype.finishEditing = function () {
                    this.currMode = models_1.EditMode.READ_ONLY;
                };
                TaskComponent.prototype.doCommand = function (cmd) {
                    var bubbleUp = false;
                    switch (cmd.Type) {
                        case models_1.CommandTypes.TASK_EDIT:
                            this.currMode = models_1.EditMode.READ_WRITE;
                            break;
                        case models_1.CommandTypes.TASK_SAVE:
                            this.currMode = models_1.EditMode.READ_ONLY;
                            bubbleUp = true;
                            break;
                        case models_1.CommandTypes.TASK_COMPLETE_TOGGLE:
                            bubbleUp = true;
                            break;
                    }
                    console.log("task::event", "bubbleUp=" + bubbleUp, cmd.Type, cmd.Data);
                    if (bubbleUp) {
                        // tell parent about this event
                        this.commander.next(cmd);
                    }
                };
                __decorate([
                    angular2_1.Input(), 
                    __metadata('design:type', models_1.TaskItem)
                ], TaskComponent.prototype, "task");
                __decorate([
                    angular2_1.Output(), 
                    __metadata('design:type', angular2_1.EventEmitter)
                ], TaskComponent.prototype, "commander");
                TaskComponent = __decorate([
                    angular2_1.Component({
                        selector: "task"
                    }),
                    angular2_1.View({
                        template: "\n\t\t<task-view *ng-if=\"isViewRO()\" [task]=\"task\" (commander)=\"doCommand($event)\"></task-view>\n\t\t<task-edit *ng-if=\"isViewRW()\" [task]=\"task\" (commander)=\"doCommand($event)\"></task-edit>\n\n\t\t<div class=\"clear\"></div>\n\t",
                        directives: [angular2_1.NgIf, task_view_component_1.TaskViewComponent, task_edit_component_1.TaskEditComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskComponent);
                return TaskComponent;
            })();
            exports_1("TaskComponent", TaskComponent);
        }
    }
});
//# sourceMappingURL=_task-component.js.map