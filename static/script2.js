UNPKG
material-components-web
Version:

Modular and customizable Material Design UI components for the web
material-components-web / dist / material-components-web.js
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("material-components-web", [], factory);
	else if(typeof exports === 'object')
		exports["mdc"] = factory();
	else
		root["mdc"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/material-components-web/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/material-components-web/index.ts":
/*!***************************************************!*\
  !*** ./packages/material-components-web/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.topAppBar = exports.tooltip = exports.textField = exports.tabScroller = exports.tabIndicator = exports.tabBar = exports.tab = exports.switchControl = exports.snackbar = exports.slider = exports.select = exports.segmentedButton = exports.ripple = exports.radio = exports.notchedOutline = exports.menuSurface = exports.menu = exports.list = exports.linearProgress = exports.lineRipple = exports.iconButton = exports.formField = exports.floatingLabel = exports.drawer = exports.dom = exports.dialog = exports.dataTable = exports.circularProgress = exports.chips = exports.checkbox = exports.base = exports.banner = exports.autoInit = void 0;
var index_1 = __importDefault(__webpack_require__(/*! @material/auto-init/index */ "./packages/mdc-auto-init/index.ts"));
exports.autoInit = index_1.default;
var banner = __importStar(__webpack_require__(/*! @material/banner/index */ "./packages/mdc-banner/index.ts"));
exports.banner = banner;
var base = __importStar(__webpack_require__(/*! @material/base/index */ "./packages/mdc-base/index.ts"));
exports.base = base;
var checkbox = __importStar(__webpack_require__(/*! @material/checkbox/index */ "./packages/mdc-checkbox/index.ts"));
exports.checkbox = checkbox;
var chips = __importStar(__webpack_require__(/*! @material/chips/deprecated/index */ "./packages/mdc-chips/deprecated/index.ts"));
exports.chips = chips;
var circularProgress = __importStar(__webpack_require__(/*! @material/circular-progress/index */ "./packages/mdc-circular-progress/index.ts"));
exports.circularProgress = circularProgress;
var dataTable = __importStar(__webpack_require__(/*! @material/data-table/index */ "./packages/mdc-data-table/index.ts"));
exports.dataTable = dataTable;
var dialog = __importStar(__webpack_require__(/*! @material/dialog/index */ "./packages/mdc-dialog/index.ts"));
exports.dialog = dialog;
var dom = __importStar(__webpack_require__(/*! @material/dom/index */ "./packages/mdc-dom/index.ts"));
exports.dom = dom;
var drawer = __importStar(__webpack_require__(/*! @material/drawer/index */ "./packages/mdc-drawer/index.ts"));
exports.drawer = drawer;
var floatingLabel = __importStar(__webpack_require__(/*! @material/floating-label/index */ "./packages/mdc-floating-label/index.ts"));
exports.floatingLabel = floatingLabel;
var formField = __importStar(__webpack_require__(/*! @material/form-field/index */ "./packages/mdc-form-field/index.ts"));
exports.formField = formField;
var iconButton = __importStar(__webpack_require__(/*! @material/icon-button/index */ "./packages/mdc-icon-button/index.ts"));
exports.iconButton = iconButton;
var lineRipple = __importStar(__webpack_require__(/*! @material/line-ripple/index */ "./packages/mdc-line-ripple/index.ts"));
exports.lineRipple = lineRipple;
var linearProgress = __importStar(__webpack_require__(/*! @material/linear-progress/index */ "./packages/mdc-linear-progress/index.ts"));
exports.linearProgress = linearProgress;
var list = __importStar(__webpack_require__(/*! @material/list/index */ "./packages/mdc-list/index.ts"));
exports.list = list;
var menuSurface = __importStar(__webpack_require__(/*! @material/menu-surface/index */ "./packages/mdc-menu-surface/index.ts"));
exports.menuSurface = menuSurface;
var menu = __importStar(__webpack_require__(/*! @material/menu/index */ "./packages/mdc-menu/index.ts"));
exports.menu = menu;
var notchedOutline = __importStar(__webpack_require__(/*! @material/notched-outline/index */ "./packages/mdc-notched-outline/index.ts"));
exports.notchedOutline = notchedOutline;
var radio = __importStar(__webpack_require__(/*! @material/radio/index */ "./packages/mdc-radio/index.ts"));
exports.radio = radio;
var ripple = __importStar(__webpack_require__(/*! @material/ripple/index */ "./packages/mdc-ripple/index.ts"));
exports.ripple = ripple;
var segmentedButton = __importStar(__webpack_require__(/*! @material/segmented-button/index */ "./packages/mdc-segmented-button/index.ts"));
exports.segmentedButton = segmentedButton;
var select = __importStar(__webpack_require__(/*! @material/select/index */ "./packages/mdc-select/index.ts"));
exports.select = select;
var slider = __importStar(__webpack_require__(/*! @material/slider/index */ "./packages/mdc-slider/index.ts"));
exports.slider = slider;
var snackbar = __importStar(__webpack_require__(/*! @material/snackbar/index */ "./packages/mdc-snackbar/index.ts"));
exports.snackbar = snackbar;
var switchControl = __importStar(__webpack_require__(/*! @material/switch/index */ "./packages/mdc-switch/index.ts"));
exports.switchControl = switchControl;
var tabBar = __importStar(__webpack_require__(/*! @material/tab-bar/index */ "./packages/mdc-tab-bar/index.ts"));
exports.tabBar = tabBar;
var tabIndicator = __importStar(__webpack_require__(/*! @material/tab-indicator/index */ "./packages/mdc-tab-indicator/index.ts"));
exports.tabIndicator = tabIndicator;
var tabScroller = __importStar(__webpack_require__(/*! @material/tab-scroller/index */ "./packages/mdc-tab-scroller/index.ts"));
exports.tabScroller = tabScroller;
var tab = __importStar(__webpack_require__(/*! @material/tab/index */ "./packages/mdc-tab/index.ts"));
exports.tab = tab;
var textField = __importStar(__webpack_require__(/*! @material/textfield/index */ "./packages/mdc-textfield/index.ts"));
exports.textField = textField;
var tooltip = __importStar(__webpack_require__(/*! @material/tooltip/index */ "./packages/mdc-tooltip/index.ts"));
exports.tooltip = tooltip;
var topAppBar = __importStar(__webpack_require__(/*! @material/top-app-bar/index */ "./packages/mdc-top-app-bar/index.ts"));
exports.topAppBar = topAppBar;
// Register all components
index_1.default.register('MDCBanner', banner.MDCBanner);
index_1.default.register('MDCCheckbox', checkbox.MDCCheckbox);
index_1.default.register('MDCChip', chips.MDCChip);
index_1.default.register('MDCChipSet', chips.MDCChipSet);
index_1.default.register('MDCCircularProgress', circularProgress.MDCCircularProgress);
index_1.default.register('MDCDataTable', dataTable.MDCDataTable);
index_1.default.register('MDCDialog', dialog.MDCDialog);
index_1.default.register('MDCDrawer', drawer.MDCDrawer);
index_1.default.register('MDCFloatingLabel', floatingLabel.MDCFloatingLabel);
index_1.default.register('MDCFormField', formField.MDCFormField);
index_1.default.register('MDCIconButtonToggle', iconButton.MDCIconButtonToggle);
index_1.default.register('MDCLineRipple', lineRipple.MDCLineRipple);
index_1.default.register('MDCLinearProgress', linearProgress.MDCLinearProgress);
index_1.default.register('MDCList', list.MDCList);
index_1.default.register('MDCMenu', menu.MDCMenu);
index_1.default.register('MDCMenuSurface', menuSurface.MDCMenuSurface);
index_1.default.register('MDCNotchedOutline', notchedOutline.MDCNotchedOutline);
index_1.default.register('MDCRadio', radio.MDCRadio);
index_1.default.register('MDCRipple', ripple.MDCRipple);
index_1.default.register('MDCSegmentedButton', segmentedButton.MDCSegmentedButton);
index_1.default.register('MDCSelect', select.MDCSelect);
index_1.default.register('MDCSlider', slider.MDCSlider);
index_1.default.register('MDCSnackbar', snackbar.MDCSnackbar);
index_1.default.register('MDCSwitch', switchControl.MDCSwitch);
index_1.default.register('MDCTabBar', tabBar.MDCTabBar);
index_1.default.register('MDCTextField', textField.MDCTextField);
index_1.default.register('MDCTooltip', tooltip.MDCTooltip);
index_1.default.register('MDCTopAppBar', topAppBar.MDCTopAppBar);

