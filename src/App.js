import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import LoadingBar from 'react-redux-loading';
import {connect} from 'react-redux';
import {handleInitalQuestions} from './actions/questions';


class App extends Component {
  componentDidMount(){
    //get the list of questions
    this.props.dispatch(handleInitalQuestions())
  }
  render(){
    return(

      <div><h1>Hello</h1></div>

    )
  }
}


function mapStateToProps({login, users}){
  return{
    // loggedInUserDetails: login.loggedInUserDetails,
    // authenticatedUser : login.authenticatedUser
  }
}
export default connect(mapStateToProps)(App);
//export default connect()(App);
