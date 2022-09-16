import React from "react";
import "./style.css";

const ClientMedication = ({ blurContent }) => {
  return (
    <div
      className={
        blurContent
          ? "table__div pt-5 box__shadow blur"
          : "table__div pt-5 box__shadow"
      }
    >
      <h4 className="dashboard__title">
        <i style={{ color: "#1696b9" }} className="fa-solid fa-capsules"></i>{" "}
        Client Medication
      </h4>
      <table className="table table-borderless mt-5">
        <thead>
          <tr>
            <th scope="col">Date / Time</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Diseases</th>
            <th scope="col">Medicine Name</th>
            <th scope="col">Payment</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="date__time">
                <span className="approved"></span>
                Aug 24th 2022, 10:30 am
              </div>
            </td>
            <td>Jane Lee</td>
            <td>Acne</td>
            <td>Panadol</td>
            <td>$ 15.00</td>
            <td>
              <span className="view__appointment">
                <i className="fa-solid fa-eye"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="date__time">
                <span className="approved"></span>
                Aug 24th 2022, 10:30 am
              </div>
            </td>
            <td>Ella Oliver</td>
            <td>Redness</td>
            <td>Brufen</td>
            <td>$ 45.00</td>
            <td>
              <span className="view__appointment">
                <i className="fa-solid fa-eye"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="date__time">
                <span className="cancel"></span>
                Aug 24th 2022, 10:30 am
              </div>
            </td>
            <td>Ryan McGrath</td>
            <td>Dry Skin</td>
            <td>Dicloran</td>
            <td>$ 120.00</td>
            <td>
              <span className="view__appointment">
                <i className="fa-solid fa-eye"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="date__time">
                <span className="rejected"></span>
                Aug 24th 2022, 10:30 am
              </div>
            </td>
            <td>Ryan McGrath</td>
            <td>Dry Skin</td>
            <td>Disprin</td>
            <td>$ 120.00</td>
            <td>
              <span className="view__appointment">
                <i className="fa-solid fa-eye"></i>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ClientMedication;
