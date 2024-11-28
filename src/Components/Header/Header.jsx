import React, { useState } from "react";
import "./Header.css";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  // Determine menu styles for responsiveness
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" }; // Show or hide menu
    }
    return {}; // Default styles for larger screens
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#residencies">Residencies</a>
            <a href="#our-value">Our Value</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#get-started">Get Started</a>
            <button className="button">
              <a href="#contact">Contact</a>
            </button>
          </div>

          {/* Responsive Menu Icon */}
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)} // Toggle menu state
          >
            {menuOpened ? (
              <img src="./menu_close.png" alt="Close Menu" width={35} />
            ) : (
              <img src="./menu.png" alt="Open Menu" width={35} />
            )}
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
};

export default Header;
