import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/index";
import LearnMore from "../../components/Forms/learn-more";
import images from "../../constant/images";
import { connect } from "react-redux";
import "./style.css";
import {
  getAllProduct,
  getAllProductSkinType,
} from "../../redux/action/productAction";
import {
  getAllCartProduct
} from "../../redux/action/cartAction";
import { getAllSkinDiseases } from "../../redux/action/skinConditionAction";

const HomeScreen = (props) => {
  const { token, addedItems, cartItem } = props;
  console.log("Cart Item :",addedItems);
  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        await props.allProductHandler(token);
      } catch (err) {
        // alert(err.message);
      }
    };
    const fetchAllProductType = async () => {
      try {
        await props.allProductTypeHandler(token);
      } catch (err) {
        // alert(err.message);
      }
    };
    const fetchAllSkinDieases = async () => {
      try {
        await props.allSkinDiseasesHandler(token);
      } catch (err) {
        // alert(err.message);
      }
    };
    const fetchAllCartProduct = async () => {
      try {
        await props.allCartProductHandler(token);
      } catch (err) {
        // alert(err.message);
      }
    };
    
    fetchAllProduct().catch(console.error);
    fetchAllProductType().catch(console.error);
    fetchAllSkinDieases().catch(console.error);
    fetchAllCartProduct().catch(console.error);
  }, [token]);

  return (
    <div className="home_main-section">
      <Header />
      <main>
        <div className="main__wrapper">
          <div id="banner" className="main__banner--section">
            <div className="overlay"></div>
            <div className="banner__content">
              <h1>Skincare prescriptions that actually work</h1>
              <p>
                Customized prescriptions — not cosmetics — are the real secret
                to beauty.
              </p>
              <a className="common__btn">Get started</a>
            </div>
          </div>
          <div className="hero__banner">
            <Container fluid>
              <Row>
                <Col>
                  <div className="banner__content d-flex align-items-center ">
                    <img src={images.userImage} className="img-fluid" />
                    <p>
                      Let our licenced medical professionals assess your problem
                      and come up with a customized compound prescription for
                      you.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div id="skin_discover" className="service__section">
            <Container fluid>
              <Row>
                <Col lg={4}>
                  <div className="tired__of__div d-flex align-items-center flex-column service__card">
                    <img src={images.bottelImage} className="img-fluid" />
                    <h3 className="service__title">
                      Tired of Ineffective <br></br>Over-the-Counter Products?
                    </h3>
                    <div className="para__list__items">
                      <p>Have you noticed OTC Products:</p>
                      <ol>
                        <li>Have no medicinal ingredients?</li>
                        <li>Seem to have a variable quality?</li>
                        <li>Works for others but not for you?</li>
                      </ol>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="dermatologist_div  d-flex align-items-center flex-column service__card">
                    <img src={images.stethoscope} className="img-fluid" />
                    <h3 className="service__title">
                      Is Your Dermatologist <br></br>Impossible to Get a Hold
                      of?
                    </h3>
                    <div className="para__list__items">
                      <p>Have you noticed Dermatologist:</p>
                      <ol>
                        <li>Are Expensive and hard to access?</li>
                        <li>
                          Have no standardized protocols or systemized
                          follow-ups?
                        </li>
                        <li>Treat surface skin conditions as low priority?</li>
                        <li>
                          Seem to just prescribe you whatever the lastest drug
                          rep said?
                        </li>
                      </ol>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="online__provider d-flex align-items-center flex-column service__card">
                    <img src={images.laptopImage} className="img-fluid" />
                    <h3 className="service__title">
                      Haven’t Found an Adequete<br></br> Online Provider?
                    </h3>
                    <div className="para__list__items">
                      <p>Have you noticed Online Provider:</p>
                      <ol>
                        <li>Don’t clarify if their using prescriptions?</li>
                        <li>Often offer low-end, cheap products?</li>
                        <li>
                          Only offer online submittals and not 1-on-1
                          consulting?
                        </li>
                        <li>
                          Many only offer support for a limited set of
                          conditions (such as Acne)?
                        </li>
                      </ol>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="skin__dermatology_service">
            <Container fluid>
              <div className="service__box">
                <Row>
                  <Col lg={4}>
                    <div className="product__img__box text-center">
                      <img src={images.skinProduct} className="img-fluid" />
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className="product__img__content">
                      <h1>
                        We Offer{" "}
                        <span className="prescription__text">Prescription</span>{" "}
                        Skincare Products
                      </h1>
                      <p>
                        Truly beautiful skin requires effective solutions.
                        That’s why we prescribe customized compounds for your
                        unique skincare routine.
                      </p>
                      <a className="common__btn">Get started</a>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="service__box">
                <Row className="flex-row-reverse">
                  <Col lg={4}>
                    <div className="product__img__box text-center">
                      <img src={images.dermatologyImg} className="img-fluid" />
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className="product__img__content me-0 m-auto text-end width__800">
                      <h1>
                        We work with multiple{" "}
                        <span className="dermatology__text">Dermatology</span>{" "}
                        Professionals
                      </h1>
                      <p>
                        We save you time by working with multiple dermatology
                        professionals. Additionly, we can reduce your costs by
                        combining compounds. Finally, we offer 1-on-1 for those
                        who need a second look.
                      </p>
                      <a className="common__btn">Get started</a>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="service__box">
                <Row>
                  <Col lg={4}>
                    <div className="product__img__box text-center">
                      <img src={images.serviceImg} className="img-fluid" />
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className="product__img__content">
                      <h1>
                        We offer <span className="fast__text">Fast</span> and
                        Affordable Services
                      </h1>
                      <p>
                        Our services are quick and reasonably priced. And if you
                        are unsatisfied with your results in 30-days, we offer
                        1-on-1 consultation for the same price
                      </p>
                      <a className="common__btn">Get started</a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="why__work_compounded_medication">
            <Container fluid>
              <Row>
                <Col lg={6}>
                  <div className="img__box">
                    <img src={images.whyWorkImg} className="img-fluid" />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="why__work__content">
                    <h1>
                      Why Work with <span>Jordina</span>?
                    </h1>
                    <p className="pt-0">
                      There’s a lot of options out there and it can become
                      overwhelming. That’s also true with the prescriptions
                      themselves.
                    </p>
                    <p className="pt-4">
                      Often you need 2, 3, or more prescriptions to resolve your
                      uniques skin issues.
                    </p>
                    <p className="pt-4">
                      That’s why we came up with a better solution.
                    </p>
                  </div>
                </Col>
              </Row>
              <div className="compounded__medication">
                <Row>
                  <Col lg={5}>
                    <div className="compounded__content">
                      <h1 className="mb-3 common__title">
                        What is a compounded medication?
                      </h1>
                      <p>
                        Compounding refers to the
                        <b> process of creating personalized medications </b>to
                        meet the specific needs of a patient.
                      </p>
                    </div>
                  </Col>
                  <Col lg={7} className="height__changed">
                    <div className="img__box">
                      <img src={images.compoundedImg} className="img-fluid" />
                    </div>
                  </Col>
                </Row>
                <div className="instruction__content pt-2">
                  <Row>
                    <Col>
                      <p>
                        At Jordina, this is done with a prescription from a
                        doctor that is sent to a specialized compounding
                        pharmacy. A pharmacist then combines necessary
                        ingredients in a laboratory to create the medication.
                      </p>
                      <div className="list__div">
                        <p>
                          <b>Compounding allows Jordina to:</b>
                        </p>
                        <ul>
                          <li>
                            <span className="text-decoration-underline">
                              Customize ingredients
                            </span>{" "}
                            and dosage.
                          </li>
                          <li>
                            Combine multiple prescription drugs into{" "}
                            <span className="text-decoration-underline">
                              one.
                            </span>
                          </li>
                          <li>
                            Ensure the{" "}
                            <span className="text-decoration-underline">
                              highest quality
                            </span>{" "}
                            possible ingredients.
                          </li>
                          <li>
                            To{" "}
                            <span className="text-decoration-underline">
                              avoid side effects
                            </span>{" "}
                            of commercialized drugs such as irritation.
                          </li>
                          <li>
                            Compounding can also be used if a commercialized
                            medication runs out of stock.
                          </li>
                        </ul>
                      </div>
                      <p>
                        Very few pharmacies are compounding pharmacies and{" "}
                        <b>none are better than Jordina.</b>
                      </p>
                      <div className="text-center">
                        <a className="common__btn mt-4">Get started</a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Container>
          </div>
          <div id="our_process" className="how__jordina__work">
            <Container fluid>
              <Row>
                <Col className="text-center">
                  <h1 className="common__title">
                    How <span>Jordina</span> Works
                  </h1>
                </Col>
              </Row>
              <div className="work__step mt-5">
                <Row>
                  <Col lg={6}>
                    <div className="step__box step__box__one">
                      <h1>Step 01</h1>
                      <p className="mt-4 mb-4">
                        Submit to us a <b>clear photo</b> after which you’ll
                        have to fill out a questionnaire followed by a payment
                        of $49.99
                      </p>
                      <div className="img__box">
                        <img src={images.step1} className="img-fluid" />
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="multiple__step">
                      <div className="step__box d-flex justify-content-between">
                        <div className="step__content">
                          <h1>Step 01</h1>
                          <p>
                            A <b>licenced medical professional</b> will assess
                            the problem.
                          </p>
                          <p>
                            After one business day you will receive a video from
                            your doctor.
                          </p>
                        </div>
                        <div className="img__box">
                          <img
                            src={images.step2}
                            className="img-fluid step__one__img"
                          />
                        </div>
                      </div>
                      <div className="step__box mt-4">
                        <div className="calender__box d-flex justify-content-between">
                          <div className="step__content">
                            <h1>Step 03</h1>
                            <p>
                              If it works for you after 30 days you
                              automatically <b>receive a refill</b> and will be
                              billed $129.99.
                            </p>
                          </div>
                          <div className="img__box">
                            <img
                              src={images.calenderImg}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <p className="amount__para">
                          If it doesn’t work you will{" "}
                          <b>get a 1-on-1 consultation</b> with a provider. A
                          revised treatment will be shipped for $249.99.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div id="our_product" className="apostrophe__section">
            <Container fluid>
              <Row>
                <Col>
                  <div className="apostrophe__main__img text-center">
                    <img src={images.apostropheImg} className="img-fluid" />
                    <div className="tooltip__common tooltip__one">
                      <p>
                        Our patients receive a custom compounded medication
                        prescribed by a licenced doctor and formulated by a
                        licenced pharmacy.
                      </p>
                      <span>1</span>
                    </div>
                    <div className="tooltip__common tooltip__two">
                      <p>
                        Most of our patients also receive one or more OTC
                        products. Our products are of the highest quality and
                        designed to work in harmony with our custom compounds.
                      </p>
                      <span>2</span>
                    </div>
                    <div className="tooltip__common tooltip__three">
                      <p>
                        We also offer an expanding selection of complementary
                        skin and beauty products.
                      </p>
                      <span>3</span>
                    </div>
                    <div className="tooltip__common tooltip__four">
                      <p>
                        Some of our patients are prescribed an oral medication
                        to treat their skin condition.
                      </p>
                      <span>4</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="apostrophe__content d-flex justify-content-between">
                <p>
                  Our products are of the highest quality. We custom design a
                  skincare routine combining the base products, such as
                  cleansers and ...
                </p>
                <p>
                  We then design a custom compound just for you, rather than
                  providing multiple prescriptions. This simplifies your
                  skincare routine, saving you both time and money.
                </p>
              </div>
              <div className="text-center mt-5">
                <a className="common__btn">Get started</a>
              </div>
            </Container>
          </div>
          <div className="want__to__learn__more">
            <LearnMore />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  addedItems: state.cartReducer.addedItems,
  cartItem: state.cartReducer.cartItem,
});

const mapDispatchToProps = (dispatch) => ({
  allProductHandler: (token) => dispatch(getAllProduct(token)),
  allCartProductHandler: (token) => dispatch(getAllCartProduct(token)),
  allProductTypeHandler: (token) => dispatch(getAllProductSkinType(token)),
  allSkinDiseasesHandler: (token) => dispatch(getAllSkinDiseases(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
