import React from "react";
import images from "../../../constant/images";
import "./style.css";

const DashBoardHeader = () =>{
    return(
        <div className="dashboard__header d-flex align-items-center justify-content-end">
            <ul>
                <li>
                    <a className="d-flex align-items-center justify-content-center">
                        <div className="client__info me-3">
                            <p>Jessica</p>
                            <span>User</span>
                        </div>
                        <img src={images.profileImg} className="img-fluid"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default DashBoardHeader;