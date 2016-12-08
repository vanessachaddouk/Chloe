/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import { Svg, Path, G } from 'react-native-svg'
import { NEUTRAL_COLOR_00 } from '@theme/colors'

type Props = {
  color: String,
  size: Number,
}

const Search = (props: Props) => {
  const { color, size } = props
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18">
      <G fill="none" strokeLinecap="round" strokeLinejoin="round">
        <Path
          d="M15.2 7.98c0 3.852-3.124 6.977-6.978 6.977-3.854 0-6.98-3.125-6.98-6.977C1.243 4.124 4.37 1 8.223 1 12.076 1 15.2 4.124 15.2 7.98z"
          stroke={color}
          strokeWidth={1.5}
          fill={color}
        />
        <Path
          d="M9.243 4.556c1.685.345 3.006 1.692 3.31 3.393"
          stroke={NEUTRAL_COLOR_00}
          strokeWidth={1.5}
        />
        <Path
          d="M13.687 13.444L17 16.76"
          stroke={color}
          strokeWidth={2}
        />
      </G>
    </Svg>
  )
}

export default Search
