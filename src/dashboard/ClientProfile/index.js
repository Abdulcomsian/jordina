import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import images from "../../constant/images";
import "./style.css";

const ClientProfile = ({blurContent}) => {
  return (
    <div className={blurContent?"client__profile mt-5 blur":"client__profile mt-5"}>
      <h4>PROFILE</h4>
      <div className="client__header box__shadow d-flex align-items-center mt-3">
        <div className="img__div me-2">
          <img src={images.profileImg} />
        </div>
        <div className="client__info">
          <h4>Jessica</h4>
          <p>admin@themesbrand.com</p>
          <p>0900-78601</p>
        </div>
      </div>
      <div className="basic__information box__shadow p-3 mt-2">
        <form>
          <Container fluid>
            <Row>
              <Col md={6}>
                <div className="form-input">
                  <input
                    className="form-control"
                    placeholder="Enter your Name"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-input">
                  <input
                    className="form-control"
                    placeholder="Enter your Email"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-input">
                  <input
                    className="form-control"
                    placeholder="Contact Number"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-input">
                  <input
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
              </Col>
              <Col md={6}>
               
              </Col>
              <Col md={6} className="text-end">
               <button className="common__btn">Submit</button>
              </Col>
            </Row>
          </Container>
        </form>
      </div>
    </div>
  );
};
export default ClientProfile;
