import React, { useState, useEffect } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { logout } from "../../redux/action/authAction";
import Images from "../../constant/images/index";
import MobileHeader from "./Mobile-Header";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/index";
import { connect } from "react-redux";
import "./style.css";

const Header = (props) => {
  const { authenticated, token, statusLogout, className, addedItems } = props;
  const navigate = useNavigate();
  const [openHeader, setOpenHeader] = useState(false);
  const [loader, showLoader] = useState(false);
  const [totalCartItem, setTotalCartItem] = useState(null);
  var totalCartItems = 0;
  const mobileHeaderOpen = () => {
    if (window.innerWidth < 992) {
      if (openHeader) {
        setOpenHeader(false);
      } else {
        setOpenHeader(true);
      }
    }
  };
  const logOutUser = async (type, e) => {
    try {
      showLoader(true);
      await props.logoutHandler(token);
    } catch (error) {
      showLoader(false);
    }
  };
  useEffect(() => {
    (async () => {
      if (statusLogout === "Success") {
        setTimeout(() => {
          showLoader(false);
        }, 3000);
      }
      if (addedItems.length > 0) {
        setTotalCartItem(addedItems.length);
      }
    })();
  }, [statusLogout, addedItems]);
  return (
    <>
      {loader && <Loader showLoader={loader} loaderColor={"#AF6FAC"} />}
      <header className={className && className}>
        {authenticated && (
          <div className="top__header">
            <ul className="d-flex justify-content-end align-items-center">
              <li className="me-4">
                <a href="/Jordina/">Jessica</a>
              </li>
              <li>
                <a onClick={logOutUser}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </a>
              </li>
            </ul>
          </div>
        )}

        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="/Jordina/" className="site__name">
              Jordina
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              onClick={mobileHeaderOpen}
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="m-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#banner">Home</Nav.Link>
                <Nav.Link href="#our_process">Our Process</Nav.Link>
                <Nav.Link href="#skin_discover">Skin Disorders</Nav.Link>
                <Nav.Link href="/Jordina/products">Our Products</Nav.Link>
              </Nav>
              <div className="header__right--div">
                <ul>
                  {token ? (
                    <li>
                      <Nav.Link href="/Jordina/dashboard">
                        My Dashboard
                      </Nav.Link>
                    </li>
                  ):(<li>
                      <Nav.Link href="/Jordina/login">
                       Login
                      </Nav.Link>
                    </li>)}

                  <li>
                    <Nav.Link
                      href="/Jordina/appointment"
                      className="get__started--btn"
                    >
                      Get Started
                    </Nav.Link>
                  </li>
                </ul>
                <ul className="social__icon--list">
                  <li>
                    <Nav.Link href={totalCartItem !== null && "/Jordina/cart"}>
                      <div className="cart__item">
                        <img src={Images.shoppingCart} className="img-fluid" />
                        {totalCartItem !== null && token && (
                          <span>{totalCartItem}</span>
                        )}
                      </div>
                    </Nav.Link>
                  </li>
                  <span className="line"></span>
                  <li>
                    <Nav.Link href="#action1">
                      <img src={Images.facebookIcon} className="img-fluid" />
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="#action1">
                      <img src={Images.twitterIcon} className="img-fluid" />
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="#action1">
                      <img src={Images.youtubeIcon} className="img-fluid" />
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="#action1">
                      <img src={Images.instagramIcon} className="img-fluid" />
                    </Nav.Link>
                  </li>
                </ul>
              </div>
            </Navbar.Collapse>
            <MobileHeader
              openHeader={openHeader}
              mobileHeaderOpen={mobileHeaderOpen}
            />
          </Container>
        </Navbar>
        <hr></hr>
      </header>
    </>
  );
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  authenticated: state.auth.authenticated,
  statusLogout: state.auth.statusLogout,
  addedItems: state.cartReducer.addedItems,
});

const mapDispatchToProps = (dispatch) => ({
  logoutHandler: (token) => dispatch(logout(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
