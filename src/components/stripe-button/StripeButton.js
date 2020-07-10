import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51H21vEL37GrW3rTgFD9IYQ3uTzcm66S8GU6ee4khfRinCXNOicIaazI6l0sLxXlwMSdPTvd3Q0aiPTe09XOLE4Gl00snYcwan7' 
  const onToken = token => {
    console.log(token)
    alert('payment successful')
  }
  return (
    <div>
      <StripeCheckout 
        label='Add Credit Card'
        name='bottlerocket'
        billingaddress
        shippingaddress
        description='Securely stored with Stripe'
        amount={priceForStripe}
        panelLabel='Register'
        token={onToken}
        stripekey={publishableKey}
      />
    </div>
  )
}

export default StripeButton
