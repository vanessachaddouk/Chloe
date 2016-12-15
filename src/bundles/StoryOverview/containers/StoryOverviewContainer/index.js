/* @flow */

import React, { Component } from 'react'
import { Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { socket, socketEmit } from '@helpers/socket'
import Button from '@components/Button'
import Media from '@components/Media'
import Title from '@components/Title'
import styles from './styles'
import connect from './connect'

type Props = {
  hideAdvert: Fonction,
  lampStatus: string,
  title: string,
  period: string,
  pages: Array<Object>,
  savedBookmark: Object,
}

type State = {
  lampStatus: 'CONNECTED' | 'DISCONNECTED',
}

class StoryOverviewContainer extends Component {
  props: Props

  state: State = {
    lampStatus: 'DISCONNECTED',
  }

  componentWillMount = async () => {
    await socketEmit('connection')
    await this.socketStatus()
  }

  componentWillReceiveProps() {
    this.socketStatus()
  }

  socketStatus = async () => {
    socket.on('lamp_connected', () => {
      this.props.hideAdvert('CONNECTED')
    })
    await socket.on('lamp_already_connected', async () => {
      await this.props.hideAdvert('CONNECTED')
      await this.setState({ lampStatus: 'CONNECTED' })
    })
    socket.on('lamp_disconnected', () => {
      this.props.hideAdvert('DISCONNECTED')
    })
  }

  onRedirectToHistory() {
    Actions.story({
      current: {
        title: page.title,
        pageId: page.id,
      },
      pages,
      period,
    })
  }

  render() {
    const { title, period, pages, savedBookmark } = this.props
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
              bookmarked={(savedBookmark.title === page.title && savedBookmark.pageId === page.id)}
              image={page.image}
              tileNumber={page.id}
              tileTitle={page.title}
              draggable={false}
              period={period}
              onPress={(this.props.lampStatus === 'CONNECTED' || this.state.lampStatus === 'CONNECTED') ?
                () => Actions.story({
                    current: {
                      title: page.title,
                      pageId: page.id,
                    },
                    pages,
                    period,
                  })
                : () => Actions.advert({
                  current: {
                    title: page.title,
                    pageId: page.id,
                  },
                  pages,
                  period,
                })
            }
              style={styles.mediaTile}
            />
          ))}
        </ScrollView>
      </Image>
    )
  }
}

export default connect(StoryOverviewContainer)
