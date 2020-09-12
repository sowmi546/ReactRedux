import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import { Button } from 'react-bootstrap';
class Dashboard extends Component{
//setting the default state to unaswered questions, but based on the button clicked handleQuestion updates the state accordingly
  state = {
    'activeQuestions' : 'unanswered',
    'activeTab': 'unanswered'
  };

  //handling the question types(answered/ unanswered)
  handleQuestions = (e,type) =>{
    this.setState(() =>({
      activeQuestions: type,
      activeTab : type

    }));
  };
  render(){
    // get the access to state in render menthod
    const {activeQuestions, activeTab} = this.state
    console.log(this.state);
    return(
      <div>
          <h2 className='center'> Would you rather ...?? </h2>
          <div className='btn-group' align='center'>

            <Button className='ButtonState' onClick={(e) => this.handleQuestions(e, 'unanswered')}> Unaswered questions </Button>
            <Button className='ButtonState' onClick = {(e)=>this.handleQuestions(e, 'answered')}> Answered Questions </Button>
          </div>

          <ul className='questions-display'>
            {this.props.questionIds.map((id) =>(
              <li key={id}  align='center'>
                <Question id={id} activeQuestions={activeQuestions} />
              </li>
            ))}
          </ul>

      </div>
    )
  }
}

function mapStateToProps({questions,authedUser}){
  return{
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}
export default connect(mapStateToProps)(Dashboard)
