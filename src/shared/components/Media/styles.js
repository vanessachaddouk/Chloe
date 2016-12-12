/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_TEXT_COLOR, DEFAULT_TEXT_COLOR_LIGHT, DEFAULT_BACKGROUND_COLOR } from '@theme/colors'
import { SFUIDISPLAY_BLACK } from '@theme/fonts'
import { rem } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: rem(11.5625),
    height: rem(8.125),
    borderRadius: 6,
  },
  overlay: {
    width: rem(11.5625),
    height: rem(8.125),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  number: {
    ...SFUIDISPLAY_BLACK,
    fontSize: rem(3.75),
    color: DEFAULT_TEXT_COLOR_LIGHT,
    letterSpacing: -1.45,
    backgroundColor: 'transparent',
  },
  titleContainer: {
    width: rem(11.5625),
    height: rem(8.125),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  title: {
    ...SFUIDISPLAY_BLACK,
    fontSize: rem(1.25),
    color: DEFAULT_TEXT_COLOR,
    letterSpacing: -0.30,
  },
})

export default styles
