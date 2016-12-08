/* @flow */

import { Platform } from 'react-native'

export const DEFAULT_BOX_SHADOW = {
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 1,
  elevation: Platform.OS === 'ios' ? 3 : 1,
}
