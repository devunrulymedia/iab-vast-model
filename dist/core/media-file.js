'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a media file used in a {@link Linear} creative.
 *
 * @class MediaFile
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var MediaFile = exports.MediaFile = function () {
  function MediaFile() {
    _classCallCheck(this, MediaFile);
  }

  _createClass(MediaFile, [{
    key: 'id',

    /**
     * The ID of this media file.
     *
     * @type {string}
     */
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }

    /**
     * The delivery method for this media file.
     *
     * @type {string}
     */

  }, {
    key: 'delivery',
    get: function get() {
      return this._delivery;
    },
    set: function set(value) {
      this._delivery = value;
    }

    /**
     * The MIME type of this media file.
     *
     * @type {string}
     */

  }, {
    key: 'type',
    get: function get() {
      return this._type;
    },
    set: function set(value) {
      this._type = value;
    }

    /**
     * The bitrate of this media file in kbps.
     *
     * @type {number}
     */

  }, {
    key: 'bitrate',
    get: function get() {
      return this._bitrate;
    },
    set: function set(value) {
      this._bitrate = value;
    }

    /**
     * The minimum bitrate of this media file in kbps.
     *
     * @type {number}
     */

  }, {
    key: 'minBitrate',
    get: function get() {
      return this._minBitrate;
    },
    set: function set(value) {
      this._minBitrate = value;
    }

    /**
     * The maximum bitrate of this media file in kbps.
     *
     * @type {number}
     */

  }, {
    key: 'maxBitrate',
    get: function get() {
      return this._maxBitrate;
    },
    set: function set(value) {
      this._maxBitrate = value;
    }

    /**
     * The width of this media file in pixels.
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
     * The height of this media file in pixels.
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
     * Whether this media file is meant to scale to larger dimensions.
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
     * Whether this media file's aspect ratio should be maintained when scaled.
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
     * The codec of this media file in RFC 4281 format.
     *
     * @type {string}
     */

  }, {
    key: 'codec',
    get: function get() {
      return this._codec;
    },
    set: function set(value) {
      this._codec = value;
    }

    /**
     * The API framework used by this media file.
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
     * The URI to this media file.
     *
     * @type {string}
     */

  }, {
    key: 'uri',
    get: function get() {
      return this._uri;
    },
    set: function set(value) {
      this._uri = value;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'MediaFile';
    }
  }]);

  return MediaFile;
}();