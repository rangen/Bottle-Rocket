import React from 'react'
import './new-offers.styles.scss'

export default class NewOfferForm extends React.PureComponent {
  state = {
    offerDateTime: new Date(Date.now()).toISOString().slice(0,11)+ '16:45',
    selectedWine: null,
    allSubscribers: false,
    maxForThisWine: null,
    numOffered: 1
  }

  handleChange = (event) => {
    const newState = {}
    if (event.target.type === 'checkbox') {
        newState[event.target.name] = event.target.checked
    } else {
        newState[event.target.name]= event.target.value
    }
    if (event.target.name === 'selectedWine') {
      newState.maxForThisWine = this.props.wines.find(wine=>wine.id == +event.target.value).attributes.inventory
      if (newState.maxForThisWine < this.state.numOffered) {
        newState.numOffered = newState.maxForThisWine
      }
    }

    this.setState(newState)
  }

  render() {
    const {wines, newOffer} = this.props
    const { offerDateTime } = this.state

    return (
      <div>
        <h1>New Offer</h1>
        <form onSubmit={(e)=>newOffer(e, this.state)} >
          
          <label htmlFor='allSubscribers'>Send to All My Subscribers
            <input name='allSubscribers'
              id='allSubscribers' type='checkbox' 
              onChange={this.handleChange}
              checked={this.state.allSubscribers}
            />
          </label>


          <select 
              name='selectedWine'
              onChange={this.handleChange} >
            <optgroup label="Choose a Wine for this Offer">
            {wines.map(wine=>
              <option key={wine.id}
                    value={wine.id}>
                      {`${wine.attributes.fullName} (${wine.attributes.inventory}btls)`}
                </option>  
              )}
              </optgroup>      
          </select>


          <label htmlFor='numOffered'>Number to Offer</label>
          <input name='numOffered' 
              onChange={this.handleChange} 
              min='1' 
              type='number'
              value={this.state.numOffered}
              max={this.state.maxForThisWine}
          />


          <label htmlFor='offer-time'>Choose a Date/Time to SMS this Offer:</label>
          <input type='datetime-local' 
              id='offer-time'
              name='offerDateTime'
              value={offerDateTime}
              onChange={this.handleChange}
          />

          <button type='submit'>Save New Offer</button>
        </form>
      </div>
    )
  }
}

NewOfferForm.defaultProps = {
  users: [],
  wines: []
}
