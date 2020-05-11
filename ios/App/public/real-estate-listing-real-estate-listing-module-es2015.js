(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-estate-listing-real-estate-listing-module"],{

/***/ "./src/app/real-estate/listing/real-estate-listing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/real-estate/listing/real-estate-listing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RealEstateListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateListingPageModule", function() { return RealEstateListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _real_estate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../real-estate.service */ "./src/app/real-estate/real-estate.service.ts");
/* harmony import */ var _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./real-estate-listing.page */ "./src/app/real-estate/listing/real-estate-listing.page.ts");
/* harmony import */ var _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./real-estate-listing.resolver */ "./src/app/real-estate/listing/real-estate-listing.resolver.ts");












const routes = [
    {
        path: '',
        component: _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_8__["RealEstateListingPage"],
        resolve: {
            data: _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["RealEstateListingResolver"]
        }
    }
];
class RealEstateListingPageModule {
}
RealEstateListingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RealEstateListingPageModule });
RealEstateListingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RealEstateListingPageModule_Factory(t) { return new (t || RealEstateListingPageModule)(); }, providers: [
        _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["RealEstateListingResolver"],
        _real_estate_service__WEBPACK_IMPORTED_MODULE_7__["RealEstateService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RealEstateListingPageModule, { declarations: [_real_estate_listing_page__WEBPACK_IMPORTED_MODULE_8__["RealEstateListingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateListingPageModule, [{
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
                    _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_8__["RealEstateListingPage"]
                ],
                providers: [
                    _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["RealEstateListingResolver"],
                    _real_estate_service__WEBPACK_IMPORTED_MODULE_7__["RealEstateService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/real-estate/listing/real-estate-listing.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/real-estate/listing/real-estate-listing.page.ts ***!
  \*****************************************************************/
/*! exports provided: RealEstateListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateListingPage", function() { return RealEstateListingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resolver-helper */ "./src/app/utils/resolver-helper.ts");
/* harmony import */ var _real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./real-estate-listing.model */ "./src/app/real-estate/listing/real-estate-listing.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");











function RealEstateListingPage_div_7_ion_icon_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 31);
} }
function RealEstateListingPage_div_7_ion_icon_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 32);
} }
function RealEstateListingPage_div_7_ion_col_45_ion_col_5_ion_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 41);
} if (rf & 2) {
    const amenity_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", amenity_r7.icon);
} }
function RealEstateListingPage_div_7_ion_col_45_ion_col_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RealEstateListingPage_div_7_ion_col_45_ion_col_5_ion_icon_1_Template, 1, 1, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const amenity_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", amenity_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", amenity_r7.name);
} }
function RealEstateListingPage_div_7_ion_col_45_ion_col_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", item_r1.amenities.length - 4, "");
} }
function RealEstateListingPage_div_7_ion_col_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Amenities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RealEstateListingPage_div_7_ion_col_45_ion_col_5_Template, 4, 2, "ion-col", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RealEstateListingPage_div_7_ion_col_45_ion_col_6_Template, 3, 1, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.amenities.slice(0, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.i == 3 && item_r1.amenities.length > 4);
} }
const _c0 = function (a1) { return ["/app/categories/real-estate/", a1]; };
const _c1 = function () { return { w: 365, h: 125 }; };
function RealEstateListingPage_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-image-shell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-aspect-ratio", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RealEstateListingPage_div_7_ion_icon_17_Template, 1, 0, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RealEstateListingPage_div_7_ion_icon_18_Template, 1, 0, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Guests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Bedrooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Bathrooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Patios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RealEstateListingPage_div_7_ion_col_45_Template, 7, 2, "ion-col", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, item_r1.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", item_r1.picture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.liked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.liked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.accommodations == null ? null : item_r1.accommodations.guests);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.accommodations == null ? null : item_r1.accommodations.bedrooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.accommodations == null ? null : item_r1.accommodations.bathrooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.accommodations == null ? null : item_r1.accommodations.patios);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.amenities);
} }
class RealEstateListingPage {
    constructor(route) {
        this.route = route;
    }
    get isShell() {
        return (this.listing && this.listing.isShell) ? true : false;
    }
    ngOnInit() {
        // On init, the route subscription is the active subscription
        this.subscriptions = this.route.data
            .subscribe((resolvedRouteData) => {
            // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
            this.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__["ResolverHelper"].extractData(resolvedRouteData.data, _real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__["RealEstateListingModel"])
                .subscribe((state) => {
                this.listing = state;
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
RealEstateListingPage.ɵfac = function RealEstateListingPage_Factory(t) { return new (t || RealEstateListingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
RealEstateListingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RealEstateListingPage, selectors: [["app-real-estate-listing"]], hostVars: 2, hostBindings: function RealEstateListingPage_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
    } }, decls: 8, vars: 1, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "app/categories"], [1, "real-estate-listing-content"], ["class", "listing-item", 4, "ngFor", "ngForOf"], [1, "listing-item"], [1, "image-row"], ["size", "12"], [1, "image-anchor", 3, "routerLink"], ["animation", "spinner", 1, "item-picture", 3, "display", "src"], [3, "ratio"], [1, "description-row"], ["size", "12", 1, "details-col"], [1, "details-wrapper"], [1, "item-price"], [1, "price-icon"], [3, "data"], [1, "item-address"], ["size", "2", 1, "bookmark-col"], ["class", "like-icon", "name", "heart", 4, "ngIf"], ["class", "like-icon", "name", "heart-outline", 4, "ngIf"], ["size", "12", 1, "accommodations-col"], [1, "accommodations-wrapper"], [1, "item-accommodation"], ["src", "./assets/custom-icons/real-estate/guests.svg", 1, "accommodation-icon"], [1, "accommodation-property"], [1, "accommodation-value"], ["src", "./assets/custom-icons/real-estate/bedrooms.svg", 1, "accommodation-icon"], ["src", "./assets/custom-icons/real-estate/bathroom.svg", 1, "accommodation-icon"], ["src", "./assets/custom-icons/real-estate/patio.svg", 1, "accommodation-icon"], ["size", "12", "class", "amenities-col", 4, "ngIf"], ["name", "heart", 1, "like-icon"], ["name", "heart-outline", 1, "like-icon"], ["size", "12", 1, "amenities-col"], [1, "amenities-title"], [1, "amenities-wrapper"], ["class", "item-amenity", "size", "4", 4, "ngFor", "ngForOf"], ["class", "has-more-amenities", 4, "ngIf"], ["size", "4", 1, "item-amenity"], ["class", "amenity-icon", 3, "src", 4, "ngIf"], [1, "amenity-value"], [1, "amenity-icon", 3, "src"], [1, "has-more-amenities"], [1, "amenities-count"]], template: function RealEstateListingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Real Estate Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RealEstateListingPage_div_7_Template, 46, 16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listing.items);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__["AspectRatioComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background);\n  --page-amenity-vertical-gutter: 6px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-color: #d9453a;\n}\n\n.real-estate-listing-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .image-anchor[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding-bottom: var(--page-margin);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) 0px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  display: flex;\n  align-items: center;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%]   .price-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .bookmark-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .bookmark-col[_ngcontent-%COMP%]   .like-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--page-color);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%] {\n  padding-top: calc(var(--page-margin));\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]    + .item-accommodation[_ngcontent-%COMP%] {\n  padding-left: calc((var(--page-margin) / 2) * 3);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-property[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-value[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 400;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n  margin-top: 4px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 30px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) calc(var(--page-margin) / 2);\n  background: var(--app-background-shade);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-title[_ngcontent-%COMP%] {\n  margin: var(--page-margin) 0px calc(var(--page-margin) / 2);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--ion-color-medium-shade);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%] {\n  margin: 0px calc(var(--page-amenity-horizontal-gutter) * -1);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%] {\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]   .amenity-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 30px;\n  flex-shrink: 0;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]   .amenity-value[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 300;\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n  margin-left: calc(var(--page-amenity-horizontal-gutter) * 2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9yZWFsLWVzdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLWVzdGF0ZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVhbC1lc3RhdGUvbGlzdGluZy9zdHlsZXMvcmVhbC1lc3RhdGUtbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQ0FBQTtFQUNBLHdDQUFBO0VBRUEsbUNBQUE7RUFDQSxxQ0FBQTtFQUVBLHFCQUFBO0FDSEY7O0FET0E7RUFDRSxvQ0FBQTtBQ0pGOztBRFFFO0VBQ0UsOEJBQUE7QUNMSjs7QURPSTtFQUNFLGNBQUE7QUNMTjs7QURTRTtFQUNFLDhCQUFBO0VBRUEsa0NBQUE7QUNSSjs7QURVSTtFQUNFLDREQUFBO0FDUk47O0FEVU07RUFDRSw4QkFBQTtBQ1JSOztBRFVRO0VBQ0UsbUJBQUE7RUFDSCxnQkFBQTtFQUNHLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDUlY7O0FEVVU7RUFDRSxpQkFBQTtBQ1JaOztBRFlRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ1ZWOztBRGFRO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDWFY7O0FEYVU7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUNYWjs7QURpQkk7RUFDRSxrREFBQTtBQ2ZOOztBRGlCTTtFQUNFLHFDQUFBO0FDZlI7O0FEa0JNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUNoQlI7O0FEa0JRO0VBQ0UsZ0RBQUE7QUNoQlY7O0FEbUJRO0VBQ0UsZUFBQTtFQUNBLG1DQUFBO0FDakJWOztBRG9CUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FDbEJWOztBRHFCUTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDbkJWOztBRHNCUTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQ3BCVjs7QUR5Qkk7RUFDRSw0REFBQTtFQUNBLHVDQUFBO0FDdkJOOztBRHlCTTtFQUNFLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQ3ZCUjs7QUQwQk07RUFDRSw0REFBQTtBQ3hCUjs7QUQwQlE7RUFDRSxrRkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDeEJWOztBRDBCVTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUN4Qlo7O0FEMkJVO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsNERBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUN6QloiLCJmaWxlIjoic3JjL2FwcC9yZWFsLWVzdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLWVzdGF0ZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXI6IDZweDtcbiAgLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXI6IDRweDtcblxuICAtLXBhZ2UtY29sb3I6ICNkOTQ1M2E7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLnJlYWwtZXN0YXRlLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmxpc3RpbmctaXRlbSB7XG4gIC5pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIC5pbWFnZS1hbmNob3Ige1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLmRlc2NyaXB0aW9uLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5kZXRhaWxzLWNvbCB7XG4gICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG5cbiAgICAgIC5kZXRhaWxzLXdyYXBwZXIge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLml0ZW0tcHJpY2Uge1xuICAgICAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gICAgXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgLnByaWNlLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tYWRkcmVzcyB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvb2ttYXJrLWNvbCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgLmxpa2UtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjY29tbW9kYXRpb25zLWNvbCB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikpO1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1hY2NvbW1vZGF0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgICAmICsgLml0ZW0tYWNjb21tb2RhdGlvbiB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAqIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29tbW9kYXRpb24tcHJvcGVydHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvbW1vZGF0aW9uLXZhbHVlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29tbW9kYXRpb24tbmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvbW1vZGF0aW9uLWljb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hbWVuaXRpZXMtY29sIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAgICAgLmFtZW5pdGllcy10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgIH1cblxuICAgICAgLmFtZW5pdGllcy13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpICogLTEpO1xuXG4gICAgICAgIC5pdGVtLWFtZW5pdHkge1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcik7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgLmFtZW5pdHktaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hbWVuaXR5LXZhbHVlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKSAqIDIpO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcjogNnB4O1xuICAtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcjogNHB4O1xuICAtLXBhZ2UtY29sb3I6ICNkOTQ1M2E7XG59XG5cbi5yZWFsLWVzdGF0ZS1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyAuaW1hZ2UtYW5jaG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtY29sIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIC5pdGVtLXByaWNlIHtcbiAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIC5pdGVtLXByaWNlIC5wcmljZS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtY29sIC5kZXRhaWxzLXdyYXBwZXIgLml0ZW0tYWRkcmVzcyB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIC5ib29rbWFyay1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIC5ib29rbWFyay1jb2wgLmxpa2UtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hY2NvbW1vZGF0aW9ucy1jb2wge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5pdGVtLWFjY29tbW9kYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hY2NvbW1vZGF0aW9ucy1jb2wgLml0ZW0tYWNjb21tb2RhdGlvbiArIC5pdGVtLWFjY29tbW9kYXRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpICogMyk7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFjY29tbW9kYXRpb25zLWNvbCAuaXRlbS1hY2NvbW1vZGF0aW9uIC5hY2NvbW1vZGF0aW9uLXByb3BlcnR5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5pdGVtLWFjY29tbW9kYXRpb24gLmFjY29tbW9kYXRpb24tdmFsdWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5pdGVtLWFjY29tbW9kYXRpb24gLmFjY29tbW9kYXRpb24tbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5pdGVtLWFjY29tbW9kYXRpb24gLmFjY29tbW9kYXRpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFtZW5pdGllcy1jb2wge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYW1lbml0aWVzLWNvbCAuYW1lbml0aWVzLXRpdGxlIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hbWVuaXRpZXMtY29sIC5hbWVuaXRpZXMtd3JhcHBlciB7XG4gIG1hcmdpbjogMHB4IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKSAqIC0xKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYW1lbml0aWVzLWNvbCAuYW1lbml0aWVzLXdyYXBwZXIgLml0ZW0tYW1lbml0eSB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hbWVuaXRpZXMtY29sIC5hbWVuaXRpZXMtd3JhcHBlciAuaXRlbS1hbWVuaXR5IC5hbWVuaXR5LWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYW1lbml0aWVzLWNvbCAuYW1lbml0aWVzLXdyYXBwZXIgLml0ZW0tYW1lbml0eSAuYW1lbml0eS12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpICogMik7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */", "[_nghost-%COMP%] {\n  --shell-color: #d9453a;\n  --shell-color-rgb: 217,69,58;\n}\n\napp-image-shell.item-picture[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-price[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  min-width: 50px;\n  max-width: 100px;\n}\n\n.item-price[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.item-address[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.item-address[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.accommodation-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.accommodation-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.amenity-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 12px;\n  min-width: 50px;\n}\n\n.amenity-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9yZWFsLWVzdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLWVzdGF0ZS1saXN0aW5nLnNoZWxsLnNjc3MiLCJzcmMvYXBwL3JlYWwtZXN0YXRlL2xpc3Rpbmcvc3R5bGVzL3JlYWwtZXN0YXRlLWxpc3Rpbmcuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURXQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUNSRjs7QURXQTtFQUNFLDBEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUkY7O0FEVUU7RUFDRSxrQkFBQTtBQ1JKOztBRFlBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNURjs7QURXRTtFQUNFLGtCQUFBO0FDVEo7O0FEYUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1ZGOztBRFlFO0VBQ0UsY0FBQTtBQ1ZKOztBRGNBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNYRjs7QURhRTtFQUNFLGNBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL3JlYWwtZXN0YXRlL2xpc3Rpbmcvc3R5bGVzL3JlYWwtZXN0YXRlLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjZDk0NTNhO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjE3LDY5LDU4O1xufVxuXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxuOmhvc3QoLmlzLXNoZWxsKSB7XG4gIC8vIGlvbi1jb250ZW50IHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLml0ZW0tcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uaXRlbS1wcmljZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmFjY29tbW9kYXRpb24tdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5hbWVuaXR5LXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1pbi13aWR0aDogNTBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjZDk0NTNhO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjE3LDY5LDU4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaXRlbS1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLXByaWNlIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuLml0ZW0tcHJpY2UgYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5hY2NvbW1vZGF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5hY2NvbW1vZGF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmFtZW5pdHktdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuLmFtZW5pdHktdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateListingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-real-estate-listing',
                templateUrl: './real-estate-listing.page.html',
                styleUrls: [
                    './styles/real-estate-listing.page.scss',
                    './styles/real-estate-listing.shell.scss'
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { isShell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-shell']
        }] }); })();


/***/ }),

/***/ "./src/app/real-estate/listing/real-estate-listing.resolver.ts":
/*!*********************************************************************!*\
  !*** ./src/app/real-estate/listing/real-estate-listing.resolver.ts ***!
  \*********************************************************************/
/*! exports provided: RealEstateListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateListingResolver", function() { return RealEstateListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _real_estate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../real-estate.service */ "./src/app/real-estate/real-estate.service.ts");




class RealEstateListingResolver {
    constructor(RealEstateService) {
        this.RealEstateService = RealEstateService;
    }
    resolve() {
        const dataSource = this.RealEstateService.getListingDataSource();
        const dataStore = this.RealEstateService.getListingStore(dataSource);
        return dataStore;
    }
}
RealEstateListingResolver.ɵfac = function RealEstateListingResolver_Factory(t) { return new (t || RealEstateListingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_real_estate_service__WEBPACK_IMPORTED_MODULE_1__["RealEstateService"])); };
RealEstateListingResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RealEstateListingResolver, factory: RealEstateListingResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateListingResolver, [{
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
//# sourceMappingURL=real-estate-listing-real-estate-listing-module-es2015.js.map