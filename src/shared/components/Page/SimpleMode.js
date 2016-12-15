/* @flow */

import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import { getPeriodColor } from '@helpers/periods'
import styles from './styles'

type Props = {
  image: string,
  title: string,
  text: string,
  period: string,
  pageStatus: Array<number>,
  pageMode: 'light' | 'dark',
}

const SimpleMode = (props: Props): React$Element<any> => {
  const { image, title, text, period, pageMode, pageStatus } = props
  const darkMode = pageMode === 'dark'
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />
      <View style={[styles.wrapper, darkMode ? styles.wrapperDark : null]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.content, darkMode ? styles.contentDark : null]}>{text}</Text>
        <View style={styles.footer}>
          <Text style={[styles.text, darkMode ? styles.contentDark : null]}>
            <Text style={{ color: getPeriodColor(period) }}>{pageStatus[0]}</Text>
            <Text> / {pageStatus[1]}</Text>
          </Text>
        </View>
      </View>
      <Image
        resizeMode="cover"
        source={{ uri: image }}
        style={styles.image}
      />
    </View>
  )
}

export default SimpleMode
