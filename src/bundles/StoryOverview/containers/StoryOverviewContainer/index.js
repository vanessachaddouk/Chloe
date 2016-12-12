/* @flow */

import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import BackButton from '@components/BackButton'
import Media from '@components/Media'
import Title from '@components/Title'
import styles from './styles'
import connect from './connect'

type Props = {}

class StoryOverviewContainer extends Component {
  props: Props

  render() {
    return (
      <View style={styles.container}>
        <BackButton
          onPress={() => Actions.themes({ type: 'back' })}
          title="Retour"
        />
        <Title size="medium" style={styles.title}>Le colosse de Rhodes</Title>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollview}
        >
          {Array.from({ length: 25 }, (a, index) => index).map((item) => (
            <Media
              key={item}
              bookmarked={item === 0}
              image="https://s24.postimg.org/wtqa13nr9/colossus_of_rhodes.jpg"
              tileNumber={item + 1}
              draggable={false}
              period="antiquity"
              onPress={Actions.story}
              style={styles.mediaTile}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

export default connect(StoryOverviewContainer)
