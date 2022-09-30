import React from "react";
import Trending from "../components/UI/Trending-section/Trending";
import HeroSection from "../components/UI/HeroSection";
import LiveAuction from "../components/UI/Live-Auction/LiveAuction";
import SellerSection from "../components/UI/Seller-section/SellerSection";
import StepSection from "../components/UI/Step-section/StepSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Trending />
      <StepSection />
    </>
  );
};

export default Home;
