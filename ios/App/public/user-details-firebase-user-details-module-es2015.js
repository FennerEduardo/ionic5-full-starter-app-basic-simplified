(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-details-firebase-user-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/details/firebase-user-details.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/details/firebase-user-details.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"firebase/listing\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>User Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openFirebaseUpdateModal()\">\n        Edit\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-content\">\n  <ion-row class=\"user-info-row\">\n    <ion-col class=\"user-image-col\" size=\"5\">\n      <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n        <app-image-shell [display]=\"'cover'\" class=\"user-image\" animation=\"spinner\" [src]=\"user.avatar\" [alt]=\"'item image'\">\n        </app-image-shell>\n      </app-aspect-ratio>\n    </ion-col>\n    <ion-col class=\"user-details-col\" size=\"12\">\n      <h2 class=\"user-name\">\n        <app-text-shell animation=\"bouncing\" [data]=\"user.name?.concat(' ').concat(user.lastname)\"></app-text-shell>\n      </h2>\n      <span class=\"user-age\">\n        <app-text-shell animation=\"bouncing\" [data]=\"user.age?.toString().concat(' years young')\"></app-text-shell>\n      </span>\n    </ion-col>\n    <ion-col class=\"actions-col\" size=\"12\">\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-button class=\"action-btn\" color=\"secondary\">\n            <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"mail\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button class=\"action-btn\" color=\"secondary\">\n            <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"call\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button class=\"action-btn\" color=\"secondary\">\n            <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"videocam\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button class=\"action-btn\" color=\"secondary\">\n            <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"text\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <section class=\"content-section user-languages-wrapper\">\n    <h5 class=\"section-header\">Languages</h5>\n    <ion-row class=\"language-item-row\">\n      <ion-col class=\"language-item\">\n        <span class=\"language-name\">English</span>\n        <ion-progress-bar class=\"language-score\" type=\"determinate\" [value]=\"(user.languages?.english / 10)\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"language-item-row\">\n      <ion-col class=\"language-item\">\n        <span class=\"language-name\">Spanish</span>\n        <ion-progress-bar class=\"language-score\" type=\"determinate\" [value]=\"(user.languages?.spanish / 10)\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"language-item-row\">\n      <ion-col class=\"language-item\">\n        <span class=\"language-name\">French</span>\n        <ion-progress-bar class=\"language-score\" type=\"determinate\" [value]=\"(user.languages?.french / 10)\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n  </section>\n\n  <section class=\"content-section user-experience-wrapper\">\n    <h5 class=\"section-header\">Skills</h5>\n    <ion-list class=\"experience-list\" lines=\"none\">\n      <ion-item class=\"experience-item\" *ngFor=\"let skill of user.skills\">\n        <label class=\"experience-label\">\n          <app-text-shell animation=\"bouncing\" [data]=\"skill?.name\"></app-text-shell>\n        </label>\n        <ion-icon class=\"experience-list-icon\" slot=\"start\" name=\"checkmark\" color=\"secondary\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </section>\n\n  <section class=\"content-section related-users-wrapper\" *ngIf=\"relatedUsers.length > 0\">\n    <h5 class=\"section-header\">Users with similar skills</h5>\n    <ion-row class=\"related-users-row\">\n      <ion-col class=\"related-user-item\" size=\"2\" *ngFor=\"let user of relatedUsers\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [display]=\"'cover'\" class=\"related-user-picture\" [src]=\"user.avatar\" [routerLink]=\"['/firebase/details', user.id]\"></app-image-shell>\n        </app-aspect-ratio>\n        <span class=\"related-user-name\">\n          <app-text-shell [data]=\"user.name\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/firebase/user/details/firebase-user-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/firebase/user/details/firebase-user-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: FirebaseUserDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsPageModule", function() { return FirebaseUserDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _firebase_user_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./firebase-user-details.page */ "./src/app/firebase/user/details/firebase-user-details.page.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./firebase-user-details.resolver */ "./src/app/firebase/user/details/firebase-user-details.resolver.ts");










const routes = [
    {
        path: '',
        component: _firebase_user_details_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseUserDetailsPage"],
        resolve: {
            data: _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseUserDetailsResolver"]
        }
    }
];
let FirebaseUserDetailsPageModule = class FirebaseUserDetailsPageModule {
};
FirebaseUserDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        declarations: [_firebase_user_details_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseUserDetailsPage"]],
        providers: [
            _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"],
            _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseUserDetailsResolver"]
        ]
    })
], FirebaseUserDetailsPageModule);



