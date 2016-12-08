/* @flow */

import React from 'react'
import { NavigationExperimental } from 'react-native'
import { BARIOL_REGULAR } from '@theme/fonts'

const {
  Header: NavigationHeader,
} = NavigationExperimental

export const TRANSPARENT_NAV_BAR = {
  backgroundColor: 'transparent',
  borderBottomWidth: 0,
}

export const DEFAULT_NAV_BAR_STYLE = {
  backgroundColor: 'orange',
  borderBottomWidth: 0,
}

export const DEFAULT_NAV_BAR_TITLE_STYLE = {
  top: .75,
  ...BARIOL_REGULAR,
  color: 'white',
  fontSize: 15,
  letterSpacing: .75,
}

export const renderTitle = (titleProps: { title: String, titleStyle: any }): React$Element<any> => {
  const { title, titleStyle } = titleProps
  return (
    <NavigationHeader.Title textStyle={titleStyle}>
      {title.toUpperCase()}
    </NavigationHeader.Title>
  )
}
