import React from "react";
import { Link } from "react-router-dom";
// import img01 from "../../../images/img-01.jpg";
// import ava01 from "../../../images/ava-01.png";
import "./LiveAuction.css";
import NftCard from "../Nft-Card/NftCard";
import { NFT__DATA } from "../../../data/data";

const LiveAuction = () => {
  return (
    <section className="live__auction">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-12 mb-5"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="live__auction__top d-flex align-items-center justify-content-between">
              <h3>Live Auction</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </div>

          {NFT__DATA.slice(0, 4).map((item) => (
            <div
              className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-3"
              key={item.id}
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <NftCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveAuction;
