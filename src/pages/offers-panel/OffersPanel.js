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
          {this.props.offers.map(offer => <Offer key={offer.id} offerID={offer.id} deleteOffer={this.deleteOffer} offer={offer.attributes} />)}
        </>
      )
    }
  }
}

export default OffersPanel