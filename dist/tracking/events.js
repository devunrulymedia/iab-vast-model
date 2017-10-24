'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Configures tracking events. Binds VAST event types to arrays of
 * {@link TrackingEvent} instances.
 *
 * @class TrackingEvents
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var TrackingEvents = exports.TrackingEvents = function () {
  function TrackingEvents() {
    _classCallCheck(this, TrackingEvents);

    this._map = Object.create(null);
  }

  /**
   * The event types tracked by this configuration.
   *
   * @type {string[]}
   */


  _createClass(TrackingEvents, [{
    key: 'get',


    /**
     * Gets the tracking event configurations for the given event type.
     *
     * @param {string} event - the event type.
     * @return {TrackingEvent[]} the tracking event configurations.
     */
    value: function get(event) {
      return this._map[event] || [];
    }

    /**
     * Adds a tracking event configuration for the given event type.
     *
     * @param {string} event - the event type.
     * @param {TrackingEvent} config - the tracking event configuration.
     */

  }, {
    key: 'add',
    value: function add(event, config) {
      this._map[event] = this._map[event] || [];
      this._map[event].push(config);
    }
  }, {
    key: 'types',
    get: function get() {
      return Object.keys(this._map);
    }
  }, {
    key: '$type',
    get: function get() {
      return 'TrackingEvents';
    }
  }]);

  return TrackingEvents;
}();