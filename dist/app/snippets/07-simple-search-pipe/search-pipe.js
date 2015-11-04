System.register(['angular2/angular2', './user-renderer', './user-contains', './user-search'], function(exports_1) {
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
    var angular2_1, user_renderer_1, user_contains_1, user_search_1;
    var UserModel, SimpleSearchPipe;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (user_renderer_1_1) {
                user_renderer_1 = user_renderer_1_1;
            },
            function (user_contains_1_1) {
                user_contains_1 = user_contains_1_1;
            },
            function (user_search_1_1) {
                user_search_1 = user_search_1_1;
            }],
        execute: function() {
            UserModel = (function () {
                function UserModel(id, name, address) {
                    if (id === void 0) { id = null; }
                    if (name === void 0) { name = ""; }
                    if (address === void 0) { address = ""; }
                    this.id = id;
                    this.name = name;
                    this.address = address;
                }
                return UserModel;
            })();
            exports_1("UserModel", UserModel);
            SimpleSearchPipe = (function () {
                function SimpleSearchPipe() {
                    this.users = [
                        new UserModel(1, 'Fred Flintstone', '301 Cobblestone Way, Bedrock 70777'),
                        new UserModel(2, 'Wilma Flintstone', '301 Cobblestone Way, Bedrock 70777'),
                        new UserModel(2, 'Pebbles Flintstone', '301 Cobblestone Way, Bedrock 70777'),
                        new UserModel(3, 'Barney Rubble', '302 Cobblestone Way, Bedrock 70777'),
                        new UserModel(4, 'Betty Rubble', '302 Cobblestone Way, Bedrock 70777'),
                        new UserModel(4, 'Bam-Bam Rubble', '302 Cobblestone Way, Bedrock 70777')
                    ];
                }
                SimpleSearchPipe = __decorate([
                    angular2_1.Component({
                        selector: "simple-search-pipe"
                    }),
                    angular2_1.View({
                        pipes: [user_contains_1.UserContains],
                        template: "\n\t\t<h2>Simple search pipe</h2>\n\t\t<p>\n            Demonstrates how to code a pipe that will filter a list similar to that in snippet 06 'Dynamic styling'.\n\t\t</p>\n\n\t\t<h3>Issues</h3>\n\t\t<p>\n\n\t\t</p>\n\n\t\t<h3>Snippet</h3>\n\t\t<hr/>\n        <div>\n            <user-search #user-search></user-search>\n        </div>\n        <div>\n            <!-- The array of users to render using the 'user-renderer' component is now filtered by the term typed into\n                    the 'user-search' component.\n                 The UserContains class returns a subset of the entire userService.users array. It is assigned two\n                 parameters - the 'username' property of the individual users and the searchTerm taken from the\n                 user-search component above (hash [#user-search] notation allows entire user-search object to be\n                 used elsewhere in template). -->\n            <user-renderer *ng-for=\"#user of users | userContains: 'name':userSearch.searchTerm\"\n                [user]=\"user\"></user-renderer>\n        </div>\n\n\t",
                        directives: [angular2_1.NgFor, user_renderer_1.UserRenderer, user_search_1.UserSearch]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SimpleSearchPipe);
                return SimpleSearchPipe;
            })();
            exports_1("SimpleSearchPipe", SimpleSearchPipe);
        }
    }
});
//# sourceMappingURL=search-pipe.js.map