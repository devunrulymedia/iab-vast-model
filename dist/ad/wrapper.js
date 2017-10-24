'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Wrapper ad.
 *
 * @class Wrapper
 * @extends Ad
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var Wrapper = exports.Wrapper = function (_Ad) {
  _inherits(Wrapper, _Ad);

  function Wrapper() {
    _classCallCheck(this, Wrapper);

    return _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).apply(this, arguments));
  }

  _createClass(Wrapper, [{
    key: 'vastAdTagURI',

    /**
     * The URI of the tag that this ad wraps.
     *
     * @type {string}
     */
    get: function get() {
      return this._vastAdTagURI;
    },
    set: function set(value) {
      this._vastAdTagURI = value;
    }

    /**
     * Whether subsequent wrappers after a requested VAST response is allowed.
     *
     * @type {boolean}
     */

  }, {
    key: 'followAdditionalWrappers',
    get: function get() {
      return this._followAdditionalWrappers;
    },
    set: function set(value) {
      this._followAdditionalWrappers = value;
    }

    /**
     * Whether multiple ads are allowed in the requested VAST response.
     *
     * @type {boolean}
     */

  }, {
    key: 'allowMultipleAds',
    get: function get() {
      return this._allowMultipleAds;
    },
    set: function set(value) {
      this._allowMultipleAds = value;
    }

    /**
     * Whether to use an available Ad when the requested VAST response returns no
     * ads.
     *
     * @type {boolean}
     */

  }, {
    key: 'fallbackOnNoAd',
    get: function get() {
      return this._fallbackOnNoAd;
    },
    set: function set(value) {
      this._fallbackOnNoAd = value;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'Wrapper';
    }
  }]);

  return Wrapper;
}(_base.Ad);