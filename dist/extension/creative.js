'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreativeExtension = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstract = require('./abstract');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a creative extension.
 *
 * @class CreativeExtension
 * @extends AbstractExtension
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var CreativeExtension = exports.CreativeExtension = function (_AbstractExtension) {
  _inherits(CreativeExtension, _AbstractExtension);

  function CreativeExtension() {
    _classCallCheck(this, CreativeExtension);

    return _possibleConstructorReturn(this, (CreativeExtension.__proto__ || Object.getPrototypeOf(CreativeExtension)).apply(this, arguments));
  }

  _createClass(CreativeExtension, [{
    key: '$type',
    get: function get() {
      return 'CreativeExtension';
    }
  }]);

  return CreativeExtension;
}(_abstract.AbstractExtension);