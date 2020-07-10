import React from 'react'
import './subscribed-users-panel.styles.scss'
// import SubscribedUser from '../../components/subscribed-user/SubscribedUser'

const SubscribedUsersPanel = ({ users }) => {
    
  return (
      <div>
          <table className='highlight'>
        <thead>
          <tr>
              <th>Mobile Number</th>
              <th>Email Addres</th>
              <th>Name</th>
              <th>Sign Up Date</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user=>(
              <tr>
                <td>{user.attributes.mobileNumber}</td>
                <td>{user.attributes.email}</td>
                <td>{user.attributes.fullName}</td>
                <td>{new Date(user.attributes.memberSince).toLocaleString()}</td>
              </tr>   
            )
          )}
        </tbody>
      </table>
      </div>
    )
}

export default SubscribedUsersPanel
