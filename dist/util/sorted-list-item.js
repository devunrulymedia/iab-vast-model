"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents an item in a {@link SortedList}. Base class for {@link Ad} and
 * {@link Creative}.
 *
 * @class SortedListItem
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var SortedListItem = exports.SortedListItem = function () {
  function SortedListItem() {
    _classCallCheck(this, SortedListItem);
  }

  _createClass(SortedListItem, [{
    key: "sequence",

    /**
     * The sequence number of this item within its parent.
     *
     * @type {number}
     */
    get: function get() {
      return this._sequence;
    },
    set: function set(value) {
      this._sequence = value;
    }
  }]);

  return SortedListItem;
}();