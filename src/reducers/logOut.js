import {LOGOUT_USER} from '../actions/authedUser'


export default function logOut(state={}, action){
  switch(action.type){
    case LOGOUT_USER :return {
      ...state,
      authenticated:action.authenticated,
      loginUser: action.loginUser

}
    default: return state

}
}
