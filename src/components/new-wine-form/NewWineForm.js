import React from 'react';
import './new-wine-form.styles.scss';
import Input from '../input/input';

export default class NewWineForm extends React.PureComponent {
  
  state = {
    fullName: '',
    price: "",
    inventory: "",
    color: "",
    natural: false,
    organic: false,
    biodynamic: false,
    image: ''
  }
  handlePreviewImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0])
      });
    }
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
    const { fullName, price, inventory, color, natural, organic, biodynamic, image } = this.state
    const chg = this.handleChange

    return (
      <div className='group'>
        <h3>Add New Wine</h3>
        <form onSubmit={(e) => newWine(e, this.state)}>
        <Input name="full_name" value={fullName} chg={chg} label='Full Name:' />
        <Input name='price' value={price} chg={chg} label='Price:'/>
        <Input name='inventory'  value={inventory} chg={chg} label='Inventory:'/>
        <Input name='color' value={color} chg={chg} label='Color:'/>
        <label>Natural:
        <input name='natural' value={natural} type='checkbox' checked={natural} onChange={chg} />
        </label>
        <label>Organic:
          <input name='organic' value={organic} type='checkbox' checked={organic} onChange={chg} />
        </label>
        <label>Biodynamic:
          <input name='biodynamic' value={biodynamic} type='checkbox' checked={biodynamic} onChange={chg} />
        </label>
        <label>Image:</label>
        <input type='file' name='image' accept="image/*" onChange={this.handlePreviewImage}/>
        <img src={image} alt="" style={{width: '10%', height: "10%"}} />
        <input type='submit' />
        </form>
      </div>
    )
  }
}

