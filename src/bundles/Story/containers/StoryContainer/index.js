/* @flow */

import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import connect from './connect'

type Props = {}
type State = {}

class StoryContainer extends Component {
  props: Props
  state: State
  render() {
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
}

export default connect(StoryContainer)
