/* @flow */

import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import { getPeriodColor } from '@helpers/periods'
import HistoricTime from '@components/HistoricTime'
import Icon from '@components/Icon'
import styles from './styles'

type Props = {
  image?: string,
  period?: 'preHistory' | 'antiquity' | 'middleAge' | 'modernTimes' | 'contemporaryTimes',
  stories?: number,
  pages?: number,
  duration?: number,
  title: string,
  description?: string,
  price?: number,
  onPress?: Function,
  locked?: boolean,
  availability?: string,
  style?: StyleSheet | Array<Object> | number,
}

const Tile = (props: Props): React$Element<any> => {
  const { description, image, stories, pages, duration, price, title, period, onPress, locked, availability, style } = props
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[styles.container, style]}
      >
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: image }}
          >
            {locked &&
              <View style={styles.overlay}>
                {(price) &&
                  <Text style={styles.price}>{price} €</Text>
                }
                {pages &&
                  <Icon
                    name="locker"
                    defaultColor={pages ? getPeriodColor(period) : '#FEFEFE'}
                    size={30}
                    style={styles.icon}
                  />
                }
                <View style={styles.availabilityContainer}>
                  <Text style={styles.textLight}>Disponible le </Text>
                  <Text style={[styles.textLight, styles.textBold]}>{availability}</Text>
                </View>
              </View>
            }
          </Image>
        </View>
        {(period || stories) &&
          <View style={styles.infosContainer}>
            <HistoricTime value={period} pages={pages} />
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.text, styles.textBold]}>{stories}{duration} </Text>
              <Text style={styles.text}>{duration ? 'minutes' : 'histoires'}</Text>
            </View>
          </View>
        }
        <Text style={[styles.title, { textAlign: description ? 'left' : 'center' }]}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Tile
