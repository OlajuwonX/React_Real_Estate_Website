import React from "react";
import "./Contact.css";
import { MdCall, MdMessage, MdVideoCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left Side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            Your go-to connection for all things real estate! Whether you're
            looking to buy, sell or invest, we're here to guide you every step
            of the way. Our expert team specializes in connecting you to the
            right properties that suit your needs and budget. Contact us today
            to turn your real estate dreams into reality!
          </span>

          <div className="flexColStart contactModes">
            {/* First Row */}
            <div className="flexStart row">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call Olajuwon</span>
                    <span className="secondaryText">+234 9030 9718 26</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* Second Mode */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat Olajuwon</span>
                    <span className="secondaryText">+234 8123 8067 86</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flexStart row">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdVideoCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Abimbola</span>
                    <span className="secondaryText">+234 9030 9100 70</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call</div>
              </div>

              {/* Forth Mode */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdMessage size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Abimbola</span>
                    <span className="secondaryText">+234 9001 8001 01</span>
                  </div>
                </div>
                <div className="flexCenter button">Message</div>
              </div>
            </div>
          </div>
        </div>

        {/* The { MdCall }, { BsFillChatDotsFill } and { HiChatBubbleBottomCenter } are for that contact display */}

        {/* Right Side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
