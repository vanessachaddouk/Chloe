/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import Svg, { Circle, G, Path } from 'react-native-svg'

type Props = { size: number }

const Dead = (props: Props) => {
  const { size } = props
  return (
    <Svg width={size - 4} height={size - 4} viewBox="0 0 90 90">
      <G fill="none" fillRule="evenodd">
        <Circle fill="#FED972" cx="45" cy="45" r="45" />
        <Path
          d="M90 45c0 24.853-20.147 45-45 45-5.553 0-10.867-1.012-15.777-2.85 1.47-1.86 2.565-3.996 3.18-6.305C36.35 82.235 40.586 83 45 83c20.952 0 38-17.047 38-38S65.95 7 45 7C24.046 7 7 24.047 7 45c0 2.036.166 4.035.476 5.986C5.8 52.95 3.86 55.542 2.118 58.663.746 54.353 0 49.763 0 45 0 20.146 20.147 0 45 0s45 20.147 45 45"
          fill="#FED972"
        />
        <Path
          d="M45.626 56.962c6.222.07 11.874 2.606 15.508 6.96.687.826 1.677 1.25 2.674 1.25.786 0 1.576-.264 2.227-.807 1.476-1.23 1.674-3.427.443-4.902-4.94-5.92-12.513-9.37-20.776-9.462h-.345c-6.9 0-13.377 2.3-18.357 6.42 1.193 1.9 2.343 4.03 3.324 6.37 3.828-3.67 9.317-5.82 15.047-5.82l.26.01"
          fill="#000"
        />
        <Path
          d="M44.76 56.962c-6.222.07-11.874 2.606-15.508 6.96-.687.826-1.677 1.25-2.674 1.25-.786 0-1.576-.264-2.227-.807-1.47-1.23-1.67-3.427-.44-4.902 4.94-5.92 12.52-9.37 20.78-9.462h.35c6.9 0 13.38 2.3 18.36 6.42-1.19 1.9-2.34 4.03-3.32 6.37-3.83-3.67-9.315-5.82-15.045-5.82l-.255.01M32.024 39.56c3.55 0 6.426-2.877 6.426-6.425 0-3.55-2.88-6.426-6.43-6.426s-6.42 2.87-6.42 6.42 2.88 6.42 6.43 6.42m25.96 0c3.55 0 6.43-2.88 6.43-6.43s-2.88-6.43-6.425-6.43c-3.55 0-6.426 2.875-6.426 6.424 0 3.55 2.88 6.423 6.43 6.423"
          fill="#000"
        />
        <Path
          d="M63.03 16.046c0 4.003 3.498 7.248 7.5 7.248 4.004 0 7.5-3.245 7.5-7.248 0-8.99-7.5-15.437-7.5-15.437s-7.5 6.3-7.5 15.43z"
          fill="#5890FC"
        />
      </G>
    </Svg>
  )
}

export default Dead