/* @flow */

import React, { Component } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { API } from '@api'
import FunFact from '@components/FunFact'
import Title from '@components/Title'
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
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Title size="big">Chloé</Title>
            <FunFact
              color="#21D390"
              fact="Le catalogue Köchel est un répertoire qui recense les travaux de Mozart : il compte actuellement 893 oeuvres !"
            />
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
                onPress={index === 0
                  ? () => Actions.chapters({ theme: theme.name, histories: theme.histories })
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
