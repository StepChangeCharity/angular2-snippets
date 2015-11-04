System.register(['angular2/angular2', './child-control'], function(exports_1) {
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
    var angular2_1, child_control_1;
    var InputsAndOutputs;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (child_control_1_1) {
                child_control_1 = child_control_1_1;
            }],
        execute: function() {
            InputsAndOutputs = (function () {
                function InputsAndOutputs() {
                    this.startAmount = 0;
                    this.squaredAmount = 0;
                    this.showAnswer = false;
                    this.startAmount = 2;
                }
                InputsAndOutputs.prototype.onSquare = function (sq) {
                    this.squaredAmount = sq;
                    // got an answer, so start showing
                    this.showAnswer = true;
                };
                InputsAndOutputs = __decorate([
                    angular2_1.Component({
                        selector: 'input-and-output-snippet'
                    }),
                    angular2_1.View({
                        template: "\n\t\t<div class=\"left-pane\">\n\t\t\t<h2>Input and Output Snippet</h2>\n\t\t\t<p>\n\t\t\t\tDemonstrates passing data down to a child control and firing events back\n\t\t\t\tup again.\n\t\t\t</p>\n\t\t\t\n\t\t\t<h3>Issues</h3>\n\t\t\t<p>\n\t\t\t\tI've had to resort to using \"events\" and \"inputs\" decorators in this example.  I've had\n\t\t\t\t@Input and @Output working in another app, but couldn't get it working here :-(\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tFurther investigation is required.\n\t\t\t</p>\t\t\t\n\t\t</div>\n\t\t<div class=\"right-pane\">\t\t\t\n\t\t\t<h3>Snippet</h3>\n\t\t\t<hr/>\n\t\t\t\n\t\t\t<child-control \n\t\t\t\t[amount]='startAmount'\n\t\t\t\t(update)=\"onSquare($event)\">\n\t\t\t</child-control> \n\t\t\t<p [hidden]=\"!showAnswer\" style=\"color:red\">Square is {{squaredAmount}}\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t",
                        directives: [child_control_1.ChildControlComponent, angular2_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputsAndOutputs);
                return InputsAndOutputs;
            })();
            exports_1("InputsAndOutputs", InputsAndOutputs);
        }
    }
});
//# sourceMappingURL=inputs-and-outputs.js.map