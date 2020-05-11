(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-components-custom-components-module"],{

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

/***/ "./src/app/showcase/custom-components/custom-components.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.module.ts ***!
  \************************************************************************/
/*! exports provided: CustomComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsModule", function() { return CustomComponentsModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _custom_components_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-components.page */ "./src/app/showcase/custom-components/custom-components.page.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../showcase.service */ "./src/app/showcase/showcase.service.ts");











class CustomComponentsModule {
}
CustomComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomComponentsModule });
CustomComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CustomComponentsModule_Factory(t) { return new (t || CustomComponentsModule)(); }, providers: [
        _showcase_service__WEBPACK_IMPORTED_MODULE_8__["ShowcaseService"]
    ], imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '',
                    component: _custom_components_page__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsPage"]
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomComponentsModule, { declarations: [_custom_components_page__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CustomComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _custom_components_page__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsPage"]
                        }
                    ])
                ],
                declarations: [
                    _custom_components_page__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsPage"]
                ],
                providers: [
                    _showcase_service__WEBPACK_IMPORTED_MODULE_8__["ShowcaseService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/showcase/custom-components/custom-components.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.page.ts ***!
  \**********************************************************************/
/*! exports provided: CustomComponentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsPage", function() { return CustomComponentsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/checkbox-wrapper/checkbox-wrapper.component */ "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts");
/* harmony import */ var _components_show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/show-hide-password/show-hide-password.component */ "./src/app/components/show-hide-password/show-hide-password.component.ts");
/* harmony import */ var _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/countdown-timer/countdown-timer.component */ "./src/app/components/countdown-timer/countdown-timer.component.ts");







