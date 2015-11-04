System.register(['angular2/angular2', 'angular2/router', './home', './snippets/01-input-and-output/inputs-and-outputs', './snippets/02-forms/forms-snippet', './snippets/03-pipes/pipes-snippet', './snippets/04-component-hierarchy-comms/component-hierarchy-comms', './snippets/05-todo/todo-app', './snippets/06-dynamic-styling/dynamic-styling', './snippets/07-simple-search-pipe/search-pipe'], function(exports_1) {
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
    var angular2_1, router_1, home_1, inputs_and_outputs_1, forms_snippet_1, pipes_snippet_1, component_hierarchy_comms_1, todo_app_1, dynamic_styling_1, search_pipe_1;
    var AppComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (inputs_and_outputs_1_1) {
                inputs_and_outputs_1 = inputs_and_outputs_1_1;
            },
            function (forms_snippet_1_1) {
                forms_snippet_1 = forms_snippet_1_1;
            },
            function (pipes_snippet_1_1) {
                pipes_snippet_1 = pipes_snippet_1_1;
            },
            function (component_hierarchy_comms_1_1) {
                component_hierarchy_comms_1 = component_hierarchy_comms_1_1;
            },
            function (todo_app_1_1) {
                todo_app_1 = todo_app_1_1;
            },
            function (dynamic_styling_1_1) {
                dynamic_styling_1 = dynamic_styling_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    angular2_1.Component({
                        selector: 'app'
                    }),
                    angular2_1.View({
                        template: "\n\t<p><a [router-link]=\"['/Home']\">/home</a></p>\n\t<router-outlet></router-outlet>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', redirectTo: '/home' },
                        { path: '/home', as: 'Home', component: home_1.HomeComponent },
                        { path: '/01-in-out', as: "InAndOut", component: inputs_and_outputs_1.InputsAndOutputs },
                        { path: '/02-forms', as: "Forms", component: forms_snippet_1.FormsSnippet },
                        { path: '/03-pipes', as: "Pipes", component: pipes_snippet_1.PipesSnippet },
                        { path: '/04-component-hierarchy', as: "CompHierarchy", component: component_hierarchy_comms_1.ComponentHierarchyCommsSnippet },
                        { path: '/05-todo-app', as: "ToDoApp", component: todo_app_1.ToDoApp },
                        { path: '/06-dynamic-styling', as: "DynamicStyling", component: dynamic_styling_1.DynamicStylingSnippet },
                        { path: '/07-simple-search-pipe', as: "SimpleSearch", component: search_pipe_1.SimpleSearchPipe }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map