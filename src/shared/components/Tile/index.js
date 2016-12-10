/* @flow */

import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import HistoricTime from '@components/HistoricTime'
import styles from './styles'

type Props = {
  image?: string,
  period?: 'preHistory' | 'antiquity' | 'middleAge' | 'modernTimes' | 'contemporaryTimes',
  stories?: number,
  title: string,
  description?: string,
}

class Tile extends Component {
  props: Props

  render() {
    const { description, image, stories, title, period } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: image }}
          />
        </View>
        {(period || stories) &&
          <View style={styles.infosContainer}>
            <HistoricTime value={period} />
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.text, styles.textBold]}>{stories} </Text>
              <Text style={styles.text}>histoires</Text>
            </View>
          </View>
        }
        <Text style={[styles.title, { textAlign: description ? 'left' : 'center' }]}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    )
  }
}

export default Tile
