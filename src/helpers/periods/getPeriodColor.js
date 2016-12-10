/* @flow */

import {
  PREHISTORY_COLOR,
  ANTIQUITY_COLOR,
  MIDDLEAGE_COLOR,
  MODERNTIMES_COLOR,
  CONTEMPORARYTIMES_COLOR,
} from '@theme/colors'

export default (period: string) => {
  switch (period) {
    case 'preHistory':
      return PREHISTORY_COLOR
    case 'antiquity':
      return ANTIQUITY_COLOR
    case 'middleAge':
      return MIDDLEAGE_COLOR
    case 'modernTimes':
      return MODERNTIMES_COLOR
    case 'contemporaryTimes':
      return CONTEMPORARYTIMES_COLOR
    default:
      return PREHISTORY_COLOR
  }
}
