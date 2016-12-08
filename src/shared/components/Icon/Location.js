/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import { Svg, Path } from 'react-native-svg'

type Props = {
  color: String,
  size: Number,
}

const Location = (props: Props) => {
  const { color, size } = props
  const ratio = 6 / 8
  return (
    <Svg width={size * ratio} height={size} viewBox="0 0 7 10">
      <Path
        d="M3.58 9S1 6.612 1 3.984C1 2.497 2.156 1 3.58 1c1.425 0 2.58 1.497 2.58 2.984C6.16 6.612 3.58 9 3.58 9zm.07-3.25c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Location
