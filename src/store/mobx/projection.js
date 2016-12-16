/* @flow */

import { observable } from 'mobx'

class ObservableProjectionStore {
  @observable projectionStore: Object = {}

  setProjected(item: Object) { this.projectionStore = item }
  removeProjected() { this.projectionStore = {} }
}

const observableProjectionStore = new ObservableProjectionStore()
export default observableProjectionStore
