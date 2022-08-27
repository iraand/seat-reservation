/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  margin:0;\\n  padding:0;\\n  list-style: none;   \\n}\\np{\\n    margin:0;\\n    padding:0;\\n    text-align: center;     \\n}\\nbody{\\n    background-color: rgb(5, 5, 45);\\n    color:white;\\n}\\n.theater{\\n    border: solid 1px black;\\n    width: 870px; \\n    height: 50px;  \\n    margin: 10px auto 30px; \\n    text-align: center;\\n    font-size: 36px;\\n    padding-top: 5px; \\n    background-color: rgb(68, 21, 114);\\n}\\n.parter{\\n    display: flex;\\n    width: 100%;\\n\\n    justify-content: center;\\n    margin: 0 auto;\\n}\\n.section-name{\\n    font-size: 20px;\\n    margin-top: 30px;\\n}\\n.section-name__left,\\n.section-name__right{\\n    margin-top: 10px;\\n}\\n\\n.seat[data-price=\\\"300\\\"] {\\n    background-color: rgb(6, 183, 237);\\n}\\n.seat[data-price=\\\"500\\\"] {\\n    background-color: rgb(247, 159, 159);\\n}\\n.seat[data-price=\\\"400\\\"] {\\n    background-color: rgb(242, 204, 99);    \\n}\\n.seat[data-price=\\\"200\\\"]{\\n    background-color:  #86eb7a;    \\n}\\n\\n.unavailable{\\n    background-color: rgb(40, 40, 72)!important;\\n    cursor: not-allowed!important;\\n    color:rgb(63, 57, 87)!important;\\n}\\n.auditorium-panel,\\n.balcony-mid,\\n.balcony-left,\\n.balcony-right,\\n#box-left1,\\n#box-right1,\\n#box-left2,\\n#box-right2 {\\n    /* border: solid 1px black; */\\n    width: 870px; \\n    height: 330px;\\n    margin: 20px auto 30px;\\n    text-align: center;\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n}\\n.balcony-mid{\\n    width: 780px; \\n    height: 90px\\n}\\n.balcony-left,\\n.balcony-right{\\n    width: 180px; \\n    height: 90px;\\n    margin-right: 20px;\\n    margin-left: 20px;\\n}\\n.balcony-left{\\n    flex-direction: row-reverse;\\n}\\n.balcony1{\\n    transform:rotate(30deg);\\n}\\n.balcony2{\\n    transform:rotate(-30deg);\\n}\\n\\n#box-left1,\\n#box-left2{\\n    width: 85px; \\n    height: 130px;\\n    flex-wrap: wrap-reverse;   \\n}\\n#box-right1,\\n#box-right2{\\n    width: 85px; \\n    height: 130px;\\n    flex-wrap: wrap;   \\n}\\n#box-left1,\\n#box-left2,\\n#box-right1,\\n#box-right2{\\n    flex-direction: column;\\n}\\n.box-left{\\n    margin-right:20px;\\n}\\n.box-right{\\n    margin-left:20px;\\n}\\n.row{\\n    width:100%;\\n    display: block;\\n}\\n.row2{\\n    display: block;\\n}\\n.seat {   \\n    width: 30px;\\n    height: 30px;\\n    margin: 5px;\\n    border: solid 1px black;\\n    text-align: center;\\n    padding-top: 5px;\\n    color: white;\\n    cursor: pointer;\\n}\\n\\n.seat:hover{\\n    background-color: #ae59b3; \\n}\\n.balcony{\\n    display: flex;\\n    width: 100%;\\n    justify-content: center;\\n}\\n\\n\\nform{\\n    margin-top:20px;\\n    width:100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    font-size: 18px;\\n    max-width:780px;\\n    margin: 0 auto;\\n    flex-wrap: wrap;\\n    padding: 20px 50px;\\n    background-color: rgb(68, 21, 114);\\n}\\n.select{\\n    width:50px;\\n    height:30px;\\n    margin: 10px;\\n}\\n.result,.proces{\\n    text-align: center;\\n    font-size: 20px;\\n    visibility: hidden;\\n    color: red;\\n    height:100%;\\n    width:100%;\\n}\\n.num{\\n    width:100%;\\n    font-size: 22px;\\n    text-align: center; \\n    margin: 0 auto; \\n    margin-bottom: 80px; \\n    margin-top: 10px; \\n}\\nbutton{\\n    padding:10px;\\n    font-size: 14px;\\n}\\n.visible{\\n    visibility: visible;\\n}\\n.disable{\\n    pointer-events: none;\\n    opacity:0.4;\\n}\\n.best{\\n    background-color: red!important;\\n}\\n\\n@media only screen and (max-width: 1110px) {\\n    .container {\\n      transform:scale(0.8);\\n      transform-origin: 50% 0%;\\n      -o-transform-origin: 50% 0%;\\n      -webkit-transform-origin: 50% 0%;\\n    }\\n}\\n@media only screen and (max-width: 1000px) {\\n    .container {\\n      transform:scale(0.7);\\n      transform-origin: 50% 0%;\\n      -o-transform-origin: 50% 0%;\\n      -webkit-transform-origin: 50% 0%;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./styles/style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./createSeats.js":
/*!************************!*\
  !*** ./createSeats.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSeats\": () => (/* binding */ createSeats)\n/* harmony export */ });\nconst createSeats = () => {\n\n    const auditorium = seats.filter(seat => seat.section === 'auditorium'),  \n        balconyMid = seats.filter(seat => seat.section === 'balconyMid'),\n        balconyLeft = seats.filter(seat => seat.section === 'balconyLeft'),\n        balconyRight = seats.filter(seat => seat.section === 'balconyRight'),\n        boxLeft1 = seats.filter(seat => seat.section === 'boxLeft1'),\n        boxLeft2 = seats.filter(seat => seat.section === 'boxLeft2'),\n        boxRight1 = seats.filter(seat => seat.section === 'boxRight1'),\n        boxRight2 = seats.filter(seat => seat.section === 'boxRight2');\n\n    let row = \"<div class='row'></div>\";\n    let row2 = \"<div class='row2'></div>\";\n    \n    /*** Create Auditorium's seats *************************/\n  \n    auditorium.map((seat, i) => {  \n        if(i===14 || i===29 || i===45 || i===62 || i===80 || i===99 || i===119) auditorium.push(row);   \n\n        let _seat = `<div id='${seat.seatID}' \n                data-section='${seat.section}'\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        auditorium.push(_seat); \n    });\n    window.onload = function() {console.log(document.getElementById('#auditorium-panel'))}\n    //document.getElementById('#auditorium-panel').append(auditoriumSeats)\n    $('#auditorium-panel').html(auditorium);\n    \n   /*** Create Balcony's seats ***************************/ \n    balconyMid.map((seat, i) => {  \n        if(i===18) balconyMid.push(row);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        balconyMid.push(seat); \n    });\n    // document.querySelector('#balcony-mid').innerHTML(balconyMid)\n    $('#balcony-mid').html(balconyMid);\n\n    balconyLeft.map((seat, i) => {  \n        if(i===4) balconyLeft.push(row);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        balconyLeft.push(seat); \n    });\n    // document.querySelector('#balcony-left').innerHTML(balconyLeft)\n    $('#balcony-left').html(balconyLeft);\n    \n    balconyRight.map((seat, i) => {  \n        if(i===4) balconyRight.push(row);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        balconyRight.push(seat); \n    });\n    // document.querySelector('#balcony-right').innerHTML(balconyRight)\n    $('#balcony-right').html(balconyRight);\n\n\n   /*** Create Left Boxes seats ***************************/\n    boxLeft1.map((seat, i) => {  \n        if(i===3) boxLeft1.push(row2);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        boxLeft1.push(seat); \n    });\n    // document.querySelector('#box-left1').innerHTML(boxLeft1)\n    $('#box-left1').html(boxLeft1);\n    \n    boxLeft2.map((seat, i) => {  \n        if(i===3) boxLeft2.push(row2);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        boxLeft2.push(seat); \n    });\n    // document.querySelector('#box-left2').innerHTML(boxLeft2)\n    $('#box-left2').html(boxLeft2);\n   \n    /*** Create Right Boxes seats ***************************/\n    boxRight1.map((seat, i) => {  \n        if(i===3) boxRight1.push(row2);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        boxRight1.push(seat); \n    });\n    // document.querySelector('#box-right1').innerHTML(boxRight1)\n    $('#box-right1').html(boxRight1);\n\n    boxRight2.map((seat, i) => {  \n        if(i===3) boxRight2.push(row2);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        boxRight2.push(seat); \n    });\n\n    $('#box-right2').html(boxRight2);\n    // document.querySelector('#box-right2').innerHTML(boxRight2)\n   \n};\n\n\n\n//# sourceURL=webpack:///./createSeats.js?");

