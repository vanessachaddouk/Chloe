/* @flow */

import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

type Props = {
  bookmarked?: boolean,
  description: string,
  image: string,
  locked?: boolean,
  tileNumber?: number,
  title: string,
}

const Tile = (props: Props): React$Element<any> => {
  const { bookmarked, description, image, locked, tileNumber, title } = props
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        resizeMethod="scale"
        source={{ uri: image }}
        style={styles.image}
      >
        <View style={styles.numberWrapper}>
          <View style={styles.overlay}>
          </View>
        </View>
      </Image>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

export default Tile
