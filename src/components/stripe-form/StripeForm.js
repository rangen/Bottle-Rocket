import React from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';


const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: 'black',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {color: '#fce883'},
      '::placeholder': {color: '#87bbfd'},
    },
    invalid: {
      iconColor: 'red',
      color: 'red',
    },
  },
  hidePostalCode: true
};


const StripeForm = () => {
  const stripe = useStripe();
  return (
    <div>
        <CardElement options={CARD_OPTIONS} />
    </div>
  )
}

export default StripeForm
