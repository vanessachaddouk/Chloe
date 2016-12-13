/* @flow */

import React, { Component } from 'react'
import { Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { socketEmit, socketStatus } from '@api'
import io from 'socket.io-client'
import BackButton from '@components/BackButton'
import Media from '@components/Media'
import styles from './styles'
import connect from './connect'

type Props = {}

class StoryContainer extends Component {
  props: Props

  componentWillMount() {
    socketStatus()
  }

  componentWillReceiveProps() {
    socketStatus()
  }

  render() {
    const SEND_IMAGE = 'SEND_IMAGE'
    const image1 = {
      type: SEND_IMAGE,
      payload: [
        'https://s27.postimg.org/wm6361ygz/rhodes_colosse_image11.jpg',
        'https://s29.postimg.org/iubugy9bb/zeus.jpg',
        'https://s27.postimg.org/bskr443v7/slide1_1_1024x475.jpg',
      ],
    }

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
          onPress={() => socketEmit(image1)}
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
