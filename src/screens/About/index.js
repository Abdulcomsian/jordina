import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/index";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import images from "../../constant/images/index";

const About = () => {
  return (
    <div className="home_main-section">
      <Header />
      <main>
        <div className="main__wrapper">
          <div className="main__banner--section">
            <div className="overlay"></div>
            <div className="banner__content">
              <h1>About Jordina</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                viverra nibh nunc, pellentesque elementum.
              </p>
            </div>
          </div>
          <div className="about__main__section">
            <Container fluid>
              <Row>
                <Col className="text-center">
                  <div className="main__image">
                    <img src={images.aboutMain} className="img-fluid" />
                  </div>
                </Col>
              </Row>
              <div className="team__of__doctor">
                <Row>
                  <Col className="text-center">
                    <h1 className="common__title">
                      A team of doctors, focused on making you beautiful.
                    </h1>
                    <p className="text-start mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent arcu nunc ut habitant magna elementum turpis et
                      eros. Odio porta at nisl ultrices sed tellus. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Praesent arcu
                      nunc ut habitant magna elementum turpis et eros. Odio
                      porta at nisl ultrices sed tellus.Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Praesent arcu nunc ut
                      habitant magna elementum turpis et eros. Odio porta at
                      nisl ultrices sed tellus.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="our__mission">
            <Container fluid>
              <Row>
                <Col>
                  <div className="our__mission__box">
                    <h2 className="text-center">Our Mission</h2>
                    <p className="mt-3">
                      Helping you become the most beautiful version of you
                      through skincare specifically made for your needs.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="value__prop__section">
            <Container fluid>
              <Row>
                <Col md={6}>
                    <div className="value__box">
                        <h1 className="mb-4">Value Prop #1</h1>
                        <p className="mb-5">Enter a description of your value prop. Do you formulate your products differently? How are you special?</p>
                        <img src={images.valueImg} className="text-center"/>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="value__box position__change">
                        <h1 className="mb-4">Value Prop #2</h1>
                        <p className="mb-5">Enter a description of your value prop. Do you formulate your products differently? How are you special?</p>
                        <img src={images.valueImg} className="text-center"/>
                    </div>
                </Col>
              </Row>
              <Row style={{marginTop: 90, marginBottom: 90}}>
                <Col md={6}>
                    <div className="value__box">
                        <h1 className="mb-4">Value Prop #3</h1>
                        <p className="mb-5">Enter a description of your value prop. Do you formulate your products differently? How are you special?</p>
                        <img src={images.valueImg} className="text-center"/>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="value__box position__change">
                        <h1 className="mb-4">Value Prop #4</h1>
                        <p className="mb-5">Enter a description of your value prop. Do you formulate your products differently? How are you special?</p>
                        <img src={images.valueImg} className="text-center"/>
                    </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="shop_our">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2 className="common__title">Shop our award winning products!</h2>
                        <a className="common__btn mt-4">Shop Now!</a>
                    </Col>
                </Row>
            </Container>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default About;
