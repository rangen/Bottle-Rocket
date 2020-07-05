import React from 'react'

const Offer = ({ offer, deleteOffer, offerID }) => {
  return (
    <div>
      <h3>{offer.fullName}
        <button onClick={(e)=>deleteOffer(e, offerID)} >Delete Offer</button>
      </h3>
      <h4>Date of Offer: {offer.offerDateTime}</h4>
      <h4>Sold: {offer.numSold || 0}/{offer.numOffered}</h4>
      <h4>Offer{offer.isActiveOffer ? " Active" : " Inactive"}</h4>
    </div>
  )
}

export default Offer