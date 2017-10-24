'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoClicks = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstract = require('./abstract');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents the click tracking configuration for a {@link Linear} creative.
 *
 * @class VideoClicks
 * @extends AbstractClicks
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var VideoClicks = exports.VideoClicks = function (_AbstractClicks) {
  _inherits(VideoClicks, _AbstractClicks);

  function VideoClicks() {
    _classCallCheck(this, VideoClicks);

    var _this = _possibleConstructorReturn(this, (VideoClicks.__proto__ || Object.getPrototypeOf(VideoClicks)).call(this));

    _this._customClicks = [];
    return _this;
  }

  /**
   * The custom-click configurations.
   *
   * @type {Click[]}
   */


  _createClass(VideoClicks, [{
    key: 'customClicks',
    get: function get() {
      return this._customClicks;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'VideoClicks';
    }
  }]);

  return VideoClicks;
}(_abstract.AbstractClicks);