/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const Antiquity = (props: Props) => {
  const { color, size } = props
  const ratio = 17 / 16
  return (
    <Svg width={ratio * size} height={size} viewBox="0 0 17 16">
      <Path
        d="M8.32.02L0 12l8.32 3.98 8.32-4"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default Antiquity
