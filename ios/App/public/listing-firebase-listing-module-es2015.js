(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listing-firebase-listing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/listing/firebase-listing.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/listing/firebase-listing.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Firebase</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openFirebaseCreateModal()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Filter by name...\"></ion-searchbar>\n      </ion-col>\n      <ion-col class=\"call-to-action-col\">\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" (click)=\"showAgeFilter = !showAgeFilter\">\n          <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"rangeForm\" [hidden]=\"!showAgeFilter\">\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-value\">{{ rangeForm.controls.dual.value.lower }}</span>\n            <span class=\"range-label\">Filter by age</span>\n            <span class=\"range-value\">{{ rangeForm.controls.dual.value.upper }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"dual\" color=\"secondary\" pin=\"true\" dualKnobs=\"true\" (ionChange)=\"searchList()\" min=\"1\" max=\"100\" step=\"1\" debounce=\"400\"></ion-range>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"firebase-listing-content\">\n  <ion-list class=\"items-list\" *ngIf=\"items?.length > 0\">\n    <ion-item class=\"list-item\" *ngFor=\"let item of items\" [routerLink]=\"['/firebase/details', item.id]\">\n      <ion-row class=\"user-row\">\n        <ion-col size=\"3\" class=\"user-image-wrapper\">\n          <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n            <app-image-shell class=\"user-image\" animation=\"spinner\" [display]=\"'cover'\" [src]=\"item.avatar\" [alt]=\"'item image'\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-col>\n        <ion-col class=\"user-data-wrapper\">\n          <div class=\"user-info\">\n            <h3 class=\"user-name\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.name?.concat(' ').concat(item.lastname)\"></app-text-shell>\n            </h3>\n            <h5 class=\"user-age\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.age?.toString().concat(' years old')\"></app-text-shell>\n            </h5>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n  <h3 *ngIf=\"items?.length == 0\" class=\"empty-list-message\">\n    No users found for the selected filters.\n  </h3>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/firebase/listing/firebase-listing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/firebase/listing/firebase-listing.module.ts ***!
  \*************************************************************/
/*! exports provided: FirebaseListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseListingPageModule", function() { return FirebaseListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _firebase_listing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./firebase-listing.page */ "./src/app/firebase/listing/firebase-listing.page.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _firebase_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./firebase-listing.resolver */ "./src/app/firebase/listing/firebase-listing.resolver.ts");










const routes = [
    {
        path: '',
        component: _firebase_listing_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingPage"],
        resolve: {
            data: _firebase_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseListingResolver"]
        }
    }
];
let FirebaseListingPageModule = class FirebaseListingPageModule {
};
FirebaseListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_firebase_listing_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingPage"]],
        providers: [
            _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"],
            _firebase_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseListingResolver"]
        ]
    })
], FirebaseListingPageModule);



/***/ }),

/***/ "./src/app/firebase/listing/firebase-listing.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/firebase/listing/firebase-listing.page.ts ***!
  \***********************************************************/
/*! exports provided: FirebaseListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseListingPage", function() { return FirebaseListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _firebase_listing_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./firebase-listing.model */ "./src/app/firebase/listing/firebase-listing.model.ts");
/* harmony import */ var _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user/create/firebase-create-user.modal */ "./src/app/firebase/user/create/firebase-create-user.modal.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");











