'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdBuffet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sortedList = require('../util/sorted-list');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a VAST ad buffet.
 *
 * @class AdBuffet
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var AdBuffet = exports.AdBuffet = function () {
  function AdBuffet() {
    _classCallCheck(this, AdBuffet);

    this._ads = new _sortedList.SortedList();
  }

  /**
   * The ads in this ad buffet.
   *
   * @type {SortedList}
   * @readonly
   */


  _createClass(AdBuffet, [{
    key: 'ads',
    get: function get() {
      return this._ads;
    }

    /**
     * The ad pod for this ad buffet.
     *
     * @type {AdPod}
     */

  }, {
    key: 'adPod',
    get: function get() {
      return this._adPod;
    },
    set: function set(value) {
      this._adPod = value;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'AdBuffet';
    }
  }]);

  return AdBuffet;
}();