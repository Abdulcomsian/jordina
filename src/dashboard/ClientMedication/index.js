import React from "react";
import "./style.css";

const ClientMedication = ({ blurContent, medication }) => {
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
            <th className="text-center" scope="col">Medicine Name</th>
            <th scope="col">Payment</th>
            {/* <th scope="col"></th> */}
          </tr>
        </thead>
        <tbody>
          {medication.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="date__time">
                  <span className="approved"></span>
                  Aug 24th 2022, 10:30 am
                </div>
              </td>
              <td>
                {item.doctor &&
                  item.doctor.first_name + " " + item.doctor.last_name}
              </td>
              <td>{item.disease && item.disease.title}</td>
              <td className="text-center">{item.orders!==null ? item.orders.order_items.map((item,index)=>(<span key={index}>{item.product.name+","}</span>)) :<span className="unpaid">Pending</span>}</td>
              <td>{item.orders!==null ? item.orders.amount:<span className="unpaid">Pending</span>}</td>
              {/* <td>
                <span className="view__appointment">
                  <i className="fa-solid fa-eye"></i>
                </span>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ClientMedication;
