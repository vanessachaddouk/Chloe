/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'
import observableBookmarkStore from '@store/mobx/bookmark'

const mapStateToProps = (state) => ({
  savedBookmark: observableBookmarkStore,
})

const mapActionsToProps = {}

export default (container): React$Element<any> => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  ),
)(container)
