import React from "react";

const FemaleGeneralForm = ({
  pergency,
  handlePregency,
  handleWomenCondition,
  pregencyCondition,
  handlePregencyTime,
  checkBreastFedding,
  handleFeedingTime,
  nextYearConceive,
  handleConceivePlanning,
}) => {
  return (
    <div className="female__general--form">
      <div className="form-group">
        <select
          value={pergency}
          className="form-control"
          onChange={handlePregency}
        >
          <option>
            Are you pregnant, breastfeeding, or planning to conceive?
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      {pergency == "Yes" && (
        <div className="form-group">
          <select className="form-control" onChange={handleWomenCondition}>
            <option>
              Some Question About pregnant, breastfeeding, or planning to
              conceive?
            </option>
            <option value="I am pregnant">I am pregnant</option>
            <option value="I am breastfeeding">I am breastfeeding</option>
            <option value="I am currently trying to conceive">
              I am currently trying to conceive
            </option>
            <option value="I would like to try to conceive within the next year">
              I would like to try to conceive within the next year
            </option>
            <option value="None of the above">None of the above</option>
          </select>
        </div>
      )}
      {pregencyCondition && (
        <div className="form-group">
          <select className="form-control" onChange={handlePregencyTime}>
            <option>How far along are you in your pregnancy?</option>
            <option value="1st Trimester">1st Trimester</option>
            <option value="2nd Trimester">2nd Trimester</option>
            <option value="3rd Trimester">3rd Trimester</option>
          </select>
        </div>
      )}
      {checkBreastFedding && (
        <div className="form-group">
          <select className="form-control" onChange={handleFeedingTime}>
            <option>When do you plan to stop breastfeeding?</option>
            <option value="This month">This month</option>
            <option value="1-3 months from now">1-3 months from now</option>
            <option value="More than 3 months from now">
              More than 3 months from now
            </option>
          </select>
        </div>
      )}
      {nextYearConceive && (
        <div className="form-group">
          <textarea
            rows={5}
            cols={5}
            className="form-textarea"
            placeholder="Please tell us more, including when you are planning to conceive."
            onChange={handleConceivePlanning}
          ></textarea>
        </div>
      )}
    </div>
  );
};
export default FemaleGeneralForm;
