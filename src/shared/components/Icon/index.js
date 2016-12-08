/* @flow */
/* eslint react/jsx-indent: 0 */

import React, { createElement } from 'react'
import { View } from 'react-native'
import { rem } from '@helpers/responsive'
import { BRAND_COLOR_50, NEUTRAL_COLOR_55 } from '@theme/colors'

type Props = {
  name: string,
  actived?: boolean,
  size?: number,
  defaultActivedColor?: string,
  defaultColor?: string,
  style?: any,
}

const Icon = (props: Props): React$Element<any> | null => {
  const { name, style, size, actived, defaultColor, defaultActivedColor } = props
  const color = actived
    ? defaultActivedColor || BRAND_COLOR_50
    : defaultColor || NEUTRAL_COLOR_55
  let icon
  switch (name) {
    case 'arrow':
      icon = require('./Arrow').default
      break
    case 'awesome':
      icon = require('./Awesome').default
      break
    case 'bookmark':
      icon = require('./Bookmark').default
      break
    case 'cardio':
      icon = require('./Cardio').default
      break
    case 'chill':
      icon = require('./Chill').default
      break
    case 'close':
      icon = require('./Close').default
      break
    case 'dead':
      icon = require('./Dead').default
      break
    case 'fail':
      icon = require('./Fail').default
      break
    case 'filter':
      icon = require('./Filter').default
      break
    case 'historic':
      icon = require('./Historic').default
      break
    case 'hit':
      icon = require('./Hit').default
      break
    case 'like':
      icon = require('./Like').default
      break
    case 'location':
      icon = require('./Location').default
      break
    case 'muscle':
      icon = require('./Muscle').default
      break
    case 'navigation':
      icon = require('./Navigation').default
      break
    case 'phone':
      icon = require('./Phone').default
      break
    case 'search':
      icon = require('./Search').default
      break
    case 'share':
      icon = require('./Share').default
      break
    case 'star':
      icon = require('./Star').default
      break
    case 'stretching':
      icon = require('./Stretching').default
      break
    case 'success':
      icon = require('./Success').default
      break
    case 'marker':
      icon = require('./Marker').default
      break
    default:
  }
  return icon
    ? <View style={style}>
        {createElement(
          icon,
          { color, size }
        )}
      </View>
    : null
}

Icon.defaultProps = {
  actived: false,
  size: rem(.875),
}

export default Icon
