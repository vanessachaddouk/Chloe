/* @flow */

import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const BookmarkIcon = (props: Props) => {
  const { color, size } = props
  const ratio = 80 / 73
  return (
    <Svg width={ratio * size} height={size} viewBox="10 13 80 73">
      <G fill="none" fillRule="evenodd">
        <Path d="M88.26 17.4l-45.54-3.98c-.3-.03-.63.07-.87.27s-.4.5-.42.8l-.25 2.9H25.03c-.66 0-1.2.5-1.2 1.2v5.7l-12.33 1c-.32 0-.6.16-.8.4-.22.23-.3.54-.3.86l5.04 57.5c.06.62.58 1.1 1.2 1.1h.1l45.53-4c.32 0 .6-.18.8-.4.22-.26.3-.57.3-.9l-.23-2.46h7.6c.66 0 1.2-.52 1.2-1.2l11.08 1h.1c.3 0 .56-.1.77-.28.2-.2.4-.5.4-.82l5-57.5c.02-.63-.4-1.2-1.1-1.27z" />
        <Path d="M38.88 71l4.82-55.1 43.16 3.77-4.8 55.1" fill={color} />
        <Path d="M36.4 71.98c-.06.66.43 1.23 1.1 1.3l20.8 1.82H26.2V19.78h14.75l-4.57 52.2z" fill={color} />
        <Path d="M60.87 78.97L17.7 82.75l-4.8-55.1 10.94-.97v49.6c0 .67.53 1.2 1.2 1.2h35.7l.13 1.5z" fill={color} />
      </G>
    </Svg>
  )
}

export default BookmarkIcon
