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
  skinLookError,
  skinPoresError,
  skinFeelError,
  skinPimpleError,
  skinFeelFacialError,
  skinExposedError
}) => {
  return (
    <Container fluid>
      <Row style={{ justifyContent: "center" }}>
        <Col lg={6}>
          <div className="form_box skin__test--form">
            <h2 className="text-center title">Some Questions About Your Skin</h2>
            <form>
              <div className="form-group position-relative">
                
                <select className={skinLookError ? "form-control error"  : "form-control" }onChange={skinLook}>
                  <option selected="true" disabled="disabled">How does your skin look?</option>    
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
                  <option value="I don’t know">
                    I don’t know
                  </option>
                </select>
                {skinLookError && <span className="error-text">Please fill this Field</span>}
              </div>
              <div className="form-group position-relative">
                <select className={skinPoresError ? "form-control error"  : "form-control" } onChange={skinPores}>
                  <option selected="true" disabled="disabled">How are your skin pores ?</option>    
                  <option value="not really noticeable">
                    not really noticeable
                  </option>
                  <option value="large and visible on all face ( nose, cheeks..)">
                    large and visible on all face ( nose, cheeks..)
                  </option>
                  <option value="large and visible on nose but not visible on cheeks">
                    large and visible on nose but not visible on cheeks
                  </option>
                  <option value="I don’t know">
                    I don’t know
                  </option>
                </select>
                {skinPoresError && <span className="error-text">Please fill this Field</span>}
              </div>
              <div className="form-group position-relative">
                <select className={skinFeelError ? "form-control error"  : "form-control" } onChange={skinFeel}>
                  <option selected="true" disabled="disabled">How does your skin feel when touched?</option>  
                  <option value="supple and cool">supple and cool</option>
                  <option value="dry and thin">dry and thin</option>
                  <option value="oily on forehead and nose">
                    oily on forehead and nose
                  </option>
                  <option value="oily on entire face">
                    oily on entire face
                  </option>
                  <option value="I don’t know">
                    I don’t know
                  </option>
                </select>
                {skinFeelError && <span className="error-text">Please fill this Field</span>}
              </div>
              <div className="form-group position-relative">
                <select className={skinPimpleError ? "form-control error"  : "form-control" } onChange={skinPimple}>
                  <option selected="true" disabled="disabled">How often do you have pimples?</option> 
                  <option value="Never">Never</option>
                  <option value="sometimes">sometimes</option>
                  <option value="very often">very often</option>
                  <option value="I don’t know">
                    I don’t know
                  </option>
                </select>
                {skinPimpleError && <span className="error-text">Please fill this Field</span>}
              </div>
              <div className="form-group position-relative">
                <select className={skinFeelFacialError ? "form-control error"  : "form-control" } onChange={skinFeelFacial}>
                  <option selected="true" disabled="disabled">How does your skin feel after applying a grainy facial
                    scrub?</option> 
                  <option value="ouch - pink and irritated">
                    ouch - pink and irritated
                  </option>
                  <option value="I can tolerate it several times a week with no problem">
                    I can tolerate it several times a week with no problem
                  </option>
                  <option value="once every week is fine">
                    once every week is fine
                  </option>
                  <option value="I don’t know">
                    I don’t know
                  </option>
                </select>
                {skinFeelFacialError && <span className="error-text">Please fill this Field</span>}
              </div>
              <div className="form-group position-relative">
                <select className={skinExposedError ? "form-control error"  : "form-control" } onChange={skinExposed}>
                <option selected="true" disabled="disabled">What happens when your skin is exposed to sun?</option> 
                  <option value="reddens">reddens</option>
                  <option value="burns">burns</option>
                  <option value="tans">tans</option>
                  <option value="I don’t know">
                    I don’t know
                  </option>
                </select>
                {skinExposedError && <span className="error-text">Please fill this Field</span>}
              </div>
              <Button className="common-btn" onClick={onGetPayment}>
                Go To Payment
              </Button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default SkinTestForm;
