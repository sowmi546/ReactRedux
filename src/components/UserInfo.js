import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser';
import {Redirect} from 'react-router-dom'

class UserInfo extends Component{
  state ={
    toHome:false
  }
  handleLogin = (e,userID) =>{
    alert('hello2');

    e.preventDefault()
    const {dispatch} = this.props
    dispatch(setAuthedUser(userID))

    this.setState(() =>({
      toHome:true

    }))



    console.log('setting tohome state'+ this.state.toHome);
  }





  render(){
    const {users, user,authedUser} = this.props
    const {toHome}= this.state
    

    if(toHome === true){
      alert('hello');
        return <Redirect to='/home'/>
      }

    console.log(this.props)
    return(
      <div className='user'>
      <div key={user.id}>
        <img src={`${user.avatarURL}`} alt='avatar' className='avatar'/>
        <h4 className='user-name'> {`${user.name}`}</h4>
        <button className='login-btn' onClick={(e) => this.handleLogin(e,user.id)}>Login as {`${user.name}`}</button>
      </div>

      </div>
    )
  }
}

function mapStateToProps({users,authedUser},{id}){
  const user = users[id]
  return{
    users,
    user,
    authedUser
  }

}

export default connect(mapStateToProps)(UserInfo)
