/* @flow */

import React from 'react'
import { Image, Text, View } from 'react-native'
import { getPeriodColor } from '@helpers/periods'
import styles from './styles'

type Props = {
  image: string,
  title: string,
  text: string,
  period: string,
  pageStatus: Array<number>,
}

const Page = (props: Props): React$Element<any> => {
  const { image, title, text, period, pageStatus } = props
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{text}</Text>
        <View style={styles.footer}>
          <Text style={styles.text}>
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

export default Page
