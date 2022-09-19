import React,{Fragment} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../screens/Home/Home";
import FormScreen from "../screens/FormScreen/form-screen";
import AllProduct from "../screens/Product/AllProduct";
import ProductDetail from "../screens/Product/ProductDetail";
import About from "../screens/About/index";
import ClientDashboard from "../dashboard/Client-Dashboard";
import ClientProfile from "../dashboard/ClientProfile";
import Cart from "../screens/Cart/index";
import Checkout from "../components/StripePayment/index";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";

function AppRoute() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<AllProduct />} />
      <Route exact path="/products-detail" element={<ProductDetail />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/appointment" element={<FormScreen />} />
      <Route exact path="/dashboard" element={<ClientDashboard />} />
      <Route exact path="/dashboard/profile" element={<ClientProfile />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/checkOut" element={<Checkout />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default AppRoute;
