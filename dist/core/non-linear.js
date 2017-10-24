'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a single non-linear ad. Used in a {@link NonLinearAds} creative.
 *
 * @class NonLinear
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var NonLinear = exports.NonLinear = function () {
  function NonLinear() {
    _classCallCheck(this, NonLinear);

    this._clickTrackings = [];
  }

  /**
   * The ID of this non-linear ad.
   *
   * @type {string}
   */


  _createClass(NonLinear, [{
    key: 'id',
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }

    /**
     * The width of this non-linear ad in pixels.
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
     * The height of this non-linear ad in pixels.
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
     * The expanded width of this non-linear ad in pixels.
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
     * The expanded height of this non-linear ad in pixels.
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
     * Whether this non-linear ad is meant to scale to larger dimensions.
     *
     * @type {boolean}
     */

  }, {
    key: 'scalable',
    get: function get() {
      return this._scalable;
    },
    set: function set(value) {
      this._scalable = value;
    }

    /**
     * Whether this non-linear ad's aspect ratio should be maintained when scaled.
     *
     * @type {boolean}
     */

  }, {
    key: 'maintainAspectRatio',
    get: function get() {
      return this._maintainAspectRatio;
    },
    set: function set(value) {
      this._maintainAspectRatio = value;
    }

    /**
     * The minimum suggested duration of this non-linear ad in seconds.
     *
     * @type {number}
     */

  }, {
    key: 'minSuggestedDuration',
    get: function get() {
      return this._minSuggestedDuration;
    },
    set: function set(value) {
      this._minSuggestedDuration = value;
    }

    /**
     * The API framework used by this non-linear ad.
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
     * The resource associated with this non-linear ad.
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
     * The clickthrough configuration for this non-linear ad.
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
     * The click tracking configurations for this non-linear ad.
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
     * The ad parameters for this non-linear ad.
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
  }, {
    key: '$type',
    get: function get() {
      return 'NonLinear';
    }
  }]);

  return NonLinear;
}();