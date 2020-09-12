//from login based on the user selected once I submit, it would dispatch setAuthedUser and then that can be used in other components

import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserInfo from './UserInfo'

class Login extends Component{
  render() {
    const {userIds, users} = this.props
    //const userIds = Object.keys(users)

    return(
        <div className='login-body'>
          <h2> Login or impersonate a user </h2>
          <ul className='login-options'>
            {this.props.userIds.map((id) =>(

              <li key={id}>
              <UserInfo id={id}/>
              </li>
            ))}
            </ul>
            </div>

    )
  }
}

function mapStateToProps({users}){
  return{
    userIds: Object.keys(users),
    users,
  };
}

export default connect(mapStateToProps)(Login)
