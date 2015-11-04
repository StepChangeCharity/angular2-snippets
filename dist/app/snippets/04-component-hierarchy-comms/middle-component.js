System.register(['angular2/angular2', './bottom-component'], function(exports_1) {
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
    var angular2_1, bottom_component_1;
    var MiddleComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (bottom_component_1_1) {
                bottom_component_1 = bottom_component_1_1;
            }],
        execute: function() {
            // ************ MiddleComponent **************
            MiddleComponent = (function () {
                function MiddleComponent() {
                    this.middleAge = 0;
                    this.propagator = null;
                    this.propagator = new angular2_1.EventEmitter();
                }
                MiddleComponent.prototype.onMonthly = function (monthly) {
                    this.propagator.next({ type: "months", amount: monthly });
                };
                MiddleComponent.prototype.onDecade = function (decades) {
                    this.propagator.next({ type: "decades", amount: decades });
                };
                __decorate([
                    angular2_1.Input(), 
                    __metadata('design:type', Number)
                ], MiddleComponent.prototype, "middleAge");
                __decorate([
                    angular2_1.Output(), 
                    __metadata('design:type', angular2_1.EventEmitter)
                ], MiddleComponent.prototype, "propagator");
                MiddleComponent = __decorate([
                    angular2_1.Component({
                        selector: "middle"
                    }),
                    angular2_1.View({
                        template: "\n\t\t<div class=\"hac box box-middle\" style=\"position: relative\">\n\t\t\t<p class=\"box-label\">middle</p>\n\t\t\t\n\t\t\t<bottom\n\t\t\t\t[bottom-age]=\"middleAge\"\n\t\t\t\t(monthly-output)=\"onMonthly($event)\"\n\t\t\t\t(update)=\"onDecade($event)\"\n\t\t\t\t></bottom>\n\t\t</div>\n\t",
                        directives: [bottom_component_1.BottomComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MiddleComponent);
                return MiddleComponent;
            })();
            exports_1("MiddleComponent", MiddleComponent);
        }
    }
});
//# sourceMappingURL=middle-component.js.map