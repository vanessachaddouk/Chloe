/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bookmark } from '@store/modules/bookmark'
import { reduxSocketStatus } from '@store/modules/socket'

const mapStateToProps = (state) => ({
  savedBookmark: state.bookmark,
  socketReduxState: state.reduxSocketStatus,
})

const mapActionsToProps = { bookmark, reduxSocketStatus }

export default (container): React$Element<any> => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  ),
)(container)
