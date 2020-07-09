import React from 'react'
import AdminPanel from '../../containers/admin-panel/AdminPanel'
import About from '../../components/about/About'

const HomePage = ({ isAdmin }) => {
  return (
    <div>
      {isAdmin ? <AdminPanel /> : <About />}
    </div>
  )
}

export default HomePage
