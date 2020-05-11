(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-card-contact-card-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-card/contact-card.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-card/contact-card.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"contact-card-content\">\n  <ion-row class=\"user-details-wrapper\">\n    <ion-col size=\"4\">\n      <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n        <app-image-shell class=\"user-avatar\" animation=\"spinner\" [src]=\"'./assets/sample-images/notifications/100x100Notification2.jpg'\" [alt]=\"'notification image'\"></app-image-shell>\n      </app-aspect-ratio>\n    </ion-col>\n    <ion-col class=\"user-info-wrapper\" size=\"8\">\n      <h3 class=\"user-name\">Claire Hale</h3>\n      <h5 class=\"user-handle\">@clairehale</h5>\n    </ion-col>\n    <ion-col class=\"user-stats-wrapper\" size=\"6\">\n      <span class=\"user-stat-value\">1553</span>\n      <span class=\"user-stat-name\">Following</span>\n    </ion-col>\n    <ion-col class=\"user-stats-wrapper\" size=\"6\">\n      <span class=\"user-stat-value\">537</span>\n      <span class=\"user-stat-name\">Followers</span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <p class=\"user-bio\">\n        I am a product and visual designer based in Uruguay. I have designed at Google, Amazon and Microsoft.\n      </p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"user-preferences-wrapper\">\n    <ion-col size=\"12\">\n      <h4 class=\"preference-name\">Mobile</h4>\n      <p class=\"preference-value\">\n        +1-202-555-0102\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h4 class=\"preference-name\">Email</h4>\n      <p class=\"preference-value\">\n        clairhale@ionic.com\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h4 class=\"preference-name\">Address</h4>\n      <p class=\"preference-value\">\n        921 Church St, San Francisco, CA\n        <br/>\n        94114, USA\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/contact-card/contact-card.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contact-card/contact-card.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCardPageModule", function() { return ContactCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _contact_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-card.page */ "./src/app/contact-card/contact-card.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let ContactCardPageModule = class ContactCardPageModule {
};
ContactCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _contact_card_page__WEBPACK_IMPORTED_MODULE_6__["ContactCardPage"] }])
        ],
        declarations: [_contact_card_page__WEBPACK_IMPORTED_MODULE_6__["ContactCardPage"]]
    })
], ContactCardPageModule);



/***/ }),

/***/ "./src/app/contact-card/contact-card.page.ts":
/*!***************************************************!*\
  !*** ./src/app/contact-card/contact-card.page.ts ***!
  \***************************************************/
/*! exports provided: ContactCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCardPage", function() { return ContactCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactCardPage = class ContactCardPage {
};
ContactCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-card.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-card/contact-card.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/contact-card.page.scss */ "./src/app/contact-card/styles/contact-card.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/contact-card.shell.scss */ "./src/app/contact-card/styles/contact-card.shell.scss")).default]
    })
], ContactCardPage);



/***/ }),

