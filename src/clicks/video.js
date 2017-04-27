// @flow

import { AbstractClicks } from './abstract'
import type { Click } from '../util/click'

/**
 * Represents the click tracking configuration for a {@link Linear} creative.
 *
 * @class VideoClicks
 * @extends AbstractClicks
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class VideoClicks extends AbstractClicks {
  _customClicks: Click[]

  constructor () {
    super()
    this._customClicks = []
  }

  /**
   * The custom-click configurations.
   *
   * @type {Click[]}
   */
  get customClicks (): Click[] {
    return this._customClicks
  }

  get $type (): 'VideoClicks' {
    return 'VideoClicks'
  }
}
