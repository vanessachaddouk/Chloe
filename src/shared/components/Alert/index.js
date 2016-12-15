/* @flow */

import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import Icon from '@components/Icon'
import styles from './styles'

type Props = {
  color: string,
  onPress: Function,
  type: 'lamp' | 'server' | null,
}

const Alert = (props: Props): React$Element<any> => {
  const { color, onPress, type } = props
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../theme/assets/pattern.png')}
        style={styles.wrapper}
      >
        <View style={[styles.imageContainer, { justifyContent: type === 'lamp' ? 'flex-start' : 'center' }]}>
          <Icon
            name={type}
            defaultColor={color}
            size={type === 'lamp' ? 130 : 65}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>OUPS !</Text>
          {type === 'lamp' &&
            <Text style={styles.text}>
              Il semblerait que la lampe soit déconnectée. Eteignez et rallumez la à nouveau pour la reconnecter.
            </Text>
          }
          {type === 'server' &&
            <Text style={styles.text}>
              Il semblerait que les serveurs soient coupés. Essayez de relancer l’application.
            </Text>
          }
        </View>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback onPress={onPress}>
            <View><Text style={[styles.continue, { color }]}>CONTINUER</Text></View>
          </TouchableWithoutFeedback>
        </View>
      </Image>
    </View>
  )
}

export default Alert
