function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-details-food-details-module"], {
  /***/
  "./src/app/food/details/food-details.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/food/details/food-details.module.ts ***!
    \*****************************************************/

  /*! exports provided: FoodDetailsPageModule */

  /***/
  function srcAppFoodDetailsFoodDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodDetailsPageModule", function () {
      return FoodDetailsPageModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _food_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../food.service */
    "./src/app/food/food.service.ts");
    /* harmony import */


    var _food_details_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./food-details.page */
    "./src/app/food/details/food-details.page.ts");
    /* harmony import */


    var _food_details_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./food-details.resolver */
    "./src/app/food/details/food-details.resolver.ts");

    var routes = [{
      path: '',
      component: _food_details_page__WEBPACK_IMPORTED_MODULE_9__["FoodDetailsPage"],
      resolve: {
        data: _food_details_resolver__WEBPACK_IMPORTED_MODULE_10__["FoodDetailsResolver"]
      }
    }];

    var FoodDetailsPageModule = function FoodDetailsPageModule() {
      _classCallCheck(this, FoodDetailsPageModule);
    };

    FoodDetailsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FoodDetailsPageModule
    });
    FoodDetailsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FoodDetailsPageModule_Factory(t) {
        return new (t || FoodDetailsPageModule)();
      },
      providers: [_food_details_resolver__WEBPACK_IMPORTED_MODULE_10__["FoodDetailsResolver"], _food_service__WEBPACK_IMPORTED_MODULE_8__["FoodService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FoodDetailsPageModule, {
        declarations: [_food_details_page__WEBPACK_IMPORTED_MODULE_9__["FoodDetailsPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodDetailsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          declarations: [_food_details_page__WEBPACK_IMPORTED_MODULE_9__["FoodDetailsPage"]],
          providers: [_food_details_resolver__WEBPACK_IMPORTED_MODULE_10__["FoodDetailsResolver"], _food_service__WEBPACK_IMPORTED_MODULE_8__["FoodService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/food/details/food-details.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/food/details/food-details.page.ts ***!
    \***************************************************/

  /*! exports provided: FoodDetailsPage */

  /***/
  function srcAppFoodDetailsFoodDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodDetailsPage", function () {
      return FoodDetailsPage;
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


    var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/resolver-helper */
    "./src/app/utils/resolver-helper.ts");
    /* harmony import */


    var _food_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./food-details.model */
    "./src/app/food/details/food-details.model.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shell/image-shell/image-shell.component */
    "./src/app/shell/image-shell/image-shell.component.ts");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shell/aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
    /* harmony import */


    var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shell/text-shell/text-shell.component */
    "./src/app/shell/text-shell/text-shell.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-pipes */
    "./node_modules/angular-pipes/__ivy_ngcc__/fesm2015/angular-pipes.js");

    function FoodDetailsPage_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FoodDetailsPage_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FoodDetailsPage_ion_col_29_ion_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 55);
      }

      if (rf & 2) {
        var rating_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", rating_r11.concept ? "./assets/custom-icons/food/" + rating_r11.concept + "-rate.svg" : "");
      }
    }

    function FoodDetailsPage_ion_col_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FoodDetailsPage_ion_col_29_ion_icon_1_Template, 1, 1, "ion-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rating_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rating_r11.concept);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", rating_r11.rate);
      }
    }

    function FoodDetailsPage_li_38_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "to");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var schedule_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", schedule_r14.hourFrom);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", schedule_r14.hourTo);
      }
    }

    function FoodDetailsPage_li_38_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-badge", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "closed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function FoodDetailsPage_li_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FoodDetailsPage_li_38_ng_container_5_Template, 7, 2, "ng-container", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FoodDetailsPage_li_38_ng_container_6_Template, 3, 0, "ng-container", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schedule_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", schedule_r14.day);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", schedule_r14.open);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !schedule_r14.open);
      }
    }

    function FoodDetailsPage_ion_col_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", tag_r18);
      }
    }

    function FoodDetailsPage_ion_col_54_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r21.details == null ? null : ctx_r21.details.usersPictures == null ? null : ctx_r21.details.usersPictures.length) - 5);
      }
    }

    var _c0 = function _c0() {
      return {
        w: 1,
        h: 1
      };
    };

    function FoodDetailsPage_ion_col_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-aspect-ratio", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-image-shell", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FoodDetailsPage_ion_col_54_a_3_Template, 3, 1, "a", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var picture_r19 = ctx.$implicit;
        var i_r20 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r19)("alt", "user image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r20 == 4 && (ctx_r5.details == null ? null : ctx_r5.details.usersPictures == null ? null : ctx_r5.details.usersPictures.length) > 5);
      }
    }

    function FoodDetailsPage_ion_row_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-progress-bar", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-icon", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dish_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", dish_r22.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dish_r22.rate / 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", dish_r22.votesCount);
      }
    }

    function FoodDetailsPage_div_66_ion_col_30_ion_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 55);
      }

      if (rf & 2) {
        var rating_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", rating_r25.concept ? "./assets/custom-icons/food/" + rating_r25.concept + "-rate.svg" : "");
      }
    }

    function FoodDetailsPage_div_66_ion_col_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FoodDetailsPage_div_66_ion_col_30_ion_icon_1_Template, 1, 1, "ion-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rating_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rating_r25.concept);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", rating_r25.rate);
      }
    }

    function FoodDetailsPage_div_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-col", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-aspect-ratio", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-image-shell", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Reviews");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-col", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ion-icon", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Points");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-col", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "floor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-text-shell", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-row", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FoodDetailsPage_div_66_ion_col_30_Template, 4, 2, "ion-col", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var review_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r23.user.image)("alt", "review user image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", review_r23.user.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", review_r23.user.reviewsCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", review_r23.user.points);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", review_r23.publishedAt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("ratingBase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 11, review_r23.avgRating));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", review_r23.avgRating);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", review_r23.message);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", review_r23.ratings);
      }
    }

    var _c1 = function _c1() {
      return {
        w: 64,
        h: 30
      };
    };

    function FoodDetailsPage_div_78_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-image-shell", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aspect-ratio", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-aspect-ratio", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-image-shell", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RECIPE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-row", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-col", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ion-icon", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-col", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ion-icon", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-col", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ion-icon", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-text-shell", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r28 = ctx.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", recipe_r28.showcaseImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", recipe_r28 == null ? null : recipe_r28.chef == null ? null : recipe_r28.chef.image)("alt", "chef image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r8.details == null ? null : ctx_r8.details.shortName == null ? null : ctx_r8.details.shortName.concat(" famous"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", recipe_r28.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", recipe_r28.chef ? "By chef".concat(" ", recipe_r28 == null ? null : recipe_r28.chef == null ? null : recipe_r28.chef.name) : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", recipe_r28.difficulty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", recipe_r28.time);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", recipe_r28.calories);
      }
    }

    var _c2 = function _c2() {
      return {
        w: 64,
        h: 40
      };
    };

    var _c3 = function _c3() {
      return {
        w: 40,
        h: 20
      };
    };

    var _c4 = function _c4() {
      return [];
    };

    var _c5 = function _c5() {
      return {
        w: 64,
        h: 20
      };
    };

    var FoodDetailsPage = /*#__PURE__*/function () {
      function FoodDetailsPage(route) {
        _classCallCheck(this, FoodDetailsPage);

        this.route = route;
      }

      _createClass(FoodDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // On init, the route subscription is the active subscription
          this.subscriptions = this.route.data.subscribe(function (resolvedRouteData) {
            // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
            _this.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__["ResolverHelper"].extractData(resolvedRouteData.data, _food_details_model__WEBPACK_IMPORTED_MODULE_3__["FoodDetailsModel"]).subscribe(function (state) {
              _this.details = state;
            }, function (error) {});
          }, function (error) {});
        } // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
        // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions

      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          // console.log('TravelListingPage [ionViewWillLeave]');
          this.subscriptions.unsubscribe();
        }
      }, {
        key: "isShell",
        get: function get() {
          return this.details && this.details.isShell ? true : false;
        }
      }]);

      return FoodDetailsPage;
    }();

    FoodDetailsPage.ɵfac = function FoodDetailsPage_Factory(t) {
      return new (t || FoodDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    FoodDetailsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FoodDetailsPage,
      selectors: [["app-food-details"]],
      hostVars: 2,
      hostBindings: function FoodDetailsPage_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
        }
      },
      decls: 79,
      vars: 32,
      consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "app/categories/food"], [1, "food-details-content"], [1, "image-row"], ["size", "12"], ["animation", "spinner", 1, "add-overlay", "showcase-image", 3, "display", "src"], [3, "ratio"], [1, "icon-wrapper"], [1, "icon-image", 3, "src"], [1, "description-row"], ["size", "9"], [1, "details-name"], [3, "data"], [1, "details-style"], ["size", "3"], [1, "details-price-range"], ["class", "price", 4, "ngFor", "ngForOf"], ["class", "no-price", 4, "ngFor", "ngForOf"], [1, "details-scores", "restaurant-scores"], [1, "restaurant-rating"], ["class", "score-item restaurant-score", 4, "ngFor", "ngForOf"], [1, "score-item", "restaurant-score", "reviews-count"], ["src", "./assets/custom-icons/food/reviews.svg", 1, "score-icon"], [1, "score-value"], [1, "open-hours-wrapper"], [1, "detail-title"], [1, "schedules-list"], ["class", "open-hour-item", 4, "ngFor", "ngForOf"], [1, "location-wrapper"], [1, "location-header"], [1, "location-address"], ["animation", "spinner", 1, "location-image", 3, "src", "alt"], [1, "details-tags"], ["class", "tag-wrapper", 4, "ngFor", "ngForOf"], [1, "details-divider"], [1, "users-pictures-wrapper"], [1, "pictures-row"], ["class", "picture-wrapper", "size", "2", 4, "ngFor", "ngForOf"], ["color", "dark", "expand", "block", "fill", "outline", 1, "upload-picture-btn"], [1, "popular-dishes-wrapper"], ["class", "popular-dish", 4, "ngFor", "ngForOf"], [1, "reviews-wrapper"], [1, "reviews-list"], ["class", "review-item", 4, "ngFor", "ngForOf"], ["color", "dark", "expand", "block", "fill", "clear", 1, "all-reviews-btn"], ["color", "dark", "expand", "block", "fill", "solid", 1, "write-reviews-btn"], [1, "recipes-wrapper"], [1, "recipes-header"], [1, "recipes-list"], ["class", "recipe-item", 4, "ngFor", "ngForOf"], [1, "price"], [1, "no-price"], [1, "score-item", "restaurant-score"], ["class", "score-icon", 3, "src", 4, "ngIf"], [1, "score-icon", 3, "src"], [1, "open-hour-item"], [1, "schedule-outer"], [1, "schedule-day"], [1, "schedule-hours"], [4, "ngIf"], [1, "schedule-value"], [1, "schedule-separator"], ["color", "medium", 1, "schedule-closed"], [1, "tag-wrapper"], [1, "item-tag"], ["size", "2", 1, "picture-wrapper"], [1, "user-picture-image", 3, "src", "alt"], ["class", "has-more-pictures", 4, "ngIf"], [1, "has-more-pictures"], [1, "pictures-count"], [1, "popular-dish"], [1, "dish-name"], ["type", "determinate", 1, "dish-score", 3, "value"], ["size", "3", 1, "dish-votes-count"], [1, "dish-votes-value"], ["name", "heart-outline", 1, "dish-votes-icon"], [1, "review-item"], [1, "review-user"], ["size", "2", 1, "user-image-wrapper"], [1, "review-user-image", 3, "src", "alt"], [1, "user-brief-wrapper"], [1, "review-user-name"], [1, "details-scores", "user-scores"], [1, "score-item", "user-score"], [1, "score-title"], ["src", "./assets/custom-icons/food/points.svg", 1, "score-icon"], [1, "review-info-wrapper"], [1, "review-date"], [1, "review-rating"], [1, "review-message"], ["lines", "5", 3, "data"], [1, "details-scores", "review-scores"], ["class", "score-item review-score", 4, "ngFor", "ngForOf"], [1, "score-item", "review-score"], [1, "recipe-item"], [1, "recipe-cover-image", 3, "display", "src"], [1, "chef-picture-wrapper"], [1, "chef-picture-image", 3, "src", "alt"], [1, "recipe-title"], [1, "recipe-call-to-action"], [1, "recipe-author"], [1, "recipe-name"], [1, "recipe-chef"], [1, "details-scores", "recipe-attributes"], [1, "score-item", "attribute-score"], ["src", "./assets/custom-icons/food/difficulty.svg", 1, "score-icon"], ["src", "./assets/custom-icons/food/cooking-time.svg", 1, "score-icon"], ["src", "./assets/custom-icons/food/calories.svg", 1, "score-icon"]],
      template: function FoodDetailsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Food Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-row", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-image-shell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-aspect-ratio", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-aspect-ratio", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-image-shell", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-row", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-col", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-text-shell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-text-shell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-col", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FoodDetailsPage_span_22_Template, 2, 0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FoodDetailsPage_span_23_Template, 2, 0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-col", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-row", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "floor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-text-shell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FoodDetailsPage_ion_col_29_Template, 4, 2, "ion-col", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-col", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "ion-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-text-shell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Schedules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, FoodDetailsPage_li_38_Template, 7, 3, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-text-shell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "app-aspect-ratio", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-image-shell", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ion-row", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, FoodDetailsPage_ion_col_48_Template, 3, 1, "ion-col", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "User's photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ion-row", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, FoodDetailsPage_ion_col_54_Template, 4, 5, "ion-col", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ion-button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Upload photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Popular dishes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, FoodDetailsPage_ion_row_60_Template, 9, 3, "ion-row", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "hr", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, FoodDetailsPage_div_66_Template, 31, 14, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "hr", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ion-button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "hr", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ion-button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Write a review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, FoodDetailsPage_div_78_Template, 30, 14, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", ctx.details == null ? null : ctx.details.showcaseImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.details == null ? null : ctx.details.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.style);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c4).constructor(ctx.details == null ? null : ctx.details.priceRange));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c4).constructor(5 - ((ctx.details == null ? null : ctx.details.priceRange) || 1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("ratingBase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 25, ctx.details == null ? null : ctx.details.avgRating));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.avgRating);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.ratings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.reviewsCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.openHours);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details.location == null ? null : ctx.details.location.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.details.location == null ? null : ctx.details.location.mapImage)("alt", "location map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.tags);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.usersPictures == null ? null : ctx.details.usersPictures.slice(0, 5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.popularDishes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.reviews);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("READ ALL REVIEWS (", ctx.details == null ? null : ctx.details.reviews == null ? null : ctx.details.reviews.length, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.shortName, " famous recipes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.popularRecipes);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__["AspectRatioComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonProgressBar"]],
      pipes: [angular_pipes__WEBPACK_IMPORTED_MODULE_9__["FloorPipe"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-tags-vertical-gutter: calc(var(--page-margin) / 4);\n  --page-tags-horizontal-gutter: calc(var(--page-margin) / 2);\n  --page-users-pictures-gutter: calc(var(--page-margin) / 4);\n  --page-dish-score-height: 6px;\n  --page-rating-5-color: #7ce198;\n  --page-rating-4-color: #a8e07c;\n  --page-rating-3-color: #cee07c;\n  --page-rating-2-color: #e0c77c;\n  --page-rating-1-color: #e07c7c;\n  --page-color: #ebbb00;\n  --page-color-rgb: 235,187,0;\n}\n.food-details-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n.food-details-content[_ngcontent-%COMP%]   .details-scores[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.food-details-content[_ngcontent-%COMP%]   .details-scores[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%]   .score-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 24px;\n}\n.food-details-content[_ngcontent-%COMP%]   .details-scores[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n  margin-left: 4px;\n}\n.food-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n.food-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  margin: 0px 15%;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 18px;\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-style[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: var(--page-margin);\n  font-size: 16px;\n  color: var(--ion-color-dark-tint);\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price-range[_ngcontent-%COMP%] {\n  font-size: 16px;\n  letter-spacing: 1px;\n  font-weight: 500;\n  text-align: right;\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price-range[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: var(--page-color);\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price-range[_ngcontent-%COMP%]   .no-price[_ngcontent-%COMP%] {\n  color: rgba(var(--ion-color-light-shade-rgb), 0.5);\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-score[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-score[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-score[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n  border-right: 1px solid var(--ion-color-light-shade);\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-score.reviews-count[_ngcontent-%COMP%] {\n  flex: 0 1 15%;\n  justify-content: flex-end;\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[_ngcontent-%COMP%] {\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  min-width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--ion-color-medium-tint);\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"1\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-1-color);\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"2\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-2-color);\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"3\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-3-color);\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"4\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-4-color);\n}\n.food-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"5\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-5-color);\n}\n.food-details-content[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n.food-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.food-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n.food-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.food-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]    + .open-hour-item[_ngcontent-%COMP%] {\n  margin-top: calc(var(--page-margin) / 2);\n}\n.food-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 75%;\n}\n.food-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-day[_ngcontent-%COMP%] {\n  display: block;\n  padding-right: var(--page-margin);\n  width: 40%;\n  font-size: 14px;\n}\n.food-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.food-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-separator[_ngcontent-%COMP%] {\n  margin: 0px var(--page-margin);\n  line-height: 1;\n}\n.food-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-value[_ngcontent-%COMP%] {\n  flex: 0 1 25%;\n  font-weight: 500;\n}\n.food-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-value[_ngcontent-%COMP%]:first-child {\n  text-align: start;\n}\n.food-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-value[_ngcontent-%COMP%]:last-child {\n  text-align: end;\n}\n.food-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-closed[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.food-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%] {\n  padding: 0px 0px var(--page-margin);\n}\n.food-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-header[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.food-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.food-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-address[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.food-details-content[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin) var(--page-margin);\n  justify-content: center;\n  margin-top: calc(var(--page-tags-vertical-gutter) * 2 * -1);\n}\n.food-details-content[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%] {\n  padding: calc(var(--page-tags-vertical-gutter) * 2) var(--page-tags-horizontal-gutter) 0px 0px;\n  flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.food-details-content[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]:last-child {\n  padding-right: 0px;\n}\n.food-details-content[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%]   .item-tag[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-medium-tint);\n  padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter);\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.food-details-content[_ngcontent-%COMP%]   .details-divider[_ngcontent-%COMP%] {\n  margin: 0px var(--page-margin) calc(var(--page-margin) * 2);\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n.food-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.food-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%] {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: 0px;\n  margin: 0px calc(var(--page-users-pictures-gutter) * -1);\n}\n.food-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-users-pictures-gutter);\n}\n.food-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0px var(--page-users-pictures-gutter);\n  background-color: rgba(var(--page-color-rgb), 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  z-index: 2;\n}\n.food-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  font-weight: 600;\n}\n.food-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%]::before {\n  content: \"+\";\n  font-size: 26px;\n  color: var(--ion-color-lightest);\n  font-weight: 600;\n}\n.food-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .upload-picture-btn[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) / 2) 0px 0px;\n}\n.food-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.food-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n.food-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: var(--page-margin);\n}\n.food-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-name[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.food-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-score[_ngcontent-%COMP%] {\n  --buffer-background: rgba(var(--page-color-rgb), .20);\n  --progress-background: rgba(var(--page-color-rgb), 1);\n  height: var(--page-dish-score-height);\n  border-radius: calc(var(--page-dish-score-height) / 2);\n}\n.food-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-votes-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.food-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-votes-count[_ngcontent-%COMP%]   .dish-votes-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n}\n.food-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-votes-count[_ngcontent-%COMP%]   .dish-votes-value[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n  margin-right: 4px;\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%] {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: var(--page-margin);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \"\";\n  display: block;\n  margin: 5px var(--page-margin);\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%] {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: 0px;\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%] {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .user-brief-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right: calc(var(--page-margin) / 2);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .user-brief-wrapper[_ngcontent-%COMP%]   .review-user-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px;\n  font-weight: 400;\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .user-brief-wrapper[_ngcontent-%COMP%]   .user-scores[_ngcontent-%COMP%]   .user-score[_ngcontent-%COMP%]   .score-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 12px;\n  margin-left: 4px;\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  min-width: 20%;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  flex-grow: 0;\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-date[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 11px;\n  display: block;\n  width: 100%;\n  text-align: right;\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[_ngcontent-%COMP%] {\n  width: 36px;\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  background-color: var(--ion-color-medium-tint);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"1\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-1-color);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"2\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-2-color);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"3\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-3-color);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"4\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-4-color);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"5\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-5-color);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 18px;\n  margin: var(--page-margin) 0px;\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-scores[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n  justify-content: space-between;\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-scores[_ngcontent-%COMP%]   .review-score[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-scores[_ngcontent-%COMP%]   .review-score[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-scores[_ngcontent-%COMP%]   .review-score[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n  border-right: 1px solid var(--ion-color-light-shade);\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .details-divider[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .all-reviews-btn[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n.food-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .write-reviews-btn[_ngcontent-%COMP%] {\n  margin: var(--page-margin) 0px 0px;\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) * 3) 0px;\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-header[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) 0px;\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-header[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .chef-picture-wrapper[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 0px auto;\n  margin-top: -10%;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .details-divider[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-weight: 400;\n  letter-spacing: 3px;\n  font-size: 18px;\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-title[_ngcontent-%COMP%]::before, .food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-title[_ngcontent-%COMP%]::after {\n  content: \"\xB7\";\n  color: var(--ion-color-dark-tint);\n  margin: 0px 2px;\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-call-to-action[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: var(--page-margin) calc(var(--page-margin) * 2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-call-to-action[_ngcontent-%COMP%]   .recipe-author[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  min-width: 30%;\n  color: var(--ion-color-dark-tint);\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-call-to-action[_ngcontent-%COMP%]   .recipe-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 300;\n  letter-spacing: 1px;\n  margin: calc(var(--page-margin) / 2) 0px;\n  min-width: 90%;\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-call-to-action[_ngcontent-%COMP%]   .recipe-chef[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  min-width: 60%;\n  color: var(--ion-color-dark-tint);\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin);\n  margin-top: var(--page-margin);\n  justify-content: center;\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%]   .attribute-score[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%]   .attribute-score[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%]   .attribute-score[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.food-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%]   .attribute-score[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC9kZXRhaWxzL3N0eWxlcy9mb29kLWRldGFpbHMucGFnZS5zY3NzIiwiL1VzZXJzL2RheWFuYS93b3JrL2lvbmljL3RlbXBsYXRlcy9pb240ZnVsbHB3YS9zcmMvYXBwL2Zvb2QvZGV0YWlscy9zdHlsZXMvZm9vZC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBRUEseURBQUE7RUFDQSwyREFBQTtFQUNBLDBEQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBRUEscUJBQUE7RUFDQSwyQkFBQTtBREhGO0FDT0E7RUFDRSxvQ0FBQTtBREpGO0FDT0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QURMTjtBQ09NO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FETFI7QUNRTTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FETlI7QUNXRTtFQUNFLDhCQUFBO0FEVEo7QUNXSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURUTjtBQ2FFO0VBQ0UsOEJBQUE7RUFFQSwyQkFBQTtFQUNBLDRDQUFBO0FEWko7QUNjSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FEWk47QUNlSTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBRGJOO0FDZ0JJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRGROO0FDZ0JNO0VBQ0Usd0JBQUE7QURkUjtBQ2lCTTtFQUNFLGtEQUFBO0FEZlI7QUNvQk07RUFDRSx1QkFBQTtBRGxCUjtBQ29CUTtFQUNFLDBDQUFBO0FEbEJWO0FDcUJRO0VBQ0UsMkNBQUE7RUFDQSxvREFBQTtBRG5CVjtBQ3NCUTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBRHBCVjtBQ3dCTTtFQUNGLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrRUFBQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0csZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsOENBQUE7QUR2QlI7QUN5Qkk7RUFDQyw0Q0FBQTtBRHZCTDtBQ3lCSTtFQUNDLDRDQUFBO0FEdkJMO0FDeUJJO0VBQ0MsNENBQUE7QUR2Qkw7QUN5Qkk7RUFDQyw0Q0FBQTtBRHZCTDtBQ3lCSTtFQUNDLDRDQUFBO0FEdkJMO0FDNkJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUQzQko7QUM4QkU7RUFDRSxrREFBQTtBRDVCSjtBQzhCSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUQ1Qk47QUM4Qk07RUFDRSxlQUFBO0VBQ0EsbUNBQUE7QUQ1QlI7QUM4QlE7RUFDRSx3Q0FBQTtBRDVCVjtBQytCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBRDdCVjtBQytCVTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEN0JaO0FDZ0NVO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FEOUJaO0FDZ0NZO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FEOUJkO0FDaUNZO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FEL0JkO0FDaUNjO0VBQ0UsaUJBQUE7QUQvQmhCO0FDaUNjO0VBQ0UsZUFBQTtBRC9CaEI7QUNtQ1k7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QURqQ2Q7QUN5Q0U7RUFDRSxtQ0FBQTtBRHZDSjtBQ3lDSTtFQUNFLG1DQUFBO0VBQ0EsMkNBQUE7QUR2Q047QUMwQ0k7RUFDRSxrQkFBQTtBRHhDTjtBQzJDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUR6Q047QUM2Q0U7RUFDRSw4QkFBQTtFQUVBLGtEQUFBO0VBQ0EsdUJBQUE7RUFDQSwyREFBQTtBRDVDSjtBQzhDSTtFQUNFLDhGQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBRDVDTjtBQzhDTTtFQUNFLGtCQUFBO0FENUNSO0FDZ0RJO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsOENBQUE7RUFDQSw0RUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBRDlDTjtBQ2tERTtFQUNFLDJEQUFBO0VBQ0EsaUVBQUE7QURoREo7QUNtREU7RUFDRSxrREFBQTtBRGpESjtBQ21ESTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7RUFFQSx3REFBQTtBRGxETjtBQ29ETTtFQUNFLDhDQUFBO0FEbERSO0FDb0RRO0VBQ0Ysa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0ksNkNBQUE7RUFDSixrREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FEbERWO0FDb0RNO0VBQ0MsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QURsRFA7QUNvRE87RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QURsRFI7QUN5REk7RUFDRSw0Q0FBQTtBRHZETjtBQzJERTtFQUNFLGtEQUFBO0FEekRKO0FDMkRJO0VBQ0UsOEJBQUE7QUR6RE47QUMyRE07RUFDRSxrQ0FBQTtBRHpEUjtBQzRETTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBRDFEUjtBQzZETTtFQUNFLHFEQUFBO0VBQ0EscURBQUE7RUFFQSxxQ0FBQTtFQUNBLHNEQUFBO0FENURSO0FDK0RNO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUQ3RFI7QUMrRFE7RUFDRSxtQ0FBQTtBRDdEVjtBQ2dFUTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FEOURWO0FDb0VFO0VBQ0Usa0RBQUE7QURsRUo7QUNvRUk7RUFDRSwyQ0FBQTtBRGxFTjtBQ3FFUTtFQUNFLGtDQUFBO0FEbkVWO0FDcUVVO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGlFQUFBO0FEbkVaO0FDdUVRO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBRHJFVjtBQ3VFVTtFQUNFLDJDQUFBO0FEckVaO0FDd0VVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFFQSwyQ0FBQTtBRHZFWjtBQ3lFWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUR2RWQ7QUM0RWdCO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQxRWxCO0FDZ0ZVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxZQUFBO0FEOUVaO0FDZ0ZZO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRDlFZDtBQ2lGWTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNKLHVDQUFBO0VBQ0Esa0VBQUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFRyw4Q0FBQTtBRGhGZDtBQ2tGVTtFQUNDLDRDQUFBO0FEaEZYO0FDa0ZVO0VBQ0MsNENBQUE7QURoRlg7QUNrRlU7RUFDQyw0Q0FBQTtBRGhGWDtBQ2tGVTtFQUNDLDRDQUFBO0FEaEZYO0FDa0ZVO0VBQ0MsNENBQUE7QURoRlg7QUNzRlE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FEcEZWO0FDdUZRO0VBQ0Usa0RBQUE7RUFDQSw4QkFBQTtBRHJGVjtBQ3VGVTtFQUNFLHVCQUFBO0FEckZaO0FDdUZZO0VBQ0UsMENBQUE7QURyRmQ7QUN3Rlk7RUFDRSwyQ0FBQTtFQUNBLG9EQUFBO0FEdEZkO0FDNkZJO0VBQ0UsZUFBQTtBRDNGTjtBQzhGSTtFQUNFLGVBQUE7QUQ1Rk47QUMrRkk7RUFDRSxrQ0FBQTtBRDdGTjtBQ2lHRTtFQUNFLHlDQUFBO0FEL0ZKO0FDaUdJO0VBQ0UsbUNBQUE7QUQvRk47QUNpR007RUFDRSwwQkFBQTtBRC9GUjtBQ3FHUTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QURuR1Y7QUNzR1E7RUFDRSxrQkFBQTtBRHBHVjtBQ3VHUTtFQUNFLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRHJHVjtBQ3VHVTtFQUVFLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUR0R1o7QUMwR1E7RUFDRSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUR4R1Y7QUMwR1U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBRHhHWjtBQzJHVTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtBRHpHWjtBQzRHVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FEMUdaO0FDOEdRO0VBQ0UsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FENUdWO0FDOEdVO0VBQ0UsdUJBQUE7QUQ1R1o7QUM4R1k7RUFDRSwwQ0FBQTtBRDVHZDtBQytHWTtFQUNFLDJDQUFBO0FEN0dkO0FDZ0hZO0VBQ0UsMEJBQUE7QUQ5R2QiLCJmaWxlIjoic3JjL2FwcC9mb29kL2RldGFpbHMvc3R5bGVzL2Zvb2QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS11c2Vycy1waWN0dXJlcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIC0tcGFnZS1kaXNoLXNjb3JlLWhlaWdodDogNnB4O1xuICAtLXBhZ2UtcmF0aW5nLTUtY29sb3I6ICM3Y2UxOTg7XG4gIC0tcGFnZS1yYXRpbmctNC1jb2xvcjogI2E4ZTA3YztcbiAgLS1wYWdlLXJhdGluZy0zLWNvbG9yOiAjY2VlMDdjO1xuICAtLXBhZ2UtcmF0aW5nLTItY29sb3I6ICNlMGM3N2M7XG4gIC0tcGFnZS1yYXRpbmctMS1jb2xvcjogI2UwN2M3YztcbiAgLS1wYWdlLWNvbG9yOiAjZWJiYjAwO1xuICAtLXBhZ2UtY29sb3ItcmdiOiAyMzUsMTg3LDA7XG59XG5cbi5mb29kLWRldGFpbHMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAuZGV0YWlscy1zY29yZXMgLnNjb3JlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXNjb3JlcyAuc2NvcmUtaXRlbSAuc2NvcmUtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtc2NvcmVzIC5zY29yZS1pdGVtIC5zY29yZS12YWx1ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmltYWdlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAuaW1hZ2Utcm93IC5pY29uLXdyYXBwZXIge1xuICBtYXJnaW46IDBweCAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtc3R5bGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1wcmljZS1yYW5nZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1wcmljZS1yYW5nZSAucHJpY2Uge1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1wcmljZS1yYW5nZSAubm8tcHJpY2Uge1xuICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgMC41KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5yZXN0YXVyYW50LXNjb3JlcyAucmVzdGF1cmFudC1zY29yZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLnJlc3RhdXJhbnQtc2NvcmVzIC5yZXN0YXVyYW50LXNjb3JlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLnJlc3RhdXJhbnQtc2NvcmVzIC5yZXN0YXVyYW50LXNjb3JlOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLnJlc3RhdXJhbnQtc2NvcmVzIC5yZXN0YXVyYW50LXNjb3JlLnJldmlld3MtY291bnQge1xuICBmbGV4OiAwIDEgMTUlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLnJlc3RhdXJhbnQtc2NvcmVzIC5yZXN0YXVyYW50LXJhdGluZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAucmVzdGF1cmFudC1zY29yZXMgLnJlc3RhdXJhbnQtcmF0aW5nW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAucmVzdGF1cmFudC1zY29yZXMgLnJlc3RhdXJhbnQtcmF0aW5nW3JhdGluZ0Jhc2U9XCIyXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAucmVzdGF1cmFudC1zY29yZXMgLnJlc3RhdXJhbnQtcmF0aW5nW3JhdGluZ0Jhc2U9XCIzXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMy1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAucmVzdGF1cmFudC1zY29yZXMgLnJlc3RhdXJhbnQtcmF0aW5nW3JhdGluZ0Jhc2U9XCI0XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNC1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAucmVzdGF1cmFudC1zY29yZXMgLnJlc3RhdXJhbnQtcmF0aW5nW3JhdGluZ0Jhc2U9XCI1XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNS1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gKyAub3Blbi1ob3VyLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA3NSU7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtZGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgd2lkdGg6IDQwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gLnNjaGVkdWxlLW91dGVyIC5zY2hlZHVsZS1ob3VycyAuc2NoZWR1bGUtc2VwYXJhdG9yIHtcbiAgbWFyZ2luOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gLnNjaGVkdWxlLW91dGVyIC5zY2hlZHVsZS1ob3VycyAuc2NoZWR1bGUtdmFsdWUge1xuICBmbGV4OiAwIDEgMjUlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIC5zY2hlZHVsZS12YWx1ZTpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIC5zY2hlZHVsZS12YWx1ZTpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIC5zY2hlZHVsZS1jbG9zZWQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciAubG9jYXRpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIgLmRldGFpbC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciAubG9jYXRpb24tYWRkcmVzcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXRhZ3Mge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSAqIDIgKiAtMSk7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtdGFncyAudGFnLXdyYXBwZXIge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpICogMikgdmFyKC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyKSAwcHggMHB4O1xuICBmbGV4LWdyb3c6IDA7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtdGFncyAudGFnLXdyYXBwZXI6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAuZGV0YWlscy10YWdzIC5pdGVtLXRhZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtZGl2aWRlciB7XG4gIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgMC40KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAudXNlcnMtcGljdHVyZXMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC51c2Vycy1waWN0dXJlcy13cmFwcGVyIC5waWN0dXJlcy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4IGNhbGModmFyKC0tcGFnZS11c2Vycy1waWN0dXJlcy1ndXR0ZXIpICogLTEpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC51c2Vycy1waWN0dXJlcy13cmFwcGVyIC5waWN0dXJlcy1yb3cgLnBpY3R1cmUtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXVzZXJzLXBpY3R1cmVzLWd1dHRlcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnVzZXJzLXBpY3R1cmVzLXdyYXBwZXIgLnBpY3R1cmVzLXJvdyAucGljdHVyZS13cmFwcGVyIC5oYXMtbW9yZS1waWN0dXJlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtdXNlcnMtcGljdHVyZXMtZ3V0dGVyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDI7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnVzZXJzLXBpY3R1cmVzLXdyYXBwZXIgLnBpY3R1cmVzLXJvdyAucGljdHVyZS13cmFwcGVyIC5oYXMtbW9yZS1waWN0dXJlcyAucGljdHVyZXMtY291bnQge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC51c2Vycy1waWN0dXJlcy13cmFwcGVyIC5waWN0dXJlcy1yb3cgLnBpY3R1cmUtd3JhcHBlciAuaGFzLW1vcmUtcGljdHVyZXMgLnBpY3R1cmVzLWNvdW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIitcIjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAudXNlcnMtcGljdHVyZXMtd3JhcHBlciAudXBsb2FkLXBpY3R1cmUtYnRuIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCAwcHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnBvcHVsYXItZGlzaGVzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucG9wdWxhci1kaXNoZXMtd3JhcHBlciAucG9wdWxhci1kaXNoIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5wb3B1bGFyLWRpc2hlcy13cmFwcGVyIC5wb3B1bGFyLWRpc2g6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnBvcHVsYXItZGlzaGVzLXdyYXBwZXIgLnBvcHVsYXItZGlzaCAuZGlzaC1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucG9wdWxhci1kaXNoZXMtd3JhcHBlciAucG9wdWxhci1kaXNoIC5kaXNoLXNjb3JlIHtcbiAgLS1idWZmZXItYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDEpO1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtZGlzaC1zY29yZS1oZWlnaHQpO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXBhZ2UtZGlzaC1zY29yZS1oZWlnaHQpIC8gMik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnBvcHVsYXItZGlzaGVzLXdyYXBwZXIgLnBvcHVsYXItZGlzaCAuZGlzaC12b3Rlcy1jb3VudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucG9wdWxhci1kaXNoZXMtd3JhcHBlciAucG9wdWxhci1kaXNoIC5kaXNoLXZvdGVzLWNvdW50IC5kaXNoLXZvdGVzLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucG9wdWxhci1kaXNoZXMtd3JhcHBlciAucG9wdWxhci1kaXNoIC5kaXNoLXZvdGVzLWNvdW50IC5kaXNoLXZvdGVzLXZhbHVlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYiksIDAuNCk7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXVzZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXVzZXIgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXVzZXIgLnVzZXItYnJpZWYtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXctdXNlciAudXNlci1icmllZi13cmFwcGVyIC5yZXZpZXctdXNlci1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXctdXNlciAudXNlci1icmllZi13cmFwcGVyIC51c2VyLXNjb3JlcyAudXNlci1zY29yZSAuc2NvcmUtdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldy11c2VyIC5yZXZpZXctaW5mby13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1pbi13aWR0aDogMjAlO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICBmbGV4LWdyb3c6IDA7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXVzZXIgLnJldmlldy1pbmZvLXdyYXBwZXIgLnJldmlldy1kYXRlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXctdXNlciAucmV2aWV3LWluZm8td3JhcHBlciAucmV2aWV3LXJhdGluZyB7XG4gIHdpZHRoOiAzNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXctdXNlciAucmV2aWV3LWluZm8td3JhcHBlciAucmV2aWV3LXJhdGluZ1tyYXRpbmdCYXNlPVwiMVwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldy11c2VyIC5yZXZpZXctaW5mby13cmFwcGVyIC5yZXZpZXctcmF0aW5nW3JhdGluZ0Jhc2U9XCIyXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXVzZXIgLnJldmlldy1pbmZvLXdyYXBwZXIgLnJldmlldy1yYXRpbmdbcmF0aW5nQmFzZT1cIjNcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0zLWNvbG9yKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXctdXNlciAucmV2aWV3LWluZm8td3JhcHBlciAucmV2aWV3LXJhdGluZ1tyYXRpbmdCYXNlPVwiNFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTQtY29sb3IpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldy11c2VyIC5yZXZpZXctaW5mby13cmFwcGVyIC5yZXZpZXctcmF0aW5nW3JhdGluZ0Jhc2U9XCI1XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNS1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXNjb3JlcyB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXNjb3JlcyAucmV2aWV3LXNjb3JlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXNjb3JlcyAucmV2aWV3LXNjb3JlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldy1zY29yZXMgLnJldmlldy1zY29yZTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5kZXRhaWxzLWRpdmlkZXIge1xuICBtYXJnaW46IDVweCAwcHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAuYWxsLXJldmlld3MtYnRuIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLndyaXRlLXJldmlld3MtYnRuIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAwcHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIC5yZWNpcGVzLWhlYWRlciAuZGV0YWlsLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1saXN0IC5yZWNpcGUtaXRlbSAuY2hlZi1waWN0dXJlLXdyYXBwZXIge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMTAlO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZWNpcGVzLXdyYXBwZXIgLnJlY2lwZXMtbGlzdCAucmVjaXBlLWl0ZW0gLmRldGFpbHMtZGl2aWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIC5yZWNpcGVzLWxpc3QgLnJlY2lwZS1pdGVtIC5yZWNpcGUtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1saXN0IC5yZWNpcGUtaXRlbSAucmVjaXBlLXRpdGxlOjpiZWZvcmUsIC5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIC5yZWNpcGVzLWxpc3QgLnJlY2lwZS1pdGVtIC5yZWNpcGUtdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCLCt1wiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIG1hcmdpbjogMHB4IDJweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIC5yZWNpcGVzLWxpc3QgLnJlY2lwZS1pdGVtIC5yZWNpcGUtY2FsbC10by1hY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1saXN0IC5yZWNpcGUtaXRlbSAucmVjaXBlLWNhbGwtdG8tYWN0aW9uIC5yZWNpcGUtYXV0aG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWluLXdpZHRoOiAzMCU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIC5yZWNpcGVzLWxpc3QgLnJlY2lwZS1pdGVtIC5yZWNpcGUtY2FsbC10by1hY3Rpb24gLnJlY2lwZS1uYW1lIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgbWluLXdpZHRoOiA5MCU7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1saXN0IC5yZWNpcGUtaXRlbSAucmVjaXBlLWNhbGwtdG8tYWN0aW9uIC5yZWNpcGUtY2hlZiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1pbi13aWR0aDogNjAlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1saXN0IC5yZWNpcGUtaXRlbSAucmVjaXBlLWF0dHJpYnV0ZXMge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZWNpcGVzLXdyYXBwZXIgLnJlY2lwZXMtbGlzdCAucmVjaXBlLWl0ZW0gLnJlY2lwZS1hdHRyaWJ1dGVzIC5hdHRyaWJ1dGUtc2NvcmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIC5yZWNpcGVzLWxpc3QgLnJlY2lwZS1pdGVtIC5yZWNpcGUtYXR0cmlidXRlcyAuYXR0cmlidXRlLXNjb3JlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZWNpcGVzLXdyYXBwZXIgLnJlY2lwZXMtbGlzdCAucmVjaXBlLWl0ZW0gLnJlY2lwZS1hdHRyaWJ1dGVzIC5hdHRyaWJ1dGUtc2NvcmU6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1saXN0IC5yZWNpcGUtaXRlbSAucmVjaXBlLWF0dHJpYnV0ZXMgLmF0dHJpYnV0ZS1zY29yZSAuc2NvcmUtdmFsdWUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iLCIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZ2UtdXNlcnMtcGljdHVyZXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAtLXBhZ2UtZGlzaC1zY29yZS1oZWlnaHQ6IDZweDtcblxuICAtLXBhZ2UtcmF0aW5nLTUtY29sb3I6ICM3Y2UxOTg7XG4gIC0tcGFnZS1yYXRpbmctNC1jb2xvcjogI2E4ZTA3YztcbiAgLS1wYWdlLXJhdGluZy0zLWNvbG9yOiAjY2VlMDdjO1xuICAtLXBhZ2UtcmF0aW5nLTItY29sb3I6ICNlMGM3N2M7XG4gIC0tcGFnZS1yYXRpbmctMS1jb2xvcjogI2UwN2M3YztcblxuICAtLXBhZ2UtY29sb3I6ICNlYmJiMDA7XG4gIC0tcGFnZS1jb2xvci1yZ2I6IDIzNSwxODcsMDtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLmRldGFpbHMtc2NvcmVzIHtcbiAgICAuc2NvcmUtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLnNjb3JlLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICAuc2NvcmUtdmFsdWUge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIC5pY29uLXdyYXBwZXIge1xuICAgICAgbWFyZ2luOiAwcHggMTUlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuZGVzY3JpcHRpb24tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAuZGV0YWlscy1uYW1lIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXN0eWxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1wcmljZS1yYW5nZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAucHJpY2Uge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5uby1wcmljZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAuNTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yZXN0YXVyYW50LXNjb3JlcyB7XG4gICAgICAucmVzdGF1cmFudC1zY29yZSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5yZXZpZXdzLWNvdW50IHtcbiAgICAgICAgICBmbGV4OiAwIDEgMTUlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnJlc3RhdXJhbnQtcmF0aW5nIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcblx0XHRcdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXHRcdFx0ICBmb250LXNpemU6IDEycHg7XG5cdFx0XHQgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHQgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLy8gRGVmYXVsdCBjb2xvclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuXG5cdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjFcIl0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjJcIl0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTItY29sb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjNcIl0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTMtY29sb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjRcIl0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTQtY29sb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjVcIl0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTUtY29sb3IpO1xuXHRcdFx0XHR9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgfVxuXG4gIC5vcGVuLWhvdXJzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLnNjaGVkdWxlcy1saXN0IHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgLm9wZW4taG91ci1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcblxuICAgICAgICAmICsgLm9wZW4taG91ci1pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjaGVkdWxlLW91dGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG5cbiAgICAgICAgICAuc2NoZWR1bGUtZGF5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2NoZWR1bGUtaG91cnMge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLnNjaGVkdWxlLXNlcGFyYXRvciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zY2hlZHVsZS12YWx1ZSB7XG4gICAgICAgICAgICAgIGZsZXg6IDAgMSAyNSU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjaGVkdWxlLWNsb3NlZCB7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG9jYXRpb24td3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAubG9jYXRpb24taGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG5cbiAgICAuZGV0YWlsLXRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAubG9jYXRpb24tYWRkcmVzcyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWxzLXRhZ3Mge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgKiAyICogLTEpO1xuXG4gICAgLnRhZy13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgKiAyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpIDBweCAwcHg7XG4gICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tdGFnIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlscy1kaXZpZGVyIHtcbiAgICBtYXJnaW46IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgLjQpO1xuICB9XG5cbiAgLnVzZXJzLXBpY3R1cmVzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLnBpY3R1cmVzLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtdXNlcnMtcGljdHVyZXMtZ3V0dGVyKSAqIC0xKTtcblxuICAgICAgLnBpY3R1cmUtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXVzZXJzLXBpY3R1cmVzLWd1dHRlcik7XG5cbiAgICAgICAgLmhhcy1tb3JlLXBpY3R1cmVzIHtcbiAgXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFx0XHRcdFx0dG9wOiAwcHg7XG4gIFx0XHRcdFx0Ym90dG9tOiAwcHg7XG4gIFx0XHRcdFx0bGVmdDogMHB4O1xuICBcdFx0XHRcdHJpZ2h0OiAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggdmFyKC0tcGFnZS11c2Vycy1waWN0dXJlcy1ndXR0ZXIpO1xuICBcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuNzApO1xuICBcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG4gIFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgei1pbmRleDogMjtcblxuICBcdFx0XHRcdC5waWN0dXJlcy1jb3VudCB7XG4gIFx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG4gIFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgXHRcdFx0XHRcdCY6OmJlZm9yZSB7XG4gIFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcrJztcbiAgXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNnB4O1xuICBcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudXBsb2FkLXBpY3R1cmUtYnRuIHtcbiAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHggMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5wb3B1bGFyLWRpc2hlcy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5wb3B1bGFyLWRpc2gge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgfVxuXG4gICAgICAuZGlzaC1uYW1lIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgIH1cblxuICAgICAgLmRpc2gtc2NvcmUge1xuICAgICAgICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjIwKTtcbiAgICAgICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMSk7XG5cbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLWRpc2gtc2NvcmUtaGVpZ2h0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1wYWdlLWRpc2gtc2NvcmUtaGVpZ2h0KSAvIDIpO1xuICAgICAgfVxuXG4gICAgICAuZGlzaC12b3Rlcy1jb3VudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAuZGlzaC12b3Rlcy1pY29uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXNoLXZvdGVzLXZhbHVlIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmV2aWV3cy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5yZXZpZXdzLWxpc3Qge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgLnJldmlldy1pdGVtIHtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJldmlldy11c2VyIHtcbiAgICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAgICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgICAgIC51c2VyLWltYWdlLXdyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudXNlci1icmllZi13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAgICAgICAucmV2aWV3LXVzZXItbmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyLXNjb3JlcyB7XG4gICAgICAgICAgICAgIC51c2VyLXNjb3JlIHtcbiAgICAgICAgICAgICAgICAuc2NvcmUtdGl0bGUge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZXZpZXctaW5mby13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuXG4gICAgICAgICAgICAucmV2aWV3LWRhdGUge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmV2aWV3LXJhdGluZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgXHRcdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBcdFx0XHQgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIFx0XHRcdCAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIFx0XHRcdCAgZGlzcGxheTogYmxvY2s7XG4gICAgICBcdFx0XHQgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgLy8gRGVmYXVsdCBjb2xvclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuXG4gICAgICBcdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICAgICAgXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xuICAgICAgXHRcdFx0XHR9XG4gICAgICBcdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjJcIl0ge1xuICAgICAgXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTItY29sb3IpO1xuICAgICAgXHRcdFx0XHR9XG4gICAgICBcdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjNcIl0ge1xuICAgICAgXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTMtY29sb3IpO1xuICAgICAgXHRcdFx0XHR9XG4gICAgICBcdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjRcIl0ge1xuICAgICAgXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTQtY29sb3IpO1xuICAgICAgXHRcdFx0XHR9XG4gICAgICBcdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjVcIl0ge1xuICAgICAgXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTUtY29sb3IpO1xuICAgICAgXHRcdFx0XHR9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJldmlldy1tZXNzYWdlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmV2aWV3LXNjb3JlcyB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgLnJldmlldy1zY29yZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlscy1kaXZpZGVyIHtcbiAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICB9XG5cbiAgICAuYWxsLXJldmlld3MtYnRuIHtcbiAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICB9XG5cbiAgICAud3JpdGUtcmV2aWV3cy1idG4ge1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgICB9XG4gIH1cblxuICAucmVjaXBlcy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIDBweDtcblxuICAgIC5yZWNpcGVzLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcblxuICAgICAgLmRldGFpbC10aXRsZSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yZWNpcGVzLWxpc3Qge1xuICAgICAgLnJlY2lwZS1pdGVtIHtcbiAgICAgICAgLmNoZWYtcGljdHVyZS13cmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbHMtZGl2aWRlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlY2lwZS10aXRsZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG5cbiAgICAgICAgICAmOjpiZWZvcmUsXG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJ8K3JztcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVjaXBlLWNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIC5yZWNpcGUtYXV0aG9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMCU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlY2lwZS1uYW1lIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDkwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVjaXBlLWNoZWYge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwJTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVjaXBlLWF0dHJpYnV0ZXMge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgLmF0dHJpYnV0ZS1zY29yZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjb3JlLXZhbHVlIHtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */", "[_nghost-%COMP%] {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 235,187,0;\n}\n\n.details-scores[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.details-scores[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\napp-image-shell.showcase-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .60);\n}\n\napp-image-shell.icon-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: transparent;\n}\n\n.details-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 18px;\n  max-width: 30%;\n}\n\n.details-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.details-style[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 16px;\n  max-width: 50%;\n}\n\n.details-style[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.restaurant-rating[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 12px;\n  min-width: 20px;\n}\n\n.restaurant-rating[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.schedule-day[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 90%;\n}\n\n.schedule-day[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.schedule-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 100%;\n}\n\n.schedule-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.location-address[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.location-address[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\napp-image-shell.location-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-tag[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px;\n}\n\n.item-tag[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\napp-image-shell.user-picture-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n}\n\n.dish-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n}\n\n.dish-votes-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.dish-votes-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\napp-image-shell.review-user-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n}\n\n.review-user-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 16px;\n  max-width: 50%;\n}\n\n.review-user-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.review-date[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 11px;\n}\n\n.review-rating[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 12px;\n}\n\n.review-message[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.recipe-cover-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .20);\n}\n\napp-image-shell.chef-picture-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: var(--shell-color);\n  --image-shell-border-radius: 50%;\n  z-index: 3;\n}\n\n.recipe-author[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 16px;\n}\n\n.recipe-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n}\n\n.recipe-chef[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9mb29kL2RldGFpbHMvc3R5bGVzL2Zvb2QtZGV0YWlscy5zaGVsbC5zY3NzIiwic3JjL2FwcC9mb29kL2RldGFpbHMvc3R5bGVzL2Zvb2QtZGV0YWlscy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRFlFO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNUSjs7QURXSTtFQUNFLGNBQUE7QUNUTjs7QURjQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7RUFDQSxzRUFBQTtBQ1hGOztBRGNBO0VBQ0UsNkNBQUE7QUNYRjs7QURjQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDWEY7O0FEYUU7RUFDRSxnQkFBQTtBQ1hKOztBRGVBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNaRjs7QURjRTtFQUNFLGdCQUFBO0FDWko7O0FEZ0JBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNiRjs7QURlRTtFQUNFLGNBQUE7QUNiSjs7QURpQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ2RGOztBRGdCRTtFQUNFLGtCQUFBO0FDZEo7O0FEa0JBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNmRjs7QURpQkU7RUFDRSxrQkFBQTtBQ2ZKOztBRG1CQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDaEJGOztBRGtCRTtFQUNFLGtCQUFBO0FDaEJKOztBRG9CQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNqQkY7O0FEbUJFO0VBQ0UsY0FBQTtBQ2pCSjs7QURxQkE7RUFDRSxtRUFBQTtBQ2xCRjs7QURxQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FDbEJGOztBRHFCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDbEJGOztBRG9CRTtFQUNFLGNBQUE7QUNsQko7O0FEc0JBO0VBQ0UsbUVBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNuQkY7O0FEcUJFO0VBQ0Usa0JBQUE7QUNuQko7O0FEdUJBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FDcEJGOztBRHVCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsbUVBQUE7QUNwQkY7O0FEdUJBO0VBQ0Usb0RBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSwwREFBQTtBQ3BCRjs7QUR1QkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FDcEJGIiwiZmlsZSI6InNyYy9hcHAvZm9vZC9kZXRhaWxzL3N0eWxlcy9mb29kLWRldGFpbHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjZWJiYjAwO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjM1LDE4NywwO1xufVxuXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxuOmhvc3QoLmlzLXNoZWxsKSB7XG4gIC8vIGlvbi1jb250ZW50IHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cbn1cblxuLmRldGFpbHMtc2NvcmVzIHtcbiAgLnNjb3JlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAgIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIG1pbi13aWR0aDogMzBweDtcblxuICAgICYudGV4dC1sb2FkZWQge1xuICAgICAgbWluLXdpZHRoOiAwcHg7XG4gICAgfVxuICB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5zaG93Y2FzZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNjApO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaWNvbi1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmRldGFpbHMtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXgtd2lkdGg6IDMwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi5kZXRhaWxzLXN0eWxlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogNTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLnJlc3RhdXJhbnQtcmF0aW5nID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1pbi13aWR0aDogMjBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uc2NoZWR1bGUtZGF5ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogOTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uc2NoZWR1bGUtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4ubG9jYXRpb24tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLmxvY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLnVzZXItcGljdHVyZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG59XG5cbi5kaXNoLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLmRpc2gtdm90ZXMtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZXZpZXctdXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG59XG5cbi5yZXZpZXctdXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogNTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4ucmV2aWV3LWRhdGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTFweDtcbn1cblxuLnJldmlldy1yYXRpbmcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbn1cblxuLnJldmlldy1tZXNzYWdlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZWNpcGUtY292ZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuY2hlZi1waWN0dXJlLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHZhcigtLXNoZWxsLWNvbG9yKTtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5yZWNpcGUtYXV0aG9yID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5yZWNpcGUtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbn1cblxuLnJlY2lwZS1jaGVmID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG4iLCI6aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNlYmJiMDA7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMzUsMTg3LDA7XG59XG5cbi5kZXRhaWxzLXNjb3JlcyAuc2NvcmUtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuLmRldGFpbHMtc2NvcmVzIC5zY29yZS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5zaG93Y2FzZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNjApO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaWNvbi1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmRldGFpbHMtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXgtd2lkdGg6IDMwJTtcbn1cbi5kZXRhaWxzLW5hbWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5cbi5kZXRhaWxzLXN0eWxlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLmRldGFpbHMtc3R5bGUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5cbi5yZXN0YXVyYW50LXJhdGluZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG59XG4ucmVzdGF1cmFudC1yYXRpbmcgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4uc2NoZWR1bGUtZGF5ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogOTAlO1xufVxuLnNjaGVkdWxlLWRheSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4uc2NoZWR1bGUtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnNjaGVkdWxlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5sb2NhdGlvbi1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xufVxuLmxvY2F0aW9uLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmxvY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG4uaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwudXNlci1waWN0dXJlLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbn1cblxuLmRpc2gtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZGlzaC12b3Rlcy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG4uZGlzaC12b3Rlcy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZXZpZXctdXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG59XG5cbi5yZXZpZXctdXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLnJldmlldy11c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLnJldmlldy1kYXRlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDExcHg7XG59XG5cbi5yZXZpZXctcmF0aW5nID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5yZXZpZXctbWVzc2FnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwucmVjaXBlLWNvdmVyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmNoZWYtcGljdHVyZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB2YXIoLS1zaGVsbC1jb2xvcik7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAzO1xufVxuXG4ucmVjaXBlLWF1dGhvciA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4ucmVjaXBlLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG59XG5cbi5yZWNpcGUtY2hlZiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodDetailsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-food-details',
          templateUrl: './food-details.page.html',
          styleUrls: ['./styles/food-details.page.scss', './styles/food-details.shell.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, {
        isShell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.is-shell']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/food/details/food-details.resolver.ts":
  /*!*******************************************************!*\
    !*** ./src/app/food/details/food-details.resolver.ts ***!
    \*******************************************************/

  /*! exports provided: FoodDetailsResolver */

  /***/
  function srcAppFoodDetailsFoodDetailsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodDetailsResolver", function () {
      return FoodDetailsResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../food.service */
    "./src/app/food/food.service.ts");

    var FoodDetailsResolver = /*#__PURE__*/function () {
      function FoodDetailsResolver(foodService) {
        _classCallCheck(this, FoodDetailsResolver);

        this.foodService = foodService;
      }

      _createClass(FoodDetailsResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var itemSlug = route.paramMap.get('productId');
          var dataSource = this.foodService.getDetailsDataSource(itemSlug);
          var dataStore = this.foodService.getDetailsStore(dataSource);
          return dataStore;
        }
      }]);

      return FoodDetailsResolver;
    }();

    FoodDetailsResolver.ɵfac = function FoodDetailsResolver_Factory(t) {
      return new (t || FoodDetailsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]));
    };

    FoodDetailsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FoodDetailsResolver,
      factory: FoodDetailsResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodDetailsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=food-details-food-details-module-es5.js.map