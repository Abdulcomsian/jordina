import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../../constant/images/index";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col md={2}>
            <div className="footer__content">
              <h1 className="logo">Jordina</h1>
            </div>
          </Col>
          <Col md={7}>
            <div className="multiple__list d-flex">
              <ul>
                <li>
                  <a>Acne</a>
                </li>
                <li>
                  <a>Wrinkles</a>
                </li>
                <li>
                  <a>Rosacea</a>
                </li>
                <li>
                  <a>Eyelashes</a>
                </li>
                <li>
                  <a>Hair Loss</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a>Philosophe</a>
                </li>
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a>Derms</a>
                </li>
                <li>
                  <a>Pharmacy</a>
                </li>
                <li>
                  <a>Slather</a>
                </li>
                <li>
                  <a>Ingredients</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a>Reviews</a>
                </li>
                <li>
                  <a>FAQs</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  <a>Investors</a>
                </li>
                <li>
                  <a>Slather</a>
                </li>
                <li>
                  <a>Ingredients</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3} className="text-end">
            <a className="common__btn">Get started</a>
          </Col>
        </Row>
        <div className="sub__footer">
          <Row>
            <Col md={3}>
              <img src={Images.arrowTop} className="img-fluid" />
            </Col>
            <Col md={9} className="text-end">
              <ul className="d-flex justify-content-end">
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Terms</a>
                </li>
                <li>
                  <a>Medical Notice of Privacy Practices</a>
                </li>
                <li>
                  <a>Telehealth Consent</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <hr></hr>
        <div className="footer__bottom mt-4">
            <Row>
                <Col md={2}>
                    <img src={Images.certificationImg} className="img-fluid"/>
                </Col>
                <Col md={2} className="d-flex align-items-center">
                    <img src={Images.bbbImg} className="img-fluid"/>
                </Col>
                <Col md={7} className="d-flex align-items-center">
                    <div className="footer__content__para">
                    <p>CCPA: Do Not Sell My Information</p>
                    <p className="mt-1">Request to access or delete your personal information by emailing privacy@jordina.com</p>
                    </div>
                </Col>
                <Col md={1}  className="d-flex align-items-center">
                    <p>© 2022 Jordina</p>
                </Col>
            </Row>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
