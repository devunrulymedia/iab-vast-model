'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _icon = require('../clicks/icon');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents an icon used in a {@link Linear} creative.
 *
 * @class Icon
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var Icon = exports.Icon = function () {
  function Icon() {
    _classCallCheck(this, Icon);

    this._clicks = new _icon.IconClicks();
    this._viewTrackings = [];
  }

  /**
   * The industry initiative that this icon supports.
   *
   * @type {string}
   */


  _createClass(Icon, [{
    key: 'program',
    get: function get() {
      return this._program;
    },
    set: function set(value) {
      this._program = value;
    }

    /**
     * The width of this icon in pixels.
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
     * The height of this icon in pixels.
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
     * The horizontal position of this icon in pixels.
     *
     * @type {number}
     */

  }, {
    key: 'xPosition',
    get: function get() {
      return this._xPosition;
    },
    set: function set(value) {
      this._xPosition = value;
    }

    /**
     * The vertical position of this icon in pixels.
     *
     * @type {number}
     */

  }, {
    key: 'yPosition',
    get: function get() {
      return this._yPosition;
    },
    set: function set(value) {
      this._yPosition = value;
    }

    /**
     * The duration of this icon in seconds.
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
     * The time offset of this icon in seconds.
     *
     * @type {number}
     */

  }, {
    key: 'offset',
    get: function get() {
      return this._offset;
    },
    set: function set(value) {
      this._offset = value;
    }

    /**
     * The API framework used by this icon.
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
     * The resource associated with this icon.
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
     * The click tracking configuration for this icon.
     *
     * @type {IconClicks}
     * @readonly
     */

  }, {
    key: 'clicks',
    get: function get() {
      return this._clicks;
    }

    /**
     * The view tracking configuration.
     *
     * @type {Click[]}
     */

  }, {
    key: 'viewTrackings',
    get: function get() {
      return this._viewTrackings;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'Icon';
    }
  }]);

  return Icon;
}();