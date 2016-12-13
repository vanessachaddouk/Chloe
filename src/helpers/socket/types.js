/* @flow */

export type Action = {
  type: string,
  payload: string | Array<string>,
}

export type SocketType = 'image' | 'images' | 'word'

export type Media = string | Array<string>
