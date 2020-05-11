(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-details-travel-details-module"],{

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

/***/ "./src/app/travel/details/travel-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/travel/details/travel-details.module.ts ***!
  \*********************************************************/
/*! exports provided: TravelDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDetailsPageModule", function() { return TravelDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _travel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../travel.service */ "./src/app/travel/travel.service.ts");
/* harmony import */ var _travel_details_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./travel-details.page */ "./src/app/travel/details/travel-details.page.ts");
/* harmony import */ var _travel_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./travel-details.resolver */ "./src/app/travel/details/travel-details.resolver.ts");
/* harmony import */ var _travel_details_plain_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./travel-details.plain.resolver */ "./src/app/travel/details/travel-details.plain.resolver.ts");













const routes = [
    {
        path: '',
        component: _travel_details_page__WEBPACK_IMPORTED_MODULE_8__["TravelDetailsPage"],
        resolve: {
            data: _travel_details_resolver__WEBPACK_IMPORTED_MODULE_9__["TravelDetailsResolver"]
            // data: TravelDetailsPlainResolver
        }
    }
];
class TravelDetailsPageModule {
}
TravelDetailsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TravelDetailsPageModule });
TravelDetailsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TravelDetailsPageModule_Factory(t) { return new (t || TravelDetailsPageModule)(); }, providers: [
        _travel_details_resolver__WEBPACK_IMPORTED_MODULE_9__["TravelDetailsResolver"],
        _travel_details_plain_resolver__WEBPACK_IMPORTED_MODULE_10__["TravelDetailsPlainResolver"],
        _travel_service__WEBPACK_IMPORTED_MODULE_7__["TravelService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TravelDetailsPageModule, { declarations: [_travel_details_page__WEBPACK_IMPORTED_MODULE_8__["TravelDetailsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravelDetailsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                ],
                declarations: [
                    _travel_details_page__WEBPACK_IMPORTED_MODULE_8__["TravelDetailsPage"]
                ],
                providers: [
                    _travel_details_resolver__WEBPACK_IMPORTED_MODULE_9__["TravelDetailsResolver"],
                    _travel_details_plain_resolver__WEBPACK_IMPORTED_MODULE_10__["TravelDetailsPlainResolver"],
                    _travel_service__WEBPACK_IMPORTED_MODULE_7__["TravelService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/travel/details/travel-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/travel/details/travel-details.page.ts ***!
  \*******************************************************/
/*! exports provided: TravelDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDetailsPage", function() { return TravelDetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resolver-helper */ "./src/app/utils/resolver-helper.ts");
/* harmony import */ var _travel_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travel-details.model */ "./src/app/travel/details/travel-details.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function TravelDetailsPage_ion_col_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", tag_r5);
} }
function TravelDetailsPage_li_40_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const schedule_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", schedule_r6.hourFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", schedule_r6.hourTo);
} }
function TravelDetailsPage_li_40_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-badge", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TravelDetailsPage_li_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TravelDetailsPage_li_40_ng_container_5_Template, 7, 2, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TravelDetailsPage_li_40_ng_container_6_Template, 3, 0, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const schedule_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", schedule_r6.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", schedule_r6.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !schedule_r6.open);
} }
const _c0 = function () { return { w: 18, h: 23 }; };
function TravelDetailsPage_div_49_ion_col_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-aspect-ratio", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-image-shell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const placeToStay_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", placeToStay_r11.picture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", placeToStay_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", placeToStay_r11.rating);
} }
function TravelDetailsPage_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Need a place to stay?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TravelDetailsPage_div_49_ion_col_4_Template, 10, 5, "ion-col", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.details == null ? null : ctx_r2.details.whereToStay);
} }
function TravelDetailsPage_div_50_ion_col_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-aspect-ratio", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-image-shell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const placeToEat_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", placeToEat_r13.picture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", placeToEat_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", placeToEat_r13.rating);
} }
function TravelDetailsPage_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Grab a bite?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TravelDetailsPage_div_50_ion_col_4_Template, 10, 5, "ion-col", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.details == null ? null : ctx_r3.details.whereToEat);
} }
const _c1 = function () { return { w: 64, h: 23 }; };
function TravelDetailsPage_div_51_ion_row_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-image-shell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-aspect-ratio", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const relatedActivity_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", relatedActivity_r15.picture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", relatedActivity_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", relatedActivity_r15.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", relatedActivity_r15.rating);
} }
function TravelDetailsPage_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "More activities?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TravelDetailsPage_div_51_ion_row_3_Template, 13, 7, "ion-row", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.details == null ? null : ctx_r4.details.relatedActivities);
} }
const _c2 = function () { return { w: 64, h: 50 }; };
const _c3 = function () { return { w: 47, h: 25 }; };
const _c4 = function () { return { w: 64, h: 30 }; };
class TravelDetailsPage {
    constructor(route) {
        this.route = route;
    }
    get isShell() {
        return (this.details && this.details.isShell) ? true : false;
    }
    ngOnInit() {
        // On init, the route subscription is the active subscription
        this.subscriptions = this.route.data
            .subscribe((resolvedRouteData) => {
            // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
            this.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__["ResolverHelper"].extractData(resolvedRouteData.data, _travel_details_model__WEBPACK_IMPORTED_MODULE_3__["TravelDetailsModel"])
                .subscribe((state) => {
                this.details = state;
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
TravelDetailsPage.ɵfac = function TravelDetailsPage_Factory(t) { return new (t || TravelDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
TravelDetailsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TravelDetailsPage, selectors: [["app-travel-details"]], hostVars: 2, hostBindings: function TravelDetailsPage_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
    } }, decls: 52, vars: 21, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "app/categories/travel"], [1, "travel-details-content"], [1, "image-row"], ["size", "12"], ["animation", "spinner", 1, "add-overlay", "details-image", 3, "display", "src"], [3, "ratio"], [1, "icon-wrapper"], [1, "details-icon", 3, "src"], [1, "description-row"], [1, "details-name"], ["animation", "bouncing", 3, "data"], [1, "details-short-description"], [1, "details-score"], [1, "score-item"], ["src", "./assets/custom-icons/travel/star.svg", 1, "score-icon"], [1, "score-value"], [3, "data"], ["src", "./assets/custom-icons/travel/comments.svg", 1, "score-icon"], [1, "details-tags"], ["class", "tag-wrapper", 4, "ngFor", "ngForOf"], [1, "details-description"], ["animation", "bouncing", "lines", "6", 3, "data"], [1, "open-hours-wrapper"], [1, "detail-title"], [1, "schedules-list"], ["class", "open-hour-item", 4, "ngFor", "ngForOf"], [1, "location-wrapper"], [1, "location-header"], [1, "location-address"], ["animation", "spinner", 1, "location-image", 3, "src"], ["class", "suggested-places-wrapper", 4, "ngIf"], ["class", "related-activities-wrapper", 4, "ngIf"], [1, "tag-wrapper"], [1, "item-tag"], [1, "open-hour-item"], [1, "schedule-outer"], [1, "schedule-day"], [1, "schedule-hours"], [4, "ngIf"], [1, "schedule-value"], [1, "schedule-separator"], ["color", "medium", 1, "schedule-closed"], [1, "suggested-places-wrapper"], [1, "detail-alt-title"], [1, "suggested-places-row"], ["size", "4", "class", "suggested-place", 4, "ngFor", "ngForOf"], ["size", "4", 1, "suggested-place"], ["animation", "spinner", 1, "place-picture", 3, "src"], [1, "place-details"], [1, "place-name"], [1, "place-rating"], ["name", "star-outline", 1, "rating-icon"], [1, "rating-value"], [1, "related-activities-wrapper"], ["class", "related-activity", 4, "ngFor", "ngForOf"], [1, "related-activity"], ["animation", "spinner", 1, "related-activity-picture", 3, "display", "src"], ["size", "12", 1, "activity-details"], [1, "activity-name"], [1, "activity-category"], [1, "activity-rating"]], template: function TravelDetailsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Travel Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-image-shell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-aspect-ratio", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-aspect-ratio", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-image-shell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-text-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-text-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-text-shell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-text-shell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-row", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, TravelDetailsPage_ion_col_32_Template, 3, 1, "ion-col", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-text-shell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "When?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, TravelDetailsPage_li_40_Template, 7, 3, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Where?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-text-shell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "app-aspect-ratio", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-image-shell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TravelDetailsPage_div_49_Template, 5, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, TravelDetailsPage_div_50_Template, 5, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, TravelDetailsPage_div_51_Template, 4, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", ctx.details == null ? null : ctx.details.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.details == null ? null : ctx.details.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.name == null ? null : ctx.details.name.concat(" - ", ctx.details == null ? null : ctx.details.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.shortDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.reviewsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.fullDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.openHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details.location == null ? null : ctx.details.location.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.details.location == null ? null : ctx.details.location.mapImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.details == null ? null : ctx.details.whereToStay) && ctx.details.whereToStay.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.details == null ? null : ctx.details.whereToEat) && ctx.details.whereToEat.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.details == null ? null : ctx.details.relatedActivities) && ctx.details.relatedActivities.length > 0);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__["AspectRatioComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBadge"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-tags-vertical-gutter: 2px;\n  --page-tags-horizontal-gutter: 4px;\n  --page-places-gutter: 5px;\n  --page-color: #00AFFF;\n}\n\n.travel-details-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  margin: 0px 15%;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 20px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-short-description[_ngcontent-%COMP%] {\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: var(--page-margin);\n  font-size: 14px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-score[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: var(--page-margin);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-score[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-score[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: var(--page-margin);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-score[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%]   .score-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--ion-color-dark-tint);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-score[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 4px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  justify-content: center;\n  margin-top: calc(var(--page-tags-vertical-gutter) * -1);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%] {\n  padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter) var(--page-tags-vertical-gutter) 0px;\n  flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]:last-child {\n  padding-right: 0px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%]   .item-tag[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-light-shade);\n  padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter);\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) * 2) 0px 0px;\n  line-height: 1.3;\n  font-size: 14px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark-tint);\n  margin: 0px 0px var(--page-margin);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]    + .open-hour-item[_ngcontent-%COMP%] {\n  margin-top: calc(var(--page-margin) / 2);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 75%;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-day[_ngcontent-%COMP%] {\n  display: block;\n  padding-right: var(--page-margin);\n  width: 40%;\n  font-size: 14px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-separator[_ngcontent-%COMP%] {\n  margin: 0px var(--page-margin);\n  line-height: 1;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-value[_ngcontent-%COMP%] {\n  flex: 0 1 25%;\n  font-weight: 500;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-value[_ngcontent-%COMP%]:first-child {\n  text-align: start;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-value[_ngcontent-%COMP%]:last-child {\n  text-align: end;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-closed[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%] {\n  padding: 0px 0px calc(var(--page-margin) * 2);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-header[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-address[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .detail-alt-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px 0px var(--page-margin);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .suggested-places-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .suggested-places-wrapper[_ngcontent-%COMP%]   .suggested-places-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: var(--page-places-gutter);\n  margin-left: calc(var(--page-places-gutter) * -1);\n  margin-right: calc(var(--page-places-gutter) * -1);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .suggested-places-wrapper[_ngcontent-%COMP%]   .suggested-places-row[_ngcontent-%COMP%]   .suggested-place[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .suggested-places-wrapper[_ngcontent-%COMP%]   .suggested-places-row[_ngcontent-%COMP%]   .suggested-place[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .suggested-places-wrapper[_ngcontent-%COMP%]   .suggested-places-row[_ngcontent-%COMP%]   .suggested-place[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  margin: calc(var(--page-margin) / 2) 0px 5px;\n  text-align: center;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .suggested-places-wrapper[_ngcontent-%COMP%]   .suggested-places-row[_ngcontent-%COMP%]   .suggested-place[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-rating[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .suggested-places-wrapper[_ngcontent-%COMP%]   .suggested-places-row[_ngcontent-%COMP%]   .suggested-place[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-rating[_ngcontent-%COMP%]   .rating-icon[_ngcontent-%COMP%] {\n  color: var(--page-color);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .suggested-places-wrapper[_ngcontent-%COMP%]   .suggested-places-row[_ngcontent-%COMP%]   .suggested-place[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-rating[_ngcontent-%COMP%]   .rating-value[_ngcontent-%COMP%] {\n  color: var(--page-color);\n  font-size: 14px;\n  margin-left: 4px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .related-activities-wrapper[_ngcontent-%COMP%] {\n  padding: 0px 0px calc(var(--page-margin) * 2);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .related-activities-wrapper[_ngcontent-%COMP%]   .related-activity[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .related-activities-wrapper[_ngcontent-%COMP%]   .related-activity[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: var(--page-margin);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .related-activities-wrapper[_ngcontent-%COMP%]   .related-activity[_ngcontent-%COMP%]   .activity-details[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .related-activities-wrapper[_ngcontent-%COMP%]   .related-activity[_ngcontent-%COMP%]   .activity-details[_ngcontent-%COMP%]   .activity-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: 5px;\n  font-size: 14px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .related-activities-wrapper[_ngcontent-%COMP%]   .related-activity[_ngcontent-%COMP%]   .activity-details[_ngcontent-%COMP%]   .activity-category[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n  font-size: 12px;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .related-activities-wrapper[_ngcontent-%COMP%]   .related-activity[_ngcontent-%COMP%]   .activity-details[_ngcontent-%COMP%]   .activity-rating[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: 5px;\n  margin-right: var(--page-margin);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .related-activities-wrapper[_ngcontent-%COMP%]   .related-activity[_ngcontent-%COMP%]   .activity-details[_ngcontent-%COMP%]   .activity-rating[_ngcontent-%COMP%]   .rating-icon[_ngcontent-%COMP%] {\n  color: var(--page-color);\n}\n\n.travel-details-content[_ngcontent-%COMP%]   .related-activities-wrapper[_ngcontent-%COMP%]   .related-activity[_ngcontent-%COMP%]   .activity-details[_ngcontent-%COMP%]   .activity-rating[_ngcontent-%COMP%]   .rating-value[_ngcontent-%COMP%] {\n  color: var(--page-color);\n  font-size: 14px;\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC90cmF2ZWwvZGV0YWlscy9zdHlsZXMvdHJhdmVsLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC90cmF2ZWwvZGV0YWlscy9zdHlsZXMvdHJhdmVsLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUVBLHFCQUFBO0FDSEY7O0FET0E7RUFDRSxvQ0FBQTtBQ0pGOztBRE1FO0VBQ0UsOEJBQUE7QUNKSjs7QURNSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKTjs7QURRRTtFQUNFLDhCQUFBO0VBRUEsMkVBQUE7QUNQSjs7QURTSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDUE47O0FEVUk7RUFDRSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ1JOOztBRFdJO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7QUNUTjs7QURXTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ1RSOztBRFdRO0VBQ0UsaUNBQUE7QUNUVjs7QURZUTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtBQ1ZWOztBRGFRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDWFY7O0FEZ0JJO0VBQ0UsOEJBQUE7RUFFQSx1QkFBQTtFQUNBLHVEQUFBO0FDZk47O0FEaUJNO0VBQ0UsaUhBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDZlI7O0FEaUJRO0VBQ0Usa0JBQUE7QUNmVjs7QURtQk07RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSw4Q0FBQTtFQUNBLDRFQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDakJSOztBRHFCSTtFQUNFLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbkJOOztBRHVCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7QUNyQko7O0FEd0JFO0VBQ0UsNERBQUE7QUN0Qko7O0FEd0JJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3RCTjs7QUR3Qk07RUFDRSxlQUFBO0VBQ0EsbUNBQUE7QUN0QlI7O0FEd0JRO0VBQ0Usd0NBQUE7QUN0QlY7O0FEeUJRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FDdkJWOztBRHlCVTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDdkJaOztBRDBCVTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ3hCWjs7QUQwQlk7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUN4QmQ7O0FEMkJZO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDekJkOztBRDJCYztFQUNFLGlCQUFBO0FDekJoQjs7QUQyQmM7RUFDRSxlQUFBO0FDekJoQjs7QUQ2Qlk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUMzQmQ7O0FEbUNFO0VBQ0UsNkNBQUE7QUNqQ0o7O0FEbUNJO0VBQ0UsbUNBQUE7RUFDQSwyQ0FBQTtBQ2pDTjs7QURvQ0k7RUFDRSxrQkFBQTtBQ2xDTjs7QURxQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDbkNOOztBRHVDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0FDckNKOztBRHdDRTtFQUNFLDREQUFBO0FDdENKOztBRHdDSTtFQUNFLG9EQUFBO0VBRUEsaURBQUE7RUFDQSxrREFBQTtBQ3ZDTjs7QUR5Q007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDdkNSOztBRHlDUTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ3ZDVjs7QUR5Q1U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FDdkNaOztBRDBDVTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDeENaOztBRDBDWTtFQUNFLHdCQUFBO0FDeENkOztBRDJDWTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDekNkOztBRGlERTtFQUNFLDZDQUFBO0FDL0NKOztBRGlESTtFQUNFLDhCQUFBO0FDL0NOOztBRGlETTtFQUNFLGlDQUFBO0FDL0NSOztBRGtETTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNoRFI7O0FEa0RRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDaERWOztBRG1EUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ2pEVjs7QURvRFE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNuRFY7O0FEcURVO0VBQ0Usd0JBQUE7QUNuRFo7O0FEc0RVO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNwRFoiLCJmaWxlIjoic3JjL2FwcC90cmF2ZWwvZGV0YWlscy9zdHlsZXMvdHJhdmVsLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyOiAycHg7XG4gIC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyOiA0cHg7XG4gIC0tcGFnZS1wbGFjZXMtZ3V0dGVyOiA1cHg7XG5cbiAgLS1wYWdlLWNvbG9yOiAjMDBBRkZGO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC5pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIC5pY29uLXdyYXBwZXIge1xuICAgICAgbWFyZ2luOiAwcHggMTUlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuZGVzY3JpcHRpb24tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAuZGV0YWlscy1uYW1lIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXNob3J0LWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmRldGFpbHMtc2NvcmUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgLnNjb3JlLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjb3JlLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NvcmUtdmFsdWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRldGFpbHMtdGFncyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSAqIC0xKTtcblxuICAgICAgLnRhZy13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgdmFyKC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyKSB2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSAwcHg7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaXRlbS10YWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSAwcHggMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlsLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgfVxuXG4gIC5vcGVuLWhvdXJzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5zY2hlZHVsZXMtbGlzdCB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAgIC5vcGVuLWhvdXItaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG5cbiAgICAgICAgJiArIC5vcGVuLWhvdXItaXRlbSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY2hlZHVsZS1vdXRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB3aWR0aDogNzUlO1xuXG4gICAgICAgICAgLnNjaGVkdWxlLWRheSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNjaGVkdWxlLWhvdXJzIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5zY2hlZHVsZS1zZXBhcmF0b3Ige1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2NoZWR1bGUtdmFsdWUge1xuICAgICAgICAgICAgICBmbGV4OiAwIDEgMjUlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zY2hlZHVsZS1jbG9zZWQge1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxvY2F0aW9uLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5sb2NhdGlvbi1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIH1cblxuICAgIC5kZXRhaWwtdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC5sb2NhdGlvbi1hZGRyZXNzIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC1hbHQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gICAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgfVxuXG4gIC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5zdWdnZXN0ZWQtcGxhY2VzLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiB2YXIoLS1wYWdlLXBsYWNlcy1ndXR0ZXIpO1xuXG4gICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLXBsYWNlcy1ndXR0ZXIpICogLTEpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtcGxhY2VzLWd1dHRlcikgKiAtMSk7XG5cbiAgICAgIC5zdWdnZXN0ZWQtcGxhY2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuXG4gICAgICAgIC5wbGFjZS1kZXRhaWxzIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAucGxhY2UtbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCA1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBsYWNlLXJhdGluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAucmF0aW5nLWljb24ge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yYXRpbmctdmFsdWUge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5yZWxhdGVkLWFjdGl2aXR5IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgfVxuXG4gICAgICAuYWN0aXZpdHktZGV0YWlscyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5hY3Rpdml0eS1uYW1lIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2aXR5LWNhdGVnb3J5IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2aXR5LXJhdGluZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAucmF0aW5nLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yYXRpbmctdmFsdWUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyOiAycHg7XG4gIC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyOiA0cHg7XG4gIC0tcGFnZS1wbGFjZXMtZ3V0dGVyOiA1cHg7XG4gIC0tcGFnZS1jb2xvcjogIzAwQUZGRjtcbn1cblxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuaW1hZ2Utcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmltYWdlLXJvdyAuaWNvbi13cmFwcGVyIHtcbiAgbWFyZ2luOiAwcHggMTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtc2hvcnQtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtc2NvcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtc2NvcmUgLnNjb3JlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1zY29yZSAuc2NvcmUtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1zY29yZSAuc2NvcmUtaXRlbSAuc2NvcmUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1zY29yZSAuc2NvcmUtaXRlbSAuc2NvcmUtdmFsdWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXRhZ3Mge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpICogLTEpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy10YWdzIC50YWctd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcikgdmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgMHB4O1xuICBmbGV4LWdyb3c6IDA7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXRhZ3MgLnRhZy13cmFwcGVyOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXRhZ3MgLml0ZW0tdGFnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgdmFyKC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgMHB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gKyAub3Blbi1ob3VyLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDc1JTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWRheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIC5zY2hlZHVsZS1zZXBhcmF0b3Ige1xuICBtYXJnaW46IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtaG91cnMgLnNjaGVkdWxlLXZhbHVlIHtcbiAgZmxleDogMCAxIDI1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIC5zY2hlZHVsZS12YWx1ZTpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtaG91cnMgLnNjaGVkdWxlLXZhbHVlOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gLnNjaGVkdWxlLW91dGVyIC5zY2hlZHVsZS1ob3VycyAuc2NoZWR1bGUtY2xvc2VkIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciAubG9jYXRpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciAuZGV0YWlsLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIgLmxvY2F0aW9uLWFkZHJlc3Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXRhaWwtYWx0LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuc3VnZ2VzdGVkLXBsYWNlcy13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnN1Z2dlc3RlZC1wbGFjZXMtd3JhcHBlciAuc3VnZ2VzdGVkLXBsYWNlcy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiB2YXIoLS1wYWdlLXBsYWNlcy1ndXR0ZXIpO1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLXBsYWNlcy1ndXR0ZXIpICogLTEpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1wbGFjZXMtZ3V0dGVyKSAqIC0xKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIgLnN1Z2dlc3RlZC1wbGFjZXMtcm93IC5zdWdnZXN0ZWQtcGxhY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnN1Z2dlc3RlZC1wbGFjZXMtd3JhcHBlciAuc3VnZ2VzdGVkLXBsYWNlcy1yb3cgLnN1Z2dlc3RlZC1wbGFjZSAucGxhY2UtZGV0YWlscyB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIgLnN1Z2dlc3RlZC1wbGFjZXMtcm93IC5zdWdnZXN0ZWQtcGxhY2UgLnBsYWNlLWRldGFpbHMgLnBsYWNlLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHggNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuc3VnZ2VzdGVkLXBsYWNlcy13cmFwcGVyIC5zdWdnZXN0ZWQtcGxhY2VzLXJvdyAuc3VnZ2VzdGVkLXBsYWNlIC5wbGFjZS1kZXRhaWxzIC5wbGFjZS1yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIgLnN1Z2dlc3RlZC1wbGFjZXMtcm93IC5zdWdnZXN0ZWQtcGxhY2UgLnBsYWNlLWRldGFpbHMgLnBsYWNlLXJhdGluZyAucmF0aW5nLWljb24ge1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuc3VnZ2VzdGVkLXBsYWNlcy13cmFwcGVyIC5zdWdnZXN0ZWQtcGxhY2VzLXJvdyAuc3VnZ2VzdGVkLXBsYWNlIC5wbGFjZS1kZXRhaWxzIC5wbGFjZS1yYXRpbmcgLnJhdGluZy12YWx1ZSB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtYWN0aXZpdGllcy13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtYWN0aXZpdGllcy13cmFwcGVyIC5yZWxhdGVkLWFjdGl2aXR5IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtYWN0aXZpdGllcy13cmFwcGVyIC5yZWxhdGVkLWFjdGl2aXR5Om5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIgLnJlbGF0ZWQtYWN0aXZpdHkgLmFjdGl2aXR5LWRldGFpbHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciAucmVsYXRlZC1hY3Rpdml0eSAuYWN0aXZpdHktZGV0YWlscyAuYWN0aXZpdHktbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciAucmVsYXRlZC1hY3Rpdml0eSAuYWN0aXZpdHktZGV0YWlscyAuYWN0aXZpdHktY2F0ZWdvcnkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIgLnJlbGF0ZWQtYWN0aXZpdHkgLmFjdGl2aXR5LWRldGFpbHMgLmFjdGl2aXR5LXJhdGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIgLnJlbGF0ZWQtYWN0aXZpdHkgLmFjdGl2aXR5LWRldGFpbHMgLmFjdGl2aXR5LXJhdGluZyAucmF0aW5nLWljb24ge1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIgLnJlbGF0ZWQtYWN0aXZpdHkgLmFjdGl2aXR5LWRldGFpbHMgLmFjdGl2aXR5LXJhdGluZyAucmF0aW5nLXZhbHVlIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59Il19 */", "[_nghost-%COMP%] {\n  --shell-color: #00AFFF;\n  --shell-color-rgb: 0,175,255;\n}\n\napp-image-shell.details-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .40);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.details-icon[_ngcontent-%COMP%] {\n  --image-shell-loading-background: transparent;\n}\n\n.details-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 20px;\n}\n\n.details-short-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 80%;\n}\n\n.details-short-description[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.score-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.score-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.item-tag[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px;\n}\n\n.item-tag[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.details-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n}\n\n.schedule-day[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 90%;\n}\n\n.schedule-day[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.schedule-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 100%;\n}\n\n.schedule-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.location-address[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.location-address[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\napp-image-shell.location-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.place-picture[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .05);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .15);\n}\n\n.place-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n}\n\n.rating-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.rating-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\napp-image-shell.related-activity-picture[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .05);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .15);\n}\n\n.activity-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 25%;\n  margin: 0px auto;\n}\n\n.activity-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n  margin: 0px;\n}\n\n.activity-category[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n  max-width: 45%;\n  margin: 0px auto;\n}\n\n.activity-category[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n  margin: 0px;\n}\n\n.rating-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.rating-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC90cmF2ZWwvZGV0YWlscy9zdHlsZXMvdHJhdmVsLWRldGFpbHMuc2hlbGwuc2NzcyIsInNyYy9hcHAvdHJhdmVsL2RldGFpbHMvc3R5bGVzL3RyYXZlbC1kZXRhaWxzLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0FDREY7O0FEV0E7RUFDRSxtRUFBQTtFQUNBLHNFQUFBO0VBQ0EsOERBQUE7QUNSRjs7QURXQTtFQUNFLDZDQUFBO0FDUkY7O0FEV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FDUkY7O0FEV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFVFO0VBQ0Usa0JBQUE7QUNSSjs7QURZQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDVEY7O0FEV0U7RUFDRSxjQUFBO0FDVEo7O0FEYUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1ZGOztBRFlFO0VBQ0UsY0FBQTtBQ1ZKOztBRGNBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQ1hGOztBRGNBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNYRjs7QURhRTtFQUNFLGtCQUFBO0FDWEo7O0FEZUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1pGOztBRGNFO0VBQ0Usa0JBQUE7QUNaSjs7QURnQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ2JGOztBRGVFO0VBQ0Usa0JBQUE7QUNiSjs7QURpQkE7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0FDZEY7O0FEaUJBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQ2RGOztBRGlCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUNkRjs7QURpQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ2RGOztBRGdCRTtFQUNFLGNBQUE7QUNkSjs7QURrQkE7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0FDZkY7O0FEa0JBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2ZGOztBRGlCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ2ZKOztBRG1CQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNoQkY7O0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDaEJKOztBRG9CQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDakJGOztBRG1CRTtFQUNFLGNBQUE7QUNqQkoiLCJmaWxlIjoic3JjL2FwcC90cmF2ZWwvZGV0YWlscy9zdHlsZXMvdHJhdmVsLWRldGFpbHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjMDBBRkZGO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMCwxNzUsMjU1O1xufVxuXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxuOmhvc3QoLmlzLXNoZWxsKSB7XG4gIC8vIGlvbi1jb250ZW50IHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLmRldGFpbHMtaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNDApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmRldGFpbHMtaWNvbiB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmRldGFpbHMtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGV0YWlscy1zaG9ydC1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLnNjb3JlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5kZXRhaWxzLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5zY2hlZHVsZS1kYXkgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5zY2hlZHVsZS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5sb2NhdGlvbi1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwubG9jYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnBsYWNlLXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbn1cblxuLnBsYWNlLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbn1cblxuLnJhdGluZy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjA1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLnJlbGF0ZWQtYWN0aXZpdHktcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xufVxuXG4uYWN0aXZpdHktbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDI1JTtcbiAgbWFyZ2luOiAwcHggYXV0bztcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cblxuLmFjdGl2aXR5LWNhdGVnb3J5ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNDUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuXG4ucmF0aW5nLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjMDBBRkZGO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMCwxNzUsMjU1O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGV0YWlscy1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC40MCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGV0YWlscy1pY29uIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZGV0YWlscy1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5kZXRhaWxzLXNob3J0LWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuLmRldGFpbHMtc2hvcnQtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLnNjb3JlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5zY29yZS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG4uaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uc2NoZWR1bGUtZGF5ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogOTAlO1xufVxuLnNjaGVkdWxlLWRheSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4uc2NoZWR1bGUtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnNjaGVkdWxlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5sb2NhdGlvbi1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xufVxuLmxvY2F0aW9uLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmxvY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5wbGFjZS1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjA1KTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG59XG5cbi5wbGFjZS1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5yYXRpbmctdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuLnJhdGluZy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZWxhdGVkLWFjdGl2aXR5LXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbn1cblxuLmFjdGl2aXR5LW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiAyNSU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uYWN0aXZpdHktbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFjdGl2aXR5LWNhdGVnb3J5ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNDUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLmFjdGl2aXR5LWNhdGVnb3J5ID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucmF0aW5nLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5yYXRpbmctdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravelDetailsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-travel-details',
                templateUrl: './travel-details.page.html',
                styleUrls: [
                    './styles/travel-details.page.scss',
                    './styles/travel-details.shell.scss'
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { isShell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-shell']
        }] }); })();


