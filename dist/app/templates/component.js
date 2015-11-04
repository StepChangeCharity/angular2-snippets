System.register(['angular2/angular2'], function(exports_1) {
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
    var angular2_1;
    var SomeComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            SomeComponent = (function () {
                // @Input() someInput: boolean = false;
                // @Output() someOutput: EventEmitter = new EventEmitter();
                function SomeComponent() {
                    // To trigger the @Output emitter, use:
                    // this.someOutput.next({ some: data });	
                }
                SomeComponent = __decorate([
                    angular2_1.Component({
                        selector: "--component--"
                    }),
                    angular2_1.View({
                        template: "\n\t\t<div class=\"left-pane\">\n\t\t\t<h2>[Snippet Title]</h2>\n\t\t\t<p>\n\t\t\t\t[Description]\n\t\t\t</p>\n\t\t\t\n\t\t\t<h3>Issues</h3>\n\t\t\t<p>\n\t\t\t\t[Any issues you've had, which may need further investigation]\n\t\t\t</p>\n\t\t\t\n\t\t\t<h3>Resources</h3>\n\t\t\t<p>\n\t\t\t\tAny resources you found useful when developing this snippet (e.g. plunks, articles, etc)\n\t\t\t</p>\n\t\t</div>\n\n\t\t<div class=\"right-pane\">\t\t\t\t\n\t\t\t<h3>Snippet</h3>\n\t\t\t<hr/>\n\t\t\t\n\t\t\t<p>your control snippet</p>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\t\t\t\n\t\t\n\t",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], SomeComponent);
                return SomeComponent;
            })();
            exports_1("SomeComponent", SomeComponent);
        }
    }
});
//# sourceMappingURL=component.js.map