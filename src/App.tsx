import React from "react";

import "assets/styles/App.scss";

import { Routes, Route, Link } from "react-router-dom";

import Main from "pages/main/Main";
import Contacts from "pages/contacts/Contacts";
import About from "pages/about/About";
import Projects from "pages/projects/Projects";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
