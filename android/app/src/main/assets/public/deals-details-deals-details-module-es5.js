function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deals-details-deals-details-module"], {
  /***/
  "./src/app/deals/details/deals-details.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/deals/details/deals-details.module.ts ***!
    \*******************************************************/

  /*! exports provided: DealsDetailsPageModule */

  /***/
  function srcAppDealsDetailsDealsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsDetailsPageModule", function () {
      return DealsDetailsPageModule;
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


    var _deals_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../deals.service */
    "./src/app/deals/deals.service.ts");
    /* harmony import */


    var _deals_details_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./deals-details.page */
    "./src/app/deals/details/deals-details.page.ts");
    /* harmony import */


    var _deals_details_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./deals-details.resolver */
    "./src/app/deals/details/deals-details.resolver.ts");

    var routes = [{
      path: '',
      component: _deals_details_page__WEBPACK_IMPORTED_MODULE_9__["DealsDetailsPage"],
      resolve: {
        data: _deals_details_resolver__WEBPACK_IMPORTED_MODULE_10__["DealsDetailsResolver"]
      }
    }];

    var DealsDetailsPageModule = function DealsDetailsPageModule() {
      _classCallCheck(this, DealsDetailsPageModule);
    };

    DealsDetailsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DealsDetailsPageModule
    });
    DealsDetailsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DealsDetailsPageModule_Factory(t) {
        return new (t || DealsDetailsPageModule)();
      },
      providers: [_deals_details_resolver__WEBPACK_IMPORTED_MODULE_10__["DealsDetailsResolver"], _deals_service__WEBPACK_IMPORTED_MODULE_8__["DealsService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DealsDetailsPageModule, {
        declarations: [_deals_details_page__WEBPACK_IMPORTED_MODULE_9__["DealsDetailsPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealsDetailsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          declarations: [_deals_details_page__WEBPACK_IMPORTED_MODULE_9__["DealsDetailsPage"]],
          providers: [_deals_details_resolver__WEBPACK_IMPORTED_MODULE_10__["DealsDetailsResolver"], _deals_service__WEBPACK_IMPORTED_MODULE_8__["DealsService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/deals/details/deals-details.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/deals/details/deals-details.page.ts ***!
    \*****************************************************/

  /*! exports provided: DealsDetailsPage */

  /***/
  function srcAppDealsDetailsDealsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsDetailsPage", function () {
      return DealsDetailsPage;
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


    var _deals_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./deals-details.model */
    "./src/app/deals/details/deals-details.model.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shell/aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
    /* harmony import */


    var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shell/image-shell/image-shell.component */
    "./src/app/shell/image-shell/image-shell.component.ts");
    /* harmony import */


    var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shell/text-shell/text-shell.component */
    "./src/app/shell/text-shell/text-shell.component.ts");
    /* harmony import */


    var _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/countdown-timer/countdown-timer.component */
    "./src/app/components/countdown-timer/countdown-timer.component.ts");
    /* harmony import */


    var _pipes_time_difference_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../pipes/time-difference.pipe */
    "./src/app/pipes/time-difference.pipe.ts");

    var _c0 = function _c0() {
      return {
        from: "hour",
        to: "second"
      };
    };

    function DealsDetailsPage_ion_row_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Deal expires in:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-countdown-timer", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx_r0.details == null ? null : ctx_r0.details.expirationDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    }

    var _c1 = function _c1() {
      return {
        w: 56,
        h: 40
      };
    };

    function DealsDetailsPage_ion_slide_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-aspect-ratio", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-image-shell", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r3)("alt", "deals details");
      }
    }

    var _c2 = function _c2() {
      return {
        w: 1,
        h: 1
      };
    };

    function DealsDetailsPage_div_56_ion_row_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-aspect-ratio", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-image-shell", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-text-shell", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-text-shell", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var deal_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", deal_r5.logo)("alt", "deals logo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", deal_r5 == null ? null : deal_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", deal_r5 == null ? null : deal_r5.description);
      }
    }

    function DealsDetailsPage_div_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "More hot deals");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DealsDetailsPage_div_56_ion_row_3_Template, 9, 6, "ion-row", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.details.relatedDeals);
      }
    }

    var _c3 = function _c3(a0, a1, a2, a3) {
      return {
        "ended": a0,
        "imminent-end": a1,
        "ends-soon": a2,
        "distant-end": a3
      };
    };

    var _c4 = function _c4() {
      return {
        w: 128,
        h: 32
      };
    };

    var DealsDetailsPage = /*#__PURE__*/function () {
      function DealsDetailsPage(route) {
        _classCallCheck(this, DealsDetailsPage);

        this.route = route;
        this.slidesOptions = {
          zoom: {
            toggle: false // Disable zooming to prevent weird double tap zomming on slide images

          }
        };
      }

      _createClass(DealsDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // On init, the route subscription is the active subscription
          this.subscriptions = this.route.data.subscribe(function (resolvedRouteData) {
            // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
            _this.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__["ResolverHelper"].extractData(resolvedRouteData.data, _deals_details_model__WEBPACK_IMPORTED_MODULE_3__["DealsDetailsModel"]).subscribe(function (state) {
              _this.details = state;
            }, function (error) {});
          }, function (error) {});
        } // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
        // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions

      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.subscriptions.unsubscribe();
        }
      }, {
        key: "isShell",
        get: function get() {
          return this.details && this.details.isShell ? true : false;
        }
      }]);

      return DealsDetailsPage;
    }();

    DealsDetailsPage.ɵfac = function DealsDetailsPage_Factory(t) {
      return new (t || DealsDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    DealsDetailsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DealsDetailsPage,
      selectors: [["app-deals-details"]],
      hostVars: 2,
      hostBindings: function DealsDetailsPage_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
        }
      },
      decls: 57,
      vars: 46,
      consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "app/categories/deals"], [1, "deals-details-content", 3, "ngClass"], ["class", "expiration-countdown", 4, "ngIf"], [1, "details-wrapper"], [1, "slider-row"], ["pager", "true", 1, "details-slides", 3, "options"], ["class", "", 4, "ngFor", "ngForOf"], [1, "description-row"], ["size", "6", 1, "logo-col"], [3, "ratio"], ["animation", "spinner", 1, "logo-image", 3, "src", "alt"], ["size", "9", 1, "info-col"], [1, "details-name"], ["animation", "bouncing", 3, "data"], [1, "details-description"], ["animation", "bouncing", "lines", "3", 3, "data"], ["size", "3", 1, "preview-image-col"], ["animation", "spinner", 1, "preview-image", 3, "src", "alt"], [1, "promo-row"], [1, "promo-title"], ["size", "8"], [1, "promo-description"], ["size", "6"], ["expand", "block", "shape", "round", "fill", "outline", "color", "claim", 1, "promo-code-btn"], [1, "promo-code"], [3, "data"], [1, "promo-instructions"], ["target", "_blank", "href", "https://google.com/search?q=chocolate", 1, "instructions-anchor"], [1, "expiration-notice"], [1, "notice-message"], [1, "expiration-value"], ["class", "related-deals-wrapper", 4, "ngIf"], [1, "expiration-countdown"], [1, "expiration-lead"], ["fill", "countdown", 1, "item-countdown", 3, "end", "units"], [1, ""], [1, "slide-inner-row"], ["animation", "spinner", 1, "showcase-image", 3, "src", "alt"], [1, "related-deals-wrapper"], [1, "related-deals-title"], ["class", "related-deal", 4, "ngFor", "ngForOf"], [1, "related-deal"], ["size", "4", 1, "deal-logo-wrapper"], ["animation", "spinner", 1, "related-deal-logo", 3, "src", "alt"], ["size", "8", 1, "deal-info-wrapper"], [1, "related-deal-title"], [1, "related-deal-description"]],
      template: function DealsDetailsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Deals Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "appTimeDifference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "appTimeDifference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "appTimeDifference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "appTimeDifference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "appTimeDifference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "appTimeDifference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "appTimeDifference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DealsDetailsPage_ion_row_14_Template, 4, 3, "ion-row", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "appTimeDifference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "appTimeDifference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-row", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-slides", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DealsDetailsPage_ion_slide_20_Template, 4, 4, "ion-slide", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-row", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-col", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-aspect-ratio", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-image-shell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-col", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-text-shell", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-text-shell", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-aspect-ratio", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-image-shell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-row", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Copy the Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-col", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Paste this code at checkout to get an extra 50% off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-col", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ion-button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-text-shell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-col", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Go to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "lancasternutcandy.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " and paste the code at checkout. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "appTimeDifference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-text-shell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, DealsDetailsPage_div_56_Template, 4, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](39, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 16, ctx.details == null ? null : ctx.details.expirationDate) < 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 18, ctx.details == null ? null : ctx.details.expirationDate) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 20, ctx.details == null ? null : ctx.details.expirationDate) <= 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 22, ctx.details == null ? null : ctx.details.expirationDate) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 24, ctx.details == null ? null : ctx.details.expirationDate) > 2 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 26, ctx.details == null ? null : ctx.details.expirationDate) < 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 28, ctx.details == null ? null : ctx.details.expirationDate) >= 10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 30, ctx.details == null ? null : ctx.details.expirationDate) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 32, ctx.details == null ? null : ctx.details.expirationDate) <= 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.slidesOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.showcaseImages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.details == null ? null : ctx.details.logo)("alt", "deals details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.details == null ? null : ctx.details.previewImage)("alt", "deals details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.code);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cupon ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 34, ctx.details == null ? null : ctx.details.expirationDate) < 0 ? "expired" : "expires", " on:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](55, 36, ctx.details == null ? null : ctx.details.expirationDate, "mediumDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.details == null ? null : ctx.details.relatedDeals) && ctx.details.relatedDeals.length > 0);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__["ImageShellComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_9__["CountdownTimerComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"]],
      pipes: [_pipes_time_difference_pipe__WEBPACK_IMPORTED_MODULE_10__["TimeDifferencePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-swiper-pagination-space: 30px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-countdown-fill-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.2);\n  --page-expired-color: var(--ion-color-medium-tint);\n  --page-ends-soon-color: #FFAB6B;\n  --page-distant-end-color: #70DF70;\n  --page-deal-color: var(--ion-color-medium);\n  --page-color: #70DF70;\n  --ion-color-claim: #70DF70;\n  --ion-color-claim-rgb: 112,223,112;\n  --ion-color-claim-contrast: #FFFFFF;\n  --ion-color-claim-contrast-rgb: 255,255,255;\n  --ion-color-claim-shade: #63C463;\n  --ion-color-claim-tint: #7EE27E;\n}\n[_nghost-%COMP%]   .ion-color-claim[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-claim) !important;\n  --ion-color-base-rgb: var(--ion-color-claim-rgb) !important;\n  --ion-color-contrast: var(--ion-color-claim-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-claim-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-claim-shade) !important;\n  --ion-color-tint: var(--ion-color-claim-tint) !important;\n}\n.deals-details-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n.deals-details-content.ended[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-expired-color);\n}\n.deals-details-content.imminent-end[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-distant-end-color);\n}\n.deals-details-content.ends-soon[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-ends-soon-color);\n}\n.deals-details-content.distant-end[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-distant-end-color);\n}\n.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%] {\n  color: var(--ion-color-lightest);\n  background-color: var(--ion-color-danger);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%]   .expiration-lead[_ngcontent-%COMP%] {\n  padding: 0px calc(var(--page-margin) / 2);\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 14px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%]   app-countdown-timer.item-countdown[_ngcontent-%COMP%] {\n  --countdown-margin: 0px;\n  --countdown-padding: 0px 3px;\n  --countdown-time-margin: 0px 2px;\n  --countdown-time-padding: 0px 2px;\n  --countdown-inner-time-margin: 0px 2px 0px 0px;\n  --countdown-inner-time-padding: calc(var(--page-margin) / 2) 0px;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: var(--app-narrow-radius);\n  --countdown-fill-background: var(--ion-color-lightest);\n  --countdown-fill-shadow: 0px 0px 5px 0px var(--page-countdown-fill-shadow-color);\n  --countdown-value-color: var(--ion-color-darkest);\n  --countdown-unit-color: var(--ion-color-medium-shade);\n  padding: 0px calc(var(--page-margin) / 4);\n  font-size: 14px;\n  font-weight: 500;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%] {\n  margin: var(--page-margin);\n  border-radius: var(--app-broad-radius);\n  background-color: var(--ion-color-lightest);\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%] {\n  --bullet-background: var(--ion-color-primary);\n  --bullet-background-active: var(--ion-color-primary);\n  height: 100%;\n  width: 100%;\n  border-radius: var(--app-broad-radius) var(--app-broad-radius) 0px 0px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-bottom: var(--page-swiper-pagination-space);\n  box-sizing: border-box;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n  border-bottom: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n  align-items: center;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .logo-col[_ngcontent-%COMP%] {\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%] {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-tint);\n  font-size: 16px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  text-align: center;\n  justify-content: center;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 300;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]::before, .deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]::after {\n  content: \"\xB7\";\n  color: var(--ion-color-dark-tint);\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-description[_ngcontent-%COMP%] {\n  margin: var(--page-margin) 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-code-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-code[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  line-height: 1;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-instructions[_ngcontent-%COMP%] {\n  margin: var(--page-margin) 0px 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 12px;\n  line-height: 1.4;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-instructions[_ngcontent-%COMP%]   .instructions-anchor[_ngcontent-%COMP%] {\n  color: var(--page-color);\n  text-decoration: none;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%] {\n  background-color: var(--page-deal-color);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  color: var(--ion-color-lightest);\n  border-radius: 0px 0px var(--app-broad-radius) var(--app-broad-radius);\n  display: flex;\n  justify-content: space-evenly;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%]   .notice-message[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 5px;\n  text-transform: capitalize;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%]   .expiration-value[_ngcontent-%COMP%] {\n  display: block;\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) * 3) var(--page-margin) calc(var(--page-margin) * 2);\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deals-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px 0px var(--page-margin);\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  border-radius: var(--app-broad-radius);\n  background-color: var(--ion-color-lightest);\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-logo-wrapper[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) / 4) var(--page-margin) calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  border-right: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%] {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%]   .related-deal-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: 5px;\n  color: var(--ion-color-dark-tint);\n  font-size: 20px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%]   .related-deal-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 16px;\n}\n[_nghost-%COMP%]     .details-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n[_nghost-%COMP%]     .details-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n[_nghost-%COMP%]     app-countdown-timer.item-countdown .time-unit {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvZGV0YWlscy9zdHlsZXMvZGVhbHMtZGV0YWlscy5wYWdlLnNjc3MiLCIvVXNlcnMvZGF5YW5hL3dvcmsvaW9uaWMvdGVtcGxhdGVzL2lvbjRmdWxscHdhL3NyYy9hcHAvZGVhbHMvZGV0YWlscy9zdHlsZXMvZGVhbHMtZGV0YWlscy5wYWdlLnNjc3MiLCIvVXNlcnMvZGF5YW5hL3dvcmsvaW9uaWMvdGVtcGxhdGVzL2lvbjRmdWxscHdhL3NyYy90aGVtZS9taXhpbnMvaW9uLWNvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDSWhCO0VBQ0Usc0NBQUE7RUFDQSw4Q0FBQTtFQUVBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUVBLDJFQUFBO0VBRUEsa0RBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBRUEsMENBQUE7RUFFQSxxQkFBQTtFQUlFLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBRFZKO0FFaEJFO0VBQ0UsbURBQUE7RUFDQSwyREFBQTtFQUNBLGdFQUFBO0VBQ0Esd0VBQUE7RUFDQSwwREFBQTtFQUNBLHdEQUFBO0FGa0JKO0FDT0E7RUFDRSxvQ0FBQTtBREpGO0FDTUU7RUFDRSw0Q0FBQTtBREpKO0FDTUU7RUFDRSxnREFBQTtBREpKO0FDTUU7RUFDRSw4Q0FBQTtBREpKO0FDTUU7RUFDRSxnREFBQTtBREpKO0FDT0U7RUFDRSxnQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esd0RBQUE7RUFFQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURQSjtBQ1NJO0VBQ0UseUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRFBOO0FDVUk7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsZ0VBQUE7RUFDQSw2QkFBQTtFQUNBLHdEQUFBO0VBQ0Esc0RBQUE7RUFDQSxnRkFBQTtFQUNBLGlEQUFBO0VBQ0EscURBQUE7RUFFQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRFROO0FDYUU7RUFDRSwwQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMkNBQUE7QURYSjtBQ2NNO0VBQ0UsNkNBQUE7RUFDQSxvREFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0VBQUE7QURiUjtBQ2VRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsbURBQUE7RUFFQSxzQkFBQTtBRGZWO0FDb0JJO0VBQ0UsOEJBQUE7RUFFQSwyRUFBQTtFQUNBLDhEQUFBO0VBQ0EsbUJBQUE7QURuQk47QUNxQk07RUFDRSw0Q0FBQTtBRG5CUjtBQ3NCTTtFQUNFLDJDQUFBO0FEcEJSO0FDc0JRO0VBQ0UsV0FBQTtFQUNILDJDQUFBO0VBQ0csaUNBQUE7RUFDQSxlQUFBO0FEcEJWO0FDdUJRO0VBQ0UsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBRHJCVjtBQzBCSTtFQUNFLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FEekJOO0FDMkJNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBRHpCUjtBQzJCUTtFQUVFLFlBQUE7RUFDQSxpQ0FBQTtBRDFCVjtBQzhCTTtFQUNFLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FENUJSO0FDK0JNO0VBQ0UsV0FBQTtBRDdCUjtBQ2dDTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRDlCUjtBQ2lDTTtFQUNFLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQvQlI7QUNpQ1E7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0FEL0JWO0FDb0NJO0VBQ0Usd0NBQUE7RUFDQSx3REFBQTtFQUNBLGdDQUFBO0VBQ0Esc0VBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QURsQ047QUNvQ007RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBRGxDUjtBQ3FDTTtFQUNFLGNBQUE7QURuQ1I7QUN3Q0U7RUFDRSxvRkFBQTtBRHRDSjtBQ3dDSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0FEdENOO0FDeUNJO0VBQ0UsOEJBQUE7RUFFQSxzQ0FBQTtFQUNBLDJDQUFBO0FEeENOO0FDMENNO0VBQ0UsMkNBQUE7QUR4Q1I7QUMyQ007RUFDRSxrSEFBQTtFQUNBLDZEQUFBO0FEekNSO0FDNENNO0VBQ0UsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBRDFDUjtBQzRDUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBRDFDVjtBQzZDUTtFQUNFLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUQzQ1Y7QUN3REk7RUFDRSw0Q0FBQTtFQUNBLGNBQUE7RUFFQSwrRkFBQTtBRHRETjtBQ3dETTtFQUNFLHlDQUFBO0VBQ0EsMENBQUE7QUR0RFI7QUM0REk7RUFFRSxnQkFBQTtBRDNETiIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2RldGFpbHMvc3R5bGVzL2RlYWxzLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiAzMHB4O1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcbiAgLS1wYWdlLWNvdW50ZG93bi1maWxsLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpLCAwLjIpO1xuICAtLXBhZ2UtZXhwaXJlZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgLS1wYWdlLWVuZHMtc29vbi1jb2xvcjogI0ZGQUI2QjtcbiAgLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yOiAjNzBERjcwO1xuICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tcGFnZS1jb2xvcjogIzcwREY3MDtcbiAgLS1pb24tY29sb3ItY2xhaW06ICM3MERGNzA7XG4gIC0taW9uLWNvbG9yLWNsYWltLXJnYjogMTEyLDIyMywxMTI7XG4gIC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0OiAjRkZGRkZGO1xuICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1jbGFpbS1zaGFkZTogIzYzQzQ2MztcbiAgLS1pb24tY29sb3ItY2xhaW0tdGludDogIzdFRTI3RTtcbn1cbjpob3N0IC5pb24tY29sb3ItY2xhaW0ge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItY2xhaW0pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItY2xhaW0tcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItY2xhaW0tc2hhZGUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1jbGFpbS10aW50KSAhaW1wb3J0YW50O1xufVxuXG4uZGVhbHMtZGV0YWlscy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudC5lbmRlZCB7XG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudC5pbW1pbmVudC1lbmQge1xuICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcik7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50LmVuZHMtc29vbiB7XG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWVuZHMtc29vbi1jb2xvcik7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50LmRpc3RhbnQtZW5kIHtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZXhwaXJhdGlvbi1jb3VudGRvd24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5leHBpcmF0aW9uLWNvdW50ZG93biAuZXhwaXJhdGlvbi1sZWFkIHtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmV4cGlyYXRpb24tY291bnRkb3duIGFwcC1jb3VudGRvd24tdGltZXIuaXRlbS1jb3VudGRvd24ge1xuICAtLWNvdW50ZG93bi1tYXJnaW46IDBweDtcbiAgLS1jb3VudGRvd24tcGFkZGluZzogMHB4IDNweDtcbiAgLS1jb3VudGRvd24tdGltZS1tYXJnaW46IDBweCAycHg7XG4gIC0tY291bnRkb3duLXRpbWUtcGFkZGluZzogMHB4IDJweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW46IDBweCAycHggMHB4IDBweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXI6IG5vbmU7XG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY291bnRkb3duLWZpbGwtc2hhZG93OiAwcHggMHB4IDVweCAwcHggdmFyKC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3IpO1xuICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAuc2xpZGVyLXJvdyAuZGV0YWlscy1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1icm9hZC1yYWRpdXMpIHZhcigtLWFwcC1icm9hZC1yYWRpdXMpIDBweCAwcHg7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLnNsaWRlci1yb3cgLmRldGFpbHMtc2xpZGVzIC5zbGlkZS1pbm5lci1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAuZGVzY3JpcHRpb24tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjEpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5kZXNjcmlwdGlvbi1yb3cgLmxvZ28tY29sIHtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLmRlc2NyaXB0aW9uLXJvdyAuaW5mby1jb2wge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5kZXNjcmlwdGlvbi1yb3cgLmluZm8tY29sIC5kZXRhaWxzLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLmRlc2NyaXB0aW9uLXJvdyAuaW5mby1jb2wgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAucHJvbW8tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLnByb21vLXJvdyAucHJvbW8tdGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgbWFyZ2luOiAwcHg7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLnByb21vLXJvdyAucHJvbW8tdGl0bGU6OmJlZm9yZSwgLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5wcm9tby1yb3cgLnByb21vLXRpdGxlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiwrdcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5wcm9tby1yb3cgLnByb21vLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5wcm9tby1yb3cgLnByb21vLWNvZGUtYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLnByb21vLXJvdyAucHJvbW8tY29kZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5wcm9tby1yb3cgLnByb21vLWluc3RydWN0aW9ucyB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLnByb21vLXJvdyAucHJvbW8taW5zdHJ1Y3Rpb25zIC5pbnN0cnVjdGlvbnMtYW5jaG9yIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLmV4cGlyYXRpb24tbm90aWNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1kZWFsLWNvbG9yKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IHZhcigtLWFwcC1icm9hZC1yYWRpdXMpIHZhcigtLWFwcC1icm9hZC1yYWRpdXMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAuZXhwaXJhdGlvbi1ub3RpY2UgLm5vdGljZS1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAuZXhwaXJhdGlvbi1ub3RpY2UgLmV4cGlyYXRpb24tdmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFscy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1icm9hZC1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWw6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbCAuZGVhbC1sb2dvLXdyYXBwZXIge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGJvcmRlci1yaWdodDogMnB4IGRhc2hlZCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuMSk7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbCAuZGVhbC1pbmZvLXdyYXBwZXIge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFsIC5kZWFsLWluZm8td3JhcHBlciAucmVsYXRlZC1kZWFsLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbCAuZGVhbC1pbmZvLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRldGFpbHMtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm90dG9tOiBjYWxjKCh2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSAtIHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KSApIC8gMik7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRldGFpbHMtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbn1cbjpob3N0IDo6bmctZGVlcCBhcHAtY291bnRkb3duLXRpbWVyLml0ZW0tY291bnRkb3duIC50aW1lLXVuaXQge1xuICBmb250LXNpemU6IDAuOGVtO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvaW9uLWNvbG9yXCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2U6IDMwcHg7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiAxMHB4O1xuXG4gIC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmtlc3QtcmdiKSwgMC4yKTtcblxuICAtLXBhZ2UtZXhwaXJlZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgLS1wYWdlLWVuZHMtc29vbi1jb2xvcjogI0ZGQUI2QjtcbiAgLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yOiAjNzBERjcwO1xuXG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblxuICAtLXBhZ2UtY29sb3I6ICM3MERGNzA7XG5cbiAgLy8gQWRkIGN1c3RvbSBjb2xvcnMgdG8gdXNlIHdpdGggW2NvbG9yXSBwcm9wZXJ0eVxuICBAaW5jbHVkZSBpb24tY29sb3IoJ2NsYWltJykge1xuICAgIC0taW9uLWNvbG9yLWNsYWltOiAjNzBERjcwO1xuICAgIC0taW9uLWNvbG9yLWNsYWltLXJnYjogMTEyLDIyMywxMTI7XG4gICAgLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3Q6ICNGRkZGRkY7XG4gICAgLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1zaGFkZTogIzYzQzQ2MztcbiAgICAtLWlvbi1jb2xvci1jbGFpbS10aW50OiAjN0VFMjdFO1xuICB9XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmRlYWxzLWRldGFpbHMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAmLmVuZGVkIHtcbiAgICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgfVxuICAmLmltbWluZW50LWVuZCB7XG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xuICB9XG4gICYuZW5kcy1zb29uIHtcbiAgICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1lbmRzLXNvb24tY29sb3IpO1xuICB9XG4gICYuZGlzdGFudC1lbmQge1xuICAgIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbiAgfVxuXG4gIC5leHBpcmF0aW9uLWNvdW50ZG93biB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA4O1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZXhwaXJhdGlvbi1sZWFkIHtcbiAgICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgYXBwLWNvdW50ZG93bi10aW1lci5pdGVtLWNvdW50ZG93biB7XG4gICAgICAtLWNvdW50ZG93bi1tYXJnaW46IDBweDtcbiAgICAgIC0tY291bnRkb3duLXBhZGRpbmc6IDBweCAzcHg7XG4gICAgICAtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4IDJweDtcbiAgICAgIC0tY291bnRkb3duLXRpbWUtcGFkZGluZzogMHB4IDJweDtcbiAgICAgIC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luOiAwcHggMnB4IDBweCAwcHg7XG4gICAgICAtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xuICAgICAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXI6IG5vbmU7XG4gICAgICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgIC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIC0tY291bnRkb3duLWZpbGwtc2hhZG93OiAwcHggMHB4IDVweCAwcHggdmFyKC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3IpO1xuICAgICAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgICAgIC0tY291bnRkb3duLXVuaXQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuXG4gICAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbHMtd3JhcHBlciB7XG4gICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWJyb2FkLXJhZGl1cyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcblxuICAgIC5zbGlkZXItcm93IHtcbiAgICAgIC5kZXRhaWxzLXNsaWRlcyB7XG4gICAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKSB2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKSAwcHggMHB4O1xuXG4gICAgICAgIC5zbGlkZS1pbm5lci1yb3cge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIHNwYWNlXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpO1xuICAgICAgICAgIC8vIEFzIHdlIHNldCBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb20sIGJveC1zaXppbmcgZ2V0J3MgcmVzZXR0ZWQgdG8gY29udGVudC1ib3ggaWYgSSBkb24ndCBhZGQgdGhpc1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24tcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC4xKTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5sb2dvLWNvbCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgfVxuXG4gICAgICAuaW5mby1jb2wge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAgIC5kZXRhaWxzLW5hbWUge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgIFx0XHRcdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvbW8tcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIC5wcm9tby10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgICBtYXJnaW46IDBweDtcblxuICAgICAgICAmOjpiZWZvcmUsXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnwrcnO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucHJvbW8tZGVzY3JpcHRpb24ge1xuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5wcm9tby1jb2RlLWJ0biB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuXG4gICAgICAucHJvbW8tY29kZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgfVxuXG4gICAgICAucHJvbW8taW5zdHJ1Y3Rpb25zIHtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcblxuICAgICAgICAuaW5zdHJ1Y3Rpb25zLWFuY2hvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5leHBpcmF0aW9uLW5vdGljZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWRlYWwtY29sb3IpO1xuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggdmFyKC0tYXBwLWJyb2FkLXJhZGl1cykgdmFyKC0tYXBwLWJyb2FkLXJhZGl1cyk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICAgIC5ub3RpY2UtbWVzc2FnZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB9XG5cbiAgICAgIC5leHBpcmF0aW9uLXZhbHVlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciB7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLnJlbGF0ZWQtZGVhbHMtdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICAgICAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG5cbiAgICAucmVsYXRlZC1kZWFsIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWJyb2FkLXJhZGl1cyk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgfVxuXG4gICAgICAuZGVhbC1sb2dvLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IGRhc2hlZCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC4xKTtcbiAgICAgIH1cblxuICAgICAgLmRlYWwtaW5mby13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLnJlbGF0ZWQtZGVhbC10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVsYXRlZC1kZWFsLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vLyBJU1NVRTogLnN3aXBlci1wYWdnaW5hdGlvbiBnZXRzIHJlbmRlcmVkIGR5bmFtaWNhbGx5LiBUaGF0IHByZXZlbnRzIHN0eWxpbmcgdGhlIGVsZW1lbnRzIHdoZW4gdXNpbmcgdGhlIGRlZmF1bHQgQW5ndWxhciBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG4vLyAgICAgICAgKEFuZ3VsYXIgZG9lc24ndCBhZGQgYW4gJ19uZ2NvbnRlbnQnIGF0dHJpYnV0ZSB0byB0aGUgLnN3aXBlci1wYWdnaW5hdGlvbiBiZWNhdXNlIGl0J3MgZHluYW1pY2FsbHkgcmVuZGVyZWQpXG4vLyBGSVg6ICAgU2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzYyNjUwNzIvMTExNjk1OVxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLmRldGFpbHMtc2xpZGVzIHtcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCk7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBpcyAxOHB4IGhlaWdodCwgLnNsaWRlLWlubmVyLXJvdyBoYXMgNDBweCBvZiBwYWRkaW5nLWJvdHRvbSA9PiBib3R0b20gPSAoNDBweCAtIDE4cHgpLzIgPSAxMXB4XG4gICAgICBib3R0b206IGNhbGMoKHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIC0gdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpICkgLyAyKTtcblxuICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwLWNvdW50ZG93bi10aW1lci5pdGVtLWNvdW50ZG93biB7XG4gICAgLnRpbWUtdW5pdCB7XG4gICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBpb24tY29sb3IoJGNvbG9yKSB7XG4gIEBjb250ZW50O1xuXG4gIC5pb24tY29sb3ItI3skY29sb3J9IHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LXJnYikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LXNoYWRlKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tdGludCkgIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */", "[_nghost-%COMP%] {\n  --shell-color: #70DF70;\n  --shell-color-rgb: 112,223,112;\n}\n\napp-image-shell.showcase-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.logo-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px;\n}\n\n.details-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n\n.details-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.preview-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px;\n}\n\n.promo-code[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 80px;\n}\n\n.promo-code[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.expiration-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--ion-color-lightest-rgb), .20);\n  --text-shell-line-height: 18px;\n  min-width: 60px;\n}\n\n.expiration-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\napp-image-shell.related-deal-logo[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px;\n}\n\n.related-deal-title[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 20px;\n  max-width: 30%;\n}\n\n.related-deal-title[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.related-deal-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 16px;\n  max-width: 50%;\n}\n\n.related-deal-description[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9kZWFscy9kZXRhaWxzL3N0eWxlcy9kZWFscy1kZXRhaWxzLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2RlYWxzL2RldGFpbHMvc3R5bGVzL2RlYWxzLWRldGFpbHMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7QUNERjs7QURXQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUNSRjs7QURXQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7RUFDQSxnQ0FBQTtBQ1JGOztBRFdBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQ1JGOztBRFdBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQ1JGOztBRFdBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtFQUNBLGdDQUFBO0FDUkY7O0FEV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1JGOztBRFVFO0VBQ0UsY0FBQTtBQ1JKOztBRFlBO0VBQ0UsaUVBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNURjs7QURXRTtFQUNFLGNBQUE7QUNUSjs7QURhQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7RUFDQSxnQ0FBQTtBQ1ZGOztBRGFBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNWRjs7QURZRTtFQUNFLGtCQUFBO0FDVko7O0FEY0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1hGOztBRGFFO0VBQ0Usa0JBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2RldGFpbHMvc3R5bGVzL2RlYWxzLWRldGFpbHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjNzBERjcwO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMTEyLDIyMywxMTI7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwuc2hvd2Nhc2UtaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmxvZ28taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDE4cHg7XG59XG5cbi5kZXRhaWxzLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cblxuLmRldGFpbHMtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnByZXZpZXctaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDE4cHg7XG59XG5cbi5wcm9tby1jb2RlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogODBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uZXhwaXJhdGlvbi12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0LXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMThweDtcbiAgbWluLXdpZHRoOiA2MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZWxhdGVkLWRlYWwtbG9nbyB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZTogMThweDtcbn1cblxuLnJlbGF0ZWQtZGVhbC10aXRsZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDMwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLnJlbGF0ZWQtZGVhbC1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogIzcwREY3MDtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDExMiwyMjMsMTEyO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuc2hvd2Nhc2UtaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmxvZ28taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDE4cHg7XG59XG5cbi5kZXRhaWxzLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cblxuLmRldGFpbHMtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnByZXZpZXctaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDE4cHg7XG59XG5cbi5wcm9tby1jb2RlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogODBweDtcbn1cbi5wcm9tby1jb2RlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmV4cGlyYXRpb24tdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodGVzdC1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cbi5leHBpcmF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnJlbGF0ZWQtZGVhbC1sb2dvIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAxOHB4O1xufVxuXG4ucmVsYXRlZC1kZWFsLXRpdGxlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogMzAlO1xufVxuLnJlbGF0ZWQtZGVhbC10aXRsZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4ucmVsYXRlZC1kZWFsLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLnJlbGF0ZWQtZGVhbC1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealsDetailsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-deals-details',
          templateUrl: './deals-details.page.html',
          styleUrls: ['./styles/deals-details.page.scss', './styles/deals-details.shell.scss']
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
  "./src/app/deals/details/deals-details.resolver.ts":
  /*!*********************************************************!*\
    !*** ./src/app/deals/details/deals-details.resolver.ts ***!
    \*********************************************************/

  /*! exports provided: DealsDetailsResolver */

  /***/
  function srcAppDealsDetailsDealsDetailsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsDetailsResolver", function () {
      return DealsDetailsResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _deals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../deals.service */
    "./src/app/deals/deals.service.ts");

    var DealsDetailsResolver = /*#__PURE__*/function () {
      function DealsDetailsResolver(dealsService) {
        _classCallCheck(this, DealsDetailsResolver);

        this.dealsService = dealsService;
      }

      _createClass(DealsDetailsResolver, [{
        key: "resolve",
        value: function resolve() {
          var dataSource = this.dealsService.getDetailsDataSource();
          var dataStore = this.dealsService.getDetailsStore(dataSource);
          return dataStore;
        }
      }]);

      return DealsDetailsResolver;
    }();

    DealsDetailsResolver.ɵfac = function DealsDetailsResolver_Factory(t) {
      return new (t || DealsDetailsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_deals_service__WEBPACK_IMPORTED_MODULE_1__["DealsService"]));
    };

    DealsDetailsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DealsDetailsResolver,
      factory: DealsDetailsResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealsDetailsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _deals_service__WEBPACK_IMPORTED_MODULE_1__["DealsService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=deals-details-deals-details-module-es5.js.map