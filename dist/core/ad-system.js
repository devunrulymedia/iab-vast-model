'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Stores information about the ad system.
 *
 * @class AdSystem
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var AdSystem = exports.AdSystem = function () {
  function AdSystem() {
    _classCallCheck(this, AdSystem);
  }

  _createClass(AdSystem, [{
    key: 'name',

    /**
     * The name of the ad system.
     *
     * @type {string}
     */
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      this._name = value;
    }

    /**
     * The version of the ad system.
     *
     * @type {string}
     */

  }, {
    key: 'version',
    get: function get() {
      return this._version;
    },
    set: function set(value) {
      this._version = value;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'AdSystem';
    }
  }]);

  return AdSystem;
}();