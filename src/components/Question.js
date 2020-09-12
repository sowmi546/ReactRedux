import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import {formatDate} from '../utils/helper'
import { Button } from 'react-bootstrap';

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


      {ans && this.props.activeQuestions=='answered' && (<div class='card'>
          <Link to={`/question/${question.id}`}>
          <img src={`${user.avatarURL}`} alt='avatar' className='avatar'/>
          <div className='question-info'>
          <div>
          <span className='question-header'>{user.name} asks..</span>

          <div className='question'>Would you rather</div>
          <ul className='question-options'>
              <li>1. {question.optionOne.text}</li>
              <li>2. {question.optionTwo.text} </li>
          </ul>
        </div>
          </div>

      </Link>
      <Link to={`/question/${question.id}/results`}>
      <div><Button variant="primary" size='sm'>View Poll </Button></div>
      </Link>
      </div>
     )}
      {!ans && this.props.activeQuestions=='unanswered' && (<div class='card'>
          <Link to={`/question/${question.id}`}>
          <img src={`${user.avatarURL}`} alt='avatar' className='avatar'/>
          <div className='question-info'>
          <div>
          <span className='question-header'>{user.name} asks..</span>

          <div className='question'>Would you rather</div>
          <ul className='question-options'>
              <li>1. {question.optionOne.text}</li>
              <li>2. {question.optionTwo.text} </li>
          </ul>
        </div>
          </div>

      </Link>
      <Link to={`/question/${question.id}/vote`}>
        <div><Button variant="primary" size='sm'>View Poll </Button></div>
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
