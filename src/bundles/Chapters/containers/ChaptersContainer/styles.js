/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_BACKGROUND_COLOR } from '@theme/colors'
import { rem } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  title: {
    marginLeft: rem(2.1875),
    marginTop: rem(3.125),
  },
  scrollview: {
    marginTop: rem(3.125),
  },
  tile: {
    marginRight: rem(3.75),
  },
})

export default styles
