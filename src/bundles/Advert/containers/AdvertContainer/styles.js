/* @flow */

import { StyleSheet } from 'react-native'
import { SFUIDISPLAY_BOLD } from '@theme/fonts'
import { DEFAULT_TEXT_COLOR_LIGHT } from '@theme/colors'
import { rem } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#332580',
  },
  wrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    width: rem(11.875),
    height: rem(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    ...SFUIDISPLAY_BOLD,
    width: rem(34.375),
    fontSize: rem(1.25),
    color: DEFAULT_TEXT_COLOR_LIGHT,
    lineHeight: rem(2.375),
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginVertical: rem(5),
  },
  button: {
    ...SFUIDISPLAY_BOLD,
    fontSize: rem(1.25),
    color: DEFAULT_TEXT_COLOR_LIGHT,
    lineHeight: rem(2.375),
    backgroundColor: 'transparent',
  },
})

export default styles
