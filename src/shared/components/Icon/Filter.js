/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

type Props = {
  color: String,
  size: Number,
}

const Filter = (props: Props) => {
  const { color, size } = props
  const ratio = 18 / 15
  return (
    <Svg width={size * ratio} height={size} viewBox="0 0 18 15">
      <G fill="none" fillRule="evenodd" stroke={color} strokeLinecap="round">
        <Path d="M.5 2.5h17M.5 7.5h17M.5 12.5h17" />
        <Path
          d="M6.5 4C7.328 4 8 3.328 8 2.5S7.328 1 6.5 1 5 1.672 5 2.5 5.672 4 6.5 4zM4.5 14c.828 0 1.5-.672 1.5-1.5S5.328 11 4.5 11 3 11.672 3 12.5 3.672 14 4.5 14zM12.5 9c.828 0 1.5-.672 1.5-1.5S13.328 6 12.5 6 11 6.672 11 7.5 11.672 9 12.5 9z"
          fill="#FFF"
        />
      </G>
    </Svg>
  )
}

export default Filter
