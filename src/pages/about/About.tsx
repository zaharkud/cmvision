import Header from "sections/header/header";
import ProjectsBlock from "sections/projects/ProjectsBlock";
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
      <ProjectsBlock />
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
};

export default About;
