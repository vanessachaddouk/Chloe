/* @flow */

import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getPeriodColor } from '@helpers/periods'
import Swiper from 'react-native-swiper'
import Button from '@components/Button'
import Page from '@components/Page'
import styles from './styles'
import connect from './connect'

type Props = {
  bookmark: Function,
  current: Object,
  pages: Array<Object>,
  period: string,
}

class StoryContainer extends Component {
  props: Props

  componentDidMount() {
    this.props.bookmark(this.props.current)
  }

  onMomentumScrollEnd = (e, state) => {
    const current = {
      title: this.props.pages[state.index].title,
      pageId: this.props.pages[state.index].id,
    }
    this.props.bookmark(current)
  }

  render() {
    const { current, pages, period } = this.props
    console.log(this.props)
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
          />
        </View>
        <Swiper
          index={current.pageId - 1}
          loop={false}
          style={styles.swiper}
          showsButtons={true}
          showsPagination={false}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          prevButton={<Button title="prev" color={getPeriodColor(period)} style={styles.prevButton} />}
          nextButton={<Button title="next" color={getPeriodColor(period)} style={styles.nextButton} />}
        >
          {pages.map((page, index) => (
            <View key={index}>
              <Page
                title={page.title}
                text={page.text}
                image={page.image}
                period={period}
                pageStatus={[page.id, pages.length]}
              />
            </View>
          ))}
        </Swiper>
      </Image>
    )
  }
}

export default connect(StoryContainer)
