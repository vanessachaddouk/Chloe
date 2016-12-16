/* @flow */

import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getPeriodColor } from '@helpers/periods'
import { socket, socketEmit } from '@helpers/socket'
import { observable } from 'mobx'
import { observer } from 'mobx-react/native'
import observableProjectionStore from '@store/mobx/projection'
import Swiper from 'react-native-swiper'
import Alert from '@components/Alert'
import Button from '@components/Button'
import Page from '@components/Page'
import ProjectorButton from '@components/ProjectorButton'
import styles from './styles'
import connect from './connect'

type Props = {
  current: Object,
  pages: Array<Object>,
  period: string,
}

type AlertType = string | null
type PageMode = 'light' | 'dark'

@observer
class StoryContainer extends Component {
  props: Props

  @observable alert: AlertType = null
  @observable chloeMode: boolean = false
  @observable isLampConnected: boolean = false
  @observable isDeconnectButtonDisplayed: boolean = false
  @observable isServerConnected: boolean = false
  @observable deconnectLamp: boolean = false
  @observable pageMode: PageMode = 'light'

  componentWillMount() {
    socket.on('connect', () => this.onSetSocketState('SERVER_CONNECTED'))
    socket.on('disconnect', () => this.onSetSocketState('SERVER_DISCONNECTED'))
    socket.on('lamp_disconnected', () => this.onSetSocketState('LAMP_DISCONNECTED'))
    if (socket.connected) this.onSetSocketState('SERVER_ALREADY_CONNECTED')
    socket.on('lamp_connected', () => this.onSetSocketState('LAMP_CONNECTED'))
    socket.on('lamp_already_connected', () => this.onSetSocketState('LAMP_ALREADY_CONNECTED'))
  }

  componentDidMount() {
    if (this.props.current.pageId === this.props.pages.length) {
      this.props.bookmarkStore.removeBookmark()
    } else {
      this.props.bookmarkStore.setBookmark(this.props.current)
    }
  }

  onChangePageMode() {
    this.pageMode = this.pageMode === 'light' ? 'dark' : 'light'
  }

  onDeactivatedChloeMode = () => {
    socketEmit('remove')
    this.chloeMode = false
    this.isDeconnectButtonDisplayed = false
    this.deconnectLamp = true
    this.alert = null
  }

  onDismissAlert() { this.alert = null }

  onResponderRelease = (e, state) => {
    if (this.props.pages[state.index].id < this.props.pages.length) {
      this.props.bookmarkStore.setBookmark({
        title: this.props.pages[state.index].title,
        pageId: this.props.pages[state.index].id,
      })
    } else {
      this.props.bookmarkStore.removeBookmark()
    }
    socketEmit('remove')
    observableProjectionStore.removeProjected()
    // console.warn('onResponderRelease')
  }

  onSetSocketState = (newSocketState: string) => {
    switch (newSocketState) {
      case 'SERVER_CONNECTED':
      case 'SERVER_ALREADY_CONNECTED':
        socketEmit('connection')
        break
      case 'LAMP_ALREADY_CONNECTED':
      case 'LAMP_CONNECTED':
        this.onActivateChloeMode()
        break
      case 'LAMP_DISCONNECTED':
      case 'SERVER_DISCONNECTED':
        if (this.chloeMode) {
          this.onDeactivatedChloeMode()
          this.alert = newSocketState === 'LAMP_DISCONNECTED' ? 'lamp' : 'server'
        }
        break
      default:
    }
  }

  shouldActivateChloeMode() {
    if (this.isLampConnected && this.isServerConnected && !this.deconnectLamp) {
      this.chloeMode = true
      this.isDeconnectButtonDisplayed = true
    }
  }

  onActivateChloeMode() {
    this.chloeMode = true
    this.isDeconnectButtonDisplayed = true
    this.deconnectLamp = false
  }

  onGoHome = async () => {
    await socketEmit('remove')
    await Actions.themes()
  }

  render() {
    const { current, pages, period } = this.props
    return (
      <Image
        resizeMode="cover"
        source={require('../../../../shared/theme/assets/pattern.png')}
        style={styles.container}
      >
        <View style={styles.button}>
          <Button
            onPress={() => this.onGoHome()}
            title="Accueil"
            style={{ color: (this.pageMode === 'dark' || this.chloeMode) ? '#FEFEFE' : '#303030' }}
          />
          {!this.chloeMode &&
            <Button
              onPress={() => this.onChangePageMode()}
              title={this.pageMode === 'light' ? 'Mode nuit' : 'Mode jour'}
              style={this.pageMode === 'dark' ? { color: getPeriodColor(period) } : null}
            />
          }
          {this.isDeconnectButtonDisplayed &&
            <ProjectorButton
              onPress={() => this.onDeactivatedChloeMode()}
              title="Déconnecter du projecteur"
              color={getPeriodColor(period)}
            />
          }
        </View>
        <Swiper
          index={current.pageId - 1}
          loop={false}
          showsButtons={true}
          showsPagination={false}
          onResponderRelease={this.onResponderRelease}
          prevButton={<Button title="prev" color={getPeriodColor(period)} style={[styles.prevButton, this.chloeMode ? styles.chloeModePosition : null]} />}
          nextButton={<Button title="next" color={getPeriodColor(period)} style={[styles.nextButton, this.chloeMode ? styles.chloeModePosition : null]} />}
        >
          {pages.map((page, index) => (
            <View key={index}>
              <Page
                alert={this.alert}
                title={page.title}
                text={page.text}
                image={page.image}
                period={period}
                content={page.content}
                chloeMode={this.chloeMode}
                pageStatus={[page.id, pages.length]}
                pageMode={this.pageMode}
              />
            </View>
          ))}
        </Swiper>
        {(this.alert !== null) &&
          <Alert
            type={this.alert}
            onPress={() => this.onDismissAlert()}
            color={getPeriodColor(period)}
          />
        }
      </Image>
    )
  }
}

export default connect(StoryContainer)
