System.register(['angular2/angular2', './user-renderer'], function(exports_1) {
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
    var angular2_1, user_renderer_1;
    var UserModel, DynamicStylingSnippet;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (user_renderer_1_1) {
                user_renderer_1 = user_renderer_1_1;
            }],
        execute: function() {
            // Defines the model for a user, each displayed as a separate panel by the user-renderer component
            UserModel = (function () {
                function UserModel(id, name, address) {
                    if (id === void 0) { id = null; }
                    if (name === void 0) { name = ""; }
                    if (address === void 0) { address = ""; }
                    this.id = id;
                    this.name = name;
                    this.address = address;
                    // Define a 'status' property which will control how the user-renderer component displays the user panel.
                    this.status = UserModel.ACTIVE;
                }
                // On calling the below two methods, the user's 'status' property will be set to that of the above string constants.
                UserModel.prototype.setStatusDeleted = function () {
                    this.status = UserModel.DELETED;
                    console.log(this.name + ", " + this.address + " : status changed to " + this.status);
                };
                UserModel.prototype.setStatusActive = function () {
                    this.status = UserModel.ACTIVE;
                    console.log(this.name + ", " + this.address + " : status changd to " + this.status);
                };
                // Define string constants for active and deleted
                UserModel.ACTIVE = "active";
                UserModel.DELETED = "deleted";
                return UserModel;
            })();
            exports_1("UserModel", UserModel);
            DynamicStylingSnippet = (function () {
                function DynamicStylingSnippet() {
                    this.users = [
                        new UserModel(1, 'Fred Flintstone', '301 Cobblestone Way, Bedrock 70777'),
                        new UserModel(2, 'Barney Rubble', '302 Cobblestone Way, Bedrock 70777')
                    ];
                }
                DynamicStylingSnippet = __decorate([
                    angular2_1.Component({
                        selector: "dynamic-styling-snippet"
                    }),
                    angular2_1.View({
                        template: "\n\t\t<h2>Dynamic styling snippet</h2>\n\t\t<p>\n\t\t\tDemonstrates how to modify styling based on model properties.\n\n\t\t\tThe 'Active'/'Deactivate' buttons on each user panel set the 'status' property on each user to 'active' and\n\t\t\t'deleted' respectively.<br>\n\t\t\tThe status property defines which style is used for the panel using the [ng-class] directive, which changes\n\t\t\tdynamically.<br>\n\t\t\tThe 'Activate' and 'Deactivate' buttons are rendered when the status is 'deleted' and 'active' respectively\n\t\t\tmaking use of the [Ng-If] directive.<br>\n\t\t\tChanges to the user properties done via the interface are logged in the console.\n\t\t</p>\n\n\t\t<h3>Issues</h3>\n\t\t<p>\n\t\t\tRather than specifying the string literal of the user's 'status' property when defining styles on the\n\t\t\t'user-renderer' component, we should be able to use the notation '.&dollar;{UserModel.ACTIVE}' to reference\n\t\t\tthe static string property directly.<br>\n\t\t\tI can't seem to get this working properly in this project - see the angular-login-filtering-demo on GitHub\n\t\t\tto see it working as intended.\n\t\t</p>\n\n\t\t<h3>Snippet</h3>\n\t\t<hr/>\n\n        <!-- Use [*ng-for] to loop through an array of items.\n        <!-- The [#user] notation allows the 'user' object to be accessed again within the template. -->\n        <user-renderer *ng-for=\"#user of users\" [user]=\"user\"></user-renderer>\n\n\t",
                        directives: [angular2_1.NgFor, user_renderer_1.UserRenderer]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DynamicStylingSnippet);
                return DynamicStylingSnippet;
            })();
            exports_1("DynamicStylingSnippet", DynamicStylingSnippet);
        }
    }
});
//# sourceMappingURL=dynamic-styling.js.map