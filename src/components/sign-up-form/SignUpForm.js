import React , { PureComponent} from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import StripeForm from '../stripe-form/StripeForm'
import './sign-up-form.styles.scss'
import Input from '../input/input'
import states from '../../states'
const stripePromise = loadStripe('pk_test_51H21vEL37GrW3rTgFD9IYQ3uTzcm66S8GU6ee4khfRinCXNOicIaazI6l0sLxXlwMSdPTvd3Q0aiPTe09XOLE4Gl00snYcwan7')


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
    state: "CA",
    isProcessing: false
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  
  
  render() {
    return (
      <div className='sign-up-container'>
        <form onSubmit={(e)=>this.props.submit(e, this.state)}>
            {/* More elegant solution for this soon */}
            <div className='row'>
              <div className='col s12'>
              {Object.entries(this.props.errors).map(err=><h4 className='error'>{`Error: ${err[0]} ${err[1][0]}!`}</h4>)}
              <Input type='text' autoFocus icon='phone_android' classOverRide='input-field col s5 offset-s1' name='mobileNumber' value={this.state.mobileNumber} label='Phone Number:'  handleChange={this.inputChanged} />
              <Input type='text' name='email' classOverRide='input-field col s5' value={this.state.email} label='Email:' handleChange={this.inputChanged} />
              <Input type='text' icon='person' name='firstName' classOverRide='input-field col s5 offset-s1' value={this.state.firstName} label='First Name:' handleChange={this.inputChanged} />
              <Input type='text' name='lastName' classOverRide='input-field col s5' value={this.state.lastName} label='Last Name:' handleChange={this.inputChanged} />
              <Input type='password' name='password' classOverRide='input-field col s6 offset-s2' value={this.state.password} label='Password:' handleChange={this.inputChanged} />
              <Input type='text' icon='local_shipping' name='shippingAddress1' classOverRide='input-field col s8 offset-s1' value={this.state.shippingAddress1} label='Address:' handleChange={this.inputChanged} />
              <Input type='text' name='shippingAddress2' classOverRide='input-field col s7 offset-s2' value={this.state.shippingAddress2} label='Apt / Other (revise this text):' handleChange={this.inputChanged} />
              <Input type='text' name='city' classOverRide='input-field col s4 offset-s2' value={this.state.city} label='City:' handleChange={this.inputChanged} />
              <div className="input-field col s2">
                <select className='browser-default' name='state' onChange={(e)=>this.inputChanged(e)} value={this.state.state}>
                    {Object.entries(states).map(([abb, name])=>
                      (<option key={abb} value={abb}>{abb}</option>)
                      )}
                </select>
              </div>
              <Input type='text' name='zipcode' classOverRide='input-field col s2' value={this.state.zipcode} label='ZIP Code:'  handleChange={this.inputChanged} />
                <br></br>
                <Elements stripe={stripePromise}>
                {({stripe, elements}) => (
                  <StripeForm  stripe={stripe} elements={elements} />
                  )}
                  </Elements>
                  </div>
              </div>
                <div className='buttons'>
                  <button className='btn red lighten-3'>Cancel</button>
                  <button className="btn waves-effect waves-light" type="submit" name="action">Sign Up
                    <i className="material-icons right">send</i>
                </button> 
                </div>
        </form>
            </div>
            )
          }
        }
        
        
