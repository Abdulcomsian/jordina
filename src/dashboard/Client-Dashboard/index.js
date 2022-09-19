import React, { useState, useEffect } from "react";
import DashBoardHeader from "../../components/Header/DashboardHeader";
import ClientApointment from "../ClientAppointment/index";
import ClientProfile from "../ClientProfile";
import ClientMedication from "../ClientMedication";
import BounceLoader from "react-spinners/BounceLoader";
import { connect } from "react-redux";
import SideBar from "./SideBar";
import { getUserDetail } from "../../redux/action/dashboardAction";
import "./style.css";
const ClientDashboard = (props) => {
  const { token,loginUser } = props;
  console.log("Token Dahbaord :", token,loginUser)
  const [appointment, setAppoinment] = useState(true);
  const [profile, setProfile] = useState(false);
  const [medication, setMedication] = useState(false);
  const [loading, setLoading] = useState(false);

  const profileClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAppoinment(false);
      setProfile(true);
      setMedication(false);
    }, 3000);
  };
  const appoinmentClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAppoinment(true);
      setProfile(false);
      setMedication(false);
    }, 3000);
  };
  const medicationClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAppoinment(false);
      setProfile(false);
      setMedication(true);
    }, 3000);
  };

  useEffect(() => {
    const fetchLoginUserDetail = async () => {
      try {
        await props.userDetail(token);
      } catch (err) {
        // alert(err.message);
      }
    };
    fetchLoginUserDetail().catch(console.error);
  }, [token]);
  return (
    <div className="client__dashboard">
      <main>
        <div className="main__wrapper">
          <div className="sidebar__dashboard__content d-flex justify-content-between">
            <SideBar
              profileClick={profileClick}
              appoinmentClick={appoinmentClick}
              medicationClick={medicationClick}
            />
            <div className="dashboard__content">
              <DashBoardHeader />

              {loading && (
                <div className="loader">
                  <BounceLoader color="#1695b9" />
                  <p>Please Wait a Second .. !</p>
                </div>
              )}
              {appointment ? (
                <ClientApointment blurContent={loading} />
              ) : profile ? (
                <ClientProfile blurContent={loading} userData={loginUser} />
              ) : (
                medication && <ClientMedication blurContent={loading} />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  loginUser: state.dashBoardReducer.userData
});

const mapDispatchToProps = (dispatch) => ({
  userDetail: (token) => dispatch(getUserDetail(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ClientDashboard);
