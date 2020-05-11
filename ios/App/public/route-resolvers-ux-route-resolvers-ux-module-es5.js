function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["route-resolvers-ux-route-resolvers-ux-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShowcaseRouteResolversUxBlockingResolversBlockingResolversPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/route-resolvers-ux\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Blocking Resovler Showcase\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      Notice how the UX degrades when using <b>Blocking</b> Route Resolvers in Angular\n    </p>\n    <ion-row style=\"background-color: #FFF; padding: 10px;\">\n      <ion-col size=\"12\">\n        <div [ngStyle]=\"{'background-image': 'url(' + routeResolveData?.cover + ')'}\" style=\"background-size: cover; background-repeat: no-repeat;\">\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n            <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\n          </app-aspect-ratio>\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <img [src]=\"routeResolveData?.image\" alt=\"Sample Image\" style=\"width: 100%; height: 100%;\"/>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h3 style=\"margin-top: 0px;\">\n          {{ routeResolveData?.title }}\n        </h3>\n        <p>\n          {{ routeResolveData?.description }}\n        </p>\n      </ion-col>\n    </ion-row>\n  </section>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShowcaseRouteResolversUxNonBlockingResolversNonBlockingResolversPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/route-resolvers-ux\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      NON Blocking Resovler Showcase\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      With Non-Blocking Resolvers, page transition is immediate. However UX degrades because you are showing a static loading indicator while the server sends data back to the client.\n    </p>\n    <ng-container *ngIf=\"!routeResolveData\">\n      <div style=\"margin: 20px 40px; text-align: center;\">\n        <ion-spinner></ion-spinner>\n        <p>\n          <b>You can show a static shell while fetching data from the backend</b>\n        </p>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"routeResolveData\">\n      <ion-row style=\"background-color: #FFF; padding: 10px;\">\n        <ion-col size=\"12\">\n          <div [ngStyle]=\"{'background-image': 'url(' + routeResolveData?.cover + ')'}\" style=\"background-size: cover; background-repeat: no-repeat;\">\n            <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n              <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\n            </app-aspect-ratio>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n            <img [src]=\"routeResolveData?.image\" alt=\"Sample Image\" style=\"width: 100%; height: 100%;\"/>\n          </app-aspect-ratio>\n        </ion-col>\n        <ion-col size=\"8\">\n          <h3 style=\"margin-top: 0px;\">\n            {{ routeResolveData?.title }}\n          </h3>\n          <p>\n            {{ routeResolveData?.description }}\n          </p>\n        </ion-col>\n      </ion-row>\n    </ng-container>\n  </section>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShowcaseRouteResolversUxProgressiveShellResolversProgressiveShellResolversPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/route-resolvers-ux\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Progressive Shell Showcase\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <ion-row style=\"background-color: #FFF; padding: 10px;\">\n      <ion-col size=\"12\">\n        <app-image-shell class=\"add-overlay\" animation=\"spinner\" [display]=\"'cover'\" [src]=\"routeResolveData?.cover\" [alt]=\"'Sample Image Cover'\">\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n            <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\n          </app-aspect-ratio>\n        </app-image-shell>\n      </ion-col>\n      <ion-col size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell animation=\"spinner\" [src]=\"routeResolveData?.image\" [alt]=\"'Sample Image'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h3 style=\"margin-top: 0px;\">\n          <app-text-shell [data]=\"routeResolveData?.title\"></app-text-shell>\n        </h3>\n        <p>\n          <app-text-shell animation=\"bouncing\" lines=\"3\" [data]=\"routeResolveData?.description\"></app-text-shell>\n        </p>\n      </ion-col>\n    </ion-row>\n  </section>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShowcaseRouteResolversUxRouteResolversUxPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Improve Route Resolvers UX\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      Lets see the difference between the different implementations of Route Resolvers.\n    </p>\n    <h5>Blocking Route Resolvers</h5>\n    <p>\n      By default, Angular Route Resolvers won't transition to the page until the Resolver Observable completes.\n    </p>\n    <p>\n      Let's suppose the backend is slow and takes 5 seconds to fetch data and return it to the client, this is what's going to happen.\n    </p>\n    <p>\n      <b>Expected behavior:</b> Page transition will be delayed 5 seconds until the server sends data back to the client.\n    </p>\n    <ion-button expand=\"block\" [routerLink]=\"['/showcase/route-resolvers-ux/blocking-resolvers']\">Blocking Resolvers</ion-button>\n  </section>\n  <section class=\"showcase-section\">\n    <h5>NON-Blocking Route Resolvers</h5>\n    <p>\n      To avoid waiting for the Observable to complete, we can wrap the base Observable (the one we are getting data from) with a dummy Observable, Subject or Promise that emits the base Observable and immediately completes.\n    </p>\n    <p>\n      <b>Expected behavior:</b> Page transition will be instant and the transitioned page will show a blank state while the server sends data back to the client.\n    </p>\n    <ion-button expand=\"block\" [routerLink]=\"['/showcase/route-resolvers-ux/non-blocking-resolvers']\">Non-Blocking Resolvers</ion-button>\n  </section>\n  <section class=\"showcase-section\">\n    <h5>Progressive Shell Resolvers</h5>\n    <p>\n      By using the <code>DataStore</code> utility in conjunction with Angular Route Resolvers, we can solve this UX problem and make page transitions immediate.\n    </p>\n    <p>\n      This approach uses a non-blocking Resolver in conjunction with the <code>DataStore</code> utility.\n    </p>\n    <p>\n      <b>Expected behavior:</b> Page transition will be instant and the transitioned page will show some shell elements while the server sends data back to the client.\n    </p>\n    <ion-button expand=\"block\" [routerLink]=\"['/showcase/route-resolvers-ux/progressive-shell-resolvers']\">Progressive Shell Resolvers</ion-button>\n  </section>\n</ion-content>\n";
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

  },

  /***/
  "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShowcaseRouteResolversUxBlockingResolversBlockingResolversPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".showcase-content {\n  --background: var(--app-background-shade);\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvYmxvY2tpbmctcmVzb2x2ZXJzL2Jsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL3JvdXRlLXJlc29sdmVycy11eC9ibG9ja2luZy1yZXNvbHZlcnMvYmxvY2tpbmctcmVzb2x2ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvYmxvY2tpbmctcmVzb2x2ZXJzL2Jsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */";
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

    BlockingResovlersPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    BlockingResovlersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-showcase-blocking-resolvers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blocking-resolvers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blocking-resolvers.page.scss */
      "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], BlockingResovlersPage);
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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

    BlockingResolver.ctorParameters = function () {
      return [{
        type: _showcase_service__WEBPACK_IMPORTED_MODULE_5__["ShowcaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    BlockingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_5__["ShowcaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], BlockingResolver);
    /***/
  },

  /***/
  "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShowcaseRouteResolversUxNonBlockingResolversNonBlockingResolversPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".showcase-content {\n  --background: var(--app-background-shade);\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvbm9uLWJsb2NraW5nLXJlc29sdmVycy9ub24tYmxvY2tpbmctcmVzb2x2ZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L25vbi1ibG9ja2luZy1yZXNvbHZlcnMvbm9uLWJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L25vbi1ibG9ja2luZy1yZXNvbHZlcnMvbm9uLWJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */";
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

    NonBlockingResolversPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    NonBlockingResolversPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-showcase-non-blocking-resolvers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./non-blocking-resolvers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./non-blocking-resolvers.page.scss */
      "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], NonBlockingResolversPage);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _showcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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

    NonBlockingResolver.ctorParameters = function () {
      return [{
        type: _showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"]
      }];
    };

    NonBlockingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"]])], NonBlockingResolver);
    /***/
  },

  /***/
  "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.scss":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.scss ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShowcaseRouteResolversUxProgressiveShellResolversProgressiveShellResolversPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".showcase-content {\n  --background: var(--app-background-shade);\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvcHJvZ3Jlc3NpdmUtc2hlbGwtcmVzb2x2ZXJzL3Byb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL3JvdXRlLXJlc29sdmVycy11eC9wcm9ncmVzc2l2ZS1zaGVsbC1yZXNvbHZlcnMvcHJvZ3Jlc3NpdmUtc2hlbGwtcmVzb2x2ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvcHJvZ3Jlc3NpdmUtc2hlbGwtcmVzb2x2ZXJzL3Byb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */";
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

    ProgressiveShellResovlersPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ProgressiveShellResovlersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-showcase-progressive-shell-resolvers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progressive-shell-resolvers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./progressive-shell-resolvers.page.scss */
      "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], ProgressiveShellResovlersPage);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _showcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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

    ProgressiveShellResolver.ctorParameters = function () {
      return [{
        type: _showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"]
      }];
    };

    ProgressiveShellResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"]])], ProgressiveShellResolver);
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


    var _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./route-resolvers-ux.page */
    "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.ts");
    /* harmony import */


    var _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./non-blocking-resolvers/non-blocking-resolvers.page */
    "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.ts");
    /* harmony import */


    var _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./blocking-resolvers/blocking-resolvers.page */
    "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.ts");
    /* harmony import */


    var _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./progressive-shell-resolvers/progressive-shell-resolvers.page */
    "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.ts");
    /* harmony import */


    var _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./blocking-resolvers/blocking.resolver */
    "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking.resolver.ts");
    /* harmony import */


    var _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./non-blocking-resolvers/non-blocking.resolver */
    "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking.resolver.ts");
    /* harmony import */


    var _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./progressive-shell-resolvers/progressive-shell.resolver */
    "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell.resolver.ts");
    /* harmony import */


    var _showcase_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../showcase.service */
    "./src/app/showcase/showcase.service.ts");

    var routes = [{
      path: '',
      component: _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_8__["RouteResovlersUXPage"]
    }, {
      path: 'blocking-resolvers',
      component: _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_10__["BlockingResovlersPage"],
      resolve: {
        data: _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_12__["BlockingResolver"]
      }
    }, {
      path: 'non-blocking-resolvers',
      component: _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_9__["NonBlockingResolversPage"],
      resolve: {
        data: _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_13__["NonBlockingResolver"]
      }
    }, {
      path: 'progressive-shell-resolvers',
      component: _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_11__["ProgressiveShellResovlersPage"],
      resolve: {
        data: _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_14__["ProgressiveShellResolver"]
      }
    }];

    var RouteResolversUXModule = function RouteResolversUXModule() {
      _classCallCheck(this, RouteResolversUXModule);
    };

    RouteResolversUXModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      declarations: [_route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_8__["RouteResovlersUXPage"], _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_10__["BlockingResovlersPage"], _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_9__["NonBlockingResolversPage"], _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_11__["ProgressiveShellResovlersPage"]],
      providers: [_blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_12__["BlockingResolver"], _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_13__["NonBlockingResolver"], _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_14__["ProgressiveShellResolver"], _showcase_service__WEBPACK_IMPORTED_MODULE_15__["ShowcaseService"]]
    })], RouteResolversUXModule);
    /***/
  },

  /***/
  "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShowcaseRouteResolversUxRouteResolversUxPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".showcase-content {\n  --background: var(--app-background-shade);\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvcm91dGUtcmVzb2x2ZXJzLXV4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L3JvdXRlLXJlc29sdmVycy11eC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L3JvdXRlLXJlc29sdmVycy11eC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RouteResovlersUXPage = function RouteResovlersUXPage() {
      _classCallCheck(this, RouteResovlersUXPage);
    };

    RouteResovlersUXPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-showcase-route-resolvers-ux',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./route-resolvers-ux.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./route-resolvers-ux.page.scss */
      "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RouteResovlersUXPage);
    /***/
  }
}]);
//# sourceMappingURL=route-resolvers-ux-route-resolvers-ux-module-es5.js.map