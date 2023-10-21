import React from "react";

import "assets/styles/App.scss";
import Header from "sections/header/header";
import Promo from "pages/main/promo/promo";
import Services from "pages/main/services/services";
import Advantages from "pages/main/advantages/advantages";
import Work from "pages/main/work/work";
import Projects from "sections/projects/Projects";
import ContactUs from "sections/contactUs/ContactUs";
import Footer from "sections/footer/Footer";
import AboutPromo from "pages/about/aboutPromo/AboutPromo";
import Documents from "pages/about/documents/Documents";
import Awards from "pages/about/awards/Awards";
import Contacts from "pages/contacts/Contacts";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <Contacts></Contacts>
        <AboutPromo></AboutPromo>
        <Documents></Documents>
        <Awards></Awards>
        <Services></Services>
        <Advantages></Advantages>
        <Work></Work>
        <Projects></Projects>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
