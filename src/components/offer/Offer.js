import React from 'react'

const Offer = ({ offer, deleteOffer, offerID, broadcastOffer }) => {
  return (
    <>
      <h3>{offer.fullName}</h3>
      <h4>Date of Offer: {offer.offerDateTime}    Sold: {offer.numSold || 0}/{offer.numOffered}</h4>
      <div>
        <h4>Offer{offer.isActiveOffer ? " Active" : " Inactive"}
          <button onClick={(e)=>deleteOffer(e, offerID)} >Delete Offer</button>
          <button onClick={()=>broadcastOffer(offerID)} >Broadcast this Offer Now</button>
          {/* Rocket icon in button !! */}
        </h4>
      </div>
    </>
  )
}

export default Offer