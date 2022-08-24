import React from "react";
import { Button } from "react-bootstrap";

const PersonalInformationForm = ({ onSubmitInfo }) => {
  return (
    <div className="form_box">
      <h3 className="title">Basic Information</h3>
      <form>
        <div className="form-group">
          <input className="form-control" placeholder="Enter Your Name" />
        </div>
        <div className="form-group">
          <input className="form-control" placeholder="Enter Your Last Name" />
        </div>
        <div className="form-group">
          <input className="form-control" placeholder="Email Address" />
        </div>
        <div className="form-group">
          <select className="form-control">
            <option>Select Your State</option>
            <option>Acne</option>
            <option>Alopecia areata</option>
            <option>Atopic dermatitis (eczema)</option>
            <option>Psoriasis</option>
            <option>Raynaud’s phenomenon</option>
            <option>Rosacea</option>
            <option>Skin cancer</option>
          </select>
        </div>
        <Button className="common-btn" onClick={onSubmitInfo}>
          Next
        </Button>
      </form>
    </div>
  );
};
export default PersonalInformationForm;
