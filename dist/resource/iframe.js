'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IFrameResource = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Describes an HTML page for display within an iframe.
 *
 * @class IFrameResource
 * @extends Resource
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var IFrameResource = exports.IFrameResource = function (_Resource) {
  _inherits(IFrameResource, _Resource);

  function IFrameResource() {
    _classCallCheck(this, IFrameResource);

    return _possibleConstructorReturn(this, (IFrameResource.__proto__ || Object.getPrototypeOf(IFrameResource)).apply(this, arguments));
  }

  _createClass(IFrameResource, [{
    key: '$type',
    get: function get() {
      return 'IFrameResource';
    }
  }]);

  return IFrameResource;
}(_base.Resource);