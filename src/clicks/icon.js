// @flow

import { AbstractClicks } from './abstract'

import type { Type } from '../type'

/**
 * Represents the click tracking configuration for an {@link Icon}.
 *
 * @class IconClicks
 * @extends AbstractClicks
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class IconClicks extends AbstractClicks {
  get $type (): Type {
    return 'IconClicks'
  }
}
