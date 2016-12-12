/* @flow */

import React from 'react'
import ChaptersContainer from '@Chapters/containers/ChaptersContainer'

type Props = {
  histories: Array<Object>,
  theme: string,
}

const ChaptersScene = (props: Props): React$Element<any> => (
  <ChaptersContainer
    title={props.theme}
    histories={props.histories}
  />
)

export default ChaptersScene
