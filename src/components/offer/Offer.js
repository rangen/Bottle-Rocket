import React from 'react'
import './offer.styles.scss'

const Offer = ({ offer, deleteOffer, offerID }) => {
  return (
          <div className="row">
            <div className="col s4 m7">
              <div className="card">
                <div className="card-image">
                  <img src={offer.imageUrl ? offer.imageUrl : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPNGPIX-COM-Wine-Bottle-PNG-Transparent-Image.png&f=1&nofb=1'} />
                  <a className="btn-floating halfway-fab waves-effect waves-light red lighten-3" onClick={(e)=>deleteOffer(e, offerID)}><i className="material-icons">clear</i></a>
                </div>
                <div className="card-content">
                  <p>{offer.fullName}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
      
export default Offer