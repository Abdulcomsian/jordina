import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import images from "../../../constant/images/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";

const ProductDetail = () => {
  return (
    <div className="home_main-section">
      <Header />
      <main>
        <div className="main__wrapper">
          <div className="main__banner--section" style={{ height: 134 }}>
            <div className="overlay"></div>
          </div>
          <div className="product__detail__section">
            <Container fluid>
              <Row>
                <Col md={4}>
                  <div className="product__main__img">
                    <img
                      src={images.productBgMain}
                      className="img-fluid bg__img"
                    />
                    <img
                      src={images.productMain}
                      className="img-fluid main__product__img"
                    />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="product__detail__content">
                    <h2>Ceramide-Enriched Firming Eye Cream</h2>
                    <div className="price__rating__div d-flex align-items-center justify-content-between mt-4 mb-4">
                      <p>$29.99</p>
                      <p>
                        <i className="fa-solid fa-star"></i>{" "}
                        <i className="fa-solid fa-star"></i>{" "}
                        <i className="fa-solid fa-star"></i>{" "}
                        <i className="fa-solid fa-star"></i>{" "}
                        <i className="fa-solid fa-star"></i> (129 reviews)
                      </p>
                    </div>
                    <p>
                      This hydrating eye cream visibly smooths under eye
                      wrinkles with a concentrated blend of five replenishing
                      ceramides, four forms of brightening vitamin C, two
                      peptides and clinically proven retinol.
                    </p>
                    <ul>
                      <li>Vitamin C visibly firms & brightens eye area.</li>
                      <li>
                        Retinol quickly reduces the look of deep wrinkles.
                      </li>
                      <li>Rich, creamy lotion intensely hydrates.</li>
                      <li>Use twice daily as needed.</li>
                      <li>Low-strength 0.01% retinol concentration.</li>
                    </ul>
                    <a className="common__btn mt-4">Add to cart</a>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="use__research">
            <Container fluid>
              <Row>
                <Col md={6}>
                  <div className="common__content">
                    <h2>How to use</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent arcu nunc ut habitant magna elementum turpis et
                      eros. Odio porta at nisl ultrices sed tellus. Praesent
                      arcu nunc ut habitant magna elementum turpis et eros. Odio
                      porta at nisl ultrices sed tellus.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="common__content">
                    <h2>Research</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent arcu nunc ut habitant magna elementum turpis et
                      eros. Odio porta at nisl ultrices sed tellus. Praesent
                      arcu nunc ut habitant magna elementum turpis et eros. Odio
                      porta at nisl ultrices sed tellus.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="key__ingredient">
            <Container fluid>
              <Row>
                <Col className="text-center">
                  <div className="key__heading">
                    <h2 className="common__title">
                      <span>Key</span> ingredients
                    </h2>
                  </div>
                </Col>
              </Row>
              <div className="multiple__ingredients">
                <Row>
                  <Col md={4}>
                    <div className="ingredient__div">
                      <h4>5 CERAMIDES:</h4>
                      <ul>
                        <li>+ Strengthen skin barrier</li>
                        <li>+ Visibly firm & plump</li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="ingredient__div">
                      <h4>RETINOL:</h4>
                      <ul>
                        <li>+ Visibly reduces fine lines & wrinkles</li>
                        <li>+ 40+ years of research-proven results</li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="ingredient__div">
                      <h4>VITAMIN C:</h4>
                      <ul>
                        <li>+ Potent brightening effects</li>
                        <li>+ Counteracts dullness</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="rating__reviews">
            <Container fluid>
              <Row>
                <Col className="text-center">
                  <h1 className="common__title">Ratings & Reviews</h1>
                  <p className="mt-3 common__text">
                    <i className="fa-solid fa-star"></i>{" "}
                    <i className="fa-solid fa-star"></i>{" "}
                    <i className="fa-solid fa-star"></i>{" "}
                    <i className="fa-solid fa-star"></i>{" "}
                    <i className="fa-solid fa-star"></i> (129 reviews)
                  </p>
                </Col>
              </Row>
            </Container>
            <div className="rating__slider slider__div">
              <Swiper
                centeredSlides={true}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  375: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  580: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
                slidesPerView={4}
              >
                <SwiperSlide>
                  <img src={images.sliderItems} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images.sliderItems} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images.sliderItems} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images.sliderItems} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images.sliderItems} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images.sliderItems} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images.sliderItems} />
                </SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
            <Container fluid>
              <Row>
                <Col>
                  <div className="review__list">
                    <ul>
                      <li>
                        <div className="d-flex rating_common_bpx">
                          <div className="rating__box">
                            <p className="mb-3">
                              <i className="fa-solid fa-star"></i>{" "}
                              <i className="fa-solid fa-star"></i>{" "}
                              <i className="fa-solid fa-star"></i>{" "}
                              <i className="fa-solid fa-star"></i>{" "}
                              <i className="fa-solid fa-star"></i>
                            </p>
                            <p>
                              <b>Skin Type:</b> Combination
                            </p>
                            <p>
                              <b>Age:</b> 25-35
                            </p>
                            <p>2022-07-27</p>
                          </div>
                          <div className="comment__box d-flex flex-column justify-content-between">
                            <div className="comment__top">
                              <h5>This has done wonders for my face!</h5>
                              <p className="common__text">
                                I used it for 6 months, my under eyes were
                                brighter and better I love that I recommend
                              </p>
                            </div>
                            <div className="comment__bottom d-flex">
                              <p>Was this review helpful?</p>
                              <div className="like_dislike">
                                <span>
                                  <img src={images.likeIcon} /> <span>2</span>
                                </span>
                                <span>
                                  <img src={images.disLikeIcon} />{" "}
                                  <span>2</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex rating_common_bpx">
                          <div className="rating__box">
                            <p className="mb-3">
                              <i className="fa-solid fa-star"></i>{" "}
                              <i className="fa-solid fa-star"></i>{" "}
                              <i className="fa-solid fa-star"></i>{" "}
                              <i className="fa-solid fa-star"></i>{" "}
                              <i className="fa-solid fa-star"></i>
                            </p>
                            <p>
                              <b>Skin Type:</b> Combination
                            </p>
                            <p>
                              <b>Age:</b> 25-35
                            </p>
                            <p>2022-07-27</p>
                          </div>
                          <div className="comment__box d-flex flex-column justify-content-between">
                            <div className="comment__top">
                              <h5>This has done wonders for my face!</h5>
                              <p className="common__text">
                                I used it for 6 months, my under eyes were
                                brighter and better I love that I recommend
                              </p>
                            </div>
                            <div className="comment__bottom d-flex">
                              <p>Was this review helpful?</p>
                              <div className="like_dislike">
                                <span>
                                  <img src={images.likeIcon} /> <span>2</span>
                                </span>
                                <span>
                                  <img src={images.disLikeIcon} />{" "}
                                  <span>2</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex rating_common_bpx">
                          <div className="rating__box">
                            <p className="mb-3">
                              <i className="fa-solid fa-star"></i>{" "}
                              <i className="fa-solid fa-star"></i>{" "}
                              <i className="fa-solid fa-star"></i>{" "}
                              <i className="fa-solid fa-star"></i>{" "}
                              <i className="fa-solid fa-star"></i>
                            </p>
                            <p>
                              <b>Skin Type:</b> Combination
                            </p>
                            <p>
                              <b>Age:</b> 25-35
                            </p>
                            <p>2022-07-27</p>
                          </div>
                          <div className="comment__box d-flex flex-column justify-content-between">
                            <div className="comment__top">
                              <h5>This has done wonders for my face!</h5>
                              <p className="common__text">
                                I used it for 6 months, my under eyes were
                                brighter and better I love that I recommend
                              </p>
                            </div>
                            <div className="comment__bottom d-flex">
                              <p>Was this review helpful?</p>
                              <div className="like_dislike">
                                <span>
                                  <img src={images.likeIcon} /> <span>2</span>
                                </span>
                                <span>
                                  <img src={images.disLikeIcon} />{" "}
                                  <span>2</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="people__viewed">
            <Container fluid>
              <Row>
                <Col>
                  <h1 className="common__title text-center">
                    People also viewed...
                  </h1>
                </Col>
              </Row>
            </Container>
            <div className="slider__div">
              <Swiper
                slidesPerView={4}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="viewed__box">
                    <img src={images.productImg1} className="img-fluid" />
                    <div className="content__box">
                      <h3>Niacinamide 20% Treatment</h3>
                      <p className="mt-2 mb-4">$39.99</p>
                      <a className="common__btn">View Details</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="viewed__box">
                    <img src={images.productImg2} className="img-fluid" />
                    <div className="content__box">
                      <h3>Niacinamide 20% Treatment</h3>
                      <p className="mt-2 mb-4">$39.99</p>
                      <a className="common__btn">View Details</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="viewed__box">
                    <img src={images.productImg3} className="img-fluid" />
                    <div className="content__box">
                      <h3>Niacinamide 20% Treatment</h3>
                      <p className="mt-2 mb-4">$39.99</p>
                      <a className="common__btn">View Details</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="viewed__box">
                    <img src={images.productImg1} className="img-fluid" />
                    <div className="content__box">
                      <h3>Niacinamide 20% Treatment</h3>
                      <p className="mt-2 mb-4">$39.99</p>
                      <a className="common__btn">View Details</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="viewed__box">
                    <img src={images.productImg2} className="img-fluid" />
                    <div className="content__box">
                      <h3>Niacinamide 20% Treatment</h3>
                      <p className="mt-2 mb-4">$39.99</p>
                      <a className="common__btn">View Details</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="viewed__box">
                    <img src={images.productImg3} className="img-fluid" />
                    <div className="content__box">
                      <h3>Niacinamide 20% Treatment</h3>
                      <p className="mt-2 mb-4">$39.99</p>
                      <a className="common__btn">View Details</a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default ProductDetail;
