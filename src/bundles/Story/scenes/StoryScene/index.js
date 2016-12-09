/* @flow */

import React from 'react'
import { Button, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

type Props = {}

const StoryScene = (props: Props): React$Element<any> => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => Actions.storyOverview({ type: 'back' })}
        title="Back"
      />
      <Text style={styles.text}>STORY SCENE</Text>
      <Button
        onPress={Actions.themes}
        title="Home"
      />
    </View>
  )
}

export default StoryScene
