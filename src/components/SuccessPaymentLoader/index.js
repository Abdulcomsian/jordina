import React from "react";
import "./style.css";
import Lottie from "react-lottie";
import animationData from "../Lottie/success.json";

const SuccessLoader = ({ showSuccess }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    showSuccess && (
      <>
        <h4>SuccessFully Payment Done !</h4>
        <Lottie options={defaultOptions} height={300} width={300} />
      </>
    )
  );
};
export default SuccessLoader;
