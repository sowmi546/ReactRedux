//import {getQuestions} from '../utils/api'

export const ALL_QUESTIONS = 'ALL_QUESTIONS'


//handling initial data loading with optimistic approach
// export function handleInitalQuestions(){
//   return(dispatch) =>{
//     return getQuestions()
//       .then((questions) =>{
//         dispatch(getAllQuestions(questions));
//       })
//   }
// }

export function getAllQuestions(questions){
  return {
    type : ALL_QUESTIONS,
    questions
  }
}
