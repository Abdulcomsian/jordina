import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";

const SkinConditionScreen = ({
  onSkinTest,
  handleSkinCondition,
  skinDeasesName,
  skinConditionChange,
}) => {
  const [checked, setChecked] = useState(false);
  // const [indexCheck, setIndexChecked] = useState(null);
  // const getSkinCondition = (index) => {
  //   setChecked(true);
  //   setIndexChecked(index);
  //   setSkinDeasesName(skin_condition_array[index].deasesName);
  // };
  const skin_condition_array = [
    {
      deasesName: "Acne",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      deasesName: "Rosacea",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      deasesName: "Wrinkles",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      deasesName: "Redness",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      deasesName: "Lentigines",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      deasesName: "Uneven skin texture",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      deasesName: "Enlarged pores",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      deasesName: "Hyperpigmentation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      deasesName: "Melasma",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      deasesName: "Male Hair Loss",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      deasesName: "Dry skin",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      deasesName: "Dark spots",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      deasesName: "Blackheads",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      deasesName: "Not sure / I just want to talk to the dermatologist.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];
  // const handleSelectChange = (e) => {
  //   setChecked(true);
  //   setSkinDeasesName(e.target.value);
  // };
  return (
    <>
      <div className="main_skin-condition">
        <div className="form_box">
          <Container fluid>
            <h2 className="text-left title">
              Please Select your Skin Condition
            </h2>
            <Row>
              <Col>
                <div className="form-group">
                  <select
                    value={skinDeasesName}
                    className="form-control"
                    onChange={(e) => handleSkinCondition(e)}
                  >
                    <option>Select Your Skin Condition</option>
                    {skin_condition_array.map((item, key) => (
                      <option value={item.deasesName} index={key}>
                        {item.deasesName}
                      </option>
                    ))}
                  </select>
                </div>
                {skinConditionChange && (
                  <div className="form-group">
                    <Button className="common-btn" onClick={onSkinTest}>
                      Start Skin test
                    </Button>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default SkinConditionScreen;
