/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_BACKGROUND_COLOR, DEFAULT_TEXT_COLOR } from '@theme/colors'
import { SFUIDISPLAY_HEAVY, SFUIDISPLAY_REGULAR } from '@theme/fonts'
import { rem, vh, vw } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 50,
    top: 0,
    width: vw(100),
    height: vh(100),
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: rem(18.75),
    height: rem(22.5),
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  imageContainer: {
    height: rem(9.375),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textContainer: {
    height: rem(9.375),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: rem(3.75),
    justifyContent: 'center',
  },
  title: {
    ...SFUIDISPLAY_HEAVY,
    fontSize: rem(1.625),
    color: DEFAULT_TEXT_COLOR,
    letterSpacing: -0.5,
    marginBottom: rem(1.5625),
    backgroundColor: 'transparent',
  },
  text: {
    ...SFUIDISPLAY_REGULAR,
    fontSize: rem(1.125),
    color: DEFAULT_TEXT_COLOR,
    lineHeight: rem(1.6875),
    letterSpacing: -0.34,
    paddingHorizontal: rem(1.25),
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  continue: {
    ...SFUIDISPLAY_REGULAR,
    fontSize: rem(1.125),
    backgroundColor: 'transparent',
  },
})

export default styles
