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
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  componentDidMount(){
    //get the list of questions
    this.props.dispatch(handleInitialData())
  }
  render(){

    console.log(this.props.authenticated);
    return(

      <Router>
        <Fragment>
        <LoadingBar />


          <div className='container'>
               <Nav />



             <Switch>
             <Route path ='/' exact component={Login} />
             <PrivateRoute exact path='/home'  component={Dashboard} />
             <PrivateRoute exact path='/add'  component ={NewQuestion} />
             <PrivateRoute exact path = '/leaderboard' component={LeaderBoard} />
             <PrivateRoute exact path='/question/:id' component={QuestionPage} />
             <PrivateRoute exact path='/question/:id/vote' component={Vote} />
             <PrivateRoute exact path='/question/:id/results' component={PollResults} />
             <Route exact path='/logout' component={Logout} />
             <Route path='/not-found' component={PageNotFound} />

         </Switch>




          </div>
        </Fragment>
        </Router>



    )
  }


}


export default connect()(App);
