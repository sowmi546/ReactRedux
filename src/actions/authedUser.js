export const SET_AUTHED_USER = 'SET_AUTHED_USER'

// we will be using this to check to give answered and unanswered questions in question Component
export function setAuthedUser(id){
  return{
    type : SET_AUTHED_USER,
    id,
  }
}
