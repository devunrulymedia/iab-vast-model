'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VAST = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _adBuffet = require('./ad-buffet');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a VAST document.
 *
 * @class VAST
 * @extends AdBuffet
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var VAST = exports.VAST = function (_AdBuffet) {
  _inherits(VAST, _AdBuffet);

  function VAST() {
    _classCallCheck(this, VAST);

    var _this = _possibleConstructorReturn(this, (VAST.__proto__ || Object.getPrototypeOf(VAST)).call(this));

    _this._errors = [];
    return _this;
  }

  /**
   * The VAST version used by this document.
   *
   * @type {string}
   */


  _createClass(VAST, [{
    key: 'version',
    get: function get() {
      return this._version;
    },
    set: function set(value) {
      this._version = value;
    }

    /**
     * The error tracking URIs for this document.
     *
     * @type {string[]}
     * @readonly
     */

  }, {
    key: 'errors',
    get: function get() {
      return this._errors;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'VAST';
    }
  }]);

  return VAST;
}(_adBuffet.AdBuffet);