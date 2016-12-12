/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_BACKGROUND_COLOR } from '@theme/colors'
import { rem, vh, vw } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    width: vw(100),
    height: vh(100),
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    paddingHorizontal: rem(1.25),
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    marginVertical: rem(3.75),
  },
  tile: {
    marginBottom: rem(3.125),
  },
})

export default styles
