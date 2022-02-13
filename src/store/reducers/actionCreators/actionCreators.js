import * as MovieActionCreators from './movieActionCreators'
import * as UserActionCreators from './userActionCreators'

export default {
    ...MovieActionCreators,
    ...UserActionCreators
}