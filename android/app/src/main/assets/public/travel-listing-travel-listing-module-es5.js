function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-listing-travel-listing-module"], {
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


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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

        this.networkDelay = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.networkDelay ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
      } // Static function with generics
      // (ref: https://stackoverflow.com/a/24293088/1116959)
      // Append a shell (T & ShellModel) to every value (T) emmited to the timeline


      _createClass(DataStore, [{
        key: "load",
        value: function load(dataSourceObservable) {
          var _this = this;

          var dataSourceWithShellObservable = DataStore.AppendShell(dataSourceObservable, this.shellModel, this.networkDelay);
          dataSourceWithShellObservable.subscribe(function (dataValue) {
            _this.timeline.next(dataValue);
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
          var delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(networkDelay)); // Assign shell flag accordingly
          // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([delayObservable, dataObservable]).pipe( // Dismiss unnecessary delayValue
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                delayValue = _ref2[0],
                dataValue = _ref2[1];

            return Object.assign(dataValue, {
              isShell: false
            });
          }), // Set the shell model as the initial value
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(Object.assign(shellModel, {
            isShell: true
          })));
        }
      }]);

      return DataStore;
    }();
    /***/

  },

  /***/
  "./src/app/travel/listing/travel-listing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/travel/listing/travel-listing.module.ts ***!
    \*********************************************************/

  /*! exports provided: TravelListingPageModule */

  /***/
  function srcAppTravelListingTravelListingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelListingPageModule", function () {
      return TravelListingPageModule;
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


    var _travel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../travel.service */
    "./src/app/travel/travel.service.ts");
    /* harmony import */


    var _travel_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./travel-listing.page */
    "./src/app/travel/listing/travel-listing.page.ts");
    /* harmony import */


    var _travel_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./travel-listing.resolver */
    "./src/app/travel/listing/travel-listing.resolver.ts");
    /* harmony import */


    var _travel_listing_plain_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./travel-listing.plain.resolver */
    "./src/app/travel/listing/travel-listing.plain.resolver.ts");

    var routes = [{
      path: '',
      component: _travel_listing_page__WEBPACK_IMPORTED_MODULE_8__["TravelListingPage"],
      resolve: {
        data: _travel_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["TravelListingResolver"] // data: TravelListingPlainResolver

      }
    }];

    var TravelListingPageModule = function TravelListingPageModule() {
      _classCallCheck(this, TravelListingPageModule);
    };

    TravelListingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TravelListingPageModule
    });
    TravelListingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TravelListingPageModule_Factory(t) {
        return new (t || TravelListingPageModule)();
      },
      providers: [_travel_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["TravelListingResolver"], _travel_listing_plain_resolver__WEBPACK_IMPORTED_MODULE_10__["TravelListingPlainResolver"], _travel_service__WEBPACK_IMPORTED_MODULE_7__["TravelService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TravelListingPageModule, {
        declarations: [_travel_listing_page__WEBPACK_IMPORTED_MODULE_8__["TravelListingPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravelListingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          declarations: [_travel_listing_page__WEBPACK_IMPORTED_MODULE_8__["TravelListingPage"]],
          providers: [_travel_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["TravelListingResolver"], _travel_listing_plain_resolver__WEBPACK_IMPORTED_MODULE_10__["TravelListingPlainResolver"], _travel_service__WEBPACK_IMPORTED_MODULE_7__["TravelService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/travel/listing/travel-listing.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/travel/listing/travel-listing.page.ts ***!
    \*******************************************************/

  /*! exports provided: TravelListingPage */

  /***/
  function srcAppTravelListingTravelListingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelListingPage", function () {
      return TravelListingPage;
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


    var _travel_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./travel-listing.model */
    "./src/app/travel/listing/travel-listing.model.ts");
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

    var _c0 = function _c0(a1) {
      return ["/app/categories/travel/", a1];
    };

    var _c1 = function _c1() {
      return {
        w: 3,
        h: 2
      };
    };

    var _c2 = function _c2() {
      return {
        w: 1,
        h: 1
      };
    };

    function TravelListingPage_ng_container_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-col", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-image-shell", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-aspect-ratio", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-aspect-ratio", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-image-shell", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Explore");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ion-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-row", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-text-shell", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-text-shell", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-text-shell", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-row", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-col", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-text-shell", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "ion-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-col", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-text-shell", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ion-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", item_r2.image)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, item_r2.slug));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, item_r2.slug));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", (item_r2 == null ? null : item_r2.name) && (item_r2 == null ? null : item_r2.category) ? item_r2.name + " - " + item_r2.category : item_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2.rating);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2.reviewsCount);
      }
    }

    function TravelListingPage_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TravelListingPage_ng_container_7_div_1_Template, 31, 18, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listing.items);
      }
    } // import { delay, finalize } from 'rxjs/operators';


    var TravelListingPage = /*#__PURE__*/function () {
      function TravelListingPage(route) {
        _classCallCheck(this, TravelListingPage);

        this.route = route;
      }

      _createClass(TravelListingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // On init, the route subscription is the active subscription
          this.subscriptions = this.route.data // .pipe(
          //   delay(2000),
          //   finalize(() => console.log('dataSubscription [finalize()]'))
          // )
          .subscribe(function (resolvedRouteData) {
            // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
            _this2.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__["ResolverHelper"].extractData(resolvedRouteData.data, _travel_listing_model__WEBPACK_IMPORTED_MODULE_3__["TravelListingModel"]) // .pipe(
            //   delay(8000),
            //   finalize(() => console.log('listingDataStore.subscribe [finalize()]'))
            // )
            .subscribe(function (state) {
              // console.log('GOT STATE');
              _this2.listing = state;
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

      return TravelListingPage;
    }();

    TravelListingPage.ɵfac = function TravelListingPage_Factory(t) {
      return new (t || TravelListingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    TravelListingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TravelListingPage,
      selectors: [["app-travel-listing"]],
      hostVars: 2,
      hostBindings: function TravelListingPage_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
        }
      },
      decls: 8,
      vars: 1,
      consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "app/categories"], [4, "ngIf"], ["class", "listing-item", 4, "ngFor", "ngForOf"], [1, "listing-item"], [1, "image-row"], ["size", "12"], [1, "add-overlay", "item-image", 3, "display", "src", "routerLink"], [3, "ratio"], [1, "content-inside-item-image"], [1, "item-icon"], [1, "icon-image", 3, "src"], [1, "item-cta"], ["name", "arrow-forward", 1, "cta-icon"], [1, "info-row"], [1, "main-info-col"], [1, "item-name"], [1, "name-anchor", 3, "routerLink"], ["animation", "bouncing", 3, "data"], [1, "item-description"], ["animation", "bouncing", "lines", "3", 3, "data"], [1, "item-address"], [1, "stats-row"], ["size", "2", 1, "item-rating"], [1, "rating-value"], [3, "data"], ["src", "./assets/custom-icons/travel/star.svg", 1, "stats-icon"], ["size", "2", 1, "item-reviews"], [1, "reviews-count"], ["src", "./assets/custom-icons/travel/comments.svg", 1, "stats-icon"]],
      template: function TravelListingPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Travel Listing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TravelListingPage_ng_container_7_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listing == null ? null : ctx.listing.items);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__["AspectRatioComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"]],
      styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-color: #00AFFF;\n}\n\n.listing-item[_ngcontent-%COMP%] {\n  padding: 0px 0px var(--page-margin);\n  background-color: var(--page-background);\n  border-bottom: calc(var(--page-margin) / 2) solid var(--page-color);\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%] {\n  padding: 0px 12%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  width: 54px;\n  align-self: center;\n  margin-bottom: 24px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]   .item-cta[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin));\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  color: var(--ion-color-light);\n  display: flex;\n  align-items: center;\n  background-color: var(--page-color);\n  border-radius: var(--app-fair-radius);\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]   .item-cta[_ngcontent-%COMP%]   .cta-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin-left: calc(var(--page-margin) / 2);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .main-info-col[_ngcontent-%COMP%] {\n  padding-right: calc(var(--page-margin) / 2);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  margin: 0px 0px var(--page-margin);\n  text-transform: capitalize;\n  font-size: 16px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  display: block;\n  text-decoration: none;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-shade);\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-dark-tint);\n  font-size: 12px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin);\n  justify-content: flex-end;\n}\n\n.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-rating[_ngcontent-%COMP%] {\n  display: inline-flex;\n  text-align: center;\n  justify-content: flex-end;\n  margin-right: 10px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-rating[_ngcontent-%COMP%]   .rating-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 5px;\n  margin: auto;\n}\n\n.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-reviews[_ngcontent-%COMP%] {\n  display: inline-flex;\n  text-align: center;\n  justify-content: flex-end;\n}\n\n.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-reviews[_ngcontent-%COMP%]   .reviews-count[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 5px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC90cmF2ZWwvbGlzdGluZy9zdHlsZXMvdHJhdmVsLWxpc3RpbmcucGFnZS5zY3NzIiwic3JjL2FwcC90cmF2ZWwvbGlzdGluZy9zdHlsZXMvdHJhdmVsLWxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLHFCQUFBO0FDRkY7O0FETUE7RUFDRSxtQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUVBQUE7QUNIRjs7QURLRTtFQUNFLDhCQUFBO0FDSEo7O0FES0k7RUFDRSxlQUFBO0FDSE47O0FES007RUFDRSxhQUFBO0FDSFI7O0FET0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ0xOOztBRE9NO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNMUjs7QURRTTtFQUNFLGdCQUFBO0VBQ0EsOERBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0FDTlI7O0FEUVE7RUFDRSxlQUFBO0VBQ0EseUNBQUE7QUNOVjs7QURZRTtFQUNFLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSw0Q0FBQTtBQ1hKOztBRGFJO0VBQ0UsMkNBQUE7QUNYTjs7QURjSTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDWk47O0FEY007RUFDRSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ1pSOztBRGdCSTtFQUNFLDRDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNkTjs7QURpQkk7RUFDRSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDZk47O0FEbUJFO0VBQ0UsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHlCQUFBO0FDbEJKOztBRG9CSTtFQUNFLGVBQUE7QUNsQk47O0FEcUJJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNuQk47O0FEcUJNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ25CUjs7QUR1Qkk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNyQk47O0FEdUJNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ3JCUiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbC9saXN0aW5nL3N0eWxlcy90cmF2ZWwtbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtY29sb3I6ICMwMEFGRkY7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmxpc3RpbmctaXRlbSB7XG4gIHBhZGRpbmc6IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICBib3JkZXItYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHNvbGlkIHZhcigtLXBhZ2UtY29sb3IpO1xuXG4gIC5pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIC5pdGVtLWltYWdlIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtaW5zaWRlLWl0ZW0taW1hZ2Uge1xuICAgICAgcGFkZGluZzogMHB4IDEyJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC5pdGVtLWljb24ge1xuICAgICAgICB3aWR0aDogNTRweDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1jdGEge1xuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcblxuICAgICAgICAuY3RhLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pbmZvLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgLm1haW4taW5mby1jb2wge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG5cbiAgICAuaXRlbS1uYW1lIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgICAgLm5hbWUtYW5jaG9yIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1kZXNjcmlwdGlvbiB7XG4gICAgICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIH1cblxuICAgIC5pdGVtLWFkZHJlc3Mge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG5cbiAgLnN0YXRzLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgLnN0YXRzLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cblxuICAgIC5pdGVtLXJhdGluZyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAgIC5yYXRpbmctdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tcmV2aWV3cyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgIC5yZXZpZXdzLWNvdW50IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtY29sb3I6ICMwMEFGRkY7XG59XG5cbi5saXN0aW5nLWl0ZW0ge1xuICBwYWRkaW5nOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBzb2xpZCB2YXIoLS1wYWdlLWNvbG9yKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyAuaXRlbS1pbWFnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyAuaXRlbS1pbWFnZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubGlzdGluZy1pdGVtIC5pbWFnZS1yb3cgLmNvbnRlbnQtaW5zaWRlLWl0ZW0taW1hZ2Uge1xuICBwYWRkaW5nOiAwcHggMTIlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmxpc3RpbmctaXRlbSAuaW1hZ2Utcm93IC5jb250ZW50LWluc2lkZS1pdGVtLWltYWdlIC5pdGVtLWljb24ge1xuICB3aWR0aDogNTRweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmxpc3RpbmctaXRlbSAuaW1hZ2Utcm93IC5jb250ZW50LWluc2lkZS1pdGVtLWltYWdlIC5pdGVtLWN0YSB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufVxuLmxpc3RpbmctaXRlbSAuaW1hZ2Utcm93IC5jb250ZW50LWluc2lkZS1pdGVtLWltYWdlIC5pdGVtLWN0YSAuY3RhLWljb24ge1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAubWFpbi1pbmZvLWNvbCB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuaXRlbS1uYW1lIHtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5pdGVtLW5hbWUgLm5hbWUtYW5jaG9yIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5pdGVtLWFkZHJlc3Mge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubGlzdGluZy1pdGVtIC5zdGF0cy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubGlzdGluZy1pdGVtIC5zdGF0cy1yb3cgLnN0YXRzLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ubGlzdGluZy1pdGVtIC5zdGF0cy1yb3cgLml0ZW0tcmF0aW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmxpc3RpbmctaXRlbSAuc3RhdHMtcm93IC5pdGVtLXJhdGluZyAucmF0aW5nLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmxpc3RpbmctaXRlbSAuc3RhdHMtcm93IC5pdGVtLXJldmlld3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmxpc3RpbmctaXRlbSAuc3RhdHMtcm93IC5pdGVtLXJldmlld3MgLnJldmlld3MtY291bnQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */", "[_nghost-%COMP%] {\n  --shell-color: #00AFFF;\n  --shell-color-rgb: 0,175,255;\n}\n\napp-image-shell.item-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .60);\n}\n\napp-image-shell.icon-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .15);\n}\n\n.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 16px;\n  max-width: 70%;\n}\n\n.item-name[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.item-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n}\n\n.item-address[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 12px;\n  max-width: 60%;\n}\n\n.item-address[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.rating-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 16px;\n  min-width: 30px;\n}\n\n.reviews-count[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 16px;\n  min-width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC90cmF2ZWwvbGlzdGluZy9zdHlsZXMvdHJhdmVsLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNyYy9hcHAvdHJhdmVsL2xpc3Rpbmcvc3R5bGVzL3RyYXZlbC1saXN0aW5nLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0FDREY7O0FEV0E7RUFDRSxtRUFBQTtFQUNBLHNFQUFBO0FDUkY7O0FEV0E7RUFDRSxtRUFBQTtBQ1JGOztBRFdBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FDUkY7O0FEVUU7RUFDRSxnQkFBQTtBQ1JKOztBRFlBO0VBQ0UsOEJBQUE7QUNURjs7QURZQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ1RGOztBRFdFO0VBQ0UsZ0JBQUE7QUNUSjs7QURhQTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtBQ1ZGOztBRGFBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC90cmF2ZWwvbGlzdGluZy9zdHlsZXMvdHJhdmVsLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjMDBBRkZGO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMCwxNzUsMjU1O1xufVxuXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxuOmhvc3QoLmlzLXNoZWxsKSB7XG4gIC8vIGlvbi1jb250ZW50IHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLml0ZW0taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNjApO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaWNvbi1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG59XG5cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogNzAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLml0ZW0tZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXgtd2lkdGg6IDYwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi5yYXRpbmctdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuXG4ucmV2aWV3cy1jb3VudCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG4iLCI6aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICMwMEFGRkY7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAwLDE3NSwyNTU7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5pdGVtLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjYwKTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmljb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNjAlO1xufVxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cblxuLnJhdGluZy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG5cbi5yZXZpZXdzLWNvdW50ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravelListingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-travel-listing',
          templateUrl: './travel-listing.page.html',
          styleUrls: ['./styles/travel-listing.page.scss', './styles/travel-listing.shell.scss']
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
  "./src/app/travel/listing/travel-listing.plain.resolver.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/travel/listing/travel-listing.plain.resolver.ts ***!
    \*****************************************************************/

  /*! exports provided: TravelListingPlainResolver */

  /***/
  function srcAppTravelListingTravelListingPlainResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelListingPlainResolver", function () {
      return TravelListingPlainResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _travel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../travel.service */
    "./src/app/travel/travel.service.ts");

    var TravelListingPlainResolver = /*#__PURE__*/function () {
      function TravelListingPlainResolver(travelService) {
        _classCallCheck(this, TravelListingPlainResolver);

        this.travelService = travelService;
      }

      _createClass(TravelListingPlainResolver, [{
        key: "resolve",
        value: function resolve() {
          return this.travelService.getListingDataSource();
        }
      }]);

      return TravelListingPlainResolver;
    }();

    TravelListingPlainResolver.ɵfac = function TravelListingPlainResolver_Factory(t) {
      return new (t || TravelListingPlainResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"]));
    };

    TravelListingPlainResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TravelListingPlainResolver,
      factory: TravelListingPlainResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravelListingPlainResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/travel/listing/travel-listing.resolver.ts":
  /*!***********************************************************!*\
    !*** ./src/app/travel/listing/travel-listing.resolver.ts ***!
    \***********************************************************/

  /*! exports provided: TravelListingResolver */

  /***/
  function srcAppTravelListingTravelListingResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelListingResolver", function () {
      return TravelListingResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _travel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../travel.service */
    "./src/app/travel/travel.service.ts");

    var TravelListingResolver = /*#__PURE__*/function () {
      function TravelListingResolver(travelService) {
        _classCallCheck(this, TravelListingResolver);

        this.travelService = travelService;
      }

      _createClass(TravelListingResolver, [{
        key: "resolve",
        value: function resolve() {
          var dataSource = this.travelService.getListingDataSource();
          var dataStore = this.travelService.getListingStore(dataSource);
          return dataStore;
        }
      }]);

      return TravelListingResolver;
    }();

    TravelListingResolver.ɵfac = function TravelListingResolver_Factory(t) {
      return new (t || TravelListingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"]));
    };

    TravelListingResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TravelListingResolver,
      factory: TravelListingResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravelListingResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils/resolver-helper.ts":
  /*!******************************************!*\
    !*** ./src/app/utils/resolver-helper.ts ***!
    \******************************************/

  /*! exports provided: ResolverHelper */

  /***/
  function srcAppUtilsResolverHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResolverHelper", function () {
      return ResolverHelper;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ResolverHelper = /*#__PURE__*/function () {
      function ResolverHelper() {
        _classCallCheck(this, ResolverHelper);
      }

      _createClass(ResolverHelper, null, [{
        key: "extractData",
        // More info on function overloads here: https://www.typescriptlang.org/docs/handbook/functions.html#overloads
        value: function extractData(source, constructor) {
          if (source instanceof _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["DataStore"]) {
            return source.state;
          } else if (source instanceof constructor) {
            // The right side of instanceof should be an expression evaluating to a constructor function (ie. a class), not a type
            // That's why we included an extra parameter which acts as a constructor function for type T
            // (see: https://github.com/microsoft/TypeScript/issues/5236)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(source);
          }
        }
      }]);

      return ResolverHelper;
    }();
    /***/

  }
}]);
//# sourceMappingURL=travel-listing-travel-listing-module-es5.js.map