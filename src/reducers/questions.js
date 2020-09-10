import {ALL_QUESTIONS,ADD_QUESTION_ANSWER,ADD_NEW_QUESTION} from '../actions/questions'

export default function questions(state={}, action){
  switch(action.type){
    case ALL_QUESTIONS:
      return{
        ...state,
        ...action.questions
      }
      case ADD_NEW_QUESTION:
      return{
        ...state,
        [action.question.id] :action.question
      }
      //here we need to add question, selected option and increase the vote for the selected option by 1.
      case ADD_QUESTION_ANSWER:
        return{
          ...state,
          [action.qid] :{
            ...state[action.qid],
            [action.answer] :{
              ...state[action.qid][action.answer],
              votes:state[action.qid][action.answer].votes.concat([action.authedUser])
            }
          }



        };
        default : return state
  }


}
