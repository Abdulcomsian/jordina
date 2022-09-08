import React, { useState } from "react";
import { Button } from "react-bootstrap";

const GeneralForm = ({
  checkWeight,
  getHeight,
  getWeight,
  checkAlergie,
  handleAllergiesSelectChange,
  onSubmitInfo,
  showButton,
  gender,
  checkHeight
}) => {
  const [medication, setMedication] = useState(null);
  const [otherMedication, setOtherMedication] = useState(null);
  const [file, setFile] = useState(null);
  const handlerFileUpload = (e) => {
    setFile(e.target.files[0].name)
  };
  return (
    <>
      <div className="height__weight--field">
        <div className="form-group">
          <input
            onChange={(e) => getHeight(e)}
            className="form-control"
            placeholder="What is your height?"
          />
        </div>
        <div className="form-group">
          <input
            onChange={getWeight}
            className="form-control"
            placeholder="What is your weight?"
          />
        </div>
      </div>

      {checkWeight !== "" && (
        <div className="form-group">
          <select
            value={checkAlergie}
            className="form-control"
            onChange={handleAllergiesSelectChange}
          >
            <option>Do you have any allergies or medical conditions?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      )}
      {checkAlergie === "Yes" && checkWeight !== "" && (
        <>
          <div className="form-group">
            <textarea
              rows={5}
              cols={5}
              className="form-textarea"
              placeholder="What medications have you taken in the past for [SKIN CONDITION]"
              onChange={(e) => setMedication(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <textarea
              rows={5}
              cols={5}
              className="form-textarea"
              placeholder="What other medications do you currently take."
              onChange={(e) => setOtherMedication(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control"
              onChange={(handlerFileUpload)}
            />
          </div>
          <Button className="common-btn" onClick={(e)=>onSubmitInfo(medication,otherMedication,file,gender,checkWeight,checkHeight)}>
            Go to Scheduling
          </Button>
        </>
      )}
      {checkAlergie === "No" && showButton && checkWeight !== "" && (
        <Button className="common-btn" onClick={onSubmitInfo}>
          Go to Scheduling
        </Button>
      )}
    </>
  );
};
export default GeneralForm;
