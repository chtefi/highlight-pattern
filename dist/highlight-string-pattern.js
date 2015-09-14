(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["library-boilerplate"] = factory();
	else
		root["library-boilerplate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	__webpack_require__(1);

	exports['default'] = function (str, pattern) {
	  var onlyRepeatedStr = '';
	  var lastMatchIndex = -1;
	  var spaces = function spaces(n) {
	    return new Array(n).fill('-').join('');
	  };

	  while ((lastMatchIndex = str.indexOf(pattern, lastMatchIndex)) >= 0) {
	    // eslint-disable-line no-cond-assign
	    onlyRepeatedStr += spaces(lastMatchIndex - onlyRepeatedStr.length) + pattern;
	    // shift the beginning of the next loop .indexOf
	    lastMatchIndex += pattern.length;
	  }
	  onlyRepeatedStr += spaces(str.length - onlyRepeatedStr.length);

	  return onlyRepeatedStr;
	};

	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	// https://gist.github.com/addyosmani/d5648c89420eb333904c
	// addyosmani/array.prototype.fill.js

	"use strict";

	if (![].fill) {
	    Array.prototype.fill = function (value) {

	        var O = Object(this);
	        var len = parseInt(O.length, 10);
	        var start = arguments[1];
	        var relativeStart = parseInt(start, 10) || 0;
	        var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);
	        var end = arguments[2];
	        var relativeEnd = end === undefined ? len : parseInt(end) || 0;
	        var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);

	        for (; k < final; k++) {
	            O[k] = value;
	        }

	        return O;
	    };
	}

/***/ }
/******/ ])
});
;