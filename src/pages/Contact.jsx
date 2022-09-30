import React, { useRef } from "react";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import "../styles/Contact.css";
const Contact = () => {
  const nameRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <CommonSection title="Contact" />
      <section>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6 col-md-6">
              <h2>Drop a Message</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                aperiam repellat corporis perferendis sint ad beatae autem
                voluptate fugit facilis.
              </p>
              <div className="contact mt-4">
                <form onSubmit={submitHandler}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      id="name"
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      id="email"
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter Your Subject"
                      id="subject"
                    />
                  </div>
                  <div className="form__input">
                    <textarea
                      rows="10"
                      placeholder="Write message"
                      id="message"
                    ></textarea>
                  </div>
                  <button className="send__btn">Send a Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
