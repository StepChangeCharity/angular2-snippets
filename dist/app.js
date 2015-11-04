System.register(['angular2/angular2', 'angular2/router', 'angular2/http', './app/app'], function(exports_1) {
    var angular2_1, router_1, http_1, app_1;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            angular2_1.bootstrap(app_1.AppComponent, [
                router_1.ROUTER_BINDINGS,
                angular2_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(app_1.AppComponent),
                http_1.HTTP_BINDINGS,
                angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
            ]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=app.js.map