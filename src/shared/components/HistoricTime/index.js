/* @flow */

import React from 'react'
import { Text, View } from 'react-native'
import { getPeriodColor, getPeriodName } from '@helpers/periods'
import Icon from '@components/Icon'
import styles from './styles'

type Props = {
  value: 'preHistory' | 'antiquity' | 'middleAge' | 'modernTimes' | 'contemporaryTimes' | undefined,
}

const HistoricTime = (props: Props): React$Element<any> => {
  const { value } = props
  return (
    <View style={styles.container}>
      <Icon
        name={value}
        defaultColor={getPeriodColor(value)}
        size={16}
      />
      <Text style={styles.text}>{getPeriodName(value)}</Text>
    </View>
  )
}

export default HistoricTime
