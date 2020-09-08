import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserInfo extends Component{
  render(){
    return(
      <h3>hello</h3>
    )
  }
}

function mapStateToProps({users}){

}

export default connect(mapStateToProps)(UserInfo)
