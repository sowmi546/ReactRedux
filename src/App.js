import {connect} from 'react-redux';
import {handleInitialData} from './actions/shared';
import React,{Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';
import Nav from './components/Nav';




class App extends Component {
  componentDidMount(){
    //get the list of questions
    this.props.dispatch(handleInitialData())
  }
  render(){
    return(

        <Router>
        <Fragment>
        <LoadingBar />
          <div className='container'>
           <Nav />
            {this.props.loading ===true? null:
            (<div>

              <Route path='/' component={Dashboard} />
              <Route path='/new' component ={NewQuestion} />
              <Route path = '/leaderboard' component={LeaderBoard} />
          </div>)}
              <Dashboard />
          </div>
        </Fragment>
        </Router>



    )
  }
}


function mapStateToProps({authedUser,loadingBar}){
  return{
    // loggedInUserDetails: login.loggedInUserDetails,
    // authenticatedUser : login.authenticatedUser
    loading : authedUser ==null
  }
}
export default connect(mapStateToProps)(App);
//export default connect()(App);