let FirebaseListingPage = class FirebaseListingPage {
    constructor(firebaseService, modalController, route) {
        this.firebaseService = firebaseService;
        this.modalController = modalController;
        this.route = route;
        this.showAgeFilter = false;
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.searchFiltersObservable = this.searchSubject.asObservable();
    }
    get isShell() {
        return (this.items && this.items.isShell) ? true : false;
    }
    ngOnDestroy() {
        this.stateSubscription.unsubscribe();
    }
    ngOnInit() {
        this.searchQuery = '';
        this.rangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            dual: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ lower: 1, upper: 100 })
        });
        // Route data is a cold subscription, no need to unsubscribe?
        this.route.data.subscribe((resolvedRouteData) => {
            this.listingDataStore = resolvedRouteData['data'];
            // We need to avoid having multiple firebase subscriptions open at the same time to avoid memory leaks
            // By using a switchMap to cancel previous subscription each time a new one arrives,
            // we ensure having just one subscription (the latest)
            const updateSearchObservable = this.searchFiltersObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((filters) => {
                const filteredDataSource = this.firebaseService.searchUsersByAge(filters.lower, filters.upper);
                // Send a shell until we have filtered data from Firebase
                const searchingShellModel = [
                    new _firebase_listing_model__WEBPACK_IMPORTED_MODULE_8__["FirebaseListingItemModel"](),
                    new _firebase_listing_model__WEBPACK_IMPORTED_MODULE_8__["FirebaseListingItemModel"]()
                ];
                // Wait on purpose some time to ensure the shell animation gets shown while loading filtered data
                const searchingDelay = 400;
                const dataSourceWithShellObservable = _shell_data_store__WEBPACK_IMPORTED_MODULE_10__["DataStore"].AppendShell(filteredDataSource, searchingShellModel, searchingDelay);
                return dataSourceWithShellObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(filteredItems => {
                    // Just filter items by name if there is a search query and they are not shell values
                    if (filters.query !== '' && !filteredItems.isShell) {
                        const queryFilteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(filters.query.toLowerCase()));
                        // While filtering we strip out the isShell property, add it again
                        return Object.assign(queryFilteredItems, { isShell: filteredItems.isShell });
                    }
                    else {
                        return filteredItems;
                    }
                }));
            }));
            // Keep track of the subscription to unsubscribe onDestroy
            // Merge filteredData with the original dataStore state
            this.stateSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.listingDataStore.state, updateSearchObservable).subscribe((state) => {
                this.items = state;
            }, (error) => console.log(error), () => console.log('stateSubscription completed'));
        }, (error) => console.log(error));
    }
    openFirebaseCreateModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_9__["FirebaseCreateUserModal"]
            });
            yield modal.present();
        });
    }
    searchList() {
        this.searchSubject.next({
            lower: this.rangeForm.controls.dual.value.lower,
            upper: this.rangeForm.controls.dual.value.upper,
            query: this.searchQuery
        });
    }
};
FirebaseListingPage.ctorParameters = () => [
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FirebaseListingPage.prototype, "isShell", null);
FirebaseListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-firebase-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./firebase-listing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/listing/firebase-listing.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/firebase-listing.page.scss */ "./src/app/firebase/listing/styles/firebase-listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/firebase-listing.ios.scss */ "./src/app/firebase/listing/styles/firebase-listing.ios.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/firebase-listing.shell.scss */ "./src/app/firebase/listing/styles/firebase-listing.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], FirebaseListingPage);



/***/ }),

/***/ "./src/app/firebase/listing/firebase-listing.resolver.ts":
/*!***************************************************************!*\
  !*** ./src/app/firebase/listing/firebase-listing.resolver.ts ***!
  \***************************************************************/
/*! exports provided: FirebaseListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseListingResolver", function() { return FirebaseListingResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");



let FirebaseListingResolver = class FirebaseListingResolver {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    resolve() {
        const dataSource = this.firebaseService.getListingDataSource();
        const dataStore = this.firebaseService.getListingStore(dataSource);
        return dataStore;
    }
};
FirebaseListingResolver.ctorParameters = () => [
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
FirebaseListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
], FirebaseListingResolver);



/***/ }),

