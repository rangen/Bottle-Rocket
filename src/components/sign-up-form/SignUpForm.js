import React , { PureComponent} from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import './sign-up-form.styles.scss'
import StripeForm from '../stripe-form/StripeForm'
import Input from '../input/input'
import states from '../../states'
const stripePromise = loadStripe('pk_test_51H21vEL37GrW3rTgFD9IYQ3uTzcm66S8GU6ee4khfRinCXNOicIaazI6l0sLxXlwMSdPTvd3Q0aiPTe09XOLE4Gl00snYcwan7')

// import CustomButton from '../custom-button/CustomButton'

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
              <br></br>
                <Elements stripe={stripePromise}>
                {({stripe, elements}) => (
                  <StripeForm  stripe={stripe} elements={elements} />
                )}
                </Elements>
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
        
        
