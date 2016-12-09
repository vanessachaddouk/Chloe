/* @flow */

import React from 'react'
import { Button, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

type Props = {}

const ChaptersScene = (props: Props): React$Element<any> => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => Actions.themes({ type: 'back' })}
        title="Back"
      />
      <Text style={styles.text}>CHAPTERS SCENE</Text>
      <Button
        onPress={Actions.storyOverview}
        title="Next"
      />
    </View>
  )
}

export default ChaptersScene
