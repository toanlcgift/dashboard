webpackJsonp(["widgets-recaptcha.module"],{

/***/ "./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-recaptcha/widgets-recaptcha.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\" appunwraptag=\"\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto\">\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\n\t\t\t\tGoogle reCaptcha\n\t\t\t</h3>\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForms\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForm Widgets\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tGoogle reCaptcha\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- END: Subheader -->\n<div class=\"m-content\">\n\t<!--begin::Portlet-->\n\t<div class=\"m-portlet\">\n\t\t<div class=\"m-portlet__head\">\n\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\tGoogle reCaptcha Examples\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--begin::Form-->\n\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\n\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tGoogle reCaptcha 1\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<re-captcha class=\"g-recaptcha\" siteKey=\"6LdnLwgUAAAAAAIb9L3PQlHQgvSCi16sYgbMIMFR\"></re-captcha>\n\t\t\t\t\t\t<div class=\"m-form__help\">\n\t\t\t\t\t\t\tTo learn more about Google reCaptcha please visit\n\t\t\t\t\t\t\t<a class=\"m-link\" href=\"http://www.google.com/recaptcha\" >\n\t\t\t\t\t\t\t\thttp://www.google.com/recaptcha\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<script src='https://www.google.com/recaptcha/api.js'></script>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tGoogle reCaptcha 2\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<!--begin: GOOGLE REPCAPTCHA -->\n\t\t\t\t\t\t<div id=\"recaptcha_widget\" class=\"m-recaptcha\">\n\t\t\t\t\t\t\t<div class=\"m-recaptcha__img\">\n\t\t\t\t\t\t\t\t<a id=\"recaptcha_image\" href=\"javascript:;\"></a>\n\t\t\t\t\t\t\t\t<div class=\"recaptcha_only_if_incorrect_sol display-none\">\n\t\t\t\t\t\t\t\t\tIncorrect please try again\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"recaptcha_response_field\" name=\"recaptcha_response_field\">\n\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-secondary\" href=\"javascript:Recaptcha.reload()\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-refresh\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-secondary recaptcha_only_if_image\" href=\"javascript:Recaptcha.switch_type('audio')\">\n\t\t\t\t\t\t\t\t\t\t<i title=\"Get an audio CAPTCHA\" class=\"la la-headphones\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-secondary recaptcha_only_if_audio\" href=\"javascript:Recaptcha.switch_type('image')\">\n\t\t\t\t\t\t\t\t\t\t<i title=\"Get an image CAPTCHA\" class=\"la la-picture-o\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-secondary\" href=\"javascript:Recaptcha.showhelp()\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-question-circle\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-form__help\">\n\t\t\t\t\t\t\t\t<span class=\"recaptcha_only_if_image\">\n\t\t\t\t\t\t\t\t\tEnter the words above\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span class=\"recaptcha_only_if_audio\">\n\t\t\t\t\t\t\t\t\tEnter the numbers you hear\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-form__help\">\n\t\t\t\t\t\t\t<span class=\"label label-sm label-danger\">\n\t\t\t\t\t\t\t\tNote:&nbsp;\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\tPlease visit\n\t\t\t\t\t\t\t<a class=\"m-link\"  href=\"http://www.google.com/recaptcha\" >\n\t\t\t\t\t\t\t\thttp://www.google.com/recaptcha\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\tto learn more about the Google reCaptcha\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<script type=\"text/javascript\">\n\t\t\t\t\t\t\t \t\t\t\t\t\tvar RecaptchaOptions = { \t\t\t\t\t    \ttheme : 'custom', \t\t\t\t\t    \tcustom_theme_widget: 'recaptcha_widget' \t\t\t\t\t    }; \t\t\t\t\t\n\t\t\t\t\t\t</script>\n\t\t\t\t\t\t<script type=\"text/javascript\" src=\"https://www.google.com/recaptcha/api/challenge?k=6LcrK9cSAAAAALEcjG9gTRPbeA0yAVsKd8sBpFpR\"></script>\n\t\t\t\t\t\t<!--end: GOOGLE REPCAPTCHA -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t<div class=\"m-form__actions m-form__actions\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-9 ml-lg-auto\">\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t<!--end::Form-->\n\t</div>\n\t<!--end::Portlet-->\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-recaptcha/widgets-recaptcha.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsRecaptchaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetsRecaptchaComponent = /** @class */ (function () {
    function WidgetsRecaptchaComponent() {
    }
    WidgetsRecaptchaComponent.prototype.ngOnInit = function () {
    };
    WidgetsRecaptchaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-widgets-recaptcha",
            template: __webpack_require__("./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-recaptcha/widgets-recaptcha.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], WidgetsRecaptchaComponent);
    return WidgetsRecaptchaComponent;
}());



/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-recaptcha/widgets-recaptcha.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsRecaptchaModule", function() { return WidgetsRecaptchaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_recaptcha__ = __webpack_require__("./node_modules/ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widgets_recaptcha_component__ = __webpack_require__("./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-recaptcha/widgets-recaptcha.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_layout_module__ = __webpack_require__("./ClientApp/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__default_component__ = __webpack_require__("./ClientApp/app/theme/pages/default/default.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_6__default_component__["a" /* DefaultComponent */],
        "children": [
            {
                "path": "",
                "component": __WEBPACK_IMPORTED_MODULE_4__widgets_recaptcha_component__["a" /* WidgetsRecaptchaComponent */]
            }
        ]
    }
];
var WidgetsRecaptchaModule = /** @class */ (function () {
    function WidgetsRecaptchaModule() {
    }
    WidgetsRecaptchaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ng_recaptcha__["RecaptchaModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_5__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_4__widgets_recaptcha_component__["a" /* WidgetsRecaptchaComponent */]
            ]
        })
    ], WidgetsRecaptchaModule);
    return WidgetsRecaptchaModule;
}());