/***/ }),

/***/ "./packages/mdc-animation/animationframe.ts":
/*!**************************************************!*\
  !*** ./packages/mdc-animation/animationframe.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationFrame = void 0;
/**
 * AnimationFrame provides a user-friendly abstraction around requesting
 * and canceling animation frames.
 */
var AnimationFrame = /** @class */function () {
    function AnimationFrame() {
        this.rafIDs = new Map();
    }
    /**
     * Requests an animation frame. Cancels any existing frame with the same key.
     * @param {string} key The key for this callback.
     * @param {FrameRequestCallback} callback The callback to be executed.
     */
    AnimationFrame.prototype.request = function (key, callback) {
        var _this = this;
        this.cancel(key);
        var frameID = requestAnimationFrame(function (frame) {
            _this.rafIDs.delete(key);
            // Callback must come *after* the key is deleted so that nested calls to
            // request with the same key are not deleted.
            callback(frame);
        });
        this.rafIDs.set(key, frameID);
    };
    /**
     * Cancels a queued callback with the given key.
     * @param {string} key The key for this callback.
     */
    AnimationFrame.prototype.cancel = function (key) {
        var rafID = this.rafIDs.get(key);
        if (rafID) {
            cancelAnimationFrame(rafID);
            this.rafIDs.delete(key);
        }
    };
    /**
     * Cancels all queued callback.
     */
    AnimationFrame.prototype.cancelAll = function () {
        var _this = this;
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            _this.cancel(key);
        });
    };
    /**
     * Returns the queue of unexecuted callback keys.
     */
    AnimationFrame.prototype.getQueue = function () {
        var queue = [];
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            queue.push(key);
        });
        return queue;
    };
    return AnimationFrame;
}();
exports.AnimationFrame = AnimationFrame;

