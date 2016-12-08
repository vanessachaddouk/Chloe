/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import { Svg, Path } from 'react-native-svg'

type Props = {
  color: String,
  size: Number,
}

const Navigation = (props: Props) => {
  const { color, size } = props
  const ratio = 15 / 18
  return (
    <Svg width={size * ratio} height={size} viewBox="0 0 15 18">
      <Path
        d="M7.5 1L1 17l6.5-4.364L14 17z"
        fill={color}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Navigation
