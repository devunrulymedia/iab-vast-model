"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Stores the clickthrough URI and a set of click tracking pixels.
 *
 * @class AbstractClicks
 * @protected
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var AbstractClicks = exports.AbstractClicks = function () {
  function AbstractClicks() {
    _classCallCheck(this, AbstractClicks);

    this._clickTrackings = [];
  }

  /**
   * The click-through configuration.
   *
   * @type {Click}
   */


  _createClass(AbstractClicks, [{
    key: "clickThrough",
    get: function get() {
      return this._clickThrough;
    },
    set: function set(value) {
      this._clickThrough = value;
    }

    /**
     * The click tracking configurations.
     *
     * @type {Click[]}
     * @readonly
     */

  }, {
    key: "clickTrackings",
    get: function get() {
      return this._clickTrackings;
    }
  }]);

  return AbstractClicks;
}();