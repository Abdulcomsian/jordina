import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector, connect } from "react-redux";
import { register } from "../../../redux/action/authAction";
import { useNavigate } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import "../style.css";

const Register = (props) => {
  const { navigation, token } = props;
  const navigate = useNavigate();
  const authenticated = localStorage.getItem("authenticated");
  console.log("Token :", token, authenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [stateUser, setUserState] = useState("");
  const [loader, showLoader] = useState(false);
  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const registerHandler = async (type, e) => {
    try {
      showLoader(true);
      if (
        email !== "" &&
        password !== "" &&
        confrimPassword !== "" &&
        name !== "" &&
        lastName !== "" &&
        stateUser !== ""
      ) {
        if (password === confrimPassword) {
          if (regEmail.test(email) === false) {
            setEmail(email);
            return false;
          } else {
            setEmail(email);
            try {
              await props.registerHandler(
                name,
                lastName,
                email,
                password,
                confrimPassword,
                address,
                stateUser
              );
            } catch (err) {
              showLoader(false);
              alert(err.message);
            }
          }
        } else {
          showLoader(false);
          alert("Your Password does not Match !");
        }
      } else {
        showLoader(false);
      }
    } catch (error) {
      showLoader(false);
    }
  };
  useEffect(() => {
    (async () => {
      if (token) {
        if (authenticated) {
          console.log("Use Effect Token");
          setTimeout(() => {
            showLoader(false);
            navigate("/");
          }, 3000);
        }

        // console.log("Use Effect :", token, authenticated);
      } else {
        console.log("Use Effect Erro:");
      }
    })();
  }, [token]);
  return (
    <>
      {loader && (
        <div className="modal_view">
          <BounceLoader color="#AF6FAC" />
          <p>Please Wait a Second .. !</p>
        </div>
      )}

      <div className="main__login d-flex justify-content-center align-items-center main__register">
        <Container>
          <Row className="auth__bg justify-content-center mt-5 mb-4">
            <Col className="d-flex align-items-center justify-content-center">
              <div className="form__div bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                  <form className="mt-4">
                    <Row>
                      <Col md={6}>
                        <div className="input__div text-start mb-4">
                          <label>Your Name</label>
                          <div className="d-flex align-items-center position-relative">
                            <span className="position-absolute icon__span">
                              <i className="fa-solid fa-user"></i>
                            </span>
                            <input
                              className="form-control"
                              placeholder="First Name"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="input__div text-start mb-4">
                          <label>Your Last Name</label>
                          <div className="d-flex align-items-center position-relative">
                            <span className="position-absolute icon__span">
                              <i className="fa-solid fa-user"></i>
                            </span>
                            <input
                              className="form-control"
                              placeholder="Last Name"
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="input__div text-start mb-4">
                          <label>Your Email</label>
                          <div className="d-flex align-items-center position-relative">
                            <span className="position-absolute icon__span">
                              <i className="fa-solid fa-envelope"></i>
                            </span>
                            <input
                              className="form-control"
                              placeholder="example@company.com"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="input__div text-start mb-4">
                          <label>Your Password</label>
                          <div className="d-flex align-items-center position-relative">
                            <span className="position-absolute icon__span">
                              <i className="fa-solid fa-lock"></i>
                            </span>
                            <input
                              className="form-control"
                              placeholder="Password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="input__div text-start mb-4">
                          <label>Confirm Password</label>
                          <div className="d-flex align-items-center position-relative">
                            <span className="position-absolute icon__span">
                              <i className="fa-solid fa-lock"></i>
                            </span>
                            <input
                              className="form-control"
                              placeholder="Confirm Password"
                              onChange={(e) =>
                                setConfrimPassword(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="input__div text-start mb-4">
                          <label>Your Address</label>
                          <div className="d-flex align-items-center position-relative">
                            <span className="position-absolute icon__span">
                              <i className="fa-solid fa-home"></i>
                            </span>
                            <input
                              className="form-control"
                              placeholder="Address"
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="input__div text-start mb-4">
                          <label>Your State</label>
                          <div className="d-flex align-items-center position-relative">
                            <span className="position-absolute icon__span">
                              <i className="fa-solid fa-user"></i>
                            </span>
                            <select
                              className="form-control"
                              onChange={(e) => setUserState(e.target.value)}
                            >
                              <option value="Pakistan">Pakistan</option>
                              <option value="India">India</option>
                            </select>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <div className="input__div text-start d-flex justify-content-between mb-4">
                      <div className="remember__me">
                        <input type="checkbox" className="me-2" />
                        <label>I agree to the terms and conditions</label>
                      </div>
                    </div>
                    <a className="mb-4 auth__btn" onClick={registerHandler}>
                      Sign up
                    </a>
                    <div className="text-center">
                      <p className="link__text">
                        Already have an account?{" "}
                        <b>
                          <a href="/Jordina/login">Login here</a>
                        </b>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
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
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
