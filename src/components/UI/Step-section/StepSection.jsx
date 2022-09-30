import React from "react";
import { Link } from "react-router-dom";
import "./StepSection.css";

const STEP__DATA = [
  {
    title: "Setup Your Wallet",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quoadipisci voluptas sint sequi delectus",
    icon: "ri-wallet-line",
    delay: "",
  },
  {
    title: "Create Your Collection",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quoadipisci voluptas sint sequi delectus",
    icon: "ri-layout-masonry-line",
    delay: "200",
  },
  {
    title: "Add Your NFTs",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quoadipisci voluptas sint sequi delectus",
    icon: "ri-image-line",
    delay: "400",
  },
  {
    title: "List them for sale",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quoadipisci voluptas sint sequi delectus",
    icon: "ri-list-check",
    delay: "600",
  },
];
const StepSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-12 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="step__title">Create and sell your NFTS</h3>
          </div>
          {STEP__DATA.map((item, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay={item.delay}
              key={index}
            >
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepSection;
