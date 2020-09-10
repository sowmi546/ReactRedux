//import {getQuestions} from '../utils/api'

import {saveQuestion,saveQuestionAnswer} from '../utils/api.js'
import {showLoading, hideLoading}from 'react-redux-loading'
export const ALL_QUESTIONS = 'ALL_QUESTIONS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const ADD_QUESTION_ANSWER='ADD_QUESTION_ANSWER'


export function addQuestion (question) {
  return{
    type : ADD_NEW_QUESTION,
    question
  }
}
export function addNewQuestion(optionOneText,optionTwoText){
  return(dispatch, getState) =>{
    const {authedUser} = getState()
    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author : authedUser,

    })
    .then((question) => {dispatch(addQuestion(question))})
    .then(() =>dispatch(hideLoading()))
  }
}
export function getAllQuestions(questions){
  return {
    type : ALL_QUESTIONS,
    questions
  }
}


export function handleAddQuestionAnswer({qid, answer}){
  return(dispatch,getState) =>{
    const{authedUser} = getState();
    console.log(authedUser);

    dispatch(showLoading())
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer


    }).then((question) =>dispatch(addQuestionAnswer({authedUser,qid,answer})))
      .then(() => dispatch(hideLoading())
    )
  }
}

export function addQuestionAnswer({authedUser,qid,answer}){
  return{
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,

  }
}
