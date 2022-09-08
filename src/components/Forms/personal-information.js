import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

const PersonalInformationForm = ({ onSubmitInfo }) => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  return (
    <div className="form_box">
      <h3 className="title">Basic Information</h3>
      <form>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Enter Your Name"
            onChange={(e) => setUserFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Enter Your Last Name"
            onChange={(e) => setUserLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            onChange={(e) => setState(e.target.value)}
          >
            <option>Select Your State</option>
            <option>Pakistan</option>
            <option>India</option>
            <option>UK</option>
            <option>Germany</option>
            <option>Srilanka</option>
          </select>
        </div>
        <Button
          className="common-btn"
          onClick={(e) =>
            onSubmitInfo(
              userFirstName,
              userLastName,
              email,
              password,
              confrimPassword,
              address,
              state
            )
          }
        >
          Next
        </Button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInformationForm);
