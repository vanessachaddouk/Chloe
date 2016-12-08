/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import { Svg, Path } from 'react-native-svg'

type Props = {
  color: String,
  size: Number,
}

const Star = (props: Props) => {
  const { color, size } = props
  const ratio = 19 / 18
  return (
    <Svg width={size * ratio} height={size} viewBox="0 0 19 18">
      <Path
        d="M9.412 13.393L4.212 17l1.825-6.06L1 7.11l6.326-.136L9.412 1l2.086 5.974 6.325.137-5.036 3.83L14.61 17z"
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Star