/***/ }),

/***/ "./packages/mdc-animation/util.ts":
/*!****************************************!*\
  !*** ./packages/mdc-animation/util.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCorrectEventName = exports.getCorrectPropertyName = void 0;
var cssPropertyNameMap = {
    animation: {
        prefixed: '-webkit-animation',
        standard: 'animation'
    },
    transform: {
        prefixed: '-webkit-transform',
        standard: 'transform'
    },
    transition: {
        prefixed: '-webkit-transition',
        standard: 'transition'
    }
};
var jsEventTypeMap = {
    animationend: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationEnd',
        standard: 'animationend'
    },
    animationiteration: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationIteration',
        standard: 'animationiteration'
    },
    animationstart: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationStart',
        standard: 'animationstart'
    },
    transitionend: {
        cssProperty: 'transition',
        prefixed: 'webkitTransitionEnd',
        standard: 'transitionend'
    }
};
function isWindow(windowObj) {
    return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}
function getCorrectPropertyName(windowObj, cssProperty) {
    if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
        var el = windowObj.document.createElement('div');
        var _a = cssPropertyNameMap[cssProperty],
            standard = _a.standard,
            prefixed = _a.prefixed;
        var isStandard = standard in el.style;
        return isStandard ? standard : prefixed;
    }
    return cssProperty;
}
exports.getCorrectPropertyName = getCorrectPropertyName;
function getCorrectEventName(windowObj, eventType) {
    if (isWindow(windowObj) && eventType in jsEventTypeMap) {
        var el = windowObj.document.createElement('div');
        var _a = jsEventTypeMap[eventType],
            standard = _a.standard,
            prefixed = _a.prefixed,
            cssProperty = _a.cssProperty;
        var isStandard = cssProperty in el.style;
        return isStandard ? standard : prefixed;
    }
    return eventType;
}
exports.getCorrectEventName = getCorrectEventName;

/***/ }),

