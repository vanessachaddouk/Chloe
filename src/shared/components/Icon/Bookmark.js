/* @flow */

import React from 'react'
import { Svg, Path } from 'react-native-svg'

type Props = {
  color: String,
  size: Number,
}

const Arrow = (props: Props) => {
  const { color, size } = props
  const ratio = 11 / 15
  return (
    <Svg width={size * ratio} height={size} viewBox="0 0 11 15">
      <Path
        d="M9.87 1.19l-.066 12.532L5.5 10.05 1.196 13.72V1.192z"
        strokeWidth={1.5}
        stroke={color}
        fill={color}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Arrow
