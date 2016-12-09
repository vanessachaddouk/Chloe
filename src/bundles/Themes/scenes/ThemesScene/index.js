/* @flow */

import React from 'react'
import { Button, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

type Props = {}

const ThemesScene = (props: Props): React$Element<any> => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>THEMES SCENE</Text>
      <Button
        onPress={Actions.chapters}
        title="Next"
      />
    </View>
  )
}

export default ThemesScene
