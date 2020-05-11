function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-details-travel-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/travel/details/travel-details.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/travel/details/travel-details.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTravelDetailsTravelDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories/travel\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Travel Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"travel-details-content\">\n  <ion-row class=\"image-row\">\n    <ion-col size=\"12\">\n      <app-image-shell [display]=\"'cover'\" animation=\"spinner\" class=\"add-overlay details-image\" [src]=\"details?.image\">\n        <app-aspect-ratio [ratio]=\"{w:64, h:50}\">\n          <div class=\"icon-wrapper\">\n            <app-aspect-ratio [ratio]=\"{w: 47, h: 25}\">\n              <app-image-shell [src]=\"details?.icon\" class=\"details-icon\"></app-image-shell>\n            </app-aspect-ratio>\n          </div>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"description-row\">\n    <ion-col size=\"12\">\n      <h3 class=\"details-name\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.name?.concat(' - ', details?.category)\"></app-text-shell>\n      </h3>\n      <p class=\"details-short-description\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.shortDescription\"></app-text-shell>\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <div class=\"details-score\">\n        <div class=\"score-item\">\n          <ion-icon class=\"score-icon\" src=\"./assets/custom-icons/travel/star.svg\"></ion-icon>\n          <div class=\"score-value\">\n            <app-text-shell [data]=\"details?.rating\"></app-text-shell>\n          </div>\n        </div>\n        <div class=\"score-item\">\n          <ion-icon class=\"score-icon\" src=\"./assets/custom-icons/travel/comments.svg\"></ion-icon>\n          <div class=\"score-value\">\n            <app-text-shell [data]=\"details?.reviewsCount\"></app-text-shell>\n          </div>\n        </div>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-row class=\"details-tags\">\n        <ion-col class=\"tag-wrapper\" *ngFor=\"let tag of details?.tags\">\n          <span class=\"item-tag\">\n            <app-text-shell [data]=\"tag\"></app-text-shell>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n      <p class=\"details-description\">\n        <app-text-shell animation=\"bouncing\" lines=\"6\" [data]=\"details?.fullDescription\"></app-text-shell>\n      </p>\n    </ion-col>\n  </ion-row>\n  <div class=\"open-hours-wrapper\">\n    <h3 class=\"detail-title\">When?</h3>\n    <ul class=\"schedules-list\">\n      <li class=\"open-hour-item\" *ngFor=\"let schedule of details?.openHours\">\n        <div class=\"schedule-outer\">\n          <span class=\"schedule-day\">\n            <app-text-shell [data]=\"schedule.day\"></app-text-shell>\n          </span>\n          <div class=\"schedule-hours\">\n            <ng-container *ngIf=\"schedule.open\">\n              <span class=\"schedule-value\">\n                <app-text-shell [data]=\"schedule.hourFrom\"></app-text-shell>\n              </span>\n              <span class=\"schedule-separator\">to</span>\n              <span class=\"schedule-value\">\n                <app-text-shell [data]=\"schedule.hourTo\"></app-text-shell>\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"!schedule.open\">\n              <ion-badge class=\"schedule-closed\" color=\"medium\">closed</ion-badge>\n            </ng-container>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"location-wrapper\">\n    <div class=\"location-header\">\n      <h3 class=\"detail-title\">Where?</h3>\n      <span class=\"location-address\">\n        <app-text-shell [data]=\"details.location?.address\"></app-text-shell>\n      </span>\n    </div>\n    <!-- <app-aspect-ratio [ratio]=\"{w: 64, h: 30}\">\n      <app-image-shell [src]=\"'https://maps.googleapis.com/maps/api/staticmap?center=' + details.location?.latlng + '&zoom=15&size=640x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xd9453a%7C' + details.location?.latlng + '&key=YOUR_KEY_HERE'\">\n      </app-image-shell>\n    </app-aspect-ratio> -->\n    <app-aspect-ratio [ratio]=\"{w: 64, h: 30}\">\n      <app-image-shell class=\"location-image\" animation=\"spinner\" [src]=\"details.location?.mapImage\"></app-image-shell>\n    </app-aspect-ratio>\n  </div>\n  <div class=\"suggested-places-wrapper\" *ngIf=\"details?.whereToStay && details.whereToStay.length > 0\">\n    <h3 class=\"detail-alt-title\">Need a place to stay?</h3>\n    <ion-row class=\"suggested-places-row\">\n      <ion-col size=\"4\" class=\"suggested-place\" *ngFor=\"let placeToStay of details?.whereToStay\">\n        <app-aspect-ratio [ratio]=\"{w: 18, h: 23}\">\n          <app-image-shell class=\"place-picture\" animation=\"spinner\" [src]=\"placeToStay.picture\"></app-image-shell>\n        </app-aspect-ratio>\n        <div class=\"place-details\">\n          <h5 class=\"place-name\">\n            <app-text-shell [data]=\"placeToStay.name\"></app-text-shell>\n          </h5>\n          <div class=\"place-rating\">\n            <ion-icon class=\"rating-icon\" name=\"star-outline\"></ion-icon>\n            <div class=\"rating-value\">\n              <app-text-shell [data]=\"placeToStay.rating\"></app-text-shell>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"suggested-places-wrapper\" *ngIf=\"details?.whereToEat && details.whereToEat.length > 0\">\n    <h3 class=\"detail-alt-title\">Grab a bite?</h3>\n    <ion-row class=\"suggested-places-row\">\n      <ion-col size=\"4\" class=\"suggested-place\" *ngFor=\"let placeToEat of details?.whereToEat\">\n        <app-aspect-ratio [ratio]=\"{w: 18, h: 23}\">\n          <app-image-shell class=\"place-picture\" animation=\"spinner\" [src]=\"placeToEat.picture\"></app-image-shell>\n        </app-aspect-ratio>\n        <div class=\"place-details\">\n          <h5 class=\"place-name\">\n            <app-text-shell [data]=\"placeToEat.name\"></app-text-shell>\n          </h5>\n          <div class=\"place-rating\">\n            <ion-icon class=\"rating-icon\" name=\"star-outline\"></ion-icon>\n            <div class=\"rating-value\">\n              <app-text-shell [data]=\"placeToEat.rating\"></app-text-shell>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"related-activities-wrapper\" *ngIf=\"details?.relatedActivities && details.relatedActivities.length > 0\">\n    <h3 class=\"detail-alt-title\">More activities?</h3>\n    <ion-row class=\"related-activity\" *ngFor=\"let relatedActivity of details?.relatedActivities\">\n      <ion-col size=\"12\">\n        <app-image-shell [display]=\"'cover'\" animation=\"spinner\" class=\"related-activity-picture\" [src]=\"relatedActivity.picture\">\n          <app-aspect-ratio [ratio]=\"{w:64, h:23}\">\n          </app-aspect-ratio>\n        </app-image-shell>\n      </ion-col>\n      <ion-col size=\"12\" class=\"activity-details\">\n        <h5 class=\"activity-name\">\n          <app-text-shell [data]=\"relatedActivity.name\"></app-text-shell>\n        </h5>\n        <span class=\"activity-category\">\n          <app-text-shell [data]=\"relatedActivity.category\"></app-text-shell>\n        </span>\n        <div class=\"activity-rating\">\n          <ion-icon class=\"rating-icon\" name=\"star-outline\"></ion-icon>\n          <div class=\"rating-value\">\n            <app-text-shell [data]=\"relatedActivity.rating\"></app-text-shell>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
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

    var DataStore =
    /*#__PURE__*/
    function () {
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
  "./src/app/travel/details/styles/travel-details.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/travel/details/styles/travel-details.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTravelDetailsStylesTravelDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-tags-vertical-gutter: 2px;\n  --page-tags-horizontal-gutter: 4px;\n  --page-places-gutter: 5px;\n  --page-color: #00AFFF;\n}\n\n.travel-details-content {\n  --background: var(--page-background);\n}\n\n.travel-details-content .image-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.travel-details-content .image-row .icon-wrapper {\n  margin: 0px 15%;\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.travel-details-content .description-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.travel-details-content .description-row .details-name {\n  margin: 0px;\n  font-size: 20px;\n}\n\n.travel-details-content .description-row .details-short-description {\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: var(--page-margin);\n  font-size: 14px;\n}\n\n.travel-details-content .description-row .details-score {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  margin-bottom: var(--page-margin);\n}\n\n.travel-details-content .description-row .details-score .score-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.travel-details-content .description-row .details-score .score-item:not(:last-child) {\n  padding-right: var(--page-margin);\n}\n\n.travel-details-content .description-row .details-score .score-item .score-icon {\n  font-size: 24px;\n  color: var(--ion-color-dark-tint);\n}\n\n.travel-details-content .description-row .details-score .score-item .score-value {\n  font-size: 16px;\n  margin-left: 4px;\n}\n\n.travel-details-content .description-row .details-tags {\n  --ion-grid-column-padding: 0px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: calc(var(--page-tags-vertical-gutter) * -1);\n}\n\n.travel-details-content .description-row .details-tags .tag-wrapper {\n  padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter) var(--page-tags-vertical-gutter) 0px;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.travel-details-content .description-row .details-tags .tag-wrapper:last-child {\n  padding-right: 0px;\n}\n\n.travel-details-content .description-row .details-tags .item-tag {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-light-shade);\n  padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter);\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.travel-details-content .description-row .details-description {\n  margin: calc(var(--page-margin) * 2) 0px 0px;\n  line-height: 1.3;\n  font-size: 14px;\n}\n\n.travel-details-content .detail-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark-tint);\n  margin: 0px 0px var(--page-margin);\n}\n\n.travel-details-content .open-hours-wrapper {\n  padding: 0px var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item + .open-hour-item {\n  margin-top: calc(var(--page-margin) / 2);\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 75%;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-day {\n  display: block;\n  padding-right: var(--page-margin);\n  width: 40%;\n  font-size: 14px;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-separator {\n  margin: 0px var(--page-margin);\n  line-height: 1;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value {\n  -webkit-box-flex: 0;\n          flex: 0 1 25%;\n  font-weight: 500;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value:first-child {\n  text-align: start;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value:last-child {\n  text-align: end;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-closed {\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\n.travel-details-content .location-wrapper {\n  padding: 0px 0px calc(var(--page-margin) * 2);\n}\n\n.travel-details-content .location-wrapper .location-header {\n  padding: 0px var(--page-margin) 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.travel-details-content .location-wrapper .detail-title {\n  margin-bottom: 5px;\n}\n\n.travel-details-content .location-wrapper .location-address {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.travel-details-content .detail-alt-title {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px 0px var(--page-margin);\n}\n\n.travel-details-content .suggested-places-wrapper {\n  padding: 0px var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row {\n  --ion-grid-column-padding: var(--page-places-gutter);\n  margin-left: calc(var(--page-places-gutter) * -1);\n  margin-right: calc(var(--page-places-gutter) * -1);\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-name {\n  font-size: 12px;\n  font-weight: 400;\n  margin: calc(var(--page-margin) / 2) 0px 5px;\n  text-align: center;\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating .rating-icon {\n  color: var(--page-color);\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating .rating-value {\n  color: var(--page-color);\n  font-size: 14px;\n  margin-left: 4px;\n}\n\n.travel-details-content .related-activities-wrapper {\n  padding: 0px 0px calc(var(--page-margin) * 2);\n}\n\n.travel-details-content .related-activities-wrapper .related-activity {\n  --ion-grid-column-padding: 0px;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity:not(:last-child) {\n  margin-bottom: var(--page-margin);\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details {\n  text-align: center;\n  position: relative;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-name {\n  margin: 0px;\n  margin-top: 5px;\n  font-size: 14px;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-category {\n  display: block;\n  margin-top: 2px;\n  font-size: 12px;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: 5px;\n  margin-right: var(--page-margin);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating .rating-icon {\n  color: var(--page-color);\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating .rating-value {\n  color: var(--page-color);\n  font-size: 14px;\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC90cmF2ZWwvZGV0YWlscy9zdHlsZXMvdHJhdmVsLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC90cmF2ZWwvZGV0YWlscy9zdHlsZXMvdHJhdmVsLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUVBLHFCQUFBO0FDSEY7O0FET0E7RUFDRSxvQ0FBQTtBQ0pGOztBRE1FO0VBQ0UsOEJBQUE7QUNKSjs7QURNSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNKTjs7QURRRTtFQUNFLDhCQUFBO0VBRUEsMkVBQUE7QUNQSjs7QURTSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDUE47O0FEVUk7RUFDRSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ1JOOztBRFdJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLGlDQUFBO0FDVE47O0FEV007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDVFI7O0FEV1E7RUFDRSxpQ0FBQTtBQ1RWOztBRFlRO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0FDVlY7O0FEYVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNYVjs7QURnQkk7RUFDRSw4QkFBQTtFQUVBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx1REFBQTtBQ2ZOOztBRGlCTTtFQUNFLGlIQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDZlI7O0FEaUJRO0VBQ0Usa0JBQUE7QUNmVjs7QURtQk07RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSw4Q0FBQTtFQUNBLDRFQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDakJSOztBRHFCSTtFQUNFLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbkJOOztBRHVCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7QUNyQko7O0FEd0JFO0VBQ0UsNERBQUE7QUN0Qko7O0FEd0JJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3RCTjs7QUR3Qk07RUFDRSxlQUFBO0VBQ0EsbUNBQUE7QUN0QlI7O0FEd0JRO0VBQ0Usd0NBQUE7QUN0QlY7O0FEeUJRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxVQUFBO0FDdkJWOztBRHlCVTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDdkJaOztBRDBCVTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDeEJaOztBRDBCWTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ3hCZDs7QUQyQlk7RUFDRSxtQkFBQTtVQUFBLGFBQUE7RUFDQSxnQkFBQTtBQ3pCZDs7QUQyQmM7RUFDRSxpQkFBQTtBQ3pCaEI7O0FEMkJjO0VBQ0UsZUFBQTtBQ3pCaEI7O0FENkJZO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDM0JkOztBRG1DRTtFQUNFLDZDQUFBO0FDakNKOztBRG1DSTtFQUNFLG1DQUFBO0VBQ0EsMkNBQUE7QUNqQ047O0FEb0NJO0VBQ0Usa0JBQUE7QUNsQ047O0FEcUNJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ25DTjs7QUR1Q0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtBQ3JDSjs7QUR3Q0U7RUFDRSw0REFBQTtBQ3RDSjs7QUR3Q0k7RUFDRSxvREFBQTtFQUVBLGlEQUFBO0VBQ0Esa0RBQUE7QUN2Q047O0FEeUNNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ3ZDUjs7QUR5Q1E7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDdkNWOztBRHlDVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUN2Q1o7O0FEMENVO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUN4Q1o7O0FEMENZO0VBQ0Usd0JBQUE7QUN4Q2Q7O0FEMkNZO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUN6Q2Q7O0FEaURFO0VBQ0UsNkNBQUE7QUMvQ0o7O0FEaURJO0VBQ0UsOEJBQUE7QUMvQ047O0FEaURNO0VBQ0UsaUNBQUE7QUMvQ1I7O0FEa0RNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ2hEUjs7QURrRFE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNoRFY7O0FEbURRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDakRWOztBRG9EUTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ25EVjs7QURxRFU7RUFDRSx3QkFBQTtBQ25EWjs7QURzRFU7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3BEWiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbC9kZXRhaWxzL3N0eWxlcy90cmF2ZWwtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXI6IDJweDtcbiAgLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXI6IDRweDtcbiAgLS1wYWdlLXBsYWNlcy1ndXR0ZXI6IDVweDtcblxuICAtLXBhZ2UtY29sb3I6ICMwMEFGRkY7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLmltYWdlLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgLmljb24td3JhcHBlciB7XG4gICAgICBtYXJnaW46IDBweCAxNSU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5kZXRhaWxzLW5hbWUge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLmRldGFpbHMtc2hvcnQtZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1zY29yZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICAuc2NvcmUtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NvcmUtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY29yZS12YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlscy10YWdzIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpICogLTEpO1xuXG4gICAgICAudGFnLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIDBweDtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLXRhZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIDBweCAwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLm9wZW4taG91cnMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLnNjaGVkdWxlcy1saXN0IHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgLm9wZW4taG91ci1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcblxuICAgICAgICAmICsgLm9wZW4taG91ci1pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjaGVkdWxlLW91dGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG5cbiAgICAgICAgICAuc2NoZWR1bGUtZGF5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2NoZWR1bGUtaG91cnMge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLnNjaGVkdWxlLXNlcGFyYXRvciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zY2hlZHVsZS12YWx1ZSB7XG4gICAgICAgICAgICAgIGZsZXg6IDAgMSAyNSU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjaGVkdWxlLWNsb3NlZCB7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG9jYXRpb24td3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLmxvY2F0aW9uLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgfVxuXG4gICAgLmRldGFpbC10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLmxvY2F0aW9uLWFkZHJlc3Mge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlsLWFsdC10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLnN1Z2dlc3RlZC1wbGFjZXMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLnN1Z2dlc3RlZC1wbGFjZXMtcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtcGxhY2VzLWd1dHRlcik7XG5cbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtcGxhY2VzLWd1dHRlcikgKiAtMSk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1wbGFjZXMtZ3V0dGVyKSAqIC0xKTtcblxuICAgICAgLnN1Z2dlc3RlZC1wbGFjZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAgICAgLnBsYWNlLWRldGFpbHMge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgIC5wbGFjZS1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4IDVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGxhY2UtcmF0aW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5yYXRpbmctaWNvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJhdGluZy12YWx1ZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLnJlbGF0ZWQtYWN0aXZpdHkge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICB9XG5cbiAgICAgIC5hY3Rpdml0eS1kZXRhaWxzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmFjdGl2aXR5LW5hbWUge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZpdHktY2F0ZWdvcnkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZpdHktcmF0aW5nIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIC5yYXRpbmctaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJhdGluZy12YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXI6IDJweDtcbiAgLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXI6IDRweDtcbiAgLS1wYWdlLXBsYWNlcy1ndXR0ZXI6IDVweDtcbiAgLS1wYWdlLWNvbG9yOiAjMDBBRkZGO1xufVxuXG4udHJhdmVsLWRldGFpbHMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5pbWFnZS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuaW1hZ2Utcm93IC5pY29uLXdyYXBwZXIge1xuICBtYXJnaW46IDBweCAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1zaG9ydC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1zY29yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1zY29yZSAuc2NvcmUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXNjb3JlIC5zY29yZS1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXNjb3JlIC5zY29yZS1pdGVtIC5zY29yZS1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXNjb3JlIC5zY29yZS1pdGVtIC5zY29yZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtdGFncyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgKiAtMSk7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXRhZ3MgLnRhZy13cmFwcGVyIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgdmFyKC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyKSB2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSAwcHg7XG4gIGZsZXgtZ3JvdzogMDtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtdGFncyAudGFnLXdyYXBwZXI6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtdGFncyAuaXRlbS10YWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSAwcHggMHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGV0YWlsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSArIC5vcGVuLWhvdXItaXRlbSB7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gLnNjaGVkdWxlLW91dGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNzUlO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtZGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgd2lkdGg6IDQwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtaG91cnMge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtaG91cnMgLnNjaGVkdWxlLXNlcGFyYXRvciB7XG4gIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gLnNjaGVkdWxlLW91dGVyIC5zY2hlZHVsZS1ob3VycyAuc2NoZWR1bGUtdmFsdWUge1xuICBmbGV4OiAwIDEgMjUlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtaG91cnMgLnNjaGVkdWxlLXZhbHVlOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gLnNjaGVkdWxlLW91dGVyIC5zY2hlZHVsZS1ob3VycyAuc2NoZWR1bGUtdmFsdWU6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIC5zY2hlZHVsZS1jbG9zZWQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5sb2NhdGlvbi13cmFwcGVyIC5sb2NhdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5sb2NhdGlvbi13cmFwcGVyIC5kZXRhaWwtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciAubG9jYXRpb24tYWRkcmVzcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbC1hbHQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuc3VnZ2VzdGVkLXBsYWNlcy13cmFwcGVyIC5zdWdnZXN0ZWQtcGxhY2VzLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtcGxhY2VzLWd1dHRlcik7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtcGxhY2VzLWd1dHRlcikgKiAtMSk7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLXBsYWNlcy1ndXR0ZXIpICogLTEpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnN1Z2dlc3RlZC1wbGFjZXMtd3JhcHBlciAuc3VnZ2VzdGVkLXBsYWNlcy1yb3cgLnN1Z2dlc3RlZC1wbGFjZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuc3VnZ2VzdGVkLXBsYWNlcy13cmFwcGVyIC5zdWdnZXN0ZWQtcGxhY2VzLXJvdyAuc3VnZ2VzdGVkLXBsYWNlIC5wbGFjZS1kZXRhaWxzIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnN1Z2dlc3RlZC1wbGFjZXMtd3JhcHBlciAuc3VnZ2VzdGVkLXBsYWNlcy1yb3cgLnN1Z2dlc3RlZC1wbGFjZSAucGxhY2UtZGV0YWlscyAucGxhY2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIgLnN1Z2dlc3RlZC1wbGFjZXMtcm93IC5zdWdnZXN0ZWQtcGxhY2UgLnBsYWNlLWRldGFpbHMgLnBsYWNlLXJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnN1Z2dlc3RlZC1wbGFjZXMtd3JhcHBlciAuc3VnZ2VzdGVkLXBsYWNlcy1yb3cgLnN1Z2dlc3RlZC1wbGFjZSAucGxhY2UtZGV0YWlscyAucGxhY2UtcmF0aW5nIC5yYXRpbmctaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIgLnN1Z2dlc3RlZC1wbGFjZXMtcm93IC5zdWdnZXN0ZWQtcGxhY2UgLnBsYWNlLWRldGFpbHMgLnBsYWNlLXJhdGluZyAucmF0aW5nLXZhbHVlIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIgLnJlbGF0ZWQtYWN0aXZpdHkge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIgLnJlbGF0ZWQtYWN0aXZpdHk6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciAucmVsYXRlZC1hY3Rpdml0eSAuYWN0aXZpdHktZGV0YWlscyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtYWN0aXZpdGllcy13cmFwcGVyIC5yZWxhdGVkLWFjdGl2aXR5IC5hY3Rpdml0eS1kZXRhaWxzIC5hY3Rpdml0eS1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtYWN0aXZpdGllcy13cmFwcGVyIC5yZWxhdGVkLWFjdGl2aXR5IC5hY3Rpdml0eS1kZXRhaWxzIC5hY3Rpdml0eS1jYXRlZ29yeSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciAucmVsYXRlZC1hY3Rpdml0eSAuYWN0aXZpdHktZGV0YWlscyAuYWN0aXZpdHktcmF0aW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciAucmVsYXRlZC1hY3Rpdml0eSAuYWN0aXZpdHktZGV0YWlscyAuYWN0aXZpdHktcmF0aW5nIC5yYXRpbmctaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciAucmVsYXRlZC1hY3Rpdml0eSAuYWN0aXZpdHktZGV0YWlscyAuYWN0aXZpdHktcmF0aW5nIC5yYXRpbmctdmFsdWUge1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/travel/details/styles/travel-details.shell.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/travel/details/styles/travel-details.shell.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTravelDetailsStylesTravelDetailsShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --shell-color: #00AFFF;\n  --shell-color-rgb: 0,175,255;\n}\n\napp-image-shell.details-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .40);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.details-icon {\n  --image-shell-loading-background: transparent;\n}\n\n.details-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 20px;\n}\n\n.details-short-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 80%;\n}\n\n.details-short-description > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.score-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.score-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px;\n}\n\n.item-tag > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.details-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n}\n\n.schedule-day > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 90%;\n}\n\n.schedule-day > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.schedule-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 100%;\n}\n\n.schedule-value > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.location-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.location-address > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\napp-image-shell.location-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.place-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .05);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .15);\n}\n\n.place-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n}\n\n.rating-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.rating-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\napp-image-shell.related-activity-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .05);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .15);\n}\n\n.activity-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 25%;\n  margin: 0px auto;\n}\n\n.activity-name > app-text-shell.text-loaded {\n  max-width: inherit;\n  margin: 0px;\n}\n\n.activity-category > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n  max-width: 45%;\n  margin: 0px auto;\n}\n\n.activity-category > app-text-shell.text-loaded {\n  max-width: inherit;\n  margin: 0px;\n}\n\n.rating-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.rating-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC90cmF2ZWwvZGV0YWlscy9zdHlsZXMvdHJhdmVsLWRldGFpbHMuc2hlbGwuc2NzcyIsInNyYy9hcHAvdHJhdmVsL2RldGFpbHMvc3R5bGVzL3RyYXZlbC1kZXRhaWxzLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0FDREY7O0FEV0E7RUFDRSxtRUFBQTtFQUNBLHNFQUFBO0VBQ0EsOERBQUE7QUNSRjs7QURXQTtFQUNFLDZDQUFBO0FDUkY7O0FEV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FDUkY7O0FEV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFVFO0VBQ0Usa0JBQUE7QUNSSjs7QURZQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDVEY7O0FEV0U7RUFDRSxjQUFBO0FDVEo7O0FEYUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1ZGOztBRFlFO0VBQ0UsY0FBQTtBQ1ZKOztBRGNBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQ1hGOztBRGNBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNYRjs7QURhRTtFQUNFLGtCQUFBO0FDWEo7O0FEZUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1pGOztBRGNFO0VBQ0Usa0JBQUE7QUNaSjs7QURnQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ2JGOztBRGVFO0VBQ0Usa0JBQUE7QUNiSjs7QURpQkE7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0FDZEY7O0FEaUJBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQ2RGOztBRGlCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUNkRjs7QURpQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ2RGOztBRGdCRTtFQUNFLGNBQUE7QUNkSjs7QURrQkE7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0FDZkY7O0FEa0JBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2ZGOztBRGlCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ2ZKOztBRG1CQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNoQkY7O0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDaEJKOztBRG9CQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDakJGOztBRG1CRTtFQUNFLGNBQUE7QUNqQkoiLCJmaWxlIjoic3JjL2FwcC90cmF2ZWwvZGV0YWlscy9zdHlsZXMvdHJhdmVsLWRldGFpbHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjMDBBRkZGO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMCwxNzUsMjU1O1xufVxuXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxuOmhvc3QoLmlzLXNoZWxsKSB7XG4gIC8vIGlvbi1jb250ZW50IHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLmRldGFpbHMtaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNDApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmRldGFpbHMtaWNvbiB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmRldGFpbHMtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGV0YWlscy1zaG9ydC1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLnNjb3JlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5kZXRhaWxzLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5zY2hlZHVsZS1kYXkgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5zY2hlZHVsZS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5sb2NhdGlvbi1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwubG9jYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnBsYWNlLXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbn1cblxuLnBsYWNlLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbn1cblxuLnJhdGluZy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjA1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLnJlbGF0ZWQtYWN0aXZpdHktcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xufVxuXG4uYWN0aXZpdHktbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDI1JTtcbiAgbWFyZ2luOiAwcHggYXV0bztcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cblxuLmFjdGl2aXR5LWNhdGVnb3J5ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNDUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuXG4ucmF0aW5nLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjMDBBRkZGO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMCwxNzUsMjU1O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGV0YWlscy1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC40MCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGV0YWlscy1pY29uIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZGV0YWlscy1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5kZXRhaWxzLXNob3J0LWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuLmRldGFpbHMtc2hvcnQtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLnNjb3JlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5zY29yZS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG4uaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uc2NoZWR1bGUtZGF5ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogOTAlO1xufVxuLnNjaGVkdWxlLWRheSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4uc2NoZWR1bGUtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnNjaGVkdWxlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5sb2NhdGlvbi1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xufVxuLmxvY2F0aW9uLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmxvY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5wbGFjZS1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjA1KTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG59XG5cbi5wbGFjZS1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5yYXRpbmctdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuLnJhdGluZy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZWxhdGVkLWFjdGl2aXR5LXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbn1cblxuLmFjdGl2aXR5LW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiAyNSU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uYWN0aXZpdHktbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFjdGl2aXR5LWNhdGVnb3J5ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNDUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLmFjdGl2aXR5LWNhdGVnb3J5ID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucmF0aW5nLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5yYXRpbmctdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/travel/details/travel-details.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/travel/details/travel-details.module.ts ***!
    \*********************************************************/

  /*! exports provided: TravelDetailsPageModule */

  /***/
  function srcAppTravelDetailsTravelDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelDetailsPageModule", function () {
      return TravelDetailsPageModule;
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


    var _travel_details_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./travel-details.page */
    "./src/app/travel/details/travel-details.page.ts");
    /* harmony import */


    var _travel_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./travel-details.resolver */
    "./src/app/travel/details/travel-details.resolver.ts");
    /* harmony import */


    var _travel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../travel.service */
    "./src/app/travel/travel.service.ts");

    var routes = [{
      path: '',
      component: _travel_details_page__WEBPACK_IMPORTED_MODULE_8__["TravelDetailsPage"],
      resolve: {
        data: _travel_details_resolver__WEBPACK_IMPORTED_MODULE_9__["TravelDetailsResolver"]
      }
    }];

    var TravelDetailsPageModule = function TravelDetailsPageModule() {
      _classCallCheck(this, TravelDetailsPageModule);
    };

    TravelDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      declarations: [_travel_details_page__WEBPACK_IMPORTED_MODULE_8__["TravelDetailsPage"]],
      providers: [_travel_details_resolver__WEBPACK_IMPORTED_MODULE_9__["TravelDetailsResolver"], _travel_service__WEBPACK_IMPORTED_MODULE_10__["TravelService"]]
    })], TravelDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/travel/details/travel-details.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/travel/details/travel-details.page.ts ***!
    \*******************************************************/

  /*! exports provided: TravelDetailsPage */

  /***/
  function srcAppTravelDetailsTravelDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelDetailsPage", function () {
      return TravelDetailsPage;
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

    var TravelDetailsPage =
    /*#__PURE__*/
    function () {
      function TravelDetailsPage(route) {
        _classCallCheck(this, TravelDetailsPage);

        this.route = route;
      }

      _createClass(TravelDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.data.subscribe(function (resolvedRouteData) {
            var detailsDataStore = resolvedRouteData['data'];
            detailsDataStore.state.subscribe(function (state) {
              _this2.details = state;
            }, function (error) {});
          }, function (error) {});
        }
      }, {
        key: "isShell",
        get: function get() {
          return this.details && this.details.isShell ? true : false;
        }
      }]);

      return TravelDetailsPage;
    }();

    TravelDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TravelDetailsPage.prototype, "isShell", null);
    TravelDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-travel-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./travel-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/travel/details/travel-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/travel-details.page.scss */
      "./src/app/travel/details/styles/travel-details.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/travel-details.shell.scss */
      "./src/app/travel/details/styles/travel-details.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], TravelDetailsPage);
    /***/
  },

  /***/
  "./src/app/travel/details/travel-details.resolver.ts":
  /*!***********************************************************!*\
    !*** ./src/app/travel/details/travel-details.resolver.ts ***!
    \***********************************************************/

  /*! exports provided: TravelDetailsResolver */

  /***/
  function srcAppTravelDetailsTravelDetailsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelDetailsResolver", function () {
      return TravelDetailsResolver;
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


    var _travel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../travel.service */
    "./src/app/travel/travel.service.ts");

    var TravelDetailsResolver =
    /*#__PURE__*/
    function () {
      function TravelDetailsResolver(travelService) {
        _classCallCheck(this, TravelDetailsResolver);

        this.travelService = travelService;
      }

      _createClass(TravelDetailsResolver, [{
        key: "resolve",
        value: function resolve() {
          var dataSource = this.travelService.getDetailsDataSource();
          var dataStore = this.travelService.getDetailsStore(dataSource);
          return dataStore;
        }
      }]);

      return TravelDetailsResolver;
    }();

    TravelDetailsResolver.ctorParameters = function () {
      return [{
        type: _travel_service__WEBPACK_IMPORTED_MODULE_2__["TravelService"]
      }];
    };

    TravelDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_travel_service__WEBPACK_IMPORTED_MODULE_2__["TravelService"]])], TravelDetailsResolver);
    /***/
  }
}]);
//# sourceMappingURL=travel-details-travel-details-module-es5.js.map