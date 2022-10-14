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
