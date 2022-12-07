import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const PersonalInformationForm = ({ onSubmitInfo }) => {
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
    setState(item)
  };
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  return (
    <div className="form_box personal-info-div">
      <h3 className="title">Basic Information</h3>
      <form>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="First Name"
            onChange={(e) => setUserFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Last Name"
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
        <div className="form-group position-relative">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
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
        </div>
        <div className="form-group position-relative">
          <input
          type={showConfirmPassword ? "text" : "password"}
            className="form-control"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="position-absolute eye__icon">
            {showConfirmPassword ? (
              <i
                class="fa-solid fa-eye-slash"
                onClick={(e) => setShowConfirmPassword(!showConfirmPassword)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye"
                onClick={(e) => setShowConfirmPassword(!showConfirmPassword)}
              ></i>
            )}
          </span>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
        <ReactSearchAutocomplete
                              items={items}
                              onSelect={handleOnSelect}
                              autoFocus
                              formatResult={formatResult}
                              placeholder="Select State"
                            />
          {/* <select
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
          </select> */}
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
