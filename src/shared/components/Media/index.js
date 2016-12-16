/* @flow */

import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import MediaContent from './MediaContent'
import styles from './styles'

type Props = {
  active: boolean,
  image: string,
  bookmarked?: boolean,
  onPress?: Function,
  tileNumber?: number,
  tileText?: string,
  tileTitle?: string,
  style?: StyleSheet | number,
  period?: string,
}

const Media = (props: Props): React$Element<any> => {
  const { active, bookmarked, image, onPress, tileNumber, tileText, tileTitle, style, period } = props
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <MediaContent
          active={active}
          bookmarked={bookmarked}
          image={image}
          tileNumber={tileNumber}
          tileText={tileText}
          tileTitle={tileTitle}
          period={period}
          style={style}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Media
