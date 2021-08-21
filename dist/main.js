/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/global.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/global.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Light.ttf */ "./src/views/fonts/Roboto-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Medium.ttf */ "./src/views/fonts/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* roboto-300 - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 300;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  }\n  /* roboto-700 - latin */\n  @font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 500;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n  }\n\n:root {\n    --white: #fff;\n    --black: #000;\n    --light-grey: #fafafa;\n    --dark-grey: #ececec;\n    --line-grey: #ddd;\n    --blue: #2962FF;\n    --pale-blue: #82B1FF;\n    --palest-blue: #BBDEFB;\n}\n\nbody {\n  user-select: none;\n  font-family: 'Roboto';\n  font-weight: 300;\n  font-size: 14px;\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 5vh auto;\n  grid-template-columns: 1fr 3fr;\n}\n\n.clickable {\n  cursor: pointer;\n  border-radius: 3px;\n  border-style: solid;\n}\n\n.invisible {\n  visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/views/stylesheets/global.css"],"names":[],"mappings":"AAAA,uBAAuB;AACvB;IACI,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,4CAAqC;EACvC;EACA,uBAAuB;EACvB;IACE,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB;EACF;;AAEF;IACI,aAAa;IACb,aAAa;IACb,qBAAqB;IACrB,oBAAoB;IACpB,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["/* roboto-300 - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 300;\n    src: url('../fonts/Roboto-Light.ttf');\n  }\n  /* roboto-700 - latin */\n  @font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 500;\n    src: url('../fonts/Roboto-Medium.ttf')\n  }\n\n:root {\n    --white: #fff;\n    --black: #000;\n    --light-grey: #fafafa;\n    --dark-grey: #ececec;\n    --line-grey: #ddd;\n    --blue: #2962FF;\n    --pale-blue: #82B1FF;\n    --palest-blue: #BBDEFB;\n}\n\nbody {\n  user-select: none;\n  font-family: 'Roboto';\n  font-weight: 300;\n  font-size: 14px;\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 5vh auto;\n  grid-template-columns: 1fr 3fr;\n}\n\n.clickable {\n  cursor: pointer;\n  border-radius: 3px;\n  border-style: solid;\n}\n\n.invisible {\n  visibility: hidden;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/header.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/header.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n    grid-row: 1;\n    grid-column: 1 / span 2;\n    background-color: var(--blue);\n}", "",{"version":3,"sources":["webpack://./src/views/stylesheets/header.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,uBAAuB;IACvB,6BAA6B;AACjC","sourcesContent":[".header {\n    grid-row: 1;\n    grid-column: 1 / span 2;\n    background-color: var(--blue);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/main.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/main.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main {\n    grid-row: 2;\n    grid-column: 2;\n    min-height: 95vh;\n}", "",{"version":3,"sources":["webpack://./src/views/stylesheets/main.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,cAAc;IACd,gBAAgB;AACpB","sourcesContent":[".main {\n    grid-row: 2;\n    grid-column: 2;\n    min-height: 95vh;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/popup.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/popup.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popup-film {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.transparent-film {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    opacity: 0.5;\n    background-color: black;\n    z-index: 0;\n}\n\n.popup {\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n  position: fixed;\n  border: 0px solid black;\n  border-radius: 10px;\n  background-color: white;\n  width: 20vw;\n}\n\n.popup > * {\n  height: 20px;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.popup > .popup-header {\n  background-color: var(--light-grey);  \n  font-size: 16px;\n  font-weight: bold;\n}\n\n.popup > .popup-main > label{\n  display: block;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.popup > .popup-main > input{\n  display: block;\n  border-radius: 5px;\n  border: 1px var(--line-grey) solid;\n  padding-left: 5px;\n  width: 95%;\n}\n\n.popup > .buttons {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.popup > .buttons > * {\n  border: 0.5px var(--line-grey) solid;\n  padding: 15px 10px;\n  line-height: 1px;\n  font-weight: bold;\n  font-family: Roboto;\n}\n\n.popup > .buttons > .cancel {\n  margin-right: 8px;\n  background-color: --var(--light-grey);\n}\n\n.popup > .buttons > .confirm {\n  background-color: var(--blue);\n  color: white;\n  border-color: var(--blue);\n}", "",{"version":3,"sources":["webpack://./src/views/stylesheets/popup.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,eAAe;IACf,UAAU;IACV,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,uBAAuB;IACvB,UAAU;AACd;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,kCAAkC;EAClC,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,qCAAqC;AACvC;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,yBAAyB;AAC3B","sourcesContent":[".popup-film {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.transparent-film {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    opacity: 0.5;\n    background-color: black;\n    z-index: 0;\n}\n\n.popup {\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n  position: fixed;\n  border: 0px solid black;\n  border-radius: 10px;\n  background-color: white;\n  width: 20vw;\n}\n\n.popup > * {\n  height: 20px;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.popup > .popup-header {\n  background-color: var(--light-grey);  \n  font-size: 16px;\n  font-weight: bold;\n}\n\n.popup > .popup-main > label{\n  display: block;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.popup > .popup-main > input{\n  display: block;\n  border-radius: 5px;\n  border: 1px var(--line-grey) solid;\n  padding-left: 5px;\n  width: 95%;\n}\n\n.popup > .buttons {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.popup > .buttons > * {\n  border: 0.5px var(--line-grey) solid;\n  padding: 15px 10px;\n  line-height: 1px;\n  font-weight: bold;\n  font-family: Roboto;\n}\n\n.popup > .buttons > .cancel {\n  margin-right: 8px;\n  background-color: --var(--light-grey);\n}\n\n.popup > .buttons > .confirm {\n  background-color: var(--blue);\n  color: white;\n  border-color: var(--blue);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/reset.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/reset.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ntextarea:focus, input:focus{\n    outline: none;\n}", "",{"version":3,"sources":["webpack://./src/views/stylesheets/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;AACA;IACI,aAAa;AACjB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ntextarea:focus, input:focus{\n    outline: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/sidebar.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/sidebar.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sidebar {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    grid-row: 2;\n    grid-column: 1;\n    background-color: var(--light-grey);\n    min-height: 95vh; /* Try to find a way to not hardcode this*/\n}\n\n.sidebar > * {\n    margin: 5px 0;\n    text-align: center;\n}\n\n.sidebar .clickable:hover {\n  background-color: var(--dark-grey);\n}\n\n.projects-header {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-content: center;\n}\n\n.projects-header > h2 {\n    display: inline;\n    font-weight: 500;\n}\n\n.plus {\n    font-weight: 300;\n    font-size: 18px;\n    padding: 3px;\n    position: absolute;\n    align-self: flex-end;\n    margin-right: 10px;\n}\n\n.project-entry {\n    width: 50%;\n    padding: 10px;\n    align-self: center;\n}", "",{"version":3,"sources":["webpack://./src/views/stylesheets/sidebar.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,wBAAwB;IACxB,2BAA2B;IAC3B,oBAAoB;IACpB,WAAW;IACX,cAAc;IACd,mCAAmC;IACnC,gBAAgB,EAAE,0CAA0C;AAChE;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,kBAAkB;AACtB","sourcesContent":[".sidebar {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    grid-row: 2;\n    grid-column: 1;\n    background-color: var(--light-grey);\n    min-height: 95vh; /* Try to find a way to not hardcode this*/\n}\n\n.sidebar > * {\n    margin: 5px 0;\n    text-align: center;\n}\n\n.sidebar .clickable:hover {\n  background-color: var(--dark-grey);\n}\n\n.projects-header {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-content: center;\n}\n\n.projects-header > h2 {\n    display: inline;\n    font-weight: 500;\n}\n\n.plus {\n    font-weight: 300;\n    font-size: 18px;\n    padding: 3px;\n    position: absolute;\n    align-self: flex-end;\n    margin-right: 10px;\n}\n\n.project-entry {\n    width: 50%;\n    padding: 10px;\n    align-self: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/views/stylesheets/global.css":
/*!******************************************!*\
  !*** ./src/views/stylesheets/global.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/global.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/views/stylesheets/header.css":
/*!******************************************!*\
  !*** ./src/views/stylesheets/header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/views/stylesheets/main.css":
/*!****************************************!*\
  !*** ./src/views/stylesheets/main.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/views/stylesheets/popup.css":
/*!*****************************************!*\
  !*** ./src/views/stylesheets/popup.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/views/stylesheets/reset.css":
/*!*****************************************!*\
  !*** ./src/views/stylesheets/reset.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/views/stylesheets/sidebar.css":
/*!*******************************************!*\
  !*** ./src/views/stylesheets/sidebar.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/stylesheets/sidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controllers/displayController.js":
/*!**********************************************!*\
  !*** ./src/controllers/displayController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* Controls DOM interaction */
const displayController = (() => {
    const handlers = {
        newProjectPopup: () => document.querySelector('.popup-film').classList.remove('invisible'),
        cancelNewProject: () => document.querySelector('.popup-film').classList.add('invisible'),
        addNewProject: newProject => {
            newProject.value = "";
            document.querySelector('.popup-film').classList.add('invisible');
        }
    }

    const _createProjectComponent = project => {
        const projectDOM = document.createElement("div");
        projectDOM.classList.add("project");
        projectDOM.classList.add("clickable");
        
        const nameDOM = document.createElement("span");
        nameDOM.classList.add("name");
        nameDOM.innerText = project.name;
        
        projectDOM.appendChild(nameDOM);
        return projectDOM;
    }

    const renderProjects = projects => {
        const components = projects.map(project => _createProjectComponent(project));
        const projectsDOM = document.querySelector('.sidebar > .projects');
        projectsDOM.innerHTML = "";
        components.forEach(component => {
            projectsDOM.appendChild(component);
        });
    }

    return Object.assign({renderProjects}, handlers);
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);

/***/ }),

