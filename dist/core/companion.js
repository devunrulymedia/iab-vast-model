'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Companion = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('../tracking/events');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a single companion ad. Used in a {@link CompanionAds} creative.
 *
 * @class Companion
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var Companion = exports.Companion = function () {
  function Companion() {
    _classCallCheck(this, Companion);

    this._clickTrackings = [];
    this._trackingEvents = new _events.TrackingEvents();
  }

  /**
   * The ID for this companion ad.
   *
   * @type {string}
   */


  _createClass(Companion, [{
    key: 'id',
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }

    /**
     * The width of this companion ad in pixels.
     *
     * @type {number}
     */

  }, {
    key: 'width',
    get: function get() {
      return this._width;
    },
    set: function set(value) {
      this._width = value;
    }

    /**
     * The height of this companion ad in pixels.
     *
     * @type {number}
     */

  }, {
    key: 'height',
    get: function get() {
      return this._height;
    },
    set: function set(value) {
      this._height = value;
    }

    /**
     * The width of this companion ad's asset in pixels.
     *
     * @type {number}
     */

  }, {
    key: 'assetWidth',
    get: function get() {
      return this._assetWidth;
    },
    set: function set(value) {
      this._assetWidth = value;
    }

    /**
     * The height of this companion ad's asset in pixels.
     *
     * @type {number}
     */

  }, {
    key: 'assetHeight',
    get: function get() {
      return this._assetHeight;
    },
    set: function set(value) {
      this._assetHeight = value;
    }

    /**
     * The expanded width of this companion ad in pixels.
     *
     * @type {number}
     */

  }, {
    key: 'expandedWidth',
    get: function get() {
      return this._expandedWidth;
    },
    set: function set(value) {
      this._expandedWidth = value;
    }

    /**
     * The expanded height of this companion ad in pixels.
     *
     * @type {number}
     */

  }, {
    key: 'expandedHeight',
    get: function get() {
      return this._expandedHeight;
    },
    set: function set(value) {
      this._expandedHeight = value;
    }

    /**
     * The API framework used by this companion ad.
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
     * The ad slot ID of this companion ad.
     *
     * @type {string}
     */

  }, {
    key: 'adSlotID',
    get: function get() {
      return this._adSlotID;
    },
    set: function set(value) {
      this._adSlotID = value;
    }

    /**
     * The resource associated with this companion ad.
     *
     * @type {Resource}
     */

  }, {
    key: 'resource',
    get: function get() {
      return this._resource;
    },
    set: function set(value) {
      this._resource = value;
    }

    /**
     * The ad parameters for this companion ad.
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
     * The alt text of this companion ad.
     *
     * @type {string}
     */

  }, {
    key: 'altText',
    get: function get() {
      return this._altText;
    },
    set: function set(value) {
      this._altText = value;
    }

    /**
     * The clickthrough configuration for this companion ad.
     *
     * @type {Click}
     */

  }, {
    key: 'clickThrough',
    get: function get() {
      return this._clickThrough;
    },
    set: function set(value) {
      this._clickThrough = value;
    }

    /**
     * The click tracking configurations for this companion ad.
     *
     * @type {Click[]}
     * @readonly
     */

  }, {
    key: 'clickTrackings',
    get: function get() {
      return this._clickTrackings;
    }

    /**
     * The tracking event configuration for this companion ad.
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
      return 'Companion';
    }
  }]);

  return Companion;
}();