import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import images from "../../constant/images";
import "./style.css";
import { connect } from "react-redux";
import { updateClientProfile } from "../../redux/action/dashboardAction";
import { ToastContainer, toast } from "react-toastify";
import { getUserDetail } from "../../redux/action/dashboardAction";

const ClientProfile = (props) => {
  const { blurContent, userData, token } = props;
  const [showLoader, setShowLoader] = useState(false);
  const [firstName, setFirstName] = useState(
    userData !== null ? userData.first_name : null
  );
  const [lastName, setLastName] = useState(
    userData !== null ? userData.last_name : null
  );
  const [email, setEmail] = useState(userData !== null ? userData.email : null);
  const [address, setAddress] = useState(
    userData !== null ? userData.address : null
  );
  const [number, setNumber] = useState(
    userData !== null ? userData.phone_number : null
  );

  const updateUserHandler = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    try {
      if (email !== null) {
        const response = await props.updateUser(
          firstName,
          lastName,
          number,
          email,
          address,
          token
        );
        console.log(response, "Prfoile Page");
        if (response === 200) {
          setTimeout(() => {
            setShowLoader(false);
            window.location.reload(true);
          }, 3000);
          toast.success("Profile Edit SuccessFully !", {
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
          setShowLoader(false);
        }, 2000);
        toast.error("Please Enter Email !", {
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
    } catch (error) {
      setTimeout(() => {
        setShowLoader(false);
      }, 2000);
      toast.error(error.message.toString(), {
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
      <div
        className={
          blurContent || showLoader
            ? "client__profile mt-5 blur"
            : "client__profile mt-5"
        }
      >
        <h4>PROFILE</h4>
        <div className="client__header box__shadow d-flex align-items-center mt-3">
          <div className="img__div me-2">
            <img src={images.profileImg} />
          </div>
          <div className="client__info">
            <h4>{userData.first_name + " " + userData.last_name}</h4>
            <p>{email}</p>
            <p>{number}</p>
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
                      placeholder="Enter First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-input">
                    <input
                      className="form-control"
                      placeholder="Enter Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-input">
                    <input
                      className="form-control"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-input">
                    <input
                      className="form-control"
                      placeholder="Contact Number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </Col>
                {/* <Col md={6}>
                <div className="form-input">
                  <input
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-input">
                  <input
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfrimPassword(e.target.value)}
                  />
                </div>
              </Col> */}
                <Col md={6}>
                  <div className="form-input">
                    <input
                      className="form-control"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </Col>
                <Col md={6}></Col>
                <Col md={12} className="text-end">
                  <button
                    className="common__btn"
                    onClick={(e) => updateUserHandler(e)}
                  >
                    Submit
                  </button>
                </Col>
              </Row>
            </Container>
          </form>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (firstName, lastName, number, email, address, token) =>
    dispatch(
      updateClientProfile(firstName, lastName, number, email, address, token)
    ),
    userDetail: (token) => dispatch(getUserDetail(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ClientProfile);
