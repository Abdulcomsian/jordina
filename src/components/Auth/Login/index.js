import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { login } from "../../../redux/action/authAction";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "../../Loader/index";
import "../style.css";

const Login = (props) => {
  const { token, error, authenticated, statusLogout } = props;
  console.log(
    "Token :",
    token,
    "Error :",
    error,
    "Authenticated :",
    authenticated,
    "Logout Status",
    statusLogout
  );
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, showLoader] = useState(false);
  const [errorMessage, showErrorMessage] = useState(false);
  localStorage.getItem("token");
  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const postLoginHandler = async (type, e) => {
    try {
      showLoader(true);
      if (email !== "" && password !== "") {
        console.log(email);
        if (regEmail.test(email) === false) {
          setEmail(email);
          return false;
        } else {
          setEmail(email);
          try {
            await props.loginHandler(email, password);
          } catch (err) {
            alert(err.message);
          }
        }
      } else {
        alert("Please Enter Login Credential Carefully !");
      }
    } catch (error) {}
  };
  useEffect(() => {
    (async () => {
      if (token) {
        if (authenticated) {
          localStorage.setItem("token", token);
          console.log("Use Effect Token");
          setTimeout(() => {
            showLoader(false);
            navigate("/");
          }, 3000);
        }

        // console.log("Use Effect :", token, authenticated);
      } else if (error !== null) {
        console.log("here !", errorMessage, error);
        setTimeout(() => {
          showLoader(false);
          showErrorMessage(true);
        }, 3000);
      }
    })();
  }, [token, error, authenticated]);
  return (
    <>
      {loader && <Loader showLoader={loader} loaderColor={"#1696b9"} />}
      <div className="main__login d-flex justify-content-center align-items-center">
        <Container>
          <Row className="auth__bg justify-content-center">
            <Col className="d-flex align-items-center justify-content-center">
              <div className="form__div bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to Jordina</h3>
                  <form className="mt-4">
                    <div className="input__div text-start mb-4">
                      <label>Your Email</label>
                      <div className="d-flex align-items-center position-relative">
                        <span className="position-absolute icon__span">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        <input
                          className={
                            errorMessage ? "form-control error" : "form-control"
                          }
                          placeholder="example@company.com"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="input__div text-start mb-4">
                      <label>Your Password</label>
                      <div className="d-flex flex-column position-relative">
                        <span className="position-absolute icon__span">
                          <i className="fa-solid fa-lock"></i>
                        </span>
                        <input
                          type={showPassword ? "text" : "password"}
                          className={
                            errorMessage ? "form-control error" : "form-control"
                          }
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="position-absolute eye__icon">
                          {showPassword ? (
                            <i
                              class="fa-solid fa-eye-slash"
                              onClick={(e) => setShowPassword(!showPassword)}
                            ></i>
                          ) : (
                            <i
                              className="fa-solid fa-eye"
                              onClick={(e) => setShowPassword(!showPassword)}
                            ></i>
                          )}
                        </span>
                        {errorMessage && (
                          <p className="error__text text-start mb-4">{error}</p>
                        )}
                      </div>
                    </div>

                    <div className="input__div text-start d-flex justify-content-between mb-4">
                      <div className="remember__me">
                        <input type="checkbox" className="me-2" />
                        <label>Remember me</label>
                      </div>
                      <label>
                        <a>Lost Password?</a>
                      </label>
                    </div>
                    <a
                      className="mb-4 auth__btn"
                      onClick={(e) => postLoginHandler(e)}
                    >
                      Sign In
                    </a>
                    <div className="text-center">
                      <p className="link__text">
                        Not registered?{" "}
                        <b>
                          <a href="/Jordina/register">Create account</a>
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
  error: state.auth.error,
  authenticated: state.auth.authenticated,
  statusLogout: state.auth.statusLogout
});

const mapDispatchToProps = (dispatch) => ({
  loginHandler: (email, pass) => dispatch(login(email, pass)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
