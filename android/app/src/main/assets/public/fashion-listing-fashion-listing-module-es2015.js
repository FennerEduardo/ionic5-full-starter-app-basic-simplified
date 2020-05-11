(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fashion-listing-fashion-listing-module"],{

/***/ "./src/app/fashion/listing/fashion-listing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.module.ts ***!
  \***********************************************************/
/*! exports provided: FashionListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingPageModule", function() { return FashionListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fashion.service */ "./src/app/fashion/fashion.service.ts");
/* harmony import */ var _fashion_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fashion-listing.page */ "./src/app/fashion/listing/fashion-listing.page.ts");
/* harmony import */ var _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fashion-listing.resolver */ "./src/app/fashion/listing/fashion-listing.resolver.ts");












const routes = [
    {
        path: '',
        component: _fashion_listing_page__WEBPACK_IMPORTED_MODULE_8__["FashionListingPage"],
        resolve: {
            data: _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FashionListingResolver"]
        }
    }
];
class FashionListingPageModule {
}
FashionListingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FashionListingPageModule });
FashionListingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FashionListingPageModule_Factory(t) { return new (t || FashionListingPageModule)(); }, providers: [
        _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FashionListingResolver"],
        _fashion_service__WEBPACK_IMPORTED_MODULE_7__["FashionService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FashionListingPageModule, { declarations: [_fashion_listing_page__WEBPACK_IMPORTED_MODULE_8__["FashionListingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FashionListingPageModule, [{
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
                declarations: [_fashion_listing_page__WEBPACK_IMPORTED_MODULE_8__["FashionListingPage"]],
                providers: [
                    _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FashionListingResolver"],
                    _fashion_service__WEBPACK_IMPORTED_MODULE_7__["FashionService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/fashion/listing/fashion-listing.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.page.ts ***!
  \*********************************************************/
/*! exports provided: FashionListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingPage", function() { return FashionListingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resolver-helper */ "./src/app/utils/resolver-helper.ts");
/* harmony import */ var _fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fashion-listing.model */ "./src/app/fashion/listing/fashion-listing.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shell/image-shell/image-shell.component */ "./src/app/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");











function FashionListingPage_ng_container_7_ion_col_2_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, item_r2.price));
} }
const _c0 = function (a1) { return ["/app/categories/fashion/", a1]; };
const _c1 = function () { return { w: 3, h: 4 }; };
function FashionListingPage_ng_container_7_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-aspect-ratio", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-image-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FashionListingPage_ng_container_7_ion_col_2_ng_container_16_Template, 6, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, item_r2.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.image)("alt", "product image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, item_r2.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, item_r2.salePrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.price != "0");
} }
function FashionListingPage_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FashionListingPage_ng_container_7_ion_col_2_Template, 17, 15, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listing.items);
} }
class FashionListingPage {
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
            this.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__["ResolverHelper"].extractData(resolvedRouteData.data, _fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__["FashionListingModel"])
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
FashionListingPage.ɵfac = function FashionListingPage_Factory(t) { return new (t || FashionListingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
FashionListingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FashionListingPage, selectors: [["app-fashion-listing"]], hostVars: 2, hostBindings: function FashionListingPage_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
    } }, decls: 8, vars: 1, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "app/categories"], [1, "fashion-listing-content"], [4, "ngIf"], [1, "items-row"], ["size", "6", "class", "listing-item", 4, "ngFor", "ngForOf"], ["size", "6", 1, "listing-item"], [1, "item-image-wrapper"], [1, "image-anchor", 3, "routerLink"], [3, "ratio"], ["animation", "spinner", 1, "item-image", 3, "src", "alt"], [1, "item-body"], ["size", "12", 1, "main-info"], [1, "item-name"], [1, "name-anchor", 3, "routerLink"], ["animation", "gradient", 3, "data"], ["size", "12"], [1, "secondary-info"], [1, "price-col"], [1, "item-sale-price"], [1, "separator"], [1, "item-original-price"]], template: function FashionListingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fashion Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FashionListingPage_ng_container_7_Template, 3, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listing == null ? null : ctx.listing.items);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__["ImageShellComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-items-gutter: calc(var(--page-margin) / 2);\n  --page-color: #cb328f;\n}\n\n.fashion-listing-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.items-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0;\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%] {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]:nth-child(odd) {\n  padding-right: var(--page-items-gutter);\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]:nth-child(even) {\n  padding-left: var(--page-items-gutter);\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]   .item-image-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-light-shade);\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]   .item-image-wrapper[_ngcontent-%COMP%]   .image-anchor[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: 5px 5px 0px;\n  text-align: center;\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%] {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  display: block;\n  text-decoration: none;\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .secondary-info[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .secondary-info[_ngcontent-%COMP%]   .price-col[_ngcontent-%COMP%]:first-child {\n  padding-right: calc(var(--page-margin) / 2);\n  text-align: right;\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .secondary-info[_ngcontent-%COMP%]   .price-col[_ngcontent-%COMP%]:first-child:last-child {\n  text-align: center;\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .secondary-info[_ngcontent-%COMP%]   .price-col[_ngcontent-%COMP%]:last-child {\n  padding-left: calc(var(--page-margin) / 2);\n  text-align: left;\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .secondary-info[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  max-width: 0px;\n  border-right: solid 2px var(--ion-color-light-shade);\n  align-self: stretch;\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .secondary-info[_ngcontent-%COMP%]   .item-sale-price[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 400;\n  color: var(--page-color);\n  font-size: 16px;\n}\n\n.items-row[_ngcontent-%COMP%]   .listing-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .secondary-info[_ngcontent-%COMP%]   .item-original-price[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: line-through;\n  color: var(--ion-color-medium-shade);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9mYXNoaW9uL2xpc3Rpbmcvc3R5bGVzL2Zhc2hpb24tbGlzdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zhc2hpb24vbGlzdGluZy9zdHlsZXMvZmFzaGlvbi1saXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFFQSxpREFBQTtFQUNBLHFCQUFBO0FDRkY7O0FETUE7RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FDSEY7O0FETUE7RUFDRSw0QkFBQTtBQ0hGOztBREtFO0VBQ0UsMkNBQUE7QUNISjs7QURLSTtFQUNFLHVDQUFBO0FDSE47O0FETUk7RUFDRSxzQ0FBQTtBQ0pOOztBRE9JO0VBQ0UsOENBQUE7QUNMTjs7QURPTTtFQUNFLGNBQUE7QUNMUjs7QURTSTtFQUNFLDhCQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtBQ1JOOztBRFVNO0VBQ0UsMkNBQUE7QUNSUjs7QURVUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNUVjs7QURXVTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDVFo7O0FEY007RUFDRSxtQkFBQTtBQ1pSOztBRGVVO0VBQ0UsMkNBQUE7RUFDQSxpQkFBQTtBQ2JaOztBRGVZO0VBQ0Usa0JBQUE7QUNiZDs7QURpQlU7RUFDRSwwQ0FBQTtFQUNBLGdCQUFBO0FDZlo7O0FEbUJRO0VBQ0UsY0FBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7QUNqQlY7O0FEb0JRO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDbEJWOztBRHFCUTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtBQ25CViIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vbGlzdGluZy9zdHlsZXMvZmFzaGlvbi1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1pdGVtcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS1jb2xvcjogI2NiMzI4Zjtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uZmFzaGlvbi1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4uaXRlbXMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMDtcblxuICAubGlzdGluZy1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLWl0ZW1zLWd1dHRlcik7XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLWl0ZW1zLWd1dHRlcik7XG4gICAgfVxuXG4gICAgLml0ZW0taW1hZ2Utd3JhcHBlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gICAgICAuaW1hZ2UtYW5jaG9yIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tYm9keSB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmc6IDVweCA1cHggMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAubWFpbi1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgICAuaXRlbS1uYW1lIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgIC5uYW1lLWFuY2hvciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zZWNvbmRhcnktaW5mbyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLnByaWNlLWNvbCB7XG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2VwYXJhdG9yIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDBweDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1zYWxlLXByaWNlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1vcmlnaW5hbC1wcmljZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtaXRlbXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZ2UtY29sb3I6ICNjYjMyOGY7XG59XG5cbi5mYXNoaW9uLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG5cbi5pdGVtcy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbTpudGgtY2hpbGQob2RkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtaXRlbXMtZ3V0dGVyKTtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbTpudGgtY2hpbGQoZXZlbikge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtaXRlbXMtZ3V0dGVyKTtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1pbWFnZS13cmFwcGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1pbWFnZS13cmFwcGVyIC5pbWFnZS1hbmNob3Ige1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiA1cHggNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIC5pdGVtLWJvZHkgLm1haW4taW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSAubWFpbi1pbmZvIC5pdGVtLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5tYWluLWluZm8gLml0ZW0tbmFtZSAubmFtZS1hbmNob3Ige1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIC5pdGVtLWJvZHkgLnNlY29uZGFyeS1pbmZvIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5zZWNvbmRhcnktaW5mbyAucHJpY2UtY29sOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSAuc2Vjb25kYXJ5LWluZm8gLnByaWNlLWNvbDpmaXJzdC1jaGlsZDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIC5pdGVtLWJvZHkgLnNlY29uZGFyeS1pbmZvIC5wcmljZS1jb2w6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5zZWNvbmRhcnktaW5mbyAuc2VwYXJhdG9yIHtcbiAgbWF4LXdpZHRoOiAwcHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSAuc2Vjb25kYXJ5LWluZm8gLml0ZW0tc2FsZS1wcmljZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5zZWNvbmRhcnktaW5mbyAuaXRlbS1vcmlnaW5hbC1wcmljZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */", "[_nghost-%COMP%] {\n  --shell-color: #cb328f;\n  --shell-color-rgb: 203,50,143;\n}\n\n.is-shell[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\napp-image-shell.item-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 14px;\n}\n\n.item-sale-price[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n\n.item-original-price[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9mYXNoaW9uL2xpc3Rpbmcvc3R5bGVzL2Zhc2hpb24tbGlzdGluZy5zaGVsbC5zY3NzIiwic3JjL2FwcC9mYXNoaW9uL2xpc3Rpbmcvc3R5bGVzL2Zhc2hpb24tbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ0RGOztBRFNFO0VBQ0Usb0JBQUE7QUNOSjs7QURVQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUNQRjs7QURVQTtFQUNFLG9FQUFBO0VBQ0EsK0RBQUE7RUFDQSw4QkFBQTtBQ1BGOztBRFVBO0VBQ0Usb0VBQUE7RUFDQSwrREFBQTtFQUNBLDhCQUFBO0FDUEY7O0FEVUE7RUFDRSxvRUFBQTtFQUNBLCtEQUFBO0VBQ0EsOEJBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vbGlzdGluZy9zdHlsZXMvZmFzaGlvbi1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2NiMzI4ZjtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIwMyw1MCwxNDM7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxuICBhIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaXRlbS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjM1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uaXRlbS1zYWxlLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLW9yaWdpbmFsLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4iLCI6aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNjYjMyOGY7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMDMsNTAsMTQzO1xufVxuXG46aG9zdCguaXMtc2hlbGwpIGEge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLml0ZW0taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLml0ZW0tbmFtZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLml0ZW0tc2FsZS1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uaXRlbS1vcmlnaW5hbC1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FashionListingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fashion-listing',
                templateUrl: './fashion-listing.page.html',
                styleUrls: [
                    './styles/fashion-listing.page.scss',
                    './styles/fashion-listing.shell.scss'
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { isShell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-shell']
        }] }); })();


/***/ }),

/***/ "./src/app/fashion/listing/fashion-listing.resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.resolver.ts ***!
  \*************************************************************/
/*! exports provided: FashionListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingResolver", function() { return FashionListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fashion.service */ "./src/app/fashion/fashion.service.ts");




class FashionListingResolver {
    constructor(fashionService) {
        this.fashionService = fashionService;
    }
    resolve() {
        const dataSource = this.fashionService.getListingDataSource();
        const dataStore = this.fashionService.getListingStore(dataSource);
        return dataStore;
    }
}
FashionListingResolver.ɵfac = function FashionListingResolver_Factory(t) { return new (t || FashionListingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fashion_service__WEBPACK_IMPORTED_MODULE_1__["FashionService"])); };
FashionListingResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FashionListingResolver, factory: FashionListingResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FashionListingResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _fashion_service__WEBPACK_IMPORTED_MODULE_1__["FashionService"] }]; }, null); })();


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
//# sourceMappingURL=fashion-listing-fashion-listing-module-es2015.js.map