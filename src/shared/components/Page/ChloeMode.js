/* @flow */

import React, { Component } from 'react'
import { Image, StatusBar, Text, TouchableWithoutFeedback, View } from 'react-native'
import { getPeriodColor } from '@helpers/periods'
import { socketEmit } from '@helpers/socket'
import { observable } from 'mobx'
import { observer } from 'mobx-react/native'
import observableProjectionStore from '@store/mobx/projection'
import Media from '@components/Media'
import styles from './styles'

type Props = {
  content: Array<Object>,
  title: string,
  text: string,
  period: string,
  pageStatus: Array<number>,
}

@observer
class ChloeMode extends Component {
  props: Props
  @observable currentlyProjected: string = {}

  componentWillReceiveProps() { this.currentlyProjected = {} }

  onSendMedia(currentlyProjected: Object) {
    if (currentlyProjected === this.currentlyProjected) {
      this.onRemoveMedia()
    } else {
      socketEmit(currentlyProjected.type, currentlyProjected.data)
      this.currentlyProjected = currentlyProjected
      observableProjectionStore.setProjected(currentlyProjected)
    }
  }

  onRemoveMedia() {
    this.currentlyProjected = {}
    socketEmit('remove')
  }

  render() {
    const { content, title, text, period, pageStatus } = this.props
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          barStyle="light-content"
        />
        <View style={[styles.wrapper, styles.wrapperDark]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.content, styles.contentDark]}>{text}</Text>
          <View style={styles.footer}>
            <Text style={[styles.text, styles.contentDark]}>
              <Text style={{ color: getPeriodColor(period) }}>{pageStatus[0]}</Text>
              <Text> / {pageStatus[1]}</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.wrapper, styles.projectorContentWrapper]}>
          <Image
            source={require('./assets/chloeZone.png')}
            style={styles.chloeZoneImage}
          >
            {observableProjectionStore.projectionStore.type !== 'word' &&
              <TouchableWithoutFeedback onPress={() => this.onRemoveMedia()}>
                <Image
                  resizeMode="cover"
                  source={{ uri: observableProjectionStore.projectionStore.content }}
                  style={styles.chloeZoneImage}
                />
              </TouchableWithoutFeedback>
            }
            {this.currentlyProjected.type === 'word' &&
              <Media
                tileText={observableProjectionStore.projectionStore.content}
                period={period}
                draggable={false}
                onPress={() => this.onRemoveMedia()}
                style={styles.chloeZoneText}
              />
            }
          </Image>
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>CONTENU INTERACTIF</Text>
            <View style={styles.contentWrapper}>
              {content.map((item, index) => (
                <View key={index}>
                  {item.paragraph === 1 &&
                    <View style={{ marginRight: 25 }}>
                      {item.type === 'word' &&
                        <Media
                          active={observableProjectionStore.projectionStore.content === item.content}
                          period={period}
                          tileText={item.content}
                          draggable={false}
                          onPress={() => this.onSendMedia(item)}
                        />
                      }
                      {item.type !== 'word' &&
                      <Media
                        active={observableProjectionStore.projectionStore.content === item.content}
                        period={period}
                        image={item.content}
                        draggable={false}
                        onPress={() => this.onSendMedia(item)}
                      />
                      }
                    </View>
                  }
                </View>
              ))}
            </View>
            <View style={styles.contentWrapper}>
              {content.map((item, index) => (
                <View key={index}>
                  {item.paragraph === 2 &&
                    <View style={{ marginRight: 25 }}>
                      {item.type === 'word' &&
                        <Media
                          active={observableProjectionStore.projectionStore.content === item.content}
                          period={period}
                          tileText={item.content}
                          draggable={false}
                          onPress={() => this.onSendMedia(item)}
                        />
                      }
                      {item.type !== 'word' &&
                      <Media
                        active={observableProjectionStore.projectionStore.content === item.content}
                        period={period}
                        image={item.content}
                        draggable={false}
                        onPress={() => this.onSendMedia(item)}
                      />
                      }
                    </View>
                  }
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default ChloeMode
