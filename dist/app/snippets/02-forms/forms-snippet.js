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
    var FormsSnippet;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            FormsSnippet = (function () {
                function FormsSnippet() {
                    this.pwdForm = null;
                    this.emailCtrl = null;
                    this.passwordCtrl = null;
                    this.passwordConfirmCtrl = null;
                    this.setupForm(null /*useDefault*/);
                }
                FormsSnippet.prototype.setupForm = function (withData) {
                    if (withData === undefined || withData === null) {
                        // use empty set
                        withData = {
                            email: "",
                            password: "",
                            passwordConfirm: ""
                        };
                    }
                    this.emailCtrl = new angular2_1.Control(withData.email, angular2_1.Validators.required);
                    this.passwordCtrl = new angular2_1.Control(withData.password, angular2_1.Validators.required);
                    this.passwordConfirmCtrl = new angular2_1.Control(withData.passwordConfirm, angular2_1.Validators.required);
                    this.pwdForm = new angular2_1.ControlGroup({
                        email: this.emailCtrl,
                        pwd: new angular2_1.ControlGroup({
                            password: this.passwordCtrl,
                            passwordConfirm: this.passwordConfirmCtrl
                        })
                    });
                };
                Object.defineProperty(FormsSnippet.prototype, "cgValue", {
                    get: function () {
                        return JSON.stringify(this.pwdForm.value, null, 2);
                    },
                    enumerable: true,
                    configurable: true
                });
                /// MUST be a better way of doing this!
                FormsSnippet.prototype.emulateLoad = function () {
                    var _this = this;
                    var data = {
                        email: "bob@sky.com",
                        password: "lots",
                        passwordConfirm: "of letters and symbols"
                    };
                    setTimeout(function () {
                        // emulate an Http request callback
                        _this.setupForm(data);
                    }, 1000);
                };
                FormsSnippet = __decorate([
                    angular2_1.Component({
                        selector: "forms-snippet"
                    }),
                    angular2_1.View({
                        template: "\n\t\t<div class=\"left-pane\">\n\t\t\t<h2>FORMS Snippet</h2>\n\t\t\t<p>\n\t\t\t\tIllustrates using forms\n\t\t\t</p>\n\t\t\t\n\t\t\t<h3>Issues</h3>\n\t\t\t<p>\n\t\t\t\t1 - Can't find a way of setting the data in the form once it's been loaded - having to resort to rebuilding the form!\n\t\t\t</p>\n\t\t\t\n\t\t\t<h3>Resources</h3>\n\t\t\t- <a href=\"http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview\">Plunkr illustration</a>\n\t\t</div>\n\t\t\t\n\t\t<div class=\"right-pane\">\t\t\t\n\t\t\t<h3>Snippet</h3>\n\t\t\t<hr/>\n\t\t\t\t\t\n\t\t\t<div>\n\t\t\t\t<form [ng-form-model]=\"pwdForm\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<label for=\"email\">email</label>\n\t\t\t\t\t\t<input id=\"email\" ng-control=\"email\">\n\t\t\t\t\t\t<span class=\"error-ind\" *ng-if=\"!emailCtrl.valid\">*</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div ng-control-group=\"pwd\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<label for=\"password\">password</label>\n\t\t\t\t\t\t\t<input id=\"password\" ng-control=\"password\">\n\t\t\t\t\t\t\t<span class=\"error-ind\" *ng-if=\"!passwordCtrl.valid\">*</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<label for=\"pwd-conf\">password</label>\n\t\t\t\t\t\t\t<input id=\"pwd-conf\" ng-control=\"passwordConfirm\">\n\t\t\t\t\t\t\t<span class=\"error-ind\" *ng-if=\"!passwordConfirmCtrl.valid\">*</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<button (click)=\"emulateLoad()\">Emulate data load</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div>\n\t\t\t\t<h3>Value:</h3>\n\t\t\t\t<pre>{{cgValue}}</pre>\n\t\t\t\t<h3>Validity:</h3>\n\t\t\t\t<pre>{{pwdForm.valid}}</pre>\n\t\t\t</div>\n\t\t\t\n\t\t\t<style scope>\n\t\t\t\tlabel {\n\t\t\t\t\twidth: 150px;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t}\n\t\t\t\t.error-ind {\n\t\t\t\t\tcolor: red;\n\t\t\t\t\tfont-size: large;\n\t\t\t\t}\n\t\t\t</style>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t",
                        directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormsSnippet);
                return FormsSnippet;
            })();
            exports_1("FormsSnippet", FormsSnippet);
        }
    }
});
//# sourceMappingURL=forms-snippet.js.map