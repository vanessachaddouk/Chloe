/* @flow */

import { StyleSheet } from 'react-native'
import { SFUIDISPLAY_BOLD } from '@theme/fonts'
import { rem } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0055B',
  },
  text: {
    ...SFUIDISPLAY_BOLD,
    color: 'white',
    fontSize: rem(1.125),
  },
})

export default styles
