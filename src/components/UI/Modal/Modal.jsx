import React from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

const ModalWrapper = (props) => {
  return <div className="modal__wrapper" onClick={props.onClick}></div>;
};
const SingleModal = (props) => {
  return (
    <div className="single__modal">
      <span className="close__modal">
        <i class="ri-close-line" onClick={props.onClick}></i>
      </span>
      <h6 className="text-center text-light">Place a Bid</h6>
      <p className="text-center text-light">
        You must bid atleast <span className="money">5.89 ETH</span>
      </p>
      <div className="input__item mb-4">
        <input type="number" placeholder="00 : 00 ETH" />
      </div>
      <div className="input__item mb-3">
        <h6 className="mb-3">Enter Quantity, 7 available </h6>
        <input type="number" placeholder="Enter quantity" />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p>You must bid atleast</p>
        <span className="money">5.89 ETH</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p>Service fee</p>
        <span className="money">0.89 ETH</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p>Total Bid Amount</p>
        <span className="money">5.89 ETH</span>
      </div>
      <button className="place__bid__btn">Place a Bid</button>
    </div>
  );
};
const Modal = (props) => {
  const setShowModal = props.setShowModal;
  const portalElements = document.getElementById("overlays");
  return (
    <>
      {createPortal(
        <ModalWrapper
          onClick={() => {
            setShowModal(false);
          }}
        />,
        portalElements
      )}
      {createPortal(
        <SingleModal
          onClick={() => {
            setShowModal(false);
          }}
        />,
        portalElements
      )}
    </>
  );
};
export default Modal;
