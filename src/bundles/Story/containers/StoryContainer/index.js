/* @flow */

import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { socketEmit } from '@helpers/socket'
import Swiper from 'react-native-swiper'
import BackButton from '@components/BackButton'
import Media from '@components/Media'
import styles from './styles'
import connect from './connect'

type Props = {}

class StoryContainer extends Component {
  props: Props

  render() {
    const data = {
      type: 'images',
      content: [
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
        <Swiper
          loop={false}
          style={styles.swiper}
          showButtons={true}
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </Image>
    )
  }
}

export default connect(StoryContainer)
