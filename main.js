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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --clr-primary: rgb(54, 112, 199);\r\n  --clr-light: #f4f4f4;\r\n  --clr-dark: #333;\r\n  --clr-warning: rgb(99, 36, 36);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  font-family: inherit;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n  background-color: var(--clr-primary);\r\n  color: var(--clr-dark);\r\n\r\n  display: grid;\r\n  gap: 15px;\r\n  grid:\r\n    'header header header header' auto\r\n    '...... lists  active ......' auto /\r\n    1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;\r\n  --s: 200px; /* control the size */\r\n  --c1: #1d1d1d;\r\n  --c2: #4e4f51;\r\n  --c3: #3c3c3c;\r\n\r\n  background: repeating-conic-gradient(\r\n        from 30deg,\r\n        #0000 0 120deg,\r\n        var(--c3) 0 180deg\r\n      )\r\n      calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),\r\n    repeating-conic-gradient(\r\n      from 30deg,\r\n      var(--c1) 0 60deg,\r\n      var(--c2) 0 120deg,\r\n      var(--c3) 0 180deg\r\n    );\r\n  background-size: var(--s) calc(var(--s) * 0.577);\r\n  /* 0.577 = tan(30deg)*/\r\n}\r\n\r\n.title {\r\n  grid-area: header;\r\n  text-align: center;\r\n  font-size: calc(5vw + 2rem);\r\n  font-weight: 900;\r\n  color: rgba(244, 244, 244, 0.9);\r\n  text-shadow: 2px 2px #1d1d1d;\r\n  letter-spacing: 2px;\r\n  margin: -0.3em 0 0.5em;\r\n}\r\n\r\n.all-tasks {\r\n  grid-area: lists;\r\n  background: #eee;\r\n  color: var(--clr-dark);\r\n  padding: 2rem;\r\n  box-shadow: 5 5 5px var(--clr-dark);\r\n}\r\n\r\n.task-list {\r\n  font-size: 1.2rem;\r\n  line-height: 1.7;\r\n  list-style: circle;\r\n  padding-left: 1.1em;\r\n}\r\n\r\n.list-name {\r\n  cursor: pointer;\r\n}\r\n\r\n.list-name:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n  background: 0;\r\n  border: 0;\r\n  padding: 0;\r\n  color: inherit;\r\n}\r\n\r\n.btn.create {\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n  margin-right: 0.25em;\r\n  transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.btn.delete {\r\n  opacity: 0.7;\r\n  font-size: 1rem;\r\n  transition: color 200ms;\r\n  padding-bottom: 0.4rem;\r\n}\r\n\r\n.btn.delete:hover {\r\n  color: var(--clr-warning);\r\n}\r\n\r\n.new {\r\n  background: transparent;\r\n  border: 0;\r\n  color: inherit;\r\n  border-bottom: 1px solid currentColor;\r\n  font-size: inherit;\r\n  outline: none;\r\n  padding: 0.25em;\r\n\r\n  transition: border-bottom 150ms ease-in;\r\n  order: 2;\r\n}\r\n\r\n.new::placeholder {\r\n  opacity: 0.4;\r\n}\r\n\r\n.new:focus {\r\n  border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::placeholder {\r\n  opacity: 0.15;\r\n}\r\n\r\n.new.list {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.new.task {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.active-list {\r\n  font-weight: 700;\r\n}\r\n\r\n.todo-list {\r\n  --spacer: 2rem;\r\n\r\n  grid-area: active;\r\n  background: var(--clr-light);\r\n  color: var(--clr-dark);\r\n}\r\n\r\n.todo-header {\r\n  padding: var(--spacer);\r\n  background: #e4e4e4;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.list-title {\r\n  margin: 0 1em 0 0;\r\n  color: var(--clr-dark);\r\n}\r\n\r\n.task-count {\r\n  margin: 0;\r\n  font-size: 1rem;\r\n}\r\n\r\n.todo-body {\r\n  padding: var(--spacer);\r\n  position: relative;\r\n}\r\n\r\n.new-task-creator .create {\r\n  color: var(--clr-primary);\r\n}\r\n\r\n[type='checkbox'] {\r\n  opacity: 0;\r\n  position: absolute;\r\n}\r\n\r\n.task label {\r\n  display: flex-inline;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.task {\r\n  position: relative;\r\n  margin-bottom: 1.25em;\r\n}\r\n\r\n.task::after {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: -0.5em;\r\n  height: 1px;\r\n  background: currentColor;\r\n  opacity: 0.1;\r\n}\r\n\r\n.custom-checkbox {\r\n  --size: 0.75em;\r\n  display: inline-block;\r\n  width: var(--size);\r\n  height: var(--size);\r\n  margin-right: var(--size);\r\n  cursor: pointer;\r\n  border: 2px solid currentColor;\r\n  border-radius: 50%;\r\n  transform: scale(1);\r\n  transition: transform 300ms ease-in-out;\r\n}\r\n\r\n.task:hover .custom-checkbox,\r\n[type='checkbox']:focus + label .custom-checkbox {\r\n  transform: scale(1.2);\r\n  color: var(--clr-primary);\r\n}\r\n\r\n[type='checkbox']:checked + label .custom-checkbox {\r\n  background: var(--clr-primary);\r\n  border-color: var(--clr-primary);\r\n  box-shadow: inset 0 0 0px 2px white;\r\n}\r\n\r\n[type='checkbox']:checked + label {\r\n  opacity: 0.5;\r\n}\r\n\r\n.task label::after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  left: 1.5em;\r\n  top: 50%;\r\n  height: 3px;\r\n  background: currentColor;\r\n  transform: scaleX(0);\r\n  transform-origin: right;\r\n  transition: transform 150ms ease-in-out;\r\n}\r\n\r\n[type='checkbox']:checked + label::after {\r\n  transform: scaleX(1);\r\n  transform-origin: left;\r\n}\r\n\r\n.delete-stuff {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  position: absolute;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: -35px;\r\n  background-color: var(--clr-light);\r\n  color: var(--clr-dark);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-todo/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-todo/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\nconst listsContainer = document.querySelector('[data-lists]');\r\nconst newListForm = document.querySelector('[data-new-list-form]');\r\nconst newListInput = document.querySelector('[data-new-list-input]');\r\nconst deleteListButton = document.querySelector('[data-delete-list-button]');\r\nconst listDisplayContainer = document.querySelector(\r\n  '[data-list-display-container]'\r\n);\r\nconst listTitleElement = document.querySelector('[data-list-title]');\r\nconst listCountElement = document.querySelector('[data-list-count]');\r\nconst tasksContainer = document.querySelector('[data-tasks]');\r\nconst taskTemplate = document.getElementById('task-template');\r\nconst newTaskForm = document.querySelector('[data-new-task-form]');\r\nconst newTaskInput = document.querySelector('[data-new-task-input]');\r\nconst clearCompleteTasksButton = document.querySelector(\r\n  '[data-clear-complete-tasks-button]'\r\n);\r\n\r\nconst LOCAL_STORAGE_LIST_KEY = 'task.lists';\r\nconst LOCAL_STORAGE_SELECETED_LIST_ID_KEY = 'task.selectedListId';\r\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\r\nlet selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECETED_LIST_ID_KEY);\r\n\r\nlistsContainer.addEventListener('click', (e) => {\r\n  if (e.target.tagName.toLowerCase() === 'li') {\r\n    selectedListId = e.target.dataset.listId;\r\n    saveAndRender();\r\n  }\r\n});\r\n\r\ntasksContainer.addEventListener('click', (e) => {\r\n  if (e.target.tagName.toLowerCase() === 'input') {\r\n    const selectedList = lists.find((list) => list.id === selectedListId);\r\n    const selectedTask = selectedList.tasks.find(\r\n      (task) => task.id === e.target.id\r\n    );\r\n    selectedTask.complete = e.target.checked;\r\n    save();\r\n    renderTaskCount(selectedList);\r\n  }\r\n});\r\n\r\nclearCompleteTasksButton.addEventListener('click', (e) => {\r\n  const selectedList = lists.find((list) => list.id === selectedListId);\r\n  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);\r\n  saveAndRender();\r\n});\r\n\r\ndeleteListButton.addEventListener('click', (e) => {\r\n  lists = lists.filter((list) => {\r\n    return list.id !== selectedListId;\r\n  });\r\n  selectedListId = null;\r\n  saveAndRender();\r\n});\r\n\r\nnewListForm.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  const listName = newListInput.value;\r\n  if (listName == null || listName === '') return;\r\n  const list = createList(listName);\r\n  newListInput.value = null;\r\n  lists.push(list);\r\n  saveAndRender();\r\n});\r\n\r\nnewTaskForm.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  const taskName = newTaskInput.value;\r\n  if (taskName == null || taskName === '') return;\r\n  const task = createTask(taskName);\r\n  newTaskInput.value = null;\r\n  const selectedList = lists.find((list) => list.id === selectedListId);\r\n  selectedList.tasks.push(task);\r\n  saveAndRender();\r\n});\r\n\r\nfunction createTask(name) {\r\n  return {\r\n    id: Date.now().toString(),\r\n    name: name,\r\n    complete: false,\r\n  };\r\n}\r\n\r\nfunction createList(name) {\r\n  return {\r\n    id: Date.now().toString(),\r\n    name: name,\r\n    tasks: [],\r\n  };\r\n}\r\n\r\nfunction saveAndRender() {\r\n  save();\r\n  render();\r\n}\r\n\r\nfunction save() {\r\n  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));\r\n  localStorage.setItem(LOCAL_STORAGE_SELECETED_LIST_ID_KEY, selectedListId);\r\n}\r\n\r\nfunction render() {\r\n  clearElement(listsContainer);\r\n  renderLists();\r\n\r\n  const selectedList = lists.find((list) => list.id === selectedListId);\r\n\r\n  if (selectedListId == null) {\r\n    listDisplayContainer.style.display = 'none';\r\n  } else {\r\n    listDisplayContainer.style.display = '';\r\n    listTitleElement.innerText = selectedList.name;\r\n    renderTaskCount(selectedList);\r\n    clearElement(tasksContainer);\r\n    renderTasks(selectedList);\r\n  }\r\n}\r\n\r\nfunction renderTasks(selectedList) {\r\n  selectedList.tasks.forEach((task) => {\r\n    const taskElement = document.importNode(taskTemplate.content, true);\r\n    const checkbox = taskElement.querySelector('input');\r\n    checkbox.id = task.id;\r\n    checkbox.checked = task.complete;\r\n    const label = taskElement.querySelector('label');\r\n    label.htmlFor = task.id;\r\n    label.append(task.name);\r\n    tasksContainer.appendChild(taskElement);\r\n  });\r\n}\r\n\r\nfunction renderTaskCount(selectedList) {\r\n  const incompleteTaskCount = selectedList.tasks.filter(\r\n    (task) => !task.complete\r\n  ).length;\r\n  const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';\r\n  listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;\r\n}\r\n\r\nfunction renderLists() {\r\n  lists.forEach((list) => {\r\n    const listElement = document.createElement('li');\r\n    listElement.dataset.listId = list.id;\r\n    listElement.classList.add('list-name');\r\n    listElement.innerText = list.name;\r\n    if (list.id === selectedListId) {\r\n      listElement.classList.add('active-list');\r\n    }\r\n    listsContainer.appendChild(listElement);\r\n  });\r\n}\r\nfunction clearElement(element) {\r\n  while (element.firstChild) {\r\n    element.removeChild(element.firstChild);\r\n  }\r\n}\r\n\r\nrender();\r\n\n\n//# sourceURL=webpack://top-todo/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;