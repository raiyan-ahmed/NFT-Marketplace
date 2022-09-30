import React from "react";
import NftCard from "../Nft-Card/NftCard";
import { NFT__DATA } from "../../../data/data";
import "./Trending.css";

const Trending = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-12 mb-xl-5 mb-md-3"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h3 className="trending__title">Trending</h3>
          </div>
          {NFT__DATA.slice(0, 8).map((item, index) => (
            <div
              className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-4"
              data-aos={item.move}
              data-aos-duration="1000"
              key={item.id}
            >
              <NftCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
