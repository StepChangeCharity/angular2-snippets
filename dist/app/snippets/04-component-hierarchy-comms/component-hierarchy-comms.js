System.register(['angular2/angular2', './top-component'], function(exports_1) {
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
    var angular2_1, top_component_1;
    var ComponentHierarchyCommsSnippet;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (top_component_1_1) {
                top_component_1 = top_component_1_1;
            }],
        execute: function() {
            // ************ ComponentHierarchyCommsSnippet **************
            ComponentHierarchyCommsSnippet = (function () {
                function ComponentHierarchyCommsSnippet() {
                }
                ComponentHierarchyCommsSnippet = __decorate([
                    angular2_1.Component({
                        selector: "component-hierarchy-comms",
                    }),
                    angular2_1.View({
                        template: "\n\t\t<div class=\"left-pane\">\n\t\t\t<h2>Component Hierarchy Communications Snippet</h2>\n\t\t\t<p>\n\t\t\t\tThe purpose of this snippet is to illustrate how communication between\n\t\t\t\ta root and n-level children can/should/does work.\n\t\t\t</p>\n\t\t\t\n\t\t\t<h3>Issues</h3>\n\t\t\t<ol>\n\t\t\t\t<li>Classes have to be declared <strong>before</strong> their usage \n\t\t\t\t(<small>so children are declare above the parent - which makes sense, but may catch you out</small>)\n\t\t\t\t</li>\n\t\t\t</ol>\n\t\t\t\n\t\t\t<h3>Resources</h3>\n\t\t\t<p>\n\t\t\t\tAny resources you found useful when developing this snippet (e.g. plunks, articles, etc)\n\t\t\t</p>\n\t\t</div>\n\n\t\t<div class=\"right-pane\">\t\t\t\t\t\n\t\t\t<h3>Snippet</h3>\n\t\t\t<hr/>\n\t\t\t\n\t\t\t<top></top>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\t\t\t\n\t",
                        directives: [top_component_1.TopComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ComponentHierarchyCommsSnippet);
                return ComponentHierarchyCommsSnippet;
            })();
            exports_1("ComponentHierarchyCommsSnippet", ComponentHierarchyCommsSnippet);
        }
    }
});
//# sourceMappingURL=component-hierarchy-comms.js.map