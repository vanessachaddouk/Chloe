/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_BACKGROUND_COLOR, DEFAULT_TEXT_COLOR, DEFAULT_TEXT_COLOR_LIGHT, DEFAULT_TITLE_COLOR } from '@theme/colors'
import { SFUIDISPLAY_BOLD, SFUIDISPLAY_HEAVY, SFUIDISPLAY_LIGHT } from '@theme/fonts'
import { rem } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    width: rem(25.9375),
    height: rem(5),
    flexDirection: 'row',
  },
  tile: {
    width: rem(5),
    height: rem(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 6,
    borderColor: DEFAULT_BACKGROUND_COLOR,
  },
  questionMark: {
    ...SFUIDISPLAY_BOLD,
    fontSize: rem(3.375),
    color: DEFAULT_TEXT_COLOR_LIGHT,
    backgroundColor: 'transparent',
  },
  wrapper: {
    marginLeft: rem(0.625),
  },
  title: {
    ...SFUIDISPLAY_HEAVY,
    fontSize: rem(1.375),
    color: DEFAULT_TITLE_COLOR,
    letterSpacing: 0,
    marginBottom: rem(0.375),
    backgroundColor: 'transparent',
  },
  text: {
    ...SFUIDISPLAY_LIGHT,
    width: rem(17.8125),
    fontSize: rem(1.125),
    color: DEFAULT_TEXT_COLOR,
    backgroundColor: 'transparent',
  },
})

export default styles
