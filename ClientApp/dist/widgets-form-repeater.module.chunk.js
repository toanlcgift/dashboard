webpackJsonp(["widgets-form-repeater.module"],{

/***/ "./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-form-repeater/widgets-form-repeater.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\" appunwraptag=\"\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto\">\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\n\t\t\t\tForm Repeater\n\t\t\t</h3>\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForms\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForm Widgets\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForm Repeater\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- END: Subheader -->\n<div class=\"m-content\">\n\t<!--begin::Portlet-->\n\t<div class=\"m-portlet\">\n\t\t<div class=\"m-portlet__head\">\n\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\tForm Repeater Example\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--begin::Form-->\n\t\t<form class=\"m-form\">\n\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t<div class=\"m-form__section m-form__section--first\">\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\n\t\t\t\t\t\t\tFull Name:\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter full name\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tPlease enter your full name\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\n\t\t\t\t\t\t\tEmail address:\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\tWe'll never share your email with anyone else\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\n\t\t\t\t\t\t\tContact\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-chain\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Phone number\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-form__group form-group row\">\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\n\t\t\t\t\t\t\tCommunication:\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<div class=\"col-xl-8 col-lg-8 col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<div class=\"m-checkbox-inline\">\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tSMS\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-form__seperator m-form__seperator--dashed  m-form__seperator--space m--margin-bottom-40\"></div>\n\t\t\t\t\t<div id=\"m_repeater_1\">\n\t\t\t\t\t\t<div class=\"form-group  m-form__group row\" id=\"m_repeater_1\">\n\t\t\t\t\t\t\t<label  class=\"col-lg-2 col-form-label\">\n\t\t\t\t\t\t\t\tContacts:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div data-repeater-list=\"\" class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t<div data-repeater-item class=\"form-group m-form__group row align-items-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group m-form__group--inline\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__label\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\tName:\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter full name\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-md-none m--margin-bottom-10\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group m-form__group--inline\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__label\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"m-label m-label--single\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tNumber:\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter contact number\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-md-none m--margin-bottom-10\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-radio-inline\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox m-checkbox--state-success\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\tPrimary\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<div data-repeater-delete=\"\" class=\"btn-sm btn btn-danger m-btn m-btn--icon m-btn--pill\">\n\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-trash-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-form__group form-group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\"></label>\n\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t<div data-repeater-create=\"\" class=\"btn btn btn-sm btn-brand m-btn m-btn--icon m-btn--pill m-btn--wide\">\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\tAdd\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t<div class=\"m-form__actions m-form__actions\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-2\"></div>\n\t\t\t\t\t\t<div class=\"col-lg-2\">\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-success\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t<!--end::Form-->\n\t</div>\n\t<!--end::Portlet-->  <!--begin::Portlet-->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-6\">\n\t\t\t<div class=\"m-portlet\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\tForm Repeater Example\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--begin::Form-->\n\t\t\t\t<form class=\"m-form\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"m-form__section m-form__section--first\">\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\n\t\t\t\t\t\t\t\t\tFull Name:\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter full name\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\t\t\tPlease enter your full name\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\n\t\t\t\t\t\t\t\t\tEmail address:\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\t\t\tWe'll never share your email with anyone else\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\n\t\t\t\t\t\t\t\t\tCommunication:\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-xl-8\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-checkbox-inline m--padding-top-3\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\tSMS\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\t\t\t\tCredit Card\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" name=\"creditcard\" placeholder=\"Enter card number\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-credit-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"m_repeater_2\">\n\t\t\t\t\t\t\t\t<div class=\"form-group  m-form__group row\">\n\t\t\t\t\t\t\t\t\t<label  class=\"col-lg-3 col-form-label\">\n\t\t\t\t\t\t\t\t\t\tContact:\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div data-repeater-list=\"\" class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<div data-repeater-item class=\"m--margin-bottom-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-danger\" placeholder=\"Enter telephone\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-danger m-btn m-btn--icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-close\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t\t<div data-repeater-create=\"\" class=\"btn btn btn-warning m-btn m-btn--icon\">\n\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\tAdd\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\"></div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!--end::Form-->\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-6\">\n\t\t\t<div class=\"m-portlet\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\tForm Repeater Example\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--begin::Form-->\n\t\t\t\t<form class=\"m-form\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"m-form__section m-form__section--first\">\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\n\t\t\t\t\t\t\t\t\tFull Name:\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter full name\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\t\t\tPlease enter your full name\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\n\t\t\t\t\t\t\t\t\tEmail address:\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\t\t\tWe'll never share your email with anyone else\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\n\t\t\t\t\t\t\t\t\tCommunication:\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-xl-8\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-checkbox-inline m--padding-top-3\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\tSMS\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\t\t\t\tCredit Card\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" name=\"creditcard\" placeholder=\"Enter card number\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-credit-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"m_repeater_3\">\n\t\t\t\t\t\t\t\t<div class=\"form-group  m-form__group row\">\n\t\t\t\t\t\t\t\t\t<label  class=\"col-lg-3 col-form-label\">\n\t\t\t\t\t\t\t\t\t\tContact:\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div data-repeater-list=\"\" class=\"col-lg-9\">\n\t\t\t\t\t\t\t\t\t\t<div data-repeater-item class=\"row m--margin-bottom-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-danger\" placeholder=\"Phone\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-danger\" placeholder=\"Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-repeater-delete=\"\" class=\"btn btn-danger m-btn m-btn--icon m-btn--icon-only\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-remove\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t\t<div data-repeater-create=\"\" class=\"btn btn btn-primary m-btn m-btn--icon\">\n\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\tAdd\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\"></div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-accent m-btn m-btn--pill m-btn--air\">\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary m-btn m-btn--pill m-btn--air\">\n\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!--end::Form-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--end::Portlet-->\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-form-repeater/widgets-form-repeater.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsFormRepeaterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__ = __webpack_require__("./ClientApp/app/_services/script-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetsFormRepeaterComponent = /** @class */ (function () {
    function WidgetsFormRepeaterComponent(_script) {
        this._script = _script;
    }
    WidgetsFormRepeaterComponent.prototype.ngOnInit = function () {
    };
    WidgetsFormRepeaterComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-form-repeater', ['assets/demo/default/custom/components/forms/widgets/form-repeater.js']);
    };
    WidgetsFormRepeaterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-widgets-form-repeater",
            template: __webpack_require__("./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-form-repeater/widgets-form-repeater.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__["a" /* ScriptLoaderService */]])
    ], WidgetsFormRepeaterComponent);
    return WidgetsFormRepeaterComponent;
}());



/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-form-repeater/widgets-form-repeater.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsFormRepeaterModule", function() { return WidgetsFormRepeaterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_form_repeater_component__ = __webpack_require__("./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-form-repeater/widgets-form-repeater.component.ts");
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
                "component": __WEBPACK_IMPORTED_MODULE_3__widgets_form_repeater_component__["a" /* WidgetsFormRepeaterComponent */]
            }
        ]
    }
];
var WidgetsFormRepeaterModule = /** @class */ (function () {
    function WidgetsFormRepeaterModule() {
    }
    WidgetsFormRepeaterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__widgets_form_repeater_component__["a" /* WidgetsFormRepeaterComponent */]
            ]
        })
    ], WidgetsFormRepeaterModule);
    return WidgetsFormRepeaterModule;
}());



/***/ })

});
//# sourceMappingURL=widgets-form-repeater.module.chunk.js.map