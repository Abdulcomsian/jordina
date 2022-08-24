import React, { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import Images from "../../constant/images/index";
import MobileHeader from "./Mobile-Header";
import "./style.css";

const Header = () => {
  const [openHeader, setOpenHeader] = useState(false);
  const mobileHeaderOpen = () => {
    if (window.innerWidth < 992) {
      if (openHeader) {
        setOpenHeader(false);
      } else {
        setOpenHeader(true);
      }
    }
  };
  return (
    <header>
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
                  <Nav.Link href="/Jordina/appointment" className="get__started--btn">
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
          <MobileHeader openHeader={openHeader} mobileHeaderOpen={mobileHeaderOpen} />
        </Container>
      </Navbar>
      <hr></hr>
    </header>
  );
};
export default Header;
