import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import GeneralForm from "./general-form";
import FemaleGeneralForm from "./female-general-form";
import "./style.css";

const GenderForm = ({ onSubmitInfo }) => {
  const [gender, setGender] = useState(null);
  const [heightWeightFlag, setHeightWeightFlag] = useState(false);
  const [showShecduling, setShowShecduling] = useState(false);
  const [checkHeight, setCheckHeight] = useState("");
  const [checkWeight, setCheckWeight] = useState("");
  const [getHeightWeight, setGetHeightWeight] = useState(false);
  const [checkAlergie, setCheckAlergie] = useState("");
  const [alergieExist, setAlergieExist] = useState(false);
  const [alergieNotExist, setAlergieNotExist] = useState(false);
  const [pergency, setPregency] = useState("");
  const [pergencyExist, setPregencyExist] = useState(false);
  const [pergencyNotExist, setPregencyNotExist] = useState(false);
  const [womenCondition, setWomenCondition] = useState(null);
  const [pregencyCondition, setPregencyCondition] = useState(false);
  const [pregencyTime, setPregencyTime] = useState("");
  const [checkBreastFedding, setCheckBreastFeeding] = useState(false);
  const [feedingTime, setFeedingTime] = useState("");
  const [currentlyConceive, setCurrentlyConceive] = useState(false);
  const [nextYearConceive, setNextYearConceive] = useState(false);
  const [conceivePlanning, setConceivePlanning] = useState("");
  const [otherCondition, setOtherCondition] = useState(false);
  const [moreInfo, setMoreInfo] = useState("");

  const handlePregency = (e) => {
    console.log("Pregency");
    setPregency(e.target.value);
  };

  const handleSelectChange = (e) => {
    setGender(e.target.value);
    setHeightWeightFlag(true);
    console.log("Your Gender :", gender, heightWeightFlag);
  };
  const handleAllergiesSelectChange = (e) => {
    setCheckAlergie(e.target.value);
    if (!showShecduling) {
      setShowShecduling(true);
    }
  };
  const getHeight = (e) => {
    setCheckHeight(e.target.value);
  };
  const getWeight = async (e) => {
    setCheckWeight(e.target.value);
  };
  const handleWomenCondition = (e) => {
    if (e.target.value == "I am pregnant") {
      setPregencyCondition(true);
      setCheckBreastFeeding(false);
      setCurrentlyConceive(false);
      setNextYearConceive(false);
      setOtherCondition(false);
    } else if (e.target.value === "I am breastfeeding") {
      setCheckBreastFeeding(true);
      setPregencyCondition(false);
      setCurrentlyConceive(false);
      setNextYearConceive(false);
      setOtherCondition(false);
    } else if (e.target.value === "I am currently trying to conceive") {
      setCurrentlyConceive(true);
      setCheckBreastFeeding(false);
      setPregencyCondition(false);
      setNextYearConceive(false);
      setOtherCondition(false);
    } else if (
      e.target.value === "I would like to try to conceive within the next year"
    ) {
      setNextYearConceive(true);
      setCurrentlyConceive(false);
      setCheckBreastFeeding(false);
      setPregencyCondition(false);
      setOtherCondition(false);
    } else if (e.target.value === "None of the above") {
      setOtherCondition(true);
      setNextYearConceive(false);
      setCurrentlyConceive(false);
      setCheckBreastFeeding(false);
      setPregencyCondition(false);
    }
    setWomenCondition(e.target.value);
  };
  const handlePregencyTime = (e) => {
    setPregencyTime(e.target.value);
    setHeightWeightFlag(true);
  };
  const handleFeedingTime = (e) => {
    setFeedingTime(e.target.value);

    setHeightWeightFlag(true);
  };
  const handleConceivePlanning = (e) => {
    setConceivePlanning(e.target.value);
  };
  const moreInfoHandler = (e) => {
    setMoreInfo(e.target.value);
  };
  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <Col lg={6}>
          <div className="form_box">
            <h3 className="title">What sex were you assigned at birth?</h3>
            <form>
              <div className="form-group">
                <select
                  className="form-control"
                  onChange={(e) => handleSelectChange(e)}
                >
                  <option>Select your Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>I need to provide more information</option>
                </select>
              </div>
              {gender == "I need to provide more information" && (
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Please provide more information"
                    onChange={moreInfoHandler}
                  />
                </div>
              )}
              {gender == "I need to provide more information" && moreInfo !== "" && (
                <FemaleGeneralForm
                  pergency={pergency}
                  handlePregency={handlePregency}
                  handleWomenCondition={handleWomenCondition}
                  pregencyCondition={pregencyCondition}
                  handlePregencyTime={handlePregencyTime}
                  checkBreastFedding={checkBreastFedding}
                  handleFeedingTime={handleFeedingTime}
                  nextYearConceive={nextYearConceive}
                  handleConceivePlanning={handleConceivePlanning}
                />
              )}
              {gender == "I need to provide more information" && moreInfo !== "" && pergency == "No" && (
                <GeneralForm
                  getHeightWeight={checkWeight}
                  alergieNotExist={alergieNotExist}
                  alergieExist={alergieExist}
                  getHeight={getHeight}
                  getWeight={getWeight}
                  checkAlergie={checkAlergie}
                  handleAllergiesSelectChange={handleAllergiesSelectChange}
                  onSubmitInfo={onSubmitInfo}
                  showButton={showShecduling}
                />
              )}
              {gender === "Female" && (
                <FemaleGeneralForm
                  pergency={pergency}
                  handlePregency={handlePregency}
                  handleWomenCondition={handleWomenCondition}
                  pregencyCondition={pregencyCondition}
                  handlePregencyTime={handlePregencyTime}
                  checkBreastFedding={checkBreastFedding}
                  handleFeedingTime={handleFeedingTime}
                  nextYearConceive={nextYearConceive}
                  handleConceivePlanning={handleConceivePlanning}
                />
              )}
              {gender == "Male" ? (
                heightWeightFlag && (
                  <GeneralForm
                    getHeightWeight={checkWeight}
                    alergieNotExist={alergieNotExist}
                    alergieExist={alergieExist}
                    getHeight={getHeight}
                    getWeight={getWeight}
                    checkAlergie={checkAlergie}
                    handleAllergiesSelectChange={handleAllergiesSelectChange}
                    onSubmitInfo={onSubmitInfo}
                    showButton={showShecduling}
                  />
                )
              ) : gender == "Female" && pergency == "No" ? (
                <GeneralForm
                  getHeightWeight={checkWeight}
                  alergieNotExist={alergieNotExist}
                  alergieExist={alergieExist}
                  getHeight={getHeight}
                  getWeight={getWeight}
                  checkAlergie={checkAlergie}
                  handleAllergiesSelectChange={handleAllergiesSelectChange}
                  onSubmitInfo={onSubmitInfo}
                  showButton={showShecduling}
                />
              ) : currentlyConceive ? (
                <GeneralForm
                  getHeightWeight={checkWeight}
                  alergieNotExist={alergieNotExist}
                  alergieExist={alergieExist}
                  getHeight={getHeight}
                  getWeight={getWeight}
                  checkAlergie={checkAlergie}
                  handleAllergiesSelectChange={handleAllergiesSelectChange}
                  onSubmitInfo={onSubmitInfo}
                  showButton={showShecduling}
                />
              ) : pregencyTime && pregencyCondition ? (
                <GeneralForm
                  getHeightWeight={checkWeight}
                  alergieNotExist={alergieNotExist}
                  alergieExist={alergieExist}
                  getHeight={getHeight}
                  getWeight={getWeight}
                  checkAlergie={checkAlergie}
                  handleAllergiesSelectChange={handleAllergiesSelectChange}
                  onSubmitInfo={onSubmitInfo}
                  showButton={showShecduling}
                />
              ) : feedingTime && checkBreastFedding ? (
                <GeneralForm
                  getHeightWeight={checkWeight}
                  alergieNotExist={alergieNotExist}
                  alergieExist={alergieExist}
                  getHeight={getHeight}
                  getWeight={getWeight}
                  checkAlergie={checkAlergie}
                  handleAllergiesSelectChange={handleAllergiesSelectChange}
                  onSubmitInfo={onSubmitInfo}
                  showButton={showShecduling}
                />
              ) : conceivePlanning ? (
                <GeneralForm
                  getHeightWeight={checkWeight}
                  alergieNotExist={alergieNotExist}
                  alergieExist={alergieExist}
                  getHeight={getHeight}
                  getWeight={getWeight}
                  checkAlergie={checkAlergie}
                  handleAllergiesSelectChange={handleAllergiesSelectChange}
                  onSubmitInfo={onSubmitInfo}
                  showButton={showShecduling}
                />
              ) : (
                otherCondition && (
                  <GeneralForm
                    getHeightWeight={checkWeight}
                    alergieNotExist={alergieNotExist}
                    alergieExist={alergieExist}
                    getHeight={getHeight}
                    getWeight={getWeight}
                    checkAlergie={checkAlergie}
                    handleAllergiesSelectChange={handleAllergiesSelectChange}
                    onSubmitInfo={onSubmitInfo}
                    showButton={showShecduling}
                  />
                )
              )}
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default GenderForm;
