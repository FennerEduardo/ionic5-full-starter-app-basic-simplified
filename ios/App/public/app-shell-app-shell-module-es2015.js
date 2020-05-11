(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-shell-app-shell-module"],{

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

/***/ "./src/app/showcase/app-shell/app-shell.module.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.module.ts ***!
  \********************************************************/
/*! exports provided: AppShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellModule", function() { return AppShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_shell_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-shell.page */ "./src/app/showcase/app-shell/app-shell.page.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _aspect_ratio_aspect_ratio_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aspect-ratio/aspect-ratio.page */ "./src/app/showcase/app-shell/aspect-ratio/aspect-ratio.page.ts");
/* harmony import */ var _image_shell_image_shell_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-shell/image-shell.page */ "./src/app/showcase/app-shell/image-shell/image-shell.page.ts");
/* harmony import */ var _text_shell_text_shell_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./text-shell/text-shell.page */ "./src/app/showcase/app-shell/text-shell/text-shell.page.ts");
/* harmony import */ var _simple_data_binding_simple_data_binding_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./simple-data-binding/simple-data-binding.page */ "./src/app/showcase/app-shell/simple-data-binding/simple-data-binding.page.ts");
/* harmony import */ var _data_store_basic_data_store_basic_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data-store-basic/data-store-basic.page */ "./src/app/showcase/app-shell/data-store-basic/data-store-basic.page.ts");
/* harmony import */ var _data_store_list_data_store_list_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data-store-list/data-store-list.page */ "./src/app/showcase/app-shell/data-store-list/data-store-list.page.ts");
/* harmony import */ var _data_store_subset_data_store_subset_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data-store-subset/data-store-subset.page */ "./src/app/showcase/app-shell/data-store-subset/data-store-subset.page.ts");
/* harmony import */ var _data_store_combined_data_store_combined_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data-store-combined/data-store-combined.page */ "./src/app/showcase/app-shell/data-store-combined/data-store-combined.page.ts");
/* harmony import */ var _data_store_multiple_data_store_multiple_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data-store-multiple/data-store-multiple.page */ "./src/app/showcase/app-shell/data-store-multiple/data-store-multiple.page.ts");
/* harmony import */ var _data_store_pagination_data_store_pagination_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data-store-pagination/data-store-pagination.page */ "./src/app/showcase/app-shell/data-store-pagination/data-store-pagination.page.ts");
/* harmony import */ var _data_store_stacked_data_store_stacked_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data-store-stacked/data-store-stacked.page */ "./src/app/showcase/app-shell/data-store-stacked/data-store-stacked.page.ts");
/* harmony import */ var _data_store_dependant_data_store_dependant_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./data-store-dependant/data-store-dependant.page */ "./src/app/showcase/app-shell/data-store-dependant/data-store-dependant.page.ts");























