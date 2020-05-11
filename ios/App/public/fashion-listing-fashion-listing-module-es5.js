function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fashion-listing-fashion-listing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fashion/listing/fashion-listing.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fashion/listing/fashion-listing.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFashionListingFashionListingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Fashion Listing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"fashion-listing-content\">\n  <ng-container *ngIf=\"listing?.items\">\n    <ion-row class=\"items-row\">\n      <ion-col size=\"6\" class=\"listing-item\" *ngFor=\"let item of listing.items\">\n        <div class=\"item-image-wrapper\">\n          <a class=\"image-anchor\" [routerLink]=\"['/app/categories/fashion/', item.slug]\">\n            <app-aspect-ratio [ratio]=\"{w: 3, h: 4}\">\n              <app-image-shell class=\"item-image\" animation=\"spinner\" [src]=\"item.image\" [alt]=\"'product image'\"></app-image-shell>\n            </app-aspect-ratio>\n          </a>\n        </div>\n        <ion-row class=\"item-body\">\n          <ion-col size=\"12\" class=\"main-info\">\n            <h4 class=\"item-name\">\n              <a class=\"name-anchor\" [routerLink]=\"['/app/categories/fashion/', item.slug]\">\n                <app-text-shell animation=\"gradient\" [data]=\"item.name\"></app-text-shell>\n              </a>\n            </h4>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-row class=\"secondary-info\">\n              <ion-col class=\"price-col\">\n                <span class=\"item-sale-price\">\n                  <app-text-shell animation=\"gradient\" [data]=\"item.salePrice | currency\"></app-text-shell>\n                </span>\n              </ion-col>\n              <ng-container *ngIf=\"item.price != '0'\">\n                <ion-col class=\"separator\">\n                </ion-col>\n                <ion-col class=\"price-col\">\n                  <span class=\"item-original-price\">\n                    <app-text-shell animation=\"gradient\" [data]=\"item.price | currency\"></app-text-shell>\n                  </span>\n                </ion-col>\n              </ng-container>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/fashion/listing/fashion-listing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/fashion/listing/fashion-listing.module.ts ***!
    \***********************************************************/

  /*! exports provided: FashionListingPageModule */

  /***/
  function srcAppFashionListingFashionListingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionListingPageModule", function () {
      return FashionListingPageModule;
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


    var _fashion_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./fashion-listing.page */
    "./src/app/fashion/listing/fashion-listing.page.ts");
    /* harmony import */


    var _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./fashion-listing.resolver */
    "./src/app/fashion/listing/fashion-listing.resolver.ts");
    /* harmony import */


    var _fashion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../fashion.service */
    "./src/app/fashion/fashion.service.ts");

    var routes = [{
      path: '',
      component: _fashion_listing_page__WEBPACK_IMPORTED_MODULE_8__["FashionListingPage"],
      resolve: {
        data: _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FashionListingResolver"]
      }
    }];

    var FashionListingPageModule = function FashionListingPageModule() {
      _classCallCheck(this, FashionListingPageModule);
    };

    FashionListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      declarations: [_fashion_listing_page__WEBPACK_IMPORTED_MODULE_8__["FashionListingPage"]],
      providers: [_fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FashionListingResolver"], _fashion_service__WEBPACK_IMPORTED_MODULE_10__["FashionService"]]
    })], FashionListingPageModule);
    /***/
  },

  /***/
  "./src/app/fashion/listing/fashion-listing.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/fashion/listing/fashion-listing.page.ts ***!
    \*********************************************************/

  /*! exports provided: FashionListingPage */

  /***/
  function srcAppFashionListingFashionListingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionListingPage", function () {
      return FashionListingPage;
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

    var FashionListingPage = /*#__PURE__*/function () {
      function FashionListingPage(route) {
        _classCallCheck(this, FashionListingPage);

        this.route = route;
      }

      _createClass(FashionListingPage, [{
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

      return FashionListingPage;
    }();

    FashionListingPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FashionListingPage.prototype, "isShell", null);
    FashionListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fashion-listing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fashion-listing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fashion/listing/fashion-listing.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/fashion-listing.page.scss */
      "./src/app/fashion/listing/styles/fashion-listing.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/fashion-listing.shell.scss */
      "./src/app/fashion/listing/styles/fashion-listing.shell.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], FashionListingPage);
    /***/
  },

  /***/
  "./src/app/fashion/listing/fashion-listing.resolver.ts":
  /*!*************************************************************!*\
    !*** ./src/app/fashion/listing/fashion-listing.resolver.ts ***!
    \*************************************************************/

  /*! exports provided: FashionListingResolver */

  /***/
  function srcAppFashionListingFashionListingResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionListingResolver", function () {
      return FashionListingResolver;
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


    var _fashion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../fashion.service */
    "./src/app/fashion/fashion.service.ts");

    var FashionListingResolver = /*#__PURE__*/function () {
      function FashionListingResolver(fashionService) {
        _classCallCheck(this, FashionListingResolver);

        this.fashionService = fashionService;
      }

      _createClass(FashionListingResolver, [{
        key: "resolve",
        value: function resolve() {
          var dataSource = this.fashionService.getListingDataSource();
          var dataStore = this.fashionService.getListingStore(dataSource);
          return dataStore;
        }
      }]);

      return FashionListingResolver;
    }();

    FashionListingResolver.ctorParameters = function () {
      return [{
        type: _fashion_service__WEBPACK_IMPORTED_MODULE_2__["FashionService"]
      }];
    };

    FashionListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fashion_service__WEBPACK_IMPORTED_MODULE_2__["FashionService"]])], FashionListingResolver);
    /***/
  },

  /***/
  "./src/app/fashion/listing/styles/fashion-listing.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/fashion/listing/styles/fashion-listing.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFashionListingStylesFashionListingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-items-gutter: calc(var(--page-margin) / 2);\n  --page-color: #cb328f;\n}\n\n.fashion-listing-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.items-row {\n  --ion-grid-column-padding: 0;\n}\n\n.items-row .listing-item {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.items-row .listing-item:nth-child(odd) {\n  padding-right: var(--page-items-gutter);\n}\n\n.items-row .listing-item:nth-child(even) {\n  padding-left: var(--page-items-gutter);\n}\n\n.items-row .listing-item .item-image-wrapper {\n  border: 1px solid var(--ion-color-light-shade);\n}\n\n.items-row .listing-item .item-image-wrapper .image-anchor {\n  display: block;\n}\n\n.items-row .listing-item .item-body {\n  --ion-grid-column-padding: 0px;\n  padding: 5px 5px 0px;\n  text-align: center;\n}\n\n.items-row .listing-item .item-body .main-info {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.items-row .listing-item .item-body .main-info .item-name {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.items-row .listing-item .item-body .main-info .item-name .name-anchor {\n  color: var(--ion-color-primary);\n  display: block;\n  text-decoration: none;\n}\n\n.items-row .listing-item .item-body .secondary-info {\n  align-items: center;\n}\n\n.items-row .listing-item .item-body .secondary-info .price-col:first-child {\n  padding-right: calc(var(--page-margin) / 2);\n  text-align: right;\n}\n\n.items-row .listing-item .item-body .secondary-info .price-col:first-child:last-child {\n  text-align: center;\n}\n\n.items-row .listing-item .item-body .secondary-info .price-col:last-child {\n  padding-left: calc(var(--page-margin) / 2);\n  text-align: left;\n}\n\n.items-row .listing-item .item-body .secondary-info .separator {\n  max-width: 0px;\n  border-right: solid 2px var(--ion-color-light-shade);\n  align-self: stretch;\n}\n\n.items-row .listing-item .item-body .secondary-info .item-sale-price {\n  display: block;\n  font-weight: 400;\n  color: var(--page-color);\n  font-size: 16px;\n}\n\n.items-row .listing-item .item-body .secondary-info .item-original-price {\n  display: block;\n  text-decoration: line-through;\n  color: var(--ion-color-medium-shade);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9mYXNoaW9uL2xpc3Rpbmcvc3R5bGVzL2Zhc2hpb24tbGlzdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zhc2hpb24vbGlzdGluZy9zdHlsZXMvZmFzaGlvbi1saXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFFQSxpREFBQTtFQUNBLHFCQUFBO0FDRkY7O0FETUE7RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FDSEY7O0FETUE7RUFDRSw0QkFBQTtBQ0hGOztBREtFO0VBQ0UsMkNBQUE7QUNISjs7QURLSTtFQUNFLHVDQUFBO0FDSE47O0FETUk7RUFDRSxzQ0FBQTtBQ0pOOztBRE9JO0VBQ0UsOENBQUE7QUNMTjs7QURPTTtFQUNFLGNBQUE7QUNMUjs7QURTSTtFQUNFLDhCQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtBQ1JOOztBRFVNO0VBQ0UsMkNBQUE7QUNSUjs7QURVUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNUVjs7QURXVTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDVFo7O0FEY007RUFDRSxtQkFBQTtBQ1pSOztBRGVVO0VBQ0UsMkNBQUE7RUFDQSxpQkFBQTtBQ2JaOztBRGVZO0VBQ0Usa0JBQUE7QUNiZDs7QURpQlU7RUFDRSwwQ0FBQTtFQUNBLGdCQUFBO0FDZlo7O0FEbUJRO0VBQ0UsY0FBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7QUNqQlY7O0FEb0JRO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDbEJWOztBRHFCUTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtBQ25CViIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vbGlzdGluZy9zdHlsZXMvZmFzaGlvbi1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1pdGVtcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS1jb2xvcjogI2NiMzI4Zjtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uZmFzaGlvbi1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4uaXRlbXMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMDtcblxuICAubGlzdGluZy1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLWl0ZW1zLWd1dHRlcik7XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLWl0ZW1zLWd1dHRlcik7XG4gICAgfVxuXG4gICAgLml0ZW0taW1hZ2Utd3JhcHBlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gICAgICAuaW1hZ2UtYW5jaG9yIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tYm9keSB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmc6IDVweCA1cHggMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAubWFpbi1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgICAuaXRlbS1uYW1lIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgIC5uYW1lLWFuY2hvciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zZWNvbmRhcnktaW5mbyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLnByaWNlLWNvbCB7XG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2VwYXJhdG9yIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDBweDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1zYWxlLXByaWNlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1vcmlnaW5hbC1wcmljZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtaXRlbXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZ2UtY29sb3I6ICNjYjMyOGY7XG59XG5cbi5mYXNoaW9uLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG5cbi5pdGVtcy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbTpudGgtY2hpbGQob2RkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtaXRlbXMtZ3V0dGVyKTtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbTpudGgtY2hpbGQoZXZlbikge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtaXRlbXMtZ3V0dGVyKTtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1pbWFnZS13cmFwcGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1pbWFnZS13cmFwcGVyIC5pbWFnZS1hbmNob3Ige1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiA1cHggNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIC5pdGVtLWJvZHkgLm1haW4taW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSAubWFpbi1pbmZvIC5pdGVtLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5tYWluLWluZm8gLml0ZW0tbmFtZSAubmFtZS1hbmNob3Ige1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIC5pdGVtLWJvZHkgLnNlY29uZGFyeS1pbmZvIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5zZWNvbmRhcnktaW5mbyAucHJpY2UtY29sOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSAuc2Vjb25kYXJ5LWluZm8gLnByaWNlLWNvbDpmaXJzdC1jaGlsZDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIC5pdGVtLWJvZHkgLnNlY29uZGFyeS1pbmZvIC5wcmljZS1jb2w6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5zZWNvbmRhcnktaW5mbyAuc2VwYXJhdG9yIHtcbiAgbWF4LXdpZHRoOiAwcHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSAuc2Vjb25kYXJ5LWluZm8gLml0ZW0tc2FsZS1wcmljZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5zZWNvbmRhcnktaW5mbyAuaXRlbS1vcmlnaW5hbC1wcmljZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/fashion/listing/styles/fashion-listing.shell.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/fashion/listing/styles/fashion-listing.shell.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFashionListingStylesFashionListingShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --shell-color: #cb328f;\n  --shell-color-rgb: 203,50,143;\n}\n\n:host(.is-shell) a {\n  pointer-events: none;\n}\n\napp-image-shell.item-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-name app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 14px;\n}\n\n.item-sale-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n\n.item-original-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9mYXNoaW9uL2xpc3Rpbmcvc3R5bGVzL2Zhc2hpb24tbGlzdGluZy5zaGVsbC5zY3NzIiwic3JjL2FwcC9mYXNoaW9uL2xpc3Rpbmcvc3R5bGVzL2Zhc2hpb24tbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ0RGOztBRFNFO0VBQ0Usb0JBQUE7QUNOSjs7QURVQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUNQRjs7QURVQTtFQUNFLG9FQUFBO0VBQ0EsK0RBQUE7RUFDQSw4QkFBQTtBQ1BGOztBRFVBO0VBQ0Usb0VBQUE7RUFDQSwrREFBQTtFQUNBLDhCQUFBO0FDUEY7O0FEVUE7RUFDRSxvRUFBQTtFQUNBLCtEQUFBO0VBQ0EsOEJBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vbGlzdGluZy9zdHlsZXMvZmFzaGlvbi1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2NiMzI4ZjtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIwMyw1MCwxNDM7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxuICBhIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaXRlbS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjM1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uaXRlbS1zYWxlLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLW9yaWdpbmFsLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4iLCI6aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNjYjMyOGY7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMDMsNTAsMTQzO1xufVxuXG46aG9zdCguaXMtc2hlbGwpIGEge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLml0ZW0taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLml0ZW0tbmFtZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLml0ZW0tc2FsZS1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uaXRlbS1vcmlnaW5hbC1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shell/data-store.ts":
  /*!*************************************!*\
    !*** ./src/app/shell/data-store.ts ***!
    \*************************************/

  /*! exports provided: ShellModel, DataStore */

  /***/
  function srcAppShellDataStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellModel", function () {
      return ShellModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataStore", function () {
      return DataStore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");

    var ShellModel = function ShellModel() {
      _classCallCheck(this, ShellModel);

      this.isShell = false;
    };

    var DataStore = /*#__PURE__*/function () {
      function DataStore(shellModel) {
        _classCallCheck(this, DataStore);

        this.shellModel = shellModel; // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the assets/config/app-shell.config.prod.json file.
        // tslint:disable-next-line:max-line-length

        this.networkDelay = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
      } // Static function with generics
      // (ref: https://stackoverflow.com/a/24293088/1116959)
      // Append a shell (T & ShellModel) to every value (T) emmited to the timeline


      _createClass(DataStore, [{
        key: "load",
        value: function load(dataSourceObservable) {
          var _this2 = this;

          var dataSourceWithShellObservable = DataStore.AppendShell(dataSourceObservable, this.shellModel, this.networkDelay);
          dataSourceWithShellObservable.subscribe(function (dataValue) {
            _this2.timeline.next(dataValue);
          });
        }
      }, {
        key: "state",
        get: function get() {
          return this.timeline.asObservable();
        }
      }], [{
        key: "AppendShell",
        value: function AppendShell(dataObservable, shellModel) {
          var networkDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;
          var delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(networkDelay)); // Assign shell flag accordingly
          // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([delayObservable, dataObservable]).pipe( // Dismiss unnecessary delayValue
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                delayValue = _ref2[0],
                dataValue = _ref2[1];

            return Object.assign(dataValue, {
              isShell: false
            });
          }), // Set the shell model as the initial value
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(Object.assign(shellModel, {
            isShell: true
          })));
        }
      }]);

      return DataStore;
    }();
    /***/

  }
}]);
//# sourceMappingURL=fashion-listing-fashion-listing-module-es5.js.map