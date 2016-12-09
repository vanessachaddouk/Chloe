/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({})
const mapActionsToProps = {}

export default (container): React$Element<any> => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  )
)(container)
