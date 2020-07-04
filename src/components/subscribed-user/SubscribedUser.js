import React from 'react'

const SubscribedUser = ({ user }) => {
  return (
    <div>
      <h3>{user.attributes.firstName}</h3>
      <p>{user.attributes.email}</p>
    </div>
  )
}

export default SubscribedUser
