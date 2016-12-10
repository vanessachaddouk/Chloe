/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const PreHistory = (props: Props) => {
  const { color, size } = props
  const ratio = 13 / 17
  return (
    <Svg width={ratio * size} height={size} viewBox="0 0 13 17">
      <Path
        d="M12.26 2.4l-.1-.13c-.04-.07-.05-.16-.07-.27-.1-.17-.1-.38-.3-.6-.1-.13-.3-.2-.5-.2h-.1c-.3.05-.5.17-.7.4l-.6.7c-.4-.45-.8-.98-1.1-1.37-.2-.2-.4-.38-.4-.5C8.3.2 8.1.2 7.8.2h-.1C7.1.14 5.58.4 5.5.42c-.24.1-.43.35-.47.65v.02s.04 1.6.18 2.5c.1.2.1.5.3.7l.4.3 1 .8c-.1 0-.2 0-.3.1l-.2.3-.1.22c-.1 0-.1.1-.2.2l-.2.3c0 .1-.1.22 0 .33V7c-1.1 1.2-3.1 3.57-4.1 4.93 0-.03 0-.03-.1-.03s-.2.07-.3.18l-.1.3c0 .1-.1.2-.1.28-.1 0-.2.07-.2.17l-.2.28c-.1.1-.1.3-.1.4-.2.3-.5.7-.5 1.3 0 .3.4.7.5.8s.37.3.76.3c.15 0 .25 0 .38-.1l.6-.5c.1.1.1.1.2.1s.2-.03.3-.1L3 15c.05-.1.1-.2.1-.35.06-.03.14-.06.2-.13l.2-.25c.1-.13.14-.28.1-.44l1.02-1.1c.92-1 2.07-2.2 3.16-3.62.04.1.1.1.16.1.1 0 .2 0 .26-.1l.2-.2c.06-.1.1-.2.1-.3.1 0 .13 0 .2-.1l.2-.2.04-.05c.02 0 .03-.05.03-.1L9 7.6l.15-.16c.75.44 1.9.76 2.05.78h.04c.27 0 .38-.14.47-.3.1-.05.1-.1.2-.1.2 0 .3-.1.4-.2.1-.2.1-.5.1-.9s-.4-1.45-.8-2.04c.8-.93.9-1 .9-1.05.4-.52.1-.96-.1-1.22z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default PreHistory
