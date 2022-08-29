import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import "./style.css";

const Loader = ({ showLoader, loaderColor }) => {
  return (
    showLoader && (
      <div className="modal_view">
        <BounceLoader color={loaderColor} />
        <p>Please Wait a Second .. !</p>
      </div>
    )
  );
};
export default Loader;
