'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InLine = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Inline ad.
 *
 * @class InLine
 * @extends Ad
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var InLine = exports.InLine = function (_Ad) {
  _inherits(InLine, _Ad);

  function InLine() {
    _classCallCheck(this, InLine);

    return _possibleConstructorReturn(this, (InLine.__proto__ || Object.getPrototypeOf(InLine)).apply(this, arguments));
  }

  _createClass(InLine, [{
    key: 'adTitle',

    /**
     * The title for this ad.
     *
     * @type {string}
     */
    get: function get() {
      return this._adTitle;
    },
    set: function set(value) {
      this._adTitle = value;
    }

    /**
     * The description for this ad.
     *
     * @type {string}
     */

  }, {
    key: 'description',
    get: function get() {
      return this._description;
    },
    set: function set(value) {
      this._description = value;
    }

    /**
     * The advertiser name for this ad.
     *
     * @type {string}
     */

  }, {
    key: 'advertiser',
    get: function get() {
      return this._advertiser;
    },
    set: function set(value) {
      this._advertiser = value;
    }

    /**
     * The survey URI for this ad.
     *
     * @type {string}
     */

  }, {
    key: 'survey',
    get: function get() {
      return this._survey;
    },
    set: function set(value) {
      this._survey = value;
    }

    /**
     * The pricing configuration for this ad.
     *
     * @type {Pricing}
     */

  }, {
    key: 'pricing',
    get: function get() {
      return this._pricing;
    },
    set: function set(value) {
      this._pricing = value;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'InLine';
    }
  }]);

  return InLine;
}(_base.Ad);