//from login based on the user selected once I submit, it would dispatch setAuthedUser and then that can be used in other components

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setAuthedUser} from '../actions/authedUser';
import {Redirect} from 'react-router-dom'

class Login extends Component{

  state={

    userId :null,
    toHome:false
  }
  handleChangedUser = (e) =>{

      //const { toHome } = this.state;
    const userId = e.target.value;
    console.log('value is' + userId);
    this.setState(function(previousState) {
		  return {
			...previousState,
			userId:userId,

		  };
		});


  }

handleUserLogin = (e) =>{
  const { userId } = this.state;
   this.props.dispatch(setAuthedUser(userId));


    this.setState(() =>({
      toHome: true
    }))

}

  render() {
    const {userIds, users} = this.props
    const { toHome}= this.state


    if(toHome === true){

        return <Redirect to='/home'/>
      }



    return(


            <div className='login-body'>
              <h2> Login or impersonate a user </h2>
              <select id='login-user' onChange = {(e) => this.handleChangedUser(e)}>

                  <option value='0'> Select a user from dropdown</option>
                  {userIds.map((user) =>{
                    return <option key={users[user].id} value={users[user].id}> {users[user].name} </option>
                  })
                }
              </select>
              <button onClick={(e) => this.handleUserLogin(e)}>Login</button>

                </div>



    );
  }
}

function mapStateToProps({users}){
  return{
    userIds: Object.keys(users),
    users,
  };
}

export default connect(mapStateToProps)(Login)