/***/ "./packages/mdc-auto-init/constants.ts":
/*!*********************************************!*\
  !*** ./packages/mdc-auto-init/constants.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.strings = void 0;
exports.strings = {
  AUTO_INIT_ATTR: 'data-mdc-auto-init',
  AUTO_INIT_STATE_ATTR: 'data-mdc-auto-init-state',
  INITIALIZED_STATE: 'initialized'
};

/***/ }),

/***/ "./packages/mdc-auto-init/index.ts":
/*!*****************************************!*\
  !*** ./packages/mdc-auto-init/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __values = this && this.__values || function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mdcAutoInit = void 0;
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-auto-init/constants.ts");
var AUTO_INIT_ATTR = constants_1.strings.AUTO_INIT_ATTR,
    AUTO_INIT_STATE_ATTR = constants_1.strings.AUTO_INIT_STATE_ATTR,
    INITIALIZED_STATE = constants_1.strings.INITIALIZED_STATE;
var registry = {};
var CONSOLE_WARN = console.warn.bind(console); // tslint:disable-line:no-console
function emit(evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
        shouldBubble = false;
    }
    var evt;
    if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
            bubbles: shouldBubble,
            detail: evtData
        });
    } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }
    document.dispatchEvent(evt);
}
/* istanbul ignore next: optional argument is not a branch statement */
/**
 * Auto-initializes all MDC components on a page.
 */
function mdcAutoInit(root) {
    var e_1, _a;
    if (root === void 0) {
        root = document;
    }
    var components = [];
    var nodes = [].slice.call(root.querySelectorAll("[" + AUTO_INIT_ATTR + "]"));
    nodes = nodes.filter(function (node) {
        return node.getAttribute(AUTO_INIT_STATE_ATTR) !== INITIALIZED_STATE;
    });
    try {
        for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
            var node = nodes_1_1.value;
            var ctorName = node.getAttribute(AUTO_INIT_ATTR);
            if (!ctorName) {
                throw new Error('(mdc-auto-init) Constructor name must be given.');
            }
            var Constructor = registry[ctorName]; // tslint:disable-line:variable-name
            if (typeof Constructor !== 'function') {
                throw new Error("(mdc-auto-init) Could not find constructor in registry for " + ctorName);
            }
            // TODO: Should we make an eslint rule for an attachTo() static method?
            // See https://github.com/Microsoft/TypeScript/issues/14600 for discussion of static interface support in TS
            var component = Constructor.attachTo(node);
            Object.defineProperty(node, ctorName, {
                configurable: true,
                enumerable: false,
                value: component,
                writable: false
            });
            components.push(component);
            node.setAttribute(AUTO_INIT_STATE_ATTR, INITIALIZED_STATE);
        }
    } catch (e_1_1) {
        e_1 = { error: e_1_1 };
    } finally {
        try {
            if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
        } finally {
            if (e_1) throw e_1.error;
        }
    }
    emit('MDCAutoInit:End', {});
    return components;
}
exports.mdcAutoInit = mdcAutoInit;
// Constructor is PascalCased because it is a direct reference to a class, rather than an instance of a class.
// tslint:disable-next-line:variable-name
mdcAutoInit.register = function (componentName, Constructor, warn) {
    if (warn === void 0) {
        warn = CONSOLE_WARN;
    }
    if (typeof Constructor !== 'function') {
        throw new Error("(mdc-auto-init) Invalid Constructor value: " + Constructor + ". Expected function.");
    }
    var registryValue = registry[componentName];
    if (registryValue) {
        warn("(mdc-auto-init) Overriding registration for " + componentName + " with " + Constructor + ". Was: " + registryValue);
    }
    registry[componentName] = Constructor;
};
mdcAutoInit.deregister = function (componentName) {
    delete registry[componentName];
};
/** @nocollapse */
mdcAutoInit.deregisterAll = function () {
    var e_2, _a;
    try {
        for (var _b = __values(Object.keys(registry)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var componentName = _c.value;
            mdcAutoInit.deregister(componentName);
        }
    } catch (e_2_1) {
        e_2 = { error: e_2_1 };
    } finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
            if (e_2) throw e_2.error;
        }
    }
};
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = mdcAutoInit;

