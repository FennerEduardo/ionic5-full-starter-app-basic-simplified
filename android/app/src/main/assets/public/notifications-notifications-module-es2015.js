(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Notifications\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"notifications-content\">\n  <ng-container *ngIf=\"notifications\">\n    <ion-item-group>\n      <ion-item-divider sticky>\n        <ion-label>Today</ion-label>\n      </ion-item-divider>\n      <ion-item class=\"notification-item\" lines=\"none\" *ngFor=\"let notification of notifications.today\">\n        <ion-row class=\"notification-item-wrapper\">\n          <ion-col size=\"2\">\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"notification-image\" [src]=\"notification.image\" [alt]=\"'user image'\"></app-image-shell>\n            </app-aspect-ratio>\n          </ion-col>\n          <ion-col class=\"details-wrapper\">\n            <h2 class=\"details-name\">{{ notification.name }}</h2>\n            <p class=\"details-description\">{{ notification.message }}</p>\n          </ion-col>\n          <ion-col size=\"2\" class=\"date-wrapper\">\n            <h3 class=\"notification-date\">{{ notification.date }}</h3>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider sticky>\n        <ion-label>Yesterday</ion-label>\n      </ion-item-divider>\n      <ion-item class=\"notification-item\" lines=\"none\" *ngFor=\"let notification of notifications.yesterday\">\n        <ion-row class=\"notification-item-wrapper\">\n          <ion-col size=\"2\">\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"notification-image\" [src]=\"notification.image\" [alt]=\"'user image'\"></app-image-shell>\n            </app-aspect-ratio>\n          </ion-col>\n          <ion-col class=\"details-wrapper\">\n            <h2 class=\"details-name\">{{ notification.name }}</h2>\n            <p class=\"details-description\">{{ notification.message }}</p>\n          </ion-col>\n          <ion-col size=\"2\" class=\"date-wrapper\">\n            <h3 class=\"notification-date\">{{ notification.date }}</h3>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-item-group>\n  </ng-container>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");
/* harmony import */ var _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notifications/notifications.resolver */ "./src/app/notifications/notifications.resolver.ts");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");










let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _notifications_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPage"],
                    resolve: {
                        data: _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__["NotificationsResolver"]
                    }
                }
            ])
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPage"]],
        providers: [
            _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__["NotificationsResolver"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"]
        ]
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NotificationsPage = class NotificationsPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        if (this.route && this.route.data) {
            this.route.data.subscribe(resolvedData => {
                const dataSource = resolvedData['data'];
                if (dataSource) {
                    dataSource.source.subscribe(pageData => {
                        if (pageData) {
                            this.notifications = pageData;
                        }
                    });
                }
            });
        }
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/notifications.page.scss */ "./src/app/notifications/styles/notifications.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/notifications.shell.scss */ "./src/app/notifications/styles/notifications.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], NotificationsPage);



/***/ }),

/***/ "./src/app/notifications/notifications.resolver.ts":
/*!*********************************************************!*\
  !*** ./src/app/notifications/notifications.resolver.ts ***!
  \*********************************************************/
/*! exports provided: NotificationsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsResolver", function() { return NotificationsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.service */ "./src/app/notifications/notifications.service.ts");



let NotificationsResolver = class NotificationsResolver {
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    resolve() {
        // Base Observable (where we get data from)
        const dataObservable = this.notificationsService.getData();
        return { source: dataObservable };
    }
};
NotificationsResolver.ctorParameters = () => [
    { type: _notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"] }
];
NotificationsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]])
], NotificationsResolver);



/***/ }),

/***/ "./src/app/notifications/notifications.service.ts":
/*!********************************************************!*\
  !*** ./src/app/notifications/notifications.service.ts ***!
  \********************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let NotificationsService = class NotificationsService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http.get('./assets/sample-data/notifications.json');
    }
};
NotificationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], NotificationsService);



/***/ }),

/***/ "./src/app/notifications/styles/notifications.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/notifications/styles/notifications.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.notifications-content ion-item-divider {\n  --background: var(--ion-color-light);\n  --padding-start: var(--page-margin);\n}\n\n.notifications-content .notification-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  padding: var(--page-margin);\n  color: var(--ion-color-medium);\n  box-shadow: inset 0 8px 2px -9px var(--ion-color-darkest);\n}\n\n.notifications-content .notification-item .notification-item-wrapper {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.notifications-content .notification-item .details-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  padding-left: var(--page-margin);\n}\n\n.notifications-content .notification-item .details-wrapper .details-name {\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-secondary);\n}\n\n.notifications-content .notification-item .details-wrapper .details-description {\n  font-size: 12px;\n  margin: 0px;\n}\n\n.notifications-content .notification-item .date-wrapper {\n  align-self: flex-start;\n}\n\n.notifications-content .notification-item .date-wrapper .notification-date {\n  margin: 0px;\n  font-size: 12px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9ub3RpZmljYXRpb25zL3N0eWxlcy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm90aWZpY2F0aW9ucy9zdHlsZXMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1Q0FBQTtBQ0RGOztBRE1FO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtBQ0hKOztBRE1FO0VBQ0Usb0JBQUE7RUFDQSx3QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQ0xKOztBRE9JO0VBQ0UsOEJBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ05OOztBRFNJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ1BOOztBRFNNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNELGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQ1BQOztBRFVNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNSUjs7QURZSTtFQUNFLHNCQUFBO0FDVk47O0FEWU07RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNWUiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvc3R5bGVzL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4ubm90aWZpY2F0aW9ucy1jb250ZW50IHtcbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgOHB4IDJweCAtOXB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgIC5ub3RpZmljYXRpb24taXRlbS13cmFwcGVyIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICAuZGV0YWlscy1uYW1lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIFx0Zm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB9XG5cbiAgICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGF0ZS13cmFwcGVyIHtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG5cbiAgICAgIC5ub3RpZmljYXRpb24tZGF0ZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xufVxuXG4ubm90aWZpY2F0aW9ucy1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLm5vdGlmaWNhdGlvbnMtY29udGVudCAubm90aWZpY2F0aW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCA4cHggMnB4IC05cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLm5vdGlmaWNhdGlvbnMtY29udGVudCAubm90aWZpY2F0aW9uLWl0ZW0gLm5vdGlmaWNhdGlvbi1pdGVtLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5vdGlmaWNhdGlvbnMtY29udGVudCAubm90aWZpY2F0aW9uLWl0ZW0gLmRldGFpbHMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWxzLXdyYXBwZXIgLmRldGFpbHMtbmFtZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLm5vdGlmaWNhdGlvbnMtY29udGVudCAubm90aWZpY2F0aW9uLWl0ZW0gLmRldGFpbHMtd3JhcHBlciAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubm90aWZpY2F0aW9ucy1jb250ZW50IC5ub3RpZmljYXRpb24taXRlbSAuZGF0ZS13cmFwcGVyIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5kYXRlLXdyYXBwZXIgLm5vdGlmaWNhdGlvbi1kYXRlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/notifications/styles/notifications.shell.scss":
/*!***************************************************************!*\
  !*** ./src/app/notifications/styles/notifications.shell.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.notification-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9ub3RpZmljYXRpb25zL3N0eWxlcy9ub3RpZmljYXRpb25zLnNoZWxsLnNjc3MiLCJzcmMvYXBwL25vdGlmaWNhdGlvbnMvc3R5bGVzL25vdGlmaWNhdGlvbnMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL3N0eWxlcy9ub3RpZmljYXRpb25zLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwubm90aWZpY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwubm90aWZpY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map