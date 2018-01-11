webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    background-color: #69D3D6;    \r\n    margin: 0;\r\n    border: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<flash-message></flash-message>\r\n<router-outlet></router-outlet>\r\n \r\n<!--Complete-->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//Complete 


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_new_account_new_account_component__ = __webpack_require__("../../../../../src/app/components/new-account/new-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_student_dash_student_dash_component__ = __webpack_require__("../../../../../src/app/components/student-dash/student-dash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_student_work_student_work_component__ = __webpack_require__("../../../../../src/app/components/student-work/student-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'new-account', component: __WEBPACK_IMPORTED_MODULE_5__components_new_account_new_account_component__["a" /* NewAccountComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'student-dash', component: __WEBPACK_IMPORTED_MODULE_6__components_student_dash_student_dash_component__["a" /* StudentDashComponent */] },
    { path: 'student-work', component: __WEBPACK_IMPORTED_MODULE_7__components_student_work_student_work_component__["a" /* StudentWorkComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_new_account_new_account_component__["a" /* NewAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_student_dash_student_dash_component__["a" /* StudentDashComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_student_work_student_work_component__["a" /* StudentWorkComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["RouterModule"].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_12_angular_flash_message__["FlashMessageModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//Complete 


/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**Let use percentages instead of pixels. -Vincent**/\r\n\r\n/***Login Img***/\r\n.login-img {\r\n    /* position: absolute; */\r\n    padding-top: 5%;\r\n    max-width: 20%;\r\n    max-height: 20%;\r\n    height: auto;\r\n    display: block;\r\n    margin: 0 auto;\r\n    font-family: 'Brandon Grotesque';\r\n}\r\n/***End of login img***/\r\n\r\n\r\n/***Inside form-input***/\r\n.form-group {\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n    font-family: 'Brandon Grotesque';\r\n}\r\n\r\n.btn-label {\r\n    margin: 2% auto;\r\n    color: #69D3D6;\r\n    text-decoration: none !important;\r\n    font-family: 'Brandon Grotesque';\r\n}\r\n\r\n\r\n.create-acc {\r\n    margin: 0 auto;\r\n    color: white;\r\n    text-decoration: none !important;\r\n    font-family: 'Brandon Grotesque';\r\n}\r\n/***End of form-input--Complete**/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid\">\r\n    <div class=\"container\">\r\n      <img class=\"login-img\" src=\"../../assets/img/logo_white_text.png\">\r\n      <!--<form class=\"form-input\" action=\"\"> \r\n        <div class=\"row\">\r\n          <input type=\"userName\" class=\"form-control input-form\" id=\"#\" placeholder=\"Username\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <input type=\"userPassword\" class=\"form-control input-form\" id=\"#\" placeholder=\"Password\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <input type=\"submit\" class=\"btn btn-light btn-lg login-btn text-center\" value=\"Submit\">          \r\n        </div>-->\r\n        \r\n\r\n      <form (submit)=\"onLoginSubmit()\">\r\n        <div class=\"form-group text-center\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\">\r\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\r\n\r\n        </div>\r\n        <!-- <div class=\"form-group text-center\">\r\n        </div> -->\r\n        <div class=\"btn-label text-center\">\r\n          <input type=\"submit\" class=\"btn btn-primary btn-light\" value=\"Login\">\r\n        </div>\r\n        <div class=\"row text-center\">\r\n          <a href=\"http://localhost:4200/new-account\" id=\"#\" class=\"create-acc\">Create a New Account</a>          \r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.authService.storeUserData(data, user);
                _this.flashMessage.info('You are logged in', {
                    cssClass: 'alert-success',
                    timeout: 7000
                });
                _this.router.navigate(['/student-dash']);
            }
            else {
                _this.flashMessage.info('Please Enter a Valid Login', {
                    cssClass: 'alert-danger',
                    timeout: 7000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__["FlashMessage"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/new-account/new-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nbody {\r\n    background-color: #69D3D6;    \r\n}\r\n\r\n/***Login Img***/\r\n.login-img {\r\n    /* position: absolute; */\r\n    padding-top: 5%;\r\n    max-width: 20%;\r\n    max-height: 20%;\r\n    height: auto;\r\n    display: block;\r\n    margin: 0 auto;\r\n    font-family: 'Brandon Grotesque';\r\n\r\n}\r\n/***End of login img***/\r\n\r\n\r\n/***Inside form-input***/\r\n.form-group {\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n    font-family: 'Brandon Grotesque';\r\n}\r\n\r\n.input-form {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    padding: 5px;\r\n    font-family: 'Brandon Grotesque';\r\n}\r\n\r\n.checkbox {\r\n    margin-top: 5px;\r\n    font-family: 'Brandon Grotesque';\r\n}\r\n\r\n.btn-label {\r\n    padding: 5px;\r\n    color: #69D3D6;\r\n    text-decoration: none !important;\r\n    font-family: 'Brandon Grotesque';\r\n}\r\n\r\n/***End of form-input***/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-account/new-account.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"container-fluid text-center\">\r\n    <div class=\"container text-center\">\r\n      <img class=\"login-img\" src=\"../../assets/img/logo_white_text.png\">\r\n    </div>\r\n    <form (submit)=\"onRegisterSubmit()\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"First and Last Name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\"class=\"form-control\" placeholder=\"Email Address\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Create Username\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Create Password\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" [(ngModel)]=\"usertype\" name=\"usertype\" class=\"form-control\" placeholder=\"User Type (Student, Teacher or Parent)\">\r\n      </div>\r\n      <div class=\"row checkbox\">\r\n        <div class=\"col-sm-12\">\r\n          <input type=\"checkbox\"> I Am Not a Robot <br>\r\n        </div>  \r\n      </div>\r\n      <div class=\"btn-label text-center\">\r\n        <input type=\"submit\" class=\"btn btn-primary btn-light\" value=\"Register\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n</body>   \r\n     <!-- <div class=\"row text-center\">\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"firstName\" class=\"form-control input-form\" id=\"#\" placeholder=\"First Name\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"lastName\" class=\"form-control input-form\" id=\"#\" placeholder=\"Last Name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-sm-12\">\r\n          <input type=\"email\" class=\"form-control input-form\" id=\"#\" placeholder=\"Email\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-sm-12\">\r\n          <input type=\"phoneNumber\" class=\"form-control input-form\" id=\"#\" placeholder=\"Phone Number (Optional)\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-sm-12\">\r\n          <input type=\"createUsername\" class=\"form-control input-form\" id=\"#\" placeholder=\"Create Username\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-sm-12\">\r\n          <input type=\"confirmUsername\" class=\"form-control input-form\" id=\"#\" placeholder=\"Confirm Username\">\r\n        </div>  \r\n      </div>\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-sm-12\">\r\n          <input type=\"createPassword\" class=\"form-control input-form\" id=\"#\" placeholder=\"Create Password\">\r\n        </div>\r\n      </div>\r\n      <!--<div class=\"row text-center\">\r\n        <div class=\"col-sm-12\">\r\n          <input type=\"confirmPassword\" class=\"form-control input-form\" id=\"#\" placeholder=\"Confirm Password\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row text-center\">\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"userType\" class=\"form-control input-form\" id=\"#\" placeholder=\"User Type (Student, Parent, Teacher)\">\r\n          </div>\r\n        </div>\r\n      <div class=\"row checkbox\">\r\n        <div class=\"col-sm-12\">\r\n          <input type=\"checkbox\"> I Am Not a Robot <br>\r\n        </div>  \r\n      </div>\r\n      <div class=\"row text-center\">\r\n        <input type=\"submit\" class=\"btn btn-light btn-lg login-btn text-center\" value=\"Submit\">            \r\n      </div>\r\n    </form>\r\n  </div>   \r\n</body>-->"

/***/ }),

/***/ "../../../../../src/app/components/new-account/new-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewAccountComponent = (function () {
    function NewAccountComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    NewAccountComponent.prototype.ngOnInit = function () {
    };
    NewAccountComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            usertype: this.usertype,
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.info('Please fill in all fields', { cssClass: 'alert-danger', timeout: 7000 });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.info('Please use a valid email', { cssClass: 'alert-danger', timeout: 7000 });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.flashMessage.info('You are now registered and can log in', { cssClass: 'alert-success', timeout: 7000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.info('Something went wrong', { cssClass: 'alert-danger', timeout: 7000 });
                _this.router.navigate(['/new-account']); //navigate back to the new-account page//
            }
        });
    };
    NewAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-account',
            template: __webpack_require__("../../../../../src/app/components/new-account/new-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new-account/new-account.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_3_angular_flash_message__["FlashMessage"], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]])
    ], NewAccountComponent);
    return NewAccountComponent;
}());

/*Complete*/


/***/ }),

