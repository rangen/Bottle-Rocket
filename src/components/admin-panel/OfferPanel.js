








<NewOfferForm     wines={this.state.wines} offers={genOffers} />




genOffers = () => {
    this.state.offers.map(offer=>
        {info: [...offer, wine_name: wines.find(wine=>wine.id === offer.wine_id).full_name}
        )
        
        )
}