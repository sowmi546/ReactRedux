import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink,Link} from 'react-router-dom';


class Nav extends Component{

  render(){
    const {user, authedUser} = this.props;
    return(

      <div>
      <nav className='nav'>
        {this.props.authedUser ?(
          <div>
          <ul >
            <li ><NavLink exact to='/home'  activeClassName='active'> Dashboard </NavLink> </li>
            <li ><NavLink  to ='/new' exact activeClassName='active'> New Question </NavLink></li>
            <li><NavLink to='/leaderboard' exact activeClassName='active'> LeaderBoard </NavLink></li>
            <li > Welcome {this.props.authedUser} </li>
            <li ><NavLink to='/' exact activeClassName='active'> Logout </NavLink></li>

          </ul>
          <ul>

          </ul>
          </div>

        ) :(
          <ul className='login'>
              <li></li>
          </ul>

        )}



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
