import React, {Component} from 'react'
import {connect} from 'react-redux'

class LeaderBoard extends Component {

  render(){

     const {users}= this.props;
     const userIds =  Object.keys(users)
  
     const totalScore = userIds.map(id =>({
       id,
       score : Object.keys(users[id].answers).length + Object.keys(users[id].questions).length,
       created:Object.keys(users[id].questions).length,
       answered:Object.keys(users[id].answers).length



     }))

     return(
       <div>
        <h1 align='center'>LeaderBoard Details </h1>
        {totalScore.sort((a,b) =>b.score - a.score).map(user =>(

          <div key={user.id} className='card'>

          <img src={users[user.id].avatarURL} alt='avatar' className='avatar'/>
          <div className='question-info'>
            <div>
                <span>{users[user.id].name} score is {user.score} </span>
            </div>

            <div >


                <h3>Answered questions is {user.answered} </h3>
                <h3>Created questions is {user.created}</h3>
            </div>

          </div>



            </div>
        ))}
       </div>
     )




  }

}

function mapStateToProps({users}){
    return {
      users
    }
}


export default connect(mapStateToProps)(LeaderBoard)
