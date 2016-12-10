/* @flow */

import React from 'react'
import { Text } from 'react-native'
import { rem } from '@helpers/responsive'
import styles from './styles'

type Props = {
  children: string,
  size: 'small' | 'medium' | 'big',
}

const Title = (props: Props): React$Element<any> => {
  const { children, size } = props
  let fontSize

  switch (size) {
    case 'small':
      fontSize = rem(2.5)
      break
    case 'medium':
      fontSize = rem(4.6875)
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
      style={[styles.text, { fontSize }]}
    >
      {children}
    </Text>
  )
}

export default Title
