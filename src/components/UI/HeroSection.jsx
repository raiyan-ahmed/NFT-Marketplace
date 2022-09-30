import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import heroImg from "../../images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-6"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            <div className="hero__content">
              <h2>
                Discover rare digital art and collect{" "}
                <span>sell extraordinary</span> NFTs
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                ipsum sequi repellendus ad dolores dolorem debitis aliquid,
                corporis enim inventore!
              </p>
              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="explore__btn d-flex align-items-center gap-2">
                  <i class="ri-rocket-line "></i>
                  <Link to="/market">Explore</Link>
                </button>
                <button className="create__btn d-flex align-items-center gap-2">
                  <i class="ri-ball-pen-line "></i>
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <div className="hero__img">
              <img src={heroImg} className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
