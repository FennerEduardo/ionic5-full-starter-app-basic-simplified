function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["route-resolvers-ux-route-resolvers-ux-module"], {
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
  "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.ts ***!
    \*******************************************************************************************/

  /*! exports provided: BlockingResovlersPage */

  /***/
  function srcAppShowcaseRouteResolversUxBlockingResolversBlockingResolversPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockingResovlersPage", function () {
      return BlockingResovlersPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shell/aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    var _c1 = function _c1() {
      return {
        w: 2,
        h: 1
      };
    };

    var _c2 = function _c2() {
      return {
        w: 1,
        h: 1
      };
    };

    var BlockingResovlersPage = /*#__PURE__*/function () {
      function BlockingResovlersPage(route) {
        _classCallCheck(this, BlockingResovlersPage);

        this.route = route;
      }

      _createClass(BlockingResovlersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          console.log('Showcase Blocking Resovlers - ngOnInit()');

          if (this.route && this.route.data) {
            var dataObservable = this.route.data;
            console.log('Showcase Blocking Resovlers - Route Resolve Observable => dataObservable: ', dataObservable);

            if (dataObservable) {
              dataObservable.subscribe(function (observableValue) {
                var pageData = observableValue['data']; // tslint:disable-next-line:max-line-length

                console.log('Showcase Blocking Resovlers - Subscribe to dataObservable (will emmit just one value) => PageData (' + (pageData && pageData.isShell ? 'SHELL' : 'REAL') + '): ', pageData);

                if (pageData) {
                  _this2.routeResolveData = pageData;
                }
              });
            } else {
              console.warn('No dataObservable coming from Route Resolver data');
            }
          } else {
            console.warn('No data coming from Route Resolver');
          }
        }
      }]);

      return BlockingResovlersPage;
    }();

    BlockingResovlersPage.ɵfac = function BlockingResovlersPage_Factory(t) {
      return new (t || BlockingResovlersPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    BlockingResovlersPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlockingResovlersPage,
      selectors: [["app-showcase-blocking-resolvers"]],
      decls: 27,
      vars: 10,
      consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/route-resolvers-ux"], [1, "showcase-content"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "10px"], ["size", "12"], [2, "background-size", "cover", "background-repeat", "no-repeat", 3, "ngStyle"], [3, "ratio"], [2, "margin", "10px", "text-align", "center", "color", "#FFF"], ["size", "4"], ["alt", "Sample Image", 2, "width", "100%", "height", "100%", 3, "src"], ["size", "8"], [2, "margin-top", "0px"]],
      template: function BlockingResovlersPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Blocking Resovler Showcase ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Notice how the UX degrades when using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Blocking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Route Resolvers in Angular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-row", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-aspect-ratio", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Heading on top of a cover image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-col", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-aspect-ratio", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + (ctx.routeResolveData == null ? null : ctx.routeResolveData.cover) + ")"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.routeResolveData == null ? null : ctx.routeResolveData.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.routeResolveData == null ? null : ctx.routeResolveData.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.routeResolveData == null ? null : ctx.routeResolveData.description, " ");
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__["AspectRatioComponent"]],
      styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvYmxvY2tpbmctcmVzb2x2ZXJzL2Jsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL3JvdXRlLXJlc29sdmVycy11eC9ibG9ja2luZy1yZXNvbHZlcnMvYmxvY2tpbmctcmVzb2x2ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvYmxvY2tpbmctcmVzb2x2ZXJzL2Jsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockingResovlersPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-showcase-blocking-resolvers',
          templateUrl: './blocking-resolvers.page.html',
          styleUrls: ['./blocking-resolvers.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking.resolver.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking.resolver.ts ***!
    \*************************************************************************************/

  /*! exports provided: BlockingResolver */

  /***/
  function srcAppShowcaseRouteResolversUxBlockingResolversBlockingResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockingResolver", function () {
      return BlockingResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _showcase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../showcase.service */
    "./src/app/showcase/showcase.service.ts");

    var BlockingResolver = /*#__PURE__*/function () {
      function BlockingResolver(showcaseService, loadingController) {
        _classCallCheck(this, BlockingResolver);

        this.showcaseService = showcaseService;
        this.loadingController = loadingController;
      }

      _createClass(BlockingResolver, [{
        key: "presentLoader",
        value: function presentLoader() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Loading ...'
                    });

                  case 2:
                    this.loadingElement = _context.sent;
                    _context.next = 5;
                    return this.loadingElement.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "dismissLoader",
        value: function dismissLoader() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.loadingElement) {
                      _context2.next = 3;
                      break;
                    }

                    _context2.next = 3;
                    return this.loadingElement.dismiss();

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "resolve",
        value: function resolve() {
          var _this3 = this;

          // WITHOUT LOADING INDICATOR
          // Base Observable (where we get data from)
          // const dataObservable = this.showcaseService.getData();
          // Basic Resolver that returns the base Observable
          // return dataObservable;
          // WITH LOADING INDICATOR
          // Base Observable (where we get data from)
          var dataObservable = this.showcaseService.getDataSourceWithDelay().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            console.log('dataObservable COMPLETED - HIDE LOADER');

            _this3.dismissLoader();
          }));
          var deferedObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
            // Will be logged at the moment of subscription
            console.log('dataObservable STARTED - SHOW LOADER');

            _this3.presentLoader();

            return dataObservable;
          }); // Basic Resolver that returns the base Observable

          return deferedObservable;
        }
      }]);

      return BlockingResolver;
    }();

    BlockingResolver.ɵfac = function BlockingResolver_Factory(t) {
      return new (t || BlockingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_showcase_service__WEBPACK_IMPORTED_MODULE_5__["ShowcaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]));
    };

    BlockingResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BlockingResolver,
      factory: BlockingResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlockingResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _showcase_service__WEBPACK_IMPORTED_MODULE_5__["ShowcaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.ts ***!
    \***************************************************************************************************/

  /*! exports provided: NonBlockingResolversPage */

  /***/
  function srcAppShowcaseRouteResolversUxNonBlockingResolversNonBlockingResolversPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NonBlockingResolversPage", function () {
      return NonBlockingResolversPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shell/aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");

    function NonBlockingResolversPage_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You can show a static shell while fetching data from the backend");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    var _c1 = function _c1() {
      return {
        w: 2,
        h: 1
      };
    };

    var _c2 = function _c2() {
      return {
        w: 1,
        h: 1
      };
    };

    function NonBlockingResolversPage_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-col", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-aspect-ratio", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Heading on top of a cover image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-aspect-ratio", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-col", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + (ctx_r1.routeResolveData == null ? null : ctx_r1.routeResolveData.cover) + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.routeResolveData == null ? null : ctx_r1.routeResolveData.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.routeResolveData == null ? null : ctx_r1.routeResolveData.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.routeResolveData == null ? null : ctx_r1.routeResolveData.description, " ");
      }
    }

    var NonBlockingResolversPage = /*#__PURE__*/function () {
      function NonBlockingResolversPage(route) {
        _classCallCheck(this, NonBlockingResolversPage);

        this.route = route;
      }

      _createClass(NonBlockingResolversPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          console.log('Showcase NON Blocking Resovlers - ngOnInit()');

          if (this.route && this.route.data) {
            // We resolved a promise for the data Observable
            var promiseObservable = this.route.data;
            console.log('Showcase NON Blocking Resovlers - Route Resolve Observable => promiseObservable: ', promiseObservable);

            if (promiseObservable) {
              promiseObservable.subscribe(function (promiseValue) {
                var dataObservable = promiseValue['data'];
                console.log('Showcase NON Blocking Resovlers - Subscribe to promiseObservable => dataObservable: ', dataObservable);

                if (dataObservable) {
                  dataObservable.subscribe(function (observableValue) {
                    var pageData = observableValue; // tslint:disable-next-line:max-line-length

                    console.log('Showcase NON Blocking Resovlers - Subscribe to dataObservable (will emmit just one value) => PageData (' + (pageData && pageData.isShell ? 'SHELL' : 'REAL') + '): ', pageData);

                    if (pageData) {
                      _this4.routeResolveData = pageData;
                    }
                  });
                } else {
                  console.warn('No dataObservable coming from Route Resolver promiseObservable');
                }
              });
            } else {
              console.warn('No promiseObservable coming from Route Resolver data');
            }
          } else {
            console.warn('No data coming from Route Resolver');
          }
        }
      }]);

      return NonBlockingResolversPage;
    }();

    NonBlockingResolversPage.ɵfac = function NonBlockingResolversPage_Factory(t) {
      return new (t || NonBlockingResolversPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    NonBlockingResolversPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NonBlockingResolversPage,
      selectors: [["app-showcase-non-blocking-resolvers"]],
      decls: 12,
      vars: 2,
      consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/route-resolvers-ux"], [1, "showcase-content"], [1, "showcase-section"], [4, "ngIf"], [2, "margin", "20px 40px", "text-align", "center"], [2, "background-color", "#FFF", "padding", "10px"], ["size", "12"], [2, "background-size", "cover", "background-repeat", "no-repeat", 3, "ngStyle"], [3, "ratio"], [2, "margin", "10px", "text-align", "center", "color", "#FFF"], ["size", "4"], ["alt", "Sample Image", 2, "width", "100%", "height", "100%", 3, "src"], ["size", "8"], [2, "margin-top", "0px"]],
      template: function NonBlockingResolversPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " NON Blocking Resovler Showcase ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " With Non-Blocking Resolvers, page transition is immediate. However UX degrades because you are showing a static loading indicator while the server sends data back to the client. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NonBlockingResolversPage_ng_container_10_Template, 6, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NonBlockingResolversPage_ng_container_11_Template, 15, 10, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.routeResolveData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.routeResolveData);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__["AspectRatioComponent"]],
      styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvbm9uLWJsb2NraW5nLXJlc29sdmVycy9ub24tYmxvY2tpbmctcmVzb2x2ZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L25vbi1ibG9ja2luZy1yZXNvbHZlcnMvbm9uLWJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L25vbi1ibG9ja2luZy1yZXNvbHZlcnMvbm9uLWJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonBlockingResolversPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-showcase-non-blocking-resolvers',
          templateUrl: './non-blocking-resolvers.page.html',
          styleUrls: ['./non-blocking-resolvers.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking.resolver.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking.resolver.ts ***!
    \*********************************************************************************************/

  /*! exports provided: NonBlockingResolver */

  /***/
  function srcAppShowcaseRouteResolversUxNonBlockingResolversNonBlockingResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NonBlockingResolver", function () {
      return NonBlockingResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../showcase.service */
    "./src/app/showcase/showcase.service.ts");

    var NonBlockingResolver = /*#__PURE__*/function () {
      function NonBlockingResolver(showcaseService) {
        _classCallCheck(this, NonBlockingResolver);

        this.showcaseService = showcaseService;
      }

      _createClass(NonBlockingResolver, [{
        key: "resolve",
        value: function resolve() {
          // Base Observable (where we get data from)
          var dataObservable = this.showcaseService.getDataSourceWithDelay(); // NON-BLOCKING RESOLVERS
          // Resolver using a ReplySubject that emits the base Observable and then completes
          // const subject = new ReplaySubject();
          // subject.next(dataObservable);
          // subject.complete();
          // return subject;
          // Resolver using an Observable that emits the base Observable and then completes
          // const observable = Observable.create((observer) => {
          //   observer.next(dataObservable);
          //   observer.complete();
          // });
          // return observable;
          // Resolver using a Promise that resolves the base Observable

          var observablePromise = new Promise(function (resolve, reject) {
            resolve(dataObservable);
          });
          return observablePromise;
        }
      }]);

      return NonBlockingResolver;
    }();

    NonBlockingResolver.ɵfac = function NonBlockingResolver_Factory(t) {
      return new (t || NonBlockingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"]));
    };

    NonBlockingResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NonBlockingResolver,
      factory: NonBlockingResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonBlockingResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: ProgressiveShellResovlersPage */

  /***/
  function srcAppShowcaseRouteResolversUxProgressiveShellResolversProgressiveShellResolversPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressiveShellResovlersPage", function () {
      return ProgressiveShellResovlersPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shell/image-shell/image-shell.component */
    "./src/app/shell/image-shell/image-shell.component.ts");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shell/aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
    /* harmony import */


    var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shell/text-shell/text-shell.component */
    "./src/app/shell/text-shell/text-shell.component.ts");

    var _c0 = function _c0() {
      return {
        w: 2,
        h: 1
      };
    };

    var _c1 = function _c1() {
      return {
        w: 1,
        h: 1
      };
    };

    var ProgressiveShellResovlersPage = /*#__PURE__*/function () {
      function ProgressiveShellResovlersPage(route) {
        _classCallCheck(this, ProgressiveShellResovlersPage);

        this.route = route;
      }

      _createClass(ProgressiveShellResovlersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          console.log('Showcase Progressive Shell Resovlers - ngOnInit()');
          this.route.data.subscribe(function (resolvedRouteData) {
            var dataStore = resolvedRouteData['data'];
            dataStore.state.subscribe(function (state) {
              _this5.routeResolveData = state;
            }, function (error) {});
          }, function (error) {});
        }
      }]);

      return ProgressiveShellResovlersPage;
    }();

    ProgressiveShellResovlersPage.ɵfac = function ProgressiveShellResovlersPage_Factory(t) {
      return new (t || ProgressiveShellResovlersPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ProgressiveShellResovlersPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressiveShellResovlersPage,
      selectors: [["app-showcase-progressive-shell-resolvers"]],
      decls: 22,
      vars: 11,
      consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/route-resolvers-ux"], [1, "showcase-content"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "10px"], ["size", "12"], ["animation", "spinner", 1, "add-overlay", 3, "display", "src", "alt"], [3, "ratio"], [2, "margin", "10px", "text-align", "center", "color", "#FFF"], ["size", "4"], ["animation", "spinner", 3, "src", "alt"], ["size", "8"], [2, "margin-top", "0px"], [3, "data"], ["animation", "bouncing", "lines", "3", 3, "data"]],
      template: function ProgressiveShellResovlersPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Progressive Shell Showcase ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-image-shell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-aspect-ratio", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Heading on top of a cover image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-aspect-ratio", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-image-shell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-text-shell", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-text-shell", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", ctx.routeResolveData == null ? null : ctx.routeResolveData.cover)("alt", "Sample Image Cover");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.routeResolveData == null ? null : ctx.routeResolveData.image)("alt", "Sample Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.routeResolveData == null ? null : ctx.routeResolveData.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.routeResolveData == null ? null : ctx.routeResolveData.description);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__["AspectRatioComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__["TextShellComponent"]],
      styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvcHJvZ3Jlc3NpdmUtc2hlbGwtcmVzb2x2ZXJzL3Byb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL3JvdXRlLXJlc29sdmVycy11eC9wcm9ncmVzc2l2ZS1zaGVsbC1yZXNvbHZlcnMvcHJvZ3Jlc3NpdmUtc2hlbGwtcmVzb2x2ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvcHJvZ3Jlc3NpdmUtc2hlbGwtcmVzb2x2ZXJzL3Byb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressiveShellResovlersPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-showcase-progressive-shell-resolvers',
          templateUrl: './progressive-shell-resolvers.page.html',
          styleUrls: ['./progressive-shell-resolvers.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell.resolver.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell.resolver.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: ProgressiveShellResolver */

  /***/
  function srcAppShowcaseRouteResolversUxProgressiveShellResolversProgressiveShellResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressiveShellResolver", function () {
      return ProgressiveShellResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../showcase.service */
    "./src/app/showcase/showcase.service.ts");

    var ProgressiveShellResolver = /*#__PURE__*/function () {
      function ProgressiveShellResolver(showcaseService) {
        _classCallCheck(this, ProgressiveShellResolver);

        this.showcaseService = showcaseService;
      }

      _createClass(ProgressiveShellResolver, [{
        key: "resolve",
        value: function resolve() {
          var dataSource = this.showcaseService.getDataSourceWithDelay();
          var dataStore = this.showcaseService.getSimpleDataStore(dataSource);
          return dataStore;
        }
      }]);

      return ProgressiveShellResolver;
    }();

    ProgressiveShellResolver.ɵfac = function ProgressiveShellResolver_Factory(t) {
      return new (t || ProgressiveShellResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"]));
    };

    ProgressiveShellResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProgressiveShellResolver,
      factory: ProgressiveShellResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressiveShellResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.module.ts ***!
    \**************************************************************************/

  /*! exports provided: RouteResolversUXModule */

  /***/
  function srcAppShowcaseRouteResolversUxRouteResolversUxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteResolversUXModule", function () {
      return RouteResolversUXModule;
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


    var _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./route-resolvers-ux.page */
    "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.ts");
    /* harmony import */


    var _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./non-blocking-resolvers/non-blocking-resolvers.page */
    "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.ts");
    /* harmony import */


    var _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./blocking-resolvers/blocking-resolvers.page */
    "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.ts");
    /* harmony import */


    var _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./progressive-shell-resolvers/progressive-shell-resolvers.page */
    "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.ts");
    /* harmony import */


    var _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./blocking-resolvers/blocking.resolver */
    "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking.resolver.ts");
    /* harmony import */


    var _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./non-blocking-resolvers/non-blocking.resolver */
    "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking.resolver.ts");
    /* harmony import */


    var _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./progressive-shell-resolvers/progressive-shell.resolver */
    "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell.resolver.ts");
    /* harmony import */


    var _showcase_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../showcase.service */
    "./src/app/showcase/showcase.service.ts");

    var routes = [{
      path: '',
      component: _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_7__["RouteResovlersUXPage"]
    }, {
      path: 'blocking-resolvers',
      component: _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_9__["BlockingResovlersPage"],
      resolve: {
        data: _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_11__["BlockingResolver"]
      }
    }, {
      path: 'non-blocking-resolvers',
      component: _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_8__["NonBlockingResolversPage"],
      resolve: {
        data: _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_12__["NonBlockingResolver"]
      }
    }, {
      path: 'progressive-shell-resolvers',
      component: _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_10__["ProgressiveShellResovlersPage"],
      resolve: {
        data: _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_13__["ProgressiveShellResolver"]
      }
    }];

    var RouteResolversUXModule = function RouteResolversUXModule() {
      _classCallCheck(this, RouteResolversUXModule);
    };

    RouteResolversUXModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RouteResolversUXModule
    });
    RouteResolversUXModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RouteResolversUXModule_Factory(t) {
        return new (t || RouteResolversUXModule)();
      },
      providers: [_blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_11__["BlockingResolver"], _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_12__["NonBlockingResolver"], _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_13__["ProgressiveShellResolver"], _showcase_service__WEBPACK_IMPORTED_MODULE_14__["ShowcaseService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RouteResolversUXModule, {
        declarations: [_route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_7__["RouteResovlersUXPage"], _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_9__["BlockingResovlersPage"], _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_8__["NonBlockingResolversPage"], _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_10__["ProgressiveShellResovlersPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteResolversUXModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          declarations: [_route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_7__["RouteResovlersUXPage"], _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_9__["BlockingResovlersPage"], _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_8__["NonBlockingResolversPage"], _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_10__["ProgressiveShellResovlersPage"]],
          providers: [_blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_11__["BlockingResolver"], _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_12__["NonBlockingResolver"], _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_13__["ProgressiveShellResolver"], _showcase_service__WEBPACK_IMPORTED_MODULE_14__["ShowcaseService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.ts ***!
    \************************************************************************/

  /*! exports provided: RouteResovlersUXPage */

  /***/
  function srcAppShowcaseRouteResolversUxRouteResolversUxPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteResovlersUXPage", function () {
      return RouteResovlersUXPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/showcase/route-resolvers-ux/blocking-resolvers"];
    };

    var _c1 = function _c1() {
      return ["/showcase/route-resolvers-ux/non-blocking-resolvers"];
    };

    var _c2 = function _c2() {
      return ["/showcase/route-resolvers-ux/progressive-shell-resolvers"];
    };

    var RouteResovlersUXPage = function RouteResovlersUXPage() {
      _classCallCheck(this, RouteResovlersUXPage);
    };

    RouteResovlersUXPage.ɵfac = function RouteResovlersUXPage_Factory(t) {
      return new (t || RouteResovlersUXPage)();
    };

    RouteResovlersUXPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RouteResovlersUXPage,
      selectors: [["app-showcase-route-resolvers-ux"]],
      decls: 52,
      vars: 6,
      consts: [["color", "primary"], ["slot", "start"], [1, "showcase-content"], [1, "showcase-section"], ["expand", "block", 3, "routerLink"]],
      template: function RouteResovlersUXPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Improve Route Resolvers UX ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lets see the difference between the different implementations of Route Resolvers. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Blocking Route Resolvers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " By default, Angular Route Resolvers won't transition to the page until the Resolver Observable completes. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Let's suppose the backend is slow and takes 5 seconds to fetch data and return it to the client, this is what's going to happen. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Expected behavior:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Page transition will be delayed 5 seconds until the server sends data back to the client. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Blocking Resolvers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "NON-Blocking Route Resolvers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " To avoid waiting for the Observable to complete, we can wrap the base Observable (the one we are getting data from) with a dummy Observable, Subject or Promise that emits the base Observable and immediately completes. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Expected behavior:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Page transition will be instant and the transitioned page will show a blank state while the server sends data back to the client. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Non-Blocking Resolvers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Progressive Shell Resolvers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " By using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "DataStore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " utility in conjunction with Angular Route Resolvers, we can solve this UX problem and make page transitions immediate. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " This approach uses a non-blocking Resolver in conjunction with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "DataStore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " utility. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Expected behavior:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Page transition will be instant and the transitioned page will show some shell elements while the server sends data back to the client. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ion-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Progressive Shell Resolvers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvcm91dGUtcmVzb2x2ZXJzLXV4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L3JvdXRlLXJlc29sdmVycy11eC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L3JvdXRlLXJlc29sdmVycy11eC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteResovlersUXPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-showcase-route-resolvers-ux',
          templateUrl: './route-resolvers-ux.page.html',
          styleUrls: ['./route-resolvers-ux.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=route-resolvers-ux-route-resolvers-ux-module-es5.js.map