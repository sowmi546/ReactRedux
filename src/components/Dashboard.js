import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'
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
          <h3> Would you rather </h3>
          <div className='btn-group'>

            <button className='btn unanswered' onClick={(e) => this.handleQuestions(e, 'unanswered')}> Unaswered questions </button>
            <button className='btn answered' onClick = {(e)=>this.handleQuestions(e, 'answered')}> Answered Questions </button>
          </div>

          <ul className='questions-display'>
            {this.props.questionIds.map((id) =>(
              <li key={id}>
                <Question id={id} activeQuestions={activeQuestions} />
              </li>
            ))}
          </ul>

      </div>
    )
  }
}

function mapStateToProps({questions}){
  return{
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}
export default connect(mapStateToProps)(Dashboard)
