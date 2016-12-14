/* @flow */

import React from 'react'
import StoryContainer from '@Story/containers/StoryContainer'

type Props = {
  pages: Array<Object>,
  period: string,
}

const StoryScene = (props: Props): React$Element<any> => (
  <StoryContainer
    pages={props.pages}
    period={props.period}
  />
)

export default StoryScene