/***/ }),

/***/ "./node_modules/ng-recaptcha/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var recaptcha_component_1 = __webpack_require__("./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
exports.RecaptchaComponent = recaptcha_component_1.RecaptchaComponent;
var recaptcha_loader_service_1 = __webpack_require__("./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js");
exports.RecaptchaLoaderService = recaptcha_loader_service_1.RecaptchaLoaderService;
exports.RECAPTCHA_LANGUAGE = recaptcha_loader_service_1.RECAPTCHA_LANGUAGE;
var recaptcha_module_1 = __webpack_require__("./node_modules/ng-recaptcha/recaptcha/recaptcha.module.js");
exports.RecaptchaModule = recaptcha_module_1.RecaptchaModule;
var recaptcha_settings_1 = __webpack_require__("./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js");
exports.RECAPTCHA_SETTINGS = recaptcha_settings_1.RECAPTCHA_SETTINGS;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-common.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var recaptcha_component_1 = __webpack_require__("./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
var RecaptchaCommonModule = (function () {
    function RecaptchaCommonModule() {
    }
    RecaptchaCommonModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [recaptcha_component_1.RecaptchaComponent],
                    exports: [recaptcha_component_1.RecaptchaComponent],
                },] },
    ];
    /** @nocollapse */
    RecaptchaCommonModule.ctorParameters = function () { return []; };
    return RecaptchaCommonModule;
}());
exports.RecaptchaCommonModule = RecaptchaCommonModule;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
exports.RECAPTCHA_LANGUAGE = new core_1.InjectionToken('recaptcha-language');
var RecaptchaLoaderService = (function () {
    function RecaptchaLoaderService(
        // tslint:disable-next-line:no-any
        platformId, language) {
        this.platformId = platformId;
        this.language = language;
        this.init();
        this.ready = common_1.isPlatformBrowser(this.platformId) ? RecaptchaLoaderService.ready.asObservable() : Observable_1.Observable.of();
    }
    /** @internal */
    RecaptchaLoaderService.prototype.init = function () {
        if (RecaptchaLoaderService.ready) {
            return;
        }
        if (common_1.isPlatformBrowser(this.platformId)) {
            window.ng2recaptchaloaded = function () {
                RecaptchaLoaderService.ready.next(grecaptcha);
            };
            RecaptchaLoaderService.ready = new BehaviorSubject_1.BehaviorSubject(null);
            var script = document.createElement('script');
            script.innerHTML = '';
            var langParam = this.language ? '&hl=' + this.language : '';
            script.src = "https://www.google.com/recaptcha/api.js?render=explicit&onload=ng2recaptchaloaded" + langParam;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    };
    RecaptchaLoaderService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    RecaptchaLoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [exports.RECAPTCHA_LANGUAGE,] },] },
    ]; };
    return RecaptchaLoaderService;
}());
exports.RecaptchaLoaderService = RecaptchaLoaderService;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
exports.RECAPTCHA_SETTINGS = new core_1.InjectionToken('recaptcha-settings');


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var recaptcha_loader_service_1 = __webpack_require__("./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js");
var recaptcha_settings_1 = __webpack_require__("./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js");
var nextId = 0;
var RecaptchaComponent = (function () {
    function RecaptchaComponent(elementRef, loader, zone, settings) {
        this.elementRef = elementRef;
        this.loader = loader;
        this.zone = zone;
        this.id = "ngrecaptcha-" + nextId++;
        this.resolved = new core_1.EventEmitter();
        if (settings) {
            this.siteKey = settings.siteKey;
            this.theme = settings.theme;
            this.type = settings.type;
            this.size = settings.size;
            this.badge = settings.badge;
        }
    }
    RecaptchaComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscription = this.loader.ready.subscribe(function (grecaptcha) {
            if (grecaptcha != null) {
                _this.grecaptcha = grecaptcha;
                _this.renderRecaptcha();
            }
        });
    };
    RecaptchaComponent.prototype.ngOnDestroy = function () {
        // reset the captcha to ensure it does not leave anything behind
        // after the component is no longer needed
        this.grecaptchaReset();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * Executes the invisible recaptcha.
     * Does nothing if component's size is not set to "invisible".
     */
    RecaptchaComponent.prototype.execute = function () {
        if (this.size !== 'invisible') {
            return;
        }
        if (this.widget != null) {
            this.grecaptcha.execute(this.widget);
        }
    };
    RecaptchaComponent.prototype.reset = function () {
        if (this.widget != null) {
            if (this.grecaptcha.getResponse(this.widget)) {
                // Only emit an event in case if something would actually change.
                // That way we do not trigger "touching" of the control if someone does a "reset"
                // on a non-resolved captcha.
                this.resolved.emit(null);
            }
            this.grecaptchaReset();
        }
    };
    /** @internal */
    RecaptchaComponent.prototype.expired = function () {
        this.resolved.emit(null);
    };
    /** @internal */
    RecaptchaComponent.prototype.captchaReponseCallback = function (response) {
        this.resolved.emit(response);
    };
    /** @internal */
    RecaptchaComponent.prototype.grecaptchaReset = function () {
        var _this = this;
        if (this.widget != null) {
            this.zone.runOutsideAngular(function () { return _this.grecaptcha.reset(_this.widget); });
        }
    };
    /** @internal */
    RecaptchaComponent.prototype.renderRecaptcha = function () {
        var _this = this;
        this.widget = this.grecaptcha.render(this.elementRef.nativeElement, {
            badge: this.badge,
            callback: function (response) {
                _this.zone.run(function () { return _this.captchaReponseCallback(response); });
            },
            'expired-callback': function () {
                _this.zone.run(function () { return _this.expired(); });
            },
            sitekey: this.siteKey,
            size: this.size,
            tabindex: this.tabIndex,
            theme: this.theme,
            type: this.type,
        });
    };
    RecaptchaComponent.decorators = [
        { type: core_1.Component, args: [{
                    exportAs: 'reCaptcha',
                    selector: 're-captcha',
                    template: "",
                },] },
    ];
    /** @nocollapse */
    RecaptchaComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: recaptcha_loader_service_1.RecaptchaLoaderService, },
        { type: core_1.NgZone, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [recaptcha_settings_1.RECAPTCHA_SETTINGS,] },] },
    ]; };
    RecaptchaComponent.propDecorators = {
        'id': [{ type: core_1.Input }, { type: core_1.HostBinding, args: ['attr.id',] },],
        'siteKey': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'badge': [{ type: core_1.Input },],
        'resolved': [{ type: core_1.Output },],
    };
    return RecaptchaComponent;
}());
exports.RecaptchaComponent = RecaptchaComponent;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var recaptcha_common_module_1 = __webpack_require__("./node_modules/ng-recaptcha/recaptcha/recaptcha-common.module.js");
var recaptcha_loader_service_1 = __webpack_require__("./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js");
var recaptcha_component_1 = __webpack_require__("./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
var RecaptchaModule = (function () {
    function RecaptchaModule() {
    }
    RecaptchaModule.forRoot = function () {
        return {
            ngModule: RecaptchaModule,
            providers: [
                recaptcha_loader_service_1.RecaptchaLoaderService,
            ],
        };
    };
    RecaptchaModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [recaptcha_component_1.RecaptchaComponent],
                    imports: [recaptcha_common_module_1.RecaptchaCommonModule],
                },] },
    ];
    /** @nocollapse */
    RecaptchaModule.ctorParameters = function () { return []; };
    return RecaptchaModule;
}());
exports.RecaptchaModule = RecaptchaModule;


/***/ })

});
//# sourceMappingURL=widgets-recaptcha.module.chunk.js.map