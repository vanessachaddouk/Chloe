/* @flow */
/* eslint react/jsx-indent: 0 */

import React, { createElement } from 'react'
import { View } from 'react-native'
import { rem } from '@helpers/responsive'
import { ANTIQUITY_COLOR, NEUTRAL_COLOR_55 } from '@theme/colors'

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
    ? defaultActivedColor || ANTIQUITY_COLOR
    : defaultColor || NEUTRAL_COLOR_55
  let icon
  switch (name) {
    case 'antiquity':
      icon = require('./Antiquity').default
      break
    case 'bookmarkIcon':
      icon = require('./BookmarkIcon').default
      break
    case 'bookmarkRibbon':
      icon = require('./BookmarkRibbon').default
      break
    case 'contemporaryTimes':
      icon = require('./LightBulb').default
      break
    case 'chloeZone':
      icon = require('./ChloeZone').default
      break
    case 'lampAd':
      icon = require('./LampAd').default
      break
    case 'lamp':
      icon = require('./Lamp').default
      break
    case 'locker':
      icon = require('./Locker').default
      break
    case 'logo':
      icon = require('./Logo').default
      break
    case 'middleAge':
      icon = require('./MiddleAge').default
      break
    case 'modernTimes':
      icon = require('./ModernTimes').default
      break
    case 'navigation':
      icon = require('./NavButton').default
      break
    case 'preHistory':
      icon = require('./PreHistory').default
      break
    case 'server':
      icon = require('./Server').default
      break
    default:
  }
  return icon
    ? <View style={style}>
        {createElement(
          icon,
          { color, size },
        )}
      </View>
    : null
}

Icon.defaultProps = {
  actived: false,
  size: rem(.875),
}

export default Icon
