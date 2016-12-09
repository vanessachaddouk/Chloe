/* @flow */

import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import connect from './connect'

type Props = {}
type State = {}

class ThemesContainer extends Component {
  props: Props
  state: State
  render() {
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
}

export default connect(ThemesContainer)
