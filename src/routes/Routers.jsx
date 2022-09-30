import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Loader from "../components/Loader/Loader";
// import Contact from "../pages/Contact";
// import Create from "../pages/Create";
// import Market from "../pages/Market";
// import NftDetails from "../pages/NftDetails";
// import Wallet from "../pages/Wallet";
const Contact = React.lazy(() => import("../pages/Contact"));
const Create = React.lazy(() => import("../pages/Create"));
const Market = React.lazy(() => import("../pages/Market"));
const NftDetails = React.lazy(() => import("../pages/NftDetails"));
const Wallet = React.lazy(() => import("../pages/Wallet"));

const Routers = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="/create"
        element={
          <Suspense fallback={<Loader />}>
            <Create />
          </Suspense>
        }
      />
      {/* <Route path="/edit-profile" element={<EditProfile />} /> */}
      <Route
        path="/market"
        element={
          <Suspense fallback={<Loader />}>
            <Market />
          </Suspense>
        }
      />
      <Route
        path="/market/:id"
        element={
          <Suspense fallback={<Loader />}>
            <NftDetails />
          </Suspense>
        }
      />
      {/* <Route path="/seller-profile" element={<SellerProfile />} /> */}
      <Route
        path="/wallet"
        element={
          <Suspense fallback={<Loader />}>
            <Wallet />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Routers;
