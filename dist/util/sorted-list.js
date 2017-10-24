'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a list of {@link SortedListItem}s, ordered by
 * {@link SortedListItem#sequence}.
 *
 * @class SortedList
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
var SortedList = exports.SortedList = function () {
  function SortedList() {
    _classCallCheck(this, SortedList);

    this._contents = [];
  }

  /**
   * The length of this list.
   *
   * @type {number}
   * @readonly
   */


  _createClass(SortedList, [{
    key: 'add',


    /**
     * Adds the given item to this list.
     *
     * @param {SortedListItem} item - the item.
     */
    value: function add(item) {
      this._contents.push(item);
      this._contents.sort(function (a, b) {
        return (a.sequence || 0) - (b.sequence || 0);
      });
    }

    /**
     * Removes the given item from this list.
     *
     * @param {SortedListItem} item - the item.
     */

  }, {
    key: 'remove',
    value: function remove(item) {
      var index = this._contents.indexOf(item);
      while (index >= 0) {
        this._contents.splice(index, 1);
        index = this._contents.indexOf(item, index);
      }
    }

    /**
     * Gets the item at the given index.
     *
     * @param {number} index - the index.
     * @return {SortedListItem} the item.
     */

  }, {
    key: 'get',
    value: function get(index) {
      return this._contents[index];
    }

    /**
     * Empties this list.
     */

  }, {
    key: 'clear',
    value: function clear() {
      this._contents.length = 0;
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      var that = this;
      var i = 0;
      return {
        next: function next() {
          return i < that.length ? { value: that.get(i++), done: false } : { value: undefined, done: true };
        }
      };
    }

    /**
     * Creates an array representation of this list.
     *
     * @return {SortedListItem[]} the item array.
     */

  }, {
    key: 'toArray',
    value: function toArray() {
      return this._contents.slice();
    }
  }, {
    key: 'length',
    get: function get() {
      return this._contents.length;
    }
  }, {
    key: '$type',
    get: function get() {
      return 'SortedList';
    }
  }]);

  return SortedList;
}();