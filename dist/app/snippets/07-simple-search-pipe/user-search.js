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
    var UserSearch;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            UserSearch = (function () {
                function UserSearch() {
                    this.searchTerm = "";
                }
                UserSearch = __decorate([
                    angular2_1.Component({
                        selector: 'user-search'
                    }),
                    angular2_1.View({
                        directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgIf],
                        styles: ["\n\t\t.userlist-search {\n\t\t\twidth: 50%;\n\t\t\tmax-width: 800px;\n\t\t\tmin-width: 480px;\n\t\t\tmargin: 0 auto;\n\t\t\tpadding: 10px;\n\t\t\tfont-family: Tahoma, Geneva, sans-serif;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #00427D;\n\t\t\tborder: 2px solid #0074D9;\n\t\t\tborder-radius: 12px;\n\t\t\tbackground-color: white;\n\t\t}\n\t\t.userlist-search input[type=text]\n\t\t{\n\t\t\tbackground-color: white;\n\t\t\tborder: solid 2px #0074D9;\n\t\t\tborder-radius: 6px;\n\t\t\tcolor:#00427D;\n\t\t\theight: 25px;\n\t\t\tpadding-left:10px;\n\t\t\twidth: 200px;\n\t\t}\n\t"],
                        // The input field will set the searchTerm property on the class, which is used in the search-pipe component to filter the
                        //  list of displayed users.
                        template: "\n\t\t<div class=\"userlist-search\">\n\t\t\t<p><label>Search user:</label>&nbsp;&nbsp;<input type=\"text\" [(ng-model)]='searchTerm'></p>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserSearch);
                return UserSearch;
            })();
            exports_1("UserSearch", UserSearch);
        }
    }
});
//# sourceMappingURL=user-search.js.map