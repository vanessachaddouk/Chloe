/* @flow */

import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { rem } from '@helpers/responsive'
import BackButton from '@components/BackButton'
import Tile from '@components/Tile'
import Title from '@components/Title'
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
        <BackButton
          onPress={() => Actions.themes({ type: 'back' })}
          title="Retour"
        />
        <Title size="medium" style={styles.title}>Les 7 merveilles du monde</Title>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollview}
        >
          {Array.from({ length: 7 }, (a, index) => index).map((item) => (
            <Tile
              key={item}
              image="https://s24.postimg.org/wtqa13nr9/colossus_of_rhodes.jpg"
              period="antiquity"
              pages={12}
              duration={25}
              title="Le colosse de Rhodes"
              description="Look at that text! Would anyone use that? Can you imagine that?!"
              onPress={Actions.storyOverview}
              style={[
                styles.tile,
                {
                  marginLeft: item === 0 ? rem(2.1875) : 0,
                  marginRight: item === 6 ? rem(2.1875) : rem(3.75),
                }]
              }
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

export default connect(ChaptersContainer)
