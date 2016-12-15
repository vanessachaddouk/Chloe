/* @flow */

import React from 'react'
import { Image, Text, View } from 'react-native'
import { getPeriodColor } from '@helpers/periods'
import Icon from '@components/Icon'
import styles from './styles'

type Props = {
  bookmarked?: boolean,
  image?: string,
  style: StyleSheet | number,
  tileNumber?: number,
  tileText?: string,
  period?: string,
}

const MediaContent = (props: Props): React$Element<any> => {
  const { active, bookmarked, image, style, tileNumber, tileText, tileTitle, period } = props
  return (
    <View>
      <Image
        resizeMode="cover"
        resizeMethod="scale"
        source={{ uri: image }}
        style={[styles.image, active ? { borderWidth: 4, borderColor: getPeriodColor(period) } : null]}
      >
        {(tileNumber || tileText) &&
          <View style={styles.overlay}>
            {tileNumber && <Text style={styles.number}>{tileNumber}</Text>}
            {tileText &&
              <View style={[styles.titleContainer, style, active ? { borderRadius: 0 } : null]}>
                <Text style={styles.title}>{tileText}</Text>
              </View>
            }
            {bookmarked &&
              <Icon
                name="bookmarkRibbon"
                defaultColor={getPeriodColor(period)}
                size={25}
                style={styles.icon}
              />
            }
          </View>
        }
      </Image>
      <Text style={styles.tileTitle}>{tileTitle}</Text>
    </View>
  )
}

export default MediaContent
