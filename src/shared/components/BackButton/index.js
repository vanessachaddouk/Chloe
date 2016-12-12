/* @flow */

import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import styles from './styles'

type Props = {
  onPress: Function,
  style?: StyleSheet | number,
  title: string,
}

const BackButton = (props: Props): React$Element<any> => {
  const { onPress, style, title } = props
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View><Text style={[styles.text, style]}>{title}</Text></View>
    </TouchableWithoutFeedback>
  )
}

export default BackButton
