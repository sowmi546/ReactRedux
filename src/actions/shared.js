import {getInitialData} from '../utils/api'
import {getAllQuestions} from './questions.js'
import {receiveUsers} from './users.js'
//import {setAuthedUser} from './authedUser.js'



export function handleInitialData(){
  return(dispatch) =>{
    return getInitialData()
      .then(({questions,users}) =>{
        dispatch(receiveUsers(users))
        dispatch(getAllQuestions(questions))
  })
  }
}
