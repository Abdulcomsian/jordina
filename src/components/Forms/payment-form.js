import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Images from "../../constant/images/index";
import "./style.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";

const PaymentForm = ({ onGivePayment,handlePayment,stripe,elements }) => {
  console.log("Stripe :",stripe, "Elements :", elements);
  const [conditionAccept, setConditionAccept] = useState(false);
  const handleCondition = () => {
    setConditionAccept(true);
  };
  
  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <Col lg={6}>
          <div className="form_box">
            <h3 className="title">Start Your Apostrophe Visit</h3>
            <form onSubmit={(e,stripe,elements)=>handlePayment(e,stripe,elements)}>
              <div className="form-group">
                <div className="payment_icon-card">
                  <p>Pay with</p>
                  <img src={Images.paymentIcon} className="img-fluid" />
                </div>
                <div className="style_divider text-center">
                  <span>OR</span>
                </div>
                <CardElement
                  className="card"
                  options={{
                    style: {
                      base: {
                        backgroundColor: "white",
                      },
                    },
                  }}
                />
                <div className="checkbox__input--label">
                  <input type="checkbox" onChange={handleCondition} />
                  <label>
                    I accept Terms of Service, Medical Notice of Privacy
                    Practices, and Telehealth Consent
                  </label>
                </div>
              </div>
              <Button
              type="submit"
                className="common-btn"
                style={{
                  opacity: conditionAccept ? 1 : "0.4",
                }}
                disabled={conditionAccept ? "" : "disabled"}
              >
                Submit Payment
              </Button>
            </form>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default PaymentForm;
