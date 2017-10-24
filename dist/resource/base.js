"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base class for a resource used by an {@link Icon}, a {@link Companion}, or
 * a {@link NonLinear}.
 *
 * @class Resource
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var Resource = exports.Resource = function () {
  function Resource() {
    _classCallCheck(this, Resource);
  }

  _createClass(Resource, [{
    key: "content",

    /**
     * The content of this resource.
     *
     * @type {string}
     */
    get: function get() {
      return this._content;
    },
    set: function set(value) {
      this._content = value;
    }
  }]);

  return Resource;
}();