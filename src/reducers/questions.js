import {ALL_QUESTIONS,ADD_QUESTION_ANSWER} from '../actions/questions'

export default function questions(state={}, action){
  switch(action.type){
    case ALL_QUESTIONS:
      return{
        ...state,
        ...action.questions
      }
      //here we need to add question, selected option and increase the vote for the selected option by 1.
      case ADD_QUESTION_ANSWER:
        return{
          ...state,
          [action.id] :{
            ...state[action.id],
            [action.selected] :{
              ...state[action.id][action.selected],
              votes:state[action.id][action.selected].votes.contact([action.authedUser])
            }
          }



        };
        default : return state
  }


}
