'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NonLinearAds = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _events = require('../tracking/events');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a creative with non-linear ads.
 *
 * @class NonLinearAds
 * @extends Creative
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var NonLinearAds = exports.NonLinearAds = function (_Creative) {
  _inherits(NonLinearAds, _Creative);

  function NonLinearAds() {
    _classCallCheck(this, NonLinearAds);

    var _this = _possibleConstructorReturn(this, (NonLinearAds.__proto__ || Object.getPrototypeOf(NonLinearAds)).call(this));

    _this._nonLinears = [];
    _this._trackingEvents = new _events.TrackingEvents();
    return _this;
  }

  /**
   * The non-linear ads within this creative.
   *
   * @type {NonLinear[]}
   * @readonly
   */


  _createClass(NonLinearAds, [{
    key: 'nonLinears',
    get: function get() {
      return this._nonLinears;
    }

    /**
     * The event tracking configuration for this non-linear creative.
     *
     * @type {TrackingEvents}
     * @readonly
     */

  }, {
    key: 'trackingEvents',
    get: function get() {
      return this._trackingEvents;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'NonLinearAds';
    }
  }]);

  return NonLinearAds;
}(_base.Creative);