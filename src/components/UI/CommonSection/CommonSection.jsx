import React from "react";
import "./CommonSection.css";

const CommonSection = ({ title, move, duration }) => {
  return (
    <section className="common__section">
      <div
        className="container text-center text-white"
        data-aos={move}
        data-aos-duration={duration}
      >
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default CommonSection;
