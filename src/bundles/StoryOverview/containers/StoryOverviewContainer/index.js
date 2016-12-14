/* @flow */

import React, { Component } from 'react'
import { Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import BackButton from '@components/BackButton'
import Media from '@components/Media'
import Title from '@components/Title'
import styles from './styles'
import connect from './connect'

type Props = {
  image: string,
  title: string,
}

class StoryOverviewContainer extends Component {
  props: Props

  render() {
    const { image, title } = this.props
    return (
      <Image
        resizeMode="cover"
        source={require('../../../../shared/theme/assets/pattern.png')}
        style={styles.container}
      >
        <BackButton
          onPress={() => Actions.themes({ type: 'back' })}
          title="Retour"
        />
        <Title size="medium" style={styles.title}>{title}</Title>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollview}
        >
          {Array.from({ length: 25 }, (a, index) => index).map((item) => (
            <Media
              key={item}
              bookmarked={item === 0}
              image={image}
              tileNumber={item + 1}
              tileTitle="Construction du Trump édifice"
              draggable={false}
              period="antiquity"
              onPress={Actions.story}
              style={styles.mediaTile}
            />
          ))}
        </ScrollView>
      </Image>
    )
  }
}

export default connect(StoryOverviewContainer)
