/* @flow */

import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

type Props = {
  color: string,
  fact: string,
}

const FunFact = (props: Props): React$Element<any> => {
  const { color, fact } = props
  return (
    <View style={styles.container}>
      <View style={[styles.tile, { backgroundColor: color }]}>
        <Text style={styles.questionMark}>?</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>LE SAVIEZ-VOUS ?</Text>
        <Text style={styles.text}>{fact}</Text>
      </View>
    </View>
  )
}

export default FunFact
