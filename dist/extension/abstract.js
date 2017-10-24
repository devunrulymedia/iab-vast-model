"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base class for VAST {@link Extension} as well as {@link CreativeExtension}.
 *
 * @class AbstractExtension
 * @protected
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var AbstractExtension = exports.AbstractExtension = function () {
  function AbstractExtension() {
    _classCallCheck(this, AbstractExtension);
  }

  _createClass(AbstractExtension, [{
    key: "type",

    /**
     * The type of this extension.
     *
     * @type {string}
     */
    get: function get() {
      return this._type;
    },
    set: function set(value) {
      this._type = value;
    }

    /**
     * The content of this extension.
     *
     * @type {Element}
     */

  }, {
    key: "content",
    get: function get() {
      return this._content;
    },
    set: function set(value) {
      this._content = value;
    }
  }]);

  return AbstractExtension;
}();