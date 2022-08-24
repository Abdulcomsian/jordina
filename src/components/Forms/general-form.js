import React from "react";
import { Button } from "react-bootstrap";

const GeneralForm = ({
  getHeightWeight,
  alergieNotExist,
  alergieExist,
  getHeight,
  getWeight,
  checkAlergie,
  handleAllergiesSelectChange,
  onSubmitInfo,
  showButton,

}) => {
  console.log("General Form :", getHeightWeight, "Alergi :", checkAlergie);
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

      {getHeightWeight !== "" && (
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
      {checkAlergie == "Yes" && (
        <>
          <div className="form-group">
            <textarea
              rows={5}
              cols={5}
              className="form-textarea"
              placeholder="What medications have you taken in the past for [SKIN CONDITION]"
            ></textarea>
          </div>
          <div className="form-group">
            <textarea
              rows={5}
              cols={5}
              className="form-textarea"
              placeholder="What other medications do you currently take."
            ></textarea>
          </div>
          <div className="form-group">
            <input type="file" className="form-control" />
          </div>
          <Button className="common-btn" onClick={onSubmitInfo}>
            Go to Scheduling
          </Button>
        </>
      )}
      {checkAlergie == "No" && showButton && getHeightWeight !== "" && (
        <Button className="common-btn" onClick={onSubmitInfo}>
          Go to Scheduling
        </Button>
      )}
    </>
  );
};
export default GeneralForm;
