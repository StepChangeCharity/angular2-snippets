System.register(['angular2/angular2', './middle-component'], function(exports_1) {
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
    var angular2_1, middle_component_1;
    var TopComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (middle_component_1_1) {
                middle_component_1 = middle_component_1_1;
            }],
        execute: function() {
            // ************ TopComponent **************
            TopComponent = (function () {
                function TopComponent() {
                    this.topAge = 0;
                    this.ageInMonths = 0;
                    this.ageInDecades = 0;
                }
                TopComponent.prototype.onBlur = function (newage) {
                    this.topAge = newage.value;
                };
                TopComponent.prototype.onEventPropagation = function (data) {
                    switch (data.type) {
                        case "months":
                            this.ageInMonths = data.amount;
                            break;
                        case "decades":
                            this.ageInDecades = data.amount;
                            break;
                        default: throw new Error("data type " + data.type + " is not recognised.");
                    }
                };
                TopComponent = __decorate([
                    angular2_1.Component({
                        selector: "top"
                    }),
                    angular2_1.View({
                        template: "\n\t\t<div class=\"hac box box-top\">\n\t\t\t<p class=\"box-label\">top</p>\n\n\t\t\t<label>Your age: <input type=\"number\" #newage (blur)=\"onBlur(newage)\" /> (years) \n\t\t\t\t\n\t\t\t<middle  \n\t\t\t\t(propagator)=\"onEventPropagation($event)\"\n\t\t\t\t[middle-age]=\"topAge\">\n\t\t\t</middle>\n\t\t\t<p>Your age <strong>{{ageInMonths}}</strong> (in months)</p>\n\t\t\t<p>Your age <strong>{{ageInDecades}}</strong> (in decades)</p>\n\t\t</div>\t\n\t",
                        directives: [middle_component_1.MiddleComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TopComponent);
                return TopComponent;
            })();
            exports_1("TopComponent", TopComponent);
        }
    }
});
//# sourceMappingURL=top-component.js.map