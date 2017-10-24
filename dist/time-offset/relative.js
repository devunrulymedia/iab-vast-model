'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelativeTimeOffset = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a time offset expressed as a percentage (between 0 and 100).
 *
 * @class RelativeTimeOffset
 * @extends TimeOffset
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var RelativeTimeOffset = exports.RelativeTimeOffset = function (_TimeOffset) {
  _inherits(RelativeTimeOffset, _TimeOffset);

  function RelativeTimeOffset() {
    _classCallCheck(this, RelativeTimeOffset);

    return _possibleConstructorReturn(this, (RelativeTimeOffset.__proto__ || Object.getPrototypeOf(RelativeTimeOffset)).apply(this, arguments));
  }

  _createClass(RelativeTimeOffset, [{
    key: '$type',
    get: function get() {
      return 'RelativeTimeOffset';
    }
  }]);

  return RelativeTimeOffset;
}(_base.TimeOffset);