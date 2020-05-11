function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["walkthrough-walkthrough-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough/walkthrough.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough/walkthrough.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWalkthroughWalkthroughPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"skip-walkthrough-button\" fill=\"clear\" (click)=\"skipWalkthrough()\">skip</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides class=\"walkthrough-slides\" pager=\"true\" [options]=\"slidesOptions\">\n    <ion-slide class=\"first-slide illustration-and-decoration-slide\">\n      <ion-row class=\"slide-inner-row\">\n        <ion-col class=\"illustration-col\">\n          <app-aspect-ratio [ratio]=\"{w:915, h:849}\">\n            <app-image-shell class=\"illustration-image\" animation=\"spinner\" [src]=\"'./assets/sample-images/walkthrough/walkthrough-illustration-1.svg'\" [alt]=\"'walkthrough'\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-col>\n        <ion-col class=\"decoration-col\">\n          <!-- http://jxnblk.com/paths/?d=M0%200%20V5%20H5%20C25%205%2025%2020%2045%2020%20S65%205%2085%205%20H90%20V0%20Z -->\n          <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 90 20\" style=\"enable-background:new 0 0 90 20;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n            <path d=\"M0 0 V5 H5 C25 5 25 20 45 20 S65 5 85 5 H90 V0 Z\"/>\n          </svg>\n        </ion-col>\n        <ion-col class=\"info-col\">\n          <div class=\"info-wrapper\">\n            <h3 class=\"info-title\">This App is built with Ionic 5</h3>\n            <p class=\"info-paragraph\">\n              It was created by the <b>IonicThemes</b> team to help you jump start your Ionic app development.\n            </p>\n            <p class=\"info-paragraph\">\n              <b>You will love Ionic 5, and if you get lost, remember we have lots of tutorials to help you.</b>\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n    <ion-slide class=\"second-slide illustration-and-decoration-slide\">\n      <ion-row class=\"slide-inner-row\">\n        <ion-col class=\"illustration-col\">\n          <app-aspect-ratio [ratio]=\"{w:1096, h:806}\">\n            <app-image-shell class=\"illustration-image\" animation=\"spinner\" [src]=\"'./assets/sample-images/walkthrough/walkthrough-illustration-2.svg'\" [alt]=\"'walkthrough'\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-col>\n        <ion-col class=\"decoration-col\">\n          <!-- http://jxnblk.com/paths/?d=M0%200%20L64%200%20L64%2024%20Q56%2024%2048%2016%20Q34%200%2022%2010%20Q10%2022%200%208%20Z -->\n          <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 64 24\" style=\"enable-background:new 0 0 64 24;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n            <path d=\"M0 0 L64 0 L64 24 Q56 24 48 16 Q34 0 22 10 Q10 22 0 8 Z\"/>\n          </svg>\n        </ion-col>\n        <ion-col class=\"info-col\">\n          <div class=\"info-wrapper\">\n            <h3 class=\"info-title\">How to use this template?</h3>\n            <p class=\"info-paragraph\">\n              We want to help you build better and faster Ionic apps. We have put a lot of effort building and styling each component of this template.\n            </p>\n            <p class=\"info-paragraph\">\n              You are free to reuse and modify every component of this template.\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n    <ion-slide class=\"third-slide illustration-and-decoration-slide\">\n      <ion-row class=\"slide-inner-row\">\n        <ion-col class=\"illustration-col\">\n          <app-aspect-ratio [ratio]=\"{w:918, h:703}\">\n            <app-image-shell class=\"illustration-image\" animation=\"spinner\" [src]=\"'./assets/sample-images/walkthrough/walkthrough-illustration-3.svg'\" [alt]=\"'walkthrough'\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-col>\n        <ion-col class=\"decoration-col\">\n          <!-- http://jxnblk.com/paths/?d=M0%200%20V5%20H5%20C19%205%2025%2014%2032%2014%20S45%205%2059%205%20H64%20V0%20Z -->\n          <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 64 14\" style=\"enable-background:new 0 0 64 24;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n            <path d=\"M0 0 V5 H5 C19 5 25 14 32 14 S45 5 59 5 H64 V0 Z\"/>\n          </svg>\n        </ion-col>\n        <ion-col class=\"info-col\">\n          <div class=\"info-wrapper\">\n            <h3 class=\"info-title\">Which components are available in this Ionic 5 app?</h3>\n            <p class=\"info-paragraph\">\n              Tabs, Notifications, Profile, SideMenu, Authentication, Getting Started, Walkthrough, Forms and Validations, Categories, <b>Travel</b>, <b>Fashion</b>, <b>Food</b>, <b>Deals</b> and <b>Real Estate</b> listings and details page and many more!\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n    <ion-slide class=\"last-slide illustration-and-decoration-slide\">\n      <ion-row class=\"slide-inner-row\">\n        <ion-col class=\"illustration-col\">\n          <app-aspect-ratio [ratio]=\"{w:924, h:819}\">\n            <app-image-shell class=\"illustration-image\" animation=\"spinner\" [src]=\"'./assets/sample-images/walkthrough/walkthrough-illustration-4.svg'\" [alt]=\"'walkthrough'\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-col>\n        <ion-col class=\"decoration-col\">\n          <!-- http://jxnblk.com/paths/?d=M0%200%20L64%200%20L64%2010%20Q56%2024%2046%2012%20Q34%200%2026%208%20Q10%2022%200%208%20Z -->\n          <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 64 18\" style=\"enable-background:new 0 0 64 24;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n            <path d=\"M0 0 L64 0 L64 10 Q56 24 46 12 Q34 0 26 8 Q10 22 0 8 Z\"/>\n          </svg>\n        </ion-col>\n        <ion-col class=\"info-col\">\n          <ion-row class=\"info-outer\">\n            <ion-col>\n              <div class=\"info-wrapper\">\n                <h3 class=\"info-title\">It's time to start</h3>\n                <p class=\"info-paragraph\">\n                  Hope you like this Ionic 5 template and please let us know your feedback so we can keep improving it! Enjoy ;)\n                </p>\n              </div>\n            </ion-col>\n            <ion-col class=\"call-to-actions-wrapper\">\n              <ion-button class=\"get-started-button\" expand=\"block\" [routerLink]=\"['/getting-started']\">Get Started</ion-button>\n              <ion-row class=\"alt-call-to-action-row\">\n                <span class=\"cta-leading-text\">Already have an account?</span>\n                <ion-button class=\"login-button\" fill=\"clear\" [routerLink]=\"['/auth/login']\">\n                  Login here\n                </ion-button>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/walkthrough/styles/walkthrough.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/walkthrough/styles/walkthrough.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalkthroughStylesWalkthroughPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background);\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-first-slide-background: #c1ebff;\n  --page-second-slide-background: #a9ebd2;\n  --page-third-slide-background: #f0cbe5;\n  --page-last-slide-background: #eef3ff;\n  --page-vector-decoration-fill: var(--ion-color-light-shade);\n}\n\nion-header ion-toolbar {\n  --ion-toolbar-background: transparent;\n}\n\nion-header ion-toolbar ion-button {\n  --color: var(--ion-color-lightest);\n}\n\nion-content {\n  position: absolute;\n  top: 0;\n}\n\n.walkthrough-slides {\n  --bullet-background: var(--ion-color-dark);\n  --bullet-background-active: var(--ion-color-dark);\n  height: 100%;\n}\n\n.walkthrough-slides .slide-inner-row {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-top: var(--app-header-height);\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n  background-clip: padding-box;\n  background-color: var(--page-vector-decoration-fill);\n}\n\n.illustration-and-decoration-slide .slide-inner-row {\n  --ion-grid-column-padding: 0px;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.illustration-and-decoration-slide .illustration-col {\n  flex-grow: 0;\n  flex-shrink: 0;\n  min-height: auto;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  max-width: 30vh;\n  padding: 0px;\n}\n\n.illustration-and-decoration-slide .decoration-col {\n  flex-grow: 0;\n  flex-shrink: 1;\n  min-height: 12vh;\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.illustration-and-decoration-slide .decoration-col .vector-decoration {\n  fill: currentColor;\n  color: var(--page-vector-decoration-fill);\n  background-color: var(--page-background);\n  padding-bottom: 4px;\n  transform: translate3d(0px, 0px, 0px);\n  shape-rendering: geometricprecision;\n  height: calc(100% + 1px);\n}\n\n.illustration-and-decoration-slide .info-col {\n  flex-grow: 1;\n  flex-shrink: 0;\n  min-height: auto;\n  background-color: var(--page-background);\n  margin-bottom: -1px;\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper {\n  margin: calc(var(--page-margin) * -1) var(--page-margin) 0px;\n  text-align: left;\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper .info-title {\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n  color: var(--ion-color-dark);\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper .info-paragraph {\n  color: var(--ion-color-medium-shade);\n  font-size: 14px;\n  margin: 0px 0px calc(var(--page-margin) / 2);\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper .info-paragraph:last-child {\n  margin-bottom: 0px;\n}\n\n.first-slide {\n  --page-vector-decoration-fill: var(--page-first-slide-background);\n}\n\n.second-slide {\n  --page-vector-decoration-fill: var(--page-second-slide-background);\n}\n\n.third-slide {\n  --page-vector-decoration-fill: var(--page-third-slide-background);\n}\n\n.last-slide {\n  --page-vector-decoration-fill: var(--page-last-slide-background);\n}\n\n.last-slide .slide-inner-row {\n  border-width: 0px;\n}\n\n.last-slide .info-col {\n  padding: var(--page-margin);\n}\n\n.last-slide .info-col .info-outer {\n  height: 100%;\n  align-items: flex-end;\n  flex-direction: column;\n}\n\n.last-slide .info-col .info-outer .info-wrapper {\n  margin: calc(var(--page-margin) * -1) 0px 0px;\n}\n\n.last-slide .info-col .info-outer .call-to-actions-wrapper {\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.last-slide .info-col .get-started-button {\n  margin: 0px;\n}\n\n.last-slide .info-col .alt-call-to-action-row {\n  padding-top: 5px;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.last-slide .info-col .alt-call-to-action-row .cta-leading-text {\n  color: var(--ion-color-medium);\n  font-size: 16px;\n}\n\n.last-slide .info-col .alt-call-to-action-row .login-button {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n:host(.first-slide-active) .skip-walkthrough-button {\n  visibility: hidden;\n}\n\n:host(.last-slide-active) ::ng-deep .walkthrough-slides .swiper-pagination {\n  display: none;\n}\n\n:host(.last-slide-active) .skip-walkthrough-button {\n  visibility: hidden;\n}\n\n:host ::ng-deep .walkthrough-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n:host ::ng-deep .walkthrough-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0NBQUE7RUFDQSx3Q0FBQTtFQUVBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUVBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0VBRUEsMkRBQUE7QUNKRjs7QURTRTtFQUNFLHFDQUFBO0FDTko7O0FEU0k7RUFDRSxrQ0FBQTtBQ1BOOztBRFlBO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0FDVkY7O0FEYUE7RUFDRSwwQ0FBQTtFQUNBLGlEQUFBO0VBRUEsWUFBQTtBQ1hGOztBRGFFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEscUNBQUE7RUFFQSxvRUFBQTtFQUNBLDRCQUFBO0VBQ0Esb0RBQUE7QUNiSjs7QURrQkU7RUFDRSw4QkFBQTtFQUVBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ2hCSjs7QURtQkU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNqQko7O0FEb0JFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFHQSxnQkFBQTtFQUNBLHFDQUFBO0FDcEJKOztBRHNCSTtFQUNFLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBR0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0FDdEJOOztBRDBCRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUdBLG1CQUFBO0VBRUEscUNBQUE7QUMzQko7O0FENkJJO0VBQ0UsNERBQUE7RUFDQSxnQkFBQTtBQzNCTjs7QUQ2Qk07RUFDRSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtBQzNCUjs7QUQ4Qk07RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQzVCUjs7QUQ4QlE7RUFDRSxrQkFBQTtBQzVCVjs7QURtQ0E7RUFDRSxpRUFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxrRUFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxpRUFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxnRUFBQTtBQ2hDRjs7QURrQ0U7RUFFRSxpQkFBQTtBQ2pDSjs7QURvQ0U7RUFDRSwyQkFBQTtBQ2xDSjs7QURvQ0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ2xDTjs7QURvQ007RUFDRSw2Q0FBQTtBQ2xDUjs7QURxQ007RUFDRSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7QUNuQ1I7O0FEdUNJO0VBQ0UsV0FBQTtBQ3JDTjs7QUR3Q0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUN0Q047O0FEd0NNO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FDdENSOztBRHlDTTtFQUNFLG1DQUFBO0VBRUEsV0FBQTtBQ3hDUjs7QUQrQ0U7RUFDRSxrQkFBQTtBQzVDSjs7QURrREk7RUFDRSxhQUFBO0FDL0NOOztBRG1ERTtFQUNFLGtCQUFBO0FDakRKOztBRHlERTtFQUNFLDRDQUFBO0VBQ0EsY0FBQTtFQUVBLCtGQUFBO0FDdkRKOztBRHlESTtFQUNFLHlDQUFBO0VBQ0EsMENBQUE7QUN2RE4iLCJmaWxlIjoic3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogNDBweDtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcbiAgLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemU6IDEwcHg7XG5cbiAgLS1wYWdlLWZpcnN0LXNsaWRlLWJhY2tncm91bmQ6ICNjMWViZmY7XG4gIC0tcGFnZS1zZWNvbmQtc2xpZGUtYmFja2dyb3VuZDogI2E5ZWJkMjtcbiAgLS1wYWdlLXRoaXJkLXNsaWRlLWJhY2tncm91bmQ6ICNmMGNiZTU7XG4gIC0tcGFnZS1sYXN0LXNsaWRlLWJhY2tncm91bmQ6ICNlZWYzZmY7XG5cbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgLy8gRm9yIHRoZSBza2lwIGJ1dHRvblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAvLyBUbyBnZXQgdGhlIGlvbi1jb250ZW50IGJlaGluZCB0aGUgaW9uLWhlYWRlclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLndhbGt0aHJvdWdoLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvLyBIZWFkZXIgc3BhY2VcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tYXBwLWhlYWRlci1oZWlnaHQpO1xuICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBzcGFjZVxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsKTtcbiAgfVxufVxuXG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiAzMHZoO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuXG4gICAgLy8gVG8gcHJldmVudCB0cmFuc3BhcmVudCBsaW5lIGNhdXNlZCBieSBwaXhlbCBmcmFjdGlvbnNcbiAgICBtaW4taGVpZ2h0OiAxMnZoO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG5cbiAgICAudmVjdG9yLWRlY29yYXRpb24ge1xuICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcblxuICAgICAgLy8gVG8gcHJldmVudCB0cmFuc3BhcmVudCBsaW5lIGNhdXNlZCBieSBwaXhlbCBmcmFjdGlvbnNcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBzaGFwZS1yZW5kZXJpbmc6IGdlb21ldHJpY3ByZWNpc2lvbjtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlICsgMXB4KTtcbiAgICB9XG4gIH1cblxuICAuaW5mby1jb2wge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgICAvLyBUbyBwcmV2ZW50IHRyYW5zcGFyZW50IGxpbmUgY2F1c2VkIGJ5IHBpeGVsIGZyYWN0aW9uc1xuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgLy8gUHJldmVudCAuaW5mby13cmFwcGVyIHRleHQgdG8gYmxpbmsgYXMgaXQncyBvdmVyIHRoZSBwcmV2aW91cyBlbGVtZW50IChTYWZhcmkgaXNzdWUpXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcblxuICAgIC5pbmZvLXdyYXBwZXIge1xuICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgLmluZm8tdGl0bGUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuXG4gICAgICAuaW5mby1wYXJhZ3JhcGgge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZpcnN0LXNsaWRlIHtcbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLXBhZ2UtZmlyc3Qtc2xpZGUtYmFja2dyb3VuZCk7XG59XG5cbi5zZWNvbmQtc2xpZGUge1xuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS1zZWNvbmQtc2xpZGUtYmFja2dyb3VuZCk7XG59XG5cbi50aGlyZC1zbGlkZSB7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLXRoaXJkLXNsaWRlLWJhY2tncm91bmQpO1xufVxuXG4ubGFzdC1zbGlkZSB7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLWxhc3Qtc2xpZGUtYmFja2dyb3VuZCk7XG5cbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgLy8gSW4gdGhlIGxhc3Qgc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uIGlzIGhpZGRlblxuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICB9XG5cbiAgLmluZm8tY29sIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAuaW5mby1vdXRlciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAuaW5mby13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSAwcHggMHB4O1xuICAgICAgfVxuXG4gICAgICAuY2FsbC10by1hY3Rpb25zLXdyYXBwZXIge1xuICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZ2V0LXN0YXJ0ZWQtYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5hbHQtY2FsbC10by1hY3Rpb24tcm93IHtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICAgIC5jdGEtbGVhZGluZy10ZXh0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5sb2dpbi1idXR0b24ge1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcblxuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoLmZpcnN0LXNsaWRlLWFjdGl2ZSkge1xuICAuc2tpcC13YWxrdGhyb3VnaC1idXR0b24ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG46aG9zdCgubGFzdC1zbGlkZS1hY3RpdmUpIHtcbiAgOjpuZy1kZWVwIC53YWxrdGhyb3VnaC1zbGlkZXMge1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5za2lwLXdhbGt0aHJvdWdoLWJ1dHRvbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbi8vIElTU1VFOiAuc3dpcGVyLXBhZ2dpbmF0aW9uIGdldHMgcmVuZGVyZWQgZHluYW1pY2FsbHkuIFRoYXQgcHJldmVudHMgc3R5bGluZyB0aGUgZWxlbWVudHMgd2hlbiB1c2luZyB0aGUgZGVmYXVsdCBBbmd1bGFyIFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbi8vICAgICAgICAoQW5ndWxhciBkb2Vzbid0IGFkZCBhbiAnX25nY29udGVudCcgYXR0cmlidXRlIHRvIHRoZSAuc3dpcGVyLXBhZ2dpbmF0aW9uIGJlY2F1c2UgaXQncyBkeW5hbWljYWxseSByZW5kZXJlZClcbi8vIEZJWDogICBTZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNjI2NTA3Mi8xMTE2OTU5XG46aG9zdCA6Om5nLWRlZXAgLndhbGt0aHJvdWdoLXNsaWRlcyB7XG4gIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCk7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIGlzIDE4cHggaGVpZ2h0LCAuc2xpZGUtaW5uZXItcm93IGhhcyA0MHB4IG9mIHBhZGRpbmctYm90dG9tID0+IGJvdHRvbSA9ICg0MHB4IC0gMThweCkvMiA9IDExcHhcbiAgICBib3R0b206IGNhbGMoKHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIC0gdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpICkgLyAyKTtcblxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2U6IDQwcHg7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiAxMHB4O1xuICAtLXBhZ2UtZmlyc3Qtc2xpZGUtYmFja2dyb3VuZDogI2MxZWJmZjtcbiAgLS1wYWdlLXNlY29uZC1zbGlkZS1iYWNrZ3JvdW5kOiAjYTllYmQyO1xuICAtLXBhZ2UtdGhpcmQtc2xpZGUtYmFja2dyb3VuZDogI2YwY2JlNTtcbiAgLS1wYWdlLWxhc3Qtc2xpZGUtYmFja2dyb3VuZDogI2VlZjNmZjtcbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLndhbGt0aHJvdWdoLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndhbGt0aHJvdWdoLXNsaWRlcyAuc2xpZGUtaW5uZXItcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogdmFyKC0tYXBwLWhlYWRlci1oZWlnaHQpO1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsKTtcbn1cblxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuc2xpZGUtaW5uZXItcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDMwdmg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmRlY29yYXRpb24tY29sIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMTtcbiAgbWluLWhlaWdodDogMTJ2aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmRlY29yYXRpb24tY29sIC52ZWN0b3ItZGVjb3JhdGlvbiB7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgY29sb3I6IHZhcigtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gIHNoYXBlLXJlbmRlcmluZzogZ2VvbWV0cmljcHJlY2lzaW9uO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDFweCk7XG59XG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5pbmZvLWNvbCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG59XG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5pbmZvLWNvbCAuaW5mby13cmFwcGVyIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaW5mby1jb2wgLmluZm8td3JhcHBlciAuaW5mby10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5pbmZvLWNvbCAuaW5mby13cmFwcGVyIC5pbmZvLXBhcmFncmFwaCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmluZm8tY29sIC5pbmZvLXdyYXBwZXIgLmluZm8tcGFyYWdyYXBoOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5maXJzdC1zbGlkZSB7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLWZpcnN0LXNsaWRlLWJhY2tncm91bmQpO1xufVxuXG4uc2Vjb25kLXNsaWRlIHtcbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLXBhZ2Utc2Vjb25kLXNsaWRlLWJhY2tncm91bmQpO1xufVxuXG4udGhpcmQtc2xpZGUge1xuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS10aGlyZC1zbGlkZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmxhc3Qtc2xpZGUge1xuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS1sYXN0LXNsaWRlLWJhY2tncm91bmQpO1xufVxuLmxhc3Qtc2xpZGUgLnNsaWRlLWlubmVyLXJvdyB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIC5pbmZvLW91dGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubGFzdC1zbGlkZSAuaW5mby1jb2wgLmluZm8tb3V0ZXIgLmluZm8td3JhcHBlciB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSkgMHB4IDBweDtcbn1cbi5sYXN0LXNsaWRlIC5pbmZvLWNvbCAuaW5mby1vdXRlciAuY2FsbC10by1hY3Rpb25zLXdyYXBwZXIge1xuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5sYXN0LXNsaWRlIC5pbmZvLWNvbCAuZ2V0LXN0YXJ0ZWQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubGFzdC1zbGlkZSAuaW5mby1jb2wgLmFsdC1jYWxsLXRvLWFjdGlvbi1yb3cge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5sYXN0LXNsaWRlIC5pbmZvLWNvbCAuYWx0LWNhbGwtdG8tYWN0aW9uLXJvdyAuY3RhLWxlYWRpbmctdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIC5hbHQtY2FsbC10by1hY3Rpb24tcm93IC5sb2dpbi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbjpob3N0KC5maXJzdC1zbGlkZS1hY3RpdmUpIC5za2lwLXdhbGt0aHJvdWdoLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuOmhvc3QoLmxhc3Qtc2xpZGUtYWN0aXZlKSA6Om5nLWRlZXAgLndhbGt0aHJvdWdoLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QoLmxhc3Qtc2xpZGUtYWN0aXZlKSAuc2tpcC13YWxrdGhyb3VnaC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbjpob3N0IDo6bmctZGVlcCAud2Fsa3Rocm91Z2gtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm90dG9tOiBjYWxjKCh2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSAtIHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KSApIC8gMik7XG59XG46aG9zdCA6Om5nLWRlZXAgLndhbGt0aHJvdWdoLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHdpZHRoOiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/walkthrough/styles/walkthrough.responsive.scss":
  /*!****************************************************************!*\
    !*** ./src/app/walkthrough/styles/walkthrough.responsive.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalkthroughStylesWalkthroughResponsiveScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 30vh;\n    padding: 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 12vh;\n  }\n  .illustration-and-decoration-slide .info-col .info-wrapper .info-title {\n    margin-bottom: calc(var(--page-margin) / 2);\n    font-size: 20px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 32vh;\n    padding: 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 12vh;\n  }\n  .illustration-and-decoration-slide .info-col .info-wrapper .info-title {\n    margin-bottom: calc(var(--page-margin) / 2);\n    font-size: 20px;\n  }\n}\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 36vh;\n    padding: 2vh 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 14vh;\n  }\n}\n/* ----------- iPhone X ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 34vh;\n    padding: 6vh 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 12vh;\n  }\n}\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 38vh;\n    padding: 4vh 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 14vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucmVzcG9uc2l2ZS5zY3NzIiwic3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFXSTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VDZEo7RURpQkU7SUFDRSxnQkFBQTtFQ2ZKO0VEb0JNO0lBQ0UsMkNBQUE7SUFDQSxlQUFBO0VDbEJSO0FBQ0Y7QUR3QkEscURBQUE7QUFDQTtFQVdJO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUNoQ0o7RURtQ0U7SUFDRSxnQkFBQTtFQ2pDSjtFRHNDTTtJQUNFLDJDQUFBO0lBQ0EsZUFBQTtFQ3BDUjtBQUNGO0FEMENBLGtEQUFBO0FBQ0E7RUFVSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQ2pESjtFRG9ERTtJQUNFLGdCQUFBO0VDbERKO0FBQ0Y7QURzREEscUNBQUE7QUFDQTtFQVVJO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDN0RKO0VEZ0VFO0lBQ0UsZ0JBQUE7RUM5REo7QUFDRjtBRGtFQSxpREFBQTtBQUNBO0VBVUk7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUN6RUo7RUQ0RUU7SUFDRSxnQkFBQTtFQzFFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnJlc3BvbnNpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChOb3RlOiBEb24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBkZXZpY2VzIGFzIGl0IG1heSBicmVhayB0aGUgY29ycmVjdCBjc3MgcHJlY2VkZW5jZSlcblxuLy8gKHNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbWVkaWEtcXVlcmllcy1mb3Itc3RhbmRhcmQtZGV2aWNlcy8jaXBob25lLXF1ZXJpZXMpXG4vLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc3NTAyNjEvMTExNjk1OSlcblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSB7XG4gICAgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgICAgbWF4LXdpZHRoOiAzMHZoO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cblxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgICBtaW4taGVpZ2h0OiAxMnZoO1xuICAgIH1cblxuICAgIC5pbmZvLWNvbCB7XG4gICAgICAuaW5mby13cmFwcGVyIHtcbiAgICAgICAgLmluZm8tdGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NjhweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAgLyA3MSlcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgICBtYXgtd2lkdGg6IDMydmg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuXG4gICAgLmRlY29yYXRpb24tY29sIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gICAgfVxuXG4gICAgLmluZm8tY29sIHtcbiAgICAgIC5pbmZvLXdyYXBwZXIge1xuICAgICAgICAuaW5mby10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgICBtYXgtd2lkdGg6IDM2dmg7XG4gICAgICBwYWRkaW5nOiAydmggMHB4O1xuICAgIH1cblxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUge1xuICAgIC5pbGx1c3RyYXRpb24tY29sIHtcbiAgICAgIG1heC13aWR0aDogMzR2aDtcbiAgICAgIHBhZGRpbmc6IDZ2aCAwcHg7XG4gICAgfVxuXG4gICAgLmRlY29yYXRpb24tY29sIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2KywgNysgYW5kIDgrIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDczNnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgICBtYXgtd2lkdGg6IDM4dmg7XG4gICAgICBwYWRkaW5nOiA0dmggMHB4O1xuICAgIH1cblxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICAgIH1cbiAgfVxufVxuIiwiLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzB2aDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuZGVjb3JhdGlvbi1jb2wge1xuICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaW5mby1jb2wgLmluZm8td3JhcHBlciAuaW5mby10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNTY4cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwLzcxKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzJ2aDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuZGVjb3JhdGlvbi1jb2wge1xuICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaW5mby1jb2wgLmluZm8td3JhcHBlciAuaW5mby10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzZ2aDtcbiAgICBwYWRkaW5nOiAydmggMHB4O1xuICB9XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmRlY29yYXRpb24tY29sIHtcbiAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzR2aDtcbiAgICBwYWRkaW5nOiA2dmggMHB4O1xuICB9XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmRlY29yYXRpb24tY29sIHtcbiAgICBtaW4taGVpZ2h0OiAxMnZoO1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzM2cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzh2aDtcbiAgICBwYWRkaW5nOiA0dmggMHB4O1xuICB9XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmRlY29yYXRpb24tY29sIHtcbiAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/walkthrough/styles/walkthrough.shell.scss":
  /*!***********************************************************!*\
    !*** ./src/app/walkthrough/styles/walkthrough.shell.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalkthroughStylesWalkthroughShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.illustration-image {\n  --image-shell-loading-background: transparent;\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2guc2hlbGwuc2NzcyIsInNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLHNEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2guc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC5pbGx1c3RyYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbiIsImFwcC1pbWFnZS1zaGVsbC5pbGx1c3RyYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn0iXX0= */";
    /***/
  },

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


    var _walkthrough_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./walkthrough.page */
    "./src/app/walkthrough/walkthrough.page.ts");

    var routes = [{
      path: '',
      component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_7__["WalkthroughPage"]
    }];

    var WalkthroughPageModule = function WalkthroughPageModule() {
      _classCallCheck(this, WalkthroughPageModule);
    };

    WalkthroughPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_7__["WalkthroughPage"]]
    })], WalkthroughPageModule);
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
      }

      _createClass(WalkthroughPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(false);
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

    WalkthroughPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], WalkthroughPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.first-slide-active'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WalkthroughPage.prototype, "isFirstSlide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.last-slide-active'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WalkthroughPage.prototype, "isLastSlide", void 0);
    WalkthroughPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-walkthrough',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./walkthrough.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough/walkthrough.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/walkthrough.page.scss */
      "./src/app/walkthrough/styles/walkthrough.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/walkthrough.shell.scss */
      "./src/app/walkthrough/styles/walkthrough.shell.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/walkthrough.responsive.scss */
      "./src/app/walkthrough/styles/walkthrough.responsive.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], WalkthroughPage);
    /***/
  }
}]);
//# sourceMappingURL=walkthrough-walkthrough-module-es5.js.map