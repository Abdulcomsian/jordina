import React from "react";
import { ElementsConsumer } from "@stripe/react-stripe-js";
import { connect } from "react-redux";
import PaymentFrom from "./payment-form";

const InjectedPaymentForm = ({onGivePayment,handlePayment}) => {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <PaymentFrom stripe={stripe} elements={elements} onGivePayment={onGivePayment} handlePayment={handlePayment}/>
      )}
    </ElementsConsumer>
  );
};
export default InjectedPaymentForm;
