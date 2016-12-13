/* @flow */

import type { Action, Media } from './types'

export const SEND_SINGLE_IMAGE = 'SEND_SINGLE_IMAGE'
export const SEND_MULTIPLE_IMAGES = 'SEND_MULTIPLE_IMAGES'
export const SEND_WORD = 'SEND_WORD'

export const sendSingleImage = (url: Media): Action => ({
  type: SEND_SINGLE_IMAGE,
  payload: url,
})

export const sendMultipleImages = (urls: Media): Action => ({
  type: SEND_SINGLE_IMAGE,
  payload: urls,
})

export const sendWord = (word: Media): Action => ({
  type: SEND_SINGLE_IMAGE,
  payload: word,
})
