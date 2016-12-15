/* @flow */

import { StyleSheet } from 'react-native'
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_INFOS_COLOR,
  DEFAULT_TEXT_COLOR,
  DEFAULT_TEXT_COLOR_LIGHT,
  DEFAULT_TITLE_COLOR,
  NEUTRAL_COLOR_20,
  NEUTRAL_COLOR_80,
  NEUTRAL_COLOR_70,
} from '@theme/colors'
import { SFUIDISPLAY_BLACK, SFUIDISPLAY_BOLD, SFUIDISPLAY_REGULAR } from '@theme/fonts'
import { rem, vh, vw } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  wrapper: {
    flex: 0.5,
    height: vh(100),
    paddingTop: rem(6.25),
    paddingLeft: rem(4.375),
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  wrapperDark: {
    paddingTop: rem(10),
    backgroundColor: NEUTRAL_COLOR_80,
  },
  projectorContentWrapper: {
    paddingTop: rem(2.5),
    paddingLeft: 0,
    backgroundColor: NEUTRAL_COLOR_70,
  },
  title: {
    ...SFUIDISPLAY_BLACK,
    fontSize: rem(1.625),
    color: DEFAULT_TITLE_COLOR,
    letterSpacing: -0.6,
    marginBottom: rem(4.0625),
  },
  content: {
    ...SFUIDISPLAY_REGULAR,
    fontSize: rem(1.125),
    color: DEFAULT_TEXT_COLOR,
    letterSpacing: 0.45,
    lineHeight: rem(2.1875),
    paddingRight: rem(3.75),
  },
  contentDark: {
    color: DEFAULT_TEXT_COLOR_LIGHT,
  },
  footer: {
    position: 'absolute',
    bottom: rem(2.5),
    width: vw(53),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...SFUIDISPLAY_BLACK,
    fontSize: rem(1),
    color: DEFAULT_INFOS_COLOR,
  },
  image: {
    flex: 0.5,
    width: vw(50),
    height: vh(100),
  },
  chloeZoneImage: {
    alignSelf: 'center',
    width: rem(18.375),
    height: rem(8.25),
    borderRadius: 6,
    backgroundColor: 'transparent',
  },
  chloeZoneText: {
    width: rem(18.375),
    height: rem(8.25),
    backgroundColor: NEUTRAL_COLOR_20,
  },
  contentContainer: {
    marginTop: rem(2.5),
    paddingLeft: rem(1.25),
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: rem(8.125),
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: rem(6.25),
  },
  contentTitle: {
    ...SFUIDISPLAY_BOLD,
    fontSize: rem(1.25),
    color: 'rgba(255,255,255,0.20)',
    marginBottom: rem(1.25),
  },
})

export default styles
