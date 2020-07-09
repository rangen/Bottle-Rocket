import React from 'react'
import './offer.styles.scss'

const Offer = ({ offer, deleteOffer, offerID }) => {
  return (
          <div class="row">
            <div class="col s4 m7">
              <div class="card">
                <div class="card-image">
                  <img src={offer.imageUrl ? offer.imageUrl : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPNGPIX-COM-Wine-Bottle-PNG-Transparent-Image.png&f=1&nofb=1'} />
                  <a class="btn-floating halfway-fab waves-effect waves-light red lighten-3" onClick={(e)=>deleteOffer(e, offerID)}><i class="material-icons">clear</i></a>
                </div>
                <div class="card-content">
                  <p>{offer.fullName}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
      
export default Offer