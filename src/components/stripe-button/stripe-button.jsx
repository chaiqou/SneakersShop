import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton  = ({price}) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51KMXDdKcWcCihLjsQGKUHFzbN0BeSgzGDu07jlDORj2E1mocyI4XLLxtuaoIvadh9SWdrll2VNCY1Tosi0rRRESm00t7eCyiYY'
   const onToken = token => {
    console.log(token)
   }
   return(
     <StripeCheckout
      label='Pay Now'
      name='Talga Ltd.'
      billingAddress
      shippingAddress
      description={`You have to pay ${price}$`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
     ></StripeCheckout>
 
   	)
};


export default StripeCheckoutButton