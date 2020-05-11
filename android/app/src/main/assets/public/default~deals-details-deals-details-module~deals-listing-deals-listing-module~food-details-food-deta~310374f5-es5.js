function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"], {
  /***/
  "./node_modules/angular-pipes/fesm2015/angular-pipes.js":
  /*!**************************************************************!*\
    !*** ./node_modules/angular-pipes/fesm2015/angular-pipes.js ***!
    \**************************************************************/

  /*! exports provided: AbsPipe, BytesPipe, CapitalizePipe, CeilPipe, ChunkPipe, CountPipe, DecodeURIComponentPipe, DecodeURIPipe, DeepPipe, DefaultsPipe, DegreesPipe, DropPipe, EmptyPipe, EncodeURIComponentPipe, EncodeURIPipe, EveryPipe, FirstOrDefaultPipe, FlattenPipe, FloorPipe, GroupByPipe, HeadPipe, InitialPipe, IntersectionPipe, IsArrayPipe, IsDefinedPipe, IsEqualPipe, IsFunctionPipe, IsGreaterOrEqualPipe, IsGreaterPipe, IsIdenticalPipe, IsLessOrEqualPipe, IsLessPipe, IsNilPipe, IsNotEqualPipe, IsNotIdenticalPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe, IsUndefinedPipe, JoinPipe, KeysPipe, LastPipe, LatinizePipe, LeftPadPipe, MapPipe, MatchPipe, MaxPipe, MeanPipe, MinPipe, NewlinesPipe, NgAggregatePipesModule, NgArrayPipesModule, NgBooleanPipesModule, NgMathPipesModule, NgObjectPipesModule, NgPipesModule, NgStringPipesModule, OrderByPipe, OrdinalPipe, PadPipe, PluckPipe, PowPipe, RadiansPipe, RandomPipe, RangePipe, RepeatPipe, ReplacePipe, ReversePipe, ReverseStrPipe, RightPadPipe, RoundPipe, ShufflePipe, SlugifyPipe, SomePipe, SplitPipe, SqrtPipe, StripTagsPipe, SumPipe, TailPipe, TakePipe, TakeUntilPipe, TakeWhilePipe, TemplatePipe, TestPipe, ToArrayPipe, TrimPipe, TruncatePipe, UnionPipe, UniqPipe, UpperFirstPipe, WherePipe, WithPipe, WithoutPipe, WrapPipe */

  /***/
  function node_modulesAngularPipesFesm2015AngularPipesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbsPipe", function () {
      return AbsPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BytesPipe", function () {
      return BytesPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function () {
      return CapitalizePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CeilPipe", function () {
      return CeilPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChunkPipe", function () {
      return ChunkPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountPipe", function () {
      return CountPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DecodeURIComponentPipe", function () {
      return DecodeURIComponentPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DecodeURIPipe", function () {
      return DecodeURIPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeepPipe", function () {
      return DeepPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultsPipe", function () {
      return DefaultsPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DegreesPipe", function () {
      return DegreesPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropPipe", function () {
      return DropPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyPipe", function () {
      return EmptyPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncodeURIComponentPipe", function () {
      return EncodeURIComponentPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncodeURIPipe", function () {
      return EncodeURIPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EveryPipe", function () {
      return EveryPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstOrDefaultPipe", function () {
      return FirstOrDefaultPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlattenPipe", function () {
      return FlattenPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FloorPipe", function () {
      return FloorPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupByPipe", function () {
      return GroupByPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadPipe", function () {
      return HeadPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitialPipe", function () {
      return InitialPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntersectionPipe", function () {
      return IntersectionPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsArrayPipe", function () {
      return IsArrayPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsDefinedPipe", function () {
      return IsDefinedPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsEqualPipe", function () {
      return IsEqualPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsFunctionPipe", function () {
      return IsFunctionPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsGreaterOrEqualPipe", function () {
      return IsGreaterOrEqualPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsGreaterPipe", function () {
      return IsGreaterPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsIdenticalPipe", function () {
      return IsIdenticalPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsLessOrEqualPipe", function () {
      return IsLessOrEqualPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsLessPipe", function () {
      return IsLessPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsNilPipe", function () {
      return IsNilPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsNotEqualPipe", function () {
      return IsNotEqualPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsNotIdenticalPipe", function () {
      return IsNotIdenticalPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsNullPipe", function () {
      return IsNullPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsNumberPipe", function () {
      return IsNumberPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsObjectPipe", function () {
      return IsObjectPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsStringPipe", function () {
      return IsStringPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsUndefinedPipe", function () {
      return IsUndefinedPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinPipe", function () {
      return JoinPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeysPipe", function () {
      return KeysPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LastPipe", function () {
      return LastPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LatinizePipe", function () {
      return LatinizePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeftPadPipe", function () {
      return LeftPadPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPipe", function () {
      return MapPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchPipe", function () {
      return MatchPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaxPipe", function () {
      return MaxPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeanPipe", function () {
      return MeanPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinPipe", function () {
      return MinPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewlinesPipe", function () {
      return NewlinesPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgAggregatePipesModule", function () {
      return NgAggregatePipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgArrayPipesModule", function () {
      return NgArrayPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgBooleanPipesModule", function () {
      return NgBooleanPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgMathPipesModule", function () {
      return NgMathPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgObjectPipesModule", function () {
      return NgObjectPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgPipesModule", function () {
      return NgPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgStringPipesModule", function () {
      return NgStringPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderByPipe", function () {
      return OrderByPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdinalPipe", function () {
      return OrdinalPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PadPipe", function () {
      return PadPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PluckPipe", function () {
      return PluckPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PowPipe", function () {
      return PowPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadiansPipe", function () {
      return RadiansPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RandomPipe", function () {
      return RandomPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RangePipe", function () {
      return RangePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepeatPipe", function () {
      return RepeatPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReplacePipe", function () {
      return ReplacePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReversePipe", function () {
      return ReversePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReverseStrPipe", function () {
      return ReverseStrPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RightPadPipe", function () {
      return RightPadPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoundPipe", function () {
      return RoundPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShufflePipe", function () {
      return ShufflePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlugifyPipe", function () {
      return SlugifyPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SomePipe", function () {
      return SomePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplitPipe", function () {
      return SplitPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SqrtPipe", function () {
      return SqrtPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StripTagsPipe", function () {
      return StripTagsPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SumPipe", function () {
      return SumPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TailPipe", function () {
      return TailPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TakePipe", function () {
      return TakePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TakeUntilPipe", function () {
      return TakeUntilPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TakeWhilePipe", function () {
      return TakeWhilePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePipe", function () {
      return TemplatePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestPipe", function () {
      return TestPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToArrayPipe", function () {
      return ToArrayPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrimPipe", function () {
      return TrimPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
      return TruncatePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnionPipe", function () {
      return UnionPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqPipe", function () {
      return UniqPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpperFirstPipe", function () {
      return UpperFirstPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WherePipe", function () {
      return WherePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithPipe", function () {
      return WithPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithoutPipe", function () {
      return WithoutPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WrapPipe", function () {
      return WrapPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    function isUndefined(value) {
      return typeof value === 'undefined';
    }

    function isNull(value) {
      return value === null;
    }

    function isNumber(value) {
      return typeof value === 'number';
    }

    function isNumberFinite(value) {
      return isNumber(value) && isFinite(value);
    } // Not strict positive


    function isPositive(value) {
      return value >= 0;
    }

    function isInteger(value) {
      // No rest, is an integer
      return value % 1 === 0;
    }

    function isNil(value) {
      return value === null || typeof value === 'undefined';
    }

    function isString(value) {
      return typeof value === 'string';
    }

    function isObject(value) {
      return value !== null && typeof value === 'object';
    }

    function isArray(value) {
      return Array.isArray(value);
    }

    function isFunction(value) {
      return typeof value === 'function';
    }

    function toDecimal(value, decimal) {
      return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
    }

    function upperFirst(value) {
      return value.slice(0, 1).toUpperCase() + value.slice(1);
    }

    function createRound(method) {
      // <any>Math to suppress error
      var func = Math[method];
      return function (value) {
        var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (typeof value === 'string') {
          throw new TypeError('Rounding method needs a number');
        }

        if (typeof precision !== 'number' || isNaN(precision)) {
          precision = 0;
        }

        if (precision) {
          var pair = "".concat(value, "e").split('e');
          var val = func("".concat(pair[0], "e") + (+pair[1] + precision));
          pair = "".concat(val, "e").split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }

        return func(value);
      };
    }

    function leftPad(str) {
      var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var ch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
      str = String(str);
      ch = toString(ch);
      var i = -1;
      var length = len - str.length;

      while (++i < length && str.length + ch.length <= len) {
        str = ch + str;
      }

      return str;
    }

    function rightPad(str) {
      var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var ch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
      str = String(str);
      ch = toString(ch);
      var i = -1;
      var length = len - str.length;

      while (++i < length && str.length + ch.length <= len) {
        str += ch;
      }

      return str;
    }

    function toString(value) {
      return "".concat(value);
    }

    function pad(str) {
      var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var ch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
      str = String(str);
      ch = toString(ch);
      var i = -1;
      var length = len - str.length;
      var left = true;

      while (++i < length) {
        var l = str.length + ch.length <= len ? str.length + ch.length : str.length + 1;

        if (left) {
          str = leftPad(str, l, ch);
        } else {
          str = rightPad(str, l, ch);
        }

        left = !left;
      }

      return str;
    }

    function flatten(input) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (index >= input.length) {
        return input;
      }

      if (isArray(input[index])) {
        return flatten(input.slice(0, index).concat(input[index], input.slice(index + 1)), index);
      }

      return flatten(input, index + 1);
    }

    function getProperty(value, key) {
      if (isNil(value) || !isObject(value)) {
        return undefined;
      }

      var keys = key.split('.');
      var result = value[keys.shift()];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _key = _step.value;

          if (isNil(result) || !isObject(result)) {
            return undefined;
          }

          result = result[_key];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result;
    }

    function sum(input) {
      var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return input.reduce(function (previous, current) {
        return previous + current;
      }, initial);
    } // http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript


    function shuffle(input) {
      if (!isArray(input)) {
        return input;
      }

      var copy = _toConsumableArray(input);

      for (var i = copy.length; i; --i) {
        var j = Math.floor(Math.random() * i);
        var x = copy[i - 1];
        copy[i - 1] = copy[j];
        copy[j] = x;
      }

      return copy;
    }

    function deepIndexOf(collection, value) {
      var index = -1;
      var length = collection.length;

      while (++index < length) {
        if (deepEqual(value, collection[index])) {
          return index;
        }
      }

      return -1;
    }

    function deepEqual(a, b) {
      if (a === b) {
        return true;
      }

      if (!(typeof a === 'object' && typeof b === 'object')) {
        return a === b;
      }

      var keysA = Object.keys(a);
      var keysB = Object.keys(b);

      if (keysA.length !== keysB.length) {
        return false;
      } // Test for A's keys different from B.


      var hasOwn = Object.prototype.hasOwnProperty;

      for (var i = 0; i < keysA.length; i++) {
        var key = keysA[i];

        if (!hasOwn.call(b, keysA[i]) || !deepEqual(a[key], b[key])) {
          return false;
        }
      }

      return true;
    }

    function isDeepObject(object) {
      return object.__isDeepObject__;
    }

    function wrapDeep(object) {
      return new DeepWrapper(object);
    }

    function unwrapDeep(object) {
      if (isDeepObject(object)) {
        return object.data;
      }

      return object;
    }

    var DeepWrapper = function DeepWrapper(data) {
      _classCallCheck(this, DeepWrapper);

      this.data = data;
      this.__isDeepObject__ = true;
    };

    function count(input) {
      if (!isArray(input) && !isObject(input) && !isString(input)) {
        return input;
      }

      if (isObject(input)) {
        return Object.keys(input).map(function (value) {
          return input[value];
        }).length;
      }

      return input.length;
    }

    function empty(input) {
      if (!isArray(input)) {
        return input;
      }

      return input.length === 0;
    }

    function every(input, predicate) {
      if (!isArray(input) || !predicate) {
        return input;
      }

      var result = true;
      var i = -1;

      while (++i < input.length && result) {
        result = predicate(input[i], i, input);
      }

      return result;
    }

    function takeUntil(input, predicate) {
      var i = -1;
      var result = [];

      while (++i < input.length && !predicate(input[i], i, input)) {
        result[i] = input[i];
      }

      return result;
    }

    function takeWhile(input, predicate) {
      return takeUntil(input, function (item, index, collection) {
        return !predicate(item, index, collection);
      });
    }

    var GroupByPipe =
    /*#__PURE__*/
    function () {
      function GroupByPipe() {
        _classCallCheck(this, GroupByPipe);
      }

      _createClass(GroupByPipe, [{
        key: "transform",
        value: function transform(input, prop) {
          if (!isArray(input)) {
            return input;
          }

          var arr = {};
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var value = _step2.value;
              var field = getProperty(value, prop);

              if (isUndefined(arr[field])) {
                arr[field] = [];
              }

              arr[field].push(value);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return Object.keys(arr).map(function (key) {
            return {
              key: key,
              'value': arr[key]
            };
          });
        }
      }]);

      return GroupByPipe;
    }();

    GroupByPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'groupBy'
    })], GroupByPipe);

    var MaxPipe =
    /*#__PURE__*/
    function () {
      function MaxPipe() {
        _classCallCheck(this, MaxPipe);
      }

      _createClass(MaxPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isArray(input)) {
            return input;
          }

          if (input.length === 0) {
            return undefined;
          }

          var max = input[0];
          input.forEach(function (value) {
            if (max < value) {
              max = value;
            }
          });
          return max;
        }
      }]);

      return MaxPipe;
    }();

    MaxPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'max'
    })], MaxPipe);

    var MeanPipe =
    /*#__PURE__*/
    function () {
      function MeanPipe() {
        _classCallCheck(this, MeanPipe);
      }

      _createClass(MeanPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isArray(input)) {
            return input;
          }

          var count = input.length;

          if (count === 0) {
            return undefined;
          }

          return sum(input) / count;
        }
      }]);

      return MeanPipe;
    }();

    MeanPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'mean'
    })], MeanPipe);

    var MinPipe =
    /*#__PURE__*/
    function () {
      function MinPipe() {
        _classCallCheck(this, MinPipe);
      }

      _createClass(MinPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isArray(input)) {
            return input;
          }

          if (input.length === 0) {
            return undefined;
          }

          var min = input[0];
          input.forEach(function (value) {
            if (min > value) {
              min = value;
            }
          });
          return min;
        }
      }]);

      return MinPipe;
    }();

    MinPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'min'
    })], MinPipe);

    var SumPipe =
    /*#__PURE__*/
    function () {
      function SumPipe() {
        _classCallCheck(this, SumPipe);
      }

      _createClass(SumPipe, [{
        key: "transform",
        value: function transform(input) {
          return !isArray(input) ? input : sum(input);
        }
      }]);

      return SumPipe;
    }();

    SumPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'sum'
    })], SumPipe);

    var NgAggregatePipesModule = function NgAggregatePipesModule() {
      _classCallCheck(this, NgAggregatePipesModule);
    };

    NgAggregatePipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [GroupByPipe, MaxPipe, MeanPipe, MinPipe, SumPipe],
      exports: [GroupByPipe, MaxPipe, MeanPipe, MinPipe, SumPipe]
    })], NgAggregatePipesModule);

    var EmptyPipe =
    /*#__PURE__*/
    function () {
      function EmptyPipe() {
        _classCallCheck(this, EmptyPipe);
      }

      _createClass(EmptyPipe, [{
        key: "transform",
        value: function transform(input) {
          return empty(input);
        }
      }]);

      return EmptyPipe;
    }();

    EmptyPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'empty'
    })], EmptyPipe);

    var HeadPipe =
    /*#__PURE__*/
    function () {
      function HeadPipe() {
        _classCallCheck(this, HeadPipe);
      }

      _createClass(HeadPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isArray(input)) {
            return input;
          } // Will return undefined if length is 0


          return input[0];
        }
      }]);

      return HeadPipe;
    }();

    HeadPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'head'
    })], HeadPipe);

    var InitialPipe =
    /*#__PURE__*/
    function () {
      function InitialPipe() {
        _classCallCheck(this, InitialPipe);
      }

      _createClass(InitialPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isArray(input)) {
            return input;
          }

          return input.slice(0, input.length - 1);
        }
      }]);

      return InitialPipe;
    }();

    InitialPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'initial'
    })], InitialPipe);

    var LastPipe =
    /*#__PURE__*/
    function () {
      function LastPipe() {
        _classCallCheck(this, LastPipe);
      }

      _createClass(LastPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isArray(input)) {
            return input;
          } // Returns undefined if empty


          return input[input.length - 1];
        }
      }]);

      return LastPipe;
    }();

    LastPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'last'
    })], LastPipe);

    var JoinPipe =
    /*#__PURE__*/
    function () {
      function JoinPipe() {
        _classCallCheck(this, JoinPipe);
      }

      _createClass(JoinPipe, [{
        key: "transform",
        value: function transform(input) {
          var character = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          if (!isArray(input)) {
            return input;
          }

          return input.join(character);
        }
      }]);

      return JoinPipe;
    }();

    JoinPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'join'
    })], JoinPipe);

    var TailPipe =
    /*#__PURE__*/
    function () {
      function TailPipe() {
        _classCallCheck(this, TailPipe);
      }

      _createClass(TailPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isArray(input)) {
            return input;
          }

          return input.slice(1, input.length);
        }
      }]);

      return TailPipe;
    }();

    TailPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'tail'
    })], TailPipe);

    var UniqPipe =
    /*#__PURE__*/
    function () {
      function UniqPipe() {
        _classCallCheck(this, UniqPipe);
      }

      _createClass(UniqPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isArray(input) && !isDeepObject(input)) {
            return input;
          }

          if (isDeepObject(input)) {
            var unwrappedInput = unwrapDeep(input);

            if (!isArray(unwrappedInput)) {
              return unwrappedInput;
            }

            return unwrappedInput.filter(function (value, index) {
              return deepIndexOf(unwrappedInput, value) === index;
            });
          }

          return input.filter(function (value, index) {
            return input.indexOf(value) === index;
          });
        }
      }]);

      return UniqPipe;
    }();

    UniqPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'uniq'
    })], UniqPipe);

    var WithoutPipe =
    /*#__PURE__*/
    function () {
      function WithoutPipe() {
        _classCallCheck(this, WithoutPipe);
      }

      _createClass(WithoutPipe, [{
        key: "transform",
        value: function transform(input) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          if (!isArray(input) && !isDeepObject(input)) {
            return input;
          }

          if (isDeepObject(input)) {
            var unwrappedInput = unwrapDeep(input);

            if (!isArray(unwrappedInput)) {
              return unwrappedInput;
            }

            return unwrappedInput.filter(function (value) {
              return deepIndexOf(args, value) === -1;
            });
          }

          return input.filter(function (value) {
            return args.indexOf(value) === -1;
          });
        }
      }]);

      return WithoutPipe;
    }();

    WithoutPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'without'
    })], WithoutPipe);

    var MapPipe =
    /*#__PURE__*/
    function () {
      function MapPipe() {
        _classCallCheck(this, MapPipe);
      }

      _createClass(MapPipe, [{
        key: "transform",
        value: function transform(input, fn) {
          if (!isArray(input) || !fn) {
            return input;
          }

          return input.map(fn);
        }
      }]);

      return MapPipe;
    }();

    MapPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'map'
    })], MapPipe);

    var WherePipe =
    /*#__PURE__*/
    function () {
      function WherePipe() {
        _classCallCheck(this, WherePipe);
      }

      _createClass(WherePipe, [{
        key: "transform",

        /**
        * Support a function or a value or the shorthand ['key', value] like the lodash shorthand.
        */
        value: function transform(input, fn) {
          if (!isArray(input)) {
            return input;
          }

          if (isFunction(fn)) {
            return input.filter(fn);
          } else if (isArray(fn)) {
            var _fn = _slicedToArray(fn, 2),
                key = _fn[0],
                value = _fn[1];

            return input.filter(function (item) {
              return getProperty(item, key) === value;
            });
          } else if (fn) {
            return input.filter(function (item) {
              return item === fn;
            });
          } else {
            return input;
          }
        }
      }]);

      return WherePipe;
    }();

    WherePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'where'
    })], WherePipe);
    var FirstOrDefaultPipe_1;

    var FirstOrDefaultPipe = FirstOrDefaultPipe_1 =
    /*#__PURE__*/
    function () {
      function FirstOrDefaultPipe() {
        _classCallCheck(this, FirstOrDefaultPipe);
      }

      _createClass(FirstOrDefaultPipe, [{
        key: "transform",
        value: function transform(input, predicate, defaultValue) {
          if (!isArray(input)) {
            return input;
          }

          if (isFunction(predicate)) {
            return FirstOrDefaultPipe_1.find(input, predicate, defaultValue);
          } else if (isArray(predicate)) {
            var _predicate = _slicedToArray(predicate, 2),
                key = _predicate[0],
                value = _predicate[1];

            return FirstOrDefaultPipe_1.find(input, function (item) {
              return getProperty(item, key) === value;
            }, defaultValue);
          } else if (predicate) {
            return FirstOrDefaultPipe_1.find(input, function (item) {
              return item === predicate;
            }, defaultValue);
          } else {
            return input;
          }
        }
      }], [{
        key: "find",
        value: function find(input, predicate, defaultValue) {
          var found = false;
          var result;
          var i = -1;

          while (!found && ++i < input.length) {
            found = predicate(input[i], i, input);
          }

          if (found) {
            result = input[i];
          }

          if (typeof result === 'undefined' && typeof defaultValue !== 'undefined') {
            result = defaultValue;
          }

          return result;
        }
      }]);

      return FirstOrDefaultPipe;
    }();

    FirstOrDefaultPipe = FirstOrDefaultPipe_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'firstOrDefault'
    })], FirstOrDefaultPipe);

    var RangePipe =
    /*#__PURE__*/
    function () {
      function RangePipe() {
        _classCallCheck(this, RangePipe);
      }

      _createClass(RangePipe, [{
        key: "transform",
        value: function transform(_input) {
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
          var range = [];

          for (var length = 0; length < size; ++length) {
            range.push(start);
            start += step;
          }

          return range;
        }
      }]);

      return RangePipe;
    }();

    RangePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'range'
    })], RangePipe);

    var PluckPipe =
    /*#__PURE__*/
    function () {
      function PluckPipe() {
        _classCallCheck(this, PluckPipe);
      }

      _createClass(PluckPipe, [{
        key: "transform",
        value: function transform(input, key) {
          if (!isArray(input) || !key) {
            return input;
          }

          return input.map(function (value) {
            return getProperty(value, key);
          });
        }
      }]);

      return PluckPipe;
    }();

    PluckPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'pluck'
    })], PluckPipe);

    var ReversePipe =
    /*#__PURE__*/
    function () {
      function ReversePipe() {
        _classCallCheck(this, ReversePipe);
      }

      _createClass(ReversePipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isArray(input)) {
            return input;
          }

          return _toConsumableArray(input).reverse();
        }
      }]);

      return ReversePipe;
    }();

    ReversePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'reverse'
    })], ReversePipe);
    var OrderByPipe_1;

    var OrderByPipe = OrderByPipe_1 =
    /*#__PURE__*/
    function () {
      function OrderByPipe() {
        _classCallCheck(this, OrderByPipe);
      }

      _createClass(OrderByPipe, [{
        key: "transform",
        value: function transform(input) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+';

          if (!isArray(input)) {
            return input;
          }

          var configIsArray = isArray(config); // If config === 'param' OR ['param'] 

          if (!configIsArray || configIsArray && config.length === 1) {
            var propertyToCheck = configIsArray ? config[0] : config;
            var first = propertyToCheck.substr(0, 1);
            var desc = first === '-'; // First character is '-'
            // Basic array (if only + or - is present)

            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
              return _toConsumableArray(input).sort(function (a, b) {
                var comparator = OrderByPipe_1._orderBy(a, b);

                return desc ? -comparator : comparator;
              });
            } else {
              // If contains + or -, substring the property
              var property = first === '+' || desc ? propertyToCheck.substr(1) : propertyToCheck;
              return _toConsumableArray(input).sort(function (a, b) {
                var comparator = OrderByPipe_1._orderBy(a[property], b[property]);

                return desc ? -comparator : comparator;
              });
            }
          } else {
            // Config is an array of property
            return _toConsumableArray(input).sort(function (a, b) {
              for (var i = 0; i < config.length; ++i) {
                var _first = config[i].substr(0, 1);

                var _desc = _first === '-';

                var _property = _first === '+' || _desc ? config[i].substr(1) : config[i];

                var comparator = OrderByPipe_1._orderBy(a[_property], b[_property]);

                var comparison = _desc ? -comparator : comparator;

                if (comparison !== 0) {
                  return comparison;
                }
              }

              return 0;
            });
          }
        }
      }], [{
        key: "_orderBy",
        value: function _orderBy(a, b) {
          if (a instanceof Date && b instanceof Date) {
            return a < b ? -1 : a > b ? 1 : 0;
          }

          var floatA = parseFloat(a);
          var floatB = parseFloat(b);

          if (typeof a === 'string' && typeof b === 'string' && (isNaN(floatA) || isNaN(floatB))) {
            var lowerA = a.toLowerCase();
            var lowerB = b.toLowerCase();
            return lowerA < lowerB ? -1 : lowerA > lowerB ? 1 : 0;
          }

          return floatA < floatB ? -1 : floatA > floatB ? 1 : 0;
        }
      }]);

      return OrderByPipe;
    }();

    OrderByPipe = OrderByPipe_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'orderBy'
    })], OrderByPipe);

    var CountPipe =
    /*#__PURE__*/
    function () {
      function CountPipe() {
        _classCallCheck(this, CountPipe);
      }

      _createClass(CountPipe, [{
        key: "transform",
        value: function transform(input) {
          return count(input);
        }
      }]);

      return CountPipe;
    }();

    CountPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'count'
    })], CountPipe);

    var SomePipe =
    /*#__PURE__*/
    function () {
      function SomePipe() {
        _classCallCheck(this, SomePipe);
      }

      _createClass(SomePipe, [{
        key: "transform",
        value: function transform(input, predicate) {
          if (!isArray(input) || !predicate) {
            return input;
          }

          var result = false;
          var i = -1;

          while (++i < input.length && !result) {
            result = predicate(input[i], i, input);
          }

          return result;
        }
      }]);

      return SomePipe;
    }();

    SomePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'some'
    })], SomePipe);

    var EveryPipe =
    /*#__PURE__*/
    function () {
      function EveryPipe() {
        _classCallCheck(this, EveryPipe);
      }

      _createClass(EveryPipe, [{
        key: "transform",
        value: function transform(input, predicate) {
          return every(input, predicate);
        }
      }]);

      return EveryPipe;
    }();

    EveryPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'every'
    })], EveryPipe);

    var ShufflePipe =
    /*#__PURE__*/
    function () {
      function ShufflePipe() {
        _classCallCheck(this, ShufflePipe);
      }

      _createClass(ShufflePipe, [{
        key: "transform",
        value: function transform(input) {
          return shuffle(input);
        }
      }]);

      return ShufflePipe;
    }();

    ShufflePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'shuffle'
    })], ShufflePipe);

    var TakePipe =
    /*#__PURE__*/
    function () {
      function TakePipe() {
        _classCallCheck(this, TakePipe);
      }

      _createClass(TakePipe, [{
        key: "transform",
        value: function transform(input, quantity) {
          if (!isArray(input)) {
            return input;
          }

          return input.slice(0, quantity || 1);
        }
      }]);

      return TakePipe;
    }();

    TakePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'take'
    })], TakePipe);

    var DropPipe =
    /*#__PURE__*/
    function () {
      function DropPipe() {
        _classCallCheck(this, DropPipe);
      }

      _createClass(DropPipe, [{
        key: "transform",
        value: function transform(input, quantity) {
          if (!isArray(input)) {
            return input;
          }

          return input.slice(quantity || 1, input.lenth);
        }
      }]);

      return DropPipe;
    }();

    DropPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'drop'
    })], DropPipe);

    var DeepPipe =
    /*#__PURE__*/
    function () {
      function DeepPipe() {
        _classCallCheck(this, DeepPipe);
      }

      _createClass(DeepPipe, [{
        key: "transform",
        value: function transform(value) {
          if (isDeepObject(value)) {
            return value;
          }

          return wrapDeep(value);
        }
      }]);

      return DeepPipe;
    }();

    DeepPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'deep'
    })], DeepPipe);

    var ChunkPipe =
    /*#__PURE__*/
    function () {
      function ChunkPipe() {
        _classCallCheck(this, ChunkPipe);
      }

      _createClass(ChunkPipe, [{
        key: "transform",
        value: function transform(input) {
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

          if (!isArray(input)) {
            return input;
          }

          return [].concat.apply([], input.map(function (_elem, i) {
            return i % size ? [] : [input.slice(i, i + size)];
          }));
        }
      }]);

      return ChunkPipe;
    }();

    ChunkPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'chunk'
    })], ChunkPipe);

    var FlattenPipe =
    /*#__PURE__*/
    function () {
      function FlattenPipe() {
        _classCallCheck(this, FlattenPipe);
      }

      _createClass(FlattenPipe, [{
        key: "transform",
        value: function transform(input) {
          var isDeep = isDeepObject(input);

          if (!isArray(input) && !isDeep) {
            return input;
          }

          if (isDeep) {
            var unwrapped = unwrapDeep(input);

            if (!isArray(unwrapped)) {
              return unwrapped;
            }

            return flatten(unwrapped, 0);
          }

          return [].concat.apply([], input);
        }
      }]);

      return FlattenPipe;
    }();

    FlattenPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'flatten'
    })], FlattenPipe);

    var IntersectionPipe =
    /*#__PURE__*/
    function () {
      function IntersectionPipe() {
        _classCallCheck(this, IntersectionPipe);
      }

      _createClass(IntersectionPipe, [{
        key: "transform",
        value: function transform(a, b) {
          if (!isArray(a) && !isDeepObject(a) || !isArray(b)) {
            return [];
          }

          if (isDeepObject(a)) {
            var unwrapped = unwrapDeep(a);

            if (!isArray(unwrapped)) {
              return [];
            }

            return unwrapped.reduce(function (intersection, value) {
              return intersection.concat(deepIndexOf(b, value) !== -1 && deepIndexOf(intersection, value) === -1 ? value : []);
            }, []);
          }

          return a.reduce(function (intersection, value) {
            return intersection.concat(b.indexOf(value) !== -1 && intersection.indexOf(value) === -1 ? value : []);
          }, []);
        }
      }]);

      return IntersectionPipe;
    }();

    IntersectionPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'intersection'
    })], IntersectionPipe);

    var UnionPipe =
    /*#__PURE__*/
    function () {
      function UnionPipe() {
        _classCallCheck(this, UnionPipe);
      }

      _createClass(UnionPipe, [{
        key: "transform",
        value: function transform(a, b) {
          if (!isArray(a) && !isDeepObject(a) || !isArray(b)) {
            return [];
          }

          if (isDeepObject(a)) {
            var unwrapped = unwrapDeep(a);

            if (!isArray(unwrapped)) {
              return [];
            }

            return [].concat(unwrapped).concat(b).filter(function (value, index, input) {
              return deepIndexOf(input, value) === index;
            });
          }

          return [].concat(a).concat(b).filter(function (value, index, input) {
            return input.indexOf(value) === index;
          });
        }
      }]);

      return UnionPipe;
    }();

    UnionPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'union'
    })], UnionPipe);

    var TakeWhilePipe =
    /*#__PURE__*/
    function () {
      function TakeWhilePipe() {
        _classCallCheck(this, TakeWhilePipe);
      }

      _createClass(TakeWhilePipe, [{
        key: "transform",
        value: function transform(input, predicate) {
          if (!isArray(input) || isNil(predicate)) {
            return input;
          }

          return takeWhile(input, predicate);
        }
      }]);

      return TakeWhilePipe;
    }();

    TakeWhilePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'takeWhile'
    })], TakeWhilePipe);

    var TakeUntilPipe =
    /*#__PURE__*/
    function () {
      function TakeUntilPipe() {
        _classCallCheck(this, TakeUntilPipe);
      }

      _createClass(TakeUntilPipe, [{
        key: "transform",
        value: function transform(input, predicate) {
          if (!isArray(input) || isNil(predicate)) {
            return input;
          }

          return takeUntil(input, predicate);
        }
      }]);

      return TakeUntilPipe;
    }();

    TakeUntilPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'takeUntil'
    })], TakeUntilPipe);

    var NgArrayPipesModule = function NgArrayPipesModule() {
      _classCallCheck(this, NgArrayPipesModule);
    };

    NgArrayPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [EmptyPipe, HeadPipe, InitialPipe, LastPipe, JoinPipe, TailPipe, UniqPipe, WithoutPipe, MapPipe, WherePipe, RangePipe, PluckPipe, ReversePipe, OrderByPipe, CountPipe, SomePipe, EveryPipe, ShufflePipe, TakePipe, DropPipe, DeepPipe, ChunkPipe, FlattenPipe, FirstOrDefaultPipe, IntersectionPipe, UnionPipe, TakeWhilePipe, TakeUntilPipe],
      exports: [EmptyPipe, HeadPipe, InitialPipe, LastPipe, JoinPipe, TailPipe, UniqPipe, WithoutPipe, MapPipe, WherePipe, RangePipe, PluckPipe, ReversePipe, OrderByPipe, CountPipe, SomePipe, EveryPipe, ShufflePipe, TakePipe, DropPipe, DeepPipe, ChunkPipe, FlattenPipe, FirstOrDefaultPipe, IntersectionPipe, UnionPipe, TakeWhilePipe, TakeUntilPipe]
    })], NgArrayPipesModule);

    var IsGreaterPipe =
    /*#__PURE__*/
    function () {
      function IsGreaterPipe() {
        _classCallCheck(this, IsGreaterPipe);
      }

      _createClass(IsGreaterPipe, [{
        key: "transform",
        value: function transform(first, second) {
          return first > second;
        }
      }]);

      return IsGreaterPipe;
    }();

    IsGreaterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'greater'
    })], IsGreaterPipe);

    var IsGreaterOrEqualPipe =
    /*#__PURE__*/
    function () {
      function IsGreaterOrEqualPipe() {
        _classCallCheck(this, IsGreaterOrEqualPipe);
      }

      _createClass(IsGreaterOrEqualPipe, [{
        key: "transform",
        value: function transform(first, second) {
          return first >= second;
        }
      }]);

      return IsGreaterOrEqualPipe;
    }();

    IsGreaterOrEqualPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'greaterOrEqual'
    })], IsGreaterOrEqualPipe);

    var IsLessPipe =
    /*#__PURE__*/
    function () {
      function IsLessPipe() {
        _classCallCheck(this, IsLessPipe);
      }

      _createClass(IsLessPipe, [{
        key: "transform",
        value: function transform(first, second) {
          return first < second;
        }
      }]);

      return IsLessPipe;
    }();

    IsLessPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'less'
    })], IsLessPipe);

    var IsLessOrEqualPipe =
    /*#__PURE__*/
    function () {
      function IsLessOrEqualPipe() {
        _classCallCheck(this, IsLessOrEqualPipe);
      }

      _createClass(IsLessOrEqualPipe, [{
        key: "transform",
        value: function transform(first, second) {
          return first <= second;
        }
      }]);

      return IsLessOrEqualPipe;
    }();

    IsLessOrEqualPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'lessOrEqual'
    })], IsLessOrEqualPipe);

    var IsEqualPipe =
    /*#__PURE__*/
    function () {
      function IsEqualPipe() {
        _classCallCheck(this, IsEqualPipe);
      }

      _createClass(IsEqualPipe, [{
        key: "transform",
        value: function transform(first, second) {
          return first == second;
        }
      }]);

      return IsEqualPipe;
    }();

    IsEqualPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'equal'
    })], IsEqualPipe);

    var IsNotEqualPipe =
    /*#__PURE__*/
    function () {
      function IsNotEqualPipe() {
        _classCallCheck(this, IsNotEqualPipe);
      }

      _createClass(IsNotEqualPipe, [{
        key: "transform",
        value: function transform(first, second) {
          return first != second;
        }
      }]);

      return IsNotEqualPipe;
    }();

    IsNotEqualPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'notEqual'
    })], IsNotEqualPipe);

    var IsIdenticalPipe =
    /*#__PURE__*/
    function () {
      function IsIdenticalPipe() {
        _classCallCheck(this, IsIdenticalPipe);
      }

      _createClass(IsIdenticalPipe, [{
        key: "transform",
        value: function transform(first, second) {
          return first === second;
        }
      }]);

      return IsIdenticalPipe;
    }();

    IsIdenticalPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'identical'
    })], IsIdenticalPipe);

    var IsNotIdenticalPipe =
    /*#__PURE__*/
    function () {
      function IsNotIdenticalPipe() {
        _classCallCheck(this, IsNotIdenticalPipe);
      }

      _createClass(IsNotIdenticalPipe, [{
        key: "transform",
        value: function transform(first, second) {
          return first !== second;
        }
      }]);

      return IsNotIdenticalPipe;
    }();

    IsNotIdenticalPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'notIdentical'
    })], IsNotIdenticalPipe);

    var IsNullPipe =
    /*#__PURE__*/
    function () {
      function IsNullPipe() {
        _classCallCheck(this, IsNullPipe);
      }

      _createClass(IsNullPipe, [{
        key: "transform",
        value: function transform(value) {
          return isNull(value);
        }
      }]);

      return IsNullPipe;
    }();

    IsNullPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'isNull'
    })], IsNullPipe);

    var IsUndefinedPipe =
    /*#__PURE__*/
    function () {
      function IsUndefinedPipe() {
        _classCallCheck(this, IsUndefinedPipe);
      }

      _createClass(IsUndefinedPipe, [{
        key: "transform",
        value: function transform(value) {
          return isUndefined(value);
        }
      }]);

      return IsUndefinedPipe;
    }();

    IsUndefinedPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'isUndefined'
    })], IsUndefinedPipe);

    var IsNilPipe =
    /*#__PURE__*/
    function () {
      function IsNilPipe() {
        _classCallCheck(this, IsNilPipe);
      }

      _createClass(IsNilPipe, [{
        key: "transform",
        value: function transform(value) {
          return isNil(value);
        }
      }]);

      return IsNilPipe;
    }();

    IsNilPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'isNil'
    })], IsNilPipe);

    var IsFunctionPipe =
    /*#__PURE__*/
    function () {
      function IsFunctionPipe() {
        _classCallCheck(this, IsFunctionPipe);
      }

      _createClass(IsFunctionPipe, [{
        key: "transform",
        value: function transform(value) {
          return isFunction(value);
        }
      }]);

      return IsFunctionPipe;
    }();

    IsFunctionPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'isFunction'
    })], IsFunctionPipe);

    var IsNumberPipe =
    /*#__PURE__*/
    function () {
      function IsNumberPipe() {
        _classCallCheck(this, IsNumberPipe);
      }

      _createClass(IsNumberPipe, [{
        key: "transform",
        value: function transform(value) {
          return isNumber(value);
        }
      }]);

      return IsNumberPipe;
    }();

    IsNumberPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'isNumber'
    })], IsNumberPipe);

    var IsStringPipe =
    /*#__PURE__*/
    function () {
      function IsStringPipe() {
        _classCallCheck(this, IsStringPipe);
      }

      _createClass(IsStringPipe, [{
        key: "transform",
        value: function transform(value) {
          return isString(value);
        }
      }]);

      return IsStringPipe;
    }();

    IsStringPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'isString'
    })], IsStringPipe);

    var IsArrayPipe =
    /*#__PURE__*/
    function () {
      function IsArrayPipe() {
        _classCallCheck(this, IsArrayPipe);
      }

      _createClass(IsArrayPipe, [{
        key: "transform",
        value: function transform(value) {
          return isArray(value);
        }
      }]);

      return IsArrayPipe;
    }();

    IsArrayPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'isArray'
    })], IsArrayPipe);

    var IsObjectPipe =
    /*#__PURE__*/
    function () {
      function IsObjectPipe() {
        _classCallCheck(this, IsObjectPipe);
      }

      _createClass(IsObjectPipe, [{
        key: "transform",
        value: function transform(value) {
          return isObject(value);
        }
      }]);

      return IsObjectPipe;
    }();

    IsObjectPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'isObject'
    })], IsObjectPipe);

    var IsDefinedPipe =
    /*#__PURE__*/
    function () {
      function IsDefinedPipe() {
        _classCallCheck(this, IsDefinedPipe);
      }

      _createClass(IsDefinedPipe, [{
        key: "transform",
        value: function transform(value) {
          return !isUndefined(value);
        }
      }]);

      return IsDefinedPipe;
    }();

    IsDefinedPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'isDefined'
    })], IsDefinedPipe);

    var NgBooleanPipesModule = function NgBooleanPipesModule() {
      _classCallCheck(this, NgBooleanPipesModule);
    };

    NgBooleanPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [IsGreaterPipe, IsGreaterOrEqualPipe, IsLessPipe, IsLessOrEqualPipe, IsEqualPipe, IsNotEqualPipe, IsIdenticalPipe, IsNotIdenticalPipe, IsNilPipe, IsNullPipe, IsUndefinedPipe, IsFunctionPipe, IsNumberPipe, IsStringPipe, IsArrayPipe, IsObjectPipe, IsDefinedPipe],
      exports: [IsGreaterPipe, IsGreaterOrEqualPipe, IsLessPipe, IsLessOrEqualPipe, IsEqualPipe, IsNotEqualPipe, IsIdenticalPipe, IsNotIdenticalPipe, IsNilPipe, IsNullPipe, IsUndefinedPipe, IsFunctionPipe, IsNumberPipe, IsStringPipe, IsArrayPipe, IsObjectPipe, IsDefinedPipe]
    })], NgBooleanPipesModule);
    var BytesPipe_1;

    var BytesPipe = BytesPipe_1 =
    /*#__PURE__*/
    function () {
      function BytesPipe() {
        _classCallCheck(this, BytesPipe);
      }

      _createClass(BytesPipe, [{
        key: "transform",
        value: function transform(input) {
          var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'B';
          var to = arguments.length > 3 ? arguments[3] : undefined;

          if (!(isNumberFinite(input) && isNumberFinite(decimal) && isInteger(decimal) && isPositive(decimal))) {
            return input;
          }

          var bytes = input;
          var unit = from;

          while (unit !== 'B') {
            bytes *= 1024;
            unit = BytesPipe_1.formats[unit].prev;
          }

          if (to) {
            var format = BytesPipe_1.formats[to];
            var result = toDecimal(BytesPipe_1.calculateResult(format, bytes), decimal);
            return BytesPipe_1.formatResult(result, to);
          }

          for (var key in BytesPipe_1.formats) {
            if (BytesPipe_1.formats.hasOwnProperty(key)) {
              var _format = BytesPipe_1.formats[key];

              if (bytes < _format.max) {
                var _result = toDecimal(BytesPipe_1.calculateResult(_format, bytes), decimal);

                return BytesPipe_1.formatResult(_result, key);
              }
            }
          }
        }
      }], [{
        key: "formatResult",
        value: function formatResult(result, unit) {
          return "".concat(result, " ").concat(unit);
        }
      }, {
        key: "calculateResult",
        value: function calculateResult(format, bytes) {
          var prev = format.prev ? BytesPipe_1.formats[format.prev] : undefined;
          return prev ? bytes / prev.max : bytes;
        }
      }]);

      return BytesPipe;
    }();

    BytesPipe.formats = {
      'B': {
        max: 1024
      },
      'kB': {
        max: Math.pow(1024, 2),
        prev: 'B'
      },
      'KB': {
        max: Math.pow(1024, 2),
        prev: 'B'
      },
      'MB': {
        max: Math.pow(1024, 3),
        prev: 'kB'
      },
      'GB': {
        max: Math.pow(1024, 4),
        prev: 'MB'
      },
      'TB': {
        max: Number.MAX_SAFE_INTEGER,
        prev: 'GB'
      }
    };
    BytesPipe = BytesPipe_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'bytes'
    })], BytesPipe);

    var CeilPipe =
    /*#__PURE__*/
    function () {
      function CeilPipe() {
        _classCallCheck(this, CeilPipe);
      }

      _createClass(CeilPipe, [{
        key: "transform",
        value: function transform(value) {
          var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          if (isString(precision)) {
            precision = parseInt(precision);
          }

          return createRound('ceil')(value, precision);
        }
      }]);

      return CeilPipe;
    }();

    CeilPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'ceil'
    })], CeilPipe);

    var FloorPipe =
    /*#__PURE__*/
    function () {
      function FloorPipe() {
        _classCallCheck(this, FloorPipe);
      }

      _createClass(FloorPipe, [{
        key: "transform",
        value: function transform(value) {
          var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          if (isString(precision)) {
            precision = parseInt(precision);
          }

          return createRound('floor')(value, precision);
        }
      }]);

      return FloorPipe;
    }();

    FloorPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'floor'
    })], FloorPipe);

    var RoundPipe =
    /*#__PURE__*/
    function () {
      function RoundPipe() {
        _classCallCheck(this, RoundPipe);
      }

      _createClass(RoundPipe, [{
        key: "transform",
        value: function transform(value) {
          var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          if (isString(precision)) {
            precision = parseInt(precision);
          }

          return createRound('round')(value, precision);
        }
      }]);

      return RoundPipe;
    }();

    RoundPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'round'
    })], RoundPipe);

    var DegreesPipe =
    /*#__PURE__*/
    function () {
      function DegreesPipe() {
        _classCallCheck(this, DegreesPipe);
      }

      _createClass(DegreesPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isNumberFinite(input)) {
            return 'NaN';
          }

          return input * 180 / Math.PI;
        }
      }]);

      return DegreesPipe;
    }();

    DegreesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'degrees'
    })], DegreesPipe);

    var RadiansPipe =
    /*#__PURE__*/
    function () {
      function RadiansPipe() {
        _classCallCheck(this, RadiansPipe);
      }

      _createClass(RadiansPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isNumberFinite(input)) {
            return 'NaN';
          }

          return input * Math.PI / 180;
        }
      }]);

      return RadiansPipe;
    }();

    RadiansPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'radians'
    })], RadiansPipe);

    var RandomPipe =
    /*#__PURE__*/
    function () {
      function RandomPipe() {
        _classCallCheck(this, RandomPipe);
      }

      _createClass(RandomPipe, [{
        key: "transform",
        value: function transform(input) {
          var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

          if (!isNumberFinite(min) || !isNumberFinite(max)) {
            return input;
          }

          if (min > max) {
            max = min;
            min = 0;
          }

          return Math.random() * (max - min) + min;
        }
      }]);

      return RandomPipe;
    }();

    RandomPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'random'
    })], RandomPipe);

    var SqrtPipe =
    /*#__PURE__*/
    function () {
      function SqrtPipe() {
        _classCallCheck(this, SqrtPipe);
      }

      _createClass(SqrtPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isNumberFinite(input)) {
            return 'NaN';
          }

          return Math.sqrt(input);
        }
      }]);

      return SqrtPipe;
    }();

    SqrtPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'sqrt'
    })], SqrtPipe);

    var PowPipe =
    /*#__PURE__*/
    function () {
      function PowPipe() {
        _classCallCheck(this, PowPipe);
      }

      _createClass(PowPipe, [{
        key: "transform",
        value: function transform(input) {
          var power = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

          if (!isNumberFinite(input)) {
            return 'NaN';
          }

          return Math.pow(input, power);
        }
      }]);

      return PowPipe;
    }();

    PowPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'pow'
    })], PowPipe);

    var AbsPipe =
    /*#__PURE__*/
    function () {
      function AbsPipe() {
        _classCallCheck(this, AbsPipe);
      }

      _createClass(AbsPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isNumberFinite(input)) {
            return 'NaN';
          }

          return Math.abs(input);
        }
      }]);

      return AbsPipe;
    }();

    AbsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'abs'
    })], AbsPipe);

    var OrdinalPipe =
    /*#__PURE__*/
    function () {
      function OrdinalPipe() {
        _classCallCheck(this, OrdinalPipe);
      }

      _createClass(OrdinalPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isNumberFinite(input)) {
            return 'NaN';
          }

          if (this.endsWithTenth(input)) {
            return input + 'th';
          } else {
            var cardinal = input.toString().charAt(input.toString().length - 1);

            switch (cardinal) {
              case '1':
                return input + 'st';

              case '2':
                return input + 'nd';

              case '3':
                return input + 'rd';

              default:
                return input + 'th';
            }
          }
        }
      }, {
        key: "endsWithTenth",
        value: function endsWithTenth(input) {
          var beforeLastDigit = input.toString().charAt(input.toString().length - 2);
          return beforeLastDigit === '1';
        }
      }]);

      return OrdinalPipe;
    }();

    OrdinalPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'ordinal'
    })], OrdinalPipe);

    var NgMathPipesModule = function NgMathPipesModule() {
      _classCallCheck(this, NgMathPipesModule);
    };

    NgMathPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [BytesPipe, CeilPipe, FloorPipe, RoundPipe, DegreesPipe, RadiansPipe, RandomPipe, SqrtPipe, PowPipe, AbsPipe, OrdinalPipe],
      exports: [BytesPipe, CeilPipe, FloorPipe, RoundPipe, DegreesPipe, RadiansPipe, RandomPipe, SqrtPipe, PowPipe, AbsPipe, OrdinalPipe]
    })], NgMathPipesModule);

    var KeysPipe =
    /*#__PURE__*/
    function () {
      function KeysPipe() {
        _classCallCheck(this, KeysPipe);
      }

      _createClass(KeysPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isObject(input)) {
            return input;
          }

          return Object.keys(input);
        }
      }]);

      return KeysPipe;
    }();

    KeysPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'keys'
    })], KeysPipe);

    var ToArrayPipe =
    /*#__PURE__*/
    function () {
      function ToArrayPipe() {
        _classCallCheck(this, ToArrayPipe);
      }

      _createClass(ToArrayPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isObject(input)) {
            return input;
          }

          return Object.keys(input).map(function (value) {
            return input[value];
          });
        }
      }]);

      return ToArrayPipe;
    }();

    ToArrayPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'toArray'
    })], ToArrayPipe);

    var DefaultsPipe =
    /*#__PURE__*/
    function () {
      function DefaultsPipe() {
        _classCallCheck(this, DefaultsPipe);
      }

      _createClass(DefaultsPipe, [{
        key: "transform",
        value: function transform(input, defaults) {
          if (!isObject(defaults)) {
            return input;
          }

          if (isNil(input)) {
            return defaults;
          }

          if (isArray(input)) {
            return input.map(function (item) {
              if (isObject(item)) {
                return Object.assign({}, defaults, item);
              }

              if (isNil(item)) {
                return defaults;
              }

              return item;
            });
          }

          if (isObject(input)) {
            return Object.assign({}, defaults, input);
          }

          return input;
        }
      }]);

      return DefaultsPipe;
    }();

    DefaultsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'defaults'
    })], DefaultsPipe);

    var NgObjectPipesModule = function NgObjectPipesModule() {
      _classCallCheck(this, NgObjectPipesModule);
    };

    NgObjectPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [KeysPipe, ToArrayPipe, DefaultsPipe],
      exports: [KeysPipe, ToArrayPipe, DefaultsPipe]
    })], NgObjectPipesModule);

    var LeftPadPipe =
    /*#__PURE__*/
    function () {
      function LeftPadPipe() {
        _classCallCheck(this, LeftPadPipe);
      }

      _createClass(LeftPadPipe, [{
        key: "transform",
        value: function transform(input) {
          var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var character = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

          if (!isString(input)) {
            return input;
          }

          return leftPad(input, length, character);
        }
      }]);

      return LeftPadPipe;
    }();

    LeftPadPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'leftpad'
    })], LeftPadPipe);

    var MatchPipe =
    /*#__PURE__*/
    function () {
      function MatchPipe() {
        _classCallCheck(this, MatchPipe);
      }

      _createClass(MatchPipe, [{
        key: "transform",
        value: function transform(input, pattern, flag) {
          if (!isString(input)) {
            return input;
          }

          var regexp = pattern instanceof RegExp ? pattern : new RegExp(pattern, flag);
          return input.match(regexp);
        }
      }]);

      return MatchPipe;
    }();

    MatchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'match'
    })], MatchPipe);

    var PadPipe =
    /*#__PURE__*/
    function () {
      function PadPipe() {
        _classCallCheck(this, PadPipe);
      }

      _createClass(PadPipe, [{
        key: "transform",
        value: function transform(input) {
          var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var character = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

          if (!isString(input)) {
            return input;
          }

          return pad(input, length, character);
        }
      }]);

      return PadPipe;
    }();

    PadPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'pad'
    })], PadPipe);

    var ReplacePipe =
    /*#__PURE__*/
    function () {
      function ReplacePipe() {
        _classCallCheck(this, ReplacePipe);
      }

      _createClass(ReplacePipe, [{
        key: "transform",
        value: function transform(input, pattern, replacement) {
          if (!isString(input) || isUndefined(pattern) || isUndefined(replacement)) {
            return input;
          }

          return input.replace(pattern, replacement);
        }
      }]);

      return ReplacePipe;
    }();

    ReplacePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'replace'
    })], ReplacePipe);

    var RightPadPipe =
    /*#__PURE__*/
    function () {
      function RightPadPipe() {
        _classCallCheck(this, RightPadPipe);
      }

      _createClass(RightPadPipe, [{
        key: "transform",
        value: function transform(input) {
          var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var character = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

          if (!isString(input)) {
            return input;
          }

          return rightPad(input, length, character);
        }
      }]);

      return RightPadPipe;
    }();

    RightPadPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'rightpad'
    })], RightPadPipe);

    var SplitPipe =
    /*#__PURE__*/
    function () {
      function SplitPipe() {
        _classCallCheck(this, SplitPipe);
      }

      _createClass(SplitPipe, [{
        key: "transform",
        value: function transform(input) {
          var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
          var limit = arguments.length > 2 ? arguments[2] : undefined;

          if (!isString(input)) {
            return input;
          }

          return input.split(separator, limit);
        }
      }]);

      return SplitPipe;
    }();

    SplitPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'split'
    })], SplitPipe);

    var TestPipe =
    /*#__PURE__*/
    function () {
      function TestPipe() {
        _classCallCheck(this, TestPipe);
      }

      _createClass(TestPipe, [{
        key: "transform",
        value: function transform(input, pattern, flag) {
          if (!isString(input) || !pattern) {
            return input;
          }

          var regexp = pattern instanceof RegExp ? pattern : new RegExp(pattern, flag);
          return regexp.test(input);
        }
      }]);

      return TestPipe;
    }();

    TestPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'test'
    })], TestPipe);

    var TrimPipe =
    /*#__PURE__*/
    function () {
      function TrimPipe() {
        _classCallCheck(this, TrimPipe);
      }

      _createClass(TrimPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isString(input)) {
            return input;
          }

          return input.trim();
        }
      }]);

      return TrimPipe;
    }();

    TrimPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'trim'
    })], TrimPipe);

    var NewlinesPipe =
    /*#__PURE__*/
    function () {
      function NewlinesPipe() {
        _classCallCheck(this, NewlinesPipe);
      }

      _createClass(NewlinesPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isString(input)) {
            return input;
          }

          return input.replace(/(?:\r\n|\r|\n)/g, '<br />');
        }
      }]);

      return NewlinesPipe;
    }();

    NewlinesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'newlines'
    })], NewlinesPipe);

    var CapitalizePipe =
    /*#__PURE__*/
    function () {
      function CapitalizePipe() {
        _classCallCheck(this, CapitalizePipe);
      }

      _createClass(CapitalizePipe, [{
        key: "transform",
        value: function transform(input) {
          var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (!isString(input)) {
            return input;
          }

          if (!all) {
            return upperFirst(input.toLowerCase());
          } else {
            return input.toLowerCase().split(' ').map(function (value) {
              return upperFirst(value);
            }).join(' ');
          }
        }
      }]);

      return CapitalizePipe;
    }();

    CapitalizePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'capitalize'
    })], CapitalizePipe);

    var UpperFirstPipe =
    /*#__PURE__*/
    function () {
      function UpperFirstPipe() {
        _classCallCheck(this, UpperFirstPipe);
      }

      _createClass(UpperFirstPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isString(input)) {
            return input;
          }

          return upperFirst(input);
        }
      }]);

      return UpperFirstPipe;
    }();

    UpperFirstPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'upperfirst'
    })], UpperFirstPipe);

    var TemplatePipe =
    /*#__PURE__*/
    function () {
      function TemplatePipe() {
        _classCallCheck(this, TemplatePipe);
      }

      _createClass(TemplatePipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isString(input) || (arguments.length <= 1 ? 0 : arguments.length - 1) === 0) {
            return input;
          }

          var template = input;

          for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); ++i) {
            template = template.replace("$".concat(i + 1), i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
          }

          return template;
        }
      }]);

      return TemplatePipe;
    }();

    TemplatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'template'
    })], TemplatePipe);

    var EncodeURIPipe =
    /*#__PURE__*/
    function () {
      function EncodeURIPipe() {
        _classCallCheck(this, EncodeURIPipe);
      }

      _createClass(EncodeURIPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isString(input)) {
            return input;
          }

          return encodeURI(input);
        }
      }]);

      return EncodeURIPipe;
    }();

    EncodeURIPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'encodeURI'
    })], EncodeURIPipe);

    var EncodeURIComponentPipe =
    /*#__PURE__*/
    function () {
      function EncodeURIComponentPipe() {
        _classCallCheck(this, EncodeURIComponentPipe);
      }

      _createClass(EncodeURIComponentPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isString(input)) {
            return input;
          }

          return encodeURIComponent(input);
        }
      }]);

      return EncodeURIComponentPipe;
    }();

    EncodeURIComponentPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'encodeURIComponent'
    })], EncodeURIComponentPipe);

    var DecodeURIPipe =
    /*#__PURE__*/
    function () {
      function DecodeURIPipe() {
        _classCallCheck(this, DecodeURIPipe);
      }

      _createClass(DecodeURIPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isString(input)) {
            return input;
          }

          return decodeURI(input);
        }
      }]);

      return DecodeURIPipe;
    }();

    DecodeURIPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'decodeURI'
    })], DecodeURIPipe);

    var DecodeURIComponentPipe =
    /*#__PURE__*/
    function () {
      function DecodeURIComponentPipe() {
        _classCallCheck(this, DecodeURIComponentPipe);
      }

      _createClass(DecodeURIComponentPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isString(input)) {
            return input;
          }

          return decodeURIComponent(input);
        }
      }]);

      return DecodeURIComponentPipe;
    }();

    DecodeURIComponentPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'decodeURIComponent'
    })], DecodeURIComponentPipe); // Inspired from https://github.com/a8m/angular-filter/blob/master/src/_filter/string/truncate.js

    var TruncatePipe =
    /*#__PURE__*/
    function () {
      function TruncatePipe() {
        _classCallCheck(this, TruncatePipe);
      }

      _createClass(TruncatePipe, [{
        key: "transform",
        value: function transform(input, length, suffix, preserve) {
          if (!isString(input)) {
            return input;
          }

          length = isUndefined(length) ? input.length : length;

          if (input.length <= length) {
            return input;
          }

          preserve = preserve || false;
          suffix = suffix || '';
          var index = length;

          if (preserve) {
            if (input.indexOf(' ', length) === -1) {
              index = input.length;
            } else {
              index = input.indexOf(' ', length);
            }
          }

          return input.substring(0, index) + suffix;
        }
      }]);

      return TruncatePipe;
    }();

    TruncatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'truncate'
    })], TruncatePipe);

    var RepeatPipe =
    /*#__PURE__*/
    function () {
      function RepeatPipe() {
        _classCallCheck(this, RepeatPipe);
      }

      _createClass(RepeatPipe, [{
        key: "transform",
        value: function transform(input) {
          var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var characters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

          if (!isString(input)) {
            return input;
          }

          if (times <= 0) {
            times = 1;
          }

          var repeated = [input];

          for (var i = 1; i < times; ++i) {
            repeated.push(input);
          }

          return repeated.join(characters);
        }
      }]);

      return RepeatPipe;
    }();

    RepeatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'repeat'
    })], RepeatPipe);

    var SlugifyPipe =
    /*#__PURE__*/
    function () {
      function SlugifyPipe() {
        _classCallCheck(this, SlugifyPipe);
      }

      _createClass(SlugifyPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isString(input)) {
            return input;
          }

          return input.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, ' ').replace(/[\s-]+/g, '-');
        }
      }]);

      return SlugifyPipe;
    }();

    SlugifyPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'slugify'
    })], SlugifyPipe); // idea from https://github.com/a8m/angular-filter

    var StripTagsPipe =
    /*#__PURE__*/
    function () {
      function StripTagsPipe() {
        _classCallCheck(this, StripTagsPipe);
      }

      _createClass(StripTagsPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isString(input) || isUndefined(input)) return input;
          return input.replace(/<\S[^><]*>/g, '');
        }
      }]);

      return StripTagsPipe;
    }();

    StripTagsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'stripTags'
    })], StripTagsPipe); // idea from https://github.com/a8m/angular-filter

    var LatinizePipe =
    /*#__PURE__*/
    function () {
      function LatinizePipe() {
        _classCallCheck(this, LatinizePipe);
      }

      _createClass(LatinizePipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isString(input) || isUndefined(input)) {
            return input;
          }

          var replacementList = [{
            base: ' ',
            chars: "\xA0"
          }, {
            base: '0',
            chars: "\u07C0"
          }, {
            base: 'A',
            chars: "\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
          }, {
            base: 'AA',
            chars: "\uA732"
          }, {
            base: 'AE',
            chars: "\xC6\u01FC\u01E2"
          }, {
            base: 'AO',
            chars: "\uA734"
          }, {
            base: 'AU',
            chars: "\uA736"
          }, {
            base: 'AV',
            chars: "\uA738\uA73A"
          }, {
            base: 'AY',
            chars: "\uA73C"
          }, {
            base: 'B',
            chars: "\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0181"
          }, {
            base: 'C',
            chars: "\u24B8\uFF23\uA73E\u1E08\u0106C\u0108\u010A\u010C\xC7\u0187\u023B"
          }, {
            base: 'D',
            chars: "\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018A\u0189\u1D05\uA779"
          }, {
            base: 'Dh',
            chars: "\xD0"
          }, {
            base: 'DZ',
            chars: "\u01F1\u01C4"
          }, {
            base: 'Dz',
            chars: "\u01F2\u01C5"
          }, {
            base: 'E',
            chars: "\u025B\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E\u1D07"
          }, {
            base: 'F',
            chars: "\uA77C\u24BB\uFF26\u1E1E\u0191\uA77B"
          }, {
            base: 'G',
            chars: "\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E\u0262"
          }, {
            base: 'H',
            chars: "\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
          }, {
            base: 'I',
            chars: "\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
          }, {
            base: 'J',
            chars: "\u24BF\uFF2A\u0134\u0248\u0237"
          }, {
            base: 'K',
            chars: "\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
          }, {
            base: 'L',
            chars: "\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
          }, {
            base: 'LJ',
            chars: "\u01C7"
          }, {
            base: 'Lj',
            chars: "\u01C8"
          }, {
            base: 'M',
            chars: "\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C\u03FB"
          }, {
            base: 'N',
            chars: "\uA7A4\u0220\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u019D\uA790\u1D0E"
          }, {
            base: 'NJ',
            chars: "\u01CA"
          }, {
            base: 'Nj',
            chars: "\u01CB"
          }, {
            base: 'O',
            chars: "\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
          }, {
            base: 'OE',
            chars: "\u0152"
          }, {
            base: 'OI',
            chars: "\u01A2"
          }, {
            base: 'OO',
            chars: "\uA74E"
          }, {
            base: 'OU',
            chars: "\u0222"
          }, {
            base: 'P',
            chars: "\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
          }, {
            base: 'Q',
            chars: "\u24C6\uFF31\uA756\uA758\u024A"
          }, {
            base: 'R',
            chars: "\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
          }, {
            base: 'S',
            chars: "\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
          }, {
            base: 'T',
            chars: "\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
          }, {
            base: 'Th',
            chars: "\xDE"
          }, {
            base: 'TZ',
            chars: "\uA728"
          }, {
            base: 'U',
            chars: "\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
          }, {
            base: 'V',
            chars: "\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
          }, {
            base: 'VY',
            chars: "\uA760"
          }, {
            base: 'W',
            chars: "\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
          }, {
            base: 'X',
            chars: "\u24CD\uFF38\u1E8A\u1E8C"
          }, {
            base: 'Y',
            chars: "\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
          }, {
            base: 'Z',
            chars: "\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
          }, {
            base: 'a',
            chars: "\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251"
          }, {
            base: 'aa',
            chars: "\uA733"
          }, {
            base: 'ae',
            chars: "\xE6\u01FD\u01E3"
          }, {
            base: 'ao',
            chars: "\uA735"
          }, {
            base: 'au',
            chars: "\uA737"
          }, {
            base: 'av',
            chars: "\uA739\uA73B"
          }, {
            base: 'ay',
            chars: "\uA73D"
          }, {
            base: 'b',
            chars: "\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253\u0182"
          }, {
            base: 'c',
            chars: "\uFF43\u24D2\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
          }, {
            base: 'd',
            chars: "\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\u018B\u13E7\u0501\uA7AA"
          }, {
            base: 'dh',
            chars: "\xF0"
          }, {
            base: 'dz',
            chars: "\u01F3\u01C6"
          }, {
            base: 'e',
            chars: "\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u01DD"
          }, {
            base: 'f',
            chars: "\u24D5\uFF46\u1E1F\u0192"
          }, {
            base: 'ff',
            chars: "\uFB00"
          }, {
            base: 'fi',
            chars: "\uFB01"
          }, {
            base: 'fl',
            chars: "\uFB02"
          }, {
            base: 'ffi',
            chars: "\uFB03"
          }, {
            base: 'ffl',
            chars: "\uFB04"
          }, {
            base: 'g',
            chars: "\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\uA77F\u1D79"
          }, {
            base: 'h',
            chars: "\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
          }, {
            base: 'hv',
            chars: "\u0195"
          }, {
            base: 'i',
            chars: "\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
          }, {
            base: 'j',
            chars: "\u24D9\uFF4A\u0135\u01F0\u0249"
          }, {
            base: 'k',
            chars: "\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
          }, {
            base: 'l',
            chars: "\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747\u026D"
          }, {
            base: 'lj',
            chars: "\u01C9"
          }, {
            base: 'm',
            chars: "\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
          }, {
            base: 'n',
            chars: "\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509"
          }, {
            base: 'nj',
            chars: "\u01CC"
          }, {
            base: 'o',
            chars: "\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\uA74B\uA74D\u0275\u0254\u1D11"
          }, {
            base: 'oe',
            chars: "\u0153"
          }, {
            base: 'oi',
            chars: "\u01A3"
          }, {
            base: 'oo',
            chars: "\uA74F"
          }, {
            base: 'ou',
            chars: "\u0223"
          }, {
            base: 'p',
            chars: "\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755\u03C1"
          }, {
            base: 'q',
            chars: "\u24E0\uFF51\u024B\uA757\uA759"
          }, {
            base: 'r',
            chars: "\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
          }, {
            base: 's',
            chars: "\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u0282"
          }, {
            base: 'ss',
            chars: "\xDF"
          }, {
            base: 't',
            chars: "\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
          }, {
            base: 'th',
            chars: "\xFE"
          }, {
            base: 'tz',
            chars: "\uA729"
          }, {
            base: 'u',
            chars: "\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
          }, {
            base: 'v',
            chars: "\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
          }, {
            base: 'vy',
            chars: "\uA761"
          }, {
            base: 'w',
            chars: "\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
          }, {
            base: 'x',
            chars: "\u24E7\uFF58\u1E8B\u1E8D"
          }, {
            base: 'y',
            chars: "\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
          }, {
            base: 'z',
            chars: "\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
          }];
          var diacriticsMap = {};

          for (var i = 0; i < replacementList.length; i += 1) {
            var chars = replacementList[i].chars;

            for (var j = 0; j < chars.length; j += 1) {
              diacriticsMap[chars[j]] = replacementList[i].base;
            }
          }

          return input.replace(/[^\u0000-\u007e]/g, function (c) {
            return diacriticsMap[c] || c;
          });
        }
      }]);

      return LatinizePipe;
    }();

    LatinizePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'latinize'
    })], LatinizePipe); // idea from https://github.com/a8m/angular-filter

    var WrapPipe =
    /*#__PURE__*/
    function () {
      function WrapPipe() {
        _classCallCheck(this, WrapPipe);
      }

      _createClass(WrapPipe, [{
        key: "transform",
        value: function transform(input, wrap, ends) {
          return isString(input) && !isUndefined(wrap) ? [wrap, input, ends || wrap].join('') : input;
        }
      }]);

      return WrapPipe;
    }();

    WrapPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'wrap'
    })], WrapPipe);

    var WithPipe =
    /*#__PURE__*/
    function () {
      function WithPipe() {
        _classCallCheck(this, WithPipe);
      }

      _createClass(WithPipe, [{
        key: "transform",
        value: function transform(input) {
          var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var ends = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var csensitive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          if (!isString(input) || isNull(start) && isNull(ends) || start == '' || ends == '') {
            return input;
          }

          input = csensitive ? input : input.toLowerCase();

          if (!isNull(start) && !isNull(ends)) {
            var a = !input.indexOf(csensitive ? start : start.toLowerCase());
            var b = input.indexOf(csensitive ? ends : ends.toLowerCase(), input.length - ends.length) !== -1;

            if (a == true && b == true) {
              return true;
            } else {
              return false;
            }
          }

          if (!isNull(start)) {
            return !input.indexOf(csensitive ? start : start.toLowerCase());
          }

          if (!isNull(ends)) {
            var position = input.length - ends.length;
            return input.indexOf(csensitive ? ends : ends.toLowerCase(), position) !== -1;
          }
        }
      }]);

      return WithPipe;
    }();

    WithPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'with'
    })], WithPipe);

    var ReverseStrPipe =
    /*#__PURE__*/
    function () {
      function ReverseStrPipe() {
        _classCallCheck(this, ReverseStrPipe);
      }

      _createClass(ReverseStrPipe, [{
        key: "transform",
        value: function transform(input) {
          if (!isString(input)) {
            return input;
          }

          return Array.from(input).reverse().join('');
        }
      }]);

      return ReverseStrPipe;
    }();

    ReverseStrPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'reverseStr'
    })], ReverseStrPipe);

    var NgStringPipesModule = function NgStringPipesModule() {
      _classCallCheck(this, NgStringPipesModule);
    };

    NgStringPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [LeftPadPipe, MatchPipe, PadPipe, ReplacePipe, RightPadPipe, SplitPipe, TestPipe, TrimPipe, NewlinesPipe, CapitalizePipe, UpperFirstPipe, TemplatePipe, EncodeURIPipe, EncodeURIComponentPipe, DecodeURIPipe, DecodeURIComponentPipe, TruncatePipe, RepeatPipe, SlugifyPipe, StripTagsPipe, LatinizePipe, WrapPipe, WithPipe, ReverseStrPipe],
      exports: [LeftPadPipe, MatchPipe, PadPipe, ReplacePipe, RightPadPipe, SplitPipe, TestPipe, TrimPipe, NewlinesPipe, CapitalizePipe, UpperFirstPipe, TemplatePipe, EncodeURIPipe, EncodeURIComponentPipe, DecodeURIPipe, DecodeURIComponentPipe, TruncatePipe, RepeatPipe, SlugifyPipe, StripTagsPipe, LatinizePipe, WrapPipe, WithPipe, ReverseStrPipe]
    })], NgStringPipesModule);

    var NgPipesModule = function NgPipesModule() {
      _classCallCheck(this, NgPipesModule);
    };

    NgPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [NgArrayPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgStringPipesModule, NgObjectPipesModule, NgAggregatePipesModule]
    })], NgPipesModule); //# sourceMappingURL=angular-pipes.js.map

    /***/
  },

  /***/
  "./node_modules/dayjs/plugin/relativeTime.js":
  /*!***************************************************!*\
    !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDayjsPluginRelativeTimeJs(module, exports, __webpack_require__) {
    !function (e, r) {
      true ? module.exports = r() : undefined;
    }(this, function () {
      "use strict";

      return function (e, r, t) {
        var n = r.prototype;
        t.en.relativeTime = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };

        var o = function o(e, r, n, _o) {
          for (var d, i, a = n.$locale().relativeTime, u = [{
            l: "s",
            r: 44,
            d: "second"
          }, {
            l: "m",
            r: 89
          }, {
            l: "mm",
            r: 44,
            d: "minute"
          }, {
            l: "h",
            r: 89
          }, {
            l: "hh",
            r: 21,
            d: "hour"
          }, {
            l: "d",
            r: 35
          }, {
            l: "dd",
            r: 25,
            d: "day"
          }, {
            l: "M",
            r: 45
          }, {
            l: "MM",
            r: 10,
            d: "month"
          }, {
            l: "y",
            r: 17
          }, {
            l: "yy",
            d: "year"
          }], f = u.length, s = 0; s < f; s += 1) {
            var l = u[s];
            l.d && (d = _o ? t(e).diff(n, l.d, !0) : n.diff(e, l.d, !0));
            var m = Math.ceil(Math.abs(d));

            if (m <= l.r || !l.r) {
              i = a[l.l].replace("%d", m);
              break;
            }
          }

          return r ? i : (d > 0 ? a.future : a.past).replace("%s", i);
        };

        n.to = function (e, r) {
          return o(e, r, this, !0);
        }, n.from = function (e, r) {
          return o(e, r, this);
        }, n.toNow = function (e) {
          return this.to(t(), e);
        }, n.fromNow = function (e) {
          return this.from(t(), e);
        };
      };
    });
    /***/
  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
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


    var angular_pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-pipes */
    "./node_modules/angular-pipes/fesm2015/angular-pipes.js");
    /* harmony import */


    var _time_difference_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./time-difference.pipe */
    "./src/app/pipes/time-difference.pipe.ts");
    /* harmony import */


    var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./time-ago.pipe */
    "./src/app/pipes/time-ago.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_4__["NgMathPipesModule"]],
      declarations: [_time_difference_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeDifferencePipe"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_6__["TimeAgoPipe"]],
      exports: [angular_pipes__WEBPACK_IMPORTED_MODULE_4__["FloorPipe"], _time_difference_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeDifferencePipe"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_6__["TimeAgoPipe"]],
      entryComponents: []
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/pipes/time-ago.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/time-ago.pipe.ts ***!
    \****************************************/

  /*! exports provided: TimeAgoPipe */

  /***/
  function srcAppPipesTimeAgoPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function () {
      return TimeAgoPipe;
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


    var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dayjs/plugin/relativeTime */
    "./node_modules/dayjs/plugin/relativeTime.js");
    /* harmony import */


    var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__); // When fixed, uncomment this
    // import * as dayjs from 'dayjs';
    // TODO:  dayjs is throiwing this ERROR:
    //        error TS2339: Property 'to' does not exist on type 'Dayjs'.
    // Luckily there is a PR which solves it (https://github.com/iamkun/dayjs/issues/297#issuecomment-442748858)
    // When fixed, remove this line:


    var dayjs = dayjs__WEBPACK_IMPORTED_MODULE_2__;

    var TimeAgoPipe =
    /*#__PURE__*/
    function () {
      function TimeAgoPipe() {
        _classCallCheck(this, TimeAgoPipe);
      }

      _createClass(TimeAgoPipe, [{
        key: "transform",
        value: function transform(value) {
          dayjs.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default.a);
          var timeAgo = '';

          if (value) {
            var withoutSuffix = dayjs(value).diff(dayjs(), 'day') < 0 ? false : true;
            timeAgo = dayjs().to(dayjs(value), withoutSuffix);
          }

          return timeAgo;
        }
      }]);

      return TimeAgoPipe;
    }();

    TimeAgoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'appTimeAgo'
    })], TimeAgoPipe);
    /***/
  },

  /***/
  "./src/app/pipes/time-difference.pipe.ts":
  /*!***********************************************!*\
    !*** ./src/app/pipes/time-difference.pipe.ts ***!
    \***********************************************/

  /*! exports provided: TimeDifferencePipe */

  /***/
  function srcAppPipesTimeDifferencePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeDifferencePipe", function () {
      return TimeDifferencePipe;
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


    var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__); // When fixed, uncomment this
    // import * as dayjs from 'dayjs';
    // TODO:  dayjs is throiwing this ERROR:
    //        error TS2339: Property 'to' does not exist on type 'Dayjs'.
    // Luckily there is a PR which solves it (https://github.com/iamkun/dayjs/issues/297#issuecomment-442748858)
    // When fixed, remove this line:


    var dayjs = dayjs__WEBPACK_IMPORTED_MODULE_2__;

    var TimeDifferencePipe =
    /*#__PURE__*/
    function () {
      function TimeDifferencePipe() {
        _classCallCheck(this, TimeDifferencePipe);
      }

      _createClass(TimeDifferencePipe, [{
        key: "transform",
        value: function transform(value) {
          return dayjs(value).diff(dayjs(), 'day');
        }
      }]);

      return TimeDifferencePipe;
    }();

    TimeDifferencePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'appTimeDifference'
    })], TimeDifferencePipe);
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

  }
}]);
//# sourceMappingURL=default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5-es5.js.map