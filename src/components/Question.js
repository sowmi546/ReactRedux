import React, {Component} from 'react'
import {connect} from 'react-redux'

class Question extends Component {


  render(){
     const {question,activeQuestions}= this.props;
    console.log(this.props);
  //  const {id, question}= this.props;
      const {author,optionOne, optionTwo}= question;

    return(
      <div>
      {this.props.activeQuestions === 'answered' && <h3>answered</h3>}
      {this.props.activeQuestions === 'unanswered' && <h3>unanswered</h3>}
          </div>
    )
  }
}
//getting the list of questions and mapping them to props
function mapStateToProps({questions,users},{id,activeQuestions}){
  const question = questions[id]
  const user = users[question.author]
  return {
    question,
    user
  }

}
export default connect(mapStateToProps)(Question)
