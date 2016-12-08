/* @flow */

import React from 'react'
import { Svg, Path } from 'react-native-svg'

type Props = {
  color: String,
  size: Number,
}

const Close = (props: Props) => {
  const { color, size } = props
  const ratio = 13 / 12
  return (
    <Svg width={ratio * size} height={size} viewBox="0 0 13 12">
      <Path
        d="M.5.5l11.18 11.18M11.5.5l-11 11"
        fill="none"
        stroke={color}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default Close
