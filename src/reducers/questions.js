import {ALL_QUESTIONS} from '../actions/questions'

export default function questions(state={}, action){
  switch(action.type){
    case ALL_QUESTIONS:
      return{
        ...state,
        ...action.questions
      }
  }

  default : return state
}
