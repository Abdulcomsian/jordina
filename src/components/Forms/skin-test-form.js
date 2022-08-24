import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const SkinTestForm = ({ onGetPayment }) => {
  return (
    <Container fluid>
      <Row style={{justifyContent:"center"}}>
        <Col lg={6}>
          <div className="form_box skin__test--form">
            <h2 className="text-center title">More Question About Your Skin</h2>
            <form>
              <div className="form-group">
                <select className="form-control">
                  <option>How does your skin look?</option>
                  <option>does not really shine</option>
                  <option>is dull and shows some flaking (dry patches)</option>
                  <option>shines on the nose</option>
                  <option>shines on the entire face</option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control">
                  <option>How are your skin pores ?</option>
                  <option>not really noticeable</option>
                  <option>
                    large and visible on all face ( nose, cheeks..)
                  </option>
                  <option>
                    large and visible on nose but not visible on cheeks
                  </option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control">
                  <option>How does your skin feel when touched?</option>
                  <option>supple and cool</option>
                  <option>dry and thin</option>
                  <option>oily on forehead and nose</option>
                  <option>oily on entire face</option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control">
                  <option>How often do you have pimples?</option>
                  <option>Never</option>
                  <option>sometimes</option>
                  <option>very often</option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control">
                  <option>
                    How does your skin feel after applying a grainy facial
                    scrub?
                  </option>
                  <option>ouch - pink and irritated</option>
                  <option>
                    I can tolerate it several times a week with no problem
                  </option>
                  <option>once every week is fine</option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control">
                  <option>
                    What happens when your skin is exposed to sun?
                  </option>
                  <option>reddens</option>
                  <option>burns</option>
                  <option>tans</option>
                </select>
              </div>
              <Button className="common-btn" onClick={onGetPayment}>
                Go for Payment
              </Button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default SkinTestForm;
