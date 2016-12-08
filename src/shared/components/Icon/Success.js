/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const Success = (props: Props) => {
  const { color, size } = props
  return (
    <Svg width={size} height={size} viewBox="0 0 86 86">
      <Path
        d="M43 0C19.264 0 0 19.264 0 43s19.264 43 43 43 43-19.264 43-43S66.736 0 43 0zm0 2c22.656 0 41 18.344 41 41S65.656 84 43 84 2 65.656 2 43 20.344 2 43 2zm21.906 22.97c-.26.033-.495.168-.656.374L35.937 58.53l-14.25-13.28c-.406-.376-1.04-.353-1.417.05-.378.405-.36 1.038.043 1.42l15 14c.2.182.467.275.738.257.272-.017.525-.144.7-.352l29-34c.27-.308.326-.75.14-1.114-.186-.365-.576-.58-.984-.54z"
        fill={color}
        fill-rule="evenodd"
      />
    </Svg>
  )
}

export default Success
