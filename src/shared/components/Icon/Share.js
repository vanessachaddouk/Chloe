/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import { Svg, G, Circle, Path } from 'react-native-svg'

type Props = {
  color: String,
  size: Number,
}

const Share = (props: Props) => {
  const { color, size } = props
  const ratio = .823529412
  return (
    <Svg width={size * ratio} height={size} viewBox="0 0 14 17">
      <G fill="none" stroke={color} strokeWidth={2}>
        <Circle cx={11} cy={3} r={2} />
        <Circle cx={3} cy={9} r={2} />
        <Path d="M9 4L5 7M5 10l4 3" strokeLinecap="square" />
        <Circle cx={11} cy={14} r={2} />
      </G>
    </Svg>
  )
}

export default Share
