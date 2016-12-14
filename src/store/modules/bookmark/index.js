/* @flow */

import type { Bookmark } from './types'

type Action = {
  type: string,
  page: Object,
}

const BOOKMARK = 'BOOKMARK'

export default (state: Bookmark = { title: '', pageId: 0 }, action: Action): Bookmark => {
  switch (action.type) {
    case BOOKMARK:
      return action.page
    default:
      return state
  }
}

export const bookmark = (page: Object): Action => ({
  type: BOOKMARK,
  page,
})
