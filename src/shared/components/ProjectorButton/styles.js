/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_TEXT_COLOR_LIGHT } from '@theme/colors'
import { SFUIDISPLAY_REGULAR } from '@theme/fonts'
import { rem } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 30,
    top: rem(2.1875),
    right: rem(2.1875),
    width: rem(11.875),
    height: rem(1.875),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    ...SFUIDISPLAY_REGULAR,
    fontSize: rem(1.125),
    color: DEFAULT_TEXT_COLOR_LIGHT,
    letterSpacing: -0.5,
    backgroundColor: 'transparent',
  },
})

export default styles
