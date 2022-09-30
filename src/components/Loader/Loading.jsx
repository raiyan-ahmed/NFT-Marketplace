import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <section className="backdrop">
      <div className="loading__logo mb-5 d-flex gap-2 align-items-center mb-0">
        <div className="logo__icon">
          <i class="ri-fire-fill"></i>
        </div>
        <h2 className="logo__head">NFT</h2>
      </div>
      <div className="loader__container">
        <div className="upper__layer">
          {/* <div className="lower__layer"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Loading;
