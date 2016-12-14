/* @flow */
import io from 'socket.io-client'
import type { Media, SocketType } from './types'
import { sendGif, sendMultipleImages, sendSingleImage, sendWord } from './actions'

export const socket = io('http://188.166.32.147:3200', {
  transports: ['websocket'],
})

export const socketEmit = (type: SocketType, media: Media) => {
  switch (type) {
    case 'image':
      socket.emit('dispatch', sendSingleImage(media))
      break
    case 'images':
      socket.emit('dispatch', sendMultipleImages(media))
      break
    case 'GIF':
      socket.emit('dispatch', sendGif(media))
      break
    case 'word':
      socket.emit('dispatch', sendWord(media))
      break
    default:
  }
}
