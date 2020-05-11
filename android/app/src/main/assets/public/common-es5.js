function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticCcbda579Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-729ec402.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-729ec402.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmIndex729ec402Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return sanitizeDOMString;
    });
    /**
     * Does a simple sanitization of all elements
     * in an untrusted string
     */


    var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
      try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
          return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */


        var documentFragment = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */

        blockedTags.forEach(function (blockedTag) {
          var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

          for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            var element = getElementsToRemove[elementIndex];

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            /**
             * We still need to sanitize
             * the children of this element
             * as they are left behind
             */


            var childElements = getElementChildren(element);
            /* tslint:disable-next-line */

            for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes

        var dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
          sanitizeElement(dfChildren[childIndex]);
        } // Append document fragment to div


        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

        var getInnerDiv = fragmentDiv.querySelector('div');
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        console.error(err);
        return '';
      }
    };
    /**
     * Clean up current element based on allowed attributes
     * and then recursively dig down into any child elements to
     * clean those up as well
     */


    var sanitizeElement = function sanitizeElement(element) {
      // IE uses childNodes, so ignore nodes that are not elements
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }

      for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name; // remove non-allowed attribs

        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        } // clean up any allowed attribs
        // that attempt to do any JS funny-business


        var attributeValue = attribute.value;
        /* tslint:disable-next-line */

        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
          element.removeAttribute(attributeName);
        }
      }
      /**
       * Sanitize any nested children
       */


      var childElements = getElementChildren(element);
      /* tslint:disable-next-line */

      for (var _i = 0; _i < childElements.length; _i++) {
        sanitizeElement(childElements[_i]);
      }
    };
    /**
     * IE doesn't always support .children
     * so we revert to .childNodes instead
     */


    var getElementChildren = function getElementChildren(el) {
      return el.children != null ? el.children : el.childNodes;
    };

    var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL =
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./src/app/deals/deals.service.ts":
  /*!****************************************!*\
    !*** ./src/app/deals/deals.service.ts ***!
    \****************************************/

  /*! exports provided: DealsService */

  /***/
  function srcAppDealsDealsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsService", function () {
      return DealsService;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./listing/deals-listing.model */
    "./src/app/deals/listing/deals-listing.model.ts");
    /* harmony import */


    var _details_deals_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details/deals-details.model */
    "./src/app/deals/details/deals-details.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var DealsService =
    /*#__PURE__*/
    function () {
      function DealsService(http) {
        _classCallCheck(this, DealsService);

        this.http = http;
      }

      _createClass(DealsService, [{
        key: "getListingDataSource",
        value: function getListingDataSource() {
          var _this = this;

          return this.http.get('./assets/sample-data/deals/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (listingData) {
            // using rest operator to divide the data https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb
            var items = listingData.items,
                otherData = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](listingData, ["items"]);
            var itemsWithRelativeDates = items.map(function (dealItem, index) {
              // Relative date (better to showcase UI micro-interactions)
              return Object.assign({}, dealItem, {
                expirationDate: _this.relativeDates[index]
              });
            }); // using spread operator to concat the data https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb

            return Object.assign({}, otherData, {
              items: itemsWithRelativeDates
            });
          }));
        }
      }, {
        key: "getListingStore",
        value: function getListingStore(dataSource) {
          // Use cache if available
          if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_4__["DealsListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.listingDataStore.load(dataSource);
          }

          return this.listingDataStore;
        }
      }, {
        key: "getDetailsDataSource",
        value: function getDetailsDataSource() {
          return this.http.get('./assets/sample-data/deals/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (detailsData) {
            var expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_3__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss');
            return Object.assign({}, detailsData, {
              expirationDate: expirationDate
            });
          }));
        }
      }, {
        key: "getDetailsStore",
        value: function getDetailsStore(dataSource) {
          // Initialize the model specifying that it is a shell model
          var shellModel = new _details_deals_details_model__WEBPACK_IMPORTED_MODULE_5__["DealsDetailsModel"]();
          this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

          this.detailsDataStore.load(dataSource);
          return this.detailsDataStore;
        }
      }, {
        key: "relativeDates",
        get: function get() {
          return [dayjs__WEBPACK_IMPORTED_MODULE_3__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss'), dayjs__WEBPACK_IMPORTED_MODULE_3__().add(7, 'day').format('MM/DD/YYYY'), dayjs__WEBPACK_IMPORTED_MODULE_3__().subtract(1, 'month').format('MM/DD/YYYY'), dayjs__WEBPACK_IMPORTED_MODULE_3__().add(2, 'month').format('MM/DD/YYYY')];
        }
      }]);

      return DealsService;
    }();

    DealsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }];
    };

    DealsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])], DealsService);
    /***/
  },

  /***/
  "./src/app/deals/details/deals-details.model.ts":
  /*!******************************************************!*\
    !*** ./src/app/deals/details/deals-details.model.ts ***!
    \******************************************************/

  /*! exports provided: DealsDetailsModel */

  /***/
  function srcAppDealsDetailsDealsDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsDetailsModel", function () {
      return DealsDetailsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var DealsDetailsModel =
    /*#__PURE__*/
    function (_shell_data_store__WE) {
      _inherits(DealsDetailsModel, _shell_data_store__WE);

      function DealsDetailsModel() {
        var _this2;

        _classCallCheck(this, DealsDetailsModel);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DealsDetailsModel).call(this));
        _this2.showcaseImages = ['', '', '']; // Default mock value
        // expirationDate = '03/03/2019';

        _this2.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_1__().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
        _this2.relatedDeals = [{
          logo: '',
          name: '',
          description: ''
        }, {
          logo: '',
          name: '',
          description: ''
        }, {
          logo: '',
          name: '',
          description: ''
        }];
        return _this2;
      }

      return DealsDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_2__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/deals/listing/deals-listing.model.ts":
  /*!******************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.model.ts ***!
    \******************************************************/

  /*! exports provided: DealsItemModel, DealsListingModel */

  /***/
  function srcAppDealsListingDealsListingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsItemModel", function () {
      return DealsItemModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingModel", function () {
      return DealsListingModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var DealsItemModel = function DealsItemModel() {
      _classCallCheck(this, DealsItemModel);

      // Default mock value
      // expirationDate = '12/01/2018';
      this.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_1__().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
    };

    var DealsListingModel =
    /*#__PURE__*/
    function (_shell_data_store__WE2) {
      _inherits(DealsListingModel, _shell_data_store__WE2);

      function DealsListingModel() {
        var _this3;

        _classCallCheck(this, DealsListingModel);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(DealsListingModel).call(this));
        _this3.items = [new DealsItemModel(), new DealsItemModel(), new DealsItemModel(), new DealsItemModel()];
        return _this3;
      }

      return DealsListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_2__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/fashion/details/fashion-details.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/fashion/details/fashion-details.model.ts ***!
    \**********************************************************/

  /*! exports provided: FashionDetailsModel */

  /***/
  function srcAppFashionDetailsFashionDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionDetailsModel", function () {
      return FashionDetailsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FashionDetailsModel =
    /*#__PURE__*/
    function (_shell_data_store__WE3) {
      _inherits(FashionDetailsModel, _shell_data_store__WE3);

      function FashionDetailsModel() {
        var _this4;

        _classCallCheck(this, FashionDetailsModel);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(FashionDetailsModel).call(this));
        _this4.showcaseImages = [{
          type: '',
          source: ''
        }, {
          type: '',
          source: ''
        }, {
          type: '',
          source: ''
        }];
        _this4.colorVariants = [{
          name: '',
          value: '',
          default: false
        }, {
          name: '',
          value: '',
          default: false
        }, {
          name: '',
          value: '',
          default: false
        }];
        _this4.sizeVariants = [{
          name: '',
          value: '',
          default: false
        }, {
          name: '',
          value: '',
          default: false
        }, {
          name: '',
          value: '',
          default: false
        }];
        _this4.relatedProducts = [{
          id: null
        }, {
          id: null
        }];
        return _this4;
      }

      return FashionDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/fashion/fashion.service.ts":
  /*!********************************************!*\
    !*** ./src/app/fashion/fashion.service.ts ***!
    \********************************************/

  /*! exports provided: FashionService */

  /***/
  function srcAppFashionFashionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionService", function () {
      return FashionService;
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


    var _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/fashion-listing.model */
    "./src/app/fashion/listing/fashion-listing.model.ts");
    /* harmony import */


    var _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/fashion-details.model */
    "./src/app/fashion/details/fashion-details.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FashionService =
    /*#__PURE__*/
    function () {
      function FashionService(http) {
        _classCallCheck(this, FashionService);

        this.http = http;
      }

      _createClass(FashionService, [{
        key: "getListingDataSource",
        value: function getListingDataSource() {
          return this.http.get('./assets/sample-data/fashion/listing.json');
        }
      }, {
        key: "getListingStore",
        value: function getListingStore(dataSource) {
          // Use cache if available
          if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__["FashionListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.listingDataStore.load(dataSource);
          }

          return this.listingDataStore;
        }
      }, {
        key: "getDetailsDataSource",
        value: function getDetailsDataSource() {
          return this.http.get('./assets/sample-data/fashion/details.json');
        }
      }, {
        key: "getDetailsStore",
        value: function getDetailsStore(dataSource) {
          // Use cache if available
          if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__["FashionDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
          }

          return this.detailsDataStore;
        }
      }]);

      return FashionService;
    }();

    FashionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FashionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], FashionService);
    /***/
  },

  /***/
  "./src/app/fashion/listing/fashion-listing.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/fashion/listing/fashion-listing.model.ts ***!
    \**********************************************************/

  /*! exports provided: FashionItemModel, FashionListingModel */

  /***/
  function srcAppFashionListingFashionListingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionItemModel", function () {
      return FashionItemModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionListingModel", function () {
      return FashionListingModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FashionItemModel = function FashionItemModel() {
      _classCallCheck(this, FashionItemModel);
    };

    var FashionListingModel =
    /*#__PURE__*/
    function (_shell_data_store__WE4) {
      _inherits(FashionListingModel, _shell_data_store__WE4);

      function FashionListingModel() {
        var _this5;

        _classCallCheck(this, FashionListingModel);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(FashionListingModel).call(this));
        _this5.items = [new FashionItemModel(), new FashionItemModel(), new FashionItemModel(), new FashionItemModel()];
        return _this5;
      }

      return FashionListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/food/details/food-details.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/food/details/food-details.model.ts ***!
    \****************************************************/

  /*! exports provided: FoodDetailsModel */

  /***/
  function srcAppFoodDetailsFoodDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodDetailsModel", function () {
      return FoodDetailsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FoodDetailsModel =
    /*#__PURE__*/
    function (_shell_data_store__WE5) {
      _inherits(FoodDetailsModel, _shell_data_store__WE5);

      function FoodDetailsModel() {
        var _this6;

        _classCallCheck(this, FoodDetailsModel);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(FoodDetailsModel).call(this));
        _this6.ratings = [{
          concept: '',
          rate: null
        }, {
          concept: '',
          rate: null
        }, {
          concept: '',
          rate: null
        }];
        _this6.openHours = [{
          day: '',
          open: true,
          hourFrom: '',
          hourTo: ''
        }, {
          day: '',
          open: true,
          hourFrom: '',
          hourTo: ''
        }, {
          day: '',
          open: false,
          hourFrom: '',
          hourTo: ''
        }];
        _this6.tags = ['', '', ''];
        _this6.usersPictures = ['', '', '', '', '', ''];
        _this6.popularDishes = [{
          name: '',
          rate: null,
          votesCount: null
        }, {
          name: '',
          rate: null,
          votesCount: null
        }];
        _this6.reviews = [{
          user: {
            image: '',
            name: '',
            reviewsCount: null,
            points: null
          },
          avgRating: null,
          ratings: [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }],
          publishedAt: null,
          message: ''
        }, {
          user: {
            image: '',
            name: '',
            reviewsCount: null,
            points: null
          },
          avgRating: null,
          ratings: [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }],
          publishedAt: null,
          message: ''
        }, {
          user: {
            image: '',
            name: '',
            reviewsCount: null,
            points: null
          },
          avgRating: null,
          ratings: [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }],
          publishedAt: null,
          message: ''
        }];
        _this6.popularRecipes = [{
          showcaseImage: '',
          name: '',
          chef: {
            name: '',
            image: ''
          },
          difficulty: '',
          time: '',
          calories: '',
          chefExtract: ''
        }];
        return _this6;
      }

      return FoodDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/food/food.service.ts":
  /*!**************************************!*\
    !*** ./src/app/food/food.service.ts ***!
    \**************************************/

  /*! exports provided: FoodService */

  /***/
  function srcAppFoodFoodServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodService", function () {
      return FoodService;
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
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./listing/food-listing.model */
    "./src/app/food/listing/food-listing.model.ts");
    /* harmony import */


    var _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details/food-details.model */
    "./src/app/food/details/food-details.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FoodService =
    /*#__PURE__*/
    function () {
      function FoodService(http) {
        _classCallCheck(this, FoodService);

        this.http = http;
      }

      _createClass(FoodService, [{
        key: "getListingDataSource",
        value: function getListingDataSource() {
          return this.http.get('./assets/sample-data/food/listing.json');
        }
      }, {
        key: "getListingStore",
        value: function getListingStore(dataSource) {
          // Use cache if available
          if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__["FoodListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.listingDataStore.load(dataSource);
          }

          return this.listingDataStore;
        }
      }, {
        key: "getDetailsDataSource",
        value: function getDetailsDataSource(slug) {
          return this.http.get('./assets/sample-data/food/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (details) {
            return details.items.filter(function (item) {
              return item.slug === slug;
            });
          }));
        }
      }, {
        key: "getDetailsStore",
        value: function getDetailsStore(dataSource) {
          // Initialize the model specifying that it is a shell model
          var shellModel = new _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__["FoodDetailsModel"]();
          this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

          this.detailsDataStore.load(dataSource);
          return this.detailsDataStore;
        }
      }]);

      return FoodService;
    }();

    FoodService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FoodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], FoodService);
    /***/
  },

  /***/
  "./src/app/food/listing/food-listing.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/food/listing/food-listing.model.ts ***!
    \****************************************************/

  /*! exports provided: FoodItemModel, FoodListingModel */

  /***/
  function srcAppFoodListingFoodListingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodItemModel", function () {
      return FoodItemModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodListingModel", function () {
      return FoodListingModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FoodItemModel = function FoodItemModel() {
      _classCallCheck(this, FoodItemModel);

      this.tags = ['', '', ''];
      this.pictures = ['', '', '', '', ''];
    };

    var FoodListingModel =
    /*#__PURE__*/
    function (_shell_data_store__WE6) {
      _inherits(FoodListingModel, _shell_data_store__WE6);

      function FoodListingModel() {
        var _this7;

        _classCallCheck(this, FoodListingModel);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(FoodListingModel).call(this));
        _this7.items = [new FoodItemModel(), new FoodItemModel(), new FoodItemModel(), new FoodItemModel()];
        return _this7;
      }

      return FoodListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/real-state/details/real-state-details.model.ts":
  /*!****************************************************************!*\
    !*** ./src/app/real-state/details/real-state-details.model.ts ***!
    \****************************************************************/

  /*! exports provided: RealStateDetailsModel */

  /***/
  function srcAppRealStateDetailsRealStateDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealStateDetailsModel", function () {
      return RealStateDetailsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var RealStateDetailsModel =
    /*#__PURE__*/
    function (_shell_data_store__WE7) {
      _inherits(RealStateDetailsModel, _shell_data_store__WE7);

      function RealStateDetailsModel() {
        var _this8;

        _classCallCheck(this, RealStateDetailsModel);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(RealStateDetailsModel).call(this));
        _this8.amenities = [{
          name: '',
          icon: ''
        }, {
          name: '',
          icon: ''
        }, {
          name: '',
          icon: ''
        }, {
          name: '',
          icon: ''
        }, {
          name: '',
          icon: ''
        }, {
          name: '',
          icon: ''
        }];
        return _this8;
      }

      return RealStateDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/real-state/listing/real-state-listing.model.ts":
  /*!****************************************************************!*\
    !*** ./src/app/real-state/listing/real-state-listing.model.ts ***!
    \****************************************************************/

  /*! exports provided: RealStateItemModel, RealStateListingModel */

  /***/
  function srcAppRealStateListingRealStateListingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealStateItemModel", function () {
      return RealStateItemModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealStateListingModel", function () {
      return RealStateListingModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var RealStateItemModel = function RealStateItemModel() {
      _classCallCheck(this, RealStateItemModel);

      this.amenities = [{
        name: '',
        icon: ''
      }, {
        name: '',
        icon: ''
      }];
    };

    var RealStateListingModel =
    /*#__PURE__*/
    function (_shell_data_store__WE8) {
      _inherits(RealStateListingModel, _shell_data_store__WE8);

      function RealStateListingModel() {
        var _this9;

        _classCallCheck(this, RealStateListingModel);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(RealStateListingModel).call(this));
        _this9.items = [new RealStateItemModel(), new RealStateItemModel(), new RealStateItemModel(), new RealStateItemModel()];
        return _this9;
      }

      return RealStateListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/real-state/real-state.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/real-state/real-state.service.ts ***!
    \**************************************************/

  /*! exports provided: RealStateService */

  /***/
  function srcAppRealStateRealStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealStateService", function () {
      return RealStateService;
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


    var _listing_real_state_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/real-state-listing.model */
    "./src/app/real-state/listing/real-state-listing.model.ts");
    /* harmony import */


    var _details_real_state_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/real-state-details.model */
    "./src/app/real-state/details/real-state-details.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    var RealStateService =
    /*#__PURE__*/
    function () {
      function RealStateService(http) {
        _classCallCheck(this, RealStateService);

        this.http = http;
      }

      _createClass(RealStateService, [{
        key: "getListingDataSource",
        value: function getListingDataSource() {
          return this.http.get('./assets/sample-data/real-state/listing.json');
        }
      }, {
        key: "getListingStore",
        value: function getListingStore(dataSource) {
          // Use cache if available
          if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_real_state_listing_model__WEBPACK_IMPORTED_MODULE_3__["RealStateListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.listingDataStore.load(dataSource);
          }

          return this.listingDataStore;
        }
      }, {
        key: "getDetailsDataSource",
        value: function getDetailsDataSource() {
          return this.http.get('./assets/sample-data/real-state/details.json');
        }
      }, {
        key: "getDetailsStore",
        value: function getDetailsStore(dataSource) {
          // Use cache if available
          if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_real_state_details_model__WEBPACK_IMPORTED_MODULE_4__["RealStateDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
          }

          return this.detailsDataStore;
        }
      }]);

      return RealStateService;
    }();

    RealStateService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RealStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], RealStateService);
    /***/
  },

  /***/
  "./src/app/showcase/showcase-shell.model.ts":
  /*!**************************************************!*\
    !*** ./src/app/showcase/showcase-shell.model.ts ***!
    \**************************************************/

  /*! exports provided: ShowcaseShellModel, ShowcaseShellUserModel, ShowcaseCommentModel, ShowcasePostModel, ShowcaseTaskModel, ShowcaseUser2Model, ShowcaseCompanyModel, ShowcaseCombinedTaskUserModel */

  /***/
  function srcAppShowcaseShowcaseShellModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseShellModel", function () {
      return ShowcaseShellModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseShellUserModel", function () {
      return ShowcaseShellUserModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseCommentModel", function () {
      return ShowcaseCommentModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcasePostModel", function () {
      return ShowcasePostModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseTaskModel", function () {
      return ShowcaseTaskModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseUser2Model", function () {
      return ShowcaseUser2Model;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseCompanyModel", function () {
      return ShowcaseCompanyModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseCombinedTaskUserModel", function () {
      return ShowcaseCombinedTaskUserModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    var ShowcaseShellModel =
    /*#__PURE__*/
    function (_shell_data_store__WE9) {
      _inherits(ShowcaseShellModel, _shell_data_store__WE9);

      function ShowcaseShellModel() {
        _classCallCheck(this, ShowcaseShellModel);

        return _possibleConstructorReturn(this, _getPrototypeOf(ShowcaseShellModel).call(this));
      }

      return ShowcaseShellModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);

    var ShowcaseShellUserModel =
    /*#__PURE__*/
    function (_shell_data_store__WE10) {
      _inherits(ShowcaseShellUserModel, _shell_data_store__WE10);

      function ShowcaseShellUserModel() {
        _classCallCheck(this, ShowcaseShellUserModel);

        return _possibleConstructorReturn(this, _getPrototypeOf(ShowcaseShellUserModel).call(this));
      }

      return ShowcaseShellUserModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);

    var ShowcaseCommentModel =
    /*#__PURE__*/
    function (_shell_data_store__WE11) {
      _inherits(ShowcaseCommentModel, _shell_data_store__WE11);

      function ShowcaseCommentModel() {
        _classCallCheck(this, ShowcaseCommentModel);

        return _possibleConstructorReturn(this, _getPrototypeOf(ShowcaseCommentModel).call(this));
      }

      return ShowcaseCommentModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);

    var ShowcasePostModel =
    /*#__PURE__*/
    function (_shell_data_store__WE12) {
      _inherits(ShowcasePostModel, _shell_data_store__WE12);

      function ShowcasePostModel() {
        _classCallCheck(this, ShowcasePostModel);

        return _possibleConstructorReturn(this, _getPrototypeOf(ShowcasePostModel).call(this));
      }

      return ShowcasePostModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);

    var ShowcaseTaskModel =
    /*#__PURE__*/
    function (_shell_data_store__WE13) {
      _inherits(ShowcaseTaskModel, _shell_data_store__WE13);

      function ShowcaseTaskModel() {
        _classCallCheck(this, ShowcaseTaskModel);

        return _possibleConstructorReturn(this, _getPrototypeOf(ShowcaseTaskModel).call(this));
      }

      return ShowcaseTaskModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);

    var ShowcaseUser2Model =
    /*#__PURE__*/
    function (_shell_data_store__WE14) {
      _inherits(ShowcaseUser2Model, _shell_data_store__WE14);

      function ShowcaseUser2Model() {
        _classCallCheck(this, ShowcaseUser2Model);

        return _possibleConstructorReturn(this, _getPrototypeOf(ShowcaseUser2Model).call(this));
      }

      return ShowcaseUser2Model;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);

    var ShowcaseCompanyModel =
    /*#__PURE__*/
    function (_shell_data_store__WE15) {
      _inherits(ShowcaseCompanyModel, _shell_data_store__WE15);

      function ShowcaseCompanyModel() {
        _classCallCheck(this, ShowcaseCompanyModel);

        return _possibleConstructorReturn(this, _getPrototypeOf(ShowcaseCompanyModel).call(this));
      }

      return ShowcaseCompanyModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);

    var ShowcaseCombinedTaskUserModel =
    /*#__PURE__*/
    function (_ShowcaseTaskModel) {
      _inherits(ShowcaseCombinedTaskUserModel, _ShowcaseTaskModel);

      function ShowcaseCombinedTaskUserModel() {
        _classCallCheck(this, ShowcaseCombinedTaskUserModel);

        return _possibleConstructorReturn(this, _getPrototypeOf(ShowcaseCombinedTaskUserModel).call(this));
      }

      return ShowcaseCombinedTaskUserModel;
    }(ShowcaseTaskModel);
    /***/

  },

  /***/
  "./src/app/showcase/showcase.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/showcase/showcase.service.ts ***!
    \**********************************************/

  /*! exports provided: ShowcaseService */

  /***/
  function srcAppShowcaseShowcaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseService", function () {
      return ShowcaseService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./showcase-shell.model */
    "./src/app/showcase/showcase-shell.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts"); // tslint:disable-next-line:max-line-length


    var ShowcaseService =
    /*#__PURE__*/
    function () {
      function ShowcaseService(http) {
        _classCallCheck(this, ShowcaseService);

        this.http = http;
        this.openDataStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
      }

      _createClass(ShowcaseService, [{
        key: "getDataSourceWithDelay",
        value: function getDataSourceWithDelay() {
          return this.http.get('./assets/sample-data/showcase/shell.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (val) {
            console.log('getData STARTED'); // tslint:disable-next-line:no-console

            console.time('getData Roundtrip');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            console.log('getData COMPLETED'); // tslint:disable-next-line:no-console

            console.timeEnd('getData Roundtrip');
          }));
        }
      }, {
        key: "getSimpleDataSource",
        value: function getSimpleDataSource() {
          return this.http.get('./assets/sample-data/showcase/shell.json');
        }
      }, {
        key: "getSimpleDataStore",
        value: function getSimpleDataStore(dataSource) {
          // Use cache if available
          if (!this.showcaseDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_5__["ShowcaseShellModel"]();
            this.showcaseDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.showcaseDataStore.load(dataSource);
          }

          return this.showcaseDataStore;
        }
      }, {
        key: "getListDataSource",
        value: function getListDataSource() {
          return this.http.get('https://reqres.in/api/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result['data'];
          }));
        }
      }, {
        key: "getPaginationDataSource",
        value: function getPaginationDataSource(page) {
          return this.http.get('https://reqres.in/api/users?page=' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result['data'];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (results) {
            return results.length > 0;
          }));
        }
      }, {
        key: "getMultipleDataSourceA",
        value: function getMultipleDataSourceA() {
          return this.http.get('./assets/sample-data/travel/listing.json');
        }
      }, {
        key: "getMultipleDataSourceB",
        value: function getMultipleDataSourceB() {
          return this.http.get('./assets/sample-data/fashion/listing.json');
        }
      }, {
        key: "getDependantDataSourcePost",
        value: function getDependantDataSourcePost() {
          return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
        } // tslint:disable-next-line:max-line-length

      }, {
        key: "getDependantDataSourcePostComments",
        value: function getDependantDataSourcePostComments(dependantDataSource) {
          var _this10 = this;

          return dependantDataSource.pipe( // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (post) {
            return !post.isShell;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (post) {
            return _this10.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id);
          }));
        }
      }, {
        key: "getUser",
        value: function getUser(userId) {
          return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
        } // get the company details, a subset of the user data

      }, {
        key: "getUserSubsetData",
        value: function getUserSubsetData(userId) {
          var dataObservable = this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
          return dataObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (jsonResponse) {
            var filteredData = Object.assign({}, jsonResponse.company);
            return filteredData;
          }));
        }
      }, {
        key: "getTasks",
        value: function getTasks() {
          return this.http.get('https://jsonplaceholder.typicode.com/todos');
        } // Concat the task with the details of the user

      }, {
        key: "getCombinedTasksUserDataSource",
        value: function getCombinedTasksUserDataSource() {
          var _this11 = this;

          return this.getTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (tasks) {
            var completeTaskData = tasks.map(function (task) {
              // for each task retrun a new observable with the ShowcaseCombinedTaskUserModel
              var taskUser = _this11.getUser(task.userId);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(task), taskUser]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_ref4) {
                var _ref5 = _slicedToArray(_ref4, 2),
                    taskData = _ref5[0],
                    user = _ref5[1];

                return Object.assign({}, taskData, {
                  user: user
                });
              }));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(completeTaskData);
          }));
        }
      }, {
        key: "getOpenDataStream",
        value: function getOpenDataStream() {
          var firstLoadData = this.getPaginationDataSource(1);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.openDataStream.asObservable(), firstLoadData);
        }
      }, {
        key: "pushValuesToOpenStream",
        value: function pushValuesToOpenStream() {
          var stackedValues = this.getStackedValues();
          this.openDataStream.next(stackedValues);
        }
      }, {
        key: "getStackedValuesDataSource",
        value: function getStackedValuesDataSource() {
          var stackedValues = this.getStackedValues();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(stackedValues).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(3000));
        }
      }, {
        key: "getStackedValues",
        value: function getStackedValues() {
          var newUser = {
            first_name: 'Agustin',
            last_name: 'Nitsuga',
            avatar: './assets/sample-images/user/person_1.jpg'
          }; // Get a random integer between 1 (and only 1) and 'max'

          var getRand = function getRand(max) {
            var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            return Math.floor(Math.random() * max) + min;
          }; // Randomly send one, two or three users


          return Array(getRand(3)).fill(newUser);
        }
      }]);

      return ShowcaseService;
    }();

    ShowcaseService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ShowcaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ShowcaseService);
    /***/
  },

  /***/
  "./src/app/travel/details/travel-details.model.ts":
  /*!********************************************************!*\
    !*** ./src/app/travel/details/travel-details.model.ts ***!
    \********************************************************/

  /*! exports provided: TravelDetailsModel */

  /***/
  function srcAppTravelDetailsTravelDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelDetailsModel", function () {
      return TravelDetailsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var TravelDetailsModel =
    /*#__PURE__*/
    function (_shell_data_store__WE16) {
      _inherits(TravelDetailsModel, _shell_data_store__WE16);

      function TravelDetailsModel() {
        var _this12;

        _classCallCheck(this, TravelDetailsModel);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(TravelDetailsModel).call(this));
        _this12.tags = new Array(3).fill('');
        _this12.openHours = [{
          day: '',
          open: true,
          hourFrom: '',
          hourTo: ''
        }, {
          day: '',
          open: true,
          hourFrom: '',
          hourTo: ''
        }, {
          day: '',
          open: false,
          hourFrom: '',
          hourTo: ''
        }];
        _this12.whereToStay = [{
          picture: '',
          name: '',
          rating: null
        }, {
          picture: '',
          name: '',
          rating: null
        }, {
          picture: '',
          name: '',
          rating: null
        }];
        _this12.whereToEat = [{
          picture: '',
          name: '',
          rating: null
        }, {
          picture: '',
          name: '',
          rating: null
        }, {
          picture: '',
          name: '',
          rating: null
        }];
        _this12.relatedActivities = [{
          picture: '',
          name: '',
          category: '',
          rating: null
        }, {
          picture: '',
          name: '',
          category: '',
          rating: null
        }];
        return _this12;
      }

      return TravelDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/travel/listing/travel-listing.model.ts":
  /*!********************************************************!*\
    !*** ./src/app/travel/listing/travel-listing.model.ts ***!
    \********************************************************/

  /*! exports provided: TravelItemModel, TravelListingModel */

  /***/
  function srcAppTravelListingTravelListingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelItemModel", function () {
      return TravelItemModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelListingModel", function () {
      return TravelListingModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var TravelItemModel = function TravelItemModel() {
      _classCallCheck(this, TravelItemModel);
    };

    var TravelListingModel =
    /*#__PURE__*/
    function (_shell_data_store__WE17) {
      _inherits(TravelListingModel, _shell_data_store__WE17);

      function TravelListingModel() {
        var _this13;

        _classCallCheck(this, TravelListingModel);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(TravelListingModel).call(this));
        _this13.items = [new TravelItemModel(), new TravelItemModel(), new TravelItemModel(), new TravelItemModel()];
        return _this13;
      }

      return TravelListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/travel/travel.service.ts":
  /*!******************************************!*\
    !*** ./src/app/travel/travel.service.ts ***!
    \******************************************/

  /*! exports provided: TravelService */

  /***/
  function srcAppTravelTravelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelService", function () {
      return TravelService;
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


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./listing/travel-listing.model */
    "./src/app/travel/listing/travel-listing.model.ts");
    /* harmony import */


    var _details_travel_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details/travel-details.model */
    "./src/app/travel/details/travel-details.model.ts");

    var TravelService =
    /*#__PURE__*/
    function () {
      function TravelService(http) {
        _classCallCheck(this, TravelService);

        this.http = http;
      }

      _createClass(TravelService, [{
        key: "getListingDataSource",
        value: function getListingDataSource() {
          return this.http.get('./assets/sample-data/travel/listing.json');
        }
      }, {
        key: "getListingStore",
        value: function getListingStore(dataSource) {
          // Use cache if available
          if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_4__["TravelListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.listingDataStore.load(dataSource);
          }

          return this.listingDataStore;
        }
      }, {
        key: "getDetailsDataSource",
        value: function getDetailsDataSource() {
          return this.http.get('./assets/sample-data/travel/details.json');
        }
      }, {
        key: "getDetailsStore",
        value: function getDetailsStore(dataSource) {
          // Use cache if available
          if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_travel_details_model__WEBPACK_IMPORTED_MODULE_5__["TravelDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
          }

          return this.detailsDataStore;
        }
      }]);

      return TravelService;
    }();

    TravelService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TravelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], TravelService);
    /***/
  },

  /***/
  "./src/app/user/friends/user-friends.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/user/friends/user-friends.model.ts ***!
    \****************************************************/

  /*! exports provided: UserFriendsModel */

  /***/
  function srcAppUserFriendsUserFriendsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFriendsModel", function () {
      return UserFriendsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var UserFriendsModel =
    /*#__PURE__*/
    function (_shell_data_store__WE18) {
      _inherits(UserFriendsModel, _shell_data_store__WE18);

      function UserFriendsModel() {
        var _this14;

        _classCallCheck(this, UserFriendsModel);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(UserFriendsModel).call(this));
        _this14.friends = [{
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: true
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }];
        _this14.followers = [{
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: true
        }];
        _this14.following = [{
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }];
        return _this14;
      }

      return UserFriendsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/user/profile/user-profile.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/user/profile/user-profile.model.ts ***!
    \****************************************************/

  /*! exports provided: UserProfileModel */

  /***/
  function srcAppUserProfileUserProfileModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileModel", function () {
      return UserProfileModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var UserProfileModel =
    /*#__PURE__*/
    function (_shell_data_store__WE19) {
      _inherits(UserProfileModel, _shell_data_store__WE19);

      function UserProfileModel() {
        var _this15;

        _classCallCheck(this, UserProfileModel);

        _this15 = _possibleConstructorReturn(this, _getPrototypeOf(UserProfileModel).call(this));
        _this15.friends = [{
          image: '',
          name: ''
        }, {
          image: '',
          name: ''
        }, {
          image: '',
          name: ''
        }, {
          image: '',
          name: ''
        }];
        _this15.photos = ['', '', '', ''];
        return _this15;
      }

      return UserProfileModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/user/user.service.ts":
  /*!**************************************!*\
    !*** ./src/app/user/user.service.ts ***!
    \**************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile/user-profile.model */
    "./src/app/user/profile/user-profile.model.ts");
    /* harmony import */


    var _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./friends/user-friends.model */
    "./src/app/user/friends/user-friends.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "getProfileDataSource",
        value: function getProfileDataSource() {
          return this.http.get('./assets/sample-data/user/user-profile.json');
        }
      }, {
        key: "getProfileStore",
        value: function getProfileStore(dataSource) {
          // Use cache if available
          if (!this.profileDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_3__["UserProfileModel"]();
            this.profileDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.profileDataStore.load(dataSource);
          }

          return this.profileDataStore;
        }
      }, {
        key: "getFriendsDataSource",
        value: function getFriendsDataSource() {
          return this.http.get('./assets/sample-data/user/user-friends.json');
        }
      }, {
        key: "getFriendsStore",
        value: function getFriendsStore(dataSource) {
          // Use cache if available
          if (!this.friendsDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_4__["UserFriendsModel"]();
            this.friendsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.friendsDataStore.load(dataSource);
          }

          return this.friendsDataStore;
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UserService);
    /***/
  },

  /***/
  "./src/app/validators/password.validator.ts":
  /*!**************************************************!*\
    !*** ./src/app/validators/password.validator.ts ***!
    \**************************************************/

  /*! exports provided: PasswordValidator */

  /***/
  function srcAppValidatorsPasswordValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
      return PasswordValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PasswordValidator =
    /*#__PURE__*/
    function () {
      function PasswordValidator() {
        _classCallCheck(this, PasswordValidator);
      }

      _createClass(PasswordValidator, null, [{
        key: "areNotEqual",
        // If our validation fails, we return an object with a key for the error name and a value of true.
        // Otherwise, if the validation passes, we simply return null because there is no error.
        value: function areNotEqual(formGroup) {
          var val;
          var valid = true;

          for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
              var control = formGroup.controls[key];

              if (val === undefined) {
                val = control.value;
              } else {
                if (val !== control.value) {
                  valid = false;
                  break;
                }
              }
            }
          }

          if (valid) {
            return null;
          }

          return {
            areNotEqual: true
          };
        }
      }]);

      return PasswordValidator;
    }();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map