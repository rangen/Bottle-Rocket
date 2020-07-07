import React, { PureComponent } from 'react'
import NewWineForm from '../../components/new-wine-form/NewWineForm'
import Wine from '../../components/wine/Wine'
import { DirectUpload } from '@rails/activestorage'
import api from '../../services/api'
const API_ROOT = 'http://ancient-thicket-66765.herokuapp.com'

export class WinesPanel extends PureComponent {
  state = {
    mode: 'view',  // view add
    hasImageAttached: false,
    image: null
  }

  directUpload = (file) => {
    const upload = new DirectUpload(file, `${API_ROOT}/images/direct_upload`)
    upload.create((this.directUploadComplete))
  }
  
  directUploadComplete = (error, response) =>{
    this.setState({
      hasImageAttached: (!error && !!response.key),
      image: response.key || null
    })
  }



  submitNewWine = (event) => {
    event.preventDefault();
    if (!this.state.hasImageAttached) {
      return //block form submit if no image attached
    }
    // const pickValues = (...keys) => obj => keys.reduce((a, e) => ({...a, [e]: obj[e] }), {})
    // const formData = pickValues('wineID', 'offerDateTime', 'numOffered')(values)
    const formData = new FormData(event.target)
    formData.append("imageKey", this.state.image)
    
    const config = {
            method: 'POST',
            credentials: 'include',
            body: formData
    }
    
    api.admin.newWine(config)
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

    api.admin.deleteWine(id, config)
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
            hasImg={this.state.hasImageAttached}
            upload={this.directUpload}
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