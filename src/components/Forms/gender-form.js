import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
    heightWeightFlag && setHeightWeightFlag(false);
    setPregency(e.target.value);
    setHeightWeightFlag(true);
  };

  const handleSelectChange = (e) => {
    heightWeightFlag && setHeightWeightFlag(false);
    checkWeight !== "" && setCheckWeight("");
    checkAlergie !== "" && setCheckAlergie("");
    pergency !== "" && setPregency("");
    pregencyTime !== "" && setPregencyTime("");
    checkBreastFedding !== "" && setCheckBreastFeeding("");
    feedingTime !== "" && setFeedingTime("");
    conceivePlanning !== "" && setConceivePlanning("");
    setPregencyCondition(false);
    setCheckBreastFeeding(false);
    setCurrentlyConceive(false);
    setNextYearConceive(false);
    setOtherCondition(false);
    setHeightWeightFlag(false);
    setGender(e.target.value);
    if (
      e.target.value === "Male" ||
      e.target.value === "I need to provide more information"
    ) {
      setHeightWeightFlag(true);
    }
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
    setCheckAlergie !== "" && setCheckAlergie("");
    setCheckWeight(e.target.value);
  };
  const handleWomenCondition = (e) => {
    heightWeightFlag && setHeightWeightFlag(false);
    setPregencyCondition(false);
    setCheckBreastFeeding(false);
    setFeedingTime !== "" && setFeedingTime("");
    conceivePlanning !== "" && setConceivePlanning("");
    setCurrentlyConceive(false);
    setNextYearConceive(false);
    setOtherCondition(false);
    if (e.target.value === "I am pregnant") {
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
      checkAlergie !== "" && setCheckAlergie("");
      checkWeight !== "" && setCheckWeight("");
      pregencyTime !== "" && setPregencyTime("");
      feedingTime !== "" && setFeedingTime("");
      conceivePlanning !== "" && setConceivePlanning("");
      heightWeightFlag && setHeightWeightFlag(false);
      setCurrentlyConceive(true);
      setCheckBreastFeeding(false);
      setPregencyCondition(false);
      setNextYearConceive(false);
      setOtherCondition(false);
      setHeightWeightFlag(true);
    } else if (
      e.target.value === "I would like to try to conceive within the next year"
    ) {
      setNextYearConceive(true);
      setCurrentlyConceive(false);
      setCheckBreastFeeding(false);
      setPregencyCondition(false);
      setOtherCondition(false);
    } else if (e.target.value === "None of the above") {
      checkAlergie !== "" && setCheckAlergie("");
      checkWeight !== "" && setCheckWeight("");
      pregencyTime !== "" && setPregencyTime("");
      feedingTime !== "" && setFeedingTime("");
      conceivePlanning !== "" && setConceivePlanning("");
      heightWeightFlag && setHeightWeightFlag(false);
      setOtherCondition(true);
      setNextYearConceive(false);
      setCurrentlyConceive(false);
      setCheckBreastFeeding(false);
      setPregencyCondition(false);
      setHeightWeightFlag(true);
    }
    setWomenCondition(e.target.value);
  };
  const handlePregencyTime = (e) => {
    checkAlergie !== "" && setCheckAlergie("");
    checkWeight !== "" && setCheckWeight("");
    pregencyTime !== "" && setPregencyTime("");
    feedingTime !== "" && setFeedingTime("");
    conceivePlanning !== "" && setConceivePlanning("");
    heightWeightFlag && setHeightWeightFlag(false);
    setPregencyTime(e.target.value);
    setHeightWeightFlag(true);
  };
  const handleFeedingTime = (e) => {
    checkAlergie !== "" && setCheckAlergie("");
    checkWeight !== "" && setCheckWeight("");
    pregencyTime !== "" && setPregencyTime("");
    conceivePlanning !== "" && setConceivePlanning("");
    feedingTime !== "" && setFeedingTime("");
    heightWeightFlag && setHeightWeightFlag(false);
    setFeedingTime(e.target.value);
    setHeightWeightFlag(true);
  };
  const handleConceivePlanning = (e) => {
    checkAlergie !== "" && setCheckAlergie("");
    checkWeight !== "" && setCheckWeight("");
    conceivePlanning !== "" && setConceivePlanning("");
    pregencyTime !== "" && setPregencyTime("");
    feedingTime !== "" && setFeedingTime("");
    heightWeightFlag && setHeightWeightFlag(false);
    setConceivePlanning(e.target.value);
    setHeightWeightFlag(true);
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
              {gender === "Male"
                ? heightWeightFlag && (
                    <GeneralForm
                      checkWeight={checkWeight}
                      alergieNotExist={alergieNotExist}
                      alergieExist={alergieExist}
                      getHeight={getHeight}
                      getWeight={getWeight}
                      checkAlergie={checkAlergie}
                      handleAllergiesSelectChange={handleAllergiesSelectChange}
                      onSubmitInfo={onSubmitInfo}
                      showButton={showShecduling}
                      gender={gender}
                      checkHeight={checkHeight}
                    />
                  )
                : gender === "Female" && (
                    <FemaleGeneralForm
                      gender={gender}
                      checkHeight={checkHeight}
                      pergency={pergency}
                      handlePregency={handlePregency}
                      handleWomenCondition={handleWomenCondition}
                      womenCondition={womenCondition}
                      pregencyCondition={pregencyCondition}
                      handlePregencyTime={handlePregencyTime}
                      checkBreastFedding={checkBreastFedding}
                      handleFeedingTime={handleFeedingTime}
                      nextYearConceive={nextYearConceive}
                      handleConceivePlanning={handleConceivePlanning}
                      currentlyConceive={currentlyConceive}
                      heightWeightFlag={heightWeightFlag}
                      checkWeight={checkWeight}
                      alergieNotExist={alergieNotExist}
                      alergieExist={alergieExist}
                      getHeight={getHeight}
                      getWeight={getWeight}
                      checkAlergie={checkAlergie}
                      handleAllergiesSelectChange={handleAllergiesSelectChange}
                      onSubmitInfo={onSubmitInfo}
                      showButton={showShecduling}
                      pregencyTime={pregencyTime}
                      feedingTime={feedingTime}
                      conceivePlanning={conceivePlanning}
                      otherCondition={otherCondition}
                    />
                  )}
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default GenderForm;
