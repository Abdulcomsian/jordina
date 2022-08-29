import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../../constant/images/index";
import BounceLoader from "react-spinners/BounceLoader";
import PersonalInfo from "../Forms/personal-information";
import SkinCondition from "../Skin/Skin-Condition/index";
import SkinTestForm from "../Forms/skin-test-form";
import FormHeader from "../Header/Form-Header/from-header";
import PaymentForm from "../Forms/payment-form";
import GenderForm from "../Forms/gender-form";
import { connect } from "react-redux";
import Loader from "../Loader/index";
import "./style.css";

const FormScreen = (props) => {
  const { navigation, token, error } = props;
  console.log("Token :", props)
  const authenticated = localStorage.getItem("authenticated");
  const [showLoader, setshowLoader] = useState(false);
  const [showModal, setModalShow] = useState(false);
  const [showPersonalInfo, setPersonalInfo] = useState(true);
  const [showSkinCondition, setSkinCondition] = useState(false);
  const [showSkinTest, setShowSkinTest] = useState(false);
  const [showGetPayment, setShowGetPayment] = useState(false);
  const [showGenderForm, setShowGenderForm] = useState(false);
  const [showImgColumn, setShowImgColumn] = useState(true);
  const [progressBarWidth, setProgressBarWidth] = useState("10%");
  const submitInfo = () => {
    setModalShow(true);
    setTimeout(() => {
      setModalShow(false);
      setPersonalInfo(false);
      setSkinCondition(true);
      setProgressBarWidth("20%");
    }, 1000);
  };
  const skinTest = () => {
    setModalShow(true);
    setTimeout(() => {
      setModalShow(false);
      setSkinCondition(false);
      setShowSkinTest(true);
      setShowImgColumn(false);
      setProgressBarWidth("30%");
    }, 1000);
  };
  const paymentGet = () => {
    setModalShow(true);
    setTimeout(() => {
      setModalShow(false);
      setShowSkinTest(false);
      setShowGetPayment(true);
      setShowImgColumn(false);
      setProgressBarWidth("40%");
    }, 1000);
  };
  const givePayment = () => {
    setModalShow(true);
    setTimeout(() => {
      setModalShow(false);
      setShowGetPayment(false);
      setShowGenderForm(true);
      setShowImgColumn(false);
      setProgressBarWidth("50%");
    }, 1000);
  };
  useEffect(() => {
    (async () => {
      if (token) {
        if (authenticated) {
          console.log("Use Effect Token Form Screen");
          setTimeout(() => {
            showLoader(false);
          }, 3000);
        }

        // console.log("Use Effect :", token, authenticated);
      }
      // else if (error !== null) {
      //   console.log("here !", errorMessage, error);
      //   setTimeout(() => {
      //     showLoader(false);
      //     showErrorMessage(true);
      //   }, 3000);
      // }
    })();
  }, [token]);
  return (
    <>
      {showLoader && <Loader showLoader={showLoader} loaderColor={"#AF6FAC"} />}
      {showModal && (
        <div className="modal_view">
          <BounceLoader color="#AF6FAC" />
          <p>Please Wait a Second .. !</p>
        </div>
      )}

      <>
        <FormHeader />
        <div className="progress-bar" style={{ width: progressBarWidth }}></div>
        <div className="main_form-section">
          <div className="skin_condition-form">
            <Container fluid>
              <Row>
                {showImgColumn && (
                  <Col>
                    <div className="form-left-side">
                      <img src={Images.mobile_bg} className="img-fluid" />
                      <div className="multiple_left-side-images">
                        <img src={Images.women} className="img-fluid img1" />
                        <img
                          src={Images.location_marker}
                          className="img-fluid img2"
                        />
                        <img src={Images.setting} className="img-fluid img3" />
                        <img src={Images.check} className="img-fluid img4" />
                        <img
                          src={Images.notification}
                          className="img-fluid img5"
                        />
                      </div>
                    </div>
                  </Col>
                )}
                {showPersonalInfo && (
                  <Col>
                    <div className="form_right-side">
                      <PersonalInfo onSubmitInfo={submitInfo} />
                    </div>
                  </Col>
                )}
                {showSkinCondition && (
                  <Col>
                    <SkinCondition onSkinTest={skinTest} />
                  </Col>
                )}
              </Row>
            </Container>
            {showSkinTest && <SkinTestForm onGetPayment={paymentGet} />}
            {showGetPayment && <PaymentForm onGivePayment={givePayment} />}
            {showGenderForm && <GenderForm onGivePayment={givePayment} />}
          </div>
        </div>
      </>
    </>
  );
};
const mapStateToProps = (state) => ({
  token: localStorage.getItem("token"),
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(FormScreen);
