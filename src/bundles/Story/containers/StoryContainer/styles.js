/* @flow */

import { StyleSheet } from 'react-native'
import { SFUIDISPLAY_BOLD } from '@theme/fonts'
import { rem } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...SFUIDISPLAY_BOLD,
    color: 'black',
    fontSize: rem(1.125),
  },
})

export default styles
