/* @flow */

import React from 'react'
import { Button, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

type Props = {}

const StoryOverviewScene = (props: Props): React$Element<any> => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => Actions.chapters({ type: 'back' })}
        title="Back"
      />
      <Text style={styles.text}>STORY OVERVIEW SCENE</Text>
      <Button
        onPress={Actions.story}
        title="Next"
      />
    </View>
  )
}

export default StoryOverviewScene
