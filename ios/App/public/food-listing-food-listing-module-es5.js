function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-listing-food-listing-module"], {
  /***/
  "./src/app/food/listing/food-listing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/food/listing/food-listing.module.ts ***!
    \*****************************************************/

  /*! exports provided: FoodListingPageModule */

  /***/
  function srcAppFoodListingFoodListingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodListingPageModule", function () {
      return FoodListingPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _food_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../food.service */
    "./src/app/food/food.service.ts");
    /* harmony import */


    var _food_listing_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./food-listing.page */
    "./src/app/food/listing/food-listing.page.ts");
    /* harmony import */


    var _food_listing_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./food-listing.resolver */
    "./src/app/food/listing/food-listing.resolver.ts");

    var routes = [{
      path: '',
      component: _food_listing_page__WEBPACK_IMPORTED_MODULE_9__["FoodListingPage"],
      resolve: {
        data: _food_listing_resolver__WEBPACK_IMPORTED_MODULE_10__["FoodListingResolver"]
      }
    }];

    var FoodListingPageModule = function FoodListingPageModule() {
      _classCallCheck(this, FoodListingPageModule);
    };

    FoodListingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FoodListingPageModule
    });
    FoodListingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FoodListingPageModule_Factory(t) {
        return new (t || FoodListingPageModule)();
      },
      providers: [_food_listing_resolver__WEBPACK_IMPORTED_MODULE_10__["FoodListingResolver"], _food_service__WEBPACK_IMPORTED_MODULE_8__["FoodService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FoodListingPageModule, {
        declarations: [_food_listing_page__WEBPACK_IMPORTED_MODULE_9__["FoodListingPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodListingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          declarations: [_food_listing_page__WEBPACK_IMPORTED_MODULE_9__["FoodListingPage"]],
          providers: [_food_listing_resolver__WEBPACK_IMPORTED_MODULE_10__["FoodListingResolver"], _food_service__WEBPACK_IMPORTED_MODULE_8__["FoodService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/food/listing/food-listing.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/food/listing/food-listing.page.ts ***!
    \***************************************************/

  /*! exports provided: FoodListingPage */

  /***/
  function srcAppFoodListingFoodListingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodListingPage", function () {
      return FoodListingPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/resolver-helper */
    "./src/app/utils/resolver-helper.ts");
    /* harmony import */


    var _food_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./food-listing.model */
    "./src/app/food/listing/food-listing.model.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shell/image-shell/image-shell.component */
    "./src/app/shell/image-shell/image-shell.component.ts");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shell/aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
    /* harmony import */


    var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shell/text-shell/text-shell.component */
    "./src/app/shell/text-shell/text-shell.component.ts");
    /* harmony import */


    var angular_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-pipes */
    "./node_modules/angular-pipes/__ivy_ngcc__/fesm2015/angular-pipes.js");

    function FoodListingPage_ng_container_7_div_1_ion_col_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-shell", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", tag_r7);
      }
    }

    function FoodListingPage_ng_container_7_div_1_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FoodListingPage_ng_container_7_div_1_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/app/categories/food/", a1];
    };

    function FoodListingPage_ng_container_7_div_1_ion_col_26_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r2.slug));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.pictures.length - 5);
      }
    }

    var _c1 = function _c1() {
      return {
        w: 1,
        h: 1
      };
    };

    function FoodListingPage_ng_container_7_div_1_ion_col_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-aspect-ratio", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-image-shell", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FoodListingPage_ng_container_7_div_1_ion_col_26_a_3_Template, 3, 4, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var picture_r10 = ctx.$implicit;
        var i_r11 = ctx.index;

        var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r10)("alt", "food image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r11 == 4 && item_r2.pictures.length > 5);
      }
    }

    var _c2 = function _c2() {
      return {
        w: 35,
        h: 15
      };
    };

    var _c3 = function _c3() {
      return {
        w: 20,
        h: 7
      };
    };

    var _c4 = function _c4() {
      return [];
    };

    function FoodListingPage_ng_container_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-image-shell", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-aspect-ratio", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-aspect-ratio", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-image-shell", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-row", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-text-shell", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-text-shell", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-row", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FoodListingPage_ng_container_7_div_1_ion_col_17_Template, 3, 1, "ion-col", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-col", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "floor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-text-shell", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FoodListingPage_ng_container_7_div_1_span_23_Template, 2, 0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FoodListingPage_ng_container_7_div_1_span_24_Template, 2, 0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-row", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FoodListingPage_ng_container_7_div_1_ion_col_26_Template, 4, 5, "ion-col", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, item_r2.slug));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", item_r2.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, item_r2.slug));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.tags);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("ratingBase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 15, item_r2.rating));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2.rating);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c4).constructor(item_r2.priceRange));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c4).constructor(5 - (item_r2.priceRange || 1)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.pictures.slice(0, 5));
      }
    }

    function FoodListingPage_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FoodListingPage_ng_container_7_div_1_Template, 27, 25, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listing.items);
      }
    }

    var FoodListingPage = /*#__PURE__*/function () {
      function FoodListingPage(route) {
        _classCallCheck(this, FoodListingPage);

        this.route = route;
      }

      _createClass(FoodListingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // On init, the route subscription is the active subscription
          this.subscriptions = this.route.data.subscribe(function (resolvedRouteData) {
            // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
            _this.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__["ResolverHelper"].extractData(resolvedRouteData.data, _food_listing_model__WEBPACK_IMPORTED_MODULE_3__["FoodListingModel"]).subscribe(function (state) {
              _this.listing = state;
            }, function (error) {});
          }, function (error) {});
        } // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
        // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions

      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          // console.log('TravelListingPage [ionViewWillLeave]');
          this.subscriptions.unsubscribe();
        }
      }, {
        key: "isShell",
        get: function get() {
          return this.listing && this.listing.isShell ? true : false;
        }
      }]);

      return FoodListingPage;
    }();

    FoodListingPage.ɵfac = function FoodListingPage_Factory(t) {
      return new (t || FoodListingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    FoodListingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FoodListingPage,
      selectors: [["app-food-listing"]],
      hostVars: 2,
      hostBindings: function FoodListingPage_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
        }
      },
      decls: 8,
      vars: 1,
      consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "app/categories"], [1, "food-listing-content"], [4, "ngIf"], ["class", "listing-item", 4, "ngFor", "ngForOf"], [1, "listing-item"], [1, "cover-wrapper"], [1, "cover-anchor", 3, "routerLink"], ["animation", "spinner", 1, "cover-image", "add-overlay", 3, "display", "src"], [3, "ratio"], [1, "cover-icon-wrapper"], [1, "item-icon", 3, "src"], [1, "info-row"], [1, "description-col"], [1, "description-wrapper"], [1, "item-name"], [1, "name-anchor", 3, "routerLink"], [3, "data"], [1, "item-address"], [1, "item-tags"], ["class", "tag-wrapper", 4, "ngFor", "ngForOf"], ["size", "2", 1, "stats-col"], [1, "item-rating"], [1, "item-price-range"], ["class", "price", 4, "ngFor", "ngForOf"], ["class", "no-price", 4, "ngFor", "ngForOf"], [1, "pictures-row"], ["class", "picture-wrapper", "size", "2", 4, "ngFor", "ngForOf"], [1, "tag-wrapper"], [1, "item-tag"], [1, "price"], [1, "no-price"], ["size", "2", 1, "picture-wrapper"], [1, "picture-image", 3, "src", "alt"], ["class", "has-more-pictures", 3, "routerLink", 4, "ngIf"], [1, "has-more-pictures", 3, "routerLink"], [1, "pictures-count"]],
      template: function FoodListingPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Food Listing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FoodListingPage_ng_container_7_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listing == null ? null : ctx.listing.items);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__["AspectRatioComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"]],
      pipes: [angular_pipes__WEBPACK_IMPORTED_MODULE_9__["FloorPipe"]],
      styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-pictures-gutter: calc(var(--page-margin) / 4);\n  --page-tags-gutter: 4px;\n  --page-rating-5-color: #7ce198;\n  --page-rating-4-color: #a8e07c;\n  --page-rating-3-color: #cee07c;\n  --page-rating-2-color: #e0c77c;\n  --page-rating-1-color: #e07c7c;\n  --page-color: #ebbb00;\n  --page-color-rgb: 235,187,0;\n}\n\n.food-listing-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.listing-item[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--ion-color-medium-tint);\n  margin-bottom: calc(var(--page-margin) * 2);\n  padding-bottom: var(--page-margin);\n}\n\n.listing-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: var(--page-margin);\n}\n\n.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]   .cover-anchor[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]   .cover-icon-wrapper[_ngcontent-%COMP%] {\n  margin: 0px 20%;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: 0px;\n  margin: 0px calc(var(--page-pictures-gutter) * -1);\n  padding-bottom: var(--page-margin);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]::before, .listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 0 0 var(--page-pictures-gutter);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  justify-content: space-between;\n  flex-direction: column;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-dark-tint);\n  font-size: 20px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: 5px;\n  color: var(--ion-color-medium-tint);\n  font-size: 12px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%] {\n  padding-right: var(--page-tags-gutter);\n  flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]:last-child {\n  padding-right: 0px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .item-tag[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-light-shade);\n  padding: calc(var(--page-tags-gutter) / 2) var(--page-tags-gutter);\n  font-size: 10px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%] {\n  padding-left: calc(var(--page-margin) / 2);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[_ngcontent-%COMP%] {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase=\"1\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-1-color);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase=\"2\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-2-color);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase=\"3\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-3-color);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase=\"4\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-4-color);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase=\"5\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-5-color);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 12px;\n  letter-spacing: 1px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: var(--page-color);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]   .no-price[_ngcontent-%COMP%] {\n  color: rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n\n.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%] {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: 0px;\n  margin: 0px calc(var(--page-pictures-gutter) * -1);\n}\n\n.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-pictures-gutter);\n}\n\n.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0px var(--page-pictures-gutter);\n  background-color: rgba(var(--page-color-rgb), 0.7);\n  border-radius: var(--app-narrow-radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  z-index: 2;\n}\n\n.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  font-weight: 600;\n}\n\n.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%]::before {\n  content: \"+\";\n  font-size: 26px;\n  color: var(--ion-color-lightest);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9mb29kL2xpc3Rpbmcvc3R5bGVzL2Zvb2QtbGlzdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2QvbGlzdGluZy9zdHlsZXMvZm9vZC1saXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFFQSxvREFBQTtFQUNBLHVCQUFBO0VBRUEsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUVBLHFCQUFBO0VBQ0EsMkJBQUE7QUNKRjs7QURRQTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUNMRjs7QURRQTtFQUNFLHFEQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQ0FBQTtBQ0xGOztBRE9FO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFFFO0VBQ0UsaUNBQUE7QUNOSjs7QURRSTtFQUNFLGNBQUE7QUNOTjs7QURTSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNQTjs7QURXRTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7RUFFQSxrREFBQTtFQUNGLGtDQUFBO0FDVkY7O0FEYUk7RUFFRSxXQUFBO0VBQ0EscUNBQUE7QUNaTjs7QURnQk07RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ2RSOztBRGlCTTtFQUNFLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUNmUjs7QURpQlE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNmVjs7QURtQk07RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQ2pCUjs7QURvQk07RUFDRSxlQUFBO0FDbEJSOztBRG9CUTtFQUNFLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ2xCVjs7QURvQlU7RUFDRSxrQkFBQTtBQ2xCWjs7QURzQlE7RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDTCw4Q0FBQTtFQUNBLGtFQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDcEJMOztBRHlCSTtFQUNFLDBDQUFBO0FDdkJOOztBRHlCTTtFQUVFLG1EQUFBO0VBQ0osZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ3hCTDs7QUQwQkk7RUFDQyw0Q0FBQTtBQ3hCTDs7QUQwQkk7RUFDQyw0Q0FBQTtBQ3hCTDs7QUQwQkk7RUFDQyw0Q0FBQTtBQ3hCTDs7QUQwQkk7RUFDQyw0Q0FBQTtBQ3hCTDs7QUQwQkk7RUFDQyw0Q0FBQTtBQ3hCTDs7QUQ0Qk07RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQzFCUjs7QUQ0QlE7RUFDRSx3QkFBQTtBQzFCVjs7QUQ2QlE7RUFDRSxrREFBQTtBQzNCVjs7QURpQ0U7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsa0RBQUE7QUNoQ0o7O0FEa0NJO0VBQ0Usd0NBQUE7QUNoQ047O0FEa0NNO0VBQ0Ysa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUksdUNBQUE7RUFDSixrREFBQTtFQUNJLHVDQUFBO0VBQ0osYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QUNqQ1I7O0FEbUNJO0VBQ0MsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUNqQ0w7O0FEbUNLO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FDakNOIiwiZmlsZSI6InNyYy9hcHAvZm9vZC9saXN0aW5nL3N0eWxlcy9mb29kLWxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgLS1wYWdlLXBpY3R1cmVzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA0cHg7XG5cbiAgLS1wYWdlLXJhdGluZy01LWNvbG9yOiAjN2NlMTk4O1xuICAtLXBhZ2UtcmF0aW5nLTQtY29sb3I6ICNhOGUwN2M7XG4gIC0tcGFnZS1yYXRpbmctMy1jb2xvcjogI2NlZTA3YztcbiAgLS1wYWdlLXJhdGluZy0yLWNvbG9yOiAjZTBjNzdjO1xuICAtLXBhZ2UtcmF0aW5nLTEtY29sb3I6ICNlMDdjN2M7XG5cbiAgLS1wYWdlLWNvbG9yOiAjZWJiYjAwO1xuICAtLXBhZ2UtY29sb3ItcmdiOiAyMzUsMTg3LDA7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmZvb2QtbGlzdGluZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cblxuLmxpc3RpbmctaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICY6bGFzdC1jaGlsZCB7XG5cdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcblx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cdH1cblxuICAuY292ZXItd3JhcHBlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLmNvdmVyLWFuY2hvciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuY292ZXItaWNvbi13cmFwcGVyIHtcbiAgICAgIG1hcmdpbjogMHB4IDIwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmluZm8tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIG1hcmdpbjogMHB4IGNhbGModmFyKC0tcGFnZS1waWN0dXJlcy1ndXR0ZXIpICogLTEpO1xuXHRcdHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAvLyBUbyBjb21wZW5zYXRlIG5lZ2F0aXZlIHNpZGUgbWFyZ2lucyBvZiAucGljdHVyZXMtcm93IChzaWJsaW5nIG9mIC5pbmZvLXJvdylcbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBmbGV4OiAwIDAgdmFyKC0tcGFnZS1waWN0dXJlcy1ndXR0ZXIpO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbi1jb2wge1xuICAgICAgLmRlc2NyaXB0aW9uLXdyYXBwZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cblxuICAgICAgLml0ZW0tbmFtZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgICAgICAubmFtZS1hbmNob3Ige1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaXRlbS1hZGRyZXNzIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgLml0ZW0tdGFncyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcblxuICAgICAgICAudGFnLXdyYXBwZXIge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS10YWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXHRcdFx0XHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS10YWdzLWd1dHRlcikgLyAyKSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcblx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RhdHMtY29sIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgLml0ZW0tcmF0aW5nIHtcbiAgICAgICAgLy8gRGVmYXVsdCBiYWNrZ3JvdW5kXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG5cdFx0XHRcdHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblx0XHRcdFx0cGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblx0XHRcdCAgZm9udC1zaXplOiAxMnB4O1xuXHRcdFx0ICBmb250LXdlaWdodDogNjAwO1xuXHRcdFx0ICB3aWR0aDogMTAwJTtcblx0XHRcdCAgZGlzcGxheTogYmxvY2s7XG5cdFx0XHQgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0xLWNvbG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCIyXCJdIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0yLWNvbG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCIzXCJdIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0zLWNvbG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCI0XCJdIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy00LWNvbG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCI1XCJdIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy01LWNvbG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG4gICAgICAuaXRlbS1wcmljZS1yYW5nZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAubm8tcHJpY2Uge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAuNDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXHR9XG5cbiAgLnBpY3R1cmVzLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIC0xKTtcblxuICAgIC5waWN0dXJlLXdyYXBwZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKTtcblxuICAgICAgLmhhcy1tb3JlLXBpY3R1cmVzIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDBweDtcblx0XHRcdFx0Ym90dG9tOiAwcHg7XG5cdFx0XHRcdGxlZnQ6IDBweDtcblx0XHRcdFx0cmlnaHQ6IDBweDtcbiAgICAgICAgLy8gVG8gY29tcGVuc2F0ZSB0aGUgLnBpY3R1cmUtd3JhcHBlciBwYWRkaW5nXG4gICAgICAgIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKTtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC43MCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgei1pbmRleDogMjtcblxuXHRcdFx0XHQucGljdHVyZXMtY291bnQge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXG5cdFx0XHRcdFx0Jjo6YmVmb3JlIHtcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcrJztcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjZweDtcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLXBpY3R1cmVzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA0cHg7XG4gIC0tcGFnZS1yYXRpbmctNS1jb2xvcjogIzdjZTE5ODtcbiAgLS1wYWdlLXJhdGluZy00LWNvbG9yOiAjYThlMDdjO1xuICAtLXBhZ2UtcmF0aW5nLTMtY29sb3I6ICNjZWUwN2M7XG4gIC0tcGFnZS1yYXRpbmctMi1jb2xvcjogI2UwYzc3YztcbiAgLS1wYWdlLXJhdGluZy0xLWNvbG9yOiAjZTA3YzdjO1xuICAtLXBhZ2UtY29sb3I6ICNlYmJiMDA7XG4gIC0tcGFnZS1jb2xvci1yZ2I6IDIzNSwxODcsMDtcbn1cblxuLmZvb2QtbGlzdGluZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cblxuLmxpc3RpbmctaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmxpc3RpbmctaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmxpc3RpbmctaXRlbSAuY292ZXItd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmNvdmVyLXdyYXBwZXIgLmNvdmVyLWFuY2hvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxpc3RpbmctaXRlbSAuY292ZXItd3JhcHBlciAuY292ZXItaWNvbi13cmFwcGVyIHtcbiAgbWFyZ2luOiAwcHggMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4IGNhbGModmFyKC0tcGFnZS1waWN0dXJlcy1ndXR0ZXIpICogLTEpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3c6OmJlZm9yZSwgLmxpc3RpbmctaXRlbSAuaW5mby1yb3c6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZmxleDogMCAwIHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5kZXNjcmlwdGlvbi1jb2wgLmRlc2NyaXB0aW9uLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5kZXNjcmlwdGlvbi1jb2wgLml0ZW0tbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5kZXNjcmlwdGlvbi1jb2wgLml0ZW0tbmFtZSAubmFtZS1hbmNob3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLmRlc2NyaXB0aW9uLWNvbCAuaXRlbS1hZGRyZXNzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5kZXNjcmlwdGlvbi1jb2wgLml0ZW0tdGFncyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5kZXNjcmlwdGlvbi1jb2wgLml0ZW0tdGFncyAudGFnLXdyYXBwZXIge1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgZmxleC1ncm93OiAwO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLmRlc2NyaXB0aW9uLWNvbCAuaXRlbS10YWdzIC50YWctd3JhcHBlcjpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLmRlc2NyaXB0aW9uLWNvbCAuaXRlbS10YWdzIC5pdGVtLXRhZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS10YWdzLWd1dHRlcikgLyAyKSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5zdGF0cy1jb2wge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuc3RhdHMtY29sIC5pdGVtLXJhdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAwLjM1KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuc3RhdHMtY29sIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiMVwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLnN0YXRzLWNvbCAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjJcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0yLWNvbG9yKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5zdGF0cy1jb2wgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIzXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMy1jb2xvcik7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuc3RhdHMtY29sIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiNFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTQtY29sb3IpO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLnN0YXRzLWNvbCAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjVcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy01LWNvbG9yKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5zdGF0cy1jb2wgLml0ZW0tcHJpY2UtcmFuZ2Uge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLnN0YXRzLWNvbCAuaXRlbS1wcmljZS1yYW5nZSAucHJpY2Uge1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuc3RhdHMtY29sIC5pdGVtLXByaWNlLXJhbmdlIC5uby1wcmljZSB7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAwLjQpO1xufVxuLmxpc3RpbmctaXRlbSAucGljdHVyZXMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIC0xKTtcbn1cbi5saXN0aW5nLWl0ZW0gLnBpY3R1cmVzLXJvdyAucGljdHVyZS13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKTtcbn1cbi5saXN0aW5nLWl0ZW0gLnBpY3R1cmVzLXJvdyAucGljdHVyZS13cmFwcGVyIC5oYXMtbW9yZS1waWN0dXJlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDAuNyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgei1pbmRleDogMjtcbn1cbi5saXN0aW5nLWl0ZW0gLnBpY3R1cmVzLXJvdyAucGljdHVyZS13cmFwcGVyIC5oYXMtbW9yZS1waWN0dXJlcyAucGljdHVyZXMtY291bnQge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmxpc3RpbmctaXRlbSAucGljdHVyZXMtcm93IC5waWN0dXJlLXdyYXBwZXIgLmhhcy1tb3JlLXBpY3R1cmVzIC5waWN0dXJlcy1jb3VudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCIrXCI7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */", "[_nghost-%COMP%] {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 235,187,0;\n}\n\napp-image-shell.cover-image[_ngcontent-%COMP%] {\n  --image-shell-border-radius: var(--app-fair-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: transparent;\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.item-icon[_ngcontent-%COMP%] {\n  --image-shell-loading-background: transparent;\n}\n\n.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 20px;\n  max-width: 30%;\n}\n\n.item-name[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.item-address[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 12px;\n  max-width: 50%;\n}\n\n.item-address[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.item-tag[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 10px;\n  min-width: 30px;\n}\n\n.item-tag[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.item-rating[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n}\n\napp-image-shell.picture-image[_ngcontent-%COMP%] {\n  --image-shell-border-radius: var(--app-narrow-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .20);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9mb29kL2xpc3Rpbmcvc3R5bGVzL2Zvb2QtbGlzdGluZy5zaGVsbC5zY3NzIiwic3JjL2FwcC9mb29kL2xpc3Rpbmcvc3R5bGVzL2Zvb2QtbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRFdBO0VBQ0UsbURBQUE7RUFDQSxtRUFBQTtFQUNBLDZDQUFBO0VBQ0EsOERBQUE7QUNSRjs7QURXQTtFQUNFLDZDQUFBO0FDUkY7O0FEV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFVFO0VBQ0UsZ0JBQUE7QUNSSjs7QURZQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDVEY7O0FEV0U7RUFDRSxnQkFBQTtBQ1RKOztBRGFBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNWRjs7QURZRTtFQUNFLGNBQUE7QUNWSjs7QURjQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUNYRjs7QURjQTtFQUNFLHFEQUFBO0VBQ0EsbUVBQUE7QUNYRiIsImZpbGUiOiJzcmMvYXBwL2Zvb2QvbGlzdGluZy9zdHlsZXMvZm9vZC1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2ViYmIwMDtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIzNSwxODcsMDtcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICAvLyBpb24tY29udGVudCB7XG4gIC8vICAgb3BhY2l0eTogMC44O1xuICAvLyB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5jb3Zlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLml0ZW0taWNvbiB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLml0ZW0tbmFtZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiAzMCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuXG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLml0ZW0tdGFnID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uaXRlbS1yYXRpbmcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnBpY3R1cmUtaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbn1cbiIsIjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2ViYmIwMDtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIzNSwxODcsMDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmNvdmVyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaXRlbS1pY29uIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDMwJTtcbn1cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cblxuLml0ZW0tdGFnID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5pdGVtLXJhdGluZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwucGljdHVyZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodListingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-food-listing',
          templateUrl: './food-listing.page.html',
          styleUrls: ['./styles/food-listing.page.scss', './styles/food-listing.shell.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, {
        isShell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.is-shell']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/food/listing/food-listing.resolver.ts":
  /*!*******************************************************!*\
    !*** ./src/app/food/listing/food-listing.resolver.ts ***!
    \*******************************************************/

  /*! exports provided: FoodListingResolver */

  /***/
  function srcAppFoodListingFoodListingResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodListingResolver", function () {
      return FoodListingResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../food.service */
    "./src/app/food/food.service.ts");

    var FoodListingResolver = /*#__PURE__*/function () {
      function FoodListingResolver(foodService) {
        _classCallCheck(this, FoodListingResolver);

        this.foodService = foodService;
      }

      _createClass(FoodListingResolver, [{
        key: "resolve",
        value: function resolve() {
          var dataSource = this.foodService.getListingDataSource();
          var dataStore = this.foodService.getListingStore(dataSource);
          return dataStore;
        }
      }]);

      return FoodListingResolver;
    }();

    FoodListingResolver.ɵfac = function FoodListingResolver_Factory(t) {
      return new (t || FoodListingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]));
    };

    FoodListingResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FoodListingResolver,
      factory: FoodListingResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodListingResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=food-listing-food-listing-module-es5.js.map