/***/ "./src/controllers/localStorageController.js":
/*!***************************************************!*\
  !*** ./src/controllers/localStorageController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const localStorageController = (() => {
    // Initialises projects if it doens't exist in localStorage
    const getProjects = () => {
        if(!localStorage.getItem("projects"))
            localStorage.setItem("projects", "[]");
        return JSON.parse(localStorage.getItem("projects"));
    }

    // Converts an object to JSON then sets it on localStorage
    const setObjectToLocalStorage = (key, object) => {
        localStorage.setItem(key, JSON.stringify(object));
    }

    const addNewProject = project => {
        const projects = getProjects();
        projects.push(project);
        setObjectToLocalStorage("projects", projects);
    }

    return {addNewProject, getProjects};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageController);

/***/ }),

/***/ "./src/controllers/projectController.js":
/*!**********************************************!*\
  !*** ./src/controllers/projectController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Project */ "./src/models/Project.js");
/* harmony import */ var _localStorageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageController */ "./src/controllers/localStorageController.js");



const projectController = (() => {
    const addNewProject = name => {
        const newProject = (0,_models_Project__WEBPACK_IMPORTED_MODULE_0__.default)(name);
        _localStorageController__WEBPACK_IMPORTED_MODULE_1__.default.addNewProject(newProject);
    }
    const getProjects = () => _localStorageController__WEBPACK_IMPORTED_MODULE_1__.default.getProjects();

    return {addNewProject, getProjects};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectController);

/***/ }),

