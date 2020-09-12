//here i need the question id, authed user, votes info. I don't need to maintain the state here
import React,{Component} from 'react';
import {connect} from 'react-redux';

class PollResults extends Component {


  render(){
    const {question,authedUser} = this.props;
    const optionOneVotes = question.optionOne.votes.length ;
    const optionTwoVotes = question.optionTwo.votes.length ;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercent = ((optionOneVotes/totalVotes) *100);
    const optionTwoPercent = ((optionTwoVotes/totalVotes) *100);
    const optionOnePercentValue = optionOnePercent.toFixed(2);
    const optionTwoPercentValue = optionTwoPercent.toFixed(2);
     const ans1 = question.optionOne.votes.indexOf(authedUser) >-1
     const ans2=question.optionTwo.votes.indexOf(authedUser) >-1
    return (
        <div>
          <div>
              <h3>Poll result for would you rather.. </h3>
              {ans1?<p>Your vote is for <b>{question.optionOne.text}</b> </p> : <p>Your vote is for <b>{question.optionTwo.text} </b></p>}
          <p className={ans1?'selectedOption':''}>  {question.optionOne.text} is taken by {optionOneVotes} people <p class="s3-light-grey s3-round-large"><p class=" s3-blue s3-round-large" style={{width: optionOnePercentValue + '%'}}>{optionOnePercentValue}% </p></p> </p>
            <p className={ans2?'selectedOption':''}>   {question.optionTwo.text} is taken by {optionTwoVotes} people <p class="s3-light-grey s3-round-large"><p class=" s3-blue s3-round-large" style={{width: optionTwoPercentValue + '%'}}>{optionTwoPercentValue}%</p></p></p>

       </div>

        </div>

    )
  }


}

function mapStateToProps({users,authedUser,questions},props){

  const {id} = props.match.params;
  const question = questions[id];
  const author = users[question.author];
  return{
    id,
    question,
    author,
    authedUser
  }

}
export default connect(mapStateToProps)(PollResults);