/***/ }),

/***/ "./packages/mdc-banner/adapter.ts":
/*!****************************************!*\
  !*** ./packages/mdc-banner/adapter.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });

/***/ }),

/***/ "./packages/mdc-banner/component.ts":
/*!******************************************!*\
  !*** ./packages/mdc-banner/component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDCBanner = void 0;
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var focus_trap_1 = __webpack_require__(/*! @material/dom/focus-trap */ "./packages/mdc-dom/focus-trap.ts");
var ponyfill_1 = __webpack_require__(/*! @material/dom/ponyfill */ "./packages/mdc-dom/ponyfill.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-banner/constants.ts");
var foundation_1 = __webpack_require__(/*! ./foundation */ "./packages/mdc-banner/foundation.ts");
/** Vanilla JS implementation of banner component. */
var MDCBanner = /** @class */function (_super) {
    __extends(MDCBanner, _super);
    function MDCBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCBanner.attachTo = function (root) {
        return new MDCBanner(root);
    };
    MDCBanner.prototype.initialize = function (focusTrapFactory) {
        var _this = this;
        if (focusTrapFactory === void 0) {
            focusTrapFactory = function focusTrapFactory(el, focusOptions) {
                return new focus_trap_1.FocusTrap(el, focusOptions);
            };
        }
        this.contentEl = this.root.querySelector(constants_1.selectors.CONTENT);
        this.textEl = this.root.querySelector(constants_1.selectors.TEXT);
        this.primaryActionEl = this.root.querySelector(constants_1.selectors.PRIMARY_ACTION);
        this.secondaryActionEl = this.root.querySelector(constants_1.selectors.SECONDARY_ACTION);
        this.focusTrapFactory = focusTrapFactory;
        this.handleContentClick = function (evt) {
            var target = evt.target;
            if (ponyfill_1.closest(target, constants_1.selectors.PRIMARY_ACTION)) {
                _this.foundation.handlePrimaryActionClick();
            } else if (ponyfill_1.closest(target, constants_1.selectors.SECONDARY_ACTION)) {
                _this.foundation.handleSecondaryActionClick();
            }
        };
    };
    MDCBanner.prototype.initialSyncWithDOM = function () {
        this.registerContentClickHandler(this.handleContentClick);
        this.focusTrap = this.focusTrapFactory(this.root, { initialFocusEl: this.primaryActionEl });
    };
    MDCBanner.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.deregisterContentClickHandler(this.handleContentClick);
    };
    MDCBanner.prototype.layout = function () {
        this.foundation.layout();
    };
    /**
     * Opens the banner and fires events.OPENING to indicate the beginning of its
     * opening animation and then events.OPENED once the animation finishes.
     */
    MDCBanner.prototype.open = function () {
        this.foundation.open();
    };
    /**
     * Closes the banner and fires events.CLOSING to indicate the beginning of its
     * closing animation and then events.CLOSED once the animation finishes.
     * @param reason Why the banner was closed. Value will be passed to
     *     events.CLOSING and events.CLOSED via the `event.detail.reason`
     *     property. Standard values are CloseReason.PRIMARY and
     *     CloseReason.SECONDARY, but CloseReason.UNSPECIFIED is provided for
     *     custom handling of programmatic closing of the banner.
     */
    MDCBanner.prototype.close = function (reason) {
        this.foundation.close(reason);
    };
    MDCBanner.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function addClass(className) {
                _this.root.classList.add(className);
            },
            getContentHeight: function getContentHeight() {
                return _this.contentEl.offsetHeight;
            },
            notifyClosed: function notifyClosed(reason) {
                _this.emit(constants_1.events.CLOSED, { reason: reason });
            },
            notifyClosing: function notifyClosing(reason) {
                _this.emit(constants_1.events.CLOSING, { reason: reason });
            },
            notifyOpened: function notifyOpened() {
                _this.emit(constants_1.events.OPENED, {});
            },
            notifyOpening: function notifyOpening() {
                _this.emit(constants_1.events.OPENING, {});
            },
            notifyActionClicked: function notifyActionClicked(action) {
                _this.emit(constants_1.events.ACTION_CLICKED, { action: action });
            },
            releaseFocus: function releaseFocus() {
                _this.focusTrap.releaseFocus();
            },
            removeClass: function removeClass(className) {
                _this.root.classList.remove(className);
            },
            setStyleProperty: function setStyleProperty(propertyName, value) {
                _this.root.style.setProperty(propertyName, value);
            },
            trapFocus: function trapFocus() {
                _this.focusTrap.trapFocus();
            }
        };
        return new foundation_1.MDCBannerFoundation(adapter);
    };
    Object.defineProperty(MDCBanner.prototype, "isOpen", {
        get: function get() {
            return this.foundation.isOpen();
        },
        enumerable: false,
        configurable: true
    });
    MDCBanner.prototype.getText = function () {
        return this.textEl.textContent || '';
    };
    MDCBanner.prototype.setText = function (text) {
        this.textEl.textContent = text;
    };
    MDCBanner.prototype.getPrimaryActionText = function () {
        return this.primaryActionEl.textContent || '';
    };
    MDCBanner.prototype.setPrimaryActionText = function (actionButtonText) {
        this.primaryActionEl.textContent = actionButtonText;
    };
    /** Returns null if the banner has no secondary action. */
    MDCBanner.prototype.getSecondaryActionText = function () {
        return this.secondaryActionEl ? this.secondaryActionEl.textContent || '' : null;
    };
    MDCBanner.prototype.setSecondaryActionText = function (actionButtonText) {
        if (this.secondaryActionEl) {
            this.secondaryActionEl.textContent = actionButtonText;
        }
    };
    MDCBanner.prototype.registerContentClickHandler = function (handler) {
        this.contentEl.addEventListener('click', handler);
    };
    MDCBanner.prototype.deregisterContentClickHandler = function (handler) {
        this.contentEl.removeEventListener('click', handler);
    };
    return MDCBanner;
}(component_1.MDCComponent);
exports.MDCBanner = MDCBanner;

