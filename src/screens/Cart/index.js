import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/index";
import images from "../../constant/images";
import axios from "axios";
import { connect } from "react-redux";
import {
  removeCartItems,
  addQuantity,
  subtractQuantity,
  orderPlace
} from "../../redux/action/cartAction.js";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Lottie from "react-lottie";
import animationData from "../../components/Lottie/empty-cart.json";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/Loader/index";

const CartScreen = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const {
    addedItems,
    totalAmount,
    removeProductFlag,
    token,
    cartItem,
    orderId,
    orderPlace,
  } = props;

  console.log(
    "removeProductFlag :",
    removeProductFlag,
    cartItem,
    orderId,
    orderPlace
  );
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [newItem, setNewItem] = useState([]);

  const handlerRemoveItem = (id) => {
    setShowLoader(true);
    props.removeItems(id);
  };
  const handleAddQuantity = (id) => {
    props.addItemQuantity(id, addedItems);
  };
  const handleSubQuantity = (id) => {
    props.subtractItemQuantity(id, addedItems);
  };
  useEffect(() => {
    var obj = addedItems.map((item) => {
      return {
        product_id: item.id,
        quantity: item.quantity,
      };
    });
    setNewItem({ items: obj });
    if (removeProductFlag) {
      if (addedItems.length > 0) {
        setTimeout(() => {
          setShowLoader(false);
          setShowEmpty(false)
        }, 3000);
      } else {
        setTimeout(() => {
          setShowLoader(false);
          setShowContent(false);
        }, 3000);
        setShowEmpty(true);
        toast.success("Product Remove SuccessFully !".toString(), {
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
    } else if (orderPlace) {
      setTimeout(() => {
        setShowLoader(false);
        navigate("/checkout",{state: { data: [], totalPayAmount: null }});
      }, 2000);
      toast.success("Order Place SuccessFully !".toString(), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if(addedItems.length===0){
      setShowEmpty(true);
    }
  }, [removeProductFlag, orderPlace]);

  const handleCheckOut = async () => {
    try {
      setShowLoader(true);
      const result = await props.orderProductHandler(newItem, token);
      console.log(result);
    } catch (error) {}
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
      {showLoader && <Loader showLoader={showLoader} loaderColor={"#af6fac"} />}
      <div className="home_main-section">
        <Header />
        <main>
          <div className="main__wrapper">
            <div id="banner" className="main__banner--section">
              <div className="overlay"></div>
              <div className="banner__content">
                <h1>Cart</h1>
              </div>
            </div>
            <div className="cart__section">
              {showContent && addedItems.length > 0 && (
                <Container>
                  <Row>
                    {addedItems.map((item, index) => (
                      <Col key={index} md={12}>
                        <div className="cart__card d-flex align-items-center mt-4">
                          <div className="img__box">
                            <img
                              src={images.productImg1}
                              className="img-fluid"
                            />
                          </div>
                          <div className="product__detail ms-3">
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                          </div>
                          <div className="product__price">
                            <p>
                              <b>Price: ${item.amount}</b>
                            </p>
                            <p>
                              <b>Quantity : {item.quantity}</b>
                            </p>
                            <p className="add__remove__items">
                              <a onClick={(e) => handleSubQuantity(item.id)}>
                                <i className="fa-solid fa-caret-down"></i>
                              </a>
                              <span>{item.quantity}</span>
                              <a onClick={(e) => handleAddQuantity(item.id)}>
                                <i className="fa-solid fa-caret-up"></i>
                              </a>
                            </p>
                            <a
                              className="remove__item__btn"
                              onClick={(e) => handlerRemoveItem(item.id)}
                            >
                              Remove Item
                            </a>
                          </div>
                        </div>
                      </Col>
                    ))}
                    <Col className="text-end mt-5">
                      <p>
                        <b>Your Total Amount :</b> ${totalAmount}
                      </p>
                      <button
                        className="check__out__btn mt-4"
                        onClick={handleCheckOut}
                      >
                        CheckOut
                      </button>
                    </Col>
                  </Row>
                </Container>
              )}

              {showEmpty && (
                <div className="text-center">
                  <p className="cart__empty__text text-center mb-4">
                    Card is Empty !
                  </p>
                  <Lottie options={defaultOptions} height={200} width={200} />
                  <button
                    className="mt-4"
                    onClick={(e)=>navigate('/product')}
                  >
                    Go to Product Page
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  addedItems: state.cartReducer.addedItems,
  totalAmount: state.cartReducer.total,
  allProduct: state.productReducer.productArray,
  removeProductFlag: state.cartReducer.removeProduct,
  cartItem: state.cartReducer.cartItem,
  orderId: state.cartReducer.orderID,
  orderPlace: state.cartReducer.orderPlace,
});

const mapDispatchToProps = (dispatch) => ({
  removeItems: (id) => {
    dispatch(removeCartItems(id));
  },
  addItemQuantity: (id, addedItems) => {
    dispatch(addQuantity(id, addedItems));
  },
  subtractItemQuantity: (id, addedItems) => {
    dispatch(subtractQuantity(id, addedItems));
  },
  orderProductHandler: (orderItem, token) => {
    dispatch(orderPlace(orderItem, token));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
