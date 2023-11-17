import React, { useEffect } from "react";

import "assets/styles/App.scss";

import { Routes, Route, useLocation } from "react-router-dom";

import Main from "pages/main/Main";
import Contacts from "pages/contacts/Contacts";
import About from "pages/about/About";
import Projects from "pages/projects/Projects";
import Services from "pages/services/Services";

function App() {
  const currentLocation = useLocation();

  useEffect(() => {
    //letting scroll after closing mobile menu cos of changing page
    document.documentElement.style.overflowY = "auto";
  }, [currentLocation]);

  useEffect(() => {
    //поднимаем страницу у началу после перехода по ссылке
    window.scrollTo(0, 0);
  });

  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
