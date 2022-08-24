import React, { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import images from "../../../constant/images";
import "./style.css";

const MobileHeader = ({ openHeader, mobileHeaderOpen }) => {
    console.log(openHeader)
  return (
    <div
      className="mobile__header__main"
      style={{
        right: openHeader ? "0px" : "-450px",
        width: openHeader && "50vw",
      }}
    >
      <div className="mobile__header__top d-flex align-items-center justify-content-between">
        <a>Jordina</a>
        <i className="fa-solid fa-xmark" onClick={mobileHeaderOpen}></i>
      </div>
      <div className="mobile__body__content">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Our Process</a>
          </li>
          <li>
            <a>Skin Disorders</a>
          </li>
          <li>
            <a>Our Products</a>
          </li>
          <li>
            <a>My account</a>
          </li>
          <li>
            <a className="get__started--btn">Get Started</a>
          </li>
        </ul>
      </div>
      <div className="mobile__header__bottom">
        <ul className="social__icon--list d-flex">
          <li>
            <a href="#action1">
              <img src={images.shoppingCart} className="img-fluid" />
            </a>
          </li>
          <li>
            <a href="#action1">
              <img src={images.facebookIcon} className="img-fluid" />
            </a>
          </li>
          <li>
            <a href="#action1">
              <img src={images.twitterIcon} className="img-fluid" />
            </a>
          </li>
          <li>
            <a href="#action1">
              <img src={images.youtubeIcon} className="img-fluid" />
            </a>
          </li>
          <li>
            <a href="#action1">
              <img src={images.instagramIcon} className="img-fluid" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MobileHeader;
