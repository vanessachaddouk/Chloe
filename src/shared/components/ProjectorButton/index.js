/* @flow */

import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import styles from './styles'

type Props = {
  color: string,
  onPress: Function,
  title: string,
}

const ProjectorButton = (props: Props): React$Element<any> => {
  const { color, onPress, title } = props
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color }]}><Text style={styles.text}>{title}</Text></View>
    </TouchableWithoutFeedback>
  )
}

export default ProjectorButton
