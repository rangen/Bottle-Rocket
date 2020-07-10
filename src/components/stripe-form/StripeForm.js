import React from 'react'
import {CardElement} from '@stripe/react-stripe-js';


const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: 'black',
      color: 'black',
      fontWeight: 500,
      padding: '50px',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {color: '#fce883'},
      '::placeholder': {color: 'grey'},
    },
    invalid: {
      iconColor: 'red',
      color: 'red',
    },
  },
  hidePostalCode: true
};


const StripeForm = () => {
  return (
    <div>
        <CardElement options={CARD_OPTIONS} />
    </div>
  )
}

export default StripeForm
