import React, {Component} from 'react'
import {connect} from 'react-redux'

class Question extends Component {


  render(){
     const {questions,question,activeQuestions,user,authedUser}= this.props;
    console.log(this.props);
  //  const {id, question}= this.props;
  //const selectedQuestions;
      const {author,optionOne, optionTwo}= question;
    const questionArray = Object.values(questions)


     const ans = question.optionOne.votes.indexOf('sarahedo') >-1 || question.optionTwo.votes.indexOf('sarahedo') >-1 ;

    return(


      <div>
      { ans && this.props.activeQuestions=='answered' && (<div>
        <div className='question-info'>
          <div className='question-header'>{user.name} asks {question.id} </div>
          <div><img src={`/${user.avatarURL}`} alt='avatar' className='avatar'/></div>
      </div>
      <div className='question-body'>
        <div className='question'>Would you rater</div>
        <div className='question-options'>
            <p>Option1: {question.optionOne.text}</p>
            <p>Option2 : {question.optionTwo.text} </p>
        </div>
      </div>
        </div>


      )}
      {!ans && this.props.activeQuestions=='unanswered' && (<div>
          <div className='question-info'>
          <div className='question-header'>{user.name} asks {question.id} </div>
          <div><img src={`/${user.avatarURL}`} alt='avatar' className='avatar'/></div>
      </div>
      <div className='question-body'>
        <div className='question'>Would you rater</div>
        <div className='question-options'>
            <p>Option1: {question.optionOne.text}</p>
            <p>Option2 : {question.optionTwo.text} </p>
        </div>
      </div>
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
    question,
    questions,
    user,
    authedUser
  }

}
export default connect(mapStateToProps)(Question)
