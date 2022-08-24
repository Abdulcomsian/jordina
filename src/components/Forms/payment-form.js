import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Images from "../../constant/images/index";
import "./style.css";

const PaymentForm = ({ onGivePayment }) => {
  const [conditionAccept, setConditionAccept] = useState(false);
  const handleCondition = () =>{
    setConditionAccept(true)
  }
  return (
    <Container>
      <Row style={{justifyContent:"center"}}>
        <Col lg={6}>
        <div className="form_box">
      <h3 className="title">Start Your Apostrophe Visit</h3>
      <form>
        <div className="form-group">
          <div className="payment_icon-card">
            <p>Pay with</p>
            <img src={Images.paymentIcon} className="img-fluid" />
          </div>
          <div className="style_divider text-center">
            <span>OR</span>
          </div>
          <div className="card__number--input">
            <input placeholder="Card number" className="form-control" />
            <div className="month__year--ccv--input">
              <div className="month__year--input">
                <input maxLength={2} placeholder="MM" />
                <span>/</span>
                <input maxLength={2} placeholder="YY" />
                <input maxLength={3} placeholder="CVC" />
              </div>
            </div>
          </div>
          <div className="checkbox__input--label">
            <input type="checkbox"  onChange={handleCondition}/>
            <label>
              I accept Terms of Service, Medical Notice of Privacy Practices,
              and Telehealth Consent
            </label>
          </div>
        </div>

        <Button
          className="common-btn"
          onClick={onGivePayment}
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
