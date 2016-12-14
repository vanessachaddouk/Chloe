/* @flow */

import type { SocketStatus } from './types'

type Action = {
  type: SocketStatus,
}

const LAMP_CONNECTED = 'LAMP_CONNECTED'
const LAMP_DISCONNECTED = 'LAMP_DISCONNECTED'
const SERVER_ALREADY_CONNECTED = 'SERVER_ALREADY_CONNECTED'
const SERVER_CONNECTED = 'SERVER_CONNECTED'
const SERVER_DISCONNECTED = 'SERVER_DISCONNECTED'

export default (state: SocketStatus = '', action: Action): SocketStatus => {
  switch (action.type) {
    case LAMP_CONNECTED:
    case LAMP_DISCONNECTED:
    case SERVER_ALREADY_CONNECTED:
    case SERVER_CONNECTED:
    case SERVER_DISCONNECTED:
      return action.type
    default:
      return state
  }
}

export const reduxSocketStatus = (socketStatus: SocketStatus): Action => ({
  type: socketStatus,
})
