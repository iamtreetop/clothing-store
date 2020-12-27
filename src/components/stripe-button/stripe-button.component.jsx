import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I2o7DCsrPOeY8yojiO5pb93LIKxEIkpLyM9KQi3m7xcnKJy3JRvpft5XsU2qz8NfoM9ziHEuPYJ3nM6DQPsZxvj00CJa0PZYF'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;