/***/ }),

/***/ "./findSeats.js":
/*!**********************!*\
  !*** ./findSeats.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findTheBestAvailableSeats\": () => (/* binding */ findTheBestAvailableSeats)\n/* harmony export */ });\nconst findTheBestAvailableSeats = (numPersons) => {\n    let theBestAvailableSeats = [],\n        side = '',\n        availableSeats = createCollections(seats, numPersons);\n\n    if (!availableSeats || availableSeats.length <= 0){\n        console.log(\"No seats found! Input less persons or less number of reserved seats!\");\n        createMessage(null);\n        return;\n    }\n\n    availableSeats.sort((a, b) => {return b.price - a.price});\n    \n    let rowOfAvailableSeats = createRow(availableSeats);\n    console.log(rowOfAvailableSeats[0].collection);\n\n    if (rowOfAvailableSeats.length < 2){\n        if (rowOfAvailableSeats[0].collection.length > numPersons){\n        \n            side = findSide(rowOfAvailableSeats[0].collection);\n\n            console.log(side);\n            \n            theBestAvailableSeats = formatSeats(rowOfAvailableSeats[0].collection, numPersons, side);\n            \n            console.log(theBestAvailableSeats);\n    \n            createMessage(theBestAvailableSeats); \n        \n            return theBestAvailableSeats; \n        }\n\n        theBestAvailableSeats = rowOfAvailableSeats[0].collection;   \n    \n        console.log(theBestAvailableSeats);\n    \n        createMessage(theBestAvailableSeats); \n    \n        return theBestAvailableSeats;\n    } \n\n    if (rowOfAvailableSeats.length >= 1) {  \n        let sideOfSeats = {};\n\n        sideOfSeats = rowOfAvailableSeats.reduce((acc, seats) => {\n            side = findSide(seats.collection, numPersons);\n            console.log(side);\n\n            if (side === \"center\") {\n                acc.center.push(seats); \n            }\n            if (side === \"left\") {\n                acc.left.push(seats); \n            }\n            if (side === \"right\") {\n                acc.right.push(seats); \n            }\n\n            return acc;\n        },{center:[], left:[], right:[]});\n\n        console.log(sideOfSeats);    \n\n        if(sideOfSeats.center.length > 0){\n            theBestAvailableSeats = formatSeats(sideOfSeats.center[0].collection, numPersons, \"center\");\n            \n            console.log(theBestAvailableSeats);\n        \n            createMessage(theBestAvailableSeats); \n        \n            return theBestAvailableSeats;\n        } \n              \n        if (sideOfSeats.right.length > 1){\n            theBestAvailableSeats = formatSeats(sideOfSeats.right[0].collection, numPersons, \"right\"); \n               \n        } else if (sideOfSeats.left.length > 1){\n            theBestAvailableSeats = formatSeats(sideOfSeats.left[sideOfSeats.left.length - 1].collection, numPersons, \"left\");    \n        \n        } else if (sideOfSeats.right[0].collection.length > sideOfSeats.left[0].collection.length){\n            theBestAvailableSeats = formatSeats(sideOfSeats.right[0].collection, numPersons, \"right\"); \n        } else if (sideOfSeats.right[0].collection.length < sideOfSeats.left[0].collection.length) {\n            theBestAvailableSeats = formatSeats(sideOfSeats.left[0].collection, numPersons, \"left\"); \n        } \n\n        console.log(theBestAvailableSeats);\n        \n        createMessage(theBestAvailableSeats); \n    \n        return theBestAvailableSeats;   \n    }\n}\n\nconst createRow = (availableSeats) => {\n    let startRow = availableSeats[0].row,\n        startSection = availableSeats[0].section,\n        rowOfAvailableSeats = [];\n\n    for (let i = 0; i < availableSeats.length; i++){\n        if (availableSeats[i].row === startRow &&\n            availableSeats[i].section === startSection) {\n\n            rowOfAvailableSeats.push(availableSeats[i]);\n        } \n    } \n    \n    return rowOfAvailableSeats;\n}\n\nconst formatSeats = (theBestAvailableSeats, numPersons, side) => {\n    const lengthOfTheBestAvailableSeats = theBestAvailableSeats.length,\n        cutNum = theBestAvailableSeats.length - numPersons,\n        halfCutNum = Math.floor(cutNum/2);\n\n    if (side === 'center') {\n        theBestAvailableSeats = theBestAvailableSeats.slice(halfCutNum, lengthOfTheBestAvailableSeats - halfCutNum);\n        if (cutNum % 2 !== 0) {\n            return theBestAvailableSeats.slice(1, theBestAvailableSeats.length);\n        }\n\n        return theBestAvailableSeats;\n    }\n\n    if (side === 'left') {\n        return theBestAvailableSeats.slice(cutNum, lengthOfTheBestAvailableSeats);                        \n    }    \n\n    if (side === 'right') {\n        return theBestAvailableSeats.slice(0, lengthOfTheBestAvailableSeats-cutNum); \n    }\n\n    return theBestAvailableSeats;\n}\n\nconst findSide = (theBestAvailableSeats, numPersons) => {\n    const rowOfTheBestAvailableSeats = theBestAvailableSeats[0].row;\n    const sectionOfTheBestAvailableSeats = theBestAvailableSeats[0].section;\n    const lengthOfTheBestAvailableSeats = theBestAvailableSeats.length;   \n\n    if (sectionOfTheBestAvailableSeats === 'auditorium' ||\n        sectionOfTheBestAvailableSeats === 'balconyMid'){\n        const row = seats.reduce((accum, seat) => { \n            if (seat.section === 'auditorium' && seat.row === rowOfTheBestAvailableSeats) accum.push(seat);                            \n            return accum;\n        \n        }, []); \n\n        let lastSeats = row[row.length - 1].seat - theBestAvailableSeats[lengthOfTheBestAvailableSeats - 1].seat;\n        let firstSeats = theBestAvailableSeats[0].seat - row[0].seat;\n\n        if (firstSeats - lastSeats > 2) return \"right\";\n        \n        if (lastSeats - firstSeats > 2)  return \"left\";\n        \n        if (lastSeats === firstSeats)  return \"center\";\n                \n        return \"center\";                    \n    }     \n}\n\nconst createCollections = (seats, numPersons) => {\n    let collection = [],\n        collections = [],\n        numSeat =0, section, row, price;\n\n    for (let seat of seats){\n\n        if (seat.isAvailable){\n            if (collection && collection.length > 0){\n                if(seat.section === section && seat.row === row && seat.price === price && seat.seat - numSeat === 1){\n                    collection.push(seat);\n                    numSeat = seat.seat;\n                } else {\n                    if (collection.length >= numPersons){\n                        collections.push({price: collection[0].price, section: collection[0].section, row: collection[0].row, collection })\n                        collection = [];\n                        numSeat = 0;               \n                    }\n                    collection = [];\n                    numSeat = 0;\n\n                    collection.push(seat);\n                    section = seat.section;\n                    row = seat.row;\n                    price = seat.price;\n                    numSeat = seat.seat; \n\n                }                \n            }else{\n                collection.push(seat);\n                section = seat.section;\n                row = seat.row;\n                price = seat.price;\n                numSeat = seat.seat; \n            }\n                        \n        } else {\n            if (collection.length >= numPersons){\n                collections.push({price: collection[0].price, section: collection[0].section, row: collection[0].row, collection })             \n            }\n            collection = [];\n            numSeat = 0;\n        }    \n    }\n\n    return collections;\n\n}\n\nconst createMessage = (found) => {\n    $(\".proces\").removeClass(\"visible\");          \n    $(\".result\").addClass(\"visible\");\n    let message = \" No seats found! Input less persons or less number of reserved seats!\";\n\n    if(!found) {\n        return $('.num').html(message); \n    }\n\n    message = found.map((seat, i) => {\n        $(`#${seat.seatID}`).addClass(\"best\");\n        return ` ${i+1}. Section: ${seat.section}, Row: ${seat.row}, Seat: ${seat.seat}, Price: ${seat.price} Ft<br>`;           \n    });\n\n    $('.num').html(message);  \n}\n\n//# sourceURL=webpack:///./findSeats.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createSeats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSeats */ \"./createSeats.js\");\n/* harmony import */ var _reserveSeats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reserveSeats */ \"./reserveSeats.js\");\n/* harmony import */ var _findSeats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findSeats */ \"./findSeats.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ \"./styles/style.css\");\n\n\n\n\n\n\n$(window).ready(function() {\n    (0,_createSeats__WEBPACK_IMPORTED_MODULE_0__.createSeats)(); \n    (0,_reserveSeats__WEBPACK_IMPORTED_MODULE_1__.reserveSeats)(0.2);      \n});\n\n$(() => { \n    const handleChange = (e) => {\n        $('.seat').removeClass(\"best\");\n        $(\"button\").removeClass(\"disable\");\n\n        let value = Number(e.target.value); \n        \n        (0,_reserveSeats__WEBPACK_IMPORTED_MODULE_1__.reserveSeats)(value);                      \n    };\n\n    $(\"#select\").on('change', handleChange);\n}); \n\n$(() => { \n    const handleChangeVisitors = (e) => {\n        e.preventDefault; \n        $('.seat').removeClass(\"best\");\n        $(\"button\").removeClass(\"disable\");\n    };\n\n    $(\"#visitors\").on('change', handleChangeVisitors);\n});\n\n$(() => { \n    const handleClick = (e) => {\n        e.preventDefault; \n        $('.seat').removeClass(\"best\");\n        $(\"button\").addClass(\"disable\");\n         \n        let value = $(\"#visitors\").val();\n\n        (0,_findSeats__WEBPACK_IMPORTED_MODULE_2__.findTheBestAvailableSeats)(value);\n    };\n\n    $(\"button\").on('click', handleClick);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./reserveSeats.js":
/*!*************************!*\
  !*** ./reserveSeats.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reserveSeats\": () => (/* binding */ reserveSeats)\n/* harmony export */ });\n// Random reserve seats \n\nconst reserveSeats = (countReservedSeats) => {\n\n    if(countReservedSeats > 0.9){\n        $(\".seat\").addClass(\"unavailable\");             \n        return seats.forEach(seat => seat.isAvailable = false);\n    }\n\n    const length = seats.length,\n        unavailableLength = Math.floor(length * countReservedSeats),\n        randomSeatsIndexes = [];\n\n    while (randomSeatsIndexes.length != unavailableLength) {\n        let rendomIndex = Math.floor(Math.random() * (length-1));\n\n        if (!randomSeatsIndexes.includes(rendomIndex)) {\n            randomSeatsIndexes.push(rendomIndex);                    \n        }\n    }\n    \n    updateSeats(randomSeatsIndexes);\n}\n\nconst updateSeats = (randomIndexes) => {  \n    $(\".seat\").removeClass(\"unavailable\");\n\n    return seats = seats.map((seat, index) =>{\n        if (randomIndexes.includes(index)) {            \n            $(`#${seat.seatID}`).addClass(\"unavailable\");\n            seat.isAvailable = false;\n            return seat;\n        }\n        seat.isAvailable = true;   \n        return seat;\n    });\n}    \n\n//# sourceURL=webpack:///./reserveSeats.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;