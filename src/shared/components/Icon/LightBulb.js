/* @flow */

import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const LightBulb = (props: Props) => {
  const { color, size } = props
  const ratio = 10 / 16
  return (
    <Svg width={ratio * size} height={size} viewBox="0 200 10 16">
      <Path
        d="M3 213.65c0 .4.3.7.67.7h2.66c.38 0 .68-.3.68-.7v-1.95H3v1.95zm.3-1.45h3.4c.06 0 .1.05.1.1 0 .07-.04.12-.1.12H3.3c-.06 0-.1-.05-.1-.1 0-.07.04-.12.1-.12zm0 .7h3.4c.06 0 .1.06.1.12 0 .07-.04.12-.1.12H3.3c-.06 0-.1-.05-.1-.12 0-.06.04-.1.1-.1zm0 .72h3.4c.06 0 .1.06.1.1 0 .08-.04.13-.1.13H3.3c-.06 0-.1-.05-.1-.12 0-.05.04-.1.1-.1zM5.34 200h-.68c-2.35.18-4.27 2.1-4.48 4.47-.14 1.53.42 3 1.53 4.06.8.7 1.25 1.7 1.3 2.73h4.06c.06-1.03.5-2.02 1.27-2.73 1.1-1.05 1.67-2.53 1.53-4.06-.2-2.38-2.13-4.3-4.48-4.46zm-1.2 14.8c.13.25.46.44.86.44.4 0 .73-.2.86-.45l.1-.2H4.03l.1.2z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default LightBulb
