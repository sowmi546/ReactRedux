import {connect} from 'react-redux';
import {handleInitialData} from './actions/shared';
import React,{Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';
import Nav from './components/Nav';
import Login from './components/Login';
import QuestionPage from './components/QuestionPage';
import Vote from './components/Vote';
import PollResults from './components/PollResults';

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
           <Switch>
            {this.props.loading ===true? <Route path ='/' exact component={Login} />: null }


              <Route path='/home' exact component={Dashboard} />
              <Route path='/new' exact component ={NewQuestion} />
              <Route exact path = '/leaderboard' component={LeaderBoard} />
              <Route exact path='/question/:id' component={QuestionPage} />
              <Route exact path='/question/:id/vote' component={Vote} />
              <Route exact path='/question/:id/results' component={PollResults} />

          </Switch>

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