/***/ }),

/***/ "./src/app/firebase/user/details/firebase-user-details.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/firebase/user/details/firebase-user-details.page.ts ***!
  \*********************************************************************/
/*! exports provided: FirebaseUserDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsPage", function() { return FirebaseUserDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update/firebase-update-user.modal */ "./src/app/firebase/user/update/firebase-update-user.modal.ts");






let FirebaseUserDetailsPage = class FirebaseUserDetailsPage {
    constructor(firebaseService, modalController, router, route) {
        this.firebaseService = firebaseService;
        this.modalController = modalController;
        this.router = router;
        this.route = route;
    }
    get isShell() {
        return ((this.user && this.user.isShell) || (this.relatedUsers && this.relatedUsers.isShell)) ? true : false;
    }
    ngOnInit() {
        this.route.data.subscribe((resolvedRouteData) => {
            const resolvedDataStores = resolvedRouteData['data'];
            const combinedDataStore = resolvedDataStores.user;
            const relatedUsersDataStore = resolvedDataStores.relatedUsers;
            combinedDataStore.state.subscribe((state) => {
                this.user = state;
            });
            relatedUsersDataStore.state.subscribe((state) => {
                this.relatedUsers = state;
            });
        });
    }
    openFirebaseUpdateModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_5__["FirebaseUpdateUserModal"],
                componentProps: {
                    'user': this.user
                }
            });
            yield modal.present();
        });
    }
};
FirebaseUserDetailsPage.ctorParameters = () => [
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FirebaseUserDetailsPage.prototype, "isShell", null);
FirebaseUserDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-firebase-user-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./firebase-user-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/details/firebase-user-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/firebase-user-details.page.scss */ "./src/app/firebase/user/details/styles/firebase-user-details.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/firebase-user-details.shell.scss */ "./src/app/firebase/user/details/styles/firebase-user-details.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], FirebaseUserDetailsPage);



/***/ }),

/***/ "./src/app/firebase/user/details/firebase-user-details.resolver.ts":
/*!*************************************************************************!*\
  !*** ./src/app/firebase/user/details/firebase-user-details.resolver.ts ***!
  \*************************************************************************/
/*! exports provided: FirebaseUserDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsResolver", function() { return FirebaseUserDetailsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");



let FirebaseUserDetailsResolver = class FirebaseUserDetailsResolver {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    resolve(route) {
        const userId = route.paramMap.get('id');
        // We created a FirebaseCombinedUserModel to combine the userData with the details of the userSkills (from the skills collection).
        // They are 2 different collections and we need to combine them into 1 dataSource.
        const combinedUserDataSource = this.firebaseService
            .getCombinedUserDataSource(userId);
        const combinedUserDataStore = this.firebaseService
            .getCombinedUserStore(combinedUserDataSource);
        // The user details page has a section with related users, showing users with the same skills
        // For this we created another datastore which depends on the combinedUser data store
        // The DataStore subscribes to the DataSource, to avoid creating two subscribers to the combinedUserDataSource,
        // use the combinedUserDataStore timeline instead. (The timeline is a Subject, and is intended to have many subscribers)
        // Using, and thus subscribing to the timeline won't trigger two requests to the firebase endpoint
        const relatedUsersDataSource = this.firebaseService
            .getRelatedUsersDataSource(combinedUserDataStore.state);
        const relatedUsersDataStore = this.firebaseService
            .getRelatedUsersStore(relatedUsersDataSource);
        return { user: combinedUserDataStore, relatedUsers: relatedUsersDataStore };
    }
};
FirebaseUserDetailsResolver.ctorParameters = () => [
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
FirebaseUserDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
], FirebaseUserDetailsResolver);



/***/ }),

