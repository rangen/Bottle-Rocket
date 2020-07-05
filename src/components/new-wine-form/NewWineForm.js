import React from 'react';
import './new-wine-form.styles.scss';
import Input from '../input/input';

export default class NewWineForm extends React.PureComponent {
  
  state = {
    fullName: '',
    price: null,
    inventory: null,
    color: null,
    natural: false,
    organic: false,
    biodynamic: false
  }

  handleChange = (event) => {
    const newState = {}
    const ele = event.target

    if (ele.type === 'checkbox') {
        newState[ele.name] = ele.checked
    } else {
        newState[ele.name]= ele.value
    }
    
    this.setState(newState)
  }

  render() {
    const { newWine } = this.props
    const { fullName, price, inventory, color, natural, organic, biodynamic } = this.state
    const chg = this.handleChange

    return (
      <div className='group'>
        <h3>Add New Wine</h3>
        <form onSubmit={(e) => newWine(e, this.state)}>
          <Input name="fullName" 
            chg={chg} 
            label='Wine Name (full)' 
          />
          <Input 
            name='price'
            chg={chg} 
            label='Price:'
          />
          <Input 
            name='inventory' 
            chg={chg} 
            label='Inventory:'
          />
          <Input 
            name='color' 
            chg={chg} 
            label='Color:'
          />
          <label>Natural:
            <input 
              name='natural' 
              type='checkbox' 
              checked={natural} 
              onChange={chg} 
            />
          </label>
          <label>Organic:
            <input 
              name='organic' 
              type='checkbox' 
              checked={organic} 
              onChange={chg} 
            />
          </label>
          <label>Biodynamic:
            <input 
              name='biodynamic' 
              type='checkbox' 
              checked={biodynamic} 
              onChange={chg} 
            />
          </label>
          <input type='submit' />
        </form>
      </div>
    )
  }
}