/***/ }),

/***/ "./src/app/travel/details/travel-details.plain.resolver.ts":
/*!*****************************************************************!*\
  !*** ./src/app/travel/details/travel-details.plain.resolver.ts ***!
  \*****************************************************************/
/*! exports provided: TravelDetailsPlainResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDetailsPlainResolver", function() { return TravelDetailsPlainResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../travel.service */ "./src/app/travel/travel.service.ts");




class TravelDetailsPlainResolver {
    constructor(travelService) {
        this.travelService = travelService;
    }
    resolve() {
        return this.travelService.getDetailsDataSource();
    }
}
TravelDetailsPlainResolver.ɵfac = function TravelDetailsPlainResolver_Factory(t) { return new (t || TravelDetailsPlainResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"])); };
TravelDetailsPlainResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TravelDetailsPlainResolver, factory: TravelDetailsPlainResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravelDetailsPlainResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/travel/details/travel-details.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/travel/details/travel-details.resolver.ts ***!
  \***********************************************************/
/*! exports provided: TravelDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDetailsResolver", function() { return TravelDetailsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../travel.service */ "./src/app/travel/travel.service.ts");




class TravelDetailsResolver {
    constructor(travelService) {
        this.travelService = travelService;
    }
    resolve() {
        const dataSource = this.travelService.getDetailsDataSource();
        const dataStore = this.travelService.getDetailsStore(dataSource);
        return dataStore;
    }
}
TravelDetailsResolver.ɵfac = function TravelDetailsResolver_Factory(t) { return new (t || TravelDetailsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"])); };
TravelDetailsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TravelDetailsResolver, factory: TravelDetailsResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravelDetailsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"] }]; }, null); })();


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
//# sourceMappingURL=travel-details-travel-details-module-es2015.js.map