/* @flow */

import React from 'react'
import { Svg, Path } from 'react-native-svg'

type Props = {
  color: String,
  size: Number,
}

const Arrow = (props: Props) => {
  const { color, size } = props
  const ratio = 8 / 14
  return (
    <Svg width={ratio * size} height={size} viewBox="0 0 8 14">
      <Path
        d="M0 1l8 6.116-8 6.116"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Arrow
