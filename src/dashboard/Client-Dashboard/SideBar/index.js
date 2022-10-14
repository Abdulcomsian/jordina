import React, { useState } from "react";
import images from "../../../constant/images";
import "./style.css";

const SideBar = ({ profileClick, appoinmentClick, medicationClick,orderClick }) => {
  const [sideBarToggle, setSideBarToggle] = useState(true);
  const sideBarHandler = () => {
    setSideBarToggle(prevCheck => !prevCheck);
  };
  return (
    <div className={sideBarToggle ? "side__bar opened" : "side__bar closed"}>
      <div className="side__bar__top d-flex align-items-center justify-content-between">
        <h4 className="text-center"><a href="/Jordina">Jordina</a></h4>
        {sideBarToggle ? (
          <i className="fa-solid fa-angles-left" onClick={sideBarHandler}></i>
        ) : (
          <i className="fa-solid fa-angles-right" onClick={sideBarHandler}></i>
        )}
      </div>
      <div className="side__bar__body">
        <div className="list__div mt-5">
          <ul>
            <li>
              <a className="active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 24 24"
                  width="1em"
                  fill="currentColor"
                  className="svg-icon--material svg-icon navigation-icon"
                  data-name="Material--Dashboard"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z"
                    opacity="0.3"
                  ></path>
                  <path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path>
                </svg>
                <span>Dashboard</span>
              </a>
            </li>
            {/* <li>
              <a onClick={appoinmentClick}>
                <i className="fa-solid fa-calendar-check"></i>{" "}
                <span>Appointments</span>
              </a>
            </li> */}
            {/* <li>
              <a onClick={medicationClick}>
                <i className="fa-solid fa-capsules"></i> <span>Medication</span>
              </a>
            </li> */}
            <li>
              <a onClick={orderClick}>
                <i className="fa-solid fa-capsules"></i> <span>Orders</span>
              </a>
            </li>
            <li>
              <a onClick={profileClick}>
                <i className="fa-solid fa-user"></i> <span>Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="side__bar__footer">
        <ul>
          <li>
            <a>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};
export default SideBar;
