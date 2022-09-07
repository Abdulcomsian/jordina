import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const SkinTestForm = ({
  onGetPayment,
  skinLook,
  skinPores,
  skinFeel,
  skinPimple,
  skinFeelFacial,
  skinExposed,
}) => {
  return (
    <Container fluid>
      <Row style={{ justifyContent: "center" }}>
        <Col lg={6}>
          <div className="form_box skin__test--form">
            <h2 className="text-center title">More Question About Your Skin</h2>
            <form>
              <div className="form-group">
                <select className="form-control" onChange={skinLook}>
                  <option value="How does your skin look?">
                    How does your skin look?
                  </option>
                  <option value="does not really shine">
                    does not really shine
                  </option>
                  <option value="is dull and shows some flaking (dry patches)">
                    is dull and shows some flaking (dry patches)
                  </option>
                  <option value="shines on the nose">shines on the nose</option>
                  <option value="shines on the entire face">
                    shines on the entire face
                  </option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control" onChange={skinPores}>
                  <option value="How are your skin pores ?">
                    How are your skin pores ?
                  </option>
                  <option value="not really noticeable">
                    not really noticeable
                  </option>
                  <option value="large and visible on all face ( nose, cheeks..)">
                    large and visible on all face ( nose, cheeks..)
                  </option>
                  <option value="large and visible on nose but not visible on cheeks">
                    large and visible on nose but not visible on cheeks
                  </option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control" onChange={skinFeel}>
                  <option value="How does your skin feel when touched?">
                    How does your skin feel when touched?
                  </option>
                  <option value="supple and cool">supple and cool</option>
                  <option value="dry and thin">dry and thin</option>
                  <option value="oily on forehead and nose">
                    oily on forehead and nose
                  </option>
                  <option value="oily on entire face">
                    oily on entire face
                  </option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control" onChange={skinPimple}>
                  <option value="How often do you have pimples?">
                    How often do you have pimples?
                  </option>
                  <option value="Never">Never</option>
                  <option value="sometimes">sometimes</option>
                  <option value="very often">very often</option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control" onChange={skinFeelFacial}>
                  <option
                    value="How does your skin feel after applying a grainy facial
                    scrub?"
                  >
                    How does your skin feel after applying a grainy facial
                    scrub?
                  </option>
                  <option value="ouch - pink and irritated">
                    ouch - pink and irritated
                  </option>
                  <option value="I can tolerate it several times a week with no problem">
                    I can tolerate it several times a week with no problem
                  </option>
                  <option value="once every week is fine">
                    once every week is fine
                  </option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control" onChange={skinExposed}>
                  <option value="What happens when your skin is exposed to sun?">
                    What happens when your skin is exposed to sun?
                  </option>
                  <option value="reddens">reddens</option>
                  <option value="burns">burns</option>
                  <option value="tans">tans</option>
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
