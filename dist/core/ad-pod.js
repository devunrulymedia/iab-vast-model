'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdPod = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sortedList = require('../util/sorted-list');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a VAST ad pod.
 *
 * @class AdPod
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var AdPod = exports.AdPod = function () {
  function AdPod() {
    _classCallCheck(this, AdPod);

    this._ads = new _sortedList.SortedList();
  }

  /**
   * The ads in this ad pod.
   *
   * @type {SortedList}
   * @readonly
   */


  _createClass(AdPod, [{
    key: 'ads',
    get: function get() {
      return this._ads;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'AdPod';
    }
  }]);

  return AdPod;
}();