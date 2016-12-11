/* @flow */

import React from 'react'
import { Text } from 'react-native'
import { rem } from '@helpers/responsive'
import styles from './styles'

type Props = {
  children: string,
  size: 'small' | 'medium' | 'big',
  style: StyleSheet | number,
}

const Title = (props: Props): React$Element<any> => {
  const { children, size, style } = props
  let fontSize
  let letterSpacing = -2.5

  switch (size) {
    case 'small':
      fontSize = rem(2.5)
      letterSpacing = 0
      break
    case 'medium':
      fontSize = rem(4.375)
      break
    case 'big':
      fontSize = rem(6.5625)
      break
    default:
      fontSize = rem(6.5625)
  }

  return (
    <Text
      selectable={true}
      style={[styles.text, { fontSize, letterSpacing }, style]}
    >
      {children}
    </Text>
  )
}

export default Title
