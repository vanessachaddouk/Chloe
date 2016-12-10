/* @flow */

import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { animations } from '@helpers/animations'
import styles from './styles'

type Props = {
  bookmarked?: boolean,
  description: string,
  image: string,
  locked?: boolean,
  tileNumber?: number,
  title: string,
}

type State = { y: number }

Animatable.initializeRegistryWithDefinitions({ ...animations })

class Media extends Component {
  props: Props
  state: State = { y: 0 }

  setPosition = (e: Event) => {
    // Update our state with the deltaX/deltaY of the movement
    this.setState({ y: this.state.y + (e.nativeEvent.pageY - this.drag.y) })
    // Set our drag to be the new position so our delta can be calculated next time correctly
    this.drag.y = e.nativeEvent.pageY
  }

  resetPosition = (e: Event) => {
    this.dragging = false
    if (this.state.y < -100) {
      // Media goes down
      this.view.mediaDown(350)
    } else if (this.state.y > 70) {
      // Media goes up
      this.view.mediaUp(350)
    } else {
      // Reset on release
      this.setState({ y: 0 })
    }
  }

  onStartShouldSetResponder = (e: Event) => {
    this.dragging = true
    // Setup initial drag coordinates
    this.drag = { y: e.nativeEvent.pageY }
    return true
  }

  render() {
    const { bookmarked, description, image, locked, tileNumber, title } = this.props
    return (
      <Animatable.View
        onResponderMove={this.setPosition}
        onResponderRelease={this.resetPosition}
        onStartShouldSetResponder={this.onStartShouldSetResponder}
        ref={(c) => { this.view = c }}
        style={[styles.container, { transform: [{ translateY: this.state.y }] }]}
      >
        <Image
          resizeMode="cover"
          resizeMethod="scale"
          source={{ uri: image }}
          style={styles.image}
        >
          <View style={styles.numberWrapper}>
            <View style={styles.overlay} />
          </View>
        </Image>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{this.state.y}</Text>
        <Text style={styles.description}>{description}</Text>
      </Animatable.View>
    )
  }
}

export default Media
