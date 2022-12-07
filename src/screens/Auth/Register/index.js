import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { register } from "../../../redux/action/authAction";
import { useNavigate } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "../style.css";

const Register = (props) => {
  const items = [
    {
      id: 0,
      name: "Alabama",
    },
    {
      id: 1,
      name: "Georgia",
    },
    {
      id: 2,
      name: "South Carolina",
    },
    {
      id: 3,
      name: "Oregon",
    },
    {
      id: 4,
      name: "Florida",
    },
    {
      id: 5,
      name: "Alaska",
    },
    {
      id: 6,
      name: "Arizona",
    },
    {
      id: 7,
      name: "Arkansas",
    },
    {
      id: 8,
      name: "California",
    },
    {
      id: 9,
      name: "Colorado",
    },
    {
      id: 10,
      name: "Connecticut",
    },
    {
      id: 11,
      name: "Delaware",
    },
    {
      id: 12,
      name: "District Of Columbia",
    },
    {
      id: 13,
      name: "Hawaii",
    },
    {
      id: 14,
      name: "Idaho",
    },
    {
      id: 15,
      name: "Illinois",
    },
    {
      id: 16,
      name: "Indiana",
    },
    {
      id: 17,
      name: "Iowa",
    },
    {
      id: 18,
      name: "Kansas",
    },
    {
      id: 19,
      name: "Kentucky",
    },
    {
      id: 20,
      name: "Louisiana",
    },
    {
      id: 21,
      name: "Maine",
    },
    {
      id: 22,
      name: "Maryland",
    },
    {
      id: 23,
      name: "Massachusetts",
    },
    {
      id: 24,
      name: "Michigan",
    },
    {
      id: 25,
      name: "Minnesota",
    },
    {
      id: 26,
      name: "Mississippi",
    },
    {
      id: 27,
      name: "Missouri",
    },
    {
      id: 28,
      name: "Montana",
    },
    {
      id: 29,
      name: "Nebraska",
    },
    {
      id: 30,
      name: "Nevada",
    },
    {
      id: 31,
      name: "New Hampshire",
    },
    {
      id: 32,
      name: "New Jersey",
    },
    {
      id: 33,
      name: "New Mexico",
    },
    {
      id: 34,
      name: "New York",
    },
    {
      id: 35,
      name: "North Carolina",
    },
    {
      id: 36,
      name: "North Dakota",
    },
    {
      id: 37,
      name: "Ohio",
    },
    {
      id: 38,
      name: "Oklahoma",
    },
    {
      id: 39,
      name: "Oregon",
    },
    {
      id: 40,
      name: "Pennsylvania",
    },
    {
      id: 41,
      name: "Rhode Island",
    },
    {
      id: 42,
      name: "South Carolina",
    },
    {
      id: 43,
      name: "South Dakota",
    },
    {
      id: 44,
      name: "Tennessee",
    },
    {
      id: 45,
      name: "Texas",
    },
    {
      id: 46,
      name: "Utah",
    },
    {
      id: 47,
      name: "Vermont",
    },
    {
      id: 48,
      name: "Virginia",
    },
    {
      id: 49,
      name: "Washington",
    },
    {
      id: 50,
      name: "West Virginia",
    },
    {
      id: 51,
      name: "Wisconsin",
    },
    {
      id: 52,
      name: "Wyoming",
    },
  ];

  const handleOnSelect = (item) => {
    setUserState(item)
  };
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };
  const {
    navigation,
    token,
    errorEmail,
    errorFirstName,
    errorLastName,
    authenticated,
  } = props;
  console.log("Index:", token);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfrimPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [stateUser, setUserState] = useState("");
  const [loader, showLoader] = useState(false);
  const [errorMessage, showErrorMessage] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [lastError, setLastError] = useState(false);
  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const registerHandler = async (type, e) => {
    console.log(stateUser.name)
    try {
      showLoader(true);
      if (
        name != "" &&
        lastName != "" &&
        email != "" &&
        password != "" &&
        confrimPassword != "" &&
        stateUser != ""
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
                stateUser.name
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
        showErrorMessage(true);
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
      } else if (errorEmail != null) {
        setTimeout(() => {
          showLoader(false);
          setEmailError(true);
        }, 3000);
      } else if (errorFirstName != null) {
        setTimeout(() => {
          showLoader(false);
          setNameError(true);
        }, 3000);
      } else if (errorLastName != null) {
        setTimeout(() => {
          showLoader(false);
          setLastError(true);
        }, 3000);
      }
    })();
  }, [token, errorEmail, errorFirstName, errorLastName]);
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
                          <div className="d-flex flex-column position-relative">
                            <span className="position-absolute icon__span">
                              <i className="fa-solid fa-user"></i>
                            </span>
                            <input
                              className={
                                errorMessage
                                  ? "form-control error"
                                  : "form-control"
                              }
                              placeholder="First Name"
                              onChange={(e) => setName(e.target.value)}
                            />
                            {nameError && (
                              <p className="text-start error__text mt-1">
                                {errorFirstName}
                              </p>
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="input__div text-start mb-4">
                          <label>Your Last Name</label>
                          <div className="d-flex flex-column position-relative">
                            <span className="position-absolute icon__span">
                              <i className="fa-solid fa-user"></i>
                            </span>
                            <input
                              className={
                                errorMessage
                                  ? "form-control error"
                                  : "form-control"
                              }
                              placeholder="Last Name"
                              onChange={(e) => setLastName(e.target.value)}
                            />
                            {lastError && (
                              <p className="text-start error__text mt-1">
                                {errorLastName}
                              </p>
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="input__div text-start mb-4">
                          <label>Your Email</label>
                          <div className="d-flex flex-column position-relative">
                            <span className="position-absolute icon__span">
                              <i className="fa-solid fa-envelope"></i>
                            </span>
                            <input
                              className={
                                errorMessage
                                  ? "form-control error"
                                  : "form-control"
                              }
                              placeholder="example@company.com"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && (
                              <p className="text-start error__text mt-1">
                                {errorEmail}
                              </p>
                            )}
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
                              type={showPassword ? "text" : "password"}
                              className={
                                errorMessage
                                  ? "form-control error"
                                  : "form-control"
                              }
                              placeholder="Password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="position-absolute eye__icon">
                              {showPassword ? (
                                <i
                                  class="fa-solid fa-eye-slash"
                                  onClick={(e) =>
                                    setShowPassword(!showPassword)
                                  }
                                ></i>
                              ) : (
                                <i
                                  className="fa-solid fa-eye"
                                  onClick={(e) =>
                                    setShowPassword(!showPassword)
                                  }
                                ></i>
                              )}
                            </span>
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
                              type={showConfirmPassword ? "text" : "password"}
                              className={
                                errorMessage
                                  ? "form-control error"
                                  : "form-control"
                              }
                              placeholder="Confirm Password"
                              onChange={(e) =>
                                setConfrimPassword(e.target.value)
                              }
                            />
                            <span className="position-absolute eye__icon">
                              {showConfirmPassword ? (
                                <i
                                  class="fa-solid fa-eye-slash"
                                  onClick={(e) =>
                                    setShowConfrimPassword(!showConfirmPassword)
                                  }
                                ></i>
                              ) : (
                                <i
                                  className="fa-solid fa-eye"
                                  onClick={(e) =>
                                    setShowConfrimPassword(!showConfirmPassword)
                                  }
                                ></i>
                              )}
                            </span>
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
                              className={
                                errorMessage
                                  ? "form-control error"
                                  : "form-control"
                              }
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
                            {/* <select
                              className={
                                errorMessage
                                  ? "form-control error"
                                  : "form-control"
                              }
                              onChange={(e) => setUserState(e.target.value)}
                            >
                              <option value="Your State">Your State</option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="DC">District Of Columbia</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY">New York</option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                            </select> */}
                            <ReactSearchAutocomplete
                              items={items}
                              onSelect={handleOnSelect}
                              autoFocus
                              formatResult={formatResult}
                            />
                          </div>
                          {/* {errorMessage && (
                            <p className="text-start error__text">{error}</p>
                          )} */}
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
  errorEmail: state.auth.errorEmail,
  errorFirstName: state.auth.errorFirstName,
  errorLastName: state.auth.errorLastName,
  authenticated: state.auth.authenticated,
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