/***/ }),

/***/ "./packages/mdc-banner/constants.ts":
/*!******************************************!*\
  !*** ./packages/mdc-banner/constants.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.CloseReason = exports.selectors = exports.events = exports.numbers = exports.cssClasses = void 0;
/** Banner element classes. */
exports.cssClasses = {
    CLOSING: 'mdc-banner--closing',
    OPEN: 'mdc-banner--open',
    OPENING: 'mdc-banner--opening'
};
/** Banner numbers. */
exports.numbers = {
    BANNER_ANIMATION_CLOSE_TIME_MS: 250,
    BANNER_ANIMATION_OPEN_TIME_MS: 300
};
/** Banner events. */
exports.events = {
    CLOSED: 'MDCBanner:closed',
    CLOSING: 'MDCBanner:closing',
    OPENED: 'MDCBanner:opened',
    OPENING: 'MDCBanner:opening',
    ACTION_CLICKED: 'MDCBanner:actionClicked'
};
/** Banner selectors. */
exports.selectors = {
    CONTENT: '.mdc-banner__content',
    PRIMARY_ACTION: '.mdc-banner__primary-action',
    SECONDARY_ACTION: '.mdc-banner__secondary-action',
    TEXT: '.mdc-banner__text'
};
/** Reason as to why the banner was closed. */
var CloseReason;
(function (CloseReason) {
    // Indicates the banner was closed via primary action button.
    CloseReason[CloseReason["PRIMARY"] = 0] = "PRIMARY";
    // Indicates the banner was closed via secondary action button.
    CloseReason[CloseReason["SECONDARY"] = 1] = "SECONDARY";
    // Will never be used by the component. Provided for custom handling of
    // programmatic closing of the banner.
    CloseReason[CloseReason["UNSPECIFIED"] = 2] = "UNSPECIFIED";
})(CloseReason = exports.CloseReason || (exports.CloseReason = {}));
/**
 * Payload of actionClicked events to signify which action emitted the event.
 */
