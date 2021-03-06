/* @flow */

import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import { AdvertScene } from '@Advert/scenes'
import { ThemesScene } from '@Themes/scenes'
import { ChaptersScene } from '@Chapters/scenes'
import { StoryOverviewScene } from '@StoryOverview/scenes'
import { StoryScene } from '@Story/scenes'

export default Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="themes" component={ThemesScene} title="Themes" />
    <Scene key="advert" component={AdvertScene} title="Advert" />
    <Scene key="chapters" component={ChaptersScene} title="Chapters" />
    <Scene key="storyOverview" component={StoryOverviewScene} title="Story Overview" />
    <Scene key="story" component={StoryScene} title="Story" />
  </Scene>
)
