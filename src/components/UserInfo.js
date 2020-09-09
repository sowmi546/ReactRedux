import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser';


class UserInfo extends Component{
  state ={
    toHome: false
  }
  handleLogin = (e,userID) =>{

    e.preventDefault()
    const {dispatch} = this.props
    dispatch(setAuthedUser(userID))

    this.setState(() =>({
      toHome: true
    }))
  }





  render(){
    const {users, user} = this.props

    console.log(this.props)
    return(
      <div className='user'>
      <div key={user.id}>
        <img src={`${user.avatarURL}`} alt='avatar' className='avatar'/>
        <h4 className='user-name'> {`${user.name}`}</h4>
        <button className='login' onClick={(e) => this.handleLogin(e,user.id)}>Login as {`${user.name}`}</button>
      </div>

      </div>
    )
  }
}

function mapStateToProps({users},{id}){
  const user = users[id]
  return{
    users,
    user
  }

}

export default connect(mapStateToProps)(UserInfo)
