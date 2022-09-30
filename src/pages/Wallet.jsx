import React from "react";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import "../styles/Wallet.css";
const WALLET__DATA = [
  {
    title: "Bitcoin",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo quaerat veniam mollitia corporis animi magnam labore ullam aspernatur iste facilis!",
    icon: "ri-bit-coin-line",
    delay: "",
  },
  {
    title: "Coinbase",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo quaerat veniam mollitia corporis animi magnam labore ullam aspernatur iste facilis!",
    icon: "ri-coin-line",
    delay: "200",
  },
  {
    title: "Metamask",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo quaerat veniam mollitia corporis animi magnam labore ullam aspernatur iste facilis!",
    icon: "ri-money-cny-circle-line",
    delay: "400",
  },
  {
    title: "Etherium",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo quaerat veniam mollitia corporis animi magnam labore ullam aspernatur iste facilis!",
    icon: "ri-bit-coin-fill",
    delay: "600",
  },
];
const Wallet = () => {
  return (
    <>
      <CommonSection title={"Wallet"} />
      <section>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 mb-5 text-center"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="w-lg-50 m-auto">
                <h3 className="text-white"> Connect Your Wallet </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  fugiat voluptatibus consequuntur voluptate sit suscipit esse
                  vel quis asperiores provident.
                </p>
              </div>
            </div>
            {WALLET__DATA.map((item, index) => (
              <div
                className="col-lg-3 col-md-6 mb-4"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay={item.delay}
                key={index}
              >
                <div className="wallet__item">
                  <div className="wallet__icon d-flex justify-content-center">
                    <i class={item.icon}></i>
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wallet;
