/* @flow */

import { Platform } from 'react-native'
import { vw, vh } from '@helpers/responsive'

export const DEFAULT_RESPONSIVE_FONT_SIZE = 15 + vw(.125) + vh(.05)

export const SFUIDISPLAY_BLACK = Platform.OS === 'ios'
  ? {
    fontFamily: 'SF UI Display',
    fontWeight: '900',
  }
  : {
    fontFamily: 'SF-UI-Display-Black',
  }

export const SFUIDISPLAY_HEAVY = Platform.OS === 'ios'
  ? {
    fontFamily: 'SF UI Display',
    fontWeight: '800',
  }
  : {
    fontFamily: 'SF-UI-Display-Heavy',
  }

export const SFUIDISPLAY_BOLD = Platform.OS === 'ios'
  ? {
    fontFamily: 'SF UI Display',
    fontWeight: '700',
  }
  : {
    fontFamily: 'SF-UI-Display-Bold',
  }

export const SFUIDISPLAY_REGULAR = Platform.OS === 'ios'
  ? {
    fontFamily: 'SF UI Display',
    fontWeight: '400',
  }
  : {
    fontFamily: 'SF-UI-Display-Regular',
  }

export const SFUIDISPLAY_LIGHT = Platform.OS === 'ios'
  ? {
    fontFamily: 'SF UI Display',
    fontWeight: '300',
  }
  : {
    fontFamily: 'SF-UI-Display-Light',
  }
