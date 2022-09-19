import React from "react";
import images from "../../../constant/images";
import "./style.css";
import { connect } from "react-redux";

const DashBoardHeader = (props) => {
    const {loginUser} = props
  return (
    <div className="dashboard__header d-flex align-items-center justify-content-end">
      <ul>
        <li>
          <a className="d-flex align-items-center justify-content-center">
            <div className="client__info me-3">
              <p>{loginUser.first_name}</p>
              <span>User</span>
            </div>
            <img src={images.profileImg} className="img-fluid" />
          </a>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  loginUser: state.dashBoardReducer.userData,
});

const mapDispatchToProps = (dispatch) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(DashBoardHeader);
