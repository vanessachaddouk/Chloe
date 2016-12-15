/* @flow */

import { StyleSheet } from 'react-native'
import { rem, vw } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: vw(50),
  },
  nextButton: {
    paddingLeft: 2,
  },
  prevButton: {
    paddingRight: 2,
  },
  chloeModePosition: {
    transform: [{ translateY: rem(3.75) }],
  },
})

export default styles
