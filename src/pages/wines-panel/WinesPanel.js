import React, { PureComponent } from 'react'
import NewWineForm from '../../components/new-wine-form/NewWineForm'
import Wine from '../../components/wine/Wine'

export class WinesPanel extends PureComponent {
  state = {
    mode: 'view'  // view add
  }

  submitNewWine = (event, image) => {
    event.preventDefault();

    // const pickValues = (...keys) => obj => keys.reduce((a, e) => ({...a, [e]: obj[e] }), {})
    // const formData = pickValues('wineID', 'offerDateTime', 'numOffered')(values)
    const formData = new FormData(event.target)
    formData.append("image", image)

    const config = {
            method: 'POST',
            credentials: 'include',
            body: formData
    }
    
    fetch('http://localhost:3000/wines/new', config)
      .then(resp=>this.processNewWine(resp))
  }

  processNewWine = (response) => {
    if (response.status === 200) {
      this.setState({
        mode: 'view'
      })
      this.props.updateData();
    } else {
      //error handle newWine failed!
    }
  }

  setMode = (mode) => {
    this.setState({
      mode: mode
    })
  }

  deleteWine = (event, id) => {
    event.persist() //to help with button enable in other function on failed destroy
    event.target.disabled = true
    const config = {
                  method: 'DELETE',
                  credentials: 'include'
    }

    fetch(`http://localhost:3000/wines/${id}`, config)
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
    switch (this.state.mode) {
      case 'add':
        return (
          <NewWineForm 
            newWine={this.submitNewWine}
            setMode={this.setMode}
        />
        )
      default:            //default is view
        return (
          <>
            <div>
              <button onClick={()=>this.setMode('add')} >Add New Wine</button>
            </div>
            {this.props.wines.map(wine => <Wine 
                                              key={wine.id}
                                              wine={wine}
                                              wineID={wine.id} 
                                              deleteWine={this.deleteWine} 
                                            />
                                    )}
          </>
        )
    }
  }
}

export default WinesPanel