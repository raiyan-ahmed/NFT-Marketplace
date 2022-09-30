import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./NftCard.css";

const NftCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    console.log("click");
    setShowModal(true);
  };
  const { imgUrl, creatorImg, title, creator, currentBid, id } = props.item;
  return (
    <>
      <div className="single__nft__card">
        <div className="nft__img">
          <img src={imgUrl} alt="nft-img" />
        </div>
        <div className="nft__content">
          <h5 className="nft__title">
            <Link to={`/market/${id}`}>{title}</Link>
          </h5>
          <div className="creator__info__wrapper d-flex gap-3">
            <div className="creator__img">
              <img src={creatorImg} alt="ava-01" />
            </div>
            <div className="creator__info d-flex align-items-center justify-content-between w-100">
              <div>
                <h6>Created By</h6>
                <p>{creator}</p>
              </div>
              <div>
                <h6>Current Bid</h6>
                <p>{currentBid} ETH</p>
              </div>
            </div>
          </div>
          <div className="mt-3 d-flex align-items-center justify-content-between">
            <button
              className=" bid__btn d-flex align-items-center gap-1"
              onClick={modalHandler}
            >
              <i class="ri-shopping-bag-line"></i>Place Bid
            </button>
            <span className="history__link">
              <Link to="#">View History</Link>
            </span>
          </div>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};

export default NftCard;
