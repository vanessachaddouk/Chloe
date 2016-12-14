/* @flow */

import React from 'react'
import StoryContainer from '@Story/containers/StoryContainer'

type Props = {
  current: Object,
  pages: Array<Object>,
  period: string,
}

const StoryScene = (props: Props): React$Element<any> => (
  <StoryContainer
    current={props.current}
    pages={props.pages}
    period={props.period}
  />
)

export default StoryScene
