/* @flow */

import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Title from '@components/Title'
import Tile from '@components/Tile'
import styles from './styles'
import connect from './connect'

type Props = {}

class ThemesContainer extends Component {
  props: Props

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollview}
        >
          <Title size="big" style={styles.title}>Chloé</Title>
          <View style={styles.wrapper}>
            {Array.from({ length: 7 }, (a, index) => index).map((item) => (
              <Tile
                key={item}
                image="https://s24.postimg.org/3yeq7gw1h/artemis.jpg"
                period="antiquity"
                stories={8}
                title="Les 7 merveilles du monde"
                description="Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! I’m the best thing!"
                onPress={item === 0 ? Actions.chapters : null}
                locked={item > 0}
                style={styles.tile}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default connect(ThemesContainer)
