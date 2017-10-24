'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Creative = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sortedListItem = require('../util/sorted-list-item');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base class for creatives.
 *
 * @class Creative
 * @abstract
 * @extends SortedListItem
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var Creative = exports.Creative = function (_SortedListItem) {
  _inherits(Creative, _SortedListItem);

  function Creative() {
    _classCallCheck(this, Creative);

    var _this = _possibleConstructorReturn(this, (Creative.__proto__ || Object.getPrototypeOf(Creative)).call(this));

    _this._extensions = [];
    return _this;
  }

  /**
   * The ID of this creative.
   *
   * @type {string}
   */


  _createClass(Creative, [{
    key: 'id',
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }

    /**
     * The ID of the {@link Ad} with which this creative is served.
     *
     * @type {string}
     */

  }, {
    key: 'adID',
    get: function get() {
      return this._adID;
    },
    set: function set(value) {
      this._adID = value;
    }

    /**
     * The API framework used by this creative.
     *
     * @type {string}
     */

  }, {
    key: 'apiFramework',
    get: function get() {
      return this._apiFramework;
    },
    set: function set(value) {
      this._apiFramework = value;
    }

    /**
     * The creative extensions for this creative.
     *
     * @type {CreativeExtension[]}
     * @readonly
     */

  }, {
    key: 'extensions',
    get: function get() {
      return this._extensions;
    }
  }]);

  return Creative;
}(_sortedListItem.SortedListItem);