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
  //  const unansweredQuestions = []
  //  const answeredQuestions=[]

   // const selectedQuestions = questionArray.filter(function(question){
   //   const selected = (
   //    question.optionOne.votes.indexOf('sarahedo') >-1 || question.optionTwo.votes.indexOf('sarahedo') >-1
   //  );
   //  return activeQuestions=='answered'? selected : !selected
   // })
  // const sortedQuestions = selectedQuestions.sort((a,b) => b.timestamp - a.timestamp);

     const ans = question.optionOne.votes.indexOf('sarahedo') >-1 || question.optionTwo.votes.indexOf('sarahedo') >-1 ;
     console.log('test' +ans);
     console.log('test' +this.props.activeQuestions);
    return(


      <div>
      { ans && this.props.activeQuestions=='answered' && (<div>
          <div className='authorDetails'>{question.author} asks {question.id} </div>
      </div>)}
      {!ans && this.props.activeQuestions=='unanswered' && (<div>
          <div className='authorDetails'>{question.author} asks {question.id} </div>
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
