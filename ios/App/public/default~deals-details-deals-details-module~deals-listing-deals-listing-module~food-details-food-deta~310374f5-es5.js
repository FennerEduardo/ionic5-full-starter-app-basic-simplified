function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"], {
  /***/
  "./node_modules/angular-pipes/__ivy_ngcc__/fesm2015/angular-pipes.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/angular-pipes/__ivy_ngcc__/fesm2015/angular-pipes.js ***!
    \***************************************************************************/

  /*! exports provided: AbsPipe, BytesPipe, CapitalizePipe, CeilPipe, ChunkPipe, CountPipe, DecodeURIComponentPipe, DecodeURIPipe, DeepPipe, DefaultsPipe, DegreesPipe, DropPipe, EmptyPipe, EncodeURIComponentPipe, EncodeURIPipe, EveryPipe, FirstOrDefaultPipe, FlattenPipe, FloorPipe, GroupByPipe, HeadPipe, InitialPipe, IntersectionPipe, IsArrayPipe, IsDefinedPipe, IsEqualPipe, IsFunctionPipe, IsGreaterOrEqualPipe, IsGreaterPipe, IsIdenticalPipe, IsLessOrEqualPipe, IsLessPipe, IsNilPipe, IsNotEqualPipe, IsNotIdenticalPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe, IsUndefinedPipe, JoinPipe, KeysPipe, LastPipe, LatinizePipe, LeftPadPipe, MapPipe, MatchPipe, MaxPipe, MeanPipe, MinPipe, NewlinesPipe, NgAbsPipeModule, NgAggregatePipesModule, NgArrayPipesModule, NgBooleanPipesModule, NgBytesPipeModule, NgCapitalizePipeModule, NgCeilPipeModule, NgChunkPipeModule, NgConditionsPipesModule, NgCountPipeModule, NgDecodeURIComponentPipeModule, NgDecodeURIPipeModule, NgDeepPipeModule, NgDefaultsPipeModule, NgDegreesPipeModule, NgDropPipeModule, NgEmptyPipeModule, NgEncodeURIComponentPipeModule, NgEncodeURIPipeModule, NgEveryPipeModule, NgFirstOrDefaultPipeModule, NgFlattenPipeModule, NgFloorPipeModule, NgGroupByPipeModule, NgHeadPipeModule, NgInitialPipeModule, NgIntersectionPipeModule, NgIsArrayPipeModule, NgIsDefinedPipeModule, NgIsEqualPipeModule, NgIsFunctionPipeModule, NgIsGreaterOrEqualPipeModule, NgIsGreaterPipeModule, NgIsIdenticalPipeModule, NgIsLessOrEqualPipeModule, NgIsLessPipeModule, NgIsNilPipeModule, NgIsNotEqualPipeModule, NgIsNotIdenticalPipeModule, NgIsNullPipeModule, NgIsNumberPipeModule, NgIsObjectPipeModule, NgIsStringPipeModule, NgIsUndefinedPipeModule, NgJoinPipeModule, NgKeysPipeModule, NgLastPipeModule, NgLatinizePipeModule, NgLeftPadPipeModule, NgMapPipeModule, NgMatchPipeModule, NgMathPipesModule, NgMaxPipeModule, NgMeanPipeModule, NgMinPipeModule, NgNewlinesPipeModule, NgObjectPipesModule, NgOrderByPipeModule, NgOrdinalPipeModule, NgPadPipeModule, NgPipesModule, NgPluckPipeModule, NgPowPipeModule, NgRadiansPipeModule, NgRandomPipeModule, NgRangePipeModule, NgRepeatPipeModule, NgReplacePipeModule, NgReversePipeModule, NgReverseStrPipeModule, NgRightPadPipeModule, NgRoundPipeModule, NgShufflePipeModule, NgSlugifyPipeModule, NgSomePipeModule, NgSplitPipeModule, NgSqrtPipeModule, NgStringPipesModule, NgStripTagsPipeModule, NgSumPipeModule, NgTailPipeModule, NgTakePipeModule, NgTakeUntilPipeModule, NgTakeWhilePipeModule, NgTemplatePipeModule, NgTestPipeModule, NgToArrayPipeModule, NgTrimPipeModule, NgTruncatePipeModule, NgTypesPipesModule, NgUnionPipeModule, NgUniqPipeModule, NgUpperFirstPipeModule, NgWherePipeModule, NgWithPipeModule, NgWithoutPipeModule, NgWrapPipeModule, OrderByPipe, OrdinalPipe, PadPipe, PluckPipe, PowPipe, RadiansPipe, RandomPipe, RangePipe, RepeatPipe, ReplacePipe, ReversePipe, ReverseStrPipe, RightPadPipe, RoundPipe, ShufflePipe, SlugifyPipe, SomePipe, SplitPipe, SqrtPipe, StripTagsPipe, SumPipe, TailPipe, TakePipe, TakeUntilPipe, TakeWhilePipe, TemplatePipe, TestPipe, ToArrayPipe, TrimPipe, TruncatePipe, UnionPipe, UniqPipe, UpperFirstPipe, WherePipe, WithPipe, WithoutPipe, WrapPipe */

  /***/
  function node_modulesAngularPipes__ivy_ngcc__Fesm2015AngularPipesJs(module, __webpack_exports__, __webpack_require__) {
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


    __webpack_require__.d(__webpack_exports__, "NgAbsPipeModule", function () {
      return NgAbsPipeModule;
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


    __webpack_require__.d(__webpack_exports__, "NgBytesPipeModule", function () {
      return NgBytesPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgCapitalizePipeModule", function () {
      return NgCapitalizePipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgCeilPipeModule", function () {
      return NgCeilPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgChunkPipeModule", function () {
      return NgChunkPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgConditionsPipesModule", function () {
      return NgConditionsPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgCountPipeModule", function () {
      return NgCountPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgDecodeURIComponentPipeModule", function () {
      return NgDecodeURIComponentPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgDecodeURIPipeModule", function () {
      return NgDecodeURIPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgDeepPipeModule", function () {
      return NgDeepPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgDefaultsPipeModule", function () {
      return NgDefaultsPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgDegreesPipeModule", function () {
      return NgDegreesPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgDropPipeModule", function () {
      return NgDropPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgEmptyPipeModule", function () {
      return NgEmptyPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgEncodeURIComponentPipeModule", function () {
      return NgEncodeURIComponentPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgEncodeURIPipeModule", function () {
      return NgEncodeURIPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgEveryPipeModule", function () {
      return NgEveryPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgFirstOrDefaultPipeModule", function () {
      return NgFirstOrDefaultPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgFlattenPipeModule", function () {
      return NgFlattenPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgFloorPipeModule", function () {
      return NgFloorPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgGroupByPipeModule", function () {
      return NgGroupByPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgHeadPipeModule", function () {
      return NgHeadPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgInitialPipeModule", function () {
      return NgInitialPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIntersectionPipeModule", function () {
      return NgIntersectionPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsArrayPipeModule", function () {
      return NgIsArrayPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsDefinedPipeModule", function () {
      return NgIsDefinedPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsEqualPipeModule", function () {
      return NgIsEqualPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsFunctionPipeModule", function () {
      return NgIsFunctionPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsGreaterOrEqualPipeModule", function () {
      return NgIsGreaterOrEqualPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsGreaterPipeModule", function () {
      return NgIsGreaterPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsIdenticalPipeModule", function () {
      return NgIsIdenticalPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsLessOrEqualPipeModule", function () {
      return NgIsLessOrEqualPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsLessPipeModule", function () {
      return NgIsLessPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsNilPipeModule", function () {
      return NgIsNilPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsNotEqualPipeModule", function () {
      return NgIsNotEqualPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsNotIdenticalPipeModule", function () {
      return NgIsNotIdenticalPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsNullPipeModule", function () {
      return NgIsNullPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsNumberPipeModule", function () {
      return NgIsNumberPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsObjectPipeModule", function () {
      return NgIsObjectPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsStringPipeModule", function () {
      return NgIsStringPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIsUndefinedPipeModule", function () {
      return NgIsUndefinedPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgJoinPipeModule", function () {
      return NgJoinPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgKeysPipeModule", function () {
      return NgKeysPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgLastPipeModule", function () {
      return NgLastPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgLatinizePipeModule", function () {
      return NgLatinizePipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgLeftPadPipeModule", function () {
      return NgLeftPadPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgMapPipeModule", function () {
      return NgMapPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgMatchPipeModule", function () {
      return NgMatchPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgMathPipesModule", function () {
      return NgMathPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgMaxPipeModule", function () {
      return NgMaxPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgMeanPipeModule", function () {
      return NgMeanPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgMinPipeModule", function () {
      return NgMinPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgNewlinesPipeModule", function () {
      return NgNewlinesPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgObjectPipesModule", function () {
      return NgObjectPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgOrderByPipeModule", function () {
      return NgOrderByPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgOrdinalPipeModule", function () {
      return NgOrdinalPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgPadPipeModule", function () {
      return NgPadPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgPipesModule", function () {
      return NgPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgPluckPipeModule", function () {
      return NgPluckPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgPowPipeModule", function () {
      return NgPowPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgRadiansPipeModule", function () {
      return NgRadiansPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgRandomPipeModule", function () {
      return NgRandomPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgRangePipeModule", function () {
      return NgRangePipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgRepeatPipeModule", function () {
      return NgRepeatPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgReplacePipeModule", function () {
      return NgReplacePipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgReversePipeModule", function () {
      return NgReversePipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgReverseStrPipeModule", function () {
      return NgReverseStrPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgRightPadPipeModule", function () {
      return NgRightPadPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgRoundPipeModule", function () {
      return NgRoundPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgShufflePipeModule", function () {
      return NgShufflePipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSlugifyPipeModule", function () {
      return NgSlugifyPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSomePipeModule", function () {
      return NgSomePipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSplitPipeModule", function () {
      return NgSplitPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSqrtPipeModule", function () {
      return NgSqrtPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgStringPipesModule", function () {
      return NgStringPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgStripTagsPipeModule", function () {
      return NgStripTagsPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSumPipeModule", function () {
      return NgSumPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTailPipeModule", function () {
      return NgTailPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTakePipeModule", function () {
      return NgTakePipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTakeUntilPipeModule", function () {
      return NgTakeUntilPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTakeWhilePipeModule", function () {
      return NgTakeWhilePipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTemplatePipeModule", function () {
      return NgTemplatePipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTestPipeModule", function () {
      return NgTestPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgToArrayPipeModule", function () {
      return NgToArrayPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTrimPipeModule", function () {
      return NgTrimPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTruncatePipeModule", function () {
      return NgTruncatePipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTypesPipesModule", function () {
      return NgTypesPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgUnionPipeModule", function () {
      return NgUnionPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgUniqPipeModule", function () {
      return NgUniqPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgUpperFirstPipeModule", function () {
      return NgUpperFirstPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgWherePipeModule", function () {
      return NgWherePipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgWithPipeModule", function () {
      return NgWithPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgWithoutPipeModule", function () {
      return NgWithoutPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgWrapPipeModule", function () {
      return NgWrapPipeModule;
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

      var _iterator = _createForOfIteratorHelper(keys),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _key = _step.value;

          if (isNil(result) || !isObject(result)) {
            return undefined;
          }

          result = result[_key];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
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

    var GroupByPipe = /*#__PURE__*/function () {
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

          var _iterator2 = _createForOfIteratorHelper(input),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var value = _step2.value;
              var field = getProperty(value, prop);

              if (isUndefined(arr[field])) {
                arr[field] = [];
              }

              arr[field].push(value);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return Object.keys(arr).map(function (key) {
            return {
              key: key,
              value: arr[key]
            };
          });
        }
      }]);

      return GroupByPipe;
    }();

    GroupByPipe.ɵfac = function GroupByPipe_Factory(t) {
      return new (t || GroupByPipe)();
    };

    GroupByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "groupBy",
      type: GroupByPipe,
      pure: true
    });

    var NgGroupByPipeModule = function NgGroupByPipeModule() {
      _classCallCheck(this, NgGroupByPipeModule);
    };

    NgGroupByPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgGroupByPipeModule
    });
    NgGroupByPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgGroupByPipeModule_Factory(t) {
        return new (t || NgGroupByPipeModule)();
      }
    });

    var MaxPipe = /*#__PURE__*/function () {
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

    MaxPipe.ɵfac = function MaxPipe_Factory(t) {
      return new (t || MaxPipe)();
    };

    MaxPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "max",
      type: MaxPipe,
      pure: true
    });

    var NgMaxPipeModule = function NgMaxPipeModule() {
      _classCallCheck(this, NgMaxPipeModule);
    };

    NgMaxPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgMaxPipeModule
    });
    NgMaxPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgMaxPipeModule_Factory(t) {
        return new (t || NgMaxPipeModule)();
      }
    });

    var MeanPipe = /*#__PURE__*/function () {
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

    MeanPipe.ɵfac = function MeanPipe_Factory(t) {
      return new (t || MeanPipe)();
    };

    MeanPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "mean",
      type: MeanPipe,
      pure: true
    });

    var NgMeanPipeModule = function NgMeanPipeModule() {
      _classCallCheck(this, NgMeanPipeModule);
    };

    NgMeanPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgMeanPipeModule
    });
    NgMeanPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgMeanPipeModule_Factory(t) {
        return new (t || NgMeanPipeModule)();
      }
    });

    var MinPipe = /*#__PURE__*/function () {
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

    MinPipe.ɵfac = function MinPipe_Factory(t) {
      return new (t || MinPipe)();
    };

    MinPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "min",
      type: MinPipe,
      pure: true
    });

    var NgMinPipeModule = function NgMinPipeModule() {
      _classCallCheck(this, NgMinPipeModule);
    };

    NgMinPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgMinPipeModule
    });
    NgMinPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgMinPipeModule_Factory(t) {
        return new (t || NgMinPipeModule)();
      }
    });

    var SumPipe = /*#__PURE__*/function () {
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

    SumPipe.ɵfac = function SumPipe_Factory(t) {
      return new (t || SumPipe)();
    };

    SumPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "sum",
      type: SumPipe,
      pure: true
    });

    var NgSumPipeModule = function NgSumPipeModule() {
      _classCallCheck(this, NgSumPipeModule);
    };

    NgSumPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgSumPipeModule
    });
    NgSumPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgSumPipeModule_Factory(t) {
        return new (t || NgSumPipeModule)();
      }
    });

    var NgAggregatePipesModule = function NgAggregatePipesModule() {
      _classCallCheck(this, NgAggregatePipesModule);
    };

    NgAggregatePipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgAggregatePipesModule
    });
    NgAggregatePipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgAggregatePipesModule_Factory(t) {
        return new (t || NgAggregatePipesModule)();
      },
      imports: [[NgGroupByPipeModule, NgMaxPipeModule, NgMeanPipeModule, NgMinPipeModule, NgSumPipeModule]]
    });

    var EmptyPipe = /*#__PURE__*/function () {
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

    EmptyPipe.ɵfac = function EmptyPipe_Factory(t) {
      return new (t || EmptyPipe)();
    };

    EmptyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "empty",
      type: EmptyPipe,
      pure: true
    });

    var NgEmptyPipeModule = function NgEmptyPipeModule() {
      _classCallCheck(this, NgEmptyPipeModule);
    };

    NgEmptyPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgEmptyPipeModule
    });
    NgEmptyPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgEmptyPipeModule_Factory(t) {
        return new (t || NgEmptyPipeModule)();
      }
    });

    var HeadPipe = /*#__PURE__*/function () {
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

    HeadPipe.ɵfac = function HeadPipe_Factory(t) {
      return new (t || HeadPipe)();
    };

    HeadPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "head",
      type: HeadPipe,
      pure: true
    });

    var NgHeadPipeModule = function NgHeadPipeModule() {
      _classCallCheck(this, NgHeadPipeModule);
    };

    NgHeadPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgHeadPipeModule
    });
    NgHeadPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgHeadPipeModule_Factory(t) {
        return new (t || NgHeadPipeModule)();
      }
    });

    var InitialPipe = /*#__PURE__*/function () {
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

    InitialPipe.ɵfac = function InitialPipe_Factory(t) {
      return new (t || InitialPipe)();
    };

    InitialPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "initial",
      type: InitialPipe,
      pure: true
    });

    var NgInitialPipeModule = function NgInitialPipeModule() {
      _classCallCheck(this, NgInitialPipeModule);
    };

    NgInitialPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgInitialPipeModule
    });
    NgInitialPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgInitialPipeModule_Factory(t) {
        return new (t || NgInitialPipeModule)();
      }
    });

    var LastPipe = /*#__PURE__*/function () {
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

    LastPipe.ɵfac = function LastPipe_Factory(t) {
      return new (t || LastPipe)();
    };

    LastPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "last",
      type: LastPipe,
      pure: true
    });

    var NgLastPipeModule = function NgLastPipeModule() {
      _classCallCheck(this, NgLastPipeModule);
    };

    NgLastPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgLastPipeModule
    });
    NgLastPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgLastPipeModule_Factory(t) {
        return new (t || NgLastPipeModule)();
      }
    });

    var JoinPipe = /*#__PURE__*/function () {
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

    JoinPipe.ɵfac = function JoinPipe_Factory(t) {
      return new (t || JoinPipe)();
    };

    JoinPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "join",
      type: JoinPipe,
      pure: true
    });

    var NgJoinPipeModule = function NgJoinPipeModule() {
      _classCallCheck(this, NgJoinPipeModule);
    };

    NgJoinPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgJoinPipeModule
    });
    NgJoinPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgJoinPipeModule_Factory(t) {
        return new (t || NgJoinPipeModule)();
      }
    });

    var TailPipe = /*#__PURE__*/function () {
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

    TailPipe.ɵfac = function TailPipe_Factory(t) {
      return new (t || TailPipe)();
    };

    TailPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "tail",
      type: TailPipe,
      pure: true
    });

    var NgTailPipeModule = function NgTailPipeModule() {
      _classCallCheck(this, NgTailPipeModule);
    };

    NgTailPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgTailPipeModule
    });
    NgTailPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgTailPipeModule_Factory(t) {
        return new (t || NgTailPipeModule)();
      }
    });

    var UniqPipe = /*#__PURE__*/function () {
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

    UniqPipe.ɵfac = function UniqPipe_Factory(t) {
      return new (t || UniqPipe)();
    };

    UniqPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "uniq",
      type: UniqPipe,
      pure: true
    });

    var NgUniqPipeModule = function NgUniqPipeModule() {
      _classCallCheck(this, NgUniqPipeModule);
    };

    NgUniqPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgUniqPipeModule
    });
    NgUniqPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgUniqPipeModule_Factory(t) {
        return new (t || NgUniqPipeModule)();
      }
    });

    var WithoutPipe = /*#__PURE__*/function () {
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

    WithoutPipe.ɵfac = function WithoutPipe_Factory(t) {
      return new (t || WithoutPipe)();
    };

    WithoutPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "without",
      type: WithoutPipe,
      pure: true
    });

    var NgWithoutPipeModule = function NgWithoutPipeModule() {
      _classCallCheck(this, NgWithoutPipeModule);
    };

    NgWithoutPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgWithoutPipeModule
    });
    NgWithoutPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgWithoutPipeModule_Factory(t) {
        return new (t || NgWithoutPipeModule)();
      }
    });

    var MapPipe = /*#__PURE__*/function () {
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

    MapPipe.ɵfac = function MapPipe_Factory(t) {
      return new (t || MapPipe)();
    };

    MapPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "map",
      type: MapPipe,
      pure: true
    });

    var NgMapPipeModule = function NgMapPipeModule() {
      _classCallCheck(this, NgMapPipeModule);
    };

    NgMapPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgMapPipeModule
    });
    NgMapPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgMapPipeModule_Factory(t) {
        return new (t || NgMapPipeModule)();
      }
    });

    var WherePipe = /*#__PURE__*/function () {
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

    WherePipe.ɵfac = function WherePipe_Factory(t) {
      return new (t || WherePipe)();
    };

    WherePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "where",
      type: WherePipe,
      pure: true
    });

    var NgWherePipeModule = function NgWherePipeModule() {
      _classCallCheck(this, NgWherePipeModule);
    };

    NgWherePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgWherePipeModule
    });
    NgWherePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgWherePipeModule_Factory(t) {
        return new (t || NgWherePipeModule)();
      }
    });
    var FirstOrDefaultPipe_1;

    var FirstOrDefaultPipe = FirstOrDefaultPipe_1 = /*#__PURE__*/function () {
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

    FirstOrDefaultPipe.ɵfac = function FirstOrDefaultPipe_Factory(t) {
      return new (t || FirstOrDefaultPipe)();
    };

    FirstOrDefaultPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "firstOrDefault",
      type: FirstOrDefaultPipe,
      pure: true
    });

    var NgFirstOrDefaultPipeModule = function NgFirstOrDefaultPipeModule() {
      _classCallCheck(this, NgFirstOrDefaultPipeModule);
    };

    NgFirstOrDefaultPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgFirstOrDefaultPipeModule
    });
    NgFirstOrDefaultPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgFirstOrDefaultPipeModule_Factory(t) {
        return new (t || NgFirstOrDefaultPipeModule)();
      }
    });

    var RangePipe = /*#__PURE__*/function () {
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

    RangePipe.ɵfac = function RangePipe_Factory(t) {
      return new (t || RangePipe)();
    };

    RangePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "range",
      type: RangePipe,
      pure: true
    });

    var NgRangePipeModule = function NgRangePipeModule() {
      _classCallCheck(this, NgRangePipeModule);
    };

    NgRangePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgRangePipeModule
    });
    NgRangePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgRangePipeModule_Factory(t) {
        return new (t || NgRangePipeModule)();
      }
    });

    var PluckPipe = /*#__PURE__*/function () {
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

    PluckPipe.ɵfac = function PluckPipe_Factory(t) {
      return new (t || PluckPipe)();
    };

    PluckPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "pluck",
      type: PluckPipe,
      pure: true
    });

    var NgPluckPipeModule = function NgPluckPipeModule() {
      _classCallCheck(this, NgPluckPipeModule);
    };

    NgPluckPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgPluckPipeModule
    });
    NgPluckPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgPluckPipeModule_Factory(t) {
        return new (t || NgPluckPipeModule)();
      }
    });

    var ReversePipe = /*#__PURE__*/function () {
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

    ReversePipe.ɵfac = function ReversePipe_Factory(t) {
      return new (t || ReversePipe)();
    };

    ReversePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "reverse",
      type: ReversePipe,
      pure: true
    });

    var NgReversePipeModule = function NgReversePipeModule() {
      _classCallCheck(this, NgReversePipeModule);
    };

    NgReversePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgReversePipeModule
    });
    NgReversePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgReversePipeModule_Factory(t) {
        return new (t || NgReversePipeModule)();
      }
    });
    var OrderByPipe_1;

    var OrderByPipe = OrderByPipe_1 = /*#__PURE__*/function () {
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

    OrderByPipe.ɵfac = function OrderByPipe_Factory(t) {
      return new (t || OrderByPipe)();
    };

    OrderByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "orderBy",
      type: OrderByPipe,
      pure: true
    });

    var NgOrderByPipeModule = function NgOrderByPipeModule() {
      _classCallCheck(this, NgOrderByPipeModule);
    };

    NgOrderByPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgOrderByPipeModule
    });
    NgOrderByPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgOrderByPipeModule_Factory(t) {
        return new (t || NgOrderByPipeModule)();
      }
    });

    var CountPipe = /*#__PURE__*/function () {
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

    CountPipe.ɵfac = function CountPipe_Factory(t) {
      return new (t || CountPipe)();
    };

    CountPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "count",
      type: CountPipe,
      pure: true
    });

    var NgCountPipeModule = function NgCountPipeModule() {
      _classCallCheck(this, NgCountPipeModule);
    };

    NgCountPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgCountPipeModule
    });
    NgCountPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgCountPipeModule_Factory(t) {
        return new (t || NgCountPipeModule)();
      }
    });

    var SomePipe = /*#__PURE__*/function () {
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

    SomePipe.ɵfac = function SomePipe_Factory(t) {
      return new (t || SomePipe)();
    };

    SomePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "some",
      type: SomePipe,
      pure: true
    });

    var NgSomePipeModule = function NgSomePipeModule() {
      _classCallCheck(this, NgSomePipeModule);
    };

    NgSomePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgSomePipeModule
    });
    NgSomePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgSomePipeModule_Factory(t) {
        return new (t || NgSomePipeModule)();
      }
    });

    var EveryPipe = /*#__PURE__*/function () {
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

    EveryPipe.ɵfac = function EveryPipe_Factory(t) {
      return new (t || EveryPipe)();
    };

    EveryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "every",
      type: EveryPipe,
      pure: true
    });

    var NgEveryPipeModule = function NgEveryPipeModule() {
      _classCallCheck(this, NgEveryPipeModule);
    };

    NgEveryPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgEveryPipeModule
    });
    NgEveryPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgEveryPipeModule_Factory(t) {
        return new (t || NgEveryPipeModule)();
      }
    });

    var ShufflePipe = /*#__PURE__*/function () {
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

    ShufflePipe.ɵfac = function ShufflePipe_Factory(t) {
      return new (t || ShufflePipe)();
    };

    ShufflePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "shuffle",
      type: ShufflePipe,
      pure: true
    });

    var NgShufflePipeModule = function NgShufflePipeModule() {
      _classCallCheck(this, NgShufflePipeModule);
    };

    NgShufflePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgShufflePipeModule
    });
    NgShufflePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgShufflePipeModule_Factory(t) {
        return new (t || NgShufflePipeModule)();
      }
    });

    var TakePipe = /*#__PURE__*/function () {
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

    TakePipe.ɵfac = function TakePipe_Factory(t) {
      return new (t || TakePipe)();
    };

    TakePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "take",
      type: TakePipe,
      pure: true
    });

    var NgTakePipeModule = function NgTakePipeModule() {
      _classCallCheck(this, NgTakePipeModule);
    };

    NgTakePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgTakePipeModule
    });
    NgTakePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgTakePipeModule_Factory(t) {
        return new (t || NgTakePipeModule)();
      }
    });

    var DropPipe = /*#__PURE__*/function () {
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

    DropPipe.ɵfac = function DropPipe_Factory(t) {
      return new (t || DropPipe)();
    };

    DropPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "drop",
      type: DropPipe,
      pure: true
    });

    var NgDropPipeModule = function NgDropPipeModule() {
      _classCallCheck(this, NgDropPipeModule);
    };

    NgDropPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgDropPipeModule
    });
    NgDropPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgDropPipeModule_Factory(t) {
        return new (t || NgDropPipeModule)();
      }
    });

    var DeepPipe = /*#__PURE__*/function () {
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

    DeepPipe.ɵfac = function DeepPipe_Factory(t) {
      return new (t || DeepPipe)();
    };

    DeepPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "deep",
      type: DeepPipe,
      pure: true
    });

    var NgDeepPipeModule = function NgDeepPipeModule() {
      _classCallCheck(this, NgDeepPipeModule);
    };

    NgDeepPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgDeepPipeModule
    });
    NgDeepPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgDeepPipeModule_Factory(t) {
        return new (t || NgDeepPipeModule)();
      }
    });

    var ChunkPipe = /*#__PURE__*/function () {
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

    ChunkPipe.ɵfac = function ChunkPipe_Factory(t) {
      return new (t || ChunkPipe)();
    };

    ChunkPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "chunk",
      type: ChunkPipe,
      pure: true
    });

    var NgChunkPipeModule = function NgChunkPipeModule() {
      _classCallCheck(this, NgChunkPipeModule);
    };

    NgChunkPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgChunkPipeModule
    });
    NgChunkPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgChunkPipeModule_Factory(t) {
        return new (t || NgChunkPipeModule)();
      }
    });

    var FlattenPipe = /*#__PURE__*/function () {
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

    FlattenPipe.ɵfac = function FlattenPipe_Factory(t) {
      return new (t || FlattenPipe)();
    };

    FlattenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "flatten",
      type: FlattenPipe,
      pure: true
    });

    var NgFlattenPipeModule = function NgFlattenPipeModule() {
      _classCallCheck(this, NgFlattenPipeModule);
    };

    NgFlattenPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgFlattenPipeModule
    });
    NgFlattenPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgFlattenPipeModule_Factory(t) {
        return new (t || NgFlattenPipeModule)();
      }
    });

    var IntersectionPipe = /*#__PURE__*/function () {
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

    IntersectionPipe.ɵfac = function IntersectionPipe_Factory(t) {
      return new (t || IntersectionPipe)();
    };

    IntersectionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "intersection",
      type: IntersectionPipe,
      pure: true
    });

    var NgIntersectionPipeModule = function NgIntersectionPipeModule() {
      _classCallCheck(this, NgIntersectionPipeModule);
    };

    NgIntersectionPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIntersectionPipeModule
    });
    NgIntersectionPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIntersectionPipeModule_Factory(t) {
        return new (t || NgIntersectionPipeModule)();
      }
    });

    var UnionPipe = /*#__PURE__*/function () {
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

    UnionPipe.ɵfac = function UnionPipe_Factory(t) {
      return new (t || UnionPipe)();
    };

    UnionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "union",
      type: UnionPipe,
      pure: true
    });

    var NgUnionPipeModule = function NgUnionPipeModule() {
      _classCallCheck(this, NgUnionPipeModule);
    };

    NgUnionPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgUnionPipeModule
    });
    NgUnionPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgUnionPipeModule_Factory(t) {
        return new (t || NgUnionPipeModule)();
      }
    });

    var TakeWhilePipe = /*#__PURE__*/function () {
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

    TakeWhilePipe.ɵfac = function TakeWhilePipe_Factory(t) {
      return new (t || TakeWhilePipe)();
    };

    TakeWhilePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "takeWhile",
      type: TakeWhilePipe,
      pure: true
    });

    var NgTakeWhilePipeModule = function NgTakeWhilePipeModule() {
      _classCallCheck(this, NgTakeWhilePipeModule);
    };

    NgTakeWhilePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgTakeWhilePipeModule
    });
    NgTakeWhilePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgTakeWhilePipeModule_Factory(t) {
        return new (t || NgTakeWhilePipeModule)();
      }
    });

    var TakeUntilPipe = /*#__PURE__*/function () {
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

    TakeUntilPipe.ɵfac = function TakeUntilPipe_Factory(t) {
      return new (t || TakeUntilPipe)();
    };

    TakeUntilPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "takeUntil",
      type: TakeUntilPipe,
      pure: true
    });

    var NgTakeUntilPipeModule = function NgTakeUntilPipeModule() {
      _classCallCheck(this, NgTakeUntilPipeModule);
    };

    NgTakeUntilPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgTakeUntilPipeModule
    });
    NgTakeUntilPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgTakeUntilPipeModule_Factory(t) {
        return new (t || NgTakeUntilPipeModule)();
      }
    });

    var NgArrayPipesModule = function NgArrayPipesModule() {
      _classCallCheck(this, NgArrayPipesModule);
    };

    NgArrayPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgArrayPipesModule
    });
    NgArrayPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgArrayPipesModule_Factory(t) {
        return new (t || NgArrayPipesModule)();
      },
      imports: [[NgChunkPipeModule, NgCountPipeModule, NgDeepPipeModule, NgDropPipeModule, NgEmptyPipeModule, NgEveryPipeModule, NgFirstOrDefaultPipeModule, NgFlattenPipeModule, NgHeadPipeModule, NgInitialPipeModule, NgIntersectionPipeModule, NgJoinPipeModule, NgLastPipeModule, NgMapPipeModule, NgOrderByPipeModule, NgPluckPipeModule, NgRangePipeModule, NgReversePipeModule, NgShufflePipeModule, NgSomePipeModule, NgTailPipeModule, NgTakeUntilPipeModule, NgTakeWhilePipeModule, NgTakePipeModule, NgUnionPipeModule, NgUniqPipeModule, NgWherePipeModule, NgWithoutPipeModule]]
    });

    var IsEqualPipe = /*#__PURE__*/function () {
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

    IsEqualPipe.ɵfac = function IsEqualPipe_Factory(t) {
      return new (t || IsEqualPipe)();
    };

    IsEqualPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "equal",
      type: IsEqualPipe,
      pure: true
    });

    var NgIsEqualPipeModule = function NgIsEqualPipeModule() {
      _classCallCheck(this, NgIsEqualPipeModule);
    };

    NgIsEqualPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsEqualPipeModule
    });
    NgIsEqualPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsEqualPipeModule_Factory(t) {
        return new (t || NgIsEqualPipeModule)();
      }
    });

    var IsGreaterOrEqualPipe = /*#__PURE__*/function () {
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

    IsGreaterOrEqualPipe.ɵfac = function IsGreaterOrEqualPipe_Factory(t) {
      return new (t || IsGreaterOrEqualPipe)();
    };

    IsGreaterOrEqualPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "greaterOrEqual",
      type: IsGreaterOrEqualPipe,
      pure: true
    });

    var NgIsGreaterOrEqualPipeModule = function NgIsGreaterOrEqualPipeModule() {
      _classCallCheck(this, NgIsGreaterOrEqualPipeModule);
    };

    NgIsGreaterOrEqualPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsGreaterOrEqualPipeModule
    });
    NgIsGreaterOrEqualPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsGreaterOrEqualPipeModule_Factory(t) {
        return new (t || NgIsGreaterOrEqualPipeModule)();
      }
    });

    var IsGreaterPipe = /*#__PURE__*/function () {
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

    IsGreaterPipe.ɵfac = function IsGreaterPipe_Factory(t) {
      return new (t || IsGreaterPipe)();
    };

    IsGreaterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "greater",
      type: IsGreaterPipe,
      pure: true
    });

    var NgIsGreaterPipeModule = function NgIsGreaterPipeModule() {
      _classCallCheck(this, NgIsGreaterPipeModule);
    };

    NgIsGreaterPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsGreaterPipeModule
    });
    NgIsGreaterPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsGreaterPipeModule_Factory(t) {
        return new (t || NgIsGreaterPipeModule)();
      }
    });

    var IsIdenticalPipe = /*#__PURE__*/function () {
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

    IsIdenticalPipe.ɵfac = function IsIdenticalPipe_Factory(t) {
      return new (t || IsIdenticalPipe)();
    };

    IsIdenticalPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "identical",
      type: IsIdenticalPipe,
      pure: true
    });

    var NgIsIdenticalPipeModule = function NgIsIdenticalPipeModule() {
      _classCallCheck(this, NgIsIdenticalPipeModule);
    };

    NgIsIdenticalPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsIdenticalPipeModule
    });
    NgIsIdenticalPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsIdenticalPipeModule_Factory(t) {
        return new (t || NgIsIdenticalPipeModule)();
      }
    });

    var IsLessOrEqualPipe = /*#__PURE__*/function () {
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

    IsLessOrEqualPipe.ɵfac = function IsLessOrEqualPipe_Factory(t) {
      return new (t || IsLessOrEqualPipe)();
    };

    IsLessOrEqualPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "lessOrEqual",
      type: IsLessOrEqualPipe,
      pure: true
    });

    var NgIsLessOrEqualPipeModule = function NgIsLessOrEqualPipeModule() {
      _classCallCheck(this, NgIsLessOrEqualPipeModule);
    };

    NgIsLessOrEqualPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsLessOrEqualPipeModule
    });
    NgIsLessOrEqualPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsLessOrEqualPipeModule_Factory(t) {
        return new (t || NgIsLessOrEqualPipeModule)();
      }
    });

    var IsLessPipe = /*#__PURE__*/function () {
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

    IsLessPipe.ɵfac = function IsLessPipe_Factory(t) {
      return new (t || IsLessPipe)();
    };

    IsLessPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "less",
      type: IsLessPipe,
      pure: true
    });

    var NgIsLessPipeModule = function NgIsLessPipeModule() {
      _classCallCheck(this, NgIsLessPipeModule);
    };

    NgIsLessPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsLessPipeModule
    });
    NgIsLessPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsLessPipeModule_Factory(t) {
        return new (t || NgIsLessPipeModule)();
      }
    });

    var IsNotEqualPipe = /*#__PURE__*/function () {
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

    IsNotEqualPipe.ɵfac = function IsNotEqualPipe_Factory(t) {
      return new (t || IsNotEqualPipe)();
    };

    IsNotEqualPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "notEqual",
      type: IsNotEqualPipe,
      pure: true
    });

    var NgIsNotEqualPipeModule = function NgIsNotEqualPipeModule() {
      _classCallCheck(this, NgIsNotEqualPipeModule);
    };

    NgIsNotEqualPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsNotEqualPipeModule
    });
    NgIsNotEqualPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsNotEqualPipeModule_Factory(t) {
        return new (t || NgIsNotEqualPipeModule)();
      }
    });

    var IsNotIdenticalPipe = /*#__PURE__*/function () {
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

    IsNotIdenticalPipe.ɵfac = function IsNotIdenticalPipe_Factory(t) {
      return new (t || IsNotIdenticalPipe)();
    };

    IsNotIdenticalPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "notIdentical",
      type: IsNotIdenticalPipe,
      pure: true
    });

    var NgIsNotIdenticalPipeModule = function NgIsNotIdenticalPipeModule() {
      _classCallCheck(this, NgIsNotIdenticalPipeModule);
    };

    NgIsNotIdenticalPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsNotIdenticalPipeModule
    });
    NgIsNotIdenticalPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsNotIdenticalPipeModule_Factory(t) {
        return new (t || NgIsNotIdenticalPipeModule)();
      }
    });

    var IsNullPipe = /*#__PURE__*/function () {
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

    IsNullPipe.ɵfac = function IsNullPipe_Factory(t) {
      return new (t || IsNullPipe)();
    };

    IsNullPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "isNull",
      type: IsNullPipe,
      pure: true
    });

    var NgIsNullPipeModule = function NgIsNullPipeModule() {
      _classCallCheck(this, NgIsNullPipeModule);
    };

    NgIsNullPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsNullPipeModule
    });
    NgIsNullPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsNullPipeModule_Factory(t) {
        return new (t || NgIsNullPipeModule)();
      }
    });

    var IsUndefinedPipe = /*#__PURE__*/function () {
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

    IsUndefinedPipe.ɵfac = function IsUndefinedPipe_Factory(t) {
      return new (t || IsUndefinedPipe)();
    };

    IsUndefinedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "isUndefined",
      type: IsUndefinedPipe,
      pure: true
    });

    var NgIsUndefinedPipeModule = function NgIsUndefinedPipeModule() {
      _classCallCheck(this, NgIsUndefinedPipeModule);
    };

    NgIsUndefinedPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsUndefinedPipeModule
    });
    NgIsUndefinedPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsUndefinedPipeModule_Factory(t) {
        return new (t || NgIsUndefinedPipeModule)();
      }
    });

    var IsNilPipe = /*#__PURE__*/function () {
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

    IsNilPipe.ɵfac = function IsNilPipe_Factory(t) {
      return new (t || IsNilPipe)();
    };

    IsNilPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "isNil",
      type: IsNilPipe,
      pure: true
    });

    var NgIsNilPipeModule = function NgIsNilPipeModule() {
      _classCallCheck(this, NgIsNilPipeModule);
    };

    NgIsNilPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsNilPipeModule
    });
    NgIsNilPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsNilPipeModule_Factory(t) {
        return new (t || NgIsNilPipeModule)();
      }
    });

    var IsFunctionPipe = /*#__PURE__*/function () {
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

    IsFunctionPipe.ɵfac = function IsFunctionPipe_Factory(t) {
      return new (t || IsFunctionPipe)();
    };

    IsFunctionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "isFunction",
      type: IsFunctionPipe,
      pure: true
    });

    var NgIsFunctionPipeModule = function NgIsFunctionPipeModule() {
      _classCallCheck(this, NgIsFunctionPipeModule);
    };

    NgIsFunctionPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsFunctionPipeModule
    });
    NgIsFunctionPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsFunctionPipeModule_Factory(t) {
        return new (t || NgIsFunctionPipeModule)();
      }
    });

    var IsNumberPipe = /*#__PURE__*/function () {
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

    IsNumberPipe.ɵfac = function IsNumberPipe_Factory(t) {
      return new (t || IsNumberPipe)();
    };

    IsNumberPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "isNumber",
      type: IsNumberPipe,
      pure: true
    });

    var NgIsNumberPipeModule = function NgIsNumberPipeModule() {
      _classCallCheck(this, NgIsNumberPipeModule);
    };

    NgIsNumberPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsNumberPipeModule
    });
    NgIsNumberPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsNumberPipeModule_Factory(t) {
        return new (t || NgIsNumberPipeModule)();
      }
    });

    var IsStringPipe = /*#__PURE__*/function () {
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

    IsStringPipe.ɵfac = function IsStringPipe_Factory(t) {
      return new (t || IsStringPipe)();
    };

    IsStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "isString",
      type: IsStringPipe,
      pure: true
    });

    var NgIsStringPipeModule = function NgIsStringPipeModule() {
      _classCallCheck(this, NgIsStringPipeModule);
    };

    NgIsStringPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsStringPipeModule
    });
    NgIsStringPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsStringPipeModule_Factory(t) {
        return new (t || NgIsStringPipeModule)();
      }
    });

    var IsArrayPipe = /*#__PURE__*/function () {
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

    IsArrayPipe.ɵfac = function IsArrayPipe_Factory(t) {
      return new (t || IsArrayPipe)();
    };

    IsArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "isArray",
      type: IsArrayPipe,
      pure: true
    });

    var NgIsArrayPipeModule = function NgIsArrayPipeModule() {
      _classCallCheck(this, NgIsArrayPipeModule);
    };

    NgIsArrayPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsArrayPipeModule
    });
    NgIsArrayPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsArrayPipeModule_Factory(t) {
        return new (t || NgIsArrayPipeModule)();
      }
    });

    var IsObjectPipe = /*#__PURE__*/function () {
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

    IsObjectPipe.ɵfac = function IsObjectPipe_Factory(t) {
      return new (t || IsObjectPipe)();
    };

    IsObjectPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "isObject",
      type: IsObjectPipe,
      pure: true
    });

    var NgIsObjectPipeModule = function NgIsObjectPipeModule() {
      _classCallCheck(this, NgIsObjectPipeModule);
    };

    NgIsObjectPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsObjectPipeModule
    });
    NgIsObjectPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsObjectPipeModule_Factory(t) {
        return new (t || NgIsObjectPipeModule)();
      }
    });

    var IsDefinedPipe = /*#__PURE__*/function () {
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

    IsDefinedPipe.ɵfac = function IsDefinedPipe_Factory(t) {
      return new (t || IsDefinedPipe)();
    };

    IsDefinedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "isDefined",
      type: IsDefinedPipe,
      pure: true
    });

    var NgIsDefinedPipeModule = function NgIsDefinedPipeModule() {
      _classCallCheck(this, NgIsDefinedPipeModule);
    };

    NgIsDefinedPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgIsDefinedPipeModule
    });
    NgIsDefinedPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgIsDefinedPipeModule_Factory(t) {
        return new (t || NgIsDefinedPipeModule)();
      }
    });

    var NgTypesPipesModule = function NgTypesPipesModule() {
      _classCallCheck(this, NgTypesPipesModule);
    };

    NgTypesPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgTypesPipesModule
    });
    NgTypesPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgTypesPipesModule_Factory(t) {
        return new (t || NgTypesPipesModule)();
      },
      imports: [[NgIsNullPipeModule, NgIsUndefinedPipeModule, NgIsNilPipeModule, NgIsFunctionPipeModule, NgIsNumberPipeModule, NgIsStringPipeModule, NgIsArrayPipeModule, NgIsObjectPipeModule, NgIsDefinedPipeModule]]
    });

    var NgConditionsPipesModule = function NgConditionsPipesModule() {
      _classCallCheck(this, NgConditionsPipesModule);
    };

    NgConditionsPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgConditionsPipesModule
    });
    NgConditionsPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgConditionsPipesModule_Factory(t) {
        return new (t || NgConditionsPipesModule)();
      },
      imports: [[NgIsEqualPipeModule, NgIsGreaterOrEqualPipeModule, NgIsGreaterPipeModule, NgIsIdenticalPipeModule, NgIsLessOrEqualPipeModule, NgIsLessPipeModule, NgIsNotEqualPipeModule, NgIsNotIdenticalPipeModule]]
    });

    var NgBooleanPipesModule = function NgBooleanPipesModule() {
      _classCallCheck(this, NgBooleanPipesModule);
    };

    NgBooleanPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgBooleanPipesModule
    });
    NgBooleanPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgBooleanPipesModule_Factory(t) {
        return new (t || NgBooleanPipesModule)();
      },
      imports: [[NgConditionsPipesModule, NgTypesPipesModule]]
    });
    var BytesPipe_1;

    var BytesPipe = BytesPipe_1 = /*#__PURE__*/function () {
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

    BytesPipe.ɵfac = function BytesPipe_Factory(t) {
      return new (t || BytesPipe)();
    };

    BytesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "bytes",
      type: BytesPipe,
      pure: true
    });
    BytesPipe.formats = {
      B: {
        max: 1024
      },
      kB: {
        max: Math.pow(1024, 2),
        prev: 'B'
      },
      KB: {
        max: Math.pow(1024, 2),
        prev: 'B'
      },
      MB: {
        max: Math.pow(1024, 3),
        prev: 'kB'
      },
      GB: {
        max: Math.pow(1024, 4),
        prev: 'MB'
      },
      TB: {
        max: Number.MAX_SAFE_INTEGER,
        prev: 'GB'
      }
    };

    var NgBytesPipeModule = function NgBytesPipeModule() {
      _classCallCheck(this, NgBytesPipeModule);
    };

    NgBytesPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgBytesPipeModule
    });
    NgBytesPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgBytesPipeModule_Factory(t) {
        return new (t || NgBytesPipeModule)();
      }
    });

    var CeilPipe = /*#__PURE__*/function () {
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

    CeilPipe.ɵfac = function CeilPipe_Factory(t) {
      return new (t || CeilPipe)();
    };

    CeilPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "ceil",
      type: CeilPipe,
      pure: true
    });

    var NgCeilPipeModule = function NgCeilPipeModule() {
      _classCallCheck(this, NgCeilPipeModule);
    };

    NgCeilPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgCeilPipeModule
    });
    NgCeilPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgCeilPipeModule_Factory(t) {
        return new (t || NgCeilPipeModule)();
      }
    });

    var FloorPipe = /*#__PURE__*/function () {
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

    FloorPipe.ɵfac = function FloorPipe_Factory(t) {
      return new (t || FloorPipe)();
    };

    FloorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "floor",
      type: FloorPipe,
      pure: true
    });

    var NgFloorPipeModule = function NgFloorPipeModule() {
      _classCallCheck(this, NgFloorPipeModule);
    };

    NgFloorPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgFloorPipeModule
    });
    NgFloorPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgFloorPipeModule_Factory(t) {
        return new (t || NgFloorPipeModule)();
      }
    });

    var RoundPipe = /*#__PURE__*/function () {
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

    RoundPipe.ɵfac = function RoundPipe_Factory(t) {
      return new (t || RoundPipe)();
    };

    RoundPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "round",
      type: RoundPipe,
      pure: true
    });

    var NgRoundPipeModule = function NgRoundPipeModule() {
      _classCallCheck(this, NgRoundPipeModule);
    };

    NgRoundPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgRoundPipeModule
    });
    NgRoundPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgRoundPipeModule_Factory(t) {
        return new (t || NgRoundPipeModule)();
      }
    });

    var DegreesPipe = /*#__PURE__*/function () {
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

    DegreesPipe.ɵfac = function DegreesPipe_Factory(t) {
      return new (t || DegreesPipe)();
    };

    DegreesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "degrees",
      type: DegreesPipe,
      pure: true
    });

    var NgDegreesPipeModule = function NgDegreesPipeModule() {
      _classCallCheck(this, NgDegreesPipeModule);
    };

    NgDegreesPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgDegreesPipeModule
    });
    NgDegreesPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgDegreesPipeModule_Factory(t) {
        return new (t || NgDegreesPipeModule)();
      }
    });

    var RadiansPipe = /*#__PURE__*/function () {
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

    RadiansPipe.ɵfac = function RadiansPipe_Factory(t) {
      return new (t || RadiansPipe)();
    };

    RadiansPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "radians",
      type: RadiansPipe,
      pure: true
    });

    var NgRadiansPipeModule = function NgRadiansPipeModule() {
      _classCallCheck(this, NgRadiansPipeModule);
    };

    NgRadiansPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgRadiansPipeModule
    });
    NgRadiansPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgRadiansPipeModule_Factory(t) {
        return new (t || NgRadiansPipeModule)();
      }
    });

    var RandomPipe = /*#__PURE__*/function () {
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

    RandomPipe.ɵfac = function RandomPipe_Factory(t) {
      return new (t || RandomPipe)();
    };

    RandomPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "random",
      type: RandomPipe,
      pure: true
    });

    var NgRandomPipeModule = function NgRandomPipeModule() {
      _classCallCheck(this, NgRandomPipeModule);
    };

    NgRandomPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgRandomPipeModule
    });
    NgRandomPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgRandomPipeModule_Factory(t) {
        return new (t || NgRandomPipeModule)();
      }
    });

    var SqrtPipe = /*#__PURE__*/function () {
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

    SqrtPipe.ɵfac = function SqrtPipe_Factory(t) {
      return new (t || SqrtPipe)();
    };

    SqrtPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "sqrt",
      type: SqrtPipe,
      pure: true
    });

    var NgSqrtPipeModule = function NgSqrtPipeModule() {
      _classCallCheck(this, NgSqrtPipeModule);
    };

    NgSqrtPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgSqrtPipeModule
    });
    NgSqrtPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgSqrtPipeModule_Factory(t) {
        return new (t || NgSqrtPipeModule)();
      }
    });

    var PowPipe = /*#__PURE__*/function () {
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

    PowPipe.ɵfac = function PowPipe_Factory(t) {
      return new (t || PowPipe)();
    };

    PowPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "pow",
      type: PowPipe,
      pure: true
    });

    var NgPowPipeModule = function NgPowPipeModule() {
      _classCallCheck(this, NgPowPipeModule);
    };

    NgPowPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgPowPipeModule
    });
    NgPowPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgPowPipeModule_Factory(t) {
        return new (t || NgPowPipeModule)();
      }
    });

    var AbsPipe = /*#__PURE__*/function () {
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

    AbsPipe.ɵfac = function AbsPipe_Factory(t) {
      return new (t || AbsPipe)();
    };

    AbsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "abs",
      type: AbsPipe,
      pure: true
    });

    var NgAbsPipeModule = function NgAbsPipeModule() {
      _classCallCheck(this, NgAbsPipeModule);
    };

    NgAbsPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgAbsPipeModule
    });
    NgAbsPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgAbsPipeModule_Factory(t) {
        return new (t || NgAbsPipeModule)();
      }
    });

    var OrdinalPipe = /*#__PURE__*/function () {
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

    OrdinalPipe.ɵfac = function OrdinalPipe_Factory(t) {
      return new (t || OrdinalPipe)();
    };

    OrdinalPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "ordinal",
      type: OrdinalPipe,
      pure: true
    });

    var NgOrdinalPipeModule = function NgOrdinalPipeModule() {
      _classCallCheck(this, NgOrdinalPipeModule);
    };

    NgOrdinalPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgOrdinalPipeModule
    });
    NgOrdinalPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgOrdinalPipeModule_Factory(t) {
        return new (t || NgOrdinalPipeModule)();
      }
    });

    var NgMathPipesModule = function NgMathPipesModule() {
      _classCallCheck(this, NgMathPipesModule);
    };

    NgMathPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgMathPipesModule
    });
    NgMathPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgMathPipesModule_Factory(t) {
        return new (t || NgMathPipesModule)();
      },
      imports: [[NgAbsPipeModule, NgBytesPipeModule, NgCeilPipeModule, NgDegreesPipeModule, NgFloorPipeModule, NgOrdinalPipeModule, NgPowPipeModule, NgRadiansPipeModule, NgRandomPipeModule, NgRoundPipeModule, NgSqrtPipeModule]]
    });

    var KeysPipe = /*#__PURE__*/function () {
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

    KeysPipe.ɵfac = function KeysPipe_Factory(t) {
      return new (t || KeysPipe)();
    };

    KeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "keys",
      type: KeysPipe,
      pure: true
    });

    var NgKeysPipeModule = function NgKeysPipeModule() {
      _classCallCheck(this, NgKeysPipeModule);
    };

    NgKeysPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgKeysPipeModule
    });
    NgKeysPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgKeysPipeModule_Factory(t) {
        return new (t || NgKeysPipeModule)();
      }
    });

    var ToArrayPipe = /*#__PURE__*/function () {
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

    ToArrayPipe.ɵfac = function ToArrayPipe_Factory(t) {
      return new (t || ToArrayPipe)();
    };

    ToArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "toArray",
      type: ToArrayPipe,
      pure: true
    });

    var NgToArrayPipeModule = function NgToArrayPipeModule() {
      _classCallCheck(this, NgToArrayPipeModule);
    };

    NgToArrayPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgToArrayPipeModule
    });
    NgToArrayPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgToArrayPipeModule_Factory(t) {
        return new (t || NgToArrayPipeModule)();
      }
    });

    var DefaultsPipe = /*#__PURE__*/function () {
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

    DefaultsPipe.ɵfac = function DefaultsPipe_Factory(t) {
      return new (t || DefaultsPipe)();
    };

    DefaultsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "defaults",
      type: DefaultsPipe,
      pure: true
    });

    var NgDefaultsPipeModule = function NgDefaultsPipeModule() {
      _classCallCheck(this, NgDefaultsPipeModule);
    };

    NgDefaultsPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgDefaultsPipeModule
    });
    NgDefaultsPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgDefaultsPipeModule_Factory(t) {
        return new (t || NgDefaultsPipeModule)();
      }
    });

    var NgObjectPipesModule = function NgObjectPipesModule() {
      _classCallCheck(this, NgObjectPipesModule);
    };

    NgObjectPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgObjectPipesModule
    });
    NgObjectPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgObjectPipesModule_Factory(t) {
        return new (t || NgObjectPipesModule)();
      },
      imports: [[NgKeysPipeModule, NgToArrayPipeModule, NgDefaultsPipeModule]]
    });

    var LeftPadPipe = /*#__PURE__*/function () {
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

    LeftPadPipe.ɵfac = function LeftPadPipe_Factory(t) {
      return new (t || LeftPadPipe)();
    };

    LeftPadPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "leftpad",
      type: LeftPadPipe,
      pure: true
    });

    var NgLeftPadPipeModule = function NgLeftPadPipeModule() {
      _classCallCheck(this, NgLeftPadPipeModule);
    };

    NgLeftPadPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgLeftPadPipeModule
    });
    NgLeftPadPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgLeftPadPipeModule_Factory(t) {
        return new (t || NgLeftPadPipeModule)();
      }
    });

    var MatchPipe = /*#__PURE__*/function () {
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

    MatchPipe.ɵfac = function MatchPipe_Factory(t) {
      return new (t || MatchPipe)();
    };

    MatchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "match",
      type: MatchPipe,
      pure: true
    });

    var NgMatchPipeModule = function NgMatchPipeModule() {
      _classCallCheck(this, NgMatchPipeModule);
    };

    NgMatchPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgMatchPipeModule
    });
    NgMatchPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgMatchPipeModule_Factory(t) {
        return new (t || NgMatchPipeModule)();
      }
    });

    var PadPipe = /*#__PURE__*/function () {
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

    PadPipe.ɵfac = function PadPipe_Factory(t) {
      return new (t || PadPipe)();
    };

    PadPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "pad",
      type: PadPipe,
      pure: true
    });

    var NgPadPipeModule = function NgPadPipeModule() {
      _classCallCheck(this, NgPadPipeModule);
    };

    NgPadPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgPadPipeModule
    });
    NgPadPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgPadPipeModule_Factory(t) {
        return new (t || NgPadPipeModule)();
      }
    });

    var ReplacePipe = /*#__PURE__*/function () {
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

    ReplacePipe.ɵfac = function ReplacePipe_Factory(t) {
      return new (t || ReplacePipe)();
    };

    ReplacePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "replace",
      type: ReplacePipe,
      pure: true
    });

    var NgReplacePipeModule = function NgReplacePipeModule() {
      _classCallCheck(this, NgReplacePipeModule);
    };

    NgReplacePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgReplacePipeModule
    });
    NgReplacePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgReplacePipeModule_Factory(t) {
        return new (t || NgReplacePipeModule)();
      }
    });

    var RightPadPipe = /*#__PURE__*/function () {
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

    RightPadPipe.ɵfac = function RightPadPipe_Factory(t) {
      return new (t || RightPadPipe)();
    };

    RightPadPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "rightpad",
      type: RightPadPipe,
      pure: true
    });

    var NgRightPadPipeModule = function NgRightPadPipeModule() {
      _classCallCheck(this, NgRightPadPipeModule);
    };

    NgRightPadPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgRightPadPipeModule
    });
    NgRightPadPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgRightPadPipeModule_Factory(t) {
        return new (t || NgRightPadPipeModule)();
      }
    });

    var SplitPipe = /*#__PURE__*/function () {
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

    SplitPipe.ɵfac = function SplitPipe_Factory(t) {
      return new (t || SplitPipe)();
    };

    SplitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "split",
      type: SplitPipe,
      pure: true
    });

    var NgSplitPipeModule = function NgSplitPipeModule() {
      _classCallCheck(this, NgSplitPipeModule);
    };

    NgSplitPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgSplitPipeModule
    });
    NgSplitPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgSplitPipeModule_Factory(t) {
        return new (t || NgSplitPipeModule)();
      }
    });

    var TestPipe = /*#__PURE__*/function () {
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

    TestPipe.ɵfac = function TestPipe_Factory(t) {
      return new (t || TestPipe)();
    };

    TestPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "test",
      type: TestPipe,
      pure: true
    });

    var NgTestPipeModule = function NgTestPipeModule() {
      _classCallCheck(this, NgTestPipeModule);
    };

    NgTestPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgTestPipeModule
    });
    NgTestPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgTestPipeModule_Factory(t) {
        return new (t || NgTestPipeModule)();
      }
    });

    var TrimPipe = /*#__PURE__*/function () {
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

    TrimPipe.ɵfac = function TrimPipe_Factory(t) {
      return new (t || TrimPipe)();
    };

    TrimPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "trim",
      type: TrimPipe,
      pure: true
    });

    var NgTrimPipeModule = function NgTrimPipeModule() {
      _classCallCheck(this, NgTrimPipeModule);
    };

    NgTrimPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgTrimPipeModule
    });
    NgTrimPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgTrimPipeModule_Factory(t) {
        return new (t || NgTrimPipeModule)();
      }
    });

    var NewlinesPipe = /*#__PURE__*/function () {
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

    NewlinesPipe.ɵfac = function NewlinesPipe_Factory(t) {
      return new (t || NewlinesPipe)();
    };

    NewlinesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "newlines",
      type: NewlinesPipe,
      pure: true
    });

    var NgNewlinesPipeModule = function NgNewlinesPipeModule() {
      _classCallCheck(this, NgNewlinesPipeModule);
    };

    NgNewlinesPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgNewlinesPipeModule
    });
    NgNewlinesPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgNewlinesPipeModule_Factory(t) {
        return new (t || NgNewlinesPipeModule)();
      }
    });

    var CapitalizePipe = /*#__PURE__*/function () {
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

    CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) {
      return new (t || CapitalizePipe)();
    };

    CapitalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "capitalize",
      type: CapitalizePipe,
      pure: true
    });

    var NgCapitalizePipeModule = function NgCapitalizePipeModule() {
      _classCallCheck(this, NgCapitalizePipeModule);
    };

    NgCapitalizePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgCapitalizePipeModule
    });
    NgCapitalizePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgCapitalizePipeModule_Factory(t) {
        return new (t || NgCapitalizePipeModule)();
      }
    });

    var UpperFirstPipe = /*#__PURE__*/function () {
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

    UpperFirstPipe.ɵfac = function UpperFirstPipe_Factory(t) {
      return new (t || UpperFirstPipe)();
    };

    UpperFirstPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "upperfirst",
      type: UpperFirstPipe,
      pure: true
    });

    var NgUpperFirstPipeModule = function NgUpperFirstPipeModule() {
      _classCallCheck(this, NgUpperFirstPipeModule);
    };

    NgUpperFirstPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgUpperFirstPipeModule
    });
    NgUpperFirstPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgUpperFirstPipeModule_Factory(t) {
        return new (t || NgUpperFirstPipeModule)();
      }
    });

    var TemplatePipe = /*#__PURE__*/function () {
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

    TemplatePipe.ɵfac = function TemplatePipe_Factory(t) {
      return new (t || TemplatePipe)();
    };

    TemplatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "template",
      type: TemplatePipe,
      pure: true
    });

    var NgTemplatePipeModule = function NgTemplatePipeModule() {
      _classCallCheck(this, NgTemplatePipeModule);
    };

    NgTemplatePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgTemplatePipeModule
    });
    NgTemplatePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgTemplatePipeModule_Factory(t) {
        return new (t || NgTemplatePipeModule)();
      }
    });

    var EncodeURIPipe = /*#__PURE__*/function () {
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

    EncodeURIPipe.ɵfac = function EncodeURIPipe_Factory(t) {
      return new (t || EncodeURIPipe)();
    };

    EncodeURIPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "encodeURI",
      type: EncodeURIPipe,
      pure: true
    });

    var NgEncodeURIPipeModule = function NgEncodeURIPipeModule() {
      _classCallCheck(this, NgEncodeURIPipeModule);
    };

    NgEncodeURIPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgEncodeURIPipeModule
    });
    NgEncodeURIPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgEncodeURIPipeModule_Factory(t) {
        return new (t || NgEncodeURIPipeModule)();
      }
    });

    var EncodeURIComponentPipe = /*#__PURE__*/function () {
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

    EncodeURIComponentPipe.ɵfac = function EncodeURIComponentPipe_Factory(t) {
      return new (t || EncodeURIComponentPipe)();
    };

    EncodeURIComponentPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "encodeURIComponent",
      type: EncodeURIComponentPipe,
      pure: true
    });

    var NgEncodeURIComponentPipeModule = function NgEncodeURIComponentPipeModule() {
      _classCallCheck(this, NgEncodeURIComponentPipeModule);
    };

    NgEncodeURIComponentPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgEncodeURIComponentPipeModule
    });
    NgEncodeURIComponentPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgEncodeURIComponentPipeModule_Factory(t) {
        return new (t || NgEncodeURIComponentPipeModule)();
      }
    });

    var DecodeURIPipe = /*#__PURE__*/function () {
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

    DecodeURIPipe.ɵfac = function DecodeURIPipe_Factory(t) {
      return new (t || DecodeURIPipe)();
    };

    DecodeURIPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "decodeURI",
      type: DecodeURIPipe,
      pure: true
    });

    var NgDecodeURIPipeModule = function NgDecodeURIPipeModule() {
      _classCallCheck(this, NgDecodeURIPipeModule);
    };

    NgDecodeURIPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgDecodeURIPipeModule
    });
    NgDecodeURIPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgDecodeURIPipeModule_Factory(t) {
        return new (t || NgDecodeURIPipeModule)();
      }
    });

    var DecodeURIComponentPipe = /*#__PURE__*/function () {
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

    DecodeURIComponentPipe.ɵfac = function DecodeURIComponentPipe_Factory(t) {
      return new (t || DecodeURIComponentPipe)();
    };

    DecodeURIComponentPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "decodeURIComponent",
      type: DecodeURIComponentPipe,
      pure: true
    });

    var NgDecodeURIComponentPipeModule = function NgDecodeURIComponentPipeModule() {
      _classCallCheck(this, NgDecodeURIComponentPipeModule);
    };

    NgDecodeURIComponentPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgDecodeURIComponentPipeModule
    });
    NgDecodeURIComponentPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgDecodeURIComponentPipeModule_Factory(t) {
        return new (t || NgDecodeURIComponentPipeModule)();
      }
    }); // Inspired from https://github.com/a8m/angular-filter/blob/master/src/_filter/string/truncate.js

    var TruncatePipe = /*#__PURE__*/function () {
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

    TruncatePipe.ɵfac = function TruncatePipe_Factory(t) {
      return new (t || TruncatePipe)();
    };

    TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "truncate",
      type: TruncatePipe,
      pure: true
    });

    var NgTruncatePipeModule = function NgTruncatePipeModule() {
      _classCallCheck(this, NgTruncatePipeModule);
    };

    NgTruncatePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgTruncatePipeModule
    });
    NgTruncatePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgTruncatePipeModule_Factory(t) {
        return new (t || NgTruncatePipeModule)();
      }
    });

    var RepeatPipe = /*#__PURE__*/function () {
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

    RepeatPipe.ɵfac = function RepeatPipe_Factory(t) {
      return new (t || RepeatPipe)();
    };

    RepeatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "repeat",
      type: RepeatPipe,
      pure: true
    });

    var NgRepeatPipeModule = function NgRepeatPipeModule() {
      _classCallCheck(this, NgRepeatPipeModule);
    };

    NgRepeatPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgRepeatPipeModule
    });
    NgRepeatPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgRepeatPipeModule_Factory(t) {
        return new (t || NgRepeatPipeModule)();
      }
    });

    var SlugifyPipe = /*#__PURE__*/function () {
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

    SlugifyPipe.ɵfac = function SlugifyPipe_Factory(t) {
      return new (t || SlugifyPipe)();
    };

    SlugifyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "slugify",
      type: SlugifyPipe,
      pure: true
    });

    var NgSlugifyPipeModule = function NgSlugifyPipeModule() {
      _classCallCheck(this, NgSlugifyPipeModule);
    };

    NgSlugifyPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgSlugifyPipeModule
    });
    NgSlugifyPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgSlugifyPipeModule_Factory(t) {
        return new (t || NgSlugifyPipeModule)();
      }
    }); // idea from https://github.com/a8m/angular-filter

    var StripTagsPipe = /*#__PURE__*/function () {
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

    StripTagsPipe.ɵfac = function StripTagsPipe_Factory(t) {
      return new (t || StripTagsPipe)();
    };

    StripTagsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "stripTags",
      type: StripTagsPipe,
      pure: true
    });

    var NgStripTagsPipeModule = function NgStripTagsPipeModule() {
      _classCallCheck(this, NgStripTagsPipeModule);
    };

    NgStripTagsPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgStripTagsPipeModule
    });
    NgStripTagsPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgStripTagsPipeModule_Factory(t) {
        return new (t || NgStripTagsPipeModule)();
      }
    }); // idea from https://github.com/a8m/angular-filter

    var LatinizePipe = /*#__PURE__*/function () {
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
            chars: '\xDF'
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

    LatinizePipe.ɵfac = function LatinizePipe_Factory(t) {
      return new (t || LatinizePipe)();
    };

    LatinizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "latinize",
      type: LatinizePipe,
      pure: true
    });

    var NgLatinizePipeModule = function NgLatinizePipeModule() {
      _classCallCheck(this, NgLatinizePipeModule);
    };

    NgLatinizePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgLatinizePipeModule
    });
    NgLatinizePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgLatinizePipeModule_Factory(t) {
        return new (t || NgLatinizePipeModule)();
      }
    }); // idea from https://github.com/a8m/angular-filter

    var WrapPipe = /*#__PURE__*/function () {
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

    WrapPipe.ɵfac = function WrapPipe_Factory(t) {
      return new (t || WrapPipe)();
    };

    WrapPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "wrap",
      type: WrapPipe,
      pure: true
    });

    var NgWrapPipeModule = function NgWrapPipeModule() {
      _classCallCheck(this, NgWrapPipeModule);
    };

    NgWrapPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgWrapPipeModule
    });
    NgWrapPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgWrapPipeModule_Factory(t) {
        return new (t || NgWrapPipeModule)();
      }
    });

    var WithPipe = /*#__PURE__*/function () {
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

    WithPipe.ɵfac = function WithPipe_Factory(t) {
      return new (t || WithPipe)();
    };

    WithPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "with",
      type: WithPipe,
      pure: true
    });

    var NgWithPipeModule = function NgWithPipeModule() {
      _classCallCheck(this, NgWithPipeModule);
    };

    NgWithPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgWithPipeModule
    });
    NgWithPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgWithPipeModule_Factory(t) {
        return new (t || NgWithPipeModule)();
      }
    });

    var ReverseStrPipe = /*#__PURE__*/function () {
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

    ReverseStrPipe.ɵfac = function ReverseStrPipe_Factory(t) {
      return new (t || ReverseStrPipe)();
    };

    ReverseStrPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "reverseStr",
      type: ReverseStrPipe,
      pure: true
    });

    var NgReverseStrPipeModule = function NgReverseStrPipeModule() {
      _classCallCheck(this, NgReverseStrPipeModule);
    };

    NgReverseStrPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgReverseStrPipeModule
    });
    NgReverseStrPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgReverseStrPipeModule_Factory(t) {
        return new (t || NgReverseStrPipeModule)();
      }
    });

    var NgStringPipesModule = function NgStringPipesModule() {
      _classCallCheck(this, NgStringPipesModule);
    };

    NgStringPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgStringPipesModule
    });
    NgStringPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgStringPipesModule_Factory(t) {
        return new (t || NgStringPipesModule)();
      },
      imports: [[NgCapitalizePipeModule, NgDecodeURIComponentPipeModule, NgDecodeURIPipeModule, NgEncodeURIComponentPipeModule, NgLeftPadPipeModule, NgMatchPipeModule, NgPadPipeModule, NgReplacePipeModule, NgRightPadPipeModule, NgSplitPipeModule, NgTestPipeModule, NgTrimPipeModule, NgNewlinesPipeModule, NgUpperFirstPipeModule, NgTemplatePipeModule, NgEncodeURIPipeModule, NgTruncatePipeModule, NgRepeatPipeModule, NgSlugifyPipeModule, NgStripTagsPipeModule, NgLatinizePipeModule, NgWrapPipeModule, NgWithPipeModule, NgReverseStrPipeModule]]
    });

    var NgPipesModule = function NgPipesModule() {
      _classCallCheck(this, NgPipesModule);
    };

    NgPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgPipesModule
    });
    NgPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgPipesModule_Factory(t) {
        return new (t || NgPipesModule)();
      },
      imports: [NgArrayPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgStringPipesModule, NgObjectPipesModule, NgAggregatePipesModule]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GroupByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'groupBy'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgGroupByPipeModule, {
        declarations: [GroupByPipe],
        exports: [GroupByPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgGroupByPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [GroupByPipe],
          exports: [GroupByPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaxPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'max'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgMaxPipeModule, {
        declarations: [MaxPipe],
        exports: [MaxPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgMaxPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [MaxPipe],
          exports: [MaxPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MeanPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'mean'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgMeanPipeModule, {
        declarations: [MeanPipe],
        exports: [MeanPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgMeanPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [MeanPipe],
          exports: [MeanPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'min'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgMinPipeModule, {
        declarations: [MinPipe],
        exports: [MinPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgMinPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [MinPipe],
          exports: [MinPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SumPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'sum'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgSumPipeModule, {
        declarations: [SumPipe],
        exports: [SumPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgSumPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [SumPipe],
          exports: [SumPipe]
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgAggregatePipesModule, {
        imports: [NgGroupByPipeModule, NgMaxPipeModule, NgMeanPipeModule, NgMinPipeModule, NgSumPipeModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgAggregatePipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [NgGroupByPipeModule, NgMaxPipeModule, NgMeanPipeModule, NgMinPipeModule, NgSumPipeModule]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmptyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'empty'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgEmptyPipeModule, {
        declarations: [EmptyPipe],
        exports: [EmptyPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgEmptyPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [EmptyPipe],
          exports: [EmptyPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeadPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'head'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgHeadPipeModule, {
        declarations: [HeadPipe],
        exports: [HeadPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgHeadPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [HeadPipe],
          exports: [HeadPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InitialPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'initial'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgInitialPipeModule, {
        declarations: [InitialPipe],
        exports: [InitialPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgInitialPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [InitialPipe],
          exports: [InitialPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LastPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'last'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgLastPipeModule, {
        declarations: [LastPipe],
        exports: [LastPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgLastPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [LastPipe],
          exports: [LastPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoinPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'join'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgJoinPipeModule, {
        declarations: [JoinPipe],
        exports: [JoinPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgJoinPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [JoinPipe],
          exports: [JoinPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TailPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'tail'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgTailPipeModule, {
        declarations: [TailPipe],
        exports: [TailPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgTailPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [TailPipe],
          exports: [TailPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'uniq'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgUniqPipeModule, {
        declarations: [UniqPipe],
        exports: [UniqPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgUniqPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [UniqPipe],
          exports: [UniqPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WithoutPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'without'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgWithoutPipeModule, {
        declarations: [WithoutPipe],
        exports: [WithoutPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgWithoutPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [WithoutPipe],
          exports: [WithoutPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'map'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgMapPipeModule, {
        declarations: [MapPipe],
        exports: [MapPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgMapPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [MapPipe],
          exports: [MapPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WherePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'where'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgWherePipeModule, {
        declarations: [WherePipe],
        exports: [WherePipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgWherePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [WherePipe],
          exports: [WherePipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirstOrDefaultPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'firstOrDefault'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgFirstOrDefaultPipeModule, {
        declarations: [FirstOrDefaultPipe],
        exports: [FirstOrDefaultPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgFirstOrDefaultPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [FirstOrDefaultPipe],
          exports: [FirstOrDefaultPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RangePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'range'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgRangePipeModule, {
        declarations: [RangePipe],
        exports: [RangePipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgRangePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [RangePipe],
          exports: [RangePipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PluckPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'pluck'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgPluckPipeModule, {
        declarations: [PluckPipe],
        exports: [PluckPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgPluckPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [PluckPipe],
          exports: [PluckPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReversePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'reverse'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgReversePipeModule, {
        declarations: [ReversePipe],
        exports: [ReversePipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgReversePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [ReversePipe],
          exports: [ReversePipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'orderBy'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgOrderByPipeModule, {
        declarations: [OrderByPipe],
        exports: [OrderByPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgOrderByPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [OrderByPipe],
          exports: [OrderByPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CountPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'count'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgCountPipeModule, {
        declarations: [CountPipe],
        exports: [CountPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgCountPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [CountPipe],
          exports: [CountPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SomePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'some'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgSomePipeModule, {
        declarations: [SomePipe],
        exports: [SomePipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgSomePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [SomePipe],
          exports: [SomePipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EveryPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'every'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgEveryPipeModule, {
        declarations: [EveryPipe],
        exports: [EveryPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgEveryPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [EveryPipe],
          exports: [EveryPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShufflePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'shuffle'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgShufflePipeModule, {
        declarations: [ShufflePipe],
        exports: [ShufflePipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgShufflePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [ShufflePipe],
          exports: [ShufflePipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TakePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'take'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgTakePipeModule, {
        declarations: [TakePipe],
        exports: [TakePipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgTakePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [TakePipe],
          exports: [TakePipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'drop'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgDropPipeModule, {
        declarations: [DropPipe],
        exports: [DropPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgDropPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [DropPipe],
          exports: [DropPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeepPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'deep'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgDeepPipeModule, {
        declarations: [DeepPipe],
        exports: [DeepPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgDeepPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [DeepPipe],
          exports: [DeepPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChunkPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'chunk'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgChunkPipeModule, {
        declarations: [ChunkPipe],
        exports: [ChunkPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgChunkPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [ChunkPipe],
          exports: [ChunkPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlattenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'flatten'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgFlattenPipeModule, {
        declarations: [FlattenPipe],
        exports: [FlattenPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgFlattenPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [FlattenPipe],
          exports: [FlattenPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntersectionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'intersection'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIntersectionPipeModule, {
        declarations: [IntersectionPipe],
        exports: [IntersectionPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIntersectionPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IntersectionPipe],
          exports: [IntersectionPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'union'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgUnionPipeModule, {
        declarations: [UnionPipe],
        exports: [UnionPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgUnionPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [UnionPipe],
          exports: [UnionPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TakeWhilePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'takeWhile'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgTakeWhilePipeModule, {
        declarations: [TakeWhilePipe],
        exports: [TakeWhilePipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgTakeWhilePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [TakeWhilePipe],
          exports: [TakeWhilePipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TakeUntilPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'takeUntil'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgTakeUntilPipeModule, {
        declarations: [TakeUntilPipe],
        exports: [TakeUntilPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgTakeUntilPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [TakeUntilPipe],
          exports: [TakeUntilPipe]
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgArrayPipesModule, {
        imports: [NgChunkPipeModule, NgCountPipeModule, NgDeepPipeModule, NgDropPipeModule, NgEmptyPipeModule, NgEveryPipeModule, NgFirstOrDefaultPipeModule, NgFlattenPipeModule, NgHeadPipeModule, NgInitialPipeModule, NgIntersectionPipeModule, NgJoinPipeModule, NgLastPipeModule, NgMapPipeModule, NgOrderByPipeModule, NgPluckPipeModule, NgRangePipeModule, NgReversePipeModule, NgShufflePipeModule, NgSomePipeModule, NgTailPipeModule, NgTakeUntilPipeModule, NgTakeWhilePipeModule, NgTakePipeModule, NgUnionPipeModule, NgUniqPipeModule, NgWherePipeModule, NgWithoutPipeModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgArrayPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [NgChunkPipeModule, NgCountPipeModule, NgDeepPipeModule, NgDropPipeModule, NgEmptyPipeModule, NgEveryPipeModule, NgFirstOrDefaultPipeModule, NgFlattenPipeModule, NgHeadPipeModule, NgInitialPipeModule, NgIntersectionPipeModule, NgJoinPipeModule, NgLastPipeModule, NgMapPipeModule, NgOrderByPipeModule, NgPluckPipeModule, NgRangePipeModule, NgReversePipeModule, NgShufflePipeModule, NgSomePipeModule, NgTailPipeModule, NgTakeUntilPipeModule, NgTakeWhilePipeModule, NgTakePipeModule, NgUnionPipeModule, NgUniqPipeModule, NgWherePipeModule, NgWithoutPipeModule]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsEqualPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'equal'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsEqualPipeModule, {
        declarations: [IsEqualPipe],
        exports: [IsEqualPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsEqualPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsEqualPipe],
          exports: [IsEqualPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsGreaterOrEqualPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'greaterOrEqual'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsGreaterOrEqualPipeModule, {
        declarations: [IsGreaterOrEqualPipe],
        exports: [IsGreaterOrEqualPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsGreaterOrEqualPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsGreaterOrEqualPipe],
          exports: [IsGreaterOrEqualPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsGreaterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'greater'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsGreaterPipeModule, {
        declarations: [IsGreaterPipe],
        exports: [IsGreaterPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsGreaterPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsGreaterPipe],
          exports: [IsGreaterPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsIdenticalPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'identical'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsIdenticalPipeModule, {
        declarations: [IsIdenticalPipe],
        exports: [IsIdenticalPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsIdenticalPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsIdenticalPipe],
          exports: [IsIdenticalPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsLessOrEqualPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'lessOrEqual'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsLessOrEqualPipeModule, {
        declarations: [IsLessOrEqualPipe],
        exports: [IsLessOrEqualPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsLessOrEqualPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsLessOrEqualPipe],
          exports: [IsLessOrEqualPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsLessPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'less'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsLessPipeModule, {
        declarations: [IsLessPipe],
        exports: [IsLessPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsLessPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsLessPipe],
          exports: [IsLessPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsNotEqualPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'notEqual'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsNotEqualPipeModule, {
        declarations: [IsNotEqualPipe],
        exports: [IsNotEqualPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsNotEqualPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsNotEqualPipe],
          exports: [IsNotEqualPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsNotIdenticalPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'notIdentical'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsNotIdenticalPipeModule, {
        declarations: [IsNotIdenticalPipe],
        exports: [IsNotIdenticalPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsNotIdenticalPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsNotIdenticalPipe],
          exports: [IsNotIdenticalPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsNullPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'isNull'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsNullPipeModule, {
        declarations: [IsNullPipe],
        exports: [IsNullPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsNullPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsNullPipe],
          exports: [IsNullPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsUndefinedPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'isUndefined'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsUndefinedPipeModule, {
        declarations: [IsUndefinedPipe],
        exports: [IsUndefinedPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsUndefinedPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsUndefinedPipe],
          exports: [IsUndefinedPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsNilPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'isNil'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsNilPipeModule, {
        declarations: [IsNilPipe],
        exports: [IsNilPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsNilPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsNilPipe],
          exports: [IsNilPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsFunctionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'isFunction'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsFunctionPipeModule, {
        declarations: [IsFunctionPipe],
        exports: [IsFunctionPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsFunctionPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsFunctionPipe],
          exports: [IsFunctionPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsNumberPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'isNumber'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsNumberPipeModule, {
        declarations: [IsNumberPipe],
        exports: [IsNumberPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsNumberPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsNumberPipe],
          exports: [IsNumberPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'isString'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsStringPipeModule, {
        declarations: [IsStringPipe],
        exports: [IsStringPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsStringPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsStringPipe],
          exports: [IsStringPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsArrayPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'isArray'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsArrayPipeModule, {
        declarations: [IsArrayPipe],
        exports: [IsArrayPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsArrayPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsArrayPipe],
          exports: [IsArrayPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsObjectPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'isObject'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsObjectPipeModule, {
        declarations: [IsObjectPipe],
        exports: [IsObjectPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsObjectPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsObjectPipe],
          exports: [IsObjectPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsDefinedPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'isDefined'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgIsDefinedPipeModule, {
        declarations: [IsDefinedPipe],
        exports: [IsDefinedPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgIsDefinedPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [IsDefinedPipe],
          exports: [IsDefinedPipe]
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgTypesPipesModule, {
        imports: [NgIsNullPipeModule, NgIsUndefinedPipeModule, NgIsNilPipeModule, NgIsFunctionPipeModule, NgIsNumberPipeModule, NgIsStringPipeModule, NgIsArrayPipeModule, NgIsObjectPipeModule, NgIsDefinedPipeModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgTypesPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [NgIsNullPipeModule, NgIsUndefinedPipeModule, NgIsNilPipeModule, NgIsFunctionPipeModule, NgIsNumberPipeModule, NgIsStringPipeModule, NgIsArrayPipeModule, NgIsObjectPipeModule, NgIsDefinedPipeModule]
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgConditionsPipesModule, {
        imports: [NgIsEqualPipeModule, NgIsGreaterOrEqualPipeModule, NgIsGreaterPipeModule, NgIsIdenticalPipeModule, NgIsLessOrEqualPipeModule, NgIsLessPipeModule, NgIsNotEqualPipeModule, NgIsNotIdenticalPipeModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgConditionsPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [NgIsEqualPipeModule, NgIsGreaterOrEqualPipeModule, NgIsGreaterPipeModule, NgIsIdenticalPipeModule, NgIsLessOrEqualPipeModule, NgIsLessPipeModule, NgIsNotEqualPipeModule, NgIsNotIdenticalPipeModule]
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgBooleanPipesModule, {
        imports: [NgConditionsPipesModule, NgTypesPipesModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgBooleanPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [NgConditionsPipesModule, NgTypesPipesModule]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BytesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'bytes'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgBytesPipeModule, {
        declarations: [BytesPipe],
        exports: [BytesPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgBytesPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [BytesPipe],
          exports: [BytesPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CeilPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'ceil'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgCeilPipeModule, {
        declarations: [CeilPipe],
        exports: [CeilPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgCeilPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [CeilPipe],
          exports: [CeilPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FloorPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'floor'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgFloorPipeModule, {
        declarations: [FloorPipe],
        exports: [FloorPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgFloorPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [FloorPipe],
          exports: [FloorPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoundPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'round'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgRoundPipeModule, {
        declarations: [RoundPipe],
        exports: [RoundPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgRoundPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [RoundPipe],
          exports: [RoundPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DegreesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'degrees'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgDegreesPipeModule, {
        declarations: [DegreesPipe],
        exports: [DegreesPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgDegreesPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [DegreesPipe],
          exports: [DegreesPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RadiansPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'radians'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgRadiansPipeModule, {
        declarations: [RadiansPipe],
        exports: [RadiansPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgRadiansPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [RadiansPipe],
          exports: [RadiansPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RandomPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'random'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgRandomPipeModule, {
        declarations: [RandomPipe],
        exports: [RandomPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgRandomPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [RandomPipe],
          exports: [RandomPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SqrtPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'sqrt'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgSqrtPipeModule, {
        declarations: [SqrtPipe],
        exports: [SqrtPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgSqrtPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [SqrtPipe],
          exports: [SqrtPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PowPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'pow'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgPowPipeModule, {
        declarations: [PowPipe],
        exports: [PowPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgPowPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [PowPipe],
          exports: [PowPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AbsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'abs'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgAbsPipeModule, {
        declarations: [AbsPipe],
        exports: [AbsPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgAbsPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [AbsPipe],
          exports: [AbsPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrdinalPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'ordinal'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgOrdinalPipeModule, {
        declarations: [OrdinalPipe],
        exports: [OrdinalPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgOrdinalPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [OrdinalPipe],
          exports: [OrdinalPipe]
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgMathPipesModule, {
        imports: [NgAbsPipeModule, NgBytesPipeModule, NgCeilPipeModule, NgDegreesPipeModule, NgFloorPipeModule, NgOrdinalPipeModule, NgPowPipeModule, NgRadiansPipeModule, NgRandomPipeModule, NgRoundPipeModule, NgSqrtPipeModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgMathPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [NgAbsPipeModule, NgBytesPipeModule, NgCeilPipeModule, NgDegreesPipeModule, NgFloorPipeModule, NgOrdinalPipeModule, NgPowPipeModule, NgRadiansPipeModule, NgRandomPipeModule, NgRoundPipeModule, NgSqrtPipeModule]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'keys'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgKeysPipeModule, {
        declarations: [KeysPipe],
        exports: [KeysPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgKeysPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [KeysPipe],
          exports: [KeysPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToArrayPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'toArray'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgToArrayPipeModule, {
        declarations: [ToArrayPipe],
        exports: [ToArrayPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgToArrayPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [ToArrayPipe],
          exports: [ToArrayPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'defaults'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgDefaultsPipeModule, {
        declarations: [DefaultsPipe],
        exports: [DefaultsPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgDefaultsPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [DefaultsPipe],
          exports: [DefaultsPipe]
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgObjectPipesModule, {
        imports: [NgKeysPipeModule, NgToArrayPipeModule, NgDefaultsPipeModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgObjectPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [NgKeysPipeModule, NgToArrayPipeModule, NgDefaultsPipeModule]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LeftPadPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'leftpad'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgLeftPadPipeModule, {
        declarations: [LeftPadPipe],
        exports: [LeftPadPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgLeftPadPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [LeftPadPipe],
          exports: [LeftPadPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'match'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgMatchPipeModule, {
        declarations: [MatchPipe],
        exports: [MatchPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgMatchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [MatchPipe],
          exports: [MatchPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PadPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'pad'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgPadPipeModule, {
        declarations: [PadPipe],
        exports: [PadPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgPadPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [PadPipe],
          exports: [PadPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReplacePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'replace'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgReplacePipeModule, {
        declarations: [ReplacePipe],
        exports: [ReplacePipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgReplacePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [ReplacePipe],
          exports: [ReplacePipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RightPadPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'rightpad'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgRightPadPipeModule, {
        declarations: [RightPadPipe],
        exports: [RightPadPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgRightPadPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [RightPadPipe],
          exports: [RightPadPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SplitPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'split'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgSplitPipeModule, {
        declarations: [SplitPipe],
        exports: [SplitPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgSplitPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [SplitPipe],
          exports: [SplitPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TestPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'test'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgTestPipeModule, {
        declarations: [TestPipe],
        exports: [TestPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgTestPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [TestPipe],
          exports: [TestPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TrimPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'trim'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgTrimPipeModule, {
        declarations: [TrimPipe],
        exports: [TrimPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgTrimPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [TrimPipe],
          exports: [TrimPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewlinesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'newlines'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgNewlinesPipeModule, {
        declarations: [NewlinesPipe],
        exports: [NewlinesPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgNewlinesPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [NewlinesPipe],
          exports: [NewlinesPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CapitalizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'capitalize'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgCapitalizePipeModule, {
        declarations: [CapitalizePipe],
        exports: [CapitalizePipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgCapitalizePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [CapitalizePipe],
          exports: [CapitalizePipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UpperFirstPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'upperfirst'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgUpperFirstPipeModule, {
        declarations: [UpperFirstPipe],
        exports: [UpperFirstPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgUpperFirstPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [UpperFirstPipe],
          exports: [UpperFirstPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TemplatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'template'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgTemplatePipeModule, {
        declarations: [TemplatePipe],
        exports: [TemplatePipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgTemplatePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [TemplatePipe],
          exports: [TemplatePipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EncodeURIPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'encodeURI'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgEncodeURIPipeModule, {
        declarations: [EncodeURIPipe],
        exports: [EncodeURIPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgEncodeURIPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [EncodeURIPipe],
          exports: [EncodeURIPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EncodeURIComponentPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'encodeURIComponent'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgEncodeURIComponentPipeModule, {
        declarations: [EncodeURIComponentPipe],
        exports: [EncodeURIComponentPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgEncodeURIComponentPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [EncodeURIComponentPipe],
          exports: [EncodeURIComponentPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DecodeURIPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'decodeURI'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgDecodeURIPipeModule, {
        declarations: [DecodeURIPipe],
        exports: [DecodeURIPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgDecodeURIPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [DecodeURIPipe],
          exports: [DecodeURIPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DecodeURIComponentPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'decodeURIComponent'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgDecodeURIComponentPipeModule, {
        declarations: [DecodeURIComponentPipe],
        exports: [DecodeURIComponentPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgDecodeURIComponentPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [DecodeURIComponentPipe],
          exports: [DecodeURIComponentPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'truncate'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgTruncatePipeModule, {
        declarations: [TruncatePipe],
        exports: [TruncatePipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgTruncatePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [TruncatePipe],
          exports: [TruncatePipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RepeatPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'repeat'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgRepeatPipeModule, {
        declarations: [RepeatPipe],
        exports: [RepeatPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgRepeatPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [RepeatPipe],
          exports: [RepeatPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SlugifyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'slugify'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgSlugifyPipeModule, {
        declarations: [SlugifyPipe],
        exports: [SlugifyPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgSlugifyPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [SlugifyPipe],
          exports: [SlugifyPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StripTagsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'stripTags'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgStripTagsPipeModule, {
        declarations: [StripTagsPipe],
        exports: [StripTagsPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgStripTagsPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [StripTagsPipe],
          exports: [StripTagsPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LatinizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'latinize'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgLatinizePipeModule, {
        declarations: [LatinizePipe],
        exports: [LatinizePipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgLatinizePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [LatinizePipe],
          exports: [LatinizePipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WrapPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'wrap'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgWrapPipeModule, {
        declarations: [WrapPipe],
        exports: [WrapPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgWrapPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [WrapPipe],
          exports: [WrapPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WithPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'with'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgWithPipeModule, {
        declarations: [WithPipe],
        exports: [WithPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgWithPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [WithPipe],
          exports: [WithPipe]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReverseStrPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'reverseStr'
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgReverseStrPipeModule, {
        declarations: [ReverseStrPipe],
        exports: [ReverseStrPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgReverseStrPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [ReverseStrPipe],
          exports: [ReverseStrPipe]
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgStringPipesModule, {
        imports: [NgCapitalizePipeModule, NgDecodeURIComponentPipeModule, NgDecodeURIPipeModule, NgEncodeURIComponentPipeModule, NgLeftPadPipeModule, NgMatchPipeModule, NgPadPipeModule, NgReplacePipeModule, NgRightPadPipeModule, NgSplitPipeModule, NgTestPipeModule, NgTrimPipeModule, NgNewlinesPipeModule, NgUpperFirstPipeModule, NgTemplatePipeModule, NgEncodeURIPipeModule, NgTruncatePipeModule, NgRepeatPipeModule, NgSlugifyPipeModule, NgStripTagsPipeModule, NgLatinizePipeModule, NgWrapPipeModule, NgWithPipeModule, NgReverseStrPipeModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgStringPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [NgCapitalizePipeModule, NgDecodeURIComponentPipeModule, NgDecodeURIPipeModule, NgEncodeURIComponentPipeModule, NgLeftPadPipeModule, NgMatchPipeModule, NgPadPipeModule, NgReplacePipeModule, NgRightPadPipeModule, NgSplitPipeModule, NgTestPipeModule, NgTrimPipeModule, NgNewlinesPipeModule, NgUpperFirstPipeModule, NgTemplatePipeModule, NgEncodeURIPipeModule, NgTruncatePipeModule, NgRepeatPipeModule, NgSlugifyPipeModule, NgStripTagsPipeModule, NgLatinizePipeModule, NgWrapPipeModule, NgWithPipeModule, NgReverseStrPipeModule]
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgPipesModule, {
        exports: [NgArrayPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgStringPipesModule, NgObjectPipesModule, NgAggregatePipesModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [NgArrayPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgStringPipesModule, NgObjectPipesModule, NgAggregatePipesModule]
        }]
      }], null, null);
    })(); //# sourceMappingURL=angular-pipes.js.map

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
    !function (r, t) {
      true ? module.exports = t() : undefined;
    }(this, function () {
      "use strict";

      return function (r, t, e) {
        r = r || {};
        var n = t.prototype,
            o = {
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
        e.en.relativeTime = o;

        var d = function d(t, n, _d2, i) {
          for (var u, a, s, f = _d2.$locale().relativeTime || o, l = r.thresholds || [{
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
          }], h = l.length, m = 0; m < h; m += 1) {
            var c = l[m];
            c.d && (u = i ? e(t).diff(_d2, c.d, !0) : _d2.diff(t, c.d, !0));
            var y = (r.rounding || Math.round)(Math.abs(u));

            if (s = u > 0, y <= c.r || !c.r) {
              y <= 1 && m > 0 && (c = l[m - 1]);
              var p = f[c.l];
              a = "string" == typeof p ? p.replace("%d", y) : p(y, n, c.l, s);
              break;
            }
          }

          return n ? a : (s ? f.future : f.past).replace("%s", a);
        };

        n.to = function (r, t) {
          return d(r, t, this, !0);
        }, n.from = function (r, t) {
          return d(r, t, this);
        };

        var i = function i(r) {
          return r.$u ? e.utc() : e();
        };

        n.toNow = function (r) {
          return this.to(i(this), r);
        }, n.fromNow = function (r) {
          return this.from(i(this), r);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var angular_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-pipes */
    "./node_modules/angular-pipes/__ivy_ngcc__/fesm2015/angular-pipes.js");
    /* harmony import */


    var _time_difference_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./time-difference.pipe */
    "./src/app/pipes/time-difference.pipe.ts");
    /* harmony import */


    var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./time-ago.pipe */
    "./src/app/pipes/time-ago.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_3__["NgFloorPipeModule"]], angular_pipes__WEBPACK_IMPORTED_MODULE_3__["NgFloorPipeModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
        declarations: [_time_difference_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeDifferencePipe"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_3__["NgFloorPipeModule"]],
        exports: [angular_pipes__WEBPACK_IMPORTED_MODULE_3__["NgFloorPipeModule"], _time_difference_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeDifferencePipe"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_3__["NgFloorPipeModule"]],
          declarations: [_time_difference_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeDifferencePipe"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]],
          exports: [angular_pipes__WEBPACK_IMPORTED_MODULE_3__["NgFloorPipeModule"], _time_difference_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeDifferencePipe"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dayjs/plugin/relativeTime */
    "./node_modules/dayjs/plugin/relativeTime.js");
    /* harmony import */


    var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);

    var TimeAgoPipe = /*#__PURE__*/function () {
      function TimeAgoPipe() {
        _classCallCheck(this, TimeAgoPipe);
      }

      _createClass(TimeAgoPipe, [{
        key: "transform",
        value: function transform(value) {
          dayjs__WEBPACK_IMPORTED_MODULE_1__["extend"](dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);
          var timeAgo = '';

          if (value) {
            var withoutSuffix = dayjs__WEBPACK_IMPORTED_MODULE_1__(value).diff(dayjs__WEBPACK_IMPORTED_MODULE_1__(), 'day') < 0 ? false : true;
            timeAgo = dayjs__WEBPACK_IMPORTED_MODULE_1__().to(dayjs__WEBPACK_IMPORTED_MODULE_1__(value), withoutSuffix);
          }

          return timeAgo;
        }
      }]);

      return TimeAgoPipe;
    }();

    TimeAgoPipe.ɵfac = function TimeAgoPipe_Factory(t) {
      return new (t || TimeAgoPipe)();
    };

    TimeAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "appTimeAgo",
      type: TimeAgoPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'appTimeAgo'
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);

    var TimeDifferencePipe = /*#__PURE__*/function () {
      function TimeDifferencePipe() {
        _classCallCheck(this, TimeDifferencePipe);
      }

      _createClass(TimeDifferencePipe, [{
        key: "transform",
        value: function transform(value) {
          return dayjs__WEBPACK_IMPORTED_MODULE_1__(value).diff(dayjs__WEBPACK_IMPORTED_MODULE_1__(), 'day');
        }
      }]);

      return TimeDifferencePipe;
    }();

    TimeDifferencePipe.ɵfac = function TimeDifferencePipe_Factory(t) {
      return new (t || TimeDifferencePipe)();
    };

    TimeDifferencePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "appTimeDifference",
      type: TimeDifferencePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeDifferencePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'appTimeDifference'
        }]
      }], null, null);
    })();
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
  "./src/app/utils/resolver-helper.ts":
  /*!******************************************!*\
    !*** ./src/app/utils/resolver-helper.ts ***!
    \******************************************/

  /*! exports provided: ResolverHelper */

  /***/
  function srcAppUtilsResolverHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResolverHelper", function () {
      return ResolverHelper;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ResolverHelper = /*#__PURE__*/function () {
      function ResolverHelper() {
        _classCallCheck(this, ResolverHelper);
      }

      _createClass(ResolverHelper, null, [{
        key: "extractData",
        // More info on function overloads here: https://www.typescriptlang.org/docs/handbook/functions.html#overloads
        value: function extractData(source, constructor) {
          if (source instanceof _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["DataStore"]) {
            return source.state;
          } else if (source instanceof constructor) {
            // The right side of instanceof should be an expression evaluating to a constructor function (ie. a class), not a type
            // That's why we included an extra parameter which acts as a constructor function for type T
            // (see: https://github.com/microsoft/TypeScript/issues/5236)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(source);
          }
        }
      }]);

      return ResolverHelper;
    }();
    /***/

  }
}]);
//# sourceMappingURL=default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5-es5.js.map