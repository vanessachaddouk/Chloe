/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const Hit = (props: Props) => {
  const { color, size } = props
  const ratio = 51 / 75
  return (
    <Svg width={ratio * size} height={size} viewBox="0 0 51 75">
      <Path
        d="M42.8 24.9c5.15 7.95 7.75 16.1 7.75 24.05C50.55 66.35 38.15 75 25.7 75 13.15 75 .55 66.25.55 50.1c0-14.8 10.6-22.45 8.85-33.2 3.75 1.75 6.5 5.8 6.95 10.65C21.1 20.65 23.15 10.5 20.7.6c7.4 3.85 18.65 17.2 19.5 32.2 1.95-1.75 2.5-4.7 2.6-7.9z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default Hit
