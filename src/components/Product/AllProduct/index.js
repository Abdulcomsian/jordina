import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import images from "../../../constant/images/index";
import MultiRangeSlider from "../../RangeSlider/index";

const OurProduct = () => {
  let i = 0;
  const skinType = [
    { type: "Combination" },
    { type: "Dry" },
    { type: "Normal" },
    { type: "Oily" },
  ];
  const skinConcern = [
    { concern: "Acne" },
    { concern: "Anti-Aging/Wrinkles" },
    { concern: "Dryness/Hydration" },
    { concern: "Oil Control/Pores" },
    { concern: "Pigmentation" },
    { concern: "Redness" },
    { concern: "Sensitive" },
  ];
  const productArray = [
    {
      productName: "Ceramide-Enriched Firming Eye Cream",
      productPrice: "$29.99",
    },
    { productName: "Niacinamide 20% Treatment", productPrice: "$39.99" },
    { productName: "Ultra-Rich Moisturizer", productPrice: "$39.99" },
    {
      productName: "Ceramide-Enriched Firming Eye Cream",
      productPrice: "$29.99",
    },
    { productName: "Niacinamide 20% Treatment", productPrice: "$39.99" },
    { productName: "Ultra-Rich Moisturizer", productPrice: "$39.99" },
    {
      productName: "Ceramide-Enriched Firming Eye Cream",
      productPrice: "$29.99",
    },
    { productName: "Niacinamide 20% Treatment", productPrice: "$39.99" },
    { productName: "Ultra-Rich Moisturizer", productPrice: "$39.99" },
  ];
  return (
    <div className="home_main-section">
      <Header />
      <main>
        <div className="main__wrapper">
          <div className="main__banner--section our__product__banner">
            <div className="overlay"></div>
            <div className="banner__content">
              <h1>Our Products</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                viverra nibh nunc, pellentesque elementum.
              </p>
            </div>
          </div>
          <div className="filter__items__section">
            <Container fluid>
              <Row>
                <Col md={3}>
                  <div className="filter__option__div">
                    <div className="form__div">
                      <input className="form-control" placeholder="Filter by" />
                      <div className="skin__type option__common__div">
                        <h5>Skin Type</h5>
                        <ul>
                          {skinType.map((items, key) => (
                            <li>
                              <input
                                className="checkbox"
                                type="checkbox"
                                name={items.type}
                                value={items.type}
                              />
                              <label>{items.type}</label>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="skin__type option__common__div">
                        <h5>Skin Concern</h5>
                        <ul>
                          {skinConcern.map((items, key) => (
                            <li>
                              <input
                                className="checkbox"
                                type="checkbox"
                                name={items.concern}
                                value={items.concern}
                              />
                              <label>{items.concern}</label>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="price__slider option__common__div no__border__bottom">
                        <h5>Price</h5>
                        <MultiRangeSlider
                          min={0}
                          max={1000}
                          onChange={({ min, max }) =>
                            console.log(`min = ${min}, max = ${max}`)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={9}>
                  <div className="filter__product__items">
                    <div className="item__sorting d-flex align-items-center justify-content-between">
                      <p>Items: 9</p>
                      <div className="dropdown__menu d-flex align-items-center justify-content-between">
                        <p>
                          <b>Sort By:</b>
                        </p>
                        <select>
                          <option>Best Selling</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter__items__div">
                      <Row>
                        {productArray.map((items, key) => {
                          i++;
                          if (i > 3) {
                            i = 1;
                          }
                          return (
                            <Col md={4} sm={6}>
                              <div className="product__box">
                                <img
                                  src={
                                    i === 1
                                      ? images.triedOff
                                      : i === 2
                                      ? images.impossible_get
                                      : images.onlineProvider
                                  }
                                  className={
                                    i === 1
                                      ? "img-fluid bg__img"
                                      : i === 2
                                      ? "img-fluid bg__img bg__img__position__left"
                                      : "img-fluid bg__img"
                                  }
                                />
                                <div className="product__main__content">
                                  <div className="product__img text-center">
                                    <img
                                      src={
                                        i === 1
                                          ? images.productImg1
                                          : i === 2
                                          ? images.productImg2
                                          : images.productImg3
                                      }
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="product__information text-center">
                                    <h3>Ceramide-Enriched Firming Eye Cream</h3>
                                    <p className="mt-1">$29.99</p>
                                    <a className="common__btn mt-4">
                                      View Details
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default OurProduct;
