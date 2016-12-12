/* @flow */

import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Media from '@components/Media'
import styles from './styles'
import connect from './connect'

type Props = {}

class StoryContainer extends Component {
  props: Props

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
        <Media
          title="7 merveilles du Monde"
          description="7 histoires"
          image="https://www.herodote.net/Images/germanos.jpg"
          draggable={true}
          onPress={() => console.warn('Touch!')}
        />
      </View>
    )
  }
}

export default connect(StoryContainer)
