'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a tracking event configuration.
 *
 * @class TrackingEvent
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var TrackingEvent = exports.TrackingEvent = function () {
  function TrackingEvent() {
    _classCallCheck(this, TrackingEvent);
  }

  _createClass(TrackingEvent, [{
    key: 'uri',

    /**
     * The tracking URI for this event configuration.
     *
     * @type {string[]}
     */
    get: function get() {
      return this._uri;
    },
    set: function set(value) {
      this._uri = value;
    }

    /**
     * The time offset for this event configuration. Only applies to `progress`
     * events.
     *
     * @type {TimeOffset}
     */

  }, {
    key: 'offset',
    get: function get() {
      return this._offset;
    },
    set: function set(value) {
      this._offset = value;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'TrackingEvent';
    }
  }]);

  return TrackingEvent;
}();