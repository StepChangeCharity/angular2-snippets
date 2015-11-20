System.register(['angular2/angular2', 'angular2/router'], function(exports_1) {
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
    var angular2_1, router_1;
    var HomeComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    angular2_1.Component({
                        selector: "home"
                    }),
                    angular2_1.View({
                        template: "\n\t\t<ol>\n\t\t\n\t\t\t<li><a [router-link]=\"['/InAndOut']\">Component inputs &amp; outputs</a></li>\n\t\t\t<li><a [router-link]=\"['/Forms']\">Forms</a></li>\n\t\t\t<li><a [router-link]=\"['/Pipes']\">Pipes</a></li>\n\t\t\t<li><a [router-link]=\"['/CompHierarchy']\">Component hierarchy</a></li>\n\t\t\t<li><a [router-link]=\"['/ToDoApp']\">ToDo application</a></li>\n\t\t\t<li><a [router-link]=\"['/DynamicStyling']\">Dynamic styling</a></li>\n\t\t\t<li><a [router-link]=\"['/SimpleSearch']\">Simple search pipe</a></li>\n\t\t\t\n\t\t</ol>\n\t",
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.js.map