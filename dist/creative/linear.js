'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Linear = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _video = require('../clicks/video');

var _events = require('../tracking/events');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a linear creative.
 *
 * @class Linear
 * @extends Creative
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var Linear = exports.Linear = function (_Creative) {
  _inherits(Linear, _Creative);

  function Linear() {
    _classCallCheck(this, Linear);

    var _this = _possibleConstructorReturn(this, (Linear.__proto__ || Object.getPrototypeOf(Linear)).call(this));

    _this._mediaFiles = [];
    _this._trackingEvents = new _events.TrackingEvents();
    _this._videoClicks = new _video.VideoClicks();
    _this._icons = [];
    return _this;
  }

  /**
   * The time interval after which this linear creative can be skipped.
   *
   * @type {TimeOffset}
   */


  _createClass(Linear, [{
    key: 'skipoffset',
    get: function get() {
      return this._skipoffset;
    },
    set: function set(value) {
      this._skipoffset = value;
    }

    /**
     * The ad parameters for this linear creative.
     *
     * @type {string}
     */

  }, {
    key: 'adParameters',
    get: function get() {
      return this._adParameters;
    },
    set: function set(value) {
      this._adParameters = value;
    }

    /**
     * The duration of this linear creative in seconds.
     *
     * @type {number}
     */

  }, {
    key: 'duration',
    get: function get() {
      return this._duration;
    },
    set: function set(value) {
      this._duration = value;
    }

    /**
     * The media files within this linear creative.
     *
     * @type {MediaFile[]}
     * @readonly
     */

  }, {
    key: 'mediaFiles',
    get: function get() {
      return this._mediaFiles;
    }

    /**
     * The event tracking configuration for this linear creative.
     *
     * @type {TrackingEvents}
     * @readonly
     */

  }, {
    key: 'trackingEvents',
    get: function get() {
      return this._trackingEvents;
    }

    /**
     * The video click tracking configuration for this linear creative.
     *
     * @type {VideoClicks}
     * @readonly
     */

  }, {
    key: 'videoClicks',
    get: function get() {
      return this._videoClicks;
    }

    /**
     * The icons for this linear creative.
     *
     * @type {Icon[]}
     * @readonly
     */

  }, {
    key: 'icons',
    get: function get() {
      return this._icons;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'Linear';
    }
  }]);

  return Linear;
}(_base.Creative);