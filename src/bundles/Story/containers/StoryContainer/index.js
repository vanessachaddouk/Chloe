/* @flow */

import React, { Component } from 'react'
import { Image, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import BackButton from '@components/BackButton'
import Media from '@components/Media'
import styles from './styles'
import connect from './connect'

type Props = {}

class StoryContainer extends Component {
  props: Props

  render() {
    return (
      <Image
        resizeMode="cover"
        source={require('../../../../shared/theme/assets/pattern.png')}
        style={styles.container}
      >
        <BackButton
          onPress={() => Actions.storyOverview({ type: 'back' })}
          title="Retour"
        />
        <Media
          title="7 merveilles du Monde"
          description="7 histoires"
          image="https://s27.postimg.org/wm6361ygz/rhodes_colosse_image11.jpg"
          draggable={false}
          onPress={() => console.warn('Touch!')}
        />
        <Media
          title="7 merveilles du Monde"
          description="7 histoires"
          image="https://s29.postimg.org/iubugy9bb/zeus.jpg"
          draggable={false}
          onPress={() => console.warn('Touch!')}
        />
        <Media
          title="7 merveilles du Monde"
          description="7 histoires"
          tileText="Trumpipsum"
          draggable={false}
          onPress={() => console.warn('Touch!')}
        />
        <BackButton
          onPress={Actions.themes}
          title="Home"
        />
      </Image>
    )
  }
}

export default connect(StoryContainer)
