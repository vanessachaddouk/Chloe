/* @flow */

import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
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
      <View style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollview}
        >
          <Title size="big">Chloé</Title>
          <View style={styles.wrapper}>
            {Array.from({ length: 6 }, (a, index) => index).map((item) => (
              <View key={item} style={styles.tile}>
                <Tile
                  image="https://i.ytimg.com/vi/QrOQiknOE9w/maxresdefault.jpg"
                  period="preHistory"
                  stories={3}
                  title="Les grottes de Lascaux"
                  description="Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! I’m the best thing!"
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default connect(ThemesContainer)
