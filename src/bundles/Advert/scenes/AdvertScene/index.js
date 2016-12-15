/* @flow */

import React from 'react'
import AdvertContainer from '@Advert/containers/AdvertContainer'

type Props = {
  current: Object,
  pages: Array<Object>,
  onPress: Function,
  period: string,
}

const AdvertScene = (props: Props) => (<AdvertContainer {...props} />)

export default AdvertScene
