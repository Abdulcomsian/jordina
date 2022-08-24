import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Images from "../../../constant/images/index";
import SkinTestForm from "../../Forms/skin-test-form";

const SkinTest = (onGetPayment) => {
  return (
    <>
      <div className="main_skin-condition main_form-section">
        <div className="form_box">
          <Container fluid>
            <h2 className="text-center title">Skin Test</h2>
            <Row>
              <Col>
                <div className="skin_test_form_div">
                  <SkinTestForm onGetPayment={onGetPayment} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default SkinTest;
