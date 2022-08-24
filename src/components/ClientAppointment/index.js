import React, { useState } from "react";
import AppoinemntView from "../Modal/ClientAppoinemntView";
import Tabletile from "../TableTitle";
import "./style.css";

const ClientAppointment = ({ blurContent }) => {
  const [modalShow, setModalShow] = useState(false);
  const [userData, setUserData] = useState([]);
  const ClientAppointment = [
    {
      dateTime: "Aug 24th 2022, 10:30 am",
      doctorName: "Jane Lee",
      diseases: "Acne",
      duration: "45 min",
      payment: "$ 15.00",
      status: "Approved",
    },
    {
      dateTime: "Aug 24th 2022, 10:30 am",
      doctorName: "Ella Oliver",
      diseases: "Redness",
      duration: "45 min",
      payment: "$ 45.00",
      status: "Approved",
    },
    {
      dateTime: "Aug 24th 2022, 10:30 am",
      doctorName: "Ryan McGrath",
      diseases: "Dry Skin",
      duration: "45 min",
      payment: "$ 120.00",
      status: "Pending",
    },
    {
      dateTime: "Aug 24th 2022, 10:30 am",
      doctorName: "Ryan McGrath",
      diseases: "Dry Skin",
      duration: "45 min",
      payment: "$ 120.00",
      status: "Rejected",
    },
    {
      dateTime: "Aug 24th 2022, 10:30 am",
      doctorName: "Ryan McGrath",
      diseases: "Dry Skin",
      duration: "45 min",
      payment: "$ 120.00",
      status: "Completed",
    },
    {
      dateTime: "Aug 24th 2022, 10:30 am",
      doctorName: "Ella Oliver",
      diseases: "Redness",
      duration: "45 min",
      payment: "$ 45.00",
      status: "Completed",
    },
  ];
  const valueHandler = (e, index) => {
    let preData = [...ClientAppointment];
    setUserData(preData[index]);
    setModalShow(true);
  };
  const modalCloseHandler = () => {
    setModalShow(false);
  };
  return (
    <>
      {modalShow && (
        <AppoinemntView
          modalOpen={modalShow}
          userData={userData}
          modalClose={modalCloseHandler}
        />
      )}
      <div
        className={
          blurContent ? "client__appointment blur" : "client__appointment"
        }
      >
        <div className="upcoming__appointment pt-5">
          
          <div className="table__div table-responsive">
          <Tabletile title="Upcoming Appointment" />
            <table className="table table-borderless mt-5">
              <thead>
                <tr>
                  <th scope="col">Date / Time</th>
                  <th scope="col">Doctor Name</th>
                  <th scope="col">Diseases</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Payment</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {ClientAppointment.map(
                  (item, index) =>
                    item.status !== "Completed" && (
                      <tr key={index}>
                        <td>
                          <div className="date__time">
                            <span
                              className={
                                item.status == "Approved"
                                  ? "approved"
                                  : item.status == "Pending"
                                  ? "cancel"
                                  : "rejected"
                              }
                            ></span>
                            {item.dateTime}
                          </div>
                        </td>
                        <td>{item.doctorName}</td>
                        <td>{item.diseases}</td>
                        <td>{item.duration}</td>
                        <td>{item.payment}</td>
                        <td>
                          <span
                            className="view__appointment"
                            onClick={(e) => valueHandler(e, index)}
                          >
                            <i className="fa-solid fa-eye"></i>
                          </span>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
          <div className="table__div mt-4 table-responsive">
          <Tabletile title="Completed Appointments"/>
            <table className="table table-borderless mt-5">
              <thead>
                <tr>
                  <th scope="col">Date / Time</th>
                  <th scope="col">Doctor Name</th>
                  <th scope="col">Diseases</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Payment</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {ClientAppointment.map(
                  (items, index) =>
                    items.status == "Completed" && (
                      <tr>
                        <td>
                          <div className="date__time">
                            <span className="approved"></span>
                            {items.dateTime}
                          </div>
                        </td>
                        <td>{items.doctorName}</td>
                        <td>{items.diseases}</td>
                        <td>{items.duration}</td>
                        <td>{items.payment}</td>
                        <td>
                          <span
                            className="view__appointment"
                            onClick={(e) => valueHandler(e, index)}
                          >
                            <i className="fa-solid fa-eye"></i>
                          </span>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClientAppointment;
