import {getInitialData} from '../utils/api'
import {getAllQuestions} from './questions.js'
import {receiveUsers} from './users.js'

export function handleInitialData(){
  return(dispatch) =>{
    return getInitialData()
      .then(({questions,users}) =>{
        dispatch(getAllQuestions(questions))
        dispatch(receiveUsers(users))

      })
  }
}
