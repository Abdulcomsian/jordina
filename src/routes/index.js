import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import FormScreen from "../components/FormScreen/form-screen";
import AllProduct from "../components/Product/AllProduct";
import ProductDetail from "../components/Product/ProductDetail";
import About from "../components/About/index";
import ClientDashboard from "../components/Client-Dashboard";
import ClientProfile from "../components/ClientProfile";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

function AppRoute() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<AllProduct />} />
      <Route exact path="/products-detail" element={<ProductDetail />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/appointment" element={<FormScreen />} />
      <Route exact path="/client-dashboard" element={<ClientDashboard />} />
      <Route exact path="/profile" element={<ClientProfile />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default AppRoute;
