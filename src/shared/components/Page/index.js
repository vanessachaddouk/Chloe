/* @flow */

import React from 'react'
import SimpleMode from './SimpleMode'
import ChloeMode from './ChloeMode'

type Props = {
  chloeMode: boolean,
  content: Array<Object>,
  image: string,
  title: string,
  text: string,
  period: string,
  pageStatus: Array<number>,
  pageMode: 'light' | 'dark',
}

const Page = (props: Props): React$Element<any> => {
  const { chloeMode, content, image, title, text, period, pageMode, pageStatus } = props
  return !chloeMode
    ? (
        <SimpleMode
          title={title}
          text={text}
          image={image}
          period={period}
          pageStatus={pageStatus}
          pageMode={pageMode}
        />
      )
    : (
      <ChloeMode
        title={title}
        text={text}
        period={period}
        content={content}
        pageStatus={pageStatus}
      />
    )
}

export default Page
