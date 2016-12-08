/* @flow */
/* eslint max-len: 0 */

import React from 'react'
import { Svg, Path } from 'react-native-svg'

type Props = {
  color: String,
  size: Number,
}

const Historic = (props: Props) => {
  const { color, size } = props
  const ratio = 10 / 15
  return (
    <Svg width={size * ratio} height={size} viewBox="0 0 10 15">
      <Path
        d="M2.096 11.32c0-3.11 3.037-3.957 3.037-3.957s3.037.703 3.037 3.958v2.28H2.096v-2.28zM8.17 3.38c0 3.11-3.037 3.96-3.037 3.96s-3.037-.705-3.037-3.96V1.1H8.17v2.28zM1.182 1h7.92M1.09 13.7h7.92"
        strokeLinecap="round"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
        fill="none"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default Historic
