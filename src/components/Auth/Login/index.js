import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { login } from "../../../redux/action/authAction";
import { useDispatch, useSelector, connect } from "react-redux";
import "../style.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const postLoginHandler = async (type, e) => {

    console.log("handle request ");
    try {
      if (email != "" && password !== "") {
        console.log(email)
        if (regEmail.test(email) === false) {
          alert("Email is Not Correct");
          setEmail(email);
          return false;
        } else {
          setEmail(email);
          alert("Email is Correct");
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
  return (
    <div className="main__login d-flex justify-content-center align-items-center">
      <Container>
        <Row className="auth__bg justify-content-center">
          <Col className="d-flex align-items-center justify-content-center">
            <div className="form__div bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              <div class="text-center text-md-center mb-4 mt-md-0">
                <h3 class="mb-0">Sign in to Jordina</h3>
                <form className="mt-4">
                  <div className="input__div text-start mb-4">
                    <label>Your Email</label>
                    <div className="d-flex align-items-center position-relative">
                      <span className="position-absolute icon__span">
                        <i class="fa-solid fa-envelope"></i>
                      </span>
                      <input
                        className="form-control"
                        placeholder="example@company.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="input__div text-start mb-4">
                    <label>Your Password</label>
                    <div className="d-flex align-items-center position-relative">
                      <span className="position-absolute icon__span">
                        <i class="fa-solid fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
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
                  <a className="mb-4" onClick={(e) => postLoginHandler(e)}>
                    Sign In
                  </a>
                  <div className="text-center">
                    <p>
                      Not registered? <b>Create account</b>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loginHandler: (email, pass) => dispatch(login(email, pass)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
