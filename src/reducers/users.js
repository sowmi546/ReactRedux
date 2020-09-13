import {RECEIVE_USERS,ADD_USERS_QUESTION,ADD_USERS_QUESTION_ANSWER} from '../actions/users'

export default function users(state={},action){
  switch(action.type){
    case RECEIVE_USERS :
      return{
          ...state,
          ...action.users
      }
      // when a user creates a new question, at the same time the questions in user's state must update with the newly added question
      case ADD_USERS_QUESTION:
        return {
            ...state,
            [action.question.author] :{
              ...state[action.question.author],
              questions:[...state[action.question.author].questions, action.question.id]
            }
        };

        case ADD_USERS_QUESTION_ANSWER :
          return {
            ...state,
            [action.authedUser] :{
              ...state[action.authedUser],
              answers :{
                ...state[action.authedUser].answers,
                [action.qid]: action.answer
              }
            }
          }
      default : return state
  }
}
