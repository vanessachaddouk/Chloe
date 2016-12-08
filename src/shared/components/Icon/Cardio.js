/* @flow */
/* eslint max-len: ["error", 2000] */

import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const Cardio = (props: Props) => {
  const { color, size } = props
  const ratio = 44 / 39
  return (
    <Svg width={ratio * size} height={size} viewBox="0 1 44 39">
      <G fill="none" fillRule="evenodd">
        <Path
          d="M6.593 22.278c.11-.256.187-.536.338-.765.4-.6.99-.83 1.7-.825 2.15.013 4.29.01 6.44.022.21 0 .36-.054.5-.22 3.21-3.738 6.43-7.47 9.65-11.204l.23-.273c-.12-.008-.2-.02-.28-.02-.69-.003-1.38.002-2.062-.013-.207-.004-.34.063-.47.216-1.424 1.656-2.857 3.303-4.28 4.96-.417.485-.91.748-1.56.612-1.066-.222-1.537-1.53-.827-2.356 1.68-1.957 3.38-3.898 5.076-5.846.335-.383.756-.56 1.26-.56 2.31 0 4.62-.002 6.93-.006.636 0 1.16.235 1.607.69 1.39 1.4 2.786 2.788 4.18 4.18.07.075.15.146.24.23.09-.083.164-.154.24-.228 1.11-1.11 2.254-2.193 3.33-3.34.92-.978 2.426-.538 2.67.64.007.027.03.05.048.073v.524c-.134.48-.464.83-.81 1.17-1.32 1.31-2.63 2.64-3.942 3.96-.162.16-.333.32-.52.46-.742.53-1.54.47-2.186-.17-.834-.83-1.66-1.67-2.49-2.5-.072-.08-.15-.15-.25-.24L26.99 16.5c.08.09.15.16.223.24 1.205 1.21 2.406 2.42 3.624 3.62.6.59.76 1.3.59 2.08-.757 3.433-1.53 6.862-2.3 10.294-.317 1.396-1.67 2.04-2.85 1.36-.69-.395-1.066-1.224-.89-2.02.59-2.667 1.19-5.33 1.795-7.996.05-.213.02-.35-.144-.51-1.4-1.345-2.788-2.7-4.18-4.053l-.208-.183c-.05.075-.087.16-.14.22-1.2 1.34-2.406 2.667-3.59 4.014-.525.59-1.196.84-1.94.85-2.806.03-5.61.04-8.415.04-1.033-.006-1.69-.58-1.93-1.596-.005-.025-.03-.05-.04-.07v-.528z"
          fill={color}
        />
        <Path
          d="M32.67 1c.63.175 1.234.39 1.75.827 1.42 1.204 1.45 3.59.033 4.804-.986.85-2.11 1.11-3.33.65-1.21-.46-1.9-1.38-2.092-2.66-.23-1.61.93-3.17 2.63-3.54.06-.01.12-.04.18-.06h.84z"
          fill={color}
        />
        <Path
          d="M5 8.208h9.25m-13 5H12.5m-9.25 4.25H14.5M2.25 27.333H13.5m-8.25 4.25H16.5"
          stroke={color}
          fill={color}
        />
      </G>
    </Svg>
  )
}

export default Cardio