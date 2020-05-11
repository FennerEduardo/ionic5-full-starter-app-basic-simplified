function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabs.router.module */
    "./src/app/tabs/tabs.router.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TabsPageModule
    });
    TabsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TabsPageModule_Factory(t) {
        return new (t || TabsPageModule)();
      },
      imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsPageModule, {
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]],
          declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var TabsPage = /*#__PURE__*/function () {
      function TabsPage(menu) {
        _classCallCheck(this, TabsPage);

        this.menu = menu;
      }

      _createClass(TabsPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menu.enable(true);
        }
      }]);

      return TabsPage;
    }();

    TabsPage.ɵfac = function TabsPage_Factory(t) {
      return new (t || TabsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]));
    };

    TabsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabsPage,
      selectors: [["app-tabs"]],
      decls: 14,
      vars: 0,
      consts: [["slot", "bottom"], ["tab", "categories"], ["name", "list-outline"], [1, "tab-title"], ["tab", "user"], ["name", "person-outline"], ["tab", "notifications"], ["name", "notifications-outline"]],
      template: function TabsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-tab-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-tab-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-tab-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-tab-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]],
      styles: ["ion-tab-button[_ngcontent-%COMP%] {\n  --color: var(--ion-color-medium-shade);\n  --color-selected: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC90YWJzL3N0eWxlcy90YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy9zdHlsZXMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC90YWJzL3N0eWxlcy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuaW9uLXRhYi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuIiwiaW9uLXRhYi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tabs',
          templateUrl: 'tabs.page.html',
          styleUrls: ['./styles/tabs.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tabs/tabs.router.module.ts":
  /*!********************************************!*\
    !*** ./src/app/tabs/tabs.router.module.ts ***!
    \********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var routes = [{
      path: '',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'categories',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | categories-categories-module */
            "categories-categories-module").then(__webpack_require__.bind(null,
            /*! ../categories/categories.module */
            "./src/app/categories/categories.module.ts")).then(function (m) {
              return m.CategoriesPageModule;
            });
          }
        }, {
          path: 'fashion',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | fashion-listing-fashion-listing-module */
            [__webpack_require__.e("common"), __webpack_require__.e("fashion-listing-fashion-listing-module")]).then(__webpack_require__.bind(null,
            /*! ../fashion/listing/fashion-listing.module */
            "./src/app/fashion/listing/fashion-listing.module.ts")).then(function (m) {
              return m.FashionListingPageModule;
            });
          }
        }, {
          path: 'fashion/:productId',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | fashion-details-fashion-details-module */
            [__webpack_require__.e("common"), __webpack_require__.e("fashion-details-fashion-details-module")]).then(__webpack_require__.bind(null,
            /*! ../fashion/details/fashion-details.module */
            "./src/app/fashion/details/fashion-details.module.ts")).then(function (m) {
              return m.FashionDetailsPageModule;
            });
          }
        }, {
          path: 'food',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | food-listing-food-listing-module */
            [__webpack_require__.e("default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"), __webpack_require__.e("common"), __webpack_require__.e("food-listing-food-listing-module")]).then(__webpack_require__.bind(null,
            /*! ../food/listing/food-listing.module */
            "./src/app/food/listing/food-listing.module.ts")).then(function (m) {
              return m.FoodListingPageModule;
            });
          }
        }, {
          path: 'food/:productId',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | food-details-food-details-module */
            [__webpack_require__.e("default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"), __webpack_require__.e("common"), __webpack_require__.e("food-details-food-details-module")]).then(__webpack_require__.bind(null,
            /*! ../food/details/food-details.module */
            "./src/app/food/details/food-details.module.ts")).then(function (m) {
              return m.FoodDetailsPageModule;
            });
          }
        }, {
          path: 'travel',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | travel-listing-travel-listing-module */
            [__webpack_require__.e("common"), __webpack_require__.e("travel-listing-travel-listing-module")]).then(__webpack_require__.bind(null,
            /*! ../travel/listing/travel-listing.module */
            "./src/app/travel/listing/travel-listing.module.ts")).then(function (m) {
              return m.TravelListingPageModule;
            });
          }
        }, {
          path: 'travel/:productId',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | travel-details-travel-details-module */
            [__webpack_require__.e("common"), __webpack_require__.e("travel-details-travel-details-module")]).then(__webpack_require__.bind(null,
            /*! ../travel/details/travel-details.module */
            "./src/app/travel/details/travel-details.module.ts")).then(function (m) {
              return m.TravelDetailsPageModule;
            });
          }
        }, {
          path: 'deals',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | deals-listing-deals-listing-module */
            [__webpack_require__.e("default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"), __webpack_require__.e("common"), __webpack_require__.e("deals-listing-deals-listing-module")]).then(__webpack_require__.bind(null,
            /*! ../deals/listing/deals-listing.module */
            "./src/app/deals/listing/deals-listing.module.ts")).then(function (m) {
              return m.DealsListingPageModule;
            });
          }
        }, {
          path: 'deals/:productId',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | deals-details-deals-details-module */
            [__webpack_require__.e("default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"), __webpack_require__.e("common"), __webpack_require__.e("deals-details-deals-details-module")]).then(__webpack_require__.bind(null,
            /*! ../deals/details/deals-details.module */
            "./src/app/deals/details/deals-details.module.ts")).then(function (m) {
              return m.DealsDetailsPageModule;
            });
          }
        }, {
          path: 'real-estate',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | real-estate-listing-real-estate-listing-module */
            [__webpack_require__.e("common"), __webpack_require__.e("real-estate-listing-real-estate-listing-module")]).then(__webpack_require__.bind(null,
            /*! ../real-estate/listing/real-estate-listing.module */
            "./src/app/real-estate/listing/real-estate-listing.module.ts")).then(function (m) {
              return m.RealEstateListingPageModule;
            });
          }
        }, {
          path: 'real-estate/:productId',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | real-estate-details-real-estate-details-module */
            [__webpack_require__.e("common"), __webpack_require__.e("real-estate-details-real-estate-details-module")]).then(__webpack_require__.bind(null,
            /*! ../real-estate/details/real-estate-details.module */
            "./src/app/real-estate/details/real-estate-details.module.ts")).then(function (m) {
              return m.RealEstateDetailsPageModule;
            });
          }
        }]
      }, {
        path: 'user',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | user-profile-user-profile-module */
            [__webpack_require__.e("common"), __webpack_require__.e("user-profile-user-profile-module")]).then(__webpack_require__.bind(null,
            /*! ../user/profile/user-profile.module */
            "./src/app/user/profile/user-profile.module.ts")).then(function (m) {
              return m.UserProfilePageModule;
            });
          }
        }, {
          path: 'friends',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | user-friends-user-friends-module */
            [__webpack_require__.e("common"), __webpack_require__.e("user-friends-user-friends-module")]).then(__webpack_require__.bind(null,
            /*! ../user/friends/user-friends.module */
            "./src/app/user/friends/user-friends.module.ts")).then(function (m) {
              return m.UserFriendsPageModule;
            });
          }
        }]
      }, {
        path: 'notifications',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | notifications-notifications-module */
            "notifications-notifications-module").then(__webpack_require__.bind(null,
            /*! ../notifications/notifications.module */
            "./src/app/notifications/notifications.module.ts")).then(function (m) {
              return m.NotificationsPageModule;
            });
          }
        }]
      }]
    }, // /app/ redirect
    {
      path: '',
      redirectTo: 'app/categories',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TabsPageRoutingModule
    });
    TabsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TabsPageRoutingModule_Factory(t) {
        return new (t || TabsPageRoutingModule)();
      },
      providers: [],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map