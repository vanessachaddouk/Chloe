/* @flow */

import React, { Component } from 'react'
import { Image, ScrollView, StatusBar, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { API } from '@api'
import Icon from '@components/Icon'
import Tile from '@components/Tile'
import styles from './styles'
import connect from './connect'

type Props = {}

class ThemesContainer extends Component {
  props: Props

  render() {
    return (
      <Image
        resizeMode="cover"
        source={require('../../../../shared/theme/assets/pattern.png')}
        style={styles.container}
      >
        <StatusBar
          animated={true}
          barStyle="dark-content"
        />
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Icon name="logo" size={110} />
          </View>
          <View style={styles.wrapper}>
            {API.themes.map((theme, index) => (
              <Tile
                key={index}
                image={theme.image}
                period={theme.period}
                stories={theme.nbStories}
                title={theme.name}
                description={theme.description}
                price={theme.price}
                availability={theme.availability}
                onPress={theme.id <= 1
                  ? () => Actions.chapters({
                    theme: theme.name,
                    histories: theme.histories,
                  })
                  : null
                }
                locked={theme.locked}
                style={styles.tile}
              />
            ))}
          </View>
        </ScrollView>
      </Image>
    )
  }
}

export default connect(ThemesContainer)
