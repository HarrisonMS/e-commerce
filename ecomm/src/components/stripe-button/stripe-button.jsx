import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HwCyTI4n8OKXLShtAJg8vMgE3GXdILEDOptRje4OHMo84DQQDzE7agaZVnBPHu3TZrJ5tEtN6dQmyuRHbYbuWil00lXXnjulb";

  const onToken = (token) => {
    console.log(token);
    alert("Test payment succesful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Royal Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
