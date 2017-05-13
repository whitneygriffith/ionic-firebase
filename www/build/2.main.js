webpackJsonp([2],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(285);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(control.value);
        if (re) {
            return null;
        }
        return { "invalidEmail": true };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl, alertCtrl, authProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required])]
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (AuthProvider) {
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    LoginPage.prototype.goToSignup = function () { this.navCtrl.push('signup'); };
    LoginPage.prototype.goToResetPassword = function () { this.navCtrl.push('reset-password'); };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'login'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\wg13w\desktop\test\src\pages\login\login.html"*/'<ion-header>\n\n<ion-navbar color="primary">\n\n<ion-title>\n\nLog In\n\n</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<img src="http://placehold.it/300x100">\n\n<form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n<ion-item>\n\n<ion-label stacked>Email</ion-label>\n\n<ion-input formControlName="email" type="email" placeholder="Your email\n\naddress"\n\n[class.invalid]="!loginForm.controls.email.valid &&\n\nloginForm.controls.email.dirty"></ion-input>\n\n</ion-item>\n\n<ion-item class="error-message"\n\n*ngIf="!loginForm.controls.email.valid &&\n\nloginForm.controls.email.dirty">\n\n<p>Please enter a valid email.</p>\n\n</ion-item>\n\n<ion-item>\n\n<ion-label stacked>Password</ion-label>\n\n<ion-input formControlName="password" type="password" placeholder="Your\n\npassword"\n\n[class.invalid]="!loginForm.controls.password.valid &&\n\nloginForm.controls.password.dirty"></ion-input>\n\n</ion-item>\n\n<ion-item class="error-message"\n\n*ngIf="!loginForm.controls.password.valid &&\n\nloginForm.controls.password.dirty">\n\n<p>Your password needs more than 6 characters.</p>\n\n</ion-item>\n\n<button ion-button block type="submit" [disabled]="!loginForm.valid">\n\nLogin\n\n</button>\n\n</form>\n\n<button ion-button block clear (click)="goToSignup()">\n\nCreate a new account\n\n</button>\n\n<button ion-button block clear (click)="goToResetPassword()">\n\nI forgot my password\n\n</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\wg13w\desktop\test\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map