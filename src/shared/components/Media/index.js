/* @flow */

import React, { Component } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { animations } from '@helpers/animations'
import MediaContent from './MediaContent'
import styles from './styles'

type Props = {
  image: string,
  bookmarked?: boolean,
  draggable?: boolean,
  onPress?: Function,
  tileNumber?: number,
  tileText?: string,
  style?: StyleSheet | number,
  period?: string,
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

  resetPosition = () => {
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
    const { bookmarked, draggable, image, onPress, tileNumber, tileText, style, period } = this.props
    return draggable
    ? (
       <Animatable.View
         onResponderMove={this.setPosition}
         onResponderRelease={this.resetPosition}
         onStartShouldSetResponder={this.onStartShouldSetResponder}
         ref={(c) => { this.view = c }}
         style={[styles.container, { transform: [{ translateY: this.state.y }] }, style]}
       >
         <MediaContent
           bookmarked={bookmarked}
           image={image}
           tileNumber={tileNumber}
           tileText={tileText}
           period={period}
         />
       </Animatable.View>
      )
    : (
       <TouchableWithoutFeedback onPress={onPress}>
         <View style={style}>
           <MediaContent
             bookmarked={bookmarked}
             image={image}
             tileNumber={tileNumber}
             tileText={tileText}
             period={period}
           />
         </View>
       </TouchableWithoutFeedback>
    )
  }
}

export default Media
