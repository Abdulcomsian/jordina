import React, { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import images from "../../../constant/images/index";
import MultiRangeSlider from "../../../components/RangeSlider/index";
import BounceLoader from "react-spinners/BounceLoader";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Pagination from "rc-pagination";
import { refreshProdcutFlag } from "../../../redux/action/cartAction";

const OurProduct = (props) => {
  const {
    allProduct,
    allProductType,
    allSkinDiseases,
    productMinPrice,
    productMaxPrice,
    allCartProduct,
    productFlag,
    addedItems,
  } = props;
  console.log("Product :", addedItems);
  const navigate = useNavigate();
  let i = 0;
  const skinType = allProductType;
  const skinConcern = allSkinDiseases;
  const [productArray, setProductarray] = useState(allProduct);
  const [filteredArray, setFilteredArray] = useState(productArray || null);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedConcern, setSelectedConcern] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [newArray, setNewArray] = useState([]);
  const [dataFound, setDataFound] = useState(true);
  var minPrice = productMinPrice,
    maxPrice = productMaxPrice;
  const [minProductPrice, setMinProductPrice] = useState(0);
  const [changeMinPrice, setChangeMinPrice] = useState(minPrice);
  const [changeMaxPrice, setChangeMaxPrice] = useState(maxPrice);
  const [perPage, setPerPage] = useState(9);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(filteredArray.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };
  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };
  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button>
          <i className="fa fa-angle-double-left"></i>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <i className="fa fa-angle-double-right"></i>
        </button>
      );
    }
    return originalElement;
  };
  const getData = (current, pageSize, filterArray) => {
    return filteredArray.slice((current - 1) * pageSize, current * pageSize);
  };
  const handleSkinType = (e) => {
    setShowLoader(true);
    if (e.target.checked) {
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
      var typeValue = e.target.value;
      setSelectedType([...selectedType, typeValue]);
    } else {
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
      setFilteredArray(
        filteredArray.filter((data) => data.productType !== e.target.value)
      );
      setSelectedType(selectedType.filter((id) => id !== e.target.value));
      const data = productArray.filter((data) =>
        selectedType.includes(data.productType)
      );
    }
  };
  const handleSkinConcern = (e) => {
    setShowLoader(true);
    if (e.target.checked) {
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
      var concernVal = e.target.value;
      setSelectedConcern([...selectedConcern, concernVal]);
    } else {
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
      setSelectedConcern(selectedConcern.filter((id) => id !== e.target.value));
      const data = productArray.filter((data) =>
        selectedConcern.includes(data.productConcern)
      );
      console.log("Data Concern :", data);
    }
  };
  const handlePrice = (min, max) => {
    setChangeMinPrice(min);
    setChangeMaxPrice(max);
  };
  const getMinPrice = (arr, n) => {
    let res = arr[0].productPrice;
    arr.map((item, index) => {
      res = Math.min(res, arr[index].productPrice);
    });
    return res;
  };

  useEffect(() => {
    if (productFlag) {
      props.refreshProduct();
    }
    let data_price,
      data_type,
      data_concern,
      noOfProduct = productArray.length;
    if (selectedType.length > 0) {
      data_type = productArray.filter((data) =>
        selectedType.includes(data.product_categories.category_name)
      );
      if (selectedConcern.length > 0) {
        data_concern = data_type.filter((data) =>
          selectedConcern.includes(data.diseases.disease_title)
        );
        if (changeMinPrice > minPrice || changeMaxPrice < maxPrice) {
          data_price = data_concern.filter(
            (data) =>
              data.amount <= changeMaxPrice && data.amount >= changeMinPrice
          );
          if (data_price.length === 0) {
            setProductCount(data_price.length);
            setDataFound(false);
          } else {
            setDataFound(true);
            setProductCount(data_price.length);
            setFilteredArray(data_price);
          }
        } else if (data_concern.length === 0) {
          setProductCount(data_concern.length);
          setDataFound(false);
        } else {
          setDataFound(true);
          setProductCount(data_concern.length);
          setFilteredArray(data_concern);
          console.log("Filter Data :", filteredArray);
        }
      } else if (changeMinPrice > minPrice || changeMaxPrice < maxPrice) {
        data_price = data_type.filter(
          (data) =>
            data.amount <= changeMaxPrice && data.amount >= changeMinPrice
        );
        console.log("Filter Data Price:", data_price);
        if (data_price.length === 0) {
          setProductCount(data_price.length);
          setDataFound(false);
        } else {
          setDataFound(true);
          setProductCount(data_price.length);
          setFilteredArray(data_price);
        }
      } else {
        setDataFound(true);
        setProductCount(data_type.length);
        setFilteredArray(data_type);
        console.log("Filter Data :", filteredArray);
      }
    } else if (selectedConcern.length > 0) {
      data_concern = productArray.filter((data) =>
        selectedConcern.includes(data.diseases.disease_title)
      );
      if (changeMinPrice > minPrice || changeMaxPrice < maxPrice) {
        data_price = data_concern.filter(
          (data) =>
            data.amount <= changeMaxPrice && data.amount >= changeMinPrice
        );
        if (data_price.length === 0) {
          setProductCount(data_price.length);
          setDataFound(false);
        } else {
          setDataFound(true);
          setProductCount(data_price.length);
          setFilteredArray(data_price);
        }
      } else if (selectedType.length > 0) {
        data_type = data_concern.filter((data) =>
          selectedConcern.includes(data.product_categories.category_name)
        );
        if (data_type.length === 0) {
          setProductCount(data_type.length);
          setDataFound(false);
        } else {
          setDataFound(true);
          setProductCount(data_type.length);
          setFilteredArray(data_type);
          console.log("Filter Data :", filteredArray);
        }
      } else if (changeMinPrice > minPrice || changeMaxPrice < maxPrice) {
        data_price = data_concern.filter(
          (data) =>
            data.amount <= changeMaxPrice && data.amount >= changeMinPrice
        );
        if (data_price.length === 0) {
          setProductCount(data_price.length);
          setDataFound(false);
        } else {
          setDataFound(true);
          setProductCount(data_price.length);
          setFilteredArray(data_price);
          console.log("Filter Data :", filteredArray);
        }
      } else {
        setDataFound(true);
        setProductCount(data_concern.length);
        setFilteredArray(data_concern);
      }
    } else if (changeMinPrice > minPrice || changeMaxPrice < maxPrice) {
      data_price = productArray.filter(
        (data) => data.amount <= changeMaxPrice && data.amount >= changeMinPrice
      );
      if (selectedType.length > 0) {
        data_type = data_price.filter((data) =>
          selectedType.includes(data.productType)
        );
        if (data_type.length === 0) {
          setProductCount(data_type.length);
          setDataFound(false);
        } else {
          setDataFound(true);
          setProductCount(data_type.length);
          setFilteredArray(data_type);
        }
      } else if (selectedConcern.length > 0) {
        data_concern = data_price.filter((data) =>
          selectedConcern.includes(data.productType)
        );
        if (data_concern.length === 0) {
          setProductCount(data_concern.length);
          setDataFound(false);
        } else {
          setDataFound(true);
          setProductCount(data_concern.length);
          setFilteredArray(data_concern);
        }
      } else {
        setDataFound(true);
        setProductCount(data_price.length);
        setFilteredArray(data_price);
      }
    } else {
      const new_array = productArray;
      setFilteredArray(new_array);
      setProductCount(new_array.length);
    }
  }, [
    selectedType,
    selectedConcern,
    dataFound,
    changeMinPrice,
    changeMaxPrice,
  ]);
  const productHandler = (e, index) => {
    let preData = [...productArray];
    console.log("Name :", preData[index].name);
    navigate("/products-detail", {
      state: {
        id: preData[index].id,
        name: preData[index].name,
        price: preData[index].amount,
        description: preData[index].description
      },
    });
  };
  return (
    <div className="home_main-section">
      <Header cartProduct={addedItems.length} />
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
                          {skinType.map((items, index) => (
                            <li key={index}>
                              <input
                                className="checkbox"
                                type="checkbox"
                                name={items.name}
                                value={items.name}
                                onChange={handleSkinType}
                              />
                              <label>{items.name}</label>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="skin__type option__common__div">
                        <h5>Skin Concern</h5>
                        <ul>
                          {skinConcern.map((items, index) => (
                            <li key={index}>
                              <input
                                className="checkbox"
                                type="checkbox"
                                name={items.title}
                                value={items.title}
                                onChange={handleSkinConcern}
                              />
                              <label>{items.title}</label>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="price__slider option__common__div no__border__bottom">
                        <h5>Price</h5>
                        <MultiRangeSlider
                          min={minPrice}
                          max={maxPrice}
                          onChange={({ min, max }) => handlePrice(min, max)}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={9}>
                  <div className="filter__product__items">
                    <div className="item__sorting d-flex align-items-center justify-content-between">
                      <p>Items: {productCount}</p>
                      <div className="dropdown__menu d-flex align-items-center justify-content-between">
                        <p>
                          <b>Sort By:</b>
                        </p>
                        <select>
                          <option>Best Selling</option>
                        </select>
                      </div>
                    </div>
                    {showLoader ? (
                      <div className="loader_div">
                        <BounceLoader color="#AF6FAC" />
                        <p>Please Wait a Second .. !</p>
                      </div>
                    ) : dataFound ? (
                      <>
                        <div className="filter__items__div">
                          <Row>
                            {getData(current, size).map((items, index) => {
                              i++;
                              if (i > 3) {
                                i = 1;
                              }
                              return (
                                <Col md={4} sm={6} key={index}>
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
                                        <h3>{items.name}</h3>
                                        <p className="mt-1">${items.amount}</p>
                                        <a
                                          className="common__btn mt-4"
                                          onClick={(e) =>
                                            productHandler(e, index)
                                          }
                                        >
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
                        <Pagination
                          className="pagination-data"
                          showTotal={(total, range) =>
                            `Showing ${range[0]}-${range[1]} of ${total}`
                          }
                          onChange={PaginationChange}
                          total={filteredArray.length}
                          current={current}
                          pageSize={size}
                          showSizeChanger={false}
                          itemRender={PrevNextArrow}
                          onShowSizeChange={PerPageChange}
                        />
                      </>
                    ) : (
                      <p className="h-100 d-flex align-items-center justify-content-center fw-bold fs-4">
                        Data was not Found !
                      </p>
                    )}
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
const mapStateToProps = (state) => ({
  allProduct: state.productReducer.productArray,
  allProductType: state.productReducer.productTypeArray,
  allSkinDiseases: state.skinCondition.diseasesArray,
  productMinPrice: state.productReducer.minProductPrice,
  productMaxPrice: state.productReducer.maxProductPrice,
  allCartProduct: state.cartReducer.items,
  productFlag: state.cartReducer.addProduct,
  addedItems: state.cartReducer.addedItems,
});

const mapDispatchToProps = (dispatch) => ({
  refreshProduct: () => dispatch(refreshProdcutFlag()),
});
export default connect(mapStateToProps, mapDispatchToProps)(OurProduct);
