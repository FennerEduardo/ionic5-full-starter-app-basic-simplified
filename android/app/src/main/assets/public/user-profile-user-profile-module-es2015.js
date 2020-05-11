(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./src/app/shell/data-store.ts":
/*!*************************************!*\
  !*** ./src/app/shell/data-store.ts ***!
  \*************************************/
/*! exports provided: ShellModel, DataStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModel", function() { return ShellModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStore", function() { return DataStore; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/app-shell.config */ "./src/app/shell/config/app-shell.config.ts");



class ShellModel {
    constructor() {
        this.isShell = false;
    }
}
class DataStore {
    constructor(shellModel) {
        this.shellModel = shellModel;
        // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the assets/config/app-shell.config.prod.json file.
        // tslint:disable-next-line:max-line-length
        this.networkDelay = (_config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.networkDelay) ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    }
    // Static function with generics
    // (ref: https://stackoverflow.com/a/24293088/1116959)
    // Append a shell (T & ShellModel) to every value (T) emmited to the timeline
    static AppendShell(dataObservable, shellModel, networkDelay = 400) {
        const delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(networkDelay));
        // Assign shell flag accordingly
        // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([
            delayObservable,
            dataObservable
        ]).pipe(
        // Dismiss unnecessary delayValue
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([delayValue, dataValue]) => Object.assign(dataValue, { isShell: false })), 
        // Set the shell model as the initial value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(Object.assign(shellModel, { isShell: true })));
    }
    load(dataSourceObservable) {
        const dataSourceWithShellObservable = DataStore.AppendShell(dataSourceObservable, this.shellModel, this.networkDelay);
        dataSourceWithShellObservable
            .subscribe((dataValue) => {
            this.timeline.next(dataValue);
        });
    }
    get state() {
        return this.timeline.asObservable();
    }
}


/***/ }),

/***/ "./src/app/user/profile/user-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/profile/user-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/user/profile/user-profile.page.ts");
/* harmony import */ var _user_profile_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile.resolver */ "./src/app/user/profile/user-profile.resolver.ts");












const routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_8__["UserProfilePage"],
        resolve: {
            data: _user_profile_resolver__WEBPACK_IMPORTED_MODULE_9__["UserProfileResolver"]
        }
    }
];
class UserProfilePageModule {
}
UserProfilePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserProfilePageModule });
UserProfilePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserProfilePageModule_Factory(t) { return new (t || UserProfilePageModule)(); }, providers: [
        _user_profile_resolver__WEBPACK_IMPORTED_MODULE_9__["UserProfileResolver"],
        _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
    ], imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfilePageModule, { declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_8__["UserProfilePage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfilePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                ],
                declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_8__["UserProfilePage"]],
                providers: [
                    _user_profile_resolver__WEBPACK_IMPORTED_MODULE_9__["UserProfileResolver"],
                    _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/profile/user-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/user/profile/user-profile.page.ts ***!
  \***************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resolver-helper */ "./src/app/utils/resolver-helper.ts");
/* harmony import */ var _user_profile_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.model */ "./src/app/user/profile/user-profile.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = function () { return { w: 1, h: 1 }; };
function UserProfilePage_ion_col_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-aspect-ratio", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-image-shell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", friend_r2.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", friend_r2.name);
} }
function UserProfilePage_ion_col_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-image-shell", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aspect-ratio", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", photo_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
const _c1 = function () { return ["/app/user/friends"]; };
class UserProfilePage {
    constructor(route) {
        this.route = route;
    }
    get isShell() {
        return (this.profile && this.profile.isShell) ? true : false;
    }
    ngOnInit() {
        // On init, the route subscription is the active subscription
        this.subscriptions = this.route.data
            .subscribe((resolvedRouteData) => {
            // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
            this.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__["ResolverHelper"].extractData(resolvedRouteData.data, _user_profile_model__WEBPACK_IMPORTED_MODULE_3__["UserProfileModel"])
                .subscribe((state) => {
                this.profile = state;
            }, (error) => { });
        }, (error) => { });
    }
    // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
    // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
    ionViewWillLeave() {
        // console.log('TravelListingPage [ionViewWillLeave]');
        this.subscriptions.unsubscribe();
    }
}
UserProfilePage.ɵfac = function UserProfilePage_Factory(t) { return new (t || UserProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
UserProfilePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfilePage, selectors: [["app-user-profile"]], hostVars: 2, hostBindings: function UserProfilePage_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
    } }, decls: 65, vars: 14, consts: [[1, "ion-no-border"], ["slot", "start"], [1, "user-profile-content"], [1, "user-details-section"], [1, "user-image-wrapper"], [3, "ratio"], ["animation", "spinner", 1, "user-image", 3, "src"], [1, "user-info-wrapper"], [1, "user-data-row"], ["size", "9"], [1, "user-name"], [3, "data"], [1, "user-title"], [1, "membership-col"], [1, "user-membership"], [1, "actions-row"], [1, "main-actions"], ["size", "small", "color", "primary", 1, "call-to-action-btn"], ["size", "small", "color", "medium", 1, "call-to-action-btn"], [1, "secondary-actions"], ["size", "small", "fill", "clear", "color", "medium", 1, "more-btn"], ["slot", "icon-only", "ios", "ellipsis-horizontal", "md", "ellipsis-vertical"], [1, "user-stats-section"], ["size", "4", 1, "user-stats-wrapper"], [1, "stat-value"], [1, "stat-name"], [1, "user-about-section"], [1, "details-section-title"], [1, "user-description"], ["animation", "bouncing", "lines", "4", 3, "data"], [1, "user-friends-section"], [1, "heading-row"], [1, "heading-call-to-action", 3, "routerLink"], [1, "friends-row"], ["class", "friend-item", "size", "2", 4, "ngFor", "ngForOf"], [1, "user-photos-section"], [1, "heading-call-to-action"], [1, "pictures-row"], ["class", "picture-item", "size", "2", 4, "ngFor", "ngForOf"], ["size", "2", 1, "friend-item"], [1, "friend-picture", 3, "src"], [1, "friend-name"], ["size", "2", 1, "picture-item"], [1, "user-photo-image", 3, "display", "src"]], template: function UserProfilePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-aspect-ratio", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-image-shell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-row", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-text-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-text-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-col", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-text-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-col", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-col", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-row", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-col", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-text-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-col", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-text-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-col", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-text-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-text-shell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ion-row", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "See all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ion-row", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, UserProfilePage_ion_col_56_Template, 5, 4, "ion-col", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ion-row", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "See all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ion-row", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, UserProfilePage_ion_col_64_Template, 3, 4, "ion-col", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.profile.userImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.profile.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.profile.job);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.profile.membership);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.profile.likes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.profile.followers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.profile.following);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.profile.about);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profile.friends);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profile.photos);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-actions-padding: 5px;\n  --page-friends-gutter: calc(var(--page-margin) / 2);\n  --page-pictures-gutter: calc(var(--page-margin) / 2);\n}\n\n.user-details-section[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  margin: var(--page-margin);\n}\n\n.user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%] {\n  max-width: 26%;\n}\n\n.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%] {\n  padding-left: var(--page-margin);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n}\n\n.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%] {\n  padding-bottom: var(--page-margin);\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n\n.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px;\n  font-size: 20px;\n  letter-spacing: 0.5px;\n}\n\n.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-medium);\n  font-size: 16px;\n}\n\n.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .membership-col[_ngcontent-%COMP%] {\n  padding-left: var(--page-margin);\n  flex-grow: 0;\n}\n\n.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-membership[_ngcontent-%COMP%] {\n  display: block;\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: 4px 8px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%] {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: var(--page-actions-padding);\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  margin-left: calc(var(--page-actions-padding) * -1);\n  margin-right: calc(var(--page-actions-padding) * -1);\n}\n\n.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .main-actions[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-left: calc(var(--page-actions-padding) * -1);\n  margin-right: calc(var(--page-actions-padding) * -1);\n  display: flex;\n}\n\n.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .main-actions[_ngcontent-%COMP%]   .call-to-action-btn[_ngcontent-%COMP%] {\n  padding: 0px var(--page-actions-padding);\n  margin: 0px;\n}\n\n.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]   .more-btn[_ngcontent-%COMP%] {\n  --padding-start: 4px;\n  --padding-end: 4px;\n  margin: 0px;\n}\n\n.user-stats-section[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  padding-bottom: 5px;\n  color: var(--ion-color-dark-shade);\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .stat-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--ion-color-medium);\n}\n\n.details-section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px 0px var(--page-margin);\n}\n\n.user-about-section[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.user-about-section[_ngcontent-%COMP%]   .user-description[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark-shade);\n  text-align: justify;\n  margin: var(--page-margin) 0px;\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.user-friends-section[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%] {\n  margin-bottom: var(--page-margin);\n  justify-content: space-between;\n  align-items: center;\n}\n\n.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .details-section-title[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .heading-call-to-action[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n}\n\n.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%] {\n  --ion-grid-columns: 7;\n  --ion-grid-column-padding: 0px;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  will-change: scroll-position;\n  margin-left: calc(var(--page-margin) * -1);\n  margin-right: calc(var(--page-margin) * -1);\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]::before, .user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 0 0 calc(var(--page-margin) - var(--page-friends-gutter));\n}\n\n.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]   .friend-item[_ngcontent-%COMP%] {\n  padding: 0px var(--page-friends-gutter);\n}\n\n.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]   .friend-item[_ngcontent-%COMP%]   .friend-name[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin: var(--page-margin) 0px;\n  font-size: 14px;\n}\n\n.user-photos-section[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%] {\n  margin-bottom: var(--page-margin);\n  justify-content: space-between;\n  align-items: center;\n}\n\n.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .details-section-title[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .heading-call-to-action[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n}\n\n.user-photos-section[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%] {\n  --ion-grid-columns: 4;\n  --ion-grid-column-padding: 0px;\n  margin: 0px calc(var(--page-pictures-gutter) * -1);\n}\n\n.user-photos-section[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-item[_ngcontent-%COMP%] {\n  padding: 0px var(--page-pictures-gutter) calc(var(--page-pictures-gutter) * 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3VzZXIvcHJvZmlsZS9zdHlsZXMvdXNlci1wcm9maWxlLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL3RoZW1lL21peGlucy9zY3JvbGxiYXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSx1Q0FBQTtFQUNBLDRDQUFBO0VBRUEsMkJBQUE7RUFDQSxtREFBQTtFQUNBLG9EQUFBO0FDSkY7O0FEUUE7RUFDRSw4QkFBQTtFQUVBLDBCQUFBO0FDTkY7O0FEUUU7RUFDRSxjQUFBO0FDTko7O0FEU0U7RUFDRSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURTSTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ1BOOztBRFNNO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNQUjs7QURVTTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNSUjs7QURXTTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtBQ1RSOztBRFlNO0VBQ0UsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNWUjs7QURjSTtFQUNFLHNCQUFBO0VBQ0Esc0RBQUE7RUFFQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7RUFDQSxvREFBQTtBQ2JOOztBRGVNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLG9EQUFBO0VBQ0EsYUFBQTtBQ2JSOztBRGVRO0VBQ0Usd0NBQUE7RUFDQSxXQUFBO0FDYlY7O0FEaUJNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNmUjs7QURpQlE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtBQ2hCVjs7QUR1QkE7RUFDRSw4QkFBQTtFQUVBLDBFQUFBO0VBQ0Esa0NBQUE7RUFDQSxxREFBQTtBQ3JCRjs7QUR1QkU7RUFDRSxrQkFBQTtBQ3JCSjs7QUR1Qkk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3JCTjs7QUR3Qkk7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUN0Qk47O0FEMkJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtBQ3hCRjs7QUQyQkE7RUFDRSwwRUFBQTtFQUNBLGtDQUFBO0VBQ0EscURBQUE7QUN4QkY7O0FEMEJFO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDeEJKOztBRDRCQTtFQUNFLDBFQUFBO0VBQ0Esa0NBQUE7RUFDQSxxREFBQTtBQ3pCRjs7QUQyQkU7RUFDRSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUN6Qko7O0FEMkJJO0VBQ0UsV0FBQTtBQ3pCTjs7QUQ0Qkk7RUFDRSxrRUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUMxQk47O0FEOEJFO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7RUUvS0Ysd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FEaUpGOztBQzlJRTtFQUNFLGFBQUE7QURnSko7O0FEMkJJO0VBRUUsV0FBQTtFQUVBLCtEQUFBO0FDM0JOOztBRDhCSTtFQUNFLHVDQUFBO0FDNUJOOztBRDhCTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQzVCUjs7QURrQ0E7RUFDRSwwRUFBQTtFQUNBLDRDQUFBO0FDL0JGOztBRGlDRTtFQUNFLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQy9CSjs7QURpQ0k7RUFDRSxXQUFBO0FDL0JOOztBRGtDSTtFQUNFLGtFQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQ2hDTjs7QURvQ0U7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBRUEsa0RBQUE7QUNuQ0o7O0FEcUNJO0VBQ0UsOEVBQUE7QUNuQ04iLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL3Njcm9sbGJhcnNcIjtcblxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbiAgLS1wYWdlLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG5cbiAgLS1wYWdlLWFjdGlvbnMtcGFkZGluZzogNXB4O1xuICAtLXBhZ2UtZnJpZW5kcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS1waWN0dXJlcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLnVzZXItZGV0YWlscy1zZWN0aW9uIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gIC51c2VyLWltYWdlLXdyYXBwZXIge1xuICAgIG1heC13aWR0aDogMjYlO1xuICB9XG5cbiAgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gICAgLnVzZXItZGF0YS1yb3cge1xuICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICB9XG5cbiAgICAgIC51c2VyLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAubWVtYmVyc2hpcC1jb2wge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgfVxuXG4gICAgICAudXNlci1tZW1iZXJzaGlwIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9ucy1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKTtcblxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpICogLTEpO1xuXG4gICAgICAubWFpbi1hY3Rpb25zIHtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmNhbGwtdG8tYWN0aW9uLWJ0biB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKTtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2Vjb25kYXJ5LWFjdGlvbnMge1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAgICAgLm1vcmUtYnRuIHtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG5cbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udXNlci1zdGF0cy1zZWN0aW9uIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAudXNlci1zdGF0cy13cmFwcGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuc3RhdC12YWx1ZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAuc3RhdC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB9XG4gIH1cbn1cblxuLmRldGFpbHMtc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4udXNlci1hYm91dC1zZWN0aW9uIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gIC51c2VyLWRlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICB9XG59XG5cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAuaGVhZGluZy1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5kZXRhaWxzLXNlY3Rpb24tdGl0bGUge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRpbmctY2FsbC10by1hY3Rpb24ge1xuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIH1cbiAgfVxuXG4gIC5mcmllbmRzLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiA3OyAvLyBXZSB3YW50IHRvIHNob3cgdGhyZWUgZnJpZW5kcyBhbmQgYSBoYWxmLiBFYWNoIGZyaWVuZCBmaWxscyAyIGNvbHMgPT4gKDMuNSAqIDIgPSA3IGNvbHMpXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHdpbGwtY2hhbmdlOiBzY3JvbGwtcG9zaXRpb247XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG5cbiAgICBAaW5jbHVkZSBoaWRlLXNjcm9sbGJhcnMoKTtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIC8vIC5mcmllbmQtaXRlbSBoYXMgOHB4IG9mIHNpZGUgcGFkZGluZywgd2UgbmVlZCBhbiBleHRyYSA0cHggYXQgdGhlIGJlZ2lubmluZyBhbmQgZW5kIHRvIGZpbGwgdGhlIDEycHggc2lkZSBtYXJnaW4gb2YgdGhlIHZpZXdcbiAgICAgIGZsZXg6IDAgMCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtZnJpZW5kcy1ndXR0ZXIpKTtcbiAgICB9XG5cbiAgICAuZnJpZW5kLWl0ZW0ge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtZnJpZW5kcy1ndXR0ZXIpO1xuXG4gICAgICAuZnJpZW5kLW5hbWUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnVzZXItcGhvdG9zLXNlY3Rpb24ge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgLmhlYWRpbmctcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZGV0YWlscy1zZWN0aW9uLXRpdGxlIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5oZWFkaW5nLWNhbGwtdG8tYWN0aW9uIHtcbiAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICB9XG4gIH1cblxuICAucGljdHVyZXMtcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDQ7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgbWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgKiAtMSk7XG5cbiAgICAucGljdHVyZS1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgY2FsYyh2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgKiAyKTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuICAtLXBhZ2UtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgLS1wYWdlLWFjdGlvbnMtcGFkZGluZzogNXB4O1xuICAtLXBhZ2UtZnJpZW5kcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS1waWN0dXJlcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG5cbi51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gIG1heC13aWR0aDogMjYlO1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAudXNlci1kYXRhLXJvdyB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWRhdGEtcm93IC51c2VyLW5hbWUge1xuICBtYXJnaW46IDBweCAwcHggNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItZGF0YS1yb3cgLnVzZXItdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWRhdGEtcm93IC5tZW1iZXJzaGlwLWNvbCB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBmbGV4LWdyb3c6IDA7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWRhdGEtcm93IC51c2VyLW1lbWJlcnNoaXAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAuYWN0aW9ucy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiB2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZyk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLmFjdGlvbnMtcm93IC5tYWluLWFjdGlvbnMge1xuICBmbGV4LWdyb3c6IDA7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLmFjdGlvbnMtcm93IC5tYWluLWFjdGlvbnMgLmNhbGwtdG8tYWN0aW9uLWJ0biB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZyk7XG4gIG1hcmdpbjogMHB4O1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAuYWN0aW9ucy1yb3cgLnNlY29uZGFyeS1hY3Rpb25zIHtcbiAgZmxleC1ncm93OiAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAuYWN0aW9ucy1yb3cgLnNlY29uZGFyeS1hY3Rpb25zIC5tb3JlLWJ0biB7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4udXNlci1zdGF0cy1zZWN0aW9uIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG4udXNlci1zdGF0cy1zZWN0aW9uIC51c2VyLXN0YXRzLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlci1zdGF0cy1zZWN0aW9uIC51c2VyLXN0YXRzLXdyYXBwZXIgLnN0YXQtdmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnVzZXItc3RhdHMtc2VjdGlvbiAudXNlci1zdGF0cy13cmFwcGVyIC5zdGF0LW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuLmRldGFpbHMtc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4udXNlci1hYm91dC1zZWN0aW9uIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuLnVzZXItYWJvdXQtc2VjdGlvbiAudXNlci1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG4udXNlci1mcmllbmRzLXNlY3Rpb24ge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmhlYWRpbmctcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmhlYWRpbmctcm93IC5kZXRhaWxzLXNlY3Rpb24tdGl0bGUge1xuICBtYXJnaW46IDBweDtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuaGVhZGluZy1yb3cgLmhlYWRpbmctY2FsbC10by1hY3Rpb24ge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5mcmllbmRzLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogNztcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uO1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmZyaWVuZHMtcm93Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmZyaWVuZHMtcm93OjpiZWZvcmUsIC51c2VyLWZyaWVuZHMtc2VjdGlvbiAuZnJpZW5kcy1yb3c6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZmxleDogMCAwIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1mcmllbmRzLWd1dHRlcikpO1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5mcmllbmRzLXJvdyAuZnJpZW5kLWl0ZW0ge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1mcmllbmRzLWd1dHRlcik7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmZyaWVuZHMtcm93IC5mcmllbmQtaXRlbSAuZnJpZW5kLW5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnVzZXItcGhvdG9zLXNlY3Rpb24ge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4udXNlci1waG90b3Mtc2VjdGlvbiAuaGVhZGluZy1yb3cge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51c2VyLXBob3Rvcy1zZWN0aW9uIC5oZWFkaW5nLXJvdyAuZGV0YWlscy1zZWN0aW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4udXNlci1waG90b3Mtc2VjdGlvbiAuaGVhZGluZy1yb3cgLmhlYWRpbmctY2FsbC10by1hY3Rpb24ge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLnVzZXItcGhvdG9zLXNlY3Rpb24gLnBpY3R1cmVzLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogNDtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIC0xKTtcbn1cbi51c2VyLXBob3Rvcy1zZWN0aW9uIC5waWN0dXJlcy1yb3cgLnBpY3R1cmUtaXRlbSB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgY2FsYyh2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgKiAyKTtcbn0iLCIvLyBIaWRlIHNjcm9sbGJhcnM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODk5NDgzNy8xMTE2OTU5XG5AbWl4aW4gaGlkZS1zY3JvbGxiYXJzKCkge1xuICAvLyBJRSAxMCtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuXG4gIC8vIEZpcmVmb3hcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG5cbiAgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */", "app-image-shell.user-image[_ngcontent-%COMP%] {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n\n.user-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 20px;\n  max-width: 50%;\n}\n\n.user-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.user-title[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 16px;\n  max-width: 70%;\n}\n\n.user-title[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.user-membership[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--ion-color-secondary-rgb), 0.4);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.user-membership[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.stat-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 18px;\n  max-width: 50%;\n  margin: 0px auto;\n}\n\n.stat-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n  margin: initial;\n}\n\n.user-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.friend-picture[_ngcontent-%COMP%] {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n\n.friend-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.user-photo-image[_ngcontent-%COMP%] {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5zaGVsbC5zY3NzIiwic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0UsZ0JBQUE7QUNDSjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVFO0VBQ0UsZ0JBQUE7QUNBSjs7QURJQTtFQUNFLGtFQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDREY7O0FER0U7RUFDRSxjQUFBO0FDREo7O0FES0E7RUFDRSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBRElFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDRko7O0FETUE7RUFDRSw4QkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0RBQUE7QUNIRjs7QURNQTtFQUNFLDhCQUFBO0FDSEY7O0FETUE7RUFDRSxzREFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy91c2VyLXByb2ZpbGUuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogNTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLnVzZXItdGl0bGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA3MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuXG4udXNlci1tZW1iZXJzaGlwID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIDAuNCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5zdGF0LXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgbWFyZ2luOiBpbml0aWFsO1xuICB9XG59XG5cbi51c2VyLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5mcmllbmQtcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tcGFnZS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmZyaWVuZC1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC51c2VyLXBob3RvLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLXBhZ2UtYm9yZGVyLXJhZGl1cyk7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4udXNlci10aXRsZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cbi51c2VyLXRpdGxlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4udXNlci1tZW1iZXJzaGlwID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIDAuNCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuLnVzZXItbWVtYmVyc2hpcCA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5zdGF0LXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLnN0YXQtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG4gIG1hcmdpbjogaW5pdGlhbDtcbn1cblxuLnVzZXItZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmZyaWVuZC1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuXG4uZnJpZW5kLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnVzZXItcGhvdG8taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLXBhZ2UtYm9yZGVyLXJhZGl1cyk7XG59Il19 */", ".ios[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%] {\n  max-width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5pb3Muc2NzcyIsInNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy91c2VyLXByb2ZpbGUuaW9zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxjQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5pb3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoLmlvcykge1xuICAudXNlci1kZXRhaWxzLXNlY3Rpb24ge1xuICAgIC51c2VyLWltYWdlLXdyYXBwZXIge1xuICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdC1jb250ZXh0KC5pb3MpIC51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbWFnZS13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAzMCU7XG59Il19 */", ".md[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%] {\n  max-width: 28%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5tZC5zY3NzIiwic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5tZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsY0FBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy91c2VyLXByb2ZpbGUubWQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoLm1kKSB7XG4gIC51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gICAgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gICAgICBtYXgtd2lkdGg6IDI4JTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0LWNvbnRleHQoLm1kKSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gIG1heC13aWR0aDogMjglO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfilePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.page.html',
                styleUrls: [
                    './styles/user-profile.page.scss',
                    './styles/user-profile.shell.scss',
                    './styles/user-profile.ios.scss',
                    './styles/user-profile.md.scss'
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { isShell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-shell']
        }] }); })();


