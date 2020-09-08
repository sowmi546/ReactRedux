//import {getQuestions} from '../utils/api'

import {saveQuestion} from '../utils/api.js'
import {showLoading, hideLoading}from 'react-redux-loading'
export const ALL_QUESTIONS = 'ALL_QUESTIONS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'


//handling initial data loading with optimistic approach
// export function handleInitalQuestions(){
//   return(dispatch) =>{
//     return getQuestions()
//       .then((questions) =>{
//         dispatch(getAllQuestions(questions));
//       })
//   }
// }


export function addQuestion (question) {
  return{
    type : ADD_NEW_QUESTION,
    question
  }
}
export function addNewQuestion(optionOneValue,optionTwoValue){
  return(dispatch, getState) =>{
    const {authedUser} = getState()
    dispatch(showLoading())
    return saveQuestion({
      optionOneValue,
      optionTwoValue,
      author : authedUser,

    })
    .then((question) => dispatch(addQuestion(question)))
    .then(() =>dispatch(hideLoading()))
  }
}
export function getAllQuestions(questions){
  return {
    type : ALL_QUESTIONS,
    questions
  }
}
