/* @flow */

import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const Locker = (props: Props) => {
  const { color, size } = props
  const ratio = 70 / 91
  return (
    <Svg width={ratio * size} height={size} viewBox="15 4 70 91">
      <G fill={color} fillRule="evenodd">
        <Path d="M75.98 41.62H73.5v-12.3C73.5 15.9 62.58 4.98 49.17 5c-13.4 0-24.32 10.92-24.3 24.33v12.3H24c-4.6.02-8.35 3.76-8.34 8.37v36.65c0 4.6 3.75 8.35 8.36 8.35L76 94.97c4.6 0 8.35-3.74 8.34-8.35V49.96c0-4.6-3.75-8.34-8.36-8.34zm-22.3 30.63l1.26 8.3c0 1.04-1.56 3.36-3.48 3.36h-2.92c-1.92 0-3.47-2.3-3.47-3.33l1.25-8.3c-3.37-2.06-4.75-6.8-1.66-10.7 1.22-1.53 3.13-2.35 5.1-2.35h.02c2.77 0 5.4 1.5 6.6 4 1.63 3.5.2 7.27-2.7 9.06zm-19.84-30.6l-.02-12.32c0-8.47 6.88-15.36 15.35-15.37 8.47 0 15.36 6.9 15.36 15.35l.02 12.35-30.7.02z" />
      </G>
    </Svg>
  )
}

export default Locker
