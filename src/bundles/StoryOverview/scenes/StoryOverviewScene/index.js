/* @flow */

import React from 'react'
import StoryOverviewContainer from '@StoryOverview/containers/StoryOverviewContainer'

type Props = {
  image: string,
  title: string,
  period: string,
  pages: Array<Object>,
}

const StoryOverviewScene = (props: Props): React$Element<any> => (
  <StoryOverviewContainer
    title={props.title}
    image={props.image}
    period={props.period}
    pages={props.pages}
  />
)

export default StoryOverviewScene
