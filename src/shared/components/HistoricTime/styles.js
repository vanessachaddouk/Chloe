/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_INFOS_COLOR } from '@theme/colors'
import { SFUIDISPLAY_HEAVY, SFUIDISPLAY_REGULAR } from '@theme/fonts'
import { rem } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    ...SFUIDISPLAY_REGULAR,
    fontSize: rem(0.75),
    color: DEFAULT_INFOS_COLOR,
    marginLeft: rem(0.3125),
  },
  textBold: {
    ...SFUIDISPLAY_HEAVY,
  },
})

export default styles
