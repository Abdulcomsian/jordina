import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/index";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { connect } from "react-redux";
import images from "../../constant/images";
import Loader from "../Loader/index";
import { checkOutPayment } from "../../redux/action/cartAction";
import InjectedPaymentForm from "../Forms/injected-payment-form";

const CheckoutDiesases = (props) => {
  const { addedItems, totalAmount, token, onGivePayment,handlePayment } = props;
  var apiKey =
    "pk_test_51LhsdnGCTNDeFrTZI9H9kLQWpzYfNXNFww1rUvYc4Yzh9cZaO44KQqterVrEuI0ne1w9dnGDTqsEO11yi7GCHvhn00rGEnAYLF";
  const [key, setKey] = useState(apiKey);
  const stripePromise = loadStripe(
    "pk_test_51LhsdnGCTNDeFrTZI9H9kLQWpzYfNXNFww1rUvYc4Yzh9cZaO44KQqterVrEuI0ne1w9dnGDTqsEO11yi7GCHvhn00rGEnAYLF"
  );

  const [showLoader, setShowLoader] = useState(false);

  return (
    <>
      <div className="home_main-section">
        <main>
          <div className="main__wrapper">
            <div className="checkout__form__section">
              <Container>
                <Row>
                  <Col sm={12}>
                    <Elements stripe={stripePromise}>
                      <InjectedPaymentForm onGivePayment={onGivePayment} handlePayment={handlePayment} />
                    </Elements>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  addedItems: state.cartReducer.addedItems,
  totalAmount: state.cartReducer.total,
});
const mapDispatchToProps = (dispatch) => ({
  paymentHandler: (amount, apiKey, token) =>
    dispatch(checkOutPayment(amount, apiKey, token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutDiesases);
