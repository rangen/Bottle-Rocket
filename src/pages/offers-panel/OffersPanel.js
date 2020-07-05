import React, { Component } from 'react'
import NewOfferForm from '../../components/new-offers-form/NewOfferForm'
import Offer from '../../components/offer/Offer'

export class OffersPanel extends Component {
  state = {
    offers: [],
    creatingNewOffer: false
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
          wines={this.state.wines} 
          cancel={this.toggleCreatingNew}
          users={this.state.users} />
      )
    } else {
      return (
        <>
          <h1>Offers<button onClick={this.toggleCreatingNew} >Create New Offer</button></h1>
          {this.state.offers.map(offer => <Offer key={offer.id} offer={offer.attributes} />)}
        </>
      )
    }
  }
}

export default OffersPanel