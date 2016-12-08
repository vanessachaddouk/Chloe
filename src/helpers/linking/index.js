/* @flow */

import { Linking, Share } from 'react-native'

type SharedContent = {
  title: String,
  url: String,
  content: String,
}

type PhoneNumber = number


export const share = (sharedContent: SharedContent): void => {
  const { title, content, url } = sharedContent
  Share.share({
    title,
    message: content,
    url,
  }, {
    dialogTitle: 'Partager',
    tintColor: 'orange',
  })
}

export const call = (phoneNumber: PhoneNumber): void => {
  Linking.openURL(`tel:${phoneNumber}`)
}
