/* @flow */

import { observable } from 'mobx'

class ObservableBookmarkStore {
  @observable bookmarkStore: Object = {}

  setBookmark(item: Object) { this.bookmarkStore = item }
  removeBookmark() { this.bookmarkStore = {} }
}

const observableBookmarkStore = new ObservableBookmarkStore()
export default observableBookmarkStore
