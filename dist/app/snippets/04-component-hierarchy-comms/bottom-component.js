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
    var BottomComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            // ************ BottomComponent **************
            BottomComponent = (function () {
                function BottomComponent() {
                    this.bottomAge = 0;
                    this.monthlyOutput = null;
                    this.update = null;
                    //debugger;
                    this.monthlyOutput = new angular2_1.EventEmitter();
                    this.update = new angular2_1.EventEmitter();
                }
                BottomComponent.prototype.onFire = function () {
                    var monthlyVersion = this.asMonths();
                    var decadeVersion = this.asDecades();
                    this.update.next(decadeVersion);
                    this.monthlyOutput.next(monthlyVersion);
                };
                BottomComponent.prototype.asMonths = function () {
                    var monthly = (this.bottomAge * 12);
                    return monthly;
                };
                BottomComponent.prototype.asDecades = function () {
                    var decades = (this.bottomAge / 10);
                    return decades;
                };
                __decorate([
                    angular2_1.Input(), 
                    __metadata('design:type', Number)
                ], BottomComponent.prototype, "bottomAge");
                __decorate([
                    angular2_1.Output(), 
                    __metadata('design:type', angular2_1.EventEmitter)
                ], BottomComponent.prototype, "monthlyOutput");
                BottomComponent = __decorate([
                    angular2_1.Component({
                        selector: "bottom",
                        events: ["update"]
                    }),
                    angular2_1.View({
                        template: "\n\t\t<div class=\"hac box box-bottom\">\n\t\t\t<p class=\"box-label\">bottom</p>\n\t\t\n\t\t\tage = {{bottomAge}} <button (click)=\"onFire()\">Fire!</button>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], BottomComponent);
                return BottomComponent;
            })();
            exports_1("BottomComponent", BottomComponent);
        }
    }
});
//# sourceMappingURL=bottom-component.js.map