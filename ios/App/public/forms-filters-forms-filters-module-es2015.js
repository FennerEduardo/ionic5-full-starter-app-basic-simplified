(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-filters-forms-filters-module"],{

/***/ "./src/app/forms/filters/forms-filters.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/forms/filters/forms-filters.module.ts ***!
  \*******************************************************/
/*! exports provided: FormsFiltersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsFiltersPageModule", function() { return FormsFiltersPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _forms_filters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms-filters.page */ "./src/app/forms/filters/forms-filters.page.ts");









const routes = [
    {
        path: '',
        component: _forms_filters_page__WEBPACK_IMPORTED_MODULE_6__["FormsFiltersPage"]
    }
];
class FormsFiltersPageModule {
}
FormsFiltersPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormsFiltersPageModule });
FormsFiltersPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormsFiltersPageModule_Factory(t) { return new (t || FormsFiltersPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsFiltersPageModule, { declarations: [_forms_filters_page__WEBPACK_IMPORTED_MODULE_6__["FormsFiltersPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsFiltersPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
                ],
                declarations: [_forms_filters_page__WEBPACK_IMPORTED_MODULE_6__["FormsFiltersPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/forms/filters/forms-filters.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/forms/filters/forms-filters.page.ts ***!
  \*****************************************************/
/*! exports provided: FormsFiltersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsFiltersPage", function() { return FormsFiltersPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/counter-input/counter-input.component */ "./src/app/components/counter-input/counter-input.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/rating-input/rating-input.component */ "./src/app/components/rating-input/rating-input.component.ts");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component */ "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");









const _c0 = function () { return { w: 1, h: 1 }; };
class FormsFiltersPage {
    constructor() {
        this.rangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            single: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](25),
            dual: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ lower: 12, upper: 23 })
        });
        this.checkboxForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            person_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            person_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            person_3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            person_4: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            person_5: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
        this.radioForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            selected_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('apple')
        });
        this.checkboxTagsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            tag_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            tag_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            tag_3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            tag_4: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            tag_5: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            tag_6: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            tag_7: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: true, disabled: true }),
            tag_8: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
        this.radioTagsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            selected_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('any')
        });
        this.switchersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            notifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            email_notifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
        this.counterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            counter: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](5, Object(_components_counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_2__["counterRangeValidator"])(1, 7)),
            counter2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](2, Object(_components_counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_2__["counterRangeValidator"])(1, 5))
        });
        this.ratingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](2.5),
            rate2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1.5)
        });
        this.radioColorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            selected_color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('#fc9961')
        });
    }
    rangeChange(range) {
        console.log('range change', range);
    }
}
FormsFiltersPage.ɵfac = function FormsFiltersPage_Factory(t) { return new (t || FormsFiltersPage)(); };
FormsFiltersPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormsFiltersPage, selectors: [["forms-filters-page"]], decls: 267, vars: 32, consts: [["color", "primary"], ["slot", "start"], [1, "filters-content"], [1, "filters-group"], [1, "range-list", 3, "formGroup"], [1, "range-item"], ["size", "12"], [1, "range-header"], [1, "range-value"], [1, "range-label"], ["formControlName", "dual", "color", "secondary", "dualKnobs", "true", "min", "1", "max", "40", "step", "1", 1, "range-control", 3, "ionChange"], ["formControlName", "single", "color", "secondary", "min", "0", "max", "50", "step", "1", 1, "range-control", 3, "ionChange"], [3, "formGroup"], ["lines", "full", 1, "checkbox-list"], [1, "checkbox-item"], [1, "checkbox-label"], ["color", "secondary", "formControlName", "person_1"], ["color", "secondary", "formControlName", "person_2"], ["color", "secondary", "formControlName", "person_3"], ["color", "secondary", "formControlName", "person_4"], ["color", "secondary", "formControlName", "person_5"], ["lines", "full", 1, "radio-list"], ["formControlName", "selected_option", 1, "radio-group"], [1, "radio-item"], [1, "radio-label"], ["slot", "start", "color", "secondary", "value", "apple"], ["slot", "start", "color", "secondary", "value", "banana"], ["slot", "start", "color", "secondary", "value", "orange", "disabled", "true"], ["slot", "start", "color", "secondary", "value", "kiwi"], [1, "checkbox-tags", "square-checkbox-tags"], ["lines", "none", 1, "checkbox-tag"], [1, "tag-label"], ["formControlName", "tag_1"], ["formControlName", "tag_2"], ["formControlName", "tag_3"], ["formControlName", "tag_4"], ["formControlName", "tag_5"], ["formControlName", "tag_6"], ["formControlName", "tag_7"], ["formControlName", "tag_8"], [1, "checkbox-tags", "rounded-checkbox-tags"], ["lines", "none", 1, "checkbox-tag", "rounded-tag"], ["formControlName", "selected_option"], [1, "radio-tags"], ["lines", "none", 1, "radio-tag"], ["value", "any"], ["value", "1"], ["value", "2", "disabled", "true"], ["value", "3"], ["lines", "full", 1, "toggle-list"], [1, "toggle-item"], [1, "toggle-label"], ["color", "secondary", "formControlName", "notifications"], ["color", "secondary", "formControlName", "email_notifications"], ["lines", "full", 1, "counter-list"], [1, "counter-item"], [1, "counter-label"], ["formControlName", "counter"], [1, "counter-value"], ["formControlName", "counter2", "basic", ""], ["lines", "full", 1, "ratings-list"], [1, "rating-item"], [1, "rating-label"], ["formControlName", "rate", "max", "5"], ["formControlName", "rate2", "max", "3", "readOnly", "true"], ["formControlName", "selected_color"], [1, "color-radio-group"], [1, "color-radio", 2, "--color-radio-background", "#fc6161"], [3, "ratio"], [1, "color-radio-inner-wrapper"], [1, "color-label"], ["value", "#fc6161"], [1, "color-radio", 2, "--color-radio-background", "#fc9961"], ["value", "#fc9961"], [1, "color-radio", 2, "--color-radio-background", "#fcea61"], ["value", "#fcea61", "disabled", "true"], [1, "color-radio", 2, "--color-radio-background", "#affc61"], ["value", "#affc61"], [1, "color-radio", 2, "--color-radio-background", "#61fcc5"], ["value", "#61fcc5"], [1, "color-radio", 2, "--color-radio-background", "#fc61ad"], ["value", "#fc61ad"], [1, "color-radio", 2, "--color-radio-background", "#b561fc"], ["value", "#b561fc"], [1, "color-radio", 2, "--color-radio-background", "#6182fc"], ["value", "#6182fc"], [1, "color-radio", 2, "--color-radio-background", "#61d1fc"], ["value", "#61d1fc"]], template: function FormsFiltersPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-item-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-range", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function FormsFiltersPage_Template_ion_range_ionChange_22_listener($event) { return ctx.rangeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-range", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function FormsFiltersPage_Template_ion_range_ionChange_31_listener($event) { return ctx.rangeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-item-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Multiple Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sophia Martin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ion-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ion-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Mattie Abbott");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "ion-checkbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ion-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Marguerite Alvarez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "ion-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ion-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Lewis Padilla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "ion-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ion-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Nannie Willis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "ion-checkbox", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ion-item-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Pick One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ion-list", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ion-radio-group", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ion-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ion-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Apple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "ion-radio", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ion-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ion-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Banana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "ion-radio", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ion-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ion-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Orange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "ion-radio", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ion-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ion-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Kiwi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "ion-radio", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ion-item-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Multiple Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ion-row", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ion-item", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Indonesia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "ion-checkbox", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ion-item", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Pitcairn Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "ion-checkbox", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ion-item", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Malta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "ion-checkbox", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ion-item", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Sierra Leone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "ion-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ion-item", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Dominican Republic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "ion-checkbox", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ion-item", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Antigua and Barbuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "ion-checkbox", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "ion-item", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Macedonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "ion-checkbox", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ion-item", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Vietnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "ion-checkbox", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ion-item-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Multiple Tags (rounded)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "ion-row", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "ion-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Indonesia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "ion-checkbox", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "ion-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Pitcairn Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "ion-checkbox", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "ion-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Malta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "ion-checkbox", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "ion-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Sierra Leone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "ion-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "ion-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Dominican Republic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "ion-checkbox", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "ion-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Antigua and Barbuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "ion-checkbox", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "ion-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Macedonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "ion-checkbox", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "ion-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Vietnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "ion-checkbox", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "ion-item-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Budget (Radio Tags)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "ion-radio-group", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "ion-row", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "ion-item", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "ion-radio", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "ion-item", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "ion-radio", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "ion-item", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "$$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "ion-radio", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "ion-item", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "$$$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "ion-radio", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "ion-item-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "ion-list", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "ion-item", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "ion-label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "ion-toggle", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "ion-item", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "ion-label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Email notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "ion-toggle", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "ion-item-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Add & Subtract");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "ion-list", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "ion-item", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "ion-label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "app-counter-input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "ion-item", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "ion-label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Bedrooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "ion-label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "app-counter-input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "ion-item-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Rating Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "ion-list", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "ion-item", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "ion-label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "app-rating-input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "ion-item", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "ion-label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Read Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "app-rating-input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "ion-item-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Color chooser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "ion-radio-group", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "ion-row", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "ion-item", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "app-aspect-ratio", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "ion-label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "ion-radio", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "ion-item", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "app-aspect-ratio", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "ion-radio", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "ion-item", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "app-aspect-ratio", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "ion-radio", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "ion-item", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "app-aspect-ratio", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "ion-radio", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "ion-item", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "app-aspect-ratio", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "ion-radio", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "ion-item", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "app-aspect-ratio", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "ion-radio", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "ion-item", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "app-aspect-ratio", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "ion-label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Purple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "ion-radio", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "ion-item", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "app-aspect-ratio", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "ion-label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "ion-radio", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "ion-item", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "app-aspect-ratio", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "ion-radio", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rangeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rangeForm.controls.dual.value.lower);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rangeForm.controls.dual.value.upper);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rangeForm.controls.single.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkboxForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.radioForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkboxTagsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkboxTagsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.radioTagsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.switchersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.counterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counterForm.controls.counter2.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ratingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.radioColorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRange"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToggle"], _components_counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_2__["CounterInputComponent"], _components_rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_4__["RatingInputComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__["AspectRatioComponent"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n  --page-color-radio-items-per-row: 5;\n  --page-color-radio-gutter: 2%;\n  --page-color-radio-width: calc((100% - (2 * var(--page-color-radio-gutter) * var(--page-color-radio-items-per-row))) / var(--page-color-radio-items-per-row));\n}\n\n.filters-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.filters-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n  --padding-bottom: calc(var(--page-margin) / 2);\n  --padding-top: calc(var(--page-margin) / 2);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  border: none;\n}\n\n.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%] {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-list[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%] {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-list[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-list[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.filters-content[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.filters-content[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-item[_ngcontent-%COMP%] {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-item[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-item[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.rounded-tag[_ngcontent-%COMP%] {\n  --border-radius: 2.2rem;\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%] {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%] {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-tags.square-checkbox-tags[_ngcontent-%COMP%] {\n  background-color: var(--page-background);\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-tags.square-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%] {\n  --checkbox-tag-color: var(--ion-color-medium);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%] {\n  --checkbox-tag-color: var(--ion-color-lightest);\n  --checkbox-tag-background: var(--ion-color-light-shade);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%] {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  background-color: var(--page-background);\n  justify-content: space-between;\n  --radio-tag-color: #000;\n  --radio-tag-background: #FFF;\n  --radio-tag-active-color: #FFF;\n  --radio-tag-active-background: #000;\n}\n\n.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --min-height: 38px;\n  --border-radius: 8px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--radio-tag-color);\n  --ion-item-background: var(--radio-tag-background);\n  --ion-item-color: var(--radio-tag-color);\n  flex: 1;\n}\n\n.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag.item-radio-checked[_ngcontent-%COMP%] {\n  --ion-item-background: var(--radio-tag-active-background);\n  --ion-item-color: var(--radio-tag-active-color);\n}\n\n.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag.item-interactive-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag[_ngcontent-%COMP%] {\n  --radio-tag-color: var(--ion-color-secondary);\n  --radio-tag-background: var(--ion-color-lightest);\n  --radio-tag-active-color: var(--ion-color-lightest);\n  --radio-tag-active-background: var(--ion-color-secondary);\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content[_ngcontent-%COMP%]   .toggle-list[_ngcontent-%COMP%]   .toggle-item[_ngcontent-%COMP%] {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content[_ngcontent-%COMP%]   .toggle-list[_ngcontent-%COMP%]   .toggle-item[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content[_ngcontent-%COMP%]   .toggle-list[_ngcontent-%COMP%]   .toggle-item[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%] {\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.filters-content[_ngcontent-%COMP%]   .counter-list[_ngcontent-%COMP%]   .counter-item[_ngcontent-%COMP%] {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content[_ngcontent-%COMP%]   .counter-list[_ngcontent-%COMP%]   .counter-item[_ngcontent-%COMP%]   .counter-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content[_ngcontent-%COMP%]   .counter-list[_ngcontent-%COMP%]   .counter-item[_ngcontent-%COMP%]   .counter-value[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--ion-color-secondary);\n}\n\n.filters-content[_ngcontent-%COMP%]   .counter-list[_ngcontent-%COMP%]   .counter-item[_ngcontent-%COMP%]   app-counter-input[_ngcontent-%COMP%] {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-secondary);\n  --counter-border-color: var(--ion-color-secondary);\n}\n\n.filters-content[_ngcontent-%COMP%]   .ratings-list[_ngcontent-%COMP%]   .rating-item[_ngcontent-%COMP%] {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content[_ngcontent-%COMP%]   .ratings-list[_ngcontent-%COMP%]   .rating-item[_ngcontent-%COMP%]   .rating-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content[_ngcontent-%COMP%]   .ratings-list[_ngcontent-%COMP%]   .rating-item[_ngcontent-%COMP%]   app-rating-input[_ngcontent-%COMP%] {\n  --rating-color: var(--ion-color-secondary);\n}\n\n.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%] {\n  padding: var(--page-margin) calc(var(--page-margin) - var(--page-color-radio-gutter));\n  background-color: var(--ion-color-lightest);\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: 255,255,255;\n  --color-radio-border-radius: 50%;\n}\n\n.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   .color-radio[_ngcontent-%COMP%] {\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: var(--ion-color-darkest-rgb);\n  --color-radio-border-radius: 40%;\n  flex: 0 0 var(--page-color-radio-width);\n  max-width: var(--page-color-radio-width);\n  margin: var(--page-color-radio-gutter);\n}\n\n.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   .color-radio[_ngcontent-%COMP%]   .color-radio-inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio[_ngcontent-%COMP%] {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --border-width: 4px;\n  --border-style: solid;\n  --border-color: var(--color-radio-background);\n  --background: var(--color-radio-background);\n  --inner-padding-end: 0px;\n  --inner-border-width: 0px;\n  --min-height: initial;\n  --border-radius: var(--color-radio-border-radius);\n  border-radius: var(--color-radio-border-radius);\n}\n\n.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio.item-radio-checked[_ngcontent-%COMP%] {\n  --border-color: rgba(var(--color-radio-active-border-rgb), .3) !important;\n  --box-shadow: none;\n}\n\n.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio.item-radio-checked[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio.item-interactive-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio.item-interactive-disabled[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%] {\n  --color: var(--color-radio-color);\n  font-size: 12px;\n  opacity: 0.7;\n}\n\n.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.md[_nghost-%COMP%]   .ratings-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .ratings-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .counter-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .counter-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .toggle-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .toggle-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .radio-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .radio-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .checkbox-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .checkbox-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .range-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .range-list[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.ios[_nghost-%COMP%]   .radio-tags[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .radio-tags[_ngcontent-%COMP%], .ios[_nghost-%COMP%]   .checkbox-tags[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .checkbox-tags[_ngcontent-%COMP%] {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9mb3Jtcy9maWx0ZXJzL3N0eWxlcy9mb3Jtcy1maWx0ZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9ybXMvZmlsdGVycy9zdHlsZXMvZm9ybXMtZmlsdGVycy5wYWdlLnNjc3MiLCIvVXNlcnMvZGF5YW5hL3dvcmsvaW9uaWMvdGVtcGxhdGVzL2lvbjRmdWxscHdhL3NyYy90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZy5zY3NzIiwiL1VzZXJzL2RheWFuYS93b3JrL2lvbmljL3RlbXBsYXRlcy9pb240ZnVsbHB3YS9zcmMvdGhlbWUvbWl4aW5zL2lucHV0cy9yYWRpby10YWcuc2NzcyIsIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL3RoZW1lL21peGlucy9pbnB1dHMvY29sb3ItcmFkaW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7RUFFQSx1QkFBQTtFQUVBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSw2SkFBQTtBQ1BGOztBRFdBO0VBQ0Usb0NBQUE7QUNSRjs7QURVQztFQUNDLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFFQSxZQUFBO0FDVEY7O0FEWUU7RUFDRSwyQ0FBQTtBQ1ZKOztBRFlJO0VBQ0UsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSx1Q0FBQTtVQUFBLHNDQUFBO0VBRUEseURBQUE7QUNaTjs7QURjTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0FDWlI7O0FEY1E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDWlY7O0FEZVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDYlY7O0FEaUJNO0VBRUUseUNBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FDakJSOztBRHVCSTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQ3JCTjs7QUR1Qk07RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxxQkFBQTtFQUNDLDhCQUFBO0FDckJMOztBRHdCTTtFQUNFLHVCQUFBO1VBQUEsc0JBQUE7QUN0QlI7O0FENEJJO0VBQ0UsY0FBQTtBQzFCTjs7QUQ2Qkk7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QUMzQk47O0FENkJNO0VBQ0UsZUFBQTtFQUNKLGdCQUFBO0VBQ0EscUJBQUE7RUFDQyw4QkFBQTtBQzNCTDs7QUQ4Qk07RUFDRSx5QkFBQTtVQUFBLHdCQUFBO0FDNUJSOztBRGlDQztFQUNDLHdGQUFBO0VFbEhBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FEb0ZGOztBQ2xGQztFQUVDLG9CQUFBO0VBQ0Usd0JBQUE7RUFDRiwwQkFBQTtFQUNBLHFEQUFBO0VBQ0UsMkNBQUE7QURtRko7O0FDakZJO0VBQ0QsdUJBQUE7QURtRkg7O0FDaEZFO0VBQ0ksNERBQUE7RUFDQSxrREFBQTtBRGtGTjs7QUMvRUk7RUFDRSxZQUFBO0FEaUZOOztBQy9FTTtFQUVFLFVBQUE7QURnRlI7O0FDNUVFO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUQ4RU47O0FDM0VFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRDJFSDs7QURISTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7QUNLTjs7QURESTtFQUNFLHdDQUFBO0FDR047O0FERE07RUFDRSw2Q0FBQTtFQUNBLG9EQUFBO0VBQ0Esc0RBQUE7RUFDQSw0REFBQTtBQ0dSOztBREVJO0VBQ0EsMkNBQUE7QUNBSjs7QURFTTtFQUNFLCtDQUFBO0VBQ0EsdURBQUE7RUFDQSxzREFBQTtFQUNBLDREQUFBO0FDQVI7O0FES0U7RUFDRSwrREFBQTtFQUNGLHdDQUFBO0VBQ0UsOEJBQUE7RUd2SkYsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7QUZxSkY7O0FFbkpDO0VBRUcsb0JBQUE7RUFDQSx3QkFBQTtFQUNGLDBCQUFBO0VBQ0Usa0JBQUE7RUFFRixvQkFBQTtFQUNFLG1CQUFBO0VBQ0YscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esd0NBQUE7RUFFRSxPQUFBO0FGa0pKOztBRWhKRTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QUZrSk47O0FFL0lJO0VBQ0UsWUFBQTtBRmlKTjs7QUUvSU07RUFFRSxVQUFBO0FGZ0pSOztBRTVJSTtFQUNELFdBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FGOElOOztBRTNJRTtFQUNDLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUYySUg7O0FEakNJO0VBQ0UsNkNBQUE7RUFDQSxpREFBQTtFQUNBLG1EQUFBO0VBQ0EseURBQUE7RUFFQSxvQ0FBQTtFQUNBLG1DQUFBO0FDa0NOOztBRDdCSTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQytCTjs7QUQ3Qk07RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxxQkFBQTtFQUNDLDhCQUFBO0FDK0JMOztBRDVCTTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUM4QlI7O0FEeEJJO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FDMEJOOztBRHhCTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUMwQkw7O0FEdkJNO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQ3lCUjs7QUR0Qk07RUFDRSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0RBQUE7QUN3QlI7O0FEbEJJO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FDb0JOOztBRGxCTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUNvQkw7O0FEakJNO0VBQ0UsMENBQUE7QUNtQlI7O0FEZEM7RUFFQyxxRkFBQTtFQUNBLDJDQUFBO0VJMU9BLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0FIMFBGOztBRGhCSTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2REFBQTtFQUNBLGdDQUFBO0VBRUEsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHNDQUFBO0FDaUJOOztBRGZNO0VBQ0YsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2lCUjs7QUd4UUM7RUFFRyxxQkFBQTtFQUNGLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDJDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBR0UsaURBQUE7RUFFRiwrQ0FBQTtBSHNRRjs7QUdwUUU7RUFDQyx5RUFBQTtFQUNBLGtCQUFBO0FIc1FIOztBR3BRRztFQUNLLFVBQUE7QUhzUVI7O0FHbFFFO0VBQ0MsWUFBQTtBSG9RSDs7QUdsUU07RUFFRSxVQUFBO0FIbVFSOztBRy9QSTtFQUNFLGlDQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7QUhnUU47O0FHN1BJO0VBQ0UsV0FBQTtFQUVILFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBSDZQSDs7QURoREU7Ozs7OztFQU1FLGdCQUFBO0VBQ0EsbUJBQUE7QUNtREo7O0FEOUNFOztFQUVFLDJDQUFBO0FDaURKIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvZmlsdGVycy9zdHlsZXMvZm9ybXMtZmlsdGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWdcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL3JhZGlvLXRhZ1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY29sb3ItcmFkaW9cIjtcblxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XG5cbiAgLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3c6IDU7XG4gIC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXI6IDIlO1xuICAtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGg6IGNhbGMoKDEwMCUgLSAoMiAqIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKSAqIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8taXRlbXMtcGVyLXJvdykpKSAvIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8taXRlbXMtcGVyLXJvdykpO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5maWx0ZXJzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cblx0aW9uLWl0ZW0tZGl2aWRlciB7XG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXHRcdC0tcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cdFx0LS1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblx0XHQtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblx0XHQtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cblx0XHRib3JkZXI6IG5vbmU7XG5cdH1cblxuICAucmFuZ2UtbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcblxuICAgIC5yYW5nZS1pdGVtIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggIHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgICAgLnJhbmdlLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgICAgLnJhbmdlLXZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJhbmdlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yYW5nZS1jb250cm9sIHtcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhlIHBpbiBjb2xvclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jaGVja2JveC1saXN0IHtcbiAgICAuY2hlY2tib3gtaXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgLmNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cblxuICAgICAgaW9uLWNoZWNrYm94IHtcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmFkaW8tbGlzdCB7XG4gICAgLnJhZGlvLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5yYWRpby1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAucmFkaW8tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgfVxuXG4gICAgICBpb24tcmFkaW8ge1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblx0LmNoZWNrYm94LXRhZ3Mge1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG5cblx0XHRAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcblxuICAgIC5jaGVja2JveC10YWcge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG4gICAgfVxuXG4gICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXG4gICAgJi5zcXVhcmUtY2hlY2tib3gtdGFncyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gICAgICAuY2hlY2tib3gtdGFnIHtcbiAgICAgICAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgYSBkZWVwZXIgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgZGVmYXVsdCBjb2xvcnNcbiAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XG4gIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXG4gICAgICAuY2hlY2tib3gtdGFnIHtcbiAgICAgICAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgfVxuICAgIH1cblx0fVxuXG4gIC5yYWRpby10YWdzIHtcbiAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblx0XHRAaW5jbHVkZSByYWRpby10YWcoKTtcblxuICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xuICAgIC5yYWRpby10YWcge1xuICAgICAgLS1yYWRpby10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgLS1yYWRpby10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcblxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG4gICAgfVxuXHR9XG5cbiAgLnRvZ2dsZS1saXN0IHtcbiAgICAudG9nZ2xlLWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgIC50b2dnbGUtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgfVxuXG4gICAgICBpb24tdG9nZ2xlIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvdW50ZXItbGlzdCB7XG4gICAgLmNvdW50ZXItaXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgLmNvdW50ZXItbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgfVxuXG4gICAgICAuY291bnRlci12YWx1ZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgfVxuXG4gICAgICBhcHAtY291bnRlci1pbnB1dCB7XG4gICAgICAgIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnJhdGluZ3MtbGlzdCB7XG4gICAgLnJhdGluZy1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAucmF0aW5nLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cblxuICAgICAgYXBwLXJhdGluZy1pbnB1dCB7XG4gICAgICAgIC0tcmF0aW5nLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cdH1cblxuXHQuY29sb3ItcmFkaW8tZ3JvdXAge1xuICAgIC8vIEFjY291bnQgZm9yIDIlIHN0YXJ0IGFuZCBlbmQgbWFyZ2luIHNldCBieSAuY29sb3ItdGFnIGNoaWxkc1xuXHRcdHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKSk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcblxuICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xuICAgIC5jb2xvci1yYWRpbyB7XG4gICAgICAtLWNvbG9yLXJhZGlvLWNvbG9yOiAjRkZGO1xuICAgICAgLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kOiAjQ0NDO1xuICAgICAgLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QtcmdiKTtcbiAgICAgIC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1czogNDAlO1xuXG4gICAgICBmbGV4OiAwIDAgdmFyKC0tcGFnZS1jb2xvci1yYWRpby13aWR0aCk7XG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGgpO1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcik7XG5cbiAgICAgIC5jb2xvci1yYWRpby1pbm5lci13cmFwcGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cdFx0XHR9XG4gICAgfVxuXG5cdFx0QGluY2x1ZGUgY29sb3ItcmFkaW8oKTtcblx0fVxufVxuXG46aG9zdC1jb250ZXh0KC5tZCkge1xuICAucmF0aW5ncy1saXN0LFxuICAuY291bnRlci1saXN0LFxuICAudG9nZ2xlLWxpc3QsXG4gIC5yYWRpby1saXN0LFxuICAuY2hlY2tib3gtbGlzdCxcbiAgLnJhbmdlLWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxufVxuXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgLnJhZGlvLXRhZ3MsXG4gIC5jaGVja2JveC10YWdzIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xuICAtLXBhZ2UtY29sb3ItcmFkaW8taXRlbXMtcGVyLXJvdzogNTtcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcjogMiU7XG4gIC0tcGFnZS1jb2xvci1yYWRpby13aWR0aDogY2FsYygoMTAwJSAtICgyICogdmFyKC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXIpICogdmFyKC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93KSkpIC8gdmFyKC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93KSk7XG59XG5cbi5maWx0ZXJzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uZmlsdGVycy1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIC0tcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWxpc3QgLnJhbmdlLWl0ZW0gLnJhbmdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIgLnJhbmdlLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWxpc3QgLnJhbmdlLWl0ZW0gLnJhbmdlLWhlYWRlciAucmFuZ2UtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSAucmFuZ2UtY29udHJvbCB7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtbGlzdCAuY2hlY2tib3gtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LWxpc3QgLmNoZWNrYm94LWl0ZW0gLmNoZWNrYm94LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LWxpc3QgLmNoZWNrYm94LWl0ZW0gaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLWxpc3QgLnJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby1saXN0IC5yYWRpby1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tbGlzdCAucmFkaW8taXRlbSAucmFkaW8tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tbGlzdCAucmFkaW8taXRlbSBpb24tcmFkaW8ge1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcucm91bmRlZC10YWcge1xuICAtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCAudGFnLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyAudGFnLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Muc3F1YXJlLWNoZWNrYm94LXRhZ3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncy5zcXVhcmUtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIHtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC0tcmFkaW8tdGFnLWNvbG9yOiAjMDAwO1xuICAtLXJhZGlvLXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tbWluLWhlaWdodDogMzhweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLXJhZGlvLXRhZy1jb2xvcik7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcmFkaW8tdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1yYWRpby10YWctY29sb3IpO1xuICBmbGV4OiAxO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnLml0ZW0tcmFkaW8tY2hlY2tlZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcik7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnIC50YWctbGFiZWwge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZyBpb24tcmFkaW8ge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcge1xuICAtLXJhZGlvLXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tcmFkaW8tdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1yYWRpby10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAudG9nZ2xlLWxpc3QgLnRvZ2dsZS1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAudG9nZ2xlLWxpc3QgLnRvZ2dsZS1pdGVtIC50b2dnbGUtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmZpbHRlcnMtY29udGVudCAudG9nZ2xlLWxpc3QgLnRvZ2dsZS1pdGVtIGlvbi10b2dnbGUge1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvdW50ZXItbGlzdCAuY291bnRlci1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAuY291bnRlci1saXN0IC5jb3VudGVyLWl0ZW0gLmNvdW50ZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmZpbHRlcnMtY29udGVudCAuY291bnRlci1saXN0IC5jb3VudGVyLWl0ZW0gLmNvdW50ZXItdmFsdWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvdW50ZXItbGlzdCAuY291bnRlci1pdGVtIGFwcC1jb3VudGVyLWlucHV0IHtcbiAgLS1jb3VudGVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvdW50ZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhdGluZ3MtbGlzdCAucmF0aW5nLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYXRpbmdzLWxpc3QgLnJhdGluZy1pdGVtIC5yYXRpbmctbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmZpbHRlcnMtY29udGVudCAucmF0aW5ncy1saXN0IC5yYXRpbmctaXRlbSBhcHAtcmF0aW5nLWlucHV0IHtcbiAgLS1yYXRpbmctY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcikpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNvbG9yLXJhZGlvLWNvbG9yOiAjRkZGO1xuICAtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQ6ICNDQ0M7XG4gIC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIC5jb2xvci1yYWRpbyB7XG4gIC0tY29sb3ItcmFkaW8tY29sb3I6ICNGRkY7XG4gIC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZDogI0NDQztcbiAgLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QtcmdiKTtcbiAgLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzOiA0MCU7XG4gIGZsZXg6IDAgMCB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoKTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoKTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcik7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCAuY29sb3ItcmFkaW8gLmNvbG9yLXJhZGlvLWlubmVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiA0cHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQpO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQpO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tbWluLWhlaWdodDogaW5pdGlhbDtcbiAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1cyk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpby5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYiksIC4zKSAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpby5pdGVtLXJhZGlvLWNoZWNrZWQgLmNvbG9yLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpby5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC5jb2xvci1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpbyAuY29sb3ItbGFiZWwge1xuICAtLWNvbG9yOiB2YXIoLS1jb2xvci1yYWRpby1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3BhY2l0eTogMC43O1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8gaW9uLXJhZGlvIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuXG46aG9zdC1jb250ZXh0KC5tZCkgLnJhdGluZ3MtbGlzdCxcbjpob3N0LWNvbnRleHQoLm1kKSAuY291bnRlci1saXN0LFxuOmhvc3QtY29udGV4dCgubWQpIC50b2dnbGUtbGlzdCxcbjpob3N0LWNvbnRleHQoLm1kKSAucmFkaW8tbGlzdCxcbjpob3N0LWNvbnRleHQoLm1kKSAuY2hlY2tib3gtbGlzdCxcbjpob3N0LWNvbnRleHQoLm1kKSAucmFuZ2UtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbjpob3N0LWNvbnRleHQoLmlvcykgLnJhZGlvLXRhZ3MsXG46aG9zdC1jb250ZXh0KC5pb3MpIC5jaGVja2JveC10YWdzIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn0iLCJAbWl4aW4gY2hlY2tib3gtdGFnKCkge1xuICAvLyBEZWZhdWx0IHZhbHVlc1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzAwMDtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcblxuXHQuY2hlY2tib3gtdGFnIHtcbiAgICAvLyBSZXNldCB2YWx1ZXMgZnJvbSBJb25pYyAoaW9uLWl0ZW0pIHN0eWxlc1xuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcblx0XHQtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcblx0XHQtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xuXG4gICAgJi5yb3VuZGVkLXRhZyB7XG5cdFx0XHQtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcblx0XHR9XG5cblx0XHQmLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gICAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcblx0XHR9XG5cbiAgICAmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC41O1xuXG4gICAgICAudGFnLWxhYmVsIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuXHRcdC50YWctbGFiZWwge1xuXHRcdFx0bWFyZ2luOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdH1cblxuXHRcdGlvbi1jaGVja2JveCB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5jaGVja2JveC1pY29uXG5cdFx0XHR3aWR0aDogMHB4O1xuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcblx0XHRcdGhlaWdodDogMHB4O1xuXHRcdFx0Ly8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLmNoZWNrYm94LWljb24gLmNoZWNrYm94LWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuXHRcdH1cblx0fVxufVxuIiwiQG1peGluIHJhZGlvLXRhZygpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1yYWRpby10YWctY29sb3I6ICMwMDA7XG4gIC0tcmFkaW8tdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1yYWRpby10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG5cblx0LnJhZGlvLXRhZyB7XG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgLS1taW4taGVpZ2h0OiAzOHB4O1xuXG5cdFx0LS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcblx0XHQtLWJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0LS1ib3JkZXItY29sb3I6IHZhcigtLXJhZGlvLXRhZy1jb2xvcik7XG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1yYWRpby10YWctYmFja2dyb3VuZCk7XG5cdFx0LS1pb24taXRlbS1jb2xvcjogdmFyKC0tcmFkaW8tdGFnLWNvbG9yKTtcblxuICAgIGZsZXg6IDE7XG5cblx0XHQmLml0ZW0tcmFkaW8tY2hlY2tlZCB7XG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gICAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1yYWRpby10YWctYWN0aXZlLWNvbG9yKTtcblx0XHR9XG5cbiAgICAmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC41O1xuXG4gICAgICAudGFnLWxhYmVsIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50YWctbGFiZWwge1xuXHRcdFx0bWFyZ2luOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdH1cblxuXHRcdGlvbi1yYWRpbyB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5yYWRpby1pY29uXG5cdFx0XHR3aWR0aDogMHB4O1xuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcblx0XHRcdGhlaWdodDogMHB4O1xuXHRcdFx0Ly8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLnJhZGlvLWljb24gLnJhZGlvLWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuXHRcdH1cblx0fVxufVxuIiwiQG1peGluIGNvbG9yLXJhZGlvKCkge1xuICAvLyBEZWZhdWx0IHZhbHVlc1xuICAtLWNvbG9yLXJhZGlvLWNvbG9yOiAjRkZGO1xuICAtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQ6ICNDQ0M7XG4gIC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXM6IDUwJTtcblxuXHRpb24taXRlbS5jb2xvci1yYWRpbyB7XG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG5cdFx0LS1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdC0tcGFkZGluZy10b3A6IDBweDtcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcblx0XHQtLWJvcmRlci13aWR0aDogNHB4O1xuXHRcdC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcblx0XHQtLWJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZCk7XG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kKTtcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdFx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcblx0XHQtLW1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gICAgLy8gQm90aCB0aGUgaW9uLWl0ZW0gYW5kIGl0J3Mgc2hhZG93IGRvbSBpbm5lcnMgaGF2ZSBib3JkZXItcmFkaXVzIHByb3BlcnRpZXMgYXBwbGllZFxuICAgIC8vIFRoaXMgaXMgZm9yIHRoZSAuaXRlbS1pbm5lciAuaW5wdXQtd3JhcHBlciBlbGVtZW50IGluc2lkZSB0aGUgaW9uLWl0ZW0gc2hhZG93IHJvb3RcbiAgICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXMpO1xuICAgIC8vIFRoaXMgaXMgZm9yIHRoZSBpb24taXRlbSBlbGVtZW50XG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1cyk7XG5cblx0XHQmLml0ZW0tcmFkaW8tY2hlY2tlZCB7XG5cdFx0XHQtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYiksIC4zKSAhaW1wb3J0YW50O1xuXHRcdFx0LS1ib3gtc2hhZG93OiBub25lO1xuXG5cdFx0XHQuY29sb3ItbGFiZWwge1xuICAgICAgICBvcGFjaXR5OiAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG5cdFx0XHRvcGFjaXR5OiAwLjU7XG5cbiAgICAgIC5jb2xvci1sYWJlbCB7XG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblx0XHR9XG5cbiAgICAuY29sb3ItbGFiZWwge1xuICAgICAgLS1jb2xvcjogdmFyKC0tY29sb3ItcmFkaW8tY29sb3IpO1xuXG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuXG4gICAgaW9uLXJhZGlvIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLnJhZGlvLWljb25cblx0XHRcdHdpZHRoOiAwcHg7XG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xuXHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAucmFkaW8taWNvbiAucmFkaW8taW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3Jcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXHR9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsFiltersPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'forms-filters-page',
                templateUrl: './forms-filters.page.html',
                styleUrls: [
                    './styles/forms-filters.page.scss'
                ]
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=forms-filters-forms-filters-module-es2015.js.map