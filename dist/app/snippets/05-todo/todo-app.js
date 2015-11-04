System.register(["angular2/angular2", "./task-list-component", "./models"], function(exports_1) {
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
    var angular2_1, task_list_component_1, models_1;
    var ToDoApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (task_list_component_1_1) {
                task_list_component_1 = task_list_component_1_1;
            },
            function (models_1_1) {
                models_1 = models_1_1;
            }],
        execute: function() {
            ToDoApp = (function () {
                function ToDoApp() {
                    this.createStarterList();
                }
                ToDoApp.prototype.createStarterList = function () {
                    this.masterList = [
                        new models_1.TaskItem("Do big shop"),
                        new models_1.TaskItem("Make tea", true),
                        new models_1.TaskItem("Eat mice with sugar"),
                    ];
                    //console.table(this.masterList);
                };
                ToDoApp.prototype.doCommand = function (cmd) {
                    if (cmd.Type === models_1.CommandTypes.TASK_EDIT) {
                        console.log("BOOM!");
                    }
                };
                ToDoApp = __decorate([
                    angular2_1.Component({
                        selector: "todo-app"
                    }),
                    angular2_1.View({
                        template: "\n\t\t<div class=\"left-pane\">\n\t\t\t<h2>ToDo Application</h2>\n\t\t\t\n\t\t\t<p>\n\t\t\t\tBrings together key concepts for building Angular2 apps, including:\t\t\t\n\t\t\t</p>\n\t\t\t<ul>\n\t\t\t\t<li>Breaking down an app into components</li>\n\t\t\t\t<li>Component inheritance (and possible approach to component style inhertiance)</li>\n\t\t\t\t<li>Using models</li>\n\t\t\t\t<li>Component communication with inputs &amp; outputs</li>\n\t\t\t\t<li>Using a [root] component orchestrator (for communication)</li>\n\t\t\t\t<li>View/Edit mode handling</li>\n\t\t\t</ul>\n\t\t\t\n\t\t\t<h3>Issues - Component Inheritance</h3>\n\t\t\t<p>\n\t\t\t\tWhen using <i>Component Inheritance</i> use the <strong>inputs: [\"xyz\"]</strong> form\n\t\t\t\tfor defining inputs &amp; outputs. \n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tWhen using the <strong>@Input ...</strong> approach you end up with two distinct variables\n\t\t\t\t- the one in your component, and one in the base (aka super) version.  This isn't what we want\n\t\t\t\t- using the <strong>inputs: [\"sadf\"]</strong> method the input is created via DI, and Angular\n\t\t\t\tin essence creates it in the super class (which is what we <i>do</i> want).\n\t\t\t</p>\n\t\t\t\n\t\t\t<h3>Resources</h3>\n\t\t\t<p>n/a</p>\n\t\t</div>\n\t\t<div class=\"right-pane\">\t\t\t\n\t\t\t<h3>Snippet</h3>\n\t\t\t<hr/>\n\t\t\t\n\t\t\t<task-list [tasks]=\"masterList\" (commander)=\"doCommand($event)\"></task-list>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t",
                        directives: [task_list_component_1.TaskListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ToDoApp);
                return ToDoApp;
            })();
            exports_1("ToDoApp", ToDoApp);
        }
    }
});
//# sourceMappingURL=todo-app.js.map