/***/ "./src/models/Project.js":
/*!*******************************!*\
  !*** ./src/models/Project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/models/Todo.js");


const Project = (name) => {
    // const methods = {
    //     getName: () => name,
    //     setName: newName => name = newName
    // }

    // return Object.assign({}, methods);
    return {name};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/models/Todo.js":
/*!****************************!*\
  !*** ./src/models/Todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Todo = (title, desc, dueDate, priority) => {
    // const getters = {
    //     getTitle: () => title,
    //     getDesc: () => desc,
    //     getDueDate: () => dueDate,
    //     getPriority: () => priority
    // }

    // const setters = {
    //     setTitle: newTitle => title = newTitle,
    //     setDesc: newDesc => desc = newDesc,
    //     setDueDate: newDueDate => dueDate = newDueDate,
    //     setPriority: newPriority => priority = newPriority
    // }

    // const methods = Object.assign({}, getters, setters);
    
    return {title, desc, dueDate, priority};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/views/fonts/Roboto-Light.ttf":
/*!******************************************!*\
  !*** ./src/views/fonts/Roboto-Light.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8be2d1487420548b3b8d.ttf";

/***/ }),

/***/ "./src/views/fonts/Roboto-Medium.ttf":
/*!*******************************************!*\
  !*** ./src/views/fonts/Roboto-Medium.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7429a63c09f79a1760b0.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_stylesheets_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/stylesheets/reset.css */ "./src/views/stylesheets/reset.css");
/* harmony import */ var _views_stylesheets_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/stylesheets/global.css */ "./src/views/stylesheets/global.css");
/* harmony import */ var _views_stylesheets_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/stylesheets/header.css */ "./src/views/stylesheets/header.css");
/* harmony import */ var _views_stylesheets_sidebar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/stylesheets/sidebar.css */ "./src/views/stylesheets/sidebar.css");
/* harmony import */ var _views_stylesheets_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/stylesheets/main.css */ "./src/views/stylesheets/main.css");
/* harmony import */ var _views_stylesheets_popup_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/stylesheets/popup.css */ "./src/views/stylesheets/popup.css");
/* harmony import */ var _controllers_displayController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/displayController */ "./src/controllers/displayController.js");
/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/projectController */ "./src/controllers/projectController.js");










