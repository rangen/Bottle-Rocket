import React from 'react'
import AdminPanel from '../../components/admin-panel/AdminPanel'
import About from '../../components/about/About'

const HomePage = ({ adminSignedIn }) => {
  return (
    <div>
      {adminSignedIn ? <AdminPanel /> : <About />}
    </div>
  )
}

export default HomePage
