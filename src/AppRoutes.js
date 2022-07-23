import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Asset from "./components/assets/Asset";
import Brand from "./components/brand/Brand";
import Category from "./components/category/Category";
import MainStore from "./components/mainStore/MainStore";
import Order from "./components/orders/Order";
import Products from "./components/products/Products";
import Reports from "./components/reports/Reports";
import Suplier from "./components/suplier/Suplier";
import User from "./components/users/User";
import Home from "./pages/home/Home";

import Login from "./pages/login/Login";

import SignUp from "./pages/signup/SignUp";
// import PrivateOutlet from "./PrivateRoute";
// import ProtectedRoute from "./ProtectedRout";

function AppRoutes({ setValue, showAlert }) {
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === "/login" || pathname === "/signup"
      ? setValue(false)
      : setValue(true);
  });

  return (
    <div>
      <Routes>
        <Route path="/">
          <Route
            exact
            path="signup"
            element={<SignUp showAlert={showAlert} />}
          />
          <Route exact path="login" element={<Login showAlert={showAlert} />} />
          {/* <Route exact path="/" element={<ProtectedRoute />}> */}
          <Route index element={<Home />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="order" element={<Order />} />
          <Route exact path="assigned" element={<Asset />} />
          <Route exact path="users" element={<User />} />
          <Route exact path="brand" element={<Brand />} />
          <Route exact path="category" element={<Category />} />
          <Route exact path="store" element={<MainStore />} />
          <Route exact path="products" element={<Products />} />
          <Route exact path="suplier" element={<Suplier />} />
          <Route exact path="reports" element={<Reports />} />
          {/* </Route> */}
        </Route>
      </Routes>
      {/* <div>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<PrivateOutlet />}>
          <Route index element={<Home />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="order" element={<Order />} />
          <Route exact path="assigned" element={<Asset />} />
          <Route exact path="users" element={<User />} />
          <Route exact path="brand" element={<Brand />} />
          <Route exact path="category" element={<Category />} />
          <Route exact path="store" element={<MainStore />} />
          <Route exact path="products" element={<Products />} />
          <Route exact path="suplier" element={<Suplier />} />
          <Route exact path="reports" element={<Reports />} />
        </Route>
      </Routes>*/}
    </div>
  );
}

export default AppRoutes;
