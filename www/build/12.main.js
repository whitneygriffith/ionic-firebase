webpackJsonp([12],{

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_detail__ = __webpack_require__(261);
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

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(277);
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
    function EventDetailPage(navCtrl, navParams, eventProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventProvider = eventProvider;
    }
    EventDetailPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.eventProvider.getEventDetail(this.navParams.get('eventId'))
            .then(function (eventSnap) {
            _this.currentEvent = eventSnap;
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
        selector: 'page-event-detail',template:/*ion-inline-start:"C:\Users\wg13w\desktop\test\src\pages\event-detail\event-detail.html"*/'\n<ion-header>\n<ion-navbar>\n<ion-title></ion-title>\n</ion-navbar>\n</ion-header>\n<ion-content>\n<ion-row padding>\n<ion-col col-8>\nCurrent Revenue\n</ion-col>\n84\n<ion-col col-4 [class.profitable]="currentEvent?.revenue > 0"\n[class.no-profit]="currentEvent?.revenue < 0">\n{{currentEvent?.revenue}}\n</ion-col>\n</ion-row>\n<ion-card>\n<ion-card-header>\n{{currentEvent?.name}}\n</ion-card-header>\n<ion-card-content>\n<p>Ticket: <strong>${{currentEvent?.price}}</strong></p>\n<p>Date: <strong>{{currentEvent?.date}}</strong></p>\n</ion-card-content>\n</ion-card>\n\n<ion-card class="add-guest-form">\n<ion-card-header>\nAdd Guests\n</ion-card-header>\n<ion-card-content>\n<ion-list no-lines>\n<ion-item>\n<ion-label stacked>Name</ion-label>\n<ion-input [(ngModel)]="guestName" type="text"\nplaceholder="What\'s your guest\'s name?"></ion-input>\n</ion-item>\n<button ion-button color="primary" block (click)="addGuest(guestName)">\nAdd Guest\n</button>\n</ion-list>\n</ion-card-content>\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\wg13w\desktop\test\src\pages\event-detail\event-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
], EventDetailPage);

//# sourceMappingURL=event-detail.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map