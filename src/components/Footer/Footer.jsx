import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

// Accounts details
const MY__ACCOUNT = [
  { display: "Create Item", url: "/create" },
  { display: "Collection", url: "/market" },
];
// resources details
const RESOURCES = [
  { display: "Community", url: "#" },
  { display: "Activity", url: "#" },
];
// company details
const COMPANY = [
  { display: "About", url: "#" },
  { display: "Contact Us", url: "/contact" },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Link to="/home">
              <div className="logo">
                <h2 className="d-flex gap-2 align-items-center ">
                  <span>
                    <i class="ri-fire-fill"></i>
                  </span>
                  {/* <Link to="/home">NFT</Link> */}
                  NFT
                </h2>
                <p className="footer__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis numquam officiis repudiandae obcaecati quo omnis
                  cum, facilis velit quia debitis!
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <h5>My Account</h5>
            <ul className="list__group">
              {MY__ACCOUNT.map((item, index) => (
                <li className="list__item" key={index}>
                  <Link to={item.url}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <h5>My Resources</h5>
            <ul className="list__group">
              {RESOURCES.map((item, index) => (
                <li className="list__item" key={index}>
                  <Link to={item.url}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <h5>My Company</h5>
            <ul className="list__group">
              {COMPANY.map((item, index) => (
                <li className="list__item" key={index}>
                  <Link to={item.url}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h5>Newsletter</h5>
            <input type="email" className="newsletter" placeholder="Email" />
            <div className="social__icons d-flex align-items-center gap-3 justify-content-sm-start justify-content-center">
              <span>
                <Link to="#">
                  <i class="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-twitter-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-telegram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-discord-line"></i>
                </Link>
              </span>
            </div>
          </div>
          <div className="col-12 mt-4 text-center">
            <p className="copyright">
              Copyrighhts 2022. Developed By{" "}
              <span className="dev__name">Raiyan Ahmed</span>. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
