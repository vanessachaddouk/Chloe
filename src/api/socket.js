/* @flow */
import io from 'socket.io-client'

const socket = io('http://188.166.32.147:3200', {
  transports: ['websocket'],
})

export const socketStatus = () => {
  socket.on('connect', () => {
    console.warn('Connected to server 🖥')
  })

  socket.on('disconnect', () => {
    console.warn('Server disconnected 🙊')
  })
}

export const socketEmit = (action) => {
  socket.emit('dispatch', action)
}
