/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'
import observableBookmarkStore from '@store/mobx/bookmark'
import observableProjectionStore from '@store/mobx/projection'

const mapStateToProps = (state) => ({
  bookmarkStore: observableBookmarkStore,
  projectionStore: observableProjectionStore,
})

const mapActionsToProps = { }

export default (container): React$Element<any> => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  ),
)(container)
