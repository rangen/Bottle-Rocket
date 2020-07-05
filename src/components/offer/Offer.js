import React from 'react'

const Offer = ({ offer }) => {
  return (
    <div>
      <h3>{offer.fullName}</h3>
      <h4>Date of Offer: {offer.offerDateTime}</h4>
      <h4>Sold: {offer.numSold}/{offer.numOffered}</h4>
      <h4>Offer{offer.isActiveOffer ? " Active" : " Inactive"}</h4>
    </div>
  )
}

export default Offer