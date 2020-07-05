import React, { Component } from 'react'
import NewOfferForm from '../../components/new-offers-form/NewOfferForm'
import Offer from '../../components/offer/Offer'

export class OffersPanel extends Component {
  state = {
    creatingNewOffer: false,
    selectedOffer: null
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
    fetch('http://localhost:3000/offers/new', config)
      .then(resp=>this.processNewOffer(resp))
  }

  processNewOffer = (response) => {
    if (response.status === 200) {
      this.setState({
        creatingNewOffer: false
      })
      this.props.updateData();
    } else {
      //error handle newOffer failed!
    }
  }

  toggleCreatingNew = () => {
    this.setState({
      creatingNewOffer: !this.state.creatingNewOffer
    })
  }

  deleteOffer = (event, id) => {
    event.persist() //to help with button enable in other function on failed destroy
    event.target.disabled = true
    const config = {
                  method: 'DELETE',
                  credentials: 'include'
    }

    fetch(`http://localhost:3000/offers/${id}`, config)
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
  }

  render() {
    if (this.state.creatingNewOffer) {
      return (
        <NewOfferForm 
          newOffer={this.submitNewOffer} 
          wines={this.props.wines} 
          cancel={this.toggleCreatingNew}
       />
      )
    } else {
      return (
        <>
          <div>
            <button onClick={this.toggleCreatingNew} >Create New Offer</button>
          </div>
          {this.props.offers.map(offer => <Offer 
                                            key={offer.id} 
                                            offerID={offer.id} 
                                            deleteOffer={this.deleteOffer} 
                                            broadcastOffer={this.broadcastOffer}
                                            offer={offer.attributes} />)}
        </>
      )
    }
  }
}

export default OffersPanel