/***/ "./src/app/firebase/listing/styles/firebase-listing.ios.scss":
/*!*******************************************************************!*\
  !*** ./src/app/firebase/listing/styles/firebase-listing.ios.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host-context(.ios) .list-item .user-data-wrapper {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n:host-context(.ios) .searchbar-row ion-searchbar.items-searchbar {\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLmlvcy5zY3NzIiwic3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLmlvcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtBQ0ZOO0FET0k7RUFDRSwrQkFBQTtFQUNBLHFDQUFBO0FDTE4iLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLmlvcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QtY29udGV4dCguaW9zKSB7XG4gIC8vIEN1c3RvbSBwbGF0Zm9ybSBzdHlsZXMgaGVyZVxuICAubGlzdC1pdGVtIHtcbiAgICAudXNlci1kYXRhLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2hiYXItcm93IHtcbiAgICBpb24tc2VhcmNoYmFyLml0ZW1zLXNlYXJjaGJhciB7XG4gICAgICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy10b3ApO1xuICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmctYm90dG9tKTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0LWNvbnRleHQoLmlvcykgLmxpc3QtaXRlbSAudXNlci1kYXRhLXdyYXBwZXIge1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG46aG9zdC1jb250ZXh0KC5pb3MpIC5zZWFyY2hiYXItcm93IGlvbi1zZWFyY2hiYXIuaXRlbXMtc2VhcmNoYmFyIHtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZGRpbmctdG9wKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmctYm90dG9tKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/firebase/listing/styles/firebase-listing.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/firebase/listing/styles/firebase-listing.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row ion-searchbar.items-searchbar {\n  padding: 0px;\n  height: 100%;\n  contain: content;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin: 0px;\n  font-size: 18px;\n  height: initial;\n}\n\n.filters-toolbar .range-item-row {\n  --ion-grid-column-padding: 0px;\n  margin-top: var(--page-margin);\n  padding-top: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-toolbar .range-item-row .range-header {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-toolbar .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-toolbar .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-toolbar .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.firebase-listing-content {\n  --background: var(--page-background);\n}\n\n.firebase-listing-content .items-list .list-item {\n  --padding-start: var(--page-margin);\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: var(--page-margin);\n  --inner-padding-top: calc(var(--page-margin) / 2);\n  --inner-padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content .items-list .list-item .user-row {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-image-wrapper {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper {\n  -webkit-padding-start: calc(var(--page-margin) / 2);\n          padding-inline-start: calc(var(--page-margin) / 2);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper .user-info:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper .user-info .user-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 4);\n  font-size: 16px;\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper .user-info .user-age {\n  margin: 0px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 14px;\n}\n\n.firebase-listing-content .empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvbGlzdGluZy9zdHlsZXMvZmlyZWJhc2UtbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0FDREY7O0FES0E7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQ0ZGOztBRElFO0VBQ0UsOEJBQUE7QUNGSjs7QURJSTtFQUNFLFlBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QUNKTjs7QURPSTtFQUNFLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtBQ05OOztBRFFNO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBRUEsZUFBQTtBQ1JSOztBRGFFO0VBQ0UsOEJBQUE7RUFFQSw4QkFBQTtFQUNBLCtCQUFBO0VBRUEseURBQUE7QUNiSjs7QURlSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0FDYk47O0FEZU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDYlI7O0FEZ0JNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ2RSOztBRGtCSTtFQUVFLHlDQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ2xCTjs7QUR1QkE7RUFDRSxvQ0FBQTtBQ3BCRjs7QUR1Qkk7RUFDRSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0RBQUE7QUNyQk47O0FEdUJNO0VBQ0UsOEJBQUE7RUFFQSxXQUFBO0FDdEJSOztBRHdCUTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7QUN0QlY7O0FEeUJRO0VBQ0UsbURBQUE7VUFBQSxrREFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDdkJWOztBRDBCWTtFQUNFLDJDQUFBO0FDeEJkOztBRDJCWTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7QUN6QmQ7O0FENEJZO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtBQzFCZDs7QURrQ0U7RUFDRSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUNoQ0oiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5maWx0ZXJzLXRvb2xiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAuc2VhcmNoYmFyLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgaW9uLXNlYXJjaGJhci5pdGVtcy1zZWFyY2hiYXIge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAvLyBMZWFybiBtb3JlIGFib3V0IENTUyBjb250YWluIHByb3BlcnR5IGhlcmU6IGh0dHBzOi8vdGVybXZhZGVyLmdpdGh1Yi5pby9jc3MtY29udGFpbi9cbiAgICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgZmxleC1ncm93OiAwO1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgLmZpbHRlcnMtYnRuIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAvLyBvdmVycmlkZSBJb25pYyBmaXhlZCBoZWlnaHRcbiAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yYW5nZS1pdGVtLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLy8gYm94LXNoYWRvdyBhdCB0aGUgdG9wXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggIHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgIC5yYW5nZS1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAucmFuZ2UtdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgfVxuXG4gICAgICAucmFuZ2UtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yYW5nZS1jb250cm9sIHtcbiAgICAgIC8vIG92ZXJyaWRlIHRoZSBwaW4gY29sb3JcbiAgICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICB9XG4gIH1cbn1cblxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAuaXRlbXMtbGlzdCB7XG4gICAgLmxpc3QtaXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgIC51c2VyLXJvdyB7XG4gICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAudXNlci1pbWFnZS13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1kYXRhLXdyYXBwZXIge1xuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyLWFnZSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmVtcHR5LWxpc3QtbWVzc2FnZSB7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpO1xuICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG5cbi5maWx0ZXJzLXRvb2xiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4uZmlsdGVycy10b29sYmFyIC5zZWFyY2hiYXItcm93IGlvbi1zZWFyY2hiYXIuaXRlbXMtc2VhcmNoYmFyIHtcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbnRhaW46IGNvbnRlbnQ7XG59XG4uZmlsdGVycy10b29sYmFyIC5zZWFyY2hiYXItcm93IC5jYWxsLXRvLWFjdGlvbi1jb2wge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1ncm93OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmZpbHRlcnMtdG9vbGJhciAuc2VhcmNoYmFyLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIC5maWx0ZXJzLWJ0biB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogaW5pdGlhbDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnJhbmdlLWl0ZW0tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZpbHRlcnMtdG9vbGJhciAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWhlYWRlciAucmFuZ2UtdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmZpbHRlcnMtdG9vbGJhciAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWhlYWRlciAucmFuZ2UtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmZpbHRlcnMtdG9vbGJhciAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWNvbnRyb2wge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQgLml0ZW1zLWxpc3QgLmxpc3QtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZmlyZWJhc2UtbGlzdGluZy1jb250ZW50IC5pdGVtcy1saXN0IC5saXN0LWl0ZW0gLnVzZXItcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQgLml0ZW1zLWxpc3QgLmxpc3QtaXRlbSAudXNlci1yb3cgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQgLml0ZW1zLWxpc3QgLmxpc3QtaXRlbSAudXNlci1yb3cgLnVzZXItZGF0YS13cmFwcGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCAuaXRlbXMtbGlzdCAubGlzdC1pdGVtIC51c2VyLXJvdyAudXNlci1kYXRhLXdyYXBwZXIgLnVzZXItaW5mbzpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQgLml0ZW1zLWxpc3QgLmxpc3QtaXRlbSAudXNlci1yb3cgLnVzZXItZGF0YS13cmFwcGVyIC51c2VyLWluZm8gLnVzZXItbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZmlyZWJhc2UtbGlzdGluZy1jb250ZW50IC5pdGVtcy1saXN0IC5saXN0LWl0ZW0gLnVzZXItcm93IC51c2VyLWRhdGEtd3JhcHBlciAudXNlci1pbmZvIC51c2VyLWFnZSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZmlyZWJhc2UtbGlzdGluZy1jb250ZW50IC5lbXB0eS1saXN0LW1lc3NhZ2Uge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMyk7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/firebase/listing/styles/firebase-listing.shell.scss":
/*!*********************************************************************!*\
  !*** ./src/app/firebase/listing/styles/firebase-listing.shell.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.user-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 80%;\n}\n\n.user-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.user-age > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.user-age > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2xpc3Rpbmcvc3R5bGVzL2ZpcmViYXNlLWxpc3Rpbmcuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1EQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDRTtFQUNFLGtCQUFBO0FDQ0o7O0FER0E7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUNBRjs7QURFRTtFQUNFLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDgwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLnVzZXItYWdlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNDAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=listing-firebase-listing-module-es2015.js.map