/* @flow */

import React, { Component } from 'react'
import { Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { socket, socketEmit } from '@helpers/socket'
import { observable } from 'mobx'
import { observer } from 'mobx-react/native'
import Button from '@components/Button'
import Media from '@components/Media'
import Title from '@components/Title'
import styles from './styles'
import connect from './connect'

type Props = {
  title: string,
  period: string,
  pages: Array<Object>,
  savedBookmark: Object,
}

type State = 'CONNECTED' | 'DISCONNECTED'

@observer
class StoryOverviewContainer extends Component {
  props: Props

  @observable lampStatus: State = 'DISCONNECTED'

  componentWillMount() {
    socketEmit('connection')
    this.socketStatus()
  }

  socketStatus = () => {
    socket.on('lamp_connected', () => {
      this.lampStatus = 'CONNECTED'
    })
    socket.on('lamp_already_connected', () => {
      this.lampStatus = 'CONNECTED'
    })
    socket.on('lamp_disconnected', () => {
      this.lampStatus = 'DISCONNECTED'
    })
  }

  render() {
    const { title, period, pages } = this.props
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
              bookmarked={(
                this.props.savedBookmark.bookmarkStore.title === page.title &&
                this.props.savedBookmark.bookmarkStore.pageId === page.id
              )}
              image={page.image}
              tileNumber={page.id}
              tileTitle={page.title}
              draggable={false}
              period={period}
              onPress={(this.lampStatus === 'CONNECTED') ?
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
