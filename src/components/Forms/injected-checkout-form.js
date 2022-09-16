import React from "react";
import { ElementsConsumer } from "@stripe/react-stripe-js";
import { connect } from "react-redux";
import CheckoutForm from "./checkout-form";

const InjectedCheckoutForm = () => {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
};
export default InjectedCheckoutForm;
