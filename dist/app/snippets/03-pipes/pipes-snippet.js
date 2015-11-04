System.register(['angular2/angular2', './commafy'], function(exports_1) {
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
    var angular2_1, commafy_1;
    var PipesSnippet;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (commafy_1_1) {
                commafy_1 = commafy_1_1;
            }],
        execute: function() {
            PipesSnippet = (function () {
                function PipesSnippet() {
                    this.examples = new Array();
                    this.examples = [
                        -1001,
                        -1000,
                        -100,
                        0,
                        100,
                        1000,
                        1001
                    ];
                    this.names = ["Bob", "Wilma"];
                }
                PipesSnippet = __decorate([
                    angular2_1.Component({
                        selector: "pipes-snippet"
                    }),
                    angular2_1.View({
                        pipes: [commafy_1.CommafyPipe],
                        template: "\n\t\t<div class=\"left-pane\">\n\t\t\t<h2>Pipes</h2>\n\t\t\t<p>Illustration of using pipes.</p>\n\t\t\t\n\t\t\t<h3>Issues</h3>\n\t\t\t<p>\n\t\t\t\t[Any issues you've had, which may need further investigation]\n\t\t\t</p>\n\t\t\t\n\t\t\t<h3>Resources</h3>\n\t\t\t- <a href=\"https://angular.io/docs/ts/latest/guide/pipes.html\">Pipes on Angular.io</a>\n\t\t</div>\n\n\t\t<div class=\"right-pane\">\t\t\t\n\t\t\t<h3>Snippet</h3>\n\t\t\t<hr/>\n\t\n\t\t\t<h4>Examples</h4>\t\n\t\t\t<ul>\n\t\t\t</ul>\n\t\t\t<p *ng-for=\"#example of examples\">\n\t\t\t\t<small>{{example}} === {{example | commafy}}</small>\n\t\t\t</p>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\t\t\n\t",
                        directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PipesSnippet);
                return PipesSnippet;
            })();
            exports_1("PipesSnippet", PipesSnippet);
        }
    }
});
//# sourceMappingURL=pipes-snippet.js.map