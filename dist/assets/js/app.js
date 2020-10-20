/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/foundation-sites/js/foundation.accordion.js":
/*!******************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.accordion.js ***!
  \******************************************************************/
/*! exports provided: Accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./node_modules/foundation-sites/js/foundation.util.keyboard.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 */

var Accordion =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Accordion, _Plugin);

  function Accordion() {
    _classCallCheck(this, Accordion);

    return _possibleConstructorReturn(this, _getPrototypeOf(Accordion).apply(this, arguments));
  }

  _createClass(Accordion, [{
    key: "_setup",

    /**
     * Creates a new instance of an accordion.
     * @class
     * @name Accordion
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Accordion.defaults, this.$element.data(), options);
      this.className = 'Accordion'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].register('Accordion', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ARROW_DOWN': 'next',
        'ARROW_UP': 'previous'
      });
    }
    /**
     * Initializes the accordion by animating the preset active pane(s).
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;

      this._isInitializing = true;
      this.$element.attr('role', 'tablist');
      this.$tabs = this.$element.children('[data-accordion-item]');
      this.$tabs.attr({
        'role': 'presentation'
      });
      this.$tabs.each(function (idx, el) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el),
            $content = $el.children('[data-tab-content]'),
            id = $content[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'accordion'),
            linkId = el.id ? "".concat(el.id, "-label") : "".concat(id, "-label");
        $el.find('a:first').attr({
          'aria-controls': id,
          'role': 'tab',
          'id': linkId,
          'aria-expanded': false,
          'aria-selected': false
        });
        $content.attr({
          'role': 'tabpanel',
          'aria-labelledby': linkId,
          'aria-hidden': true,
          'id': id
        });
      });
      var $initActive = this.$element.find('.is-active').children('[data-tab-content]');

      if ($initActive.length) {
        // Save up the initial hash to return to it later when going back in history
        this._initialAnchor = $initActive.prev('a').attr('href');

        this._openSingleTab($initActive);
      }

      this._checkDeepLink = function () {
        var anchor = window.location.hash;

        if (!anchor.length) {
          // If we are still initializing and there is no anchor, then there is nothing to do
          if (_this2._isInitializing) return; // Otherwise, move to the initial anchor

          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
        }

        var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);

        var $link = anchor && _this2.$element.find("[href$=\"".concat(anchor, "\"]")); // Whether the anchor element that has been found is part of this element


        var isOwnAnchor = !!($anchor.length && $link.length);

        if (isOwnAnchor) {
          // If there is an anchor for the hash, open it (if not already active)
          if ($anchor && $link && $link.length) {
            if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
              _this2._openSingleTab($anchor);
            }
          } // Otherwise, close everything
          else {
              _this2._closeAllTabs();
            } // Roll up a little to show the titles


          if (_this2.options.deepLinkSmudge) {
            Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
              var offset = _this2.$element.offset();

              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
                scrollTop: offset.top - _this2.options.deepLinkSmudgeOffset
              }, _this2.options.deepLinkSmudgeDelay);
            });
          }
          /**
           * Fires when the plugin has deeplinked at pageload
           * @event Accordion#deeplink
           */


          _this2.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
        }
      }; //use browser to open a tab, if it exists in this tabset


      if (this.options.deepLink) {
        this._checkDeepLink();
      }

      this._events();

      this._isInitializing = false;
    }
    /**
     * Adds event handlers for items within the accordion.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this.$tabs.each(function () {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var $tabContent = $elem.children('[data-tab-content]');

        if ($tabContent.length) {
          $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function (e) {
            e.preventDefault();

            _this.toggle($tabContent);
          }).on('keydown.zf.accordion', function (e) {
            _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].handleKey(e, 'Accordion', {
              toggle: function toggle() {
                _this.toggle($tabContent);
              },
              next: function next() {
                var $a = $elem.next().find('a').focus();

                if (!_this.options.multiExpand) {
                  $a.trigger('click.zf.accordion');
                }
              },
              previous: function previous() {
                var $a = $elem.prev().find('a').focus();

                if (!_this.options.multiExpand) {
                  $a.trigger('click.zf.accordion');
                }
              },
              handled: function handled() {
                e.preventDefault();
              }
            });
          });
        }
      });

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
      }
    }
    /**
     * Toggles the selected content pane's open/close state.
     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
     * @function
     */

  }, {
    key: "toggle",
    value: function toggle($target) {
      if ($target.closest('[data-accordion]').is('[disabled]')) {
        console.info('Cannot toggle an accordion that is disabled.');
        return;
      }

      if ($target.parent().hasClass('is-active')) {
        this.up($target);
      } else {
        this.down($target);
      } //either replace or update browser history


      if (this.options.deepLink) {
        var anchor = $target.prev('a').attr('href');

        if (this.options.updateHistory) {
          history.pushState({}, '', anchor);
        } else {
          history.replaceState({}, '', anchor);
        }
      }
    }
    /**
     * Opens the accordion tab defined by `$target`.
     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     */

  }, {
    key: "down",
    value: function down($target) {
      if ($target.closest('[data-accordion]').is('[disabled]')) {
        console.info('Cannot call down on an accordion that is disabled.');
        return;
      }

      if (this.options.multiExpand) this._openTab($target);else this._openSingleTab($target);
    }
    /**
     * Closes the tab defined by `$target`.
     * It may be ignored if the Accordion options don't allow it.
     *
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     */

  }, {
    key: "up",
    value: function up($target) {
      if (this.$element.is('[disabled]')) {
        console.info('Cannot call up on an accordion that is disabled.');
        return;
      } // Don't close the item if it is already closed


      var $targetItem = $target.parent();
      if (!$targetItem.hasClass('is-active')) return; // Don't close the item if there is no other active item (unless with `allowAllClosed`)

      var $othersItems = $targetItem.siblings();
      if (!this.options.allowAllClosed && !$othersItems.hasClass('is-active')) return;

      this._closeTab($target);
    }
    /**
     * Make the tab defined by `$target` the only opened tab, closing all others tabs.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @function
     * @private
     */

  }, {
    key: "_openSingleTab",
    value: function _openSingleTab($target) {
      // Close all the others active tabs.
      var $activeContents = this.$element.children('.is-active').children('[data-tab-content]');

      if ($activeContents.length) {
        this._closeTab($activeContents.not($target));
      } // Then open the target.


      this._openTab($target);
    }
    /**
     * Opens the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     * @private
     */

  }, {
    key: "_openTab",
    value: function _openTab($target) {
      var _this3 = this;

      var $targetItem = $target.parent();
      var targetContentId = $target.attr('aria-labelledby');
      $target.attr('aria-hidden', false);
      $targetItem.addClass('is-active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
        'aria-expanded': true,
        'aria-selected': true
      });
      $target.finish().slideDown(this.options.slideSpeed, function () {
        /**
         * Fires when the tab is done opening.
         * @event Accordion#down
         */
        _this3.$element.trigger('down.zf.accordion', [$target]);
      });
    }
    /**
     * Closes the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     * @private
     */

  }, {
    key: "_closeTab",
    value: function _closeTab($target) {
      var _this4 = this;

      var $targetItem = $target.parent();
      var targetContentId = $target.attr('aria-labelledby');
      $target.attr('aria-hidden', true);
      $targetItem.removeClass('is-active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
        'aria-expanded': false,
        'aria-selected': false
      });
      $target.finish().slideUp(this.options.slideSpeed, function () {
        /**
         * Fires when the tab is done collapsing up.
         * @event Accordion#up
         */
        _this4.$element.trigger('up.zf.accordion', [$target]);
      });
    }
    /**
     * Closes all active tabs
     * @fires Accordion#up
     * @function
     * @private
     */

  }, {
    key: "_closeAllTabs",
    value: function _closeAllTabs() {
      var $activeTabs = this.$element.children('.is-active').children('[data-tab-content]');

      if ($activeTabs.length) {
        this._closeTab($activeTabs);
      }
    }
    /**
     * Destroys an instance of an accordion.
     * @fires Accordion#destroyed
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
      this.$element.find('a').off('.zf.accordion');

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
      }
    }
  }]);

  return Accordion;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

Accordion.defaults = {
  /**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,

  /**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */
  multiExpand: false,

  /**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */
  allowAllClosed: false,

  /**
   * Link the location hash to the open pane.
   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,

  /**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinkSmudge: false,

  /**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
  deepLinkSmudgeDelay: 300,

  /**
   * If `deepLinkSmudge` is enabled, the offset for scrollToTtop to prevent overlap by a sticky element at the top of the page
   * @option
   * @type {number}
   * @default 0
   */
  deepLinkSmudgeOffset: 0,

  /**
   * If `deepLink` is enabled, update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.accordionMenu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.accordionMenu.js ***!
  \**********************************************************************/
/*! exports provided: AccordionMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionMenu", function() { return AccordionMenu; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./node_modules/foundation-sites/js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ "./node_modules/foundation-sites/js/foundation.util.nest.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 */

var AccordionMenu =
/*#__PURE__*/
function (_Plugin) {
  _inherits(AccordionMenu, _Plugin);

  function AccordionMenu() {
    _classCallCheck(this, AccordionMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(AccordionMenu).apply(this, arguments));
  }

  _createClass(AccordionMenu, [{
    key: "_setup",

    /**
     * Creates a new instance of an accordion menu.
     * @class
     * @name AccordionMenu
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, AccordionMenu.defaults, this.$element.data(), options);
      this.className = 'AccordionMenu'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('AccordionMenu', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ARROW_RIGHT': 'open',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'close',
        'ESCAPE': 'closeAll'
      });
    }
    /**
     * Initializes the accordion menu by hiding all nested menus.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Feather(this.$element, 'accordion');

      var _this = this;

      this.$element.find('[data-submenu]').not('.is-active').slideUp(0); //.find('a').css('padding-left', '1rem');

      this.$element.attr({
        'role': 'tree',
        'aria-multiselectable': this.options.multiOpen
      });
      this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
      this.$menuLinks.each(function () {
        var linkId = this.id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'acc-menu-link'),
            $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $sub = $elem.children('[data-submenu]'),
            subId = $sub[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'acc-menu'),
            isActive = $sub.hasClass('is-active');

        if (_this.options.parentLink) {
          var $anchor = $elem.children('a');
          $anchor.clone().prependTo($sub).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');
        }

        if (_this.options.submenuToggle) {
          $elem.addClass('has-submenu-toggle');
          $elem.children('a').after('<button id="' + linkId + '" class="submenu-toggle" aria-controls="' + subId + '" aria-expanded="' + isActive + '" title="' + _this.options.submenuToggleText + '"><span class="submenu-toggle-text">' + _this.options.submenuToggleText + '</span></button>');
        } else {
          $elem.attr({
            'aria-controls': subId,
            'aria-expanded': isActive,
            'id': linkId
          });
        }

        $sub.attr({
          'aria-labelledby': linkId,
          'aria-hidden': !isActive,
          'role': 'group',
          'id': subId
        });
      });
      this.$element.find('li').attr({
        'role': 'treeitem'
      });
      var initPanes = this.$element.find('.is-active');

      if (initPanes.length) {
        initPanes.each(function () {
          _this.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
        });
      }

      this._events();
    }
    /**
     * Adds event handlers for items within the menu.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this.$element.find('li').each(function () {
        var $submenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]');

        if ($submenu.length) {
          if (_this.options.submenuToggle) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('.submenu-toggle').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
              _this.toggle($submenu);
            });
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
              e.preventDefault();

              _this.toggle($submenu);
            });
          }
        }
      }).on('keydown.zf.accordionMenu', function (e) {
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $elements = $element.parent('ul').children('li'),
            $prevElement,
            $nextElement,
            $target = $element.children('[data-submenu]');
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();
            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();

            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]:visible').length) {
              // has open sub menu
              $nextElement = $element.find('li:first-child').find('a').first();
            }

            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':first-child')) {
              // is first element of sub menu
              $prevElement = $element.parents('li').first().find('a').first();
            } else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) {
              // if previous element has open sub menu
              $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();
            }

            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':last-child')) {
              // is last element of sub menu
              $nextElement = $element.parents('li').first().next('li').find('a').first();
            }

            return;
          }
        });
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'AccordionMenu', {
          open: function open() {
            if ($target.is(':hidden')) {
              _this.down($target);

              $target.find('li').first().find('a').first().focus();
            }
          },
          close: function close() {
            if ($target.length && !$target.is(':hidden')) {
              // close active sub of this item
              _this.up($target);
            } else if ($element.parent('[data-submenu]').length) {
              // close currently open sub
              _this.up($element.parent('[data-submenu]'));

              $element.parents('li').first().find('a').first().focus();
            }
          },
          up: function up() {
            $prevElement.focus();
            return true;
          },
          down: function down() {
            $nextElement.focus();
            return true;
          },
          toggle: function toggle() {
            if (_this.options.submenuToggle) {
              return false;
            }

            if ($element.children('[data-submenu]').length) {
              _this.toggle($element.children('[data-submenu]'));

              return true;
            }
          },
          closeAll: function closeAll() {
            _this.hideAll();
          },
          handled: function handled(preventDefault) {
            if (preventDefault) {
              e.preventDefault();
            }
          }
        });
      }); //.attr('tabindex', 0);
    }
    /**
     * Closes all panes of the menu.
     * @function
     */

  }, {
    key: "hideAll",
    value: function hideAll() {
      this.up(this.$element.find('[data-submenu]'));
    }
    /**
     * Opens all panes of the menu.
     * @function
     */

  }, {
    key: "showAll",
    value: function showAll() {
      this.down(this.$element.find('[data-submenu]'));
    }
    /**
     * Toggles the open/close state of a submenu.
     * @function
     * @param {jQuery} $target - the submenu to toggle
     */

  }, {
    key: "toggle",
    value: function toggle($target) {
      if (!$target.is(':animated')) {
        if (!$target.is(':hidden')) {
          this.up($target);
        } else {
          this.down($target);
        }
      }
    }
    /**
     * Opens the sub-menu defined by `$target`.
     * @param {jQuery} $target - Sub-menu to open.
     * @fires AccordionMenu#down
     */

  }, {
    key: "down",
    value: function down($target) {
      var _this2 = this;

      // If having multiple submenus active is disabled, close all the submenus
      // that are not parents or children of the targeted submenu.
      if (!this.options.multiOpen) {
        // The "branch" of the targetted submenu, from the component root to
        // the active submenus nested in it.
        var $targetBranch = $target.parentsUntil(this.$element).add($target).add($target.find('.is-active')); // All the active submenus that are not in the branch.

        var $othersActiveSubmenus = this.$element.find('.is-active').not($targetBranch);
        this.up($othersActiveSubmenus);
      }

      $target.addClass('is-active').attr({
        'aria-hidden': false
      });

      if (this.options.submenuToggle) {
        $target.prev('.submenu-toggle').attr({
          'aria-expanded': true
        });
      } else {
        $target.parent('.is-accordion-submenu-parent').attr({
          'aria-expanded': true
        });
      }

      $target.slideDown(this.options.slideSpeed, function () {
        /**
         * Fires when the menu is done opening.
         * @event AccordionMenu#down
         */
        _this2.$element.trigger('down.zf.accordionMenu', [$target]);
      });
    }
    /**
     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
     * @param {jQuery} $target - Sub-menu to close.
     * @fires AccordionMenu#up
     */

  }, {
    key: "up",
    value: function up($target) {
      var _this3 = this;

      var $submenus = $target.find('[data-submenu]');
      var $allmenus = $target.add($submenus);
      $submenus.slideUp(0);
      $allmenus.removeClass('is-active').attr('aria-hidden', true);

      if (this.options.submenuToggle) {
        $allmenus.prev('.submenu-toggle').attr('aria-expanded', false);
      } else {
        $allmenus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
      }

      $target.slideUp(this.options.slideSpeed, function () {
        /**
         * Fires when the menu is done collapsing up.
         * @event AccordionMenu#up
         */
        _this3.$element.trigger('up.zf.accordionMenu', [$target]);
      });
    }
    /**
     * Destroys an instance of accordion menu.
     * @fires AccordionMenu#destroyed
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.find('[data-submenu]').slideDown(0).css('display', '');
      this.$element.find('a').off('click.zf.accordionMenu');
      this.$element.find('[data-is-parent-link]').detach();

      if (this.options.submenuToggle) {
        this.$element.find('.has-submenu-toggle').removeClass('has-submenu-toggle');
        this.$element.find('.submenu-toggle').remove();
      }

      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Burn(this.$element, 'accordion');
    }
  }]);

  return AccordionMenu;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

AccordionMenu.defaults = {
  /**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
  parentLink: false,

  /**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,

  /**
   * Adds a separate submenu toggle button. This allows the parent item to have a link.
   * @option
   * @example true
   */
  submenuToggle: false,

  /**
   * The text used for the submenu toggle if enabled. This is used for screen readers only.
   * @option
   * @example true
   */
  submenuToggleText: 'Toggle menu',

  /**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */
  multiOpen: true
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.core.js":
/*!*************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.core.js ***!
  \*************************************************************/
/*! exports provided: Foundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foundation", function() { return Foundation; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./node_modules/foundation-sites/js/foundation.util.mediaQuery.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var FOUNDATION_VERSION = '6.6.3'; // Global Foundation object
// This is attached to the window, or used as a module for AMD/Browserify

var Foundation = {
  version: FOUNDATION_VERSION,

  /**
   * Stores initialized plugins.
   */
  _plugins: {},

  /**
   * Stores generated unique ids for plugin instances
   */
  _uuids: [],

  /**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
  plugin: function plugin(_plugin, name) {
    // Object key to use when adding to global Foundation object
    // Examples: Foundation.Reveal, Foundation.OffCanvas
    var className = name || functionName(_plugin); // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
    // Examples: data-reveal, data-off-canvas

    var attrName = hyphenate(className); // Add to the Foundation object and the plugins list (for reflowing)

    this._plugins[attrName] = this[className] = _plugin;
  },

  /**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
  registerPlugin: function registerPlugin(plugin, name) {
    var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
    plugin.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, pluginName);

    if (!plugin.$element.attr("data-".concat(pluginName))) {
      plugin.$element.attr("data-".concat(pluginName), plugin.uuid);
    }

    if (!plugin.$element.data('zfPlugin')) {
      plugin.$element.data('zfPlugin', plugin);
    }
    /**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */


    plugin.$element.trigger("init.zf.".concat(pluginName));

    this._uuids.push(plugin.uuid);

    return;
  },

  /**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
  unregisterPlugin: function unregisterPlugin(plugin) {
    var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);

    plugin.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
    /**
     * Fires when the plugin has been destroyed.
     * @event Plugin#destroyed
     */
    .trigger("destroyed.zf.".concat(pluginName));

    for (var prop in plugin) {
      plugin[prop] = null; //clean up script to prep for garbage collection.
    }

    return;
  },

  /**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
  reInit: function reInit(plugins) {
    var isJQ = plugins instanceof jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

    try {
      if (isJQ) {
        plugins.each(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('zfPlugin')._init();
        });
      } else {
        var type = _typeof(plugins),
            _this = this,
            fns = {
          'object': function object(plgs) {
            plgs.forEach(function (p) {
              p = hyphenate(p);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + p + ']').foundation('_init');
            });
          },
          'string': function string() {
            plugins = hyphenate(plugins);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + plugins + ']').foundation('_init');
          },
          'undefined': function undefined() {
            this['object'](Object.keys(_this._plugins));
          }
        };

        fns[type](plugins);
      }
    } catch (err) {
      console.error(err);
    } finally {
      return plugins;
    }
  },

  /**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
  reflow: function reflow(elem, plugins) {
    // If plugins is undefined, just grab everything
    if (typeof plugins === 'undefined') {
      plugins = Object.keys(this._plugins);
    } // If plugins is a string, convert it to an array with one item
    else if (typeof plugins === 'string') {
        plugins = [plugins];
      }

    var _this = this; // Iterate through each plugin


    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(plugins, function (i, name) {
      // Get the current plugin
      var plugin = _this._plugins[name]; // Localize the search to all elements inside elem, as well as elem itself, unless elem === document

      var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']').filter(function () {
        return typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("zfPlugin") === 'undefined';
      }); // For each plugin found, initialize it

      $elem.each(function () {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            opts = {
          reflow: true
        };

        if ($el.attr('data-options')) {
          $el.attr('data-options').split(';').forEach(function (option, _index) {
            var opt = option.split(':').map(function (el) {
              return el.trim();
            });
            if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
          });
        }

        try {
          $el.data('zfPlugin', new plugin(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), opts));
        } catch (er) {
          console.error(er);
        } finally {
          return;
        }
      });
    });
  },
  getFnName: functionName,
  addToJquery: function addToJquery($) {
    // TODO: consider not making this a jQuery function
    // TODO: need way to reflow vs. re-initialize

    /**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */
    var foundation = function foundation(method) {
      var type = _typeof(method),
          $noJS = $('.no-js');

      if ($noJS.length) {
        $noJS.removeClass('no-js');
      }

      if (type === 'undefined') {
        //needs to initialize the Foundation object, or an individual plugin.
        _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();

        Foundation.reflow(this);
      } else if (type === 'string') {
        //an individual method to invoke on a plugin or group of plugins
        var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary

        var plugClass = this.data('zfPlugin'); //determine the class of plugin

        if (typeof plugClass !== 'undefined' && typeof plugClass[method] !== 'undefined') {
          //make sure both the class and method exist
          if (this.length === 1) {
            //if there's only one, call it directly.
            plugClass[method].apply(plugClass, args);
          } else {
            this.each(function (i, el) {
              //otherwise loop through the jQuery collection and invoke the method on each
              plugClass[method].apply($(el).data('zfPlugin'), args);
            });
          }
        } else {
          //error for no class or no method
          throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
        }
      } else {
        //error for invalid argument type
        throw new TypeError("We're sorry, ".concat(type, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
      }

      return this;
    };

    $.fn.foundation = foundation;
    return $;
  }
};
Foundation.util = {
  /**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
  throttle: function throttle(func, delay) {
    var timer = null;
    return function () {
      var context = this,
          args = arguments;

      if (timer === null) {
        timer = setTimeout(function () {
          func.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }
};
window.Foundation = Foundation; // Polyfill for requestAnimationFrame

(function () {
  if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
    return new Date().getTime();
  };
  var vendors = ['webkit', 'moz'];

  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    var vp = vendors[i];
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
  }

  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;

    window.requestAnimationFrame = function (callback) {
      var now = Date.now();
      var nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };

    window.cancelAnimationFrame = clearTimeout;
  }
  /**
   * Polyfill for performance.now, required by rAF
   */


  if (!window.performance || !window.performance.now) {
    window.performance = {
      start: Date.now(),
      now: function now() {
        return Date.now() - this.start;
      }
    };
  }
})();

if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function fNOP() {},
        fBound = function fBound() {
      return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
    };

    if (this.prototype) {
      // native functions don't have a prototype
      fNOP.prototype = this.prototype;
    }

    fBound.prototype = new fNOP();
    return fBound;
  };
} // Polyfill to get the name of a function in IE9


function functionName(fn) {
  if (typeof Function.prototype.name === 'undefined') {
    var funcNameRegex = /function\s([^(]{1,})\(/;
    var results = funcNameRegex.exec(fn.toString());
    return results && results.length > 1 ? results[1].trim() : "";
  } else if (typeof fn.prototype === 'undefined') {
    return fn.constructor.name;
  } else {
    return fn.prototype.constructor.name;
  }
}

function parseValue(str) {
  if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);
  return str;
} // Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580


function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}



/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.core.plugin.js":
/*!********************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.core.plugin.js ***!
  \********************************************************************/
/*! exports provided: Plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
// {function} _setup (replaces previous constructor),
// {function} _destroy (replaces previous destroy)

var Plugin =
/*#__PURE__*/
function () {
  function Plugin(element, options) {
    _classCallCheck(this, Plugin);

    this._setup(element, options);

    var pluginName = getPluginName(this);
    this.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, pluginName);

    if (!this.$element.attr("data-".concat(pluginName))) {
      this.$element.attr("data-".concat(pluginName), this.uuid);
    }

    if (!this.$element.data('zfPlugin')) {
      this.$element.data('zfPlugin', this);
    }
    /**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */


    this.$element.trigger("init.zf.".concat(pluginName));
  }

  _createClass(Plugin, [{
    key: "destroy",
    value: function destroy() {
      this._destroy();

      var pluginName = getPluginName(this);
      this.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
      /**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */
      .trigger("destroyed.zf.".concat(pluginName));

      for (var prop in this) {
        this[prop] = null; //clean up script to prep for garbage collection.
      }
    }
  }]);

  return Plugin;
}(); // Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580


function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getPluginName(obj) {
  return hyphenate(obj.className);
}



/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.core.utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.core.utils.js ***!
  \*******************************************************************/
/*! exports provided: rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, ignoreMousedisappear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtl", function() { return rtl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetYoDigits", function() { return GetYoDigits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegExpEscape", function() { return RegExpEscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionend", function() { return transitionend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return onLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreMousedisappear", function() { return ignoreMousedisappear; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


 // Core Foundation Utilities, utilized in a number of places.

/**
 * Returns a boolean for RTL support
 */

function rtl() {
  return jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir') === 'rtl';
}
/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */


function GetYoDigits() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var namespace = arguments.length > 1 ? arguments[1] : undefined;
  var str = '';
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
  var charsLength = chars.length;

  for (var i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * charsLength)];
  }

  return namespace ? "".concat(str, "-").concat(namespace) : str;
}
/**
 * Escape a string so it can be used as a regexp pattern
 * @function
 * @see https://stackoverflow.com/a/9310752/4317384
 *
 * @param {String} str - string to escape.
 * @returns {String} - escaped string
 */


function RegExpEscape(str) {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function transitionend($elem) {
  var transitions = {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend'
  };
  var elem = document.createElement('div'),
      end;

  for (var transition in transitions) {
    if (typeof elem.style[transition] !== 'undefined') {
      end = transitions[transition];
    }
  }

  if (end) {
    return end;
  } else {
    setTimeout(function () {
      $elem.triggerHandler('transitionend', [$elem]);
    }, 1);
    return 'transitionend';
  }
}
/**
 * Return an event type to listen for window load.
 *
 * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.
 * If `handler` is passed, attach it to the event on `$elem`.
 * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.
 * @function
 *
 * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
 * @param {Function} [] handler - function to attach to the event.
 * @returns {String} - event type that should or will be triggered.
 */


function onLoad($elem, handler) {
  var didLoad = document.readyState === 'complete';
  var eventType = (didLoad ? '_didLoad' : 'load') + '.zf.util.onLoad';

  var cb = function cb() {
    return $elem.triggerHandler(eventType);
  };

  if ($elem) {
    if (handler) $elem.one(eventType, handler);
    if (didLoad) setTimeout(cb);else jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', cb);
  }

  return eventType;
}
/**
 * Retuns an handler for the `mouseleave` that ignore disappeared mouses.
 *
 * If the mouse "disappeared" from the document (like when going on a browser UI element, See https://git.io/zf-11410),
 * the event is ignored.
 * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window
 *   (like by switching to an other window with [Alt]+[Tab]).
 * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document
 *   outside of the element it left.
 *
 * @function
 *
 * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.
 * @param {Object} [] options - object of options:
 * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.
 * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.
 * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.
 */


function ignoreMousedisappear(handler) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ignoreLeaveWindo = _ref.ignoreLeaveWindow,
      ignoreLeaveWindow = _ref$ignoreLeaveWindo === void 0 ? false : _ref$ignoreLeaveWindo,
      _ref$ignoreReappear = _ref.ignoreReappear,
      ignoreReappear = _ref$ignoreReappear === void 0 ? false : _ref$ignoreReappear;

  return function leaveEventHandler(eLeave) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var callback = handler.bind.apply(handler, [this, eLeave].concat(rest)); // The mouse left: call the given callback if the mouse entered elsewhere

    if (eLeave.relatedTarget !== null) {
      return callback();
    } // Otherwise, check if the mouse actually left the window.
    // In firefox if the user switched between windows, the window sill have the focus by the time
    // the event is triggered. We have to debounce the event to test this case.


    setTimeout(function leaveEventDebouncer() {
      if (!ignoreLeaveWindow && document.hasFocus && !document.hasFocus()) {
        return callback();
      } // Otherwise, wait for the mouse to reeapear outside of the element,


      if (!ignoreReappear) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).one('mouseenter', function reenterEventHandler(eReenter) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(eLeave.currentTarget).has(eReenter.target).length) {
            // Fill where the mouse finally entered.
            eLeave.relatedTarget = eReenter.target;
            callback();
          }
        });
      }
    }, 0);
  };
}



/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.drilldown.js":
/*!******************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.drilldown.js ***!
  \******************************************************************/
/*! exports provided: Drilldown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drilldown", function() { return Drilldown; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./node_modules/foundation-sites/js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ "./node_modules/foundation-sites/js/foundation.util.nest.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.box */ "./node_modules/foundation-sites/js/foundation.util.box.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 * @requires foundation.util.box
 */

var Drilldown =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Drilldown, _Plugin);

  function Drilldown() {
    _classCallCheck(this, Drilldown);

    return _possibleConstructorReturn(this, _getPrototypeOf(Drilldown).apply(this, arguments));
  }

  _createClass(Drilldown, [{
    key: "_setup",

    /**
     * Creates a new instance of a drilldown menu.
     * @class
     * @name Drilldown
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Drilldown.defaults, this.$element.data(), options);
      this.className = 'Drilldown'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Drilldown', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ARROW_RIGHT': 'next',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'previous',
        'ESCAPE': 'close',
        'TAB': 'down',
        'SHIFT_TAB': 'up'
      });
    }
    /**
     * Initializes the drilldown by creating jQuery collections of elements
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Feather(this.$element, 'drilldown');

      if (this.options.autoApplyClass) {
        this.$element.addClass('drilldown');
      }

      this.$element.attr({
        'role': 'tree',
        'aria-multiselectable': false
      });
      this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent').children('a');
      this.$submenus = this.$submenuAnchors.parent('li').children('[data-submenu]').attr('role', 'group');
      this.$menuItems = this.$element.find('li').not('.js-drilldown-back').attr('role', 'treeitem').find('a'); // Set the main menu as current by default (unless a submenu is selected)
      // Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu

      this.$currentMenu = this.$element;
      this.$element.attr('data-mutate', this.$element.attr('data-drilldown') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'drilldown'));

      this._prepareMenu();

      this._registerEvents();

      this._keyboardEvents();
    }
    /**
     * prepares drilldown menu by setting attributes to links and elements
     * sets a min height to prevent content jumping
     * wraps the element if not already wrapped
     * @private
     * @function
     */

  }, {
    key: "_prepareMenu",
    value: function _prepareMenu() {
      var _this = this; // if(!this.options.holdOpen){
      //   this._menuLinkEvents();
      // }


      this.$submenuAnchors.each(function () {
        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var $sub = $link.parent();

        if (_this.options.parentLink) {
          $link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="none"></li>');
        }

        $link.data('savedHref', $link.attr('href')).removeAttr('href').attr('tabindex', 0);
        $link.children('[data-submenu]').attr({
          'aria-hidden': true,
          'tabindex': 0,
          'role': 'group'
        });

        _this._events($link);
      });
      this.$submenus.each(function () {
        var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $back = $menu.find('.js-drilldown-back');

        if (!$back.length) {
          switch (_this.options.backButtonPosition) {
            case "bottom":
              $menu.append(_this.options.backButton);
              break;

            case "top":
              $menu.prepend(_this.options.backButton);
              break;

            default:
              console.error("Unsupported backButtonPosition value '" + _this.options.backButtonPosition + "'");
          }
        }

        _this._back($menu);
      });
      this.$submenus.addClass('invisible');

      if (!this.options.autoHeight) {
        this.$submenus.addClass('drilldown-submenu-cover-previous');
      } // create a wrapper on element if it doesn't exist.


      if (!this.$element.parent().hasClass('is-drilldown')) {
        this.$wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.wrapper).addClass('is-drilldown');
        if (this.options.animateHeight) this.$wrapper.addClass('animate-height');
        this.$element.wrap(this.$wrapper);
      } // set wrapper


      this.$wrapper = this.$element.parent();
      this.$wrapper.css(this._getMaxDims());
    }
  }, {
    key: "_resize",
    value: function _resize() {
      this.$wrapper.css({
        'max-width': 'none',
        'min-height': 'none'
      }); // _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths

      this.$wrapper.css(this._getMaxDims());
    }
    /**
     * Adds event handlers to elements in the menu.
     * @function
     * @private
     * @param {jQuery} $elem - the current menu item to add handlers to.
     */

  }, {
    key: "_events",
    value: function _events($elem) {
      var _this = this;

      $elem.off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')) {
          e.preventDefault();
        } // if(e.target !== e.currentTarget.firstElementChild){
        //   return false;
        // }


        _this._show($elem.parent('li'));

        if (_this.options.closeOnClick) {
          var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
          $body.off('.zf.drilldown').on('click.zf.drilldown', function (e) {
            if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target)) {
              return;
            }

            e.preventDefault();

            _this._hideAll();

            $body.off('.zf.drilldown');
          });
        }
      });
    }
    /**
     * Adds event handlers to the menu element.
     * @function
     * @private
     */

  }, {
    key: "_registerEvents",
    value: function _registerEvents() {
      if (this.options.scrollTop) {
        this._bindHandler = this._scrollTop.bind(this);
        this.$element.on('open.zf.drilldown hide.zf.drilldown close.zf.drilldown closed.zf.drilldown', this._bindHandler);
      }

      this.$element.on('mutateme.zf.trigger', this._resize.bind(this));
    }
    /**
     * Scroll to Top of Element or data-scroll-top-element
     * @function
     * @fires Drilldown#scrollme
     */

  }, {
    key: "_scrollTop",
    value: function _scrollTop() {
      var _this = this;

      var $scrollTopElement = _this.options.scrollTopElement != '' ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.scrollTopElement) : _this.$element,
          scrollPos = parseInt($scrollTopElement.offset().top + _this.options.scrollTopOffset, 10);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
        scrollTop: scrollPos
      }, _this.options.animationDuration, _this.options.animationEasing, function () {
        /**
          * Fires after the menu has scrolled
          * @event Drilldown#scrollme
          */
        if (this === jquery__WEBPACK_IMPORTED_MODULE_0___default()('html')[0]) _this.$element.trigger('scrollme.zf.drilldown');
      });
    }
    /**
     * Adds keydown event listener to `li`'s in the menu.
     * @private
     */

  }, {
    key: "_keyboardEvents",
    value: function _keyboardEvents() {
      var _this = this;

      this.$menuItems.add(this.$element.find('.js-drilldown-back > a, .is-submenu-parent-item > a')).on('keydown.zf.drilldown', function (e) {
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $elements = $element.parent('li').parent('ul').children('li').children('a'),
            $prevElement,
            $nextElement;
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            $prevElement = $elements.eq(Math.max(0, i - 1));
            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
            return;
          }
        });
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Drilldown', {
          next: function next() {
            if ($element.is(_this.$submenuAnchors)) {
              _this._show($element.parent('li'));

              $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
              });
              return true;
            }
          },
          previous: function previous() {
            _this._hide($element.parent('li').parent('ul'));

            $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
              setTimeout(function () {
                $element.parent('li').parent('ul').parent('li').children('a').first().focus();
              }, 1);
            });
            return true;
          },
          up: function up() {
            $prevElement.focus(); // Don't tap focus on first element in root ul

            return !$element.is(_this.$element.find('> li:first-child > a'));
          },
          down: function down() {
            $nextElement.focus(); // Don't tap focus on last element in root ul

            return !$element.is(_this.$element.find('> li:last-child > a'));
          },
          close: function close() {
            // Don't close on element in root ul
            if (!$element.is(_this.$element.find('> li > a'))) {
              _this._hide($element.parent().parent());

              $element.parent().parent().siblings('a').focus();
            }
          },
          open: function open() {
            if (_this.options.parentLink && $element.attr('href')) {
              // Link with href
              return false;
            } else if (!$element.is(_this.$menuItems)) {
              // not menu item means back button
              _this._hide($element.parent('li').parent('ul'));

              $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
                setTimeout(function () {
                  $element.parent('li').parent('ul').parent('li').children('a').first().focus();
                }, 1);
              });
              return true;
            } else if ($element.is(_this.$submenuAnchors)) {
              // Sub menu item
              _this._show($element.parent('li'));

              $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
              });
              return true;
            }
          },
          handled: function handled(preventDefault) {
            if (preventDefault) {
              e.preventDefault();
            }
          }
        });
      }); // end keyboardAccess
    }
    /**
     * Closes all open elements, and returns to root menu.
     * @function
     * @fires Drilldown#close
     * @fires Drilldown#closed
     */

  }, {
    key: "_hideAll",
    value: function _hideAll() {
      var _this2 = this;

      var $elem = this.$element.find('.is-drilldown-submenu.is-active');
      $elem.addClass('is-closing');

      if (this.options.autoHeight) {
        var calcHeight = $elem.parent().closest('ul').data('calcHeight');
        this.$wrapper.css({
          height: calcHeight
        });
      }
      /**
       * Fires when the menu is closing.
       * @event Drilldown#close
       */


      this.$element.trigger('close.zf.drilldown');
      $elem.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($elem), function () {
        $elem.removeClass('is-active is-closing');
        /**
         * Fires when the menu is fully closed.
         * @event Drilldown#closed
         */

        _this2.$element.trigger('closed.zf.drilldown');
      });
    }
    /**
     * Adds event listener for each `back` button, and closes open menus.
     * @function
     * @fires Drilldown#back
     * @param {jQuery} $elem - the current sub-menu to add `back` event.
     */

  }, {
    key: "_back",
    value: function _back($elem) {
      var _this = this;

      $elem.off('click.zf.drilldown');
      $elem.children('.js-drilldown-back').on('click.zf.drilldown', function (e) {
        // console.log('mouseup on back');
        _this._hide($elem); // If there is a parent submenu, call show


        var parentSubMenu = $elem.parent('li').parent('ul').parent('li');

        if (parentSubMenu.length) {
          _this._show(parentSubMenu);
        }
      });
    }
    /**
     * Adds event listener to menu items w/o submenus to close open menus on click.
     * @function
     * @private
     */

  }, {
    key: "_menuLinkEvents",
    value: function _menuLinkEvents() {
      var _this = this;

      this.$menuItems.not('.is-drilldown-submenu-parent').off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
        setTimeout(function () {
          _this._hideAll();
        }, 0);
      });
    }
    /**
     * Sets the CSS classes for submenu to show it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */

  }, {
    key: "_setShowSubMenuClasses",
    value: function _setShowSubMenuClasses($elem, trigger) {
      $elem.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);
      $elem.parent('li').attr('aria-expanded', true);

      if (trigger === true) {
        this.$element.trigger('open.zf.drilldown', [$elem]);
      }
    }
    /**
     * Sets the CSS classes for submenu to hide it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */

  }, {
    key: "_setHideSubMenuClasses",
    value: function _setHideSubMenuClasses($elem, trigger) {
      $elem.removeClass('is-active').addClass('invisible').attr('aria-hidden', true);
      $elem.parent('li').attr('aria-expanded', false);

      if (trigger === true) {
        $elem.trigger('hide.zf.drilldown', [$elem]);
      }
    }
    /**
     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
     * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
     */

  }, {
    key: "_showMenu",
    value: function _showMenu($elem, autoFocus) {
      var _this = this; // Reset drilldown


      var $expandedSubmenus = this.$element.find('li[aria-expanded="true"] > ul[data-submenu]');
      $expandedSubmenus.each(function (index) {
        _this._setHideSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      }); // Save the menu as the currently displayed one.

      this.$currentMenu = $elem; // If target menu is root, focus first link & exit

      if ($elem.is('[data-drilldown]')) {
        if (autoFocus === true) $elem.find('li[role="treeitem"] > a').first().focus();
        if (this.options.autoHeight) this.$wrapper.css('height', $elem.data('calcHeight'));
        return;
      } // Find all submenus on way to root incl. the element itself


      var $submenus = $elem.children().first().parentsUntil('[data-drilldown]', '[data-submenu]'); // Open target menu and all submenus on its way to root

      $submenus.each(function (index) {
        // Update height of first child (target menu) if autoHeight option true
        if (index === 0 && _this.options.autoHeight) {
          _this.$wrapper.css('height', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight'));
        }

        var isLastChild = index == $submenus.length - 1; // Add transitionsend listener to last child (root due to reverse order) to open target menu's first link
        // Last child makes sure the event gets always triggered even if going through several menus

        if (isLastChild === true) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)), function () {
            if (autoFocus === true) {
              $elem.find('li[role="treeitem"] > a').first().focus();
            }
          });
        }

        _this._setShowSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), isLastChild);
      });
    }
    /**
     * Opens a submenu.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
     */

  }, {
    key: "_show",
    value: function _show($elem) {
      var $submenu = $elem.children('[data-submenu]');
      $elem.attr('aria-expanded', true);
      this.$currentMenu = $submenu;
      $submenu.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);

      if (this.options.autoHeight) {
        this.$wrapper.css({
          height: $submenu.data('calcHeight')
        });
      }
      /**
       * Fires when the submenu has opened.
       * @event Drilldown#open
       */


      this.$element.trigger('open.zf.drilldown', [$elem]);
    }
    /**
     * Hides a submenu
     * @function
     * @fires Drilldown#hide
     * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
     */

  }, {
    key: "_hide",
    value: function _hide($elem) {
      if (this.options.autoHeight) this.$wrapper.css({
        height: $elem.parent().closest('ul').data('calcHeight')
      });

      var _this = this;

      $elem.parent('li').attr('aria-expanded', false);
      $elem.attr('aria-hidden', true);
      $elem.addClass('is-closing').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($elem), function () {
        $elem.removeClass('is-active is-closing');
        $elem.blur().addClass('invisible');
      });
      /**
       * Fires when the submenu has closed.
       * @event Drilldown#hide
       */

      $elem.trigger('hide.zf.drilldown', [$elem]);
    }
    /**
     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
     * Prevents content jumping.
     * @function
     * @private
     */

  }, {
    key: "_getMaxDims",
    value: function _getMaxDims() {
      var maxHeight = 0,
          result = {},
          _this = this; // Recalculate menu heights and total max height


      this.$submenus.add(this.$element).each(function () {
        var numOfElems = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('li').length;
        var height = _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__["Box"].GetDimensions(this).height;
        maxHeight = height > maxHeight ? height : maxHeight;

        if (_this.options.autoHeight) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight', height);
        }
      });
      if (this.options.autoHeight) result['height'] = this.$currentMenu.data('calcHeight');else result['min-height'] = "".concat(maxHeight, "px");
      result['max-width'] = "".concat(this.$element[0].getBoundingClientRect().width, "px");
      return result;
    }
    /**
     * Destroys the Drilldown Menu
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      if (this.options.scrollTop) this.$element.off('.zf.drilldown', this._bindHandler);

      this._hideAll();

      this.$element.off('mutateme.zf.trigger');
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Burn(this.$element, 'drilldown');
      this.$element.unwrap().find('.js-drilldown-back, .is-submenu-parent-item').remove().end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu').end().find('[data-submenu]').removeAttr('aria-hidden tabindex role');
      this.$submenuAnchors.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off('.zf.drilldown');
      });
      this.$element.find('[data-is-parent-link]').detach();
      this.$submenus.removeClass('drilldown-submenu-cover-previous invisible');
      this.$element.find('a').each(function () {
        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        $link.removeAttr('tabindex');

        if ($link.data('savedHref')) {
          $link.attr('href', $link.data('savedHref')).removeData('savedHref');
        } else {
          return;
        }
      });
    }
  }]);

  return Drilldown;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__["Plugin"]);

Drilldown.defaults = {
  /**
   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
   * @option
   * @type {boolean}
   * @default true
   */
  autoApplyClass: true,

  /**
   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
   */
  backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',

  /**
   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
   * @option
   * @type {string}
   * @default top
   */
  backButtonPosition: 'top',

  /**
   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<div></div>'
   */
  wrapper: '<div></div>',

  /**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
  parentLink: false,

  /**
   * Allow the menu to return to root list on body click.
   * @option
   * @type {boolean}
   * @default false
   */
  closeOnClick: false,

  /**
   * Allow the menu to auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
  autoHeight: false,

  /**
   * Animate the auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
  animateHeight: false,

  /**
   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
   * @option
   * @type {boolean}
   * @default false
   */
  scrollTop: false,

  /**
   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
   * @option
   * @type {string}
   * @default ''
   */
  scrollTopElement: '',

  /**
   * ScrollTop offset
   * @option
   * @type {number}
   * @default 0
   */
  scrollTopOffset: 0,

  /**
   * Scroll animation duration
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,

  /**
   * Scroll animation easing. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @see {@link https://api.jquery.com/animate|JQuery animate}
   * @default 'swing'
   */
  animationEasing: 'swing' // holdOpen: false

};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.dropdown.js":
/*!*****************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.dropdown.js ***!
  \*****************************************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./node_modules/foundation-sites/js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_positionable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.positionable */ "./node_modules/foundation-sites/js/foundation.positionable.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./node_modules/foundation-sites/js/foundation.util.triggers.js");
/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.touch */ "./node_modules/foundation-sites/js/foundation.util.touch.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.touch
 * @requires foundation.util.triggers
 */

var Dropdown =
/*#__PURE__*/
function (_Positionable) {
  _inherits(Dropdown, _Positionable);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));
  }

  _createClass(Dropdown, [{
    key: "_setup",

    /**
     * Creates a new instance of a dropdown.
     * @class
     * @name Dropdown
     * @param {jQuery} element - jQuery object to make into a dropdown.
     *        Object should be of the dropdown panel, rather than its anchor.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Dropdown.defaults, this.$element.data(), options);
      this.className = 'Dropdown'; // ie9 back compat
      // Touch and Triggers init are idempotent, just need to make sure they are initialized

      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Dropdown', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ESCAPE': 'close'
      });
    }
    /**
     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var $id = this.$element.attr('id');
      this.$anchors = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat($id, "\"]")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat($id, "\"]")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat($id, "\"]"));
      this.$anchors.attr({
        'aria-controls': $id,
        'data-is-focus': false,
        'data-yeti-box': $id,
        'aria-haspopup': true,
        'aria-expanded': false
      });

      this._setCurrentAnchor(this.$anchors.first());

      if (this.options.parentClass) {
        this.$parent = this.$element.parents('.' + this.options.parentClass);
      } else {
        this.$parent = null;
      } // Set [aria-labelledby] on the Dropdown if it is not set


      if (typeof this.$element.attr('aria-labelledby') === 'undefined') {
        // Get the anchor ID or create one
        if (typeof this.$currentAnchor.attr('id') === 'undefined') {
          this.$currentAnchor.attr('id', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'dd-anchor'));
        }

        this.$element.attr('aria-labelledby', this.$currentAnchor.attr('id'));
      }

      this.$element.attr({
        'aria-hidden': 'true',
        'data-yeti-box': $id,
        'data-resize': $id
      });

      _get(_getPrototypeOf(Dropdown.prototype), "_init", this).call(this);

      this._events();
    }
  }, {
    key: "_getDefaultPosition",
    value: function _getDefaultPosition() {
      // handle legacy classnames
      var position = this.$element[0].className.match(/(top|left|right|bottom)/g);

      if (position) {
        return position[0];
      } else {
        return 'bottom';
      }
    }
  }, {
    key: "_getDefaultAlignment",
    value: function _getDefaultAlignment() {
      // handle legacy float approach
      var horizontalPosition = /float-(\S+)/.exec(this.$currentAnchor.attr('class'));

      if (horizontalPosition) {
        return horizontalPosition[1];
      }

      return _get(_getPrototypeOf(Dropdown.prototype), "_getDefaultAlignment", this).call(this);
    }
    /**
     * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
     * Recursively calls itself if a collision is detected, with a new position class.
     * @function
     * @private
     */

  }, {
    key: "_setPosition",
    value: function _setPosition() {
      this.$element.removeClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));

      _get(_getPrototypeOf(Dropdown.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent);

      this.$element.addClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));
    }
    /**
     * Make it a current anchor.
     * Current anchor as the reference for the position of Dropdown panes.
     * @param {HTML} el - DOM element of the anchor.
     * @function
     * @private
     */

  }, {
    key: "_setCurrentAnchor",
    value: function _setCurrentAnchor(el) {
      this.$currentAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
    }
    /**
     * Adds event listeners to the element utilizing the triggers utility library.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this,
          hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined';

      this.$element.on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': this.close.bind(this),
        'toggle.zf.trigger': this.toggle.bind(this),
        'resizeme.zf.trigger': this._setPosition.bind(this)
      });
      this.$anchors.off('click.zf.trigger').on('click.zf.trigger', function (e) {
        _this._setCurrentAnchor(this);

        if ( // if forceFollow false, always prevent default action
        _this.options.forceFollow === false || // if forceFollow true and hover option true, only prevent default action on 1st click
        // on 2nd click (dropown opened) the default action (e.g. follow a href) gets executed
        hasTouch && _this.options.hover && _this.$element.hasClass('is-open') === false) {
          e.preventDefault();
        }
      });

      if (this.options.hover) {
        this.$anchors.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
          _this._setCurrentAnchor(this);

          var bodyData = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').data();

          if (typeof bodyData.whatinput === 'undefined' || bodyData.whatinput === 'mouse') {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
              _this.open();

              _this.$anchors.data('hover', true);
            }, _this.options.hoverDelay);
          }
        }).on('mouseleave.zf.dropdown', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["ignoreMousedisappear"])(function () {
          clearTimeout(_this.timeout);
          _this.timeout = setTimeout(function () {
            _this.close();

            _this.$anchors.data('hover', false);
          }, _this.options.hoverDelay);
        }));

        if (this.options.hoverPane) {
          this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
            clearTimeout(_this.timeout);
          }).on('mouseleave.zf.dropdown', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["ignoreMousedisappear"])(function () {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
              _this.close();

              _this.$anchors.data('hover', false);
            }, _this.options.hoverDelay);
          }));
        }
      }

      this.$anchors.add(this.$element).on('keydown.zf.dropdown', function (e) {
        var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            visibleFocusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].findFocusable(_this.$element);
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Dropdown', {
          open: function open() {
            if ($target.is(_this.$anchors) && !$target.is('input, textarea')) {
              _this.open();

              _this.$element.attr('tabindex', -1).focus();

              e.preventDefault();
            }
          },
          close: function close() {
            _this.close();

            _this.$anchors.focus();
          }
        });
      });
    }
    /**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */

  }, {
    key: "_addBodyHandler",
    value: function _addBodyHandler() {
      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).not(this.$element),
          _this = this;

      $body.off('click.zf.dropdown tap.zf.dropdown').on('click.zf.dropdown tap.zf.dropdown', function (e) {
        if (_this.$anchors.is(e.target) || _this.$anchors.find(e.target).length) {
          return;
        }

        if (_this.$element.is(e.target) || _this.$element.find(e.target).length) {
          return;
        }

        _this.close();

        $body.off('click.zf.dropdown tap.zf.dropdown');
      });
    }
    /**
     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
     * @function
     * @fires Dropdown#closeme
     * @fires Dropdown#show
     */

  }, {
    key: "open",
    value: function open() {
      // var _this = this;

      /**
       * Fires to close other open dropdowns, typically when dropdown is opening
       * @event Dropdown#closeme
       */
      this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
      this.$anchors.addClass('hover').attr({
        'aria-expanded': true
      }); // this.$element/*.show()*/;

      this.$element.addClass('is-opening');

      this._setPosition();

      this.$element.removeClass('is-opening').addClass('is-open').attr({
        'aria-hidden': false
      });

      if (this.options.autoFocus) {
        var $focusable = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].findFocusable(this.$element);

        if ($focusable.length) {
          $focusable.eq(0).focus();
        }
      }

      if (this.options.closeOnClick) {
        this._addBodyHandler();
      }

      if (this.options.trapFocus) {
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].trapFocus(this.$element);
      }
      /**
       * Fires once the dropdown is visible.
       * @event Dropdown#show
       */


      this.$element.trigger('show.zf.dropdown', [this.$element]);
    }
    /**
     * Closes the open dropdown pane.
     * @function
     * @fires Dropdown#hide
     */

  }, {
    key: "close",
    value: function close() {
      if (!this.$element.hasClass('is-open')) {
        return false;
      }

      this.$element.removeClass('is-open').attr({
        'aria-hidden': true
      });
      this.$anchors.removeClass('hover').attr('aria-expanded', false);
      /**
       * Fires once the dropdown is no longer visible.
       * @event Dropdown#hide
       */

      this.$element.trigger('hide.zf.dropdown', [this.$element]);

      if (this.options.trapFocus) {
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].releaseFocus(this.$element);
      }
    }
    /**
     * Toggles the dropdown pane's visibility.
     * @function
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.$element.hasClass('is-open')) {
        if (this.$anchors.data('hover')) return;
        this.close();
      } else {
        this.open();
      }
    }
    /**
     * Destroys the dropdown.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.trigger').hide();
      this.$anchors.off('.zf.dropdown');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdown tap.zf.dropdown');
    }
  }]);

  return Dropdown;
}(_foundation_positionable__WEBPACK_IMPORTED_MODULE_3__["Positionable"]);

Dropdown.defaults = {
  /**
   * Class that designates bounding container of Dropdown (default: window)
   * @option
   * @type {?string}
   * @default null
   */
  parentClass: null,

  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 250
   */
  hoverDelay: 250,

  /**
   * Allow submenus to open on hover events
   * @option
   * @type {boolean}
   * @default false
   */
  hover: false,

  /**
   * Don't close dropdown when hovering over dropdown pane
   * @option
   * @type {boolean}
   * @default false
   */
  hoverPane: false,

  /**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
  vOffset: 0,

  /**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
  hOffset: 0,

  /**
   * Position of dropdown. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  position: 'auto',

  /**
   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',

  /**
   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
  allowOverlap: false,

  /**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
  allowBottomOverlap: true,

  /**
   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
   * @option
   * @type {boolean}
   * @default false
   */
  trapFocus: false,

  /**
   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
   * @option
   * @type {boolean}
   * @default false
   */
  autoFocus: false,

  /**
   * Allows a click on the body to close the dropdown.
   * @option
   * @type {boolean}
   * @default false
   */
  closeOnClick: false,

  /**
   * If true the default action of the toggle (e.g. follow a link with href) gets executed on click. If hover option is also true the default action gets prevented on first click for mobile / touch devices and executed on second click.
   * @option
   * @type {boolean}
   * @default true
   */
  forceFollow: true
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.dropdownMenu.js":
/*!*********************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.dropdownMenu.js ***!
  \*********************************************************************/
/*! exports provided: DropdownMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return DropdownMenu; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./node_modules/foundation-sites/js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.nest */ "./node_modules/foundation-sites/js/foundation.util.nest.js");
/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.box */ "./node_modules/foundation-sites/js/foundation.util.box.js");
/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.touch */ "./node_modules/foundation-sites/js/foundation.util.touch.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/**
 * DropdownMenu module.
 * @module foundation.dropdownMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 * @requires foundation.util.touch
 */

var DropdownMenu =
/*#__PURE__*/
function (_Plugin) {
  _inherits(DropdownMenu, _Plugin);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: "_setup",

    /**
     * Creates a new instance of DropdownMenu.
     * @class
     * @name DropdownMenu
     * @fires DropdownMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, DropdownMenu.defaults, this.$element.data(), options);
      this.className = 'DropdownMenu'; // ie9 back compat

      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_6__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a); // Touch init is idempotent, we just need to make sure it's initialied.

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].register('DropdownMenu', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ARROW_RIGHT': 'next',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'previous',
        'ESCAPE': 'close'
      });
    }
    /**
     * Initializes the plugin, and calls _prepareMenu
     * @private
     * @function
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__["Nest"].Feather(this.$element, 'dropdown');
      var subs = this.$element.find('li.is-dropdown-submenu-parent');
      this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');
      this.$menuItems = this.$element.find('li[role="none"]');
      this.$tabs = this.$element.children('li[role="none"]');
      this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);

      if (this.options.alignment === 'auto') {
        if (this.$element.hasClass(this.options.rightClass) || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"])() || this.$element.parents('.top-bar-right').is('*')) {
          this.options.alignment = 'right';
          subs.addClass('opens-left');
        } else {
          this.options.alignment = 'left';
          subs.addClass('opens-right');
        }
      } else {
        if (this.options.alignment === 'right') {
          subs.addClass('opens-left');
        } else {
          subs.addClass('opens-right');
        }
      }

      this.changed = false;

      this._events();
    }
  }, {
    key: "_isVertical",
    value: function _isVertical() {
      return this.$tabs.css('display') === 'block' || this.$element.css('flex-direction') === 'column';
    }
  }, {
    key: "_isRtl",
    value: function _isRtl() {
      return this.$element.hasClass('align-right') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"])() && !this.$element.hasClass('align-left');
    }
    /**
     * Adds event listeners to elements within the menu
     * @private
     * @function
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this,
          hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined',
          parClass = 'is-dropdown-submenu-parent'; // used for onClick and in the keyboard handlers


      var handleClickFn = function handleClickFn(e) {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', ".".concat(parClass)),
            hasSub = $elem.hasClass(parClass),
            hasClicked = $elem.attr('data-is-click') === 'true',
            $sub = $elem.children('.is-dropdown-submenu');

        if (hasSub) {
          if (hasClicked) {
            if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
              return;
            }

            e.stopImmediatePropagation();
            e.preventDefault();

            _this._hide($elem);
          } else {
            e.stopImmediatePropagation();
            e.preventDefault();

            _this._show($sub);

            $elem.add($elem.parentsUntil(_this.$element, ".".concat(parClass))).attr('data-is-click', true);
          }
        }
      };

      if (this.options.clickOpen || hasTouch) {
        this.$menuItems.on('click.zf.dropdownMenu touchstart.zf.dropdownMenu', handleClickFn);
      } // Handle Leaf element Clicks


      if (_this.options.closeOnClickInside) {
        this.$menuItems.on('click.zf.dropdownMenu', function (e) {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
              hasSub = $elem.hasClass(parClass);

          if (!hasSub) {
            _this._hide();
          }
        });
      }

      if (!this.options.disableHover) {
        this.$menuItems.on('mouseenter.zf.dropdownMenu', function (e) {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
              hasSub = $elem.hasClass(parClass);

          if (hasSub) {
            clearTimeout($elem.data('_delay'));
            $elem.data('_delay', setTimeout(function () {
              _this._show($elem.children('.is-dropdown-submenu'));
            }, _this.options.hoverDelay));
          }
        }).on('mouseleave.zf.dropdownMenu', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["ignoreMousedisappear"])(function (e) {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
              hasSub = $elem.hasClass(parClass);

          if (hasSub && _this.options.autoclose) {
            if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) {
              return false;
            }

            clearTimeout($elem.data('_delay'));
            $elem.data('_delay', setTimeout(function () {
              _this._hide($elem);
            }, _this.options.closingTime));
          }
        }));
      }

      this.$menuItems.on('keydown.zf.dropdownMenu', function (e) {
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', '[role="none"]'),
            isTab = _this.$tabs.index($element) > -1,
            $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
            $prevElement,
            $nextElement;
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            $prevElement = $elements.eq(i - 1);
            $nextElement = $elements.eq(i + 1);
            return;
          }
        });

        var nextSibling = function nextSibling() {
          $nextElement.children('a:first').focus();
          e.preventDefault();
        },
            prevSibling = function prevSibling() {
          $prevElement.children('a:first').focus();
          e.preventDefault();
        },
            openSub = function openSub() {
          var $sub = $element.children('ul.is-dropdown-submenu');

          if ($sub.length) {
            _this._show($sub);

            $element.find('li > a:first').focus();
            e.preventDefault();
          } else {
            return;
          }
        },
            closeSub = function closeSub() {
          //if ($element.is(':first-child')) {
          var close = $element.parent('ul').parent('li');
          close.children('a:first').focus();

          _this._hide(close);

          e.preventDefault(); //}
        };

        var functions = {
          open: openSub,
          close: function close() {
            _this._hide(_this.$element);

            _this.$menuItems.eq(0).children('a').focus(); // focus to first element


            e.preventDefault();
          }
        };

        if (isTab) {
          if (_this._isVertical()) {
            // vertical menu
            if (_this._isRtl()) {
              // right aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                down: nextSibling,
                up: prevSibling,
                next: closeSub,
                previous: openSub
              });
            } else {
              // left aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                down: nextSibling,
                up: prevSibling,
                next: openSub,
                previous: closeSub
              });
            }
          } else {
            // horizontal menu
            if (_this._isRtl()) {
              // right aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                next: prevSibling,
                previous: nextSibling,
                down: openSub,
                up: closeSub
              });
            } else {
              // left aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                next: nextSibling,
                previous: prevSibling,
                down: openSub,
                up: closeSub
              });
            }
          }
        } else {
          // not tabs -> one sub
          if (_this._isRtl()) {
            // right aligned
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
              next: closeSub,
              previous: openSub,
              down: nextSibling,
              up: prevSibling
            });
          } else {
            // left aligned
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
              next: openSub,
              previous: closeSub,
              down: nextSibling,
              up: prevSibling
            });
          }
        }

        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].handleKey(e, 'DropdownMenu', functions);
      });
    }
    /**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */

  }, {
    key: "_addBodyHandler",
    value: function _addBodyHandler() {
      var _this2 = this;

      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body);

      this._removeBodyHandler();

      $body.on('click.zf.dropdownMenu tap.zf.dropdownMenu', function (e) {
        var isItself = !!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest(_this2.$element).length;
        if (isItself) return;

        _this2._hide();

        _this2._removeBodyHandler();
      });
    }
    /**
     * Remove the body event handler. See `_addBodyHandler`.
     * @function
     * @private
     */

  }, {
    key: "_removeBodyHandler",
    value: function _removeBodyHandler() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdownMenu tap.zf.dropdownMenu');
    }
    /**
     * Opens a dropdown pane, and checks for collisions first.
     * @param {jQuery} $sub - ul element that is a submenu to show
     * @function
     * @private
     * @fires DropdownMenu#show
     */

  }, {
    key: "_show",
    value: function _show($sub) {
      var idx = this.$tabs.index(this.$tabs.filter(function (i, el) {
        return jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find($sub).length > 0;
      }));
      var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');

      this._hide($sibs, idx);

      $sub.css('visibility', 'hidden').addClass('js-dropdown-active').parent('li.is-dropdown-submenu-parent').addClass('is-active');
      var clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__["Box"].ImNotTouchingYou($sub, null, true);

      if (!clear) {
        var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
            $parentLi = $sub.parent('.is-dropdown-submenu-parent');
        $parentLi.removeClass("opens".concat(oldClass)).addClass("opens-".concat(this.options.alignment));
        clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__["Box"].ImNotTouchingYou($sub, null, true);

        if (!clear) {
          $parentLi.removeClass("opens-".concat(this.options.alignment)).addClass('opens-inner');
        }

        this.changed = true;
      }

      $sub.css('visibility', '');

      if (this.options.closeOnClick) {
        this._addBodyHandler();
      }
      /**
       * Fires when the new dropdown pane is visible.
       * @event DropdownMenu#show
       */


      this.$element.trigger('show.zf.dropdownMenu', [$sub]);
    }
    /**
     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
     * @function
     * @param {jQuery} $elem - element with a submenu to hide
     * @param {Number} idx - index of the $tabs collection to hide
     * @fires DropdownMenu#hide
     * @private
     */

  }, {
    key: "_hide",
    value: function _hide($elem, idx) {
      var $toClose;

      if ($elem && $elem.length) {
        $toClose = $elem;
      } else if (typeof idx !== 'undefined') {
        $toClose = this.$tabs.not(function (i, el) {
          return i === idx;
        });
      } else {
        $toClose = this.$element;
      }

      var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;

      if (somethingToClose) {
        var $activeItem = $toClose.find('li.is-active');
        $activeItem.add($toClose).attr({
          'data-is-click': false
        }).removeClass('is-active');
        $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');

        if (this.changed || $toClose.find('opens-inner').length) {
          var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
          $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(oldClass));
          this.changed = false;
        }

        clearTimeout($activeItem.data('_delay'));

        this._removeBodyHandler();
        /**
         * Fires when the open menus are closed.
         * @event DropdownMenu#hide
         */


        this.$element.trigger('hide.zf.dropdownMenu', [$toClose]);
      }
    }
    /**
     * Destroys the plugin.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$menuItems.off('.zf.dropdownMenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('.zf.dropdownMenu');
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__["Nest"].Burn(this.$element, 'dropdown');
    }
  }]);

  return DropdownMenu;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
/**
 * Default settings for plugin
 */


DropdownMenu.defaults = {
  /**
   * Disallows hover events from opening submenus
   * @option
   * @type {boolean}
   * @default false
   */
  disableHover: false,

  /**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @type {boolean}
   * @default true
   */
  autoclose: true,

  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 50
   */
  hoverDelay: 50,

  /**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @type {boolean}
   * @default false
   */
  clickOpen: false,

  /**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @type {number}
   * @default 500
   */
  closingTime: 500,

  /**
   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',

  /**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,

  /**
   * Allow clicks on leaf anchor links to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClickInside: true,

  /**
   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'vertical'
   */
  verticalClass: 'vertical',

  /**
   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'align-right'
   */
  rightClass: 'align-right',

  /**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @type {boolean}
   * @default true
   */
  forceFollow: true
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.equalizer.js":
/*!******************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.equalizer.js ***!
  \******************************************************************/
/*! exports provided: Equalizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equalizer", function() { return Equalizer; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./node_modules/foundation-sites/js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.imageLoader */ "./node_modules/foundation-sites/js/foundation.util.imageLoader.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Equalizer module.
 * @module foundation.equalizer
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.imageLoader if equalizer contains images
 */

var Equalizer =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Equalizer, _Plugin);

  function Equalizer() {
    _classCallCheck(this, Equalizer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Equalizer).apply(this, arguments));
  }

  _createClass(Equalizer, [{
    key: "_setup",

    /**
     * Creates a new instance of Equalizer.
     * @class
     * @name Equalizer
     * @fires Equalizer#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Equalizer.defaults, this.$element.data(), options);
      this.className = 'Equalizer'; // ie9 back compat

      this._init();
    }
    /**
     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var eqId = this.$element.attr('data-equalizer') || '';
      var $watched = this.$element.find("[data-equalizer-watch=\"".concat(eqId, "\"]"));

      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init();

      this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
      this.$element.attr('data-resize', eqId || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'eq'));
      this.$element.attr('data-mutate', eqId || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'eq'));
      this.hasNested = this.$element.find('[data-equalizer]').length > 0;
      this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
      this.isOn = false;
      this._bindHandler = {
        onResizeMeBound: this._onResizeMe.bind(this),
        onPostEqualizedBound: this._onPostEqualized.bind(this)
      };
      var imgs = this.$element.find('img');
      var tooSmall;

      if (this.options.equalizeOn) {
        tooSmall = this._checkMQ();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
      } else {
        this._events();
      }

      if (typeof tooSmall !== 'undefined' && tooSmall === false || typeof tooSmall === 'undefined') {
        if (imgs.length) {
          Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__["onImagesLoaded"])(imgs, this._reflow.bind(this));
        } else {
          this._reflow();
        }
      }
    }
    /**
     * Removes event listeners if the breakpoint is too small.
     * @private
     */

  }, {
    key: "_pauseEvents",
    value: function _pauseEvents() {
      this.isOn = false;
      this.$element.off({
        '.zf.equalizer': this._bindHandler.onPostEqualizedBound,
        'resizeme.zf.trigger': this._bindHandler.onResizeMeBound,
        'mutateme.zf.trigger': this._bindHandler.onResizeMeBound
      });
    }
    /**
     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
     * @private
     */

  }, {
    key: "_onResizeMe",
    value: function _onResizeMe(e) {
      this._reflow();
    }
    /**
     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
     * @private
     */

  }, {
    key: "_onPostEqualized",
    value: function _onPostEqualized(e) {
      if (e.target !== this.$element[0]) {
        this._reflow();
      }
    }
    /**
     * Initializes events for Equalizer.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this._pauseEvents();

      if (this.hasNested) {
        this.$element.on('postequalized.zf.equalizer', this._bindHandler.onPostEqualizedBound);
      } else {
        this.$element.on('resizeme.zf.trigger', this._bindHandler.onResizeMeBound);
        this.$element.on('mutateme.zf.trigger', this._bindHandler.onResizeMeBound);
      }

      this.isOn = true;
    }
    /**
     * Checks the current breakpoint to the minimum required size.
     * @private
     */

  }, {
    key: "_checkMQ",
    value: function _checkMQ() {
      var tooSmall = !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].is(this.options.equalizeOn);

      if (tooSmall) {
        if (this.isOn) {
          this._pauseEvents();

          this.$watched.css('height', 'auto');
        }
      } else {
        if (!this.isOn) {
          this._events();
        }
      }

      return tooSmall;
    }
    /**
     * A noop version for the plugin
     * @private
     */

  }, {
    key: "_killswitch",
    value: function _killswitch() {
      return;
    }
    /**
     * Calls necessary functions to update Equalizer upon DOM change
     * @private
     */

  }, {
    key: "_reflow",
    value: function _reflow() {
      if (!this.options.equalizeOnStack) {
        if (this._isStacked()) {
          this.$watched.css('height', 'auto');
          return false;
        }
      }

      if (this.options.equalizeByRow) {
        this.getHeightsByRow(this.applyHeightByRow.bind(this));
      } else {
        this.getHeights(this.applyHeight.bind(this));
      }
    }
    /**
     * Manually determines if the first 2 elements are *NOT* stacked.
     * @private
     */

  }, {
    key: "_isStacked",
    value: function _isStacked() {
      if (!this.$watched[0] || !this.$watched[1]) {
        return true;
      }

      return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
    }
    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} heights - An array of heights of children within Equalizer container
     */

  }, {
    key: "getHeights",
    value: function getHeights(cb) {
      var heights = [];

      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = 'auto';
        heights.push(this.$watched[i].offsetHeight);
      }

      cb(heights);
    }
    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     */

  }, {
    key: "getHeightsByRow",
    value: function getHeightsByRow(cb) {
      var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0,
          groups = [],
          group = 0; //group by Row

      groups[group] = [];

      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = 'auto'; //maybe could use this.$watched[i].offsetTop

        var elOffsetTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$watched[i]).offset().top;

        if (elOffsetTop != lastElTopOffset) {
          group++;
          groups[group] = [];
          lastElTopOffset = elOffsetTop;
        }

        groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
      }

      for (var j = 0, ln = groups.length; j < ln; j++) {
        var heights = jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[j]).map(function () {
          return this[1];
        }).get();
        var max = Math.max.apply(null, heights);
        groups[j].push(max);
      }

      cb(groups);
    }
    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
     * @param {array} heights - An array of heights of children within Equalizer container
     * @fires Equalizer#preequalized
     * @fires Equalizer#postequalized
     */

  }, {
    key: "applyHeight",
    value: function applyHeight(heights) {
      var max = Math.max.apply(null, heights);
      /**
       * Fires before the heights are applied
       * @event Equalizer#preequalized
       */

      this.$element.trigger('preequalized.zf.equalizer');
      this.$watched.css('height', max);
      /**
       * Fires when the heights have been applied
       * @event Equalizer#postequalized
       */

      this.$element.trigger('postequalized.zf.equalizer');
    }
    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     * @fires Equalizer#preequalized
     * @fires Equalizer#preequalizedrow
     * @fires Equalizer#postequalizedrow
     * @fires Equalizer#postequalized
     */

  }, {
    key: "applyHeightByRow",
    value: function applyHeightByRow(groups) {
      /**
       * Fires before the heights are applied
       */
      this.$element.trigger('preequalized.zf.equalizer');

      for (var i = 0, len = groups.length; i < len; i++) {
        var groupsILength = groups[i].length,
            max = groups[i][groupsILength - 1];

        if (groupsILength <= 2) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][0][0]).css({
            'height': 'auto'
          });
          continue;
        }
        /**
          * Fires before the heights per row are applied
          * @event Equalizer#preequalizedrow
          */


        this.$element.trigger('preequalizedrow.zf.equalizer');

        for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][j][0]).css({
            'height': max
          });
        }
        /**
          * Fires when the heights per row have been applied
          * @event Equalizer#postequalizedrow
          */


        this.$element.trigger('postequalizedrow.zf.equalizer');
      }
      /**
       * Fires when the heights have been applied
       */


      this.$element.trigger('postequalized.zf.equalizer');
    }
    /**
     * Destroys an instance of Equalizer.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this._pauseEvents();

      this.$watched.css('height', 'auto');
    }
  }]);

  return Equalizer;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);
/**
 * Default settings for plugin
 */


Equalizer.defaults = {
  /**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeOnStack: false,

  /**
   * Enable height equalization row by row.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeByRow: false,

  /**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @type {string}
   * @default ''
   */
  equalizeOn: ''
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.interchange.js":
/*!********************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.interchange.js ***!
  \********************************************************************/
/*! exports provided: Interchange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interchange", function() { return Interchange; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./node_modules/foundation-sites/js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./node_modules/foundation-sites/js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 */

var Interchange =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Interchange, _Plugin);

  function Interchange() {
    _classCallCheck(this, Interchange);

    return _possibleConstructorReturn(this, _getPrototypeOf(Interchange).apply(this, arguments));
  }

  _createClass(Interchange, [{
    key: "_setup",

    /**
     * Creates a new instance of Interchange.
     * @class
     * @name Interchange
     * @fires Interchange#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Interchange.defaults, this.$element.data(), options);
      this.rules = [];
      this.currentPath = '';
      this.className = 'Interchange'; // ie9 back compat
      // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();

      this._events();
    }
    /**
     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init();

      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'interchange');
      this.$element.attr({
        'data-resize': id,
        'id': id
      });

      this._parseOptions();

      this._addBreakpoints();

      this._generateRules();

      this._reflow();
    }
    /**
     * Initializes events for Interchange.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function () {
        return _this._reflow();
      });
    }
    /**
     * Calls necessary functions to update Interchange upon DOM change
     * @function
     * @private
     */

  }, {
    key: "_reflow",
    value: function _reflow() {
      var match; // Iterate through each rule, but only save the last match

      for (var i in this.rules) {
        if (this.rules.hasOwnProperty(i)) {
          var rule = this.rules[i];

          if (window.matchMedia(rule.query).matches) {
            match = rule;
          }
        }
      }

      if (match) {
        this.replace(match.path);
      }
    }
    /**
     * Check options valifity and set defaults for:
     * - `data-interchange-type`: if set, enforce the type of replacement (auto, src, background or html)
     * @function
     * @private
     */

  }, {
    key: "_parseOptions",
    value: function _parseOptions() {
      var types = ['auto', 'src', 'background', 'html'];
      if (typeof this.options.type === 'undefined') this.options.type = 'auto';else if (types.indexOf(this.options.type) === -1) {
        console.log("Warning: invalid value \"".concat(this.options.type, "\" for Interchange option \"type\""));
        this.options.type = 'auto';
      }
    }
    /**
     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
     * @function
     * @private
     */

  }, {
    key: "_addBreakpoints",
    value: function _addBreakpoints() {
      for (var i in _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].queries) {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].queries.hasOwnProperty(i)) {
          var query = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].queries[i];
          Interchange.SPECIAL_QUERIES[query.name] = query.value;
        }
      }
    }
    /**
     * Checks the Interchange element for the provided media query + content pairings
     * @function
     * @private
     * @param {Object} element - jQuery object that is an Interchange instance
     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
     */

  }, {
    key: "_generateRules",
    value: function _generateRules(element) {
      var rulesList = [];
      var rules;

      if (this.options.rules) {
        rules = this.options.rules;
      } else {
        rules = this.$element.data('interchange');
      }

      rules = typeof rules === 'string' ? rules.match(/\[.*?, .*?\]/g) : rules;

      for (var i in rules) {
        if (rules.hasOwnProperty(i)) {
          var rule = rules[i].slice(1, -1).split(', ');
          var path = rule.slice(0, -1).join('');
          var query = rule[rule.length - 1];

          if (Interchange.SPECIAL_QUERIES[query]) {
            query = Interchange.SPECIAL_QUERIES[query];
          }

          rulesList.push({
            path: path,
            query: query
          });
        }
      }

      this.rules = rulesList;
    }
    /**
     * Update the `src` property of an image, or change the HTML of a container, to the specified path.
     * @function
     * @param {String} path - Path to the image or HTML partial.
     * @fires Interchange#replaced
     */

  }, {
    key: "replace",
    value: function replace(path) {
      var _this2 = this;

      if (this.currentPath === path) return;
      var trigger = 'replaced.zf.interchange';
      var type = this.options.type;

      if (type === 'auto') {
        if (this.$element[0].nodeName === 'IMG') type = 'src';else if (path.match(/\.(gif|jpe?g|png|svg|tiff)([?#].*)?/i)) type = 'background';else type = 'html';
      } // Replacing images


      if (type === 'src') {
        this.$element.attr('src', path).on('load', function () {
          _this2.currentPath = path;
        }).trigger(trigger);
      } // Replacing background images
      else if (type === 'background') {
          path = path.replace(/\(/g, '%28').replace(/\)/g, '%29');
          this.$element.css({
            'background-image': 'url(' + path + ')'
          }).trigger(trigger);
        } // Replacing HTML
        else if (type === 'html') {
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get(path, function (response) {
              _this2.$element.html(response).trigger(trigger);

              jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).foundation();
              _this2.currentPath = path;
            });
          }
      /**
       * Fires when content in an Interchange element is done being loaded.
       * @event Interchange#replaced
       */
      // this.$element.trigger('replaced.zf.interchange');

    }
    /**
     * Destroys an instance of interchange.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('resizeme.zf.trigger');
    }
  }]);

  return Interchange;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);
/**
 * Default settings for plugin
 */


Interchange.defaults = {
  /**
   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
   * @option
   * @type {?array}
   * @default null
   */
  rules: null,

  /**
   * Type of the responsive ressource to replace. It can take the following options:
   * - `auto` (default): choose the type according to the element tag or the ressource extension,
   * - `src`: replace the `[src]` attribute, recommended for images `<img>`.
   * - `background`: replace the `background-image` CSS property.
   * - `html`: replace the element content.
   * @option
   * @type {string}
   * @default 'auto'
   */
  type: 'auto'
};
Interchange.SPECIAL_QUERIES = {
  'landscape': 'screen and (orientation: landscape)',
  'portrait': 'screen and (orientation: portrait)',
  'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.magellan.js":
/*!*****************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.magellan.js ***!
  \*****************************************************************/
/*! exports provided: Magellan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Magellan", function() { return Magellan; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.smoothScroll */ "./node_modules/foundation-sites/js/foundation.smoothScroll.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./node_modules/foundation-sites/js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Magellan module.
 * @module foundation.magellan
 * @requires foundation.smoothScroll
 * @requires foundation.util.triggers
 */

var Magellan =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Magellan, _Plugin);

  function Magellan() {
    _classCallCheck(this, Magellan);

    return _possibleConstructorReturn(this, _getPrototypeOf(Magellan).apply(this, arguments));
  }

  _createClass(Magellan, [{
    key: "_setup",

    /**
     * Creates a new instance of Magellan.
     * @class
     * @name Magellan
     * @fires Magellan#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Magellan.defaults, this.$element.data(), options);
      this.className = 'Magellan'; // ie9 back compat
      // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();

      this.calcPoints();
    }
    /**
     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'magellan');

      var _this = this;

      this.$targets = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-magellan-target]');
      this.$links = this.$element.find('a');
      this.$element.attr({
        'data-resize': id,
        'data-scroll': id,
        'id': id
      });
      this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.scrollPos = parseInt(window.pageYOffset, 10);

      this._events();
    }
    /**
     * Calculates an array of pixel values that are the demarcation lines between locations on the page.
     * Can be invoked if new elements are added or the size of a location changes.
     * @function
     */

  }, {
    key: "calcPoints",
    value: function calcPoints() {
      var _this = this,
          body = document.body,
          html = document.documentElement;

      this.points = [];
      this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
      this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
      this.$targets.each(function () {
        var $tar = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            pt = Math.round($tar.offset().top - _this.options.threshold);
        $tar.targetPoint = pt;

        _this.points.push(pt);
      });
    }
    /**
     * Initializes events for Magellan.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', function () {
        if (_this.options.deepLinking) {
          if (location.hash) {
            _this.scrollToLoc(location.hash);
          }
        }

        _this.calcPoints();

        _this._updateActive();
      });
      _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
        _this.$element.on({
          'resizeme.zf.trigger': _this.reflow.bind(_this),
          'scrollme.zf.trigger': _this._updateActive.bind(_this)
        }).on('click.zf.magellan', 'a[href^="#"]', function (e) {
          e.preventDefault();
          var arrival = this.getAttribute('href');

          _this.scrollToLoc(arrival);
        });
      });

      this._deepLinkScroll = function (e) {
        if (_this.options.deepLinking) {
          _this.scrollToLoc(window.location.hash);
        }
      };

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._deepLinkScroll);
    }
    /**
     * Function to scroll to a given location on the page.
     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
     * @function
     */

  }, {
    key: "scrollToLoc",
    value: function scrollToLoc(loc) {
      this._inTransition = true;

      var _this = this;

      var options = {
        animationEasing: this.options.animationEasing,
        animationDuration: this.options.animationDuration,
        threshold: this.options.threshold,
        offset: this.options.offset
      };
      _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__["SmoothScroll"].scrollToLoc(loc, options, function () {
        _this._inTransition = false;
      });
    }
    /**
     * Calls necessary functions to update Magellan upon DOM change
     * @function
     */

  }, {
    key: "reflow",
    value: function reflow() {
      this.calcPoints();

      this._updateActive();
    }
    /**
     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
     * @private
     * @function
     * @fires Magellan#update
     */

  }, {
    key: "_updateActive",
    value: function _updateActive()
    /*evt, elem, scrollPos*/
    {
      var _this2 = this;

      if (this._inTransition) return;
      var newScrollPos = parseInt(window.pageYOffset, 10);
      var isScrollingUp = this.scrollPos > newScrollPos;
      this.scrollPos = newScrollPos;
      var activeIdx; // Before the first point: no link

      if (newScrollPos < this.points[0]) {}
      /* do nothing */
      // At the bottom of the page: last link
      else if (newScrollPos + this.winHeight === this.docHeight) {
          activeIdx = this.points.length - 1;
        } // Otherwhise, use the last visible link
        else {
            var visibleLinks = this.points.filter(function (p, i) {
              return p - _this2.options.offset - (isScrollingUp ? _this2.options.threshold : 0) <= newScrollPos;
            });
            activeIdx = visibleLinks.length ? visibleLinks.length - 1 : 0;
          } // Get the new active link


      var $oldActive = this.$active;
      var activeHash = '';

      if (typeof activeIdx !== 'undefined') {
        this.$active = this.$links.filter('[href="#' + this.$targets.eq(activeIdx).data('magellan-target') + '"]');
        if (this.$active.length) activeHash = this.$active[0].getAttribute('href');
      } else {
        this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      }

      var isNewActive = !(!this.$active.length && !$oldActive.length) && !this.$active.is($oldActive);
      var isNewHash = activeHash !== window.location.hash; // Update the active link element

      if (isNewActive) {
        $oldActive.removeClass(this.options.activeClass);
        this.$active.addClass(this.options.activeClass);
      } // Update the hash (it may have changed with the same active link)


      if (this.options.deepLinking && isNewHash) {
        if (window.history.pushState) {
          // Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384
          var url = activeHash ? activeHash : window.location.pathname + window.location.search;

          if (this.options.updateHistory) {
            window.history.pushState({}, '', url);
          } else {
            window.history.replaceState({}, '', url);
          }
        } else {
          window.location.hash = activeHash;
        }
      }

      if (isNewActive) {
        /**
         * Fires when magellan is finished updating to the new active element.
         * @event Magellan#update
         */
        this.$element.trigger('update.zf.magellan', [this.$active]);
      }
    }
    /**
     * Destroys an instance of Magellan and resets the url of the window.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.trigger .zf.magellan').find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass);

      if (this.options.deepLinking) {
        var hash = this.$active[0].getAttribute('href');
        window.location.hash.replace(hash, '');
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._deepLinkScroll);
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
    }
  }]);

  return Magellan;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
/**
 * Default settings for plugin
 */


Magellan.defaults = {
  /**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,

  /**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
  animationEasing: 'linear',

  /**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
  threshold: 50,

  /**
   * Class applied to the active locations link on the magellan container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  activeClass: 'is-active',

  /**
   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinking: false,

  /**
   * Update the browser history with the active link, if deep linking is enabled.
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false,

  /**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
  offset: 0
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.offcanvas.js":
/*!******************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.offcanvas.js ***!
  \******************************************************************/
/*! exports provided: OffCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffCanvas", function() { return OffCanvas; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./node_modules/foundation-sites/js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./node_modules/foundation-sites/js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.triggers */ "./node_modules/foundation-sites/js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * OffCanvas module.
 * @module foundation.offCanvas
 * @requires foundation.util.keyboard
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */

var OffCanvas =
/*#__PURE__*/
function (_Plugin) {
  _inherits(OffCanvas, _Plugin);

  function OffCanvas() {
    _classCallCheck(this, OffCanvas);

    return _possibleConstructorReturn(this, _getPrototypeOf(OffCanvas).apply(this, arguments));
  }

  _createClass(OffCanvas, [{
    key: "_setup",

    /**
     * Creates a new instance of an off-canvas wrapper.
     * @class
     * @name OffCanvas
     * @fires OffCanvas#init
     * @param {Object} element - jQuery object to initialize.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      var _this2 = this;

      this.className = 'OffCanvas'; // ie9 back compat

      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, OffCanvas.defaults, this.$element.data(), options);
      this.contentClasses = {
        base: [],
        reveal: []
      };
      this.$lastTrigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.position = 'left';
      this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.nested = !!this.options.nested;
      this.$sticky = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.isInCanvas = false; // Defines the CSS transition/position classes of the off-canvas content container.

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['push', 'overlap']).each(function (index, val) {
        _this2.contentClasses.base.push('has-transition-' + val);
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['left', 'right', 'top', 'bottom']).each(function (index, val) {
        _this2.contentClasses.base.push('has-position-' + val);

        _this2.contentClasses.reveal.push('has-reveal-' + val);
      }); // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__["MediaQuery"]._init();

      this._init();

      this._events();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].register('OffCanvas', {
        'ESCAPE': 'close'
      });
    }
    /**
     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var id = this.$element.attr('id');
      this.$element.attr('aria-hidden', 'true'); // Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)

      if (this.options.contentId) {
        this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + this.options.contentId);
      } else if (this.$element.siblings('[data-off-canvas-content]').length) {
        this.$content = this.$element.siblings('[data-off-canvas-content]').first();
      } else {
        this.$content = this.$element.closest('[data-off-canvas-content]').first();
      }

      if (!this.options.contentId) {
        // Assume that the off-canvas element is nested if it isn't a sibling of the content
        this.nested = this.$element.siblings('[data-off-canvas-content]').length === 0;
      } else if (this.options.contentId && this.options.nested === null) {
        // Warning if using content ID without setting the nested option
        // Once the element is nested it is required to work properly in this case
        console.warn('Remember to use the nested option if using the content ID option!');
      }

      if (this.nested === true) {
        // Force transition overlap if nested
        this.options.transition = 'overlap'; // Remove appropriate classes if already assigned in markup

        this.$element.removeClass('is-transition-push');
      }

      this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed")); // Find triggers that affect this element and add aria-expanded to them

      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr('aria-expanded', 'false').attr('aria-controls', id); // Get position by checking for related CSS class

      this.position = this.$element.is('.position-left, .position-top, .position-right, .position-bottom') ? this.$element.attr('class').match(/position\-(left|top|right|bottom)/)[1] : this.position; // Add an overlay over the content if necessary

      if (this.options.contentOverlay === true) {
        var overlay = document.createElement('div');
        var overlayPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$element).css("position") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';
        overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);
        this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay);

        if (overlayPosition === 'is-overlay-fixed') {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$overlay).insertAfter(this.$element);
        } else {
          this.$content.append(this.$overlay);
        }
      } // Get the revealOn option from the class.


      var revealOnRegExp = new RegExp(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["RegExpEscape"])(this.options.revealClass) + '([^\\s]+)', 'g');
      var revealOnClass = revealOnRegExp.exec(this.$element[0].className);

      if (revealOnClass) {
        this.options.isRevealed = true;
        this.options.revealOn = this.options.revealOn || revealOnClass[1];
      } // Ensure the `reveal-on-*` class is set.


      if (this.options.isRevealed === true && this.options.revealOn) {
        this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn));

        this._setMQChecker();
      }

      if (this.options.transitionTime) {
        this.$element.css('transition-duration', this.options.transitionTime);
      } // Find fixed elements that should stay fixed while off-canvas is opened


      this.$sticky = this.$content.find('[data-off-canvas-sticky]');

      if (this.$sticky.length > 0 && this.options.transition === 'push') {
        // If there's at least one match force contentScroll:false because the absolute top value doesn't get recalculated on scroll
        // Limit to push transition since there's no transform scope for overlap
        this.options.contentScroll = false;
      }

      var inCanvasFor = this.$element.attr('class').match(/\bin-canvas-for-(\w+)/);

      if (inCanvasFor && inCanvasFor.length === 2) {
        // Set `inCanvasOn` option if found in-canvas-for-[BREAKPONT] CSS class
        this.options.inCanvasOn = inCanvasFor[1];
      } else if (this.options.inCanvasOn) {
        // Ensure the CSS class is set
        this.$element.addClass("in-canvas-for-".concat(this.options.inCanvasOn));
      }

      if (this.options.inCanvasOn) {
        this._checkInCanvas();
      } // Initally remove all transition/position CSS classes from off-canvas content container.


      this._removeContentClasses();
    }
    /**
     * Adds event handlers to the off-canvas wrapper and the exit overlay.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this3 = this;

      this.$element.off('.zf.trigger .zf.offCanvas').on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': this.close.bind(this),
        'toggle.zf.trigger': this.toggle.bind(this),
        'keydown.zf.offCanvas': this._handleKeyboard.bind(this)
      });

      if (this.options.closeOnClick === true) {
        var $target = this.options.contentOverlay ? this.$overlay : this.$content;
        $target.on({
          'click.zf.offCanvas': this.close.bind(this)
        });
      }

      if (this.options.inCanvasOn) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
          _this3._checkInCanvas();
        });
      }
    }
    /**
     * Applies event listener for elements that will reveal at certain breakpoints.
     * @private
     */

  }, {
    key: "_setMQChecker",
    value: function _setMQChecker() {
      var _this = this;

      this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__["MediaQuery"].atLeast(_this.options.revealOn)) {
          _this.reveal(true);
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__["MediaQuery"].atLeast(_this.options.revealOn)) {
          _this.reveal(true);
        } else {
          _this.reveal(false);
        }
      });
    }
    /**
     * Checks if InCanvas on current breakpoint and adjust off-canvas accordingly
     * @private
     */

  }, {
    key: "_checkInCanvas",
    value: function _checkInCanvas() {
      this.isInCanvas = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__["MediaQuery"].atLeast(this.options.inCanvasOn);

      if (this.isInCanvas === true) {
        this.close();
      }
    }
    /**
     * Removes the CSS transition/position classes of the off-canvas content container.
     * Removing the classes is important when another off-canvas gets opened that uses the same content container.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */

  }, {
    key: "_removeContentClasses",
    value: function _removeContentClasses(hasReveal) {
      if (typeof hasReveal !== 'boolean') {
        this.$content.removeClass(this.contentClasses.base.join(' '));
      } else if (hasReveal === false) {
        this.$content.removeClass("has-reveal-".concat(this.position));
      }
    }
    /**
     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
     * Beforehand any transition/position class gets removed.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */

  }, {
    key: "_addContentClasses",
    value: function _addContentClasses(hasReveal) {
      this._removeContentClasses(hasReveal);

      if (typeof hasReveal !== 'boolean') {
        this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position));
      } else if (hasReveal === true) {
        this.$content.addClass("has-reveal-".concat(this.position));
      }
    }
    /**
     * Preserves the fixed behavior of sticky elements on opening an off-canvas with push transition.
     * Since the off-canvas container has got a transform scope in such a case, it is done by calculating position absolute values.
     * @private
     */

  }, {
    key: "_fixStickyElements",
    value: function _fixStickyElements() {
      this.$sticky.each(function (_, el) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el); // If sticky element is currently fixed, adjust its top value to match absolute position due to transform scope
        // Limit to push transition because postion:fixed works without problems for overlap (no transform scope)

        if ($el.css('position') === 'fixed') {
          // Save current inline styling to restore it if undoing the absolute fixing
          var topVal = parseInt($el.css('top'), 10);
          $el.data('offCanvasSticky', {
            top: topVal
          });
          var absoluteTopVal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollTop() + topVal;
          $el.css({
            top: "".concat(absoluteTopVal, "px"),
            width: '100%',
            transition: 'none'
          });
        }
      });
    }
    /**
     * Restores the original fixed styling of sticky elements after having closed an off-canvas that got pseudo fixed beforehand.
     * This reverts the changes of _fixStickyElements()
     * @private
     */

  }, {
    key: "_unfixStickyElements",
    value: function _unfixStickyElements() {
      this.$sticky.each(function (_, el) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
        var stickyData = $el.data('offCanvasSticky'); // If sticky element has got data object with prior values (meaning it was originally fixed) restore these values once off-canvas is closed

        if (_typeof(stickyData) === 'object') {
          $el.css({
            top: "".concat(stickyData.top, "px"),
            width: '',
            transition: ''
          });
          $el.data('offCanvasSticky', '');
        }
      });
    }
    /**
     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
     * @param {Boolean} isRevealed - true if element should be revealed.
     * @function
     */

  }, {
    key: "reveal",
    value: function reveal(isRevealed) {
      if (isRevealed) {
        this.close();
        this.isRevealed = true;
        this.$element.attr('aria-hidden', 'false');
        this.$element.off('open.zf.trigger toggle.zf.trigger');
        this.$element.removeClass('is-closed');
      } else {
        this.isRevealed = false;
        this.$element.attr('aria-hidden', 'true');
        this.$element.off('open.zf.trigger toggle.zf.trigger').on({
          'open.zf.trigger': this.open.bind(this),
          'toggle.zf.trigger': this.toggle.bind(this)
        });
        this.$element.addClass('is-closed');
      }

      this._addContentClasses(isRevealed);
    }
    /**
     * Stops scrolling of the body when OffCanvas is open on mobile Safari and other troublesome browsers.
     * @function
     * @private
     */

  }, {
    key: "_stopScrolling",
    value: function _stopScrolling(event) {
      return false;
    }
    /**
     * Tag the element given as context whether it can be scrolled up and down.
     * Used to allow or prevent it to scroll. See `_stopScrollPropagation`.
     *
     * Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
     * Only really works for y, not sure how to extend to x or if we need to.
     *
     * @function
     * @private
     */

  }, {
    key: "_recordScrollable",
    value: function _recordScrollable(event) {
      var elem = this; // called from event handler context with this as elem
      // If the element is scrollable (content overflows), then...

      if (elem.scrollHeight !== elem.clientHeight) {
        // If we're at the top, scroll down one pixel to allow scrolling up
        if (elem.scrollTop === 0) {
          elem.scrollTop = 1;
        } // If we're at the bottom, scroll up one pixel to allow scrolling down


        if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
          elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;
        }
      }

      elem.allowUp = elem.scrollTop > 0;
      elem.allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
      elem.lastY = event.originalEvent.pageY;
    }
    /**
     * Prevent the given event propagation if the element given as context can scroll.
     * Used to preserve the element scrolling on mobile (`touchmove`) when the document
     * scrolling is prevented. See https://git.io/zf-9707.
     * @function
     * @private
     */

  }, {
    key: "_stopScrollPropagation",
    value: function _stopScrollPropagation(event) {
      var elem = this; // called from event handler context with this as elem

      var parent; // off-canvas elem if called from inner scrollbox

      var up = event.pageY < elem.lastY;
      var down = !up;
      elem.lastY = event.pageY;

      if (up && elem.allowUp || down && elem.allowDown) {
        // It is not recommended to stop event propagation (the user cannot watch it),
        // but in this case this is the only solution we have.
        event.stopPropagation(); // If elem is inner scrollbox we are scrolling the outer off-canvas down/up once the box end has been reached
        // This lets the user continue to touch move the off-canvas without the need to place the finger outside the scrollbox

        if (elem.hasAttribute('data-off-canvas-scrollbox')) {
          parent = elem.closest('[data-off-canvas], [data-off-canvas-scrollbox-outer]');

          if (elem.scrollTop <= 1 && parent.scrollTop > 0) {
            parent.scrollTop--;
          } else if (elem.scrollTop >= elem.scrollHeight - elem.clientHeight - 1 && parent.scrollTop < parent.scrollHeight - parent.clientHeight) {
            parent.scrollTop++;
          }
        }
      } else {
        event.preventDefault();
      }
    }
    /**
     * Opens the off-canvas menu.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     * @fires OffCanvas#opened
     * @todo also trigger 'open' event?
     */

  }, {
    key: "open",
    value: function open(event, trigger) {
      var _this4 = this;

      if (this.$element.hasClass('is-open') || this.isRevealed || this.isInCanvas) {
        return;
      }

      var _this = this;

      if (trigger) {
        this.$lastTrigger = trigger;
      }

      if (this.options.forceTo === 'top') {
        window.scrollTo(0, 0);
      } else if (this.options.forceTo === 'bottom') {
        window.scrollTo(0, document.body.scrollHeight);
      }

      if (this.options.transitionTime && this.options.transition !== 'overlap') {
        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', this.options.transitionTime);
      } else {
        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', '');
      }

      this.$element.addClass('is-open').removeClass('is-closed');
      this.$triggers.attr('aria-expanded', 'true');
      this.$element.attr('aria-hidden', 'false');
      this.$content.addClass('is-open-' + this.position); // If `contentScroll` is set to false, add class and disable scrolling on touch devices.

      if (this.options.contentScroll === false) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);
        this.$element.on('touchstart', this._recordScrollable);
        this.$element.on('touchmove', this._stopScrollPropagation);
        this.$element.on('touchstart', '[data-off-canvas-scrollbox]', this._recordScrollable);
        this.$element.on('touchmove', '[data-off-canvas-scrollbox]', this._stopScrollPropagation);
      }

      if (this.options.contentOverlay === true) {
        this.$overlay.addClass('is-visible');
      }

      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
        this.$overlay.addClass('is-closable');
      }

      if (this.options.autoFocus === true) {
        this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["transitionend"])(this.$element), function () {
          if (!_this.$element.hasClass('is-open')) {
            return; // exit if prematurely closed
          }

          var canvasFocus = _this.$element.find('[data-autofocus]');

          if (canvasFocus.length) {
            canvasFocus.eq(0).focus();
          } else {
            _this.$element.find('a, button').eq(0).focus();
          }
        });
      }

      if (this.options.trapFocus === true) {
        this.$content.attr('tabindex', '-1');
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].trapFocus(this.$element);
      }

      if (this.options.transition === 'push') {
        this._fixStickyElements();
      }

      this._addContentClasses();
      /**
       * Fires when the off-canvas menu opens.
       * @event OffCanvas#opened
       */


      this.$element.trigger('opened.zf.offCanvas');
      /**
       * Fires when the off-canvas menu open transition is done.
       * @event OffCanvas#openedEnd
       */

      this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["transitionend"])(this.$element), function () {
        _this4.$element.trigger('openedEnd.zf.offCanvas');
      });
    }
    /**
     * Closes the off-canvas menu.
     * @function
     * @param {Function} cb - optional cb to fire after closure.
     * @fires OffCanvas#close
     * @fires OffCanvas#closed
     */

  }, {
    key: "close",
    value: function close(cb) {
      var _this5 = this;

      if (!this.$element.hasClass('is-open') || this.isRevealed) {
        return;
      }
      /**
       * Fires when the off-canvas menu closes.
       * @event OffCanvas#close
       */


      this.$element.trigger('close.zf.offCanvas');

      var _this = this;

      this.$element.removeClass('is-open');
      this.$element.attr('aria-hidden', 'true');
      this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom');

      if (this.options.contentOverlay === true) {
        this.$overlay.removeClass('is-visible');
      }

      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
        this.$overlay.removeClass('is-closable');
      }

      this.$triggers.attr('aria-expanded', 'false'); // Listen to transitionEnd: add class, re-enable scrolling and release focus when done.

      this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["transitionend"])(this.$element), function (e) {
        _this5.$element.addClass('is-closed');

        _this5._removeContentClasses();

        if (_this5.options.transition === 'push') {
          _this5._unfixStickyElements();
        } // If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.


        if (_this5.options.contentScroll === false) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('is-off-canvas-open').off('touchmove', _this5._stopScrolling);

          _this5.$element.off('touchstart', _this5._recordScrollable);

          _this5.$element.off('touchmove', _this5._stopScrollPropagation);

          _this5.$element.off('touchstart', '[data-off-canvas-scrollbox]', _this5._recordScrollable);

          _this5.$element.off('touchmove', '[data-off-canvas-scrollbox]', _this5._stopScrollPropagation);
        }

        if (_this5.options.trapFocus === true) {
          _this5.$content.removeAttr('tabindex');

          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].releaseFocus(_this5.$element);
        }
        /**
         * Fires when the off-canvas menu close transition is done.
         * @event OffCanvas#closed
         */


        _this5.$element.trigger('closed.zf.offCanvas');
      });
    }
    /**
     * Toggles the off-canvas menu open or closed.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     */

  }, {
    key: "toggle",
    value: function toggle(event, trigger) {
      if (this.$element.hasClass('is-open')) {
        this.close(event, trigger);
      } else {
        this.open(event, trigger);
      }
    }
    /**
     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
     * @function
     * @private
     */

  }, {
    key: "_handleKeyboard",
    value: function _handleKeyboard(e) {
      var _this6 = this;

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].handleKey(e, 'OffCanvas', {
        close: function close() {
          _this6.close();

          _this6.$lastTrigger.focus();

          return true;
        },
        handled: function handled() {
          e.preventDefault();
        }
      });
    }
    /**
     * Destroys the OffCanvas plugin.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.close();
      this.$element.off('.zf.trigger .zf.offCanvas');
      this.$overlay.off('.zf.offCanvas');
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
    }
  }]);

  return OffCanvas;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

OffCanvas.defaults = {
  /**
   * Allow the user to click outside of the menu to close it.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,

  /**
   * Adds an overlay on top of `[data-off-canvas-content]`.
   * @option
   * @type {boolean}
   * @default true
   */
  contentOverlay: true,

  /**
   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
   * @option
   * @type {?string}
   * @default null
   */
  contentId: null,

  /**
   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
   * @option
   * @type {boolean}
   * @default null
   */
  nested: null,

  /**
   * Enable/disable scrolling of the main content when an off canvas panel is open.
   * @option
   * @type {boolean}
   * @default true
   */
  contentScroll: true,

  /**
   * Amount of time the open and close transition requires, including the appropriate milliseconds (`ms`) or seconds (`s`) unit (e.g. `500ms`, `.75s`) If none selected, pulls from body style.
   * @option
   * @type {string}
   * @default null
   */
  transitionTime: null,

  /**
   * Type of transition for the OffCanvas menu. Options are 'push', 'detached' or 'slide'.
   * @option
   * @type {string}
   * @default push
   */
  transition: 'push',

  /**
   * Force the page to scroll to top or bottom on open.
   * @option
   * @type {?string}
   * @default null
   */
  forceTo: null,

  /**
   * Allow the OffCanvas to remain open for certain breakpoints.
   * @option
   * @type {boolean}
   * @default false
   */
  isRevealed: false,

  /**
   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
   * @option
   * @type {?string}
   * @default null
   */
  revealOn: null,

  /**
   * Breakpoint at which the off-canvas gets moved into canvas content and acts as regular page element.
   * @option
   * @type {?string}
   * @default null
   */
  inCanvasOn: null,

  /**
   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
   * @option
   * @type {boolean}
   * @default true
   */
  autoFocus: true,

  /**
   * Class used to force an OffCanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
   * @option
   * @type {string}
   * @default reveal-for-
   * @todo improve the regex testing for this.
   */
  revealClass: 'reveal-for-',

  /**
   * Triggers optional focus trapping when opening an OffCanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
   * @option
   * @type {boolean}
   * @default false
   */
  trapFocus: false
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.positionable.js":
/*!*********************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.positionable.js ***!
  \*********************************************************************/
/*! exports provided: Positionable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positionable", function() { return Positionable; });
/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation.util.box */ "./node_modules/foundation-sites/js/foundation.util.box.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var POSITIONS = ['left', 'right', 'top', 'bottom'];
var VERTICAL_ALIGNMENTS = ['top', 'bottom', 'center'];
var HORIZONTAL_ALIGNMENTS = ['left', 'right', 'center'];
var ALIGNMENTS = {
  'left': VERTICAL_ALIGNMENTS,
  'right': VERTICAL_ALIGNMENTS,
  'top': HORIZONTAL_ALIGNMENTS,
  'bottom': HORIZONTAL_ALIGNMENTS
};

function nextItem(item, array) {
  var currentIdx = array.indexOf(item);

  if (currentIdx === array.length - 1) {
    return array[0];
  } else {
    return array[currentIdx + 1];
  }
}

var Positionable =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Positionable, _Plugin);

  function Positionable() {
    _classCallCheck(this, Positionable);

    return _possibleConstructorReturn(this, _getPrototypeOf(Positionable).apply(this, arguments));
  }

  _createClass(Positionable, [{
    key: "_init",

    /**
     * Abstract class encapsulating the tether-like explicit positioning logic
     * including repositioning based on overlap.
     * Expects classes to define defaults for vOffset, hOffset, position,
     * alignment, allowOverlap, and allowBottomOverlap. They can do this by
     * extending the defaults, or (for now recommended due to the way docs are
     * generated) by explicitly declaring them.
     *
     **/
    value: function _init() {
      this.triedPositions = {};
      this.position = this.options.position === 'auto' ? this._getDefaultPosition() : this.options.position;
      this.alignment = this.options.alignment === 'auto' ? this._getDefaultAlignment() : this.options.alignment;
      this.originalPosition = this.position;
      this.originalAlignment = this.alignment;
    }
  }, {
    key: "_getDefaultPosition",
    value: function _getDefaultPosition() {
      return 'bottom';
    }
  }, {
    key: "_getDefaultAlignment",
    value: function _getDefaultAlignment() {
      switch (this.position) {
        case 'bottom':
        case 'top':
          return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"])() ? 'right' : 'left';

        case 'left':
        case 'right':
          return 'bottom';
      }
    }
    /**
     * Adjusts the positionable possible positions by iterating through alignments
     * and positions.
     * @function
     * @private
     */

  }, {
    key: "_reposition",
    value: function _reposition() {
      if (this._alignmentsExhausted(this.position)) {
        this.position = nextItem(this.position, POSITIONS);
        this.alignment = ALIGNMENTS[this.position][0];
      } else {
        this._realign();
      }
    }
    /**
     * Adjusts the dropdown pane possible positions by iterating through alignments
     * on the current position.
     * @function
     * @private
     */

  }, {
    key: "_realign",
    value: function _realign() {
      this._addTriedPosition(this.position, this.alignment);

      this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);
    }
  }, {
    key: "_addTriedPosition",
    value: function _addTriedPosition(position, alignment) {
      this.triedPositions[position] = this.triedPositions[position] || [];
      this.triedPositions[position].push(alignment);
    }
  }, {
    key: "_positionsExhausted",
    value: function _positionsExhausted() {
      var isExhausted = true;

      for (var i = 0; i < POSITIONS.length; i++) {
        isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);
      }

      return isExhausted;
    }
  }, {
    key: "_alignmentsExhausted",
    value: function _alignmentsExhausted(position) {
      return this.triedPositions[position] && this.triedPositions[position].length == ALIGNMENTS[position].length;
    } // When we're trying to center, we don't want to apply offset that's going to
    // take us just off center, so wrap around to return 0 for the appropriate
    // offset in those alignments.  TODO: Figure out if we want to make this
    // configurable behavior... it feels more intuitive, especially for tooltips, but
    // it's possible someone might actually want to start from center and then nudge
    // slightly off.

  }, {
    key: "_getVOffset",
    value: function _getVOffset() {
      return this.options.vOffset;
    }
  }, {
    key: "_getHOffset",
    value: function _getHOffset() {
      return this.options.hOffset;
    }
  }, {
    key: "_setPosition",
    value: function _setPosition($anchor, $element, $parent) {
      if ($anchor.attr('aria-expanded') === 'false') {
        return false;
      }

      if (!this.options.allowOverlap) {
        // restore original position & alignment before checking overlap
        this.position = this.originalPosition;
        this.alignment = this.originalAlignment;
      }

      $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));

      if (!this.options.allowOverlap) {
        var minOverlap = 100000000; // default coordinates to how we start, in case we can't figure out better

        var minCoordinates = {
          position: this.position,
          alignment: this.alignment
        };

        while (!this._positionsExhausted()) {
          var overlap = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);

          if (overlap === 0) {
            return;
          }

          if (overlap < minOverlap) {
            minOverlap = overlap;
            minCoordinates = {
              position: this.position,
              alignment: this.alignment
            };
          }

          this._reposition();

          $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
        } // If we get through the entire loop, there was no non-overlapping
        // position available. Pick the version with least overlap.


        this.position = minCoordinates.position;
        this.alignment = minCoordinates.alignment;
        $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
      }
    }
  }]);

  return Positionable;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

Positionable.defaults = {
  /**
   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  position: 'auto',

  /**
   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',

  /**
   * Allow overlap of container/window. If false, dropdown positionable first
   * try to position as defined by data-position and data-alignment, but
   * reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
  allowOverlap: false,

  /**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
  allowBottomOverlap: true,

  /**
   * Number of pixels the positionable should be separated vertically from anchor
   * @option
   * @type {number}
   * @default 0
   */
  vOffset: 0,

  /**
   * Number of pixels the positionable should be separated horizontally from anchor
   * @option
   * @type {number}
   * @default 0
   */
  hOffset: 0
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.responsiveAccordionTabs.js":
/*!********************************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.responsiveAccordionTabs.js ***!
  \********************************************************************************/
/*! exports provided: ResponsiveAccordionTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveAccordionTabs", function() { return ResponsiveAccordionTabs; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./node_modules/foundation-sites/js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");
/* harmony import */ var _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.accordion */ "./node_modules/foundation-sites/js/foundation.accordion.js");
/* harmony import */ var _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.tabs */ "./node_modules/foundation-sites/js/foundation.tabs.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






 // The plugin matches the plugin classes with these plugin instances.

var MenuPlugins = {
  tabs: {
    cssClass: 'tabs',
    plugin: _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__["Tabs"],
    open: function open(plugin, target) {
      return plugin.selectTab(target);
    },
    close: null
    /* not supported */
    ,
    toggle: null
    /* not supported */

  },
  accordion: {
    cssClass: 'accordion',
    plugin: _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__["Accordion"],
    open: function open(plugin, target) {
      return plugin.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));
    },
    close: function close(plugin, target) {
      return plugin.up(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));
    },
    toggle: function toggle(plugin, target) {
      return plugin.toggle(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));
    }
  }
};
/**
 * ResponsiveAccordionTabs module.
 * @module foundation.responsiveAccordionTabs
 * @requires foundation.util.motion
 * @requires foundation.accordion
 * @requires foundation.tabs
 */

var ResponsiveAccordionTabs =
/*#__PURE__*/
function (_Plugin) {
  _inherits(ResponsiveAccordionTabs, _Plugin);

  function ResponsiveAccordionTabs(element, options) {
    var _this2;

    _classCallCheck(this, ResponsiveAccordionTabs);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveAccordionTabs).call(this, element, options));
    return _possibleConstructorReturn(_this2, _this2.options.reflow && _this2.storezfData || _assertThisInitialized(_this2));
  }
  /**
   * Creates a new instance of a responsive accordion tabs.
   * @class
   * @name ResponsiveAccordionTabs
   * @fires ResponsiveAccordionTabs#init
   * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.
   * @param {Object} options - Overrides to the default plugin settings.
   */


  _createClass(ResponsiveAccordionTabs, [{
    key: "_setup",
    value: function _setup(element, options) {
      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
      this.$element.data('zfPluginBase', this);
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, ResponsiveAccordionTabs.defaults, this.$element.data(), options);
      this.rules = this.$element.data('responsive-accordion-tabs');
      this.currentMq = null;
      this.currentRule = null;
      this.currentPlugin = null;
      this.className = 'ResponsiveAccordionTabs'; // ie9 back compat

      if (!this.$element.attr('id')) {
        this.$element.attr('id', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'responsiveaccordiontabs'));
      }

      this._init();

      this._events();
    }
    /**
     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules


      if (typeof this.rules === 'string') {
        var rulesTree = {}; // Parse rules from "classes" pulled from data attribute

        var rules = this.rules.split(' '); // Iterate through every rule found

        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i].split('-');
          var ruleSize = rule.length > 1 ? rule[0] : 'small';
          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

          if (MenuPlugins[rulePlugin] !== null) {
            rulesTree[ruleSize] = MenuPlugins[rulePlugin];
          }
        }

        this.rules = rulesTree;
      }

      this._getAllOptions();

      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isEmptyObject(this.rules)) {
        this._checkMediaQueries();
      }
    }
  }, {
    key: "_getAllOptions",
    value: function _getAllOptions() {
      //get all defaults and options
      var _this = this;

      _this.allOptions = {};

      for (var key in MenuPlugins) {
        if (MenuPlugins.hasOwnProperty(key)) {
          var obj = MenuPlugins[key];

          try {
            var dummyPlugin = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul></ul>');
            var tmpPlugin = new obj.plugin(dummyPlugin, _this.options);

            for (var keyKey in tmpPlugin.options) {
              if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== 'zfPlugin') {
                var objObj = tmpPlugin.options[keyKey];
                _this.allOptions[keyKey] = objObj;
              }
            }

            tmpPlugin.destroy();
          } catch (e) {}
        }
      }
    }
    /**
     * Initializes events for the Menu.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
    }
    /**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */

  }, {
    key: "_checkMediaQueries",
    value: function _checkMediaQueries() {
      var matchedMq,
          _this = this; // Iterate through each rule and find the last matching rule


      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.rules, function (key) {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(key)) {
          matchedMq = key;
        }
      }); // No match? No dice

      if (!matchedMq) return; // Plugin already initialized? We good

      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes

      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(MenuPlugins, function (key, value) {
        _this.$element.removeClass(value.cssClass);
      }); // Add the CSS class for the new plugin

      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin

      if (this.currentPlugin) {
        //don't know why but on nested elements data zfPlugin get's lost
        if (!this.currentPlugin.$element.data('zfPlugin') && this.storezfData) this.currentPlugin.$element.data('zfPlugin', this.storezfData);
        this.currentPlugin.destroy();
      }

      this._handleMarkup(this.rules[matchedMq].cssClass);

      this.currentRule = this.rules[matchedMq];
      this.currentPlugin = new this.currentRule.plugin(this.$element, this.options);
      this.storezfData = this.currentPlugin.$element.data('zfPlugin');
    }
  }, {
    key: "_handleMarkup",
    value: function _handleMarkup(toSet) {
      var _this = this,
          fromString = 'accordion';

      var $panels = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + this.$element.attr('id') + ']');
      if ($panels.length) fromString = 'tabs';

      if (fromString === toSet) {
        return;
      }

      var tabsTitle = _this.allOptions.linkClass ? _this.allOptions.linkClass : 'tabs-title';
      var tabsPanel = _this.allOptions.panelClass ? _this.allOptions.panelClass : 'tabs-panel';
      this.$element.removeAttr('role');
      var $liHeads = this.$element.children('.' + tabsTitle + ',[data-accordion-item]').removeClass(tabsTitle).removeClass('accordion-item').removeAttr('data-accordion-item');
      var $liHeadsA = $liHeads.children('a').removeClass('accordion-title');

      if (fromString === 'tabs') {
        $panels = $panels.children('.' + tabsPanel).removeClass(tabsPanel).removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby');
        $panels.children('a').removeAttr('role').removeAttr('aria-controls').removeAttr('aria-selected');
      } else {
        $panels = $liHeads.children('[data-tab-content]').removeClass('accordion-content');
      }

      $panels.css({
        display: '',
        visibility: ''
      });
      $liHeads.css({
        display: '',
        visibility: ''
      });

      if (toSet === 'accordion') {
        $panels.each(function (key, value) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($liHeads.get(key)).addClass('accordion-content').attr('data-tab-content', '').removeClass('is-active').css({
            height: ''
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']').after('<div id="tabs-placeholder-' + _this.$element.attr('id') + '"></div>').detach();
          $liHeads.addClass('accordion-item').attr('data-accordion-item', '');
          $liHeadsA.addClass('accordion-title');
        });
      } else if (toSet === 'tabs') {
        var $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']');
        var $placeholder = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tabs-placeholder-' + _this.$element.attr('id'));

        if ($placeholder.length) {
          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="tabs-content"></div>').insertAfter($placeholder).attr('data-tabs-content', _this.$element.attr('id'));
          $placeholder.remove();
        } else {
          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="tabs-content"></div>').insertAfter(_this.$element).attr('data-tabs-content', _this.$element.attr('id'));
        }

        $panels.each(function (key, value) {
          var tempValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($tabsContent).addClass(tabsPanel);
          var hash = $liHeadsA.get(key).hash.slice(1);
          var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'accordion');

          if (hash !== id) {
            if (hash !== '') {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);
            } else {
              hash = id;
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href', jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href').replace('#', '') + '#' + hash);
            }
          }

          var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeads.get(key)).hasClass('is-active');

          if (isActive) {
            tempValue.addClass('is-active');
          }
        });
        $liHeads.addClass(tabsTitle);
      }

      ;
    }
    /**
     * Opens the plugin pane defined by `target`.
     * @param {jQuery | String} target - jQuery object or string of the id of the pane to open.
     * @see Accordion.down
     * @see Tabs.selectTab
     * @function
     */

  }, {
    key: "open",
    value: function open(_target) {
      if (this.currentRule && typeof this.currentRule.open === 'function') {
        var _this$currentRule;

        return (_this$currentRule = this.currentRule).open.apply(_this$currentRule, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
      }
    }
    /**
     * Closes the plugin pane defined by `target`. Not availaible for Tabs.
     * @param {jQuery | String} target - jQuery object or string of the id of the pane to close.
     * @see Accordion.up
     * @function
     */

  }, {
    key: "close",
    value: function close(_target) {
      if (this.currentRule && typeof this.currentRule.close === 'function') {
        var _this$currentRule2;

        return (_this$currentRule2 = this.currentRule).close.apply(_this$currentRule2, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
      }
    }
    /**
     * Toggles the plugin pane defined by `target`. Not availaible for Tabs.
     * @param {jQuery | String} target - jQuery object or string of the id of the pane to toggle.
     * @see Accordion.toggle
     * @function
     */

  }, {
    key: "toggle",
    value: function toggle(_target) {
      if (this.currentRule && typeof this.currentRule.toggle === 'function') {
        var _this$currentRule3;

        return (_this$currentRule3 = this.currentRule).toggle.apply(_this$currentRule3, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
      }
    }
    /**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      if (this.currentPlugin) this.currentPlugin.destroy();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
    }
  }]);

  return ResponsiveAccordionTabs;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

ResponsiveAccordionTabs.defaults = {};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.responsiveMenu.js":
/*!***********************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.responsiveMenu.js ***!
  \***********************************************************************/
/*! exports provided: ResponsiveMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMenu", function() { return ResponsiveMenu; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./node_modules/foundation-sites/js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");
/* harmony import */ var _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.dropdownMenu */ "./node_modules/foundation-sites/js/foundation.dropdownMenu.js");
/* harmony import */ var _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.drilldown */ "./node_modules/foundation-sites/js/foundation.drilldown.js");
/* harmony import */ var _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.accordionMenu */ "./node_modules/foundation-sites/js/foundation.accordionMenu.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var MenuPlugins = {
  dropdown: {
    cssClass: 'dropdown',
    plugin: _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownMenu"]
  },
  drilldown: {
    cssClass: 'drilldown',
    plugin: _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__["Drilldown"]
  },
  accordion: {
    cssClass: 'accordion-menu',
    plugin: _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__["AccordionMenu"]
  }
}; // import "foundation.util.triggers.js";

/**
 * ResponsiveMenu module.
 * @module foundation.responsiveMenu
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */

var ResponsiveMenu =
/*#__PURE__*/
function (_Plugin) {
  _inherits(ResponsiveMenu, _Plugin);

  function ResponsiveMenu() {
    _classCallCheck(this, ResponsiveMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveMenu).apply(this, arguments));
  }

  _createClass(ResponsiveMenu, [{
    key: "_setup",

    /**
     * Creates a new instance of a responsive menu.
     * @class
     * @name ResponsiveMenu
     * @fires ResponsiveMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
      this.rules = this.$element.data('responsive-menu');
      this.currentMq = null;
      this.currentPlugin = null;
      this.className = 'ResponsiveMenu'; // ie9 back compat

      this._init();

      this._events();
    }
    /**
     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules


      if (typeof this.rules === 'string') {
        var rulesTree = {}; // Parse rules from "classes" pulled from data attribute

        var rules = this.rules.split(' '); // Iterate through every rule found

        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i].split('-');
          var ruleSize = rule.length > 1 ? rule[0] : 'small';
          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

          if (MenuPlugins[rulePlugin] !== null) {
            rulesTree[ruleSize] = MenuPlugins[rulePlugin];
          }
        }

        this.rules = rulesTree;
      }

      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isEmptyObject(this.rules)) {
        this._checkMediaQueries();
      } // Add data-mutate since children may need it.


      this.$element.attr('data-mutate', this.$element.attr('data-mutate') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'responsive-menu'));
    }
    /**
     * Initializes events for the Menu.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
        _this._checkMediaQueries();
      }); // $(window).on('resize.zf.ResponsiveMenu', function() {
      //   _this._checkMediaQueries();
      // });
    }
    /**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */

  }, {
    key: "_checkMediaQueries",
    value: function _checkMediaQueries() {
      var matchedMq,
          _this = this; // Iterate through each rule and find the last matching rule


      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.rules, function (key) {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(key)) {
          matchedMq = key;
        }
      }); // No match? No dice

      if (!matchedMq) return; // Plugin already initialized? We good

      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes

      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(MenuPlugins, function (key, value) {
        _this.$element.removeClass(value.cssClass);
      }); // Add the CSS class for the new plugin

      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin

      if (this.currentPlugin) this.currentPlugin.destroy();
      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
    }
    /**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.currentPlugin.destroy();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('.zf.ResponsiveMenu');
    }
  }]);

  return ResponsiveMenu;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

ResponsiveMenu.defaults = {};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.responsiveToggle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.responsiveToggle.js ***!
  \*************************************************************************/
/*! exports provided: ResponsiveToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveToggle", function() { return ResponsiveToggle; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./node_modules/foundation-sites/js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./node_modules/foundation-sites/js/foundation.util.motion.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion
 */

var ResponsiveToggle =
/*#__PURE__*/
function (_Plugin) {
  _inherits(ResponsiveToggle, _Plugin);

  function ResponsiveToggle() {
    _classCallCheck(this, ResponsiveToggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveToggle).apply(this, arguments));
  }

  _createClass(ResponsiveToggle, [{
    key: "_setup",

    /**
     * Creates a new instance of Tab Bar.
     * @class
     * @name ResponsiveToggle
     * @fires ResponsiveToggle#init
     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);
      this.className = 'ResponsiveToggle'; // ie9 back compat

      this._init();

      this._events();
    }
    /**
     * Initializes the tab bar by finding the target element, toggling element, and running update().
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init();

      var targetID = this.$element.data('responsive-toggle');

      if (!targetID) {
        console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
      }

      this.$targetMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetID));
      this.$toggler = this.$element.find('[data-toggle]').filter(function () {
        var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');
        return target === targetID || target === "";
      });
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.options, this.$targetMenu.data()); // If they were set, parse the animation classes

      if (this.options.animate) {
        var input = this.options.animate.split(' ');
        this.animationIn = input[0];
        this.animationOut = input[1] || null;
      }

      this._update();
    }
    /**
     * Adds necessary event handlers for the tab bar to work.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this._updateMqHandler = this._update.bind(this);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._updateMqHandler);
      this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
    }
    /**
     * Checks the current media query to determine if the tab bar should be visible or hidden.
     * @function
     * @private
     */

  }, {
    key: "_update",
    value: function _update() {
      // Mobile
      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(this.options.hideFor)) {
        this.$element.show();
        this.$targetMenu.hide();
      } // Desktop
      else {
          this.$element.hide();
          this.$targetMenu.show();
        }
    }
    /**
     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
     * @function
     * @fires ResponsiveToggle#toggled
     */

  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      var _this2 = this;

      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(this.options.hideFor)) {
        /**
         * Fires when the element attached to the tab bar toggles.
         * @event ResponsiveToggle#toggled
         */
        if (this.options.animate) {
          if (this.$targetMenu.is(':hidden')) {
            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateIn(this.$targetMenu, this.animationIn, function () {
              _this2.$element.trigger('toggled.zf.responsiveToggle');

              _this2.$targetMenu.find('[data-mutate]').triggerHandler('mutateme.zf.trigger');
            });
          } else {
            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateOut(this.$targetMenu, this.animationOut, function () {
              _this2.$element.trigger('toggled.zf.responsiveToggle');
            });
          }
        } else {
          this.$targetMenu.toggle(0);
          this.$targetMenu.find('[data-mutate]').trigger('mutateme.zf.trigger');
          this.$element.trigger('toggled.zf.responsiveToggle');
        }
      }
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.responsiveToggle');
      this.$toggler.off('.zf.responsiveToggle');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._updateMqHandler);
    }
  }]);

  return ResponsiveToggle;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

ResponsiveToggle.defaults = {
  /**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @type {string}
   * @default 'medium'
   */
  hideFor: 'medium',

  /**
   * To decide if the toggle should be animated or not.
   * @option
   * @type {boolean}
   * @default false
   */
  animate: false
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.smoothScroll.js":
/*!*********************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.smoothScroll.js ***!
  \*********************************************************************/
/*! exports provided: SmoothScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothScroll", function() { return SmoothScroll; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * SmoothScroll module.
 * @module foundation.smoothScroll
 */

var SmoothScroll =
/*#__PURE__*/
function (_Plugin) {
  _inherits(SmoothScroll, _Plugin);

  function SmoothScroll() {
    _classCallCheck(this, SmoothScroll);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmoothScroll).apply(this, arguments));
  }

  _createClass(SmoothScroll, [{
    key: "_setup",

    /**
     * Creates a new instance of SmoothScroll.
     * @class
     * @name SmoothScroll
     * @fires SmoothScroll#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, SmoothScroll.defaults, this.$element.data(), options);
      this.className = 'SmoothScroll'; // ie9 back compat

      this._init();
    }
    /**
     * Initialize the SmoothScroll plugin
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'smooth-scroll');
      this.$element.attr({
        id: id
      });

      this._events();
    }
    /**
     * Initializes events for SmoothScroll.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this._linkClickListener = this._handleLinkClick.bind(this);
      this.$element.on('click.zf.smoothScroll', this._linkClickListener);
      this.$element.on('click.zf.smoothScroll', 'a[href^="#"]', this._linkClickListener);
    }
    /**
     * Handle the given event to smoothly scroll to the anchor pointed by the event target.
     * @param {*} e - event
     * @function
     * @private
     */

  }, {
    key: "_handleLinkClick",
    value: function _handleLinkClick(e) {
      var _this = this;

      // Follow the link if it does not point to an anchor.
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).is('a[href^="#"]')) return;
      var arrival = e.currentTarget.getAttribute('href');
      this._inTransition = true;
      SmoothScroll.scrollToLoc(arrival, this.options, function () {
        _this._inTransition = false;
      });
      e.preventDefault();
    }
  }, {
    key: "_destroy",

    /**
     * Destroys the SmoothScroll instance.
     * @function
     */
    value: function _destroy() {
      this.$element.off('click.zf.smoothScroll', this._linkClickListener);
      this.$element.off('click.zf.smoothScroll', 'a[href^="#"]', this._linkClickListener);
    }
  }], [{
    key: "scrollToLoc",

    /**
     * Function to scroll to a given location on the page.
     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
     * @param {Object} options - The options to use.
     * @param {Function} callback - The callback function.
     * @static
     * @function
     */
    value: function scrollToLoc(loc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SmoothScroll.defaults;
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      var $loc = jquery__WEBPACK_IMPORTED_MODULE_0___default()(loc); // Do nothing if target does not exist to prevent errors

      if (!$loc.length) return false;
      var scrollPos = Math.round($loc.offset().top - options.threshold / 2 - options.offset);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
        scrollTop: scrollPos
      }, options.animationDuration, options.animationEasing, function () {
        if (typeof callback === 'function') {
          callback();
        }
      });
    }
  }]);

  return SmoothScroll;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);
/**
 * Default settings for plugin.
 */


SmoothScroll.defaults = {
  /**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,

  /**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
  animationEasing: 'linear',

  /**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
  threshold: 50,

  /**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
  offset: 0
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.sticky.js":
/*!***************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.sticky.js ***!
  \***************************************************************/
/*! exports provided: Sticky */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return Sticky; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./node_modules/foundation-sites/js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./node_modules/foundation-sites/js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */

var Sticky =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Sticky, _Plugin);

  function Sticky() {
    _classCallCheck(this, Sticky);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sticky).apply(this, arguments));
  }

  _createClass(Sticky, [{
    key: "_setup",

    /**
     * Creates a new instance of a sticky thing.
     * @class
     * @name Sticky
     * @param {jQuery} element - jQuery object to make sticky.
     * @param {Object} options - options object passed when creating the element programmatically.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Sticky.defaults, this.$element.data(), options);
      this.className = 'Sticky'; // ie9 back compat
      // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();
    }
    /**
     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"]._init();

      var $parent = this.$element.parent('[data-sticky-container]'),
          id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'sticky'),
          _this = this;

      if ($parent.length) {
        this.$container = $parent;
      } else {
        this.wasWrapped = true;
        this.$element.wrap(this.options.container);
        this.$container = this.$element.parent();
      }

      this.$container.addClass(this.options.containerClass);
      this.$element.addClass(this.options.stickyClass).attr({
        'data-resize': id,
        'data-mutate': id
      });

      if (this.options.anchor !== '') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor).attr({
          'data-mutate': id
        });
      }

      this.scrollCount = this.options.checkEvery;
      this.isStuck = false;
      this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
        //We calculate the container height to have correct values for anchor points offset calculation.
        _this.containerHeight = _this.$element.css("display") == "none" ? 0 : _this.$element[0].getBoundingClientRect().height;

        _this.$container.css('height', _this.containerHeight);

        _this.elemHeight = _this.containerHeight;

        if (_this.options.anchor !== '') {
          _this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor);
        } else {
          _this._parsePoints();
        }

        _this._setSizes(function () {
          var scroll = window.pageYOffset;

          _this._calc(false, scroll); //Unstick the element will ensure that proper classes are set.


          if (!_this.isStuck) {
            _this._removeSticky(scroll >= _this.topPoint ? false : true);
          }
        });

        _this._events(id.split('-').reverse().join('-'));
      });
    }
    /**
     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
     * @function
     * @private
     */

  }, {
    key: "_parsePoints",
    value: function _parsePoints() {
      var top = this.options.topAnchor == "" ? 1 : this.options.topAnchor,
          btm = this.options.btmAnchor == "" ? document.documentElement.scrollHeight : this.options.btmAnchor,
          pts = [top, btm],
          breaks = {};

      for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
        var pt;

        if (typeof pts[i] === 'number') {
          pt = pts[i];
        } else {
          var place = pts[i].split(':'),
              anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(place[0]));
          pt = anchor.offset().top;

          if (place[1] && place[1].toLowerCase() === 'bottom') {
            pt += anchor[0].getBoundingClientRect().height;
          }
        }

        breaks[i] = pt;
      }

      this.points = breaks;
      return;
    }
    /**
     * Adds event handlers for the scrolling element.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */

  }, {
    key: "_events",
    value: function _events(id) {
      var _this = this,
          scrollListener = this.scrollListener = "scroll.zf.".concat(id);

      if (this.isOn) {
        return;
      }

      if (this.canStick) {
        this.isOn = true;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener).on(scrollListener, function (e) {
          if (_this.scrollCount === 0) {
            _this.scrollCount = _this.options.checkEvery;

            _this._setSizes(function () {
              _this._calc(false, window.pageYOffset);
            });
          } else {
            _this.scrollCount--;

            _this._calc(false, window.pageYOffset);
          }
        });
      }

      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function (e, el) {
        _this._eventsHandler(id);
      });
      this.$element.on('mutateme.zf.trigger', function (e, el) {
        _this._eventsHandler(id);
      });

      if (this.$anchor) {
        this.$anchor.on('mutateme.zf.trigger', function (e, el) {
          _this._eventsHandler(id);
        });
      }
    }
    /**
     * Handler for events.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */

  }, {
    key: "_eventsHandler",
    value: function _eventsHandler(id) {
      var _this = this,
          scrollListener = this.scrollListener = "scroll.zf.".concat(id);

      _this._setSizes(function () {
        _this._calc(false);

        if (_this.canStick) {
          if (!_this.isOn) {
            _this._events(id);
          }
        } else if (_this.isOn) {
          _this._pauseListeners(scrollListener);
        }
      });
    }
    /**
     * Removes event handlers for scroll and change events on anchor.
     * @fires Sticky#pause
     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
     */

  }, {
    key: "_pauseListeners",
    value: function _pauseListeners(scrollListener) {
      this.isOn = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener);
      /**
       * Fires when the plugin is paused due to resize event shrinking the view.
       * @event Sticky#pause
       * @private
       */

      this.$element.trigger('pause.zf.sticky');
    }
    /**
     * Called on every `scroll` event and on `_init`
     * fires functions based on booleans and cached values
     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
     */

  }, {
    key: "_calc",
    value: function _calc(checkSizes, scroll) {
      if (checkSizes) {
        this._setSizes();
      }

      if (!this.canStick) {
        if (this.isStuck) {
          this._removeSticky(true);
        }

        return false;
      }

      if (!scroll) {
        scroll = window.pageYOffset;
      }

      if (scroll >= this.topPoint) {
        if (scroll <= this.bottomPoint) {
          if (!this.isStuck) {
            this._setSticky();
          }
        } else {
          if (this.isStuck) {
            this._removeSticky(false);
          }
        }
      } else {
        if (this.isStuck) {
          this._removeSticky(true);
        }
      }
    }
    /**
     * Causes the $element to become stuck.
     * Adds `position: fixed;`, and helper classes.
     * @fires Sticky#stuckto
     * @function
     * @private
     */

  }, {
    key: "_setSticky",
    value: function _setSticky() {
      var _this = this,
          stickTo = this.options.stickTo,
          mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
          notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
          css = {};

      css[mrgn] = "".concat(this.options[mrgn], "em");
      css[stickTo] = 0;
      css[notStuckTo] = 'auto';
      this.isStuck = true;
      this.$element.removeClass("is-anchored is-at-".concat(notStuckTo)).addClass("is-stuck is-at-".concat(stickTo)).css(css)
      /**
       * Fires when the $element has become `position: fixed;`
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
       * @event Sticky#stuckto
       */
      .trigger("sticky.zf.stuckto:".concat(stickTo));
      this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
        _this._setSizes();
      });
    }
    /**
     * Causes the $element to become unstuck.
     * Removes `position: fixed;`, and helper classes.
     * Adds other helper classes.
     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
     * @fires Sticky#unstuckfrom
     * @private
     */

  }, {
    key: "_removeSticky",
    value: function _removeSticky(isTop) {
      var stickTo = this.options.stickTo,
          stickToTop = stickTo === 'top',
          css = {},
          anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
          mrgn = stickToTop ? 'marginTop' : 'marginBottom',
          topOrBottom = isTop ? 'top' : 'bottom';
      css[mrgn] = 0;
      css['bottom'] = 'auto';

      if (isTop) {
        css['top'] = 0;
      } else {
        css['top'] = anchorPt;
      }

      this.isStuck = false;
      this.$element.removeClass("is-stuck is-at-".concat(stickTo)).addClass("is-anchored is-at-".concat(topOrBottom)).css(css)
      /**
       * Fires when the $element has become anchored.
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
       * @event Sticky#unstuckfrom
       */
      .trigger("sticky.zf.unstuckfrom:".concat(topOrBottom));
    }
    /**
     * Sets the $element and $container sizes for plugin.
     * Calls `_setBreakPoints`.
     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
     * @private
     */

  }, {
    key: "_setSizes",
    value: function _setSizes(cb) {
      this.canStick = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].is(this.options.stickyOn);

      if (!this.canStick) {
        if (cb && typeof cb === 'function') {
          cb();
        }
      }

      var _this = this,
          newElemWidth = this.$container[0].getBoundingClientRect().width,
          comp = window.getComputedStyle(this.$container[0]),
          pdngl = parseInt(comp['padding-left'], 10),
          pdngr = parseInt(comp['padding-right'], 10);

      if (this.$anchor && this.$anchor.length) {
        this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
      } else {
        this._parsePoints();
      }

      this.$element.css({
        'max-width': "".concat(newElemWidth - pdngl - pdngr, "px")
      }); // Recalculate the height only if it is "dynamic"

      if (this.options.dynamicHeight || !this.containerHeight) {
        // Get the sticked element height and apply it to the container to "hold the place"
        var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
        newContainerHeight = this.$element.css("display") == "none" ? 0 : newContainerHeight;
        this.$container.css('height', newContainerHeight);
        this.containerHeight = newContainerHeight;
      }

      this.elemHeight = this.containerHeight;

      if (!this.isStuck) {
        if (this.$element.hasClass('is-at-bottom')) {
          var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
          this.$element.css('top', anchorPt);
        }
      }

      this._setBreakPoints(this.containerHeight, function () {
        if (cb && typeof cb === 'function') {
          cb();
        }
      });
    }
    /**
     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
     * @param {Function} cb - optional callback function to be called on completion.
     * @private
     */

  }, {
    key: "_setBreakPoints",
    value: function _setBreakPoints(elemHeight, cb) {
      if (!this.canStick) {
        if (cb && typeof cb === 'function') {
          cb();
        } else {
          return false;
        }
      }

      var mTop = emCalc(this.options.marginTop),
          mBtm = emCalc(this.options.marginBottom),
          topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
          bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
          // topPoint = this.$anchor.offset().top || this.points[0],
      // bottomPoint = topPoint + this.anchorHeight || this.points[1],
      winHeight = window.innerHeight;

      if (this.options.stickTo === 'top') {
        topPoint -= mTop;
        bottomPoint -= elemHeight + mTop;
      } else if (this.options.stickTo === 'bottom') {
        topPoint -= winHeight - (elemHeight + mBtm);
        bottomPoint -= winHeight - mBtm;
      } else {//this would be the stickTo: both option... tricky
      }

      this.topPoint = topPoint;
      this.bottomPoint = bottomPoint;

      if (cb && typeof cb === 'function') {
        cb();
      }
    }
    /**
     * Destroys the current sticky element.
     * Resets the element to the top position first.
     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this._removeSticky(true);

      this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
        height: '',
        top: '',
        bottom: '',
        'max-width': ''
      }).off('resizeme.zf.trigger').off('mutateme.zf.trigger');

      if (this.$anchor && this.$anchor.length) {
        this.$anchor.off('change.zf.sticky');
      }

      if (this.scrollListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.scrollListener);
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);

      if (this.wasWrapped) {
        this.$element.unwrap();
      } else {
        this.$container.removeClass(this.options.containerClass).css({
          height: ''
        });
      }
    }
  }]);

  return Sticky;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

Sticky.defaults = {
  /**
   * Customizable container template. Add your own classes for styling and sizing.
   * @option
   * @type {string}
   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
   */
  container: '<div data-sticky-container></div>',

  /**
   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
   * @option
   * @type {string}
   * @default 'top'
   */
  stickTo: 'top',

  /**
   * If anchored to a single element, the id of that element.
   * @option
   * @type {string}
   * @default ''
   */
  anchor: '',

  /**
   * If using more than one element as anchor points, the id of the top anchor.
   * @option
   * @type {string}
   * @default ''
   */
  topAnchor: '',

  /**
   * If using more than one element as anchor points, the id of the bottom anchor.
   * @option
   * @type {string}
   * @default ''
   */
  btmAnchor: '',

  /**
   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
  marginTop: 1,

  /**
   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
  marginBottom: 1,

  /**
   * Breakpoint string that is the minimum screen size an element should become sticky.
   * @option
   * @type {string}
   * @default 'medium'
   */
  stickyOn: 'medium',

  /**
   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
   * @option
   * @type {string}
   * @default 'sticky'
   */
  stickyClass: 'sticky',

  /**
   * Class applied to sticky container. Foundation defaults to `sticky-container`.
   * @option
   * @type {string}
   * @default 'sticky-container'
   */
  containerClass: 'sticky-container',

  /**
   * If true (by default), keep the sticky container the same height as the element. Otherwise, the container height is set once and does not change.
   * @option
   * @type {boolean}
   * @default true
   */
  dynamicHeight: true,

  /**
   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
   * @option
   * @type {number}
   * @default -1
   */
  checkEvery: -1
};
/**
 * Helper function to calculate em values
 * @param Number {em} - number of em's to calculate into pixels
 */

function emCalc(em) {
  return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
}



/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.tabs.js":
/*!*************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.tabs.js ***!
  \*************************************************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./node_modules/foundation-sites/js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.imageLoader */ "./node_modules/foundation-sites/js/foundation.util.imageLoader.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.imageLoader if tabs contain images
 */

var Tabs =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Tabs, _Plugin);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: "_setup",

    /**
     * Creates a new instance of tabs.
     * @class
     * @name Tabs
     * @fires Tabs#init
     * @param {jQuery} element - jQuery object to make into tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Tabs.defaults, this.$element.data(), options);
      this.className = 'Tabs'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].register('Tabs', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ARROW_RIGHT': 'next',
        'ARROW_UP': 'previous',
        'ARROW_DOWN': 'next',
        'ARROW_LEFT': 'previous' // 'TAB': 'next',
        // 'SHIFT_TAB': 'previous'

      });
    }
    /**
     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;

      var _this = this;

      this._isInitializing = true;
      this.$element.attr({
        'role': 'tablist'
      });
      this.$tabTitles = this.$element.find(".".concat(this.options.linkClass));
      this.$tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-tabs-content=\"".concat(this.$element[0].id, "\"]"));
      this.$tabTitles.each(function () {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $link = $elem.find('a'),
            isActive = $elem.hasClass("".concat(_this.options.linkActiveClass)),
            hash = $link.attr('data-tabs-target') || $link[0].hash.slice(1),
            linkId = $link[0].id ? $link[0].id : "".concat(hash, "-label"),
            $tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(hash));
        $elem.attr({
          'role': 'presentation'
        });
        $link.attr({
          'role': 'tab',
          'aria-controls': hash,
          'aria-selected': isActive,
          'id': linkId,
          'tabindex': isActive ? '0' : '-1'
        });
        $tabContent.attr({
          'role': 'tabpanel',
          'aria-labelledby': linkId
        }); // Save up the initial hash to return to it later when going back in history

        if (isActive) {
          _this._initialAnchor = "#".concat(hash);
        }

        if (!isActive) {
          $tabContent.attr('aria-hidden', 'true');
        }

        if (isActive && _this.options.autoFocus) {
          _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
              scrollTop: $elem.offset().top
            }, _this.options.deepLinkSmudgeDelay, function () {
              $link.focus();
            });
          });
        }
      });

      if (this.options.matchHeight) {
        var $images = this.$tabContent.find('img');

        if ($images.length) {
          Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__["onImagesLoaded"])($images, this._setHeight.bind(this));
        } else {
          this._setHeight();
        }
      } // Current context-bound function to open tabs on page load or history hashchange


      this._checkDeepLink = function () {
        var anchor = window.location.hash;

        if (!anchor.length) {
          // If we are still initializing and there is no anchor, then there is nothing to do
          if (_this2._isInitializing) return; // Otherwise, move to the initial anchor

          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
        }

        var anchorNoHash = anchor.indexOf('#') >= 0 ? anchor.slice(1) : anchor;
        var $anchor = anchorNoHash && jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(anchorNoHash));

        var $link = anchor && _this2.$element.find("[href$=\"".concat(anchor, "\"],[data-tabs-target=\"").concat(anchorNoHash, "\"]")).first(); // Whether the anchor element that has been found is part of this element


        var isOwnAnchor = !!($anchor.length && $link.length);

        if (isOwnAnchor) {
          // If there is an anchor for the hash, select it
          if ($anchor && $anchor.length && $link && $link.length) {
            _this2.selectTab($anchor, true);
          } // Otherwise, collapse everything
          else {
              _this2._collapse();
            } // Roll up a little to show the titles


          if (_this2.options.deepLinkSmudge) {
            var offset = _this2.$element.offset();

            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
              scrollTop: offset.top
            }, _this2.options.deepLinkSmudgeDelay);
          }
          /**
           * Fires when the plugin has deeplinked at pageload
           * @event Tabs#deeplink
           */


          _this2.$element.trigger('deeplink.zf.tabs', [$link, $anchor]);
        }
      }; //use browser to open a tab, if it exists in this tabset


      if (this.options.deepLink) {
        this._checkDeepLink();
      }

      this._events();

      this._isInitializing = false;
    }
    /**
     * Adds event handlers for items within the tabs.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this._addKeyHandler();

      this._addClickHandler();

      this._setHeightMqHandler = null;

      if (this.options.matchHeight) {
        this._setHeightMqHandler = this._setHeight.bind(this);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._setHeightMqHandler);
      }

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
      }
    }
    /**
     * Adds click handlers for items within the tabs.
     * @private
     */

  }, {
    key: "_addClickHandler",
    value: function _addClickHandler() {
      var _this = this;

      this.$element.off('click.zf.tabs').on('click.zf.tabs', ".".concat(this.options.linkClass), function (e) {
        e.preventDefault();

        _this._handleTabChange(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      });
    }
    /**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */

  }, {
    key: "_addKeyHandler",
    value: function _addKeyHandler() {
      var _this = this;

      this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function (e) {
        if (e.which === 9) return;
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $elements = $element.parent('ul').children('li'),
            $prevElement,
            $nextElement;
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            if (_this.options.wrapOnKeys) {
              $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
              $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
            } else {
              $prevElement = $elements.eq(Math.max(0, i - 1));
              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
            }

            return;
          }
        }); // handle keyboard event with keyboard util

        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].handleKey(e, 'Tabs', {
          open: function open() {
            $element.find('[role="tab"]').focus();

            _this._handleTabChange($element);
          },
          previous: function previous() {
            $prevElement.find('[role="tab"]').focus();

            _this._handleTabChange($prevElement);
          },
          next: function next() {
            $nextElement.find('[role="tab"]').focus();

            _this._handleTabChange($nextElement);
          },
          handled: function handled() {
            e.preventDefault();
          }
        });
      });
    }
    /**
     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
     * @param {jQuery} $target - Tab to open.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @fires Tabs#change
     * @function
     */

  }, {
    key: "_handleTabChange",
    value: function _handleTabChange($target, historyHandled) {
      // With `activeCollapse`, if the target is the active Tab, collapse it.
      if ($target.hasClass("".concat(this.options.linkActiveClass))) {
        if (this.options.activeCollapse) {
          this._collapse();
        }

        return;
      }

      var $oldTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass)),
          $tabLink = $target.find('[role="tab"]'),
          target = $tabLink.attr('data-tabs-target'),
          anchor = target && target.length ? "#".concat(target) : $tabLink[0].hash,
          $targetContent = this.$tabContent.find(anchor); //close old tab

      this._collapseTab($oldTab); //open new tab


      this._openTab($target); //either replace or update browser history


      if (this.options.deepLink && !historyHandled) {
        if (this.options.updateHistory) {
          history.pushState({}, '', anchor);
        } else {
          history.replaceState({}, '', anchor);
        }
      }
      /**
       * Fires when the plugin has successfully changed tabs.
       * @event Tabs#change
       */


      this.$element.trigger('change.zf.tabs', [$target, $targetContent]); //fire to children a mutation event

      $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");
    }
    /**
     * Opens the tab `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to open.
     * @function
     */

  }, {
    key: "_openTab",
    value: function _openTab($target) {
      var $tabLink = $target.find('[role="tab"]'),
          hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),
          $targetContent = this.$tabContent.find("#".concat(hash));
      $target.addClass("".concat(this.options.linkActiveClass));
      $tabLink.attr({
        'aria-selected': 'true',
        'tabindex': '0'
      });
      $targetContent.addClass("".concat(this.options.panelActiveClass)).removeAttr('aria-hidden');
    }
    /**
     * Collapses `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to collapse.
     * @function
     */

  }, {
    key: "_collapseTab",
    value: function _collapseTab($target) {
      var $target_anchor = $target.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({
        'aria-selected': 'false',
        'tabindex': -1
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat($target_anchor.attr('aria-controls'))).removeClass("".concat(this.options.panelActiveClass)).attr({
        'aria-hidden': 'true'
      });
    }
    /**
     * Collapses the active Tab.
     * @fires Tabs#collapse
     * @function
     */

  }, {
    key: "_collapse",
    value: function _collapse() {
      var $activeTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass));

      if ($activeTab.length) {
        this._collapseTab($activeTab);
        /**
        * Fires when the plugin has successfully collapsed tabs.
        * @event Tabs#collapse
        */


        this.$element.trigger('collapse.zf.tabs', [$activeTab]);
      }
    }
    /**
     * Public method for selecting a content pane to display.
     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @function
     */

  }, {
    key: "selectTab",
    value: function selectTab(elem, historyHandled) {
      var idStr, hashIdStr;

      if (_typeof(elem) === 'object') {
        idStr = elem[0].id;
      } else {
        idStr = elem;
      }

      if (idStr.indexOf('#') < 0) {
        hashIdStr = "#".concat(idStr);
      } else {
        hashIdStr = idStr;
        idStr = idStr.slice(1);
      }

      var $target = this.$tabTitles.has("[href$=\"".concat(hashIdStr, "\"],[data-tabs-target=\"").concat(idStr, "\"]")).first();

      this._handleTabChange($target, historyHandled);
    }
  }, {
    key: "_setHeight",

    /**
     * Sets the height of each panel to the height of the tallest panel.
     * If enabled in options, gets called on media query change.
     * If loading content via external source, can be called directly or with _reflow.
     * If enabled with `data-match-height="true"`, tabs sets to equal height
     * @function
     * @private
     */
    value: function _setHeight() {
      var max = 0,
          _this = this; // Lock down the `this` value for the root tabs object


      this.$tabContent.find(".".concat(this.options.panelClass)).css('height', '').each(function () {
        var panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            isActive = panel.hasClass("".concat(_this.options.panelActiveClass)); // get the options from the parent instead of trying to get them from the child

        if (!isActive) {
          panel.css({
            'visibility': 'hidden',
            'display': 'block'
          });
        }

        var temp = this.getBoundingClientRect().height;

        if (!isActive) {
          panel.css({
            'visibility': '',
            'display': ''
          });
        }

        max = temp > max ? temp : max;
      }).css('height', "".concat(max, "px"));
    }
    /**
     * Destroys an instance of tabs.
     * @fires Tabs#destroyed
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.find(".".concat(this.options.linkClass)).off('.zf.tabs').hide().end().find(".".concat(this.options.panelClass)).hide();

      if (this.options.matchHeight) {
        if (this._setHeightMqHandler != null) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._setHeightMqHandler);
        }
      }

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
      }

      if (this.onLoadListener) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
      }
    }
  }]);

  return Tabs;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

Tabs.defaults = {
  /**
   * Link the location hash to the active pane.
   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,

  /**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinkSmudge: false,

  /**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
  deepLinkSmudgeDelay: 300,

  /**
   * If `deepLink` is enabled, update the browser history with the open tab
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false,

  /**
   * Allows the window to scroll to content of active pane on load.
   * Not recommended if more than one tab panel per page.
   * @option
   * @type {boolean}
   * @default false
   */
  autoFocus: false,

  /**
   * Allows keyboard input to 'wrap' around the tab links.
   * @option
   * @type {boolean}
   * @default true
   */
  wrapOnKeys: true,

  /**
   * Allows the tab content panes to match heights if set to true.
   * @option
   * @type {boolean}
   * @default false
   */
  matchHeight: false,

  /**
   * Allows active tabs to collapse when clicked.
   * @option
   * @type {boolean}
   * @default false
   */
  activeCollapse: false,

  /**
   * Class applied to `li`'s in tab link list.
   * @option
   * @type {string}
   * @default 'tabs-title'
   */
  linkClass: 'tabs-title',

  /**
   * Class applied to the active `li` in tab link list.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  linkActiveClass: 'is-active',

  /**
   * Class applied to the content containers.
   * @option
   * @type {string}
   * @default 'tabs-panel'
   */
  panelClass: 'tabs-panel',

  /**
   * Class applied to the active content container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  panelActiveClass: 'is-active'
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.toggler.js":
/*!****************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.toggler.js ***!
  \****************************************************************/
/*! exports provided: Toggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggler", function() { return Toggler; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.motion */ "./node_modules/foundation-sites/js/foundation.util.motion.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./node_modules/foundation-sites/js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./node_modules/foundation-sites/js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 */

var Toggler =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Toggler, _Plugin);

  function Toggler() {
    _classCallCheck(this, Toggler);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toggler).apply(this, arguments));
  }

  _createClass(Toggler, [{
    key: "_setup",

    /**
     * Creates a new instance of Toggler.
     * @class
     * @name Toggler
     * @fires Toggler#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Toggler.defaults, element.data(), options);
      this.className = '';
      this.className = 'Toggler'; // ie9 back compat
      // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();

      this._events();
    }
    /**
     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      // Collect triggers to set ARIA attributes to
      var id = this.$element[0].id,
          $triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open~=\"".concat(id, "\"], [data-close~=\"").concat(id, "\"], [data-toggle~=\"").concat(id, "\"]"));
      var input; // Parse animation classes if they were set

      if (this.options.animate) {
        input = this.options.animate.split(' ');
        this.animationIn = input[0];
        this.animationOut = input[1] || null; // - aria-expanded: according to the element visibility.

        $triggers.attr('aria-expanded', !this.$element.is(':hidden'));
      } // Otherwise, parse toggle class
      else {
          input = this.options.toggler;

          if (typeof input !== 'string' || !input.length) {
            throw new Error("The 'toogler' option containing the target class is required, got \"".concat(input, "\""));
          } // Allow for a . at the beginning of the string


          this.className = input[0] === '.' ? input.slice(1) : input; // - aria-expanded: according to the elements class set.

          $triggers.attr('aria-expanded', this.$element.hasClass(this.className));
        } // - aria-controls: adding the element id to it if not already in it.


      $triggers.each(function (index, trigger) {
        var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(trigger);
        var controls = $trigger.attr('aria-controls') || '';
        var containsId = new RegExp("\\b".concat(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["RegExpEscape"])(id), "\\b")).test(controls);
        if (!containsId) $trigger.attr('aria-controls', controls ? "".concat(controls, " ").concat(id) : id);
      });
    }
    /**
     * Initializes events for the toggle trigger.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));
    }
    /**
     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
     * @function
     * @fires Toggler#on
     * @fires Toggler#off
     */

  }, {
    key: "toggle",
    value: function toggle() {
      this[this.options.animate ? '_toggleAnimate' : '_toggleClass']();
    }
  }, {
    key: "_toggleClass",
    value: function _toggleClass() {
      this.$element.toggleClass(this.className);
      var isOn = this.$element.hasClass(this.className);

      if (isOn) {
        /**
         * Fires if the target element has the class after a toggle.
         * @event Toggler#on
         */
        this.$element.trigger('on.zf.toggler');
      } else {
        /**
         * Fires if the target element does not have the class after a toggle.
         * @event Toggler#off
         */
        this.$element.trigger('off.zf.toggler');
      }

      this._updateARIA(isOn);

      this.$element.find('[data-mutate]').trigger('mutateme.zf.trigger');
    }
  }, {
    key: "_toggleAnimate",
    value: function _toggleAnimate() {
      var _this = this;

      if (this.$element.is(':hidden')) {
        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__["Motion"].animateIn(this.$element, this.animationIn, function () {
          _this._updateARIA(true);

          this.trigger('on.zf.toggler');
          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
        });
      } else {
        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__["Motion"].animateOut(this.$element, this.animationOut, function () {
          _this._updateARIA(false);

          this.trigger('off.zf.toggler');
          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
        });
      }
    }
  }, {
    key: "_updateARIA",
    value: function _updateARIA(isOn) {
      var id = this.$element[0].id;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(id, "\"], [data-close=\"").concat(id, "\"], [data-toggle=\"").concat(id, "\"]")).attr({
        'aria-expanded': isOn ? true : false
      });
    }
    /**
     * Destroys the instance of Toggler on the element.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.toggler');
    }
  }]);

  return Toggler;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);

Toggler.defaults = {
  /**
   * Class of the element to toggle. It can be provided with or without "."
   * @option
   * @type {string}
   */
  toggler: undefined,

  /**
   * Tells the plugin if the element should animated when toggled.
   * @option
   * @type {boolean}
   * @default false
   */
  animate: false
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.util.box.js":
/*!*****************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.util.box.js ***!
  \*****************************************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });


var Box = {
  ImNotTouchingYou: ImNotTouchingYou,
  OverlapArea: OverlapArea,
  GetDimensions: GetDimensions,
  GetExplicitOffsets: GetExplicitOffsets
};
/**
 * Compares the dimensions of an element to a container and determines collision events with container.
 * @function
 * @param {jQuery} element - jQuery object to test for collisions.
 * @param {jQuery} parent - jQuery object to use as bounding container.
 * @param {Boolean} lrOnly - set to true to check left and right values only.
 * @param {Boolean} tbOnly - set to true to check top and bottom values only.
 * @default if no parent object passed, detects collisions with `window`.
 * @returns {Boolean} - true if collision free, false if a collision in any direction.
 */

function ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {
  return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;
}

function OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {
  var eleDims = GetDimensions(element),
      topOver,
      bottomOver,
      leftOver,
      rightOver;

  if (parent) {
    var parDims = GetDimensions(parent);
    bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);
    topOver = eleDims.offset.top - parDims.offset.top;
    leftOver = eleDims.offset.left - parDims.offset.left;
    rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);
  } else {
    bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);
    topOver = eleDims.offset.top - eleDims.windowDims.offset.top;
    leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;
    rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);
  }

  bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);
  topOver = Math.min(topOver, 0);
  leftOver = Math.min(leftOver, 0);
  rightOver = Math.min(rightOver, 0);

  if (lrOnly) {
    return leftOver + rightOver;
  }

  if (tbOnly) {
    return topOver + bottomOver;
  } // use sum of squares b/c we care about overlap area.


  return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);
}
/**
 * Uses native methods to return an object of dimension values.
 * @function
 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
 * @returns {Object} - nested object of integer pixel values
 * TODO - if element is window, return only those values.
 */


function GetDimensions(elem) {
  elem = elem.length ? elem[0] : elem;

  if (elem === window || elem === document) {
    throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
  }

  var rect = elem.getBoundingClientRect(),
      parRect = elem.parentNode.getBoundingClientRect(),
      winRect = document.body.getBoundingClientRect(),
      winY = window.pageYOffset,
      winX = window.pageXOffset;
  return {
    width: rect.width,
    height: rect.height,
    offset: {
      top: rect.top + winY,
      left: rect.left + winX
    },
    parentDims: {
      width: parRect.width,
      height: parRect.height,
      offset: {
        top: parRect.top + winY,
        left: parRect.left + winX
      }
    },
    windowDims: {
      width: winRect.width,
      height: winRect.height,
      offset: {
        top: winY,
        left: winX
      }
    }
  };
}
/**
 * Returns an object of top and left integer pixel values for dynamically rendered elements,
 * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where
 * you don't know alignment, but generally from
 * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.
 * @function
 * @param {jQuery} element - jQuery object for the element being positioned.
 * @param {jQuery} anchor - jQuery object for the element's anchor point.
 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
 * TODO alter/rewrite to work with `em` values as well/instead of pixels
 */


function GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {
  var $eleDims = GetDimensions(element),
      $anchorDims = anchor ? GetDimensions(anchor) : null;
  var topVal, leftVal;

  if ($anchorDims !== null) {
    // set position related attribute
    switch (position) {
      case 'top':
        topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);
        break;

      case 'bottom':
        topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;
        break;

      case 'left':
        leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);
        break;

      case 'right':
        leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;
        break;
    } // set alignment related attribute


    switch (position) {
      case 'top':
      case 'bottom':
        switch (alignment) {
          case 'left':
            leftVal = $anchorDims.offset.left + hOffset;
            break;

          case 'right':
            leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;
            break;

          case 'center':
            leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;
            break;
        }

        break;

      case 'right':
      case 'left':
        switch (alignment) {
          case 'bottom':
            topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;
            break;

          case 'top':
            topVal = $anchorDims.offset.top + vOffset;
            break;

          case 'center':
            topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;
            break;
        }

        break;
    }
  }

  return {
    top: topVal,
    left: leftVal
  };
}



/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.util.imageLoader.js":
/*!*************************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.util.imageLoader.js ***!
  \*************************************************************************/
/*! exports provided: onImagesLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onImagesLoaded", function() { return onImagesLoaded; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



/**
 * Runs a callback function when images are fully loaded.
 * @param {Object} images - Image(s) to check if loaded.
 * @param {Func} callback - Function to execute when image is fully loaded.
 */

function onImagesLoaded(images, callback) {
  var self = this,
      unloaded = images.length;

  if (unloaded === 0) {
    callback();
  }

  images.each(function () {
    // Check if image is loaded
    if (this.complete && typeof this.naturalWidth !== 'undefined') {
      singleImageLoaded();
    } else {
      // If the above check failed, simulate loading on detached element.
      var image = new Image(); // Still count image as loaded if it finalizes with an error.

      var events = "load.zf.images error.zf.images";
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(image).one(events, function me(event) {
        // Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off(events, me);
        singleImageLoaded();
      });
      image.src = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('src');
    }
  });

  function singleImageLoaded() {
    unloaded--;

    if (unloaded === 0) {
      callback();
    }
  }
}



/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.util.keyboard.js":
/*!**********************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.util.keyboard.js ***!
  \**********************************************************************/
/*! exports provided: Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/




var keyCodes = {
  9: 'TAB',
  13: 'ENTER',
  27: 'ESCAPE',
  32: 'SPACE',
  35: 'END',
  36: 'HOME',
  37: 'ARROW_LEFT',
  38: 'ARROW_UP',
  39: 'ARROW_RIGHT',
  40: 'ARROW_DOWN'
};
var commands = {}; // Functions pulled out to be referenceable from internals

function findFocusable($element) {
  if (!$element) {
    return false;
  }

  return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':visible') || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('tabindex') < 0) {
      return false;
    } //only have visible elements and those that have a tabindex greater or equal 0


    return true;
  });
}

function parseKey(event) {
  var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase(); // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events

  key = key.replace(/\W+/, '');
  if (event.shiftKey) key = "SHIFT_".concat(key);
  if (event.ctrlKey) key = "CTRL_".concat(key);
  if (event.altKey) key = "ALT_".concat(key); // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)

  key = key.replace(/_$/, '');
  return key;
}

var Keyboard = {
  keys: getKeyCodes(keyCodes),

  /**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
  parseKey: parseKey,

  /**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
  handleKey: function handleKey(event, component, functions) {
    var commandList = commands[component],
        keyCode = this.parseKey(event),
        cmds,
        command,
        fn;
    if (!commandList) return console.warn('Component not defined!'); // Ignore the event if it was already handled

    if (event.zfIsKeyHandled === true) return; // This component does not differentiate between ltr and rtl

    if (typeof commandList.ltr === 'undefined') {
      cmds = commandList; // use plain list
    } else {
      // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
      if (Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["rtl"])()) cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.ltr, commandList.rtl);else cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.rtl, commandList.ltr);
    }

    command = cmds[keyCode];
    fn = functions[command]; // Execute the handler if found

    if (fn && typeof fn === 'function') {
      var returnValue = fn.apply(); // Mark the event as "handled" to prevent future handlings

      event.zfIsKeyHandled = true; // Execute function when event was handled

      if (functions.handled || typeof functions.handled === 'function') {
        functions.handled(returnValue);
      }
    } else {
      // Execute function when event was not handled
      if (functions.unhandled || typeof functions.unhandled === 'function') {
        functions.unhandled();
      }
    }
  },

  /**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */
  findFocusable: findFocusable,

  /**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */
  register: function register(componentName, cmds) {
    commands[componentName] = cmds;
  },
  // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
  //

  /**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */
  trapFocus: function trapFocus($element) {
    var $focusable = findFocusable($element),
        $firstFocusable = $focusable.eq(0),
        $lastFocusable = $focusable.eq(-1);
    $element.on('keydown.zf.trapfocus', function (event) {
      if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {
        event.preventDefault();
        $firstFocusable.focus();
      } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {
        event.preventDefault();
        $lastFocusable.focus();
      }
    });
  },

  /**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */
  releaseFocus: function releaseFocus($element) {
    $element.off('keydown.zf.trapfocus');
  }
};
/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */

function getKeyCodes(kcs) {
  var k = {};

  for (var kc in kcs) {
    k[kcs[kc]] = kcs[kc];
  }

  return k;
}



/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.util.mediaQuery.js":
/*!************************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.util.mediaQuery.js ***!
  \************************************************************************/
/*! exports provided: MediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQuery", function() { return MediaQuery; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // Default set of media queries

var defaultQueries = {
  'default': 'only screen',
  landscape: 'only screen and (orientation: landscape)',
  portrait: 'only screen and (orientation: portrait)',
  retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
}; // matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright © 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license

/* eslint-disable */

window.matchMedia || (window.matchMedia = function () {
  "use strict"; // For browsers that support matchMedium api such as IE 9 and webkit

  var styleMedia = window.styleMedia || window.media; // For those that don't support matchMedium

  if (!styleMedia) {
    var style = document.createElement('style'),
        script = document.getElementsByTagName('script')[0],
        info = null;
    style.type = 'text/css';
    style.id = 'matchmediajs-test';

    if (!script) {
      document.head.appendChild(style);
    } else {
      script.parentNode.insertBefore(style, script);
    } // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers


    info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;
    styleMedia = {
      matchMedium: function matchMedium(media) {
        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }'; // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers

        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        } // Test if media query is true or false


        return info.width === '1px';
      }
    };
  }

  return function (media) {
    return {
      matches: styleMedia.matchMedium(media || 'all'),
      media: media || 'all'
    };
  };
}());
/* eslint-enable */

var MediaQuery = {
  queries: [],
  current: '',

  /**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
  _init: function _init() {
    // make sure the initialization is only done once when calling _init() several times
    if (this.isInitialized === true) {
      return;
    } else {
      this.isInitialized = true;
    }

    var self = this;
    var $meta = jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta.foundation-mq');

    if (!$meta.length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<meta class="foundation-mq">').appendTo(document.head);
    }

    var extractedStyles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.foundation-mq').css('font-family');
    var namedQueries;
    namedQueries = parseStyleToObject(extractedStyles);
    self.queries = []; // reset

    for (var key in namedQueries) {
      if (namedQueries.hasOwnProperty(key)) {
        self.queries.push({
          name: key,
          value: "only screen and (min-width: ".concat(namedQueries[key], ")")
        });
      }
    }

    this.current = this._getCurrentSize();

    this._watcher();
  },

  /**
   * Reinitializes the media query helper.
   * Useful if your CSS breakpoint configuration has just been loaded or has changed since the initialization.
   * @function
   * @private
   */
  _reInit: function _reInit() {
    this.isInitialized = false;

    this._init();
  },

  /**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
  atLeast: function atLeast(size) {
    var query = this.get(size);

    if (query) {
      return window.matchMedia(query).matches;
    }

    return false;
  },

  /**
   * Checks if the screen is within the given breakpoint.
   * If smaller than the breakpoint of larger than its upper limit it returns false.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` otherwise.
   */
  only: function only(size) {
    return size === this._getCurrentSize();
  },

  /**
   * Checks if the screen is within a breakpoint or smaller.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's larger.
   */
  upTo: function upTo(size) {
    var nextSize = this.next(size); // If the next breakpoint does not match, the screen is smaller than
    // the upper limit of this breakpoint.

    if (nextSize) {
      return !this.atLeast(nextSize);
    } // If there is no next breakpoint, the "size" breakpoint does not have
    // an upper limit and the screen will always be within it or smaller.


    return true;
  },

  /**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */
  is: function is(size) {
    var parts = size.trim().split(' ').filter(function (p) {
      return !!p.length;
    });

    var _parts = _slicedToArray(parts, 2),
        bpSize = _parts[0],
        _parts$ = _parts[1],
        bpModifier = _parts$ === void 0 ? '' : _parts$; // Only the breakpont


    if (bpModifier === 'only') {
      return this.only(bpSize);
    } // At least the breakpoint (included)


    if (!bpModifier || bpModifier === 'up') {
      return this.atLeast(bpSize);
    } // Up to the breakpoint (included)


    if (bpModifier === 'down') {
      return this.upTo(bpSize);
    }

    throw new Error("\n      Invalid breakpoint passed to MediaQuery.is().\n      Expected a breakpoint name formatted like \"<size> <modifier>\", got \"".concat(size, "\".\n    "));
  },

  /**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
  get: function get(size) {
    for (var i in this.queries) {
      if (this.queries.hasOwnProperty(i)) {
        var query = this.queries[i];
        if (size === query.name) return query.value;
      }
    }

    return null;
  },

  /**
   * Get the breakpoint following the given breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint.
   * @returns {String|null} - The name of the following breakpoint, or `null` if the passed breakpoint was the last one.
   */
  next: function next(size) {
    var _this = this;

    var queryIndex = this.queries.findIndex(function (q) {
      return _this._getQueryName(q) === size;
    });

    if (queryIndex === -1) {
      throw new Error("\n        Unknown breakpoint \"".concat(size, "\" passed to MediaQuery.next().\n        Ensure it is present in your Sass \"$breakpoints\" setting.\n      "));
    }

    var nextQuery = this.queries[queryIndex + 1];
    return nextQuery ? nextQuery.name : null;
  },

  /**
   * Returns the name of the breakpoint related to the given value.
   * @function
   * @private
   * @param {String|Object} value - Breakpoint name or query object.
   * @returns {String} Name of the breakpoint.
   */
  _getQueryName: function _getQueryName(value) {
    if (typeof value === 'string') return value;
    if (_typeof(value) === 'object') return value.name;
    throw new TypeError("\n      Invalid value passed to MediaQuery._getQueryName().\n      Expected a breakpoint name (String) or a breakpoint query (Object), got \"".concat(value, "\" (").concat(_typeof(value), ")\n    "));
  },

  /**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
  _getCurrentSize: function _getCurrentSize() {
    var matched;

    for (var i = 0; i < this.queries.length; i++) {
      var query = this.queries[i];

      if (window.matchMedia(query.value).matches) {
        matched = query;
      }
    }

    return matched && this._getQueryName(matched);
  },

  /**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
  _watcher: function _watcher() {
    var _this2 = this;

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function () {
      var newSize = _this2._getCurrentSize(),
          currentSize = _this2.current;

      if (newSize !== currentSize) {
        // Change the current media query
        _this2.current = newSize; // Broadcast the media query change on the window

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
      }
    });
  }
}; // Thank you: https://github.com/sindresorhus/query-string

function parseStyleToObject(str) {
  var styleObject = {};

  if (typeof str !== 'string') {
    return styleObject;
  }

  str = str.trim().slice(1, -1); // browsers re-quote string style values

  if (!str) {
    return styleObject;
  }

  styleObject = str.split('&').reduce(function (ret, param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = parts[0];
    var val = parts[1];
    key = decodeURIComponent(key); // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters

    val = typeof val === 'undefined' ? null : decodeURIComponent(val);

    if (!ret.hasOwnProperty(key)) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }

    return ret;
  }, {});
  return styleObject;
}



/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.util.motion.js":
/*!********************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.util.motion.js ***!
  \********************************************************************/
/*! exports provided: Move, Motion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return Motion; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");




/**
 * Motion module.
 * @module foundation.motion
 */

var initClasses = ['mui-enter', 'mui-leave'];
var activeClasses = ['mui-enter-active', 'mui-leave-active'];
var Motion = {
  animateIn: function animateIn(element, animation, cb) {
    animate(true, element, animation, cb);
  },
  animateOut: function animateOut(element, animation, cb) {
    animate(false, element, animation, cb);
  }
};

function Move(duration, elem, fn) {
  var anim,
      prog,
      start = null; // console.log('called');

  if (duration === 0) {
    fn.apply(elem);
    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    return;
  }

  function move(ts) {
    if (!start) start = ts; // console.log(start, ts);

    prog = ts - start;
    fn.apply(elem);

    if (prog < duration) {
      anim = window.requestAnimationFrame(move, elem);
    } else {
      window.cancelAnimationFrame(anim);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    }
  }

  anim = window.requestAnimationFrame(move);
}
/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */


function animate(isIn, element, animation, cb) {
  element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).eq(0);
  if (!element.length) return;
  var initClass = isIn ? initClasses[0] : initClasses[1];
  var activeClass = isIn ? activeClasses[0] : activeClasses[1]; // Set up the animation

  reset();
  element.addClass(animation).css('transition', 'none');
  requestAnimationFrame(function () {
    element.addClass(initClass);
    if (isIn) element.show();
  }); // Start the animation

  requestAnimationFrame(function () {
    // will trigger the browser to synchronously calculate the style and layout
    // also called reflow or layout thrashing
    // see https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    element[0].offsetWidth;
    element.css('transition', '').addClass(activeClass);
  }); // Clean up the animation when it finishes

  element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(element), finish); // Hides the element (for out animations), resets the element, and runs a callback

  function finish() {
    if (!isIn) element.hide();
    reset();
    if (cb) cb.apply(element);
  } // Resets transitions and removes motion-specific classes


  function reset() {
    element[0].style.transitionDuration = 0;
    element.removeClass("".concat(initClass, " ").concat(activeClass, " ").concat(animation));
  }
}



/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.util.nest.js":
/*!******************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.util.nest.js ***!
  \******************************************************************/
/*! exports provided: Nest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nest", function() { return Nest; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



var Nest = {
  Feather: function Feather(menu) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zf';
    menu.attr('role', 'menubar');
    menu.find('a').attr({
      'role': 'menuitem'
    });
    var items = menu.find('li').attr({
      'role': 'none'
    }),
        subMenuClass = "is-".concat(type, "-submenu"),
        subItemClass = "".concat(subMenuClass, "-item"),
        hasSubClass = "is-".concat(type, "-submenu-parent"),
        applyAria = type !== 'accordion'; // Accordions handle their own ARIA attriutes.

    items.each(function () {
      var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
          $sub = $item.children('ul');

      if ($sub.length) {
        $item.addClass(hasSubClass);

        if (applyAria) {
          $item.attr({
            'aria-haspopup': true,
            'aria-label': $item.children('a:first').text()
          }); // Note:  Drilldowns behave differently in how they hide, and so need
          // additional attributes.  We should look if this possibly over-generalized
          // utility (Nest) is appropriate when we rework menus in 6.4

          if (type === 'drilldown') {
            $item.attr({
              'aria-expanded': false
            });
          }
        }

        $sub.addClass("submenu ".concat(subMenuClass)).attr({
          'data-submenu': '',
          'role': 'menubar'
        });

        if (type === 'drilldown') {
          $sub.attr({
            'aria-hidden': true
          });
        }
      }

      if ($item.parent('[data-submenu]').length) {
        $item.addClass("is-submenu-item ".concat(subItemClass));
      }
    });
    return;
  },
  Burn: function Burn(menu, type) {
    var //items = menu.find('li'),
    subMenuClass = "is-".concat(type, "-submenu"),
        subItemClass = "".concat(subMenuClass, "-item"),
        hasSubClass = "is-".concat(type, "-submenu-parent");
    menu.find('>li, > li > ul, .menu, .menu > li, [data-submenu] > li').removeClass("".concat(subMenuClass, " ").concat(subItemClass, " ").concat(hasSubClass, " is-submenu-item submenu is-active")).removeAttr('data-submenu').css('display', '');
  }
};


/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.util.timer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.util.timer.js ***!
  \*******************************************************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);




function Timer(elem, options, cb) {
  var _this = this,
      duration = options.duration,
      //options is an object for easily adding features later.
  nameSpace = Object.keys(elem.data())[0] || 'timer',
      remain = -1,
      start,
      timer;

  this.isPaused = false;

  this.restart = function () {
    remain = -1;
    clearTimeout(timer);
    this.start();
  };

  this.start = function () {
    this.isPaused = false; // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.

    clearTimeout(timer);
    remain = remain <= 0 ? duration : remain;
    elem.data('paused', false);
    start = Date.now();
    timer = setTimeout(function () {
      if (options.infinite) {
        _this.restart(); //rerun the timer.

      }

      if (cb && typeof cb === 'function') {
        cb();
      }
    }, remain);
    elem.trigger("timerstart.zf.".concat(nameSpace));
  };

  this.pause = function () {
    this.isPaused = true; //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.

    clearTimeout(timer);
    elem.data('paused', true);
    var end = Date.now();
    remain = remain - (end - start);
    elem.trigger("timerpaused.zf.".concat(nameSpace));
  };
}



/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.util.touch.js":
/*!*******************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.util.touch.js ***!
  \*******************************************************************/
/*! exports provided: Touch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************

var Touch = {};
var startPosX,
    startPosY,
    startTime,
    elapsedTime,
    startEvent,
    isMoving = false,
    didMoved = false;

function onTouchEnd(e) {
  this.removeEventListener('touchmove', onTouchMove);
  this.removeEventListener('touchend', onTouchEnd); // If the touch did not move, consider it as a "tap"

  if (!didMoved) {
    var tapEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('tap', startEvent || e);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(tapEvent);
  }

  startEvent = null;
  isMoving = false;
  didMoved = false;
}

function onTouchMove(e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.preventDefault) {
    e.preventDefault();
  }

  if (isMoving) {
    var x = e.touches[0].pageX;
    var y = e.touches[0].pageY;
    var dx = startPosX - x;
    var dy = startPosY - y;
    var dir;
    didMoved = true;
    elapsedTime = new Date().getTime() - startTime;

    if (Math.abs(dx) >= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.moveThreshold && elapsedTime <= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.timeThreshold) {
      dir = dx > 0 ? 'left' : 'right';
    } // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
    //   dir = dy > 0 ? 'down' : 'up';
    // }


    if (dir) {
      e.preventDefault();
      onTouchEnd.apply(this, arguments);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('swipe', Object.assign({}, e)), dir).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event("swipe".concat(dir), Object.assign({}, e)));
    }
  }
}

function onTouchStart(e) {
  if (e.touches.length == 1) {
    startPosX = e.touches[0].pageX;
    startPosY = e.touches[0].pageY;
    startEvent = e;
    isMoving = true;
    didMoved = false;
    startTime = new Date().getTime();
    this.addEventListener('touchmove', onTouchMove, false);
    this.addEventListener('touchend', onTouchEnd, false);
  }
}

function init() {
  this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
}

function teardown() {
  this.removeEventListener('touchstart', onTouchStart);
}

var SpotSwipe =
/*#__PURE__*/
function () {
  function SpotSwipe($) {
    _classCallCheck(this, SpotSwipe);

    this.version = '1.0.0';
    this.enabled = 'ontouchstart' in document.documentElement;
    this.preventDefault = false;
    this.moveThreshold = 75;
    this.timeThreshold = 200;
    this.$ = $;

    this._init();
  }

  _createClass(SpotSwipe, [{
    key: "_init",
    value: function _init() {
      var $ = this.$;
      $.event.special.swipe = {
        setup: init
      };
      $.event.special.tap = {
        setup: init
      };
      $.each(['left', 'up', 'down', 'right'], function () {
        $.event.special["swipe".concat(this)] = {
          setup: function setup() {
            $(this).on('swipe', $.noop);
          }
        };
      });
    }
  }]);

  return SpotSwipe;
}();
/****************************************************
 * As far as I can tell, both setupSpotSwipe and    *
 * setupTouchHandler should be idempotent,          *
 * because they directly replace functions &        *
 * values, and do not add event handlers directly.  *
 ****************************************************/


Touch.setupSpotSwipe = function ($) {
  $.spotSwipe = new SpotSwipe($);
};
/****************************************************
 * Method for adding pseudo drag events to elements *
 ***************************************************/


Touch.setupTouchHandler = function ($) {
  $.fn.addTouch = function () {
    this.each(function (i, el) {
      $(el).bind('touchstart touchmove touchend touchcancel', function (event) {
        //we pass the original event object because the jQuery event
        //object is normalized to w3c specs and does not provide the TouchList
        handleTouch(event);
      });
    });

    var handleTouch = function handleTouch(event) {
      var touches = event.changedTouches,
          first = touches[0],
          eventTypes = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup'
      },
          type = eventTypes[event.type],
          simulatedEvent;

      if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {
        simulatedEvent = new window.MouseEvent(type, {
          'bubbles': true,
          'cancelable': true,
          'screenX': first.screenX,
          'screenY': first.screenY,
          'clientX': first.clientX,
          'clientY': first.clientY
        });
      } else {
        simulatedEvent = document.createEvent('MouseEvent');
        simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0
        /*left*/
        , null);
      }

      first.target.dispatchEvent(simulatedEvent);
    };
  };
};

Touch.init = function ($) {
  if (typeof $.spotSwipe === 'undefined') {
    Touch.setupSpotSwipe($);
    Touch.setupTouchHandler($);
  }
};



/***/ }),

/***/ "./node_modules/foundation-sites/js/foundation.util.triggers.js":
/*!**********************************************************************!*\
  !*** ./node_modules/foundation-sites/js/foundation.util.triggers.js ***!
  \**********************************************************************/
/*! exports provided: Triggers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Triggers", function() { return Triggers; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./node_modules/foundation-sites/js/foundation.util.motion.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var MutationObserver = function () {
  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];

  for (var i = 0; i < prefixes.length; i++) {
    if ("".concat(prefixes[i], "MutationObserver") in window) {
      return window["".concat(prefixes[i], "MutationObserver")];
    }
  }

  return false;
}();

var triggers = function triggers(el, type) {
  el.data(type).split(' ').forEach(function (id) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id))[type === 'close' ? 'trigger' : 'triggerHandler']("".concat(type, ".zf.trigger"), [el]);
  });
};

var Triggers = {
  Listeners: {
    Basic: {},
    Global: {}
  },
  Initializers: {}
};
Triggers.Listeners.Basic = {
  openListener: function openListener() {
    triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'open');
  },
  closeListener: function closeListener() {
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('close');

    if (id) {
      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'close');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('close.zf.trigger');
    }
  },
  toggleListener: function toggleListener() {
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');

    if (id) {
      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('toggle.zf.trigger');
    }
  },
  closeableListener: function closeableListener(e) {
    var animation = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('closable'); // Only close the first closable element. See https://git.io/zf-7833

    e.stopPropagation();

    if (animation !== '') {
      _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateOut(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), animation, function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('closed.zf');
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fadeOut().trigger('closed.zf');
    }
  },
  toggleFocusListener: function toggleFocusListener() {
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle-focus');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id)).triggerHandler('toggle.zf.trigger', [jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)]);
  }
}; // Elements with [data-open] will reveal a plugin that supports it when clicked.

Triggers.Initializers.addOpenListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);
  $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);
}; // Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.


Triggers.Initializers.addCloseListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);
  $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);
}; // Elements with [data-toggle] will toggle a plugin that supports it when clicked.


Triggers.Initializers.addToggleListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);
  $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);
}; // Elements with [data-closable] will respond to close.zf.trigger events.


Triggers.Initializers.addCloseableListener = function ($elem) {
  $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);
  $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);
}; // Elements with [data-toggle-focus] will respond to coming in and out of focus


Triggers.Initializers.addToggleFocusListener = function ($elem) {
  $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);
  $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);
}; // More Global/complex listeners and triggers


Triggers.Listeners.Global = {
  resizeListener: function resizeListener($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('resizeme.zf.trigger');
      });
    } //trigger all listening elements and signal a resize event


    $nodes.attr('data-events', "resize");
  },
  scrollListener: function scrollListener($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('scrollme.zf.trigger');
      });
    } //trigger all listening elements and signal a scroll event


    $nodes.attr('data-events', "scroll");
  },
  closeMeListener: function closeMeListener(e, pluginId) {
    var plugin = e.namespace.split('.')[0];
    var plugins = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-".concat(plugin, "]")).not("[data-yeti-box=\"".concat(pluginId, "\"]"));
    plugins.each(function () {
      var _this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

      _this.triggerHandler('close.zf.trigger', [_this]);
    });
  }
}; // Global, parses whole document.

Triggers.Initializers.addClosemeListener = function (pluginName) {
  var yetiBoxes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-yeti-box]'),
      plugNames = ['dropdown', 'tooltip', 'reveal'];

  if (pluginName) {
    if (typeof pluginName === 'string') {
      plugNames.push(pluginName);
    } else if (_typeof(pluginName) === 'object' && typeof pluginName[0] === 'string') {
      plugNames = plugNames.concat(pluginName);
    } else {
      console.error('Plugin names must be strings');
    }
  }

  if (yetiBoxes.length) {
    var listeners = plugNames.map(function (name) {
      return "closeme.zf.".concat(name);
    }).join(' ');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
  }
};

function debounceGlobalListener(debounce, trigger, listener) {
  var timer,
      args = Array.prototype.slice.call(arguments, 3);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(trigger).on(trigger, function (e) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      listener.apply(null, args);
    }, debounce || 10); //default time to emit scroll event
  });
}

Triggers.Initializers.addResizeListener = function (debounce) {
  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-resize]');

  if ($nodes.length) {
    debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);
  }
};

Triggers.Initializers.addScrollListener = function (debounce) {
  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll]');

  if ($nodes.length) {
    debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);
  }
};

Triggers.Initializers.addMutationEventsListener = function ($elem) {
  if (!MutationObserver) {
    return false;
  }

  var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]'); //element callback

  var listeningElementsMutation = function listeningElementsMutation(mutationRecordsList) {
    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(mutationRecordsList[0].target); //trigger the event handler for the element depending on type

    switch (mutationRecordsList[0].type) {
      case "attributes":
        if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
        }

        if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('resizeme.zf.trigger', [$target]);
        }

        if (mutationRecordsList[0].attributeName === "style") {
          $target.closest("[data-mutate]").attr("data-events", "mutate");
          $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
        }

        break;

      case "childList":
        $target.closest("[data-mutate]").attr("data-events", "mutate");
        $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
        break;

      default:
        return false;
      //nothing
    }
  };

  if ($nodes.length) {
    //for each element that needs to listen for resizing, scrolling, or mutation add a single observer
    for (var i = 0; i <= $nodes.length - 1; i++) {
      var elementObserver = new MutationObserver(listeningElementsMutation);
      elementObserver.observe($nodes[i], {
        attributes: true,
        childList: true,
        characterData: false,
        subtree: true,
        attributeFilter: ["data-events", "style"]
      });
    }
  }
};

Triggers.Initializers.addSimpleListeners = function () {
  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
  Triggers.Initializers.addOpenListener($document);
  Triggers.Initializers.addCloseListener($document);
  Triggers.Initializers.addToggleListener($document);
  Triggers.Initializers.addCloseableListener($document);
  Triggers.Initializers.addToggleFocusListener($document);
};

Triggers.Initializers.addGlobalListeners = function () {
  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
  Triggers.Initializers.addMutationEventsListener($document);
  Triggers.Initializers.addResizeListener();
  Triggers.Initializers.addScrollListener();
  Triggers.Initializers.addClosemeListener();
};

Triggers.init = function ($, Foundation) {
  Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])($(window), function () {
    if ($.triggersInitialized !== true) {
      Triggers.Initializers.addSimpleListeners();
      Triggers.Initializers.addGlobalListeners();
      $.triggersInitialized = true;
    }
  });

  if (Foundation) {
    Foundation.Triggers = Triggers; // Legacy included to be backwards compatible for now.

    Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;
  }
};



/***/ }),

/***/ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js":
/*!*******************************************************************!*\
  !*** ./node_modules/magnific-popup/dist/jquery.magnific-popup.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module. 
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  /*>>core*/

  /**
   * 
   * Magnific Popup Core JS file
   * 
   */

  /**
   * Private static constants
   */
  var CLOSE_EVENT = 'Close',
      BEFORE_CLOSE_EVENT = 'BeforeClose',
      AFTER_CLOSE_EVENT = 'AfterClose',
      BEFORE_APPEND_EVENT = 'BeforeAppend',
      MARKUP_PARSE_EVENT = 'MarkupParse',
      OPEN_EVENT = 'Open',
      CHANGE_EVENT = 'Change',
      NS = 'mfp',
      EVENT_NS = '.' + NS,
      READY_CLASS = 'mfp-ready',
      REMOVING_CLASS = 'mfp-removing',
      PREVENT_CLOSE_CLASS = 'mfp-prevent-close';
  /**
   * Private vars 
   */

  /*jshint -W079 */

  var mfp,
      // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
  MagnificPopup = function MagnificPopup() {},
      _isJQ = !!__webpack_provided_window_dot_jQuery,
      _prevStatus,
      _window = $(window),
      _document,
      _prevContentType,
      _wrapClasses,
      _currPopupType;
  /**
   * Private functions
   */


  var _mfpOn = function _mfpOn(name, f) {
    mfp.ev.on(NS + name + EVENT_NS, f);
  },
      _getEl = function _getEl(className, appendTo, html, raw) {
    var el = document.createElement('div');
    el.className = 'mfp-' + className;

    if (html) {
      el.innerHTML = html;
    }

    if (!raw) {
      el = $(el);

      if (appendTo) {
        el.appendTo(appendTo);
      }
    } else if (appendTo) {
      appendTo.appendChild(el);
    }

    return el;
  },
      _mfpTrigger = function _mfpTrigger(e, data) {
    mfp.ev.triggerHandler(NS + e, data);

    if (mfp.st.callbacks) {
      // converts "mfpEventName" to "eventName" callback and triggers it if it's present
      e = e.charAt(0).toLowerCase() + e.slice(1);

      if (mfp.st.callbacks[e]) {
        mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
      }
    }
  },
      _getCloseBtn = function _getCloseBtn(type) {
    if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
      mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
      _currPopupType = type;
    }

    return mfp.currTemplate.closeBtn;
  },
      // Initialize Magnific Popup only when called at least once
  _checkInstance = function _checkInstance() {
    if (!$.magnificPopup.instance) {
      /*jshint -W020 */
      mfp = new MagnificPopup();
      mfp.init();
      $.magnificPopup.instance = mfp;
    }
  },
      // CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
  supportsTransitions = function supportsTransitions() {
    var s = document.createElement('p').style,
        // 's' for style. better to create an element if body yet to exist
    v = ['ms', 'O', 'Moz', 'Webkit']; // 'v' for vendor

    if (s['transition'] !== undefined) {
      return true;
    }

    while (v.length) {
      if (v.pop() + 'Transition' in s) {
        return true;
      }
    }

    return false;
  };
  /**
   * Public functions
   */


  MagnificPopup.prototype = {
    constructor: MagnificPopup,

    /**
     * Initializes Magnific Popup plugin. 
     * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
     */
    init: function init() {
      var appVersion = navigator.appVersion;
      mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
      mfp.isAndroid = /android/gi.test(appVersion);
      mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion);
      mfp.supportsTransition = supportsTransitions(); // We disable fixed positioned lightbox on devices that don't handle it nicely.
      // If you know a better way of detecting this - let me know.

      mfp.probablyMobile = mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
      _document = $(document);
      mfp.popupsCache = {};
    },

    /**
     * Opens popup
     * @param  data [description]
     */
    open: function open(data) {
      var i;

      if (data.isObj === false) {
        // convert jQuery collection to array to avoid conflicts later
        mfp.items = data.items.toArray();
        mfp.index = 0;
        var items = data.items,
            item;

        for (i = 0; i < items.length; i++) {
          item = items[i];

          if (item.parsed) {
            item = item.el[0];
          }

          if (item === data.el[0]) {
            mfp.index = i;
            break;
          }
        }
      } else {
        mfp.items = $.isArray(data.items) ? data.items : [data.items];
        mfp.index = data.index || 0;
      } // if popup is already opened - we just update the content


      if (mfp.isOpen) {
        mfp.updateItemHTML();
        return;
      }

      mfp.types = [];
      _wrapClasses = '';

      if (data.mainEl && data.mainEl.length) {
        mfp.ev = data.mainEl.eq(0);
      } else {
        mfp.ev = _document;
      }

      if (data.key) {
        if (!mfp.popupsCache[data.key]) {
          mfp.popupsCache[data.key] = {};
        }

        mfp.currTemplate = mfp.popupsCache[data.key];
      } else {
        mfp.currTemplate = {};
      }

      mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
      mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

      if (mfp.st.modal) {
        mfp.st.closeOnContentClick = false;
        mfp.st.closeOnBgClick = false;
        mfp.st.showCloseBtn = false;
        mfp.st.enableEscapeKey = false;
      } // Building markup
      // main containers are created only once


      if (!mfp.bgOverlay) {
        // Dark overlay
        mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function () {
          mfp.close();
        });
        mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function (e) {
          if (mfp._checkIfClose(e.target)) {
            mfp.close();
          }
        });
        mfp.container = _getEl('container', mfp.wrap);
      }

      mfp.contentContainer = _getEl('content');

      if (mfp.st.preloader) {
        mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
      } // Initializing modules


      var modules = $.magnificPopup.modules;

      for (i = 0; i < modules.length; i++) {
        var n = modules[i];
        n = n.charAt(0).toUpperCase() + n.slice(1);
        mfp['init' + n].call(mfp);
      }

      _mfpTrigger('BeforeOpen');

      if (mfp.st.showCloseBtn) {
        // Close button
        if (!mfp.st.closeBtnInside) {
          mfp.wrap.append(_getCloseBtn());
        } else {
          _mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item) {
            values.close_replaceWith = _getCloseBtn(item.type);
          });

          _wrapClasses += ' mfp-close-btn-in';
        }
      }

      if (mfp.st.alignTop) {
        _wrapClasses += ' mfp-align-top';
      }

      if (mfp.fixedContentPos) {
        mfp.wrap.css({
          overflow: mfp.st.overflowY,
          overflowX: 'hidden',
          overflowY: mfp.st.overflowY
        });
      } else {
        mfp.wrap.css({
          top: _window.scrollTop(),
          position: 'absolute'
        });
      }

      if (mfp.st.fixedBgPos === false || mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) {
        mfp.bgOverlay.css({
          height: _document.height(),
          position: 'absolute'
        });
      }

      if (mfp.st.enableEscapeKey) {
        // Close on ESC key
        _document.on('keyup' + EVENT_NS, function (e) {
          if (e.keyCode === 27) {
            mfp.close();
          }
        });
      }

      _window.on('resize' + EVENT_NS, function () {
        mfp.updateSize();
      });

      if (!mfp.st.closeOnContentClick) {
        _wrapClasses += ' mfp-auto-cursor';
      }

      if (_wrapClasses) mfp.wrap.addClass(_wrapClasses); // this triggers recalculation of layout, so we get it once to not to trigger twice

      var windowHeight = mfp.wH = _window.height();

      var windowStyles = {};

      if (mfp.fixedContentPos) {
        if (mfp._hasScrollBar(windowHeight)) {
          var s = mfp._getScrollbarSize();

          if (s) {
            windowStyles.marginRight = s;
          }
        }
      }

      if (mfp.fixedContentPos) {
        if (!mfp.isIE7) {
          windowStyles.overflow = 'hidden';
        } else {
          // ie7 double-scroll bug
          $('body, html').css('overflow', 'hidden');
        }
      }

      var classesToadd = mfp.st.mainClass;

      if (mfp.isIE7) {
        classesToadd += ' mfp-ie7';
      }

      if (classesToadd) {
        mfp._addClassToMFP(classesToadd);
      } // add content


      mfp.updateItemHTML();

      _mfpTrigger('BuildControls'); // remove scrollbar, add margin e.t.c


      $('html').css(windowStyles); // add everything to DOM

      mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body)); // Save last focused element

      mfp._lastFocusedEl = document.activeElement; // Wait for next cycle to allow CSS transition

      setTimeout(function () {
        if (mfp.content) {
          mfp._addClassToMFP(READY_CLASS);

          mfp._setFocus();
        } else {
          // if content is not defined (not loaded e.t.c) we add class only for BG
          mfp.bgOverlay.addClass(READY_CLASS);
        } // Trap the focus in popup


        _document.on('focusin' + EVENT_NS, mfp._onFocusIn);
      }, 16);
      mfp.isOpen = true;
      mfp.updateSize(windowHeight);

      _mfpTrigger(OPEN_EVENT);

      return data;
    },

    /**
     * Closes the popup
     */
    close: function close() {
      if (!mfp.isOpen) return;

      _mfpTrigger(BEFORE_CLOSE_EVENT);

      mfp.isOpen = false; // for CSS3 animation

      if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
        mfp._addClassToMFP(REMOVING_CLASS);

        setTimeout(function () {
          mfp._close();
        }, mfp.st.removalDelay);
      } else {
        mfp._close();
      }
    },

    /**
     * Helper for close() function
     */
    _close: function _close() {
      _mfpTrigger(CLOSE_EVENT);

      var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
      mfp.bgOverlay.detach();
      mfp.wrap.detach();
      mfp.container.empty();

      if (mfp.st.mainClass) {
        classesToRemove += mfp.st.mainClass + ' ';
      }

      mfp._removeClassFromMFP(classesToRemove);

      if (mfp.fixedContentPos) {
        var windowStyles = {
          marginRight: ''
        };

        if (mfp.isIE7) {
          $('body, html').css('overflow', '');
        } else {
          windowStyles.overflow = '';
        }

        $('html').css(windowStyles);
      }

      _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);

      mfp.ev.off(EVENT_NS); // clean up DOM elements that aren't removed

      mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
      mfp.bgOverlay.attr('class', 'mfp-bg');
      mfp.container.attr('class', 'mfp-container'); // remove close button from target element

      if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
        if (mfp.currTemplate.closeBtn) mfp.currTemplate.closeBtn.detach();
      }

      if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
        $(mfp._lastFocusedEl).focus(); // put tab focus back
      }

      mfp.currItem = null;
      mfp.content = null;
      mfp.currTemplate = null;
      mfp.prevHeight = 0;

      _mfpTrigger(AFTER_CLOSE_EVENT);
    },
    updateSize: function updateSize(winHeight) {
      if (mfp.isIOS) {
        // fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
        var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
        var height = window.innerHeight * zoomLevel;
        mfp.wrap.css('height', height);
        mfp.wH = height;
      } else {
        mfp.wH = winHeight || _window.height();
      } // Fixes #84: popup incorrectly positioned with position:relative on body


      if (!mfp.fixedContentPos) {
        mfp.wrap.css('height', mfp.wH);
      }

      _mfpTrigger('Resize');
    },

    /**
     * Set content of popup based on current index
     */
    updateItemHTML: function updateItemHTML() {
      var item = mfp.items[mfp.index]; // Detach and perform modifications

      mfp.contentContainer.detach();
      if (mfp.content) mfp.content.detach();

      if (!item.parsed) {
        item = mfp.parseEl(mfp.index);
      }

      var type = item.type;

      _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]); // BeforeChange event works like so:
      // _mfpOn('BeforeChange', function(e, prevType, newType) { });


      mfp.currItem = item;

      if (!mfp.currTemplate[type]) {
        var markup = mfp.st[type] ? mfp.st[type].markup : false; // allows to modify markup

        _mfpTrigger('FirstMarkupParse', markup);

        if (markup) {
          mfp.currTemplate[type] = $(markup);
        } else {
          // if there is no markup found we just define that template is parsed
          mfp.currTemplate[type] = true;
        }
      }

      if (_prevContentType && _prevContentType !== item.type) {
        mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
      }

      var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
      mfp.appendContent(newContent, type);
      item.preloaded = true;

      _mfpTrigger(CHANGE_EVENT, item);

      _prevContentType = item.type; // Append container back after its content changed

      mfp.container.prepend(mfp.contentContainer);

      _mfpTrigger('AfterChange');
    },

    /**
     * Set HTML content of popup
     */
    appendContent: function appendContent(newContent, type) {
      mfp.content = newContent;

      if (newContent) {
        if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
          // if there is no markup, we just append close button element inside
          if (!mfp.content.find('.mfp-close').length) {
            mfp.content.append(_getCloseBtn());
          }
        } else {
          mfp.content = newContent;
        }
      } else {
        mfp.content = '';
      }

      _mfpTrigger(BEFORE_APPEND_EVENT);

      mfp.container.addClass('mfp-' + type + '-holder');
      mfp.contentContainer.append(mfp.content);
    },

    /**
     * Creates Magnific Popup data object based on given data
     * @param  {int} index Index of item to parse
     */
    parseEl: function parseEl(index) {
      var item = mfp.items[index],
          type;

      if (item.tagName) {
        item = {
          el: $(item)
        };
      } else {
        type = item.type;
        item = {
          data: item,
          src: item.src
        };
      }

      if (item.el) {
        var types = mfp.types; // check for 'mfp-TYPE' class

        for (var i = 0; i < types.length; i++) {
          if (item.el.hasClass('mfp-' + types[i])) {
            type = types[i];
            break;
          }
        }

        item.src = item.el.attr('data-mfp-src');

        if (!item.src) {
          item.src = item.el.attr('href');
        }
      }

      item.type = type || mfp.st.type || 'inline';
      item.index = index;
      item.parsed = true;
      mfp.items[index] = item;

      _mfpTrigger('ElementParse', item);

      return mfp.items[index];
    },

    /**
     * Initializes single popup or a group of popups
     */
    addGroup: function addGroup(el, options) {
      var eHandler = function eHandler(e) {
        e.mfpEl = this;

        mfp._openClick(e, el, options);
      };

      if (!options) {
        options = {};
      }

      var eName = 'click.magnificPopup';
      options.mainEl = el;

      if (options.items) {
        options.isObj = true;
        el.off(eName).on(eName, eHandler);
      } else {
        options.isObj = false;

        if (options.delegate) {
          el.off(eName).on(eName, options.delegate, eHandler);
        } else {
          options.items = el;
          el.off(eName).on(eName, eHandler);
        }
      }
    },
    _openClick: function _openClick(e, el, options) {
      var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;

      if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
        return;
      }

      var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

      if (disableOn) {
        if ($.isFunction(disableOn)) {
          if (!disableOn.call(mfp)) {
            return true;
          }
        } else {
          // else it's number
          if (_window.width() < disableOn) {
            return true;
          }
        }
      }

      if (e.type) {
        e.preventDefault(); // This will prevent popup from closing if element is inside and popup is already opened

        if (mfp.isOpen) {
          e.stopPropagation();
        }
      }

      options.el = $(e.mfpEl);

      if (options.delegate) {
        options.items = el.find(options.delegate);
      }

      mfp.open(options);
    },

    /**
     * Updates text on preloader
     */
    updateStatus: function updateStatus(status, text) {
      if (mfp.preloader) {
        if (_prevStatus !== status) {
          mfp.container.removeClass('mfp-s-' + _prevStatus);
        }

        if (!text && status === 'loading') {
          text = mfp.st.tLoading;
        }

        var data = {
          status: status,
          text: text
        }; // allows to modify status

        _mfpTrigger('UpdateStatus', data);

        status = data.status;
        text = data.text;
        mfp.preloader.html(text);
        mfp.preloader.find('a').on('click', function (e) {
          e.stopImmediatePropagation();
        });
        mfp.container.addClass('mfp-s-' + status);
        _prevStatus = status;
      }
    },

    /*
    	"Private" helpers that aren't private at all
     */
    // Check to close popup or not
    // "target" is an element that was clicked
    _checkIfClose: function _checkIfClose(target) {
      if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
        return;
      }

      var closeOnContent = mfp.st.closeOnContentClick;
      var closeOnBg = mfp.st.closeOnBgClick;

      if (closeOnContent && closeOnBg) {
        return true;
      } else {
        // We close the popup if click is on close button or on preloader. Or if there is no content.
        if (!mfp.content || $(target).hasClass('mfp-close') || mfp.preloader && target === mfp.preloader[0]) {
          return true;
        } // if click is outside the content


        if (target !== mfp.content[0] && !$.contains(mfp.content[0], target)) {
          if (closeOnBg) {
            // last check, if the clicked element is in DOM, (in case it's removed onclick)
            if ($.contains(document, target)) {
              return true;
            }
          }
        } else if (closeOnContent) {
          return true;
        }
      }

      return false;
    },
    _addClassToMFP: function _addClassToMFP(cName) {
      mfp.bgOverlay.addClass(cName);
      mfp.wrap.addClass(cName);
    },
    _removeClassFromMFP: function _removeClassFromMFP(cName) {
      this.bgOverlay.removeClass(cName);
      mfp.wrap.removeClass(cName);
    },
    _hasScrollBar: function _hasScrollBar(winHeight) {
      return (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height());
    },
    _setFocus: function _setFocus() {
      (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
    },
    _onFocusIn: function _onFocusIn(e) {
      if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
        mfp._setFocus();

        return false;
      }
    },
    _parseMarkup: function _parseMarkup(template, values, item) {
      var arr;

      if (item.data) {
        values = $.extend(item.data, values);
      }

      _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);

      $.each(values, function (key, value) {
        if (value === undefined || value === false) {
          return true;
        }

        arr = key.split('_');

        if (arr.length > 1) {
          var el = template.find(EVENT_NS + '-' + arr[0]);

          if (el.length > 0) {
            var attr = arr[1];

            if (attr === 'replaceWith') {
              if (el[0] !== value[0]) {
                el.replaceWith(value);
              }
            } else if (attr === 'img') {
              if (el.is('img')) {
                el.attr('src', value);
              } else {
                el.replaceWith($('<img>').attr('src', value).attr('class', el.attr('class')));
              }
            } else {
              el.attr(arr[1], value);
            }
          }
        } else {
          template.find(EVENT_NS + '-' + key).html(value);
        }
      });
    },
    _getScrollbarSize: function _getScrollbarSize() {
      // thx David
      if (mfp.scrollbarSize === undefined) {
        var scrollDiv = document.createElement("div");
        scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
        document.body.appendChild(scrollDiv);
        mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
      }

      return mfp.scrollbarSize;
    }
  };
  /* MagnificPopup core prototype end */

  /**
   * Public static functions
   */

  $.magnificPopup = {
    instance: null,
    proto: MagnificPopup.prototype,
    modules: [],
    open: function open(options, index) {
      _checkInstance();

      if (!options) {
        options = {};
      } else {
        options = $.extend(true, {}, options);
      }

      options.isObj = true;
      options.index = index || 0;
      return this.instance.open(options);
    },
    close: function close() {
      return $.magnificPopup.instance && $.magnificPopup.instance.close();
    },
    registerModule: function registerModule(name, module) {
      if (module.options) {
        $.magnificPopup.defaults[name] = module.options;
      }

      $.extend(this.proto, module.proto);
      this.modules.push(name);
    },
    defaults: {
      // Info about options is in docs:
      // http://dimsemenov.com/plugins/magnific-popup/documentation.html#options
      disableOn: 0,
      key: null,
      midClick: false,
      mainClass: '',
      preloader: true,
      focus: '',
      // CSS selector of input to focus after popup is opened
      closeOnContentClick: false,
      closeOnBgClick: true,
      closeBtnInside: true,
      showCloseBtn: true,
      enableEscapeKey: true,
      modal: false,
      alignTop: false,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: 'auto',
      fixedBgPos: 'auto',
      overflowY: 'auto',
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: 'Close (Esc)',
      tLoading: 'Loading...',
      autoFocusLast: true
    }
  };

  $.fn.magnificPopup = function (options) {
    _checkInstance();

    var jqEl = $(this); // We call some API method of first param is a string

    if (typeof options === "string") {
      if (options === 'open') {
        var items,
            itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
            index = parseInt(arguments[1], 10) || 0;

        if (itemOpts.items) {
          items = itemOpts.items[index];
        } else {
          items = jqEl;

          if (itemOpts.delegate) {
            items = items.find(itemOpts.delegate);
          }

          items = items.eq(index);
        }

        mfp._openClick({
          mfpEl: items
        }, jqEl, itemOpts);
      } else {
        if (mfp.isOpen) mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
      }
    } else {
      // clone options obj
      options = $.extend(true, {}, options);
      /*
       * As Zepto doesn't support .data() method for objects
       * and it works only in normal browsers
       * we assign "options" object directly to the DOM element. FTW!
       */

      if (_isJQ) {
        jqEl.data('magnificPopup', options);
      } else {
        jqEl[0].magnificPopup = options;
      }

      mfp.addGroup(jqEl, options);
    }

    return jqEl;
  };
  /*>>core*/

  /*>>inline*/


  var INLINE_NS = 'inline',
      _hiddenClass,
      _inlinePlaceholder,
      _lastInlineElement,
      _putInlineElementsBack = function _putInlineElementsBack() {
    if (_lastInlineElement) {
      _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();

      _lastInlineElement = null;
    }
  };

  $.magnificPopup.registerModule(INLINE_NS, {
    options: {
      hiddenClass: 'hide',
      // will be appended with `mfp-` prefix
      markup: '',
      tNotFound: 'Content not found'
    },
    proto: {
      initInline: function initInline() {
        mfp.types.push(INLINE_NS);

        _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function () {
          _putInlineElementsBack();
        });
      },
      getInline: function getInline(item, template) {
        _putInlineElementsBack();

        if (item.src) {
          var inlineSt = mfp.st.inline,
              el = $(item.src);

          if (el.length) {
            // If target element has parent - we replace it with placeholder and put it back after popup is closed
            var parent = el[0].parentNode;

            if (parent && parent.tagName) {
              if (!_inlinePlaceholder) {
                _hiddenClass = inlineSt.hiddenClass;
                _inlinePlaceholder = _getEl(_hiddenClass);
                _hiddenClass = 'mfp-' + _hiddenClass;
              } // replace target inline element with placeholder


              _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
            }

            mfp.updateStatus('ready');
          } else {
            mfp.updateStatus('error', inlineSt.tNotFound);
            el = $('<div>');
          }

          item.inlineElement = el;
          return el;
        }

        mfp.updateStatus('ready');

        mfp._parseMarkup(template, {}, item);

        return template;
      }
    }
  });
  /*>>inline*/

  /*>>ajax*/

  var AJAX_NS = 'ajax',
      _ajaxCur,
      _removeAjaxCursor = function _removeAjaxCursor() {
    if (_ajaxCur) {
      $(document.body).removeClass(_ajaxCur);
    }
  },
      _destroyAjaxRequest = function _destroyAjaxRequest() {
    _removeAjaxCursor();

    if (mfp.req) {
      mfp.req.abort();
    }
  };

  $.magnificPopup.registerModule(AJAX_NS, {
    options: {
      settings: null,
      cursor: 'mfp-ajax-cur',
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function initAjax() {
        mfp.types.push(AJAX_NS);
        _ajaxCur = mfp.st.ajax.cursor;

        _mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);

        _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
      },
      getAjax: function getAjax(item) {
        if (_ajaxCur) {
          $(document.body).addClass(_ajaxCur);
        }

        mfp.updateStatus('loading');
        var opts = $.extend({
          url: item.src,
          success: function success(data, textStatus, jqXHR) {
            var temp = {
              data: data,
              xhr: jqXHR
            };

            _mfpTrigger('ParseAjax', temp);

            mfp.appendContent($(temp.data), AJAX_NS);
            item.finished = true;

            _removeAjaxCursor();

            mfp._setFocus();

            setTimeout(function () {
              mfp.wrap.addClass(READY_CLASS);
            }, 16);
            mfp.updateStatus('ready');

            _mfpTrigger('AjaxContentAdded');
          },
          error: function error() {
            _removeAjaxCursor();

            item.finished = item.loadError = true;
            mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
          }
        }, mfp.st.ajax.settings);
        mfp.req = $.ajax(opts);
        return '';
      }
    }
  });
  /*>>ajax*/

  /*>>image*/

  var _imgInterval,
      _getTitle = function _getTitle(item) {
    if (item.data && item.data.title !== undefined) return item.data.title;
    var src = mfp.st.image.titleSrc;

    if (src) {
      if ($.isFunction(src)) {
        return src.call(mfp, item);
      } else if (item.el) {
        return item.el.attr(src) || '';
      }
    }

    return '';
  };

  $.magnificPopup.registerModule('image', {
    options: {
      markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<figure>' + '<div class="mfp-img"></div>' + '<figcaption>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</figcaption>' + '</figure>' + '</div>',
      cursor: 'mfp-zoom-out-cur',
      titleSrc: 'title',
      verticalFit: true,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function initImage() {
        var imgSt = mfp.st.image,
            ns = '.image';
        mfp.types.push('image');

        _mfpOn(OPEN_EVENT + ns, function () {
          if (mfp.currItem.type === 'image' && imgSt.cursor) {
            $(document.body).addClass(imgSt.cursor);
          }
        });

        _mfpOn(CLOSE_EVENT + ns, function () {
          if (imgSt.cursor) {
            $(document.body).removeClass(imgSt.cursor);
          }

          _window.off('resize' + EVENT_NS);
        });

        _mfpOn('Resize' + ns, mfp.resizeImage);

        if (mfp.isLowIE) {
          _mfpOn('AfterChange', mfp.resizeImage);
        }
      },
      resizeImage: function resizeImage() {
        var item = mfp.currItem;
        if (!item || !item.img) return;

        if (mfp.st.image.verticalFit) {
          var decr = 0; // fix box-sizing in ie7/8

          if (mfp.isLowIE) {
            decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
          }

          item.img.css('max-height', mfp.wH - decr);
        }
      },
      _onImageHasSize: function _onImageHasSize(item) {
        if (item.img) {
          item.hasSize = true;

          if (_imgInterval) {
            clearInterval(_imgInterval);
          }

          item.isCheckingImgSize = false;

          _mfpTrigger('ImageHasSize', item);

          if (item.imgHidden) {
            if (mfp.content) mfp.content.removeClass('mfp-loading');
            item.imgHidden = false;
          }
        }
      },

      /**
       * Function that loops until the image has size to display elements that rely on it asap
       */
      findImageSize: function findImageSize(item) {
        var counter = 0,
            img = item.img[0],
            mfpSetInterval = function mfpSetInterval(delay) {
          if (_imgInterval) {
            clearInterval(_imgInterval);
          } // decelerating interval that checks for size of an image


          _imgInterval = setInterval(function () {
            if (img.naturalWidth > 0) {
              mfp._onImageHasSize(item);

              return;
            }

            if (counter > 200) {
              clearInterval(_imgInterval);
            }

            counter++;

            if (counter === 3) {
              mfpSetInterval(10);
            } else if (counter === 40) {
              mfpSetInterval(50);
            } else if (counter === 100) {
              mfpSetInterval(500);
            }
          }, delay);
        };

        mfpSetInterval(1);
      },
      getImage: function getImage(item, template) {
        var guard = 0,
            // image load complete handler
        onLoadComplete = function onLoadComplete() {
          if (item) {
            if (item.img[0].complete) {
              item.img.off('.mfploader');

              if (item === mfp.currItem) {
                mfp._onImageHasSize(item);

                mfp.updateStatus('ready');
              }

              item.hasSize = true;
              item.loaded = true;

              _mfpTrigger('ImageLoadComplete');
            } else {
              // if image complete check fails 200 times (20 sec), we assume that there was an error.
              guard++;

              if (guard < 200) {
                setTimeout(onLoadComplete, 100);
              } else {
                onLoadError();
              }
            }
          }
        },
            // image error handler
        onLoadError = function onLoadError() {
          if (item) {
            item.img.off('.mfploader');

            if (item === mfp.currItem) {
              mfp._onImageHasSize(item);

              mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
            }

            item.hasSize = true;
            item.loaded = true;
            item.loadError = true;
          }
        },
            imgSt = mfp.st.image;

        var el = template.find('.mfp-img');

        if (el.length) {
          var img = document.createElement('img');
          img.className = 'mfp-img';

          if (item.el && item.el.find('img').length) {
            img.alt = item.el.find('img').attr('alt');
          }

          item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
          img.src = item.src; // without clone() "error" event is not firing when IMG is replaced by new IMG
          // TODO: find a way to avoid such cloning

          if (el.is('img')) {
            item.img = item.img.clone();
          }

          img = item.img[0];

          if (img.naturalWidth > 0) {
            item.hasSize = true;
          } else if (!img.width) {
            item.hasSize = false;
          }
        }

        mfp._parseMarkup(template, {
          title: _getTitle(item),
          img_replaceWith: item.img
        }, item);

        mfp.resizeImage();

        if (item.hasSize) {
          if (_imgInterval) clearInterval(_imgInterval);

          if (item.loadError) {
            template.addClass('mfp-loading');
            mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
          } else {
            template.removeClass('mfp-loading');
            mfp.updateStatus('ready');
          }

          return template;
        }

        mfp.updateStatus('loading');
        item.loading = true;

        if (!item.hasSize) {
          item.imgHidden = true;
          template.addClass('mfp-loading');
          mfp.findImageSize(item);
        }

        return template;
      }
    }
  });
  /*>>image*/

  /*>>zoom*/

  var hasMozTransform,
      getHasMozTransform = function getHasMozTransform() {
    if (hasMozTransform === undefined) {
      hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
    }

    return hasMozTransform;
  };

  $.magnificPopup.registerModule('zoom', {
    options: {
      enabled: false,
      easing: 'ease-in-out',
      duration: 300,
      opener: function opener(element) {
        return element.is('img') ? element : element.find('img');
      }
    },
    proto: {
      initZoom: function initZoom() {
        var zoomSt = mfp.st.zoom,
            ns = '.zoom',
            image;

        if (!zoomSt.enabled || !mfp.supportsTransition) {
          return;
        }

        var duration = zoomSt.duration,
            getElToAnimate = function getElToAnimate(image) {
          var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
              transition = 'all ' + zoomSt.duration / 1000 + 's ' + zoomSt.easing,
              cssObj = {
            position: 'fixed',
            zIndex: 9999,
            left: 0,
            top: 0,
            '-webkit-backface-visibility': 'hidden'
          },
              t = 'transition';
          cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;
          newImg.css(cssObj);
          return newImg;
        },
            showMainContent = function showMainContent() {
          mfp.content.css('visibility', 'visible');
        },
            openTimeout,
            animatedImg;

        _mfpOn('BuildControls' + ns, function () {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);
            mfp.content.css('visibility', 'hidden'); // Basically, all code below does is clones existing image, puts in on top of the current one and animated it

            image = mfp._getItemToZoom();

            if (!image) {
              showMainContent();
              return;
            }

            animatedImg = getElToAnimate(image);
            animatedImg.css(mfp._getOffset());
            mfp.wrap.append(animatedImg);
            openTimeout = setTimeout(function () {
              animatedImg.css(mfp._getOffset(true));
              openTimeout = setTimeout(function () {
                showMainContent();
                setTimeout(function () {
                  animatedImg.remove();
                  image = animatedImg = null;

                  _mfpTrigger('ZoomAnimationEnded');
                }, 16); // avoid blink when switching images
              }, duration); // this timeout equals animation duration
            }, 16); // by adding this timeout we avoid short glitch at the beginning of animation
            // Lots of timeouts...
          }
        });

        _mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);
            mfp.st.removalDelay = duration;

            if (!image) {
              image = mfp._getItemToZoom();

              if (!image) {
                return;
              }

              animatedImg = getElToAnimate(image);
            }

            animatedImg.css(mfp._getOffset(true));
            mfp.wrap.append(animatedImg);
            mfp.content.css('visibility', 'hidden');
            setTimeout(function () {
              animatedImg.css(mfp._getOffset());
            }, 16);
          }
        });

        _mfpOn(CLOSE_EVENT + ns, function () {
          if (mfp._allowZoom()) {
            showMainContent();

            if (animatedImg) {
              animatedImg.remove();
            }

            image = null;
          }
        });
      },
      _allowZoom: function _allowZoom() {
        return mfp.currItem.type === 'image';
      },
      _getItemToZoom: function _getItemToZoom() {
        if (mfp.currItem.hasSize) {
          return mfp.currItem.img;
        } else {
          return false;
        }
      },
      // Get element postion relative to viewport
      _getOffset: function _getOffset(isLarge) {
        var el;

        if (isLarge) {
          el = mfp.currItem.img;
        } else {
          el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
        }

        var offset = el.offset();
        var paddingTop = parseInt(el.css('padding-top'), 10);
        var paddingBottom = parseInt(el.css('padding-bottom'), 10);
        offset.top -= $(window).scrollTop() - paddingTop;
        /*
        	Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.
        	 */

        var obj = {
          width: el.width(),
          // fix Zepto height+padding issue
          height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
        }; // I hate to do this, but there is no another option

        if (getHasMozTransform()) {
          obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
        } else {
          obj.left = offset.left;
          obj.top = offset.top;
        }

        return obj;
      }
    }
  });
  /*>>zoom*/

  /*>>iframe*/

  var IFRAME_NS = 'iframe',
      _emptyPage = '//about:blank',
      _fixIframeBugs = function _fixIframeBugs(isShowing) {
    if (mfp.currTemplate[IFRAME_NS]) {
      var el = mfp.currTemplate[IFRAME_NS].find('iframe');

      if (el.length) {
        // reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
        if (!isShowing) {
          el[0].src = _emptyPage;
        } // IE8 black screen bug fix


        if (mfp.isIE8) {
          el.css('display', isShowing ? 'block' : 'none');
        }
      }
    }
  };

  $.magnificPopup.registerModule(IFRAME_NS, {
    options: {
      markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + '</div>',
      srcAction: 'iframe_src',
      // we don't care and support only one default type of URL by default
      patterns: {
        youtube: {
          index: 'youtube.com',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed'
        }
      }
    },
    proto: {
      initIframe: function initIframe() {
        mfp.types.push(IFRAME_NS);

        _mfpOn('BeforeChange', function (e, prevType, newType) {
          if (prevType !== newType) {
            if (prevType === IFRAME_NS) {
              _fixIframeBugs(); // iframe if removed

            } else if (newType === IFRAME_NS) {
              _fixIframeBugs(true); // iframe is showing

            }
          } // else {
          // iframe source is switched, don't do anything
          //}

        });

        _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function () {
          _fixIframeBugs();
        });
      },
      getIframe: function getIframe(item, template) {
        var embedSrc = item.src;
        var iframeSt = mfp.st.iframe;
        $.each(iframeSt.patterns, function () {
          if (embedSrc.indexOf(this.index) > -1) {
            if (this.id) {
              if (typeof this.id === 'string') {
                embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
              } else {
                embedSrc = this.id.call(this, embedSrc);
              }
            }

            embedSrc = this.src.replace('%id%', embedSrc);
            return false; // break;
          }
        });
        var dataObj = {};

        if (iframeSt.srcAction) {
          dataObj[iframeSt.srcAction] = embedSrc;
        }

        mfp._parseMarkup(template, dataObj, item);

        mfp.updateStatus('ready');
        return template;
      }
    }
  });
  /*>>iframe*/

  /*>>gallery*/

  /**
   * Get looped index depending on number of slides
   */

  var _getLoopedId = function _getLoopedId(index) {
    var numSlides = mfp.items.length;

    if (index > numSlides - 1) {
      return index - numSlides;
    } else if (index < 0) {
      return numSlides + index;
    }

    return index;
  },
      _replaceCurrTotal = function _replaceCurrTotal(text, curr, total) {
    return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
  };

  $.magnificPopup.registerModule('gallery', {
    options: {
      enabled: false,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: true,
      arrows: true,
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '%curr% of %total%'
    },
    proto: {
      initGallery: function initGallery() {
        var gSt = mfp.st.gallery,
            ns = '.mfp-gallery';
        mfp.direction = true; // true - next, false - prev

        if (!gSt || !gSt.enabled) return false;
        _wrapClasses += ' mfp-gallery';

        _mfpOn(OPEN_EVENT + ns, function () {
          if (gSt.navigateByImgClick) {
            mfp.wrap.on('click' + ns, '.mfp-img', function () {
              if (mfp.items.length > 1) {
                mfp.next();
                return false;
              }
            });
          }

          _document.on('keydown' + ns, function (e) {
            if (e.keyCode === 37) {
              mfp.prev();
            } else if (e.keyCode === 39) {
              mfp.next();
            }
          });
        });

        _mfpOn('UpdateStatus' + ns, function (e, data) {
          if (data.text) {
            data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
          }
        });

        _mfpOn(MARKUP_PARSE_EVENT + ns, function (e, element, values, item) {
          var l = mfp.items.length;
          values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
        });

        _mfpOn('BuildControls' + ns, function () {
          if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
            var markup = gSt.arrowMarkup,
                arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
                arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);
            arrowLeft.click(function () {
              mfp.prev();
            });
            arrowRight.click(function () {
              mfp.next();
            });
            mfp.container.append(arrowLeft.add(arrowRight));
          }
        });

        _mfpOn(CHANGE_EVENT + ns, function () {
          if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
          mfp._preloadTimeout = setTimeout(function () {
            mfp.preloadNearbyImages();
            mfp._preloadTimeout = null;
          }, 16);
        });

        _mfpOn(CLOSE_EVENT + ns, function () {
          _document.off(ns);

          mfp.wrap.off('click' + ns);
          mfp.arrowRight = mfp.arrowLeft = null;
        });
      },
      next: function next() {
        mfp.direction = true;
        mfp.index = _getLoopedId(mfp.index + 1);
        mfp.updateItemHTML();
      },
      prev: function prev() {
        mfp.direction = false;
        mfp.index = _getLoopedId(mfp.index - 1);
        mfp.updateItemHTML();
      },
      goTo: function goTo(newIndex) {
        mfp.direction = newIndex >= mfp.index;
        mfp.index = newIndex;
        mfp.updateItemHTML();
      },
      preloadNearbyImages: function preloadNearbyImages() {
        var p = mfp.st.gallery.preload,
            preloadBefore = Math.min(p[0], mfp.items.length),
            preloadAfter = Math.min(p[1], mfp.items.length),
            i;

        for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
          mfp._preloadItem(mfp.index + i);
        }

        for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
          mfp._preloadItem(mfp.index - i);
        }
      },
      _preloadItem: function _preloadItem(index) {
        index = _getLoopedId(index);

        if (mfp.items[index].preloaded) {
          return;
        }

        var item = mfp.items[index];

        if (!item.parsed) {
          item = mfp.parseEl(index);
        }

        _mfpTrigger('LazyLoad', item);

        if (item.type === 'image') {
          item.img = $('<img class="mfp-img" />').on('load.mfploader', function () {
            item.hasSize = true;
          }).on('error.mfploader', function () {
            item.hasSize = true;
            item.loadError = true;

            _mfpTrigger('LazyLoadError', item);
          }).attr('src', item.src);
        }

        item.preloaded = true;
      }
    }
  });
  /*>>gallery*/

  /*>>retina*/

  var RETINA_NS = 'retina';
  $.magnificPopup.registerModule(RETINA_NS, {
    options: {
      replaceSrc: function replaceSrc(item) {
        return item.src.replace(/\.\w+$/, function (m) {
          return '@2x' + m;
        });
      },
      ratio: 1 // Function or number.  Set to 1 to disable.

    },
    proto: {
      initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var st = mfp.st.retina,
              ratio = st.ratio;
          ratio = !isNaN(ratio) ? ratio : ratio();

          if (ratio > 1) {
            _mfpOn('ImageHasSize' + '.' + RETINA_NS, function (e, item) {
              item.img.css({
                'max-width': item.img[0].naturalWidth / ratio,
                'width': '100%'
              });
            });

            _mfpOn('ElementParse' + '.' + RETINA_NS, function (e, item) {
              item.src = st.replaceSrc(item, ratio);
            });
          }
        }
      }
    }
  });
  /*>>retina*/

  _checkInstance();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */
;

(function (factory) {
  'use strict';

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var Slick = window.Slick || {};

  Slick = function () {
    var instanceUid = 0;

    function Slick(element, settings) {
      var _ = this,
          dataSettings;

      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function customPaging(slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;

      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++; // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source

      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

      _.registerBreakpoints();

      _.init(true);
    }

    return Slick;
  }();

  Slick.prototype.activateADA = function () {
    var _ = this;

    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;

    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }

    _.unload();

    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.animateHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
        _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }

    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }

        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);

            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' + now + 'px, 0px)';

              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' + now + 'px)';

              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();

        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }

        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {
            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }
      }
    }
  };

  Slick.prototype.getNavTarget = function () {
    var _ = this,
        asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;
  };

  Slick.prototype.asNavFor = function (index) {
    var _ = this,
        asNavFor = _.getNavTarget();

    if (asNavFor !== null && _typeof(asNavFor) === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');

        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };

  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
        transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.autoPlay = function () {
    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };

  Slick.prototype.autoPlayClear = function () {
    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };

  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }

      _.slideHandler(slideTo);
    }
  };

  Slick.prototype.buildArrows = function () {
    var _ = this;

    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }

        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
      }
    }
  };

  Slick.prototype.buildDots = function () {
    var _ = this,
        i,
        dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');

      dot = $('<ul />').addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find('li').first().addClass('slick-active');
    }
  };

  Slick.prototype.buildOut = function () {
    var _ = this;

    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });

    _.$slider.addClass('slick-slider');

    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

    _.$slideTrack.css('opacity', 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };

  Slick.prototype.buildRows = function () {
    var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');

        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');

          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }

          slide.appendChild(row);
        }

        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);

      _.$slider.children().children().children().css({
        'width': 100 / _.options.slidesPerRow + '%',
        'display': 'inline-block'
      });
    }
  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;

    var sliderWidth = _.$slider.width();

    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;

            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }

              _.refresh(initial);
            }

            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;

          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }

            _.refresh(initial);
          }

          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;

          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }

          _.refresh(initial);

          triggerBreakpoint = targetBreakpoint;
        }
      } // only trigger breakpoints during an actual break. not on initialize.


      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset; // If target is a link, prevent default action.


    if ($target.is('a')) {
      event.preventDefault();
    } // If target is not the <li> element (ie: a child), find the <li>.


    if (!$target.is('li')) {
      $target = $target.closest('li');
    }

    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }

        break;

      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }

        break;

      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

        $target.children().trigger('focus');
        break;

      default:
        return;
    }
  };

  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
        navigables,
        prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {
    var _ = this;

    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

      if (_.options.accessibility === true) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }

    _.$slider.off('focus.slick blur.slick');

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
      }
    }

    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);

    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);

    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);

    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

    _.$list.off('click.slick', _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }

    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  };

  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;

    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));

    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  };

  Slick.prototype.cleanUpRows = function () {
    var _ = this,
        originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');

      _.$slider.empty().append(originalSlides);
    }
  };

  Slick.prototype.clickHandler = function (event) {
    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };

  Slick.prototype.destroy = function (refresh) {
    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $('.slick-cloned', _.$slider).detach();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }

    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass('slick-slider');

    _.$slider.removeClass('slick-initialized');

    _.$slider.removeClass('slick-dotted');

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };

  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
        transition = {};

    transition[_.transitionType] = '';

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }
    }
  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;

    if (filter !== null) {
      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.focusHandler = function () {
    var _ = this;

    _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {
      event.stopImmediatePropagation();
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          _.focussed = $sf.is(':focus');

          _.autoPlay();
        }
      }, 0);
    });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;

    return _.currentSlide;
  };

  Slick.prototype.getDotCount = function () {
    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;
  };

  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }

        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }

      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }

    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;
  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;

    return _.options[option];
  };

  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;
  };

  Slick.prototype.getSlick = function () {
    return this;
  };

  Slick.prototype.getSlideCount = function () {
    var _ = this,
        slidesTraversed,
        swipedSlide,
        centerOffset;

    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
  };

  Slick.prototype.init = function (creation) {
    var _ = this;

    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');

      _.buildRows();

      _.buildOut();

      _.setProps();

      _.startLoad();

      _.loadSlider();

      _.initializeEvents();

      _.updateArrows();

      _.updateDots();

      _.checkResponsive(true);

      _.focusHandler();
    }

    if (creation) {
      _.$slider.trigger('init', [_]);
    }

    if (_.options.accessibility === true) {
      _.initADA();
    }

    if (_.options.autoplay) {
      _.paused = false;

      _.autoPlay();
    }
  };

  Slick.prototype.initADA = function () {
    var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
      return val >= 0 && val < _.slideCount;
    });

    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });

    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          'role': 'tabpanel',
          'id': 'slick-slide' + _.instanceUid + i,
          'tabindex': -1
        });

        if (slideControlIndex !== -1) {
          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;

          if ($('#' + ariaButtonControl).length) {
            $(this).attr({
              'aria-describedby': ariaButtonControl
            });
          }
        }
      });

      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          'role': 'presentation'
        });
        $(this).find('button').first().attr({
          'role': 'tab',
          'id': 'slick-slide-control' + _.instanceUid + i,
          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
          'aria-label': i + 1 + ' of ' + numDotGroups,
          'aria-selected': null,
          'tabindex': '-1'
        });
      }).eq(_.currentSlide).find('button').attr({
        'aria-selected': 'true',
        'tabindex': '0'
      }).end();
    }

    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          'tabindex': '0'
        });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }

    _.activateADA();
  };

  Slick.prototype.initArrowEvents = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', {
        message: 'previous'
      }, _.changeSlide);

      _.$nextArrow.off('click.slick').on('click.slick', {
        message: 'next'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow.on('keydown.slick', _.keyHandler);

        _.$nextArrow.on('keydown.slick', _.keyHandler);
      }
    }
  };

  Slick.prototype.initDotEvents = function () {
    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initSlideEvents = function () {
    var _ = this;

    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));

      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initializeEvents = function () {
    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();

    _.initSlideEvents();

    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);

    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);

    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('click.slick', _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };

  Slick.prototype.initUI = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();

      _.$nextArrow.show();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };

  Slick.prototype.keyHandler = function (event) {
    var _ = this; //Dont slide if the cursor is inside the form fields and arrow keys are pressed


    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'next' : 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'previous' : 'next'
          }
        });
      }
    }
  };

  Slick.prototype.lazyLoad = function () {
    var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
            imageSource = $(this).attr('data-lazy'),
            imageSrcSet = $(this).attr('data-srcset'),
            imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
            imageToLoad = document.createElement('img');

        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr('srcset', imageSrcSet);

              if (imageSizes) {
                image.attr('sizes', imageSizes);
              }
            }

            image.attr('src', imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
            });

            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        };

        imageToLoad.onerror = function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };

        imageToLoad.src = imageSource;
      });
    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find('.slick-slide');

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };

  Slick.prototype.loadSlider = function () {
    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass('slick-loading');

    _.initUI();

    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'next'
      }
    });
  };

  Slick.prototype.orientationChange = function () {
    var _ = this;

    _.checkResponsive();

    _.setPosition();
  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;

    _.autoPlayClear();

    _.paused = true;
  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;

    _.autoPlay();

    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };

  Slick.prototype.postSlide = function (index) {
    var _ = this;

    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      if (_.options.accessibility === true) {
        _.initADA();

        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr('tabindex', 0).focus();
        }
      }
    }
  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
  };

  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;

    var _ = this,
        $imgsToLoad = $('img[data-lazy]', _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');

      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr('srcset', imageSrcSet);

          if (imageSizes) {
            image.attr('sizes', imageSizes);
          }
        }

        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);

        _.progressiveLazyLoad();
      };

      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

          _.progressiveLazyLoad();
        }
      };

      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };

  Slick.prototype.refresh = function (initializing) {
    var _ = this,
        currentSlide,
        lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow; // in non-infinite sliders, we don't want to go past the
    // last visible index.

    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    } // if less slides than to show, go to start.


    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
    }
  };

  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';

      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint; // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.

          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }

            l--;
          }

          _.breakpoints.push(currentBreakpoint);

          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }

      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };

  Slick.prototype.reinit = function () {
    var _ = this;

    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();

    _.setupInfinite();

    _.buildArrows();

    _.updateArrows();

    _.initArrowEvents();

    _.buildDots();

    _.updateDots();

    _.initDotEvents();

    _.cleanUpSlideEvents();

    _.initSlideEvents();

    _.checkResponsive(false, true);

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    _.setPosition();

    _.focusHandler();

    _.paused = !_.options.autoplay;

    _.autoPlay();

    _.$slider.trigger('reInit', [_]);
  };

  Slick.prototype.resize = function () {
    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();

        _.checkResponsive();

        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;

    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.setCSS = function (position) {
    var _ = this,
        positionProps = {},
        x,
        y;

    if (_.options.rtl === true) {
      position = -position;
    }

    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};

      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';

        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';

        _.$slideTrack.css(positionProps);
      }
    }
  };

  Slick.prototype.setDimensions = function () {
    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px'
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();

    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);

      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };

  Slick.prototype.setFade = function () {
    var _ = this,
        targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;

      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };

  Slick.prototype.setHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.css('height', targetHeight);
    }
  };

  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    /**
     * accepts arguments in format of:
     *
     *  - for changing a single option's value:
     *     .slick("setOption", option, value, refresh )
     *
     *  - for changing a set of responsive options:
     *     .slick("setOption", 'responsive', [{}, ...], refresh )
     *
     *  - for updating multiple values at once (not responsive)
     *     .slick("setOption", { 'option': value, ... }, refresh )
     */
    var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

    if ($.type(arguments[0]) === 'object') {
      option = arguments[0];
      refresh = arguments[1];
      type = 'multiple';
    } else if ($.type(arguments[0]) === 'string') {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];

      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = 'responsive';
      } else if (typeof arguments[1] !== 'undefined') {
        type = 'single';
      }
    }

    if (type === 'single') {
      _.options[option] = value;
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1; // loop through the responsive object and splice out duplicates.

          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }

            l--;
          }

          _.options.responsive.push(value[item]);
        }
      }
    }

    if (refresh) {
      _.unload();

      _.reinit();
    }
  };

  Slick.prototype.setPosition = function () {
    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger('setPosition', [_]);
  };

  Slick.prototype.setProps = function () {
    var _ = this,
        bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? 'top' : 'left';

    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }

    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }

    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }

    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };

  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

    _.$slides.eq(index).addClass('slick-current');

    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }

        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }

      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }

    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {
    var _ = this,
        i,
        slideIndex,
        infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }

        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }

        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  };

  Slick.prototype.interrupt = function (toggle) {
    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }

    _.interrupted = toggle;
  };

  Slick.prototype.selectHandler = function (event) {
    var _ = this;

    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);

      return;
    }

    _.slideHandler(index);
  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }

    _.updateDots();

    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }

      _.animateHeight();

      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };

  Slick.prototype.startLoad = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();

      _.$nextArrow.hide();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }

    _.$slider.addClass('slick-loading');
  };

  Slick.prototype.swipeDirection = function () {
    var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }

    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  };

  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
        slideCount,
        direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();

      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;

        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;

        default:
      }

      if (direction != 'vertical') {
        _.slideHandler(slideCount);

        _.touchObject = {};

        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);

        _.touchObject = {};
      }
    }
  };

  Slick.prototype.swipeHandler = function (event) {
    var _ = this;

    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }

    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);

        break;

      case 'move':
        _.swipeMove(event);

        break;

      case 'end':
        _.swipeEnd(event);

        break;
    }
  };

  Slick.prototype.swipeMove = function (event) {
    var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }

    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }

    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);
  };

  Slick.prototype.swipeStart = function (event) {
    var _ = this,
        touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;

    if (_.$slidesCache !== null) {
      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.unload = function () {
    var _ = this;

    $('.slick-cloned', _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  };

  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;

    _.$slider.trigger('unslick', [_, fromBreakpoint]);

    _.destroy();
  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
        centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };

  Slick.prototype.updateDots = function () {
    var _ = this;

    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();

      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
    }
  };

  Slick.prototype.visibility = function () {
    var _ = this;

    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };

  $.fn.slick = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;

    for (i = 0; i < l; i++) {
      if (_typeof(opt) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }

    return _;
  };
});

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./node_modules/what-input/dist/what-input.js":
/*!****************************************************!*\
  !*** ./node_modules/what-input/dist/what-input.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.1.2
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports) {
      'use strict';

      module.exports = function () {
        /*
         * bail out if there is no document or window
         * (i.e. in a node/non-DOM environment)
         *
         * Return a stubbed API instead
         */
        if (typeof document === 'undefined' || typeof window === 'undefined') {
          return {
            // always return "initial" because no interaction will ever be detected
            ask: function ask() {
              return 'initial';
            },
            // always return null
            element: function element() {
              return null;
            },
            // no-op
            ignoreKeys: function ignoreKeys() {},
            // no-op
            specificKeys: function specificKeys() {},
            // no-op
            registerOnChange: function registerOnChange() {},
            // no-op
            unRegisterOnChange: function unRegisterOnChange() {}
          };
        }
        /*
         * variables
         */
        // cache document.documentElement


        var docElem = document.documentElement; // currently focused dom element

        var currentElement = null; // last used input type

        var currentInput = 'initial'; // last used input intent

        var currentIntent = currentInput; // check for sessionStorage support
        // then check for session variables and use if available

        try {
          if (window.sessionStorage.getItem('what-input')) {
            currentInput = window.sessionStorage.getItem('what-input');
          }

          if (window.sessionStorage.getItem('what-intent')) {
            currentIntent = window.sessionStorage.getItem('what-intent');
          }
        } catch (e) {} // event buffer timer


        var eventTimer = null; // form input types

        var formInputs = ['input', 'select', 'textarea']; // empty array for holding callback functions

        var functionList = []; // list of modifier keys commonly used with the mouse and
        // can be safely ignored to prevent false keyboard detection

        var ignoreMap = [16, // shift
        17, // control
        18, // alt
        91, // Windows key / left Apple cmd
        93 // Windows menu / right Apple cmd
        ];
        var specificMap = []; // mapping of events to input types

        var inputMap = {
          keydown: 'keyboard',
          keyup: 'keyboard',
          mousedown: 'mouse',
          mousemove: 'mouse',
          MSPointerDown: 'pointer',
          MSPointerMove: 'pointer',
          pointerdown: 'pointer',
          pointermove: 'pointer',
          touchstart: 'touch' // boolean: true if touch buffer is active

        };
        var isBuffering = false; // boolean: true if the page is being scrolled

        var isScrolling = false; // store current mouse position

        var mousePos = {
          x: null,
          y: null // map of IE 10 pointer events

        };
        var pointerMap = {
          2: 'touch',
          3: 'touch',
          // treat pen like touch
          4: 'mouse' // check support for passive event listeners

        };
        var supportsPassive = false;

        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
              supportsPassive = true;
            }
          });
          window.addEventListener('test', null, opts);
        } catch (e) {}
        /*
         * set up
         */


        var setUp = function setUp() {
          // add correct mouse wheel event mapping to `inputMap`
          inputMap[detectWheel()] = 'mouse';
          addListeners();
          doUpdate('input');
          doUpdate('intent');
        };
        /*
         * events
         */


        var addListeners = function addListeners() {
          // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
          // can only demonstrate potential, but not actual, interaction
          // and are treated separately
          var options = supportsPassive ? {
            passive: true
          } : false; // pointer events (mouse, pen, touch)

          if (window.PointerEvent) {
            window.addEventListener('pointerdown', setInput);
            window.addEventListener('pointermove', setIntent);
          } else if (window.MSPointerEvent) {
            window.addEventListener('MSPointerDown', setInput);
            window.addEventListener('MSPointerMove', setIntent);
          } else {
            // mouse events
            window.addEventListener('mousedown', setInput);
            window.addEventListener('mousemove', setIntent); // touch events

            if ('ontouchstart' in window) {
              window.addEventListener('touchstart', eventBuffer, options);
              window.addEventListener('touchend', setInput);
            }
          } // mouse wheel


          window.addEventListener(detectWheel(), setIntent, options); // keyboard events

          window.addEventListener('keydown', eventBuffer);
          window.addEventListener('keyup', eventBuffer); // focus events

          window.addEventListener('focusin', setElement);
          window.addEventListener('focusout', clearElement);
        }; // checks conditions before updating new input


        var setInput = function setInput(event) {
          // only execute if the event buffer timer isn't running
          if (!isBuffering) {
            var eventKey = event.which;
            var value = inputMap[event.type];

            if (value === 'pointer') {
              value = pointerType(event);
            }

            var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;
            var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;
            var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch';

            if (currentInput !== value && shouldUpdate) {
              currentInput = value;

              try {
                window.sessionStorage.setItem('what-input', currentInput);
              } catch (e) {}

              doUpdate('input');
            }

            if (currentIntent !== value && shouldUpdate) {
              // preserve intent for keyboard typing in form fields
              var activeElem = document.activeElement;
              var notFormInput = activeElem && activeElem.nodeName && formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1;

              if (notFormInput) {
                currentIntent = value;

                try {
                  window.sessionStorage.setItem('what-intent', currentIntent);
                } catch (e) {}

                doUpdate('intent');
              }
            }
          }
        }; // updates the doc and `inputTypes` array with new input


        var doUpdate = function doUpdate(which) {
          docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);
          fireFunctions(which);
        }; // updates input intent for `mousemove` and `pointermove`


        var setIntent = function setIntent(event) {
          // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
          detectScrolling(event); // only execute if the event buffer timer isn't running
          // or scrolling isn't happening

          if (!isBuffering && !isScrolling) {
            var value = inputMap[event.type];

            if (value === 'pointer') {
              value = pointerType(event);
            }

            if (currentIntent !== value) {
              currentIntent = value;

              try {
                window.sessionStorage.setItem('what-intent', currentIntent);
              } catch (e) {}

              doUpdate('intent');
            }
          }
        };

        var setElement = function setElement(event) {
          if (!event.target.nodeName) {
            // If nodeName is undefined, clear the element
            // This can happen if click inside an <svg> element.
            clearElement();
            return;
          }

          currentElement = event.target.nodeName.toLowerCase();
          docElem.setAttribute('data-whatelement', currentElement);

          if (event.target.classList && event.target.classList.length) {
            docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
          }
        };

        var clearElement = function clearElement() {
          currentElement = null;
          docElem.removeAttribute('data-whatelement');
          docElem.removeAttribute('data-whatclasses');
        }; // buffers events that frequently also fire mouse events


        var eventBuffer = function eventBuffer(event) {
          // set the current input
          setInput(event); // clear the timer if it happens to be running

          window.clearTimeout(eventTimer); // set the isBuffering to `true`

          isBuffering = true; // run the timer

          eventTimer = window.setTimeout(function () {
            // if the timer runs out, set isBuffering back to `false`
            isBuffering = false;
          }, 100);
        };
        /*
         * utilities
         */


        var pointerType = function pointerType(event) {
          if (typeof event.pointerType === 'number') {
            return pointerMap[event.pointerType];
          } else {
            // treat pen like touch
            return event.pointerType === 'pen' ? 'touch' : event.pointerType;
          }
        }; // detect version of mouse wheel event to use
        // via https://developer.mozilla.org/en-US/docs/Web/Events/wheel


        var detectWheel = function detectWheel() {
          var wheelType = void 0; // Modern browsers support "wheel"

          if ('onwheel' in document.createElement('div')) {
            wheelType = 'wheel';
          } else {
            // Webkit and IE support at least "mousewheel"
            // or assume that remaining browsers are older Firefox
            wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
          }

          return wheelType;
        }; // runs callback functions


        var fireFunctions = function fireFunctions(type) {
          for (var i = 0, len = functionList.length; i < len; i++) {
            if (functionList[i].type === type) {
              functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
            }
          }
        }; // finds matching element in an object


        var objPos = function objPos(match) {
          for (var i = 0, len = functionList.length; i < len; i++) {
            if (functionList[i].fn === match) {
              return i;
            }
          }
        };

        var detectScrolling = function detectScrolling(event) {
          if (mousePos['x'] !== event.screenX || mousePos['y'] !== event.screenY) {
            isScrolling = false;
            mousePos['x'] = event.screenX;
            mousePos['y'] = event.screenY;
          } else {
            isScrolling = true;
          }
        };
        /*
         * init
         */
        // don't start script unless browser cuts the mustard
        // (also passes if polyfills are used)


        if ('addEventListener' in window && Array.prototype.indexOf) {
          setUp();
        }
        /*
         * api
         */


        return {
          // returns string: the current input type
          // opt: 'intent'|'input'
          // 'input' (default): returns the same value as the `data-whatinput` attribute
          // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
          ask: function ask(opt) {
            return opt === 'intent' ? currentIntent : currentInput;
          },
          // returns string: the currently focused element or null
          element: function element() {
            return currentElement;
          },
          // overwrites ignored keys with provided array
          ignoreKeys: function ignoreKeys(arr) {
            ignoreMap = arr;
          },
          // overwrites specific char keys to update on
          specificKeys: function specificKeys(arr) {
            specificMap = arr;
          },
          // attach functions to input and intent "events"
          // funct: function to fire on change
          // eventType: 'input'|'intent'
          registerOnChange: function registerOnChange(fn, eventType) {
            functionList.push({
              fn: fn,
              type: eventType || 'input'
            });
          },
          unRegisterOnChange: function unRegisterOnChange(fn) {
            var position = objPos(fn);

            if (position || position === 0) {
              functionList.splice(position, 1);
            }
          }
        };
      }();
      /***/

    }
    /******/
    ])
  );
});

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_$, __webpack_provided_window_dot_jQuery) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! what-input */ "./node_modules/what-input/dist/what-input.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(what_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_foundation_explicit_pieces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/foundation-explicit-pieces */ "./src/assets/js/lib/foundation-explicit-pieces.js");
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(magnific_popup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_foundation_datepicker_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/foundation-datepicker.min.js */ "./src/assets/js/lib/foundation-datepicker.min.js");
/* harmony import */ var _lib_foundation_datepicker_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_foundation_datepicker_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_foundation_datepicker_min_ru_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/foundation-datepicker.min.ru.js */ "./src/assets/js/lib/foundation-datepicker.min.ru.js");
/* harmony import */ var _lib_foundation_datepicker_min_ru_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_foundation_datepicker_min_ru_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_jquery_form_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/jquery.form.js */ "./src/assets/js/lib/jquery.form.js");
/* harmony import */ var _lib_jquery_form_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_form_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_jquery_inputmask_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/jquery.inputmask.min.js */ "./src/assets/js/lib/jquery.inputmask.min.js");
/* harmony import */ var _lib_jquery_inputmask_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_inputmask_min_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_parallax_min_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/parallax.min.js */ "./src/assets/js/lib/parallax.min.js");
/* harmony import */ var _lib_parallax_min_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_parallax_min_js__WEBPACK_IMPORTED_MODULE_9__);

 // Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.

__webpack_provided_window_dot_jQuery = __webpack_provided_window_dot_$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a; //require('foundation-sites');
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below

 //import 'jgrowl';
//import 'tooltipster';








Foundation.Accordion.defaults.slideSpeed = 250;
Foundation.Accordion.defaults.multiExpand = true;
Foundation.Accordion.defaults.allowAllClosed = true;
Foundation.Dropdown.defaults.closeOnClick = true;
Foundation.Dropdown.defaults.hoverPane = true;
Foundation.Dropdown.defaults.hoverDelay = 150;
Foundation.DropdownMenu.defaults.autoclose = false;
Foundation.Drilldown.defaults.backButton = '<li class="js-drilldown-back"><a class="js-drilldown-back-link" tabindex="0">Назад</a></li>'; //Foundation.Drilldown.defaults.animationDuration	=	750;
//Foundation.Drilldown.defaults.animationEasing	=	'cubic-bezier(0.18, 0.89, 0.32, 1.27)';

Foundation.OffCanvas.defaults.trapFocus = true;
Foundation.OffCanvas.defaults.contentScroll = false;
Foundation.OffCanvas.defaults.autoFocus = true;
Foundation.OffCanvas.defaults.transition = 'overlap';
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).foundation();
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  //Отключаем ховер эффекты во время скролла => 60fps scroll
  var body = document.body,
      timer;
  window.addEventListener('scroll', function (event) {
    clearTimeout(timer);

    if (!body.classList.contains('disable-hover')) {
      body.classList.add('disable-hover');
    }

    timer = setTimeout(function () {
      body.classList.remove('disable-hover');
    }, 500);
  }, false);
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(true, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.magnificPopup.defaults, {
    mainClass: 'mfp-with-anim mfp-zoom-in',
    tClose: 'Закрыть',
    tLoading: 'Загрузка...',
    removalDelay: 300,
    gallery: {
      tPrev: 'Назад',
      tNext: 'Вперед',
      tCounter: '%curr% из %total%'
    },
    image: {
      Error: 'Невозможно загрузить <a href="%url%">изображение</a>'
    },
    ajax: {
      tError: 'Невозможно загрузить <a href="%url%">содержимое</a>'
    },
    callbacks: {
      open: function open() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-close]').on('click', function (event) {
          event.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.magnificPopup.close();
        });
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gallery').each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).magnificPopup({
      gallery: {
        enabled: true
      },
      delegate: '.gallery-item',
      type: 'image',
      image: {
        markup: '<div class="mfp-figure mfp-with-anim">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-title"></div>' + '</div>',
        cursor: 'null',
        verticalFit: true
      },
      mainClass: 'mfp-zoom-in mfp-img-mobile',
      closeOnContentClick: false,
      closeBtnInside: true
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.inline-popup').magnificPopup({
    type: 'inline',
    focus: '[autofocus]',
    callbacks: {//open: function() {
      //  $(this).find('[data-equalizer]').foundation(); // реинит эквалайзера после открытия окна
      //}
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ajax-popup').magnificPopup({
    type: 'ajax',
    closeBtnInside: true,
    closeOnContentClick: false,
    removalDelay: 300,
    midClick: true,
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out'
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.image-popup').magnificPopup({
    type: 'image',
    image: {
      markup: '<div class="mfp-figure mfp-with-anim">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-title"></div>' + '</div>',
      cursor: 'null',
      verticalFit: true
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.iframe-popup').magnificPopup({
    type: 'iframe',
    removalDelay: 160,
    preloader: true,
    fixedContentPos: false
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick').slick({
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: 'progressive',
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    cssEase: 'cubic-bezier(0.46,0.03,0.52,0.96)',
    speed: 640,
    prevArrow: '<button type="button" class="slick-prev"><svg viewbox="0 0 128 128"><use xlink:href="#chevron-thin-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg viewbox="0 0 128 128"><use xlink:href="#chevron-thin-right"></use></svg></button>'
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-inputmask]').inputmask();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-datepicker]').fdatepicker();
  expromptum();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/js/lib/foundation-datepicker.min.js":
/*!********************************************************!*\
  !*** ./src/assets/js/lib/foundation-datepicker.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (a) {
  function b() {
    return new Date(Date.UTC.apply(Date, arguments));
  }

  var c = function c(b, _c) {
    var f = this;
    this.element = a(b), this.autoShow = void 0 == _c.autoShow || _c.autoShow, this.appendTo = _c.appendTo || "body", this.closeButton = _c.closeButton, this.language = _c.language || this.element.data("date-language") || "en", this.language = this.language in d ? this.language : this.language.split("-")[0], this.language = this.language in d ? this.language : "en", this.isRTL = d[this.language].rtl || !1, this.format = e.parseFormat(_c.format || this.element.data("date-format") || d[this.language].format || "mm/dd/yyyy"), this.formatText = _c.format || this.element.data("date-format") || d[this.language].format || "mm/dd/yyyy", this.isInline = !1, this.isInput = this.element.is("input"), this.component = !!this.element.is(".date") && this.element.find(".prefix, .postfix"), this.hasInput = this.component && this.element.find("input").length, this.disableDblClickSelection = _c.disableDblClickSelection, this.onRender = _c.onRender || function () {}, this.component && 0 === this.component.length && (this.component = !1), this.linkField = _c.linkField || this.element.data("link-field") || !1, this.linkFormat = e.parseFormat(_c.linkFormat || this.element.data("link-format") || "yyyy-mm-dd hh:ii:ss"), this.minuteStep = _c.minuteStep || this.element.data("minute-step") || 5, this.pickerPosition = _c.pickerPosition || this.element.data("picker-position") || "bottom-right", this.initialDate = _c.initialDate || null, this.faCSSprefix = _c.faCSSprefix || "fa", this.leftArrow = _c.leftArrow || '<i class="' + this.faCSSprefix + " " + this.faCSSprefix + '-chevron-left fi-arrow-left"/>', this.rightArrow = _c.rightArrow || '<i class="' + this.faCSSprefix + " " + this.faCSSprefix + '-chevron-right fi-arrow-right"/>', this.closeIcon = _c.closeIcon || '<i class="' + this.faCSSprefix + " " + this.faCSSprefix + "-remove " + this.faCSSprefix + '-times fi-x"></i>', this.minView = 0, "minView" in _c ? this.minView = _c.minView : "minView" in this.element.data() && (this.minView = this.element.data("min-view")), this.minView = e.convertViewMode(this.minView), this.maxView = e.modes.length - 1, "maxView" in _c ? this.maxView = _c.maxView : "maxView" in this.element.data() && (this.maxView = this.element.data("max-view")), this.maxView = e.convertViewMode(this.maxView), this.startViewMode = "month", "startView" in _c ? this.startViewMode = _c.startView : "startView" in this.element.data() && (this.startViewMode = this.element.data("start-view")), this.startViewMode = e.convertViewMode(this.startViewMode), this.viewMode = this.startViewMode, "minView" in _c || "maxView" in _c || this.element.data("min-view") || this.element.data("max-view") || (this.pickTime = !1, "pickTime" in _c && (this.pickTime = _c.pickTime), 1 == this.pickTime ? (this.minView = 0, this.maxView = 4) : (this.minView = 2, this.maxView = 4)), this.forceParse = !0, "forceParse" in _c ? this.forceParse = _c.forceParse : "dateForceParse" in this.element.data() && (this.forceParse = this.element.data("date-force-parse")), this.picker = a(e.template(this.leftArrow, this.rightArrow, this.closeIcon)).appendTo(this.isInline ? this.element : this.appendTo).on({
      click: a.proxy(this.click, this),
      mousedown: a.proxy(this.mousedown, this)
    }), this.closeButton ? this.picker.find("a.datepicker-close").show() : this.picker.find("a.datepicker-close").hide(), this.isInline ? this.picker.addClass("datepicker-inline") : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.isRTL && (this.picker.addClass("datepicker-rtl"), this.picker.find(".date-switch").each(function () {
      a(this).parent().prepend(a(this).siblings(".next")), a(this).parent().append(a(this).siblings(".prev"));
    }), this.picker.find(".prev, .next").toggleClass("prev next")), a(document).on("mousedown", function (b) {
      f.isInput && b.target === f.element[0] || 0 === a(b.target).closest(".datepicker.datepicker-inline, .datepicker.datepicker-dropdown").length && f.hide();
    }), this.autoclose = !0, "autoclose" in _c ? this.autoclose = _c.autoclose : "dateAutoclose" in this.element.data() && (this.autoclose = this.element.data("date-autoclose")), this.keyboardNavigation = !0, "keyboardNavigation" in _c ? this.keyboardNavigation = _c.keyboardNavigation : "dateKeyboardNavigation" in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation")), this.todayBtn = _c.todayBtn || this.element.data("date-today-btn") || !1, this.todayHighlight = _c.todayHighlight || this.element.data("date-today-highlight") || !1, this.calendarWeeks = !1, "calendarWeeks" in _c ? this.calendarWeeks = _c.calendarWeeks : "dateCalendarWeeks" in this.element.data() && (this.calendarWeeks = this.element.data("date-calendar-weeks")), this.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function (a, b) {
      return parseInt(b) + 1;
    }), this.weekStart = (_c.weekStart || this.element.data("date-weekstart") || d[this.language].weekStart || 0) % 7, this.weekEnd = (this.weekStart + 6) % 7, this.startDate = -(1 / 0), this.endDate = 1 / 0, this.daysOfWeekDisabled = [], this.datesDisabled = [], this.setStartDate(_c.startDate || this.element.data("date-startdate")), this.setEndDate(_c.endDate || this.element.data("date-enddate")), this.setDaysOfWeekDisabled(_c.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled")), this.setDatesDisabled(_c.datesDisabled || this.element.data("dates-disabled")), this.fillDow(), this.fillMonths(), this.update(), this.showMode(), this.isInline && this.show(), this._attachEvents();
  };

  c.prototype = {
    constructor: c,
    _events: [],
    _attachEvents: function _attachEvents() {
      this._detachEvents(), this.isInput ? this.keyboardNavigation ? this._events = [[this.element, {
        focus: this.autoShow ? a.proxy(this.show, this) : function () {},
        keyup: a.proxy(this.update, this),
        keydown: a.proxy(this.keydown, this),
        click: this.element.attr("readonly") ? a.proxy(this.show, this) : function () {}
      }]] : this._events = [[this.element, {
        focus: this.autoShow ? a.proxy(this.show, this) : function () {}
      }]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), {
        focus: this.autoShow ? a.proxy(this.show, this) : function () {},
        keyup: a.proxy(this.update, this),
        keydown: a.proxy(this.keydown, this)
      }], [this.component, {
        click: a.proxy(this.show, this)
      }]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {
        click: a.proxy(this.show, this)
      }]], this.disableDblClickSelection && (this._events[this._events.length] = [this.element, {
        dblclick: function dblclick(b) {
          b.preventDefault(), b.stopPropagation(), a(this).blur();
        }
      }]);

      for (var b, c, d = 0; d < this._events.length; d++) {
        b = this._events[d][0], c = this._events[d][1], b.on(c);
      }
    },
    _detachEvents: function _detachEvents() {
      for (var a, b, c = 0; c < this._events.length; c++) {
        a = this._events[c][0], b = this._events[c][1], a.off(b);
      }

      this._events = [];
    },
    show: function show(b) {
      this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.update(), this.place(), a(window).on("resize", a.proxy(this.place, this)), b && (b.stopPropagation(), b.preventDefault()), this.element.trigger({
        type: "show",
        date: this.date
      });
    },
    hide: function hide(b) {
      this.isInline || this.picker.is(":visible") && (this.picker.hide(), a(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || a(document).off("mousedown", this.hide), this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this.element.trigger({
        type: "hide",
        date: this.date
      }));
    },
    remove: function remove() {
      this._detachEvents(), this.picker.remove(), delete this.element.data().datepicker;
    },
    getDate: function getDate() {
      var a = this.getUTCDate();
      return new Date(a.getTime() + 6e4 * a.getTimezoneOffset());
    },
    getUTCDate: function getUTCDate() {
      return this.date;
    },
    setDate: function setDate(a) {
      this.setUTCDate(new Date(a.getTime() - 6e4 * a.getTimezoneOffset()));
    },
    setUTCDate: function setUTCDate(a) {
      this.date = a, this.setValue();
    },
    setValue: function setValue() {
      var a = this.getFormattedDate();
      this.isInput ? this.element.val(a) : (this.component && this.element.find("input").val(a), this.element.data("date", a));
    },
    getFormattedDate: function getFormattedDate(a) {
      return void 0 === a && (a = this.format), e.formatDate(this.date, a, this.language);
    },
    setStartDate: function setStartDate(a) {
      this.startDate = a || -(1 / 0), this.startDate !== -(1 / 0) && (this.startDate = e.parseDate(this.startDate, this.format, this.language)), this.update(), this.updateNavArrows();
    },
    setEndDate: function setEndDate(a) {
      this.endDate = a || 1 / 0, this.endDate !== 1 / 0 && (this.endDate = e.parseDate(this.endDate, this.format, this.language)), this.update(), this.updateNavArrows();
    },
    setDaysOfWeekDisabled: function setDaysOfWeekDisabled(b) {
      this.daysOfWeekDisabled = b || [], a.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)), this.daysOfWeekDisabled = a.map(this.daysOfWeekDisabled, function (a) {
        return parseInt(a, 10);
      }), this.update(), this.updateNavArrows();
    },
    setDatesDisabled: function setDatesDisabled(b) {
      this.datesDisabled = b || [], a.isArray(this.datesDisabled) || (this.datesDisabled = this.datesDisabled.split(/,\s*/)), this.datesDisabled = a.map(this.datesDisabled, function (a) {
        return e.parseDate(a, this.format, this.language).valueOf();
      }), this.update(), this.updateNavArrows();
    },
    place: function place() {
      if (!this.isInline) {
        var b = parseInt(this.element.parents().filter(function () {
          return "auto" != a(this).css("z-index");
        }).first().css("z-index")) + 10,
            c = this.component ? this.component : this.element,
            d = c.offset(),
            e = c.outerHeight() + parseInt(c.css("margin-top")),
            f = c.outerWidth() + parseInt(c.css("margin-left")),
            g = d.top + e,
            h = d.left;
        this.picker.removeClass("datepicker-top datepicker-bottom"), g + this.picker.outerHeight() >= a(window).scrollTop() + a(window).height() ? (g = d.top - this.picker.outerHeight(), this.picker.addClass("datepicker-top")) : this.picker.addClass("datepicker-bottom"), d.left + this.picker.width() >= a(window).width() && (h = d.left + f - this.picker.width()), this.picker.css({
          top: g,
          left: h,
          zIndex: b
        });
      }
    },
    update: function update() {
      var b,
          c = !1,
          d = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val();
      return arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (b = arguments[0], c = !0) : b = d || null == this.initialDate ? this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val() : this.initialDate, b && b.length > this.formatText.length ? (a(this.picker).addClass("is-invalid"), void a(this.element).addClass("is-invalid-input")) : (a(this.picker).removeClass("is-invalid"), a(this.element).removeClass("is-invalid-input"), this.date = e.parseDate(b, this.format, this.language), (c || null != this.initialDate) && this.setValue(), this.date < this.startDate ? this.viewDate = new Date(this.startDate.valueOf()) : this.date > this.endDate ? this.viewDate = new Date(this.endDate.valueOf()) : this.viewDate = new Date(this.date.valueOf()), void this.fill());
    },
    fillDow: function fillDow() {
      var a = this.weekStart,
          b = "<tr>";

      if (this.calendarWeeks) {
        var c = '<th class="cw">&nbsp;</th>';
        b += c, this.picker.find(".datepicker-days thead tr:first-child").prepend(c);
      }

      for (; a < this.weekStart + 7;) {
        b += '<th class="dow">' + d[this.language].daysMin[a++ % 7] + "</th>";
      }

      b += "</tr>", this.picker.find(".datepicker-days thead").append(b);
    },
    fillMonths: function fillMonths() {
      for (var a = "", b = 0; b < 12;) {
        a += '<span class="month">' + d[this.language].monthsShort[b++] + "</span>";
      }

      this.picker.find(".datepicker-months td").html(a);
    },
    fill: function fill() {
      if (null != this.date && null != this.viewDate) {
        var c = new Date(this.viewDate.valueOf()),
            f = c.getUTCFullYear(),
            g = c.getUTCMonth(),
            h = c.getUTCDate(),
            i = c.getUTCHours(),
            j = c.getUTCMinutes(),
            k = this.startDate !== -(1 / 0) ? this.startDate.getUTCFullYear() : -(1 / 0),
            l = this.startDate !== -(1 / 0) ? this.startDate.getUTCMonth() : -(1 / 0),
            m = this.endDate !== 1 / 0 ? this.endDate.getUTCFullYear() : 1 / 0,
            n = this.endDate !== 1 / 0 ? this.endDate.getUTCMonth() : 1 / 0,
            o = this.date && b(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate()).valueOf(),
            p = new Date();
        d[this.language].titleFormat || d.en.titleFormat;
        this.picker.find(".datepicker-days thead th:eq(1)").text(d[this.language].months[g] + " " + f), this.picker.find(".datepicker-hours thead th:eq(1)").text(h + " " + d[this.language].months[g] + " " + f), this.picker.find(".datepicker-minutes thead th:eq(1)").text(h + " " + d[this.language].months[g] + " " + f), this.picker.find("tfoot th.today").text(d[this.language].today).toggle(this.todayBtn !== !1), this.updateNavArrows(), this.fillMonths();
        var q = b(f, g - 1, 28, 0, 0, 0, 0),
            r = e.getDaysInMonth(q.getUTCFullYear(), q.getUTCMonth());
        q.setUTCDate(r), q.setUTCDate(r - (q.getUTCDay() - this.weekStart + 7) % 7);
        var s = new Date(q.valueOf());
        s.setUTCDate(s.getUTCDate() + 42), s = s.valueOf();

        for (var t, u = []; q.valueOf() < s;) {
          if (q.getUTCDay() == this.weekStart && (u.push("<tr>"), this.calendarWeeks)) {
            var v = new Date(q.getUTCFullYear(), q.getUTCMonth(), q.getUTCDate() - q.getDay() + 10 - (this.weekStart && this.weekStart % 7 < 5 && 7)),
                w = new Date(v.getFullYear(), 0, 4),
                x = ~~((v - w) / 864e5 / 7 + 1.5);
            u.push('<td class="cw">' + x + "</td>");
          }

          t = " " + this.onRender(q) + " ", q.getUTCFullYear() < f || q.getUTCFullYear() == f && q.getUTCMonth() < g ? t += " old" : (q.getUTCFullYear() > f || q.getUTCFullYear() == f && q.getUTCMonth() > g) && (t += " new"), this.todayHighlight && q.getUTCFullYear() == p.getFullYear() && q.getUTCMonth() == p.getMonth() && q.getUTCDate() == p.getDate() && (t += " today"), o && q.valueOf() == o && (t += " active"), (q.valueOf() < this.startDate || q.valueOf() > this.endDate || a.inArray(q.getUTCDay(), this.daysOfWeekDisabled) !== -1 || a.inArray(q.valueOf(), this.datesDisabled) !== -1) && (t += " disabled"), u.push('<td class="day' + t + '">' + q.getUTCDate() + "</td>"), q.getUTCDay() == this.weekEnd && u.push("</tr>"), q.setUTCDate(q.getUTCDate() + 1);
        }

        this.picker.find(".datepicker-days tbody").empty().append(u.join("")), u = [];

        for (var y = 0; y < 24; y++) {
          var z = b(f, g, h, y);
          t = "", z.valueOf() + 36e5 < this.startDate || z.valueOf() > this.endDate ? t += " disabled" : i == y && (t += " active"), u.push('<span class="hour' + t + '">' + y + ":00</span>");
        }

        this.picker.find(".datepicker-hours td").html(u.join("")), u = [];

        for (var y = 0; y < 60; y += this.minuteStep) {
          var z = b(f, g, h, i, y);
          t = "", z.valueOf() < this.startDate || z.valueOf() > this.endDate ? t += " disabled" : Math.floor(j / this.minuteStep) == Math.floor(y / this.minuteStep) && (t += " active"), u.push('<span class="minute' + t + '">' + i + ":" + (y < 10 ? "0" + y : y) + "</span>");
        }

        this.picker.find(".datepicker-minutes td").html(u.join(""));
        var A = this.date && this.date.getUTCFullYear(),
            B = this.picker.find(".datepicker-months").find("th:eq(1)").text(f).end().find("span").removeClass("active");
        A && A == f && B.eq(this.date.getUTCMonth()).addClass("active"), (f < k || f > m) && B.addClass("disabled"), f == k && B.slice(0, l).addClass("disabled"), f == m && B.slice(n + 1).addClass("disabled"), u = "", f = 10 * parseInt(f / 10, 10);
        var C = this.picker.find(".datepicker-years").find("th:eq(1)").text(f + "-" + (f + 9)).end().find("td");
        f -= 1;

        for (var y = -1; y < 11; y++) {
          u += '<span class="year' + (y == -1 || 10 == y ? " old" : "") + (A == f ? " active" : "") + (f < k || f > m ? " disabled" : "") + '">' + f + "</span>", f += 1;
        }

        C.html(u);
      }
    },
    updateNavArrows: function updateNavArrows() {
      var a = new Date(this.viewDate),
          b = a.getUTCFullYear(),
          c = a.getUTCMonth(),
          d = a.getUTCDate(),
          e = a.getUTCHours();

      switch (this.viewMode) {
        case 0:
          this.startDate !== -(1 / 0) && b <= this.startDate.getUTCFullYear() && c <= this.startDate.getUTCMonth() && d <= this.startDate.getUTCDate() && e <= this.startDate.getUTCHours() ? this.picker.find(".prev").css({
            visibility: "hidden"
          }) : this.picker.find(".prev").css({
            visibility: "visible"
          }), this.endDate !== 1 / 0 && b >= this.endDate.getUTCFullYear() && c >= this.endDate.getUTCMonth() && d >= this.endDate.getUTCDate() && e >= this.endDate.getUTCHours() ? this.picker.find(".next").css({
            visibility: "hidden"
          }) : this.picker.find(".next").css({
            visibility: "visible"
          });
          break;

        case 1:
          this.startDate !== -(1 / 0) && b <= this.startDate.getUTCFullYear() && c <= this.startDate.getUTCMonth() && d <= this.startDate.getUTCDate() ? this.picker.find(".prev").css({
            visibility: "hidden"
          }) : this.picker.find(".prev").css({
            visibility: "visible"
          }), this.endDate !== 1 / 0 && b >= this.endDate.getUTCFullYear() && c >= this.endDate.getUTCMonth() && d >= this.endDate.getUTCDate() ? this.picker.find(".next").css({
            visibility: "hidden"
          }) : this.picker.find(".next").css({
            visibility: "visible"
          });
          break;

        case 2:
          this.startDate !== -(1 / 0) && b <= this.startDate.getUTCFullYear() && c <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({
            visibility: "hidden"
          }) : this.picker.find(".prev").css({
            visibility: "visible"
          }), this.endDate !== 1 / 0 && b >= this.endDate.getUTCFullYear() && c >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({
            visibility: "hidden"
          }) : this.picker.find(".next").css({
            visibility: "visible"
          });
          break;

        case 3:
        case 4:
          this.startDate !== -(1 / 0) && b <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
            visibility: "hidden"
          }) : this.picker.find(".prev").css({
            visibility: "visible"
          }), this.endDate !== 1 / 0 && b >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({
            visibility: "hidden"
          }) : this.picker.find(".next").css({
            visibility: "visible"
          });
      }
    },
    click: function click(c) {
      c.stopPropagation(), c.preventDefault(), (a(c.target).hasClass("datepicker-close") || a(c.target).parent().hasClass("datepicker-close")) && this.hide();
      var d = a(c.target).closest("span, td, th");

      if (1 == d.length) {
        if (d.is(".disabled")) return void this.element.trigger({
          type: "outOfRange",
          date: this.viewDate,
          startDate: this.startDate,
          endDate: this.endDate
        });

        switch (d[0].nodeName.toLowerCase()) {
          case "th":
            switch (d[0].className) {
              case "date-switch":
                this.showMode(1);
                break;

              case "prev":
              case "next":
                var f = e.modes[this.viewMode].navStep * ("prev" == d[0].className ? -1 : 1);

                switch (this.viewMode) {
                  case 0:
                    this.viewDate = this.moveHour(this.viewDate, f);
                    break;

                  case 1:
                    this.viewDate = this.moveDate(this.viewDate, f);
                    break;

                  case 2:
                    this.viewDate = this.moveMonth(this.viewDate, f);
                    break;

                  case 3:
                  case 4:
                    this.viewDate = this.moveYear(this.viewDate, f);
                }

                this.fill();
                break;

              case "today":
                var g = new Date();
                g = b(g.getFullYear(), g.getMonth(), g.getDate(), g.getHours(), g.getMinutes(), g.getSeconds()), this.viewMode = this.startViewMode, this.showMode(0), this._setDate(g);
            }

            break;

          case "span":
            if (!d.is(".disabled")) {
              if (d.is(".month")) {
                if (3 === this.minView) {
                  var h = d.parent().find("span").index(d) || 0,
                      i = this.viewDate.getUTCFullYear(),
                      j = 1,
                      k = this.viewDate.getUTCHours(),
                      l = this.viewDate.getUTCMinutes(),
                      m = this.viewDate.getUTCSeconds();

                  this._setDate(b(i, h, j, k, l, m, 0));
                } else {
                  this.viewDate.setUTCDate(1);
                  var h = d.parent().find("span").index(d);
                  this.viewDate.setUTCMonth(h), this.element.trigger({
                    type: "changeMonth",
                    date: this.viewDate
                  });
                }
              } else if (d.is(".year")) {
                if (4 === this.minView) {
                  var i = parseInt(d.text(), 10) || 0,
                      h = 0,
                      j = 1,
                      k = this.viewDate.getUTCHours(),
                      l = this.viewDate.getUTCMinutes(),
                      m = this.viewDate.getUTCSeconds();

                  this._setDate(b(i, h, j, k, l, m, 0));
                } else {
                  this.viewDate.setUTCDate(1);
                  var i = parseInt(d.text(), 10) || 0;
                  this.viewDate.setUTCFullYear(i), this.element.trigger({
                    type: "changeYear",
                    date: this.viewDate
                  });
                }
              } else if (d.is(".hour")) {
                var k = parseInt(d.text(), 10) || 0,
                    i = this.viewDate.getUTCFullYear(),
                    h = this.viewDate.getUTCMonth(),
                    j = this.viewDate.getUTCDate(),
                    l = this.viewDate.getUTCMinutes(),
                    m = this.viewDate.getUTCSeconds();

                this._setDate(b(i, h, j, k, l, m, 0));
              } else if (d.is(".minute")) {
                var l = parseInt(d.text().substr(d.text().indexOf(":") + 1), 10) || 0,
                    i = this.viewDate.getUTCFullYear(),
                    h = this.viewDate.getUTCMonth(),
                    j = this.viewDate.getUTCDate(),
                    k = this.viewDate.getUTCHours(),
                    m = this.viewDate.getUTCSeconds();

                this._setDate(b(i, h, j, k, l, m, 0));
              }

              if (0 != this.viewMode) {
                var n = this.viewMode;
                this.showMode(-1), this.fill(), n == this.viewMode && this.autoclose && this.hide();
              } else this.fill(), this.autoclose && this.hide();
            }

            break;

          case "td":
            if (d.is(".day") && !d.is(".disabled")) {
              var j = parseInt(d.text(), 10) || 1,
                  i = this.viewDate.getUTCFullYear(),
                  h = this.viewDate.getUTCMonth(),
                  k = this.viewDate.getUTCHours(),
                  l = this.viewDate.getUTCMinutes(),
                  m = this.viewDate.getUTCSeconds();
              d.is(".old") ? 0 === h ? (h = 11, i -= 1) : h -= 1 : d.is(".new") && (11 == h ? (h = 0, i += 1) : h += 1), this._setDate(b(i, h, j, k, l, m, 0));
            }

            var n = this.viewMode;
            this.showMode(-1), this.fill(), n == this.viewMode && this.autoclose && this.hide();
        }
      }
    },
    _setDate: function _setDate(a, b) {
      b && "date" != b || (this.date = a), b && "view" != b || (this.viewDate = a), this.fill(), this.setValue(), this.element.trigger({
        type: "changeDate",
        date: this.date
      });
      var c;
      this.isInput ? c = this.element : this.component && (c = this.element.find("input")), c && (c.change(), this.autoclose && (!b || "date" == b));
    },
    moveHour: function moveHour(a, b) {
      if (!b) return a;
      var c = new Date(a.valueOf());
      return b = b > 0 ? 1 : -1, c.setUTCHours(c.getUTCHours() + b), c;
    },
    moveDate: function moveDate(a, b) {
      if (!b) return a;
      var c = new Date(a.valueOf());
      return b = b > 0 ? 1 : -1, c.setUTCDate(c.getUTCDate() + b), c;
    },
    moveMonth: function moveMonth(a, b) {
      if (!b) return a;
      var c,
          d,
          e = new Date(a.valueOf()),
          f = e.getUTCDate(),
          g = e.getUTCMonth(),
          h = Math.abs(b);
      if (b = b > 0 ? 1 : -1, 1 == h) d = b == -1 ? function () {
        return e.getUTCMonth() == g;
      } : function () {
        return e.getUTCMonth() != c;
      }, c = g + b, e.setUTCMonth(c), (c < 0 || c > 11) && (c = (c + 12) % 12);else {
        for (var i = 0; i < h; i++) {
          e = this.moveMonth(e, b);
        }

        c = e.getUTCMonth(), e.setUTCDate(f), d = function d() {
          return c != e.getUTCMonth();
        };
      }

      for (; d();) {
        e.setUTCDate(--f), e.setUTCMonth(c);
      }

      return e;
    },
    moveYear: function moveYear(a, b) {
      return this.moveMonth(a, 12 * b);
    },
    dateWithinRange: function dateWithinRange(a) {
      return a >= this.startDate && a <= this.endDate;
    },
    keydown: function keydown(a) {
      if (!this.keyboardNavigation) return !0;
      if (this.picker.is(":not(:visible)")) return void (27 == a.keyCode && this.show());
      var b,
          c,
          d,
          e = !1;

      switch (a.keyCode) {
        case 27:
          this.hide(), a.preventDefault();
          break;

        case 37:
        case 39:
          if (!this.keyboardNavigation) break;
          b = 37 == a.keyCode ? -1 : 1, a.ctrlKey ? (c = this.moveYear(this.date, b), d = this.moveYear(this.viewDate, b)) : a.shiftKey ? (c = this.moveMonth(this.date, b), d = this.moveMonth(this.viewDate, b)) : (c = new Date(this.date.valueOf()), c.setUTCDate(this.date.getUTCDate() + b), d = new Date(this.viewDate.valueOf()), d.setUTCDate(this.viewDate.getUTCDate() + b)), this.dateWithinRange(c) && (this.date = c, this.viewDate = d, this.setValue(), this.update(), a.preventDefault(), e = !0);
          break;

        case 38:
        case 40:
          if (!this.keyboardNavigation) break;
          b = 38 == a.keyCode ? -1 : 1, a.ctrlKey ? (c = this.moveYear(this.date, b), d = this.moveYear(this.viewDate, b)) : a.shiftKey ? (c = this.moveMonth(this.date, b), d = this.moveMonth(this.viewDate, b)) : (c = new Date(this.date.valueOf()), c.setUTCDate(this.date.getUTCDate() + 7 * b), d = new Date(this.viewDate.valueOf()), d.setUTCDate(this.viewDate.getUTCDate() + 7 * b)), this.dateWithinRange(c) && (this.date = c, this.viewDate = d, this.setValue(), this.update(), a.preventDefault(), e = !0);
          break;

        case 13:
          this.hide(), a.preventDefault();
          break;

        case 9:
          this.hide();
      }

      if (e) {
        this.element.trigger({
          type: "changeDate",
          date: this.date
        });
        var f;
        this.isInput ? f = this.element : this.component && (f = this.element.find("input")), f && f.change();
      }
    },
    showMode: function showMode(a) {
      if (a) {
        var b = Math.max(0, Math.min(e.modes.length - 1, this.viewMode + a));
        b >= this.minView && b <= this.maxView && (this.viewMode = b);
      }

      this.picker.find(">div").hide().filter(".datepicker-" + e.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows();
    },
    changeViewDate: function changeViewDate(a) {
      this.date = a, this.viewDate = a, this.fill();
    },
    reset: function reset(a) {
      this._setDate(null, "date");
    }
  }, a.fn.fdatepicker = function (b) {
    var d = Array.apply(null, arguments);
    return d.shift(), this.each(function () {
      var e = a(this),
          f = e.data("datepicker"),
          g = "object" == _typeof(b) && b;
      f || e.data("datepicker", f = new c(this, a.extend({}, a.fn.fdatepicker.defaults, g))), "string" == typeof b && "function" == typeof f[b] && f[b].apply(f, d);
    });
  }, a.fn.fdatepicker.defaults = {
    onRender: function onRender(a) {
      return "";
    }
  }, a.fn.fdatepicker.Constructor = c;
  var d = a.fn.fdatepicker.dates = {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today",
      titleFormat: "MM yyyy"
    }
  },
      e = {
    modes: [{
      clsName: "minutes",
      navFnc: "Hours",
      navStep: 1
    }, {
      clsName: "hours",
      navFnc: "Date",
      navStep: 1
    }, {
      clsName: "days",
      navFnc: "Month",
      navStep: 1
    }, {
      clsName: "months",
      navFnc: "FullYear",
      navStep: 1
    }, {
      clsName: "years",
      navFnc: "FullYear",
      navStep: 10
    }],
    isLeapYear: function isLeapYear(a) {
      return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
    },
    getDaysInMonth: function getDaysInMonth(a, b) {
      return [31, e.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b];
    },
    validParts: /hh?|ii?|ss?|dd?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
    parseFormat: function parseFormat(a) {
      var b = a.replace(this.validParts, "\0").split("\0"),
          c = a.match(this.validParts);
      if (!b || !b.length || !c || 0 === c.length) throw new Error("Invalid date format.");
      return this.formatText = a, {
        separators: b,
        parts: c
      };
    },
    parseDate: function parseDate(c, e, f) {
      if (c instanceof Date) return new Date(c.valueOf() - 6e4 * c.getTimezoneOffset());

      if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(c) && (e = this.parseFormat("yyyy-mm-dd")), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(c) && (e = this.parseFormat("yyyy-mm-dd hh:ii")), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(c) && (e = this.parseFormat("yyyy-mm-dd hh:ii:ss")), /^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(c)) {
        var g,
            h,
            i = /([-+]\d+)([dmwy])/,
            j = c.match(/([-+]\d+)([dmwy])/g);
        c = new Date();

        for (var k = 0; k < j.length; k++) {
          switch (g = i.exec(j[k]), h = parseInt(g[1]), g[2]) {
            case "d":
              c.setUTCDate(c.getUTCDate() + h);
              break;

            case "m":
              c = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, c, h);
              break;

            case "w":
              c.setUTCDate(c.getUTCDate() + 7 * h);
              break;

            case "y":
              c = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, c, h);
          }
        }

        return b(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate(), c.getUTCHours(), c.getUTCMinutes(), c.getUTCSeconds());
      }

      var l,
          m,
          g,
          j = c && c.match(this.nonpunctuation) || [],
          c = new Date(),
          n = {},
          o = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
          p = {
        hh: function hh(a, b) {
          return a.setUTCHours(b);
        },
        h: function h(a, b) {
          return a.setUTCHours(b);
        },
        ii: function ii(a, b) {
          return a.setUTCMinutes(b);
        },
        i: function i(a, b) {
          return a.setUTCMinutes(b);
        },
        ss: function ss(a, b) {
          return a.setUTCSeconds(b);
        },
        s: function s(a, b) {
          return a.setUTCSeconds(b);
        },
        yyyy: function yyyy(a, b) {
          return a.setUTCFullYear(b);
        },
        yy: function yy(a, b) {
          return a.setUTCFullYear(2e3 + b);
        },
        m: function m(a, b) {
          for (b -= 1; b < 0;) {
            b += 12;
          }

          for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() != b;) {
            a.setUTCDate(a.getUTCDate() - 1);
          }

          return a;
        },
        d: function d(a, b) {
          return a.setUTCDate(b);
        }
      };

      if (p.M = p.MM = p.mm = p.m, p.dd = p.d, c = b(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0), j.length == e.parts.length) {
        for (var k = 0, q = e.parts.length; k < q; k++) {
          if (l = parseInt(j[k], 10), g = e.parts[k], isNaN(l)) switch (g) {
            case "MM":
              m = a(d[f].months).filter(function () {
                var a = this.slice(0, j[k].length),
                    b = j[k].slice(0, a.length);
                return a == b;
              }), l = a.inArray(m[0], d[f].months) + 1;
              break;

            case "M":
              m = a(d[f].monthsShort).filter(function () {
                var a = this.slice(0, j[k].length),
                    b = j[k].slice(0, a.length);
                return a == b;
              }), l = a.inArray(m[0], d[f].monthsShort) + 1;
          }
          n[g] = l;
        }

        for (var r, k = 0; k < o.length; k++) {
          r = o[k], r in n && !isNaN(n[r]) && p[r](c, n[r]);
        }
      }

      return c;
    },
    formatDate: function formatDate(b, c, e) {
      if (null == b) return "";
      var f = {
        h: b.getUTCHours(),
        i: b.getUTCMinutes(),
        s: b.getUTCSeconds(),
        d: b.getUTCDate(),
        m: b.getUTCMonth() + 1,
        M: d[e].monthsShort[b.getUTCMonth()],
        MM: d[e].months[b.getUTCMonth()],
        yy: b.getUTCFullYear().toString().substring(2),
        yyyy: b.getUTCFullYear()
      };
      f.hh = (f.h < 10 ? "0" : "") + f.h, f.ii = (f.i < 10 ? "0" : "") + f.i, f.ss = (f.s < 10 ? "0" : "") + f.s, f.dd = (f.d < 10 ? "0" : "") + f.d, f.mm = (f.m < 10 ? "0" : "") + f.m;

      for (var b = [], g = a.extend([], c.separators), h = 0, i = c.parts.length; h < i; h++) {
        g.length && b.push(g.shift()), b.push(f[c.parts[h]]);
      }

      return b.join("");
    },
    convertViewMode: function convertViewMode(a) {
      switch (a) {
        case 4:
        case "decade":
          a = 4;
          break;

        case 3:
        case "year":
          a = 3;
          break;

        case 2:
        case "month":
          a = 2;
          break;

        case 1:
        case "day":
          a = 1;
          break;

        case 0:
        case "hour":
          a = 0;
      }

      return a;
    },
    headTemplate: function headTemplate(a, b) {
      return '<thead><tr><th class="prev">' + a + '</th><th colspan="5" class="date-switch"></th><th class="next">' + b + "</th></tr></thead>";
    },
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
  };
  e.template = function (a, b, c) {
    return '<div class="datepicker"><div class="datepicker-minutes"><table class=" table-condensed">' + e.headTemplate(a, b) + e.contTemplate + e.footTemplate + '</table></div><div class="datepicker-hours"><table class=" table-condensed">' + e.headTemplate(a, b) + e.contTemplate + e.footTemplate + '</table></div><div class="datepicker-days"><table class=" table-condensed">' + e.headTemplate(a, b) + "<tbody></tbody>" + e.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + e.headTemplate(a, b) + e.contTemplate + e.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + e.headTemplate(a, b) + e.contTemplate + e.footTemplate + '</table></div><a class="button datepicker-close tiny alert right" style="width:auto;">' + c + "</a></div>";
  }, a.fn.fdatepicker.DPGlobal = e;
}(__webpack_provided_window_dot_jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/js/lib/foundation-datepicker.min.ru.js":
/*!***********************************************************!*\
  !*** ./src/assets/js/lib/foundation-datepicker.min.ru.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/**
 * Russian translation for foundation-datepicker
 * Victor Taranenko <darwin@snowdale.com>
 */
;

(function ($) {
  $.fn.fdatepicker.dates['ru'] = {
    days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вск"],
    daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    today: "Сегодня"
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/js/lib/foundation-explicit-pieces.js":
/*!*********************************************************!*\
  !*** ./src/assets/js/lib/foundation-explicit-pieces.js ***!
  \*********************************************************/
/*! exports provided: Foundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation.core */ "./node_modules/foundation-sites/js/foundation.core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Foundation", function() { return foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"]; });

/* harmony import */ var foundation_sites_js_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony import */ var foundation_sites_js_foundation_util_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation.util.box */ "./node_modules/foundation-sites/js/foundation.util.box.js");
/* harmony import */ var foundation_sites_js_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! foundation-sites/js/foundation.util.imageLoader */ "./node_modules/foundation-sites/js/foundation.util.imageLoader.js");
/* harmony import */ var foundation_sites_js_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! foundation-sites/js/foundation.util.keyboard */ "./node_modules/foundation-sites/js/foundation.util.keyboard.js");
/* harmony import */ var foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! foundation-sites/js/foundation.util.mediaQuery */ "./node_modules/foundation-sites/js/foundation.util.mediaQuery.js");
/* harmony import */ var foundation_sites_js_foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! foundation-sites/js/foundation.util.motion */ "./node_modules/foundation-sites/js/foundation.util.motion.js");
/* harmony import */ var foundation_sites_js_foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! foundation-sites/js/foundation.util.nest */ "./node_modules/foundation-sites/js/foundation.util.nest.js");
/* harmony import */ var foundation_sites_js_foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! foundation-sites/js/foundation.util.timer */ "./node_modules/foundation-sites/js/foundation.util.timer.js");
/* harmony import */ var foundation_sites_js_foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! foundation-sites/js/foundation.util.touch */ "./node_modules/foundation-sites/js/foundation.util.touch.js");
/* harmony import */ var foundation_sites_js_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! foundation-sites/js/foundation.util.triggers */ "./node_modules/foundation-sites/js/foundation.util.triggers.js");
/* harmony import */ var foundation_sites_js_foundation_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! foundation-sites/js/foundation.accordion */ "./node_modules/foundation-sites/js/foundation.accordion.js");
/* harmony import */ var foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! foundation-sites/js/foundation.accordionMenu */ "./node_modules/foundation-sites/js/foundation.accordionMenu.js");
/* harmony import */ var foundation_sites_js_foundation_drilldown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! foundation-sites/js/foundation.drilldown */ "./node_modules/foundation-sites/js/foundation.drilldown.js");
/* harmony import */ var foundation_sites_js_foundation_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! foundation-sites/js/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! foundation-sites/js/foundation.dropdownMenu */ "./node_modules/foundation-sites/js/foundation.dropdownMenu.js");
/* harmony import */ var foundation_sites_js_foundation_equalizer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! foundation-sites/js/foundation.equalizer */ "./node_modules/foundation-sites/js/foundation.equalizer.js");
/* harmony import */ var foundation_sites_js_foundation_interchange__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! foundation-sites/js/foundation.interchange */ "./node_modules/foundation-sites/js/foundation.interchange.js");
/* harmony import */ var foundation_sites_js_foundation_magellan__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! foundation-sites/js/foundation.magellan */ "./node_modules/foundation-sites/js/foundation.magellan.js");
/* harmony import */ var foundation_sites_js_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! foundation-sites/js/foundation.offcanvas */ "./node_modules/foundation-sites/js/foundation.offcanvas.js");
/* harmony import */ var foundation_sites_js_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! foundation-sites/js/foundation.responsiveMenu */ "./node_modules/foundation-sites/js/foundation.responsiveMenu.js");
/* harmony import */ var foundation_sites_js_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! foundation-sites/js/foundation.responsiveToggle */ "./node_modules/foundation-sites/js/foundation.responsiveToggle.js");
/* harmony import */ var foundation_sites_js_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! foundation-sites/js/foundation.smoothScroll */ "./node_modules/foundation-sites/js/foundation.smoothScroll.js");
/* harmony import */ var foundation_sites_js_foundation_sticky__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! foundation-sites/js/foundation.sticky */ "./node_modules/foundation-sites/js/foundation.sticky.js");
/* harmony import */ var foundation_sites_js_foundation_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! foundation-sites/js/foundation.tabs */ "./node_modules/foundation-sites/js/foundation.tabs.js");
/* harmony import */ var foundation_sites_js_foundation_toggler__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! foundation-sites/js/foundation.toggler */ "./node_modules/foundation-sites/js/foundation.toggler.js");
/* harmony import */ var foundation_sites_js_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! foundation-sites/js/foundation.responsiveAccordionTabs */ "./node_modules/foundation-sites/js/foundation.responsiveAccordionTabs.js");











 //import { Abide } from 'foundation-sites/js/foundation.abide';









 //import { Orbit } from 'foundation-sites/js/foundation.orbit';


 //import { Reveal } from 'foundation-sites/js/foundation.reveal';
//import { Slider } from 'foundation-sites/js/foundation.slider';




 //import { Tooltip } from 'foundation-sites/js/foundation.tooltip';


foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].addToJquery(jquery__WEBPACK_IMPORTED_MODULE_0___default.a); // Add Foundation Utils to Foundation global namespace for backwards
// compatibility.

foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].rtl = foundation_sites_js_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].GetYoDigits = foundation_sites_js_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].transitionend = foundation_sites_js_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["transitionend"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].RegExpEscape = foundation_sites_js_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["RegExpEscape"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].onLoad = foundation_sites_js_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Box = foundation_sites_js_foundation_util_box__WEBPACK_IMPORTED_MODULE_3__["Box"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].onImagesLoaded = foundation_sites_js_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__["onImagesLoaded"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Keyboard = foundation_sites_js_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__["Keyboard"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].MediaQuery = foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__["MediaQuery"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Motion = foundation_sites_js_foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__["Motion"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Move = foundation_sites_js_foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__["Move"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Nest = foundation_sites_js_foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__["Nest"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Timer = foundation_sites_js_foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__["Timer"]; // Touch and Triggers previously were almost purely sede effect driven,
// so no need to add it to Foundation, just init them.

foundation_sites_js_foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
foundation_sites_js_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"]);

foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__["MediaQuery"]._init(); //Foundation.plugin(Abide, 'Abide');


foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_accordion__WEBPACK_IMPORTED_MODULE_12__["Accordion"], 'Accordion');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_13__["AccordionMenu"], 'AccordionMenu');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_drilldown__WEBPACK_IMPORTED_MODULE_14__["Drilldown"], 'Drilldown');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_dropdown__WEBPACK_IMPORTED_MODULE_15__["Dropdown"], 'Dropdown');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_16__["DropdownMenu"], 'DropdownMenu');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_equalizer__WEBPACK_IMPORTED_MODULE_17__["Equalizer"], 'Equalizer');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_interchange__WEBPACK_IMPORTED_MODULE_18__["Interchange"], 'Interchange');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_magellan__WEBPACK_IMPORTED_MODULE_19__["Magellan"], 'Magellan');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_20__["OffCanvas"], 'OffCanvas'); //Foundation.plugin(Orbit, 'Orbit');

foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_21__["ResponsiveMenu"], 'ResponsiveMenu');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_22__["ResponsiveToggle"], 'ResponsiveToggle'); //Foundation.plugin(Reveal, 'Reveal');
//Foundation.plugin(Slider, 'Slider');

foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_23__["SmoothScroll"], 'SmoothScroll');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_sticky__WEBPACK_IMPORTED_MODULE_24__["Sticky"], 'Sticky');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_tabs__WEBPACK_IMPORTED_MODULE_25__["Tabs"], 'Tabs');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_toggler__WEBPACK_IMPORTED_MODULE_26__["Toggler"], 'Toggler'); //Foundation.plugin(Tooltip, 'Tooltip');

foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_27__["ResponsiveAccordionTabs"], 'ResponsiveAccordionTabs');


/***/ }),

/***/ "./src/assets/js/lib/jquery.form.js":
/*!******************************************!*\
  !*** ./src/assets/js/lib/jquery.form.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
* jQuery Form Plugin; v20140218
* http://jquery.malsup.com/form/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
* https://github.com/malsup/form#copyright-and-license
*/
;
!function (a) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  "use strict";

  function b(b) {
    var c = b.data;
    b.isDefaultPrevented() || (b.preventDefault(), a(b.target).ajaxSubmit(c));
  }

  function c(b) {
    var c = b.target,
        d = a(c);

    if (!d.is("[type=submit],[type=image]")) {
      var e = d.closest("[type=submit]");
      if (0 === e.length) return;
      c = e[0];
    }

    var f = this;
    if (f.clk = c, "image" == c.type) if (void 0 !== b.offsetX) f.clk_x = b.offsetX, f.clk_y = b.offsetY;else if ("function" == typeof a.fn.offset) {
      var g = d.offset();
      f.clk_x = b.pageX - g.left, f.clk_y = b.pageY - g.top;
    } else f.clk_x = b.pageX - c.offsetLeft, f.clk_y = b.pageY - c.offsetTop;
    setTimeout(function () {
      f.clk = f.clk_x = f.clk_y = null;
    }, 100);
  }

  function d() {
    if (a.fn.ajaxSubmit.debug) {
      var b = "[jquery.form] " + Array.prototype.join.call(arguments, "");
      window.console && window.console.log ? window.console.log(b) : window.opera && window.opera.postError && window.opera.postError(b);
    }
  }

  var e = {};
  e.fileapi = void 0 !== a("<input type='file'/>").get(0).files, e.formdata = void 0 !== window.FormData;
  var f = !!a.fn.prop;
  a.fn.attr2 = function () {
    if (!f) return this.attr.apply(this, arguments);
    var a = this.prop.apply(this, arguments);
    return a && a.jquery || "string" == typeof a ? a : this.attr.apply(this, arguments);
  }, a.fn.ajaxSubmit = function (b) {
    function c(c) {
      var d,
          e,
          f = a.param(c, b.traditional).split("&"),
          g = f.length,
          h = [];

      for (d = 0; g > d; d++) {
        f[d] = f[d].replace(/\+/g, " "), e = f[d].split("="), h.push([decodeURIComponent(e[0]), decodeURIComponent(e[1])]);
      }

      return h;
    }

    function g(d) {
      for (var e = new FormData(), f = 0; f < d.length; f++) {
        e.append(d[f].name, d[f].value);
      }

      if (b.extraData) {
        var g = c(b.extraData);

        for (f = 0; f < g.length; f++) {
          g[f] && e.append(g[f][0], g[f][1]);
        }
      }

      b.data = null;
      var h = a.extend(!0, {}, a.ajaxSettings, b, {
        contentType: !1,
        processData: !1,
        cache: !1,
        type: i || "POST"
      });
      b.uploadProgress && (h.xhr = function () {
        var c = a.ajaxSettings.xhr();
        return c.upload && c.upload.addEventListener("progress", function (a) {
          var c = 0,
              d = a.loaded || a.position,
              e = a.total;
          a.lengthComputable && (c = Math.ceil(d / e * 100)), b.uploadProgress(a, d, e, c);
        }, !1), c;
      }), h.data = null;
      var j = h.beforeSend;
      return h.beforeSend = function (a, c) {
        c.data = b.formData ? b.formData : e, j && j.call(this, a, c);
      }, a.ajax(h);
    }

    function h(c) {
      function e(a) {
        var b = null;

        try {
          a.contentWindow && (b = a.contentWindow.document);
        } catch (c) {
          d("cannot get iframe.contentWindow document: " + c);
        }

        if (b) return b;

        try {
          b = a.contentDocument ? a.contentDocument : a.document;
        } catch (c) {
          d("cannot get iframe.contentDocument: " + c), b = a.document;
        }

        return b;
      }

      function g() {
        function b() {
          try {
            var a = e(r).readyState;
            d("state = " + a), a && "uninitialized" == a.toLowerCase() && setTimeout(b, 50);
          } catch (c) {
            d("Server abort: ", c, " (", c.name, ")"), h(A), w && clearTimeout(w), w = void 0;
          }
        }

        var c = l.attr2("target"),
            f = l.attr2("action"),
            g = "multipart/form-data",
            j = l.attr("enctype") || l.attr("encoding") || g;
        x.setAttribute("target", o), (!i || /post/i.test(i)) && x.setAttribute("method", "POST"), f != m.url && x.setAttribute("action", m.url), m.skipEncodingOverride || i && !/post/i.test(i) || l.attr({
          encoding: "multipart/form-data",
          enctype: "multipart/form-data"
        }), m.timeout && (w = setTimeout(function () {
          v = !0, h(z);
        }, m.timeout));
        var k = [];

        try {
          if (m.extraData) for (var n in m.extraData) {
            m.extraData.hasOwnProperty(n) && (a.isPlainObject(m.extraData[n]) && m.extraData[n].hasOwnProperty("name") && m.extraData[n].hasOwnProperty("value") ? k.push(a('<input type="hidden" name="' + m.extraData[n].name + '">').val(m.extraData[n].value).appendTo(x)[0]) : k.push(a('<input type="hidden" name="' + n + '">').val(m.extraData[n]).appendTo(x)[0]));
          }
          m.iframeTarget || q.appendTo("body"), r.attachEvent ? r.attachEvent("onload", h) : r.addEventListener("load", h, !1), setTimeout(b, 15);

          try {
            x.submit();
          } catch (p) {
            var s = document.createElement("form").submit;
            s.apply(x);
          }
        } finally {
          x.setAttribute("action", f), x.setAttribute("enctype", j), c ? x.setAttribute("target", c) : l.removeAttr("target"), a(k).remove();
        }
      }

      function h(b) {
        if (!s.aborted && !F) {
          if (E = e(r), E || (d("cannot access response document"), b = A), b === z && s) return s.abort("timeout"), y.reject(s, "timeout"), void 0;
          if (b == A && s) return s.abort("server abort"), y.reject(s, "error", "server abort"), void 0;

          if (E && E.location.href != m.iframeSrc || v) {
            r.detachEvent ? r.detachEvent("onload", h) : r.removeEventListener("load", h, !1);
            var c,
                f = "success";

            try {
              if (v) throw "timeout";
              var g = "xml" == m.dataType || E.XMLDocument || a.isXMLDoc(E);
              if (d("isXml=" + g), !g && window.opera && (null === E.body || !E.body.innerHTML) && --G) return d("requeing onLoad callback, DOM not available"), setTimeout(h, 250), void 0;
              var i = E.body ? E.body : E.documentElement;
              s.responseText = i ? i.innerHTML : null, s.responseXML = E.XMLDocument ? E.XMLDocument : E, g && (m.dataType = "xml"), s.getResponseHeader = function (a) {
                var b = {
                  "content-type": m.dataType
                };
                return b[a.toLowerCase()];
              }, i && (s.status = Number(i.getAttribute("status")) || s.status, s.statusText = i.getAttribute("statusText") || s.statusText);
              var j = (m.dataType || "").toLowerCase(),
                  k = /(json|script|text)/.test(j);

              if (k || m.textarea) {
                var l = E.getElementsByTagName("textarea")[0];
                if (l) s.responseText = l.value, s.status = Number(l.getAttribute("status")) || s.status, s.statusText = l.getAttribute("statusText") || s.statusText;else if (k) {
                  var o = E.getElementsByTagName("pre")[0],
                      p = E.getElementsByTagName("body")[0];
                  o ? s.responseText = o.textContent ? o.textContent : o.innerText : p && (s.responseText = p.textContent ? p.textContent : p.innerText);
                }
              } else "xml" == j && !s.responseXML && s.responseText && (s.responseXML = H(s.responseText));

              try {
                D = J(s, j, m);
              } catch (t) {
                f = "parsererror", s.error = c = t || f;
              }
            } catch (t) {
              d("error caught: ", t), f = "error", s.error = c = t || f;
            }

            s.aborted && (d("upload aborted"), f = null), s.status && (f = s.status >= 200 && s.status < 300 || 304 === s.status ? "success" : "error"), "success" === f ? (m.success && m.success.call(m.context, D, "success", s), y.resolve(s.responseText, "success", s), n && a.event.trigger("ajaxSuccess", [s, m])) : f && (void 0 === c && (c = s.statusText), m.error && m.error.call(m.context, s, f, c), y.reject(s, "error", c), n && a.event.trigger("ajaxError", [s, m, c])), n && a.event.trigger("ajaxComplete", [s, m]), n && ! --a.active && a.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, s, f), F = !0, m.timeout && clearTimeout(w), setTimeout(function () {
              m.iframeTarget ? q.attr("src", m.iframeSrc) : q.remove(), s.responseXML = null;
            }, 100);
          }
        }
      }

      var j,
          k,
          m,
          n,
          o,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x = l[0],
          y = a.Deferred();
      if (y.abort = function (a) {
        s.abort(a);
      }, c) for (k = 0; k < p.length; k++) {
        j = a(p[k]), f ? j.prop("disabled", !1) : j.removeAttr("disabled");
      }
      if (m = a.extend(!0, {}, a.ajaxSettings, b), m.context = m.context || m, o = "jqFormIO" + new Date().getTime(), m.iframeTarget ? (q = a(m.iframeTarget), u = q.attr2("name"), u ? o = u : q.attr2("name", o)) : (q = a('<iframe name="' + o + '" src="' + m.iframeSrc + '" />'), q.css({
        position: "absolute",
        top: "-1000px",
        left: "-1000px"
      })), r = q[0], s = {
        aborted: 0,
        responseText: null,
        responseXML: null,
        status: 0,
        statusText: "n/a",
        getAllResponseHeaders: function getAllResponseHeaders() {},
        getResponseHeader: function getResponseHeader() {},
        setRequestHeader: function setRequestHeader() {},
        abort: function abort(b) {
          var c = "timeout" === b ? "timeout" : "aborted";
          d("aborting upload... " + c), this.aborted = 1;

          try {
            r.contentWindow.document.execCommand && r.contentWindow.document.execCommand("Stop");
          } catch (e) {}

          q.attr("src", m.iframeSrc), s.error = c, m.error && m.error.call(m.context, s, c, b), n && a.event.trigger("ajaxError", [s, m, c]), m.complete && m.complete.call(m.context, s, c);
        }
      }, n = m.global, n && 0 === a.active++ && a.event.trigger("ajaxStart"), n && a.event.trigger("ajaxSend", [s, m]), m.beforeSend && m.beforeSend.call(m.context, s, m) === !1) return m.global && a.active--, y.reject(), y;
      if (s.aborted) return y.reject(), y;
      t = x.clk, t && (u = t.name, u && !t.disabled && (m.extraData = m.extraData || {}, m.extraData[u] = t.value, "image" == t.type && (m.extraData[u + ".x"] = x.clk_x, m.extraData[u + ".y"] = x.clk_y)));
      var z = 1,
          A = 2,
          B = a("meta[name=csrf-token]").attr("content"),
          C = a("meta[name=csrf-param]").attr("content");
      C && B && (m.extraData = m.extraData || {}, m.extraData[C] = B), m.forceSync ? g() : setTimeout(g, 10);

      var D,
          E,
          F,
          G = 50,
          H = a.parseXML || function (a, b) {
        return window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)) : b = new DOMParser().parseFromString(a, "text/xml"), b && b.documentElement && "parsererror" != b.documentElement.nodeName ? b : null;
      },
          I = a.parseJSON || function (a) {
        return window.eval("(" + a + ")");
      },
          J = function J(b, c, d) {
        var e = b.getResponseHeader("content-type") || "",
            f = "xml" === c || !c && e.indexOf("xml") >= 0,
            g = f ? b.responseXML : b.responseText;
        return f && "parsererror" === g.documentElement.nodeName && a.error && a.error("parsererror"), d && d.dataFilter && (g = d.dataFilter(g, c)), "string" == typeof g && ("json" === c || !c && e.indexOf("json") >= 0 ? g = I(g) : ("script" === c || !c && e.indexOf("javascript") >= 0) && a.globalEval(g)), g;
      };

      return y;
    }

    if (!this.length) return d("ajaxSubmit: skipping submit process - no element selected"), this;
    var i,
        j,
        k,
        l = this;
    "function" == typeof b ? b = {
      success: b
    } : void 0 === b && (b = {}), i = b.type || this.attr2("method"), j = b.url || this.attr2("action"), k = "string" == typeof j ? a.trim(j) : "", k = k || window.location.href || "", k && (k = (k.match(/^([^#]+)/) || [])[1]), b = a.extend(!0, {
      url: k,
      success: a.ajaxSettings.success,
      type: i || a.ajaxSettings.type,
      iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
    }, b);
    var m = {};
    if (this.trigger("form-pre-serialize", [this, b, m]), m.veto) return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
    if (b.beforeSerialize && b.beforeSerialize(this, b) === !1) return d("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
    var n = b.traditional;
    void 0 === n && (n = a.ajaxSettings.traditional);
    var o,
        p = [],
        q = this.formToArray(b.semantic, p);
    if (b.data && (b.extraData = b.data, o = a.param(b.data, n)), b.beforeSubmit && b.beforeSubmit(q, this, b) === !1) return d("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
    if (this.trigger("form-submit-validate", [q, this, b, m]), m.veto) return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
    var r = a.param(q, n);
    o && (r = r ? r + "&" + o : o), "GET" == b.type.toUpperCase() ? (b.url += (b.url.indexOf("?") >= 0 ? "&" : "?") + r, b.data = null) : b.data = r;
    var s = [];

    if (b.resetForm && s.push(function () {
      l.resetForm();
    }), b.clearForm && s.push(function () {
      l.clearForm(b.includeHidden);
    }), !b.dataType && b.target) {
      var t = b.success || function () {};

      s.push(function (c) {
        var d = b.replaceTarget ? "replaceWith" : "html";
        a(b.target)[d](c).each(t, arguments);
      });
    } else b.success && s.push(b.success);

    if (b.success = function (a, c, d) {
      for (var e = b.context || this, f = 0, g = s.length; g > f; f++) {
        s[f].apply(e, [a, c, d || l, l]);
      }
    }, b.error) {
      var u = b.error;

      b.error = function (a, c, d) {
        var e = b.context || this;
        u.apply(e, [a, c, d, l]);
      };
    }

    if (b.complete) {
      var v = b.complete;

      b.complete = function (a, c) {
        var d = b.context || this;
        v.apply(d, [a, c, l]);
      };
    }

    var w = a("input[type=file]:enabled", this).filter(function () {
      return "" !== a(this).val();
    }),
        x = w.length > 0,
        y = "multipart/form-data",
        z = l.attr("enctype") == y || l.attr("encoding") == y,
        A = e.fileapi && e.formdata;
    d("fileAPI :" + A);
    var B,
        C = (x || z) && !A;
    b.iframe !== !1 && (b.iframe || C) ? b.closeKeepAlive ? a.get(b.closeKeepAlive, function () {
      B = h(q);
    }) : B = h(q) : B = (x || z) && A ? g(q) : a.ajax(b), l.removeData("jqxhr").data("jqxhr", B);

    for (var D = 0; D < p.length; D++) {
      p[D] = null;
    }

    return this.trigger("form-submit-notify", [this, b]), this;
  }, a.fn.ajaxForm = function (e) {
    if (e = e || {}, e.delegation = e.delegation && a.isFunction(a.fn.on), !e.delegation && 0 === this.length) {
      var f = {
        s: this.selector,
        c: this.context
      };
      return !a.isReady && f.s ? (d("DOM not ready, queuing ajaxForm"), a(function () {
        a(f.s, f.c).ajaxForm(e);
      }), this) : (d("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)")), this);
    }

    return e.delegation ? (a(document).off("submit.form-plugin", this.selector, b).off("click.form-plugin", this.selector, c).on("submit.form-plugin", this.selector, e, b).on("click.form-plugin", this.selector, e, c), this) : this.ajaxFormUnbind().bind("submit.form-plugin", e, b).bind("click.form-plugin", e, c);
  }, a.fn.ajaxFormUnbind = function () {
    return this.unbind("submit.form-plugin click.form-plugin");
  }, a.fn.formToArray = function (b, c) {
    var d = [];
    if (0 === this.length) return d;
    var f,
        g = this[0],
        h = this.attr("id"),
        i = b ? g.getElementsByTagName("*") : g.elements;
    if (i && !/MSIE 8/.test(navigator.userAgent) && (i = a(i).get()), h && (f = a(":input[form=" + h + "]").get(), f.length && (i = (i || []).concat(f))), !i || !i.length) return d;
    var j, k, l, m, n, o, p;

    for (j = 0, o = i.length; o > j; j++) {
      if (n = i[j], l = n.name, l && !n.disabled) if (b && g.clk && "image" == n.type) g.clk == n && (d.push({
        name: l,
        value: a(n).val(),
        type: n.type
      }), d.push({
        name: l + ".x",
        value: g.clk_x
      }, {
        name: l + ".y",
        value: g.clk_y
      }));else if (m = a.fieldValue(n, !0), m && m.constructor == Array) for (c && c.push(n), k = 0, p = m.length; p > k; k++) {
        d.push({
          name: l,
          value: m[k]
        });
      } else if (e.fileapi && "file" == n.type) {
        c && c.push(n);
        var q = n.files;
        if (q.length) for (k = 0; k < q.length; k++) {
          d.push({
            name: l,
            value: q[k],
            type: n.type
          });
        } else d.push({
          name: l,
          value: "",
          type: n.type
        });
      } else null !== m && "undefined" != typeof m && (c && c.push(n), d.push({
        name: l,
        value: m,
        type: n.type,
        required: n.required
      }));
    }

    if (!b && g.clk) {
      var r = a(g.clk),
          s = r[0];
      l = s.name, l && !s.disabled && "image" == s.type && (d.push({
        name: l,
        value: r.val()
      }), d.push({
        name: l + ".x",
        value: g.clk_x
      }, {
        name: l + ".y",
        value: g.clk_y
      }));
    }

    return d;
  }, a.fn.formSerialize = function (b) {
    return a.param(this.formToArray(b));
  }, a.fn.fieldSerialize = function (b) {
    var c = [];
    return this.each(function () {
      var d = this.name;

      if (d) {
        var e = a.fieldValue(this, b);
        if (e && e.constructor == Array) for (var f = 0, g = e.length; g > f; f++) {
          c.push({
            name: d,
            value: e[f]
          });
        } else null !== e && "undefined" != typeof e && c.push({
          name: this.name,
          value: e
        });
      }
    }), a.param(c);
  }, a.fn.fieldValue = function (b) {
    for (var c = [], d = 0, e = this.length; e > d; d++) {
      var f = this[d],
          g = a.fieldValue(f, b);
      null === g || "undefined" == typeof g || g.constructor == Array && !g.length || (g.constructor == Array ? a.merge(c, g) : c.push(g));
    }

    return c;
  }, a.fieldValue = function (b, c) {
    var d = b.name,
        e = b.type,
        f = b.tagName.toLowerCase();
    if (void 0 === c && (c = !0), c && (!d || b.disabled || "reset" == e || "button" == e || ("checkbox" == e || "radio" == e) && !b.checked || ("submit" == e || "image" == e) && b.form && b.form.clk != b || "select" == f && -1 == b.selectedIndex)) return null;

    if ("select" == f) {
      var g = b.selectedIndex;
      if (0 > g) return null;

      for (var h = [], i = b.options, j = "select-one" == e, k = j ? g + 1 : i.length, l = j ? g : 0; k > l; l++) {
        var m = i[l];

        if (m.selected) {
          var n = m.value;
          if (n || (n = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), j) return n;
          h.push(n);
        }
      }

      return h;
    }

    return a(b).val();
  }, a.fn.clearForm = function (b) {
    return this.each(function () {
      a("input,select,textarea", this).clearFields(b);
    });
  }, a.fn.clearFields = a.fn.clearInputs = function (b) {
    var c = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
    return this.each(function () {
      var d = this.type,
          e = this.tagName.toLowerCase();
      c.test(d) || "textarea" == e ? this.value = "" : "checkbox" == d || "radio" == d ? this.checked = !1 : "select" == e ? this.selectedIndex = -1 : "file" == d ? /MSIE/.test(navigator.userAgent) ? a(this).replaceWith(a(this).clone(!0)) : a(this).val("") : b && (b === !0 && /hidden/.test(d) || "string" == typeof b && a(this).is(b)) && (this.value = "");
    });
  }, a.fn.resetForm = function () {
    return this.each(function () {
      ("function" == typeof this.reset || "object" == _typeof(this.reset) && !this.reset.nodeType) && this.reset();
    });
  }, a.fn.enable = function (a) {
    return void 0 === a && (a = !0), this.each(function () {
      this.disabled = !a;
    });
  }, a.fn.selected = function (b) {
    return void 0 === b && (b = !0), this.each(function () {
      var c = this.type;
      if ("checkbox" == c || "radio" == c) this.checked = b;else if ("option" == this.tagName.toLowerCase()) {
        var d = a(this).parent("select");
        b && d[0] && "select-one" == d[0].type && d.find("option").selected(!1), this.selected = b;
      }
    });
  }, a.fn.ajaxSubmit.debug = !1;
});

/***/ }),

/***/ "./src/assets/js/lib/jquery.inputmask.min.js":
/*!***************************************************!*\
  !*** ./src/assets/js/lib/jquery.inputmask.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/*!
 * dist/jquery.inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2020 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.6-beta.12
 */
!function webpackUniversalModuleDefinition(root, factory) {
  if ("object" == ( false ? undefined : _typeof2(exports)) && "object" == ( false ? undefined : _typeof2(module))) module.exports = factory(__webpack_require__(/*! jquery */ "jquery"));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
}(window, function (__WEBPACK_EXTERNAL_MODULE__8__) {
  return modules = [function (module) {
    module.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17,"KEY_229":229}');
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0, __webpack_require__(16), __webpack_require__(17);

    var _mask = __webpack_require__(9),
        _inputmask = _interopRequireDefault(__webpack_require__(11)),
        _window = _interopRequireDefault(__webpack_require__(12)),
        _maskLexer = __webpack_require__(18),
        _validationTests = __webpack_require__(3),
        _positioning = __webpack_require__(2),
        _validation = __webpack_require__(4),
        _inputHandling = __webpack_require__(5),
        _eventruler = __webpack_require__(10),
        _definitions = _interopRequireDefault(__webpack_require__(19)),
        _defaults = _interopRequireDefault(__webpack_require__(20));

    function _typeof(obj) {
      return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
        return _typeof2(obj);
      } : function _typeof(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      }, _typeof(obj);
    }

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var document = _window.default.document,
        dataKey = "_inputmask_opts";

    function Inputmask(alias, options, internal) {
      if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
      this.dependencyLib = _inputmask.default, this.el = void 0, this.events = {}, this.maskset = void 0, !0 !== internal && ("[object Object]" === Object.prototype.toString.call(alias) ? options = alias : (options = options || {}, alias && (options.alias = alias)), this.opts = _inputmask.default.extend(!0, {}, this.defaults, options), this.noMasksCache = options && void 0 !== options.definitions, this.userOptions = options || {}, resolveAlias(this.opts.alias, options, this.opts)), this.refreshValue = !1, this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.originalPlaceholder = void 0, this.isComposing = !1;
    }

    function resolveAlias(aliasStr, options, opts) {
      var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
      return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts), _inputmask.default.extend(!0, opts, aliasDefinition), _inputmask.default.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), !1);
    }

    function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
      function importOption(option, optionData) {
        var attrOption = "" === dataAttribute ? option : dataAttribute + "-" + option;
        optionData = void 0 !== optionData ? optionData : npt.getAttribute(attrOption), null !== optionData && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = _window.default[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), userOptions[option] = optionData);
      }

      if (!0 === opts.importDataAttributes) {
        var attrOptions = npt.getAttribute(dataAttribute),
            option,
            dataoptions,
            optionData,
            p;
        if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(/'/g, '"'), dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) for (p in optionData = void 0, dataoptions) {
          if ("alias" === p.toLowerCase()) {
            optionData = dataoptions[p];
            break;
          }
        }

        for (option in importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts), opts) {
          if (dataoptions) for (p in optionData = void 0, dataoptions) {
            if (p.toLowerCase() === option.toLowerCase()) {
              optionData = dataoptions[p];
              break;
            }
          }
          importOption(option, optionData);
        }
      }

      return _inputmask.default.extend(!0, opts, userOptions), "rtl" !== npt.dir && !opts.rightAlign || (npt.style.textAlign = "right"), "rtl" !== npt.dir && !opts.numericInput || (npt.dir = "ltr", npt.removeAttribute("dir"), opts.isRTL = !0), Object.keys(userOptions).length;
    }

    Inputmask.prototype = {
      dataAttribute: "data-inputmask",
      defaults: _defaults.default,
      definitions: _definitions.default,
      aliases: {},
      masksCache: {},

      get isRTL() {
        return this.opts.isRTL || this.opts.numericInput;
      },

      mask: function mask(elems) {
        var that = this;
        return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : Array.isArray(elems) ? elems : Array.from(elems), elems.forEach(function (el, ndx) {
          var scopedOpts = _inputmask.default.extend(!0, {}, that.opts);

          if (importAttributeOptions(el, scopedOpts, _inputmask.default.extend(!0, {}, that.userOptions), that.dataAttribute)) {
            var maskset = (0, _maskLexer.generateMaskSet)(scopedOpts, that.noMasksCache);
            void 0 !== maskset && (void 0 !== el.inputmask && (el.inputmask.opts.autoUnmask = !0, el.inputmask.remove()), el.inputmask = new Inputmask(void 0, void 0, !0), el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = _inputmask.default.extend(!0, {}, that.userOptions), el.inputmask.el = el, el.inputmask.$el = (0, _inputmask.default)(el), el.inputmask.maskset = maskset, _inputmask.default.data(el, dataKey, that.userOptions), _mask.mask.call(el.inputmask));
          }
        }), elems && elems[0] && elems[0].inputmask || this;
      },
      option: function option(options, noremask) {
        return "string" == typeof options ? this.opts[options] : "object" === _typeof(options) ? (_inputmask.default.extend(this.userOptions, options), this.el && !0 !== noremask && this.mask(this.el), this) : void 0;
      },
      unmaskedvalue: function unmaskedvalue(value) {
        if (this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), void 0 === this.el || void 0 !== value) {
          var valueBuffer = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, value, this.opts) || value).split("");
          _inputHandling.checkVal.call(this, void 0, !1, !1, valueBuffer), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, _positioning.getBuffer.call(this), 0, this.opts);
        }

        return _inputHandling.unmaskedvalue.call(this, this.el);
      },
      remove: function remove() {
        if (this.el) {
          _inputmask.default.data(this.el, dataKey, null);

          var cv = this.opts.autoUnmask ? (0, _inputHandling.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask),
              valueProperty;
          cv !== _positioning.getBufferTemplate.call(this).join("") ? this._valueSet(cv, this.opts.autoUnmask) : this._valueSet(""), _eventruler.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value"), valueProperty && this.__valueGet && Object.defineProperty(this.el, "value", {
            get: this.__valueGet,
            set: this.__valueSet,
            configurable: !0
          })) : document.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
        }

        return this.el;
      },
      getemptymask: function getemptymask() {
        return this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), _positioning.getBufferTemplate.call(this).join("");
      },
      hasMaskedValue: function hasMaskedValue() {
        return !this.opts.autoUnmask;
      },
      isComplete: function isComplete() {
        return this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), _validation.isComplete.call(this, _positioning.getBuffer.call(this));
      },
      getmetadata: function getmetadata() {
        if (this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), Array.isArray(this.maskset.metadata)) {
          var maskTarget = _validationTests.getMaskTemplate.call(this, !0, 0, !1).join("");

          return this.maskset.metadata.forEach(function (mtdt) {
            return mtdt.mask !== maskTarget || (maskTarget = mtdt, !1);
          }), maskTarget;
        }

        return this.maskset.metadata;
      },
      isValid: function isValid(value) {
        if (this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), value) {
          var valueBuffer = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, value, this.opts) || value).split("");

          _inputHandling.checkVal.call(this, void 0, !0, !1, valueBuffer);
        } else value = this.isRTL ? _positioning.getBuffer.call(this).slice().reverse().join("") : _positioning.getBuffer.call(this).join("");

        for (var buffer = _positioning.getBuffer.call(this), rl = _positioning.determineLastRequiredPosition.call(this), lmib = buffer.length - 1; rl < lmib && !_positioning.isMask.call(this, lmib); lmib--) {
          ;
        }

        return buffer.splice(rl, lmib + 1 - rl), _validation.isComplete.call(this, buffer) && value === (this.isRTL ? _positioning.getBuffer.call(this).slice().reverse().join("") : _positioning.getBuffer.call(this).join(""));
      },
      format: function format(value, metadata) {
        this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
        var valueBuffer = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, value, this.opts) || value).split("");

        _inputHandling.checkVal.call(this, void 0, !0, !1, valueBuffer);

        var formattedValue = this.isRTL ? _positioning.getBuffer.call(this).slice().reverse().join("") : _positioning.getBuffer.call(this).join("");
        return metadata ? {
          value: formattedValue,
          metadata: this.getmetadata()
        } : formattedValue;
      },
      setValue: function setValue(value) {
        this.el && (0, _inputmask.default)(this.el).trigger("setvalue", [value]);
      },
      analyseMask: _maskLexer.analyseMask
    }, Inputmask.extendDefaults = function (options) {
      _inputmask.default.extend(!0, Inputmask.prototype.defaults, options);
    }, Inputmask.extendDefinitions = function (definition) {
      _inputmask.default.extend(!0, Inputmask.prototype.definitions, definition);
    }, Inputmask.extendAliases = function (alias) {
      _inputmask.default.extend(!0, Inputmask.prototype.aliases, alias);
    }, Inputmask.format = function (value, options, metadata) {
      return Inputmask(options).format(value, metadata);
    }, Inputmask.unmask = function (value, options) {
      return Inputmask(options).unmaskedvalue(value);
    }, Inputmask.isValid = function (value, options) {
      return Inputmask(options).isValid(value);
    }, Inputmask.remove = function (elems) {
      "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, elems.forEach(function (el) {
        el.inputmask && el.inputmask.remove();
      });
    }, Inputmask.setValue = function (elems, value) {
      "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, elems.forEach(function (el) {
        el.inputmask ? el.inputmask.setValue(value) : (0, _inputmask.default)(el).trigger("setvalue", [value]);
      });
    }, Inputmask.dependencyLib = _inputmask.default, _window.default.Inputmask = Inputmask;
    var _default = Inputmask;
    exports.default = _default;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.caret = caret, exports.determineLastRequiredPosition = determineLastRequiredPosition, exports.determineNewCaretPosition = determineNewCaretPosition, exports.getBuffer = getBuffer, exports.getBufferTemplate = getBufferTemplate, exports.getLastValidPosition = getLastValidPosition, exports.isMask = isMask, exports.resetMaskSet = resetMaskSet, exports.seekNext = seekNext, exports.seekPrevious = seekPrevious, exports.translatePosition = translatePosition;

    var _validationTests = __webpack_require__(3),
        _validation = __webpack_require__(4),
        _mask = __webpack_require__(9);

    function caret(input, begin, end, notranslate, isDelete) {
      var inputmask = this,
          opts = this.opts,
          range;
      if (void 0 === begin) return "selectionStart" in input && "selectionEnd" in input ? (begin = input.selectionStart, end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0), range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(), begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length), end = begin + range.text.length), {
        begin: notranslate ? begin : translatePosition.call(this, begin),
        end: notranslate ? end : translatePosition.call(this, end)
      };

      if (Array.isArray(begin) && (end = this.isRTL ? begin[0] : begin[1], begin = this.isRTL ? begin[1] : begin[0]), void 0 !== begin.begin && (end = this.isRTL ? begin.begin : begin.end, begin = this.isRTL ? begin.end : begin.begin), "number" == typeof begin) {
        begin = notranslate ? begin : translatePosition.call(this, begin), end = notranslate ? end : translatePosition.call(this, end), end = "number" == typeof end ? end : begin;
        var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
        if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, input.inputmask.caretPos = {
          begin: begin,
          end: end
        }, opts.insertModeVisual && !1 === opts.insertMode && begin === end && (isDelete || end++), input === (input.inputmask.shadowRoot || document).activeElement) if ("setSelectionRange" in input) input.setSelectionRange(begin, end);else if (window.getSelection) {
          if (range = document.createRange(), void 0 === input.firstChild || null === input.firstChild) {
            var textNode = document.createTextNode("");
            input.appendChild(textNode);
          }

          range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), range.collapse(!0);
          var sel = window.getSelection();
          sel.removeAllRanges(), sel.addRange(range);
        } else input.createTextRange && (range = input.createTextRange(), range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), range.select());
      }
    }

    function determineLastRequiredPosition(returnDefinition) {
      var inputmask = this,
          maskset = this.maskset,
          $ = this.dependencyLib,
          buffer = _validationTests.getMaskTemplate.call(this, !0, getLastValidPosition.call(this), !0, !0),
          bl = buffer.length,
          pos,
          lvp = getLastValidPosition.call(this),
          positions = {},
          lvTest = maskset.validPositions[lvp],
          ndxIntlzr = void 0 !== lvTest ? lvTest.locator.slice() : void 0,
          testPos;

      for (pos = lvp + 1; pos < buffer.length; pos++) {
        testPos = _validationTests.getTestTemplate.call(this, pos, ndxIntlzr, pos - 1), ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
      }

      var lvTestAlt = lvTest && void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation] : void 0;

      for (pos = bl - 1; lvp < pos && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && 1 != testPos.match.static || !0 === testPos.match.static && testPos.locator[lvTest.alternation] && _validation.checkAlternationMatch.call(this, testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== _validationTests.getTests.call(this, pos)[0].def)) && buffer[pos] === _validationTests.getPlaceholder.call(this, pos, testPos.match)); pos--) {
        bl--;
      }

      return returnDefinition ? {
        l: bl,
        def: positions[bl] ? positions[bl].match : void 0
      } : bl;
    }

    function determineNewCaretPosition(selectedCaret, tabbed) {
      var inputmask = this,
          maskset = this.maskset,
          opts = this.opts;

      function doRadixFocus(clickPos) {
        if ("" !== opts.radixPoint && 0 !== opts.digits) {
          var vps = maskset.validPositions;

          if (void 0 === vps[clickPos] || vps[clickPos].input === _validationTests.getPlaceholder.call(inputmask, clickPos)) {
            if (clickPos < seekNext.call(inputmask, -1)) return !0;
            var radixPos = getBuffer.call(inputmask).indexOf(opts.radixPoint);

            if (-1 !== radixPos) {
              for (var vp in vps) {
                if (vps[vp] && radixPos < vp && vps[vp].input !== _validationTests.getPlaceholder.call(inputmask, vp)) return !1;
              }

              return !0;
            }
          }
        }

        return !1;
      }

      if (tabbed && (inputmask.isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), selectedCaret.begin === selectedCaret.end) {
        switch (opts.positionCaretOnClick) {
          case "none":
            break;

          case "select":
            selectedCaret = {
              begin: 0,
              end: getBuffer.call(inputmask).length
            };
            break;

          case "ignore":
            selectedCaret.end = selectedCaret.begin = seekNext.call(inputmask, getLastValidPosition.call(inputmask));
            break;

          case "radixFocus":
            if (doRadixFocus(selectedCaret.begin)) {
              var radixPos = getBuffer.call(inputmask).join("").indexOf(opts.radixPoint);
              selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext.call(inputmask, radixPos) : radixPos;
              break;
            }

          default:
            var clickPosition = selectedCaret.begin,
                lvclickPosition = getLastValidPosition.call(inputmask, clickPosition, !0),
                lastPosition = seekNext.call(inputmask, -1 !== lvclickPosition || isMask.call(inputmask, 0) ? lvclickPosition : -1);
            if (clickPosition <= lastPosition) selectedCaret.end = selectedCaret.begin = isMask.call(inputmask, clickPosition, !1, !0) ? clickPosition : seekNext.call(inputmask, clickPosition);else {
              var lvp = maskset.validPositions[lvclickPosition],
                  tt = _validationTests.getTestTemplate.call(inputmask, lastPosition, lvp ? lvp.match.locator : void 0, lvp),
                  placeholder = _validationTests.getPlaceholder.call(inputmask, lastPosition, tt.match);

              if ("" !== placeholder && getBuffer.call(inputmask)[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask.call(inputmask, lastPosition, opts.keepStatic, !0) && tt.match.def === placeholder) {
                var newPos = seekNext.call(inputmask, lastPosition);
                (newPos <= clickPosition || clickPosition === lastPosition) && (lastPosition = newPos);
              }

              selectedCaret.end = selectedCaret.begin = lastPosition;
            }
        }

        return selectedCaret;
      }
    }

    function getBuffer(noCache) {
      var inputmask = this,
          maskset = this.maskset;
      return void 0 !== maskset.buffer && !0 !== noCache || (maskset.buffer = _validationTests.getMaskTemplate.call(this, !0, getLastValidPosition.call(this), !0), void 0 === maskset._buffer && (maskset._buffer = maskset.buffer.slice())), maskset.buffer;
    }

    function getBufferTemplate() {
      var inputmask = this,
          maskset = this.maskset;
      return void 0 === maskset._buffer && (maskset._buffer = _validationTests.getMaskTemplate.call(this, !1, 1), void 0 === maskset.buffer && (maskset.buffer = maskset._buffer.slice())), maskset._buffer;
    }

    function getLastValidPosition(closestTo, strict, validPositions) {
      var maskset = this.maskset,
          before = -1,
          after = -1,
          valids = validPositions || maskset.validPositions;

      for (var posNdx in void 0 === closestTo && (closestTo = -1), valids) {
        var psNdx = parseInt(posNdx);
        valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), closestTo <= psNdx && (after = psNdx));
      }

      return -1 === before || before == closestTo ? after : -1 == after ? before : closestTo - before < after - closestTo ? before : after;
    }

    function isMask(pos, strict, fuzzy) {
      var inputmask = this,
          maskset = this.maskset,
          test = _validationTests.getTestTemplate.call(this, pos).match;

      if ("" === test.def && (test = _validationTests.getTest.call(this, pos).match), !0 !== test.static) return test.fn;
      if (!0 === fuzzy && void 0 !== maskset.validPositions[pos] && !0 !== maskset.validPositions[pos].generatedInput) return !0;

      if (!0 !== strict && -1 < pos) {
        if (fuzzy) {
          var tests = _validationTests.getTests.call(this, pos);

          return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
        }

        var testTemplate = _validationTests.determineTestTemplate.call(this, pos, _validationTests.getTests.call(this, pos)),
            testPlaceHolder = _validationTests.getPlaceholder.call(this, pos, testTemplate.match);

        return testTemplate.match.def !== testPlaceHolder;
      }

      return !1;
    }

    function resetMaskSet(soft) {
      var maskset = this.maskset;
      maskset.buffer = void 0, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);
    }

    function seekNext(pos, newBlock, fuzzy) {
      var inputmask = this;
      void 0 === fuzzy && (fuzzy = !0);

      for (var position = pos + 1; "" !== _validationTests.getTest.call(this, position).match.def && (!0 === newBlock && (!0 !== _validationTests.getTest.call(this, position).match.newBlockMarker || !isMask.call(this, position, void 0, !0)) || !0 !== newBlock && !isMask.call(this, position, void 0, fuzzy));) {
        position++;
      }

      return position;
    }

    function seekPrevious(pos, newBlock) {
      var inputmask = this,
          position = pos - 1;
      if (pos <= 0) return 0;

      for (; 0 < position && (!0 === newBlock && (!0 !== _validationTests.getTest.call(this, position).match.newBlockMarker || !isMask.call(this, position, void 0, !0)) || !0 !== newBlock && !isMask.call(this, position, void 0, !0));) {
        position--;
      }

      return position;
    }

    function translatePosition(pos) {
      var inputmask = this,
          opts = this.opts,
          el = this.el;
      return !this.isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || !el || (pos = this._valueGet().length - pos), pos;
    }
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function getLocator(tst, align) {
      var locator = (null != tst.alternation ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
      if ("" !== locator) for (; locator.length < align;) {
        locator += "0";
      }
      return locator;
    }

    function getDecisionTaker(tst) {
      var decisionTaker = tst.locator[tst.alternation];
      return "string" == typeof decisionTaker && 0 < decisionTaker.length && (decisionTaker = decisionTaker.split(",")[0]), void 0 !== decisionTaker ? decisionTaker.toString() : "";
    }

    function getPlaceholder(pos, test, returnPL) {
      var inputmask = this,
          opts = this.opts,
          maskset = this.maskset;
      if (test = test || getTest.call(this, pos).match, void 0 !== test.placeholder || !0 === returnPL) return "function" == typeof test.placeholder ? test.placeholder(opts) : test.placeholder;
      if (!0 !== test.static) return opts.placeholder.charAt(pos % opts.placeholder.length);

      if (-1 < pos && void 0 === maskset.validPositions[pos]) {
        var tests = getTests.call(this, pos),
            staticAlternations = [],
            prevTest;
        if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) {
          if ("" !== tests[i].match.def && !0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (!0 === tests[i].match.static || void 0 === prevTest || !1 !== tests[i].match.fn.test(prevTest.match.def, maskset, pos, !0, opts)) && (staticAlternations.push(tests[i]), !0 === tests[i].match.static && (prevTest = tests[i]), 1 < staticAlternations.length && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
        }
      }

      return test.def;
    }

    function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
      var inputmask = this,
          opts = this.opts,
          maskset = this.maskset,
          greedy = opts.greedy;
      clearOptionalTail && (opts.greedy = !1), minimalPos = minimalPos || 0;
      var maskTemplate = [],
          ndxIntlzr,
          pos = 0,
          test,
          testPos,
          jitRenderStatic;

      do {
        if (!0 === baseOnInput && maskset.validPositions[pos]) testPos = clearOptionalTail && !0 === maskset.validPositions[pos].match.optionality && void 0 === maskset.validPositions[pos + 1] && (!0 === maskset.validPositions[pos].generatedInput || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && 0 < pos) ? determineTestTemplate.call(this, pos, getTests.call(this, pos, ndxIntlzr, pos - 1)) : maskset.validPositions[pos], test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder.call(this, pos, test));else {
          testPos = getTestTemplate.call(this, pos, ndxIntlzr, pos - 1), test = testPos.match, ndxIntlzr = testPos.locator.slice();
          var jitMasking = !0 !== noJit && (!1 !== opts.jitMasking ? opts.jitMasking : test.jit);
          jitRenderStatic = jitRenderStatic && test.static && test.def !== opts.groupSeparator && null === test.fn || maskset.validPositions[pos - 1] && test.static && test.def !== opts.groupSeparator && null === test.fn, jitRenderStatic || !1 === jitMasking || void 0 === jitMasking || "number" == typeof jitMasking && isFinite(jitMasking) && pos < jitMasking ? maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder.call(this, pos, test)) : jitRenderStatic = !1;
        }
        pos++;
      } while ((void 0 === this.maxLength || pos < this.maxLength) && (!0 !== test.static || "" !== test.def) || pos < minimalPos);

      return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), !1 === includeMode && void 0 !== maskset.maskLength || (maskset.maskLength = pos - 1), opts.greedy = greedy, maskTemplate;
    }

    function getTestTemplate(pos, ndxIntlzr, tstPs) {
      var inputmask = this,
          maskset = this.maskset;
      return maskset.validPositions[pos] || determineTestTemplate.call(this, pos, getTests.call(this, pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
    }

    function determineTestTemplate(pos, tests) {
      var inputmask = this,
          opts = this.opts;
      pos = 0 < pos ? pos - 1 : 0;

      for (var altTest = getTest.call(this, pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch, ndx = 0; ndx < tests.length; ndx++) {
        var tst = tests[ndx];
        tstLocator = getLocator(tst, targetLocator.length);
        var distance = Math.abs(tstLocator - targetLocator);
        (void 0 === closest || "" !== tstLocator && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && "master" === bestMatch.match.newBlockMarker && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) && (closest = distance, bestMatch = tst);
      }

      return bestMatch;
    }

    function getTest(pos, tests) {
      var inputmask = this,
          maskset = this.maskset;
      return maskset.validPositions[pos] ? maskset.validPositions[pos] : (tests || getTests.call(this, pos))[0];
    }

    function getTests(pos, ndxIntlzr, tstPs) {
      var inputmask = this,
          $ = this.dependencyLib,
          maskset = this.maskset,
          opts = this.opts,
          el = this.el,
          maskTokens = maskset.maskToken,
          testPos = ndxIntlzr ? tstPs : 0,
          ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
          matches = [],
          insertStop = !1,
          latestMatch,
          cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

      function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
        function handleMatch(match, loopNdx, quantifierRecurse) {
          function isFirstMatch(latestMatch, tokenGroup) {
            var firstMatch = 0 === tokenGroup.matches.indexOf(latestMatch);
            return firstMatch || tokenGroup.matches.every(function (match, ndx) {
              return !0 === match.isQuantifier ? firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]) : Object.prototype.hasOwnProperty.call(match, "matches") && (firstMatch = isFirstMatch(latestMatch, match)), !firstMatch;
            }), firstMatch;
          }

          function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
            var bestMatch, indexPos;

            if ((maskset.tests[pos] || maskset.validPositions[pos]) && (maskset.tests[pos] || [maskset.validPositions[pos]]).every(function (lmnt, ndx) {
              if (lmnt.mloc[alternateNdx]) return bestMatch = lmnt, !1;
              var alternation = void 0 !== targetAlternation ? targetAlternation : lmnt.alternation,
                  ndxPos = void 0 !== lmnt.locator[alternation] ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
              return (void 0 === indexPos || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, indexPos = ndxPos), !0;
            }), bestMatch) {
              var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation],
                  locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
              return locator.slice((void 0 !== targetAlternation ? targetAlternation : bestMatch.alternation) + 1);
            }

            return void 0 !== targetAlternation ? resolveNdxInitializer(pos, alternateNdx) : void 0;
          }

          function isSubsetOf(source, target) {
            function expand(pattern) {
              for (var expanded = [], start = -1, end, i = 0, l = pattern.length; i < l; i++) {
                if ("-" === pattern.charAt(i)) for (end = pattern.charCodeAt(i + 1); ++start < end;) {
                  expanded.push(String.fromCharCode(start));
                } else start = pattern.charCodeAt(i), expanded.push(pattern.charAt(i));
              }

              return expanded.join("");
            }

            return source.match.def === target.match.nativeDef || !(!(opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) || !0 === source.match.static || !0 === target.match.static) && -1 !== expand(target.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g, "")));
          }

          function staticCanMatchDefinition(source, target) {
            return !0 === source.match.static && !0 !== target.match.static && target.match.fn.test(source.match.def, maskset, pos, !1, opts, !1);
          }

          function setMergeLocators(targetMatch, altMatch) {
            var alternationNdx = targetMatch.alternation,
                shouldMerge = void 0 === altMatch || alternationNdx === altMatch.alternation && -1 === targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);
            if (!shouldMerge && alternationNdx > altMatch.alternation) for (var i = altMatch.alternation; i < alternationNdx; i++) {
              if (targetMatch.locator[i] !== altMatch.locator[i]) {
                alternationNdx = i, shouldMerge = !0;
                break;
              }
            }

            if (shouldMerge) {
              targetMatch.mloc = targetMatch.mloc || {};
              var locNdx = targetMatch.locator[alternationNdx];

              if (void 0 !== locNdx) {
                if ("string" == typeof locNdx && (locNdx = locNdx.split(",")[0]), void 0 === targetMatch.mloc[locNdx] && (targetMatch.mloc[locNdx] = targetMatch.locator.slice()), void 0 !== altMatch) {
                  for (var ndx in altMatch.mloc) {
                    "string" == typeof ndx && (ndx = ndx.split(",")[0]), void 0 === targetMatch.mloc[ndx] && (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                  }

                  targetMatch.locator[alternationNdx] = Object.keys(targetMatch.mloc).join(",");
                }

                return !0;
              }

              targetMatch.alternation = void 0;
            }

            return !1;
          }

          function isSameLevel(targetMatch, altMatch) {
            if (targetMatch.locator.length !== altMatch.locator.length) return !1;

            for (var locNdx = targetMatch.alternation + 1; locNdx < targetMatch.locator.length; locNdx++) {
              if (targetMatch.locator[locNdx] !== altMatch.locator[locNdx]) return !1;
            }

            return !0;
          }

          if (testPos > pos + opts._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset.mask;
          if (testPos === pos && void 0 === match.matches) return matches.push({
            match: match,
            locator: loopNdx.reverse(),
            cd: cacheDependency,
            mloc: {}
          }), !0;

          if (void 0 !== match.matches) {
            if (match.isGroup && quantifierRecurse !== match) {
              if (match = handleMatch(maskToken.matches[maskToken.matches.indexOf(match) + 1], loopNdx, quantifierRecurse), match) return !0;
            } else if (match.isOptional) {
              var optionalToken = match,
                  mtchsNdx = matches.length;

              if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), match) {
                if (matches.forEach(function (mtch, ndx) {
                  mtchsNdx <= ndx && (mtch.match.optionality = !0);
                }), latestMatch = matches[matches.length - 1].match, void 0 !== quantifierRecurse || !isFirstMatch(latestMatch, optionalToken)) return !0;
                insertStop = !0, testPos = pos;
              }
            } else if (match.isAlternator) {
              var alternateToken = match,
                  malternateMatches = [],
                  maltMatches,
                  currentMatches = matches.slice(),
                  loopNdxCnt = loopNdx.length,
                  altIndex = 0 < ndxInitializer.length ? ndxInitializer.shift() : -1;

              if (-1 === altIndex || "string" == typeof altIndex) {
                var currentPos = testPos,
                    ndxInitializerClone = ndxInitializer.slice(),
                    altIndexArr = [],
                    amndx;
                if ("string" == typeof altIndex) altIndexArr = altIndex.split(",");else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                  altIndexArr.push(amndx.toString());
                }

                if (void 0 !== maskset.excludes[pos]) {
                  for (var altIndexArrClone = altIndexArr.slice(), i = 0, exl = maskset.excludes[pos].length; i < exl; i++) {
                    var excludeSet = maskset.excludes[pos][i].toString().split(":");
                    loopNdx.length == excludeSet[1] && altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
                  }

                  0 === altIndexArr.length && (delete maskset.excludes[pos], altIndexArr = altIndexArrClone);
                }

                (!0 === opts.keepStatic || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) && (altIndexArr = altIndexArr.slice(0, 1));

                for (var unMatchedAlternation = !1, ndx = 0; ndx < altIndexArr.length; ndx++) {
                  amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = "string" == typeof altIndex && resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) ? match = !0 : 0 === ndx && (unMatchedAlternation = !0), maltMatches = matches.slice(), testPos = currentPos, matches = [];

                  for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                    var altMatch = maltMatches[ndx1],
                        dropMatch = !1;
                    altMatch.match.jit = altMatch.match.jit || unMatchedAlternation, altMatch.alternation = altMatch.alternation || loopNdxCnt, setMergeLocators(altMatch);

                    for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                      var altMatch2 = malternateMatches[ndx2];

                      if ("string" != typeof altIndex || void 0 !== altMatch.alternation && altIndexArr.includes(altMatch.locator[altMatch.alternation].toString())) {
                        if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                          dropMatch = !0, setMergeLocators(altMatch2, altMatch);
                          break;
                        }

                        if (isSubsetOf(altMatch, altMatch2)) {
                          setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                          break;
                        }

                        if (isSubsetOf(altMatch2, altMatch)) {
                          setMergeLocators(altMatch2, altMatch);
                          break;
                        }

                        if (staticCanMatchDefinition(altMatch, altMatch2)) {
                          isSameLevel(altMatch, altMatch2) || void 0 !== el.inputmask.userOptions.keepStatic ? setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch)) : opts.keepStatic = !0;
                          break;
                        }
                      }
                    }

                    dropMatch || malternateMatches.push(altMatch);
                  }
                }

                matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = 0 < matches.length, match = 0 < malternateMatches.length, ndxInitializer = ndxInitializerClone.slice();
              } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);

              if (match) return !0;
            } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[maskToken.matches.indexOf(match) - 1]) for (var qt = match, qndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
              var tokenGroup = maskToken.matches[maskToken.matches.indexOf(qt) - 1];

              if (match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup), match) {
                if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx >= qt.quantifier.min, latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit, latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                  insertStop = !0, testPos = pos;
                  break;
                }

                return latestMatch.jit && (maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch)), !0;
              }
            } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), match) return !0;
          } else testPos++;
        }

        for (var tndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) {
          if (!0 !== maskToken.matches[tndx].isQuantifier) {
            var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
            if (match && testPos === pos) return match;
            if (pos < testPos) break;
          }
        }
      }

      function mergeLocators(pos, tests) {
        var locator = [],
            alternation;
        return Array.isArray(tests) || (tests = [tests]), 0 < tests.length && (void 0 === tests[0].alternation || !0 === opts.keepStatic ? (locator = determineTestTemplate.call(inputmask, pos, tests.slice()).locator.slice(), 0 === locator.length && (locator = tests[0].locator.slice())) : tests.forEach(function (tst) {
          "" !== tst.def && (0 === locator.length ? (alternation = tst.alternation, locator = tst.locator.slice()) : tst.locator[alternation] && -1 === locator[alternation].toString().indexOf(tst.locator[alternation]) && (locator[alternation] += "," + tst.locator[alternation]));
        })), locator;
      }

      if (-1 < pos && (void 0 === inputmask.maxLength || pos < inputmask.maxLength)) {
        if (void 0 === ndxIntlzr) {
          for (var previousPos = pos - 1, test; void 0 === (test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) && -1 < previousPos;) {
            previousPos--;
          }

          void 0 !== test && -1 < previousPos && (ndxInitializer = mergeLocators(previousPos, test), cacheDependency = ndxInitializer.join(""), testPos = previousPos);
        }

        if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) return maskset.tests[pos];

        for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
          var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
          if (match && testPos === pos || pos < testPos) break;
        }
      }

      return 0 !== matches.length && !insertStop || matches.push({
        match: {
          fn: null,
          static: !0,
          optionality: !1,
          casing: null,
          def: "",
          placeholder: ""
        },
        locator: [],
        mloc: {},
        cd: cacheDependency
      }), void 0 !== ndxIntlzr && maskset.tests[pos] ? $.extend(!0, [], matches) : (maskset.tests[pos] = $.extend(!0, [], matches), maskset.tests[pos]);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.determineTestTemplate = determineTestTemplate, exports.getDecisionTaker = getDecisionTaker, exports.getMaskTemplate = getMaskTemplate, exports.getPlaceholder = getPlaceholder, exports.getTest = getTest, exports.getTests = getTests, exports.getTestTemplate = getTestTemplate;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.alternate = alternate, exports.checkAlternationMatch = checkAlternationMatch, exports.isComplete = isComplete, exports.isValid = isValid, exports.refreshFromBuffer = refreshFromBuffer, exports.revalidateMask = revalidateMask, exports.handleRemove = handleRemove;

    var _validationTests = __webpack_require__(3),
        _keycode = _interopRequireDefault(__webpack_require__(0)),
        _positioning = __webpack_require__(2),
        _eventhandlers = __webpack_require__(6);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
      var inputmask = this,
          $ = this.dependencyLib,
          opts = this.opts,
          maskset = this.maskset,
          validPsClone = $.extend(!0, {}, maskset.validPositions),
          tstClone = $.extend(!0, {}, maskset.tests),
          lastAlt,
          alternation,
          isValidRslt = !1,
          returnRslt = !1,
          altPos,
          prevAltPos,
          i,
          validPos,
          decisionPos,
          lAltPos = void 0 !== rAltPos ? rAltPos : _positioning.getLastValidPosition.call(this),
          nextPos,
          input,
          begin,
          end;
      if (selection && (begin = selection.begin, end = selection.end, selection.begin > selection.end && (begin = selection.end, end = selection.begin)), -1 === lAltPos && void 0 === rAltPos) lastAlt = 0, prevAltPos = _validationTests.getTest.call(this, lastAlt), alternation = prevAltPos.alternation;else for (; 0 <= lAltPos; lAltPos--) {
        if (altPos = maskset.validPositions[lAltPos], altPos && void 0 !== altPos.alternation) {
          if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
          lastAlt = lAltPos, alternation = maskset.validPositions[lastAlt].alternation, prevAltPos = altPos;
        }
      }

      if (void 0 !== alternation) {
        decisionPos = parseInt(lastAlt), maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [], !0 !== maskPos && maskset.excludes[decisionPos].push((0, _validationTests.getDecisionTaker)(prevAltPos) + ":" + prevAltPos.alternation);
        var validInputs = [],
            resultPos = -1;

        for (i = decisionPos; i < _positioning.getLastValidPosition.call(this, void 0, !0) + 1; i++) {
          -1 === resultPos && maskPos <= i && void 0 !== c && (validInputs.push(c), resultPos = validInputs.length - 1), validPos = maskset.validPositions[i], validPos && !0 !== validPos.generatedInput && (void 0 === selection || i < begin || end <= i) && validInputs.push(validPos.input), delete maskset.validPositions[i];
        }

        for (-1 === resultPos && void 0 !== c && (validInputs.push(c), resultPos = validInputs.length - 1); void 0 !== maskset.excludes[decisionPos] && maskset.excludes[decisionPos].length < 10;) {
          for (maskset.tests = {}, _positioning.resetMaskSet.call(this, !0), isValidRslt = !0, i = 0; i < validInputs.length && (nextPos = isValidRslt.caret || _positioning.getLastValidPosition.call(this, void 0, !0) + 1, input = validInputs[i], isValidRslt = isValid.call(this, nextPos, input, !1, fromIsValid, !0)); i++) {
            i === resultPos && (returnRslt = isValidRslt), 1 == maskPos && isValidRslt && (returnRslt = {
              caretPos: i
            });
          }

          if (isValidRslt) break;

          if (_positioning.resetMaskSet.call(this), prevAltPos = _validationTests.getTest.call(this, decisionPos), maskset.validPositions = $.extend(!0, {}, validPsClone), maskset.tests = $.extend(!0, {}, tstClone), !maskset.excludes[decisionPos]) {
            returnRslt = alternate.call(this, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
            break;
          }

          var decisionTaker = (0, _validationTests.getDecisionTaker)(prevAltPos);

          if (-1 !== maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation)) {
            returnRslt = alternate.call(this, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
            break;
          }

          for (maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation), i = decisionPos; i < _positioning.getLastValidPosition.call(this, void 0, !0) + 1; i++) {
            delete maskset.validPositions[i];
          }
        }
      }

      return returnRslt && !1 === opts.keepStatic || delete maskset.excludes[decisionPos], returnRslt;
    }

    function casing(elem, test, pos) {
      var opts = this.opts,
          maskset = this.maskset;

      switch (opts.casing || test.casing) {
        case "upper":
          elem = elem.toUpperCase();
          break;

        case "lower":
          elem = elem.toLowerCase();
          break;

        case "title":
          var posBefore = maskset.validPositions[pos - 1];
          elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(_keycode.default.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
          break;

        default:
          if ("function" == typeof opts.casing) {
            var args = Array.prototype.slice.call(arguments);
            args.push(maskset.validPositions), elem = opts.casing.apply(this, args);
          }

      }

      return elem;
    }

    function checkAlternationMatch(altArr1, altArr2, na) {
      for (var opts = this.opts, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = void 0 !== na ? na.split(",") : [], naNdx, i = 0; i < naArr.length; i++) {
        -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
      }

      for (var alndx = 0; alndx < altArr1.length; alndx++) {
        if (altArrC.includes(altArr1[alndx])) {
          isMatch = !0;
          break;
        }
      }

      return isMatch;
    }

    function handleRemove(input, k, pos, strict, fromIsValid) {
      var inputmask = this,
          maskset = this.maskset,
          opts = this.opts;

      if ((opts.numericInput || this.isRTL) && (k === _keycode.default.BACKSPACE ? k = _keycode.default.DELETE : k === _keycode.default.DELETE && (k = _keycode.default.BACKSPACE), this.isRTL)) {
        var pend = pos.end;
        pos.end = pos.begin, pos.begin = pend;
      }

      var lvp = _positioning.getLastValidPosition.call(this, void 0, !0),
          offset;

      if (pos.end >= _positioning.getBuffer.call(this).length && lvp >= pos.end && (pos.end = lvp + 1), k === _keycode.default.BACKSPACE ? pos.end - pos.begin < 1 && (pos.begin = _positioning.seekPrevious.call(this, pos.begin)) : k === _keycode.default.DELETE && pos.begin === pos.end && (pos.end = _positioning.isMask.call(this, pos.end, !0, !0) ? pos.end + 1 : _positioning.seekNext.call(this, pos.end) + 1), !1 !== (offset = revalidateMask.call(this, pos))) {
        if (!0 !== strict && !1 !== opts.keepStatic || null !== opts.regex && -1 !== _validationTests.getTest.call(this, pos.begin).match.def.indexOf("|")) {
          var result = alternate.call(this, !0);

          if (result) {
            var newPos = void 0 !== result.caret ? result.caret : result.pos ? _positioning.seekNext.call(this, result.pos.begin ? result.pos.begin : result.pos) : _positioning.getLastValidPosition.call(this, -1, !0);
            (k !== _keycode.default.DELETE || pos.begin > newPos) && pos.begin;
          }
        }

        !0 !== strict && (maskset.p = k === _keycode.default.DELETE ? pos.begin + offset : pos.begin);
      }
    }

    function isComplete(buffer) {
      var inputmask = this,
          opts = this.opts,
          maskset = this.maskset;
      if ("function" == typeof opts.isComplete) return opts.isComplete(buffer, opts);

      if ("*" !== opts.repeat) {
        var complete = !1,
            lrp = _positioning.determineLastRequiredPosition.call(this, !0),
            aml = _positioning.seekPrevious.call(this, lrp.l);

        if (void 0 === lrp.def || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
          complete = !0;

          for (var i = 0; i <= aml; i++) {
            var test = _validationTests.getTestTemplate.call(this, i).match;

            if (!0 !== test.static && void 0 === maskset.validPositions[i] && !0 !== test.optionality && !0 !== test.optionalQuantifier || !0 === test.static && buffer[i] !== _validationTests.getPlaceholder.call(this, i, test)) {
              complete = !1;
              break;
            }
          }
        }

        return complete;
      }
    }

    function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly, fromCheckval) {
      var inputmask = this,
          $ = this.dependencyLib,
          opts = this.opts,
          el = inputmask.el,
          maskset = inputmask.maskset;

      function isSelection(posObj) {
        return inputmask.isRTL ? 1 < posObj.begin - posObj.end || posObj.begin - posObj.end == 1 : 1 < posObj.end - posObj.begin || posObj.end - posObj.begin == 1;
      }

      strict = !0 === strict;
      var maskPos = pos;

      function processCommandObject(commandObj) {
        if (void 0 !== commandObj) {
          if (void 0 !== commandObj.remove && (Array.isArray(commandObj.remove) || (commandObj.remove = [commandObj.remove]), commandObj.remove.sort(function (a, b) {
            return b.pos - a.pos;
          }).forEach(function (lmnt) {
            revalidateMask.call(inputmask, {
              begin: lmnt,
              end: lmnt + 1
            });
          }), commandObj.remove = void 0), void 0 !== commandObj.insert && (Array.isArray(commandObj.insert) || (commandObj.insert = [commandObj.insert]), commandObj.insert.sort(function (a, b) {
            return a.pos - b.pos;
          }).forEach(function (lmnt) {
            "" !== lmnt.c && isValid.call(inputmask, lmnt.pos, lmnt.c, void 0 === lmnt.strict || lmnt.strict, void 0 !== lmnt.fromIsValid ? lmnt.fromIsValid : fromIsValid);
          }), commandObj.insert = void 0), commandObj.refreshFromBuffer && commandObj.buffer) {
            var refresh = commandObj.refreshFromBuffer;
            refreshFromBuffer.call(inputmask, !0 === refresh ? refresh : refresh.start, refresh.end, commandObj.buffer), commandObj.refreshFromBuffer = void 0;
          }

          void 0 !== commandObj.rewritePosition && (maskPos = commandObj.rewritePosition, commandObj = !0);
        }

        return commandObj;
      }

      function _isValid(position, c, strict) {
        var rslt = !1;
        return _validationTests.getTests.call(inputmask, position).every(function (tst, ndx) {
          var test = tst.match;
          if (_positioning.getBuffer.call(inputmask, !0), rslt = null != test.fn ? test.fn.test(c, maskset, position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
            c: _validationTests.getPlaceholder.call(inputmask, position, test, !0) || test.def,
            pos: position
          }, !1 === rslt) return !0;
          var elem = void 0 !== rslt.c ? rslt.c : c,
              validatedPos = position;
          return elem = elem === opts.skipOptionalPartCharacter && !0 === test.static ? _validationTests.getPlaceholder.call(inputmask, position, test, !0) || test.def : elem, rslt = processCommandObject(rslt), !0 !== rslt && void 0 !== rslt.pos && rslt.pos !== position && (validatedPos = rslt.pos), !0 !== rslt && void 0 === rslt.pos && void 0 === rslt.c || !1 === revalidateMask.call(inputmask, pos, $.extend({}, tst, {
            input: casing.call(inputmask, elem, test, validatedPos)
          }), fromIsValid, validatedPos) && (rslt = !1), !1;
        }), rslt;
      }

      void 0 !== pos.begin && (maskPos = inputmask.isRTL ? pos.end : pos.begin);
      var result = !0,
          positionsClone = $.extend(!0, {}, maskset.validPositions);
      if (!1 === opts.keepStatic && void 0 !== maskset.excludes[maskPos] && !0 !== fromAlternate && !0 !== fromIsValid) for (var i = maskPos; i < (inputmask.isRTL ? pos.begin : pos.end); i++) {
        void 0 !== maskset.excludes[i] && (maskset.excludes[i] = void 0, delete maskset.tests[i]);
      }

      if ("function" == typeof opts.preValidation && !0 !== fromIsValid && !0 !== validateOnly && (result = opts.preValidation.call(inputmask, _positioning.getBuffer.call(inputmask), maskPos, c, isSelection(pos), opts, maskset, pos, strict || fromAlternate), result = processCommandObject(result)), !0 === result) {
        if (void 0 === inputmask.maxLength || maskPos < inputmask.maxLength) {
          if (result = _isValid(maskPos, c, strict), (!strict || !0 === fromIsValid) && !1 === result && !0 !== validateOnly) {
            var currentPosValid = maskset.validPositions[maskPos];

            if (!currentPosValid || !0 !== currentPosValid.match.static || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
              if (opts.insertMode || void 0 === maskset.validPositions[_positioning.seekNext.call(inputmask, maskPos)] || pos.end > maskPos) {
                var skip = !1;
                if (maskset.jitOffset[maskPos] && void 0 === maskset.validPositions[_positioning.seekNext.call(inputmask, maskPos)] && (result = isValid.call(inputmask, maskPos + maskset.jitOffset[maskPos], c, !0), !1 !== result && (!0 !== fromAlternate && (result.caret = maskPos), skip = !0)), pos.end > maskPos && (maskset.validPositions[maskPos] = void 0), !skip && !_positioning.isMask.call(inputmask, maskPos, opts.keepStatic && 0 === maskPos)) for (var nPos = maskPos + 1, snPos = _positioning.seekNext.call(inputmask, maskPos, !1, 0 !== maskPos); nPos <= snPos; nPos++) {
                  if (result = _isValid(nPos, c, strict), !1 !== result) {
                    result = trackbackPositions.call(inputmask, maskPos, void 0 !== result.pos ? result.pos : nPos) || result, maskPos = nPos;
                    break;
                  }
                }
              }
            } else result = {
              caret: _positioning.seekNext.call(inputmask, maskPos)
            };
          }
        } else result = !1;

        !1 !== result || !opts.keepStatic || !isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && 0 !== maskPos || strict || !0 === fromAlternate ? isSelection(pos) && maskset.tests[maskPos] && 1 < maskset.tests[maskPos].length && opts.keepStatic && !strict && !0 !== fromAlternate && (result = alternate.call(inputmask, !0)) : result = alternate.call(inputmask, maskPos, c, strict, fromIsValid, void 0, pos), !0 === result && (result = {
          pos: maskPos
        });
      }

      if ("function" == typeof opts.postValidation && !0 !== fromIsValid && !0 !== validateOnly) {
        var postResult = opts.postValidation.call(inputmask, _positioning.getBuffer.call(inputmask, !0), void 0 !== pos.begin ? inputmask.isRTL ? pos.end : pos.begin : pos, c, result, opts, maskset, strict, fromCheckval);
        void 0 !== postResult && (result = !0 === postResult ? result : postResult);
      }

      result && void 0 === result.pos && (result.pos = maskPos), !1 === result || !0 === validateOnly ? (_positioning.resetMaskSet.call(inputmask, !0), maskset.validPositions = $.extend(!0, {}, positionsClone)) : trackbackPositions.call(inputmask, void 0, maskPos, !0);
      var endResult = processCommandObject(result);
      return endResult;
    }

    function positionCanMatchDefinition(pos, testDefinition, opts) {
      for (var inputmask = this, maskset = this.maskset, valid = !1, tests = _validationTests.getTests.call(this, pos), tndx = 0; tndx < tests.length; tndx++) {
        if (tests[tndx].match && (!(tests[tndx].match.nativeDef !== testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] || opts.shiftPositions && testDefinition.match.static) || tests[tndx].match.nativeDef === testDefinition.match.nativeDef)) {
          valid = !0;
          break;
        }

        if (tests[tndx].match && tests[tndx].match.def === testDefinition.match.nativeDef) {
          valid = void 0;
          break;
        }
      }

      return !1 === valid && void 0 !== maskset.jitOffset[pos] && (valid = positionCanMatchDefinition.call(this, pos + maskset.jitOffset[pos], testDefinition, opts)), valid;
    }

    function refreshFromBuffer(start, end, buffer) {
      var inputmask = this,
          maskset = this.maskset,
          opts = this.opts,
          $ = this.dependencyLib,
          el = this.el,
          i,
          p,
          skipOptionalPartCharacter = opts.skipOptionalPartCharacter,
          bffr = this.isRTL ? buffer.slice().reverse() : buffer;
      if (opts.skipOptionalPartCharacter = "", !0 === start) _positioning.resetMaskSet.call(this), maskset.tests = {}, start = 0, end = buffer.length, p = _positioning.determineNewCaretPosition.call(this, {
        begin: 0,
        end: 0
      }, !1).begin;else {
        for (i = start; i < end; i++) {
          delete maskset.validPositions[i];
        }

        p = start;
      }
      var keypress = new $.Event("keypress");

      for (i = start; i < end; i++) {
        keypress.which = bffr[i].toString().charCodeAt(0), this.ignorable = !1;

        var valResult = _eventhandlers.EventHandlers.keypressEvent.call(el, keypress, !0, !1, !1, p);

        !1 !== valResult && (p = valResult.forwardPosition);
      }

      opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
    }

    function trackbackPositions(originalPos, newPos, fillOnly) {
      var inputmask = this,
          maskset = this.maskset,
          $ = this.dependencyLib;
      if (void 0 === originalPos) for (originalPos = newPos - 1; 0 < originalPos && !maskset.validPositions[originalPos]; originalPos--) {
        ;
      }

      for (var ps = originalPos; ps < newPos; ps++) {
        if (void 0 === maskset.validPositions[ps] && !_positioning.isMask.call(this, ps, !0)) {
          var vp = 0 == ps ? _validationTests.getTest.call(this, ps) : maskset.validPositions[ps - 1];

          if (vp) {
            var tests = _validationTests.getTests.call(this, ps).slice();

            "" === tests[tests.length - 1].match.def && tests.pop();

            var bestMatch = _validationTests.determineTestTemplate.call(this, ps, tests),
                np;

            if (bestMatch && (!0 !== bestMatch.match.jit || "master" === bestMatch.match.newBlockMarker && (np = maskset.validPositions[ps + 1]) && !0 === np.match.optionalQuantifier) && (bestMatch = $.extend({}, bestMatch, {
              input: _validationTests.getPlaceholder.call(this, ps, bestMatch.match, !0) || bestMatch.match.def
            }), bestMatch.generatedInput = !0, revalidateMask.call(this, ps, bestMatch, !0), !0 !== fillOnly)) {
              var cvpInput = maskset.validPositions[newPos].input;
              return maskset.validPositions[newPos] = void 0, isValid.call(this, newPos, cvpInput, !0, !0);
            }
          }
        }
      }
    }

    function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
      var inputmask = this,
          maskset = this.maskset,
          opts = this.opts,
          $ = this.dependencyLib;

      function IsEnclosedStatic(pos, valids, selection) {
        var posMatch = valids[pos];
        if (void 0 === posMatch || !0 !== posMatch.match.static || !0 === posMatch.match.optionality || void 0 !== valids[0] && void 0 !== valids[0].alternation) return !1;
        var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && !0 === valids[pos - 1].match.static && valids[pos - 1] : valids[pos - 1],
            nextMatch = selection.end > pos + 1 ? valids[pos + 1] && !0 === valids[pos + 1].match.static && valids[pos + 1] : valids[pos + 1];
        return prevMatch && nextMatch;
      }

      var offset = 0,
          begin = void 0 !== pos.begin ? pos.begin : pos,
          end = void 0 !== pos.end ? pos.end : pos;

      if (pos.begin > pos.end && (begin = pos.end, end = pos.begin), validatedPos = void 0 !== validatedPos ? validatedPos : begin, begin !== end || opts.insertMode && void 0 !== maskset.validPositions[validatedPos] && void 0 === fromIsValid || void 0 === validTest) {
        var positionsClone = $.extend(!0, {}, maskset.validPositions),
            lvp = _positioning.getLastValidPosition.call(this, void 0, !0),
            i;

        for (maskset.p = begin, i = lvp; begin <= i; i--) {
          delete maskset.validPositions[i], void 0 === validTest && delete maskset.tests[i + 1];
        }

        var valid = !0,
            j = validatedPos,
            posMatch = j,
            t,
            canMatch;

        for (validTest && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest), posMatch++, j++), i = validTest ? end : end - 1; i <= lvp; i++) {
          if (void 0 !== (t = positionsClone[i]) && !0 !== t.generatedInput && (end <= i || begin <= i && IsEnclosedStatic(i, positionsClone, {
            begin: begin,
            end: end
          }))) {
            for (; "" !== _validationTests.getTest.call(this, posMatch).match.def;) {
              if (!1 !== (canMatch = positionCanMatchDefinition.call(this, posMatch, t, opts)) || "+" === t.match.def) {
                "+" === t.match.def && _positioning.getBuffer.call(this, !0);
                var result = isValid.call(this, posMatch, t.input, "+" !== t.match.def, "+" !== t.match.def);
                if (valid = !1 !== result, j = (result.pos || posMatch) + 1, !valid && canMatch) break;
              } else valid = !1;

              if (valid) {
                void 0 === validTest && t.match.static && i === pos.begin && offset++;
                break;
              }

              if (!valid && posMatch > maskset.maskLength) break;
              posMatch++;
            }

            "" == _validationTests.getTest.call(this, posMatch).match.def && (valid = !1), posMatch = j;
          }

          if (!valid) break;
        }

        if (!valid) return maskset.validPositions = $.extend(!0, {}, positionsClone), _positioning.resetMaskSet.call(this, !0), !1;
      } else validTest && _validationTests.getTest.call(this, validatedPos).match.cd === validTest.match.cd && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest));

      return _positioning.resetMaskSet.call(this, !0), offset;
    }
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.applyInputValue = applyInputValue, exports.clearOptionalTail = clearOptionalTail, exports.checkVal = checkVal, exports.HandleNativePlaceholder = HandleNativePlaceholder, exports.unmaskedvalue = unmaskedvalue, exports.writeBuffer = writeBuffer;

    var _keycode = _interopRequireDefault(__webpack_require__(0)),
        _validationTests = __webpack_require__(3),
        _positioning = __webpack_require__(2),
        _validation = __webpack_require__(4),
        _environment = __webpack_require__(7),
        _eventhandlers = __webpack_require__(6);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function applyInputValue(input, value) {
      var inputmask = input ? input.inputmask : this,
          opts = inputmask.opts;
      input.inputmask.refreshValue = !1, "function" == typeof opts.onBeforeMask && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), value = value.toString().split(""), checkVal(input, !0, !1, value), inputmask.undoValue = _positioning.getBuffer.call(inputmask).join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === _positioning.getBufferTemplate.call(inputmask).join("") && -1 === _positioning.getLastValidPosition.call(inputmask) && input.inputmask._valueSet("");
    }

    function clearOptionalTail(buffer) {
      var inputmask = this;
      buffer.length = 0;

      for (var template = _validationTests.getMaskTemplate.call(this, !0, 0, !0, void 0, !0), lmnt; void 0 !== (lmnt = template.shift());) {
        buffer.push(lmnt);
      }

      return buffer;
    }

    function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
      var inputmask = input ? input.inputmask : this,
          maskset = inputmask.maskset,
          opts = inputmask.opts,
          $ = inputmask.dependencyLib,
          inputValue = nptvl.slice(),
          charCodes = "",
          initialNdx = -1,
          result = void 0,
          skipOptionalPartCharacter = opts.skipOptionalPartCharacter;

      function isTemplateMatch(ndx, charCodes) {
        for (var targetTemplate = _validationTests.getMaskTemplate.call(inputmask, !0, 0).slice(ndx, _positioning.seekNext.call(inputmask, ndx, !1, !1)).join("").replace(/'/g, ""), charCodeNdx = targetTemplate.indexOf(charCodes); 0 < charCodeNdx && " " === targetTemplate[charCodeNdx - 1];) {
          charCodeNdx--;
        }

        var match = 0 === charCodeNdx && !_positioning.isMask.call(inputmask, ndx) && (_validationTests.getTest.call(inputmask, ndx).match.nativeDef === charCodes.charAt(0) || !0 === _validationTests.getTest.call(inputmask, ndx).match.static && _validationTests.getTest.call(inputmask, ndx).match.nativeDef === "'" + charCodes.charAt(0) || " " === _validationTests.getTest.call(inputmask, ndx).match.nativeDef && (_validationTests.getTest.call(inputmask, ndx + 1).match.nativeDef === charCodes.charAt(0) || !0 === _validationTests.getTest.call(inputmask, ndx + 1).match.static && _validationTests.getTest.call(inputmask, ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));

        if (!match && 0 < charCodeNdx && !_positioning.isMask.call(inputmask, ndx, !1, !0)) {
          var nextPos = _positioning.seekNext.call(inputmask, ndx);

          inputmask.caretPos.begin < nextPos && (inputmask.caretPos = {
            begin: nextPos
          });
        }

        return match;
      }

      opts.skipOptionalPartCharacter = "", _positioning.resetMaskSet.call(inputmask), maskset.tests = {}, initialNdx = opts.radixPoint ? _positioning.determineNewCaretPosition.call(inputmask, {
        begin: 0,
        end: 0
      }).begin : 0, maskset.p = initialNdx, inputmask.caretPos = {
        begin: initialNdx
      };
      var staticMatches = [],
          prevCaretPos = inputmask.caretPos;

      if (inputValue.forEach(function (charCode, ndx) {
        if (void 0 !== charCode) if (void 0 === maskset.validPositions[ndx] && inputValue[ndx] === _validationTests.getPlaceholder.call(inputmask, ndx) && _positioning.isMask.call(inputmask, ndx, !0) && !1 === _validation.isValid.call(inputmask, ndx, inputValue[ndx], !0, void 0, void 0, !0)) maskset.p++;else {
          var keypress = new $.Event("_checkval");
          keypress.which = charCode.toString().charCodeAt(0), charCodes += charCode;

          var lvp = _positioning.getLastValidPosition.call(inputmask, void 0, !0);

          isTemplateMatch(initialNdx, charCodes) ? result = _eventhandlers.EventHandlers.keypressEvent.call(inputmask, keypress, !0, !1, strict, lvp + 1) : (result = _eventhandlers.EventHandlers.keypressEvent.call(inputmask, keypress, !0, !1, strict, inputmask.caretPos.begin), result && (initialNdx = inputmask.caretPos.begin + 1, charCodes = "")), result ? (void 0 !== result.pos && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match.static && void 0 === maskset.validPositions[result.pos].alternation && (staticMatches.push(result.pos), inputmask.isRTL || (result.forwardPosition = result.pos + 1)), writeBuffer.call(inputmask, void 0, _positioning.getBuffer.call(inputmask), result.forwardPosition, keypress, !1), inputmask.caretPos = {
            begin: result.forwardPosition,
            end: result.forwardPosition
          }, prevCaretPos = inputmask.caretPos) : inputmask.caretPos = prevCaretPos;
        }
      }), 0 < staticMatches.length) {
        var sndx,
            validPos,
            nextValid = _positioning.seekNext.call(inputmask, -1, void 0, !1);

        if (!_validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && staticMatches.length <= nextValid || _validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && 0 < staticMatches.length && staticMatches.length !== nextValid && 0 === staticMatches[0]) for (var nextSndx = nextValid; void 0 !== (sndx = staticMatches.shift());) {
          var keypress = new $.Event("_checkval");
          if (validPos = maskset.validPositions[sndx], validPos.generatedInput = !0, keypress.which = validPos.input.charCodeAt(0), result = _eventhandlers.EventHandlers.keypressEvent.call(inputmask, keypress, !0, !1, strict, nextSndx), result && void 0 !== result.pos && result.pos !== sndx && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match.static) staticMatches.push(result.pos);else if (!result) break;
          nextSndx++;
        }
      }

      writeOut && writeBuffer.call(inputmask, input, _positioning.getBuffer.call(inputmask), result ? result.forwardPosition : inputmask.caretPos.begin, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type && inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join("")), opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
    }

    function HandleNativePlaceholder(npt, value) {
      var inputmask = npt ? npt.inputmask : this;

      if (_environment.ie) {
        if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || "" === npt.placeholder)) {
          var buffer = _positioning.getBuffer.call(inputmask).slice(),
              nptValue = npt.inputmask._valueGet();

          if (nptValue !== value) {
            var lvp = _positioning.getLastValidPosition.call(inputmask);

            -1 === lvp && nptValue === _positioning.getBufferTemplate.call(inputmask).join("") ? buffer = [] : -1 !== lvp && clearOptionalTail.call(inputmask, buffer), writeBuffer(npt, buffer);
          }
        }
      } else npt.placeholder !== value && (npt.placeholder = value, "" === npt.placeholder && npt.removeAttribute("placeholder"));
    }

    function unmaskedvalue(input) {
      var inputmask = input ? input.inputmask : this,
          opts = inputmask.opts,
          maskset = inputmask.maskset;

      if (input) {
        if (void 0 === input.inputmask) return input.value;
        input.inputmask && input.inputmask.refreshValue && applyInputValue(input, input.inputmask._valueGet(!0));
      }

      var umValue = [],
          vps = maskset.validPositions;

      for (var pndx in vps) {
        vps[pndx] && vps[pndx].match && (1 != vps[pndx].match.static || Array.isArray(maskset.metadata) && !0 !== vps[pndx].generatedInput) && umValue.push(vps[pndx].input);
      }

      var unmaskedValue = 0 === umValue.length ? "" : (inputmask.isRTL ? umValue.reverse() : umValue).join("");

      if ("function" == typeof opts.onUnMask) {
        var bufferValue = (inputmask.isRTL ? _positioning.getBuffer.call(inputmask).slice().reverse() : _positioning.getBuffer.call(inputmask)).join("");
        unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
      }

      return unmaskedValue;
    }

    function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
      var inputmask = input ? input.inputmask : this,
          opts = inputmask.opts,
          $ = inputmask.dependencyLib;

      if (event && "function" == typeof opts.onBeforeWrite) {
        var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);

        if (result) {
          if (result.refreshFromBuffer) {
            var refresh = result.refreshFromBuffer;
            _validation.refreshFromBuffer.call(inputmask, !0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), buffer = _positioning.getBuffer.call(inputmask, !0);
          }

          void 0 !== caretPos && (caretPos = void 0 !== result.caret ? result.caret : caretPos);
        }
      }

      if (void 0 !== input && (input.inputmask._valueSet(buffer.join("")), void 0 === caretPos || void 0 !== event && "blur" === event.type || _positioning.caret.call(inputmask, input, caretPos, void 0, void 0, void 0 !== event && "keydown" === event.type && (event.keyCode === _keycode.default.DELETE || event.keyCode === _keycode.default.BACKSPACE)), !0 === triggerEvents)) {
        var $input = $(input),
            nptVal = input.inputmask._valueGet();

        input.inputmask.skipInputEvent = !0, $input.trigger("input"), setTimeout(function () {
          nptVal === _positioning.getBufferTemplate.call(inputmask).join("") ? $input.trigger("cleared") : !0 === _validation.isComplete.call(inputmask, buffer) && $input.trigger("complete");
        }, 0);
      }
    }
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.EventHandlers = void 0;

    var _positioning = __webpack_require__(2),
        _keycode = _interopRequireDefault(__webpack_require__(0)),
        _environment = __webpack_require__(7),
        _validation = __webpack_require__(4),
        _inputHandling = __webpack_require__(5),
        _validationTests = __webpack_require__(3);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var EventHandlers = {
      keydownEvent: function keydownEvent(e) {
        var inputmask = this.inputmask,
            opts = inputmask.opts,
            $ = inputmask.dependencyLib,
            maskset = inputmask.maskset,
            input = this,
            $input = $(input),
            k = e.keyCode,
            pos = _positioning.caret.call(inputmask, input),
            kdResult = opts.onKeyDown.call(this, e, _positioning.getBuffer.call(inputmask), pos, opts);

        if (void 0 !== kdResult) return kdResult;
        if (k === _keycode.default.BACKSPACE || k === _keycode.default.DELETE || _environment.iphone && k === _keycode.default.BACKSPACE_SAFARI || e.ctrlKey && k === _keycode.default.X && !("oncut" in input)) e.preventDefault(), _validation.handleRemove.call(inputmask, input, k, pos), (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask, !0), maskset.p, e, input.inputmask._valueGet() !== _positioning.getBuffer.call(inputmask).join(""));else if (k === _keycode.default.END || k === _keycode.default.PAGE_DOWN) {
          e.preventDefault();

          var caretPos = _positioning.seekNext.call(inputmask, _positioning.getLastValidPosition.call(inputmask));

          _positioning.caret.call(inputmask, input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
        } else k === _keycode.default.HOME && !e.shiftKey || k === _keycode.default.PAGE_UP ? (e.preventDefault(), _positioning.caret.call(inputmask, input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === _keycode.default.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? ((0, _inputHandling.checkVal)(input, !0, !1, inputmask.undoValue.split("")), $input.trigger("click")) : !0 === opts.tabThrough && k === _keycode.default.TAB ? !0 === e.shiftKey ? (pos.end = _positioning.seekPrevious.call(inputmask, pos.end, !0), !0 === _validationTests.getTest.call(inputmask, pos.end - 1).match.static && pos.end--, pos.begin = _positioning.seekPrevious.call(inputmask, pos.end, !0), 0 <= pos.begin && 0 < pos.end && (e.preventDefault(), _positioning.caret.call(inputmask, input, pos.begin, pos.end))) : (pos.begin = _positioning.seekNext.call(inputmask, pos.begin, !0), pos.end = _positioning.seekNext.call(inputmask, pos.begin, !0), pos.end < maskset.maskLength && pos.end--, pos.begin <= maskset.maskLength && (e.preventDefault(), _positioning.caret.call(inputmask, input, pos.begin, pos.end))) : e.shiftKey || opts.insertModeVisual && !1 === opts.insertMode && (k === _keycode.default.RIGHT ? setTimeout(function () {
          var caretPos = _positioning.caret.call(inputmask, input);

          _positioning.caret.call(inputmask, input, caretPos.begin);
        }, 0) : k === _keycode.default.LEFT && setTimeout(function () {
          var caretPos_begin = _positioning.translatePosition.call(inputmask, input.inputmask.caretPos.begin),
              caretPos_end = _positioning.translatePosition.call(inputmask, input.inputmask.caretPos.end);

          inputmask.isRTL ? _positioning.caret.call(inputmask, input, caretPos_begin + (caretPos_begin === maskset.maskLength ? 0 : 1)) : _positioning.caret.call(inputmask, input, caretPos_begin - (0 === caretPos_begin ? 0 : 1));
        }, 0));
        inputmask.ignorable = opts.ignorables.includes(k);
      },
      keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
        var inputmask = this.inputmask || this,
            opts = inputmask.opts,
            $ = inputmask.dependencyLib,
            maskset = inputmask.maskset,
            input = inputmask.el,
            $input = $(input),
            k = e.which || e.charCode || e.keyCode;
        if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || inputmask.ignorable)) return k === _keycode.default.ENTER && inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join("") && (inputmask.undoValue = _positioning.getBuffer.call(inputmask).join(""), setTimeout(function () {
          $input.trigger("change");
        }, 0)), inputmask.skipInputEvent = !0, !0;

        if (k) {
          44 !== k && 46 !== k || 3 !== e.location || "" === opts.radixPoint || (k = opts.radixPoint.charCodeAt(0));
          var pos = checkval ? {
            begin: ndx,
            end: ndx
          } : _positioning.caret.call(inputmask, input),
              forwardPosition,
              c = String.fromCharCode(k);
          maskset.writeOutBuffer = !0;

          var valResult = _validation.isValid.call(inputmask, pos, c, strict, void 0, void 0, void 0, checkval);

          if (!1 !== valResult && (_positioning.resetMaskSet.call(inputmask, !0), forwardPosition = void 0 !== valResult.caret ? valResult.caret : _positioning.seekNext.call(inputmask, valResult.pos.begin ? valResult.pos.begin : valResult.pos), maskset.p = forwardPosition), forwardPosition = opts.numericInput && void 0 === valResult.caret ? _positioning.seekPrevious.call(inputmask, forwardPosition) : forwardPosition, !1 !== writeOut && (setTimeout(function () {
            opts.onKeyValidation.call(input, k, valResult);
          }, 0), maskset.writeOutBuffer && !1 !== valResult)) {
            var buffer = _positioning.getBuffer.call(inputmask);

            (0, _inputHandling.writeBuffer)(input, buffer, forwardPosition, e, !0 !== checkval);
          }

          if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), valResult;
        }
      },
      keyupEvent: function keyupEvent(e) {
        var inputmask = this.inputmask;
        !inputmask.isComposing || e.keyCode !== _keycode.default.KEY_229 && e.keyCode !== _keycode.default.ENTER || inputmask.$el.trigger("input");
      },
      pasteEvent: function pasteEvent(e) {
        var inputmask = this.inputmask,
            opts = inputmask.opts,
            input = this,
            inputValue = inputmask._valueGet(!0),
            caretPos = _positioning.caret.call(inputmask, this),
            tempValue;

        inputmask.isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
        var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
            valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
        if (valueBeforeCaret == (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), valueAfterCaret == (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).slice(caretPos.end).join("") && (valueAfterCaret = ""), window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;else {
          if (!e.clipboardData || !e.clipboardData.getData) return !0;
          inputValue = valueBeforeCaret + e.clipboardData.getData("text/plain") + valueAfterCaret;
        }
        var pasteValue = inputValue;

        if ("function" == typeof opts.onBeforePaste) {
          if (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts), !1 === pasteValue) return e.preventDefault();
          pasteValue = pasteValue || inputValue;
        }

        return (0, _inputHandling.checkVal)(this, !0, !1, pasteValue.toString().split(""), e), e.preventDefault();
      },
      inputFallBackEvent: function inputFallBackEvent(e) {
        var inputmask = this.inputmask,
            opts = inputmask.opts,
            $ = inputmask.dependencyLib;

        function ieMobileHandler(input, inputValue, caretPos) {
          if (_environment.iemobile) {
            var inputChar = inputValue.replace(_positioning.getBuffer.call(inputmask).join(""), "");

            if (1 === inputChar.length) {
              var iv = inputValue.split("");
              iv.splice(caretPos.begin, 0, inputChar), inputValue = iv.join("");
            }
          }

          return inputValue;
        }

        function analyseChanges(inputValue, buffer, caretPos) {
          for (var frontPart = inputValue.substr(0, caretPos.begin).split(""), backPart = inputValue.substr(caretPos.begin).split(""), frontBufferPart = buffer.substr(0, caretPos.begin).split(""), backBufferPart = buffer.substr(caretPos.begin).split(""), fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length, bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length, bl, i, action = "", data = [], marker = "~", placeholder; frontPart.length < fpl;) {
            frontPart.push("~");
          }

          for (; frontBufferPart.length < fpl;) {
            frontBufferPart.push("~");
          }

          for (; backPart.length < bpl;) {
            backPart.unshift("~");
          }

          for (; backBufferPart.length < bpl;) {
            backBufferPart.unshift("~");
          }

          var newBuffer = frontPart.concat(backPart),
              oldBuffer = frontBufferPart.concat(backBufferPart);

          for (i = 0, bl = newBuffer.length; i < bl; i++) {
            switch (placeholder = _validationTests.getPlaceholder.call(inputmask, _positioning.translatePosition.call(inputmask, i)), action) {
              case "insertText":
                oldBuffer[i - 1] === newBuffer[i] && caretPos.begin == newBuffer.length - 1 && data.push(newBuffer[i]), i = bl;
                break;

              case "insertReplacementText":
                "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                break;

              case "deleteContentBackward":
                "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                break;

              default:
                newBuffer[i] !== oldBuffer[i] && ("~" !== newBuffer[i + 1] && newBuffer[i + 1] !== placeholder && void 0 !== newBuffer[i + 1] || (oldBuffer[i] !== placeholder || "~" !== oldBuffer[i + 1]) && "~" !== oldBuffer[i] ? "~" === oldBuffer[i + 1] && oldBuffer[i] === newBuffer[i + 1] ? (action = "insertText", data.push(newBuffer[i]), caretPos.begin--, caretPos.end--) : newBuffer[i] !== placeholder && "~" !== newBuffer[i] && ("~" === newBuffer[i + 1] || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1]) ? (action = "insertReplacementText", data.push(newBuffer[i]), caretPos.begin--) : "~" === newBuffer[i] ? (action = "deleteContentBackward", !_positioning.isMask.call(inputmask, _positioning.translatePosition.call(inputmask, i), !0) && oldBuffer[i] !== opts.radixPoint || caretPos.end++) : i = bl : (action = "insertText", data.push(newBuffer[i]), caretPos.begin--, caretPos.end--));
                break;
            }
          }

          return {
            action: action,
            data: data,
            caret: caretPos
          };
        }

        var input = this,
            inputValue = input.inputmask._valueGet(!0),
            buffer = (inputmask.isRTL ? _positioning.getBuffer.call(inputmask).slice().reverse() : _positioning.getBuffer.call(inputmask)).join(""),
            caretPos = _positioning.caret.call(inputmask, input, void 0, void 0, !0);

        if (buffer !== inputValue) {
          inputValue = ieMobileHandler(input, inputValue, caretPos);
          var changes = analyseChanges(inputValue, buffer, caretPos);

          switch ((input.inputmask.shadowRoot || document).activeElement !== input && input.focus(), (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask)), _positioning.caret.call(inputmask, input, caretPos.begin, caretPos.end, !0), changes.action) {
            case "insertText":
            case "insertReplacementText":
              changes.data.forEach(function (entry, ndx) {
                var keypress = new $.Event("keypress");
                keypress.which = entry.charCodeAt(0), inputmask.ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
              }), setTimeout(function () {
                inputmask.$el.trigger("keyup");
              }, 0);
              break;

            case "deleteContentBackward":
              var keydown = new $.Event("keydown");
              keydown.keyCode = _keycode.default.BACKSPACE, EventHandlers.keydownEvent.call(input, keydown);
              break;

            default:
              (0, _inputHandling.applyInputValue)(input, inputValue);
              break;
          }

          e.preventDefault();
        }
      },
      compositionendEvent: function compositionendEvent(e) {
        var inputmask = this.inputmask;
        inputmask.isComposing = !1, inputmask.$el.trigger("input");
      },
      setValueEvent: function setValueEvent(e, argument_1, argument_2) {
        var inputmask = this.inputmask,
            input = this,
            value = e && e.detail ? e.detail[0] : argument_1;
        void 0 === value && (value = this.inputmask._valueGet(!0)), (0, _inputHandling.applyInputValue)(this, value), (e.detail && void 0 !== e.detail[1] || void 0 !== argument_2) && _positioning.caret.call(inputmask, this, e.detail ? e.detail[1] : argument_2);
      },
      focusEvent: function focusEvent(e) {
        var inputmask = this.inputmask,
            opts = inputmask.opts,
            input = this,
            nptValue = this.inputmask._valueGet();

        opts.showMaskOnFocus && nptValue !== _positioning.getBuffer.call(inputmask).join("") && (0, _inputHandling.writeBuffer)(this, _positioning.getBuffer.call(inputmask), _positioning.seekNext.call(inputmask, _positioning.getLastValidPosition.call(inputmask))), !0 !== opts.positionCaretOnTab || !1 !== inputmask.mouseEnter || _validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && -1 !== _positioning.getLastValidPosition.call(inputmask) || EventHandlers.clickEvent.apply(this, [e, !0]), inputmask.undoValue = _positioning.getBuffer.call(inputmask).join("");
      },
      invalidEvent: function invalidEvent(e) {
        this.inputmask.validationEvent = !0;
      },
      mouseleaveEvent: function mouseleaveEvent() {
        var inputmask = this.inputmask,
            opts = inputmask.opts,
            input = this;
        inputmask.mouseEnter = !1, opts.clearMaskOnLostFocus && (this.inputmask.shadowRoot || document).activeElement !== this && (0, _inputHandling.HandleNativePlaceholder)(this, inputmask.originalPlaceholder);
      },
      clickEvent: function clickEvent(e, tabbed) {
        var inputmask = this.inputmask,
            input = this;

        if ((this.inputmask.shadowRoot || document).activeElement === this) {
          var newCaretPosition = _positioning.determineNewCaretPosition.call(inputmask, _positioning.caret.call(inputmask, this), tabbed);

          void 0 !== newCaretPosition && _positioning.caret.call(inputmask, this, newCaretPosition);
        }
      },
      cutEvent: function cutEvent(e) {
        var inputmask = this.inputmask,
            maskset = inputmask.maskset,
            input = this,
            pos = _positioning.caret.call(inputmask, this),
            clipboardData = window.clipboardData || e.clipboardData,
            clipData = inputmask.isRTL ? _positioning.getBuffer.call(inputmask).slice(pos.end, pos.begin) : _positioning.getBuffer.call(inputmask).slice(pos.begin, pos.end);

        clipboardData.setData("text", inputmask.isRTL ? clipData.reverse().join("") : clipData.join("")), document.execCommand && document.execCommand("copy"), _validation.handleRemove.call(inputmask, this, _keycode.default.DELETE, pos), (0, _inputHandling.writeBuffer)(this, _positioning.getBuffer.call(inputmask), maskset.p, e, inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join(""));
      },
      blurEvent: function blurEvent(e) {
        var inputmask = this.inputmask,
            opts = inputmask.opts,
            $ = inputmask.dependencyLib,
            $input = $(this),
            input = this;

        if (this.inputmask) {
          (0, _inputHandling.HandleNativePlaceholder)(this, inputmask.originalPlaceholder);

          var nptValue = this.inputmask._valueGet(),
              buffer = _positioning.getBuffer.call(inputmask).slice();

          "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === _positioning.getLastValidPosition.call(inputmask) && nptValue === _positioning.getBufferTemplate.call(inputmask).join("") ? buffer = [] : _inputHandling.clearOptionalTail.call(inputmask, buffer)), !1 === _validation.isComplete.call(inputmask, buffer) && (setTimeout(function () {
            $input.trigger("incomplete");
          }, 0), opts.clearIncomplete && (_positioning.resetMaskSet.call(inputmask), buffer = opts.clearMaskOnLostFocus ? [] : _positioning.getBufferTemplate.call(inputmask).slice())), (0, _inputHandling.writeBuffer)(this, buffer, void 0, e)), inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join("") && (inputmask.undoValue = _positioning.getBuffer.call(inputmask).join(""), $input.trigger("change"));
        }
      },
      mouseenterEvent: function mouseenterEvent() {
        var inputmask = this.inputmask,
            opts = inputmask.opts,
            input = this;
        inputmask.mouseEnter = !0, (this.inputmask.shadowRoot || document).activeElement !== this && (null == inputmask.originalPlaceholder && this.placeholder !== inputmask.originalPlaceholder && (inputmask.originalPlaceholder = this.placeholder), opts.showMaskOnHover && (0, _inputHandling.HandleNativePlaceholder)(this, (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).join("")));
      },
      submitEvent: function submitEvent() {
        var inputmask = this.inputmask,
            opts = inputmask.opts;
        inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join("") && inputmask.$el.trigger("change"), opts.clearMaskOnLostFocus && -1 === _positioning.getLastValidPosition.call(inputmask) && inputmask._valueGet && inputmask._valueGet() === _positioning.getBufferTemplate.call(inputmask).join("") && inputmask._valueSet(""), opts.clearIncomplete && !1 === _validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && inputmask._valueSet(""), opts.removeMaskOnSubmit && (inputmask._valueSet(inputmask.unmaskedvalue(), !0), setTimeout(function () {
          (0, _inputHandling.writeBuffer)(inputmask.el, _positioning.getBuffer.call(inputmask));
        }, 0));
      },
      resetEvent: function resetEvent() {
        var inputmask = this.inputmask;
        inputmask.refreshValue = !0, setTimeout(function () {
          (0, _inputHandling.applyInputValue)(inputmask.el, inputmask._valueGet(!0));
        }, 0);
      }
    };
    exports.EventHandlers = EventHandlers;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.iphone = exports.iemobile = exports.mobile = exports.ie = exports.ua = void 0;
    var ua = window.navigator && window.navigator.userAgent || "",
        ie = 0 < ua.indexOf("MSIE ") || 0 < ua.indexOf("Trident/"),
        mobile = "ontouchstart" in window,
        iemobile = /iemobile/i.test(ua),
        iphone = /iphone/i.test(ua) && !iemobile;
    exports.iphone = iphone, exports.iemobile = iemobile, exports.mobile = mobile, exports.ie = ie, exports.ua = ua;
  }, function (module, exports) {
    module.exports = __WEBPACK_EXTERNAL_MODULE__8__;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.mask = mask;

    var _keycode = _interopRequireDefault(__webpack_require__(0)),
        _positioning = __webpack_require__(2),
        _inputHandling = __webpack_require__(5),
        _eventruler = __webpack_require__(10),
        _environment = __webpack_require__(7),
        _validation = __webpack_require__(4),
        _eventhandlers = __webpack_require__(6);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function mask() {
      var inputmask = this,
          opts = this.opts,
          el = this.el,
          $ = this.dependencyLib;

      function isElementTypeSupported(input, opts) {
        function patchValueProperty(npt) {
          var valueGet, valueSet;

          function patchValhook(type) {
            if ($.valHooks && (void 0 === $.valHooks[type] || !0 !== $.valHooks[type].inputmaskpatch)) {
              var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                return elem.value;
              },
                  valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                return elem.value = value, elem;
              };
              $.valHooks[type] = {
                get: function get(elem) {
                  if (elem.inputmask) {
                    if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                    var result = valhookGet(elem);
                    return -1 !== _positioning.getLastValidPosition.call(inputmask, void 0, void 0, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";
                  }

                  return valhookGet(elem);
                },
                set: function set(elem, value) {
                  var result = valhookSet(elem, value);
                  return elem.inputmask && (0, _inputHandling.applyInputValue)(elem, value), result;
                },
                inputmaskpatch: !0
              };
            }
          }

          function getter() {
            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== _positioning.getLastValidPosition.call(inputmask) || !0 !== opts.nullable ? (this.inputmask.shadowRoot || document.activeElement) === this && opts.clearMaskOnLostFocus ? (inputmask.isRTL ? _inputHandling.clearOptionalTail.call(inputmask, _positioning.getBuffer.call(inputmask).slice()).reverse() : _inputHandling.clearOptionalTail.call(inputmask, _positioning.getBuffer.call(inputmask).slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
          }

          function setter(value) {
            valueSet.call(this, value), this.inputmask && (0, _inputHandling.applyInputValue)(this, value);
          }

          function installNativeValueSetFallback(npt) {
            _eventruler.EventRuler.on(npt, "mouseenter", function () {
              var input = this,
                  value = this.inputmask._valueGet(!0);

              value !== (inputmask.isRTL ? _positioning.getBuffer.call(inputmask).reverse() : _positioning.getBuffer.call(inputmask)).join("") && (0, _inputHandling.applyInputValue)(this, value);
            });
          }

          if (!npt.inputmask.__valueGet) {
            if (!0 !== opts.noValuePatching) {
              if (Object.getOwnPropertyDescriptor) {
                var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : void 0;
                valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                  get: getter,
                  set: setter,
                  configurable: !0
                })) : "input" !== npt.tagName.toLowerCase() && (valueGet = function valueGet() {
                  return this.textContent;
                }, valueSet = function valueSet(value) {
                  this.textContent = value;
                }, Object.defineProperty(npt, "value", {
                  get: getter,
                  set: setter,
                  configurable: !0
                }));
              } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), npt.__defineSetter__("value", setter));

              npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
            }

            npt.inputmask._valueGet = function (overruleRTL) {
              return inputmask.isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
            }, npt.inputmask._valueSet = function (value, overruleRTL) {
              valueSet.call(this.el, null == value ? "" : !0 !== overruleRTL && inputmask.isRTL ? value.split("").reverse().join("") : value);
            }, void 0 === valueGet && (valueGet = function valueGet() {
              return this.value;
            }, valueSet = function valueSet(value) {
              this.value = value;
            }, patchValhook(npt.type), installNativeValueSetFallback(npt));
          }
        }

        "textarea" !== input.tagName.toLowerCase() && opts.ignorables.push(_keycode.default.ENTER);
        var elementType = input.getAttribute("type"),
            isSupported = "input" === input.tagName.toLowerCase() && opts.supportsInputType.includes(elementType) || input.isContentEditable || "textarea" === input.tagName.toLowerCase();
        if (!isSupported) if ("input" === input.tagName.toLowerCase()) {
          var el = document.createElement("input");
          el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
        } else isSupported = "partial";
        return !1 !== isSupported ? patchValueProperty(input) : input.inputmask = void 0, isSupported;
      }

      _eventruler.EventRuler.off(el);

      var isSupported = isElementTypeSupported(el, opts);

      if (!1 !== isSupported) {
        inputmask.originalPlaceholder = el.placeholder, inputmask.maxLength = void 0 !== el ? el.maxLength : void 0, -1 === inputmask.maxLength && (inputmask.maxLength = void 0), "inputMode" in el && null === el.getAttribute("inputmode") && (el.inputMode = opts.inputmode, el.setAttribute("inputmode", opts.inputmode)), !0 === isSupported && (opts.showMaskOnFocus = opts.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(el.autocomplete), _environment.iphone && (opts.insertModeVisual = !1), _eventruler.EventRuler.on(el, "submit", _eventhandlers.EventHandlers.submitEvent), _eventruler.EventRuler.on(el, "reset", _eventhandlers.EventHandlers.resetEvent), _eventruler.EventRuler.on(el, "blur", _eventhandlers.EventHandlers.blurEvent), _eventruler.EventRuler.on(el, "focus", _eventhandlers.EventHandlers.focusEvent), _eventruler.EventRuler.on(el, "invalid", _eventhandlers.EventHandlers.invalidEvent), _eventruler.EventRuler.on(el, "click", _eventhandlers.EventHandlers.clickEvent), _eventruler.EventRuler.on(el, "mouseleave", _eventhandlers.EventHandlers.mouseleaveEvent), _eventruler.EventRuler.on(el, "mouseenter", _eventhandlers.EventHandlers.mouseenterEvent), _eventruler.EventRuler.on(el, "paste", _eventhandlers.EventHandlers.pasteEvent), _eventruler.EventRuler.on(el, "cut", _eventhandlers.EventHandlers.cutEvent), _eventruler.EventRuler.on(el, "complete", opts.oncomplete), _eventruler.EventRuler.on(el, "incomplete", opts.onincomplete), _eventruler.EventRuler.on(el, "cleared", opts.oncleared), !0 !== opts.inputEventOnly && (_eventruler.EventRuler.on(el, "keydown", _eventhandlers.EventHandlers.keydownEvent), _eventruler.EventRuler.on(el, "keypress", _eventhandlers.EventHandlers.keypressEvent), _eventruler.EventRuler.on(el, "keyup", _eventhandlers.EventHandlers.keyupEvent)), (_environment.mobile || opts.inputEventOnly) && el.removeAttribute("maxLength"), _eventruler.EventRuler.on(el, "input", _eventhandlers.EventHandlers.inputFallBackEvent), _eventruler.EventRuler.on(el, "compositionend", _eventhandlers.EventHandlers.compositionendEvent)), _eventruler.EventRuler.on(el, "setvalue", _eventhandlers.EventHandlers.setValueEvent), inputmask.undoValue = _positioning.getBufferTemplate.call(inputmask).join("");
        var activeElement = (el.inputmask.shadowRoot || document).activeElement;

        if ("" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || activeElement === el) {
          (0, _inputHandling.applyInputValue)(el, el.inputmask._valueGet(!0), opts);

          var buffer = _positioning.getBuffer.call(inputmask).slice();

          !1 === _validation.isComplete.call(inputmask, buffer) && opts.clearIncomplete && _positioning.resetMaskSet.call(inputmask), opts.clearMaskOnLostFocus && activeElement !== el && (-1 === _positioning.getLastValidPosition.call(inputmask) ? buffer = [] : _inputHandling.clearOptionalTail.call(inputmask, buffer)), (!1 === opts.clearMaskOnLostFocus || opts.showMaskOnFocus && activeElement === el || "" !== el.inputmask._valueGet(!0)) && (0, _inputHandling.writeBuffer)(el, buffer), activeElement === el && _positioning.caret.call(inputmask, el, _positioning.seekNext.call(inputmask, _positioning.getLastValidPosition.call(inputmask)));
        }
      }
    }
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.EventRuler = void 0;

    var _inputmask = _interopRequireDefault(__webpack_require__(1)),
        _keycode = _interopRequireDefault(__webpack_require__(0)),
        _positioning = __webpack_require__(2),
        _inputHandling = __webpack_require__(5);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var EventRuler = {
      on: function on(input, eventName, eventHandler) {
        var $ = input.inputmask.dependencyLib,
            ev = function ev(e) {
          e.originalEvent && (e = e.originalEvent || e, arguments[0] = e);
          var that = this,
              args,
              inputmask = that.inputmask,
              opts = inputmask ? inputmask.opts : void 0;

          if (void 0 === inputmask && "FORM" !== this.nodeName) {
            var imOpts = $.data(that, "_inputmask_opts");
            $(that).off(), imOpts && new _inputmask.default(imOpts).mask(that);
          } else {
            if ("setvalue" === e.type || "FORM" === this.nodeName || !(that.disabled || that.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === _keycode.default.TAB))) {
              switch (e.type) {
                case "input":
                  if (!0 === inputmask.skipInputEvent || e.inputType && "insertCompositionText" === e.inputType) return inputmask.skipInputEvent = !1, e.preventDefault();
                  break;

                case "keydown":
                  inputmask.skipKeyPressEvent = !1, inputmask.skipInputEvent = inputmask.isComposing = e.keyCode === _keycode.default.KEY_229;
                  break;

                case "keyup":
                case "compositionend":
                  inputmask.isComposing && (inputmask.skipInputEvent = !1);
                  break;

                case "keypress":
                  if (!0 === inputmask.skipKeyPressEvent) return e.preventDefault();
                  inputmask.skipKeyPressEvent = !0;
                  break;

                case "click":
                case "focus":
                  return inputmask.validationEvent ? (inputmask.validationEvent = !1, input.blur(), (0, _inputHandling.HandleNativePlaceholder)(input, (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).join("")), setTimeout(function () {
                    input.focus();
                  }, 3e3)) : (args = arguments, setTimeout(function () {
                    input.inputmask && eventHandler.apply(that, args);
                  }, 0)), !1;
              }

              var returnVal = eventHandler.apply(that, arguments);
              return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
            }

            e.preventDefault();
          }
        };

        input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), ["submit", "reset"].includes(eventName) ? null !== input.form && $(input.form).on(eventName, ev.bind(input)) : $(input).on(eventName, ev);
      },
      off: function off(input, event) {
        if (input.inputmask && input.inputmask.events) {
          var $ = input.inputmask.dependencyLib,
              events = input.inputmask.events;

          for (var eventName in event && (events = [], events[event] = input.inputmask.events[event]), events) {
            for (var evArr = events[eventName]; 0 < evArr.length;) {
              var ev = evArr.pop();
              ["submit", "reset"].includes(eventName) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
            }

            delete input.inputmask.events[eventName];
          }
        }
      }
    };
    exports.EventRuler = EventRuler;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var _jquery = _interopRequireDefault(__webpack_require__(8));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    if (void 0 === _jquery.default) throw "jQuery not loaded!";
    var _default = _jquery.default;
    exports.default = _default;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var _default = "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window;

    exports.default = _default;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = _default;
    var escapeRegexRegex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");

    function _default(str) {
      return str.replace(escapeRegexRegex, "\\$1");
    }
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0, __webpack_require__(15), __webpack_require__(21), __webpack_require__(23), __webpack_require__(24);

    var _inputmask2 = _interopRequireDefault(__webpack_require__(1));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var _default = _inputmask2.default;
    exports.default = _default;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    var _inputmask = _interopRequireDefault(__webpack_require__(1));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    _inputmask.default.extendDefinitions({
      A: {
        validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
        casing: "upper"
      },
      "&": {
        validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
        casing: "upper"
      },
      "#": {
        validator: "[0-9A-Fa-f]",
        casing: "upper"
      }
    });

    var ipValidatorRegex = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");

    function ipValidator(chrs, maskset, pos, strict, opts) {
      return chrs = -1 < pos - 1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, -1 < pos - 2 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : "00" + chrs, ipValidatorRegex.test(chrs);
    }

    _inputmask.default.extendAliases({
      cssunit: {
        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
      },
      url: {
        regex: "(https?|ftp)://.*",
        autoUnmask: !1,
        keepStatic: !1,
        tabThrough: !0
      },
      ip: {
        mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
        definitions: {
          i: {
            validator: ipValidator
          },
          j: {
            validator: ipValidator
          },
          k: {
            validator: ipValidator
          },
          l: {
            validator: ipValidator
          }
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          return maskedValue;
        },
        inputmode: "numeric"
      },
      email: {
        mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
        greedy: !1,
        casing: "lower",
        onBeforePaste: function onBeforePaste(pastedValue, opts) {
          return pastedValue = pastedValue.toLowerCase(), pastedValue.replace("mailto:", "");
        },
        definitions: {
          "*": {
            validator: "[0-9\uFF11-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5!#$%&'*+/=?^_`{|}~-]"
          },
          "-": {
            validator: "[0-9A-Za-z-]"
          }
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          return maskedValue;
        },
        inputmode: "email"
      },
      mac: {
        mask: "##:##:##:##:##:##"
      },
      vin: {
        mask: "V{13}9{4}",
        definitions: {
          V: {
            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
            casing: "upper"
          }
        },
        clearIncomplete: !0,
        autoUnmask: !0
      },
      ssn: {
        mask: "999-99-9999",
        postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
          return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(""));
        }
      }
    });
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function _typeof(obj) {
      return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
        return _typeof2(obj);
      } : function _typeof(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      }, _typeof(obj);
    }

    "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function (object) {
      return object.__proto__;
    } : function (object) {
      return object.constructor.prototype;
    });
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
      value: function value(searchElement, fromIndex) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var o = Object(this),
            len = o.length >>> 0;
        if (0 == len) return !1;

        for (var n = 0 | fromIndex, k = Math.max(0 <= n ? n : len - Math.abs(n), 0); k < len;) {
          if (o[k] === searchElement) return !0;
          k++;
        }

        return !1;
      }
    });
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.generateMaskSet = generateMaskSet, exports.analyseMask = analyseMask;

    var _inputmask = _interopRequireDefault(__webpack_require__(11));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function generateMaskSet(opts, nocache) {
      var ms;

      function generateMask(mask, metadata, opts) {
        var regexMask = !1,
            masksetDefinition,
            maskdefKey;

        if (null !== mask && "" !== mask || (regexMask = null !== opts.regex, mask = regexMask ? (mask = opts.regex, mask.replace(/^(\^)(.*)(\$)$/, "$2")) : (regexMask = !0, ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), 0 < opts.repeat || "*" === opts.repeat || "+" === opts.repeat) {
          var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
          mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
        }

        return maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask, !1 !== opts.keepStatic && (maskdefKey = "ks_" + maskdefKey), void 0 === Inputmask.prototype.masksCache[maskdefKey] || !0 === nocache ? (masksetDefinition = {
          mask: mask,
          maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
          validPositions: {},
          _buffer: void 0,
          buffer: void 0,
          tests: {},
          excludes: {},
          metadata: metadata,
          maskLength: void 0,
          jitOffset: {}
        }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, masksetDefinition = _inputmask.default.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = _inputmask.default.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), masksetDefinition;
      }

      if ("function" == typeof opts.mask && (opts.mask = opts.mask(opts)), Array.isArray(opts.mask)) {
        if (1 < opts.mask.length) {
          null === opts.keepStatic && (opts.keepStatic = !0);
          var altMask = opts.groupmarker[0];
          return (opts.isRTL ? opts.mask.reverse() : opts.mask).forEach(function (msk) {
            1 < altMask.length && (altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]), void 0 !== msk.mask && "function" != typeof msk.mask ? altMask += msk.mask : altMask += msk;
          }), altMask += opts.groupmarker[1], generateMask(altMask, opts.mask, opts);
        }

        opts.mask = opts.mask.pop();
      }

      return null === opts.keepStatic && (opts.keepStatic = !1), ms = opts.mask && void 0 !== opts.mask.mask && "function" != typeof opts.mask.mask ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts), ms;
    }

    function analyseMask(mask, regexMask, opts) {
      var tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
          regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
          escaped = !1,
          currentToken = new MaskToken(),
          match,
          m,
          openenings = [],
          maskTokens = [],
          openingToken,
          currentOpeningToken,
          alternator,
          lastMatch,
          closeRegexGroup = !1;

      function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
        this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, this.quantifier = {
          min: 1,
          max: 1
        };
      }

      function insertTestDefinition(mtoken, element, position) {
        position = void 0 !== position ? position : mtoken.matches.length;
        var prevMatch = mtoken.matches[position - 1];
        if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
          fn: new RegExp(element, opts.casing ? "i" : ""),
          static: !1,
          optionality: !1,
          newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element,
          casing: null,
          def: element,
          placeholder: void 0,
          nativeDef: element
        }) : (escaped && (element = element[element.length - 1]), element.split("").forEach(function (lmnt, ndx) {
          prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
            fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", opts.casing ? "i" : "") : null,
            static: !0,
            optionality: !1,
            newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== lmnt && !0 !== prevMatch.static,
            casing: null,
            def: opts.staticDefinitionSymbol || lmnt,
            placeholder: void 0 !== opts.staticDefinitionSymbol ? lmnt : void 0,
            nativeDef: (escaped ? "'" : "") + lmnt
          });
        })), escaped = !1;else {
          var maskdef = opts.definitions && opts.definitions[element] || opts.usePrototypeDefinitions && Inputmask.prototype.definitions[element];
          maskdef && !escaped ? mtoken.matches.splice(position++, 0, {
            fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function () {
              this.test = maskdef.validator;
            }() : new RegExp("."),
            static: maskdef.static || !1,
            optionality: !1,
            newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
            casing: maskdef.casing,
            def: maskdef.definitionSymbol || element,
            placeholder: maskdef.placeholder,
            nativeDef: element,
            generated: maskdef.generated
          }) : (mtoken.matches.splice(position++, 0, {
            fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", opts.casing ? "i" : "") : null,
            static: !0,
            optionality: !1,
            newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element && !0 !== prevMatch.static,
            casing: null,
            def: opts.staticDefinitionSymbol || element,
            placeholder: void 0 !== opts.staticDefinitionSymbol ? element : void 0,
            nativeDef: (escaped ? "'" : "") + element
          }), escaped = !1);
        }
      }

      function verifyGroupMarker(maskToken) {
        maskToken && maskToken.matches && maskToken.matches.forEach(function (token, ndx) {
          var nextToken = maskToken.matches[ndx + 1];
          (void 0 === nextToken || void 0 === nextToken.matches || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, regexMask || (insertTestDefinition(token, opts.groupmarker[0], 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker[1]))), verifyGroupMarker(token);
        });
      }

      function defaultCase() {
        if (0 < openenings.length) {
          if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), currentOpeningToken.isAlternator) {
            alternator = openenings.pop();

            for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
              alternator.matches[mndx].isGroup && (alternator.matches[mndx].isGroup = !1);
            }

            0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
          }
        } else insertTestDefinition(currentToken, m);
      }

      function reverseTokens(maskToken) {
        function reverseStatic(st) {
          return st === opts.optionalmarker[0] ? st = opts.optionalmarker[1] : st === opts.optionalmarker[1] ? st = opts.optionalmarker[0] : st === opts.groupmarker[0] ? st = opts.groupmarker[1] : st === opts.groupmarker[1] && (st = opts.groupmarker[0]), st;
        }

        for (var match in maskToken.matches = maskToken.matches.reverse(), maskToken.matches) {
          if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
            var intMatch = parseInt(match);

            if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
              var qt = maskToken.matches[match];
              maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
            }

            void 0 !== maskToken.matches[match].matches ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
          }
        }

        return maskToken;
      }

      function groupify(matches) {
        var groupToken = new MaskToken(!0);
        return groupToken.openGroup = !1, groupToken.matches = matches, groupToken;
      }

      function closeGroup() {
        if (openingToken = openenings.pop(), openingToken.openGroup = !1, void 0 !== openingToken) {
          if (0 < openenings.length) {
            if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken), currentOpeningToken.isAlternator) {
              alternator = openenings.pop();

              for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                alternator.matches[mndx].isGroup = !1, alternator.matches[mndx].alternatorGroup = !1;
              }

              0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
            }
          } else currentToken.matches.push(openingToken);
        } else defaultCase();
      }

      function groupQuantifier(matches) {
        var lastMatch = matches.pop();
        return lastMatch.isQuantifier && (lastMatch = groupify([matches.pop(), lastMatch])), lastMatch;
      }

      for (regexMask && (opts.optionalmarker[0] = void 0, opts.optionalmarker[1] = void 0); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask);) {
        if (m = match[0], regexMask) switch (m.charAt(0)) {
          case "?":
            m = "{0,1}";
            break;

          case "+":
          case "*":
            m = "{" + m + "}";
            break;

          case "|":
            if (0 === openenings.length) {
              var altRegexGroup = groupify(currentToken.matches);
              altRegexGroup.openGroup = !0, openenings.push(altRegexGroup), currentToken.matches = [], closeRegexGroup = !0;
            }

            break;
        }
        if (escaped) defaultCase();else switch (m.charAt(0)) {
          case "$":
          case "^":
            regexMask || defaultCase();
            break;

          case "(?=":
            break;

          case "(?!":
            break;

          case "(?<=":
            break;

          case "(?<!":
            break;

          case opts.escapeChar:
            escaped = !0, regexMask && defaultCase();
            break;

          case opts.optionalmarker[1]:
          case opts.groupmarker[1]:
            closeGroup();
            break;

          case opts.optionalmarker[0]:
            openenings.push(new MaskToken(!1, !0));
            break;

          case opts.groupmarker[0]:
            openenings.push(new MaskToken(!0));
            break;

          case opts.quantifiermarker[0]:
            var quantifier = new MaskToken(!1, !1, !0);
            m = m.replace(/[{}]/g, "");
            var mqj = m.split("|"),
                mq = mqj[0].split(","),
                mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
            "*" !== mq0 && "+" !== mq0 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
              min: mq0,
              max: mq1,
              jit: mqj[1]
            };
            var matches = 0 < openenings.length ? openenings[openenings.length - 1].matches : currentToken.matches;

            if (match = matches.pop(), match.isAlternator) {
              matches.push(match), matches = match.matches;
              var groupToken = new MaskToken(!0),
                  tmpMatch = matches.pop();
              matches.push(groupToken), matches = groupToken.matches, match = tmpMatch;
            }

            match.isGroup || (match = groupify([match])), matches.push(match), matches.push(quantifier);
            break;

          case opts.alternatormarker:
            if (0 < openenings.length) {
              currentOpeningToken = openenings[openenings.length - 1];
              var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
              lastMatch = currentOpeningToken.openGroup && (void 0 === subToken.matches || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : groupQuantifier(currentOpeningToken.matches);
            } else lastMatch = groupQuantifier(currentToken.matches);

            if (lastMatch.isAlternator) openenings.push(lastMatch);else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), openenings.push(alternator), lastMatch.openGroup) {
              lastMatch.openGroup = !1;
              var alternatorGroup = new MaskToken(!0);
              alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);
            }
            break;

          default:
            defaultCase();
        }
      }

      for (closeRegexGroup && closeGroup(); 0 < openenings.length;) {
        openingToken = openenings.pop(), currentToken.matches.push(openingToken);
      }

      return 0 < currentToken.matches.length && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;
    }
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var _default = {
      9: {
        validator: "[0-9\uFF10-\uFF19]",
        definitionSymbol: "*"
      },
      a: {
        validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
        definitionSymbol: "*"
      },
      "*": {
        validator: "[0-9\uFF10-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]"
      }
    };
    exports.default = _default;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var _default = {
      _maxTestPos: 500,
      placeholder: "_",
      optionalmarker: ["[", "]"],
      quantifiermarker: ["{", "}"],
      groupmarker: ["(", ")"],
      alternatormarker: "|",
      escapeChar: "\\",
      mask: null,
      regex: null,
      oncomplete: function oncomplete() {},
      onincomplete: function onincomplete() {},
      oncleared: function oncleared() {},
      repeat: 0,
      greedy: !1,
      autoUnmask: !1,
      removeMaskOnSubmit: !1,
      clearMaskOnLostFocus: !0,
      insertMode: !0,
      insertModeVisual: !0,
      clearIncomplete: !1,
      alias: null,
      onKeyDown: function onKeyDown() {},
      onBeforeMask: null,
      onBeforePaste: function onBeforePaste(pastedValue, opts) {
        return "function" == typeof opts.onBeforeMask ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
      },
      onBeforeWrite: null,
      onUnMask: null,
      showMaskOnFocus: !0,
      showMaskOnHover: !0,
      onKeyValidation: function onKeyValidation() {},
      skipOptionalPartCharacter: " ",
      numericInput: !1,
      rightAlign: !1,
      undoOnEscape: !0,
      radixPoint: "",
      _radixDance: !1,
      groupSeparator: "",
      keepStatic: null,
      positionCaretOnTab: !0,
      tabThrough: !1,
      supportsInputType: ["text", "tel", "url", "password", "search"],
      ignorables: [8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
      isComplete: null,
      preValidation: null,
      postValidation: null,
      staticDefinitionSymbol: void 0,
      jitMasking: !1,
      nullable: !0,
      inputEventOnly: !1,
      noValuePatching: !1,
      positionCaretOnClick: "lvp",
      casing: null,
      inputmode: "text",
      importDataAttributes: !0,
      shiftPositions: !0,
      usePrototypeDefinitions: !0
    };
    exports.default = _default;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    var _inputmask = _interopRequireDefault(__webpack_require__(1)),
        _keycode = _interopRequireDefault(__webpack_require__(0)),
        _escapeRegex = _interopRequireDefault(__webpack_require__(13)),
        _positioning = __webpack_require__(2),
        _data = _interopRequireDefault(__webpack_require__(22));

    function _typeof(obj) {
      return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
        return _typeof2(obj);
      } : function _typeof(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      }, _typeof(obj);
    }

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var $ = _inputmask.default.dependencyLib,
        currentYear = new Date().getFullYear(),
        formatCode = {
      d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
      dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
        return pad(Date.prototype.getDate.call(this), 2);
      }],
      ddd: [""],
      dddd: [""],
      m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
        return Date.prototype.getMonth.call(this) + 1;
      }],
      mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
        return pad(Date.prototype.getMonth.call(this) + 1, 2);
      }],
      mmm: [""],
      mmmm: [""],
      yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
        return pad(Date.prototype.getFullYear.call(this), 2);
      }],
      yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
        return pad(Date.prototype.getFullYear.call(this), 4);
      }],
      h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
      hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
        return pad(Date.prototype.getHours.call(this), 2);
      }],
      hx: [function (x) {
        return "[0-9]{".concat(x, "}");
      }, Date.prototype.setHours, "hours", function (x) {
        return Date.prototype.getHours;
      }],
      H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
      HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
        return pad(Date.prototype.getHours.call(this), 2);
      }],
      Hx: [function (x) {
        return "[0-9]{".concat(x, "}");
      }, Date.prototype.setHours, "hours", function (x) {
        return function () {
          return pad(Date.prototype.getHours.call(this), x);
        };
      }],
      M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
      MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function () {
        return pad(Date.prototype.getMinutes.call(this), 2);
      }],
      s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
      ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function () {
        return pad(Date.prototype.getSeconds.call(this), 2);
      }],
      l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
        return pad(Date.prototype.getMilliseconds.call(this), 3);
      }],
      L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
        return pad(Date.prototype.getMilliseconds.call(this), 2);
      }],
      t: ["[ap]"],
      tt: ["[ap]m"],
      T: ["[AP]"],
      TT: ["[AP]M"],
      Z: [""],
      o: [""],
      S: [""]
    },
        formatAlias = {
      isoDate: "yyyy-mm-dd",
      isoTime: "HH:MM:ss",
      isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
      isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    };

    function formatcode(match) {
      var dynMatches = new RegExp("\\d+$").exec(match[0]);

      if (dynMatches && void 0 !== dynMatches[0]) {
        var fcode = formatCode[match[0][0] + "x"].slice("");
        return fcode[0] = fcode[0](dynMatches[0]), fcode[3] = fcode[3](dynMatches[0]), fcode;
      }

      if (formatCode[match[0]]) return formatCode[match[0]];
    }

    function getTokenizer(opts) {
      if (!opts.tokenizer) {
        var tokens = [],
            dyntokens = [];

        for (var ndx in formatCode) {
          if (/\.*x$/.test(ndx)) {
            var dynToken = ndx[0] + "\\d+";
            -1 === dyntokens.indexOf(dynToken) && dyntokens.push(dynToken);
          } else -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
        }

        opts.tokenizer = "(" + (0 < dyntokens.length ? dyntokens.join("|") + "|" : "") + tokens.join("+|") + ")+?|.", opts.tokenizer = new RegExp(opts.tokenizer, "g");
      }

      return opts.tokenizer;
    }

    function prefillYear(dateParts, currentResult, opts) {
      if (dateParts.year !== dateParts.rawyear) {
        var crrntyear = currentYear.toString(),
            enteredPart = dateParts.rawyear.replace(/[^0-9]/g, ""),
            currentYearPart = crrntyear.slice(0, enteredPart.length),
            currentYearNextPart = crrntyear.slice(enteredPart.length);

        if (2 === enteredPart.length && enteredPart === currentYearPart) {
          var entryCurrentYear = new Date(currentYear, dateParts.month - 1, dateParts.day);
          dateParts.day == entryCurrentYear.getDate() && (!opts.max || opts.max.date.getTime() >= entryCurrentYear.getTime()) && (dateParts.date.setFullYear(currentYear), dateParts.year = crrntyear, currentResult.insert = [{
            pos: currentResult.pos + 1,
            c: currentYearNextPart[0]
          }, {
            pos: currentResult.pos + 2,
            c: currentYearNextPart[1]
          }]);
        }
      }

      return currentResult;
    }

    function isValidDate(dateParts, currentResult, opts) {
      if (void 0 === dateParts.rawday || !isFinite(dateParts.rawday) && new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day || "29" == dateParts.day && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) return currentResult;

      if ("29" == dateParts.day) {
        var tokenMatch = getTokenMatch(currentResult.pos, opts);
        if ("yyyy" === tokenMatch.targetMatch[0] && currentResult.pos - tokenMatch.targetMatchIndex == 2) return currentResult.remove = currentResult.pos + 1, currentResult;
      } else if ("02" == dateParts.month && "30" == dateParts.day) return dateParts.day = "03", dateParts.date.setDate(3), dateParts.date.setMonth(1), currentResult.insert = [{
        pos: currentResult.pos,
        c: "0"
      }, {
        pos: currentResult.pos + 1,
        c: currentResult.c
      }], currentResult.caret = _positioning.seekNext.call(this, currentResult.pos + 1), currentResult;

      return !1;
    }

    function isDateInRange(dateParts, result, opts, maskset, fromCheckval) {
      if (!result) return result;

      if (opts.min) {
        if (dateParts.rawyear) {
          var rawYear = dateParts.rawyear.replace(/[^0-9]/g, ""),
              minYear = opts.min.year.substr(0, rawYear.length),
              maxYear;

          if (rawYear < minYear) {
            var tokenMatch = getTokenMatch(result.pos, opts);
            if (rawYear = dateParts.rawyear.substr(0, result.pos - tokenMatch.targetMatchIndex + 1).replace(/[^0-9]/g, "0"), minYear = opts.min.year.substr(0, rawYear.length), minYear <= rawYear) return result.remove = tokenMatch.targetMatchIndex + rawYear.length, result;
            if (rawYear = "yyyy" === tokenMatch.targetMatch[0] ? dateParts.rawyear.substr(1, 1) : dateParts.rawyear.substr(0, 1), minYear = opts.min.year.substr(2, 1), maxYear = opts.max ? opts.max.year.substr(2, 1) : rawYear, 1 === rawYear.length && minYear <= rawYear && rawYear <= maxYear && !0 !== fromCheckval) return "yyyy" === tokenMatch.targetMatch[0] ? (result.insert = [{
              pos: result.pos + 1,
              c: rawYear,
              strict: !0
            }], result.caret = result.pos + 2, maskset.validPositions[result.pos].input = opts.min.year[1]) : (result.insert = [{
              pos: result.pos + 1,
              c: opts.min.year[1],
              strict: !0
            }, {
              pos: result.pos + 2,
              c: rawYear,
              strict: !0
            }], result.caret = result.pos + 3, maskset.validPositions[result.pos].input = opts.min.year[0]), result;
            result = !1;
          }
        }

        result && dateParts.year && dateParts.year === dateParts.rawyear && opts.min.date.getTime() == opts.min.date.getTime() && (result = opts.min.date.getTime() <= dateParts.date.getTime());
      }

      return result && opts.max && opts.max.date.getTime() == opts.max.date.getTime() && (result = opts.max.date.getTime() >= dateParts.date.getTime()), result;
    }

    function parse(format, dateObjValue, opts, raw) {
      var mask = "",
          match,
          fcode;

      for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format);) {
        if (void 0 === dateObjValue) {
          if (fcode = formatcode(match)) mask += "(" + fcode[0] + ")";else switch (match[0]) {
            case "[":
              mask += "(";
              break;

            case "]":
              mask += ")?";
              break;

            default:
              mask += (0, _escapeRegex.default)(match[0]);
          }
        } else if (fcode = formatcode(match)) {
          if (!0 !== raw && fcode[3]) {
            var getFn = fcode[3];
            mask += getFn.call(dateObjValue.date);
          } else fcode[2] ? mask += dateObjValue["raw" + fcode[2]] : mask += match[0];
        } else mask += match[0];
      }

      return mask;
    }

    function pad(val, len) {
      for (val = String(val), len = len || 2; val.length < len;) {
        val = "0" + val;
      }

      return val;
    }

    function analyseMask(maskString, format, opts) {
      var dateObj = {
        date: new Date(1, 0, 1)
      },
          targetProp,
          mask = maskString,
          match,
          dateOperation;

      function setValue(dateObj, value, opts) {
        if (dateObj[targetProp] = value.replace(/[^0-9]/g, "0"), dateObj["raw" + targetProp] = value, void 0 !== dateOperation) {
          var datavalue = dateObj[targetProp];
          "day" === targetProp && 0 === parseInt(datavalue) && (datavalue = 1), "month" === targetProp && (datavalue = parseInt(datavalue), 0 < datavalue) && (datavalue -= 1), dateOperation.call(dateObj.date, datavalue);
        }
      }

      if ("string" == typeof mask) {
        for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format);) {
          var dynMatches = new RegExp("\\d+$").exec(match[0]),
              fcode = dynMatches ? match[0][0] + "x" : match[0],
              value = void 0;

          if (dynMatches) {
            var lastIndex = getTokenizer(opts).lastIndex,
                tokanMatch = getTokenMatch(match.index, opts);
            getTokenizer(opts).lastIndex = lastIndex, value = mask.slice(0, mask.indexOf(tokanMatch.nextMatch[0]));
          } else value = mask.slice(0, fcode.length);

          Object.prototype.hasOwnProperty.call(formatCode, fcode) && (targetProp = formatCode[fcode][2], dateOperation = formatCode[fcode][1], setValue(dateObj, value, opts)), mask = mask.slice(value.length);
        }

        return dateObj;
      }

      if (mask && "object" === _typeof(mask) && Object.prototype.hasOwnProperty.call(mask, "date")) return mask;
    }

    function importDate(dateObj, opts) {
      return parse(opts.inputFormat, {
        date: dateObj
      }, opts);
    }

    function getTokenMatch(pos, opts) {
      var calcPos = 0,
          targetMatch,
          match,
          matchLength = 0;

      for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(opts.inputFormat);) {
        var dynMatches = new RegExp("\\d+$").exec(match[0]);

        if (matchLength = dynMatches ? parseInt(dynMatches[0]) : match[0].length, calcPos += matchLength, pos <= calcPos) {
          targetMatch = match, match = getTokenizer(opts).exec(opts.inputFormat);
          break;
        }
      }

      return {
        targetMatchIndex: calcPos - matchLength,
        nextMatch: match,
        targetMatch: targetMatch
      };
    }

    _inputmask.default.extendAliases({
      datetime: {
        mask: function mask(opts) {
          return opts.numericInput = !1, formatCode.S = opts.i18n.ordinalSuffix.join("|"), opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat, opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat, opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat, opts.placeholder = "" !== opts.placeholder ? opts.placeholder : opts.inputFormat.replace(/[[\]]/, ""), opts.regex = parse(opts.inputFormat, void 0, opts), opts.min = analyseMask(opts.min, opts.inputFormat, opts), opts.max = analyseMask(opts.max, opts.inputFormat, opts), null;
        },
        placeholder: "",
        inputFormat: "isoDateTime",
        displayFormat: void 0,
        outputFormat: void 0,
        min: null,
        max: null,
        skipOptionalPartCharacter: "",
        i18n: {
          dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          ordinalSuffix: ["st", "nd", "rd", "th"]
        },
        preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
          if (strict) return !0;

          if (isNaN(c) && buffer[pos] !== c) {
            var tokenMatch = getTokenMatch(pos, opts);

            if (tokenMatch.nextMatch && tokenMatch.nextMatch[0] === c && 1 < tokenMatch.targetMatch[0].length) {
              var validator = formatCode[tokenMatch.targetMatch[0]][0];
              if (new RegExp(validator).test("0" + buffer[pos - 1])) return buffer[pos] = buffer[pos - 1], buffer[pos - 1] = "0", {
                fuzzy: !0,
                buffer: buffer,
                refreshFromBuffer: {
                  start: pos - 1,
                  end: pos + 1
                },
                pos: pos + 1
              };
            }
          }

          return !0;
        },
        postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval) {
          var inputmask = this,
              tokenMatch,
              validator;
          if (strict) return !0;
          if (!1 === currentResult) return tokenMatch = getTokenMatch(pos + 1, opts), tokenMatch.targetMatch && tokenMatch.targetMatchIndex === pos && 1 < tokenMatch.targetMatch[0].length && void 0 !== formatCode[tokenMatch.targetMatch[0]] && (validator = formatCode[tokenMatch.targetMatch[0]][0], new RegExp(validator).test("0" + c)) ? {
            insert: [{
              pos: pos,
              c: "0"
            }, {
              pos: pos + 1,
              c: c
            }],
            pos: pos + 1
          } : currentResult;

          if (currentResult.fuzzy && (buffer = currentResult.buffer, pos = currentResult.pos), tokenMatch = getTokenMatch(pos, opts), tokenMatch.targetMatch && tokenMatch.targetMatch[0] && void 0 !== formatCode[tokenMatch.targetMatch[0]]) {
            validator = formatCode[tokenMatch.targetMatch[0]][0];
            var part = buffer.slice(tokenMatch.targetMatchIndex, tokenMatch.targetMatchIndex + tokenMatch.targetMatch[0].length);
            !1 === new RegExp(validator).test(part.join("")) && 2 === tokenMatch.targetMatch[0].length && maskset.validPositions[tokenMatch.targetMatchIndex] && maskset.validPositions[tokenMatch.targetMatchIndex + 1] && (maskset.validPositions[tokenMatch.targetMatchIndex + 1].input = "0");
          }

          var result = currentResult,
              dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
          return result && dateParts.date.getTime() == dateParts.date.getTime() && (result = prefillYear(dateParts, result, opts), result = isValidDate.call(this, dateParts, result, opts), result = isDateInRange(dateParts, result, opts, maskset, fromCheckval)), pos && result && currentResult.pos !== pos ? {
            buffer: parse(opts.inputFormat, dateParts, opts).split(""),
            refreshFromBuffer: {
              start: pos,
              end: currentResult.pos
            }
          } : result;
        },
        onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
          var input = this;
          e.ctrlKey && e.keyCode === _keycode.default.RIGHT && (this.inputmask._valueSet(importDate(new Date(), opts)), $(this).trigger("setvalue"));
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          return unmaskedValue ? parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts, !0) : unmaskedValue;
        },
        casing: function casing(elem, test, pos, validPositions) {
          return 0 == test.nativeDef.indexOf("[ap]") ? elem.toLowerCase() : 0 == test.nativeDef.indexOf("[AP]") ? elem.toUpperCase() : elem;
        },
        onBeforeMask: function onBeforeMask(initialValue, opts) {
          return "[object Date]" === Object.prototype.toString.call(initialValue) && (initialValue = importDate(initialValue, opts)), initialValue;
        },
        insertMode: !1,
        shiftPositions: !1,
        keepStatic: !1,
        inputmode: "numeric"
      }
    });
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function _default(owner, key, value) {
      if (void 0 === value) return owner.__data ? owner.__data[key] : null;
      owner.__data = owner.__data || {}, owner.__data[key] = value;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = _default;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    var _inputmask = _interopRequireDefault(__webpack_require__(1)),
        _keycode = _interopRequireDefault(__webpack_require__(0)),
        _escapeRegex = _interopRequireDefault(__webpack_require__(13));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var $ = _inputmask.default.dependencyLib;

    function autoEscape(txt, opts) {
      for (var escapedTxt = "", i = 0; i < txt.length; i++) {
        _inputmask.default.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker[0] === txt.charAt(i) || opts.optionalmarker[1] === txt.charAt(i) || opts.quantifiermarker[0] === txt.charAt(i) || opts.quantifiermarker[1] === txt.charAt(i) || opts.groupmarker[0] === txt.charAt(i) || opts.groupmarker[1] === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
      }

      return escapedTxt;
    }

    function alignDigits(buffer, digits, opts, force) {
      if (0 < buffer.length && 0 < digits && (!opts.digitsOptional || force)) {
        var radixPosition = buffer.indexOf(opts.radixPoint),
            negationBack = !1;
        opts.negationSymbol.back === buffer[buffer.length - 1] && (negationBack = !0, buffer.length--), -1 === radixPosition && (buffer.push(opts.radixPoint), radixPosition = buffer.length - 1);

        for (var i = 1; i <= digits; i++) {
          isFinite(buffer[radixPosition + i]) || (buffer[radixPosition + i] = "0");
        }
      }

      return negationBack && buffer.push(opts.negationSymbol.back), buffer;
    }

    function findValidator(symbol, maskset) {
      var posNdx = 0;

      if ("+" === symbol) {
        for (posNdx in maskset.validPositions) {
          ;
        }

        posNdx = parseInt(posNdx);
      }

      for (var tstNdx in maskset.tests) {
        if (tstNdx = parseInt(tstNdx), posNdx <= tstNdx) for (var ndx = 0, ndxl = maskset.tests[tstNdx].length; ndx < ndxl; ndx++) {
          if ((void 0 === maskset.validPositions[tstNdx] || "-" === symbol) && maskset.tests[tstNdx][ndx].match.def === symbol) return tstNdx + (void 0 !== maskset.validPositions[tstNdx] && "-" !== symbol ? 1 : 0);
        }
      }

      return posNdx;
    }

    function findValid(symbol, maskset) {
      var ret = -1;

      for (var ndx in maskset.validPositions) {
        var tst = maskset.validPositions[ndx];

        if (tst && tst.match.def === symbol) {
          ret = parseInt(ndx);
          break;
        }
      }

      return ret;
    }

    function parseMinMaxOptions(opts) {
      void 0 === opts.parseMinMaxOptions && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp((0, _escapeRegex.default)(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp((0, _escapeRegex.default)(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), opts.parseMinMaxOptions = "done");
    }

    function genMask(opts) {
      opts.repeat = 0, opts.groupSeparator === opts.radixPoint && opts.digits && "0" !== opts.digits && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = void 0), 1 < opts.placeholder.length && (opts.placeholder = opts.placeholder.charAt(0)), "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && (opts.positionCaretOnClick = "lvp");
      var decimalDef = "0",
          radixPointDef = opts.radixPoint;
      !0 === opts.numericInput && void 0 === opts.__financeInput ? (decimalDef = "1", opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts._radixDance = !1, radixPointDef = "," === opts.radixPoint ? "?" : "!", "" !== opts.radixPoint && void 0 === opts.definitions[radixPointDef] && (opts.definitions[radixPointDef] = {}, opts.definitions[radixPointDef].validator = "[" + opts.radixPoint + "]", opts.definitions[radixPointDef].placeholder = opts.radixPoint, opts.definitions[radixPointDef].static = !0, opts.definitions[radixPointDef].generated = !0)) : (opts.__financeInput = !1, opts.numericInput = !0);
      var mask = "[+]",
          altMask;

      if (mask += autoEscape(opts.prefix, opts), "" !== opts.groupSeparator ? (void 0 === opts.definitions[opts.groupSeparator] && (opts.definitions[opts.groupSeparator] = {}, opts.definitions[opts.groupSeparator].validator = "[" + opts.groupSeparator + "]", opts.definitions[opts.groupSeparator].placeholder = opts.groupSeparator, opts.definitions[opts.groupSeparator].static = !0, opts.definitions[opts.groupSeparator].generated = !0), mask += opts._mask(opts)) : mask += "9{+}", void 0 !== opts.digits && 0 !== opts.digits) {
        var dq = opts.digits.toString().split(",");
        isFinite(dq[0]) && dq[1] && isFinite(dq[1]) ? mask += radixPointDef + decimalDef + "{" + opts.digits + "}" : (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && (opts.digitsOptional ? (altMask = mask + radixPointDef + decimalDef + "{0," + opts.digits + "}", opts.keepStatic = !0) : mask += radixPointDef + decimalDef + "{" + opts.digits + "}");
      }

      return mask += autoEscape(opts.suffix, opts), mask += "[-]", altMask && (mask = [altMask + autoEscape(opts.suffix, opts) + "[-]", mask]), opts.greedy = !1, parseMinMaxOptions(opts), mask;
    }

    function hanndleRadixDance(pos, c, radixPos, maskset, opts) {
      return opts._radixDance && opts.numericInput && c !== opts.negationSymbol.back && pos <= radixPos && (0 < radixPos || c == opts.radixPoint) && (void 0 === maskset.validPositions[pos - 1] || maskset.validPositions[pos - 1].input !== opts.negationSymbol.back) && (pos -= 1), pos;
    }

    function decimalValidator(chrs, maskset, pos, strict, opts) {
      var radixPos = maskset.buffer ? maskset.buffer.indexOf(opts.radixPoint) : -1,
          result = -1 !== radixPos && new RegExp("[0-9\uFF11-\uFF19]").test(chrs);
      return opts._radixDance && result && null == maskset.validPositions[radixPos] ? {
        insert: {
          pos: radixPos === pos ? radixPos + 1 : radixPos,
          c: opts.radixPoint
        },
        pos: pos
      } : result;
    }

    function checkForLeadingZeroes(buffer, opts) {
      var numberMatches = new RegExp("(^" + ("" !== opts.negationSymbol.front ? (0, _escapeRegex.default)(opts.negationSymbol.front) + "?" : "") + (0, _escapeRegex.default)(opts.prefix) + ")(.*)(" + (0, _escapeRegex.default)(opts.suffix) + ("" != opts.negationSymbol.back ? (0, _escapeRegex.default)(opts.negationSymbol.back) + "?" : "") + "$)").exec(buffer.slice().reverse().join("")),
          number = numberMatches ? numberMatches[2] : "",
          leadingzeroes = !1;
      return number && (number = number.split(opts.radixPoint.charAt(0))[0], leadingzeroes = new RegExp("^[0" + opts.groupSeparator + "]*").exec(number)), !(!leadingzeroes || !(1 < leadingzeroes[0].length || 0 < leadingzeroes[0].length && leadingzeroes[0].length < number.length)) && leadingzeroes;
    }

    _inputmask.default.extendAliases({
      numeric: {
        mask: genMask,
        _mask: function _mask(opts) {
          return "(" + opts.groupSeparator + "999){+|1}";
        },
        digits: "*",
        digitsOptional: !0,
        enforceDigitsOnBlur: !1,
        radixPoint: ".",
        positionCaretOnClick: "radixFocus",
        _radixDance: !0,
        groupSeparator: "",
        allowMinus: !0,
        negationSymbol: {
          front: "-",
          back: ""
        },
        prefix: "",
        suffix: "",
        min: null,
        max: null,
        SetMaxOnOverflow: !1,
        step: 1,
        inputType: "text",
        unmaskAsNumber: !1,
        roundingFN: Math.round,
        inputmode: "numeric",
        shortcuts: {
          k: "000",
          m: "000000"
        },
        placeholder: "0",
        greedy: !1,
        rightAlign: !0,
        insertMode: !0,
        autoUnmask: !1,
        skipOptionalPartCharacter: "",
        definitions: {
          0: {
            validator: decimalValidator
          },
          1: {
            validator: decimalValidator,
            definitionSymbol: "9"
          },
          "+": {
            validator: function validator(chrs, maskset, pos, strict, opts) {
              return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);
            }
          },
          "-": {
            validator: function validator(chrs, maskset, pos, strict, opts) {
              return opts.allowMinus && chrs === opts.negationSymbol.back;
            }
          }
        },
        preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
          if (!1 !== opts.__financeInput && c === opts.radixPoint) return !1;
          var pattern;

          if (pattern = opts.shortcuts && opts.shortcuts[c]) {
            if (1 < pattern.length) for (var inserts = [], i = 0; i < pattern.length; i++) {
              inserts.push({
                pos: pos + i,
                c: pattern[i],
                strict: !1
              });
            }
            return {
              insert: inserts
            };
          }

          var radixPos = buffer.indexOf(opts.radixPoint),
              initPos = pos;

          if (pos = hanndleRadixDance(pos, c, radixPos, maskset, opts), "-" === c || c === opts.negationSymbol.front) {
            if (!0 !== opts.allowMinus) return !1;
            var isNegative = !1,
                front = findValid("+", maskset),
                back = findValid("-", maskset);
            return -1 !== front && (isNegative = [front, back]), !1 !== isNegative ? {
              remove: isNegative,
              caret: initPos - opts.negationSymbol.front.length
            } : {
              insert: [{
                pos: findValidator("+", maskset),
                c: opts.negationSymbol.front,
                fromIsValid: !0
              }, {
                pos: findValidator("-", maskset),
                c: opts.negationSymbol.back,
                fromIsValid: void 0
              }],
              caret: initPos + opts.negationSymbol.back.length
            };
          }

          if (c === opts.groupSeparator) return {
            caret: initPos
          };
          if (strict) return !0;
          if (-1 !== radixPos && !0 === opts._radixDance && !1 === isSelection && c === opts.radixPoint && void 0 !== opts.digits && (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && radixPos !== pos) return {
            caret: opts._radixDance && pos === radixPos - 1 ? radixPos + 1 : radixPos
          };
          if (!1 === opts.__financeInput) if (isSelection) {
            if (opts.digitsOptional) return {
              rewritePosition: caretPos.end
            };

            if (!opts.digitsOptional) {
              if (caretPos.begin > radixPos && caretPos.end <= radixPos) return c === opts.radixPoint ? {
                insert: {
                  pos: radixPos + 1,
                  c: "0",
                  fromIsValid: !0
                },
                rewritePosition: radixPos
              } : {
                rewritePosition: radixPos + 1
              };
              if (caretPos.begin < radixPos) return {
                rewritePosition: caretPos.begin - 1
              };
            }
          } else if (!opts.showMaskOnHover && !opts.showMaskOnFocus && !opts.digitsOptional && 0 < opts.digits && "" === this.inputmask.__valueGet.call(this)) return {
            rewritePosition: radixPos
          };
          return {
            rewritePosition: pos
          };
        },
        postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
          if (!1 === currentResult) return currentResult;
          if (strict) return !0;

          if (null !== opts.min || null !== opts.max) {
            var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
              unmaskAsNumber: !0
            }));
            if (null !== opts.min && unmasked < opts.min && (unmasked.toString().length > opts.min.toString().length || unmasked < 0)) return !1;
            if (null !== opts.max && unmasked > opts.max) return !!opts.SetMaxOnOverflow && {
              refreshFromBuffer: !0,
              buffer: alignDigits(opts.max.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
            };
          }

          return currentResult;
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
          var processValue = maskedValue.replace(opts.prefix, "");
          return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp((0, _escapeRegex.default)(opts.groupSeparator), "g"), ""), "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(_escapeRegex.default.call(this, opts.radixPoint), ".")), processValue = processValue.replace(new RegExp("^" + (0, _escapeRegex.default)(opts.negationSymbol.front)), "-"), processValue = processValue.replace(new RegExp((0, _escapeRegex.default)(opts.negationSymbol.back) + "$"), ""), Number(processValue)) : processValue;
        },
        isComplete: function isComplete(buffer, opts) {
          var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
          return maskedValue = maskedValue.replace(new RegExp("^" + (0, _escapeRegex.default)(opts.negationSymbol.front)), "-"), maskedValue = maskedValue.replace(new RegExp((0, _escapeRegex.default)(opts.negationSymbol.back) + "$"), ""), maskedValue = maskedValue.replace(opts.prefix, ""), maskedValue = maskedValue.replace(opts.suffix, ""), maskedValue = maskedValue.replace(new RegExp((0, _escapeRegex.default)(opts.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === opts.radixPoint && (maskedValue = maskedValue.replace((0, _escapeRegex.default)(opts.radixPoint), ".")), isFinite(maskedValue);
        },
        onBeforeMask: function onBeforeMask(initialValue, opts) {
          var radixPoint = opts.radixPoint || ",";
          isFinite(opts.digits) && (opts.digits = parseInt(opts.digits)), "number" != typeof initialValue && "number" !== opts.inputType || "" === radixPoint || (initialValue = initialValue.toString().replace(".", radixPoint));
          var isNagtive = "-" === initialValue.charAt(0) || initialValue.charAt(0) === opts.negationSymbol.front,
              valueParts = initialValue.split(radixPoint),
              integerPart = valueParts[0].replace(/[^\-0-9]/g, ""),
              decimalPart = 1 < valueParts.length ? valueParts[1].replace(/[^0-9]/g, "") : "",
              forceDigits = 1 < valueParts.length;
          initialValue = integerPart + ("" !== decimalPart ? radixPoint + decimalPart : decimalPart);
          var digits = 0;

          if ("" !== radixPoint && (digits = opts.digitsOptional ? opts.digits < decimalPart.length ? opts.digits : decimalPart.length : opts.digits, "" !== decimalPart || !opts.digitsOptional)) {
            var digitsFactor = Math.pow(10, digits || 1);
            initialValue = initialValue.replace((0, _escapeRegex.default)(radixPoint), "."), isNaN(parseFloat(initialValue)) || (initialValue = (opts.roundingFN(parseFloat(initialValue) * digitsFactor) / digitsFactor).toFixed(digits)), initialValue = initialValue.toString().replace(".", radixPoint);
          }

          if (0 === opts.digits && -1 !== initialValue.indexOf(radixPoint) && (initialValue = initialValue.substring(0, initialValue.indexOf(radixPoint))), null !== opts.min || null !== opts.max) {
            var numberValue = initialValue.toString().replace(radixPoint, ".");
            null !== opts.min && numberValue < opts.min ? initialValue = opts.min.toString().replace(".", radixPoint) : null !== opts.max && numberValue > opts.max && (initialValue = opts.max.toString().replace(".", radixPoint));
          }

          return isNagtive && "-" !== initialValue.charAt(0) && (initialValue = "-" + initialValue), alignDigits(initialValue.toString().split(""), digits, opts, forceDigits).join("");
        },
        onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
          function stripBuffer(buffer, stripRadix) {
            if (!1 !== opts.__financeInput || stripRadix) {
              var position = buffer.indexOf(opts.radixPoint);
              -1 !== position && buffer.splice(position, 1);
            }

            if ("" !== opts.groupSeparator) for (; -1 !== (position = buffer.indexOf(opts.groupSeparator));) {
              buffer.splice(position, 1);
            }
            return buffer;
          }

          var result,
              leadingzeroes = checkForLeadingZeroes(buffer, opts);
          if (leadingzeroes) for (var caretNdx = buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join("")) - (leadingzeroes[0] == leadingzeroes.input ? 0 : 1), offset = leadingzeroes[0] == leadingzeroes.input ? 1 : 0, i = leadingzeroes[0].length - offset; 0 < i; i--) {
            delete this.maskset.validPositions[caretNdx + i], delete buffer[caretNdx + i];
          }
          if (e) switch (e.type) {
            case "blur":
            case "checkval":
              if (null !== opts.min) {
                var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                  unmaskAsNumber: !0
                }));
                if (null !== opts.min && unmasked < opts.min) return {
                  refreshFromBuffer: !0,
                  buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                };
              }

              if (buffer[buffer.length - 1] === opts.negationSymbol.front) {
                var nmbrMtchs = new RegExp("(^" + ("" != opts.negationSymbol.front ? (0, _escapeRegex.default)(opts.negationSymbol.front) + "?" : "") + (0, _escapeRegex.default)(opts.prefix) + ")(.*)(" + (0, _escapeRegex.default)(opts.suffix) + ("" != opts.negationSymbol.back ? (0, _escapeRegex.default)(opts.negationSymbol.back) + "?" : "") + "$)").exec(stripBuffer(buffer.slice(), !0).reverse().join("")),
                    number = nmbrMtchs ? nmbrMtchs[2] : "";
                0 == number && (result = {
                  refreshFromBuffer: !0,
                  buffer: [0]
                });
              } else "" !== opts.radixPoint && buffer[0] === opts.radixPoint && (result && result.buffer ? result.buffer.shift() : (buffer.shift(), result = {
                refreshFromBuffer: !0,
                buffer: stripBuffer(buffer)
              }));

              if (opts.enforceDigitsOnBlur) {
                result = result || {};
                var bffr = result && result.buffer || buffer.slice().reverse();
                result.refreshFromBuffer = !0, result.buffer = alignDigits(bffr, opts.digits, opts, !0).reverse();
              }

          }
          return result;
        },
        onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
          var $input = $(this),
              bffr;
          if (e.ctrlKey) switch (e.keyCode) {
            case _keycode.default.UP:
              return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue"), !1;

            case _keycode.default.DOWN:
              return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue"), !1;
          }

          if (!e.shiftKey && (e.keyCode === _keycode.default.DELETE || e.keyCode === _keycode.default.BACKSPACE || e.keyCode === _keycode.default.BACKSPACE_SAFARI) && caretPos.begin !== buffer.length) {
            if (buffer[e.keyCode === _keycode.default.DELETE ? caretPos.begin - 1 : caretPos.end] === opts.negationSymbol.front) return bffr = buffer.slice().reverse(), "" !== opts.negationSymbol.front && bffr.shift(), "" !== opts.negationSymbol.back && bffr.pop(), $input.trigger("setvalue", [bffr.join(""), caretPos.begin]), !1;

            if (!0 === opts._radixDance) {
              var radixPos = buffer.indexOf(opts.radixPoint);

              if (opts.digitsOptional) {
                if (0 === radixPos) return bffr = buffer.slice().reverse(), bffr.pop(), $input.trigger("setvalue", [bffr.join(""), caretPos.begin >= bffr.length ? bffr.length : caretPos.begin]), !1;
              } else if (-1 !== radixPos && (caretPos.begin < radixPos || caretPos.end < radixPos || e.keyCode === _keycode.default.DELETE && caretPos.begin === radixPos)) return caretPos.begin !== caretPos.end || e.keyCode !== _keycode.default.BACKSPACE && e.keyCode !== _keycode.default.BACKSPACE_SAFARI || caretPos.begin++, bffr = buffer.slice().reverse(), bffr.splice(bffr.length - caretPos.begin, caretPos.begin - caretPos.end + 1), bffr = alignDigits(bffr, opts.digits, opts).join(""), $input.trigger("setvalue", [bffr, caretPos.begin >= bffr.length ? radixPos + 1 : caretPos.begin]), !1;
            }
          }
        }
      },
      currency: {
        prefix: "",
        groupSeparator: ",",
        alias: "numeric",
        digits: 2,
        digitsOptional: !1
      },
      decimal: {
        alias: "numeric"
      },
      integer: {
        alias: "numeric",
        digits: 0
      },
      percentage: {
        alias: "numeric",
        min: 0,
        max: 100,
        suffix: " %",
        digits: 0,
        allowMinus: !1
      },
      indianns: {
        alias: "numeric",
        _mask: function _mask(opts) {
          return "(" + opts.groupSeparator + "99){*|1}(" + opts.groupSeparator + "999){1|1}";
        },
        groupSeparator: ",",
        radixPoint: ".",
        placeholder: "0",
        digits: 2,
        digitsOptional: !1
      }
    });
  }, function (module, exports, __webpack_require__) {
    "use strict";

    var _window = _interopRequireDefault(__webpack_require__(12)),
        _inputmask = _interopRequireDefault(__webpack_require__(1));

    function _typeof(obj) {
      return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
        return _typeof2(obj);
      } : function _typeof(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      }, _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }

    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: !0,
          configurable: !0
        }
      }), superClass && _setPrototypeOf(subClass, superClass);
    }

    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();

      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;

        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;

          result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);

        return _possibleConstructorReturn(this, result);
      };
    }

    function _possibleConstructorReturn(self, call) {
      return !call || "object" !== _typeof(call) && "function" != typeof call ? _assertThisInitialized(self) : call;
    }

    function _assertThisInitialized(self) {
      if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return self;
    }

    function _wrapNativeSuper(Class) {
      var _cache = "function" == typeof Map ? new Map() : void 0;

      return _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (null === Class || !_isNativeFunction(Class)) return Class;
        if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");

        if ("undefined" != typeof _cache) {
          if (_cache.has(Class)) return _cache.get(Class);

          _cache.set(Class, Wrapper);
        }

        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }

        return Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), _setPrototypeOf(Wrapper, Class);
      }, _wrapNativeSuper(Class);
    }

    function _construct(Parent, args, Class) {
      return _construct = _isNativeReflectConstruct() ? Reflect.construct : function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a),
            instance = new Constructor();
        return Class && _setPrototypeOf(instance, Class.prototype), instance;
      }, _construct.apply(null, arguments);
    }

    function _isNativeReflectConstruct() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }

    function _isNativeFunction(fn) {
      return -1 !== Function.toString.call(fn).indexOf("[native code]");
    }

    function _setPrototypeOf(o, p) {
      return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
      }, _setPrototypeOf(o, p);
    }

    function _getPrototypeOf(o) {
      return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, _getPrototypeOf(o);
    }

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var document = _window.default.document;

    if (document && document.head && document.head.attachShadow && _window.default.customElements && void 0 === _window.default.customElements.get("input-mask")) {
      var InputmaskElement = function (_HTMLElement) {
        _inherits(InputmaskElement, _HTMLElement);

        var _super = _createSuper(InputmaskElement);

        function InputmaskElement() {
          var _this;

          _classCallCheck(this, InputmaskElement), _this = _super.call(this);

          var attributeNames = _this.getAttributeNames(),
              shadow = _this.attachShadow({
            mode: "closed"
          }),
              input = document.createElement("input");

          for (var attr in input.type = "text", shadow.appendChild(input), attributeNames) {
            Object.prototype.hasOwnProperty.call(attributeNames, attr) && input.setAttribute(attributeNames[attr], _this.getAttribute(attributeNames[attr]));
          }

          var im = new _inputmask.default();
          return im.dataAttribute = "", im.mask(input), input.inputmask.shadowRoot = shadow, _this;
        }

        return InputmaskElement;
      }(_wrapNativeSuper(HTMLElement));

      _window.default.customElements.define("input-mask", InputmaskElement);
    }
  }, function (module, exports, __webpack_require__) {
    "use strict";

    var _jquery = _interopRequireDefault(__webpack_require__(8)),
        _inputmask = _interopRequireDefault(__webpack_require__(1));

    function _typeof(obj) {
      return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
        return _typeof2(obj);
      } : function _typeof(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      }, _typeof(obj);
    }

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    void 0 === _jquery.default.fn.inputmask && (_jquery.default.fn.inputmask = function (fn, options) {
      var nptmask,
          input = this[0];
      if (void 0 === options && (options = {}), "string" == typeof fn) switch (fn) {
        case "unmaskedvalue":
          return input && input.inputmask ? input.inputmask.unmaskedvalue() : (0, _jquery.default)(input).val();

        case "remove":
          return this.each(function () {
            this.inputmask && this.inputmask.remove();
          });

        case "getemptymask":
          return input && input.inputmask ? input.inputmask.getemptymask() : "";

        case "hasMaskedValue":
          return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();

        case "isComplete":
          return !input || !input.inputmask || input.inputmask.isComplete();

        case "getmetadata":
          return input && input.inputmask ? input.inputmask.getmetadata() : void 0;

        case "setvalue":
          _inputmask.default.setValue(input, options);

          break;

        case "option":
          if ("string" != typeof options) return this.each(function () {
            if (void 0 !== this.inputmask) return this.inputmask.option(options);
          });
          if (input && void 0 !== input.inputmask) return input.inputmask.option(options);
          break;

        default:
          return options.alias = fn, nptmask = new _inputmask.default(options), this.each(function () {
            nptmask.mask(this);
          });
      } else {
        if (Array.isArray(fn)) return options.alias = fn, nptmask = new _inputmask.default(options), this.each(function () {
          nptmask.mask(this);
        });
        if ("object" == _typeof(fn)) return nptmask = new _inputmask.default(fn), void 0 === fn.mask && void 0 === fn.alias ? this.each(function () {
          if (void 0 !== this.inputmask) return this.inputmask.option(fn);
          nptmask.mask(this);
        }) : this.each(function () {
          nptmask.mask(this);
        });
        if (void 0 === fn) return this.each(function () {
          nptmask = new _inputmask.default(options), nptmask.mask(this);
        });
      }
    });
  }, function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var _bundle = _interopRequireDefault(__webpack_require__(14));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    __webpack_require__(25);

    var _default = _bundle.default;
    exports.default = _default;
  }], installedModules = {}, __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
    __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
      enumerable: !0,
      get: getter
    });
  }, __webpack_require__.r = function (exports) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(exports, "__esModule", {
      value: !0
    });
  }, __webpack_require__.t = function (value, mode) {
    if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
    if (4 & mode && "object" == _typeof2(value) && value && value.__esModule) return value;
    var ns = Object.create(null);
    if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
      enumerable: !0,
      value: value
    }), 2 & mode && "string" != typeof value) for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    return ns;
  }, __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ? function getDefault() {
      return module.default;
    } : function getModuleExports() {
      return module;
    };
    return __webpack_require__.d(getter, "a", getter), getter;
  }, __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 26);

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: !1,
      exports: {}
    };
    return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
  }

  var modules, installedModules;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/assets/js/lib/parallax.min.js":
/*!*******************************************!*\
  !*** ./src/assets/js/lib/parallax.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function (t, i, e, s) {
  function o(i, e) {
    var h = this;
    "object" == _typeof(e) && (delete e.refresh, delete e.render, t.extend(this, e)), this.$element = t(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
    var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
    if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), "top" != r[0] && "bottom" != r[0] && "left" != r[1] && "right" != r[1] || (r = [r[1], r[0]]), this.positionX !== s && (r[0] = this.positionX.toLowerCase()), this.positionY !== s && (r[1] = this.positionY.toLowerCase()), h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
      backgroundImage: "url(" + this.imageSrc + ")",
      backgroundSize: "cover",
      backgroundPosition: this.position
    }), this;
    if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
      backgroundImage: "url(" + this.imageSrc + ")",
      backgroundSize: "cover",
      backgroundPosition: this.position
    }), this;
    this.$mirror = t("<div />").prependTo(this.mirrorContainer);
    var a = this.$element.find(">.parallax-slider"),
        n = !1;
    0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), n = !0), this.$mirror.addClass("parallax-mirror").css({
      visibility: "hidden",
      zIndex: this.zIndex,
      position: "fixed",
      top: 0,
      left: 0,
      overflow: "hidden"
    }), this.$slider.addClass("parallax-slider").one("load", function () {
      h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, o.isSetup || o.setup(), o.sliders.push(h), o.isFresh = !1, o.requestRender();
    }), n || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load");
  }

  !function () {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !i.requestAnimationFrame; ++s) {
      i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"];
    }

    i.requestAnimationFrame || (i.requestAnimationFrame = function (e) {
      var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - t)),
          h = i.setTimeout(function () {
        e(s + o);
      }, o);
      return t = s + o, h;
    }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (t) {
      clearTimeout(t);
    });
  }(), t.extend(o.prototype, {
    speed: .2,
    bleed: 0,
    zIndex: -100,
    iosFix: !0,
    androidFix: !0,
    position: "center",
    overScrollFix: !1,
    mirrorContainer: "body",
    refresh: function refresh() {
      this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
      var t,
          i = o.winHeight,
          e = o.docHeight,
          s = Math.min(this.boxOffsetTop, e - i),
          h = Math.max(this.boxOffsetTop + this.boxHeight - i, 0),
          r = this.boxHeight + (s - h) * (1 - this.speed) | 0,
          a = (this.boxOffsetTop - s) * (1 - this.speed) | 0;
      r * this.aspectRatio >= this.boxWidth ? (this.imageWidth = r * this.aspectRatio | 0, this.imageHeight = r, this.offsetBaseTop = a, t = this.imageWidth - this.boxWidth, "left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -t : isNaN(this.positionX) ? this.offsetLeft = -t / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -t)) : (this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0, t = this.imageHeight - r, "top" == this.positionY ? this.offsetBaseTop = a : "bottom" == this.positionY ? this.offsetBaseTop = a - t : isNaN(this.positionY) ? this.offsetBaseTop = a - t / 2 | 0 : this.offsetBaseTop = a + Math.max(this.positionY, -t));
    },
    render: function render() {
      var t = o.scrollTop,
          i = o.scrollLeft,
          e = this.overScrollFix ? o.overScroll : 0,
          s = t + o.winHeight;
      this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
        transform: "translate3d(" + this.mirrorLeft + "px, " + (this.mirrorTop - e) + "px, 0px)",
        visibility: this.visibility,
        height: this.boxHeight,
        width: this.boxWidth
      }), this.$slider.css({
        transform: "translate3d(" + this.offsetLeft + "px, " + this.offsetTop + "px, 0px)",
        position: "absolute",
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: "none"
      });
    }
  }), t.extend(o, {
    scrollTop: 0,
    scrollLeft: 0,
    winHeight: 0,
    winWidth: 0,
    docHeight: 1 << 30,
    docWidth: 1 << 30,
    sliders: [],
    isReady: !1,
    isFresh: !1,
    isBusy: !1,
    setup: function setup() {
      function s() {
        if (p == i.pageYOffset) return i.requestAnimationFrame(s), !1;
        p = i.pageYOffset, h.render(), i.requestAnimationFrame(s);
      }

      if (!this.isReady) {
        var h = this,
            r = t(e),
            a = t(i),
            n = function n() {
          o.winHeight = a.height(), o.winWidth = a.width(), o.docHeight = r.height(), o.docWidth = r.width();
        },
            l = function l() {
          var t = a.scrollTop(),
              i = o.docHeight - o.winHeight,
              e = o.docWidth - o.winWidth;
          o.scrollTop = Math.max(0, Math.min(i, t)), o.scrollLeft = Math.max(0, Math.min(e, a.scrollLeft())), o.overScroll = Math.max(t - i, Math.min(t, 0));
        };

        a.on("resize.px.parallax load.px.parallax", function () {
          n(), h.refresh(), o.isFresh = !1, o.requestRender();
        }).on("scroll.px.parallax load.px.parallax", function () {
          l(), o.requestRender();
        }), n(), l(), this.isReady = !0;
        var p = -1;
        s();
      }
    },
    configure: function configure(i) {
      "object" == _typeof(i) && (delete i.refresh, delete i.render, t.extend(this.prototype, i));
    },
    refresh: function refresh() {
      t.each(this.sliders, function () {
        this.refresh();
      }), this.isFresh = !0;
    },
    render: function render() {
      this.isFresh || this.refresh(), t.each(this.sliders, function () {
        this.render();
      });
    },
    requestRender: function requestRender() {
      var t = this;
      t.render(), t.isBusy = !1;
    },
    destroy: function destroy(e) {
      var s,
          h = t(e).data("px.parallax");

      for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1) {
        this.sliders[s] == h && this.sliders.splice(s, 1);
      }

      t(e).data("px.parallax", !1), 0 === this.sliders.length && (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1);
    }
  });
  var h = t.fn.parallax;
  t.fn.parallax = function (s) {
    return this.each(function () {
      var h = t(this),
          r = "object" == _typeof(s) && s;
      this == i || this == e || h.is("body") ? o.configure(r) : h.data("px.parallax") ? "object" == _typeof(s) && t.extend(h.data("px.parallax"), r) : (r = t.extend({}, h.data(), r), h.data("px.parallax", new o(this, r))), "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]());
    });
  }, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function () {
    return t.fn.parallax = h, this;
  }, t(function () {
    t('[data-parallax="scroll"]').parallax();
  });
}(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/assets/js/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\excal\onedrive\Документы\GitHub\rgsu.net_2021\src\assets\js\app.js */"./src/assets/js/app.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=app.js.map