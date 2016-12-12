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
    marginTop: rem(1.875),
    marginBottom: rem(3.75),
    marginLeft: rem(2.1875),
  },
  scrollview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginLeft: rem(2.1875),
  },
  mediaTile: {
    marginRight: rem(3.25),
    marginBottom: rem(3.125),
  },
})

export default styles
