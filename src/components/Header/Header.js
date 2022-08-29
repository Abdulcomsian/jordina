import React, { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import Images from "../../constant/images/index";
import MobileHeader from "./Mobile-Header";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/index";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();
  const authenticated = localStorage.getItem("authenticated");
  const [openHeader, setOpenHeader] = useState(false);
  const [loader, showLoader] = useState(false);
  const mobileHeaderOpen = () => {
    if (window.innerWidth < 992) {
      if (openHeader) {
        setOpenHeader(false);
      } else {
        setOpenHeader(true);
      }
    }
  };
  const logOutUser = () => {
    showLoader(true);
    
    setTimeout(() => {
      localStorage.removeItem("authenticated");
      localStorage.removeItem("token");
      window.location.reload(true);
      showLoader(false);
    }, 3000);
  };
  return (
    <>
       {loader && <Loader showLoader={loader} loaderColor={"#AF6FAC"} />}
    <header>
      
      {authenticated && (
        <div className="top__header">
          <ul className="d-flex justify-content-end align-items-center">
            <li className="me-4">
              <a>Jessica</a>
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
          <Navbar.Brand href="#" className="site__name">
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
              <Nav.Link href="#our_product">Our Products</Nav.Link>
            </Nav>
            <div className="header__right--div">
              <ul>
                <li>
                  <Nav.Link href="#action1">My account</Nav.Link>
                </li>

                <li>
                  <Nav.Link
                    href={
                      authenticated ? "/Jordina/appointment" : "Jordina/register"
                    }
                    className="get__started--btn"
                  >
                    Get Started
                  </Nav.Link>
                </li>
              </ul>
              <ul className="social__icon--list">
                <li>
                  <Nav.Link href="#action1">
                    <img src={Images.shoppingCart} className="img-fluid" />
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
export default Header;
