(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-estate-details-real-estate-details-module"],{

/***/ "./src/app/real-estate/details/real-estate-details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/real-estate/details/real-estate-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: RealEstateDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateDetailsPageModule", function() { return RealEstateDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _real_estate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../real-estate.service */ "./src/app/real-estate/real-estate.service.ts");
/* harmony import */ var _real_estate_details_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./real-estate-details.page */ "./src/app/real-estate/details/real-estate-details.page.ts");
/* harmony import */ var _real_estate_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./real-estate-details.resolver */ "./src/app/real-estate/details/real-estate-details.resolver.ts");












const routes = [
    {
        path: '',
        component: _real_estate_details_page__WEBPACK_IMPORTED_MODULE_8__["RealEstateDetailsPage"],
        resolve: {
            data: _real_estate_details_resolver__WEBPACK_IMPORTED_MODULE_9__["RealEstateDetailsResolver"]
        }
    }
];
class RealEstateDetailsPageModule {
}
RealEstateDetailsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RealEstateDetailsPageModule });
RealEstateDetailsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RealEstateDetailsPageModule_Factory(t) { return new (t || RealEstateDetailsPageModule)(); }, providers: [
        _real_estate_details_resolver__WEBPACK_IMPORTED_MODULE_9__["RealEstateDetailsResolver"],
        _real_estate_service__WEBPACK_IMPORTED_MODULE_7__["RealEstateService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RealEstateDetailsPageModule, { declarations: [_real_estate_details_page__WEBPACK_IMPORTED_MODULE_8__["RealEstateDetailsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateDetailsPageModule, [{
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
                    _real_estate_details_page__WEBPACK_IMPORTED_MODULE_8__["RealEstateDetailsPage"]
                ],
                providers: [
                    _real_estate_details_resolver__WEBPACK_IMPORTED_MODULE_9__["RealEstateDetailsResolver"],
                    _real_estate_service__WEBPACK_IMPORTED_MODULE_7__["RealEstateService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/real-estate/details/real-estate-details.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/real-estate/details/real-estate-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: RealEstateDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateDetailsPage", function() { return RealEstateDetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resolver-helper */ "./src/app/utils/resolver-helper.ts");
/* harmony import */ var _real_estate_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./real-estate-details.model */ "./src/app/real-estate/details/real-estate-details.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function RealEstateDetailsPage_ion_col_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-shell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const amenity_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", amenity_r1.name);
} }
const _c0 = function () { return { w: 64, h: 40 }; };
const _c1 = function () { return { w: 64, h: 30 }; };
class RealEstateDetailsPage {
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
            this.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__["ResolverHelper"].extractData(resolvedRouteData.data, _real_estate_details_model__WEBPACK_IMPORTED_MODULE_3__["RealEstateDetailsModel"])
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
RealEstateDetailsPage.ɵfac = function RealEstateDetailsPage_Factory(t) { return new (t || RealEstateDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
RealEstateDetailsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RealEstateDetailsPage, selectors: [["app-real-estate-details"]], hostVars: 2, hostBindings: function RealEstateDetailsPage_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
    } }, decls: 97, vars: 23, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "app/categories/real-estate"], [1, "real-estate-details-content"], [1, "image-row"], ["size", "12"], ["animation", "spinner", 1, "details-picture", 3, "display", "src"], [3, "ratio"], ["name", "heart", 1, "bookmark-icon"], [1, "description-row"], [1, "details-price"], [1, "price-icon"], [3, "data"], [1, "details-address"], ["animation", "bouncing", 3, "data"], [1, "details-description"], ["animation", "bouncing", "lines", "5", 3, "data"], [1, "accommodations-wrapper"], [1, "detail-title"], [1, "accommodation-row"], [1, "icon-wrapper"], ["src", "./assets/custom-icons/real-estate/guests.svg", 1, "accommodation-icon"], ["size", "4"], [1, "accommodation-name"], ["size", "2"], [1, "accommodation-value"], ["src", "./assets/custom-icons/real-estate/bedrooms.svg", 1, "accommodation-icon"], ["src", "./assets/custom-icons/real-estate/bathroom.svg", 1, "accommodation-icon"], ["src", "./assets/custom-icons/real-estate/patio.svg", 1, "accommodation-icon"], [1, "location-wrapper"], [1, "location-header"], [1, "location-address"], ["animation", "spinner", 1, "location-image", 3, "src", "alt"], [1, "amenities-wrapper"], [1, "amenities-tags"], ["class", "tag-wrapper", 4, "ngFor", "ngForOf"], [1, "safety-features-wrapper"], [1, "features-list"], [1, "feature-item"], [1, "availability-wrapper"], [1, "availability-row"], [1, "availability-description"], [1, "availability-value"], ["color", "dark", "expand", "block", "fill", "outline", 1, "book-now-btn"], [1, "tag-wrapper"], [1, "amenity-tag"]], template: function RealEstateDetailsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Real Estate Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-image-shell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-aspect-ratio", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-row", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-text-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-text-shell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-text-shell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-text-shell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About the space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-col", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Guests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-col", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-text-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "ion-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ion-col", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Bedrooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-col", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-text-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ion-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ion-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "ion-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ion-col", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Bathrooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ion-col", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-text-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ion-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ion-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "ion-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ion-col", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Patio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ion-col", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-text-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "app-text-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "app-aspect-ratio", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "app-image-shell", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Amenities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ion-row", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, RealEstateDetailsPage_ion_col_76_Template, 3, 1, "ion-col", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Safety Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "app-text-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-text-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "app-text-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Availability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ion-row", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "app-text-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "app-text-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ion-button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "BOOK NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", ctx.details.picture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details.location == null ? null : ctx.details.location.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details.location == null ? null : ctx.details.location.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details.accommodations == null ? null : ctx.details.accommodations.guests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details.accommodations == null ? null : ctx.details.accommodations.bedrooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details.accommodations == null ? null : ctx.details.accommodations.bathrooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details.accommodations == null ? null : ctx.details.accommodations.patios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details.location == null ? null : ctx.details.location.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.details.location == null ? null : ctx.details.location.mapImage)("alt", "location map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details.amenities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", "Smoke Detector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", "Carbon Monoxide Detector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", "Security Alarm System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", "1 month minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", "Available from June");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__["AspectRatioComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-amenity-vertical-gutter: 2px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-color: #d9453a;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .bookmark-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: var(--page-margin);\n  top: var(--page-margin);\n  font-size: 32px;\n  color: var(--page-color);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price[_ngcontent-%COMP%] {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-dark-tint);\n  display: flex;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price[_ngcontent-%COMP%]   .price-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-address[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-address[_ngcontent-%COMP%]    + .details-address[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%] {\n  margin: var(--page-margin) 0px 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-shade);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px 0px var(--page-margin);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%] {\n  padding: var(--page-margin);\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  align-items: center;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]    + .accommodation-row[_ngcontent-%COMP%] {\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-grow: 0;\n  padding-right: 20px;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]   .accommodation-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: var(--ion-color-medium-shade);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]   .accommodation-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]   .accommodation-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) / 2) 0px var(--page-margin);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-header[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-address[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .amenities-tags[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  justify-content: center;\n  margin-top: calc(var(--page-amenity-vertical-gutter) * -1);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .amenities-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%] {\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter) var(--page-amenity-vertical-gutter) 0px;\n  flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .amenities-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]:last-child {\n  padding-right: 0px;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .amenities-tags[_ngcontent-%COMP%]   .amenity-tag[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-light-shade);\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .safety-features-wrapper[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .safety-features-wrapper[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .safety-features-wrapper[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .safety-features-wrapper[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]    + .feature-item[_ngcontent-%COMP%] {\n  margin-top: calc(var(--page-margin) / 2);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]   .availability-description[_ngcontent-%COMP%], .real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]   .availability-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n  display: block;\n  flex: 1;\n  display: flex;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]   .availability-description[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  justify-content: flex-start;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]   .availability-value[_ngcontent-%COMP%] {\n  color: var(--page-color);\n  justify-content: flex-end;\n}\n\n.real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .book-now-btn[_ngcontent-%COMP%] {\n  margin: var(--page-margin) 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9yZWFsLWVzdGF0ZS9kZXRhaWxzL3N0eWxlcy9yZWFsLWVzdGF0ZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVhbC1lc3RhdGUvZGV0YWlscy9zdHlsZXMvcmVhbC1lc3RhdGUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQ0FBQTtFQUNBLDhDQUFBO0VBRUEsbUNBQUE7RUFDQSxxQ0FBQTtFQUVBLHFCQUFBO0FDSEY7O0FET0E7RUFDRSxvQ0FBQTtBQ0pGOztBRE1FO0VBQ0UsOEJBQUE7QUNKSjs7QURNSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ0pOOztBRFFFO0VBQ0UsOEJBQUE7RUFFQSwyQkFBQTtBQ1BKOztBRFNJO0VBQ0UsNENBQUE7RUFDSCxlQUFBO0VBQ0EsZ0JBQUE7RUFDRyxpQ0FBQTtFQUNBLGFBQUE7QUNQTjs7QURTTTtFQUNFLGlCQUFBO0FDUFI7O0FEV0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDVE47O0FEV007RUFDRSxlQUFBO0FDVFI7O0FEYUk7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ1hOOztBRGVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtBQ2JKOztBRGdCRTtFQUNFLDJCQUFBO0VBQ0EseUNBQUE7QUNkSjs7QURnQkk7RUFDRSw4QkFBQTtFQUVBLG1CQUFBO0FDZk47O0FEaUJNO0VBQ0UseUNBQUE7QUNmUjs7QURrQk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNoQlI7O0FEbUJNO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0FDakJSOztBRG9CTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNsQlI7O0FEcUJNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ25CUjs7QUR3QkU7RUFDRSw0REFBQTtBQ3RCSjs7QUR3Qkk7RUFDRSxtQ0FBQTtFQUNBLDJDQUFBO0FDdEJOOztBRHlCSTtFQUNFLGtCQUFBO0FDdkJOOztBRDBCSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUN4Qk47O0FENEJFO0VBQ0UsMkVBQUE7QUMxQko7O0FENEJJO0VBQ0UsOEJBQUE7RUFFQSx1QkFBQTtFQUNBLDBEQUFBO0FDM0JOOztBRDZCTTtFQUNFLDBIQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQzNCUjs7QUQ2QlE7RUFDRSxrQkFBQTtBQzNCVjs7QUQrQk07RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSw4Q0FBQTtFQUNBLGtGQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDN0JSOztBRGtDRTtFQUNFLDJFQUFBO0FDaENKOztBRGtDSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNoQ047O0FEa0NNO0VBQ0UsZUFBQTtFQUNBLG1DQUFBO0FDaENSOztBRGtDUTtFQUNFLHdDQUFBO0FDaENWOztBRHNDRTtFQUNFLDJFQUFBO0FDcENKOztBRHNDSTtFQUNFLDhCQUFBO0VBRUEsOEJBQUE7RUFDQSxtQkFBQTtBQ3JDTjs7QUR1Q007O0VBRUUsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0FDckNSOztBRHdDTTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7QUN0Q1I7O0FEeUNNO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBQ3ZDUjs7QUQyQ0k7RUFDRSxrQ0FBQTtBQ3pDTiIsImZpbGUiOiJzcmMvYXBwL3JlYWwtZXN0YXRlL2RldGFpbHMvc3R5bGVzL3JlYWwtZXN0YXRlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcjogMnB4O1xuICAtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcjogNHB4O1xuXG4gIC0tcGFnZS1jb2xvcjogI2Q5NDUzYTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC5pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIC5ib29rbWFyay1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICB0b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICAuZGVzY3JpcHRpb24tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAuZGV0YWlscy1wcmljZSB7XG4gICAgICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAucHJpY2UtaWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kZXRhaWxzLWFkZHJlc3Mge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcblxuICAgICAgJiArIC5kZXRhaWxzLWFkZHJlc3Mge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlsLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgfVxuXG4gIC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAuYWNjb21tb2RhdGlvbi1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAmICsgLmFjY29tbW9kYXRpb24tcm93IHtcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICB9XG5cbiAgICAgIC5pY29uLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5hY2NvbW1vZGF0aW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgIH1cblxuICAgICAgLmFjY29tbW9kYXRpb24tbmFtZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgfVxuXG4gICAgICAuYWNjb21tb2RhdGlvbi12YWx1ZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5sb2NhdGlvbi13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAubG9jYXRpb24taGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG5cbiAgICAuZGV0YWlsLXRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAubG9jYXRpb24tYWRkcmVzcyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5hbWVuaXRpZXMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLmFtZW5pdGllcy10YWdzIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpICogLTEpO1xuXG4gICAgICAudGFnLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIDBweDtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hbWVuaXR5LXRhZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNhZmV0eS1mZWF0dXJlcy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAuZmVhdHVyZXMtbGlzdCB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAgIC5mZWF0dXJlLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuXG4gICAgICAgICYgKyAuZmVhdHVyZS1pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmF2YWlsYWJpbGl0eS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAuYXZhaWxhYmlsaXR5LXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5hdmFpbGFiaWxpdHktZGVzY3JpcHRpb24sXG4gICAgICAuYXZhaWxhYmlsaXR5LXZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIC5hdmFpbGFiaWxpdHktZGVzY3JpcHRpb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAuYXZhaWxhYmlsaXR5LXZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ib29rLW5vdy1idG4ge1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcjogMnB4O1xuICAtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcjogNHB4O1xuICAtLXBhZ2UtY29sb3I6ICNkOTQ1M2E7XG59XG5cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5pbWFnZS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5pbWFnZS1yb3cgLmJvb2ttYXJrLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXByaWNlIHtcbiAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXByaWNlIC5wcmljZS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtYWRkcmVzcyB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWFkZHJlc3MgKyAuZGV0YWlscy1hZGRyZXNzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5kZXRhaWwtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciAuYWNjb21tb2RhdGlvbi1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIC5hY2NvbW1vZGF0aW9uLXJvdyArIC5hY2NvbW1vZGF0aW9uLXJvdyB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciAuYWNjb21tb2RhdGlvbi1yb3cgLmljb24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIgLmFjY29tbW9kYXRpb24tcm93IC5hY2NvbW1vZGF0aW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIgLmFjY29tbW9kYXRpb24tcm93IC5hY2NvbW1vZGF0aW9uLW5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIgLmFjY29tbW9kYXRpb24tcm93IC5hY2NvbW1vZGF0aW9uLXZhbHVlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5sb2NhdGlvbi13cmFwcGVyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciAubG9jYXRpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5sb2NhdGlvbi13cmFwcGVyIC5kZXRhaWwtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5sb2NhdGlvbi13cmFwcGVyIC5sb2NhdGlvbi1hZGRyZXNzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5hbWVuaXRpZXMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmFtZW5pdGllcy13cmFwcGVyIC5hbWVuaXRpZXMtdGFncyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgKiAtMSk7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5hbWVuaXRpZXMtd3JhcHBlciAuYW1lbml0aWVzLXRhZ3MgLnRhZy13cmFwcGVyIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgdmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKSB2YXIoLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyKSAwcHg7XG4gIGZsZXgtZ3JvdzogMDtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmFtZW5pdGllcy13cmFwcGVyIC5hbWVuaXRpZXMtdGFncyAudGFnLXdyYXBwZXI6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmFtZW5pdGllcy13cmFwcGVyIC5hbWVuaXRpZXMtdGFncyAuYW1lbml0eS10YWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuc2FmZXR5LWZlYXR1cmVzLXdyYXBwZXIge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5zYWZldHktZmVhdHVyZXMtd3JhcHBlciAuZmVhdHVyZXMtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5zYWZldHktZmVhdHVyZXMtd3JhcHBlciAuZmVhdHVyZXMtbGlzdCAuZmVhdHVyZS1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLnNhZmV0eS1mZWF0dXJlcy13cmFwcGVyIC5mZWF0dXJlcy1saXN0IC5mZWF0dXJlLWl0ZW0gKyAuZmVhdHVyZS1pdGVtIHtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmF2YWlsYWJpbGl0eS13cmFwcGVyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuYXZhaWxhYmlsaXR5LXdyYXBwZXIgLmF2YWlsYWJpbGl0eS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmF2YWlsYWJpbGl0eS13cmFwcGVyIC5hdmFpbGFiaWxpdHktcm93IC5hdmFpbGFiaWxpdHktZGVzY3JpcHRpb24sXG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5hdmFpbGFiaWxpdHktd3JhcHBlciAuYXZhaWxhYmlsaXR5LXJvdyAuYXZhaWxhYmlsaXR5LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5hdmFpbGFiaWxpdHktd3JhcHBlciAuYXZhaWxhYmlsaXR5LXJvdyAuYXZhaWxhYmlsaXR5LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmF2YWlsYWJpbGl0eS13cmFwcGVyIC5hdmFpbGFiaWxpdHktcm93IC5hdmFpbGFiaWxpdHktdmFsdWUge1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5hdmFpbGFiaWxpdHktd3JhcHBlciAuYm9vay1ub3ctYnRuIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbn0iXX0= */", "[_nghost-%COMP%] {\n  --shell-color: #d9453a;\n  --shell-color-rgb: 217,69,58;\n}\n\napp-image-shell.details-picture[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.details-price[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 18px;\n  max-width: 100px;\n  min-width: 50px;\n}\n\n.details-price[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.details-address[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.details-address[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.details-address[_ngcontent-%COMP%]    + .details-address[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  max-width: 80%;\n}\n\n.details-address[_ngcontent-%COMP%]    + .details-address[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.details-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n}\n\n.accommodation-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.accommodation-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.location-address[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.location-address[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\napp-image-shell.location-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.amenity-tag[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px;\n}\n\n.amenity-tag[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.feature-item[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.feature-item[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.availability-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%], .availability-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 80%;\n}\n\n.availability-description[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%], .availability-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9yZWFsLWVzdGF0ZS9kZXRhaWxzL3N0eWxlcy9yZWFsLWVzdGF0ZS1kZXRhaWxzLnNoZWxsLnNjc3MiLCJzcmMvYXBwL3JlYWwtZXN0YXRlL2RldGFpbHMvc3R5bGVzL3JlYWwtZXN0YXRlLWRldGFpbHMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURXQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUNSRjs7QURXQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNSRjs7QURVRTtFQUNFLGtCQUFBO0FDUko7O0FEYUU7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1ZKOztBRFlJO0VBQ0Usa0JBQUE7QUNWTjs7QURjRTtFQUNFLGNBQUE7QUNaSjs7QURjSTtFQUNFLGtCQUFBO0FDWk47O0FEaUJBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQ2RGOztBRGlCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDZEY7O0FEZ0JFO0VBQ0UsY0FBQTtBQ2RKOztBRGtCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDZkY7O0FEaUJFO0VBQ0Usa0JBQUE7QUNmSjs7QURtQkE7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0FDaEJGOztBRG1CQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDaEJGOztBRGtCRTtFQUNFLGNBQUE7QUNoQko7O0FEb0JBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNqQkY7O0FEbUJFO0VBQ0Usa0JBQUE7QUNqQko7O0FEdUJFOztFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDbkJKOztBRHFCSTs7RUFDRSxjQUFBO0FDbEJOIiwiZmlsZSI6InNyYy9hcHAvcmVhbC1lc3RhdGUvZGV0YWlscy9zdHlsZXMvcmVhbC1lc3RhdGUtZGV0YWlscy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNkOTQ1M2E7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMTcsNjksNTg7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGV0YWlscy1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5kZXRhaWxzLXByaWNlIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5kZXRhaWxzLWFkZHJlc3Mge1xuICAmID4gYXBwLXRleHQtc2hlbGwge1xuICAgIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIG1heC13aWR0aDogNjAlO1xuXG4gICAgJi50ZXh0LWxvYWRlZCB7XG4gICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgfVxuICB9XG5cbiAgJiArIC5kZXRhaWxzLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG5cbiAgICAmLnRleHQtbG9hZGVkIHtcbiAgICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuLmRldGFpbHMtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLmFjY29tbW9kYXRpb24tdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5sb2NhdGlvbi1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwubG9jYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLmFtZW5pdHktdGFnID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNTBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uZmVhdHVyZS1pdGVtID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNDAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uYXZhaWxhYmlsaXR5LWRlc2NyaXB0aW9uLFxuLmF2YWlsYWJpbGl0eS12YWx1ZSB7XG4gICYgPiBhcHAtdGV4dC1zaGVsbCB7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgbWluLXdpZHRoOiA4MCU7XG5cbiAgICAmLnRleHQtbG9hZGVkIHtcbiAgICAgIG1pbi13aWR0aDogMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjZDk0NTNhO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjE3LDY5LDU4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGV0YWlscy1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5kZXRhaWxzLXByaWNlIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG4uZGV0YWlscy1wcmljZSBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLmRldGFpbHMtYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcbn1cbi5kZXRhaWxzLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cbi5kZXRhaWxzLWFkZHJlc3MgKyAuZGV0YWlscy1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cbi5kZXRhaWxzLWFkZHJlc3MgKyAuZGV0YWlscy1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5kZXRhaWxzLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5hY2NvbW1vZGF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5hY2NvbW1vZGF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmxvY2F0aW9uLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG4ubG9jYXRpb24tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwubG9jYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLmFtZW5pdHktdGFnID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbi5hbWVuaXR5LXRhZyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5mZWF0dXJlLWl0ZW0gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4uZmVhdHVyZS1pdGVtID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5hdmFpbGFiaWxpdHktZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCxcbi5hdmFpbGFiaWxpdHktdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA4MCU7XG59XG4uYXZhaWxhYmlsaXR5LWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQsXG4uYXZhaWxhYmlsaXR5LXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateDetailsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-real-estate-details',
                templateUrl: './real-estate-details.page.html',
                styleUrls: [
                    './styles/real-estate-details.page.scss',
                    './styles/real-estate-details.shell.scss'
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { isShell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-shell']
        }] }); })();


