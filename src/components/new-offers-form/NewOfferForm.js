import React from 'react'
import './new-offers.styles.scss'

export default class NewOfferForm extends React.PureComponent {
  state = {
    offerDateTime: new Date(Date.now()).toISOString().slice(0,11)+ '16:45',
    maxForThisWine: null,
    numOffered: 1,
    wineSelected: false,
    wineID: this.props.wines[0].id
  }


  handleChange = (event) => {
    const newState = {}
    const ele = event.target

    if (ele.value === 'choose') {
      newState.wineSelected = false  //to disable rest of form if no wine selected
    } else {
      if (ele.type === 'checkbox') {
          newState[ele.name] = ele.checked
      } else {
          newState[ele.name]= ele.value
      }
      if (ele.name === 'wineID') {
        newState.wineSelected = true      //otherwise enable rest of form
        newState.maxForThisWine = this.props.wines.find(wine=>wine.id === ele.value).attributes.inventory
        if (newState.maxForThisWine < this.state.numOffered) {
          newState.numOffered = newState.maxForThisWine
        }
      }
    }
    this.setState(newState)
  }

  render() {
    const {wines, newOffer, setMode} = this.props
    const { offerDateTime } = this.state
    const disabled = !this.state.wineSelected

    return (
      <div className='new-offer-container'>
        <h1>Create New Offer</h1>
        <form onSubmit={(e)=>newOffer(e, this.state)} >

          <div className='row'>
          <select
              className="browser-default"
              name='wineID'
              onChange={this.handleChange}
              required
          >
            <option value='choose'
             label="Choose a Wine for this Offer" />
            {wines.map(wine=>
              <option key={wine.id}
                    value={wine.id}>
                      {`${wine.attributes.fullName} (${wine.attributes.inventory}btls)`}
                </option>  
              )}      
          </select>

          <div className='row offer-fields'>
          <div className='col s3 text-center'>
          <label htmlFor='numOffered'>Number to Offer</label>
          <input name='numOffered'
              className='input-field text-center'
              onChange={this.handleChange} 
              min='1' 
              type='number'
              value={this.state.numOffered}
              max={this.state.maxForThisWine}
              disabled={disabled}
          />
          </div>

          <div className='col s9 text-center'>
            <label htmlFor='offer-time'>Choose a Date/Time to SMS this Offer:</label>

            <input type='datetime-local' 
                id='offer-time'
                name='offerDateTime'
                value={offerDateTime}
                disabled={disabled}
                onChange={this.handleChange}
            />
          </div>
          <div class="input-field col s6">
              <textarea name='smsText' onChange={this.handleChange} id="textarea1" class="materialize-textarea"></textarea>
                <label for="textarea1">Text Content of SMS Offer</label>
           </div>
          </div>
          
          <div className='buttons'>
            <button
              className='btn red lighten-3'
              onClick={()=>setMode('view')} >
            Cancel
            </button>
            
            <button
              className='btn waves-effect waves-light'
              disabled={disabled}
              type='submit'>
            Save Offer
            <i className="material-icons right">send</i>
            </button>
          </div>
          </div>
        </form>
      </div>
    )
  }
}