import React, {Component} from 'react';
import {connect} from 'react-redux'

import {logOutUser} from '../actions/authedUser';
import {Redirect} from 'react-router-dom'


class Logout extends Component{
  componentDidMount(){
  this.props.dispatch(logOutUser())

  // this.setState(() =>{
  //   authedUser :null;
  // })
}
  render(){
    return(
      <Redirect to='/' />
    );
  }

}


export default connect()(Logout);
