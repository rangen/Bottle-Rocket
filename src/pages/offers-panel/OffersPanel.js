import React, { Component } from 'react'
import NewOfferForm from '../../components/new-offers-form/NewOfferForm'
import Offer from '../../components/offer/Offer'
import api from '../../services/api'
import './offers-panel.styles.scss'

class OffersPanel extends Component {
  state = {
    selectedOffer: null,
    mode: 'view',  // view broadcast create
    
  }

  submitNewOffer = (event, values) => {
    event.preventDefault();

    const formData = new FormData(event.target)
    formData.append('offerDateTime', new Date(values.offerDateTime).toGMTString())

    const config = {
            method: 'POST',
            credentials: 'include',
            body: formData
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
            <div className='button-container'>
              <button className="btn waves-effect waves-light" onClick={()=>this.setMode('create')} >Setup New BottleRocket Offer</button>
            </div>
            <div className='row'>
              {this.props.offers.map(offer => (
                <div className='col s6 m4 l3'>
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