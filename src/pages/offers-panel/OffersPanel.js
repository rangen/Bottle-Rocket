import React, { Component } from 'react'
import NewOfferForm from '../../components/new-offers-form/NewOfferForm'
import Offer from '../../components/offer/Offer'
import api from '../../services/api'

export class OffersPanel extends Component {
  state = {
    selectedOffer: null,
    mode: 'view'  // view broadcast create
  }

  submitNewOffer = (event, values) => {
    event.preventDefault();

    const pickValues = (...keys) => obj => keys.reduce((a, e) => ({...a, [e]: obj[e] }), {})
    const formData = pickValues('wineID', 'offerDateTime', 'numOffered')(values)
    const config = {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(formData)
    }
    api.admin.newOffer(config)
      .then(resp=>this.processNewOffer(resp))
  }

  processNewOffer = (response) => {
    if (response.status === 200) {
      this.setState({
        mode: 'view'
      })
      this.props.updateData();
    } else {
      //error handle newOffer failed!
    }
  }

  setMode = (mode) => {
    this.setState({
      mode: mode
    })
  }

  deleteOffer = (event, id) => {
    event.persist() //to help with button enable in other function on failed destroy
    event.target.disabled = true
    const config = {
                  method: 'DELETE',
                  credentials: 'include'
    }

    api.admin.deleteOffer(id, config)
      .then(resp=>this.afterDelete(event, resp))
  }

  afterDelete = (event, response) => {
    if (response.status === 200) {
      this.props.updateData()
    } else {
      event.target.disabled = false
      //Other error display about offer not successfully deleted here
    }
  }

  broadcastOffer = (offerID) => {
    console.log(`Going to view to broadcast Offer via BottleRocket SMS for offer ${offerID}!`)
    this.setState({
      mode: 'broadcast',
      selectedOffer: offerID
    })
  }

  render() {
    switch (this.state.mode) {
      case 'create':
        return (
          <NewOfferForm 
            newOffer={this.submitNewOffer} 
            wines={this.props.wines} 
            setMode={this.setMode}
        />
        )
      case 'broadcast':
        return <>Broadcast using Twilio Offer #{this.state.selectedOffer}
                <button 
                  type='button' 
                  onClick={()=>this.setMode('view')}
                >
                Cancel
                </button></>
      default:            //default is view
        return (
          <>
            <div>
              <button onClick={()=>this.setMode('create')} >Create New Offer</button>
            </div>
            <div className='row'>
            {this.props.offers.map(offer => (
              <div className='col s12 m3'>
              <Offer 
                                              key={offer.id} 
                                              offerID={offer.id} 
                                              deleteOffer={this.deleteOffer} 
                                              broadcastOffer={this.broadcastOffer}
                                              offer={offer.attributes} />
                                              </div>))}
                                              </div>
          </>
        )
    }
  }
}

export default OffersPanel