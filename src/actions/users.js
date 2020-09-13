export const RECEIVE_USERS ='RECEIVE_USERS'
export const ADD_USERS_QUESTION ='ADD_USERS_QUESTION'
export const ADD_USERS_QUESTION_ANSWER = 'ADD_USERS_QUESTION_ANSWER'

export function receiveUsers(users){
  return {
    type: RECEIVE_USERS,
    users
  }
}

//below  function will be called when the user adds a question 
export function addUsersQuestion(question){
  return{
    type : ADD_USERS_QUESTION,
    question
  }
}

//this is called  when a user answers a question
export function addUsersQuestionAnswer({authedUser,qid,answer}){
  return{
    type : ADD_USERS_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}
