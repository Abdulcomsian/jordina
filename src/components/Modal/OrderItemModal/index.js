import React, { useState } from "react";
import Modal from "react-modal";
import images from "../../../constant/images";
import "./style.css";

const OrderItemModal = ({
  modalOpen,
  modalClose,
  paidData,
  unPaidData,
  unPaidOrderAmount,
  paidOrderAmount,
  showPaidData,
  showUnPaidData,
}) => {
  console.log("User Data :", unPaidData);
  return (
    <div className="modal__div">
      <Modal isOpen={modalOpen}>
        <div className="modal__header d-flex align-items-center justify-content-between">
          <h4 className="modal__title">Order Reciept</h4>
          <span onClick={modalClose}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div className="modal__body">
          <div className="detail__div">
            <div className="user__detail text-center mt-5">
              <img src={images.receiptImg} className="img-fluid" />
            </div>
            <table className="table table-borderless mt-5">
              <thead>
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {/* {paidData.length > 0
                  ? paidData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.product.name}</td>
                        <td>{item.product.amount}</td>
                      </tr>
                    ))
                  : unPaidData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.product.amount}</td>
                        <td>{item.product.name}</td>
                      </tr>
                    ))} */}

                {showPaidData &&
                  paidData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.product.name}</td>
                      <td>{item.product.amount}</td>
                    </tr>
                  ))}
                {showUnPaidData &&
                  unPaidData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.product.amount}</td>
                      <td>{item.product.name}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="text-end">
              {unPaidOrderAmount ? (
                <p>
                  <b>Sub Total :</b> {unPaidOrderAmount}
                </p>
              ) : (
                <p>
                  <b>Sub Total :</b> {paidOrderAmount}
                </p>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default OrderItemModal;
