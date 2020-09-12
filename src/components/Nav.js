import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom';


class Nav extends Component{

  render(){

    const {authedUser} = this.props
    return(

      <div>
      <nav className='nav'>

          <div>
          <ul >
            <li ><NavLink exact to='/home'  activeClassName='active'> Dashboard </NavLink> </li>
            <li ><NavLink  to ='/add' exact activeClassName='active'> New Question </NavLink></li>
            <li><NavLink to='/leaderboard' exact activeClassName='active'> LeaderBoard </NavLink></li>
             {authedUser &&  <div><li > Welcome {this.props.authedUser} </li>
             <li ><NavLink to='/logout' exact activeClassName='active'> Logout </NavLink></li> </div>
           }


          </ul>
          <ul>

          </ul>
          </div>







      </nav>
      </div>

    )
  }
}

function mapStateToProps({users,authedUser}){
    return {
      users,
      authedUser
    }



}
export default connect(mapStateToProps)(Nav)
//
