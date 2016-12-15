/* @flow */

import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getPeriodColor } from '@helpers/periods'
import { socket, socketState } from '@helpers/socket'
import Swiper from 'react-native-swiper'
import Alert from '@components/Alert'
import Button from '@components/Button'
import Page from '@components/Page'
import ProjectorButton from '@components/ProjectorButton'
import styles from './styles'
import connect from './connect'

type Props = {
  bookmark: Function,
  current: Object,
  pages: Array<Object>,
  period: string,
}

type State = {
  alert: string | null,
  chloeMode: boolean,
  isLampConnected: boolean,
  isDeconnectButtonDisplayed: boolean,
  deconnectLamp: boolean,
  pageMode: 'light' | 'dark',
}

class StoryContainer extends Component {
  props: Props
  state: State = {
    alert: null,
    chloeMode: false,
    isLampConnected: false,
    isDeconnectButtonDisplayed: false,
    isServerConnected: false,
    deconnectLamp: false,
    pageMode: 'light',
  }

  componentDidMount = async () => {
    this.props.bookmark(this.props.current)
    // console.disableYellowBox = true
    socket.on('connect', () => this.onSetSocketState('SERVER_CONNECTED'))
    socket.on('disconnect', () => this.onSetSocketState('SERVER_DISCONNECTED'))
    socket.on('lamp_connected', () => this.onSetSocketState('LAMP_CONNECTED'))
    socket.on('lamp_disconnected', () => this.onSetSocketState('LAMP_DISCONNECTED'))
    if (socket.connected) this.onSetSocketState('SERVER_ALREADY_CONNECTED')
    this.shouldActivateChloeMode()
  }

  onChangePageMode() {
    this.state.pageMode === 'light'
    ? this.setState({ pageMode: 'dark' })
    : this.setState({ pageMode: 'light' })
  }

  onDeactivatedChloeMode() {
    this.setState({ deconnectLamp: true })
    console.warn('DECONNECTED TO LAMP')
  }

  onDismissAlert() {
    this.setState({ alert: null })
  }

  onMomentumScrollEnd = (e, state) => {
    const current = {
      title: this.props.pages[state.index].title,
      pageId: this.props.pages[state.index].id,
    }
    if (current.pageId < this.props.pages.length) {
      this.props.bookmark(current)
    } else {
      this.props.bookmark({
        title: '',
        pageId: 0,
      })
    }
  }

  onSetSocketState = async (newSocketState: string) => {
    await this.setState(socketState(newSocketState))
    await this.shouldActivateChloeMode()
    if (newSocketState === 'LAMP_DISCONNECTED') {
      this.setState({ alert: 'lamp' })
    }
    if (newSocketState === 'SERVER_DISCONNECTED') {
      this.setState({ alert: 'server' })
    }
  }

  shouldActivateChloeMode() {
    if (this.state.isLampConnected && this.state.isServerConnected && !this.state.deconnectLamp) {
      this.setState({
        chloeMode: true,
        isDeconnectButtonDisplayed: true,
        deconnectLamp: false,
      })
    }
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
            onPress={() => Actions.storyOverview({ type: 'back' })}
            title="Retour"
            style={(this.state.pageMode === 'dark' || this.state.chloeMode) ? { color: '#FEFEFE' } : null}
          />
          {!this.state.isDeconnectButtonDisplayed &&
            <Button
              onPress={() => this.onChangePageMode()}
              title={this.state.pageMode === 'light' ? 'Mode nuit' : 'Mode jour'}
              style={this.state.pageMode === 'dark' ? { color: getPeriodColor(period) } : null}
            />
          }
          {this.state.isDeconnectButtonDisplayed &&
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
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          prevButton={<Button title="prev" color={getPeriodColor(period)} style={[styles.prevButton, this.state.chloeMode ? styles.chloeModePosition : null]} />}
          nextButton={<Button title="next" color={getPeriodColor(period)} style={[styles.nextButton, this.state.chloeMode ? styles.chloeModePosition : null]} />}
        >
          {pages.map((page, index) => (
            <View key={index}>
              <Page
                alert={this.state.alert}
                title={page.title}
                text={page.text}
                image={page.image}
                period={period}
                content={page.content}
                chloeMode={this.state.chloeMode}
                pageStatus={[page.id, pages.length]}
                pageMode={this.state.pageMode}
              />
            </View>
          ))}
        </Swiper>
        {this.state.alert !== null &&
          <Alert
            type={this.state.alert}
            onPress={() => this.onDismissAlert()}
            color={getPeriodColor(period)}
          />
        }
      </Image>
    )
  }
}

export default connect(StoryContainer)
