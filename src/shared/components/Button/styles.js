/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_TEXT_COLOR } from '@theme/colors'
import { SFUIDISPLAY_REGULAR } from '@theme/fonts'
import { rem } from '@helpers/responsive'

const styles = StyleSheet.create({
  text: {
    ...SFUIDISPLAY_REGULAR,
    fontSize: rem(1.25),
    color: DEFAULT_TEXT_COLOR,
    letterSpacing: -0.5,
    marginLeft: rem(2.1875),
    marginTop: rem(2.5),
    backgroundColor: 'transparent',
  },
  button: {
    width: rem(2.5),
    height: rem(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 40,
  },
})

export default styles
