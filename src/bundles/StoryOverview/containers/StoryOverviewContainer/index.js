/* @flow */

import React, { Component } from 'react'
import { Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Button from '@components/Button'
import Media from '@components/Media'
import Title from '@components/Title'
import styles from './styles'
import connect from './connect'

type Props = {
  image: string,
  title: string,
  period: string,
  pages: Array<Object>,
}

class StoryOverviewContainer extends Component {
  props: Props

  render() {
    const { image, title, period, pages } = this.props
    return (
      <Image
        resizeMode="cover"
        source={require('../../../../shared/theme/assets/pattern.png')}
        style={styles.container}
      >
        <Button
          onPress={() => Actions.themes({ type: 'back' })}
          title="Retour"
        />
        <Title size="medium" style={styles.title}>{title}</Title>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollview}
        >
          {pages.map((page, index) => (
            <Media
              key={index}
              bookmarked={page.id === 1}
              image={page.image}
              tileNumber={page.id}
              tileTitle={page.title}
              draggable={false}
              period={period}
              onPress={() => Actions.story({ pages, period })}
              style={styles.mediaTile}
            />
          ))}
        </ScrollView>
      </Image>
    )
  }
}

export default connect(StoryOverviewContainer)
