import React, { Component } from 'react'
import NewOfferForm from '../../components/new-offers-form/NewOfferForm'
import Offer from '../../components/offer/Offer'

export class OffersPanel extends Component {
  state = {
    offers: [],
    creatingNewOffer: false,
    wines: []
  }

  submitNewOffer = (event, values) => {
    event.preventDefault();
    console.dir(values)
    const config = {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(values)
    }
    fetch('http://localhost:3000/offers/new', config)
      .then(resp=>resp.json())
      .then(json=>this.processNewAttempt(json))    
  }

  processNewAttempt = (json) => {
    //only after success       if new offer submit failed, data SHOULD be g2g
    this.setState({
      creatingNewOffer: false
    })
    this.props.updateData();
  }

  toggleCreatingNew = () => {
    this.setState({
      creatingNewOffer: !this.state.creatingNewOffer
    })
  }

  render() {
    if (this.state.creatingNewOffer) {
      return (
        <NewOfferForm 
          newOffer={this.submitNewOffer} 
          wines={this.props.wines} 
          cancel={this.toggleCreatingNew}
          users={this.props.users} />
      )
    } else {
      return (
        <>
          <h1>Offers<button onClick={this.toggleCreatingNew} >Create New Offer</button></h1>
          {this.props.offers.map(offer => <Offer key={offer.id} offer={offer.attributes} />)}
        </>
      )
    }
  }
}

export default OffersPanel