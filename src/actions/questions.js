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


export function handleAddQuestionAnswer(id,selected){
  return(dispatch,getState) =>{
    const{authedUser} = getState();
    console.log('snctest');
    console.log(authedUser);
    console.log(id);
    console.log(selected);
    dispatch(showLoading())
    return saveQuestionAnswer({
      authedUser,
      id,
      selected


    }).then((question) =>dispatch(addQuestionAnswer(authedUser,id,selected))
      .then(() => dispatch(hideLoading()))
    )
  }
}

export function addQuestionAnswer(id, selected, authedUser){
  return{
    type: ADD_QUESTION_ANSWER,
    id,
    selected,
    authedUser
  }
}
