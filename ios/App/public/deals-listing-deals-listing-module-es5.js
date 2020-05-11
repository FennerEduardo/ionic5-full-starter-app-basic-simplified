function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deals-listing-deals-listing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/deals/listing/deals-listing.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deals/listing/deals-listing.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDealsListingDealsListingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Deals Listing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"deals-listing-content\">\n  <ng-container *ngIf=\"listing?.items\">\n    <div class=\"listing-item\" *ngFor=\"let item of listing.items\" [ngClass]=\"{'ended': ((item.expirationDate | appTimeDifference) < 0), 'imminent-end': ((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) <= 2), 'ends-soon': ((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) > 2 && (item.expirationDate | appTimeDifference) < 10), 'distant-end': ((item.expirationDate | appTimeDifference) >= 10)}\">\n      <ion-row class=\"top-row\">\n        <ion-col class=\"logo-col\" size=\"6\">\n          <app-aspect-ratio [ratio]=\"{w: 128, h: 32}\">\n            <app-image-shell [src]=\"item.logo\" [alt]=\"'deals logo'\" class=\"deal-logo\" animation=\"spinner\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-col>\n        <ion-col *ngIf=\"((item.expirationDate | appTimeDifference) > 0)\" class=\"call-to-action-col\">\n          <ion-button class=\"claim-button\" expand=\"block\" color=\"claim\" [routerLink]=\"['/app/categories/deals/', item.slug]\">\n            <span class=\"button-cta\">CLAIM</span>\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col *ngIf=\"((item.expirationDate | appTimeDifference) < 0)\" class=\"call-to-action-col\">\n          <span class=\"expired-cta\">EXPIRED</span>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"middle-row\">\n        <ion-col class=\"info-col\">\n          <h4 class=\"item-name\">\n            <a class=\"name-anchor\" [routerLink]=\"['/app/categories/deals/', item.slug]\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.name\"></app-text-shell>\n            </a>\n          </h4>\n          <p class=\"item-description\">\n            <app-text-shell animation=\"bouncing\" lines=\"3\" [data]=\"item.description\"></app-text-shell>\n          </p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-button class=\"bookmark-button\" expand=\"block\" fill=\"clear\" color=\"claim\">\n            <ion-icon slot=\"icon-only\" name=\"pricetag\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"bottom-row\">\n        <ion-col class=\"code-wrapper\">\n          <span class=\"code-cta\">Use this code:</span>\n          <span class=\"item-code\" [ngClass]=\"{'expired': ((item.expirationDate | appTimeDifference) < 0)}\">\n            <app-text-shell [data]=\"item.code\"></app-text-shell>\n          </span>\n        </ion-col>\n        <ion-col class=\"time-left-wrapper\" size=\"5\" [ngClass]=\"{'countdown-active': ((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) <= 2)}\">\n          <span class=\"expiration-cta\">DEAL {{ ((item.expirationDate | appTimeDifference) < 0) ? 'EXPIRED' : 'EXPIRES IN' }}:</span>\n          <ng-container *ngIf=\"((item.expirationDate | appTimeDifference) < 0 || (item.expirationDate | appTimeDifference) > 2)\">\n            <span class=\"item-time-left\">\n              <app-text-shell [data]=\"(item.expirationDate | appTimeAgo)\"></app-text-shell>\n            </span>\n          </ng-container>\n          <ng-container *ngIf=\"((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) <= 2)\">\n            <ion-row class=\"countdown-wrapper\">\n              <app-countdown-timer class=\"item-countdown\" fill=\"inner-time\" [end]=\"item.expirationDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n            </ion-row>\n          </ng-container>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ng-container>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/deals/listing/deals-listing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DealsListingPageModule */

  /***/
  function srcAppDealsListingDealsListingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingPageModule", function () {
      return DealsListingPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _deals_listing_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./deals-listing.page */
    "./src/app/deals/listing/deals-listing.page.ts");
    /* harmony import */


    var _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./deals-listing.resolver */
    "./src/app/deals/listing/deals-listing.resolver.ts");
    /* harmony import */


    var _deals_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../deals.service */
    "./src/app/deals/deals.service.ts");

    var routes = [{
      path: '',
      component: _deals_listing_page__WEBPACK_IMPORTED_MODULE_9__["DealsListingPage"],
      resolve: {
        data: _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_10__["DealsListingResolver"]
      }
    }];

    var DealsListingPageModule = function DealsListingPageModule() {
      _classCallCheck(this, DealsListingPageModule);
    };

    DealsListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      declarations: [_deals_listing_page__WEBPACK_IMPORTED_MODULE_9__["DealsListingPage"]],
      providers: [_deals_listing_resolver__WEBPACK_IMPORTED_MODULE_10__["DealsListingResolver"], _deals_service__WEBPACK_IMPORTED_MODULE_11__["DealsService"]]
    })], DealsListingPageModule);
    /***/
  },

  /***/
  "./src/app/deals/listing/deals-listing.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.page.ts ***!
    \*****************************************************/

  /*! exports provided: DealsListingPage */

  /***/
  function srcAppDealsListingDealsListingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingPage", function () {
      return DealsListingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DealsListingPage = /*#__PURE__*/function () {
      function DealsListingPage(route) {
        _classCallCheck(this, DealsListingPage);

        this.route = route;
      }

      _createClass(DealsListingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.data.subscribe(function (resolvedRouteData) {
            var listingDataStore = resolvedRouteData['data'];
            listingDataStore.state.subscribe(function (state) {
              _this.listing = state;
            }, function (error) {});
          }, function (error) {});
        }
      }, {
        key: "isShell",
        get: function get() {
          return this.listing && this.listing.isShell ? true : false;
        }
      }]);

      return DealsListingPage;
    }();

    DealsListingPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DealsListingPage.prototype, "isShell", null);
    DealsListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deals-listing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./deals-listing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/deals/listing/deals-listing.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/deals-listing.page.scss */
      "./src/app/deals/listing/styles/deals-listing.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/deals-listing.shell.scss */
      "./src/app/deals/listing/styles/deals-listing.shell.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/deals-listing.ios.scss */
      "./src/app/deals/listing/styles/deals-listing.ios.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], DealsListingPage);
    /***/
  },

  /***/
  "./src/app/deals/listing/deals-listing.resolver.ts":
  /*!*********************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.resolver.ts ***!
    \*********************************************************/

  /*! exports provided: DealsListingResolver */

  /***/
  function srcAppDealsListingDealsListingResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingResolver", function () {
      return DealsListingResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _deals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../deals.service */
    "./src/app/deals/deals.service.ts");

    var DealsListingResolver = /*#__PURE__*/function () {
      function DealsListingResolver(dealsService) {
        _classCallCheck(this, DealsListingResolver);

        this.dealsService = dealsService;
      }

      _createClass(DealsListingResolver, [{
        key: "resolve",
        value: function resolve() {
          var dataSource = this.dealsService.getListingDataSource();
          var dataStore = this.dealsService.getListingStore(dataSource);
          return dataStore;
        }
      }]);

      return DealsListingResolver;
    }();

    DealsListingResolver.ctorParameters = function () {
      return [{
        type: _deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"]
      }];
    };

    DealsListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"]])], DealsListingResolver);
    /***/
  },

  /***/
  "./src/app/deals/listing/styles/deals-listing.ios.scss":
  /*!*************************************************************!*\
    !*** ./src/app/deals/listing/styles/deals-listing.ios.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDealsListingStylesDealsListingIosScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host-context(.ios) .claim-button {\n  height: 2.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9kZWFscy9saXN0aW5nL3N0eWxlcy9kZWFscy1saXN0aW5nLmlvcy5zY3NzIiwic3JjL2FwcC9kZWFscy9saXN0aW5nL3N0eWxlcy9kZWFscy1saXN0aW5nLmlvcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsYUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5pb3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoLmlvcykge1xuICAvLyBDdXN0b20gcGxhdGZvcm0gc3R5bGVzIGhlcmVcbiAgLmNsYWltLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyLjJlbTtcbiAgfVxufVxuIiwiOmhvc3QtY29udGV4dCguaW9zKSAuY2xhaW0tYnV0dG9uIHtcbiAgaGVpZ2h0OiAyLjJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/deals/listing/styles/deals-listing.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/deals/listing/styles/deals-listing.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDealsListingStylesDealsListingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-countdown-fill-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.2);\n  --page-item-shadow-color: rgba(var(--ion-color-dark-rgb), .1);\n  --page-deal-code-height: 30px;\n  --page-countdown-gutter: 3px;\n  --page-expired-color: var(--ion-color-medium-tint);\n  --page-ends-soon-color: #FFAB6B;\n  --page-distant-end-color: #70DF70;\n  --page-deal-color: var(--ion-color-medium);\n  --page-deal-border-color: var(--ion-color-light-shade);\n  --page-color: #70DF70;\n  --ion-color-claim: #70DF70;\n  --ion-color-claim-rgb: 112,223,112;\n  --ion-color-claim-contrast: #FFFFFF;\n  --ion-color-claim-contrast-rgb: 255,255,255;\n  --ion-color-claim-shade: #63C463;\n  --ion-color-claim-tint: #7EE27E;\n}\n:host .ion-color-claim {\n  --ion-color-base: var(--ion-color-claim) !important;\n  --ion-color-base-rgb: var(--ion-color-claim-rgb) !important;\n  --ion-color-contrast: var(--ion-color-claim-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-claim-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-claim-shade) !important;\n  --ion-color-tint: var(--ion-color-claim-tint) !important;\n}\n.deals-listing-content {\n  --background: var(--page-background);\n}\n.listing-item {\n  background-color: var(--ion-color-lightest);\n  margin: var(--page-margin);\n  border-radius: var(--app-fair-radius);\n  box-shadow: 1px 1px 4px 1px var(--page-item-shadow-color);\n  border-bottom-style: solid;\n  border-bottom-width: calc((var(--page-margin) / 2) * 3);\n  border-bottom-color: var(--page-deal-border-color);\n}\n.listing-item.ended {\n  --page-deal-color: var(--page-expired-color);\n  --page-deal-border-color: var(--page-expired-color);\n  border-bottom-style: none;\n}\n.listing-item.imminent-end {\n  --page-deal-color: var(--page-ends-soon-color);\n  --page-deal-border-color: var(--page-distant-end-color);\n}\n.listing-item.ends-soon {\n  --page-deal-color: var(--page-ends-soon-color);\n  --page-deal-border-color: var(--page-ends-soon-color);\n  border-bottom-style: none;\n}\n.listing-item.distant-end {\n  --page-deal-color: var(--page-distant-end-color);\n  --page-deal-border-color: var(--page-distant-end-color);\n  border-bottom-style: none;\n}\n.listing-item .top-row {\n  --ion-grid-column-padding: 0px;\n  border-bottom: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n  padding: calc(var(--page-margin) / 2);\n  justify-content: space-between;\n  align-items: center;\n}\n.listing-item .top-row .logo-col {\n  align-self: center;\n}\n.listing-item .top-row .call-to-action-col {\n  flex-grow: 0;\n}\n.listing-item .top-row .call-to-action-col .expired-cta {\n  color: var(--page-expired-color);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0.8px;\n}\n.listing-item .top-row .call-to-action-col .claim-button {\n  --box-shadow: none;\n  --border-radius: var(--app-fair-radius);\n  margin: 0px;\n}\n.listing-item .top-row .call-to-action-col .claim-button:focus {\n  outline: none;\n}\n.listing-item .top-row .call-to-action-col .claim-button .button-cta {\n  display: block;\n  line-height: 18px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.listing-item .top-row .call-to-action-col .claim-button ion-icon {\n  font-size: 18px;\n}\n.listing-item .middle-row {\n  --ion-grid-column-padding: 0px;\n  padding: calc(var(--page-margin) / 2);\n  padding-bottom: var(--page-margin);\n}\n.listing-item .middle-row .info-col {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.listing-item .middle-row .item-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-tint);\n  font-size: 16px;\n}\n.listing-item .middle-row .item-name .name-anchor {\n  display: block;\n  text-decoration: none;\n}\n.listing-item .middle-row .item-description {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n}\n.listing-item .middle-row .bookmark-button {\n  --padding-start: 5px;\n  --padding-end: 5px;\n  margin: 0px;\n  font-size: 16px;\n}\n.listing-item .bottom-row {\n  --ion-grid-column-padding: 0px;\n  padding: 0px calc(var(--page-margin) / 2) calc(var(--page-margin) / 2);\n  justify-content: space-between;\n}\n.listing-item .bottom-row .code-wrapper {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n.listing-item .bottom-row .code-wrapper .code-cta {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  display: block;\n}\n.listing-item .bottom-row .code-wrapper .item-code {\n  height: var(--page-deal-code-height);\n  text-transform: uppercase;\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  border: 2px solid var(--page-color);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1;\n  border-radius: calc(var(--page-deal-code-height) / 2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.listing-item .bottom-row .code-wrapper .item-code.expired {\n  border-color: var(--page-expired-color);\n  color: var(--page-expired-color);\n  opacity: 0.6;\n}\n.listing-item .bottom-row .time-left-wrapper {\n  flex-shrink: 0;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.listing-item .bottom-row .time-left-wrapper .expiration-cta {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  display: block;\n  text-transform: uppercase;\n  text-align: end;\n}\n.listing-item .bottom-row .time-left-wrapper:not(.countdown-active) .item-time-left {\n  color: var(--page-deal-color);\n  font-size: 14px;\n  font-weight: 500;\n  display: block;\n  text-align: end;\n}\n.listing-item .bottom-row .time-left-wrapper.countdown-active {\n  display: block;\n  position: relative;\n}\n.listing-item .bottom-row .time-left-wrapper.countdown-active .countdown-wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  position: absolute;\n  right: 0px;\n}\n.listing-item .bottom-row .time-left-wrapper.countdown-active .countdown-wrapper app-countdown-timer.item-countdown {\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: var(--page-countdown-gutter) var(--page-countdown-gutter) 0px;\n  --countdown-inner-time-padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: var(--app-narrow-radius);\n  --countdown-fill-background: var(--ion-color-lightest);\n  --countdown-fill-shadow: 0px 0px 5px 0px var(--page-countdown-fill-shadow-color);\n  --countdown-value-color: var(--ion-color-darkest);\n  --countdown-unit-color: var(--ion-color-medium-shade);\n  --countdown-time-flex-direction: column;\n  font-weight: 500;\n  font-size: 14px;\n  margin-right: calc(var(--page-countdown-gutter) * -1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9kZWFscy9saXN0aW5nL3N0eWxlcy9kZWFscy1saXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5wYWdlLnNjc3MiLCIvVXNlcnMvZGF5YW5hL3dvcmsvaW9uaWMvdGVtcGxhdGVzL2lvbjRmdWxscHdhL3NyYy90aGVtZS9taXhpbnMvaW9uLWNvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQ0FBQTtFQUNBLDhDQUFBO0VBRUEsMkVBQUE7RUFDQSw2REFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrREFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFFQSwwQ0FBQTtFQUNBLHNEQUFBO0VBRUEscUJBQUE7RUFJRSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUNWSjtBQ2hCRTtFQUNFLG1EQUFBO0VBQ0EsMkRBQUE7RUFDQSxnRUFBQTtFQUNBLHdFQUFBO0VBQ0EsMERBQUE7RUFDQSx3REFBQTtBRGtCSjtBRE9BO0VBQ0Usb0NBQUE7QUNKRjtBRE9BO0VBcUJFLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlEQUFBO0VBQ0EsMEJBQUE7RUFDQSx1REFBQTtFQUNBLGtEQUFBO0FDeEJGO0FERkU7RUFDRSw0Q0FBQTtFQUNBLG1EQUFBO0VBQ0EseUJBQUE7QUNJSjtBREZFO0VBQ0UsOENBQUE7RUFDQSx1REFBQTtBQ0lKO0FERkU7RUFDRSw4Q0FBQTtFQUNBLHFEQUFBO0VBQ0EseUJBQUE7QUNJSjtBREZFO0VBQ0UsZ0RBQUE7RUFDQSx1REFBQTtFQUNBLHlCQUFBO0FDSUo7QURPRTtFQUNFLDhCQUFBO0VBRUEsOERBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRFFJO0VBQ0Usa0JBQUE7QUNOTjtBRFNJO0VBQ0UsWUFBQTtBQ1BOO0FEU007RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDUFI7QURVTTtFQUNFLGtCQUFBO0VBQ0EsdUNBQUE7RUFFQSxXQUFBO0FDVFI7QURXUTtFQUNFLGFBQUE7QUNUVjtBRFlRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVlY7QURhUTtFQUNFLGVBQUE7QUNYVjtBRGlCRTtFQUNFLDhCQUFBO0VBRUEscUNBQUE7RUFDQSxrQ0FBQTtBQ2hCSjtBRGtCSTtFQUNFLDJDQUFBO0FDaEJOO0FEbUJJO0VBQ0UsV0FBQTtFQUNILDJDQUFBO0VBQ0csaUNBQUE7RUFDQSxlQUFBO0FDakJOO0FEbUJNO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDakJSO0FEcUJJO0VBQ0UsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQ25CTjtBRHNCSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtBQ3JCTjtBRHlCRTtFQUNFLDhCQUFBO0VBRUEsc0VBQUE7RUFDQSw4QkFBQTtBQ3hCSjtBRDBCSTtFQUNFLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ3hCTjtBRDBCTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ3hCUjtBRDJCTTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxrRUFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUN6QlI7QUQyQlE7RUFDRSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQ3pCVjtBRDhCSTtFQUNFLGNBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDNUJOO0FEOEJNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDNUJSO0FEZ0NRO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQzlCVjtBRGtDTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ2hDUjtBRGtDUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7QUNqQ1Y7QURtQ1U7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEZBQUE7RUFDQSx5RkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0RBQUE7RUFDQSxzREFBQTtFQUNBLGdGQUFBO0VBQ0EsaURBQUE7RUFDQSxxREFBQTtFQUNBLHVDQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7QUNsQ1oiLCJmaWxlIjoic3JjL2FwcC9kZWFscy9saXN0aW5nL3N0eWxlcy9kZWFscy1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvaW9uLWNvbG9yXCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAtLXBhZ2UtY291bnRkb3duLWZpbGwtc2hhZG93LWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrZXN0LXJnYiksIDAuMik7XG4gIC0tcGFnZS1pdGVtLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuMSk7XG4gIC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0OiAzMHB4O1xuICAtLXBhZ2UtY291bnRkb3duLWd1dHRlcjogM3B4O1xuXG4gIC0tcGFnZS1leHBpcmVkLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAtLXBhZ2UtZW5kcy1zb29uLWNvbG9yOiAjRkZBQjZCO1xuICAtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3I6ICM3MERGNzA7XG5cbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG5cbiAgLS1wYWdlLWNvbG9yOiAjNzBERjcwO1xuXG4gIC8vIEFkZCBjdXN0b20gY29sb3JzIHRvIHVzZSB3aXRoIFtjb2xvcl0gcHJvcGVydHlcbiAgQGluY2x1ZGUgaW9uLWNvbG9yKCdjbGFpbScpIHtcbiAgICAtLWlvbi1jb2xvci1jbGFpbTogIzcwREY3MDtcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1yZ2I6IDExMiwyMjMsMTEyO1xuICAgIC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0OiAjRkZGRkZGO1xuICAgIC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItY2xhaW0tc2hhZGU6ICM2M0M0NjM7XG4gICAgLS1pb24tY29sb3ItY2xhaW0tdGludDogIzdFRTI3RTtcbiAgfVxufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5kZWFscy1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5saXN0aW5nLWl0ZW0ge1xuICAmLmVuZGVkIHtcbiAgICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgfVxuICAmLmltbWluZW50LWVuZCB7XG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xuICB9XG4gICYuZW5kcy1zb29uIHtcbiAgICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1lbmRzLXNvb24tY29sb3IpO1xuICAgIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1lbmRzLXNvb24tY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIH1cbiAgJi5kaXN0YW50LWVuZCB7XG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xuICAgIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggdmFyKC0tcGFnZS1pdGVtLXNoYWRvdy1jb2xvcik7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAqIDMpO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yKTtcblxuICAudG9wLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC4xKTtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmxvZ28tY29sIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgICAgIGZsZXgtZ3JvdzogMDtcblxuICAgICAgLmV4cGlyZWQtY3RhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICAgICAgfVxuXG4gICAgICAuY2xhaW0tYnV0dG9uIHtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG5cbiAgICAgICAgbWFyZ2luOiAwcHg7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24tY3RhIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWlkZGxlLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLmluZm8tY29sIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgfVxuXG4gICAgLml0ZW0tbmFtZSB7XG4gICAgICBtYXJnaW46IDBweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAgIC5uYW1lLWFuY2hvciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuYm9va21hcmstYnV0dG9uIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogNXB4O1xuXG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cblxuICAuYm90dG9tLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAuY29kZS13cmFwcGVyIHtcbiAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAgIC5jb2RlLWN0YSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLml0ZW0tY29kZSB7XG4gICAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0KTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1wYWdlLWRlYWwtY29kZS1oZWlnaHQpIC8gMik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICYuZXhwaXJlZCB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50aW1lLWxlZnQtd3JhcHBlciB7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICAgLmV4cGlyYXRpb24tY3RhIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICB9XG5cbiAgICAgICY6bm90KC5jb3VudGRvd24tYWN0aXZlKSB7XG4gICAgICAgIC5pdGVtLXRpbWUtbGVmdCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtZGVhbC1jb2xvcik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuY291bnRkb3duLWFjdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmNvdW50ZG93bi13cmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgLy8gU2V0IHBvc2l0aW9uIGFic29sdXRlIHNvIHRoYXQgdGhlIHBhcmVudCBkb2VuJ3QgY291bnQgdGhlIGhlaWdodCBvZiB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAwcHg7XG5cbiAgICAgICAgICBhcHAtY291bnRkb3duLXRpbWVyLml0ZW0tY291bnRkb3duIHtcbiAgICAgICAgICAgIC0tY291bnRkb3duLXRpbWUtbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi10aW1lLXBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luOiB2YXIoLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXIpIHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgMHB4O1xuICAgICAgICAgICAgLS1jb3VudGRvd24taW5uZXItdGltZS1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi1maWxsLWJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tZmlsbC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCB2YXIoLS1wYWdlLWNvdW50ZG93bi1maWxsLXNoYWRvdy1jb2xvcik7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdW5pdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi10aW1lLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyKSAqIC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmtlc3QtcmdiKSwgMC4yKTtcbiAgLS1wYWdlLWl0ZW0tc2hhZG93LWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC4xKTtcbiAgLS1wYWdlLWRlYWwtY29kZS1oZWlnaHQ6IDMwcHg7XG4gIC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyOiAzcHg7XG4gIC0tcGFnZS1leHBpcmVkLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAtLXBhZ2UtZW5kcy1zb29uLWNvbG9yOiAjRkZBQjZCO1xuICAtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3I6ICM3MERGNzA7XG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAtLXBhZ2UtY29sb3I6ICM3MERGNzA7XG4gIC0taW9uLWNvbG9yLWNsYWltOiAjNzBERjcwO1xuICAtLWlvbi1jb2xvci1jbGFpbS1yZ2I6IDExMiwyMjMsMTEyO1xuICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdDogI0ZGRkZGRjtcbiAgLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItY2xhaW0tc2hhZGU6ICM2M0M0NjM7XG4gIC0taW9uLWNvbG9yLWNsYWltLXRpbnQ6ICM3RUUyN0U7XG59XG46aG9zdCAuaW9uLWNvbG9yLWNsYWltIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWNsYWltKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWNsYWltLXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWNsYWltLXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItY2xhaW0tdGludCkgIWltcG9ydGFudDtcbn1cblxuLmRlYWxzLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmxpc3RpbmctaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggdmFyKC0tcGFnZS1pdGVtLXNoYWRvdy1jb2xvcik7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAqIDMpO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yKTtcbn1cbi5saXN0aW5nLWl0ZW0uZW5kZWQge1xuICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xufVxuLmxpc3RpbmctaXRlbS5pbW1pbmVudC1lbmQge1xuICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1lbmRzLXNvb24tY29sb3IpO1xuICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xufVxuLmxpc3RpbmctaXRlbS5lbmRzLXNvb24ge1xuICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1lbmRzLXNvb24tY29sb3IpO1xuICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbn1cbi5saXN0aW5nLWl0ZW0uZGlzdGFudC1lbmQge1xuICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcik7XG4gIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcik7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG59XG4ubGlzdGluZy1pdGVtIC50b3Atcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4xKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxpc3RpbmctaXRlbSAudG9wLXJvdyAubG9nby1jb2wge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ubGlzdGluZy1pdGVtIC50b3Atcm93IC5jYWxsLXRvLWFjdGlvbi1jb2wge1xuICBmbGV4LWdyb3c6IDA7XG59XG4ubGlzdGluZy1pdGVtIC50b3Atcm93IC5jYWxsLXRvLWFjdGlvbi1jb2wgLmV4cGlyZWQtY3RhIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xufVxuLmxpc3RpbmctaXRlbSAudG9wLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIC5jbGFpbS1idXR0b24ge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubGlzdGluZy1pdGVtIC50b3Atcm93IC5jYWxsLXRvLWFjdGlvbi1jb2wgLmNsYWltLWJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubGlzdGluZy1pdGVtIC50b3Atcm93IC5jYWxsLXRvLWFjdGlvbi1jb2wgLmNsYWltLWJ1dHRvbiAuYnV0dG9uLWN0YSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmxpc3RpbmctaXRlbSAudG9wLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIC5jbGFpbS1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubGlzdGluZy1pdGVtIC5taWRkbGUtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmxpc3RpbmctaXRlbSAubWlkZGxlLXJvdyAuaW5mby1jb2wge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmxpc3RpbmctaXRlbSAubWlkZGxlLXJvdyAuaXRlbS1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmxpc3RpbmctaXRlbSAubWlkZGxlLXJvdyAuaXRlbS1uYW1lIC5uYW1lLWFuY2hvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubGlzdGluZy1pdGVtIC5taWRkbGUtcm93IC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubGlzdGluZy1pdGVtIC5taWRkbGUtcm93IC5ib29rbWFyay1idXR0b24ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgLS1wYWRkaW5nLWVuZDogNXB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyAuY29kZS13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cgLmNvZGUtd3JhcHBlciAuY29kZS1jdGEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC5jb2RlLXdyYXBwZXIgLml0ZW0tY29kZSB7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1wYWdlLWRlYWwtY29kZS1oZWlnaHQpIC8gMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyAuY29kZS13cmFwcGVyIC5pdGVtLWNvZGUuZXhwaXJlZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cgLnRpbWUtbGVmdC13cmFwcGVyIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyAudGltZS1sZWZ0LXdyYXBwZXIgLmV4cGlyYXRpb24tY3RhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC50aW1lLWxlZnQtd3JhcHBlcjpub3QoLmNvdW50ZG93bi1hY3RpdmUpIC5pdGVtLXRpbWUtbGVmdCB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWRlYWwtY29sb3IpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC50aW1lLWxlZnQtd3JhcHBlci5jb3VudGRvd24tYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cgLnRpbWUtbGVmdC13cmFwcGVyLmNvdW50ZG93bi1hY3RpdmUgLmNvdW50ZG93bi13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cgLnRpbWUtbGVmdC13cmFwcGVyLmNvdW50ZG93bi1hY3RpdmUgLmNvdW50ZG93bi13cmFwcGVyIGFwcC1jb3VudGRvd24tdGltZXIuaXRlbS1jb3VudGRvd24ge1xuICAtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4O1xuICAtLWNvdW50ZG93bi10aW1lLXBhZGRpbmc6IDBweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW46IHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgdmFyKC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyKSAwcHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlcjogbm9uZTtcbiAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jb3VudGRvd24tZmlsbC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCB2YXIoLS1wYWdlLWNvdW50ZG93bi1maWxsLXNoYWRvdy1jb2xvcik7XG4gIC0tY291bnRkb3duLXZhbHVlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gIC0tY291bnRkb3duLXVuaXQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNvdW50ZG93bi10aW1lLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgKiAtMSk7XG59IiwiQG1peGluIGlvbi1jb2xvcigkY29sb3IpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgLmlvbi1jb2xvci0jeyRjb2xvcn0ge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0pICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tcmdiKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tc2hhZGUpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS10aW50KSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/deals/listing/styles/deals-listing.shell.scss":
  /*!***************************************************************!*\
    !*** ./src/app/deals/listing/styles/deals-listing.shell.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDealsListingStylesDealsListingShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --shell-color: #70DF70;\n  --shell-color-rgb: 112,223,112;\n}\n\napp-image-shell.deal-logo {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px;\n}\n\n.item-name app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n\n.item-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n}\n\n.item-code > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 60px;\n}\n\n.item-code > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.item-time-left > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 60px;\n}\n\n.item-time-left > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9kZWFscy9saXN0aW5nL3N0eWxlcy9kZWFscy1saXN0aW5nLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3Rpbmcuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7QUNERjs7QURXQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7RUFDQSxnQ0FBQTtBQ1JGOztBRFdBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQ1JGOztBRFdBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQ1JGOztBRFdBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNSRjs7QURVRTtFQUNFLGNBQUE7QUNSSjs7QURZQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDVEY7O0FEV0U7RUFDRSxjQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9kZWFscy9saXN0aW5nL3N0eWxlcy9kZWFscy1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogIzcwREY3MDtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDExMiwyMjMsMTEyO1xufVxuXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxuOmhvc3QoLmlzLXNoZWxsKSB7XG4gIC8vIGlvbi1jb250ZW50IHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLmRlYWwtbG9nbyB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZTogMThweDtcbn1cblxuLml0ZW0tbmFtZSAgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5pdGVtLWNvZGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA2MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5pdGVtLXRpbWUtbGVmdCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDYwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogIzcwREY3MDtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDExMiwyMjMsMTEyO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGVhbC1sb2dvIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAxOHB4O1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uaXRlbS1jb2RlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cbi5pdGVtLWNvZGUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4uaXRlbS10aW1lLWxlZnQgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuLml0ZW0tdGltZS1sZWZ0ID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn0iXX0= */";
    /***/
  }
}]);
//# sourceMappingURL=deals-listing-deals-listing-module-es5.js.map