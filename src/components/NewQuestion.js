import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {addNewQuestion} from '../actions/questions.js'

class NewQuestion extends Component{
state ={
  optionOneValue:'',
  optionTwoValue:'',
  toHome: false,
};
handleChange = (e,option) =>{
  const text= e.target.value
  if(option =='option1'){
    this.setState(() =>({
      optionOneValue : text
    }))
  }
  else{
    this.setState(() =>({
      optionTwoValue : text
    }))
  }


}

handleSubmit = (e) =>{
  alert('hlloo ')
  e.preventDefault()
  const {optionOneValue, optionTwoValue}= this.state;
  const {dispatch} = this.props
  dispatch(addNewQuestion(optionOneValue,optionTwoValue))

  this.setState(() =>({
    optionOneValue:'',
    optionTwoValue:'',
    toHome:true

  }))
  console.log(this.state);
}

render(){
  const {optionOneValue, optionTwoValue}= this.state;
  return(
    <div>
    <h3>Would you rather </h3>
    <form className='new-question' onSubmit={this.handleSubmit} >
      <input type='text' name='optionOneValue' placeholder='Enter option1 value here' value={optionOneValue} onChange={(e)=> this.handleChange(e,'option1')} />
      <input type='text' name='optionTwoValue' placeholder='Enter option2 value here' value={optionTwoValue} onChange={(e)=> this.handleChange(e,'option2')} />
      <button className='btn' type='submit' disabled ={optionOneValue =='' && optionTwoValue==''}> Submit </button>
      </form>
    </div>

  )
}

}

export default connect()(NewQuestion)
