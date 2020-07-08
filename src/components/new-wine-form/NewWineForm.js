import React from 'react';
import './new-wine-form.styles.scss';
import Input from '../input/input';
// import * as ActiveStorage from '@rails/activestorage'
// ActiveStorage.start()

export default class NewWineForm extends React.PureComponent {
  
  state = {
    fullName: '',
    price: "",
    inventory: "",
    color: "",
    natural: false,
    organic: false,
    biodynamic: false,
    image: null
  }

  handlePreviewImage = (event) => {
    const imgFile = event.target.files[0]
    if (imgFile) { //way to add code to limit to one file in picker?
      this.setState({
        image: imgFile,
        preview: URL.createObjectURL(imgFile)
      }, this.props.upload(imgFile))
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
    const { newWine, hasImg } = this.props
    const { fullName, preview, price, inventory, color, natural, organic, biodynamic } = this.state
    const chg = this.handleChange

    return (
      <div className='group'>
        <h3>Add New Wine</h3>
        <form 
          action='#'
          onSubmit={(e) => newWine(e, this.state.image)}
          encType='multipart/form-data'
        >
          <input 
            type='file'
            name='image'
            accept='image/*'
            onChange={this.handlePreviewImage}
          />
          <img 
            src={preview} alt="" 
            style={{width: '20%', height: "20%"}} 
          />

          <Input 
            type='text'
            name="fullName" 
            handleChange={chg} 
            label='Wine Name (full)' 
          />
          <Input 
            type='text'
            name='price'
            handleChange={chg} 
            label='Price:'
          />
          <Input
            type='text'  
            name='inventory' 
            handleChange={chg} 
            label='Inventory:'
          />
          <Input 
            type='text'
            name='color' 
            handleChange={chg} 
            label='Color:'
          />
          <div className='checkbox-container'>
            <p>
              <label>
                <input 
                name='natural' 
                type="checkbox" 
                checked={natural} 
                onChange={chg} 
                />
                <span>Natural</span>
              </label>
            </p>
            <p>
              <label>
                <input 
                name='organic' 
                type='checkbox' 
                checked={organic} 
                onChange={chg} 
                />
                <span>Organic</span>
              </label>
            </p>
            <p>
              <label>
                <input 
                  name='biodynamic' 
                  type='checkbox' 
                  checked={biodynamic} 
                  onChange={chg} 
                />
                <span>Biodynamic</span>
              </label>
            </p>
          </div>
          <input type='submit'
            disabled={!hasImg}
          />
        </form>
      </div>
    )
  }
}

