/* @flow */

import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Title from '@components/Title'
import Tile from '@components/Tile'
import styles from './styles'
import connect from './connect'

type Props = {}
type State = {}

class ThemesContainer extends Component {
  props: Props
  state: State
  render() {
    return (
      <ScrollView
        bounces={false}
        style={styles.container}
      >
        <Title size="big">Chloé</Title>
        <Tile
          image="https://i.ytimg.com/vi/QrOQiknOE9w/maxresdefault.jpg"
          period="middleAge"
          stories={3}
          title="Les grottes de Lascaux"
          description="Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! I’m the best thing!"
        />
      </ScrollView>
    )
  }
}

export default connect(ThemesContainer)
