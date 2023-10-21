import Header from "sections/header/header";
import ContactUs from "sections/contactUs/ContactUs";
import Footer from "sections/footer/Footer";
import ProjectsSection from "./projectsSection/ProjectsSection";

const Main: React.FC = () => {
  return (
    <>
      <Header></Header>
      <ProjectsSection></ProjectsSection>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
};

export default Main;
