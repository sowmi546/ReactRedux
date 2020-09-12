import {connect} from 'react-redux';
import {handleInitialData} from './actions/shared';
import React,{Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import './App.css';
import Dashboard from './components/Dashboard';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';
import Nav from './components/Nav';
import Login from './components/Login';
import QuestionPage from './components/QuestionPage';
import Vote from './components/Vote';
import PollResults from './components/PollResults';
import Logout from './components/Logout';
import PageNotFound from './components/PageNotFound';
import ProtectedRoute from '.components/ProtectedRoute';

class App extends Component {
  componentDidMount(){
    //get the list of questions
    this.props.dispatch(handleInitialData())
  }
  render(){
    const {loading,authenticated,authedUser, loginUser} = this.props;

    console.log(this.props.authenticated);
    return(

      <Router>
        <Fragment>
        <LoadingBar />


          <div className='container'>
               <Nav />



             <Switch>
             <Route path ='/' exact component={Login} />
             <ProtectedRoute exact path='/home'  component={Dashboard} />
             <ProtectedRoute exact path='/add'  component ={NewQuestion} />
             <ProtectedRoute exact path = '/leaderboard' component={LeaderBoard} />
             <ProtectedRoute exact path='/question/:id' component={QuestionPage} />
             <ProtectedRoute exact path='/question/:id/vote' component={Vote} />
             <ProtectedRoute exact path='/question/:id/results' component={PollResults} />
             <Route exact path='/logout' component={Logout} />
             <Route path='not-found' component={PageNotFound} />

         </Switch>




          </div>
        </Fragment>
        </Router>



    )
  }


}


function mapStateToProps({authedUser,loadingBar,logOut}){
  return{

    loading : false,
    authenticated :logOut.authenticated,
    loginUser : logOut.loginUser
    //authedUser : authedUser.authedUser

  }
}
export default connect(mapStateToProps)(App);
