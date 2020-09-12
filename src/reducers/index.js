import {combineReducers} from 'redux'
import questions from './questions'
import users from './users'
import authedUser from './authedUser'
import logOut from './logOut'
import {loadingBarReducer} from 'react-redux-loading'
export default combineReducers({
  authedUser,
  questions,
  users,
  logOut,
  loadingBar:loadingBarReducer,
})
