import React , { PureComponent} from 'react'
import './form-input.styles.scss'
import Input from '../input/input'

import states from '../../states'
const rootURL = 'http://localhost:3000'


export default class FormInput extends PureComponent {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '',
    shippingAddress1: '',
    shippingAddress2: '',
    city: '',
    zipcode: '',
    state: "CA"
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitNewUser = (e) => {
    e.preventDefault();
    console.dir(this.state)
    const data = JSON.stringify(this.state);
    const target = `${rootURL}/subscriptions/new`
    
    const config = {
                  method: "POST",
                  body: data,
                  headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                        }
                }
    fetch(target, config)
      .then(resp=>resp.json())
      .then(json=>console.log(json))
  }

  render() {
    return (
      <div className='group'>
        <form onSubmit={(e)=>this.submitNewUser(e)}>
          <Input name='firstName' value={this.state.firstName} label='First Name:' chg={this.inputChanged} />
          <Input name='lastName' value={this.state.lastName} label='Last Name:' chg={this.inputChanged} />
          <Input name='email' value={this.state.email} label='Email:' inputType='email' chg={this.inputChanged} />
          <Input name='password' value={this.state.password} label='Password (consider alternate method):' inputType='password' chg={this.inputChanged} />
          <Input name='mobileNumber' value={this.state.mobileNumber} label='Cell Phone:' inputType='tel' chg={this.inputChanged} />
          <Input name='shippingAddress1' value={this.state.shippingAddress1} label='Address:' chg={this.inputChanged} />
          <Input name='shippingAddress2' value={this.state.shippingAddress2} label='Apt / Other (revise this text):' chg={this.inputChanged} />
          <Input name='city' value={this.state.city} label='City:' chg={this.inputChanged} />
          <Input name='zipcode' value={this.state.zipcode} label='ZIP Code:' inputType='number' chg={this.inputChanged} />

            <select name='state' onChange={(e)=>this.inputChanged(e)} value={this.state.state} className='form-input'>
            {Object.entries(states).map(([abb, name])=>
                          (<option key={abb} value={abb}>{name}</option>)
                      )}
          </select>
          <input type='submit' />
        </form>
      </div>
    )
  }
}