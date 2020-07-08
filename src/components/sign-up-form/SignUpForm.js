import React , { PureComponent} from 'react'
import './sign-up-form.styles.scss'
import { Grid, Select, MenuItem, Button } from '@material-ui/core'
// import CustomButton from '../custom-button/CustomButton'
import Input from '../input/input'

import states from '../../states'

export default class SignUpForm extends PureComponent {
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

  
  
  render() {
    return (
      <div className='group'>
        <form onSubmit={(e)=>this.props.submit(e, this.state)}>
            {/* More elegant solution for this soon */}
              <Input type='text' name='firstName' value={this.state.firstName} label='First Name:' handleChange={this.inputChanged} />
              <Input type='text' name='lastName' value={this.state.lastName} label='Last Name:' handleChange={this.inputChanged} />
              <Input type='text' name='email' value={this.state.email} label='Email:' handleChange={this.inputChanged} />
              <Input type='text' name='mobileNumber' value={this.state.mobileNumber} label='Phone Number:'  handleChange={this.inputChanged} />
              <Input type='password' name='password' value={this.state.password} label='Password:' handleChange={this.inputChanged} />

              <Input type='text' name='shippingAddress1' value={this.state.shippingAddress1} label='Address:' handleChange={this.inputChanged} />
              <Input type='text' name='shippingAddress2' value={this.state.shippingAddress2} label='Apt / Other (revise this text):' handleChange={this.inputChanged} />
              <Input type='text' name='city' value={this.state.city} label='City:' handleChange={this.inputChanged} />
                <Input type='number' name='zipcode' value={this.state.zipcode} label='ZIP Code:'  handleChange={this.inputChanged} />
                <select className="browser-default" name='state' onChange={(e)=>this.inputChanged(e)} value={this.state.state}>
                {Object.entries(states).map(([abb, name])=>
                  (<option key={abb} value={abb}>{name}</option>)
                  )}
                  </select>
                {Object.entries(this.props.errors).map(err=><h3>{`${err[0]} => ${err[1][0]}`}</h3>)}
                <div className='buttons'>
                <button className='btn red'>Cancel</button>
                <button className="btn waves-effect waves-light light-blue accent-4" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button> 
                </div>
        </form>
            </div>
            )
          }
        }
        
        
        // <TextField variant="outlined" className='form-input' name='firstName' value={this.state.firstName} label='First Name:' chg={(e) => this.inputChanged(e)} type='text' />
        // <TextField className='form-input' name='lastName' value={this.state.lastName} label='Last Name:' chg={this.inputChanged} />
        // <TextField className='form-input' name='email' value={this.state.email} label='Email:' inputType='email' chg={this.inputChanged} />
        // <TextField className='form-input' name='password' value={this.state.password} label='Password (consider alternate method):' inputType='password' chg={this.inputChanged} />
        // <TextField className='form-input' name='mobileNumber' value={this.state.mobileNumber} label='Cell Phone:' inputType='tel' chg={this.inputChanged} />
        // <TextField className='form-input' name='shippingAddress1' value={this.state.shippingAddress1} label='Address:' chg={this.inputChanged} />
        // <TextField className='form-input' name='shippingAddress2' value={this.state.shippingAddress2} label='Apt / Other (revise this text):' chg={this.inputChanged} />
        // <TextField className='form-input' name='city' value={this.state.city} label='City:' chg={this.inputChanged} />
        // <TextField className='form-input' name='zipcode' value={this.state.zipcode} label='ZIP Code:' inputType='number' chg={this.inputChanged} />
        