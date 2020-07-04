import React, { Component } from 'react'
import NewOfferForm from '../../components/new-offers-form/NewOfferForm'
import Offer from '../../components/offer/Offer'

export class OffersPanel extends Component {
  state = {
    offers: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/admin/data', {credentials: 'include'})
    .then(res => res.json())
    .then(json => {
      this.setState({
        offers: json.offers.data,
        wines: json.wines.data
      })
    })
  }

  getNameByWineId = () => {
    let wines = [...this.state.wines]
    let offers = [...this.state.offers]
    offers.forEach(offer => {
      offer.fullName = wines.find(wine=> wine.id === offer.wine_id).attributes.fullName
    })
  }


  render() {
    return (
      <div>
        <NewOfferForm offers={this.state.offers} getNameByWineId={this.getNameByWineId}/>
        <h1>Previous Offers</h1>
        {this.state.offers.map(offer => <Offer key={offer.id} offer={offer} />)}
      </div>
    )
  }
}

export default OffersPanel
