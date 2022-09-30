import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
const NAV__LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Market",
    url: "/market",
  },
  {
    display: "Create",
    url: "/create",
  },
  {
    display: "Contact",
    url: "contact",
  },
];
const Header = () => {
  const headerRef = useRef(null); // to catch  header
  const menuRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      //========== 1st approach of adding class ==============
      // if (
      //   document.body.scrollTop > 80 ||
      //   document.documentElement.scrollTop > 80
      // ) {
      //   headerRef.current.classList.add("header__shrink");
      // } else {
      //   headerRef.current.classList.remove("header__shrink");
      // }
      //========== 2nd approach of adding class ==============
      if (window.pageYOffset > 80) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  // ======== activate mobile menu =======
  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="navigation">
          <Link to="/home">
            <div className="logo">
              <h2 className="d-flex gap-2 align-items-center mb-0 ">
                <span>
                  <i class="ri-fire-fill"></i>
                </span>
                NFT
              </h2>
            </div>
          </Link>
          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list mb-0">
              {NAV__LINKS.map((v, i) => (
                <li className="nav__item" key={i}>
                  <NavLink to={v.url}>{v.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__right d-flex align-items-center gap-5 ">
            <button className="btn d-flex align-items-center gap-2">
              <span>
                <i class="ri-wallet-line"></i>
              </span>
              <Link to="/wallet">Connect Wallet</Link>
            </button>
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
