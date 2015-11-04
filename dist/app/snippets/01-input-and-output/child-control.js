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
    var ChildControlComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            ChildControlComponent = (function () {
                function ChildControlComponent() {
                    this.amount = 0;
                    this.update = null;
                    this.update = new angular2_1.EventEmitter();
                }
                ChildControlComponent.prototype.increment = function () {
                    this.amount++;
                    this.recalculateSquare();
                };
                ChildControlComponent.prototype.decrement = function () {
                    this.amount--;
                    this.recalculateSquare();
                };
                ChildControlComponent.prototype.recalculateSquare = function () {
                    var sq = 0;
                    sq = (this.amount * this.amount);
                    // tell caller
                    this.update.next(sq);
                };
                ChildControlComponent = __decorate([
                    angular2_1.Component({
                        selector: 'child-control',
                        inputs: ['amount'],
                        events: ['update']
                    }),
                    angular2_1.View({
                        directives: [
                            angular2_1.FORM_DIRECTIVES
                        ],
                        template: "\n\t\t<button (click)=\"decrement()\">-</button>\n\t\t{{amount}}\n\t\t<button (click)=\"increment()\">+</button>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildControlComponent);
                return ChildControlComponent;
            })();
            exports_1("ChildControlComponent", ChildControlComponent);
        }
    }
});
//# sourceMappingURL=child-control.js.map