(() => {
    _controllers_displayController__WEBPACK_IMPORTED_MODULE_6__.default.renderProjects(_controllers_projectController__WEBPACK_IMPORTED_MODULE_7__.default.getProjects());
    
    document.querySelector('.projects-header .plus')
    .addEventListener('click', () => {
        _controllers_displayController__WEBPACK_IMPORTED_MODULE_6__.default.newProjectPopup();
    });

    document.querySelector('.popup-film .cancel')
    .addEventListener('click', () => {
        _controllers_displayController__WEBPACK_IMPORTED_MODULE_6__.default.cancelNewProject();
    });

    document.querySelector('.popup-film .confirm')
    .addEventListener('click', () => {
        const newProject = document.getElementById('new-project-name');
        _controllers_projectController__WEBPACK_IMPORTED_MODULE_7__.default.addNewProject(newProject.value);
        _controllers_displayController__WEBPACK_IMPORTED_MODULE_6__.default.addNewProject(newProject);
        
        const projects = _controllers_projectController__WEBPACK_IMPORTED_MODULE_7__.default.getProjects();
        _controllers_displayController__WEBPACK_IMPORTED_MODULE_6__.default.renderProjects(projects);
    });
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQ087QUFDdEcsNENBQTRDLG9JQUE0QztBQUN4Riw0Q0FBNEMsc0lBQTZDO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsZ0ZBQWdGLDRCQUE0Qix5QkFBeUIsdUJBQXVCLDJEQUEyRCxLQUFLLDRDQUE0Qyw0QkFBNEIseUJBQXlCLHVCQUF1QiwrREFBK0QsV0FBVyxvQkFBb0Isb0JBQW9CLDRCQUE0QiwyQkFBMkIsd0JBQXdCLHNCQUFzQiwyQkFBMkIsNkJBQTZCLEdBQUcsVUFBVSxzQkFBc0IsMEJBQTBCLHFCQUFxQixvQkFBb0IsR0FBRyxjQUFjLGtCQUFrQixpQ0FBaUMsbUNBQW1DLEdBQUcsZ0JBQWdCLG9CQUFvQix1QkFBdUIsd0JBQXdCLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLE9BQU8sMEdBQTBHLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxnRUFBZ0UsNEJBQTRCLHlCQUF5Qix1QkFBdUIsNENBQTRDLEtBQUssNENBQTRDLDRCQUE0Qix5QkFBeUIsdUJBQXVCLGlEQUFpRCxXQUFXLG9CQUFvQixvQkFBb0IsNEJBQTRCLDJCQUEyQix3QkFBd0Isc0JBQXNCLDJCQUEyQiw2QkFBNkIsR0FBRyxVQUFVLHNCQUFzQiwwQkFBMEIscUJBQXFCLG9CQUFvQixHQUFHLGNBQWMsa0JBQWtCLGlDQUFpQyxtQ0FBbUMsR0FBRyxnQkFBZ0Isb0JBQW9CLHVCQUF1Qix3QkFBd0IsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsbUJBQW1CO0FBQ3QxRTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnZDO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxtREFBbUQsa0JBQWtCLDhCQUE4QixvQ0FBb0MsR0FBRyxPQUFPLG1HQUFtRyxVQUFVLFlBQVksYUFBYSxtQ0FBbUMsa0JBQWtCLDhCQUE4QixvQ0FBb0MsR0FBRyxtQkFBbUI7QUFDcGE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGtCQUFrQixxQkFBcUIsdUJBQXVCLEdBQUcsT0FBTyxpR0FBaUcsVUFBVSxVQUFVLFlBQVksaUNBQWlDLGtCQUFrQixxQkFBcUIsdUJBQXVCLEdBQUcsbUJBQW1CO0FBQy9XO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHVEQUF1RCxvQkFBb0Isa0JBQWtCLG1CQUFtQixzQkFBc0IsaUJBQWlCLDhCQUE4QiwwQkFBMEIsR0FBRyx1QkFBdUIsa0JBQWtCLG1CQUFtQixzQkFBc0IsbUJBQW1CLDhCQUE4QixpQkFBaUIsR0FBRyxZQUFZLGtCQUFrQixvQ0FBb0Msb0JBQW9CLDRCQUE0Qix3QkFBd0IsNEJBQTRCLGdCQUFnQixHQUFHLGdCQUFnQixpQkFBaUIsa0JBQWtCLHdCQUF3QixHQUFHLDRCQUE0QiwwQ0FBMEMsb0JBQW9CLHNCQUFzQixHQUFHLGlDQUFpQyxtQkFBbUIsc0JBQXNCLHdCQUF3QixHQUFHLGlDQUFpQyxtQkFBbUIsdUJBQXVCLHVDQUF1QyxzQkFBc0IsZUFBZSxHQUFHLHVCQUF1QixrQkFBa0IsOEJBQThCLEdBQUcsMkJBQTJCLHlDQUF5Qyx1QkFBdUIscUJBQXFCLHNCQUFzQix3QkFBd0IsR0FBRyxpQ0FBaUMsc0JBQXNCLDBDQUEwQyxHQUFHLGtDQUFrQyxrQ0FBa0MsaUJBQWlCLDhCQUE4QixHQUFHLE9BQU8sa0dBQWtHLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLHVDQUF1QyxvQkFBb0Isa0JBQWtCLG1CQUFtQixzQkFBc0IsaUJBQWlCLDhCQUE4QiwwQkFBMEIsR0FBRyx1QkFBdUIsa0JBQWtCLG1CQUFtQixzQkFBc0IsbUJBQW1CLDhCQUE4QixpQkFBaUIsR0FBRyxZQUFZLGtCQUFrQixvQ0FBb0Msb0JBQW9CLDRCQUE0Qix3QkFBd0IsNEJBQTRCLGdCQUFnQixHQUFHLGdCQUFnQixpQkFBaUIsa0JBQWtCLHdCQUF3QixHQUFHLDRCQUE0QiwwQ0FBMEMsb0JBQW9CLHNCQUFzQixHQUFHLGlDQUFpQyxtQkFBbUIsc0JBQXNCLHdCQUF3QixHQUFHLGlDQUFpQyxtQkFBbUIsdUJBQXVCLHVDQUF1QyxzQkFBc0IsZUFBZSxHQUFHLHVCQUF1QixrQkFBa0IsOEJBQThCLEdBQUcsMkJBQTJCLHlDQUF5Qyx1QkFBdUIscUJBQXFCLHNCQUFzQix3QkFBd0IsR0FBRyxpQ0FBaUMsc0JBQXNCLDBDQUEwQyxHQUFHLGtDQUFrQyxrQ0FBa0MsaUJBQWlCLDhCQUE4QixHQUFHLG1CQUFtQjtBQUM5akg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsK29CQUErb0IsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyxnSkFBZ0osbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRywyREFBMkQsZ0JBQWdCLGtCQUFrQixHQUFHLFNBQVMsOEJBQThCLHNCQUFzQixHQUFHLDhCQUE4QixvQkFBb0IsR0FBRyxPQUFPLG9HQUFvRyxNQUFNLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSwrbkJBQStuQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLGdKQUFnSixtQkFBbUIsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFVBQVUscUJBQXFCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLDJEQUEyRCxnQkFBZ0Isa0JBQWtCLEdBQUcsU0FBUyw4QkFBOEIsc0JBQXNCLEdBQUcsOEJBQThCLG9CQUFvQixHQUFHLG1CQUFtQjtBQUM1ekY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esb0RBQW9ELG9CQUFvQiwrQkFBK0Isa0NBQWtDLDJCQUEyQixrQkFBa0IscUJBQXFCLDBDQUEwQyx3QkFBd0IsOENBQThDLGtCQUFrQixvQkFBb0IseUJBQXlCLEdBQUcsK0JBQStCLHVDQUF1QyxHQUFHLHNCQUFzQixvQkFBb0IsK0JBQStCLDhCQUE4Qiw0QkFBNEIsR0FBRywyQkFBMkIsc0JBQXNCLHVCQUF1QixHQUFHLFdBQVcsdUJBQXVCLHNCQUFzQixtQkFBbUIseUJBQXlCLDJCQUEyQix5QkFBeUIsR0FBRyxvQkFBb0IsaUJBQWlCLG9CQUFvQix5QkFBeUIsR0FBRyxPQUFPLG9HQUFvRyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLHlCQUF5QixPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxvQ0FBb0Msb0JBQW9CLCtCQUErQixrQ0FBa0MsMkJBQTJCLGtCQUFrQixxQkFBcUIsMENBQTBDLHdCQUF3Qiw4Q0FBOEMsa0JBQWtCLG9CQUFvQix5QkFBeUIsR0FBRywrQkFBK0IsdUNBQXVDLEdBQUcsc0JBQXNCLG9CQUFvQiwrQkFBK0IsOEJBQThCLDRCQUE0QixHQUFHLDJCQUEyQixzQkFBc0IsdUJBQXVCLEdBQUcsV0FBVyx1QkFBdUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsMkJBQTJCLHlCQUF5QixHQUFHLG9CQUFvQixpQkFBaUIsb0JBQW9CLHlCQUF5QixHQUFHLG1CQUFtQjtBQUM3dkU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDakVhOztBQUViLGtDQUFrQzs7QUFFbEMsOEJBQThCOztBQUU5QixrREFBa0QsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRDs7QUFFN1MsdUNBQXVDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLG9CQUFvQjs7QUFFeksseUNBQXlDLDBHQUEwRyx3QkFBd0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLE1BQU0sd0JBQXdCLCtCQUErQixhQUFhLHFCQUFxQix1Q0FBdUMsY0FBYyxXQUFXLFlBQVksVUFBVSxNQUFNLG1EQUFtRCxVQUFVLHNCQUFzQjs7QUFFbmYsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ25DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSixvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBMEc7QUFDMUc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxvRkFBTzs7OztBQUlvRDtBQUM1RSxPQUFPLGlFQUFlLG9GQUFPLElBQUksMkZBQWMsR0FBRywyRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUEwRztBQUMxRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG9GQUFPOzs7O0FBSW9EO0FBQzVFLE9BQU8saUVBQWUsb0ZBQU8sSUFBSSwyRkFBYyxHQUFHLDJGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQXdHO0FBQ3hHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsa0ZBQU87Ozs7QUFJa0Q7QUFDMUUsT0FBTyxpRUFBZSxrRkFBTyxJQUFJLHlGQUFjLEdBQUcseUZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBeUc7QUFDekc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUltRDtBQUMzRSxPQUFPLGlFQUFlLG1GQUFPLElBQUksMEZBQWMsR0FBRywwRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF5RztBQUN6RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSW1EO0FBQzNFLE9BQU8saUVBQWUsbUZBQU8sSUFBSSwwRkFBYyxHQUFHLDBGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQTJHO0FBQzNHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMscUZBQU87Ozs7QUFJcUQ7QUFDN0UsT0FBTyxpRUFBZSxxRkFBTyxJQUFJLDRGQUFjLEdBQUcsNEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2hHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSwwQkFBMEIsZUFBZTtBQUN6QyxDQUFDOztBQUVELGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUNwQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUVBQWUsc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJFO0FBQ3VCOztBQUU5RDtBQUNBO0FBQ0EsMkJBQTJCLHdEQUFPO0FBQ2xDLFFBQVEsMEVBQW9DO0FBQzVDO0FBQ0EsOEJBQThCLHdFQUFrQzs7QUFFaEUsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUNiUDs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUIsWUFBWTtBQUNaOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDWnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkM7QUFDQSxZQUFZO0FBQ1o7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJzQztBQUNDO0FBQ0E7QUFDQztBQUNIO0FBQ0M7O0FBRTBCO0FBQ0Q7O0FBRS9EO0FBQ0EsSUFBSSxrRkFBZ0MsQ0FBQywrRUFBNkI7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRkFBaUM7QUFDekMsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSxvRkFBa0M7QUFDMUMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlGQUErQjtBQUN2QyxRQUFRLGlGQUErQjtBQUN2QztBQUNBLHlCQUF5QiwrRUFBNkI7QUFDdEQsUUFBUSxrRkFBZ0M7QUFDeEMsS0FBSztBQUNMLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3ZpZXdzL3N0eWxlc2hlZXRzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdmlld3Mvc3R5bGVzaGVldHMvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy92aWV3cy9zdHlsZXNoZWV0cy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy92aWV3cy9zdHlsZXNoZWV0cy9wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdmlld3Mvc3R5bGVzaGVldHMvcmVzZXQuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3ZpZXdzL3N0eWxlc2hlZXRzL3NpZGViYXIuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy92aWV3cy9zdHlsZXNoZWV0cy9nbG9iYWwuY3NzPzNhYzciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdmlld3Mvc3R5bGVzaGVldHMvaGVhZGVyLmNzcz82YmVmIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3ZpZXdzL3N0eWxlc2hlZXRzL21haW4uY3NzPzhkOGMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdmlld3Mvc3R5bGVzaGVldHMvcG9wdXAuY3NzPzZkZTAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdmlld3Mvc3R5bGVzaGVldHMvcmVzZXQuY3NzPzMzODAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdmlld3Mvc3R5bGVzaGVldHMvc2lkZWJhci5jc3M/ZjIwMCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NvbnRyb2xsZXJzL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NvbnRyb2xsZXJzL2xvY2FsU3RvcmFnZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29udHJvbGxlcnMvcHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kZWxzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kZWxzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcm9ib3RvLTMwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICB9XFxuICAvKiByb2JvdG8tNzAwIC0gbGF0aW4gKi9cXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpXFxuICB9XFxuXFxuOnJvb3Qge1xcbiAgICAtLXdoaXRlOiAjZmZmO1xcbiAgICAtLWJsYWNrOiAjMDAwO1xcbiAgICAtLWxpZ2h0LWdyZXk6ICNmYWZhZmE7XFxuICAgIC0tZGFyay1ncmV5OiAjZWNlY2VjO1xcbiAgICAtLWxpbmUtZ3JleTogI2RkZDtcXG4gICAgLS1ibHVlOiAjMjk2MkZGO1xcbiAgICAtLXBhbGUtYmx1ZTogIzgyQjFGRjtcXG4gICAgLS1wYWxlc3QtYmx1ZTogI0JCREVGQjtcXG59XFxuXFxuYm9keSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDV2aCBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4uY2xpY2thYmxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbi5pbnZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3Mvc3R5bGVzaGVldHMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx1QkFBdUI7QUFDdkI7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0Q0FBcUM7RUFDdkM7RUFDQSx1QkFBdUI7RUFDdkI7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjtFQUNGOztBQUVGO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHJvYm90by0zMDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL1JvYm90by1MaWdodC50dGYnKTtcXG4gIH1cXG4gIC8qIHJvYm90by03MDAgLSBsYXRpbiAqL1xcbiAgQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvLU1lZGl1bS50dGYnKVxcbiAgfVxcblxcbjpyb290IHtcXG4gICAgLS13aGl0ZTogI2ZmZjtcXG4gICAgLS1ibGFjazogIzAwMDtcXG4gICAgLS1saWdodC1ncmV5OiAjZmFmYWZhO1xcbiAgICAtLWRhcmstZ3JleTogI2VjZWNlYztcXG4gICAgLS1saW5lLWdyZXk6ICNkZGQ7XFxuICAgIC0tYmx1ZTogIzI5NjJGRjtcXG4gICAgLS1wYWxlLWJsdWU6ICM4MkIxRkY7XFxuICAgIC0tcGFsZXN0LWJsdWU6ICNCQkRFRkI7XFxufVxcblxcbmJvZHkge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmggYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLmNsaWNrYWJsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9zdHlsZXNoZWV0cy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2Qiw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBtaW4taGVpZ2h0OiA5NXZoO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3Mvc3R5bGVzaGVldHMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgbWluLWhlaWdodDogOTV2aDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvcHVwLWZpbG0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udHJhbnNwYXJlbnQtZmlsbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgei1pbmRleDogMDtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjB2dztcXG59XFxuXFxuLnBvcHVwID4gKiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnBvcHVwID4gLnBvcHVwLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTsgIFxcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wb3B1cCA+IC5wb3B1cC1tYWluID4gbGFiZWx7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnBvcHVwID4gLnBvcHVwLW1haW4gPiBpbnB1dHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggdmFyKC0tbGluZS1ncmV5KSBzb2xpZDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLnBvcHVwID4gLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wb3B1cCA+IC5idXR0b25zID4gKiB7XFxuICBib3JkZXI6IDAuNXB4IHZhcigtLWxpbmUtZ3JleSkgc29saWQ7XFxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG4ucG9wdXAgPiAuYnV0dG9ucyA+IC5jYW5jZWwge1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAtLXZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4ucG9wdXAgPiAuYnV0dG9ucyA+IC5jb25maXJtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL3N0eWxlc2hlZXRzL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3B1cC1maWxtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRyYW5zcGFyZW50LWZpbG0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcblxcbi5wb3B1cCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDIwdnc7XFxufVxcblxcbi5wb3B1cCA+ICoge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wb3B1cCA+IC5wb3B1cC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7ICBcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9wdXAgPiAucG9wdXAtbWFpbiA+IGxhYmVse1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wb3B1cCA+IC5wb3B1cC1tYWluID4gaW5wdXR7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHZhcigtLWxpbmUtZ3JleSkgc29saWQ7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbi5wb3B1cCA+IC5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucG9wdXAgPiAuYnV0dG9ucyA+ICoge1xcbiAgYm9yZGVyOiAwLjVweCB2YXIoLS1saW5lLWdyZXkpIHNvbGlkO1xcbiAgcGFkZGluZzogMTVweCAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDFweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLnBvcHVwID4gLmJ1dHRvbnMgPiAuY2FuY2VsIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogLS12YXIoLS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnBvcHVwID4gLmJ1dHRvbnMgPiAuY29uZmlybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxudGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3Mvc3R5bGVzaGVldHMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7QUFDQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG50ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBtaW4taGVpZ2h0OiA5NXZoOyAvKiBUcnkgdG8gZmluZCBhIHdheSB0byBub3QgaGFyZGNvZGUgdGhpcyovXFxufVxcblxcbi5zaWRlYmFyID4gKiB7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXIgLmNsaWNrYWJsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGVyID4gaDIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5wbHVzIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtZW50cnkge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9zdHlsZXNoZWV0cy9zaWRlYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsY0FBYztJQUNkLG1DQUFtQztJQUNuQyxnQkFBZ0IsRUFBRSwwQ0FBMEM7QUFDaEU7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIG1pbi1oZWlnaHQ6IDk1dmg7IC8qIFRyeSB0byBmaW5kIGEgd2F5IHRvIG5vdCBoYXJkY29kZSB0aGlzKi9cXG59XFxuXFxuLnNpZGViYXIgPiAqIHtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhciAuY2xpY2thYmxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXIgPiBoMiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnBsdXMge1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1lbnRyeSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIENvbnRyb2xzIERPTSBpbnRlcmFjdGlvbiAqL1xuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXJzID0ge1xuICAgICAgICBuZXdQcm9qZWN0UG9wdXA6ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1maWxtJykuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyksXG4gICAgICAgIGNhbmNlbE5ld1Byb2plY3Q6ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1maWxtJykuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyksXG4gICAgICAgIGFkZE5ld1Byb2plY3Q6IG5ld1Byb2plY3QgPT4ge1xuICAgICAgICAgICAgbmV3UHJvamVjdC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtZmlsbScpLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZVByb2plY3RDb21wb25lbnQgPSBwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RET00uY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICAgIHByb2plY3RET00uY2xhc3NMaXN0LmFkZChcImNsaWNrYWJsZVwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5hbWVET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbmFtZURPTS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICAgICAgbmFtZURPTS5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0RE9NLmFwcGVuZENoaWxkKG5hbWVET00pO1xuICAgICAgICByZXR1cm4gcHJvamVjdERPTTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0cyA9IHByb2plY3RzID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHByb2plY3RzLm1hcChwcm9qZWN0ID0+IF9jcmVhdGVQcm9qZWN0Q29tcG9uZW50KHByb2plY3QpKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHNET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhciA+IC5wcm9qZWN0cycpO1xuICAgICAgICBwcm9qZWN0c0RPTS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgIHByb2plY3RzRE9NLmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHtyZW5kZXJQcm9qZWN0c30sIGhhbmRsZXJzKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyOyIsImNvbnN0IGxvY2FsU3RvcmFnZUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIC8vIEluaXRpYWxpc2VzIHByb2plY3RzIGlmIGl0IGRvZW5zJ3QgZXhpc3QgaW4gbG9jYWxTdG9yYWdlXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBcIltdXCIpO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0cyBhbiBvYmplY3QgdG8gSlNPTiB0aGVuIHNldHMgaXQgb24gbG9jYWxTdG9yYWdlXG4gICAgY29uc3Qgc2V0T2JqZWN0VG9Mb2NhbFN0b3JhZ2UgPSAoa2V5LCBvYmplY3QpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXdQcm9qZWN0ID0gcHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgc2V0T2JqZWN0VG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c1wiLCBwcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHthZGROZXdQcm9qZWN0LCBnZXRQcm9qZWN0c307XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbFN0b3JhZ2VDb250cm9sbGVyOyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4uL21vZGVscy9Qcm9qZWN0J1xuaW1wb3J0IGxvY2FsU3RvcmFnZUNvbnRyb2xsZXIgZnJvbSAnLi9sb2NhbFN0b3JhZ2VDb250cm9sbGVyJztcblxuY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZE5ld1Byb2plY3QgPSBuYW1lID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QobmFtZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZUNvbnRyb2xsZXIuYWRkTmV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICB9XG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBsb2NhbFN0b3JhZ2VDb250cm9sbGVyLmdldFByb2plY3RzKCk7XG5cbiAgICByZXR1cm4ge2FkZE5ld1Byb2plY3QsIGdldFByb2plY3RzfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RDb250cm9sbGVyOyIsImltcG9ydCBUb2RvIGZyb20gJy4vVG9kbydcblxuY29uc3QgUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgLy8gY29uc3QgbWV0aG9kcyA9IHtcbiAgICAvLyAgICAgZ2V0TmFtZTogKCkgPT4gbmFtZSxcbiAgICAvLyAgICAgc2V0TmFtZTogbmV3TmFtZSA9PiBuYW1lID0gbmV3TmFtZVxuICAgIC8vIH1cblxuICAgIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBtZXRob2RzKTtcbiAgICByZXR1cm4ge25hbWV9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImNvbnN0IFRvZG8gPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgLy8gY29uc3QgZ2V0dGVycyA9IHtcbiAgICAvLyAgICAgZ2V0VGl0bGU6ICgpID0+IHRpdGxlLFxuICAgIC8vICAgICBnZXREZXNjOiAoKSA9PiBkZXNjLFxuICAgIC8vICAgICBnZXREdWVEYXRlOiAoKSA9PiBkdWVEYXRlLFxuICAgIC8vICAgICBnZXRQcmlvcml0eTogKCkgPT4gcHJpb3JpdHlcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBzZXR0ZXJzID0ge1xuICAgIC8vICAgICBzZXRUaXRsZTogbmV3VGl0bGUgPT4gdGl0bGUgPSBuZXdUaXRsZSxcbiAgICAvLyAgICAgc2V0RGVzYzogbmV3RGVzYyA9PiBkZXNjID0gbmV3RGVzYyxcbiAgICAvLyAgICAgc2V0RHVlRGF0ZTogbmV3RHVlRGF0ZSA9PiBkdWVEYXRlID0gbmV3RHVlRGF0ZSxcbiAgICAvLyAgICAgc2V0UHJpb3JpdHk6IG5ld1ByaW9yaXR5ID0+IHByaW9yaXR5ID0gbmV3UHJpb3JpdHlcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBtZXRob2RzID0gT2JqZWN0LmFzc2lnbih7fSwgZ2V0dGVycywgc2V0dGVycyk7XG4gICAgXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHl9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi92aWV3cy9zdHlsZXNoZWV0cy9yZXNldC5jc3MnXG5pbXBvcnQgJy4vdmlld3Mvc3R5bGVzaGVldHMvZ2xvYmFsLmNzcydcbmltcG9ydCAnLi92aWV3cy9zdHlsZXNoZWV0cy9oZWFkZXIuY3NzJ1xuaW1wb3J0ICcuL3ZpZXdzL3N0eWxlc2hlZXRzL3NpZGViYXIuY3NzJ1xuaW1wb3J0ICcuL3ZpZXdzL3N0eWxlc2hlZXRzL21haW4uY3NzJ1xuaW1wb3J0ICcuL3ZpZXdzL3N0eWxlc2hlZXRzL3BvcHVwLmNzcydcblxuaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvZGlzcGxheUNvbnRyb2xsZXInO1xuaW1wb3J0IHByb2plY3RDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvcHJvamVjdENvbnRyb2xsZXInXG5cbigoKSA9PiB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyUHJvamVjdHMocHJvamVjdENvbnRyb2xsZXIuZ2V0UHJvamVjdHMoKSk7XG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWhlYWRlciAucGx1cycpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5uZXdQcm9qZWN0UG9wdXAoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1maWxtIC5jYW5jZWwnKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2FuY2VsTmV3UHJvamVjdCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWZpbG0gLmNvbmZpcm0nKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1uYW1lJyk7XG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmFkZE5ld1Byb2plY3QobmV3UHJvamVjdC52YWx1ZSk7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmFkZE5ld1Byb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RDb250cm9sbGVyLmdldFByb2plY3RzKCk7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlclByb2plY3RzKHByb2plY3RzKTtcbiAgICB9KTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9