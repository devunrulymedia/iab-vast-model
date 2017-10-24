'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a tracking pixel configuration for an impression.
 *
 * @class Impression
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var Impression = exports.Impression = function () {
  function Impression() {
    _classCallCheck(this, Impression);
  }

  _createClass(Impression, [{
    key: 'id',

    /**
     * The ID of this impression pixel.
     *
     * @type {string}
     */
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }

    /**
     * The URI of this impression pixel.
     *
     * @type {string}
     */

  }, {
    key: 'uri',
    get: function get() {
      return this._uri;
    },
    set: function set(value) {
      this._uri = value;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'Impression';
    }
  }]);

  return Impression;
}();