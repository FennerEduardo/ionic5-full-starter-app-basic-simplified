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

    var DealsListingPage =
    /*#__PURE__*/
    function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/deals/listing/deals-listing.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/deals-listing.page.scss */
      "./src/app/deals/listing/styles/deals-listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/deals-listing.shell.scss */
      "./src/app/deals/listing/styles/deals-listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/deals-listing.ios.scss */
      "./src/app/deals/listing/styles/deals-listing.ios.scss")).default]
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

    var DealsListingResolver =
    /*#__PURE__*/
    function () {
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


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-countdown-fill-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.2);\n  --page-item-shadow-color: rgba(var(--ion-color-dark-rgb), .1);\n  --page-deal-code-height: 30px;\n  --page-countdown-gutter: 3px;\n  --page-expired-color: var(--ion-color-medium-tint);\n  --page-ends-soon-color: #FFAB6B;\n  --page-distant-end-color: #70DF70;\n  --page-deal-color: var(--ion-color-medium);\n  --page-deal-border-color: var(--ion-color-light-shade);\n  --page-color: #70DF70;\n  --ion-color-claim: #70DF70;\n  --ion-color-claim-rgb: 112,223,112;\n  --ion-color-claim-contrast: #FFFFFF;\n  --ion-color-claim-contrast-rgb: 255,255,255;\n  --ion-color-claim-shade: #63C463;\n  --ion-color-claim-tint: #7EE27E;\n}\n:host .ion-color-claim {\n  --ion-color-base: var(--ion-color-claim) !important;\n  --ion-color-base-rgb: var(--ion-color-claim-rgb) !important;\n  --ion-color-contrast: var(--ion-color-claim-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-claim-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-claim-shade) !important;\n  --ion-color-tint: var(--ion-color-claim-tint) !important;\n}\n.deals-listing-content {\n  --background: var(--page-background);\n}\n.listing-item {\n  background-color: var(--ion-color-lightest);\n  margin: var(--page-margin);\n  border-radius: var(--app-fair-radius);\n  box-shadow: 1px 1px 4px 1px var(--page-item-shadow-color);\n  border-bottom-style: solid;\n  border-bottom-width: calc((var(--page-margin) / 2) * 3);\n  border-bottom-color: var(--page-deal-border-color);\n}\n.listing-item.ended {\n  --page-deal-color: var(--page-expired-color);\n  --page-deal-border-color: var(--page-expired-color);\n  border-bottom-style: none;\n}\n.listing-item.imminent-end {\n  --page-deal-color: var(--page-ends-soon-color);\n  --page-deal-border-color: var(--page-distant-end-color);\n}\n.listing-item.ends-soon {\n  --page-deal-color: var(--page-ends-soon-color);\n  --page-deal-border-color: var(--page-ends-soon-color);\n  border-bottom-style: none;\n}\n.listing-item.distant-end {\n  --page-deal-color: var(--page-distant-end-color);\n  --page-deal-border-color: var(--page-distant-end-color);\n  border-bottom-style: none;\n}\n.listing-item .top-row {\n  --ion-grid-column-padding: 0px;\n  border-bottom: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n  padding: calc(var(--page-margin) / 2);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.listing-item .top-row .logo-col {\n  align-self: center;\n}\n.listing-item .top-row .call-to-action-col {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n}\n.listing-item .top-row .call-to-action-col .expired-cta {\n  color: var(--page-expired-color);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0.8px;\n}\n.listing-item .top-row .call-to-action-col .claim-button {\n  --box-shadow: none;\n  --border-radius: var(--app-fair-radius);\n  margin: 0px;\n}\n.listing-item .top-row .call-to-action-col .claim-button:focus {\n  outline: none;\n}\n.listing-item .top-row .call-to-action-col .claim-button .button-cta {\n  display: block;\n  line-height: 18px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.listing-item .top-row .call-to-action-col .claim-button ion-icon {\n  font-size: 18px;\n}\n.listing-item .middle-row {\n  --ion-grid-column-padding: 0px;\n  padding: calc(var(--page-margin) / 2);\n  padding-bottom: var(--page-margin);\n}\n.listing-item .middle-row .info-col {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.listing-item .middle-row .item-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-tint);\n  font-size: 16px;\n}\n.listing-item .middle-row .item-name .name-anchor {\n  display: block;\n  text-decoration: none;\n}\n.listing-item .middle-row .item-description {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n}\n.listing-item .middle-row .bookmark-button {\n  --padding-start: 5px;\n  --padding-end: 5px;\n  margin: 0px;\n  font-size: 16px;\n}\n.listing-item .bottom-row {\n  --ion-grid-column-padding: 0px;\n  padding: 0px calc(var(--page-margin) / 2) calc(var(--page-margin) / 2);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.listing-item .bottom-row .code-wrapper {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n.listing-item .bottom-row .code-wrapper .code-cta {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  display: block;\n}\n.listing-item .bottom-row .code-wrapper .item-code {\n  height: var(--page-deal-code-height);\n  text-transform: uppercase;\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  border: 2px solid var(--page-color);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1;\n  border-radius: calc(var(--page-deal-code-height) / 2);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.listing-item .bottom-row .code-wrapper .item-code.expired {\n  border-color: var(--page-expired-color);\n  color: var(--page-expired-color);\n  opacity: 0.6;\n}\n.listing-item .bottom-row .time-left-wrapper {\n  flex-shrink: 0;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.listing-item .bottom-row .time-left-wrapper .expiration-cta {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  display: block;\n  text-transform: uppercase;\n  text-align: end;\n}\n.listing-item .bottom-row .time-left-wrapper:not(.countdown-active) .item-time-left {\n  color: var(--page-deal-color);\n  font-size: 14px;\n  font-weight: 500;\n  display: block;\n  text-align: end;\n}\n.listing-item .bottom-row .time-left-wrapper.countdown-active {\n  display: block;\n  position: relative;\n}\n.listing-item .bottom-row .time-left-wrapper.countdown-active .countdown-wrapper {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  position: absolute;\n  right: 0px;\n}\n.listing-item .bottom-row .time-left-wrapper.countdown-active .countdown-wrapper app-countdown-timer.item-countdown {\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: var(--page-countdown-gutter) var(--page-countdown-gutter) 0px;\n  --countdown-inner-time-padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: var(--app-narrow-radius);\n  --countdown-fill-background: var(--ion-color-lightest);\n  --countdown-fill-shadow: 0px 0px 5px 0px var(--page-countdown-fill-shadow-color);\n  --countdown-value-color: var(--ion-color-darkest);\n  --countdown-unit-color: var(--ion-color-medium-shade);\n  --countdown-time-flex-direction: column;\n  font-weight: 500;\n  font-size: 14px;\n  margin-right: calc(var(--page-countdown-gutter) * -1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9kZWFscy9saXN0aW5nL3N0eWxlcy9kZWFscy1saXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5wYWdlLnNjc3MiLCIvVXNlcnMvZGF5YW5hL3dvcmsvaW9uaWMvdGVtcGxhdGVzL2lvbjRmdWxscHdhL3NyYy90aGVtZS9taXhpbnMvaW9uLWNvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQ0FBQTtFQUNBLDhDQUFBO0VBRUEsMkVBQUE7RUFDQSw2REFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrREFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFFQSwwQ0FBQTtFQUNBLHNEQUFBO0VBRUEscUJBQUE7RUFJRSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUNWSjtBQ2hCRTtFQUNFLG1EQUFBO0VBQ0EsMkRBQUE7RUFDQSxnRUFBQTtFQUNBLHdFQUFBO0VBQ0EsMERBQUE7RUFDQSx3REFBQTtBRGtCSjtBRE9BO0VBQ0Usb0NBQUE7QUNKRjtBRE9BO0VBcUJFLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlEQUFBO0VBQ0EsMEJBQUE7RUFDQSx1REFBQTtFQUNBLGtEQUFBO0FDeEJGO0FERkU7RUFDRSw0Q0FBQTtFQUNBLG1EQUFBO0VBQ0EseUJBQUE7QUNJSjtBREZFO0VBQ0UsOENBQUE7RUFDQSx1REFBQTtBQ0lKO0FERkU7RUFDRSw4Q0FBQTtFQUNBLHFEQUFBO0VBQ0EseUJBQUE7QUNJSjtBREZFO0VBQ0UsZ0RBQUE7RUFDQSx1REFBQTtFQUNBLHlCQUFBO0FDSUo7QURPRTtFQUNFLDhCQUFBO0VBRUEsOERBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTko7QURRSTtFQUNFLGtCQUFBO0FDTk47QURTSTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtBQ1BOO0FEU007RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDUFI7QURVTTtFQUNFLGtCQUFBO0VBQ0EsdUNBQUE7RUFFQSxXQUFBO0FDVFI7QURXUTtFQUNFLGFBQUE7QUNUVjtBRFlRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVlY7QURhUTtFQUNFLGVBQUE7QUNYVjtBRGlCRTtFQUNFLDhCQUFBO0VBRUEscUNBQUE7RUFDQSxrQ0FBQTtBQ2hCSjtBRGtCSTtFQUNFLDJDQUFBO0FDaEJOO0FEbUJJO0VBQ0UsV0FBQTtFQUNILDJDQUFBO0VBQ0csaUNBQUE7RUFDQSxlQUFBO0FDakJOO0FEbUJNO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDakJSO0FEcUJJO0VBQ0UsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQ25CTjtBRHNCSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtBQ3JCTjtBRHlCRTtFQUNFLDhCQUFBO0VBRUEsc0VBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDeEJKO0FEMEJJO0VBQ0UsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDeEJOO0FEMEJNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDeEJSO0FEMkJNO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ3pCUjtBRDJCUTtFQUNFLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDekJWO0FEOEJJO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FDNUJOO0FEOEJNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDNUJSO0FEZ0NRO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQzlCVjtBRGtDTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ2hDUjtBRGtDUTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FDakNWO0FEbUNVO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRGQUFBO0VBQ0EseUZBQUE7RUFDQSw2QkFBQTtFQUNBLHdEQUFBO0VBQ0Esc0RBQUE7RUFDQSxnRkFBQTtFQUNBLGlEQUFBO0VBQ0EscURBQUE7RUFDQSx1Q0FBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFEQUFBO0FDbENaIiwiZmlsZSI6InNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lvbi1jb2xvclwiO1xuXG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLS1wYWdlLWNvdW50ZG93bi1maWxsLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpLCAwLjIpO1xuICAtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjEpO1xuICAtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodDogMzBweDtcbiAgLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXI6IDNweDtcblxuICAtLXBhZ2UtZXhwaXJlZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgLS1wYWdlLWVuZHMtc29vbi1jb2xvcjogI0ZGQUI2QjtcbiAgLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yOiAjNzBERjcwO1xuXG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gIC0tcGFnZS1jb2xvcjogIzcwREY3MDtcblxuICAvLyBBZGQgY3VzdG9tIGNvbG9ycyB0byB1c2Ugd2l0aCBbY29sb3JdIHByb3BlcnR5XG4gIEBpbmNsdWRlIGlvbi1jb2xvcignY2xhaW0nKSB7XG4gICAgLS1pb24tY29sb3ItY2xhaW06ICM3MERGNzA7XG4gICAgLS1pb24tY29sb3ItY2xhaW0tcmdiOiAxMTIsMjIzLDExMjtcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdDogI0ZGRkZGRjtcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWNsYWltLXNoYWRlOiAjNjNDNDYzO1xuICAgIC0taW9uLWNvbG9yLWNsYWltLXRpbnQ6ICM3RUUyN0U7XG4gIH1cbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uZGVhbHMtbGlzdGluZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgJi5lbmRlZCB7XG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gICAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIH1cbiAgJi5pbW1pbmVudC1lbmQge1xuICAgIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWVuZHMtc29vbi1jb2xvcik7XG4gICAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbiAgfVxuICAmLmVuZHMtc29vbiB7XG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICB9XG4gICYuZGlzdGFudC1lbmQge1xuICAgIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbiAgICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIH1cblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4IHZhcigtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3IpO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgKiAzKTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcik7XG5cbiAgLnRvcC1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuMSk7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5sb2dvLWNvbCB7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gICAgICBmbGV4LWdyb3c6IDA7XG5cbiAgICAgIC5leHBpcmVkLWN0YSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgICAgIH1cblxuICAgICAgLmNsYWltLWJ1dHRvbiB7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuXG4gICAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLWN0YSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1pZGRsZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5pbmZvLWNvbCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIH1cblxuICAgIC5pdGVtLW5hbWUge1xuICAgICAgbWFyZ2luOiAwcHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAubmFtZS1hbmNob3Ige1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmJvb2ttYXJrLWJ1dHRvbiB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcblxuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgLmJvdHRvbS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmNvZGUtd3JhcHBlciB7XG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAuY29kZS1jdGEge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLWNvZGUge1xuICAgICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodCk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0KSAvIDIpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAmLmV4cGlyZWQge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGltZS1sZWZ0LXdyYXBwZXIge1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAgIC5leHBpcmF0aW9uLWN0YSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCguY291bnRkb3duLWFjdGl2ZSkge1xuICAgICAgICAuaXRlbS10aW1lLWxlZnQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWRlYWwtY29sb3IpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmNvdW50ZG93bi1hY3RpdmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5jb3VudGRvd24td3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIC8vIFNldCBwb3NpdGlvbiBhYnNvbHV0ZSBzbyB0aGF0IHRoZSBwYXJlbnQgZG9lbid0IGNvdW50IHRoZSBoZWlnaHQgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMHB4O1xuXG4gICAgICAgICAgYXBwLWNvdW50ZG93bi10aW1lci5pdGVtLWNvdW50ZG93biB7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4O1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdGltZS1wYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbjogdmFyKC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyKSB2YXIoLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXIpIDBweDtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWZpbGwtc2hhZG93OiAwcHggMHB4IDVweCAwcHggdmFyKC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3IpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLXVuaXQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgKiAtMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtY291bnRkb3duLWZpbGwtc2hhZG93LWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrZXN0LXJnYiksIDAuMik7XG4gIC0tcGFnZS1pdGVtLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuMSk7XG4gIC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0OiAzMHB4O1xuICAtLXBhZ2UtY291bnRkb3duLWd1dHRlcjogM3B4O1xuICAtLXBhZ2UtZXhwaXJlZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgLS1wYWdlLWVuZHMtc29vbi1jb2xvcjogI0ZGQUI2QjtcbiAgLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yOiAjNzBERjcwO1xuICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgLS1wYWdlLWNvbG9yOiAjNzBERjcwO1xuICAtLWlvbi1jb2xvci1jbGFpbTogIzcwREY3MDtcbiAgLS1pb24tY29sb3ItY2xhaW0tcmdiOiAxMTIsMjIzLDExMjtcbiAgLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3Q6ICNGRkZGRkY7XG4gIC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWNsYWltLXNoYWRlOiAjNjNDNDYzO1xuICAtLWlvbi1jb2xvci1jbGFpbS10aW50OiAjN0VFMjdFO1xufVxuOmhvc3QgLmlvbi1jb2xvci1jbGFpbSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1jbGFpbSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1jbGFpbS1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0LXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1jbGFpbS1zaGFkZSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWNsYWltLXRpbnQpICFpbXBvcnRhbnQ7XG59XG5cbi5kZWFscy1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5saXN0aW5nLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4IHZhcigtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3IpO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgKiAzKTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcik7XG59XG4ubGlzdGluZy1pdGVtLmVuZGVkIHtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbn1cbi5saXN0aW5nLWl0ZW0uaW1taW5lbnQtZW5kIHtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbn1cbi5saXN0aW5nLWl0ZW0uZW5kcy1zb29uIHtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWVuZHMtc29vbi1jb2xvcik7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG59XG4ubGlzdGluZy1pdGVtLmRpc3RhbnQtZW5kIHtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xuICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xufVxuLmxpc3RpbmctaXRlbSAudG9wLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuMSk7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saXN0aW5nLWl0ZW0gLnRvcC1yb3cgLmxvZ28tY29sIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmxpc3RpbmctaXRlbSAudG9wLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgZmxleC1ncm93OiAwO1xufVxuLmxpc3RpbmctaXRlbSAudG9wLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIC5leHBpcmVkLWN0YSB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbn1cbi5saXN0aW5nLWl0ZW0gLnRvcC1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCAuY2xhaW0tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gIG1hcmdpbjogMHB4O1xufVxuLmxpc3RpbmctaXRlbSAudG9wLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIC5jbGFpbS1idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmxpc3RpbmctaXRlbSAudG9wLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIC5jbGFpbS1idXR0b24gLmJ1dHRvbi1jdGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5saXN0aW5nLWl0ZW0gLnRvcC1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCAuY2xhaW0tYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmxpc3RpbmctaXRlbSAubWlkZGxlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5saXN0aW5nLWl0ZW0gLm1pZGRsZS1yb3cgLmluZm8tY29sIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5saXN0aW5nLWl0ZW0gLm1pZGRsZS1yb3cgLml0ZW0tbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5saXN0aW5nLWl0ZW0gLm1pZGRsZS1yb3cgLml0ZW0tbmFtZSAubmFtZS1hbmNob3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmxpc3RpbmctaXRlbSAubWlkZGxlLXJvdyAuaXRlbS1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmxpc3RpbmctaXRlbSAubWlkZGxlLXJvdyAuYm9va21hcmstYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cgLmNvZGUtd3JhcHBlciB7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC5jb2RlLXdyYXBwZXIgLmNvZGUtY3RhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyAuY29kZS13cmFwcGVyIC5pdGVtLWNvZGUge1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGFnZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0KSAvIDIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cgLmNvZGUtd3JhcHBlciAuaXRlbS1jb2RlLmV4cGlyZWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICBvcGFjaXR5OiAwLjY7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC50aW1lLWxlZnQtd3JhcHBlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cgLnRpbWUtbGVmdC13cmFwcGVyIC5leHBpcmF0aW9uLWN0YSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyAudGltZS1sZWZ0LXdyYXBwZXI6bm90KC5jb3VudGRvd24tYWN0aXZlKSAuaXRlbS10aW1lLWxlZnQge1xuICBjb2xvcjogdmFyKC0tcGFnZS1kZWFsLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyAudGltZS1sZWZ0LXdyYXBwZXIuY291bnRkb3duLWFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC50aW1lLWxlZnQtd3JhcHBlci5jb3VudGRvd24tYWN0aXZlIC5jb3VudGRvd24td3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC50aW1lLWxlZnQtd3JhcHBlci5jb3VudGRvd24tYWN0aXZlIC5jb3VudGRvd24td3JhcHBlciBhcHAtY291bnRkb3duLXRpbWVyLml0ZW0tY291bnRkb3duIHtcbiAgLS1jb3VudGRvd24tdGltZS1tYXJnaW46IDBweDtcbiAgLS1jb3VudGRvd24tdGltZS1wYWRkaW5nOiAwcHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luOiB2YXIoLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXIpIHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgMHB4O1xuICAtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXI6IG5vbmU7XG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY291bnRkb3duLWZpbGwtc2hhZG93OiAwcHggMHB4IDVweCAwcHggdmFyKC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3IpO1xuICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXIpICogLTEpO1xufSIsIkBtaXhpbiBpb24tY29sb3IoJGNvbG9yKSB7XG4gIEBjb250ZW50O1xuXG4gIC5pb24tY29sb3ItI3skY29sb3J9IHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LXJnYikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LXNoYWRlKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tdGludCkgIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */";
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