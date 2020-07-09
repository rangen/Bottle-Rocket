import React from 'react'
import './offer.styles.scss'

const Offer = ({ offer, deleteOffer, offerID, broadcastOffer }) => {
  return (
    <div className="card hoverable">
      <h4>{offer.fullName}</h4>
      <h5>Date of Offer: {offer.offerDateTime}    Sold: {offer.numSold || 0}/{offer.numOffered}</h5>
      <div className='test'>
        <h6>Offer{offer.isActiveOffer ? " Active" : " Inactive"}
          <div className='card-action'>
            {/* Might refactor logic to "cancel" an offer that hasn't been sent out or disable if already has! */}
          <button className="btn waves-effect waves-light red lighten-2" onClick={(e)=>deleteOffer(e, offerID)} >Delete Offer</button>
          <button className="btn waves-effect waves-light" onClick={()=>broadcastOffer(offerID)} >Broadcast Offer</button>
          {/* Rocket icon in button !! */}
          </div>
        </h6>
      </div>
    </div>
  )
}

export default Offer