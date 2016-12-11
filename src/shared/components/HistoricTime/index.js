/* @flow */

import React from 'react'
import { Text, View } from 'react-native'
import { getPeriodColor, getPeriodName } from '@helpers/periods'
import Icon from '@components/Icon'
import styles from './styles'

type Props = {
  value: 'preHistory' | 'antiquity' | 'middleAge' | 'modernTimes' | 'contemporaryTimes' | undefined,
  pages?: number,
}

const HistoricTime = (props: Props): React$Element<any> => {
  const { value, pages } = props
  return (
    <View style={styles.container}>
      <Icon
        name={pages ? 'bookmarkIcon' : value}
        defaultColor={getPeriodColor(value)}
        size={16}
      />
      {pages &&
        <Text style={styles.text}><Text style={styles.textBold}>{pages}</Text> pages</Text>
      }
      {!pages &&
        <Text style={styles.text}>{getPeriodName(value)}</Text>
      }
    </View>
  )
}

export default HistoricTime
