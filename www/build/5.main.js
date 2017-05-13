webpackJsonp([5],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_detail__ = __webpack_require__(283);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailPageModule", function() { return EventDetailPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventDetailPageModule = (function () {
    function EventDetailPageModule() {
    }
    return EventDetailPageModule;
}());
EventDetailPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__event_detail__["a" /* EventDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_detail__["a" /* EventDetailPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__event_detail__["a" /* EventDetailPage */]
        ]
    })
], EventDetailPageModule);

//# sourceMappingURL=event-detail.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(205);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventDetailPage = (function () {
    function EventDetailPage(navCtrl, navParams, eventProvider, cameraPlugin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventProvider = eventProvider;
        this.cameraPlugin = cameraPlugin;
        this.guestName = '';
        this.guestPicture = null;
    }
    EventDetailPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.eventProvider.getEventDetail(this.navParams.get('eventId')).then(function (eventSnap) {
            _this.currentEvent = eventSnap;
        });
    };
    EventDetailPage.prototype.addGuest = function (guestName) {
        var _this = this;
        this.eventProvider.addGuest(guestName, this.currentEvent.id, this.currentEvent.price, this.guestPicture).then(function () {
            _this.guestName = '';
            _this.guestPicture = null;
        });
    };
    EventDetailPage.prototype.takePicture = function () {
        var _this = this;
        this.cameraPlugin.getPicture({
            quality: 95,
            destinationType: this.cameraPlugin.DestinationType.DATA_URL,
            sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: this.cameraPlugin.EncodingType.PNG,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: true
        }).then(function (imageData) {
            _this.guestPicture = imageData;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    return EventDetailPage;
}());
EventDetailPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'event-detail',
        segment: 'event-detail/:eventId'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-event-detail',template:/*ion-inline-start:"C:\Users\wg13w\desktop\test\src\pages\event-detail\event-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-row padding>\n\n    <ion-col col-8>\n\n      Current Revenue\n\n    </ion-col>\n\n    <ion-col col-4 [class.profitable]="currentEvent?.revenue > 0"\n\n      [class.no-profit]="currentEvent?.revenue < 0">\n\n      {{currentEvent?.revenue}}\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      {{currentEvent?.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>Ticket: <strong>${{currentEvent?.price}}</strong></p>\n\n      <p>Date: <strong>{{currentEvent?.date}}</strong></p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card class="add-guest-form">\n\n    <ion-card-header>\n\n      Add Guests\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list no-lines>\n\n        <ion-item>\n\n          <ion-label stacked>Name</ion-label>\n\n          <ion-input [(ngModel)]="guestName" type="text"\n\n            placeholder="What\'s your guest\'s name?"></ion-input>\n\n        </ion-item>\n\n        <span *ngIf="guestPicture">Picture taken!</span>\n\n\n\n        <button ion-button color="primary" block (click)="takePicture()">\n\n          Take a Picture\n\n        </button>\n\n\n\n        <button ion-button color="primary" block (click)="addGuest(guestName)">\n\n          Add Guest\n\n        </button>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\wg13w\desktop\test\src\pages\event-detail\event-detail.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]) === "function" && _d || Object])
], EventDetailPage);

var _a, _b, _c, _d;
//# sourceMappingURL=event-detail.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map