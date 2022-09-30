import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import NftCard from "../components/UI/Nft-Card/NftCard";
import { NFT__DATA } from "../data/data";

import "../styles/Market.css";

const Market = () => {
  const [isSort, setIsSort] = useState(NFT__DATA);
  // to handle cateogriies
  const handleCategories = () => {};
  const handleItems = () => {};
  // ============ sorting data w.r.t low high mid rates =============
  const handleSorting = (e) => {
    const price = e.target.value;
    if (price === "high") {
      const filtered_data = NFT__DATA.filter((item) => item.currentBid >= 6);
      // console.log(filtered_data);
      setIsSort(filtered_data);
    } else if (price === "mid") {
      const filtered_data = NFT__DATA.filter(
        (item) => item.currentBid >= 5 && item.currentBid < 6
      );
      // console.log(filtered_data);
      setIsSort(filtered_data);
    } else if (price === "low") {
      const filtered_data = NFT__DATA.filter((item) => item.currentBid < 5);
      // console.log(filtered_data);
      setIsSort(filtered_data);
    }
  };

  return (
    <>
      <CommonSection
        title={"Market Place"}
        move="fade-up-right"
        duration="1000"
      />
      <section>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 mb-5"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="market__product__filter d-flex justify-content-between align-items-center">
                <div className="filter__left d-flex gap-5 align-items-center">
                  <div className="all__category__filter">
                    <select
                      onChange={handleCategories}
                      className="mb-sm-0 mb-4"
                    >
                      <option>All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtual-world">Virtual World</option>
                      <option value="trending-cards">Trending Cards</option>
                    </select>
                  </div>
                  <div className="all__items__filter">
                    <select onChange={handleItems} className="mb-sm-0 mb-4">
                      <option>All Items</option>
                      <option value="single-item">Single Item</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>
                </div>
                <div className="filter__right">
                  <select onChange={handleSorting} className="mb-sm-0 mb-4">
                    <option>Sort By</option>
                    <option value="high">High Rate </option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">Low Rate</option>
                  </select>
                </div>
              </div>
            </div>
            {isSort.map((item, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-4"
                key={item.id}
              >
                <NftCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Market;