const routes = [
    {
        path: '',
        component: _app_shell_page__WEBPACK_IMPORTED_MODULE_7__["AppShellPage"]
    },
    {
        path: 'aspect-ratio',
        component: _aspect_ratio_aspect_ratio_page__WEBPACK_IMPORTED_MODULE_9__["AspectRatioPage"]
    },
    {
        path: 'image-shell',
        component: _image_shell_image_shell_page__WEBPACK_IMPORTED_MODULE_10__["ImageShellPage"]
    },
    {
        path: 'text-shell',
        component: _text_shell_text_shell_page__WEBPACK_IMPORTED_MODULE_11__["TextShellPage"]
    },
    {
        path: 'simple-data-binding',
        component: _simple_data_binding_simple_data_binding_page__WEBPACK_IMPORTED_MODULE_12__["SimpleDataBindingPage"]
    },
    {
        path: 'data-store-basic',
        component: _data_store_basic_data_store_basic_page__WEBPACK_IMPORTED_MODULE_13__["DataStoreBasicPage"]
    },
    {
        path: 'data-store-list',
        component: _data_store_list_data_store_list_page__WEBPACK_IMPORTED_MODULE_14__["DataStoreListPage"]
    },
    {
        path: 'data-store-subset',
        component: _data_store_subset_data_store_subset_page__WEBPACK_IMPORTED_MODULE_15__["DataStoreSubsetPage"]
    },
    {
        path: 'data-store-combined',
        component: _data_store_combined_data_store_combined_page__WEBPACK_IMPORTED_MODULE_16__["DataStoreCombinedPage"]
    },
    {
        path: 'data-store-multiple',
        component: _data_store_multiple_data_store_multiple_page__WEBPACK_IMPORTED_MODULE_17__["DataStoreMultiplePage"]
    },
    {
        path: 'data-store-pagination',
        component: _data_store_pagination_data_store_pagination_page__WEBPACK_IMPORTED_MODULE_18__["DataStorePaginationPage"]
    },
    {
        path: 'data-store-stacked',
        component: _data_store_stacked_data_store_stacked_page__WEBPACK_IMPORTED_MODULE_19__["DataStoreStackedPage"]
    },
    {
        path: 'data-store-dependant',
        component: _data_store_dependant_data_store_dependant_page__WEBPACK_IMPORTED_MODULE_20__["DataStoreDependantPage"]
    }
];
class AppShellModule {
}
AppShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppShellModule });
AppShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppShellModule_Factory(t) { return new (t || AppShellModule)(); }, providers: [
        _showcase_service__WEBPACK_IMPORTED_MODULE_8__["ShowcaseService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppShellModule, { declarations: [_app_shell_page__WEBPACK_IMPORTED_MODULE_7__["AppShellPage"],
        _aspect_ratio_aspect_ratio_page__WEBPACK_IMPORTED_MODULE_9__["AspectRatioPage"],
        _image_shell_image_shell_page__WEBPACK_IMPORTED_MODULE_10__["ImageShellPage"],
        _text_shell_text_shell_page__WEBPACK_IMPORTED_MODULE_11__["TextShellPage"],
        _simple_data_binding_simple_data_binding_page__WEBPACK_IMPORTED_MODULE_12__["SimpleDataBindingPage"],
        _data_store_basic_data_store_basic_page__WEBPACK_IMPORTED_MODULE_13__["DataStoreBasicPage"],
        _data_store_list_data_store_list_page__WEBPACK_IMPORTED_MODULE_14__["DataStoreListPage"],
        _data_store_subset_data_store_subset_page__WEBPACK_IMPORTED_MODULE_15__["DataStoreSubsetPage"],
        _data_store_combined_data_store_combined_page__WEBPACK_IMPORTED_MODULE_16__["DataStoreCombinedPage"],
        _data_store_multiple_data_store_multiple_page__WEBPACK_IMPORTED_MODULE_17__["DataStoreMultiplePage"],
        _data_store_pagination_data_store_pagination_page__WEBPACK_IMPORTED_MODULE_18__["DataStorePaginationPage"],
        _data_store_stacked_data_store_stacked_page__WEBPACK_IMPORTED_MODULE_19__["DataStoreStackedPage"],
        _data_store_dependant_data_store_dependant_page__WEBPACK_IMPORTED_MODULE_20__["DataStoreDependantPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppShellModule, [{
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
                    _app_shell_page__WEBPACK_IMPORTED_MODULE_7__["AppShellPage"],
                    _aspect_ratio_aspect_ratio_page__WEBPACK_IMPORTED_MODULE_9__["AspectRatioPage"],
                    _image_shell_image_shell_page__WEBPACK_IMPORTED_MODULE_10__["ImageShellPage"],
                    _text_shell_text_shell_page__WEBPACK_IMPORTED_MODULE_11__["TextShellPage"],
                    _simple_data_binding_simple_data_binding_page__WEBPACK_IMPORTED_MODULE_12__["SimpleDataBindingPage"],
                    _data_store_basic_data_store_basic_page__WEBPACK_IMPORTED_MODULE_13__["DataStoreBasicPage"],
                    _data_store_list_data_store_list_page__WEBPACK_IMPORTED_MODULE_14__["DataStoreListPage"],
                    _data_store_subset_data_store_subset_page__WEBPACK_IMPORTED_MODULE_15__["DataStoreSubsetPage"],
                    _data_store_combined_data_store_combined_page__WEBPACK_IMPORTED_MODULE_16__["DataStoreCombinedPage"],
                    _data_store_multiple_data_store_multiple_page__WEBPACK_IMPORTED_MODULE_17__["DataStoreMultiplePage"],
                    _data_store_pagination_data_store_pagination_page__WEBPACK_IMPORTED_MODULE_18__["DataStorePaginationPage"],
                    _data_store_stacked_data_store_stacked_page__WEBPACK_IMPORTED_MODULE_19__["DataStoreStackedPage"],
                    _data_store_dependant_data_store_dependant_page__WEBPACK_IMPORTED_MODULE_20__["DataStoreDependantPage"]
                ],
                providers: [
                    _showcase_service__WEBPACK_IMPORTED_MODULE_8__["ShowcaseService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/showcase/app-shell/app-shell.page.ts":
/*!******************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.page.ts ***!
  \******************************************************/
/*! exports provided: AppShellPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellPage", function() { return AppShellPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");







const _c0 = function () { return ["/showcase/app-shell/aspect-ratio"]; };
const _c1 = function () { return ["/showcase/app-shell/image-shell"]; };
const _c2 = function () { return ["/showcase/app-shell/text-shell"]; };
const _c3 = function () { return { w: 2, h: 1 }; };
const _c4 = function () { return { w: 1, h: 1 }; };
const _c5 = function () { return ["/showcase/app-shell/simple-data-binding"]; };
const _c6 = function () { return ["/showcase/app-shell/data-store-basic"]; };
const _c7 = function () { return ["/showcase/app-shell/data-store-list"]; };
const _c8 = function () { return ["/showcase/app-shell/data-store-subset"]; };
const _c9 = function () { return ["/showcase/app-shell/data-store-combined"]; };
const _c10 = function () { return ["/showcase/app-shell/data-store-multiple"]; };
const _c11 = function () { return ["/showcase/app-shell/data-store-dependant"]; };
const _c12 = function () { return ["/showcase/app-shell/data-store-pagination"]; };
const _c13 = function () { return ["/showcase/app-shell/data-store-stacked"]; };
class AppShellPage {
    constructor() { }
    ngOnInit() {
    }
}
AppShellPage.ɵfac = function AppShellPage_Factory(t) { return new (t || AppShellPage)(); };
AppShellPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppShellPage, selectors: [["app-showcase-shell"]], decls: 122, vars: 30, consts: [["color", "primary"], ["slot", "start"], [1, "showcase-content"], [1, "showcase-section", 2, "margin-bottom", "20px"], ["sticky", "true"], ["detail", "true", 3, "routerLink"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "10px", "margin", "20px"], ["size", "12"], ["animation", "spinner", 1, "add-overlay", 3, "display", "src"], [3, "ratio"], [2, "margin", "10px", "text-align", "center"], ["size", "4"], ["animation", "spinner", 3, "src", "alt"], ["size", "8"], [2, "margin-top", "0px"], [3, "data"], ["lines", "3", 3, "data"], ["href", "https://dev.to/sagar/reactive-programming-in-javascript-with-rxjs-4jom", "target", "_blank"]], template: function AppShellPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " App Shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " After analyzing multiple use cases, we realized most UIs can be deconstructed into two data bindable element primitives: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " These ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Shell Elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " are the building blocks to display loading states. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-item-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Shell Elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Aspect Ratio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Image Shell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Text Shell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " You can combine the different shell elements in multiple ways to fit your needs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-row", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-image-shell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "app-aspect-ratio", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Text on top of a background-image container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-aspect-ratio", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-image-shell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ion-col", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-text-shell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-text-shell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " By following the reactive programming paradigm to handle asynchronous data streams, we can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Observables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " to manage the different states (loading / loaded) of the data binded to our shell elements. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " If you are new to reactive programming in Javascript, I strongly recommend you to read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "this guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ion-item-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Simple Data Binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Data Binding using plain Observables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " You can go a step further and use our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " class which provides extra functionalities to plain Observables. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " The main responsability of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " is to store the data stream in a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " property and append shell values to the Observable data sources through the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "AppendShell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " static method. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ion-item-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Data Binding with DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Filtered Data Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Combined Data Sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Multiple Data Stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Dependant Data Sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Stacked Shells");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " We double down on adding as many examples as possible on how to use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "App Shell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, ". However, if you have a use case that doesn't fall under the examples list, please let us know so we can keep improving the product. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", "Sample Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c13));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__["AspectRatioComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__["TextShellComponent"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppShellPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-showcase-shell',
                templateUrl: './app-shell.page.html',
                styleUrls: ['./app-shell.page.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/showcase/app-shell/aspect-ratio/aspect-ratio.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/app-shell/aspect-ratio/aspect-ratio.page.ts ***!
  \**********************************************************************/
/*! exports provided: AspectRatioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspectRatioPage", function() { return AspectRatioPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");




const _c0 = function () { return { w: 2, h: 1 }; };
class AspectRatioPage {
    constructor() { }
    ngOnInit() {
    }
}
AspectRatioPage.ɵfac = function AspectRatioPage_Factory(t) { return new (t || AspectRatioPage)(); };
AspectRatioPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AspectRatioPage, selectors: [["app-aspect-ratio-page"]], decls: 41, vars: 2, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], ["href", "http://stackoverflow.com/a/10441480/1116959", "target", "_blank"], [2, "width", "80%", "margin", "0px auto"], [2, "background-color", "#00AFFF", 3, "ratio"], [2, "margin", "10px", "display", "block"]], template: function AspectRatioPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Aspect Ratio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "<app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " is a simple component that ensures a block will maintain the specified aspect ratio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " It uses an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "old CSS technique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " to adjust the height of the element based on its width (using padding-bottom). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " This is a very handy component to prevent content from jumping around while the page is loading. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "<app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " component must be surrounded by a container element with a defined width, as this component will fill the parent width. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "<div style=\"width:80%; margin: 0px auto;\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n  <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n    <span>This container will always have a 2:1 aspect ratio</span>\n  </app-aspect-ratio>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "</div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "app-aspect-ratio", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "This container will always have a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " aspect ratio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__["AspectRatioComponent"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FzcGVjdC1yYXRpby9hc3BlY3QtcmF0aW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FzcGVjdC1yYXRpby9hc3BlY3QtcmF0aW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IHByZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGNvZGUge1xuICBjb2xvcjogI0Y5MjY3MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AspectRatioPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aspect-ratio-page',
                templateUrl: './aspect-ratio.page.html',
                styleUrls: ['./aspect-ratio.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-basic/data-store-basic.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-basic/data-store-basic.page.ts ***!
  \******************************************************************************/
/*! exports provided: DataStoreBasicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreBasicPage", function() { return DataStoreBasicPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");











const _c0 = function () { return { w: 2, h: 1 }; };
const _c1 = function () { return { w: 1, h: 1 }; };
class DataStoreBasicPage {
    constructor(showcaseService) {
        this.showcaseService = showcaseService;
        this.dataStoreButtonDisabled = true;
    }
    ngOnInit() {
        this.showcaseDataStore();
    }
    showcaseDataStore() {
        // Prevent rage clicks on the 'Fetch more Data' button
        this.dataStoreButtonDisabled = true;
        const dataSource = this.showcaseService.getSimpleDataSource();
        // Initialize the model specifying that it is a shell model
        const shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseShellModel"]();
        const dataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        dataStore.load(dataSource);
        dataStore.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(2), // DataStore will emit a mock object and the real data fetched from the source. Emit those two values and then complete.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this.dataStoreButtonDisabled = false)).subscribe(data => {
            this.dataStoreData = data;
        });
    }
}
DataStoreBasicPage.ɵfac = function DataStoreBasicPage_Factory(t) { return new (t || DataStoreBasicPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_3__["ShowcaseService"])); };
DataStoreBasicPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataStoreBasicPage, selectors: [["app-data-store-basic"]], decls: 31, vars: 12, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "10px", "margin", "20px"], ["size", "12"], ["animation", "spinner", 1, "add-overlay", 3, "display", "src", "alt"], [3, "ratio"], [2, "margin", "10px", "text-align", "center", "color", "#FFF"], ["size", "4"], ["animation", "spinner", 3, "src", "alt"], ["size", "8"], [2, "margin-top", "0px"], [3, "data"], ["lines", "3", 3, "data"], [3, "disabled", "click"]], template: function DataStoreBasicPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " DataStore - Basic example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " utility you can keep track and append shell values to the data stream. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " This drastically reduces the boilerplate needed to add app shell loading interactions to your app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-image-shell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-aspect-ratio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Heading on top of a cover image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-aspect-ratio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-image-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-text-shell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-text-shell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStoreBasicPage_Template_ion_button_click_29_listener() { return ctx.showcaseDataStore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Fetch more Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", ctx.dataStoreData == null ? null : ctx.dataStoreData.cover)("alt", "Sample Image Cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.dataStoreData == null ? null : ctx.dataStoreData.image)("alt", "Sample Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.dataStoreData == null ? null : ctx.dataStoreData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.dataStoreData == null ? null : ctx.dataStoreData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.dataStoreButtonDisabled);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__["AspectRatioComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtYmFzaWMvZGF0YS1zdG9yZS1iYXNpYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1iYXNpYy9kYXRhLXN0b3JlLWJhc2ljLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStoreBasicPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-store-basic',
                templateUrl: './data-store-basic.page.html',
                styleUrls: ['./data-store-basic.page.scss'],
            }]
    }], function () { return [{ type: _showcase_service__WEBPACK_IMPORTED_MODULE_3__["ShowcaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-combined/data-store-combined.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-combined/data-store-combined.page.ts ***!
  \************************************************************************************/
/*! exports provided: DataStoreCombinedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreCombinedPage", function() { return DataStoreCombinedPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");









function DataStoreCombinedPage_ion_item_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-shell", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-text-shell", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Owner:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-text-shell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-text-shell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-text-shell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", task_r1 == null ? null : task_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", task_r1.completed ? "Completed" : "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", task_r1.user == null ? null : task_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", (task_r1 == null ? null : task_r1.user) ? "@".concat("", task_r1.user.username) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", task_r1.user == null ? null : task_r1.user.email);
} }
class DataStoreCombinedPage {
    constructor(showcaseService) {
        this.showcaseService = showcaseService;
    }
    ngOnInit() {
        // We created ShowcaseCombinedTaskUserModel to combine the task with his user data.
        // They are 2 different collections (or data tables in the DB) and we need to combine them into 1 dataSource.
        const dataSource = this.showcaseService.getCombinedTasksUserDataSource();
        const shellModel = [
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseCombinedTaskUserModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseCombinedTaskUserModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseCombinedTaskUserModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseCombinedTaskUserModel"]()
        ];
        this.tasksCombinedDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
        this.tasksCombinedDataStore.load(dataSource);
        this.tasksCombinedDataStore.state.subscribe(data => {
            this.tasks = data;
        });
    }
}
DataStoreCombinedPage.ɵfac = function DataStoreCombinedPage_Factory(t) { return new (t || DataStoreCombinedPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"])); };
DataStoreCombinedPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataStoreCombinedPage, selectors: [["app-data-store-combined"]], decls: 44, vars: 5, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], ["href", "https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511", "target", "_blank"], [1, "tasks"], ["lines", "full", 2, "--background", "transparent"], ["class", "task", 4, "ngFor", "ngForOf"], [1, "task"], ["animation", "bouncing", 2, "--text-shell-line-height", "16px", 3, "data"], [2, "display", "flex"], [2, "margin-right", "10px"], [2, "min-width", "100px"], ["animation", "bouncing", 2, "--text-shell-line-height", "14px", 3, "data"], ["animation", "bouncing", 3, "data"]], template: function DataStoreCombinedPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " DataStore - Combined Data Sources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Some modern ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "no-sql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " solutions like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Firebase Firestore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " do not support multi-collection queries (left join, inner join). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " That's why you may end up using some ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "RxJs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " operators to manage and combine queries independently. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " These techniques are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "intermediate / advanced");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " and require some patience to fully grasp some reactive programming concepts before you can master RxJs operators. I strongly recommend you to read this guide on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "learning to combine RxJs sequences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Below you can see how we combine two data sources (one depending on the other) into one Observable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Let's do an example of Tasks and their Owners. Imagine a case where we need to have the list of tasks and the details of the 'owner' user combined in the same data source. Let's see how to do it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ion-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DataStoreCombinedPage_ion_item_42_Template, 19, 5, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](43, 1, ctx.tasks, 0, 40));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n.tasks[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtY29tYmluZWQvZGF0YS1zdG9yZS1jb21iaW5lZC5wYWdlLnNjc3MiLCIvVXNlcnMvZGF5YW5hL3dvcmsvaW9uaWMvdGVtcGxhdGVzL2lvbjRmdWxscHdhL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtY29tYmluZWQvZGF0YS1zdG9yZS1jb21iaW5lZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRko7QUNuQkE7RUFDRSx5QkFBQTtFQUNBLHdpQkFBQTtFQUNBLGFBQUE7QURzQkYiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1jb21iaW5lZC9kYXRhLXN0b3JlLWNvbWJpbmVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50YXNrcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAyMHB4O1xufSIsIkBpbXBvcnQgXCIuLi9hcHAtc2hlbGwucGFnZVwiO1xuXG4udGFza3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStoreCombinedPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-store-combined',
                templateUrl: './data-store-combined.page.html',
                styleUrls: ['./data-store-combined.page.scss'],
            }]
    }], function () { return [{ type: _showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-dependant/data-store-dependant.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-dependant/data-store-dependant.page.ts ***!
  \**************************************************************************************/
/*! exports provided: DataStoreDependantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreDependantPage", function() { return DataStoreDependantPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function DataStoreDependantPage_ion_item_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-text-shell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", comment_r1 == null ? null : comment_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", comment_r1 == null ? null : comment_r1.body);
} }
const _c0 = function () { return ["/showcase/app-shell/data-store-multiple"]; };
const _c1 = function () { return ["/showcase/app-shell/data-store-combined"]; };
class DataStoreDependantPage {
    constructor(showcaseService) {
        this.showcaseService = showcaseService;
    }
    ngOnInit() {
        const postDataSource = this.showcaseService.getDependantDataSourcePost();
        const postShellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_1__["ShowcasePostModel"]();
        this.postDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](postShellModel);
        this.postDataStore.load(postDataSource);
        this.postDataStore.state.subscribe(data => {
            this.post = data;
        });
        const commentsShellModel = [
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_1__["ShowcaseCommentModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_1__["ShowcaseCommentModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_1__["ShowcaseCommentModel"]()
        ];
        const commentsDataSource = this.showcaseService.getDependantDataSourcePostComments(this.postDataStore.state);
        this.commentsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](commentsShellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.commentsDataStore.load(commentsDataSource);
        this.commentsDataStore.state.subscribe(data => {
            this.comments = data;
        });
    }
}
DataStoreDependantPage.ɵfac = function DataStoreDependantPage_Factory(t) { return new (t || DataStoreDependantPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"])); };
DataStoreDependantPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataStoreDependantPage, selectors: [["app-data-store-dependant"]], decls: 35, vars: 13, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], [3, "routerLink"], [1, "post"], ["animation", "bouncing", 2, "--text-shell-line-color", "#FFF", 3, "data"], ["animation", "bouncing", "lines", "3", 2, "--text-shell-line-color", "#fffdfd", 3, "data"], ["lines", "full", 2, "--background", "transparent"], [4, "ngFor", "ngForOf"], ["animation", "bouncing", 2, "--text-shell-line-height", "16px", 3, "data"], ["animation", "bouncing", 3, "data"]], template: function DataStoreDependantPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " DataStore - Dependant Data Sources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This example kinda mixes the two previous examples (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "multiple data stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "one depending on the other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " The uses cases in which to use this approach would be if you have different data sources that depend on each other, but you want the different sections of the view to 're-load' independently one from the other. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " This contrasts the use case of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Combined Data Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " where you transform multiple data sources into one, causing the hole view to be 're-loaded' as it's binded to just one combined Observable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " A good example can be a post and its comments. The comments depend on the post but you want them to 're-load' independently from the post. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-text-shell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-text-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DataStoreDependantPage_ion_item_33_Template, 6, 2, "ion-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.post == null ? null : ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.post == null ? null : ctx.post.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](34, 6, ctx.comments, 0, 5));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n.post[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtZGVwZW5kYW50L2RhdGEtc3RvcmUtZGVwZW5kYW50LnBhZ2Uuc2NzcyIsIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1kZXBlbmRhbnQvZGF0YS1zdG9yZS1kZXBlbmRhbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FDbkJBO0VBQ0UseUJBQUE7RUFDQSx3aUJBQUE7RUFDQSxhQUFBO0FEc0JGIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtZGVwZW5kYW50L2RhdGEtc3RvcmUtZGVwZW5kYW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wb3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMzgnJTNFJTNDcGF0aCBkPSdNMCAzOC41OWwyLjgzLTIuODMgMS40MSAxLjQxTDEuNDEgNDBIMHYtMS40MXpNMCAxLjRsMi44MyAyLjgzIDEuNDEtMS40MUwxLjQxIDBIMHYxLjQxek0zOC41OSA0MGwtMi44My0yLjgzIDEuNDEtMS40MUw0MCAzOC41OVY0MGgtMS40MXpNNDAgMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwzOC41OSAwSDQwdjEuNDF6TTIwIDE4LjZsMi44My0yLjgzIDEuNDEgMS40MUwyMS40MSAyMGwyLjgzIDIuODMtMS40MSAxLjQxTDIwIDIxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDE4LjU5IDIwbC0yLjgzLTIuODMgMS40MS0xLjQxTDIwIDE4LjU5eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIHBhZGRpbmc6IDIwcHg7XG59IiwiQGltcG9ydCBcIi4uL2FwcC1zaGVsbC5wYWdlXCI7XG5cbi5wb3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMzgnJTNFJTNDcGF0aCBkPSdNMCAzOC41OWwyLjgzLTIuODMgMS40MSAxLjQxTDEuNDEgNDBIMHYtMS40MXpNMCAxLjRsMi44MyAyLjgzIDEuNDEtMS40MUwxLjQxIDBIMHYxLjQxek0zOC41OSA0MGwtMi44My0yLjgzIDEuNDEtMS40MUw0MCAzOC41OVY0MGgtMS40MXpNNDAgMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwzOC41OSAwSDQwdjEuNDF6TTIwIDE4LjZsMi44My0yLjgzIDEuNDEgMS40MUwyMS40MSAyMGwyLjgzIDIuODMtMS40MSAxLjQxTDIwIDIxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDE4LjU5IDIwbC0yLjgzLTIuODMgMS40MS0xLjQxTDIwIDE4LjU5eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStoreDependantPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-store-dependant',
                templateUrl: './data-store-dependant.page.html',
                styleUrls: ['./data-store-dependant.page.scss'],
            }]
    }], function () { return [{ type: _showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-list/data-store-list.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-list/data-store-list.page.ts ***!
  \****************************************************************************/
/*! exports provided: DataStoreListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreListPage", function() { return DataStoreListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");











const _c0 = function () { return { w: 1, h: 1 }; };
function DataStoreListPage_ion_item_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-thumbnail", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-aspect-ratio", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-image-shell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r1 == null ? null : user_r1.avatar)("alt", "Sample Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", user_r1 == null ? null : user_r1.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", user_r1 == null ? null : user_r1.last_name);
} }
class DataStoreListPage {
    constructor(showcaseService) {
        this.showcaseService = showcaseService;
    }
    get isShell() {
        return (this.data && this.data.isShell) ? true : false;
    }
    ngOnInit() {
        const dataSource = this.showcaseService.getListDataSource();
        // Initialize the model specifying that it is a shell model
        const shellModel = [
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseShellUserModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseShellUserModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseShellUserModel"]()
        ];
        this.dataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.dataStore.load(dataSource);
        this.dataStore.state.subscribe(data => {
            this.data = data;
        });
    }
}
DataStoreListPage.ɵfac = function DataStoreListPage_Factory(t) { return new (t || DataStoreListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"])); };
DataStoreListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataStoreListPage, selectors: [["app-data-store-list"]], hostVars: 2, hostBindings: function DataStoreListPage_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
    } }, decls: 43, vars: 1, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], ["lines", "full", 1, "users-list"], [4, "ngFor", "ngForOf"], ["href", "https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types", "target", "_blank"], [3, "ratio"], ["animation", "spinner", 3, "src", "alt"], [1, "user-name"], ["animation", "bouncing", 3, "data"], [1, "user-lastname"]], template: function DataStoreListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " DataStore - List example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " When you fetch data from a remote API, sometimes you request a list of items. If that\u2019s the case you would end up having an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " of type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Observable<Array<YourModel>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " class works by assigning a shell property to any object. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "const myObj = new YourModel();\nObject.assign(myObj, {isShell: false});\n\nObject.assign([1, 2, 3], {isShell: false});\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " In Javascript, everything is an object (including Arrays). That\u2019s why you can assign properties to Arrays independently of their values. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DataStoreListPage_ion_item_26_Template, 9, 6, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " In this example we keep track of the current state of the data stream in a local ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " property. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Note how we define its type using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Typescript intersection typing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " like this ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "data: Array<YourModel> & ShellModel;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " to indicate it's an array that has a shell model appended (by the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonThumbnail"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__["ImageShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n.users-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n}\n.user-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 17px;\n  max-width: 120px;\n}\n.user-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n.user-lastname[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  max-width: 120px;\n}\n.user-lastname[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtbGlzdC9kYXRhLXN0b3JlLWxpc3QucGFnZS5zY3NzIiwiL1VzZXJzL2RheWFuYS93b3JrL2lvbmljL3RlbXBsYXRlcy9pb240ZnVsbHB3YS9zcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9kYXRhLXN0b3JlLWxpc3QvZGF0YS1zdG9yZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBQ2xCRTtFQUNFLG9CQUFBO0FEcUJKO0FDakJBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtBRG9CRjtBQ25CRTtFQUNFLGtCQUFBO0FEcUJKO0FDakJBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtBRG9CRjtBQ25CRTtFQUNFLGtCQUFBO0FEcUJKIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtbGlzdC9kYXRhLXN0b3JlLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IHByZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGNvZGUge1xuICBjb2xvcjogI0Y5MjY3MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxN3B4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4udXNlci1sYXN0bmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuLnVzZXItbGFzdG5hbWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn0iLCJAaW1wb3J0IFwiLi4vYXBwLXNoZWxsLnBhZ2VcIjtcblxuLnVzZXJzLWxpc3Qge1xuICBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIH1cbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxN3B4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLnVzZXItbGFzdG5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStoreListPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-store-list',
                templateUrl: './data-store-list.page.html',
                styleUrls: ['./data-store-list.page.scss'],
            }]
    }], function () { return [{ type: _showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"] }]; }, { isShell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-shell']
        }] }); })();


/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-multiple/data-store-multiple.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-multiple/data-store-multiple.page.ts ***!
  \************************************************************************************/
/*! exports provided: DataStoreMultiplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreMultiplePage", function() { return DataStoreMultiplePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _fashion_listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../fashion/listing/fashion-listing.model */ "./src/app/fashion/listing/fashion-listing.model.ts");
/* harmony import */ var _travel_listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../travel/listing/travel-listing.model */ "./src/app/travel/listing/travel-listing.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");













const _c0 = function () { return { w: 1, h: 1 }; };
function DataStoreMultiplePage_ion_item_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-thumbnail", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-aspect-ratio", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-image-shell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-text-shell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-text-shell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2 == null ? null : item_r2.image)("alt", "Sample Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2 == null ? null : item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2 == null ? null : item_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2 == null ? null : item_r2.address);
} }
function DataStoreMultiplePage_ion_item_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-thumbnail", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-aspect-ratio", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-image-shell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3 == null ? null : item_r3.image)("alt", "Sample Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r3 == null ? null : item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", (item_r3 == null ? null : item_r3.salePrice) ? "$".concat("", item_r3.salePrice) : null);
} }
const _c1 = function () { return ["/showcase/app-shell/data-store-combined"]; };
class DataStoreMultiplePage {
    constructor(showcaseService) {
        this.showcaseService = showcaseService;
    }
    ngOnInit() {
        const dataSourceA = this.showcaseService.getMultipleDataSourceA();
        const dataSourceB = this.showcaseService.getMultipleDataSourceB();
        const shellModelA = new _travel_listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_4__["TravelListingModel"]();
        this.dataStoreA = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModelA);
        this.dataStoreA.load(dataSourceA);
        this.dataStoreA.state.subscribe(data => {
            this.dataA = data;
        });
        const shellModelB = new _fashion_listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__["FashionListingModel"]();
        this.dataStoreB = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModelB);
        this.dataStoreB.load(dataSourceB);
        this.dataStoreB.state.subscribe(data => {
            this.dataB = data;
        });
    }
}
DataStoreMultiplePage.ɵfac = function DataStoreMultiplePage_Factory(t) { return new (t || DataStoreMultiplePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"])); };
DataStoreMultiplePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataStoreMultiplePage, selectors: [["app-data-store-multiple"]], decls: 33, vars: 12, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], [3, "routerLink"], ["lines", "full"], [4, "ngFor", "ngForOf"], [3, "ratio"], ["animation", "spinner", 3, "src", "alt"], [1, "item-name"], ["animation", "gradient", 3, "data"], ["animation", "gradient", 2, "--text-shell-line-height", "14px", 3, "data"], [1, "item-price"]], template: function DataStoreMultiplePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " DataStore - Multiple DataStores example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sometimes your view displays different types of data, each of them with a different model and data source. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " If this is your use case, then you can use multiple data stores to fetch each data stream. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " This use case is different from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Combined Data Sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " because in this case you have two data streams that will change independently one from the other updating different parts of the view without causing a full view 're-loading'. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Data Source A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "What to do nearby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DataStoreMultiplePage_ion_item_24_Template, 11, 7, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Data Source B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Shop what's trending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DataStoreMultiplePage_ion_item_31_Template, 9, 6, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](25, 3, ctx.dataA == null ? null : ctx.dataA.items, 0, 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](32, 7, ctx.dataB == null ? null : ctx.dataB.items, 0, 5));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonThumbnail"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__["ImageShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_10__["TextShellComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.item-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 16px;\n}\n.item-price[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  max-width: 80px;\n}\n.item-price[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtbXVsdGlwbGUvZGF0YS1zdG9yZS1tdWx0aXBsZS5wYWdlLnNjc3MiLCIvVXNlcnMvZGF5YW5hL3dvcmsvaW9uaWMvdGVtcGxhdGVzL2lvbjRmdWxscHdhL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtbXVsdGlwbGUvZGF0YS1zdG9yZS1tdWx0aXBsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRko7QUNuQkE7RUFDRSxnQkFBQTtBRHNCRjtBQ3BCQTtFQUNFLDhCQUFBO0FEdUJGO0FDcEJBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FEdUJGO0FDdEJFO0VBQ0Usa0JBQUE7QUR3QkoiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1tdWx0aXBsZS9kYXRhLXN0b3JlLW11bHRpcGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pdGVtLW5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaXRlbS1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogODBweDtcbn1cbi5pdGVtLXByaWNlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59IiwiQGltcG9ydCBcIi4uL2FwcC1zaGVsbC5wYWdlXCI7XG5cbi5pdGVtLW5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLml0ZW0tbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uaXRlbS1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStoreMultiplePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-store-multiple',
                templateUrl: './data-store-multiple.page.html',
                styleUrls: ['./data-store-multiple.page.scss'],
            }]
    }], function () { return [{ type: _showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-pagination/data-store-pagination.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-pagination/data-store-pagination.page.ts ***!
  \****************************************************************************************/
/*! exports provided: DataStorePaginationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorePaginationPage", function() { return DataStorePaginationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");













function DataStorePaginationPage_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "(No more pages available)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { w: 1, h: 1 }; };
function DataStorePaginationPage_ion_row_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-aspect-ratio", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-image-shell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-text-shell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r2 == null ? null : user_r2.avatar)("alt", "Sample Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", user_r2 == null ? null : user_r2.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", user_r2 == null ? null : user_r2.last_name);
} }
class DataStorePaginationPage {
    constructor(showcaseService) {
        this.showcaseService = showcaseService;
        this.loadMorePages = true;
        this.currentPage = 0;
        this.triggerNewPageLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.newPageTriggerObservable = this.triggerNewPageLoading.asObservable();
    }
    ngOnInit() {
        const dataSource = this.showcaseService.getPaginationDataSource(1);
        if (!this.remoteApiDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = [
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"]()
            ];
            this.remoteApiDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.remoteApiDataStore.load(dataSource);
        }
        const newDataObservable = this.newPageTriggerObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((pageNumber) => {
            const pageDataSource = this.showcaseService.getPaginationDataSource(pageNumber);
            const newDataShell = [
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"]()
            ];
            const dataSourceWithShellObservable = _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"].AppendShell(pageDataSource, newDataShell, 400);
            return dataSourceWithShellObservable;
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.remoteApiDataStore.state, newDataObservable)
            .subscribe(result => {
            console.log('result', result);
            // When successfully load next page, update currentPage pointer
            if (!result.isShell && result.length > 0) {
                this.currentPage++;
            }
            if (this.loadMorePages) {
                this.pagedUsers = result;
            }
            if (this.currentPage === 4) {
                this.loadMorePages = false;
            }
        });
    }
    getNextPageUsers() {
        this.triggerNewPageLoading.next(this.currentPage + 1);
    }
}
DataStorePaginationPage.ɵfac = function DataStorePaginationPage_Factory(t) { return new (t || DataStorePaginationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_4__["ShowcaseService"])); };
DataStorePaginationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataStorePaginationPage, selectors: [["app-data-store-pagination"]], decls: 30, vars: 4, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], ["style", "margin-inline-start: 10px;", 4, "ngIf"], ["style", "background-color: #FFF; padding: 10px;", 4, "ngFor", "ngForOf"], [3, "disabled", "click"], [2, "margin-inline-start", "10px"], [2, "background-color", "#FFF", "padding", "10px"], ["size", "4"], [3, "ratio"], ["animation", "spinner", 3, "src", "alt"], ["size", "8"], [2, "margin-top", "0px"], [3, "data"], ["lines", "3", 3, "data"]], template: function DataStorePaginationPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " DataStore - Pagination example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This example is useful for use cases that require the data stream to be updated based on user actions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "filtering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " are the clear use cases that come to my mind. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " For these use cases you get the initial data stream and then, upon user interaction, you request an update for that stream. For example requesting your remote API for the next page of results or a filtered set of results. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " This example shows you how to merge the initial data stream with future data streams that may arise from user interaction. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DataStorePaginationPage_span_23_Template, 3, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Each time you click the button we fetch users from the next page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DataStorePaginationPage_ion_row_27_Template, 9, 6, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStorePaginationPage_Template_ion_button_click_28_listener() { return ctx.getNextPageUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Fetch next page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current page: ", ctx.currentPage, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadMorePages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagedUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loadMorePages || ctx.pagedUsers.isShell);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__["ImageShellComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_10__["TextShellComponent"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtcGFnaW5hdGlvbi9kYXRhLXN0b3JlLXBhZ2luYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtcGFnaW5hdGlvbi9kYXRhLXN0b3JlLXBhZ2luYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IHByZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGNvZGUge1xuICBjb2xvcjogI0Y5MjY3MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStorePaginationPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-store-pagination',
                templateUrl: './data-store-pagination.page.html',
                styleUrls: ['./data-store-pagination.page.scss'],
            }]
    }], function () { return [{ type: _showcase_service__WEBPACK_IMPORTED_MODULE_4__["ShowcaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-stacked/data-store-stacked.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-stacked/data-store-stacked.page.ts ***!
  \**********************************************************************************/
/*! exports provided: DataStoreStackedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreStackedPage", function() { return DataStoreStackedPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");













const _c0 = function () { return { w: 1, h: 1 }; };
function DataStoreStackedPage_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-aspect-ratio", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-image-shell", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-text-shell", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.user;
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, user_r4)) == null ? null : tmp_1_0.avatar;
    var tmp_3_0 = null;
    const currVal_3 = (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, user_r4)) == null ? null : tmp_3_0.first_name;
    var tmp_4_0 = null;
    const currVal_4 = (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, user_r4)) == null ? null : tmp_4_0.last_name;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", currVal_1)("alt", "Sample Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", currVal_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", currVal_4);
} }
function DataStoreStackedPage_div_49_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c1 = function (a0) { return { user: a0 }; };
function DataStoreStackedPage_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataStoreStackedPage_div_49_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, user_r5));
} }
function DataStoreStackedPage_div_50_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function DataStoreStackedPage_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataStoreStackedPage_div_50_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, user_r7));
} }
class DataStoreStackedPage {
    constructor(showcaseService) {
        this.showcaseService = showcaseService;
        // View model
        this.stackedUsers = [];
        this.shellUsers = [];
        // Emulate a tream of events that trigger the loading of new items
        this.triggerNewItemsLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.newItemsTriggerObservable = this.triggerNewItemsLoading.asObservable();
    }
    ngOnInit() {
        const openDataStream = this.showcaseService.getOpenDataStream();
        if (!this.openDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = [
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseShellUserModel"]()
            ];
            this.openDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.openDataStore.load(openDataStream);
        }
        // Each time the user triggers the loading of new items, ask the service to get those new items
        const newDataObservable = this.newItemsTriggerObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            const newValuesObservable = this.showcaseService.getStackedValuesDataSource();
            const newDataShell = [
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseShellUserModel"]()
            ];
            const newValuesWithShellObservable = _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"].AppendShell(newValuesObservable, newDataShell, 400);
            return newValuesWithShellObservable;
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.openDataStore.state, newDataObservable)
            .subscribe(data => {
            console.log('data', data);
            if (data.isShell) {
                const shellsAsObservables = [...data].map((val) => {
                    // Transform plain shell values into async Observables (to comply with the layout markup)
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(val);
                });
                // When loading new data, override the shellUsers property
                this.shellUsers = shellsAsObservables;
            }
            else {
                // Clear shellUsers property
                this.shellUsers = [];
                const dataWithShell = [...data].map((val) => {
                    // Transform plain values into async Observables (to comply with the layout markup)
                    return _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"].AppendShell(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(val), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseShellUserModel"](), 400);
                });
                // Concat data to existing stackedUsers property
                this.stackedUsers.push(...dataWithShell);
            }
        });
    }
    loadStackedResults() {
        this.triggerNewItemsLoading.next();
    }
    pushValuesToOpenStream() {
        this.showcaseService.pushValuesToOpenStream();
    }
}
DataStoreStackedPage.ɵfac = function DataStoreStackedPage_Factory(t) { return new (t || DataStoreStackedPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_3__["ShowcaseService"])); };
DataStoreStackedPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataStoreStackedPage, selectors: [["app-data-store-stacked"]], decls: 51, vars: 2, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], ["userTemplate", ""], [1, "stacked-items-demo"], [1, "showcase-section", "sticky-section"], ["size", "12"], [3, "click"], [4, "ngFor", "ngForOf"], [2, "background-color", "#FFF", "padding", "10px"], ["size", "4"], [3, "ratio"], ["animation", "spinner", 3, "src", "alt"], ["size", "8"], [2, "margin-top", "0px"], [3, "data"], ["lines", "3", 3, "data"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function DataStoreStackedPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " DataStore - Stacked shells example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Once you have values coming from the initial data stream, the shell animation would be off. If its an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "open stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ", then each time a new value arrives, it will be added to the view state without the shell animation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " This example is handy If you want to change the default functionality and apply independent shell animations to each value coming from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "open data stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " It's also a good example if you want to implement an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "inifini scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " feature. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " For this to work we will be transforming plain values into Observables, thus the need to update our markup and specify the binded model as async. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "<h3>\n  <app-text-shell [data]=\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "(user | async)?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ".first_name\"></app-text-shell>\n</h3>\n<p>\n  <app-text-shell [data]=\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "(user | async)?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ".last_name\" lines=\"3\"></app-text-shell>\n</p>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Also as we are dealing with a mix of shell models and real values that get stacked one after the other, we need to have two seperate lists. One to show the shell values and another to contain the stacked values. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DataStoreStackedPage_ng_template_37_Template, 12, 12, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStoreStackedPage_Template_ion_button_click_43_listener() { return ctx.pushValuesToOpenStream(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Push values to open stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStoreStackedPage_Template_ion_button_click_46_listener() { return ctx.loadStackedResults(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Load New Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, DataStoreStackedPage_div_49_Template, 2, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DataStoreStackedPage_div_50_Template, 2, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stackedUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shellUsers);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__["ImageShellComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_10__["TextShellComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n.stacked-items-demo[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 0px 0px 20px;\n}\n.sticky-section[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  background: #ececec;\n  padding: 20px;\n  margin: 0px 0px 60px !important;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtc3RhY2tlZC9kYXRhLXN0b3JlLXN0YWNrZWQucGFnZS5zY3NzIiwiL1VzZXJzL2RheWFuYS93b3JrL2lvbmljL3RlbXBsYXRlcy9pb240ZnVsbHB3YS9zcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9kYXRhLXN0b3JlLXN0YWNrZWQvZGF0YS1zdG9yZS1zdGFja2VkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBQ25CQTtFQUNFLHlCQUFBO0VBQ0Esd2lCQUFBO0VBQ0EscUJBQUE7QURzQkY7QUNuQkE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBRHNCRiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9kYXRhLXN0b3JlLXN0YWNrZWQvZGF0YS1zdG9yZS1zdGFja2VkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdGFja2VkLWl0ZW1zLWRlbW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMHB4IDBweCAyMHB4O1xufVxuXG4uc3RpY2t5LXNlY3Rpb24ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDYwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMTA7XG59IiwiQGltcG9ydCBcIi4uL2FwcC1zaGVsbC5wYWdlXCI7XG5cbi5zdGFja2VkLWl0ZW1zLWRlbW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMHB4IDBweCAyMHB4O1xufVxuXG4uc3RpY2t5LXNlY3Rpb24ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDYwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMTA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStoreStackedPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-store-stacked',
                templateUrl: './data-store-stacked.page.html',
                styleUrls: ['./data-store-stacked.page.scss'],
            }]
    }], function () { return [{ type: _showcase_service__WEBPACK_IMPORTED_MODULE_3__["ShowcaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-subset/data-store-subset.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-subset/data-store-subset.page.ts ***!
  \********************************************************************************/
/*! exports provided: DataStoreSubsetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreSubsetPage", function() { return DataStoreSubsetPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");








class DataStoreSubsetPage {
    constructor(showcaseService) {
        this.showcaseService = showcaseService;
    }
    ngOnInit() {
        const dataSource = this.showcaseService.getUserSubsetData(2);
        const shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseCompanyModel"]();
        this.companyDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
        this.companyDataStore.load(dataSource);
        this.companyDataStore.state.subscribe(data => {
            this.company = data;
        });
    }
}
DataStoreSubsetPage.ɵfac = function DataStoreSubsetPage_Factory(t) { return new (t || DataStoreSubsetPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"])); };
DataStoreSubsetPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataStoreSubsetPage, selectors: [["app-data-store-subset"]], decls: 38, vars: 3, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], ["href", "https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb", "target", "_blank"], [1, "company"], ["animation", "bouncing", 2, "--text-shell-line-color", "#FFF", 3, "data"]], template: function DataStoreSubsetPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " DataStore - Subset example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sometimes the data coming from the remote API does not match 100% the model you defined for your view. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "export class YourModel extends ShellModel {\n  cover: string;\n  image: string;\n  title: string;\n  description: string;\n}\n\n// Data coming from the remote API with the following format\nconst jsonResponse = {\n  name: 'extra-data',\n  fields: {\n    cover: 'some-image';\n    image: 'some-other-image';\n    title: 'a-title';\n    description: 'a-description';\n  }\n};\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Hopefully, we can use some ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "RxJs operators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " to mold the data and fit our needs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " If that\u2019s not enough, you can use the handy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "spread");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "rest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " operators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " to mold your data even deeper. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "public getListDataSource(): Observable<YourModel> {\n  const dataObservable = this.http.get('https://reqres.in/api/users');\n\n  return dataObservable.pipe(\n    map((jsonResponse) => {\n      const filteredData: YourModel = {\n        ...data.fields\n      };\n      return filteredData;\n    })\n  );\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-text-shell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-text-shell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-text-shell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.company.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.company.catchPhrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.company.bs);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__["TextShellComponent"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n.company[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtc3Vic2V0L2RhdGEtc3RvcmUtc3Vic2V0LnBhZ2Uuc2NzcyIsIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1zdWJzZXQvZGF0YS1zdG9yZS1zdWJzZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FDbkJBO0VBQ0UseUJBQUE7RUFDQSx3aUJBQUE7RUFDQSxhQUFBO0FEc0JGIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtc3Vic2V0L2RhdGEtc3RvcmUtc3Vic2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jb21wYW55IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMzgnJTNFJTNDcGF0aCBkPSdNMCAzOC41OWwyLjgzLTIuODMgMS40MSAxLjQxTDEuNDEgNDBIMHYtMS40MXpNMCAxLjRsMi44MyAyLjgzIDEuNDEtMS40MUwxLjQxIDBIMHYxLjQxek0zOC41OSA0MGwtMi44My0yLjgzIDEuNDEtMS40MUw0MCAzOC41OVY0MGgtMS40MXpNNDAgMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwzOC41OSAwSDQwdjEuNDF6TTIwIDE4LjZsMi44My0yLjgzIDEuNDEgMS40MUwyMS40MSAyMGwyLjgzIDIuODMtMS40MSAxLjQxTDIwIDIxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDE4LjU5IDIwbC0yLjgzLTIuODMgMS40MS0xLjQxTDIwIDE4LjU5eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIHBhZGRpbmc6IDIwcHg7XG59IiwiQGltcG9ydCBcIi4uL2FwcC1zaGVsbC5wYWdlXCI7XG5cbi5jb21wYW55IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMzgnJTNFJTNDcGF0aCBkPSdNMCAzOC41OWwyLjgzLTIuODMgMS40MSAxLjQxTDEuNDEgNDBIMHYtMS40MXpNMCAxLjRsMi44MyAyLjgzIDEuNDEtMS40MUwxLjQxIDBIMHYxLjQxek0zOC41OSA0MGwtMi44My0yLjgzIDEuNDEtMS40MUw0MCAzOC41OVY0MGgtMS40MXpNNDAgMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwzOC41OSAwSDQwdjEuNDF6TTIwIDE4LjZsMi44My0yLjgzIDEuNDEgMS40MUwyMS40MSAyMGwyLjgzIDIuODMtMS40MSAxLjQxTDIwIDIxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDE4LjU5IDIwbC0yLjgzLTIuODMgMS40MS0xLjQxTDIwIDE4LjU5eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStoreSubsetPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-store-subset',
                templateUrl: './data-store-subset.page.html',
                styleUrls: ['./data-store-subset.page.scss'],
            }]
    }], function () { return [{ type: _showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/app-shell/image-shell/image-shell.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/app-shell/image-shell/image-shell.page.ts ***!
  \********************************************************************/
/*! exports provided: ImageShellPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageShellPage", function() { return ImageShellPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");





const _c0 = function () { return { w: 1, h: 1 }; };
const _c1 = function () { return { w: 3, h: 2 }; };
const _c2 = function () { return { w: 2, h: 1 }; };
class ImageShellPage {
    constructor() { }
    ngOnInit() {
    }
}
ImageShellPage.ɵfac = function ImageShellPage_Factory(t) { return new (t || ImageShellPage)(); };
ImageShellPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageShellPage, selectors: [["app-image-shell-page"]], decls: 302, vars: 44, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], [2, "width", "30%", "margin", "0px auto"], [3, "ratio"], [3, "src", "alt"], ["animation", "spinner", 3, "src", "alt"], ["animation", "gradient", 3, "src", "alt"], ["animation", "spinner", 1, "add-overlay", 3, "src", "alt"], [2, "--image-shell-loading-background", "rgba(233, 30, 99, .25)", 3, "src", "alt"], ["animation", "spinner", 1, "add-overlay", 2, "--image-shell-overlay-background", "rgba(103, 58, 183, .40)", 3, "src", "alt"], ["animation", "spinner", 2, "--image-shell-spinner-size", "40px", "--image-shell-spinner-color", "#000000", 3, "src", "alt"], ["animation", "gradient", 2, "--image-shell-loading-background", "rgba(255, 3, 109, 0.6)", "--image-shell-animation-color", "rgba(156, 4, 68, 0.7)", 3, "src", "alt"], [2, "width", "80%", "margin", "0px auto"], ["animation", "spinner", 2, "--image-shell-border-radius", "10px", 3, "src", "alt"], ["animation", "gradient", 2, "--image-shell-border-radius", "10px", 3, "src", "alt"], ["animation", "spinner", 1, "add-overlay", 3, "display", "src"], [2, "margin", "10px"], ["animation", "spinner", 3, "display", "src"], ["animation", "spinner", 2, "background-position", "bottom right", 3, "display", "src"], [2, "width", "60%", "margin", "0px auto"]], template: function ImageShellPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Image Shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This component enables to preload an image with an elegant shell. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Set different animation options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " You can choose between ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "no animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " (default), ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "spinner animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "gradient background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " animation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "No animation (default)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "<app-image-shell [src]=\"\" [alt]=\"\"></app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-image-shell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Spinner animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "<app-image-shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "animation=\"spinner\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " [src]=\"\" [alt]=\"\"></app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-image-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Gradient animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "<app-image-shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "animation=\"gradient\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " [src]=\"\" [alt]=\"\"></app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-image-shell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " You can add/remove the following ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " to adjust the shell element behavior: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " This class adds a background overlay after the image has loaded. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "<app-image-shell animation=\"spinner\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "class=\"add-overlay\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " [src]=\"''./assets/sample-images/travel/Travel2-64.47.png''\" [alt]=\"\"></app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "app-image-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " You can also override these ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "CSS 4 variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " to adjust the shell element style ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "app-image-shell {\n  --image-shell-loading-background: rgba(233, 30, 99, .25);\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "app-image-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "app-image-shell {\n  --image-shell-overlay-background: rgba(103, 58, 183, .40);\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "app-image-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "app-image-shell {\n  --image-shell-spinner-size: 40px;\n  --image-shell-spinner-color: #000000;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "app-image-shell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Background Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " These properties are only applied when using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "animation=\"gradient\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "app-image-shell {\n  --image-shell-loading-background: rgba(255, 3, 109, 0.6);\n  --image-shell-animation-color: rgba(156, 4, 68, 0.7);\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "app-image-shell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Border Radius");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "app-image-shell {\n  --image-shell-border-radius: 10px;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "app-image-shell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "app-image-shell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Cover Image Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " In addition to the default ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "<app-image-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, ", you can specify a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " display if you want to display your image as a background-image. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " This is different from the default display, because (although it's not mandatory) cover display is designed to contain content (for example some text) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "<app-image-shell [display]=\"'cover'\" animation=\"spinner\" class=\"add-overlay\" [src]=\"\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\n  <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\n    Some Text\n  </app-aspect-ratio>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "</app-image-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "app-image-shell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Some Text on top of a background-image container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Let me explain you the differences between ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " display and when you should use each one. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Default Mode Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " You should use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "default display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " when you are 100% confident on the aspect ratio of an image. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " If the image ratio does not match the specified aspect ratio, the image will be stretched. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Expected behavior:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " The image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "WILL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " be stretched. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " We define an aspect ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "2:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " but the image has an aspect ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "1:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "app-image-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Expected behavior:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " The image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "WON'T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " be stretched. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " We define an aspect ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "1:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " that matches the image ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "1:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "app-image-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Cover Mode Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " You should use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "cover display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " when you want to fill a container with an image and you don't care if the image is shown completly or a portion of it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " If the image ratio does not match the specified aspect ratio, the image will be cropped to fit the available space without stretching the image. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Expected behavior:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " The image will be cropped to fill the available space. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " We define an aspect ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "2:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " but the image has an aspect ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "1:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "app-image-shell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " You can also change the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "background-position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " property to adjust how the image is placed inside the container. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Notice:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " This only applies to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " display. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "app-image-shell[display=\"cover\"] {\n  background-position: bottom right;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "app-image-shell", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Maintain Aspect Ratio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " We use the handy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "<app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " to ensure the image shell mantains a specified aspect ratio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " By doing so, we prevent content from jumping around the page while assets (images) are loading. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Default display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " Just surround the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "<app-image-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " with an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "<app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " element ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "<app-aspect-ratio [ratio]=\"{w:3, h:2}\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "\n  <app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "</app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "app-image-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Cover display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " When using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, " display we need to include the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "<app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " inside the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "<app-image-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " element instead of surrounding it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "<app-image-shell [display]=\"'cover'\" animation=\"spinner\" class=\"add-overlay\" [src]=\"\">\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "<app-aspect-ratio [ratio]=\"{w:3, h:2}\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "\n    Some Text\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "</app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "\n</app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "app-image-shell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Some Text on top of a background-image container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/sample-images/travel/Travel2-64.47.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/sample-images/travel/Travel2-64.47.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/sample-images/getting-started/category2-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/sample-images/getting-started/category2-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", "./assets/sample-images/getting-started/category2-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", "./assets/sample-images/getting-started/category2-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c1));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__["ImageShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2ltYWdlLXNoZWxsL2ltYWdlLXNoZWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9pbWFnZS1zaGVsbC9pbWFnZS1zaGVsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageShellPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-shell-page',
                templateUrl: './image-shell.page.html',
                styleUrls: ['./image-shell.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/showcase/app-shell/simple-data-binding/simple-data-binding.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/simple-data-binding/simple-data-binding.page.ts ***!
  \************************************************************************************/
/*! exports provided: SimpleDataBindingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDataBindingPage", function() { return SimpleDataBindingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");










const _c0 = function () { return { w: 2, h: 1 }; };
const _c1 = function () { return { w: 1, h: 1 }; };
class SimpleDataBindingPage {
    constructor(showcaseService) {
        this.showcaseService = showcaseService;
        // Aux properties for the Simple Fetch (HttpClient) showcase
        this.simpleFetchButtonDisabled = true;
        this.simpleFetchCountdown = 0;
    }
    ngOnInit() {
        this.showcaseShellSimpleFetch(10);
    }
    showcaseShellSimpleFetch(countdown) {
        // Assign an (empty / null) value to the shell object to restore it's 'loading' state
        this.simpleFetchData = null;
        // Prevent rage clicks on the 'Fetch more Data' button
        this.simpleFetchButtonDisabled = true;
        // Start a countdown and an interval before executing the fetch function
        this.simpleFetchCountdown = countdown;
        this.simpleFetchInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        // Start a countdown to showcase the shell elements animations for a few seconds before the data get's fetched into the shell object
        const timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(countdown * 1000);
        // When timer emits after X seconds, complete source
        this.simpleFetchInterval
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(timer$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.simpleFetchButtonDisabled = false))
            .subscribe({
            next: () => {
                this.simpleFetchCountdown--;
            },
            complete: () => {
                this.simpleFetchCountdown = 0;
                // Once the countdown ends, fetch data using the HttpClient
                this.showcaseService.getSimpleDataSource()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1) // Force Observable to complete
                ).subscribe(val => {
                    console.log('Fetching shell data using the HttpClient', val);
                    this.simpleFetchData = val;
                });
            }
        });
    }
}
SimpleDataBindingPage.ɵfac = function SimpleDataBindingPage_Factory(t) { return new (t || SimpleDataBindingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_3__["ShowcaseService"])); };
SimpleDataBindingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleDataBindingPage, selectors: [["app-simple-data-binding"]], decls: 36, vars: 13, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "10px", "margin", "20px"], ["size", "12"], ["animation", "gradient", 1, "add-overlay", 3, "display", "src", "alt"], [3, "ratio"], [2, "margin", "10px", "text-align", "center", "color", "#FFF"], ["size", "4"], ["animation", "gradient", 3, "src", "alt"], ["size", "8"], [2, "margin-top", "0px"], ["animation", "gradient", 3, "data"], ["animation", "gradient", "lines", "3", 3, "data"], [3, "disabled", "click"]], template: function SimpleDataBindingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Simple Data Binding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back to basics ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " We can tweak our data stream with some RxJs operators and achieve an app shell loading interaction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Let's set a timeout and fetch data using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "HttpClient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Data coming in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-image-shell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-aspect-ratio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Heading on top of a cover image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-aspect-ratio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-image-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-text-shell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-text-shell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleDataBindingPage_Template_ion_button_click_34_listener() { return ctx.showcaseShellSimpleFetch(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Fetch more Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.simpleFetchCountdown, " seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", ctx.simpleFetchData == null ? null : ctx.simpleFetchData.cover)("alt", "Sample Image Cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.simpleFetchData == null ? null : ctx.simpleFetchData.image)("alt", "Sample Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.simpleFetchData == null ? null : ctx.simpleFetchData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.simpleFetchData == null ? null : ctx.simpleFetchData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.simpleFetchButtonDisabled);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__["AspectRatioComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL3NpbXBsZS1kYXRhLWJpbmRpbmcvc2ltcGxlLWRhdGEtYmluZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvc2ltcGxlLWRhdGEtYmluZGluZy9zaW1wbGUtZGF0YS1iaW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleDataBindingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simple-data-binding',
                templateUrl: './simple-data-binding.page.html',
                styleUrls: ['./simple-data-binding.page.scss'],
            }]
    }], function () { return [{ type: _showcase_service__WEBPACK_IMPORTED_MODULE_3__["ShowcaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/app-shell/text-shell/text-shell.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/app-shell/text-shell/text-shell.page.ts ***!
  \******************************************************************/
/*! exports provided: TextShellPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextShellPage", function() { return TextShellPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");







const _c0 = function () { return { w: 2, h: 1 }; };
class TextShellPage {
    constructor() {
        this.sampleTextShellData = '';
    }
    ngOnInit() {
    }
}
TextShellPage.ɵfac = function TextShellPage_Factory(t) { return new (t || TextShellPage)(); };
TextShellPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextShellPage, selectors: [["app-text-shell-page"]], decls: 310, vars: 26, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section", 2, "margin-bottom", "40px"], [1, "loading-state-demo"], [1, "showcase-section", "sticky-section"], ["placeholder", "When this text is empty the text-shell will show the loading state.", "clearOnEdit", "true", 2, "--background", "#FFF", 3, "ngModel", "ngModelChange"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "20px"], [3, "data"], ["lines", "3", 3, "data"], [2, "background-color", "#FFF", "padding", "20px", "color", "#FFF", "font-weight", "500"], ["animation", "spinner", 1, "add-overlay", 3, "display", "src"], [3, "ratio"], [2, "margin", "20px 40px"], ["animation", "bouncing", 3, "data"], ["animation", "bouncing", "lines", "3", 3, "data"], ["animation", "gradient", 3, "data"], ["animation", "gradient", "lines", "3", 3, "data"], ["lines", "6", 2, "--text-shell-line-color", "#DDD", 3, "data"], ["animation", "bouncing", "lines", "2", 2, "--text-shell-line-color", "#DDD", 3, "data"], [2, "padding", "5px", "background", "#FFF"], ["animation", "gradient", "lines", "2", 2, "--text-shell-line-color", "transparent", "--text-shell-background", "#FFF", 3, "data"], [2, "--text-shell-line-color", "rgba(233, 30, 99, .25)", 3, "data"], [2, "padding", "5px", "background", "#000000"], ["lines", "3", 2, "--text-shell-line-color", "#FFFFFF", "--text-shell-background", "#000000", 3, "data"], ["lines", "3", "animation", "gradient", 2, "--text-shell-line-color", "transparent", "--text-shell-background", "#000000", "--text-shell-animation-background", "rgba(255, 3, 109, 0.6)", "--text-shell-animation-color", "rgba(156, 4, 68, 0.7)", 3, "data"], [2, "--text-shell-line-height", "40px", 3, "data"], ["lines", "4", 2, "--text-shell-line-gutter", "10px", "--text-shell-line-color", "#CCC", 3, "data"], [1, "sample-text-max-width"], [1, "sample-text-min-width", 2, "display", "inline-block"]], template: function TextShellPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Text Shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This component is useful when you want to show a loading indicator while fetching text data from the server. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " basically works by wrapping the text node with a loading indicator while you are fetching data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " While there are empty values the component adds some 'loading' styles and animations. Whereas while there are non empty values, the loading state is removed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Try toggling the loading state of the text shells below by changing the value of this textarea. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextShellPage_Template_ion_textarea_ngModelChange_21_listener($event) { return ctx.sampleTextShellData = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " You can reset the 'loading' state by clearing the textarea value. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "No animation (default)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Single line example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Multi-line example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-text-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " On top of another element (with transparent background) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-image-shell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "app-aspect-ratio", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-text-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Bouncing animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Single line example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-text-shell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Multi-line example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-text-shell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " On top of another element (with transparent background) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "app-image-shell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "app-aspect-ratio", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "app-text-shell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " As we don\u2019t use masks, this approach works well with use cases that require transparent backgrounds. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Gradient animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Single line example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "app-text-shell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Multi-line example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-text-shell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " On top of another element (with transparent background) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "app-image-shell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "app-aspect-ratio", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-text-shell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Side effect:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " This solution doesn\u2019t play well if you require the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " to have a transparent background as the masks need a solid color to work properly. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Prepend and Append text to the data binded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " There are cases where we need to add some text before or after the value binded to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, ". For example if we are loading a price value and we want to put the '$' before the price. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "  <app-text-shell [data]=\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "(sampleTextShellData) ? '$'.concat(' ', sampleTextShellData) : null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\"></app-text-shell>\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "<app-text-shell [data]=\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "(sampleTextShellData) ? sampleTextShellData.concat(' years old') : null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\"></app-text-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Other use cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " element can be used alone or wrapped with a text tag (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, ", etc). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " In case you wrap it with a heading element, we included basic styles (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "src/theme/shell-defaults.scss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, ") to match the different heading styles (mainly line-height associated to each heading). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, ":root {\n  h1 > app-text-shell {\n    --text-shell-line-height: 32px;\n    --text-shell-line-color: #CCC;\n  }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " By matching the line-height of the text-shell with the line-height of the wrapper element, we avoid page height bumps after the data gets loaded into the shells. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "<h1>\n  <app-text-shell [data]=\"\"></app-text-shell>\n</h1>\n\n<h2>\n  <app-text-shell [data]=\"\"></app-text-shell>\n</h2>\n\n<h3>\n  <app-text-shell [data]=\"\"></app-text-shell>\n</h3>\n\n<h4>\n  <app-text-shell [data]=\"\"></app-text-shell>\n</h4>\n\n<h5>\n  <app-text-shell [data]=\"\"></app-text-shell>\n</h5>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " You can add/remove the following ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Attributes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " to adjust the shell element behavior ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Multi-line support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " You can set up-to 6 lines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "<p>\n  <app-text-shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "lines=\"6\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " [data]=\"\"></app-text-shell>\n</p>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "app-text-shell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Set different animation options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " You can choose between ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "no animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " (default), ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "bouncing animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "gradient background with line masks on top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "<p>\n  <app-text-shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "animation=\"bouncing\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " lines=\"2\" [data]=\"\"></app-text-shell>\n</p>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "app-text-shell", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "<p>\n  <app-text-shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "animation=\"gradient\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " lines=\"2\" [data]=\"\"></app-text-shell>\n</p>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "app-text-shell {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "app-text-shell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " In this mode, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "--text-shell-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " property refers to the masks colors. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " When using a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "gradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " animation, make sure you set the line-color to transparent so the background animation that's beneath the masks can be seen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " You can also override these ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "CSS 4 variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " to adjust the shell element style ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Line color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "app-text-shell {\n  --text-shell-line-color: rgba(233, 30, 99, .25);\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "app-text-shell", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Background by default is set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "transparent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "app-text-shell {\n  --text-shell-line-color: #FFFFFF;\n  --text-shell-background: #000000;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "app-text-shell", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Background Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " These properties are only applied when using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "animation=\"gradient\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "app-text-shell {\n  --text-shell-line-color: transparent;\n  --text-shell-background: #000000;\n  --text-shell-animation-background: rgba(255, 3, 109, 0.6);\n  --text-shell-animation-color: rgba(156, 4, 68, 0.7);\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "app-text-shell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Line height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "app-text-shell {\n  --text-shell-line-height: 40px;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "app-text-shell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Line gutter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "app-text-shell {\n  --text-shell-line-gutter: 10px;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "app-text-shell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Max-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " By default, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " element will fill it's container width. You can adjust this by setting a temporary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "max-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " while the shell loading state is present. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, ".sample-text-max-width > app-text-shell {\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "max-width: 50%;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "\n\n  &.text-loaded {\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "max-width: unset;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "\n  }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Min-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " When the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " parent container doesn't have a width defined, it may happen that the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " inherits an undefined width and thus it's not shown. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "In these cases setting a temporary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "min-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " fixes the issue.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " If the parent doesn't have a defined width, it will fail to set a min-width based on a percentage of it's parents width. You will have to use absolute units (px, ch, etc). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, ".sample-text-min-width > app-text-shell {\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "min-width: 80px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "\n\n  &.text-loaded {\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "min-width: 0px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "\n  }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", "./assets/sample-images/getting-started/category5-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", "./assets/sample-images/getting-started/category5-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", "./assets/sample-images/getting-started/category5-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sampleTextShellData ? "$".concat(" ", ctx.sampleTextShellData) : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sampleTextShellData ? ctx.sampleTextShellData.concat(" years old") : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sampleTextShellData);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_3__["TextShellComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__["AspectRatioComponent"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n.loading-state-demo[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 0px 0px 20px;\n}\n.sticky-section[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  background: #ececec;\n  padding: 20px;\n  margin: 0px 0px 60px !important;\n  z-index: 10;\n}\n.sample-text-max-width[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n.sample-text-max-width[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n.sample-text-min-width[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\n.sample-text-min-width[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL3RleHQtc2hlbGwvdGV4dC1zaGVsbC5wYWdlLnNjc3MiLCIvVXNlcnMvZGF5YW5hL3dvcmsvaW9uaWMvdGVtcGxhdGVzL2lvbjRmdWxscHdhL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL3RleHQtc2hlbGwvdGV4dC1zaGVsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRko7QUNuQkE7RUFDRSx5QkFBQTtFQUNBLHdpQkFBQTtFQUNBLHFCQUFBO0FEc0JGO0FDbkJBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QURzQkY7QUNuQkE7RUFDRSxjQUFBO0FEc0JGO0FDcEJFO0VBQ0UsZ0JBQUE7QURzQko7QUNsQkE7RUFDRSxlQUFBO0FEcUJGO0FDbkJFO0VBQ0UsY0FBQTtBRHFCSiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC90ZXh0LXNoZWxsL3RleHQtc2hlbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IHByZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGNvZGUge1xuICBjb2xvcjogI0Y5MjY3MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxvYWRpbmctc3RhdGUtZGVtbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAwcHggMHB4IDIwcHg7XG59XG5cbi5zdGlja3ktc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDBweCAwcHggNjBweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnNhbXBsZS10ZXh0LW1heC13aWR0aCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG4uc2FtcGxlLXRleHQtbWF4LXdpZHRoID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4uc2FtcGxlLXRleHQtbWluLXdpZHRoID4gYXBwLXRleHQtc2hlbGwge1xuICBtaW4td2lkdGg6IDgwcHg7XG59XG4uc2FtcGxlLXRleHQtbWluLXdpZHRoID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn0iLCJAaW1wb3J0IFwiLi4vYXBwLXNoZWxsLnBhZ2VcIjtcblxuLmxvYWRpbmctc3RhdGUtZGVtbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAwcHggMHB4IDIwcHg7XG59XG5cbi5zdGlja3ktc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDBweCAwcHggNjBweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnNhbXBsZS10ZXh0LW1heC13aWR0aCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgbWF4LXdpZHRoOiA1MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuXG4uc2FtcGxlLXRleHQtbWluLXdpZHRoID4gYXBwLXRleHQtc2hlbGwge1xuICBtaW4td2lkdGg6IDgwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextShellPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-shell-page',
                templateUrl: './text-shell.page.html',
                styleUrls: ['./text-shell.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=app-shell-app-shell-module-es2015.js.map