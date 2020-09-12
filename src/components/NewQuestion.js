import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {addNewQuestion} from '../actions/questions.js'
import { Form,Button } from 'react-bootstrap';



class NewQuestion extends Component{
state ={
  optionOneValue:'',
  optionTwoValue:'',
  toHome:false
};
handleChange = (e,option) =>{
  const text= e.target.value
  if(option ==='option1'){

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
  e.preventDefault()
  const {optionOneValue, optionTwoValue}= this.state;
  const {dispatch} = this.props;
  dispatch(addNewQuestion(optionOneValue,optionTwoValue))

  this.setState(() =>({
    optionOneValue:'',
    optionTwoValue:'',
    toHome:true

  }))
  console.log(this.state);
}

render(){
  const {optionOneValue, optionTwoValue,toHome}= this.state;
  if(toHome === true){
      return <Redirect to='/home' />
    }
  return(
    <div id='form'>
    <h3>Would you rather </h3>



    <Form onSubmit={(e) =>this.handleSubmit(e)}>
      <Form.Group controlId='newQuestion.ControlTextArea'>
        <Form.Label> Option 1  </Form.Label>
        <Form.Control as ='textarea' rows='1' value={optionOneValue} onChange={(e)=> this.handleChange(e,'option1')} />
      </Form.Group>
      <Form.Group controlId='newQuestion.ControlTextArea'>
        <Form.Label> Option 2  </Form.Label>
        <Form.Control as ='textarea' rows='1' value={optionTwoValue} onChange={(e)=> this.handleChange(e,'option2')} />
      </Form.Group>
      <Button variant='primary' type='submit' size='sm'> Submit </Button>
    </Form>

    </div>

  )
}

}

export default connect()(NewQuestion)
