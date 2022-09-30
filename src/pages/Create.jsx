import React from "react";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import NftCard from "../components/UI/Nft-Card/NftCard";
import img01 from "../images/img-01.jpg";
import ava01 from "../images/ava-01.png";
import "../styles/Create.css";
const item = {
  id: "01",
  title: "Travel Monkey Club",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
  imgUrl: img01,
  creator: "Trista Francis",
  creatorImg: ava01,
  currentBid: 5.89,
};
const Create = () => {
  return (
    <>
      <CommonSection title="Create Item" move="fade-up-right" duration="1500" />
      <section>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-4 col-sm-6"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <h5 className="mb-4 text-white">Preview Item</h5>
              <NftCard item={item} />
            </div>
            <div
              className="col-xl-9 col-lg-8 col-md-8 col-sm-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="create__item">
                <form>
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input
                      type="file"
                      name=""
                      id=""
                      className="upload__input"
                    />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      placeholder="Enter Price for one item (ETH)"
                    />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder="Enter Minimum Bid " />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" />
                    </div>
                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Enter Title" />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Descripion</label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      className="w-100"
                      placeholder="Describe Your NFT ..."
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Create;
