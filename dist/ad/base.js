'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ad = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sortedList = require('../util/sorted-list');

var _sortedListItem = require('../util/sorted-list-item');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base class for ads.
 *
 * @class Ad
 * @abstract
 * @extends SortedListItem
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var Ad = exports.Ad = function (_SortedListItem) {
  _inherits(Ad, _SortedListItem);

  function Ad() {
    _classCallCheck(this, Ad);

    var _this = _possibleConstructorReturn(this, (Ad.__proto__ || Object.getPrototypeOf(Ad)).call(this));

    _this._creatives = new _sortedList.SortedList();
    _this._impressions = [];
    _this._errors = [];
    _this._extensions = [];
    return _this;
  }

  /**
   * The ID of this ad.
   *
   * @type {string}
   */


  _createClass(Ad, [{
    key: 'id',
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }

    /**
     * The ad system for this ad.
     *
     * @type {AdSystem}
     */

  }, {
    key: 'adSystem',
    get: function get() {
      return this._adSystem;
    },
    set: function set(value) {
      this._adSystem = value;
    }

    /**
     * The creatives for this ad.
     *
     * @type {SortedList}
     * @readonly
     */

  }, {
    key: 'creatives',
    get: function get() {
      return this._creatives;
    }

    /**
     * The impression tracking configurations for this ad.
     *
     * @type {Impression[]}
     * @readonly
     */

  }, {
    key: 'impressions',
    get: function get() {
      return this._impressions;
    }

    /**
     * The error tracking URIs for this ad.
     *
     * @type {string[]}
     * @readonly
     */

  }, {
    key: 'errors',
    get: function get() {
      return this._errors;
    }

    /**
     * The error tracking URI for this ad.
     *
     * @type {string}
     * @deprecated superseded by .errors
     */

  }, {
    key: 'error',
    get: function get() {
      console.warn('Ad.error is deprecated. Please use ad.errors instead.');
      return this._errors[0];
    },
    set: function set(value) {
      console.warn('Ad.error is deprecated. Please use ad.errors instead.');
      this._errors[0] = value;
    }

    /**
     * The extensions for this ad.
     *
     * @type {Extension[]}
     * @readonly
     */

  }, {
    key: 'extensions',
    get: function get() {
      return this._extensions;
    }
  }]);

  return Ad;
}(_sortedListItem.SortedListItem);