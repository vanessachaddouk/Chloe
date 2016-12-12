/* @flow */

import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const BookMarkRibbon = (props: Props) => {
  const { color, size } = props
  const ratio = 20 / 33
  return (
    <Svg width={ratio * size} height={size} viewBox="162 0 20 33">
      <Path
        d="M162 0h20v30.97c0 1.1-.72 1.47-1.6.82l-8.4-6.17-8.4 6.15c-.88.64-1.6.27-1.6-.83V0z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default BookMarkRibbon
