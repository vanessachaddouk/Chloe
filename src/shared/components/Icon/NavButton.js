/* @flow */

import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const NavButton = (props: Props) => {
  const { color, size } = props
  const ratio = 12 / 19
  return (
    <Svg width={ratio * size} height={size} viewBox="13 8 12 19">
      <Path
        d="M13.057 24.837l6.96-6.977-6.96-6.977L15.2 8.74l9.12 9.12-9.12 9.12"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default NavButton
