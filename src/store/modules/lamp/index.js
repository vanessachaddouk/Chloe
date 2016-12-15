/* @flow */

type Action = {
  type: string,
}

export default (state: string = '', action: Action): string => {
  switch (action.type) {
    case 'CONNECTED':
    case 'DISCONNECTED':
      return action.type
    default:
      return 'DISCONNECTED'
  }
}

export const hideAdvert = (lampStatus: string): Action => ({
  type: lampStatus,
})
