import React from 'react'

const Wine = ({ wine, deleteWine, wineID }) => {
  return (
    <>
      <h3>{wine.attributes.fullName}</h3>
      <div>
          <button onClick={(e)=>deleteWine(e, wineID)} >Delete Wine</button>
      </div>
    </>
  )
}

export default Wine