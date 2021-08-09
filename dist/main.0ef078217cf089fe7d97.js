/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/index.js":
/*!*********************************!*\
  !*** ./assets/scripts/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ \"./assets/styles/style.scss\");\n\r\n\r\nlet count = 1;\r\nconst dev = \"developmenting\";\r\ndocument.addEventListener('click', () => {\r\n    count++;\r\n    console.log(count);\r\n})\r\n\r\n\n\n//# sourceURL=webpack://metalamp_2/./assets/scripts/index.js?");

/***/ }),

/***/ "./assets/styles/style.scss":
/*!**********************************!*\
  !*** ./assets/styles/style.scss ***!
  \**********************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: property \\\"b\\\" must be followed by a ':'\\n        on line 7 of assets/styles/style.scss\\n>>     b\\r\\n   ----^\\n\\n    at processResult (D:\\\\OSPanel\\\\domains\\\\metalamp_2\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:707:19)\\n    at D:\\\\OSPanel\\\\domains\\\\metalamp_2\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:813:5\\n    at D:\\\\OSPanel\\\\domains\\\\metalamp_2\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:399:11\\n    at D:\\\\OSPanel\\\\domains\\\\metalamp_2\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:251:18\\n    at context.callback (D:\\\\OSPanel\\\\domains\\\\metalamp_2\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:124:13)\\n    at Object.callback (D:\\\\OSPanel\\\\domains\\\\metalamp_2\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:54:7)\\n    at Object.done [as callback] (D:\\\\OSPanel\\\\domains\\\\metalamp_2\\\\node_modules\\\\neo-async\\\\async.js:8069:18)\\n    at options.error (D:\\\\OSPanel\\\\domains\\\\metalamp_2\\\\node_modules\\\\node-sass\\\\lib\\\\index.js:293:32)\");\n\n//# sourceURL=webpack://metalamp_2/./assets/styles/style.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/scripts/index.js");
/******/ 	
/******/ })()
;