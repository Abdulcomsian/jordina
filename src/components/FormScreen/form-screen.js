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
import {
  skinConditionTest,
  maleAllergieExistHandler,
} from "../../redux/action/skinConditionAction";
import { register } from "../../redux/action/authAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InlineWidget } from "react-calendly";
import "./style.css";
import axios from "axios";

const FormScreen = (props) => {
  const { token, message } = props;
  const [skinLook, setSkinLook] = useState("");
  const [skinPores, setSkinPores] = useState("");
  const [skinFeel, setSkinFeel] = useState("");
  const [skinPimple, setSkinPimple] = useState("");
  const [skinFeelFacial, setSkinFeelFacial] = useState("");
  const [skinExposed, setSkinExposed] = useState("");
  const [skinConditionChange, setSkinConditionChange] = useState(false);
  const [skinDeasesName, setSkinDeasesName] = useState("");
  const [showModal, setModalShow] = useState(false);
  const [showPersonalInfo, setPersonalInfo] = useState(true);
  const [showSkinCondition, setSkinCondition] = useState(true);
  const [showSkinTest, setShowSkinTest] = useState(false);
  const [showGetPayment, setShowGetPayment] = useState(false);
  const [showGenderForm, setShowGenderForm] = useState(false);
  const [showImgColumn, setShowImgColumn] = useState(true);
  const [progressBarWidth, setProgressBarWidth] = useState("10%");
  const [showCalender, setShowCalender] = useState(false);
  const [diseasesArray, setDiseasesArray] = useState([]);
  const [diseaseId, setDieasesId] = useState(null);
  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const submitInfo = async (
    firstName,
    lastName,
    email,
    password,
    confrimPassword,
    address,
    state
  ) => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      password !== "" &&
      confrimPassword !== "" &&
      address !== "" &&
      state !== ""
    ) {
      setModalShow(true);
      if (password === confrimPassword) {
        if (regEmail.test(email) === false) {
          setModalShow(false);
          return false;
        } else {
          try {
            var reposnse = await props.registerHandler(
              firstName,
              lastName,
              email,
              password,
              confrimPassword,
              address,
              state
            );
            var status = reposnse.status;
            if (status === 401) {
              var message = reposnse.data.message.email;
              setTimeout(() => {
                setModalShow(false);
              }, 1000);
              toast.error(message.toString(), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            } else if (status === 200) {
              var message = reposnse.data.message;
              setTimeout(() => {
                setModalShow(false);
                setPersonalInfo(false);
                setSkinCondition(true);
                setProgressBarWidth("20%");
              }, 1000);
              toast.success(message.toString(), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          } catch (err) {}
        }
      } else {
        setTimeout(() => {
          setModalShow(false);
        }, 1000);
        toast.error("Your Password does not Match !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      setTimeout(() => {
        setModalShow(false);
      }, 1000);
      toast.error("Please Fill all required Fields !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const skinTest = () => {
    console.log("skin Test");
    setModalShow(true);
    setTimeout(() => {
      setModalShow(false);
      setSkinCondition(false);
      setShowSkinTest(true);
      setShowImgColumn(false);
      setProgressBarWidth("30%");
    }, 1000);
  };
  const paymentGet = async (type, e) => {
    setModalShow(true);
    try {
      if (
        diseaseId !== "" &&
        skinLook !== "" &&
        skinPores !== "" &&
        skinFeel !== "" &&
        skinPimple !== "" &&
        skinFeelFacial !== "" &&
        skinExposed !== ""
      ) {
        var response = await props.skinTestHandler(
          diseaseId,
          skinLook,
          skinPores,
          skinFeel,
          skinPimple,
          skinFeelFacial,
          skinExposed,
          token
        );
        if (response.status === 200) {
          setTimeout(() => {
            setModalShow(false);
            setShowGetPayment(true);
            setSkinCondition(false);
            setShowSkinTest(false);
            setShowGenderForm(false);
            setShowImgColumn(false);
            setProgressBarWidth("50%");
          }, 1000);
          toast.success("SuccessFully Submitted !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } else {
        setTimeout(() => {
          setModalShow(false);
        }, 1000);
        toast.error("Please Fill all required Fields", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (err) {
      alert(err.message);
    }
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
  const onHandleSkinCondition = (e) => {
    var index = e.target.selectedIndex;
    var id = diseasesArray[index].id;
    setSkinDeasesName(e.target.value);
    setDieasesId(id);
    setSkinConditionChange(true);
  };
  const skinLookHandler = (e) => {
    setSkinLook(e.target.value);
  };
  const skinPoresHandler = (e) => {
    setSkinPores(e.target.value);
  };
  const skinFeelHandler = (e) => {
    setSkinFeel(e.target.value);
  };
  const skinPimpleHandler = (e) => {
    setSkinPimple(e.target.value);
  };
  const skinFeelFacialHandler = (e) => {
    setSkinFeelFacial(e.target.value);
  };
  const skinExposedHandler = (e) => {
    setSkinExposed(e.target.value);
  };
  const onSubmitGenderInfo = async (
    medication,
    otherMedication,
    file,
    gender,
    checkWeight,
    checkHeight
  ) => {
    console.log(
      "From Screen :",
      medication,
      otherMedication,
      file,
      gender,
      checkWeight,
      checkHeight
    );
    setModalShow(true);
    if (
      gender !== "" &&
      checkHeight !== "" &&
      checkWeight !== "" &&
      medication !== "" &&
      otherMedication !== "" &&
      file !== ""
    ) {
      try {
        var response = await props.maleAllergieExistHandler(
          gender,
          checkHeight,
          checkWeight,
          medication,
          otherMedication,
          file,
          token
        );
        if (response.status === 200) {
          setTimeout(() => {
            setModalShow(false);
            setShowGetPayment(false);
            setShowGenderForm(false);
            setShowImgColumn(false);
            setProgressBarWidth("50%");
          }, 1000);
          toast.success("successFully Submitted !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setShowCalender(true);
        }
      } catch (err) {}
    } else {
      setTimeout(() => {
        setModalShow(false);
      }, 1000);
      toast.error("Please fill all Details !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setShowCalender(false);
    }
    // setTimeout(() => {
    //   setModalShow(false);
    //   setShowGetPayment(false);
    //   setShowGenderForm(false);
    //   setShowImgColumn(false);
    //   setProgressBarWidth("50%");
    // }, 1000);
    // setShowCalender(true);
  };
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      try {
        const request = await axios(
          "http://127.0.0.1:8000/api/getAllDiseases",
          {
            method: "GET",
            headers: {
              authorization: "Bearer " + token,
            },
          }
        );
        setDiseasesArray(request.data.data.diseases);
      } catch (error) {}
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ToastContainer />
      {showModal && (
        <div className="modal_view">
          <BounceLoader color="#AF6FAC" />
          <p>Please Wait a Second .. !</p>
        </div>
      )}

      <>
        <FormHeader />

        <div className="progress-bar" style={{ width: progressBarWidth }}></div>
        {showCalender && (
          <div style={{ paddingTop: 50 }}>
            <InlineWidget url="https://calendly.com/alamhamza18/15min?month=2022-09" />
          </div>
        )}
        {!showCalender && (
          <div className="main_form-section">
            <div className="skin_condition-form">
              <Container fluid>
                <Row>
                  {showImgColumn && (
                    <Col md={6}>
                      <div className="form-left-side">
                        <img src={Images.mobile_bg} className="img-fluid" />
                        <div className="multiple_left-side-images">
                          <img src={Images.women} className="img-fluid img1" />
                          <img
                            src={Images.location_marker}
                            className="img-fluid img2"
                          />
                          <img
                            src={Images.setting}
                            className="img-fluid img3"
                          />
                          <img src={Images.check} className="img-fluid img4" />
                          <img
                            src={Images.notification}
                            className="img-fluid img5"
                          />
                        </div>
                      </div>
                    </Col>
                  )}
                  {!token && (
                    <Col md={6}>
                      <div className="form_right-side">
                        <PersonalInfo onSubmitInfo={submitInfo} />
                      </div>
                    </Col>
                  )}
                  {token && showSkinCondition && (
                    <Col md={6}>
                      <SkinCondition
                        onSkinTest={skinTest}
                        handleSkinCondition={onHandleSkinCondition}
                        skinDeasesName={skinDeasesName}
                        skinConditionChange={skinConditionChange}
                        diseasesArray={diseasesArray}
                      />
                    </Col>
                  )}
                </Row>
              </Container>
              {showSkinTest && (
                <SkinTestForm
                  onGetPayment={paymentGet}
                  skinLook={skinLookHandler}
                  skinPores={skinPoresHandler}
                  skinFeel={skinFeelHandler}
                  skinPimple={skinPimpleHandler}
                  skinFeelFacial={skinFeelFacialHandler}
                  skinExposed={skinExposedHandler}
                />
              )}
              {showGetPayment && <PaymentForm onGivePayment={givePayment} />}
              {showGenderForm && (
                <GenderForm onSubmitInfo={onSubmitGenderInfo} />
              )}
            </div>
          </div>
        )}
      </>
    </>
  );
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  errorEmail: state.auth.errorEmail,
  errorFirstName: state.auth.errorFirstName,
  errorLastName: state.auth.errorLastName,
  authenticated: state.auth.authenticated,
  message: state.skinCondition.message,
});

const mapDispatchToProps = (dispatch) => ({
  skinTestHandler: (
    skinDeasesName,
    skinLook,
    skinPores,
    skinFeel,
    skinPimple,
    skinFeelFacial,
    skinExposed,
    token
  ) =>
    dispatch(
      skinConditionTest(
        skinDeasesName,
        skinLook,
        skinPores,
        skinFeel,
        skinPimple,
        skinFeelFacial,
        skinExposed,
        token
      )
    ),
  registerHandler: (
    name,
    lastName,
    email,
    password,
    confrimPassword,
    address,
    stateUser
  ) =>
    dispatch(
      register(
        name,
        lastName,
        email,
        password,
        confrimPassword,
        address,
        stateUser
      )
    ),
  maleAllergieExistHandler: (
    medication,
    otherMedication,
    file,
    gender,
    checkWeight,
    checkHeight,
    token
  ) =>
    dispatch(
      maleAllergieExistHandler(
        medication,
        otherMedication,
        file,
        gender,
        checkWeight,
        checkHeight,
        token
      )
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(FormScreen);
