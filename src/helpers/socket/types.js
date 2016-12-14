/* @flow */

export type Action = {
  type: string,
  payload: string | Array<Object>,
}

export type SocketType = 'GIF' | 'image' | 'images' | 'word'

export type Media = string | Array<Object>

export const LAMP_CONNECTED = 'LAMP_CONNECTED'
export const LAMP_DISCONNECTED = 'LAMP_DISCONNECTED'
export const SERVER_ALREADY_CONNECTED = 'SERVER_ALREADY_CONNECTED'
export const SERVER_CONNECTED = 'SERVER_CONNECTED'
export const SERVER_DISCONNECTED = 'SERVER_DISCONNECTED'

export const SEND_GIF = 'SEND_GIF'
export const SEND_SINGLE_IMAGE = 'SEND_SINGLE_IMAGE'
export const SEND_MULTIPLE_IMAGES = 'SEND_MULTIPLE_IMAGES'
export const SEND_WORD = 'SEND_WORD'
