function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getting-started-getting-started-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGettingStartedGettingStartedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"skip-getting-started-button\" fill=\"clear\" [routerLink]=\"['/auth/login']\">skip</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- We need the form wrapping the slides so all the inputs in the different slides are part of the same form -->\n  <form class=\"getting-started-form\" [formGroup]=\"gettingStartedForm\">\n    <ion-slides class=\"getting-started-slides\" pager=\"true\">\n      <ion-slide class=\"browsing-categories-slide question-slide\">\n        <ion-row class=\"slide-inner-row\">\n          <ion-col class=\"question-options-col\" size=\"12\">\n            <h2 class=\"slide-title\">What are you browsing for?</h2>\n            <ion-list class=\"question-options-list\">\n              <ion-radio-group formControlName=\"browsingCategory\">\n                <ion-item class=\"question-option\">\n                  <ion-label>Woman</ion-label>\n                  <ion-radio value=\"woman\"></ion-radio>\n                </ion-item>\n                <ion-item class=\"question-option\">\n                  <ion-label>Men</ion-label>\n                  <ion-radio value=\"men\"></ion-radio>\n                </ion-item>\n                <ion-item class=\"question-option\">\n                  <ion-label>Kids</ion-label>\n                  <ion-radio value=\"kids\"></ion-radio>\n                </ion-item>\n                <ion-item class=\"question-option\">\n                  <ion-label>Petit</ion-label>\n                  <ion-radio value=\"petit\"></ion-radio>\n                </ion-item>\n                <ion-item class=\"question-option\">\n                  <ion-label>Plus Size</ion-label>\n                  <ion-radio value=\"plus-size\"></ion-radio>\n                </ion-item>\n                <ion-item class=\"question-option\">\n                  <ion-label>New In</ion-label>\n                  <ion-radio value=\"new-in\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n      <ion-slide class=\"interests-to-follow-slide question-slide\">\n        <ion-row class=\"slide-inner-row\">\n          <ion-col class=\"heading-col\">\n            <h2 class=\"slide-title\">Pick categories to follow</h2>\n            <p class=\"slide-subtitle\">\n              You can add or change them later\n            </p>\n          </ion-col>\n          <ion-col class=\"question-options-col\">\n            <ion-row class=\"options-list-row\" formGroupName=\"followingInterests\">\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [display]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category1-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Tops</span>\n                      <ion-checkbox checked=\"true\" formControlName=\"tops\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [display]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category2-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Dresses</span>\n                      <ion-checkbox formControlName=\"dresses\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [display]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category3-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Jeans</span>\n                      <ion-checkbox formControlName=\"jeans\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [display]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category4-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Jackets</span>\n                      <ion-checkbox checked=\"true\" formControlName=\"jackets\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [display]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category5-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Shoes</span>\n                      <ion-checkbox formControlName=\"shoes\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [display]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category6-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Glasses</span>\n                      <ion-checkbox formControlName=\"glasses\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col class=\"call-to-action-col\">\n            <ion-button class=\"signup-button\" color=\"secondary\" expand=\"block\" [routerLink]=\"['/auth/signup']\">Sign Up</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/getting-started/getting-started.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/getting-started/getting-started.module.ts ***!
    \***********************************************************/

  /*! exports provided: GettingStartedPageModule */

  /***/
  function srcAppGettingStartedGettingStartedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GettingStartedPageModule", function () {
      return GettingStartedPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _getting_started_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./getting-started.page */
    "./src/app/getting-started/getting-started.page.ts");

    var routes = [{
      path: '',
      component: _getting_started_page__WEBPACK_IMPORTED_MODULE_7__["GettingStartedPage"]
    }];

    var GettingStartedPageModule = function GettingStartedPageModule() {
      _classCallCheck(this, GettingStartedPageModule);
    };

    GettingStartedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_getting_started_page__WEBPACK_IMPORTED_MODULE_7__["GettingStartedPage"]]
    })], GettingStartedPageModule);
    /***/
  },

  /***/
  "./src/app/getting-started/getting-started.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/getting-started/getting-started.page.ts ***!
    \*********************************************************/

  /*! exports provided: GettingStartedPage */

  /***/
  function srcAppGettingStartedGettingStartedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GettingStartedPage", function () {
      return GettingStartedPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var GettingStartedPage =
    /*#__PURE__*/
    function () {
      function GettingStartedPage(menu) {
        _classCallCheck(this, GettingStartedPage);

        this.menu = menu;
        this.isLastSlide = false;
        this.gettingStartedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          browsingCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('men'),
          followingInterests: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            tops: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            dresses: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            jeans: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            jackets: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            shoes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            glasses: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          })
        });
      }

      _createClass(GettingStartedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(false);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          // ViewChild is set
          this.slides.isEnd().then(function (isEnd) {
            _this.isLastSlide = isEnd;
          }); // Subscribe to changes

          this.slides.ionSlideWillChange.subscribe(function (changes) {
            _this.slides.isEnd().then(function (isEnd) {
              _this.isLastSlide = isEnd;
            });
          });
        }
      }]);

      return GettingStartedPage;
    }();

    GettingStartedPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])], GettingStartedPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.last-slide-active'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], GettingStartedPage.prototype, "isLastSlide", void 0);
    GettingStartedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-getting-started',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./getting-started.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/getting-started.page.scss */
      "./src/app/getting-started/styles/getting-started.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/getting-started.shell.scss */
      "./src/app/getting-started/styles/getting-started.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/getting-started.responsive.scss */
      "./src/app/getting-started/styles/getting-started.responsive.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])], GettingStartedPage);
    /***/
  },

  /***/
  "./src/app/getting-started/styles/getting-started.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/getting-started/styles/getting-started.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGettingStartedStylesGettingStartedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-alt);\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-max-heading-height: 16%;\n  --page-max-call-to-actions-height: 10%;\n}\n\n:host {\n  background-color: var(--page-background);\n}\n\nion-header ion-toolbar {\n  --background: var(--page-background);\n}\n\nion-header ion-toolbar ion-button {\n  --color: var(--ion-color-lightest);\n}\n\nion-content {\n  --background: var(--page-background);\n}\n\n.getting-started-form {\n  height: 100%;\n}\n\n.getting-started-slides {\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-light);\n  height: 100%;\n}\n\n.getting-started-slides .slide-inner-row {\n  --ion-grid-column-padding: 0px;\n  height: 100%;\n  width: 100%;\n  padding: var(--page-margin);\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n  background-clip: padding-box;\n}\n\n.question-slide .slide-title {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) calc(var(--page-margin) * 2) 0px;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 30px;\n}\n\n.question-slide .slide-subtitle {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) var(--page-margin);\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 28px;\n}\n\n.browsing-categories-slide .slide-inner-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.browsing-categories-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.browsing-categories-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list {\n  margin: var(--page-margin) 0px 0px;\n  background: transparent;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option {\n  --padding-start: 0px;\n  --ion-item-background: var(--ion-color-lightest);\n  --ion-item-color: var(--ion-color-dark);\n  --inner-border-width: 0px;\n  --inner-padding-end: 0px;\n  text-align: center;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option:not(:last-child) {\n  margin-bottom: var(--page-margin);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option.item-radio-checked {\n  --ion-item-background: var(--ion-color-secondary);\n  --ion-item-color: var(--ion-color-lightest);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-label {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.interests-to-follow-slide .slide-inner-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-width: 0px;\n}\n\n.interests-to-follow-slide .heading-col {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  max-height: var(--page-max-heading-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.interests-to-follow-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.interests-to-follow-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col {\n  -webkit-transform: translateZ(0px);\n          transform: translateZ(0px);\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(odd) {\n  padding-right: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(even) {\n  padding-left: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .call-to-action-col {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  max-height: var(--page-max-call-to-actions-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.interests-to-follow-slide .call-to-action-col .signup-button {\n  margin: 0px;\n  -webkit-box-flex: 1;\n          flex: 1 0 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox .checkbox-title {\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  text-align: center;\n  word-break: break-word;\n  overflow: visible;\n  position: absolute;\n  width: 70%;\n  left: 15%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.interests-to-follow-slide .custom-checkbox ion-checkbox {\n  --border-radius: 0px;\n  --border-width: 10vw;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --background: transparent;\n  --background-checked: rgba(var(--ion-color-secondary-rgb), .4);\n  height: 100%;\n  width: 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox.checkbox-checked .checkbox-title {\n  display: none;\n}\n\n:host(.last-slide-active) ::ng-deep .getting-started-slides .swiper-pagination {\n  display: none;\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2dldHRpbmctc3RhcnRlZC9zdHlsZXMvZ2V0dGluZy1zdGFydGVkLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL3RoZW1lL21peGlucy9zY3JvbGxiYXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQ0FBQTtFQUNBLDRDQUFBO0VBRUEsb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBRUEsOEJBQUE7RUFDQSxzQ0FBQTtBQ0xGOztBRFNBO0VBRUUsd0NBQUE7QUNQRjs7QURXRTtFQUNFLG9DQUFBO0FDUko7O0FEV0k7RUFDRSxrQ0FBQTtBQ1ROOztBRGNBO0VBQ0Usb0NBQUE7QUNYRjs7QURjQTtFQUNFLFlBQUE7QUNYRjs7QURjQTtFQUNFLDJDQUFBO0VBQ0Esa0RBQUE7RUFFQSxZQUFBO0FDWkY7O0FEY0U7RUFDRSw4QkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFFQSxvRUFBQTtFQUNBLDRCQUFBO0FDZEo7O0FEbUJFO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFFQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNoQko7O0FEbUJFO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNqQko7O0FEc0JFO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ25CSjs7QURzQkU7RUFDRSxnQkFBQTtFRW5GRix3QkFBQTtFQUdBLDhCQUFBO0VBQ0EscUJBQUE7QUQ4REY7O0FDM0RFO0VBQ0UsYUFBQTtBRDZESjs7QURrQkk7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0FDaEJOOztBRGtCTTtFQUNFLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFFQSxrQkFBQTtBQ2pCUjs7QURtQlE7RUFDRSxpQ0FBQTtBQ2pCVjs7QURvQlE7RUFDRSxpREFBQTtFQUNBLDJDQUFBO0FDbEJWOztBRHFCUTtFQUNFLHdDQUFBO0FDbkJWOztBRHNCUTtFQUNFLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUN0QlY7O0FEOEJFO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUdBLGlCQUFBO0FDN0JKOztBRGdDRTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0FDOUJKOztBRGlDRTtFQUNFLGdCQUFBO0VFL0lGLHdCQUFBO0VBR0EsOEJBQUE7RUFDQSxxQkFBQTtBRCtHRjs7QUM1R0U7RUFDRSxhQUFBO0FEOEdKOztBRDZCSTtFQUNFLDhCQUFBO0VBRUEseUNBQUE7RUFDQSw0Q0FBQTtBQzVCTjs7QUQ4Qk07RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EseUNBQUE7RUFDQSw0Q0FBQTtBQzVCUjs7QUQ4QlE7RUFDRSwyQ0FBQTtBQzVCVjs7QUQrQlE7RUFDRSwwQ0FBQTtBQzdCVjs7QURtQ0U7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxrREFBQTtFQUNBLCtCQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFFQSx5Q0FBQTtBQ25DSjs7QURxQ0k7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7VUFBQSxjQUFBO0FDbkNOOztBRHdDSTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUN4Q047O0FEMkNJO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLDhEQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7QUMxQ047O0FEZ0RNO0VBQ0UsYUFBQTtBQzlDUjs7QURzREk7RUFDRSxhQUFBO0FDbkROOztBRDRERTtFQUNFLDRDQUFBO0VBQ0EsY0FBQTtFQUVBLCtGQUFBO0FDMURKOztBRDRESTtFQUNFLHlDQUFBO0VBQ0EsMENBQUE7QUMxRE4iLCJmaWxlIjoic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zL3Njcm9sbGJhcnNcIjtcblxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtYWx0KTtcblxuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2U6IDQwcHg7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiAxMHB4O1xuXG4gIC0tcGFnZS1tYXgtaGVhZGluZy1oZWlnaHQ6IDE2JTtcbiAgLS1wYWdlLW1heC1jYWxsLXRvLWFjdGlvbnMtaGVpZ2h0OiAxMCU7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAvLyBUbyBmaXggaGFsZiBwaXhlbCBsaW5lIGJldHdlZW4gaW9uLWhlYWRlciBhbmQgIGlvbi1jb250ZW50XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gICAgLy8gRm9yIHRoZSBza2lwIGJ1dHRvblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5nZXR0aW5nLXN0YXJ0ZWQtZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdldHRpbmctc3RhcnRlZC1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAvLyAuc3dpcGVyLXBhZ2luYXRpb24gc3BhY2VcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICB9XG59XG5cbi5xdWVzdGlvbi1zbGlkZSB7XG4gIC5zbGlkZS10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIDBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxuXG4gIC5zbGlkZS1zdWJ0aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIH1cbn1cblxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUge1xuICAuc2xpZGUtaW5uZXItcm93IHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAucXVlc3Rpb24tb3B0aW9ucy1jb2wge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgICBAaW5jbHVkZSBoaWRlLXNjcm9sbGJhcnMoKTtcblxuICAgIC5xdWVzdGlvbi1vcHRpb25zLWxpc3Qge1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAucXVlc3Rpb24tb3B0aW9uIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAgICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgLy8gVG8gaGlkZSB0aGUgLnJhZGlvLWljb25cbiAgICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgLy8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLnJhZGlvLWljb24gLnJhZGlvLWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG4gICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSB7XG4gIC5zbGlkZS1pbm5lci1yb3cge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC8vIEluIHRoZSBsYXN0IHNsaWRlIC5zd2lwZXItcGFnaW5hdGlvbiBpcyBoaWRkZW5cbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgfVxuXG4gIC5oZWFkaW5nLWNvbCB7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAgbWF4LWhlaWdodDogdmFyKC0tcGFnZS1tYXgtaGVhZGluZy1oZWlnaHQpO1xuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG5cbiAgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gICAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG5cbiAgICAub3B0aW9ucy1saXN0LXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG5cbiAgICAgIGlvbi1jb2wge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuXG4gICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAgbWF4LWhlaWdodDogdmFyKC0tcGFnZS1tYXgtY2FsbC10by1hY3Rpb25zLWhlaWdodCk7XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgLnNpZ251cC1idXR0b24ge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmbGV4OiAxIDAgMTAwJTtcbiAgICB9XG4gIH1cblxuICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGxlZnQ6IDE1JTtcbiAgICAgIC8vIHZlcnRpY2FsbHkgY2VudGVyZWRcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cblxuICAgIGlvbi1jaGVja2JveCB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxMHZ3O1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAuNCk7XG5cbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy8gTm90ZTogV2UgY2Fubm90ZSBjaGFuZ2UgdGhlIHN0eWxlcyBvZiB0aGUgLmNoZWNrYm94LWljb24gYmVjYXVzZSBpdCdzIGluc2lkZSB0aGUgc2hhZG93IGRvbS5cbiAgICAgIC8vIEFuIGFsdGVybmF0aXZlIHdvdWxkIGJlIHRvIHNldCAtLXdpZHRoIGFuZCAtLWhlaWdodCB0byAwcHggYW5kIGFkZCBhIGN1c3RvbSBvdmVybGF5IGFuZCBpY29uIGluIHRoZSA8Y3VzdG9tLWNoZWNrYm94PiBodG1sXG4gICAgfVxuXG4gICAgJi5jaGVja2JveC1jaGVja2VkIHtcbiAgICAgIC5jaGVja2JveC10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjpob3N0KC5sYXN0LXNsaWRlLWFjdGl2ZSkge1xuICA6Om5nLWRlZXAgLmdldHRpbmctc3RhcnRlZC1zbGlkZXMge1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vLyBJU1NVRTogLnN3aXBlci1wYWdnaW5hdGlvbiBnZXRzIHJlbmRlcmVkIGR5bmFtaWNhbGx5LiBUaGF0IHByZXZlbnRzIHN0eWxpbmcgdGhlIGVsZW1lbnRzIHdoZW4gdXNpbmcgdGhlIGRlZmF1bHQgQW5ndWxhciBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG4vLyAgICAgICAgKEFuZ3VsYXIgZG9lc24ndCBhZGQgYW4gJ19uZ2NvbnRlbnQnIGF0dHJpYnV0ZSB0byB0aGUgLnN3aXBlci1wYWdnaW5hdGlvbiBiZWNhdXNlIGl0J3MgZHluYW1pY2FsbHkgcmVuZGVyZWQpXG4vLyBGSVg6ICAgU2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzYyNjUwNzIvMTExNjk1OVxuOmhvc3QgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIHtcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICAvLyAuc3dpcGVyLXBhZ2luYXRpb24gaXMgMThweCBoZWlnaHQsIC5zbGlkZS1pbm5lci1yb3cgaGFzIDQwcHggb2YgcGFkZGluZy1ib3R0b20gPT4gYm90dG9tID0gKDQwcHggLSAxOHB4KS8yID0gMTFweFxuICAgIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xuXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICB3aWR0aDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1hbHQpO1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2U6IDQwcHg7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiAxMHB4O1xuICAtLXBhZ2UtbWF4LWhlYWRpbmctaGVpZ2h0OiAxNiU7XG4gIC0tcGFnZS1tYXgtY2FsbC10by1hY3Rpb25zLWhlaWdodDogMTAlO1xufVxuXG46aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmdldHRpbmctc3RhcnRlZC1mb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ2V0dGluZy1zdGFydGVkLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ2V0dGluZy1zdGFydGVkLXNsaWRlcyAuc2xpZGUtaW5uZXItcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xufVxuXG4ucXVlc3Rpb24tc2xpZGUgLnNsaWRlLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgMHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLnF1ZXN0aW9uLXNsaWRlIC5zbGlkZS1zdWJ0aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5zbGlkZS1pbm5lci1yb3cge1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3Qge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IC5xdWVzdGlvbi1vcHRpb24ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3QgLnF1ZXN0aW9uLW9wdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3QgLnF1ZXN0aW9uLW9wdGlvbi5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3QgLnF1ZXN0aW9uLW9wdGlvbiBpb24tbGFiZWwge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3QgLnF1ZXN0aW9uLW9wdGlvbiBpb24tcmFkaW8ge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5zbGlkZS1pbm5lci1yb3cge1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItd2lkdGg6IDBweDtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5oZWFkaW5nLWNvbCB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1wYWdlLW1heC1oZWFkaW5nLWhlaWdodCk7XG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5vcHRpb25zLWxpc3Qtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLm9wdGlvbnMtbGlzdC1yb3cgaW9uLWNvbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLm9wdGlvbnMtbGlzdC1yb3cgaW9uLWNvbDpudGgtY2hpbGQob2RkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLm9wdGlvbnMtbGlzdC1yb3cgaW9uLWNvbDpudGgtY2hpbGQoZXZlbikge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgZmxleDogMCAxIGF1dG87XG4gIG1heC1oZWlnaHQ6IHZhcigtLXBhZ2UtbWF4LWNhbGwtdG8tYWN0aW9ucy1oZWlnaHQpO1xuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5jYWxsLXRvLWFjdGlvbi1jb2wgLnNpZ251cC1idXR0b24ge1xuICBtYXJnaW46IDBweDtcbiAgZmxleDogMSAwIDEwMCU7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94IC5jaGVja2JveC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwJTtcbiAgbGVmdDogMTUlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmN1c3RvbS1jaGVja2JveCBpb24tY2hlY2tib3gge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDEwdnc7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjQpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmN1c3RvbS1jaGVja2JveC5jaGVja2JveC1jaGVja2VkIC5jaGVja2JveC10aXRsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0KC5sYXN0LXNsaWRlLWFjdGl2ZSkgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZ2V0dGluZy1zdGFydGVkLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbn0iLCIvLyBIaWRlIHNjcm9sbGJhcnM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODk5NDgzNy8xMTE2OTU5XG5AbWl4aW4gaGlkZS1zY3JvbGxiYXJzKCkge1xuICAvLyBJRSAxMCtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuXG4gIC8vIEZpcmVmb3hcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG5cbiAgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/getting-started/styles/getting-started.responsive.scss":
  /*!************************************************************************!*\
    !*** ./src/app/getting-started/styles/getting-started.responsive.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGettingStartedStylesGettingStartedResponsiveScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* ----------- iPhone X ----------- */\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5yZXNwb25zaXZlLnNjc3MiLCJzcmMvYXBwL2dldHRpbmctc3RhcnRlZC9zdHlsZXMvZ2V0dGluZy1zdGFydGVkLnJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSw0Q0FBQTtBQUNBO0VBWU07SUFDRSxlQUFBO0VDZk47QUFDRjtBRG9CQSxxREFBQTtBQUNBO0VBWU07SUFDRSxlQUFBO0VDN0JOO0FBQ0Y7QURrQ0Esa0RBQUE7QUFhQSxxQ0FBQTtBQWFBLGlEQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucmVzcG9uc2l2ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKE5vdGU6IERvbid0IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGRldmljZXMgYXMgaXQgbWF5IGJyZWFrIHRoZSBjb3JyZWN0IGNzcyBwcmVjZWRlbmNlKVxuXG4vLyAoc2VlOiBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9tZWRpYS1xdWVyaWVzLWZvci1zdGFuZGFyZC1kZXZpY2VzLyNpcGhvbmUtcXVlcmllcylcbi8vIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80Nzc1MDI2MS8xMTE2OTU5KVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNCBhbmQgNFMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSB7XG4gICAgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NjhweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAgLyA3MSlcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSB7XG4gICAgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA2NjdweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzM2cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cbiIsIi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMykge1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94IC5jaGVja2JveC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNSwgNVMsIDVDIGFuZCA1U0UgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU2OHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MC83MSkge1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94IC5jaGVja2JveC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNiwgNlMsIDcgYW5kIDggLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/getting-started/styles/getting-started.shell.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/getting-started/styles/getting-started.shell.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGettingStartedStylesGettingStartedShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.checkbox-cover {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), .4);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .4);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5zaGVsbC5zY3NzIiwic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0VBQUE7RUFDQSxxRUFBQTtFQUNBLHNEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLmNoZWNrYm94LWNvdmVyIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIC40KTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjQpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwuY2hlY2tib3gtY292ZXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgLjQpO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn0iXX0= */";
    /***/
  }
}]);
//# sourceMappingURL=getting-started-getting-started-module-es5.js.map