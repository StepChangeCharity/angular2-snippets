System.register(["angular2/angular2"], function(exports_1) {
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
    var UserContains;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            UserContains = (function () {
                function UserContains() {
                }
                UserContains.prototype.transform = function (value, _a) {
                    var field = _a[0], term = _a[1];
                    console.log(field + " " + term);
                    return value.filter(function (item) { return item[field].includes(term); });
                };
                UserContains = __decorate([
                    angular2_1.Pipe({
                        name: 'userContains'
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserContains);
                return UserContains;
            })();
            exports_1("UserContains", UserContains);
        }
    }
});
//# sourceMappingURL=user-contains.js.map