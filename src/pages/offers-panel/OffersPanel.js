import React, { Component } from 'react'
import NewOfferForm from '../../components/new-offers-form/NewOfferForm'
import Offer from '../../components/offer/Offer'

export class OffersPanel extends Component {
  state = {
    offers: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/admin/data', {credentials: 'include'})
      .then(res => res.json())
      .then(json => this.setState({
        offers: json.offers.data,
        wines: json.wines.data,
        users: json.users.data
      }))
  }

  submitNewOffer = (event, values) => {
    event.preventDefault();
    console.log(values)
    
  }

  render() {
    if (this.state.offers) {
      return (
        <>
          <NewOfferForm newOffer={this.submitNewOffer} wines={this.state.wines} users={this.state.users} />
          <h1>Previous Offers</h1>
          {this.state.offers.map(offer => <Offer key={offer.id} offer={offer.attributes} />)}
        </>
      )
    } else {
      return <>Offers Panel here</>
    }
  }
}

export default OffersPanel
