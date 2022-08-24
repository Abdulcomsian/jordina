import React, { useState } from "react";
import Modal from "react-modal";
import images from "../../../constant/images";
import "./style.css";

const AppoinemntView = ({ modalOpen, modalClose, userData }) => {
  return (
    <div className="modal__div">
      <Modal isOpen={modalOpen}>
        <div className="modal__header d-flex align-items-center justify-content-between">
          <h4 className="modal__title">Appointment</h4>
          <span onClick={modalClose}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div className="modal__body">
          <div className="detail__div">
            <div className="user__detail text-center mt-5">
              <img src={images.profileImg} className="img-fluid" />
              <h3 className="mt-4">Jessica</h3>
            </div>
            <ul>
              <li className="d-flex align-items-center justify-content-between">
                <h5>Doctor Name</h5>
                <p>{userData.doctorName}</p>
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <h5>Diseases</h5>
                <p>{userData.diseases}</p>
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <h5>Date / Time</h5>
                <p>{userData.dateTime}</p>
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <h5>Payment</h5>
                <p>{userData.payment}</p>
              </li>
            </ul>
            <div className="text-end">
              <p>
                <b>Sub Total :</b> $ 15.00
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default AppoinemntView;
