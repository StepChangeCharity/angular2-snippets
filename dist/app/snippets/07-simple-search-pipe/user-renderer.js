System.register(["angular2/angular2", "./search-pipe"], function(exports_1) {
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
    var angular2_1, search_pipe_1;
    var UserRenderer;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            }],
        execute: function() {
            UserRenderer = (function () {
                function UserRenderer() {
                }
                __decorate([
                    angular2_1.Input(), 
                    __metadata('design:type', search_pipe_1.UserModel)
                ], UserRenderer.prototype, "user");
                UserRenderer = __decorate([
                    angular2_1.Component({
                        selector: 'user-renderer'
                    }),
                    angular2_1.View({
                        directives: [angular2_1.NgClass, angular2_1.NgIf],
                        // Each user object rendered by user-renderer is given a class based on its current 'status' property (see below)
                        //  - 'active' or 'deleted'. This allows us to define different styles for each that are applied dynamically
                        //  as the status changes.
                        styles: ["\n\t\t.userpanel {\n\t\t\twidth: 50%;\n\t\t\tmax-width: 800px;\n\t\t\tmin-width: 480px;\n\t\t\tmargin-top: 20px;\n\t\t\tmargin-left: auto;\n\t\t\tmargin-right: auto;\n\t\t\tpadding: 10px;\n\t\t\tfont-family: Tahoma, Geneva, sans-serif;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #0074D9;\n\t\t\tborder: 2px solid #2496FC;\n\t\t\tborder-radius: 12px;\n\t\t\tbackground-color: white;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t\t.userpanel .userpanel-header {\n\t\t\tfont-size: 22px;\n\t\t\tcolor: #0074D9;\n\t\t\tpadding-bottom: 5px;\n\t\t\tborder-bottom: 2px solid #0074D9;\n\t\t}\n\t\t.userpanel .userpanel-header .userpanel-header-button {\n\t\t\tfloat: right;\n\t\t}\n\t\t.userpanel .userpanel-header-text, .userpanel-header-button {\n\t\t\tdisplay: inline;\n\t\t}\n\t\t.userpanel .userpanel-header-text-id {\n\t\t\tfont-size: 22px;\n\t\t\tcolor: #2496FC;\n\t\t}\n\t\t.userpanel .userpanel-header-text-name {\n\t\t\tfont-size: 22px;\n\t\t\tcolor: #B10DC9;\n\t\t}\n\t\t.userpanel .userpanel-header .userpanel-header-button button{\n\t\t\tpadding: 5px;\n\t\t\tbackground: #3498db;\n\t\t\tbackground-image: -webkit-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: -moz-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: -ms-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: -o-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: linear-gradient(to bottom, #3498db, #2980b9);\n\t\t\t-webkit-border-radius: 28;\n\t\t\t-moz-border-radius: 28;\n\t\t\tborder-radius: 10px;\n\t\t\tcolor: #ffffff;\n\t\t\tfont-size: 14px;\n\t\t\tmargin-bottom: 5px;\n\t\t}\n\t\t.userpanel .userpanel-header .userpanel-header-button button:hover{\n\t\t\tbackground: #3cb0fd;\n\t\t\tbackground-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: -moz-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: -ms-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: -o-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: linear-gradient(to bottom, #3cb0fd, #3498db);\n\t\t}\n\t\t.userpanel .userpanel-address {\n\t\t\tcolor: #CB5CDA;\n\t\t\tmargin-top: 10px;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t\t}\n\t"],
                        // The ng-class directive is used here to give the panel a top-level class defined by the user's current
                        //  'status' property.
                        // The [*ng-if] directive is used to change which button (activate/deactivate) appears depending on the user's
                        //  'status'.
                        template: "\n\t\t\t<div class=\"userpanel\">\n\t\t\t\t<div class=\"userpanel-header\">\n\t\t\t\t\t<div class=\"userpanel-header-text\">\n\t\t\t\t\t\t<span class=\"userpanel-header-text-name\">{{user.name}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"userpanel-address\">\n\t\t\t\t\tpassword: {{user.address}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserRenderer);
                return UserRenderer;
            })();
            exports_1("UserRenderer", UserRenderer);
        }
    }
});
//# sourceMappingURL=user-renderer.js.map