/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_TEXT_COLOR, DEFAULT_TEXT_COLOR_LIGHT, NEUTRAL_COLOR_20, NEUTRAL_COLOR_90 } from '@theme/colors'
import { SFUIDISPLAY_BLACK, SFUIDISPLAY_LIGHT } from '@theme/fonts'
import { rem } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: rem(11.5625),
    height: rem(8.125),
    borderRadius: 6,
    backgroundColor: 'rgba(0,0,0,0.25)',
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
    backgroundColor: NEUTRAL_COLOR_20,
  },
  tileTitle: {
    ...SFUIDISPLAY_LIGHT,
    width: rem(11.5625),
    fontSize: rem(0.875),
    color: DEFAULT_TEXT_COLOR,
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginTop: rem(0.4375),
  },
  title: {
    ...SFUIDISPLAY_BLACK,
    fontSize: rem(1.25),
    color: NEUTRAL_COLOR_90,
    letterSpacing: -0.30,
  },
  icon: {
    position: 'absolute',
    zIndex: 10,
    top: -1,
    right: rem(1.25),
  },
})

export default styles
