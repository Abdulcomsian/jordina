import React, { useState } from "react";
import OrderItemModal from "../../components/Modal/OrderItemModal/index";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const ClientOrder = ({
  blurContent,
  orderPaidData,
  unPaidOrder,
  removeUnPaidData,
}) => {
  console.log(orderPaidData);
  const [orderItem, setOrderItem] = useState([]);
  const [orderUnPaidItem, setOrderUnPaid] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [unPaidOrderAmount, setUnPaidOrderAmount] = useState(null);
  const [paidOrderAmount, setPaidOrderAmount] = useState(null);
  const [showUnPaidData, setShowUnPaidData] = useState(false);
  const [showPaidData, setShowPaidData] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  const valueHanlder = (e, index, amount) => {
    let preData = [...orderPaidData];
    setOrderItem(preData[index].order_items);
    setPaidOrderAmount(amount);
    setShowPaidData(true);
    setShowUnPaidData(false);
    setModalShow(true);
  };
  const valueUnPaidHanlder = (e, index, amount) => {
    let preData = [...unPaidOrder];
    setOrderUnPaid(preData[index].order_items);
    setUnPaidOrderAmount(amount);
    setShowPaidData(false);
    setShowUnPaidData(true);
    setModalShow(true);
  };
  const modalCloseHandler = () => {
    setModalShow(false);
  };
  const payHanlder = (e, index, amount, id) => {
    setShowLoader(true);
    let preData = [...unPaidOrder];
    setTimeout(() => {
      setShowLoader(false);
      navigate("/checkout", {
        state: {
          data: preData[index].order_items,
          totalPayAmount: amount,
          order_item_id: id,
        },
      });
    }, 2000);
  };
  return (
    <>
      {showLoader && <Loader showLoader={showLoader} loaderColor={"#1695b9"} />}
      {modalShow && (
        <OrderItemModal
          modalOpen={modalShow}
          paidData={orderItem}
          unPaidData={orderUnPaidItem}
          unPaidOrderAmount={unPaidOrderAmount}
          paidOrderAmount={paidOrderAmount}
          modalClose={modalCloseHandler}
          showPaidData={showPaidData}
          showUnPaidData={showUnPaidData}
        />
      )}
      <div
        className={
          blurContent
            ? "table__div pt-5 box__shadow blur"
            : "table__div pt-5 box__shadow"
        }
      >
        <h4 className="dashboard__title">
          <i style={{ color: "#1696b9" }} className="fa-solid fa-capsules"></i>{" "}
          Paid Order
        </h4>
        <div className="table-responsive">
          <table className="table table-borderless mt-5">
            <thead>
              <tr>
                <th scope="col">Amount</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Payment Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {orderPaidData.length > 0 ? (
                orderPaidData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.amount}</td>
                    <td>{item.payment_method}</td>
                    <td>
                      <span className="paid">{item.payment_status}</span>
                    </td>
                    <td>
                      <span
                        className="view__appointment"
                        onClick={(e) => valueHanlder(e, index, item.amount)}
                      >
                        <i className="fa-solid fa-eye"></i>
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center">
                    <b>Data Not Found !</b>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className={
          blurContent
            ? "table__div pt-5 box__shadow blur"
            : "table__div pt-5 box__shadow"
        }
      >
        <h4 className="dashboard__title">
          <i style={{ color: "#1696b9" }} className="fa-solid fa-capsules"></i>{" "}
          Un Paid Order
        </h4>
        <div className="unpaid__table__div">
          <table className="table table-borderless mt-5">
            <thead>
              <tr>
                <th scope="col">Amount</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Payment Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {unPaidOrder.length > 0 ? (
                unPaidOrder.map((item, index) => (
                  <tr key={index}>
                    <td>{item.amount}</td>
                    <td>{item.payment_method}</td>
                    <td>
                      <span className="unpaid">{item.payment_status}</span>
                    </td>
                    <td className="operation__div text-end">
                      <span
                        className="view__appointment"
                        onClick={(e) =>
                          payHanlder(e, index, item.amount, item.id)
                        }
                      >
                        Pay
                      </span>
                      <span
                        className="view__appointment"
                        onClick={(e) =>
                          valueUnPaidHanlder(e, index, item.amount)
                        }
                      >
                        <i className="fa-solid fa-eye"></i>
                      </span>
                      <span
                        className="view__appointment"
                        onClick={(e) => removeUnPaidData(e, item.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center">
                    <b>Data Not Found !</b>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ClientOrder;