/***/ }),

/***/ "./src/app/real-estate/details/real-estate-details.resolver.ts":
/*!*********************************************************************!*\
  !*** ./src/app/real-estate/details/real-estate-details.resolver.ts ***!
  \*********************************************************************/
/*! exports provided: RealEstateDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateDetailsResolver", function() { return RealEstateDetailsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _real_estate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../real-estate.service */ "./src/app/real-estate/real-estate.service.ts");




class RealEstateDetailsResolver {
    constructor(realEstateService) {
        this.realEstateService = realEstateService;
    }
    resolve() {
        const dataSource = this.realEstateService.getDetailsDataSource();
        const dataStore = this.realEstateService.getDetailsStore(dataSource);
        return dataStore;
    }
}
RealEstateDetailsResolver.ɵfac = function RealEstateDetailsResolver_Factory(t) { return new (t || RealEstateDetailsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_real_estate_service__WEBPACK_IMPORTED_MODULE_1__["RealEstateService"])); };
RealEstateDetailsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RealEstateDetailsResolver, factory: RealEstateDetailsResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateDetailsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _real_estate_service__WEBPACK_IMPORTED_MODULE_1__["RealEstateService"] }]; }, null); })();


/***/ }),

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
//# sourceMappingURL=real-estate-details-real-estate-details-module-es2015.js.map