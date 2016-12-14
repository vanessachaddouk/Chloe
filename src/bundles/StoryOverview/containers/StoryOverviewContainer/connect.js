/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  savedBookmark: state.bookmark,
})

const mapActionsToProps = {}

export default (container): React$Element<any> => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  )
)(container)