/***/ "./src/app/contact-card/styles/contact-card.page.scss":
/*!************************************************************!*\
  !*** ./src/app/contact-card/styles/contact-card.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-highlighted-background: var(--ion-color-secondary-tint);\n}\n\nion-header ion-toolbar {\n  --background: var(--page-highlighted-background);\n}\n\n.contact-card-content {\n  --background: var(--page-background);\n  transform: translateZ(0);\n}\n\n.contact-card-content .user-details-wrapper {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin) var(--page-margin);\n  background-color: var(--page-highlighted-background);\n  color: var(--ion-color-light);\n  align-items: center;\n}\n\n.contact-card-content .user-details-wrapper .user-avatar {\n  border: solid 3px var(--ion-color-light);\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper {\n  padding-left: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-name {\n  margin: 0px 0px 5px;\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-handle {\n  margin: 0px;\n  font-weight: 400;\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper {\n  text-align: center;\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-value {\n  margin-right: 5px;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-name {\n  font-size: 16px;\n}\n\n.contact-card-content .user-details-wrapper .user-bio {\n  margin: var(--page-margin) 0px 0px;\n  line-height: 1.2;\n  font-size: 14px;\n}\n\n.contact-card-content .user-preferences-wrapper {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.contact-card-content .user-preferences-wrapper .preference-name {\n  margin: 0px 0px 5px;\n  font-size: 16px;\n}\n\n.contact-card-content .user-preferences-wrapper .preference-value {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-size: 14px;\n  line-height: 1.4;\n  color: var(--ion-color-dark-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9jb250YWN0LWNhcmQvc3R5bGVzL2NvbnRhY3QtY2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QtY2FyZC9zdHlsZXMvY29udGFjdC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNDQUFBO0VBQ0EsOENBQUE7RUFFQSw4REFBQTtBQ0ZGOztBRE9FO0VBQ0UsZ0RBQUE7QUNKSjs7QURRQTtFQUNFLG9DQUFBO0VBRUEsd0JBQUE7QUNORjs7QURRRTtFQUNFLDhCQUFBO0VBRUEsa0RBQUE7RUFDQSxvREFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURTSTtFQUNFLHdDQUFBO0FDUE47O0FEVUk7RUFDRSwwQ0FBQTtBQ1JOOztBRFVNO0VBQ0UsbUJBQUE7QUNSUjs7QURXTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ1RSOztBRGFJO0VBQ0Usa0JBQUE7RUFDQSx5Q0FBQTtBQ1hOOztBRGFNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNYUjs7QURjTTtFQUNFLGVBQUE7QUNaUjs7QURnQkk7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2ROOztBRGtCRTtFQUNFLDhCQUFBO0VBRUEsMkJBQUE7QUNqQko7O0FEbUJJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDakJOOztBRG9CSTtFQUNFLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUNsQk4iLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LWNhcmQvc3R5bGVzL2NvbnRhY3QtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZCk7XG4gIH1cbn1cblxuLmNvbnRhY3QtY2FyZC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAvLyBUbyBmaXggaGFsZiBwaXhlbCBsaW5lIGJldHdlZW4gaW9uLWhlYWRlciBhbmQgIGlvbi1jb250ZW50XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcblxuICAudXNlci1kZXRhaWxzLXdyYXBwZXIge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC51c2VyLWF2YXRhciB7XG4gICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cblxuICAgIC51c2VyLWluZm8td3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xuICAgICAgfVxuXG4gICAgICAudXNlci1oYW5kbGUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudXNlci1zdGF0cy13cmFwcGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAudXNlci1zdGF0LXZhbHVlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cblxuICAgICAgLnVzZXItc3RhdC1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC51c2VyLWJpbyB7XG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAucHJlZmVyZW5jZS1uYW1lIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLnByZWZlcmVuY2UtdmFsdWUge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZCk7XG59XG5cbi5jb250YWN0LWNhcmQtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1hdmF0YXIge1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1pbmZvLXdyYXBwZXIge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLWluZm8td3JhcHBlciAudXNlci1uYW1lIHtcbiAgbWFyZ2luOiAwcHggMHB4IDVweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWhhbmRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1zdGF0cy13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItc3RhdHMtd3JhcHBlciAudXNlci1zdGF0LXZhbHVlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItc3RhdHMtd3JhcHBlciAudXNlci1zdGF0LW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLWJpbyB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAucHJlZmVyZW5jZS1uYW1lIHtcbiAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnByZWZlcmVuY2UtdmFsdWUge1xuICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/contact-card/styles/contact-card.shell.scss":
/*!*************************************************************!*\
  !*** ./src/app/contact-card/styles/contact-card.shell.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.user-avatar {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), 0.25);\n  --image-shell-border-radius: 50%;\n  --image-shell-spinner-color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9jb250YWN0LWNhcmQvc3R5bGVzL2NvbnRhY3QtY2FyZC5zaGVsbC5zY3NzIiwic3JjL2FwcC9jb250YWN0LWNhcmQvc3R5bGVzL2NvbnRhY3QtY2FyZC5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0VBQUE7RUFDQSxnQ0FBQTtFQUNBLG1EQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LWNhcmQvc3R5bGVzL2NvbnRhY3QtY2FyZC5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItYXZhdGFyIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMjUpO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItYXZhdGFyIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMjUpO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=contact-card-contact-card-module-es2015.js.map