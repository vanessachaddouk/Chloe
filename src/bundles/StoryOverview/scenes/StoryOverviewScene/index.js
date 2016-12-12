/* @flow */

import React from 'react'
import StoryOverviewContainer from '@StoryOverview/containers/StoryOverviewContainer'

type Props = {
  image: string,
  title: string,
}

const StoryOverviewScene = (props: Props): React$Element<any> => (
  <StoryOverviewContainer
    title={props.title}
    image={props.image}
  />
)

export default StoryOverviewScene
