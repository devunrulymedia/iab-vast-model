'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaticResource = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Describes non-HTML creative.
 *
 * @class StaticResource
 * @extends Resource
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var StaticResource = exports.StaticResource = function (_Resource) {
  _inherits(StaticResource, _Resource);

  function StaticResource() {
    _classCallCheck(this, StaticResource);

    return _possibleConstructorReturn(this, (StaticResource.__proto__ || Object.getPrototypeOf(StaticResource)).apply(this, arguments));
  }

  _createClass(StaticResource, [{
    key: 'creativeType',

    /**
     * The MIME type of this resource.
     *
     * @type {string}
     */
    get: function get() {
      return this._creativeType;
    },
    set: function set(value) {
      this._creativeType = value;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'StaticResource';
    }
  }]);

  return StaticResource;
}(_base.Resource);