/***/ }),

/***/ "./src/app/user/profile/user-profile.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/profile/user-profile.resolver.ts ***!
  \*******************************************************/
/*! exports provided: UserProfileResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileResolver", function() { return UserProfileResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");




class UserProfileResolver {
    constructor(userService) {
        this.userService = userService;
    }
    resolve() {
        const dataSource = this.userService.getProfileDataSource();
        const dataStore = this.userService.getProfileStore(dataSource);
        return dataStore;
    }
}
UserProfileResolver.ɵfac = function UserProfileResolver_Factory(t) { return new (t || UserProfileResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
UserProfileResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserProfileResolver, factory: UserProfileResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utils/resolver-helper.ts":
/*!******************************************!*\
  !*** ./src/app/utils/resolver-helper.ts ***!
  \******************************************/
/*! exports provided: ResolverHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolverHelper", function() { return ResolverHelper; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class ResolverHelper {
    // More info on function overloads here: https://www.typescriptlang.org/docs/handbook/functions.html#overloads
    static extractData(source, constructor) {
        if (source instanceof _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["DataStore"]) {
            return source.state;
        }
        else if (source instanceof constructor) {
            // The right side of instanceof should be an expression evaluating to a constructor function (ie. a class), not a type
            // That's why we included an extra parameter which acts as a constructor function for type T
            // (see: https://github.com/microsoft/TypeScript/issues/5236)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(source);
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module-es2015.js.map