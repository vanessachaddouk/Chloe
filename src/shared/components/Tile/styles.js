/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_INFOS_COLOR, DEFAULT_TEXT_COLOR } from '@theme/colors'
import { SFUIDISPLAY_HEAVY, SFUIDISPLAY_LIGHT, SFUIDISPLAY_REGULAR } from '@theme/fonts'
import { rem } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    width: rem(17.8125),
  },
  imageContainer: {
    width: rem(17.8125),
    height: rem(11.5625),
    borderRadius: rem(0.375),
    marginBottom: rem(0.625),
  },
  image: {
    width: rem(17.8125),
    height: rem(11.5625),
    borderRadius: rem(0.375),
  },
  overlay: {
    width: rem(17.8125),
    height: rem(11.5625),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  infosContainer: {
    width: rem(17.8125),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    ...SFUIDISPLAY_REGULAR,
    fontSize: rem(0.75),
    color: DEFAULT_INFOS_COLOR,
  },
  textBold: {
    ...SFUIDISPLAY_HEAVY,
  },
  title: {
    ...SFUIDISPLAY_HEAVY,
    color: DEFAULT_TEXT_COLOR,
    fontSize: rem(1.375),
    letterSpacing: -0.5,
    marginVertical: rem(0.3125),
  },
  description: {
    ...SFUIDISPLAY_LIGHT,
    color: DEFAULT_INFOS_COLOR,
    fontSize: rem(0.875),
    lineHeight: rem(1.3125),
    textAlign: 'justify',
  },
})

export default styles
