import React, { Component } from 'react'
import NewOfferForm from '../../components/new-offers-form/NewOfferForm'
import Offer from '../../components/offer/Offer'

export class OffersPanel extends Component {
  state = {
    offers: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/admin/data')
    .then(res => res.json())
    .then(json => {
      this.setState({
        offers: json.offers,
        wines: json.wines
      })
    })
  }

  getNameByWineId = () => {
    let wines = [...this.state.wines]
    let offers = [...this.state.offers]
    let results = wines.filter(wine => offers.find(offer => wine.id === offer.wine_id))
    return results.map(result => result.full_name)
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
