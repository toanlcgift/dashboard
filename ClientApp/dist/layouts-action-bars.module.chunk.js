webpackJsonp(["layouts-action-bars.module"],{

/***/ "./ClientApp/app/theme/pages/default/components/forms/layouts/layouts-action-bars/layouts-action-bars.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\" appunwraptag=\"\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto\">\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\n\t\t\t\tAction Bars\n\t\t\t</h3>\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForms\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForm Layouts\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tAction Bars\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- END: Subheader -->\n<div class=\"m-content\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6\">\n\t\t\t<!--begin::Portlet-->\n\t\t\t<div class=\"m-portlet\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\tDefault Action Bar\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--begin::Form-->\n\t\t\t\t<form class=\"m-form\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"example_input_full_name\">\n\t\t\t\t\t\t\t\tFull Name:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter full name\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tPlease enter your full name\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\t\t\tEmail address:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tWe'll never share your email with anyone else\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-form__group form-group\">\n\t\t\t\t\t\t\t<label for=\"\">\n\t\t\t\t\t\t\t\tCommunication:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tSMS\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions\">\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-primary\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!--end::Form-->\n\t\t\t</div>\n\t\t\t<!--end::Portlet-->  \t\t<!--begin::Portlet-->\n\t\t\t<div class=\"m-portlet\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\tRight Action Bar\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--begin::Form-->\n\t\t\t\t<form class=\"m-form\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"example_input_full_name\">\n\t\t\t\t\t\t\t\tFull Name:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter full name\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tPlease enter your full name\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\t\t\tEmail address:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tWe'll never share your email with anyone else\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-form__group form-group\">\n\t\t\t\t\t\t\t<label for=\"\">\n\t\t\t\t\t\t\t\tCommunication:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tSMS\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions--right\">\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!--end::Form-->\n\t\t\t</div>\n\t\t\t<!--end::Portlet-->  \t\t<!--begin::Portlet-->\n\t\t\t<div class=\"m-portlet\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\tMultiple Buttons\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--begin::Form-->\n\t\t\t\t<form class=\"m-form\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"example_input_full_name\">\n\t\t\t\t\t\t\t\tFull Name:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter full name\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tPlease enter your full name\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\t\t\tEmail address:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tWe'll never share your email with anyone else\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-form__group form-group\">\n\t\t\t\t\t\t\t<label for=\"\">\n\t\t\t\t\t\t\t\tCommunication:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tSMS\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions--right\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col m--align-left\">\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col m--align-right\">\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-danger\">\n\t\t\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!--end::Form-->\n\t\t\t</div>\n\t\t\t<!--end::Portlet-->  \t\t<!--begin::Portlet-->\n\t\t\t<div class=\"m-portlet\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\tAction Button & Link\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--begin::Form-->\n\t\t\t\t<form class=\"m-form\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"example_input_full_name\">\n\t\t\t\t\t\t\t\tFull Name:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter full name\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tPlease enter your full name\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\t\t\tEmail address:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tWe'll never share your email with anyone else\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-form__group form-group\">\n\t\t\t\t\t\t\t<label for=\"\">\n\t\t\t\t\t\t\t\tCommunication:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tSMS\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions--right\">\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-primary\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<span class=\"m--margin-left-10\">\n\t\t\t\t\t\t\t\tor\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-link m--font-bold\">\n\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!--end::Form-->\n\t\t\t</div>\n\t\t\t<!--end::Portlet-->\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<!--begin::Portlet-->\n\t\t\t<div class=\"m-portlet m-portlet--space\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\tLayout With Space\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--begin::Form-->\n\t\t\t\t<form class=\"m-form\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"example_input_full_name\">\n\t\t\t\t\t\t\t\tFull Name:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter full name\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tPlease enter your full name\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\t\t\tEmail address:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tWe'll never share your email with anyone else\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-form__group form-group\">\n\t\t\t\t\t\t\t<label for=\"\">\n\t\t\t\t\t\t\t\tCommunication:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tSMS\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions--right\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col m--align-left\">\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col m--align-right\">\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-danger\">\n\t\t\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!--end::Form-->\n\t\t\t</div>\n\t\t\t<!--end::Portlet-->  \t\t<!--begin::Portlet-->\n\t\t\t<div class=\"m-portlet\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\tSolid Bar\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--begin::Form-->\n\t\t\t\t<form class=\"m-form\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"example_input_full_name\">\n\t\t\t\t\t\t\t\tFull Name:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter full name\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tPlease enter your full name\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\t\t\tEmail address:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tWe'll never share your email with anyone else\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-form__group form-group\">\n\t\t\t\t\t\t\t<label for=\"\">\n\t\t\t\t\t\t\t\tCommunication:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tSMS\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions--solid m-form__actions--right\">\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!--end::Form-->\n\t\t\t</div>\n\t\t\t<!--end::Portlet-->  \t\t<!--begin::Portlet-->\n\t\t\t<div class=\"m-portlet\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\tTop & Bottom Actions Bars\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--begin::Form-->\n\t\t\t\t<form class=\"m-form\">\n\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--top m-portlet__foot--fit\">\n\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions--solid\">\n\t\t\t\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t\t\t\t<div class=\"col m--align-left m--valign-middle\">\n\t\t\t\t\t\t\t\t\tTop Actions:\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col m--align-right\">\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-success\">\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"example_input_full_name\">\n\t\t\t\t\t\t\t\tFull Name:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter full name\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tPlease enter your full name\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\t\t\tEmail address:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tWe'll never share your email with anyone else\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-form__group form-group\">\n\t\t\t\t\t\t\t<label for=\"\">\n\t\t\t\t\t\t\t\tCommunication:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tSMS\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions--solid m-form__actions--right\">\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-success\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!--end::Form-->\n\t\t\t</div>\n\t\t\t<!--end::Portlet-->\t\t  \t\t<!--begin::Portlet-->\n\t\t\t<div class=\"m-portlet\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\tHirozontal Form Layout\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--begin::Form-->\n\t\t\t\t<form class=\"m-form\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label for=\"example-text-input\" class=\"col-3 col-form-label\">\n\t\t\t\t\t\t\t\tFull Name:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter full name\">\n\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\t\tPlease enter your full name\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label for=\"example-text-input\" class=\"col-3 col-form-label\">\n\t\t\t\t\t\t\t\tEmail address:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\t\tWe'll never share your email with anyone else\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label for=\"example-text-input\" class=\"col-3 col-form-label\">\n\t\t\t\t\t\t\t\tCommunication:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t<div class=\"m-checkbox-inline\">\n\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\tSMS\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions--solid\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-3\"></div>\n\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!--end::Form-->\n\t\t\t</div>\n\t\t\t<!--end::Portlet-->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/forms/layouts/layouts-action-bars/layouts-action-bars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsActionBarsComponent; });
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

var LayoutsActionBarsComponent = /** @class */ (function () {
    function LayoutsActionBarsComponent() {
    }
    LayoutsActionBarsComponent.prototype.ngOnInit = function () {
    };
    LayoutsActionBarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-layouts-action-bars",
            template: __webpack_require__("./ClientApp/app/theme/pages/default/components/forms/layouts/layouts-action-bars/layouts-action-bars.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], LayoutsActionBarsComponent);
    return LayoutsActionBarsComponent;
}());



/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/forms/layouts/layouts-action-bars/layouts-action-bars.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsActionBarsModule", function() { return LayoutsActionBarsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_action_bars_component__ = __webpack_require__("./ClientApp/app/theme/pages/default/components/forms/layouts/layouts-action-bars/layouts-action-bars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__ = __webpack_require__("./ClientApp/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_component__ = __webpack_require__("./ClientApp/app/theme/pages/default/default.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_5__default_component__["a" /* DefaultComponent */],
        "children": [
            {
                "path": "",
                "component": __WEBPACK_IMPORTED_MODULE_3__layouts_action_bars_component__["a" /* LayoutsActionBarsComponent */]
            }
        ]
    }
];
var LayoutsActionBarsModule = /** @class */ (function () {
    function LayoutsActionBarsModule() {
    }
    LayoutsActionBarsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__layouts_action_bars_component__["a" /* LayoutsActionBarsComponent */]
            ]
        })
    ], LayoutsActionBarsModule);
    return LayoutsActionBarsModule;
}());



/***/ })

});
//# sourceMappingURL=layouts-action-bars.module.chunk.js.map