import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom';


class Nav extends Component{

  render(){
    return(
      <nav className='nav'>
        <ul>
          <li><NavLink to='/' exact activeClassName='active'> Dashboard </NavLink> </li>
          <li><NavLink to ='/new' exact activeClassName='active'> New Question </NavLink></li>
        </ul>


      </nav>

    )
  }
}

function mapStateToProps(){


}
//export default connect(mapStateToProps)(Nav)
export default Nav