var Action;
(function (Action) {
    Action[Action["PRIMARY"] = 0] = "PRIMARY";
    Action[Action["SECONDARY"] = 1] = "SECONDARY";
    Action[Action["UNKNOWN"] = 2] = "UNKNOWN";
})(Action = exports.Action || (exports.Action = {}));

/***/ }),

/***/ "./packages/mdc-banner/foundation.ts":
/*!*******************************************!*\
  !*** ./packages/mdc-banner/foundation.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDCBannerFoundation = void 0;
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-banner/constants.ts");
var OPENING = constants_1.cssClasses.OPENING,
    OPEN = constants_1.cssClasses.OPEN,
    CLOSING = constants_1.cssClasses.CLOSING;
/**
 * Foundation class for banner. Responsibilities include opening and closing the
 * banner.
 */
var MDCBannerFoundation = /** @class */function (_super) {
    __extends(MDCBannerFoundation, _super);
    function MDCBannerFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCBannerFoundation.defaultAdapter), adapter)) || this;
        _this.isOpened = false;
        // Request id for open animation, used to cancel the refresh callback
        // request on close() and destroy().
        _this.animationFrame = 0;
        // Timer id for close and open animation, used to cancel the timer on
        // close() and destroy().
        _this.animationTimer = 0;
        return _this;
    }
    Object.defineProperty(MDCBannerFoundation, "defaultAdapter", {
        get: function get() {
            return {
                addClass: function addClass() {
                    return undefined;
                },
                getContentHeight: function getContentHeight() {
                    return 0;
                },
                notifyClosed: function notifyClosed() {
                    return undefined;
                },
                notifyClosing: function notifyClosing() {
                    return undefined;
                },
                notifyOpened: function notifyOpened() {
                    return undefined;
                },
                notifyOpening: function notifyOpening() {
                    return undefined;
                },
                notifyActionClicked: function notifyActionClicked() {
                    return undefined;
                },
                releaseFocus: function releaseFocus() {
                    return undefined;
                },
                removeClass: function removeClass() {
                    return undefined;
                },
                setStyleProperty: function setStyleProperty() {
                    return undefined;
                },
                trapFocus: function trapFocus() {
                    return undefined;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCBannerFoundation.prototype.destroy = function () {
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        clearTimeout(this.animationTimer);
        this.animationTimer = 0;
    };
    MDCBannerFoundation.prototype.open = function () {
        var _this = this;
        this.isOpened = true;
        this.adapter.notifyOpening();
        this.adapter.removeClass(CLOSING);
        this.adapter.addClass(OPENING);
        var contentHeight = this.adapter.getContentHeight();
        this.animationFrame = requestAnimationFrame(function () {
            _this.adapter.addClass(OPEN);
            _this.adapter.setStyleProperty('height', contentHeight + "px");
            _this.animationTimer = setTimeout(function () {
                _this.handleAnimationTimerEnd();
                _this.adapter.trapFocus();
                _this.adapter.notifyOpened();
            }, constants_1.numbers.BANNER_ANIMATION_OPEN_TIME_MS);
        });
    };
    /**
     * @param reason Why the banner was closed. Value will be passed to
     *     events.CLOSING and events.CLOSED via the `event.detail.reason`
     *     property. Standard values are CloseReason.PRIMARY and
     *     CloseReason.SECONDARY, but CloseReason.UNSPECIFIED 