/***/ "../../../../../src/app/components/student-dash/student-dash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Universals*/\r\n/***Side Bar***/\r\n.row {\r\n    /* display: -ms-flexbox; */\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    /* -ms-flex-wrap: wrap; */\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n}\r\n\r\n.sidebar {\r\n    background-color: #69D3D6;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    z-index: 1000;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border-right: 1px solid #eee;\r\n    font-family: 'Brandon Grotesque';\r\n    padding: 20px;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n.panel-section {\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n\r\n\r\n/***End of Side Bar***/\r\n\r\n\r\nh4 {\r\n    font-size: 20px;\r\n    padding: 10px;\r\n    font-family: 'Brandon Grotesque';\r\n}\r\n\r\nh5 {\r\n    font-size: 40px;\r\n    padding: 10px;\r\n    font-family: 'Brandon Grotesque';\r\n}\r\nh1 {\r\n \r\n    font-family: 'Brandon Grotesque';\r\n    font-size: 20px;\r\n}\r\n\r\n.panel-body {\r\n    background-color: #69D3D6;\r\n    padding: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.panel-section {\r\n    background-color: white;\r\n    padding: 10px;\r\n    margin: 20px;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/student-dash/student-dash.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n    <meta name=\"description\" content=\"\">\r\n    <meta name=\"author\" content=\"\">\r\n    <link rel=\"icon\" href=\"../../../../favicon.ico\">\r\n  </head>\r\n  <body>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <nav class=\"col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar\">\r\n          <!--<div class=\"col-sm-3 col-md-2 placeholder\">-->\r\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"150\" height=\"150\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n            <h4>Welcome Back Student!</h4>\r\n            \r\n    \r\n          <!--<nav class=\"col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar\">-->\r\n            <ul class=\"nav nav-pills flex-column\">\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Alerts and Messages<span class=\"sr-only\">(current)</span></a>\r\n              </li>\r\n             <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Reports</a>\r\n             </li>\r\n             <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Questions</a>\r\n             </li>\r\n             \r\n             <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n            </ul>\r\n          </nav>\r\n              \r\n              <!--li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/home']\">Messages</a>\r\n              </li>\r\n            </ul>\r\n      \r\n            <ul class=\" nav navbar-nav navbar-right\">\r\n              <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Reports</a>\r\n              </li>\r\n              \r\n              <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Questions</a>\r\n              </li>   \r\n      \r\n              <li><a (click)=\"onLogoutClick()\">Logout</a></li>-->\r\n        \r\n          <!--Subjects-->\r\n\r\n\r\n        <div class=\"col-sm-10 offset-sm-2 text-center\">\r\n          <h5>Subjects</h5>\r\n          <div class=\"panel-body\">\r\n\r\n            <h4>In Progress</h4>\r\n            <div class=\"panel-section\">\r\n                <a href=\"http://localhost:4200/student-work\">Math Diagnostic Test</a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"panel-body\">\r\n            <h4>Mathematics</h4>\r\n            <div class=\"panel-section\">\r\n              <h1>Math Diagnostic Test</h1>\r\n              <h1>Number Sense Test #1</h1>\r\n              <h1>Number Sense Test #2</h1>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"panel-body\">\r\n            <h4>Language Arts</h4>\r\n            <div class=\"panel-section\">\r\n              <h1>\r\n                None available at this time.\r\n              </h1>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> \r\n  </body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/student-dash/student-dash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentDashComponent = (function () {
    function StudentDashComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    StudentDashComponent.prototype.ngOnInit = function () {
    };
    StudentDashComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.info('You are logged out', {
            cssClass: 'alert-success',
            timeout: 7000
        });
        this.router.navigate(['/login']);
        return false;
    };
    StudentDashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-student-dash',
            template: __webpack_require__("../../../../../src/app/components/student-dash/student-dash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/student-dash/student-dash.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__["FlashMessage"]])
    ], StudentDashComponent);
    return StudentDashComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/student-work/student-work.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    background-color: #69D3D6;\r\n    color: #fff;\r\n    font-family: 'Brandon Grotesque';\r\n    font-weight: 500;\r\n    text-align: center;\r\n    font-size: 20pt;\r\n    margin: 0;\r\n}\r\n.page-container{\r\n    /* border: 1px dashed red; */\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.nav{\r\n    position: fixed;\r\n    width: 200px;\r\n    height: 100vh;\r\n    border: 1px dashed #1E1E1E;\r\n    position: absolute;\r\n    background-color: #1E1E1E;\r\n}\r\n#quiz{\r\n    /* border: 1px solid salmon; */\r\n    width: 100vw;\r\n}\r\n.quiz-container{\r\n    width: 100%;\r\n    height: 100%;\r\n    /* position: absolute; */\r\n    /* padding: 0px 20px; */\r\n    /* left: 200px; */\r\n    /* border: 1px solid blue; */\r\n}\r\n.apple{\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: red;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n.game-contain{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: space-evenly;\r\n        -ms-flex-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n    margin: 20px 0px;\r\n    /* height: 100%; */\r\n    /* border: 1px solid green; */\r\n}\r\n.container{\r\n    border: 3px dashed #fff;\r\n    height: 500px;;\r\n    width: 300px;\r\n    text-align: center;\r\n}\r\n.counters{\r\n    height: 500px;\r\n    width: 250px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/student-work/student-work.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n  <!-- <div class=\"nav\"> -->\r\n  <!-- </div>end of nav -->\r\n  <div class=\"quiz-container\">\r\n      <div id=\"quiz\"></div>\r\n      <button id=\"submit\">Check My Answers</button>\r\n      <div class=\"game-contain\">\r\n          <div id=\"one\" class=\"container\"></div>\r\n          <div class=\"counters\">\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n              <div class=\"apple\"></div>\r\n          </div>\r\n          <div id=\"two\" class=\"container\"></div>\r\n      </div>\r\n  </div><!--end of quiz container-->\r\n</div><!--end of container-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/student-work/student-work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentWorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var letter;
