/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import { Svg, Path } from 'react-native-svg'

type Props = {
  color: String,
  size: Number,
}

const Marker = (props: Props) => {
  const { color, size } = props
  const ratio = .676470588
  return (
    <Svg width={ratio * size} height={size} viewBox="0 0 23 34">
      <Path
        d="M22.656 12.563c0 11.059-11.328 21.108-11.328 21.108C11.328 33.674 0 23.623 0 12.564 0 6.303 5.072 0 11.328 0c6.257 0 11.328 6.3 11.328 12.563"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default Marker
