import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Residence from "./Components/Residence/Residence";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  // State for theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle handler
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App dark-mode" : "App light-mode"}>
      <button className="toggle-button" onClick={toggleTheme}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
        <Companies />
        <Residence />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}

export default App;
