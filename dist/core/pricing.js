'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Pricing information for real-time bidding.
 *
 * @class Pricing
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var Pricing = exports.Pricing = function () {
  function Pricing() {
    _classCallCheck(this, Pricing);
  }

  _createClass(Pricing, [{
    key: 'model',

    /**
     * The pricing model. Either `"CPM"`, `"CPC"`, `"CPE"`, or `"CPV"`.
     *
     * @type {string}
     */
    get: function get() {
      return this._model;
    },
    set: function set(value) {
      this._model = value;
    }

    /**
     * The pricing currency.
     *
     * @type {string}
     */

  }, {
    key: 'currency',
    get: function get() {
      return this._currency;
    },
    set: function set(value) {
      this._currency = value;
    }

    /**
     * The price.
     *
     * @type {number}
     */

  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this._value = value;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'Pricing';
    }
  }]);

  return Pricing;
}();