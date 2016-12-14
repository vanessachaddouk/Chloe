/* @flow */

import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import Icon from '@components/Icon'
import styles from './styles'

type Props = {
  color?: string,
  onPress?: Function,
  style?: StyleSheet | number,
  title: string,
}

const Button = (props: Props): React$Element<any> => {
  const { color, onPress, style, title } = props
  return title === 'Retour'
  ? (
      <TouchableWithoutFeedback onPress={onPress}>
        <View><Text style={[styles.text, style]}>{title}</Text></View>
      </TouchableWithoutFeedback>
    )
  : (
      <View
        style={[
          styles.button,
          style,
          { borderColor: color },
        ]}
      >
        <Icon
          name="navigation"
          defaultColor={color}
          size={18}
          style={title === 'prev' ? { transform: [{ rotate: '180deg' }] } : null}
        />
      </View>
    )
}

export default Button
