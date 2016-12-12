/* @flow */

import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

type Props = {
  bookmarked?: boolean,
  image?: string,
  tileNumber?: number,
  tileText?: string,
}

const MediaContent = (props: Props): React$Element<any> => {
  const { bookmarked, image, tileNumber, tileText } = props
  return (
    <Image
      resizeMode="cover"
      resizeMethod="scale"
      source={{ uri: image }}
      style={styles.image}
    >
      {(tileNumber || tileText) &&
        <View style={styles.overlay}>
          {tileNumber && <Text style={styles.number}>{tileNumber}</Text>}
          {tileText &&
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{tileText}</Text>
            </View>
          }
        </View>
      }
    </Image>
  )
}

export default MediaContent
