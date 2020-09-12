import React,{Component} from 'react';
import {connect} from 'react-redux'
import {handleAddQuestionAnswer} from '../actions/questions'
import { Link} from 'react-router-dom'

class Vote extends Component{



  state= {
    selected:'',
    showResults:false

  }

  handleChange = (e) =>{
    const text = e.target.value;
    this.setState(() =>({
      selected: text
    }));

  }

  handleSubmit = (e,id) =>{
    e.preventDefault();
      const{selected} = this.state;

    this.props.dispatch(handleAddQuestionAnswer({


      qid:id,
      answer:selected,
    }))
    this.setState(() =>({
      selected:'',
      showResults:true

    }))

  }
  render(){
      const {id,question,user} = this.props;


      return(
        <div >
            <div >
              <img src= {user.avatarURL} alt='Avatar' className='avatar'/>
              <span> {user.name} says </span>
              <div>
                <form onSubmit={(e) => this.handleSubmit(e,id)}>
                  <div>
                    <div>  <input type='radio' id='optionOne' value='optionOne' name='questionChoice' onChange={(e)=>this.handleChange(e)} /><label>{question.optionOne.text}</label> <br/> </div>
                      <input type='radio' id='optionTwo' value='optionTwo'  name='questionChoice' onChange={(e)=>this.handleChange(e)} /><label >{question.optionTwo.text}</label>
                  </div>
                  <button className='btn' type='submit'>Submit </button>
                </form>
              </div>
              {this.state.showResults ?  <Link to={`/question/${question.id}/results`}>
                <div><h3>Response Submitted ! Do you want to view poll?</h3><button>View Poll </button></div>
                </Link> :null}


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
