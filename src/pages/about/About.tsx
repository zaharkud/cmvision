import Header from "sections/header/header";
import Projects from "sections/projects/Projects";
import ContactUs from "sections/contactUs/ContactUs";
import Footer from "sections/footer/Footer";
import AboutPromo from "./aboutPromo/AboutPromo";
import Awards from "./awards/Awards";
import Documents from "./documents/Documents";

const About: React.FC = () => {
  return (
    <>
      <Header></Header>
      <AboutPromo></AboutPromo>
      <Documents></Documents>
      <Awards></Awards>
      <Projects></Projects>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
};

export default About;