const _c0 = function () { return { from: "day", to: "second" }; };
const _c1 = function () { return { from: "day", to: "minute" }; };
const _c2 = function () { return { from: "hour", to: "second" }; };
const _c3 = function () { return { from: "hour", to: "minute" }; };
const _c4 = function () { return { from: "minute", to: "second" }; };
const _c5 = function () { return { from: "day", to: "day" }; };
const _c6 = function () { return { from: "hour", to: "hour" }; };
const _c7 = function () { return { from: "minute", to: "minute" }; };
const _c8 = function () { return { from: "second", to: "second" }; };
class CustomComponentsPage {
    // Instead of hardcoded one
    // countdownDate = '12/01/2018';
    constructor() {
        // Relative date (better to showcase UI micro-interactions)
        this.countdownDate = dayjs__WEBPACK_IMPORTED_MODULE_1__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss');
    }
}
CustomComponentsPage.ɵfac = function CustomComponentsPage_Factory(t) { return new (t || CustomComponentsPage)(); };
CustomComponentsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomComponentsPage, selectors: [["app-showcase-custom-components"]], decls: 184, vars: 54, consts: [["color", "primary"], ["slot", "start"], [1, "showcase-content"], ["sticky", "true"], [1, "showcase-section"], [1, "custom-checkbox"], ["checked", "true"], ["type", "password", "placeholder", "Try setting a password", "value", "It's a secret!"], [3, "end", "units"], ["fill", "countdown", 2, "background-color", "transparent", "--countdown-padding", "10px", "--countdown-fill-border", "none", "--countdown-fill-border-radius", "10px", "--countdown-fill-background", "#FFFFFF", "--countdown-fill-shadow", "0px 0px 5px 0px rgba(0,0,0, 0.2)", 3, "end", "units"], ["fill", "countdown", 2, "--countdown-fill-background", "#000000", "--countdown-padding", "10px", "--countdown-value-color", "#FFFFFF", "--countdown-unit-color", "#F2F2F2", 3, "end", "units"], [2, "--countdown-time-flex-direction", "row-reverse", 3, "end", "units"], [2, "--countdown-time-flex-direction", "row", 3, "end", "units"], [2, "--countdown-time-flex-direction", "column", 3, "end", "units"], [2, "--countdown-time-flex-direction", "column-reverse", 3, "end", "units"], ["fill", "time", 2, "background-color", "transparent", "--countdown-padding", "10px", "--countdown-time-margin", "0px 10px", "--countdown-time-padding", "10px 0px", "--countdown-fill-border", "none", "--countdown-fill-border-radius", "10px", "--countdown-fill-background", "#FFFFFF", "--countdown-fill-shadow", "0px 0px 5px 0px rgba(0,0,0, 0.2)", 3, "end", "units"], ["fill", "inner-time", 2, "background-color", "transparent", "--countdown-padding", "10px", "--countdown-inner-time-margin", "5px", "--countdown-inner-time-padding", "10px", "--countdown-fill-border", "none", "--countdown-fill-border-radius", "10px", "--countdown-fill-background", "#FFFFFF", "--countdown-fill-shadow", "0px 0px 5px 0px rgba(0,0,0, 0.2)", 3, "end", "units"]], template: function CustomComponentsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Custom Components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-item-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Checkbox Wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " This is a super straightforward component whose purpose is to wrap an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "<ion-checkbox>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " element to enable accessing the checkbox state from its parents. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "<app-checkbox-wrapper class=\"custom-checkbox\">\n  <ion-checkbox checked=true></ion-checkbox>\n  <ion-label>Sample Checkbox</ion-label>\n</app-checkbox-wrapper>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "app-checkbox-wrapper.custom-checkbox {\n  background: #CCC;\n  color: #000;\n\n  &.checkbox-checked {\n    background: #00AFFF;\n    color: #FFF;\n  }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-checkbox-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ion-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sample Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-item-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Show/Hide Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " By wrapping an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "<ion-input>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " element with this component, you can enhance the UX and add a show/hide password functionality. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "<app-show-hide-password>\n  <ion-input type=\"password\" placeholder=\"Try setting a password\" value=\"It's a secret!\"></ion-input>\n</app-show-hide-password>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "app-show-hide-password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ion-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-item-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Countdown Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " This components shows the remaining time (in days, hours, minutes or seconds) to a given date. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " A few examples on how to use this component: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "From days to seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "[units]=\"{from: 'day', to: 'second'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "From days to minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "[units]=\"{from: 'day', to: 'minute'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "From hours to seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "[units]=\"{from: 'hour', to: 'second'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "From hours to minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "[units]=\"{from: 'hour', to: 'minute'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "From minutes to seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "[units]=\"{from: 'minute', to: 'second'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Just days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "[units]=\"{from: 'day', to: 'day'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Just hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "[units]=\"{from: 'hour', to: 'hour'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Just minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "[units]=\"{from: 'minute', to: 'minute'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Just seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "[units]=\"{from: 'second', to: 'second'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " You can change different properties to adjust the look and feel of the component. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "app-countdown-timer {\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: 10px;\n  --countdown-fill-background: #FFFFFF;\n  --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "app-countdown-timer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "app-countdown-timer {\n  --countdown-fill-background: #000000;\n  --countdown-value-color: #FFFFFF;\n  --countdown-unit-color: #F2F2F2;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "app-countdown-timer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Margins & Paddings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "app-countdown-timer {\n  --countdown-margin: 0px;\n  --countdown-padding: 0px;\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: 2px;\n  --countdown-inner-time-padding: 0px;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Time unit positioning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Time units to the right (default) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "app-countdown-timer {\n  --countdown-time-flex-direction: row-reverse;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "app-countdown-timer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Time units to the left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "app-countdown-timer {\n  --countdown-time-flex-direction: row;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "app-countdown-timer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Time units above ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "app-countdown-timer {\n  --countdown-time-flex-direction: column;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "app-countdown-timer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Time units below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "app-countdown-timer {\n  --countdown-time-flex-direction: column-reverse;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "app-countdown-timer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " This component can be configured with different fill modes (by default, no fill will be applied). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Fill: Entire Countdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "fill=\"countdown\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "app-countdown-timer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Fill: Time wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "fill=\"time\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "app-countdown-timer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Fill: Inner Time Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "fill=\"inner-time\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "app-countdown-timer", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](51, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](52, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](53, _c2));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _components_checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxWrapperComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"], _components_show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_4__["ShowHidePasswordComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_5__["CountdownTimerComponent"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n.showcase-content[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%] {\n  background: #CCC;\n  color: #000;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n}\n.showcase-content[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  -webkit-margin-start: 10px;\n          margin-inline-start: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   .custom-checkbox.checkbox-checked[_ngcontent-%COMP%] {\n  background: #00AFFF;\n  color: #FFF;\n}\n.showcase-content[_ngcontent-%COMP%]   app-countdown-timer[_ngcontent-%COMP%] {\n  --countdown-value-color: var(--ion-color-darkest);\n  --countdown-unit-color: var(--ion-color-darkest);\n  padding: 20px;\n  margin-bottom: 40px;\n  background-color: #FFF;\n}\n.showcase-content[_ngcontent-%COMP%]   app-show-hide-password[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  padding: 0px 15px;\n}\n.showcase-content[_ngcontent-%COMP%]   app-show-hide-password[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9jdXN0b20tY29tcG9uZW50cy9jdXN0b20tY29tcG9uZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL2N1c3RvbS1jb21wb25lbnRzL2N1c3RvbS1jb21wb25lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0UsdUJBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0hKO0FES0k7RUFDRSwwQkFBQTtVQUFBLHlCQUFBO0FDSE47QURNSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0pOO0FEUUU7RUFDRSxpREFBQTtFQUNBLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNOSjtBRFNFO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEU0k7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9jdXN0b20tY29tcG9uZW50cy9jdXN0b20tY29tcG9uZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgJi5jaGVja2JveC1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMEFGRkY7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG4gIH1cblxuICBhcHAtY291bnRkb3duLXRpbWVyIHtcbiAgICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAgIC0tY291bnRkb3duLXVuaXQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgfVxuXG4gIGFwcC1zaG93LWhpZGUtcGFzc3dvcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG5cbiAgICBpb24taW5wdXQge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgfVxuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnNob3djYXNlLWNvbnRlbnQgLmN1c3RvbS1jaGVja2JveCB7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNob3djYXNlLWNvbnRlbnQgLmN1c3RvbS1jaGVja2JveCBpb24tbGFiZWwge1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLmN1c3RvbS1jaGVja2JveC5jaGVja2JveC1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzAwQUZGRjtcbiAgY29sb3I6ICNGRkY7XG59XG4uc2hvd2Nhc2UtY29udGVudCBhcHAtY291bnRkb3duLXRpbWVyIHtcbiAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgLS1jb3VudGRvd24tdW5pdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxuLnNob3djYXNlLWNvbnRlbnQgYXBwLXNob3ctaGlkZS1wYXNzd29yZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgYXBwLXNob3ctaGlkZS1wYXNzd29yZCBpb24taW5wdXQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomComponentsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-showcase-custom-components',
                templateUrl: './custom-components.page.html',
                styleUrls: ['./custom-components.page.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=custom-components-custom-components-module-es2015.js.map