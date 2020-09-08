import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}


// export function getQuestions(questions){
//   return _getQuestions(questions)
// }
//
//
// export function getUsers(users){
//   return _getUsers(users)
// }
