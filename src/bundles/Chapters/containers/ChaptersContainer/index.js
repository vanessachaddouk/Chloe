/* @flow */

import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Tile from '@components/Tile'
import styles from './styles'
import connect from './connect'

type Props = {}
type State = {}

class ChaptersContainer extends Component {
  props: Props
  state: State
  render() {
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
        <Tile
          title="7 merveilles du Monde"
          description="7 histoires"
          image="https://www.herodote.net/Images/germanos.jpg"
        />
      </View>
    )
  }
}

export default connect(ChaptersContainer)
