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
import InjectedCheckoutForm from "../Forms/injected-checkout-form";

const Checkout = (props) => {
  const { addedItems, totalAmount, token } = props;
  var apiKey =
    "pk_test_51LhsdnGCTNDeFrTZI9H9kLQWpzYfNXNFww1rUvYc4Yzh9cZaO44KQqterVrEuI0ne1w9dnGDTqsEO11yi7GCHvhn00rGEnAYLF";
  const [key, setKey] = useState(apiKey);
  const stripePromise = loadStripe(
    "pk_test_51LhsdnGCTNDeFrTZI9H9kLQWpzYfNXNFww1rUvYc4Yzh9cZaO44KQqterVrEuI0ne1w9dnGDTqsEO11yi7GCHvhn00rGEnAYLF"
  );
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const [name, setName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  return (
    <>
      <div className="home_main-section">
        <Header />
        <main>
          <div className="main__wrapper">
            <div className="main__banner--section our__product__banner">
              <div className="overlay"></div>
              <div className="banner__content">
                <h1>Check Out</h1>
              </div>
            </div>
            {showLoader && (
              <Loader showLoader={showLoader} loaderColor={"#af6fac"} />
            )}
            <div className="checkout__form__section">
              <Container>
                <Row>
                  <Col sm={12}>
                    <Elements stripe={stripePromise}>
                      <InjectedCheckoutForm />
                    </Elements>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </main>
        <Footer />
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
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
