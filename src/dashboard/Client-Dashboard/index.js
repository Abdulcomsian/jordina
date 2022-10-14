import React, { useState, useEffect } from "react";
import DashBoardHeader from "../../components/Header/DashboardHeader";
import ClientApointment from "../ClientAppointment/index";
import ClientProfile from "../ClientProfile";
import ClientMedication from "../ClientMedication";
import ClientOrder from "../ClientOrder";
import BounceLoader from "react-spinners/BounceLoader";
import { connect } from "react-redux";
import SideBar from "./SideBar";
import {
  getUserDetail,
  getClientOrder,
  getUnPaidOrder,
  removeUnPaidData,
} from "../../redux/action/dashboardAction";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";

const ClientDashboard = (props) => {
  const { token, loginUser, orderPaidData, unPaidOrder, refreshData } = props;
  console.log("Token Dahbaord :", unPaidOrder);
  const [appointment, setAppoinment] = useState(false);
  const [profile, setProfile] = useState(false);
  const [medication, setMedication] = useState(false);
  const [order, setOrder] = useState(true);
  const [loading, setLoading] = useState(false);

  const profileClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAppoinment(false);
      setProfile(true);
      setMedication(false);
      setOrder(false);
    }, 3000);
  };
  const appoinmentClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAppoinment(true);
      setProfile(false);
      setMedication(false);
      setOrder(false);
    }, 3000);
  };
  const medicationClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAppoinment(false);
      setProfile(false);
      setMedication(true);
      setOrder(false);
    }, 3000);
  };
  const orderClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAppoinment(false);
      setProfile(false);
      setMedication(false);
      setOrder(true);
    }, 3000);
  };
  const fetchLoginUserDetail = async () => {
    try {
      await props.userDetail(token);
    } catch (err) {
    }
  };
  const fetchClientOrder = async () => {
    try {
      await props.clientOrder(token);
    } catch (err) {
    }
  };
  const fetchClientOrderUnpaid = async () => {
    try {
      await props.clientUnPaidOrder(token);
    } catch (err) {
      // alert(err.message);
    }
  };
  useEffect(() => {
    fetchLoginUserDetail().catch(console.error);
    fetchClientOrder().catch(console.error);
    fetchClientOrderUnpaid().catch(console.error());
  }, [token, refreshData]);

  const removeUnPaidData = async (e, id) => {
    const response = await props.removeDataHanlder(id, token);
    if (response === 200) {
      fetchClientOrderUnpaid().catch(console.error());
      // setTimeout(() => {
      //   window.location.reload(true);
      // }, 1000);
      toast.success("Order Delete SuccessFully !".toString(), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="client__dashboard">
        <main>
          <div className="main__wrapper">
            <div className="sidebar__dashboard__content d-flex justify-content-between">
              <SideBar
                profileClick={profileClick}
                appoinmentClick={appoinmentClick}
                medicationClick={medicationClick}
                orderClick={orderClick}
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
                ) : order ? (
                  <ClientOrder
                    blurContent={loading}
                    orderPaidData={orderPaidData}
                    unPaidOrder={unPaidOrder}
                    removeUnPaidData={removeUnPaidData}
                  />
                ) : (
                  medication && <ClientMedication blurContent={loading} />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  loginUser: state.dashBoardReducer.userData,
  orderPaidData: state.dashBoardReducer.orderData,
  unPaidOrder: state.dashBoardReducer.unPaidOrder,
  refreshData: state.dashBoardReducer.refreshData,
});

const mapDispatchToProps = (dispatch) => ({
  userDetail: (token) => dispatch(getUserDetail(token)),
  clientOrder: (token) => dispatch(getClientOrder(token)),
  clientUnPaidOrder: (token) => dispatch(getUnPaidOrder(token)),
  removeDataHanlder: (id, token) => dispatch(removeUnPaidData(id, token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ClientDashboard);
