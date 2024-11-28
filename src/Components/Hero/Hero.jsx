import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="innerWidth flexCenter hero-container">
        {/* Left Section */}
        <div className="flexColStart left-hero">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: "1" }}
              transition={{ duration: "2.5", type: "ease-in" }}
            >
              Discover <br />
              More Suitable <br />
              Properties
            </motion.h1>
          </div>

          <div className="flexColStart hero-d">
            <span className="secondaryText">
              Find a variety of properties that suit you very easily
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          <motion.div
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: "1" }}
            transition={{
              duration: "2.5",
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            className="flexCenter search-bar"
          >
            <HiLocationMarker
              color="hsla(153, 72%, 69%, 0.917)"
              size={25}
              cursor="pointer"
            />
            <input type="text" placeholder="search" />
            <button className="button">Search</button>
          </motion.div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={7956} end={8761} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={683} end={916} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={19} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flexCenter right-hero">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: "1" }}
            transition={{ duration: "2.5", type: "ease-in" }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="heroImage" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* The HiLocationMarker is an icon for th gps-like element */
}
