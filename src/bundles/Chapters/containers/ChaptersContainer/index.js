/* @flow */

import React, { Component } from 'react'
import { Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { rem } from '@helpers/responsive'
import BackButton from '@components/BackButton'
import Tile from '@components/Tile'
import Title from '@components/Title'
import styles from './styles'
import connect from './connect'

type Props = {
  histories: Array<Object>,
  title: string,
}

class ChaptersContainer extends Component {
  props: Props

  render() {
    const { histories, title } = this.props
    return (
      <Image
        resizeMode="cover"
        source={require('../../../../shared/theme/assets/pattern.png')}
        style={styles.container}
      >
        <BackButton
          onPress={() => Actions.themes({ type: 'back' })}
          title="Retour"
        />
        <Title size="medium" style={styles.title}>{title}</Title>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollview}
        >
          {histories.map((history, index) => (
            <Tile
              key={index}
              image={history.image}
              period={history.period}
              pages={history.nbPages}
              duration={history.duration}
              title={history.name}
              description={history.description}
              onPress={history.id === 0
                ? () => Actions.storyOverview({ title: history.name, image: history.image })
                : null
              }
              locked={history.locked}
              style={[
                styles.tile,
                {
                  marginLeft: history.id === 0 ? rem(2.1875) : 0,
                  marginRight: history.id === 6 ? rem(2.1875) : rem(3.75),
                }]
              }
            />
          ))}
        </ScrollView>
      </Image>
    )
  }
}

export default connect(ChaptersContainer)
