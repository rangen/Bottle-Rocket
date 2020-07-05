import React from 'react'
import './new-offers.styles.scss'

const NewOfferForm = ({ offers, cancel }) => {
  return (
    <div>
      <h1>New Offer</h1>
      <form>
      <button onClick={cancel}>Cancel</button>
      </form>
    </div>
  )
}

export default NewOfferForm
