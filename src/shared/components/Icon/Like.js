/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import { Svg, Path } from 'react-native-svg'

type Props = {
  color: String,
  size: Number,
}

const Like = (props: Props) => {
  const { color, size } = props
  return (
    <Svg width={size} height={size} viewBox="0 0 19 19">
      <Path
        d="M18 5.484C18 3 16.045 1 13.635 1 11.71 1 10.082 2.294 9.5 4.076 8.92 2.294 7.29 1.008 5.367 1.008 2.956 1.008 1 3.025 1 5.51c0 .97.212 1.895.716 2.604L9.5 17l7.157-8.242c.153-.153.295-.345.426-.52.573-.524.917-1.713.917-2.754z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Like
