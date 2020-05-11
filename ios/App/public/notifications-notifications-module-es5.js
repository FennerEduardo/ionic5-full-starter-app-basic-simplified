function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Notifications\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"notifications-content\">\n  <ng-container *ngIf=\"notifications\">\n    <ion-item-group>\n      <ion-item-divider sticky>\n        <ion-label>Today</ion-label>\n      </ion-item-divider>\n      <ion-item class=\"notification-item\" lines=\"none\" *ngFor=\"let notification of notifications.today\">\n        <ion-row class=\"notification-item-wrapper\">\n          <ion-col size=\"2\">\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"notification-image\" [src]=\"notification.image\" [alt]=\"'user image'\"></app-image-shell>\n            </app-aspect-ratio>\n          </ion-col>\n          <ion-col class=\"details-wrapper\">\n            <h2 class=\"details-name\">{{ notification.name }}</h2>\n            <p class=\"details-description\">{{ notification.message }}</p>\n          </ion-col>\n          <ion-col size=\"2\" class=\"date-wrapper\">\n            <h3 class=\"notification-date\">{{ notification.date }}</h3>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider sticky>\n        <ion-label>Yesterday</ion-label>\n      </ion-item-divider>\n      <ion-item class=\"notification-item\" lines=\"none\" *ngFor=\"let notification of notifications.yesterday\">\n        <ion-row class=\"notification-item-wrapper\">\n          <ion-col size=\"2\">\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"notification-image\" [src]=\"notification.image\" [alt]=\"'user image'\"></app-image-shell>\n            </app-aspect-ratio>\n          </ion-col>\n          <ion-col class=\"details-wrapper\">\n            <h2 class=\"details-name\">{{ notification.name }}</h2>\n            <p class=\"details-description\">{{ notification.message }}</p>\n          </ion-col>\n          <ion-col size=\"2\" class=\"date-wrapper\">\n            <h3 class=\"notification-date\">{{ notification.date }}</h3>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-item-group>\n  </ng-container>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/notifications/notifications.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/notifications/notifications.module.ts ***!
    \*******************************************************/

  /*! exports provided: NotificationsPageModule */

  /***/
  function srcAppNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
      return NotificationsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _notifications_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/notifications/notifications.page.ts");
    /* harmony import */


    var _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../notifications/notifications.resolver */
    "./src/app/notifications/notifications.resolver.ts");
    /* harmony import */


    var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../notifications/notifications.service */
    "./src/app/notifications/notifications.service.ts");

    var NotificationsPageModule = function NotificationsPageModule() {
      _classCallCheck(this, NotificationsPageModule);
    };

    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPage"],
        resolve: {
          data: _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__["NotificationsResolver"]
        }
      }])],
      declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPage"]],
      providers: [_notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__["NotificationsResolver"], _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"]]
    })], NotificationsPageModule);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/notifications/notifications.page.ts ***!
    \*****************************************************/

  /*! exports provided: NotificationsPage */

  /***/
  function srcAppNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
      return NotificationsPage;
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

    var NotificationsPage = /*#__PURE__*/function () {
      function NotificationsPage(route) {
        _classCallCheck(this, NotificationsPage);

        this.route = route;
      }

      _createClass(NotificationsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.route && this.route.data) {
            this.route.data.subscribe(function (resolvedData) {
              var dataSource = resolvedData['data'];

              if (dataSource) {
                dataSource.source.subscribe(function (pageData) {
                  if (pageData) {
                    _this.notifications = pageData;
                  }
                });
              }
            });
          }
        }
      }]);

      return NotificationsPage;
    }();

    NotificationsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/notifications.page.scss */
      "./src/app/notifications/styles/notifications.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/notifications.shell.scss */
      "./src/app/notifications/styles/notifications.shell.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], NotificationsPage);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.resolver.ts":
  /*!*********************************************************!*\
    !*** ./src/app/notifications/notifications.resolver.ts ***!
    \*********************************************************/

  /*! exports provided: NotificationsResolver */

  /***/
  function srcAppNotificationsNotificationsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsResolver", function () {
      return NotificationsResolver;
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


    var _notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./notifications.service */
    "./src/app/notifications/notifications.service.ts");

    var NotificationsResolver = /*#__PURE__*/function () {
      function NotificationsResolver(notificationsService) {
        _classCallCheck(this, NotificationsResolver);

        this.notificationsService = notificationsService;
      }

      _createClass(NotificationsResolver, [{
        key: "resolve",
        value: function resolve() {
          // Base Observable (where we get data from)
          var dataObservable = this.notificationsService.getData();
          return {
            source: dataObservable
          };
        }
      }]);

      return NotificationsResolver;
    }();

    NotificationsResolver.ctorParameters = function () {
      return [{
        type: _notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]
      }];
    };

    NotificationsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]])], NotificationsResolver);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/notifications/notifications.service.ts ***!
    \********************************************************/

  /*! exports provided: NotificationsService */

  /***/
  function srcAppNotificationsNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
      return NotificationsService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var NotificationsService = /*#__PURE__*/function () {
      function NotificationsService(http) {
        _classCallCheck(this, NotificationsService);

        this.http = http;
      }

      _createClass(NotificationsService, [{
        key: "getData",
        value: function getData() {
          return this.http.get('./assets/sample-data/notifications.json');
        }
      }]);

      return NotificationsService;
    }();

    NotificationsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], NotificationsService);
    /***/
  },

  /***/
  "./src/app/notifications/styles/notifications.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/notifications/styles/notifications.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationsStylesNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.notifications-content ion-item-divider {\n  --background: var(--ion-color-light);\n  --padding-start: var(--page-margin);\n}\n\n.notifications-content .notification-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  padding: var(--page-margin);\n  color: var(--ion-color-medium);\n  box-shadow: inset 0 8px 2px -9px var(--ion-color-darkest);\n}\n\n.notifications-content .notification-item .notification-item-wrapper {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  align-items: center;\n}\n\n.notifications-content .notification-item .details-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding-left: var(--page-margin);\n}\n\n.notifications-content .notification-item .details-wrapper .details-name {\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-secondary);\n}\n\n.notifications-content .notification-item .details-wrapper .details-description {\n  font-size: 12px;\n  margin: 0px;\n}\n\n.notifications-content .notification-item .date-wrapper {\n  align-self: flex-start;\n}\n\n.notifications-content .notification-item .date-wrapper .notification-date {\n  margin: 0px;\n  font-size: 12px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9ub3RpZmljYXRpb25zL3N0eWxlcy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm90aWZpY2F0aW9ucy9zdHlsZXMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1Q0FBQTtBQ0RGOztBRE1FO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtBQ0hKOztBRE1FO0VBQ0Usb0JBQUE7RUFDQSx3QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQ0xKOztBRE9JO0VBQ0UsOEJBQUE7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7QUNOTjs7QURTSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNQTjs7QURTTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDRCxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUNQUDs7QURVTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDUlI7O0FEWUk7RUFDRSxzQkFBQTtBQ1ZOOztBRFlNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDVlIiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL3N0eWxlcy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLm5vdGlmaWNhdGlvbnMtY29udGVudCB7XG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgfVxuXG4gIC5ub3RpZmljYXRpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDhweCAycHggLTlweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG5cbiAgICAubm90aWZpY2F0aW9uLWl0ZW0td3JhcHBlciB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZGV0YWlscy13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgLmRldGFpbHMtbmFtZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBcdGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgfVxuXG4gICAgICAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRhdGUtd3JhcHBlciB7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAubm90aWZpY2F0aW9uLWRhdGUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbn1cblxuLm5vdGlmaWNhdGlvbnMtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgOHB4IDJweCAtOXB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5ub3RpZmljYXRpb24taXRlbS13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWxzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubm90aWZpY2F0aW9ucy1jb250ZW50IC5ub3RpZmljYXRpb24taXRlbSAuZGV0YWlscy13cmFwcGVyIC5kZXRhaWxzLW5hbWUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWxzLXdyYXBwZXIgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLm5vdGlmaWNhdGlvbnMtY29udGVudCAubm90aWZpY2F0aW9uLWl0ZW0gLmRhdGUtd3JhcHBlciB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4ubm90aWZpY2F0aW9ucy1jb250ZW50IC5ub3RpZmljYXRpb24taXRlbSAuZGF0ZS13cmFwcGVyIC5ub3RpZmljYXRpb24tZGF0ZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/notifications/styles/notifications.shell.scss":
  /*!***************************************************************!*\
    !*** ./src/app/notifications/styles/notifications.shell.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationsStylesNotificationsShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.notification-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9ub3RpZmljYXRpb25zL3N0eWxlcy9ub3RpZmljYXRpb25zLnNoZWxsLnNjc3MiLCJzcmMvYXBwL25vdGlmaWNhdGlvbnMvc3R5bGVzL25vdGlmaWNhdGlvbnMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL3N0eWxlcy9ub3RpZmljYXRpb25zLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwubm90aWZpY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwubm90aWZpY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */";
    /***/
  }
}]);
//# sourceMappingURL=notifications-notifications-module-es5.js.map