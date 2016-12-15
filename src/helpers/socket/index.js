/* @flow */
import io from 'socket.io-client'
import type { Media, SocketType } from './types'
import { sendGif, sendMultipleImages, sendSingleImage, sendWord } from './actions'

export const socket = io('http://188.166.32.147:3200', {
  transports: ['websocket'],
})

export const socketEmit = (type: SocketType, media: Media) => {
  switch (type) {
    case 'connection':
      socket.emit('anyone_connected')
      break
    case 'remove':
      socket.emit('dispatch', { type: 'REMOVE_CONTENT' })
      break
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

export const socketState = (state: string): Object => {
  switch (state) {
    case 'SERVER_CONNECTED':
      return { isServerConnected: true }
    case 'SERVER_DISCONNECTED':
      return { isServerConnected: false }
    case 'LAMP_CONNECTED':
      return { isLampConnected: true }
    case 'LAMP_DISCONNECTED':
      return { isLampConnected: false }
    case 'SERVER_ALREADY_CONNECTED':
      return { isServerConnected: true }
    default:
  }
}
