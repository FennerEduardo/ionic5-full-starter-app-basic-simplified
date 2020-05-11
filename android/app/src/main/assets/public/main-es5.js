function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", "stencil-ion-action-sheet-ios-entry-js"],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", "stencil-ion-action-sheet-md-entry-js"],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", "stencil-ion-alert-ios-entry-js"],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", "stencil-ion-alert-md-entry-js"],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", "stencil-ion-app_8-ios-entry-js"],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", "stencil-ion-app_8-md-entry-js"],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", "stencil-ion-avatar_3-ios-entry-js"],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", "stencil-ion-avatar_3-md-entry-js"],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", "stencil-ion-back-button-ios-entry-js"],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", "stencil-ion-back-button-md-entry-js"],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", "stencil-ion-backdrop-ios-entry-js"],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", "stencil-ion-backdrop-md-entry-js"],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", "stencil-ion-button_2-ios-entry-js"],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", "stencil-ion-button_2-md-entry-js"],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", "stencil-ion-card_5-ios-entry-js"],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", "stencil-ion-card_5-md-entry-js"],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", "stencil-ion-checkbox-ios-entry-js"],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", "stencil-ion-checkbox-md-entry-js"],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", "stencil-ion-chip-ios-entry-js"],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", "stencil-ion-chip-md-entry-js"],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", "stencil-ion-col_3-entry-js"],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", "stencil-ion-datetime_3-ios-entry-js"],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", "stencil-ion-datetime_3-md-entry-js"],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", "stencil-ion-fab_3-ios-entry-js"],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", "stencil-ion-fab_3-md-entry-js"],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", "stencil-ion-img-entry-js"],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", "stencil-ion-infinite-scroll_2-ios-entry-js"],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", "stencil-ion-infinite-scroll_2-md-entry-js"],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", "stencil-ion-input-ios-entry-js"],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", "stencil-ion-input-md-entry-js"],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", "stencil-ion-item-option_3-ios-entry-js"],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", "stencil-ion-item-option_3-md-entry-js"],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", "stencil-ion-item_8-ios-entry-js"],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", "stencil-ion-item_8-md-entry-js"],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", "stencil-ion-loading-ios-entry-js"],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", "stencil-ion-loading-md-entry-js"],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", "stencil-ion-menu_3-ios-entry-js"],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", "stencil-ion-menu_3-md-entry-js"],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", "stencil-ion-modal-ios-entry-js"],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", "stencil-ion-modal-md-entry-js"],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", "stencil-ion-nav_2-entry-js"],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", "stencil-ion-popover-ios-entry-js"],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", "stencil-ion-popover-md-entry-js"],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", "stencil-ion-progress-bar-ios-entry-js"],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", "stencil-ion-progress-bar-md-entry-js"],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", "stencil-ion-radio_2-ios-entry-js"],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", "stencil-ion-radio_2-md-entry-js"],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", "stencil-ion-range-ios-entry-js"],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", "stencil-ion-range-md-entry-js"],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", "stencil-ion-refresher_2-ios-entry-js"],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", "stencil-ion-refresher_2-md-entry-js"],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", "stencil-ion-reorder_2-ios-entry-js"],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", "stencil-ion-reorder_2-md-entry-js"],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", "stencil-ion-ripple-effect-entry-js"],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", "stencil-ion-route_4-entry-js"],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", "stencil-ion-searchbar-ios-entry-js"],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", "stencil-ion-searchbar-md-entry-js"],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", "stencil-ion-segment_2-ios-entry-js"],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", "stencil-ion-segment_2-md-entry-js"],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", "stencil-ion-select_3-ios-entry-js"],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", "stencil-ion-select_3-md-entry-js"],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "stencil-ion-slide_2-ios-entry-js"],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "stencil-ion-slide_2-md-entry-js"],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", "stencil-ion-spinner-entry-js"],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", "stencil-ion-split-pane-ios-entry-js"],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", "stencil-ion-split-pane-md-entry-js"],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", "stencil-ion-tab-bar_2-ios-entry-js"],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", "stencil-ion-tab-bar_2-md-entry-js"],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", "stencil-ion-tab_2-entry-js"],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", "stencil-ion-text-entry-js"],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", "stencil-ion-textarea-ios-entry-js"],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", "stencil-ion-textarea-md-entry-js"],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", "stencil-ion-toast-ios-entry-js"],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", "stencil-ion-toast-md-entry-js"],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", "stencil-ion-toggle-ios-entry-js"],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", "stencil-ion-toggle-md-entry-js"],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", "stencil-ion-virtual-scroll-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"menu-content\">\n    <!-- our side menu  -->\n    <ion-menu contentId=\"menu-content\" class=\"app-sidemenu\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-row class=\"user-details-wrapper\">\n            <ion-col size=\"4\">\n              <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n                <app-image-shell class=\"user-avatar\" animation=\"spinner\" [src]=\"'./assets/sample-images/ionicthemes_logo.jpg'\"></app-image-shell>\n              </app-aspect-ratio>\n            </ion-col>\n            <ion-col class=\"user-info-wrapper\" size=\"8\">\n              <h3 class=\"user-name\">Ionic Themes</h3>\n              <h5 class=\"user-handle\">@IonicThemes</h5>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"user-stats-wrapper user-details-wrapper\">\n            <ion-col>\n              <span class=\"user-stat-value\">1553</span>\n              <span class=\"user-stat-name\">Following</span>\n            </ion-col>\n            <ion-col>\n              <span class=\"user-stat-value\">537</span>\n              <span class=\"user-stat-name\">Followers</span>\n            </ion-col>\n          </ion-row>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n          <ion-list-header>\n            <ion-label>Layouts</ion-label>\n          </ion-list-header>\n          <ion-menu-toggle autoHide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item [routerLink]=\"p.url\">\n              <ion-icon slot=\"start\" [name]=\"p.ionicIcon? p.ionicIcon: ''\" [src]=\"p.customIcon? p.customIcon: ''\"></ion-icon>\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n        <ion-list>\n          <ion-list-header>\n            <ion-label>Forms</ion-label>\n          </ion-list-header>\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item [routerLink]=\"['/forms-and-validations']\">\n              <ion-icon slot=\"start\" src=\"./assets/custom-icons/side-menu/forms.svg\"></ion-icon>\n              <ion-label>\n                Forms & Validations\n              </ion-label>\n            </ion-item>\n            <ion-item [routerLink]=\"['/forms-filters']\">\n              <ion-icon slot=\"start\" name=\"options-outline\"></ion-icon>\n              <ion-label>\n                Filters\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n        <ion-list>\n          <ion-list-header>\n            <ion-label>Account</ion-label>\n          </ion-list-header>\n          <ion-menu-toggle autoHide=\"false\" *ngFor=\"let p of accountPages; let i = index\">\n            <ion-item [routerLink]=\"p.url\">\n              <ion-icon slot=\"start\" [name]=\"p.ionicIcon? p.ionicIcon: ''\" [src]=\"p.customIcon? p.customIcon: ''\"></ion-icon>\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n        <ion-list>\n          <ion-list-header>\n            <ion-label>Showcase</ion-label>\n          </ion-list-header>\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item [routerLink]=\"['/showcase/app-shell']\">\n              <ion-icon slot=\"start\" name=\"egg-outline\"></ion-icon>\n              <ion-label>\n                App Shell\n              </ion-label>\n            </ion-item>\n            <ion-item [routerLink]=\"['/showcase/route-resolvers-ux']\">\n              <ion-icon slot=\"start\" name=\"cog-outline\"></ion-icon>\n              <ion-label>\n                Route Resolvers UX\n              </ion-label>\n            </ion-item>\n            <ion-item [routerLink]=\"['/showcase/custom-components']\">\n              <ion-icon slot=\"start\" name=\"color-wand-outline\"></ion-icon>\n              <ion-label>\n                Custom Components\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <!-- Main app content get's rendered in this router-outlet -->\n    <ion-router-outlet id=\"menu-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-wrapper/checkbox-wrapper.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-wrapper/checkbox-wrapper.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCheckboxWrapperCheckboxWrapperComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-content></ng-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/countdown-timer/countdown-timer.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/countdown-timer/countdown-timer.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCountdownTimerCountdownTimerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-row class=\"countdown\">\n  <ion-col class=\"time\" *ngIf=\"_initialUnit === 'day'\">\n    <span class=\"time-unit\">D</span>\n    <div class=\"inner-time\">\n      <span class=\"time-value\">{{ _daysLeft }}</span>\n    </div>\n  </ion-col>\n  <ion-col class=\"time\" *ngIf=\"(_initialUnit === 'day' && _endingUnit !== 'day') || _initialUnit === 'hour' || _endingUnit === 'hour'\">\n    <span class=\"time-unit\">H</span>\n    <div class=\"inner-time\">\n      <span class=\"time-value\">{{ _hoursLeft }}</span>\n    </div>\n  </ion-col>\n  <ion-col class=\"time\" *ngIf=\"(_initialUnit === 'day' && (_endingUnit !== 'day' && _endingUnit !== 'hour')) || (_initialUnit === 'hour' && _endingUnit !== 'hour') || _initialUnit === 'minute'\">\n    <span class=\"time-unit\">M</span>\n    <div class=\"inner-time\">\n      <span class=\"time-value\">{{ _minutesLeft }}</span>\n    </div>\n  </ion-col>\n  <ion-col class=\"time\" *ngIf=\"_endingUnit === 'second'\">\n    <span class=\"time-unit\">S</span>\n    <div class=\"inner-time\">\n      <span class=\"time-value\">{{ _secondsLeft }}</span>\n    </div>\n  </ion-col>\n</ion-row>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter-input/counter-input.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter-input/counter-input.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCounterInputCounterInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"button-outer\">\n  <div class=\"button-wrapper\">\n    <ion-button class=\"counter-icon\" (click)=\"decrease()\">\n      <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\n    </ion-button>\n  </div>\n</div>\n<span class=\"counter-value\">{{ _counterValue }}</span>\n<div class=\"button-outer\">\n  <div class=\"button-wrapper\">\n    <ion-button class=\"counter-icon\" (click)=\"increase()\">\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n    </ion-button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rating-input/rating-input.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/rating-input/rating-input.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRatingInputRatingInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-button class=\"rating-icon\" fill=\"clear\" shape=\"round\" *ngFor=\"let r of range; let i = index\" (click)=\"rate(i + 1)\">\n\t<ion-icon slot=\"icon-only\" [name]=\"value === undefined ? (r === 1 ? 'star' : (r === 2 ? 'star-half' : 'star-outline')) : (value > i ? (value < i+1 ? 'star-half' : 'star') : 'star-outline')\"></ion-icon>\n</ion-button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-hide-password/show-hide-password.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-hide-password/show-hide-password.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShowHidePasswordShowHidePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-content></ng-content>\n<a class=\"type-toggle\" (click)=\"toggleShow()\">\n\t<ion-icon class=\"show-option\" [hidden]=\"show\" name=\"eye-off-outline\"></ion-icon>\n\t<ion-icon class=\"hide-option\" [hidden]=\"!show\" name=\"eye-outline\"></ion-icon>\n  <!-- In case you want to use text instead of icons -->\n\t<!--\n  <span class=\"show-option\" [hidden]=\"show\">show</span>\n\t<span class=\"hide-option\" [hidden]=\"!show\">hide</span>\n  -->\n</a>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/aspect-ratio/aspect-ratio.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell/aspect-ratio/aspect-ratio.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShellAspectRatioAspectRatioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\n  <ng-content></ng-content>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/image-shell/image-shell.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell/image-shell/image-shell.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShellImageShellImageShellComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-spinner class=\"spinner\"></ion-spinner>\n<img class=\"inner-img\" [src]=\"_src\" [alt]=\"_alt\" (load)=\"_imageLoaded()\"/>\n<ng-content *ngIf=\"_display === 'cover'\"></ng-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/text-shell/text-shell.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell/text-shell/text-shell.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShellTextShellTextShellComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container>{{ _data }}</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: '/walkthrough',
      pathMatch: 'full'
    }, {
      path: 'walkthrough',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | walkthrough-walkthrough-module */
        "walkthrough-walkthrough-module").then(__webpack_require__.bind(null,
        /*! ./walkthrough/walkthrough.module */
        "./src/app/walkthrough/walkthrough.module.ts")).then(function (m) {
          return m.WalkthroughPageModule;
        });
      }
    }, {
      path: 'getting-started',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | getting-started-getting-started-module */
        "getting-started-getting-started-module").then(__webpack_require__.bind(null,
        /*! ./getting-started/getting-started.module */
        "./src/app/getting-started/getting-started.module.ts")).then(function (m) {
          return m.GettingStartedPageModule;
        });
      }
    }, {
      path: 'auth/login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'auth/signup',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | signup-signup-module */
        [__webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null,
        /*! ./signup/signup.module */
        "./src/app/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, // tslint:disable-next-line:max-line-length
    {
      path: 'auth/forgot-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | forgot-password-forgot-password-module */
        "forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
        /*! ./forgot-password/forgot-password.module */
        "./src/app/forgot-password/forgot-password.module.ts")).then(function (m) {
          return m.ForgotPasswordPageModule;
        });
      }
    }, {
      path: 'app',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'contact-card',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contact-card-contact-card-module */
        "contact-card-contact-card-module").then(__webpack_require__.bind(null,
        /*! ./contact-card/contact-card.module */
        "./src/app/contact-card/contact-card.module.ts")).then(function (m) {
          return m.ContactCardPageModule;
        });
      }
    }, // tslint:disable-next-line:max-line-length
    {
      path: 'forms-and-validations',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | forms-validations-forms-validations-module */
        [__webpack_require__.e("common"), __webpack_require__.e("forms-validations-forms-validations-module")]).then(__webpack_require__.bind(null,
        /*! ./forms/validations/forms-validations.module */
        "./src/app/forms/validations/forms-validations.module.ts")).then(function (m) {
          return m.FormsValidationsPageModule;
        });
      }
    }, {
      path: 'forms-filters',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | forms-filters-forms-filters-module */
        "forms-filters-forms-filters-module").then(__webpack_require__.bind(null,
        /*! ./forms/filters/forms-filters.module */
        "./src/app/forms/filters/forms-filters.module.ts")).then(function (m) {
          return m.FormsFiltersPageModule;
        });
      }
    }, {
      path: 'page-not-found',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | page-not-found-page-not-found-module */
        "page-not-found-page-not-found-module").then(__webpack_require__.bind(null,
        /*! ./page-not-found/page-not-found.module */
        "./src/app/page-not-found/page-not-found.module.ts")).then(function (m) {
          return m.PageNotFoundModule;
        });
      }
    }, {
      path: 'showcase',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | showcase-showcase-module */
        "showcase-showcase-module").then(__webpack_require__.bind(null,
        /*! ./showcase/showcase.module */
        "./src/app/showcase/showcase.module.ts")).then(function (m) {
          return m.ShowcasePageModule;
        });
      }
    }, {
      path: '**',
      redirectTo: 'page-not-found'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var SplashScreen = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].SplashScreen;

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.appPages = [{
          title: 'Categories',
          url: '/app/categories',
          ionicIcon: 'list-outline'
        }, {
          title: 'Profile',
          url: '/app/user',
          ionicIcon: 'person-outline'
        }, {
          title: 'Contact Card',
          url: '/contact-card',
          customIcon: './assets/custom-icons/side-menu/contact-card.svg'
        }, {
          title: 'Notifications',
          url: '/app/notifications',
          ionicIcon: 'notifications-outline'
        }];
        this.accountPages = [{
          title: 'Log In',
          url: '/auth/login',
          ionicIcon: 'log-in-outline'
        }, {
          title: 'Sign Up',
          url: '/auth/signup',
          ionicIcon: 'person-add-outline'
        }, {
          title: 'Tutorial',
          url: '/walkthrough',
          ionicIcon: 'school-outline'
        }, {
          title: 'Getting Started',
          url: '/getting-started',
          ionicIcon: 'rocket-outline'
        }, {
          title: '404 page',
          url: '/page-not-found',
          ionicIcon: 'alert-circle-outline'
        }];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return SplashScreen.hide();

                  case 3:
                    _context.next = 8;
                    break;

                  case 5:
                    _context.prev = 5;
                    _context.t0 = _context["catch"](0);
                    console.log('This is normal in a browser', _context.t0);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 5]]);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-menu/styles/side-menu.scss */
      "./src/app/side-menu/styles/side-menu.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-menu/styles/side-menu.shell.scss */
      "./src/app/side-menu/styles/side-menu.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-menu/styles/side-menu.responsive.scss */
      "./src/app/side-menu/styles/side-menu.responsive.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('/ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production
      })],
      providers: [{
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCheckboxWrapperCheckboxWrapperComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9jb21wb25lbnRzL2NoZWNrYm94LXdyYXBwZXIvY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC13cmFwcGVyL2NoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoZWNrYm94LXdyYXBwZXIvY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CheckboxWrapperComponent */

  /***/
  function srcAppComponentsCheckboxWrapperCheckboxWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxWrapperComponent", function () {
      return CheckboxWrapperComponent;
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
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js"); // Reference to the @ionic/angular Components List:
    // https://github.com/ionic-team/ionic/blob/master/angular/src/directives/proxies.ts


    var CheckboxWrapperComponent =
    /*#__PURE__*/
    function () {
      function CheckboxWrapperComponent() {
        _classCallCheck(this, CheckboxWrapperComponent);
      }

      _createClass(CheckboxWrapperComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;

          // ContentChild is set
          this.isChecked = this.checkbox.checked; // Subscribe to changes

          this.checkbox.ionChange.subscribe(function (changes) {
            _this.isChecked = changes.detail.checked;
          });
        }
      }]);

      return CheckboxWrapperComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"])], CheckboxWrapperComponent.prototype, "checkbox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.checkbox-checked'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CheckboxWrapperComponent.prototype, "isChecked", void 0);
    CheckboxWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkbox-wrapper',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkbox-wrapper.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-wrapper/checkbox-wrapper.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkbox-wrapper.component.scss */
      "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CheckboxWrapperComponent);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shell_shell_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shell/shell.module */
    "./src/app/shell/shell.module.ts");
    /* harmony import */


    var _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./checkbox-wrapper/checkbox-wrapper.component */
    "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts");
    /* harmony import */


    var _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./show-hide-password/show-hide-password.component */
    "./src/app/components/show-hide-password/show-hide-password.component.ts");
    /* harmony import */


    var _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./countdown-timer/countdown-timer.component */
    "./src/app/components/countdown-timer/countdown-timer.component.ts");
    /* harmony import */


    var _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./counter-input/counter-input.component */
    "./src/app/components/counter-input/counter-input.component.ts");
    /* harmony import */


    var _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./rating-input/rating-input.component */
    "./src/app/components/rating-input/rating-input.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_5__["ShellModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      declarations: [_checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxWrapperComponent"], _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__["ShowHidePasswordComponent"], _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__["CountdownTimerComponent"], _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_9__["CounterInputComponent"], _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_10__["RatingInputComponent"]],
      exports: [_shell_shell_module__WEBPACK_IMPORTED_MODULE_5__["ShellModule"], _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxWrapperComponent"], _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__["ShowHidePasswordComponent"], _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__["CountdownTimerComponent"], _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_9__["CounterInputComponent"], _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_10__["RatingInputComponent"]],
      entryComponents: []
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/countdown-timer/countdown-timer.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/countdown-timer/countdown-timer.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCountdownTimerCountdownTimerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --countdown-margin: 0px;\n  --countdown-padding: 0px;\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: 2px;\n  --countdown-inner-time-padding: 0px;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: 0px;\n  --countdown-fill-background: transparent;\n  --countdown-fill-shadow: none;\n  --countdown-value-color: #CCC;\n  --countdown-unit-color: #CCC;\n  --countdown-time-flex-direction: row-reverse;\n  display: block;\n}\n:host .countdown {\n  margin: var(--countdown-margin);\n  padding: var(--countdown-padding);\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: nowrap;\n}\n:host .time {\n  padding: var(--countdown-time-padding);\n  margin: var(--countdown-time-margin);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: var(--countdown-time-flex-direction);\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .time .time-unit {\n  display: block;\n  color: var(--countdown-unit-color);\n  font-size: 0.7em;\n  text-align: center;\n  text-transform: uppercase;\n  width: 2ex;\n}\n:host .time .time-value {\n  display: block;\n  color: var(--countdown-value-color);\n  text-align: center;\n  font-size: 1em;\n  line-height: 1em;\n  min-height: 1em;\n  min-width: 2.2ex;\n  min-width: 2.1ch;\n}\n:host .inner-time {\n  margin: var(--countdown-inner-time-margin);\n  padding: var(--countdown-inner-time-padding);\n}\n:host([fill=countdown]) .countdown {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n:host([fill=time]) .time {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n:host([fill=inner-time]) .inner-time {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9jb21wb25lbnRzL2NvdW50ZG93bi10aW1lci9jb3VudGRvd24tdGltZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRkb3duLXRpbWVyL2NvdW50ZG93bi10aW1lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBRUEsNkJBQUE7RUFDQSw0QkFBQTtFQUVBLDRDQUFBO0VBRUEsY0FBQTtBQ1ZGO0FEWUU7RUFDRSwrQkFBQTtFQUNBLGlDQUFBO0VBRUEsd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlCQUFBO0FDWEo7QURjRTtFQUNFLHNDQUFBO0VBQ0Esb0NBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsb0RBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ2JKO0FEZUk7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDYk47QURnQkk7RUFDRSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFLQSxnQkFBQTtFQUNBLGdCQUFBO0FDbEJOO0FEc0JFO0VBQ0UsMENBQUE7RUFDQSw0Q0FBQTtBQ3BCSjtBRHlCRTtFQTNFQSxvQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0RBQUE7RUFDQSx3Q0FBQTtBQ3NERjtBRHdCRTtFQWpGQSxvQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0RBQUE7RUFDQSx3Q0FBQTtBQzZERjtBRHVCRTtFQXZGQSxvQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0RBQUE7RUFDQSx3Q0FBQTtBQ29FRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRkb3duLXRpbWVyL2NvdW50ZG93bi10aW1lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBmaWxsLWNvbnRhaW5lcigpe1xuICBib3JkZXI6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY291bnRkb3duLWZpbGwtc2hhZG93KTtcbn1cblxuOmhvc3Qge1xuICAtLWNvdW50ZG93bi1tYXJnaW46IDBweDtcbiAgLS1jb3VudGRvd24tcGFkZGluZzogMHB4O1xuICAtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4O1xuICAtLWNvdW50ZG93bi10aW1lLXBhZGRpbmc6IDBweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW46IDJweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1wYWRkaW5nOiAwcHg7XG5cbiAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXI6IG5vbmU7XG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvdW50ZG93bi1maWxsLXNoYWRvdzogbm9uZTtcblxuICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogI0NDQztcbiAgLS1jb3VudGRvd24tdW5pdC1jb2xvcjogI0NDQztcblxuICAtLWNvdW50ZG93bi10aW1lLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblxuICBkaXNwbGF5OiBibG9jaztcblxuICAuY291bnRkb3duIHtcbiAgICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi1tYXJnaW4pO1xuICAgIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi1wYWRkaW5nKTtcblxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG5cbiAgLnRpbWUge1xuICAgIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi10aW1lLXBhZGRpbmcpO1xuICAgIG1hcmdpbjogdmFyKC0tY291bnRkb3duLXRpbWUtbWFyZ2luKTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHZhcigtLWNvdW50ZG93bi10aW1lLWZsZXgtZGlyZWN0aW9uKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLnRpbWUtdW5pdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbG9yOiB2YXIoLS1jb3VudGRvd24tdW5pdC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIHdpZHRoOiAyZXg7XG4gICAgfVxuXG4gICAgLnRpbWUtdmFsdWUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogdmFyKC0tY291bnRkb3duLXZhbHVlLWNvbG9yKTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgIG1pbi1oZWlnaHQ6IDFlbTtcblxuICAgICAgLy8gTWFrZSBzdXJlIHdlIGFsd2F5cyBoYXZlIHNwYWNlIGZvciB0d28gY2hhcmFjdGVyc1xuICAgICAgLy8gQXMgY2ggKHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgJzAnKSB1bml0IGlzIG5vdCAxMDAlIHN1cHBvcnRlZCwgd2Ugd2lsbCB1c2UgZXggKGhlaWdodCBvZiB0aGUgJ3gnIGNoYXJhY3RlcikgYXMgYSBmYWxsYmFja1xuICAgICAgLy8gU2VlOiBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9jc3MvdW5pdHMtdmFsdWVzL1xuICAgICAgbWluLXdpZHRoOiAyLjJleDsgLy8gVGhlICd4JyBjaGFyYWN0ZXIgaXMgc2VtaS1zcXVhcmUgY2hhciwgdGhhdCdzIHdoeSB3ZSBzZXQgMi4yZXhcbiAgICAgIG1pbi13aWR0aDogMi4xY2g7IC8vIGNoIGlzIHRoZSBvbmx5IGZvbnQgdW5pdCBiYXNlZCBvbiB0aGUgd2lkdGggb2YgY2hhcmFjdGVyc1xuICAgIH1cbiAgfVxuXG4gIC5pbm5lci10aW1lIHtcbiAgICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbik7XG4gICAgcGFkZGluZzogdmFyKC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZyk7XG4gIH1cbn1cblxuOmhvc3QoW2ZpbGw9XCJjb3VudGRvd25cIl0pIHtcbiAgLmNvdW50ZG93biB7XG4gICAgQGluY2x1ZGUgZmlsbC1jb250YWluZXIoKTtcbiAgfVxufVxuXG46aG9zdChbZmlsbD1cInRpbWVcIl0pIHtcbiAgLnRpbWUge1xuICAgIEBpbmNsdWRlIGZpbGwtY29udGFpbmVyKCk7XG4gIH1cbn1cblxuOmhvc3QoW2ZpbGw9XCJpbm5lci10aW1lXCJdKSB7XG4gIC5pbm5lci10aW1lIHtcbiAgICBAaW5jbHVkZSBmaWxsLWNvbnRhaW5lcigpO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tY291bnRkb3duLW1hcmdpbjogMHB4O1xuICAtLWNvdW50ZG93bi1wYWRkaW5nOiAwcHg7XG4gIC0tY291bnRkb3duLXRpbWUtbWFyZ2luOiAwcHg7XG4gIC0tY291bnRkb3duLXRpbWUtcGFkZGluZzogMHB4O1xuICAtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbjogMnB4O1xuICAtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmc6IDBweDtcbiAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXI6IG5vbmU7XG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvdW50ZG93bi1maWxsLXNoYWRvdzogbm9uZTtcbiAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6ICNDQ0M7XG4gIC0tY291bnRkb3duLXVuaXQtY29sb3I6ICNDQ0M7XG4gIC0tY291bnRkb3duLXRpbWUtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC5jb3VudGRvd24ge1xuICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi1tYXJnaW4pO1xuICBwYWRkaW5nOiB2YXIoLS1jb3VudGRvd24tcGFkZGluZyk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbjpob3N0IC50aW1lIHtcbiAgcGFkZGluZzogdmFyKC0tY291bnRkb3duLXRpbWUtcGFkZGluZyk7XG4gIG1hcmdpbjogdmFyKC0tY291bnRkb3duLXRpbWUtbWFyZ2luKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHZhcigtLWNvdW50ZG93bi10aW1lLWZsZXgtZGlyZWN0aW9uKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAudGltZSAudGltZS11bml0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1jb3VudGRvd24tdW5pdC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IDJleDtcbn1cbjpob3N0IC50aW1lIC50aW1lLXZhbHVlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1jb3VudGRvd24tdmFsdWUtY29sb3IpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBtaW4taGVpZ2h0OiAxZW07XG4gIG1pbi13aWR0aDogMi4yZXg7XG4gIG1pbi13aWR0aDogMi4xY2g7XG59XG46aG9zdCAuaW5uZXItdGltZSB7XG4gIG1hcmdpbjogdmFyKC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luKTtcbiAgcGFkZGluZzogdmFyKC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZyk7XG59XG5cbjpob3N0KFtmaWxsPWNvdW50ZG93bl0pIC5jb3VudGRvd24ge1xuICBib3JkZXI6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY291bnRkb3duLWZpbGwtc2hhZG93KTtcbn1cblxuOmhvc3QoW2ZpbGw9dGltZV0pIC50aW1lIHtcbiAgYm9yZGVyOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNvdW50ZG93bi1maWxsLXNoYWRvdyk7XG59XG5cbjpob3N0KFtmaWxsPWlubmVyLXRpbWVdKSAuaW5uZXItdGltZSB7XG4gIGJvcmRlcjogdmFyKC0tY291bnRkb3duLWZpbGwtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1jb3VudGRvd24tZmlsbC1zaGFkb3cpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/countdown-timer/countdown-timer.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/countdown-timer/countdown-timer.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CountdownTimerComponent */

  /***/
  function srcAppComponentsCountdownTimerCountdownTimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownTimerComponent", function () {
      return CountdownTimerComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__); // TODO:  dayjs is throwing this ERROR:
    //        error TS2339: Property 'to' does not exist on type 'Dayjs'.
    // Luckily there's a PR that apparently fixes this (https://github.com/iamkun/dayjs/issues/297#issuecomment-442748858)
    // When fixed, uncomment this
    // import * as dayjs from 'dayjs';
    // When fixed, remove this


    var dayjs = dayjs__WEBPACK_IMPORTED_MODULE_4__;

    var CountdownTimerComponent =
    /*#__PURE__*/
    function () {
      function CountdownTimerComponent() {
        var _this2 = this;

        _classCallCheck(this, CountdownTimerComponent);

        this._initialUnit = 'hour';
        this._endingUnit = 'second';
        this._updateInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this._unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // DIVISORS
        // 60 seconds * 60 (minutes) * 24 (hours) = 86400 seconds = 1 day

        this._dayDivisor = 60 * 60 * 24; // 60 seconds * 60 (minutes) = 3600 seconds = 1 hour

        this._hourDivisor = 60 * 60; // 60 seconds = 1 minute

        this._minuteDivisor = 60;
        this._secondDivisor = 1; // MODULUS
        // Neutral modulus

        this._dayModulus = function (secondsLeft) {
          return secondsLeft;
        }; // The modulus operator (%) returns the division remainder.
        // To figure out how many hours are left after taking in consideration the days, we should do:
        //    (secondsLeft % hourModulus) / hourDivisor
        // In 1 day there are 86400 seconds, and in 1 hour 3600 seconds. 1 day + 1 hour = 90000 seconds
        //    (90000s % 86400s) / 3600s = 1h


        this._hourModulus = function (secondsLeft) {
          return secondsLeft % _this2._dayDivisor;
        };

        this._minuteModulus = function (secondsLeft) {
          return secondsLeft % _this2._hourDivisor;
        };

        this._secondModulus = function (secondsLeft) {
          return secondsLeft % _this2._minuteDivisor;
        };
      }

      _createClass(CountdownTimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._updateInterval.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeSubject)).subscribe(function (val) {
            var secondsLeft = _this3._endingTime.diff(dayjs(), 'second');

            _this3._daysLeft = Math.floor(_this3._dayModulus(secondsLeft) / _this3._dayDivisor);
            _this3._hoursLeft = Math.floor(_this3._hourModulus(secondsLeft) / _this3._hourDivisor);
            _this3._minutesLeft = Math.floor(_this3._minuteModulus(secondsLeft) / _this3._minuteDivisor);
            _this3._secondsLeft = Math.floor(_this3._secondModulus(secondsLeft) / _this3._secondDivisor);
          }, function (error) {
            return console.error(error);
          } // () => console.log('[takeUntil] complete')
          );
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._unsubscribeSubject.next();

          this._unsubscribeSubject.complete();
        }
      }, {
        key: "end",
        set: function set(endingTime) {
          this._endingTime = endingTime !== undefined && endingTime !== null ? dayjs(endingTime) : dayjs();
        }
      }, {
        key: "units",
        set: function set(units) {
          // 'day', 'hour, 'minute', 'second'
          this._initialUnit = units !== undefined && units.from !== undefined && units.from !== null ? units.from : 'hour';
          this._endingUnit = units !== undefined && units.to !== undefined && units.to !== null ? units.to : 'second'; // For 'day' unit, use the default modulus
          // Adjust modulus depending on the unit

          if (this._initialUnit === 'hour') {
            // Cancelation modulus
            this._dayModulus = function (secondsLeft) {
              return 1;
            }; // Neutral modulus


            this._hourModulus = function (secondsLeft) {
              return secondsLeft;
            };
          }

          if (this._initialUnit === 'minute') {
            // Cancelation modulus
            this._dayModulus = function (secondsLeft) {
              return 1;
            };

            this._hourModulus = function (secondsLeft) {
              return 1;
            }; // Neutral modulus


            this._minuteModulus = function (secondsLeft) {
              return secondsLeft;
            };
          }

          if (this._initialUnit === 'second') {
            // Cancelation modulus
            this._dayModulus = function (secondsLeft) {
              return 1;
            };

            this._hourModulus = function (secondsLeft) {
              return 1;
            };

            this._minuteModulus = function (secondsLeft) {
              return 1;
            }; // Neutral modulus


            this._secondModulus = function (secondsLeft) {
              return secondsLeft;
            };
          }
        }
      }]);

      return CountdownTimerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], CountdownTimerComponent.prototype, "end", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])], CountdownTimerComponent.prototype, "units", null);
    CountdownTimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-countdown-timer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./countdown-timer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/countdown-timer/countdown-timer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./countdown-timer.component.scss */
      "./src/app/components/countdown-timer/countdown-timer.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CountdownTimerComponent);
    /***/
  },

  /***/
  "./src/app/components/counter-input/counter-input.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/counter-input/counter-input.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCounterInputCounterInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-counter-input {\n  --counter-background: #000;\n  --counter-color: #FFF;\n  --counter-color-activated: #FFF;\n  --counter-border-color: #000;\n  --counter-border-radius-outer: 50%;\n  --counter-border-radius-inner: 50%;\n  --counter-size: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\napp-counter-input ion-button.counter-icon {\n  --background: var(--counter-background);\n  --background-activated: var(--counter-color);\n  --color: var(--counter-color);\n  --color-activated: var(--counter-color-activated);\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--counter-border-color);\n  --box-shadow: none;\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n  --padding-bottom: 3px;\n  --padding-end: 3px;\n  --padding-start: 3px;\n  --padding-top: 3px;\n  margin: 0px;\n}\napp-counter-input .counter-value {\n  color: var(--counter-color);\n  margin: 0px 10px;\n}\napp-counter-input:not([basic]) .button-outer {\n  width: var(--counter-size);\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  padding-bottom: 100%;\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper .counter-icon {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: auto;\n  width: 100%;\n}\napp-counter-input[basic] {\n  --counter-border-radius-outer: 12px;\n  --counter-border-radius-inner: 0px;\n}\napp-counter-input[basic] .counter-value {\n  display: none;\n}\napp-counter-input[basic] .button-outer:first-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n}\napp-counter-input[basic] .button-outer:last-child {\n  margin-left: -1px;\n}\napp-counter-input[basic] .button-outer:last-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-inner) var(--counter-border-radius-outer) var(--counter-border-radius-outer) var(--counter-border-radius-inner);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9jb21wb25lbnRzL2NvdW50ZXItaW5wdXQvY291bnRlci1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3VudGVyLWlucHV0L2NvdW50ZXItaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDQUY7QURFRTtFQUNFLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0SkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtBQ0RKO0FESUU7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0FDRko7QURPSTtFQUNFLDBCQUFBO0FDTE47QURPTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDTFI7QURPUTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTFY7QURXRTtFQUNFLG1DQUFBO0VBQ0Esa0NBQUE7QUNUSjtBRFdJO0VBQ0UsYUFBQTtBQ1ROO0FEY1E7RUFDRSw0SkFBQTtBQ1pWO0FEZ0JNO0VBRUUsaUJBQUE7QUNmUjtBRGlCUTtFQUNFLDRKQUFBO0FDZlYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdW50ZXItaW5wdXQvY291bnRlci1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1jb3VudGVyLWlucHV0IHtcbiAgLS1jb3VudGVyLWJhY2tncm91bmQ6ICMwMDA7XG4gIC0tY291bnRlci1jb2xvcjogI0ZGRjtcbiAgLS1jb3VudGVyLWNvbG9yLWFjdGl2YXRlZDogI0ZGRjtcbiAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogIzAwMDtcbiAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXI6IDUwJTtcbiAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXI6IDUwJTtcbiAgLS1jb3VudGVyLXNpemU6IDMwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb3VudGVyLWJhY2tncm91bmQpO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWNvdW50ZXItY29sb3IpO1xuICAgIC0tY29sb3I6IHZhcigtLWNvdW50ZXItY29sb3IpO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1jb3VudGVyLWNvbG9yLWFjdGl2YXRlZCk7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWNvdW50ZXItYm9yZGVyLWNvbG9yKTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAtLXBhZGRpbmctZW5kOiAzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogM3B4O1xuXG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cblxuICAuY291bnRlci12YWx1ZSB7XG4gICAgY29sb3I6IHZhcigtLWNvdW50ZXItY29sb3IpO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gIH1cblxuICAmOm5vdChbYmFzaWNdKSB7XG4gICAgLy8gRm9yY2UgZWFjaCBjb3VudGVyIGJ1dHRvbiB0byBoYXZlIGEgMToxIGFzcGVjdCByYXRpb1xuICAgIC5idXR0b24tb3V0ZXIge1xuICAgICAgd2lkdGg6IHZhcigtLWNvdW50ZXItc2l6ZSk7XG5cbiAgICAgIC5idXR0b24td3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcblxuICAgICAgICAuY291bnRlci1pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJltiYXNpY10ge1xuICAgIC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyOiAxMnB4O1xuICAgIC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyOiAwcHg7XG5cbiAgICAuY291bnRlci12YWx1ZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5idXR0b24tb3V0ZXIge1xuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGlvbi1idXR0b24uY291bnRlci1pY29uIHtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgLy8gVG8gYXZvaWQgZG91YmxlIGJvcmRlclxuICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcblxuICAgICAgICBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJhcHAtY291bnRlci1pbnB1dCB7XG4gIC0tY291bnRlci1iYWNrZ3JvdW5kOiAjMDAwO1xuICAtLWNvdW50ZXItY29sb3I6ICNGRkY7XG4gIC0tY291bnRlci1jb2xvci1hY3RpdmF0ZWQ6ICNGRkY7XG4gIC0tY291bnRlci1ib3JkZXItY29sb3I6ICMwMDA7XG4gIC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyOiA1MCU7XG4gIC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyOiA1MCU7XG4gIC0tY291bnRlci1zaXplOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuYXBwLWNvdW50ZXItaW5wdXQgaW9uLWJ1dHRvbi5jb3VudGVyLWljb24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvdW50ZXItYmFja2dyb3VuZCk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWNvdW50ZXItY29sb3IpO1xuICAtLWNvbG9yOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWNvdW50ZXItY29sb3ItYWN0aXZhdGVkKTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0tY291bnRlci1ib3JkZXItY29sb3IpO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctZW5kOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogM3B4O1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuYXBwLWNvdW50ZXItaW5wdXQgLmNvdW50ZXItdmFsdWUge1xuICBjb2xvcjogdmFyKC0tY291bnRlci1jb2xvcik7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG59XG5hcHAtY291bnRlci1pbnB1dDpub3QoW2Jhc2ljXSkgLmJ1dHRvbi1vdXRlciB7XG4gIHdpZHRoOiB2YXIoLS1jb3VudGVyLXNpemUpO1xufVxuYXBwLWNvdW50ZXItaW5wdXQ6bm90KFtiYXNpY10pIC5idXR0b24tb3V0ZXIgLmJ1dHRvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xufVxuYXBwLWNvdW50ZXItaW5wdXQ6bm90KFtiYXNpY10pIC5idXR0b24tb3V0ZXIgLmJ1dHRvbi13cmFwcGVyIC5jb3VudGVyLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuYXBwLWNvdW50ZXItaW5wdXRbYmFzaWNdIHtcbiAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXI6IDEycHg7XG4gIC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyOiAwcHg7XG59XG5hcHAtY291bnRlci1pbnB1dFtiYXNpY10gLmNvdW50ZXItdmFsdWUge1xuICBkaXNwbGF5OiBub25lO1xufVxuYXBwLWNvdW50ZXItaW5wdXRbYmFzaWNdIC5idXR0b24tb3V0ZXI6Zmlyc3QtY2hpbGQgaW9uLWJ1dHRvbi5jb3VudGVyLWljb24ge1xuICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcik7XG59XG5hcHAtY291bnRlci1pbnB1dFtiYXNpY10gLmJ1dHRvbi1vdXRlcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG5hcHAtY291bnRlci1pbnB1dFtiYXNpY10gLmJ1dHRvbi1vdXRlcjpsYXN0LWNoaWxkIGlvbi1idXR0b24uY291bnRlci1pY29uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/counter-input/counter-input.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/counter-input/counter-input.component.ts ***!
    \*********************************************************************/

  /*! exports provided: counterRangeValidator, CounterInputComponent */

  /***/
  function srcAppComponentsCounterInputCounterInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "counterRangeValidator", function () {
      return counterRangeValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterInputComponent", function () {
      return CounterInputComponent;
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

    var CounterInputComponent_1;

    function counterRangeValidator(minValue, maxValue) {
      return function (c) {
        var err = {
          rangeError: {
            given: c.value,
            min: minValue || 0,
            max: maxValue || 10
          }
        };
        return c.value > +maxValue || c.value < +minValue ? err : null;
      };
    }

    var CounterInputComponent = CounterInputComponent_1 =
    /*#__PURE__*/
    function () {
      function CounterInputComponent() {
        _classCallCheck(this, CounterInputComponent);

        // tslint:disable-next-line:no-input-rename
        this._counterValue = 0;

        this.propagateChange = function () {}; // Noop function


        this.validateFn = function () {}; // Noop function

      }

      _createClass(CounterInputComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(inputs) {
          if (inputs.counterRangeMax || inputs.counterRangeMin) {
            this.validateFn = counterRangeValidator(this.counterRangeMin, this.counterRangeMax);
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (value) {
            this.counterValue = value;
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.propagateChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched() {}
      }, {
        key: "increase",
        value: function increase() {
          this.counterValue++;
        }
      }, {
        key: "decrease",
        value: function decrease() {
          this.counterValue--;
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validateFn(c);
        }
      }, {
        key: "counterValue",
        get: function get() {
          return this._counterValue;
        },
        set: function set(val) {
          this._counterValue = val;
          this.propagateChange(val);
        }
      }]);

      return CounterInputComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('counterValue'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CounterInputComponent.prototype, "_counterValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('max'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CounterInputComponent.prototype, "counterRangeMax", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('min'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CounterInputComponent.prototype, "counterRangeMin", void 0);
    CounterInputComponent = CounterInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-counter-input',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./counter-input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter-input/counter-input.component.html")).default,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return CounterInputComponent_1;
        }),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return CounterInputComponent_1;
        }),
        multi: true
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./counter-input.component.scss */
      "./src/app/components/counter-input/counter-input.component.scss")).default]
    })], CounterInputComponent);
    /***/
  },

  /***/
  "./src/app/components/rating-input/rating-input.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/rating-input/rating-input.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRatingInputRatingInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-rating-input {\n  --rating-background: transparent;\n  --rating-color: #000;\n  --rating-size: 32px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\napp-rating-input ion-button.rating-icon {\n  --background: var(--rating-background);\n  --color: var(--rating-color);\n  --color-activated: var(--rating-color);\n  --box-shadow: none;\n  --padding-bottom: 0px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 0px;\n  margin: 0px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: var(--rating-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9jb21wb25lbnRzL3JhdGluZy1pbnB1dC9yYXRpbmctaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nLWlucHV0L3JhdGluZy1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDQUY7QURFQztFQUNHLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0YsbUJBQUE7VUFBQSxPQUFBO0VBQ0MseUJBQUE7QUNESCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nLWlucHV0L3JhdGluZy1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1yYXRpbmctaW5wdXQge1xuICAtLXJhdGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1yYXRpbmctY29sb3I6ICMwMDA7XG4gIC0tcmF0aW5nLXNpemU6IDMycHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuXHRpb24tYnV0dG9uLnJhdGluZy1pY29uIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXJhdGluZy1iYWNrZ3JvdW5kKTtcbiAgICAtLWNvbG9yOiB2YXIoLS1yYXRpbmctY29sb3IpO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1yYXRpbmctY29sb3IpO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcblxuICAgIG1hcmdpbjogMHB4O1xuXHRcdGZsZXg6IDE7XG5cdCAgd2lkdGg6IHZhcigtLXJhdGluZy1zaXplKTtcblx0fVxufVxuIiwiYXBwLXJhdGluZy1pbnB1dCB7XG4gIC0tcmF0aW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXJhdGluZy1jb2xvcjogIzAwMDtcbiAgLS1yYXRpbmctc2l6ZTogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbmFwcC1yYXRpbmctaW5wdXQgaW9uLWJ1dHRvbi5yYXRpbmctaWNvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcmF0aW5nLWJhY2tncm91bmQpO1xuICAtLWNvbG9yOiB2YXIoLS1yYXRpbmctY29sb3IpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0tcmF0aW5nLWNvbG9yKTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiB2YXIoLS1yYXRpbmctc2l6ZSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/rating-input/rating-input.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/rating-input/rating-input.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RatingInputComponent */

  /***/
  function srcAppComponentsRatingInputRatingInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingInputComponent", function () {
      return RatingInputComponent;
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

    var RatingInputComponent_1;

    var RatingInputComponent = RatingInputComponent_1 =
    /*#__PURE__*/
    function () {
      function RatingInputComponent() {
        _classCallCheck(this, RatingInputComponent);

        this.max = 5;
        this.readOnly = false;

        this.propagateChange = function () {}; // Noop function

      }

      _createClass(RatingInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var states = [];

          for (var i = 0; i < this.max; i++) {
            if (this.innerValue > i && this.innerValue < i + 1) {
              states[i] = 2;
            } else if (this.innerValue > i) {
              states[i] = 1;
            } else {
              states[i] = 0;
            }
          }

          this.range = states;
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (value !== this.innerValue) {
            this.innerValue = value;
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.propagateChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched() {}
      }, {
        key: "rate",
        value: function rate(amount) {
          if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
            this.value = amount;
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this.innerValue;
        },
        set: function set(val) {
          if (val !== this.innerValue) {
            this.innerValue = val;
            this.propagateChange(val);
          }
        }
      }]);

      return RatingInputComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RatingInputComponent.prototype, "max", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RatingInputComponent.prototype, "readOnly", void 0);
    RatingInputComponent = RatingInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rating-input',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rating-input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rating-input/rating-input.component.html")).default,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return RatingInputComponent_1;
        }),
        multi: true
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rating-input.component.scss */
      "./src/app/components/rating-input/rating-input.component.scss")).default]
    })], RatingInputComponent);
    /***/
  },

  /***/
  "./src/app/components/show-hide-password/show-hide-password.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/show-hide-password/show-hide-password.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShowHidePasswordShowHidePasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .type-toggle {\n  -webkit-padding-start: 0.5rem;\n          padding-inline-start: 0.5rem;\n}\n:host .type-toggle .show-option,\n:host .type-toggle .hide-option {\n  font-size: 1.2rem;\n  display: block;\n}\n:host .type-toggle .show-option:not(ion-icon),\n:host .type-toggle .hide-option:not(ion-icon) {\n  text-transform: uppercase;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9jb21wb25lbnRzL3Nob3ctaGlkZS1wYXNzd29yZC9zaG93LWhpZGUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hvdy1oaWRlLXBhc3N3b3JkL3Nob3ctaGlkZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLDZCQUFBO1VBQUEsNEJBQUE7QUNDSjtBRENJOztFQUVFLGlCQUFBO0VBQ0EsY0FBQTtBQ0NOO0FERU07O0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3ctaGlkZS1wYXNzd29yZC9zaG93LWhpZGUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC50eXBlLXRvZ2dsZSB7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAuNXJlbTtcblxuICAgIC5zaG93LW9wdGlvbixcbiAgICAuaGlkZS1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgLy8gSW4gY2FzZSB5b3Ugd2FudCB0byB1c2UgdGV4dCBpbnN0ZWFkIG9mIGljb25zXG4gICAgICAmOm5vdChpb24taWNvbikge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLnR5cGUtdG9nZ2xlIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAuNXJlbTtcbn1cbjpob3N0IC50eXBlLXRvZ2dsZSAuc2hvdy1vcHRpb24sXG46aG9zdCAudHlwZS10b2dnbGUgLmhpZGUtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgLnR5cGUtdG9nZ2xlIC5zaG93LW9wdGlvbjpub3QoaW9uLWljb24pLFxuOmhvc3QgLnR5cGUtdG9nZ2xlIC5oaWRlLW9wdGlvbjpub3QoaW9uLWljb24pIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxcmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/show-hide-password/show-hide-password.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/show-hide-password/show-hide-password.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ShowHidePasswordComponent */

  /***/
  function srcAppComponentsShowHidePasswordShowHidePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowHidePasswordComponent", function () {
      return ShowHidePasswordComponent;
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

    var ShowHidePasswordComponent =
    /*#__PURE__*/
    function () {
      function ShowHidePasswordComponent() {
        _classCallCheck(this, ShowHidePasswordComponent);

        this.show = false;
      }

      _createClass(ShowHidePasswordComponent, [{
        key: "toggleShow",
        value: function toggleShow() {
          this.show = !this.show;

          if (this.show) {
            this.input.type = 'text';
          } else {
            this.input.type = 'password';
          }
        }
      }]);

      return ShowHidePasswordComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"])], ShowHidePasswordComponent.prototype, "input", void 0);
    ShowHidePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-show-hide-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./show-hide-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-hide-password/show-hide-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./show-hide-password.component.scss */
      "./src/app/components/show-hide-password/show-hide-password.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ShowHidePasswordComponent);
    /***/
  },

  /***/
  "./src/app/shell/aspect-ratio/aspect-ratio.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShellAspectRatioAspectRatioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n:host .content-wrapper {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaGVsbC9hc3BlY3QtcmF0aW8vYXNwZWN0LXJhdGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9hc3BlY3QtcmF0aW8vYXNwZWN0LXJhdGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvYXNwZWN0LXJhdGlvL2FzcGVjdC1yYXRpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shell/aspect-ratio/aspect-ratio.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.ts ***!
    \**************************************************************/

  /*! exports provided: AspectRatioComponent */

  /***/
  function srcAppShellAspectRatioAspectRatioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AspectRatioComponent", function () {
      return AspectRatioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AspectRatioComponent =
    /*#__PURE__*/
    function () {
      function AspectRatioComponent() {
        _classCallCheck(this, AspectRatioComponent);

        this.ratioPadding = '0px';
      }

      _createClass(AspectRatioComponent, [{
        key: "ratio",
        set: function set(ratio) {
          ratio = ratio !== undefined && ratio !== null ? ratio : {
            w: 1,
            h: 1
          };
          var heightRatio = ratio.h / ratio.w * 100 + '%'; // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)

          this.ratioPadding = '0px 0px ' + heightRatio + ' 0px';
        }
      }]);

      return AspectRatioComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.padding'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AspectRatioComponent.prototype, "ratioPadding", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])], AspectRatioComponent.prototype, "ratio", null);
    AspectRatioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aspect-ratio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./aspect-ratio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/aspect-ratio/aspect-ratio.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./aspect-ratio.component.scss */
      "./src/app/shell/aspect-ratio/aspect-ratio.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AspectRatioComponent);
    /***/
  },

  /***/
  "./src/app/shell/config/app-shell.config.ts":
  /*!**************************************************!*\
    !*** ./src/app/shell/config/app-shell.config.ts ***!
    \**************************************************/

  /*! exports provided: AppShellConfig */

  /***/
  function srcAppShellConfigAppShellConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppShellConfig", function () {
      return AppShellConfig;
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
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/


    var AppShellConfig_1;

    var AppShellConfig = AppShellConfig_1 =
    /*#__PURE__*/
    function () {
      function AppShellConfig(http) {
        _classCallCheck(this, AppShellConfig);

        this.http = http;
      } // Simplified version from: https://stackoverflow.com/a/49707898/1116959


      _createClass(AppShellConfig, [{
        key: "load",
        value: function load() {
          var configFile = './assets/config/app-shell.config' + (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() ? '.prod' : '') + '.json';
          return this.http.get(configFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (configSettings) {
            AppShellConfig_1.settings = configSettings;
          })).toPromise().catch(function (error) {
            console.log("Could not load file '".concat(configFile, "'"), error);
          });
        }
      }]);

      return AppShellConfig;
    }();

    AppShellConfig.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppShellConfig = AppShellConfig_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AppShellConfig);
    /***/
  },

  /***/
  "./src/app/shell/image-shell/image-shell.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/shell/image-shell/image-shell.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShellImageShellImageShellComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --image-shell-loading-background: #EEE;\n  --image-shell-border-radius: 0px;\n  display: block;\n  position: relative;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  -webkit-transition: all ease-in-out 0.3s;\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n}\n:host > .spinner {\n  display: none;\n}\n:host::before {\n  content: \"\";\n  background: var(--image-shell-loading-background);\n  border-radius: var(--image-shell-border-radius);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n:host:not([display=cover]) {\n  width: 100%;\n  overflow: hidden;\n}\n:host:not([display=cover]) > .inner-img {\n  -webkit-transition: visibility 0s linear, opacity 0.5s linear;\n  transition: visibility 0s linear, opacity 0.5s linear;\n  opacity: 0;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n}\n:host:not([display=cover]).img-loaded::before {\n  display: none;\n}\n:host:not([display=cover]).img-loaded > .inner-img {\n  opacity: 1;\n  visibility: visible;\n}\n:host[display=cover] {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n:host[display=cover]::before, :host[display=cover] > .spinner {\n  z-index: -1;\n}\n:host[display=cover] > .inner-img {\n  display: none;\n  visibility: hidden;\n}\n:host[display=cover].img-loaded::before {\n  display: none;\n}\n:host([animation=gradient]) {\n  --image-shell-loading-background: #EEE;\n  --image-shell-animation-color: #DDD;\n}\n:host([animation=gradient])::before {\n  background: -webkit-gradient(linear, left top, right top, color-stop(8%, var(--image-shell-loading-background)), color-stop(18%, var(--image-shell-animation-color)), color-stop(33%, var(--image-shell-loading-background)));\n  background: linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n:host([animation=gradient]).img-loaded::before {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n:host([animation=spinner]) {\n  --image-shell-spinner-size: 28px;\n  --image-shell-spinner-color: #CCC;\n}\n:host([animation=spinner]) > .spinner {\n  display: block;\n  position: absolute;\n  top: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  left: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  width: var(--image-shell-spinner-size);\n  height: var(--image-shell-spinner-size);\n  font-size: var(--image-shell-spinner-size);\n  line-height: var(--image-shell-spinner-size);\n  color: var(--image-shell-spinner-color);\n}\n:host([animation=spinner]).img-loaded > .spinner {\n  display: none;\n  visibility: hidden;\n}\n:host(.add-overlay) {\n  --image-shell-overlay-background: rgba(0, 0, 0, .4);\n}\n:host(.add-overlay).img-loaded::before {\n  display: block;\n  background: var(--image-shell-overlay-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaGVsbC9pbWFnZS1zaGVsbC9pbWFnZS1zaGVsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLGdDQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLFVBQUE7QUNBRjtBREdFO0VBQ0UsYUFBQTtBQ0RKO0FES0U7RUFDRSxXQUFBO0VBQ0EsaURBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0hKO0FETUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE1JO0VBQ0UsNkRBQUE7RUFBQSxxREFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUNKTjtBRFNNO0VBQ0UsYUFBQTtBQ1BSO0FEVU07RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNSUjtBRGNFO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQ1pKO0FEZUk7RUFFRSxXQUFBO0FDZE47QURpQkk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNmTjtBRG9CTTtFQUNFLGFBQUE7QUNsQlI7QUR3QkE7RUFDRSxzQ0FBQTtFQUNBLG1DQUFBO0FDckJGO0FEd0JFO0VBQ0UsNk5BQ0U7RUFERixrS0FDRTtFQUNGLDRCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQ3ZCSjtBRDRCSTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7VUFBQSxZQUFBO0FDMUJOO0FEOEJFO0VBQ0U7SUFDRSw2QkFBQTtFQzVCSjtFRCtCRTtJQUNFLDRCQUFBO0VDN0JKO0FBQ0Y7QURzQkU7RUFDRTtJQUNFLDZCQUFBO0VDNUJKO0VEK0JFO0lBQ0UsNEJBQUE7RUM3Qko7QUFDRjtBRGlDQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUM5QkY7QURnQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwREFBQTtFQUNBLDJEQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSx1Q0FBQTtBQzlCSjtBRGtDSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ2hDTjtBRHFDQTtFQUNFLG1EQUFBO0FDbENGO0FEc0NJO0VBQ0UsY0FBQTtFQUNBLGlEQUFBO0FDcENOIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDBweDtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzO1xuICB6LWluZGV4OiAyO1xuXG4gIC8vIEJ5IGRlZmF1bHQsIGhpZGUgdGhlIHNwaW5uZXJcbiAgJiA+IC5zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLy8gTG9hZGluZyBiYWNrZ3JvdW5kXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgJjpub3QoW2Rpc3BsYXk9XCJjb3ZlclwiXSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmID4gLmlubmVyLWltZyB7XG4gICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciwgb3BhY2l0eSAuNXMgbGluZWFyO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XG4gICAgfVxuXG4gICAgJi5pbWctbG9hZGVkIHtcbiAgICAgIC8vIEhpZGUgbG9hZGluZyBiYWNrZ3JvdW5kIG9uY2UgdGhlIGltYWdlIGhhcyBsb2FkZWRcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYgPiAuaW5uZXItaW1nIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBJZiBpdCBpcyBkaXNwbGF5OiBjb3ZlclxuICAmW2Rpc3BsYXk9XCJjb3ZlclwiXSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgLy8gSW4gY292ZXIgZGlzcGxheSwgd2UgY2FuIGhhdmUgY29udGVudCBpbnNpZGUgdGhlIGVsZW1lbnQsIHRodXMgd2UgbmVlZCB0byBwdXQgdGhlc2UgZWxlbWVudHMgYmVuZWF0aFxuICAgICY6OmJlZm9yZSxcbiAgICAmID4gLnNwaW5uZXIge1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgJiA+IC5pbm5lci1pbWcge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAmLmltZy1sb2FkZWQge1xuICAgICAgLy8gSGlkZSBsb2FkaW5nIGJhY2tncm91bmQgb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoW2FuaW1hdGlvbj1cImdyYWRpZW50XCJdKSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcblxuICAvLyBUaGUgYW5pbWF0aW9uIHRoYXQgZ29lcyBiZW5lYXRoIHRoZSBtYXNrc1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6XG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCkgOCUsIHZhcigtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDMzJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcbiAgICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG5cbiAgJi5pbWctbG9hZGVkIHtcbiAgICAvLyBSZXNldCBiYWNrZ3JvdW5kIGFuaW1hdGlvbiBvbmNlIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBhbmltYXRpb246IDA7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBhbmltYXRlQmFja2dyb3VuZCB7XG4gICAgMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMFxuICAgIH1cblxuICAgIDEwMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwXG4gICAgfVxuICB9XG59XG5cbjpob3N0KFthbmltYXRpb249XCJzcGlubmVyXCJdKSB7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAyOHB4O1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6ICNDQ0M7XG5cbiAgJiA+IC5zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDUwJSAtIGNhbGModmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpKTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIGNhbGModmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpKTtcbiAgICB3aWR0aDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yKTtcbiAgfVxuXG4gICYuaW1nLWxvYWRlZCB7XG4gICAgJiA+IC5zcGlubmVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG59XG5cbjpob3N0KC5hZGQtb3ZlcmxheSkge1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG5cbiAgJi5pbWctbG9hZGVkIHtcbiAgICAvLyBBZGQgYmFja2dyb3VuZCBvdmVybGF5IGFmdGVyIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6ICNFRUU7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4zcztcbiAgei1pbmRleDogMjtcbn1cbjpob3N0ID4gLnNwaW5uZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3Q6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbjpob3N0Om5vdChbZGlzcGxheT1jb3Zlcl0pIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdDpub3QoW2Rpc3BsYXk9Y292ZXJdKSA+IC5pbm5lci1pbWcge1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciwgb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbn1cbjpob3N0Om5vdChbZGlzcGxheT1jb3Zlcl0pLmltZy1sb2FkZWQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdDpub3QoW2Rpc3BsYXk9Y292ZXJdKS5pbWctbG9hZGVkID4gLmlubmVyLWltZyB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG46aG9zdFtkaXNwbGF5PWNvdmVyXSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG46aG9zdFtkaXNwbGF5PWNvdmVyXTo6YmVmb3JlLCA6aG9zdFtkaXNwbGF5PWNvdmVyXSA+IC5zcGlubmVyIHtcbiAgei1pbmRleDogLTE7XG59XG46aG9zdFtkaXNwbGF5PWNvdmVyXSA+IC5pbm5lci1pbWcge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG46aG9zdFtkaXNwbGF5PWNvdmVyXS5pbWctbG9hZGVkOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSkge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogI0VFRTtcbiAgLS1pbWFnZS1zaGVsbC1hbmltYXRpb24tY29sb3I6ICNEREQ7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKSA4JSwgdmFyKC0taW1hZ2Utc2hlbGwtYW5pbWF0aW9uLWNvbG9yKSAxOCUsIHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCkgMzMlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcbiAgYW5pbWF0aW9uOiBhbmltYXRlQmFja2dyb3VuZCAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKS5pbWctbG9hZGVkOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBhbmltYXRpb246IDA7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVCYWNrZ3JvdW5kIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDA7XG4gIH1cbn1cblxuOmhvc3QoW2FuaW1hdGlvbj1zcGlubmVyXSkge1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZTogMjhweDtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiAjQ0NDO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1zcGlubmVyXSkgPiAuc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSBjYWxjKHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSkgLyAyKSk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gY2FsYyh2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpIC8gMikpO1xuICB3aWR0aDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICBmb250LXNpemU6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICBjb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcik7XG59XG46aG9zdChbYW5pbWF0aW9uPXNwaW5uZXJdKS5pbWctbG9hZGVkID4gLnNwaW5uZXIge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbjpob3N0KC5hZGQtb3ZlcmxheSkge1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG59XG46aG9zdCguYWRkLW92ZXJsYXkpLmltZy1sb2FkZWQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shell/image-shell/image-shell.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shell/image-shell/image-shell.component.ts ***!
    \************************************************************/

  /*! exports provided: ImageShellComponent */

  /***/
  function srcAppShellImageShellImageShellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageShellComponent", function () {
      return ImageShellComponent;
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


    var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");

    var ImageShellComponent =
    /*#__PURE__*/
    function () {
      function ImageShellComponent(platformId) {
        _classCallCheck(this, ImageShellComponent);

        this.platformId = platformId; // To debug shell styles, change configuration in the assets/app-shell.config.json file

        this.debugDisplay = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.debug ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.debug : false; // tslint:disable-next-line:variable-name

        this._src = ''; // tslint:disable-next-line:variable-name

        this._alt = ''; // tslint:disable-next-line:variable-name

        this._display = '';
        this.imageLoaded = false;
      }

      _createClass(ImageShellComponent, [{
        key: "_imageLoaded",
        value: function _imageLoaded() {
          this.imageLoaded = true; // If it's a cover image then set the background-image property accordingly

          if (this._display === 'cover') {
            this.backgroundImage = 'url(' + this._src + ')';
          }
        }
      }, {
        key: "display",
        set: function set(val) {
          this._display = val !== undefined && val !== null ? val : '';
        },
        get: function get() {
          return this._display;
        }
      }, {
        key: "src",
        set: function set(val) {
          if (!this.debugDisplay) {
            this._src = val !== undefined && val !== null ? val : '';
          }

          if (this._display === 'cover') {
            // Unset the background-image
            this.backgroundImage = 'unset';
          } // Show loading indicator
          // When using SSR (Server Side Rendering), avoid the loading animation while the image resource is being loaded


          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId)) {
            this.imageLoaded = true;
          } else {
            this.imageLoaded = false;
          }
        }
      }, {
        key: "alt",
        set: function set(val) {
          this._alt = val !== undefined && val !== null ? val : '';
        }
      }]);

      return ImageShellComponent;
    }();

    ImageShellComponent.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.img-loaded'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ImageShellComponent.prototype, "imageLoaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.backgroundImage'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ImageShellComponent.prototype, "backgroundImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.display'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], ImageShellComponent.prototype, "display", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], ImageShellComponent.prototype, "src", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], ImageShellComponent.prototype, "alt", null);
    ImageShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-shell',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./image-shell.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/image-shell/image-shell.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./image-shell.component.scss */
      "./src/app/shell/image-shell/image-shell.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], ImageShellComponent);
    /***/
  },

  /***/
  "./src/app/shell/shell.module.ts":
  /*!***************************************!*\
    !*** ./src/app/shell/shell.module.ts ***!
    \***************************************/

  /*! exports provided: ShellModule */

  /***/
  function srcAppShellShellModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellModule", function () {
      return ShellModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
    /* harmony import */


    var _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./image-shell/image-shell.component */
    "./src/app/shell/image-shell/image-shell.component.ts");
    /* harmony import */


    var _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./text-shell/text-shell.component */
    "./src/app/shell/text-shell/text-shell.component.ts");
    /* harmony import */


    var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");

    var ShellModule = function ShellModule() {
      _classCallCheck(this, ShellModule);
    };

    ShellModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__["AspectRatioComponent"], _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"], _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"]],
      providers: [// Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
      {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        useFactory: function useFactory(appShellConfig) {
          return function () {
            return appShellConfig.load();
          };
        },
        deps: [_config_app_shell_config__WEBPACK_IMPORTED_MODULE_8__["AppShellConfig"]],
        multi: true
      }],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
      exports: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__["AspectRatioComponent"], _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"], _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"]]
    })], ShellModule);
    /***/
  },

  /***/
  "./src/app/shell/text-shell/text-shell.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/shell/text-shell/text-shell.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShellTextShellTextShellComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --text-shell-background: transparent;\n  --text-shell-line-color: #EEE;\n  --text-shell-line-height: 16px;\n  --text-shell-line-gutter: 3px;\n  display: block;\n  position: relative;\n  color: transparent;\n  background-color: var(--text-shell-background);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  background-clip: content-box;\n}\n\n:host(:not([animation])) {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(88%, var(--text-shell-line-color, #CCC)) , color-stop(88%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host(:not([animation]))[lines=\"1\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(92%, var(--text-shell-line-color, #CCC)) , color-stop(92%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host(:not([animation]))[lines=\"2\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(92%, var(--text-shell-line-color, #CCC)) , color-stop(92%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(47%, var(--text-shell-line-color, #CCC)) , color-stop(47%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host(:not([animation]))[lines=\"3\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(88%, var(--text-shell-line-color, #CCC)) , color-stop(88%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(60%, var(--text-shell-line-color, #CCC)) , color-stop(60%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(38%, var(--text-shell-line-color, #CCC)) , color-stop(38%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 38% , var(--text-shell-background, #FFF) 38%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host(:not([animation]))[lines=\"4\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(89%, var(--text-shell-line-color, #CCC)) , color-stop(89%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(66%, var(--text-shell-line-color, #CCC)) , color-stop(66%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(74%, var(--text-shell-line-color, #CCC)) , color-stop(74%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(45%, var(--text-shell-line-color, #CCC)) , color-stop(45%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 66% , var(--text-shell-background, #FFF) 66%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 45% , var(--text-shell-background, #FFF) 45%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host(:not([animation]))[lines=\"5\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(95%, var(--text-shell-line-color, #CCC)) , color-stop(95%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(78%, var(--text-shell-line-color, #CCC)) , color-stop(78%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(60%, var(--text-shell-line-color, #CCC)) , color-stop(60%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(63%, var(--text-shell-line-color, #CCC)) , color-stop(63%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(44%, var(--text-shell-line-color, #CCC)) , color-stop(44%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 44% , var(--text-shell-background, #FFF) 44%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host(:not([animation]))[lines=\"6\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(93%, var(--text-shell-line-color, #CCC)) , color-stop(93%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(65%, var(--text-shell-line-color, #CCC)) , color-stop(65%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(80%, var(--text-shell-line-color, #CCC)) , color-stop(80%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(79%, var(--text-shell-line-color, #CCC)) , color-stop(79%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(74%, var(--text-shell-line-color, #CCC)) , color-stop(74%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(44%, var(--text-shell-line-color, #CCC)) , color-stop(44%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 44% , var(--text-shell-background, #FFF) 44%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host(:not([animation])).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n:host([animation=bouncing]) {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(89%, var(--text-shell-line-color, #CCC)) , color-stop(89%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@-webkit-keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"1\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(95%, var(--text-shell-line-color, #CCC)) , color-stop(95%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"2\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(93%, var(--text-shell-line-color, #CCC)) , color-stop(93%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(48%, var(--text-shell-line-color, #CCC)) , color-stop(48%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 48% , var(--text-shell-background, #FFF) 48%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@-webkit-keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"3\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(89%, var(--text-shell-line-color, #CCC)) , color-stop(89%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(72%, var(--text-shell-line-color, #CCC)) , color-stop(72%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(45%, var(--text-shell-line-color, #CCC)) , color-stop(45%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 45% , var(--text-shell-background, #FFF) 45%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"4\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(94%, var(--text-shell-line-color, #CCC)) , color-stop(94%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(61%, var(--text-shell-line-color, #CCC)) , color-stop(61%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(72%, var(--text-shell-line-color, #CCC)) , color-stop(72%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(47%, var(--text-shell-line-color, #CCC)) , color-stop(47%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"5\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(87%, var(--text-shell-line-color, #CCC)) , color-stop(87%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(61%, var(--text-shell-line-color, #CCC)) , color-stop(61%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(71%, var(--text-shell-line-color, #CCC)) , color-stop(71%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(78%, var(--text-shell-line-color, #CCC)) , color-stop(78%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(46%, var(--text-shell-line-color, #CCC)) , color-stop(46%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 71% , var(--text-shell-background, #FFF) 71%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 46% , var(--text-shell-background, #FFF) 46%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"6\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(95%, var(--text-shell-line-color, #CCC)) , color-stop(95%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(65%, var(--text-shell-line-color, #CCC)) , color-stop(65%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(63%, var(--text-shell-line-color, #CCC)) , color-stop(63%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(75%, var(--text-shell-line-color, #CCC)) , color-stop(75%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(72%, var(--text-shell-line-color, #CCC)) , color-stop(72%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(47%, var(--text-shell-line-color, #CCC)) , color-stop(47%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n  -webkit-animation: 0;\n          animation: 0;\n}\n\n:host([animation=gradient]) {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent !important;\n  --text-shell-animation-background: #EEE;\n  --text-shell-animation-color: #DDD;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: -webkit-gradient(linear, left top, right top, color-stop(8%, var(--text-shell-animation-background)), color-stop(18%, var(--text-shell-animation-color)), color-stop(33%, var(--text-shell-animation-background)));\n  background: linear-gradient(to right, var(--text-shell-animation-background) 8%, var(--text-shell-animation-color) 18%, var(--text-shell-animation-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n:host([animation=gradient])::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(93%, var(--text-shell-line-color, #CCC)) , color-stop(93%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"1\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"1\"]::after {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(93%, var(--text-shell-line-color, #CCC)) , color-stop(93%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"2\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host([animation=gradient])[lines=\"2\"]::after {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(88%, var(--text-shell-line-color, #CCC)) , color-stop(88%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(41%, var(--text-shell-line-color, #CCC)) , color-stop(41%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 41% , var(--text-shell-background, #FFF) 41%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host([animation=gradient])[lines=\"3\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host([animation=gradient])[lines=\"3\"]::after {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(93%, var(--text-shell-line-color, #CCC)) , color-stop(93%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(73%, var(--text-shell-line-color, #CCC)) , color-stop(73%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(46%, var(--text-shell-line-color, #CCC)) , color-stop(46%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 46% , var(--text-shell-background, #FFF) 46%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host([animation=gradient])[lines=\"4\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host([animation=gradient])[lines=\"4\"]::after {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(95%, var(--text-shell-line-color, #CCC)) , color-stop(95%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(75%, var(--text-shell-line-color, #CCC)) , color-stop(75%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(78%, var(--text-shell-line-color, #CCC)) , color-stop(78%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(40%, var(--text-shell-line-color, #CCC)) , color-stop(40%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 40% , var(--text-shell-background, #FFF) 40%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host([animation=gradient])[lines=\"5\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host([animation=gradient])[lines=\"5\"]::after {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(93%, var(--text-shell-line-color, #CCC)) , color-stop(93%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(79%, var(--text-shell-line-color, #CCC)) , color-stop(79%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(61%, var(--text-shell-line-color, #CCC)) , color-stop(61%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(62%, var(--text-shell-line-color, #CCC)) , color-stop(62%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(38%, var(--text-shell-line-color, #CCC)) , color-stop(38%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 38% , var(--text-shell-background, #FFF) 38%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host([animation=gradient])[lines=\"6\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host([animation=gradient])[lines=\"6\"]::after {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(89%, var(--text-shell-line-color, #CCC)) , color-stop(89%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(64%, var(--text-shell-line-color, #CCC)) , color-stop(64%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(61%, var(--text-shell-line-color, #CCC)) , color-stop(61%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(60%, var(--text-shell-line-color, #CCC)) , color-stop(60%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(65%, var(--text-shell-line-color, #CCC)) , color-stop(65%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(47%, var(--text-shell-line-color, #CCC)) , color-stop(47%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host([animation=gradient]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n:host([animation=gradient]).text-loaded::before, :host([animation=gradient]).text-loaded::after {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL3RleHQtc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL3RleHQtc2hlbGwvdGV4dC1zaGVsbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9tYXNrZWQtbGluZXMtYmFja2dyb3VuZC5zY3NzIiwiL1VzZXJzL2RheWFuYS93b3JrL2lvbmljL3RlbXBsYXRlcy9pb240ZnVsbHB3YS9zcmMvYXBwL3NoZWxsL3RleHQtc2hlbGwvbWl4aW5zL2JhY2tncm91bmQtaGVpZ2h0LnNjc3MiLCIvVXNlcnMvZGF5YW5hL3dvcmsvaW9uaWMvdGVtcGxhdGVzL2lvbjRmdWxscHdhL3NyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC9taXhpbnMvYm91bmNpbmctbGluZXMtYmFja2dyb3VuZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUdBLDRCQUFBO0FDUkY7O0FEWUE7RUVQSSwwS0FBQTtFQUFBLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUZlRjs7QURVSTtFRWJBLDBLQUFBO0VBQUEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUNmRiw0R0FBQTtBRnNCRjs7QURHSTtFRWdCQSxtZEFBQTtFQUFBLHVWQUFBO0VBQ0EsZ1BBQUE7RUFDQSw4SUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGNkJGOztBREpJO0VFZ0JBLDR2QkFBQTtFQUFBLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRm9DRjs7QURYSTtFRWdCQSxxaUNBQUE7RUFBQSw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGMkNGOztBRGxCSTtFRWdCQSw4MENBQUE7RUFBQSx3K0JBQUE7RUFDQSxrM0JBQUE7RUFDQSw2WUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGa0RGOztBRHpCSTtFRWdCQSx1bkRBQUE7RUFBQSxtc0NBQUE7RUFDQSx3a0NBQUE7RUFDQSxrZUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGeURGOztBRDNCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDNkJKOztBRHhCQTtFSXpCSSwwS0FBQTtFQUFBLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RURuQkYsNEdBQUE7RUNtRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBSFZGOztBR3ZESTtFQUNFO0lBQ0Usd0RBQUE7RUh5RE47RUd0REk7SUFDRSx5REFBQTtFSHdETjtBQUNGOztBRy9ESTtFQUNFO0lBQ0Usd0RBQUE7RUh5RE47RUd0REk7SUFDRSx5REFBQTtFSHdETjtBQUNGOztBRHhDSTtFSS9CQSwwS0FBQTtFQUFBLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RURuQkYsNEdBQUE7RUNtRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBSFdGOztBRzVFSTtFQUNFO0lBQ0Usd0RBQUE7RUg4RU47RUczRUk7SUFDRSx5REFBQTtFSDZFTjtBQUNGOztBRDdESTtFSWtCQSxtZEFBQTtFQUFBLHVWQUFBO0VBQ0EsZ1BBQUE7RUFDQSw4SUFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUhnQ0Y7O0FHaERJO0VBQ0U7SUFDRSw0SUFBQTtFSGtETjtFRy9DSTtJQUNFLDhJQUFBO0VIaUROO0FBQ0Y7O0FHeERJO0VBQ0U7SUFDRSw0SUFBQTtFSGtETjtFRy9DSTtJQUNFLDhJQUFBO0VIaUROO0FBQ0Y7O0FEbEZJO0VJa0JBLDR2QkFBQTtFQUFBLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIcURGOztBR3JFSTtFQUNFO0lBQ0UsZ09BQUE7RUh1RU47RUdwRUk7SUFDRSxtT0FBQTtFSHNFTjtBQUNGOztBRHZHSTtFSWtCQSxxaUNBQUE7RUFBQSw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUgwRUY7O0FHMUZJO0VBQ0U7SUFDRSxvVEFBQTtFSDRGTjtFR3pGSTtJQUNFLHdUQUFBO0VIMkZOO0FBQ0Y7O0FENUhJO0VJa0JBLDgwQ0FBQTtFQUFBLHcrQkFBQTtFQUNBLGszQkFBQTtFQUNBLDZZQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RURwRUYsNEdBQUE7RUNtRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBSCtGRjs7QUcvR0k7RUFDRTtJQUNFLHdZQUFBO0VIaUhOO0VHOUdJO0lBQ0UsNllBQUE7RUhnSE47QUFDRjs7QURqSkk7RUlrQkEsdW5EQUFBO0VBQUEsbXNDQUFBO0VBQ0Esd2tDQUFBO0VBQ0Esa2VBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIb0hGOztBR3BJSTtFQUNFO0lBQ0UsNGRBQUE7RUhzSU47RUduSUk7SUFDRSxrZUFBQTtFSHFJTjtBQUNGOztBRGpLRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsb0JBQUE7VUFBQSxZQUFBO0FDa0tKOztBRDdKQTtFQUNFLDZCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VHL0RBLDRHQUFBO0FGZ09GOztBRDFKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSw4TkFDRTtFQURGLG1LQUNFO0VBQ0YsNEJBQUE7RUFDQSw0REFBQTtVQUFBLG9EQUFBO0FDMkpKOztBRHhKRTtFQUNFO0lBQ0UsNkJBQUE7RUMwSko7RUR2SkU7SUFDRSw0QkFBQTtFQ3lKSjtBQUNGOztBRGhLRTtFQUNFO0lBQ0UsNkJBQUE7RUMwSko7RUR2SkU7SUFDRSw0QkFBQTtFQ3lKSjtBQUNGOztBRHJKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUV4RkEsMEtBQUE7RUFBQSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGZ1FGOztBRHBKSTtFRzVHRiw0R0FBQTtBRm1RRjs7QURuSk07RUVwR0YsMEtBQUE7RUFBQSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGMFFGOztBRDlKSTtFRzVHRiw0R0FBQTtBRjZRRjs7QUQ3Sk07RUV2RUYsbWRBQUE7RUFBQSx1VkFBQTtFQUNBLGdQQUFBO0VBQ0EsOElBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRm9SRjs7QUR4S0k7RUc1R0YsNEdBQUE7QUZ1UkY7O0FEdktNO0VFdkVGLDR2QkFBQTtFQUFBLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRjhSRjs7QURsTEk7RUc1R0YsNEdBQUE7QUZpU0Y7O0FEakxNO0VFdkVGLHFpQ0FBQTtFQUFBLDZ3QkFBQTtFQUNBLDRwQkFBQTtFQUNBLHdUQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZ3U0Y7O0FENUxJO0VHNUdGLDRHQUFBO0FGMlNGOztBRDNMTTtFRXZFRiw4MENBQUE7RUFBQSx3K0JBQUE7RUFDQSxrM0JBQUE7RUFDQSw2WUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGa1RGOztBRHRNSTtFRzVHRiw0R0FBQTtBRnFURjs7QURyTU07RUV2RUYsdW5EQUFBO0VBQUEsbXNDQUFBO0VBQ0Esd2tDQUFBO0VBQ0Esa2VBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRjRURjs7QUR0TUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ3dNSjs7QUR0TUk7RUFFRSxnQkFBQTtFQUNBLG9CQUFBO1VBQUEsWUFBQTtBQ3VNTiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3RleHQtc2hlbGwvdGV4dC1zaGVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL21peGlucy9iYWNrZ3JvdW5kLWhlaWdodFwiO1xuQGltcG9ydCBcIi4vbWl4aW5zL21hc2tlZC1saW5lcy1iYWNrZ3JvdW5kXCI7XG5AaW1wb3J0IFwiLi9taXhpbnMvYm91bmNpbmctbGluZXMtYmFja2dyb3VuZFwiO1xuXG4kbWF4LWxpbmVzLWNvdW50OiA2O1xuXG46aG9zdCB7XG4gIC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6ICNFRUU7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyOiAzcHg7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQpO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAvLyBUbyBmaXggMXB4IGxpbmUgbWlzYWxpZ25tZW50IGluIGNocm9tZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtY2xpcFxuICAvLyAoSSBhbHNvIG5vdGljZWQgdGhhdCBpZiBJIHNldCB0aGUgY29sb3IgdG8gYSBzb2xpZCBjb2xvciBpbnN0ZWFkIG9mIGhhdmluZyBvcGFjaXR5LCB0aGUgaXNzdWUgZG9lc24ndCBoYXBwZW4pXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG59XG5cbi8vIERlZmF1bHQgc3R5bGVzLiBXaGVuIG5vIGFuaW1hdGlvbiBhdHRyaWJ1dGUgaXMgcHJvdmlkZWRcbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKSB7XG4gIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxuICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgxKTtcblxuICAvLyBTdXBwb3J0IGZvciBbbGluZXNdIGF0dHJpYnV0ZVxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgtbGluZXMtY291bnQge1xuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcbiAgICAgIEBpbmNsdWRlIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKCRpKTtcbiAgICB9XG4gIH1cblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbn1cblxuLy8gQm91bmNpbmcgbGluZSBsb2FkaW5nIGFuaW1hdGlvblxuOmhvc3QoW2FuaW1hdGlvbj1cImJvdW5jaW5nXCJdKSB7XG4gIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxuICBAaW5jbHVkZSBib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kKDEpO1xuXG4gIC8vIFN1cHBvcnQgZm9yIFtsaW5lc10gYXR0cmlidXRlXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG1heC1saW5lcy1jb3VudCB7XG4gICAgJltsaW5lcz1cIiN7ICRpIH1cIl0ge1xuICAgICAgQGluY2x1ZGUgYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgkaSk7XG4gICAgfVxuICB9XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIC8vIDAgaXMgdGhlIGRlZmF1bHQgdmFsdWUgKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE1OTYzMDQ0LzExMTY5NTkpXG4gICAgYW5pbWF0aW9uOiAwO1xuICB9XG59XG5cbi8vIEJhY2tncm91bmQgZ3JhZGllbnQgYmVuZWF0aCBtYXNrZWQgbGluZXNcbjpob3N0KFthbmltYXRpb249XCJncmFkaWVudFwiXSkge1xuICAtLXRleHQtc2hlbGwtYmFja2dyb3VuZDogI0ZGRjtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogI0VFRTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcblxuXG4gIC8vIENhbGN1bGF0ZSBkZWZhdWx0IGhlaWdodCBmb3IgMSBsaW5lXG4gIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsIDEpO1xuXG4gIC8vIFRoZSBhbmltYXRpb24gdGhhdCBnb2VzIGJlbmVhdGggdGhlIG1hc2tzXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6XG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQpIDglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kKSAzMyUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRlQmFja2dyb3VuZCAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZUJhY2tncm91bmQge1xuICAgIDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcbiAgICB9XG5cbiAgICAxMDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBtYXNrc1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgLy8gRGVmYXVsdCBvbmUgbGluZSB0ZXh0LXNoZWxsXG4gICAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoMSk7XG4gIH1cblxuICAvLyBTdXBwb3J0IGZvciBbbGluZXNdIGF0dHJpYnV0ZVxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgtbGluZXMtY291bnQge1xuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcbiAgICAgIC8vIENhbGN1bGF0ZSBkZWZhdWx0IGhlaWdodCBmb3IgJGkgbGluZXNcbiAgICAgIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsICRpKTtcblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBhbmltYXRpb246IDA7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6ICNFRUU7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyOiAzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kKTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbn1cblxuOmhvc3QoOm5vdChbYW5pbWF0aW9uXSkpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDg4JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgODglKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAxKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDEgLSAxKSkpO1xufVxuOmhvc3QoOm5vdChbYW5pbWF0aW9uXSkpW2xpbmVzPVwiMVwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA5MiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDkyJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgxIC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKVtsaW5lcz1cIjJcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTIlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MiUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDclICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0NyUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMikgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKVtsaW5lcz1cIjNcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgODglICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA4OCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2MCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgMzglICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAzOCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAzKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpO1xufVxuOmhvc3QoOm5vdChbYW5pbWF0aW9uXSkpW2xpbmVzPVwiNFwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg5JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2NiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDY2JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3NCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDc0JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA0NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDQ1JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNCkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKVtsaW5lcz1cIjVcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTUlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5NSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzglICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3OCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2MCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2MyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDQlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0NCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKVtsaW5lcz1cIjZcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjUlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2NSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgODAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA4MCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3OSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzQlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3NCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDQlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0NCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDYgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA2KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAxKSkpO1xufVxuOmhvc3QoOm5vdChbYW5pbWF0aW9uXSkpLnRleHQtbG9hZGVkIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg5JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVMaW5lO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDEpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMSAtIDEpKSk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVMaW5lIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pW2xpbmVzPVwiMVwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA5NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDk1JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVMaW5lO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDEpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMSAtIDEpKSk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVMaW5lIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pW2xpbmVzPVwiMlwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA5MyUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDkzJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA0OCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDQ4JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTXVsdGlMaW5lO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDIpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA1NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pW2xpbmVzPVwiM1wiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg5JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3MiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDcyJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA0NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDQ1JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGUtcmV2ZXJzZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVNdWx0aUxpbmU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMykgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZU11bHRpTGluZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDU1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pW2xpbmVzPVwiNFwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA5NCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDk0JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2MSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDYxJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3MiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDcyJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA0NyUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDQ3JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZS1yZXZlcnNlO1xuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZU11bHRpTGluZTtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA0KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuQGtleWZyYW1lcyBhbmltYXRlTXVsdGlMaW5lIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNzUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNzUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNTUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pW2xpbmVzPVwiNVwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4NyUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg3JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2MSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDYxJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3MSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDcxJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3OCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDc4JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA0NiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDQ2JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTXVsdGlMaW5lO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDUpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA1NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pW2xpbmVzPVwiNlwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA5NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDk1JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDY1JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2MyUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDYzJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDc1JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3MiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDcyJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA0NyUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDQ3JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg2IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNiAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGUtcmV2ZXJzZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVNdWx0aUxpbmU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNikgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMSkpKTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZU11bHRpTGluZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDU1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pLnRleHQtbG9hZGVkIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGFuaW1hdGlvbjogMDtcbn1cblxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pIHtcbiAgLS10ZXh0LXNoZWxsLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6ICNFRUU7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6ICNEREQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgxIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZCkgOCUsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yKSAxOCUsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQpIDMzJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVCYWNrZ3JvdW5kIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDA7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDkzJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgOTMlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAxKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDEgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiMVwiXSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgxIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjFcIl06OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDkzJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgOTMlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAxKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDEgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiMlwiXSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMikgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjJcIl06OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDg4JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgODglKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDQxJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNDElKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDIpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSlbbGluZXM9XCIzXCJdIHtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAzKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiM1wiXTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3MyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDYlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0NiUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAzKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiNFwiXSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNCkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjRcIl06OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDk1JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgOTUlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDc1JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzUlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDc4JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzglKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDQwJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNDAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA0KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiNVwiXSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjVcIl06OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDkzJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgOTMlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDc5JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzklKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDYxJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjElKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDYyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjIlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDM4JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMzglKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDUpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSlbbGluZXM9XCI2XCJdIHtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA2KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiNlwiXTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgODklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA4OSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjQlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2NCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjElICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2MSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2MCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjUlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2NSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDclICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0NyUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDYgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA2KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pLnRleHQtbG9hZGVkIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSkudGV4dC1sb2FkZWQ6OmJlZm9yZSwgOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pLnRleHQtbG9hZGVkOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGFuaW1hdGlvbjogMDtcbn0iLCJAaW1wb3J0IFwiLi91dGlsc1wiO1xuQGltcG9ydCBcIi4vYmFja2dyb3VuZC1oZWlnaHRcIjtcblxuQG1peGluIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKCRsaW5lczogMSkge1xuICAkbGluZS1oZWlnaHQ6IHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xuICAkYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQyk7XG4gICRtYXNrLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xuICAkbGluZS1iZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGJnLXktcG9zOiAwcHg7XG4gICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSg4NSwgOTUpfTtcbiAgJGJnLWltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJztcbiAgJGJnLXBvc2l0aW9uOiAnMCAnICsgJGJnLXktcG9zO1xuICAkYmctc2l6ZTogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcblxuICBAaWYgKCRsaW5lcyA9PSAxKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3skYmctaW1hZ2V9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7JGJnLXBvc2l0aW9ufTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemV9O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH0gQGVsc2Uge1xuICAgIEBmb3IgJGkgZnJvbSAyIHRocm91Z2ggJGxpbmVzIHtcbiAgICAgIC8vIEFkZCBzZXBhcmF0b3IgYmV0d2VlbiBsaW5lc1xuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICN7JGxpbmUtYmctY29sb3J9IDEwMCUsICN7JGxpbmUtYmctY29sb3J9IDEwMCUpKTtcbiAgICAgIC8vIFRoaXMgbGluZWFyLWdyYWRpZW50IGFzIHNlcGFyYXRvciBzdGFydHMgYmVsb3cgdGhlIGxhc3QgbGluZSxcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLWhlaWdodCB0byBvdXIgeS1wb3MgcG9pbnRlclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDIpKSk7XG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xuXG4gICAgICAvLyBBZGQgbmV3IGxpbmVcbiAgICAgIC8vIFRoZSBsYXN0IGxpbmUgc2hvdWxkIGJlIG5hcnJvdyB0aGFuIHRoZSBvdGhlcnNcbiAgICAgIEBpZiAoJGkgPT0gJGxpbmVzKSB7XG4gICAgICAgICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSgzMCwgNTApfTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oNjAsIDgwKX07XG4gICAgICB9XG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknKTtcbiAgICAgIC8vIFRoaXMgbmV3IGxpbmUgc3RhcnRzIGJlbG93IHRoZSBwcnZpb3VzbHkgYWRkZWQgc2VwYXJhdG9yLFxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtc3BhY2luZyB0byBvdXIgeS1wb3MgcG9pbnRlclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDEpKSk7XG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3t0by1zdHJpbmcoJGJnLWltYWdlLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3t0by1zdHJpbmcoJGJnLXBvc2l0aW9uLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cblxuICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkbGluZXMpO1xufVxuIiwiQG1peGluIGJhY2tncm91bmQtaGVpZ2h0KCRwcm9wZXJ0eSwgJGxpbmVzOiAxKSB7XG4gICRsaW5lLWhlaWdodDogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gICRsaW5lLXNwYWNpbmc6IHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCk7XG5cbiAgI3skcHJvcGVydHl9OiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAjeyRsaW5lc30pICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skbGluZXN9IC0gMSkpKTtcbn1cbiIsIkBpbXBvcnQgXCIuL3V0aWxzXCI7XG5cbkBtaXhpbiBib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kKCRsaW5lczogMSkge1xuICAkbGluZS1oZWlnaHQ6IHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xuICAkYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQyk7XG4gICRtYXNrLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xuICAkbGluZS1iZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGJnLXktcG9zOiAwcHg7XG4gICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSg4NSwgOTUpfTtcbiAgJGJnLWltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJztcbiAgJGJnLXBvc2l0aW9uOiAnMCAnICsgJGJnLXktcG9zO1xuICAkYmctc2l6ZTogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcbiAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206ICc4NSUgJyArICRsaW5lLWhlaWdodDtcbiAgJGJnLXNpemUtYW5pbWF0aW9uLXRvOiAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0O1xuXG4gIEBpZiAoJGxpbmVzID09IDEpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAjeyRiZy1pbWFnZX07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3skYmctcG9zaXRpb259O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZX07XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZUxpbmU7XG5cbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVMaW5lIHtcbiAgICAgIDAle1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemUtYW5pbWF0aW9uLWZyb219O1xuICAgICAgfVxuXG4gICAgICAxMDAle1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemUtYW5pbWF0aW9uLXRvfTtcbiAgICAgIH1cbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBmb3IgJGkgZnJvbSAyIHRocm91Z2ggJGxpbmVzIHtcbiAgICAgIC8vIEFkZCBzZXBhcmF0b3IgYmV0d2VlbiBsaW5lc1xuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICN7JGxpbmUtYmctY29sb3J9IDEwMCUsICN7JGxpbmUtYmctY29sb3J9IDEwMCUpKTtcbiAgICAgIC8vIFRoaXMgbGluZWFyLWdyYWRpZW50IGFzIHNlcGFyYXRvciBzdGFydHMgYmVsb3cgdGhlIGxhc3QgbGluZSxcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLWhlaWdodCB0byBvdXIgeS1wb3MgcG9pbnRlclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDIpKSk7XG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xuICAgICAgLy8gc2VwYXJhdG9yIGxpbmVzIGhhdmUgdGhlIHNhbWUgaW5pdGlhbCBhbmQgZW5kIHN0YXRlLCB0aHVzIG5vIGFuaW1hdGlvbiBvY2N1cnNcbiAgICAgICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcbiAgICAgICRiZy1zaXplLWFuaW1hdGlvbi10bzogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi10bywgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xuXG4gICAgICAvLyBBZGQgbmV3IGxpbmVcbiAgICAgIC8vIFRoZSBsYXN0IGxpbmUgc2hvdWxkIGJlIG5hcnJvdyB0aGFuIHRoZSBvdGhlcnNcbiAgICAgIEBpZiAoJGkgPT0gJGxpbmVzKSB7XG4gICAgICAgICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSgzMCwgNTApfTtcbiAgICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJzU1JSAnICsgJGxpbmUtaGVpZ2h0KTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oNjAsIDgwKX07XG4gICAgICAgICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICc3NSUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKScpO1xuICAgICAgLy8gVGhpcyBuZXcgbGluZSBzdGFydHMgYmVsb3cgdGhlIHBydmlvdXNseSBhZGRlZCBzZXBhcmF0b3IsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1zcGFjaW5nIHRvIG91ciB5LXBvcyBwb2ludGVyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMSkpKTtcbiAgICAgICRiZy1wb3NpdGlvbjogYXBwZW5kKCRiZy1wb3NpdGlvbiwgJzAgJyArICRiZy15LXBvcyk7XG4gICAgICAkYmctc2l6ZTogYXBwZW5kKCRiZy1zaXplLCAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0KTtcbiAgICAgICRiZy1zaXplLWFuaW1hdGlvbi10bzogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi10bywgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3t0by1zdHJpbmcoJGJnLWltYWdlLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3t0by1zdHJpbmcoJGJnLXBvc2l0aW9uLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGUtcmV2ZXJzZTtcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZU11bHRpTGluZTtcblxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZU11bHRpTGluZSB7XG4gICAgICAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJywgJyl9O1xuICAgICAgfVxuXG4gICAgICAxMDAle1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7dG8tc3RyaW5nKCRiZy1zaXplLWFuaW1hdGlvbi10bywgJywgJyl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsICRsaW5lcyk7XG5cbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shell/text-shell/text-shell.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shell/text-shell/text-shell.component.ts ***!
    \**********************************************************/

  /*! exports provided: TextShellComponent */

  /***/
  function srcAppShellTextShellTextShellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextShellComponent", function () {
      return TextShellComponent;
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


    var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");

    var TextShellComponent =
    /*#__PURE__*/
    function () {
      function TextShellComponent() {
        _classCallCheck(this, TextShellComponent);

        // To debug shell styles, change configuration in the assets/app-shell.config.json file
        this.debugMode = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.debug ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.debug : false;
        this.textLoaded = false;
      }

      _createClass(TextShellComponent, [{
        key: "data",
        set: function set(val) {
          if (!this.debugMode) {
            this._data = val !== undefined && val !== null ? val : '';
          }

          if (this._data && this._data !== '') {
            this.textLoaded = true;
          } else {
            this.textLoaded = false;
          }
        }
      }]);

      return TextShellComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.text-loaded'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TextShellComponent.prototype, "textLoaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])], TextShellComponent.prototype, "data", null);
    TextShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-text-shell',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./text-shell.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/text-shell/text-shell.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./text-shell.component.scss */
      "./src/app/shell/text-shell/text-shell.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TextShellComponent);
    /***/
  },

  /***/
  "./src/app/side-menu/styles/side-menu.responsive.scss":
  /*!************************************************************!*\
    !*** ./src/app/side-menu/styles/side-menu.responsive.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSideMenuStylesSideMenuResponsiveScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .app-sidemenu .user-info-wrapper .user-name {\n    font-size: 18px;\n  }\n  .app-sidemenu ion-list ion-item {\n    font-size: 14px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* ----------- iPhone X ----------- */\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaWRlLW1lbnUvc3R5bGVzL3NpZGUtbWVudS5yZXNwb25zaXZlLnNjc3MiLCJzcmMvYXBwL3NpZGUtbWVudS9zdHlsZXMvc2lkZS1tZW51LnJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSw0Q0FBQTtBQUNBO0VBWU07SUFDRSxlQUFBO0VDZk47RURvQkk7SUFDRSxlQUFBO0VDbEJOO0FBQ0Y7QUR1QkEscURBQUE7QUFDQTtFQVlNO0lBQ0UsZUFBQTtFQ2hDTjtBQUNGO0FEcUNBLGtEQUFBO0FBYUEscUNBQUE7QUFhQSxpREFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGUtbWVudS9zdHlsZXMvc2lkZS1tZW51LnJlc3BvbnNpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChOb3RlOiBEb24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBkZXZpY2VzIGFzIGl0IG1heSBicmVhayB0aGUgY29ycmVjdCBjc3MgcHJlY2VkZW5jZSlcblxuLy8gKHNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbWVkaWEtcXVlcmllcy1mb3Itc3RhbmRhcmQtZGV2aWNlcy8jaXBob25lLXF1ZXJpZXMpXG4vLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc3NTAyNjEvMTExNjk1OSlcblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmFwcC1zaWRlbWVudSB7XG4gICAgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NjhweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAgLyA3MSlcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSB7XG4gICAgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA2NjdweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzM2cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cbiIsIi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMykge1xuICAuYXBwLXNpZGVtZW51IC51c2VyLWluZm8td3JhcHBlciAudXNlci1uYW1lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmFwcC1zaWRlbWVudSBpb24tbGlzdCBpb24taXRlbSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNSwgNVMsIDVDIGFuZCA1U0UgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU2OHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MC83MSkge1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94IC5jaGVja2JveC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNiwgNlMsIDcgYW5kIDggLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/side-menu/styles/side-menu.scss":
  /*!*************************************************!*\
    !*** ./src/app/side-menu/styles/side-menu.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSideMenuStylesSideMenuScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-alt-shade);\n  --page-headers-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.4);\n}\n\n.app-sidemenu ion-toolbar {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --background: var(--ion-color-dark-tint);\n}\n\n.app-sidemenu ion-content {\n  --background: var(--page-background);\n}\n\n.app-sidemenu .user-details-wrapper {\n  --ion-grid-column-padding: 0px;\n  color: var(--ion-color-lightest);\n  padding: var(--page-margin);\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.app-sidemenu .user-details-wrapper + .user-details-wrapper {\n  padding-top: 0px;\n}\n\n.app-sidemenu .user-info-wrapper {\n  padding-left: var(--page-margin);\n}\n\n.app-sidemenu .user-info-wrapper .user-name {\n  margin: 0px 0px 5px;\n}\n\n.app-sidemenu .user-info-wrapper .user-handle {\n  color: var(--ion-color-light-shade);\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.app-sidemenu .user-stats-wrapper {\n  text-align: center;\n}\n\n.app-sidemenu .user-stats-wrapper .user-stat-value {\n  margin-right: 5px;\n  font-weight: 500;\n}\n\n.app-sidemenu .user-stats-wrapper .user-stat-name {\n  color: var(--ion-color-light-shade);\n  font-size: 14px;\n}\n\n.app-sidemenu ion-list {\n  --ion-text-color: var(--ion-color-light-shade);\n  --ion-text-color-rgb: var(--ion-color-light-shade-rgb);\n  --ion-item-background: var(--page-background);\n  --ion-item-border-color: transparent;\n}\n\n.app-sidemenu ion-list ion-list-header {\n  --color: rgba(var(--ion-color-light-shade-rgb), 0.6);\n  text-transform: uppercase;\n  box-shadow: inset 0px -4px 8px -2px var(--page-headers-shadow-color);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n\n.app-sidemenu ion-list ion-item {\n  --border-width: 0px !important;\n  --padding-start: var(--page-margin);\n  --background-activated: var(--ion-color-medium);\n}\n\n.app-sidemenu ion-list ion-icon {\n  color: var(--ion-color-light-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaWRlLW1lbnUvc3R5bGVzL3NpZGUtbWVudS5zY3NzIiwic3JjL2FwcC9zaWRlLW1lbnUvc3R5bGVzL3NpZGUtbWVudS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSxrREFBQTtFQUVBLG9FQUFBO0FDRkY7O0FET0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0FDSko7O0FET0U7RUFDRSxvQ0FBQTtBQ0xKOztBRFFFO0VBQ0UsOEJBQUE7RUFHQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1JKOztBRFVJO0VBQ0UsZ0JBQUE7QUNSTjs7QURZRTtFQUNFLGdDQUFBO0FDVko7O0FEWUk7RUFDRSxtQkFBQTtBQ1ZOOztBRGFJO0VBQ0UsbUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWE47O0FEZUU7RUFDRSxrQkFBQTtBQ2JKOztBRGVJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ2JOOztBRGdCSTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQ2ROOztBRG1CRTtFQUNFLDhDQUFBO0VBQ0Esc0RBQUE7RUFDQSw2Q0FBQTtFQUNBLG9DQUFBO0FDakJKOztBRG1CSTtFQUNFLG9EQUFBO0VBRUEseUJBQUE7RUFDQSxvRUFBQTtFQUNBLHlDQUFBO1VBQUEsd0NBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7QUNuQk47O0FEc0JJO0VBQ0UsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLCtDQUFBO0FDcEJOOztBRHVCSTtFQUNFLG1DQUFBO0FDckJOIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtYWx0LXNoYWRlKTtcblxuICAtLXBhZ2UtaGVhZGVycy1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmtlc3QtcmdiKSwgMC40KTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uYXBwLXNpZGVtZW51IHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIH1cblxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICB9XG5cbiAgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjE1KTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICYgKyAudXNlci1kZXRhaWxzLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICB9XG4gIH1cblxuICAudXNlci1pbmZvLXdyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLnVzZXItbmFtZSB7XG4gICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xuICAgIH1cblxuICAgIC51c2VyLWhhbmRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gIH1cblxuICAudXNlci1zdGF0cy13cmFwcGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAudXNlci1zdGF0LXZhbHVlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAudXNlci1zdGF0LW5hbWUge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG5cbiAgLy8gTWVudSBsaXN0IGl0ZW1zXG4gIGlvbi1saXN0IHtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKTtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gICAgLS1pb24taXRlbS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgIC0tY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYiksIDAuNik7XG5cbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTRweCA4cHggLTJweCB2YXIoLS1wYWdlLWhlYWRlcnMtc2hhZG93LWNvbG9yKTtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIH1cblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtYWx0LXNoYWRlKTtcbiAgLS1wYWdlLWhlYWRlcnMtc2hhZG93LWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrZXN0LXJnYiksIDAuNCk7XG59XG5cbi5hcHAtc2lkZW1lbnUgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbn1cbi5hcHAtc2lkZW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uYXBwLXNpZGVtZW51IC51c2VyLWRldGFpbHMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hcHAtc2lkZW1lbnUgLnVzZXItZGV0YWlscy13cmFwcGVyICsgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbi5hcHAtc2lkZW1lbnUgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uYXBwLXNpZGVtZW51IC51c2VyLWluZm8td3JhcHBlciAudXNlci1uYW1lIHtcbiAgbWFyZ2luOiAwcHggMHB4IDVweDtcbn1cbi5hcHAtc2lkZW1lbnUgLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWhhbmRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmFwcC1zaWRlbWVudSAudXNlci1zdGF0cy13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFwcC1zaWRlbWVudSAudXNlci1zdGF0cy13cmFwcGVyIC51c2VyLXN0YXQtdmFsdWUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5hcHAtc2lkZW1lbnUgLnVzZXItc3RhdHMtd3JhcHBlciAudXNlci1zdGF0LW5hbWUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmFwcC1zaWRlbWVudSBpb24tbGlzdCB7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKTtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uYXBwLXNpZGVtZW51IGlvbi1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIC0tY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYiksIDAuNik7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAtNHB4IDhweCAtMnB4IHZhcigtLXBhZ2UtaGVhZGVycy1zaGFkb3ctY29sb3IpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5hcHAtc2lkZW1lbnUgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5hcHAtc2lkZW1lbnUgaW9uLWxpc3QgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/side-menu/styles/side-menu.shell.scss":
  /*!*******************************************************!*\
    !*** ./src/app/side-menu/styles/side-menu.shell.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSideMenuStylesSideMenuShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.user-avatar {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), 0.15);\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9zaWRlLW1lbnUvc3R5bGVzL3NpZGUtbWVudS5zaGVsbC5zY3NzIiwic3JjL2FwcC9zaWRlLW1lbnUvc3R5bGVzL3NpZGUtbWVudS5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0VBQUE7RUFDQSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWF2YXRhciB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjE1KTtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1hdmF0YXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC4xNSk7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/dayana/work/ionic/templates/ion4fullpwa/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map