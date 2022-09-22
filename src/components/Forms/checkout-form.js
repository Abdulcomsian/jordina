import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CardElement } from "@stripe/react-stripe-js";
import { connect } from "react-redux";
import images from "../../constant/images";
import { checkOutPayment } from "../../redux/action/cartAction";
import SuccessLoader from "../SuccessPaymentLoader/index";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../Loader/index";
import { ToastContainer, toast } from "react-toastify";
import {
  refreshFlag,
  orderRecieptFlag,
} from "../../redux/action/cartAction.js";

const Checkout = (props) => {
  const {
    addedItems,
    totalAmount,
    stripe,
    elements,
    token,
    orderPlace,
    orderReciept,
    orderId,
  } = props;
  const { state } = useLocation();
  console.log("Order Id :", orderId);
  const { data, totalPayAmount, order_item_id } = state;
  console.log("Order Item Id :", order_item_id);
  const [payData, setPayData] = useState(data);
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const [name, setName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState(null);
  const [showSuccessLoader, setShowSuccessLoader] = useState(false);
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);
  const [clientKey, setClientKey] = useState(null);
  const [showData, setShowData] = useState(false);
  const [payment, setPayment] = useState(totalPayAmount);
  const [orderItemId, setOrderItemId] = useState(order_item_id);
  const handlePayment = async (e) => {
    setShowLoader(true);
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      var error = result.error.message;
      toast.error(error.toString(), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(result.error.message);
    } else {
      console.log(result.token);
      try {
        const response = await props.paymentHandler(
          payment,
          result.token.id,
          token,
          addedItems,
          orderItemId
        );
        console.log(
          "Response  :",
          response,
          response.data.data.result.client_secret
        );
        if (response.status === 200) {
          const confrimPayment = await stripe.confirmCardPayment(
            response.data.data.result.client_secret,
            {
              payment_method: { card: card },
            }
          );
          console.log("ConfrimPayment :", confrimPayment);
          const { paymentIntent } = confrimPayment;
          if (paymentIntent.status === "succeeded") {
            setShowLoader(false);
            setShowSuccessLoader(true);
          } else {
            setShowLoader(false);
            toast.error("Payment Failed !", {
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
        } else {
          setShowLoader(false);
          toast.error("Payment Failed !", {
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
      } catch (error) {
        setShowLoader(false);
        toast.error("Payment Failed !", {
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
    }
  };
  const goToProduct = async () => {
    const result = await props.orderRecieptFlagHandler();
    setTimeout(() => {
      setShowSuccessLoader(false);
    }, 2000);
    navigate("/products");
  };
  useEffect(() => {
    if (orderPlace) {
      props.refreshOrderPlaceFlag();
    } else if (payData.length > 0) {
      props.refreshOrderPlaceFlag();
    } else if (orderReciept.length > 0) {
      setShowData(true);
      setPayment(totalAmount);
      setOrderItemId(orderId);
    }
  });
  return (
    <>
      {showLoader && <Loader showLoader={showLoader} loaderColor="#af6fac" />}
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
      <ToastContainer />

      {showSuccessLoader ? (
        <>
          <div className="successFull__Payment text-center mt-5 mb-5">
            <SuccessLoader showSuccess={showSuccessLoader} />
            <button onClick={goToProduct}>Go to Product Page</button>
          </div>
        </>
      ) : (
        <div className="form__div mt-5 mb-5">
          <Container>
            <Row>
              <Col md={6}>
                <div className="summary__div">
                  <h4>Reciept Summary</h4>
                  <div className="items__list">
                    <ul>
                      {showData
                        ? orderReciept &&
                          orderReciept.map((item, index) => (
                            <li
                              key={index}
                              className="d-flex justify-content-between align-items-center"
                            >
                              <div className="img__div">
                                <img
                                  src={images.productImg1}
                                  className="img-fluid"
                                />
                              </div>
                              <div className="product__detail text-end">
                                <h4>{item.name}</h4>
                                <p>Price : ${item.amount}</p>
                                <p>Quantity : {item.quantity}</p>
                              </div>
                            </li>
                          ))
                        : payData &&
                          payData.map((item, index) => (
                            <li
                              key={index}
                              className="d-flex justify-content-between align-items-center"
                            >
                              <div className="img__div">
                                <img
                                  src={images.productImg1}
                                  className="img-fluid"
                                />
                              </div>
                              <div className="product__detail text-end">
                                <h4>{item.product.name}</h4>
                                <p>Price : ${item.product.amount}</p>
                                <p>Quantity : {item.quantity}</p>
                              </div>
                            </li>
                          ))}
                    </ul>
                    <div className="total__amount text-end">
                      {showData ? (
                        <p>
                          <b>Total Amount : ${totalAmount}</b>
                        </p>
                      ) : (
                        <p>
                          <b>Total Amount : ${totalPayAmount}</b>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} className="form__input__div">
                <>
                  <form onSubmit={handlePayment}>
                    {/* <div className="input-form mb-4">
                      <label className="mb-2">
                        <b>Full Name</b>
                      </label>
                      <input
                        className="form-control"
                        placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="input-form mb-4">
                      <label className="mb-2">
                        <b>Phone Number</b>
                      </label>
                      <input
                        className="form-control"
                        placeholder="Phone No"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="input-form mb-4">
                      <label className="mb-2">
                        <b>Address / Street</b>
                      </label>
                      <input
                        className="form-control"
                        placeholder="Address"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div> */}
                    <label className="mb-2">
                      <b>Card Details</b>
                    </label>
                    <CardElement
                      className="card"
                      options={{
                        style: {
                          base: {
                            backgroundColor: "white",
                          },
                        },
                      }}
                    />
                    <button
                      className={"pay-button mt-4"}
                      disabled={isPaymentLoading}
                    >
                      Pay
                    </button>
                  </form>
                </>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  addedItems: state.cartReducer.addedItems,
  totalAmount: state.cartReducer.total,
  orderPlace: state.cartReducer.orderPlace,
  orderReciept: state.cartReducer.orderReciept,
  orderId: state.cartReducer.order_id,
});
const mapDispatchToProps = (dispatch) => ({
  paymentHandler: (amount, cardId, token, addedItems, order_id) =>
    dispatch(checkOutPayment(amount, cardId, token, addedItems, order_id)),
  refreshOrderPlaceFlag: () => dispatch(refreshFlag()),
  orderRecieptFlagHandler: (orderItem, token) => {
    dispatch(orderRecieptFlag(orderItem, token));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
