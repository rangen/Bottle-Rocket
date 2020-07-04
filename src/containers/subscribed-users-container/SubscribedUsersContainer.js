import React from 'react'
import './subscribed-users-container.styles.scss'
import SubscribedUser from '../../components/subscribed-user/SubscribedUser'

const SubscribedUsersContainer = ({ users }) => {
    return (
      <div>
        {/* {users.map(user => <SubscribedUser key={user.id} user={user} />)} */}
      </div>
    )
}

export default SubscribedUsersContainer
