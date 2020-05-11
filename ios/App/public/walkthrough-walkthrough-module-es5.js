function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["walkthrough-walkthrough-module"], {
  /***/
  "./src/app/walkthrough/walkthrough.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/walkthrough/walkthrough.module.ts ***!
    \***************************************************/

  /*! exports provided: WalkthroughPageModule */

  /***/
  function srcAppWalkthroughWalkthroughModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function () {
      return WalkthroughPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _walkthrough_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./walkthrough.page */
    "./src/app/walkthrough/walkthrough.page.ts");

    var routes = [{
      path: '',
      component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]
    }];

    var WalkthroughPageModule = function WalkthroughPageModule() {
      _classCallCheck(this, WalkthroughPageModule);
    };

    WalkthroughPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WalkthroughPageModule
    });
    WalkthroughPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WalkthroughPageModule_Factory(t) {
        return new (t || WalkthroughPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WalkthroughPageModule, {
        declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalkthroughPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]],
          declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/walkthrough/walkthrough.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/walkthrough/walkthrough.page.ts ***!
    \*************************************************/

  /*! exports provided: WalkthroughPage */

  /***/
  function srcAppWalkthroughWalkthroughPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPage", function () {
      return WalkthroughPage;
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


    var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shell/aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
    /* harmony import */


    var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shell/image-shell/image-shell.component */
    "./src/app/shell/image-shell/image-shell.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return {
        w: 915,
        h: 849
      };
    };

    var _c1 = function _c1() {
      return {
        w: 1096,
        h: 806
      };
    };

    var _c2 = function _c2() {
      return {
        w: 918,
        h: 703
      };
    };

    var _c3 = function _c3() {
      return {
        w: 924,
        h: 819
      };
    };

    var _c4 = function _c4() {
      return ["/getting-started"];
    };

    var _c5 = function _c5() {
      return ["/auth/login"];
    };

    var WalkthroughPage = /*#__PURE__*/function () {
      function WalkthroughPage(menu) {
        _classCallCheck(this, WalkthroughPage);

        this.menu = menu;
        this.slidesOptions = {
          zoom: {
            toggle: false // Disable zooming to prevent weird double tap zomming on slide images

          }
        };
        this.isFirstSlide = true;
        this.isLastSlide = false;
      } // Disable side menu for this page


      _createClass(WalkthroughPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menu.enable(false);
        } // Restore to default when leaving this page

      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          this.menu.enable(true);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          // ViewChild is set
          this.slides.isBeginning().then(function (isBeginning) {
            _this.isFirstSlide = isBeginning;
          });
          this.slides.isEnd().then(function (isEnd) {
            _this.isLastSlide = isEnd;
          }); // Subscribe to changes

          this.slides.ionSlideWillChange.subscribe(function (changes) {
            _this.slides.isBeginning().then(function (isBeginning) {
              _this.isFirstSlide = isBeginning;
            });

            _this.slides.isEnd().then(function (isEnd) {
              _this.isLastSlide = isEnd;
            });
          });
        }
      }, {
        key: "skipWalkthrough",
        value: function skipWalkthrough() {
          var _this2 = this;

          // Skip to the last slide
          this.slides.length().then(function (length) {
            _this2.slides.slideTo(length);
          });
        }
      }]);

      return WalkthroughPage;
    }();

    WalkthroughPage.ɵfac = function WalkthroughPage_Factory(t) {
      return new (t || WalkthroughPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]));
    };

    WalkthroughPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WalkthroughPage,
      selectors: [["app-walkthrough"]],
      viewQuery: function WalkthroughPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
        }
      },
      hostVars: 4,
      hostBindings: function WalkthroughPage_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("first-slide-active", ctx.isFirstSlide)("last-slide-active", ctx.isLastSlide);
        }
      },
      decls: 96,
      vars: 21,
      consts: [[1, "ion-no-border"], ["slot", "end"], ["fill", "clear", 1, "skip-walkthrough-button", 3, "click"], ["pager", "true", 1, "walkthrough-slides", 3, "options"], [1, "first-slide", "illustration-and-decoration-slide"], [1, "slide-inner-row"], [1, "illustration-col"], [3, "ratio"], ["animation", "spinner", 1, "illustration-image", 3, "src", "alt"], [1, "decoration-col"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "height", "100px", "width", "100%", "viewBox", "0 0 90 20", 0, "xml", "space", "preserve", "preserveAspectRatio", "none", 1, "vector-decoration", 2, "enable-background", "new 0 0 90 20"], ["d", "M0 0 V5 H5 C25 5 25 20 45 20 S65 5 85 5 H90 V0 Z"], [1, "info-col"], [1, "info-wrapper"], [1, "info-title"], [1, "info-paragraph"], [1, "second-slide", "illustration-and-decoration-slide"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "height", "100px", "width", "100%", "viewBox", "0 0 64 24", 0, "xml", "space", "preserve", "preserveAspectRatio", "none", 1, "vector-decoration", 2, "enable-background", "new 0 0 64 24"], ["d", "M0 0 L64 0 L64 24 Q56 24 48 16 Q34 0 22 10 Q10 22 0 8 Z"], [1, "third-slide", "illustration-and-decoration-slide"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "height", "100px", "width", "100%", "viewBox", "0 0 64 14", 0, "xml", "space", "preserve", "preserveAspectRatio", "none", 1, "vector-decoration", 2, "enable-background", "new 0 0 64 24"], ["d", "M0 0 V5 H5 C19 5 25 14 32 14 S45 5 59 5 H64 V0 Z"], [1, "last-slide", "illustration-and-decoration-slide"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "height", "100px", "width", "100%", "viewBox", "0 0 64 18", 0, "xml", "space", "preserve", "preserveAspectRatio", "none", 1, "vector-decoration", 2, "enable-background", "new 0 0 64 24"], ["d", "M0 0 L64 0 L64 10 Q56 24 46 12 Q34 0 26 8 Q10 22 0 8 Z"], [1, "info-outer"], [1, "call-to-actions-wrapper"], ["expand", "block", 1, "get-started-button", 3, "routerLink"], [1, "alt-call-to-action-row"], [1, "cta-leading-text"], ["fill", "clear", 1, "login-button", 3, "routerLink"]],
      template: function WalkthroughPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkthroughPage_Template_ion_button_click_3_listener() {
            return ctx.skipWalkthrough();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "skip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-slides", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-slide", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-aspect-ratio", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-image-shell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "This App is built with Ionic 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " It was created by the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "IonicThemes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " team to help you jump start your Ionic app development. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "You will love Ionic 5, and if you get lost, remember we have lots of tutorials to help you.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-slide", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-row", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-aspect-ratio", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-image-shell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "How to use this template?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " We want to help you build better and faster Ionic apps. We have put a lot of effort building and styling each component of this template. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " You are free to reuse and modify every component of this template. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-slide", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ion-row", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "app-aspect-ratio", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-image-shell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Which components are available in this Ionic 5 app?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Tabs, Notifications, Profile, SideMenu, Authentication, Getting Started, Walkthrough, Forms and Validations, Categories, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Travel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Fashion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Food");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Deals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Real Estate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " listings and details page and many more! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ion-slide", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ion-row", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "app-aspect-ratio", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "app-image-shell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "svg", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ion-row", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "It's time to start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Hope you like this Ionic 5 template and please let us know your feedback so we can keep improving it! Enjoy ;) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ion-col", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ion-button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ion-row", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Already have an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "ion-button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Login here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.slidesOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/sample-images/walkthrough/walkthrough-illustration-1.svg")("alt", "walkthrough");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/sample-images/walkthrough/walkthrough-illustration-2.svg")("alt", "walkthrough");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/sample-images/walkthrough/walkthrough-illustration-3.svg")("alt", "walkthrough");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/sample-images/walkthrough/walkthrough-illustration-4.svg")("alt", "walkthrough");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c5));
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__["ImageShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background);\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-first-slide-background: #c1ebff;\n  --page-second-slide-background: #a9ebd2;\n  --page-third-slide-background: #f0cbe5;\n  --page-last-slide-background: #eef3ff;\n  --page-vector-decoration-fill: var(--ion-color-light-shade);\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --ion-toolbar-background: transparent;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: var(--ion-color-lightest);\n}\n\nion-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n\n.walkthrough-slides[_ngcontent-%COMP%] {\n  --bullet-background: var(--ion-color-dark);\n  --bullet-background-active: var(--ion-color-dark);\n  height: 100%;\n}\n\n.walkthrough-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-top: var(--app-header-height);\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n  background-clip: padding-box;\n  background-color: var(--page-vector-decoration-fill);\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  min-height: auto;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  max-width: 30vh;\n  padding: 0px;\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 1;\n  min-height: 12vh;\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]   .vector-decoration[_ngcontent-%COMP%] {\n  fill: currentColor;\n  color: var(--page-vector-decoration-fill);\n  background-color: var(--page-background);\n  padding-bottom: 4px;\n  transform: translate3d(0px, 0px, 0px);\n  shape-rendering: geometricprecision;\n  height: calc(100% + 1px);\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 0;\n  min-height: auto;\n  background-color: var(--page-background);\n  margin-bottom: -1px;\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) * -1) var(--page-margin) 0px;\n  text-align: left;\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n  color: var(--ion-color-dark);\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-shade);\n  font-size: 14px;\n  margin: 0px 0px calc(var(--page-margin) / 2);\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0px;\n}\n\n.first-slide[_ngcontent-%COMP%] {\n  --page-vector-decoration-fill: var(--page-first-slide-background);\n}\n\n.second-slide[_ngcontent-%COMP%] {\n  --page-vector-decoration-fill: var(--page-second-slide-background);\n}\n\n.third-slide[_ngcontent-%COMP%] {\n  --page-vector-decoration-fill: var(--page-third-slide-background);\n}\n\n.last-slide[_ngcontent-%COMP%] {\n  --page-vector-decoration-fill: var(--page-last-slide-background);\n}\n\n.last-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%] {\n  border-width: 0px;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%] {\n  padding: var(--page-margin);\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%] {\n  height: 100%;\n  align-items: flex-end;\n  flex-direction: column;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) * -1) 0px 0px;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .call-to-actions-wrapper[_ngcontent-%COMP%] {\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .get-started-button[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .cta-leading-text[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  font-size: 16px;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n.first-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.last-slide-active[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination {\n  display: none;\n}\n\n.last-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0NBQUE7RUFDQSx3Q0FBQTtFQUVBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUVBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0VBRUEsMkRBQUE7QUNKRjs7QURTRTtFQUNFLHFDQUFBO0FDTko7O0FEU0k7RUFDRSxrQ0FBQTtBQ1BOOztBRFlBO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0FDVkY7O0FEYUE7RUFDRSwwQ0FBQTtFQUNBLGlEQUFBO0VBRUEsWUFBQTtBQ1hGOztBRGFFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEscUNBQUE7RUFFQSxvRUFBQTtFQUNBLDRCQUFBO0VBQ0Esb0RBQUE7QUNiSjs7QURrQkU7RUFDRSw4QkFBQTtFQUVBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ2hCSjs7QURtQkU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNqQko7O0FEb0JFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFHQSxnQkFBQTtFQUNBLHFDQUFBO0FDcEJKOztBRHNCSTtFQUNFLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBR0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0FDdEJOOztBRDBCRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUdBLG1CQUFBO0VBRUEscUNBQUE7QUMzQko7O0FENkJJO0VBQ0UsNERBQUE7RUFDQSxnQkFBQTtBQzNCTjs7QUQ2Qk07RUFDRSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtBQzNCUjs7QUQ4Qk07RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQzVCUjs7QUQ4QlE7RUFDRSxrQkFBQTtBQzVCVjs7QURtQ0E7RUFDRSxpRUFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxrRUFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxpRUFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxnRUFBQTtBQ2hDRjs7QURrQ0U7RUFFRSxpQkFBQTtBQ2pDSjs7QURvQ0U7RUFDRSwyQkFBQTtBQ2xDSjs7QURvQ0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ2xDTjs7QURvQ007RUFDRSw2Q0FBQTtBQ2xDUjs7QURxQ007RUFDRSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7QUNuQ1I7O0FEdUNJO0VBQ0UsV0FBQTtBQ3JDTjs7QUR3Q0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUN0Q047O0FEd0NNO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FDdENSOztBRHlDTTtFQUNFLG1DQUFBO0VBRUEsV0FBQTtBQ3hDUjs7QUQrQ0U7RUFDRSxrQkFBQTtBQzVDSjs7QURrREk7RUFDRSxhQUFBO0FDL0NOOztBRG1ERTtFQUNFLGtCQUFBO0FDakRKOztBRHlERTtFQUNFLDRDQUFBO0VBQ0EsY0FBQTtFQUVBLCtGQUFBO0FDdkRKOztBRHlESTtFQUNFLHlDQUFBO0VBQ0EsMENBQUE7QUN2RE4iLCJmaWxlIjoic3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogNDBweDtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcbiAgLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemU6IDEwcHg7XG5cbiAgLS1wYWdlLWZpcnN0LXNsaWRlLWJhY2tncm91bmQ6ICNjMWViZmY7XG4gIC0tcGFnZS1zZWNvbmQtc2xpZGUtYmFja2dyb3VuZDogI2E5ZWJkMjtcbiAgLS1wYWdlLXRoaXJkLXNsaWRlLWJhY2tncm91bmQ6ICNmMGNiZTU7XG4gIC0tcGFnZS1sYXN0LXNsaWRlLWJhY2tncm91bmQ6ICNlZWYzZmY7XG5cbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgLy8gRm9yIHRoZSBza2lwIGJ1dHRvblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAvLyBUbyBnZXQgdGhlIGlvbi1jb250ZW50IGJlaGluZCB0aGUgaW9uLWhlYWRlclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLndhbGt0aHJvdWdoLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvLyBIZWFkZXIgc3BhY2VcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tYXBwLWhlYWRlci1oZWlnaHQpO1xuICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBzcGFjZVxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsKTtcbiAgfVxufVxuXG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiAzMHZoO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuXG4gICAgLy8gVG8gcHJldmVudCB0cmFuc3BhcmVudCBsaW5lIGNhdXNlZCBieSBwaXhlbCBmcmFjdGlvbnNcbiAgICBtaW4taGVpZ2h0OiAxMnZoO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG5cbiAgICAudmVjdG9yLWRlY29yYXRpb24ge1xuICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcblxuICAgICAgLy8gVG8gcHJldmVudCB0cmFuc3BhcmVudCBsaW5lIGNhdXNlZCBieSBwaXhlbCBmcmFjdGlvbnNcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBzaGFwZS1yZW5kZXJpbmc6IGdlb21ldHJpY3ByZWNpc2lvbjtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlICsgMXB4KTtcbiAgICB9XG4gIH1cblxuICAuaW5mby1jb2wge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgICAvLyBUbyBwcmV2ZW50IHRyYW5zcGFyZW50IGxpbmUgY2F1c2VkIGJ5IHBpeGVsIGZyYWN0aW9uc1xuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgLy8gUHJldmVudCAuaW5mby13cmFwcGVyIHRleHQgdG8gYmxpbmsgYXMgaXQncyBvdmVyIHRoZSBwcmV2aW91cyBlbGVtZW50IChTYWZhcmkgaXNzdWUpXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcblxuICAgIC5pbmZvLXdyYXBwZXIge1xuICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgLmluZm8tdGl0bGUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuXG4gICAgICAuaW5mby1wYXJhZ3JhcGgge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZpcnN0LXNsaWRlIHtcbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLXBhZ2UtZmlyc3Qtc2xpZGUtYmFja2dyb3VuZCk7XG59XG5cbi5zZWNvbmQtc2xpZGUge1xuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS1zZWNvbmQtc2xpZGUtYmFja2dyb3VuZCk7XG59XG5cbi50aGlyZC1zbGlkZSB7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLXRoaXJkLXNsaWRlLWJhY2tncm91bmQpO1xufVxuXG4ubGFzdC1zbGlkZSB7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLWxhc3Qtc2xpZGUtYmFja2dyb3VuZCk7XG5cbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgLy8gSW4gdGhlIGxhc3Qgc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uIGlzIGhpZGRlblxuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICB9XG5cbiAgLmluZm8tY29sIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAuaW5mby1vdXRlciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAuaW5mby13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSAwcHggMHB4O1xuICAgICAgfVxuXG4gICAgICAuY2FsbC10by1hY3Rpb25zLXdyYXBwZXIge1xuICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZ2V0LXN0YXJ0ZWQtYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5hbHQtY2FsbC10by1hY3Rpb24tcm93IHtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICAgIC5jdGEtbGVhZGluZy10ZXh0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5sb2dpbi1idXR0b24ge1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcblxuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoLmZpcnN0LXNsaWRlLWFjdGl2ZSkge1xuICAuc2tpcC13YWxrdGhyb3VnaC1idXR0b24ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG46aG9zdCgubGFzdC1zbGlkZS1hY3RpdmUpIHtcbiAgOjpuZy1kZWVwIC53YWxrdGhyb3VnaC1zbGlkZXMge1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5za2lwLXdhbGt0aHJvdWdoLWJ1dHRvbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbi8vIElTU1VFOiAuc3dpcGVyLXBhZ2dpbmF0aW9uIGdldHMgcmVuZGVyZWQgZHluYW1pY2FsbHkuIFRoYXQgcHJldmVudHMgc3R5bGluZyB0aGUgZWxlbWVudHMgd2hlbiB1c2luZyB0aGUgZGVmYXVsdCBBbmd1bGFyIFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbi8vICAgICAgICAoQW5ndWxhciBkb2Vzbid0IGFkZCBhbiAnX25nY29udGVudCcgYXR0cmlidXRlIHRvIHRoZSAuc3dpcGVyLXBhZ2dpbmF0aW9uIGJlY2F1c2UgaXQncyBkeW5hbWljYWxseSByZW5kZXJlZClcbi8vIEZJWDogICBTZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNjI2NTA3Mi8xMTE2OTU5XG46aG9zdCA6Om5nLWRlZXAgLndhbGt0aHJvdWdoLXNsaWRlcyB7XG4gIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCk7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIGlzIDE4cHggaGVpZ2h0LCAuc2xpZGUtaW5uZXItcm93IGhhcyA0MHB4IG9mIHBhZGRpbmctYm90dG9tID0+IGJvdHRvbSA9ICg0MHB4IC0gMThweCkvMiA9IDExcHhcbiAgICBib3R0b206IGNhbGMoKHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIC0gdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpICkgLyAyKTtcblxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2U6IDQwcHg7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiAxMHB4O1xuICAtLXBhZ2UtZmlyc3Qtc2xpZGUtYmFja2dyb3VuZDogI2MxZWJmZjtcbiAgLS1wYWdlLXNlY29uZC1zbGlkZS1iYWNrZ3JvdW5kOiAjYTllYmQyO1xuICAtLXBhZ2UtdGhpcmQtc2xpZGUtYmFja2dyb3VuZDogI2YwY2JlNTtcbiAgLS1wYWdlLWxhc3Qtc2xpZGUtYmFja2dyb3VuZDogI2VlZjNmZjtcbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLndhbGt0aHJvdWdoLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndhbGt0aHJvdWdoLXNsaWRlcyAuc2xpZGUtaW5uZXItcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogdmFyKC0tYXBwLWhlYWRlci1oZWlnaHQpO1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsKTtcbn1cblxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuc2xpZGUtaW5uZXItcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDMwdmg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmRlY29yYXRpb24tY29sIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMTtcbiAgbWluLWhlaWdodDogMTJ2aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmRlY29yYXRpb24tY29sIC52ZWN0b3ItZGVjb3JhdGlvbiB7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgY29sb3I6IHZhcigtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gIHNoYXBlLXJlbmRlcmluZzogZ2VvbWV0cmljcHJlY2lzaW9uO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDFweCk7XG59XG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5pbmZvLWNvbCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG59XG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5pbmZvLWNvbCAuaW5mby13cmFwcGVyIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaW5mby1jb2wgLmluZm8td3JhcHBlciAuaW5mby10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5pbmZvLWNvbCAuaW5mby13cmFwcGVyIC5pbmZvLXBhcmFncmFwaCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmluZm8tY29sIC5pbmZvLXdyYXBwZXIgLmluZm8tcGFyYWdyYXBoOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5maXJzdC1zbGlkZSB7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLWZpcnN0LXNsaWRlLWJhY2tncm91bmQpO1xufVxuXG4uc2Vjb25kLXNsaWRlIHtcbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLXBhZ2Utc2Vjb25kLXNsaWRlLWJhY2tncm91bmQpO1xufVxuXG4udGhpcmQtc2xpZGUge1xuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS10aGlyZC1zbGlkZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmxhc3Qtc2xpZGUge1xuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS1sYXN0LXNsaWRlLWJhY2tncm91bmQpO1xufVxuLmxhc3Qtc2xpZGUgLnNsaWRlLWlubmVyLXJvdyB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIC5pbmZvLW91dGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubGFzdC1zbGlkZSAuaW5mby1jb2wgLmluZm8tb3V0ZXIgLmluZm8td3JhcHBlciB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSkgMHB4IDBweDtcbn1cbi5sYXN0LXNsaWRlIC5pbmZvLWNvbCAuaW5mby1vdXRlciAuY2FsbC10by1hY3Rpb25zLXdyYXBwZXIge1xuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5sYXN0LXNsaWRlIC5pbmZvLWNvbCAuZ2V0LXN0YXJ0ZWQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubGFzdC1zbGlkZSAuaW5mby1jb2wgLmFsdC1jYWxsLXRvLWFjdGlvbi1yb3cge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5sYXN0LXNsaWRlIC5pbmZvLWNvbCAuYWx0LWNhbGwtdG8tYWN0aW9uLXJvdyAuY3RhLWxlYWRpbmctdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIC5hbHQtY2FsbC10by1hY3Rpb24tcm93IC5sb2dpbi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbjpob3N0KC5maXJzdC1zbGlkZS1hY3RpdmUpIC5za2lwLXdhbGt0aHJvdWdoLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuOmhvc3QoLmxhc3Qtc2xpZGUtYWN0aXZlKSA6Om5nLWRlZXAgLndhbGt0aHJvdWdoLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QoLmxhc3Qtc2xpZGUtYWN0aXZlKSAuc2tpcC13YWxrdGhyb3VnaC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbjpob3N0IDo6bmctZGVlcCAud2Fsa3Rocm91Z2gtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm90dG9tOiBjYWxjKCh2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSAtIHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KSApIC8gMik7XG59XG46aG9zdCA6Om5nLWRlZXAgLndhbGt0aHJvdWdoLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHdpZHRoOiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG59Il19 */", "app-image-shell.illustration-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: transparent;\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2guc2hlbGwuc2NzcyIsInNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLHNEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2guc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC5pbGx1c3RyYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbiIsImFwcC1pbWFnZS1zaGVsbC5pbGx1c3RyYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn0iXX0= */", "@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%] {\n    max-width: 30vh;\n    padding: 0px;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%] {\n    min-height: 12vh;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--page-margin) / 2);\n    font-size: 20px;\n  }\n}\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%] {\n    max-width: 32vh;\n    padding: 0px;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%] {\n    min-height: 12vh;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--page-margin) / 2);\n    font-size: 20px;\n  }\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%] {\n    max-width: 36vh;\n    padding: 2vh 0px;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%] {\n    min-height: 14vh;\n  }\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%] {\n    max-width: 34vh;\n    padding: 6vh 0px;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%] {\n    min-height: 12vh;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%] {\n    max-width: 38vh;\n    padding: 4vh 0px;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%] {\n    min-height: 14vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucmVzcG9uc2l2ZS5zY3NzIiwic3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFXSTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VDZEo7RURpQkU7SUFDRSxnQkFBQTtFQ2ZKO0VEb0JNO0lBQ0UsMkNBQUE7SUFDQSxlQUFBO0VDbEJSO0FBQ0Y7QUR3QkEscURBQUE7QUFDQTtFQVdJO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUNoQ0o7RURtQ0U7SUFDRSxnQkFBQTtFQ2pDSjtFRHNDTTtJQUNFLDJDQUFBO0lBQ0EsZUFBQTtFQ3BDUjtBQUNGO0FEMENBLGtEQUFBO0FBQ0E7RUFVSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQ2pESjtFRG9ERTtJQUNFLGdCQUFBO0VDbERKO0FBQ0Y7QURzREEscUNBQUE7QUFDQTtFQVVJO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDN0RKO0VEZ0VFO0lBQ0UsZ0JBQUE7RUM5REo7QUFDRjtBRGtFQSxpREFBQTtBQUNBO0VBVUk7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUN6RUo7RUQ0RUU7SUFDRSxnQkFBQTtFQzFFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnJlc3BvbnNpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChOb3RlOiBEb24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBkZXZpY2VzIGFzIGl0IG1heSBicmVhayB0aGUgY29ycmVjdCBjc3MgcHJlY2VkZW5jZSlcblxuLy8gKHNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbWVkaWEtcXVlcmllcy1mb3Itc3RhbmRhcmQtZGV2aWNlcy8jaXBob25lLXF1ZXJpZXMpXG4vLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc3NTAyNjEvMTExNjk1OSlcblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSB7XG4gICAgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgICAgbWF4LXdpZHRoOiAzMHZoO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cblxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgICBtaW4taGVpZ2h0OiAxMnZoO1xuICAgIH1cblxuICAgIC5pbmZvLWNvbCB7XG4gICAgICAuaW5mby13cmFwcGVyIHtcbiAgICAgICAgLmluZm8tdGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NjhweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAgLyA3MSlcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgICBtYXgtd2lkdGg6IDMydmg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuXG4gICAgLmRlY29yYXRpb24tY29sIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gICAgfVxuXG4gICAgLmluZm8tY29sIHtcbiAgICAgIC5pbmZvLXdyYXBwZXIge1xuICAgICAgICAuaW5mby10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgICBtYXgtd2lkdGg6IDM2dmg7XG4gICAgICBwYWRkaW5nOiAydmggMHB4O1xuICAgIH1cblxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUge1xuICAgIC5pbGx1c3RyYXRpb24tY29sIHtcbiAgICAgIG1heC13aWR0aDogMzR2aDtcbiAgICAgIHBhZGRpbmc6IDZ2aCAwcHg7XG4gICAgfVxuXG4gICAgLmRlY29yYXRpb24tY29sIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2KywgNysgYW5kIDgrIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDczNnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgICBtYXgtd2lkdGg6IDM4dmg7XG4gICAgICBwYWRkaW5nOiA0dmggMHB4O1xuICAgIH1cblxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICAgIH1cbiAgfVxufVxuIiwiLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzB2aDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuZGVjb3JhdGlvbi1jb2wge1xuICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaW5mby1jb2wgLmluZm8td3JhcHBlciAuaW5mby10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNTY4cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwLzcxKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzJ2aDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuZGVjb3JhdGlvbi1jb2wge1xuICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaW5mby1jb2wgLmluZm8td3JhcHBlciAuaW5mby10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzZ2aDtcbiAgICBwYWRkaW5nOiAydmggMHB4O1xuICB9XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmRlY29yYXRpb24tY29sIHtcbiAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzR2aDtcbiAgICBwYWRkaW5nOiA2dmggMHB4O1xuICB9XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmRlY29yYXRpb24tY29sIHtcbiAgICBtaW4taGVpZ2h0OiAxMnZoO1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzM2cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzh2aDtcbiAgICBwYWRkaW5nOiA0dmggMHB4O1xuICB9XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmRlY29yYXRpb24tY29sIHtcbiAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalkthroughPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-walkthrough',
          templateUrl: './walkthrough.page.html',
          styleUrls: ['./styles/walkthrough.page.scss', './styles/walkthrough.shell.scss', './styles/walkthrough.responsive.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]
        }];
      }, {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], {
            "static": true
          }]
        }],
        isFirstSlide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.first-slide-active']
        }],
        isLastSlide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.last-slide-active']
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=walkthrough-walkthrough-module-es5.js.map