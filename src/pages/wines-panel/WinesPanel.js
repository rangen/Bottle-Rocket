import React from 'react';
import NewWineForm from '../../components/new-wine-form/NewWineForm';
import './wines-panel.styles.scss'

class WinesPanel extends React.Component {
  state = {
    full_name: "",
    price: "",
    inventory: "",
    color: "",
    natural: false,
    organic: false,
    biodynamic: false,
    // image: ""
  }

  handlePreviewImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0])
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleChecked = (event) => {
    const { name } = event.target
    this.setState({ [name]: !this.state.name} );
  }

  submitNewWine = (event) => {
    event.preventDefault();
    const data = JSON.stringify(this.state);
    
    const config = {
      method: "POST",
      body: data,
      credentials: 'include',
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      }
    }
    fetch('http://localhost:3000/wines/new', config)
      .then(resp=>resp.json())
      .then(console.log)
  }


  render() {
    return (
      <div>
        <h1>New Wine</h1>
          <NewWineForm
            handleChecked={this.handleChecked}
            submitNewWine={this.submitNewWine}
            handleChange={this.handleChange}
            fullName={this.state.full_name}
            price={this.state.price}
            inventory={this.state.inventory}
            color={this.state.color}
            natural={this.state.natural}
            organic={this.state.organic}
            biodynamic={this.state.biodynamic}
            image={this.state.image}
            handlePreviewImage={this.handlePreviewImage}
          />
      </div>
    )
  }
}

export default WinesPanel
