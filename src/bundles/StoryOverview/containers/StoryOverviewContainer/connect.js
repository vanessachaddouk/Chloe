/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'
import { hideAdvert } from '@store/modules/lamp'

const mapStateToProps = (state) => ({
  savedBookmark: state.bookmark,
  lampStatus: state.hideAdvert,
})

const mapActionsToProps = { hideAdvert }

export default (container): React$Element<any> => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  ),
)(container)
