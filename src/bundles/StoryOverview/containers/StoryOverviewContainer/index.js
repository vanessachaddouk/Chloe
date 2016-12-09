/* @flow */

import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import connect from './connect'

type Props = {}
type State = {}

class StoryOverviewContainer extends Component {
  props: Props
  state: State
  render() {
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
}

export default connect(StoryOverviewContainer)
