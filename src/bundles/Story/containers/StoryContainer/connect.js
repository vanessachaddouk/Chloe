/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bookmark } from '@store/modules/bookmark'

const mapStateToProps = (state) => ({
  savedBookmark: state.bookmark,
})

const mapActionsToProps = { bookmark }

export default (container): React$Element<any> => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  )
)(container)
