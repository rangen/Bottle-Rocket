import React from 'react'

const SubscribedUser = ({ user }) => {
  return (
    <div>
      <h3>{user.first_name}</h3>
      <p>{user.email}</p>
      <button>Email Offer</button>
    </div>
  )
}

export default SubscribedUser