/***/ "./src/app/firebase/user/details/styles/firebase-user-details.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/firebase/user/details/styles/firebase-user-details.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-related-users-gutter: calc(var(--page-margin) / 2);\n}\n\n.user-content {\n  --background: var(--page-background);\n}\n\n.user-content .user-info-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.user-content .user-info-row .user-image-col {\n  margin: 0px auto;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-info-row .user-image-col .user-image {\n  border-radius: 50%;\n}\n\n.user-content .user-info-row .user-details-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.user-content .user-info-row .user-details-col .user-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  min-width: 40%;\n}\n\n.user-content .user-info-row .user-details-col .user-age {\n  font-size: 14px;\n  font-weight: 300;\n  min-width: 60%;\n}\n\n.user-content .user-info-row .actions-col {\n  text-align: center;\n  margin-top: var(--page-margin);\n}\n\n.user-content .user-info-row .actions-col .action-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 4ch;\n  height: 4ch;\n}\n\n.user-content .user-info-row .actions-col .action-btn .btn-icon {\n  font-size: 24px;\n}\n\n.user-content .content-section {\n  padding: var(--page-margin);\n  border-top: solid 1px var(--ion-color-light-shade);\n}\n\n.user-content .content-section .section-header {\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.user-content .user-languages-wrapper .language-item-row {\n  --ion-grid-column-padding: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-languages-wrapper .language-item-row .language-item {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.user-content .user-languages-wrapper .language-item-row .language-item .language-name {\n  display: block;\n  font-size: 16px;\n  font-weight: 300;\n  margin-bottom: calc(var(--page-margin) / 3);\n}\n\n.user-content .user-languages-wrapper .language-item-row .language-item .language-score {\n  --buffer-background: rgba(var(--ion-color-secondary-rgb), .20);\n  --progress-background: rgba(var(--ion-color-secondary-rgb), 1);\n  height: var(--page-margin);\n  border-radius: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-experience-wrapper .experience-list {\n  margin: 0px;\n  padding: 0px;\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item {\n  --min-height: initial;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item:not(:last-child) {\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item .experience-list-icon {\n  margin: 0px;\n  margin-right: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item .experience-label {\n  font-size: 16px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.user-content .related-users-wrapper .related-users-row {\n  --ion-grid-columns: 7;\n  --ion-grid-column-padding: 0px;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  will-change: scroll-position;\n  margin-left: calc(var(--page-margin) * -1);\n  margin-right: calc(var(--page-margin) * -1);\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.user-content .related-users-wrapper .related-users-row::-webkit-scrollbar {\n  display: none;\n}\n\n.user-content .related-users-wrapper .related-users-row::before, .user-content .related-users-wrapper .related-users-row::after {\n  content: \"\";\n  flex: 0 0 calc(var(--page-margin) - var(--page-related-users-gutter));\n}\n\n.user-content .related-users-wrapper .related-users-row .related-user-item {\n  padding: 0px var(--page-related-users-gutter);\n}\n\n.user-content .related-users-wrapper .related-users-row .related-user-item .related-user-name {\n  display: block;\n  text-align: center;\n  margin-top: calc(var(--page-margin) / 2);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9maXJlYmFzZS91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL3VzZXIvZGV0YWlscy9zdHlsZXMvZmlyZWJhc2UtdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL3RoZW1lL21peGlucy9zY3JvbGxiYXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBRUEseURBQUE7QUNKRjs7QURRQTtFQUNFLG9DQUFBO0FDTEY7O0FET0U7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0FDTko7O0FEUUk7RUFDRSxnQkFBQTtFQUNBLDJDQUFBO0FDTk47O0FEUU07RUFDRSxrQkFBQTtBQ05SOztBRFVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1JOOztBRFVNO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtBQ1JSOztBRFdNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1RSOztBRGFJO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtBQ1hOOztBRGFNO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7QUNaUjs7QURjUTtFQUNFLGVBQUE7QUNaVjs7QURrQkU7RUFDRSwyQkFBQTtFQUNBLGtEQUFBO0FDaEJKOztBRGtCSTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtBQ2hCTjs7QURxQkk7RUFDRSw4QkFBQTtFQUVBLDJDQUFBO0FDcEJOOztBRHNCTTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDcEJSOztBRHNCUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQ3BCVjs7QUR1QlE7RUFDRSw4REFBQTtFQUNBLDhEQUFBO0VBRUEsMEJBQUE7RUFDQSwyQ0FBQTtBQ3RCVjs7QUQ2Qkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzNCTjs7QUQ2Qk07RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FDM0JSOztBRDZCUTtFQUNFLDRDQUFBO0FDM0JWOztBRDhCUTtFQUNFLFdBQUE7RUFDQSwwQ0FBQTtBQzVCVjs7QUQrQlE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDN0JWOztBRG9DSTtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VFN0lKLHdCQUFBO0VBR0EsOEJBQUE7RUFDQSxxQkFBQTtBRHlHRjs7QUN0R0U7RUFDRSxhQUFBO0FEd0dKOztBRGlDTTtFQUVFLFdBQUE7RUFDQSxxRUFBQTtBQ2hDUjs7QURtQ007RUFDRSw2Q0FBQTtBQ2pDUjs7QURtQ1E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7QUNqQ1YiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL3Njcm9sbGJhcnNcIjtcblxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgLS1wYWdlLXJlbGF0ZWQtdXNlcnMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi51c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLnVzZXItaW5mby1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC51c2VyLWltYWdlLWNvbCB7XG4gICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgLnVzZXItaW1hZ2Uge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnVzZXItZGV0YWlscy1jb2wge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIG1pbi13aWR0aDogNDAlO1xuICAgICAgfVxuXG4gICAgICAudXNlci1hZ2Uge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIG1pbi13aWR0aDogNjAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpb25zLWNvbCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAgIC5hY3Rpb24tYnRuIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgICAgd2lkdGg6IDRjaDtcbiAgICAgICAgaGVpZ2h0OiA0Y2g7XG5cbiAgICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29udGVudC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG5cbiAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWxhbmd1YWdlcy13cmFwcGVyIHtcbiAgICAubGFuZ3VhZ2UtaXRlbS1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAubGFuZ3VhZ2UtaXRlbSB7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xuXG4gICAgICAgIC5sYW5ndWFnZS1uYW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhbmd1YWdlLXNjb3JlIHtcbiAgICAgICAgICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjIwKTtcbiAgICAgICAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAxKTtcblxuICAgICAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudXNlci1leHBlcmllbmNlLXdyYXBwZXIge1xuICAgIC5leHBlcmllbmNlLWxpc3Qge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAgIC5leHBlcmllbmNlLWl0ZW0ge1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5leHBlcmllbmNlLWxpc3QtaWNvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmV4cGVyaWVuY2UtbGFiZWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnJlbGF0ZWQtdXNlcnMtd3JhcHBlciB7XG4gICAgLnJlbGF0ZWQtdXNlcnMtcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uczogNzsgLy8gV2Ugd2FudCB0byBzaG93IHRocmVlIHVzZXJzIGFuZCBhIGhhbGYuIEVhY2ggdXNlciBmaWxscyAyIGNvbHMgPT4gKDMuNSAqIDIgPSA3IGNvbHMpXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgd2lsbC1jaGFuZ2U6IHNjcm9sbC1wb3NpdGlvbjtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKTtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG5cbiAgICAgIEBpbmNsdWRlIGhpZGUtc2Nyb2xsYmFycygpO1xuXG4gICAgICAmOjpiZWZvcmUsXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBmbGV4OiAwIDAgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXJlbGF0ZWQtdXNlcnMtZ3V0dGVyKSk7XG4gICAgICB9XG5cbiAgICAgIC5yZWxhdGVkLXVzZXItaXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXJlbGF0ZWQtdXNlcnMtZ3V0dGVyKTtcblxuICAgICAgICAucmVsYXRlZC11c2VyLW5hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtcmVsYXRlZC11c2Vycy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG5cbi51c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4udXNlci1jb250ZW50IC51c2VyLWluZm8tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWluZm8tcm93IC51c2VyLWltYWdlLWNvbCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWluZm8tcm93IC51c2VyLWltYWdlLWNvbCAudXNlci1pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLnVzZXItZGV0YWlscy1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlci1jb250ZW50IC51c2VyLWluZm8tcm93IC51c2VyLWRldGFpbHMtY29sIC51c2VyLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgbWluLXdpZHRoOiA0MCU7XG59XG4udXNlci1jb250ZW50IC51c2VyLWluZm8tcm93IC51c2VyLWRldGFpbHMtY29sIC51c2VyLWFnZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWluLXdpZHRoOiA2MCU7XG59XG4udXNlci1jb250ZW50IC51c2VyLWluZm8tcm93IC5hY3Rpb25zLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnVzZXItY29udGVudCAudXNlci1pbmZvLXJvdyAuYWN0aW9ucy1jb2wgLmFjdGlvbi1idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgd2lkdGg6IDRjaDtcbiAgaGVpZ2h0OiA0Y2g7XG59XG4udXNlci1jb250ZW50IC51c2VyLWluZm8tcm93IC5hY3Rpb25zLWNvbCAuYWN0aW9uLWJ0biAuYnRuLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4udXNlci1jb250ZW50IC5jb250ZW50LXNlY3Rpb24ge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuLnVzZXItY29udGVudCAuY29udGVudC1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtd3JhcHBlciAubGFuZ3VhZ2UtaXRlbS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy13cmFwcGVyIC5sYW5ndWFnZS1pdGVtLXJvdyAubGFuZ3VhZ2UtaXRlbSB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xufVxuLnVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtd3JhcHBlciAubGFuZ3VhZ2UtaXRlbS1yb3cgLmxhbmd1YWdlLWl0ZW0gLmxhbmd1YWdlLW5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xufVxuLnVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtd3JhcHBlciAubGFuZ3VhZ2UtaXRlbS1yb3cgLmxhbmd1YWdlLWl0ZW0gLmxhbmd1YWdlLXNjb3JlIHtcbiAgLS1idWZmZXItYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIC4yMCk7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIDEpO1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS13cmFwcGVyIC5leHBlcmllbmNlLWxpc3Qge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuLnVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLXdyYXBwZXIgLmV4cGVyaWVuY2UtbGlzdCAuZXhwZXJpZW5jZS1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiBpbml0aWFsO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLnVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLXdyYXBwZXIgLmV4cGVyaWVuY2UtbGlzdCAuZXhwZXJpZW5jZS1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS13cmFwcGVyIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbSAuZXhwZXJpZW5jZS1saXN0LWljb24ge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLXdyYXBwZXIgLmV4cGVyaWVuY2UtbGlzdCAuZXhwZXJpZW5jZS1pdGVtIC5leHBlcmllbmNlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi51c2VyLWNvbnRlbnQgLnJlbGF0ZWQtdXNlcnMtd3JhcHBlciAucmVsYXRlZC11c2Vycy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDc7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgd2lsbC1jaGFuZ2U6IHNjcm9sbC1wb3NpdGlvbjtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xufVxuLnVzZXItY29udGVudCAucmVsYXRlZC11c2Vycy13cmFwcGVyIC5yZWxhdGVkLXVzZXJzLXJvdzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVzZXItY29udGVudCAucmVsYXRlZC11c2Vycy13cmFwcGVyIC5yZWxhdGVkLXVzZXJzLXJvdzo6YmVmb3JlLCAudXNlci1jb250ZW50IC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIgLnJlbGF0ZWQtdXNlcnMtcm93OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZsZXg6IDAgMCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtcmVsYXRlZC11c2Vycy1ndXR0ZXIpKTtcbn1cbi51c2VyLWNvbnRlbnQgLnJlbGF0ZWQtdXNlcnMtd3JhcHBlciAucmVsYXRlZC11c2Vycy1yb3cgLnJlbGF0ZWQtdXNlci1pdGVtIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtcmVsYXRlZC11c2Vycy1ndXR0ZXIpO1xufVxuLnVzZXItY29udGVudCAucmVsYXRlZC11c2Vycy13cmFwcGVyIC5yZWxhdGVkLXVzZXJzLXJvdyAucmVsYXRlZC11c2VyLWl0ZW0gLnJlbGF0ZWQtdXNlci1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufSIsIi8vIEhpZGUgc2Nyb2xsYmFyczogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4OTk0ODM3LzExMTY5NTlcbkBtaXhpbiBoaWRlLXNjcm9sbGJhcnMoKSB7XG4gIC8vIElFIDEwK1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG5cbiAgLy8gRmlyZWZveFxuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcblxuICAvLyBTYWZhcmkgYW5kIENocm9tZVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/firebase/user/details/styles/firebase-user-details.shell.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/firebase/user/details/styles/firebase-user-details.shell.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 24px;\n}\n\n.user-age > app-text-shell {\n  --text-shell-line-height: 14px;\n}\n\n.experience-label > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 40%;\n}\n\n.experience-label > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\napp-image-shell.related-user-picture {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.related-user-name > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 80%;\n}\n\n.related-user-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9maXJlYmFzZS91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5zaGVsbC5zY3NzIiwic3JjL2FwcC9maXJlYmFzZS91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxrQkFBQTtBQ0NKOztBREdBO0VBQ0UsbURBQUE7QUNBRjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL3VzZXIvZGV0YWlscy9zdHlsZXMvZmlyZWJhc2UtdXNlci1kZXRhaWxzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZXhwZXJpZW5jZS1sYWJlbCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLnJlbGF0ZWQtdXNlci1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufVxuXG4ucmVsYXRlZC11c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZXhwZXJpZW5jZS1sYWJlbCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbi5leHBlcmllbmNlLWxhYmVsID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZWxhdGVkLXVzZXItcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn1cblxuLnJlbGF0ZWQtdXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuLnJlbGF0ZWQtdXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=user-details-firebase-user-details-module-es2015.js.map