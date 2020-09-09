import React,{Component} from 'react';
import {connect} from 'react-redux'
import {handleAddQuestionAnswer} from '../actions/questions'


class Vote extends Component{

  state= {
    selected:'',

  }

  handleChange = (e) =>{
    const text = e.target.value;
    this.setState(() =>({
      selected: text
    }));

  }

  handleSubmit = (e,id) =>{
    alert(id);
    e.preventDefault();
      const{selected} = this.state;

    this.props.dispatch(handleAddQuestionAnswer(id,selected));
    this.setState(() =>({
      selected:'',

    }));

  }
  render(){
      const {id,question,authedUser,user} = this.props;
      console.log(this.props.question);
    return(
        <div className='center'>
            <div className='question-details'>
              <img src= {user.avatarURL} alt='Avatar' class="Avatar" />
              <span> {user.name} says </span>
              <div>
                <form onSubmit={(e) => this.handleSubmit(e,id)}>
                  <div>
                      <input type='radio' id='optionOne' value='optionOne' onChange={(e)=>this.handleChange(e)} /><p>{question.optionOne.text}</p>
                      <input type='radio' id='optionTwo' value='optionTwo' onChange={(e)=>this.handleChange(e)} /><p>{question.optionTwo.text}</p>
                  </div>
                  <button class='btn' type='submit'>Submit </button>
                </form>
              </div>


            </div>


        </div>
    )
  }
}



function mapStateToProps({users, questions,authedUser},props){
  const {id} = props.match.params;
  const question = questions[id];
  const user = users[question.author]
  return{
    id,
    question,
    authedUser,
    user

  }




}
export default connect(mapStateToProps)(Vote);