var StudentWorkComponent = (function () {
    function StudentWorkComponent() {
    }
    StudentWorkComponent.prototype.ngOnInit = function () {
        console.log('JavaScript goes here!');
        $(init);
        var firstContainer = document.querySelector('#one');
        var secondContainer = document.querySelector('#two');
        var amount1 = 0;
        var amount2 = 0;
        firstContainer.innerHTML = "Angelina: " + amount1;
        secondContainer.innerHTML = "Lacey: " + amount2;
        function init() {
            $('.apple').draggable({
                cursor: 'move',
                containment: 'window',
            });
            $('#one').droppable({
                drop: addAmountOne,
                out: subAmountOne
            });
            $('#two').droppable({
                drop: addAmountTwo,
                out: subAmountTwo
            });
        }
        function addAmountOne(event, ui) {
            amount1++;
            firstContainer.innerHTML = "Angelina: " + amount1;
        }
        function subAmountOne(event, ui) {
            amount1--;
            firstContainer.innerHTML = "Angelina: " + amount1;
        }
        function addAmountTwo(event, ui) {
            amount2++;
            secondContainer.innerHTML = "Lacey: " + amount2;
        }
        function subAmountTwo(event, ui) {
            amount2--;
            secondContainer.innerHTML = "Lacey: " + amount2;
        }
        var quizContainer = document.querySelector('#quiz');
        var resultsContainer = document.querySelector('#results');
        var submitButton = document.querySelector('#submit');
        var output = [];
        var quizQuestions = [
            {
                question: "Angelina has 12 apples and Lacey has 7. Lacey gives 2 apples to Angelina. How many more apples does Angelina have than Lacey?",
                answers: {
                    A: "9",
                    B: "14",
                    C: "5"
                },
                correctAnswer: "A",
            }
        ];
        function buildQuiz() {
            var output = [];
            quizQuestions.forEach(function (currentQuestion, questionNumber) {
                var answers = [];
                for (letter in currentQuestion.answers) {
                    answers.push("<label>\n                      <input type=\"radio\" name=\"question" + questionNumber + "\" value=\"" + letter + "\"></input>\n                      " + letter + " :\n                      " + currentQuestion.answers[letter] + "\n                  </label>");
                }
                output.push("<div class=\"question\">" + currentQuestion.question + "</div>\n              <div class=\"answers\">" + answers.join('') + "</div>");
            });
            quizContainer.innerHTML = output.join('');
        }
        quizQuestions.forEach(function (currentQuestion, questionNumber) {
            var answers = [];
            for (letter in currentQuestion.answers) {
                answers.push("<label>\n              <input type=\"radio\" name=\"question" + questionNumber + "\" value=\"" + letter + "\"></input>\n              " + letter + " :\n              " + currentQuestion.answers[letter] + "\n          </label>");
            }
            output.push("<div class=\"question\"> " + currentQuestion.question + " </div>\n      <div class=\"answers\"> " + answers.join('') + " </div>");
            quizContainer.innerHTML = output.join('');
        });
        function showResults() {
            var answerContainers = quizContainer.querySelectorAll('.answers');
            var numCorrect = 0;
            quizQuestions.forEach(function (currentQuestion, questionNumber) {
                var answerContainer = answerContainers[questionNumber];
                var selector = "input[name=question" + questionNumber + "]:checked";
                var userAnswer = (answerContainer.querySelector(selector) || {}).value;
                if (userAnswer === currentQuestion.correctAnswer) {
                    numCorrect++;
                    answerContainers[questionNumber].setAttribute("style", "color: #00C100");
                }
                else {
                    answerContainers[questionNumber].setAttribute("style", "color: #FF1200");
                }
                resultsContainer.innerHTML = "You got " + numCorrect + " out of " + quizQuestions.length + " questions correct.";
            });
        }
        buildQuiz();
        submitButton.addEventListener('click', showResults);
    };
    StudentWorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-student-work',
            template: __webpack_require__("../../../../../src/app/components/student-work/student-work.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/student-work/student-work.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], StudentWorkComponent);
    return StudentWorkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/new-account', user, { headers: headers }); //.map(res => res.json());
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/login', user, { headers: headers }); //.map(res => res.json());
    };
    AuthService.prototype.getStudentDash = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/student-dash', { headers: headers }); //.map(res => res.json());
    };
    AuthService.prototype.getStudentWork = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/student-work', { headers: headers }); //.map(res => res.json());
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

//Complete 


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map