import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {


  render(){
     const {questions,question,activeQuestions,user,authedUser}= this.props;
    console.log(this.props);
  //  const {id, question}= this.props;
  //const selectedQuestions;
  if(question ==-null){
    return <p>This question doesn't exist</p>
  }
      const {author,optionOne, optionTwo}= question;
    const questionArray = Object.values(questions)


     const ans = question.optionOne.votes.indexOf(authedUser) >-1 || question.optionTwo.votes.indexOf(authedUser) >-1 ;

    return(


      <div>


      {ans && this.props.activeQuestions=='answered' && (<div>
          <Link to={`/question/${question.id}`}>
          <div className='question-info'>
          <div><img src={`${user.avatarURL}`} alt='avatar' className='avatar'/></div>
          <span className='question-header'>{user.name} asks</span>

          </div>


      <div className='question-info'>
        <div className='question'>Would you rather</div>
        <div className='question-options'>
            <p>Option1: {question.optionOne.text}</p>
            <p>Option2 : {question.optionTwo.text} </p>
        </div>
      </div>
      </Link>
      <Link to={`/question/${question.id}/results`}>
      <div><button>View Poll </button></div>
      </Link>

     </div>)}
      {!ans && this.props.activeQuestions=='unanswered' && (<div>
          <Link to={`/question/${question.id}`}>
          <div className='question-info'>
          <div><img src={`${user.avatarURL}`} alt='avatar' className='avatar'/></div>
          <span className='question-header'>{user.name} asks</span>

          </div>


      <div className='question-info'>
        <div className='question'>Would you rather</div>
        <div className='question-options'>
            <p>Option1: {question.optionOne.text}</p>
            <p>Option2 : {question.optionTwo.text} </p>
        </div>
      </div>
      </Link>
      <Link to={`/question/${question.id}/vote`}>
      <div><button>View Poll </button></div>
      </Link>

     </div>)}

      </div>

    );
  }
}
//getting the list of questions and mapping them to props
function mapStateToProps({questions,users,authedUser},{id,activeQuestions}){
  const question = questions[id]
  const user = users[question.author]
  //const loggedinUser= authedUser;
  return {

    questions,
    user,
    authedUser,
    //question: question?formatQuestion(question,users[question.auther],authedUser):null
    question
  }

}
export default connect(mapStateToProps)(Question)
