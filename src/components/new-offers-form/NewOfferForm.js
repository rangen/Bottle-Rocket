import React from 'react'
import './new-offers.styles.scss'

const NewOfferForm = ({ offers, getNameByWineId }) => {
  return (
    <div>
      <h1>New Offer</h1>
      <form>
      <select>
      {offers.map(offer => getNameByWineId().map(name => <option key={offer.id} value={offer.wine_id}>{name}</option>))}
      </select>
      </form>
    </div>
  )
}

export default NewOfferForm
