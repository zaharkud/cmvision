import Header from "sections/header/header";
import ContactUs from "sections/contactUs/ContactUs";
import Footer from "sections/footer/Footer";

import ServicesPromo from "./servicesPromo/ServicesPromo";
import Solutions from "./solutions/Solutions";
import Equipment from "./equipment/Equipment";

const Services: React.FC = () => {
  return (
    <>
      <Header></Header>
      <ServicesPromo></ServicesPromo>
      <Solutions></Solutions>
      <Equipment></Equipment>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
};

export default Services;
