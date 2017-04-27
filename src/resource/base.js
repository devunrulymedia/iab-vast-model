// @flow

/**
 * Base class for a resource used by an {@link Icon}, a {@link Companion}, or
 * a {@link NonLinear}.
 *
 * @class Resource
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Resource {
  _content: string

  /**
   * The content of this resource.
   *
   * @type {string}
   */
  get content (): string {
    return this._content
  }

  set content (value: string) {
    this._content = value
  }
}
