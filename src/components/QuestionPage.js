import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class QuestionPage extends Component{
  render(){

    const {user,question} = this.props
    if(!question){
      return <Redirect to ='/not-found' />
    }
    return(
      <div>
      <div className='question-info'>
      <div><img src={`${user.avatarURL}`} alt='avatar' className='avatar'/></div>
      <span className='question-header'>{user.name} asks</span>

      </div>


  <div className='question-info'>
    <div className='question'>Would you rater</div>
    <div className='question-options'>
        <p>Option1: {question.optionOne.text}</p>
        <p>Option2 : {question.optionTwo.text} </p>
    </div>
  </div>
      </div>
    )
  }
}


function mapStateToProps({authedUser,users,questions},props){
  const {id} =  props.match.params
  const question = questions[id]
  const user = users[question.author]
  return{
    id,
    user,
    question
  }
}

export default connect(mapStateToProps)(QuestionPage)
