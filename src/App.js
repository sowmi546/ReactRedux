import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingBar from 'react-redux-loading';
import {connect} from 'react-redux';
import {handleInitialData} from './actions/shared';
import Dashboard from './components/Dashboard';


class App extends Component {
  componentDidMount(){
    //get the list of questions
    this.props.dispatch(handleInitialData())
  }
  render(){
    return(

        <Dashboard />

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
