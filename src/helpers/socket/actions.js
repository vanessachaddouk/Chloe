/* @flow */

import type { Action, Media } from './types'
import {
  SEND_GIF,
  SEND_SINGLE_IMAGE,
  SEND_MULTIPLE_IMAGES,
  SEND_WORD,
} from './types'

export const sendGif = (url: Media): Action => ({
  type: SEND_GIF,
  payload: url,
})

export const sendSingleImage = (url: Media): Action => ({
  type: SEND_SINGLE_IMAGE,
  payload: url,
})

export const sendMultipleImages = (urls: Media): Action => ({
  type: SEND_MULTIPLE_IMAGES,
  payload: urls,
})

export const sendWord = (word: Media): Action => ({
  type: SEND_WORD,
  payload: word,
})
