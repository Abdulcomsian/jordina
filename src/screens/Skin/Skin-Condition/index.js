import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";

import { connect } from "react-redux";

const SkinConditionScreen = (props) => {
  const {
    onSkinTest,
    handleSkinCondition,
    skinDeasesName,
    skinConditionChange,
    diseasesArray,
  } = props;

  return (
    <>
      <div className="main_skin-condition">
        <div className="form_box">
          <Container fluid>
            <h2 className="text-left title">
              Please Select your Skin Condition
            </h2>
            <Row>
              <Col>
                <div className="form-group">
                  <select
                    value={skinDeasesName}
                    className="form-control"
                    onChange={(e) => handleSkinCondition(e)}
                  >
                    {diseasesArray.map((item, index) => (
                      <option value={item.title} key={index}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
                {skinConditionChange && (
                  <div className="form-group">
                    <Button className="common-btn" onClick={onSkinTest}>
                      Start Skin test
                    </Button>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  errorEmail: state.auth.errorEmail,
  errorFirstName: state.auth.errorFirstName,
  errorLastName: state.auth.errorLastName,
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkinConditionScreen);
