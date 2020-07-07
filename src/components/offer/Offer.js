import React from 'react'
import './offer.styles.scss'
import { Button } from '@material-ui/core'

const Offer = ({ offer, deleteOffer, offerID, broadcastOffer }) => {
  return (
    <div className="card hoverable">
      <h4>{offer.fullName}</h4>
      <h5>Date of Offer: {offer.offerDateTime}    Sold: {offer.numSold || 0}/{offer.numOffered}</h5>
      <div>
        <h6>Offer{offer.isActiveOffer ? " Active" : " Inactive"}
          <div className='card-action'>
          <Button className='button' color='primary' variant="contained" onClick={()=>broadcastOffer(offerID)} >Broadcast Offer</Button>
          <Button className='button' color='secondary' variant="contained" onClick={(e)=>deleteOffer(e, offerID)} >Delete Offer</Button>
          {/* Rocket icon in button !! */}
          </div>
        </h6>
      </div>
    </div>
  )
}

export default Offer