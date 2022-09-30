import React from "react";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import LiveAuction from "../components/UI/Live-Auction/LiveAuction";
import { NFT__DATA } from "../data/data";
import { Link, useParams } from "react-router-dom";
import "../styles/NftDetails.css";

const NftDetails = () => {
  const param = useParams(); // jis name se mene parameter define ki hogaa dynamic route bnaaty wkt usi parameter men ye hook mjhy value laakr degaa
  // console.log(param); // return our parameter which we define in object form which we can get via object destructuring
  const { id } = param;
  const singleNft = NFT__DATA.find((item) => item.id === id);
  // console.log(singleNft);
  return (
    <>
      <CommonSection
        title={singleNft.title}
        move="fade-up-right"
        duration="1000"
      />
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <img
                src={singleNft.imgUrl}
                alt="nft-img"
                className="single__nft__img"
              />
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="single__nft__content">
                <h2>{singleNft.title}</h2>
                <div className="d-flex justify-content-between align-items-center my-4">
                  <div className="d-flex align-items-center gap-4 single__nft__seen">
                    <span className="d-flex align-items-center gap-2">
                      <i class="ri-eye-line"></i>234
                    </span>
                    <span className="d-flex align-items-center gap-2">
                      <i class="ri-heart-line"></i>123
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-2 single__nft__more">
                    <span>
                      <i class="ri-send-plane-line"></i>
                    </span>
                    <span>
                      <i class="ri-more-2-line"></i>
                    </span>
                  </div>
                </div>

                <div className="nft__creator d-flex gap-3 align-items-center ">
                  <div className="creator__img">
                    <img src={singleNft.creatorImg} alt="creator-img" />
                  </div>
                  <div className="creator__details">
                    <p>Created By</p>
                    <h6>{singleNft.creator}</h6>
                  </div>
                </div>
                <p className="my-4">{singleNft.desc}</p>
                <button className="single__nft__btn d-flex justify-content-center align-items-center gap-2 w-100">
                  <i class="ri-shopping-bag-line"></i>
                  <Link to="/wallet">Place a bid</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LiveAuction />
    </>
  );
};

export default NftDetails;
