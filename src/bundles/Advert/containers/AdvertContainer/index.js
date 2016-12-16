/* @flow */

import React from 'react'
import { Image, StatusBar, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getPeriodColor } from '@helpers/periods'
import Icon from '@components/Icon'
import styles from './styles'

type Props = {
  current: Object,
  pages: Array<Object>,
  period: string,
}

const AdvertContainer = (props: Props) => {
  const { current, pages, period } = props
  return (
    <Image
      resizeMode="cover"
      source={require('./assets/Interstitiels.png')}
      style={styles.container}
    >
      <StatusBar
        animated={true}
        barStyle="light-content"
      />
      <View style={styles.wrapper}>
        <Icon
          name="lampAd"
          defaultColor={getPeriodColor(period)}
          size={200}
        />
        <Text style={styles.text}>Pré-commandez votre lampe Chloé à partir du 22 Décembre pour vivre une expérience encore plus immersive !</Text>
        <TouchableWithoutFeedback
          onPress={() => Actions.story({
            current,
            pages,
            period,
          })}
        >
          <View style={[styles.buttonContainer, { backgroundColor: getPeriodColor(period) }]}>
            <Text style={styles.button}>Continuer</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Image>
  )
}

export default AdvertContainer
