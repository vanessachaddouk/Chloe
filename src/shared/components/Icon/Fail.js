/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const Fail = (props: Props) => {
  const { color, size } = props
  return (
    <Svg width={size} height={size} viewBox="0 0 78 78">
      <Path
        d="M39 0C17.473 0 0 17.473 0 39s17.473 39 39 39 39-17.473 39-39S60.527 0 39 0zm0 2c20.446 0 37 16.554 37 37S59.446 76 39 76 2 59.446 2 39 18.554 2 39 2zM22 21c-.256 0-.523.086-.72.28-.39.392-.39 1.048 0 1.44L37.563 39l-16.28 16.28c-.392.392-.392 1.048 0 1.44.39.39 1.046.39 1.437 0L39 40.437l16.28 16.28c.392.392 1.048.392 1.44 0 .39-.39.39-1.046 0-1.437L40.437 39l16.28-16.28c.392-.392.392-1.048 0-1.44-.39-.39-1.046-.39-1.437 0L39 37.564 22.72 21.28c-.197-.194-.464-.28-.72-.28z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default Fail
