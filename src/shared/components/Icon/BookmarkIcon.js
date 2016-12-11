/* @flow */

import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const BookmarkIcon = (props: Props) => {
  const { color, size } = props
  const ratio = 13 / 17
  return (
    <Svg width={ratio * size} height={size} viewBox="3 1 13 17">
      <Path
        d="M4.6 1.5c-.88 0-1.6.72-1.6 1.6v12.8c0 .88.7 1.6 1.6 1.6h9.6c.88 0 1.6-.72 1.6-1.6V6.3L11 1.5H4.6zm5.6 5.6V2.7l4.4 4.4h-4.4z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default BookmarkIcon
