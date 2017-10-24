'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanionAds = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a creative with companion ads.
 *
 * @class CompanionAds
 * @extends Creative
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var CompanionAds = exports.CompanionAds = function (_Creative) {
  _inherits(CompanionAds, _Creative);

  function CompanionAds() {
    _classCallCheck(this, CompanionAds);

    var _this = _possibleConstructorReturn(this, (CompanionAds.__proto__ || Object.getPrototypeOf(CompanionAds)).call(this));

    _this._companions = [];
    return _this;
  }

  /**
   * The companion ads within this creative.
   *
   * @type {Companion[]}
   * @readonly
   */


  _createClass(CompanionAds, [{
    key: 'companions',
    get: function get() {
      return this._companions;
    }

    /**
     * Determines which companion creative to display when multiple companions
     * are supplied and whether the ad can be displayed without its companion
     * creative. Either `"all"`, `"any"`, or `"none"`.
     *
     * @type {string}
     */

  }, {
    key: 'required',
    get: function get() {
      return this._required;
    },
    set: function set(value) {
      this._required = value;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'CompanionAds';
    }
  }]);

  return CompanionAds;
}(_base.Creative);