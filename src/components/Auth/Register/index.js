import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css";

const Register = () => {
  return (
    <div className="main__login d-flex justify-content-center align-items-center">
      <Container>
        <Row className="auth__bg justify-content-center mt-5 mb-4">
          <Col className="d-flex align-items-center justify-content-center">
            <div className="form__div bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              <div class="text-center text-md-center mb-4 mt-md-0">
                <h3 class="mb-0">Create an account</h3>
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
                      />
                    </div>
                  </div>
                  <div className="input__div text-start mb-4">
                    <label>Your Password</label>
                    <div className="d-flex align-items-center position-relative">
                      <span className="position-absolute icon__span">
                        <i class="fa-solid fa-lock"></i>
                      </span>
                      <input className="form-control" placeholder="Password" />
                    </div>
                  </div>
                  <div className="input__div text-start mb-4">
                    <label>Confirm Password</label>
                    <div className="d-flex align-items-center position-relative">
                      <span className="position-absolute icon__span">
                        <i class="fa-solid fa-lock"></i>
                      </span>
                      <input
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  <div className="input__div text-start d-flex justify-content-between mb-4">
                    <div className="remember__me">
                      <input type="checkbox" className="me-2" />
                      <label>I agree to the terms and conditions</label>
                    </div>
                  </div>
                  <button className="mb-4">Sign up</button>
                  <div className="text-center">
                    <p>
                      Already have an account? <b>Login here</b>
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
export default Register;
