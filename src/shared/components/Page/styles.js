/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_BACKGROUND_COLOR, DEFAULT_INFOS_COLOR, DEFAULT_TEXT_COLOR, DEFAULT_TITLE_COLOR } from '@theme/colors'
import { SFUIDISPLAY_BLACK, SFUIDISPLAY_REGULAR } from '@theme/fonts'
import { rem, vh, vw } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  wrapper: {
    flex: 0.5,
    height: vh(100),
    paddingTop: rem(6.25),
    paddingLeft: rem(4.375),
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  title: {
    ...SFUIDISPLAY_BLACK,
    fontSize: rem(1.625),
    color: DEFAULT_TITLE_COLOR,
    letterSpacing: -0.6,
    marginBottom: rem(4.0625),
  },
  content: {
    ...SFUIDISPLAY_REGULAR,
    fontSize: rem(1.125),
    color: DEFAULT_TEXT_COLOR,
    letterSpacing: 0.45,
    lineHeight: rem(2.1875),
    paddingRight: rem(3.75),
  },
  footer: {
    position: 'absolute',
    bottom: rem(2.5),
    width: vw(53),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...SFUIDISPLAY_BLACK,
    fontSize: rem(1),
    color: DEFAULT_INFOS_COLOR,
  },
  image: {
    flex: 0.5,
    width: vw(50),
    height: vh(100),
  },
})

export default styles
