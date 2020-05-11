function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-estate-listing-real-estate-listing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/listing/real-estate-listing.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/listing/real-estate-listing.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRealEstateListingRealEstateListingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Real Estate Listing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"real-estate-listing-content\">\n  <div class=\"listing-item\" *ngFor=\"let item of listing.items\">\n    <ion-row class=\"image-row\">\n      <ion-col size=\"12\">\n        <a class=\"image-anchor\" [routerLink]=\"['/app/categories/real-estate/', item.slug]\">\n          <app-image-shell [display]=\"'cover'\" animation=\"spinner\" class=\"item-picture\" [src]=\"item.picture\">\n            <app-aspect-ratio [ratio]=\"{w:365, h:125}\">\n            </app-aspect-ratio>\n          </app-image-shell>\n        </a>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"description-row\">\n      <ion-col size=\"12\" class=\"details-col\">\n        <ion-row class=\"details-wrapper\">\n          <ion-col>\n            <h4 class=\"item-price\">\n              <span class=\"price-icon\">$</span>\n              <app-text-shell [data]=\"item.price\"></app-text-shell>\n            </h4>\n            <p class=\"item-address\">\n              <app-text-shell [data]=\"item.address\"></app-text-shell>\n            </p>\n          </ion-col>\n          <ion-col class=\"bookmark-col\" size=\"2\">\n            <ion-icon *ngIf=\"item.liked\" class=\"like-icon\" name=\"heart\"></ion-icon>\n            <ion-icon *ngIf=\"!item.liked\" class=\"like-icon\" name=\"heart-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col class=\"accommodations-col\" size=\"12\">\n        <ion-row class=\"accommodations-wrapper\">\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/custom-icons/real-estate/guests.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Guests</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.guests\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/custom-icons/real-estate/bedrooms.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Bedrooms</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.bedrooms\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/custom-icons/real-estate/bathroom.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Bathrooms</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.bathrooms\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/custom-icons/real-estate/patio.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Patios</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.patios\"></app-text-shell>\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"amenities-col\" *ngIf=\"item.amenities\">\n        <h5 class=\"amenities-title\">Amenities</h5>\n        <ion-row class=\"amenities-wrapper\">\n          <ng-container>\n            <ion-col class=\"item-amenity\" size=\"4\" *ngFor=\"let amenity of item.amenities.slice(0, 4); let i = index\">\n              <ion-icon *ngIf=\"amenity.icon\" class=\"amenity-icon\" [src]=\"amenity.icon\"></ion-icon>\n              <span class=\"amenity-value\">\n                <app-text-shell [data]=\"amenity.name\"></app-text-shell>\n              </span>\n            </ion-col>\n            <ion-col class=\"has-more-amenities\" *ngIf=\"i == 3 && item.amenities.length > 4\">\n              <span class=\"amenities-count\">+{{ item.amenities.length - 4 }}</span>\n            </ion-col>\n          </ng-container>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/real-estate/listing/real-estate-listing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/real-estate/listing/real-estate-listing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: RealEstateListingPageModule */

  /***/
  function srcAppRealEstateListingRealEstateListingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateListingPageModule", function () {
      return RealEstateListingPageModule;
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


    var _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./real-estate-listing.page */
    "./src/app/real-estate/listing/real-estate-listing.page.ts");
    /* harmony import */


    var _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./real-estate-listing.resolver */
    "./src/app/real-estate/listing/real-estate-listing.resolver.ts");
    /* harmony import */


    var _real_estate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../real-estate.service */
    "./src/app/real-estate/real-estate.service.ts");

    var routes = [{
      path: '',
      component: _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_8__["RealEstateListingPage"],
      resolve: {
        data: _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["RealEstateListingResolver"]
      }
    }];

    var RealEstateListingPageModule = function RealEstateListingPageModule() {
      _classCallCheck(this, RealEstateListingPageModule);
    };

    RealEstateListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      declarations: [_real_estate_listing_page__WEBPACK_IMPORTED_MODULE_8__["RealEstateListingPage"]],
      providers: [_real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["RealEstateListingResolver"], _real_estate_service__WEBPACK_IMPORTED_MODULE_10__["RealEstateService"]]
    })], RealEstateListingPageModule);
    /***/
  },

  /***/
  "./src/app/real-estate/listing/real-estate-listing.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/real-estate/listing/real-estate-listing.page.ts ***!
    \*****************************************************************/

  /*! exports provided: RealEstateListingPage */

  /***/
  function srcAppRealEstateListingRealEstateListingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateListingPage", function () {
      return RealEstateListingPage;
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

    var RealEstateListingPage = /*#__PURE__*/function () {
      function RealEstateListingPage(route) {
        _classCallCheck(this, RealEstateListingPage);

        this.route = route;
      }

      _createClass(RealEstateListingPage, [{
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

      return RealEstateListingPage;
    }();

    RealEstateListingPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RealEstateListingPage.prototype, "isShell", null);
    RealEstateListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-real-estate-listing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./real-estate-listing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/listing/real-estate-listing.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/real-estate-listing.page.scss */
      "./src/app/real-estate/listing/styles/real-estate-listing.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/real-estate-listing.shell.scss */
      "./src/app/real-estate/listing/styles/real-estate-listing.shell.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], RealEstateListingPage);
    /***/
  },

  /***/
  "./src/app/real-estate/listing/real-estate-listing.resolver.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/real-estate/listing/real-estate-listing.resolver.ts ***!
    \*********************************************************************/

  /*! exports provided: RealEstateListingResolver */

  /***/
  function srcAppRealEstateListingRealEstateListingResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateListingResolver", function () {
      return RealEstateListingResolver;
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


    var _real_estate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../real-estate.service */
    "./src/app/real-estate/real-estate.service.ts");

    var RealEstateListingResolver = /*#__PURE__*/function () {
      function RealEstateListingResolver(realEstateService) {
        _classCallCheck(this, RealEstateListingResolver);

        this.realEstateService = realEstateService;
      }

      _createClass(RealEstateListingResolver, [{
        key: "resolve",
        value: function resolve() {
          var dataSource = this.realEstateService.getListingDataSource();
          var dataStore = this.realEstateService.getListingStore(dataSource);
          return dataStore;
        }
      }]);

      return RealEstateListingResolver;
    }();

    RealEstateListingResolver.ctorParameters = function () {
      return [{
        type: _real_estate_service__WEBPACK_IMPORTED_MODULE_2__["RealEstateService"]
      }];
    };

    RealEstateListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_real_estate_service__WEBPACK_IMPORTED_MODULE_2__["RealEstateService"]])], RealEstateListingResolver);
    /***/
  },

  /***/
  "./src/app/real-estate/listing/styles/real-estate-listing.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/real-estate/listing/styles/real-estate-listing.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRealEstateListingStylesRealEstateListingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background);\n  --page-amenity-vertical-gutter: 6px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-color: #d9453a;\n}\n\n.real-estate-listing-content {\n  --background: var(--page-background);\n}\n\n.listing-item .image-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.listing-item .image-row .image-anchor {\n  display: block;\n}\n\n.listing-item .description-row {\n  --ion-grid-column-padding: 0px;\n  padding-bottom: var(--page-margin);\n}\n\n.listing-item .description-row .details-col {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) 0px;\n}\n\n.listing-item .description-row .details-col .details-wrapper {\n  justify-content: space-between;\n}\n\n.listing-item .description-row .details-col .details-wrapper .item-price {\n  margin: 0px 0px 5px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  display: flex;\n  align-items: center;\n}\n\n.listing-item .description-row .details-col .details-wrapper .item-price .price-icon {\n  margin-right: 5px;\n}\n\n.listing-item .description-row .details-col .details-wrapper .item-address {\n  margin: 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item .description-row .details-col .details-wrapper .bookmark-col {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.listing-item .description-row .details-col .details-wrapper .bookmark-col .like-icon {\n  font-size: 32px;\n  color: var(--page-color);\n}\n\n.listing-item .description-row .accommodations-col {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.listing-item .description-row .accommodations-col .accommodations-wrapper {\n  padding-top: calc(var(--page-margin));\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation + .item-accommodation {\n  padding-left: calc((var(--page-margin) / 2) * 3);\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-property {\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-value {\n  display: inline-block;\n  font-weight: 400;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n  margin-top: 4px;\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-name {\n  display: inline-block;\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-icon {\n  color: var(--ion-color-medium-tint);\n  font-size: 30px;\n}\n\n.listing-item .description-row .amenities-col {\n  padding: 0px var(--page-margin) calc(var(--page-margin) / 2);\n  background: var(--app-background-shade);\n}\n\n.listing-item .description-row .amenities-col .amenities-title {\n  margin: var(--page-margin) 0px calc(var(--page-margin) / 2);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--ion-color-medium-shade);\n}\n\n.listing-item .description-row .amenities-col .amenities-wrapper {\n  margin: 0px calc(var(--page-amenity-horizontal-gutter) * -1);\n}\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity {\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity .amenity-icon {\n  color: var(--ion-color-medium-tint);\n  font-size: 30px;\n  flex-shrink: 0;\n}\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity .amenity-value {\n  display: block;\n  font-weight: 300;\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n  margin-left: calc(var(--page-amenity-horizontal-gutter) * 2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9yZWFsLWVzdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLWVzdGF0ZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVhbC1lc3RhdGUvbGlzdGluZy9zdHlsZXMvcmVhbC1lc3RhdGUtbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQ0FBQTtFQUNBLHdDQUFBO0VBRUEsbUNBQUE7RUFDQSxxQ0FBQTtFQUVBLHFCQUFBO0FDSEY7O0FET0E7RUFDRSxvQ0FBQTtBQ0pGOztBRFFFO0VBQ0UsOEJBQUE7QUNMSjs7QURPSTtFQUNFLGNBQUE7QUNMTjs7QURTRTtFQUNFLDhCQUFBO0VBRUEsa0NBQUE7QUNSSjs7QURVSTtFQUNFLDREQUFBO0FDUk47O0FEVU07RUFDRSw4QkFBQTtBQ1JSOztBRFVRO0VBQ0UsbUJBQUE7RUFDSCxnQkFBQTtFQUNHLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDUlY7O0FEVVU7RUFDRSxpQkFBQTtBQ1JaOztBRFlRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ1ZWOztBRGFRO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDWFY7O0FEYVU7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUNYWjs7QURpQkk7RUFDRSxrREFBQTtBQ2ZOOztBRGlCTTtFQUNFLHFDQUFBO0FDZlI7O0FEa0JNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUNoQlI7O0FEa0JRO0VBQ0UsZ0RBQUE7QUNoQlY7O0FEbUJRO0VBQ0UsZUFBQTtFQUNBLG1DQUFBO0FDakJWOztBRG9CUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FDbEJWOztBRHFCUTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDbkJWOztBRHNCUTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQ3BCVjs7QUR5Qkk7RUFDRSw0REFBQTtFQUNBLHVDQUFBO0FDdkJOOztBRHlCTTtFQUNFLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQ3ZCUjs7QUQwQk07RUFDRSw0REFBQTtBQ3hCUjs7QUQwQlE7RUFDRSxrRkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDeEJWOztBRDBCVTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUN4Qlo7O0FEMkJVO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsNERBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUN6QloiLCJmaWxlIjoic3JjL2FwcC9yZWFsLWVzdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLWVzdGF0ZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXI6IDZweDtcbiAgLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXI6IDRweDtcblxuICAtLXBhZ2UtY29sb3I6ICNkOTQ1M2E7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLnJlYWwtZXN0YXRlLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmxpc3RpbmctaXRlbSB7XG4gIC5pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIC5pbWFnZS1hbmNob3Ige1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLmRlc2NyaXB0aW9uLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5kZXRhaWxzLWNvbCB7XG4gICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG5cbiAgICAgIC5kZXRhaWxzLXdyYXBwZXIge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLml0ZW0tcHJpY2Uge1xuICAgICAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gICAgXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgLnByaWNlLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tYWRkcmVzcyB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvb2ttYXJrLWNvbCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgLmxpa2UtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjY29tbW9kYXRpb25zLWNvbCB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikpO1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1hY2NvbW1vZGF0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgICAmICsgLml0ZW0tYWNjb21tb2RhdGlvbiB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAqIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29tbW9kYXRpb24tcHJvcGVydHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvbW1vZGF0aW9uLXZhbHVlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29tbW9kYXRpb24tbmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvbW1vZGF0aW9uLWljb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hbWVuaXRpZXMtY29sIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAgICAgLmFtZW5pdGllcy10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgIH1cblxuICAgICAgLmFtZW5pdGllcy13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpICogLTEpO1xuXG4gICAgICAgIC5pdGVtLWFtZW5pdHkge1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcik7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgLmFtZW5pdHktaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hbWVuaXR5LXZhbHVlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKSAqIDIpO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcjogNnB4O1xuICAtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcjogNHB4O1xuICAtLXBhZ2UtY29sb3I6ICNkOTQ1M2E7XG59XG5cbi5yZWFsLWVzdGF0ZS1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyAuaW1hZ2UtYW5jaG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtY29sIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIC5pdGVtLXByaWNlIHtcbiAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIC5pdGVtLXByaWNlIC5wcmljZS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtY29sIC5kZXRhaWxzLXdyYXBwZXIgLml0ZW0tYWRkcmVzcyB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIC5ib29rbWFyay1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIC5ib29rbWFyay1jb2wgLmxpa2UtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hY2NvbW1vZGF0aW9ucy1jb2wge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5pdGVtLWFjY29tbW9kYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hY2NvbW1vZGF0aW9ucy1jb2wgLml0ZW0tYWNjb21tb2RhdGlvbiArIC5pdGVtLWFjY29tbW9kYXRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpICogMyk7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFjY29tbW9kYXRpb25zLWNvbCAuaXRlbS1hY2NvbW1vZGF0aW9uIC5hY2NvbW1vZGF0aW9uLXByb3BlcnR5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5pdGVtLWFjY29tbW9kYXRpb24gLmFjY29tbW9kYXRpb24tdmFsdWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5pdGVtLWFjY29tbW9kYXRpb24gLmFjY29tbW9kYXRpb24tbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5pdGVtLWFjY29tbW9kYXRpb24gLmFjY29tbW9kYXRpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFtZW5pdGllcy1jb2wge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYW1lbml0aWVzLWNvbCAuYW1lbml0aWVzLXRpdGxlIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hbWVuaXRpZXMtY29sIC5hbWVuaXRpZXMtd3JhcHBlciB7XG4gIG1hcmdpbjogMHB4IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKSAqIC0xKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYW1lbml0aWVzLWNvbCAuYW1lbml0aWVzLXdyYXBwZXIgLml0ZW0tYW1lbml0eSB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hbWVuaXRpZXMtY29sIC5hbWVuaXRpZXMtd3JhcHBlciAuaXRlbS1hbWVuaXR5IC5hbWVuaXR5LWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYW1lbml0aWVzLWNvbCAuYW1lbml0aWVzLXdyYXBwZXIgLml0ZW0tYW1lbml0eSAuYW1lbml0eS12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpICogMik7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/real-estate/listing/styles/real-estate-listing.shell.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/real-estate/listing/styles/real-estate-listing.shell.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRealEstateListingStylesRealEstateListingShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --shell-color: #d9453a;\n  --shell-color-rgb: 217,69,58;\n}\n\napp-image-shell.item-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-price app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  min-width: 50px;\n  max-width: 100px;\n}\n\n.item-price app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.item-address > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.accommodation-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.accommodation-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.amenity-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 12px;\n  min-width: 50px;\n}\n\n.amenity-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9yZWFsLWVzdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLWVzdGF0ZS1saXN0aW5nLnNoZWxsLnNjc3MiLCJzcmMvYXBwL3JlYWwtZXN0YXRlL2xpc3Rpbmcvc3R5bGVzL3JlYWwtZXN0YXRlLWxpc3Rpbmcuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURXQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUNSRjs7QURXQTtFQUNFLDBEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUkY7O0FEVUU7RUFDRSxrQkFBQTtBQ1JKOztBRFlBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNURjs7QURXRTtFQUNFLGtCQUFBO0FDVEo7O0FEYUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1ZGOztBRFlFO0VBQ0UsY0FBQTtBQ1ZKOztBRGNBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNYRjs7QURhRTtFQUNFLGNBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL3JlYWwtZXN0YXRlL2xpc3Rpbmcvc3R5bGVzL3JlYWwtZXN0YXRlLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjZDk0NTNhO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjE3LDY5LDU4O1xufVxuXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxuOmhvc3QoLmlzLXNoZWxsKSB7XG4gIC8vIGlvbi1jb250ZW50IHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLml0ZW0tcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uaXRlbS1wcmljZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmFjY29tbW9kYXRpb24tdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5hbWVuaXR5LXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1pbi13aWR0aDogNTBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjZDk0NTNhO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjE3LDY5LDU4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaXRlbS1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLXByaWNlIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuLml0ZW0tcHJpY2UgYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5hY2NvbW1vZGF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5hY2NvbW1vZGF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmFtZW5pdHktdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuLmFtZW5pdHktdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufSJdfQ== */";
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
//# sourceMappingURL=real-estate-listing-real-estate-listing-module-es5.js.map