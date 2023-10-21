import Header from "sections/header/header";
import Promo from "pages/main/promo/promo";
import Services from "pages/main/services/services";
import Advantages from "pages/main/advantages/advantages";
import Work from "pages/main/work/work";
import ProjectsBlock from "sections/projects/ProjectsBlock";
import ContactUs from "sections/contactUs/ContactUs";
import Footer from "sections/footer/Footer";

const Main: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Promo></Promo>
      <Services></Services>
      <Advantages></Advantages>
      <Work></Work>
      <ProjectsBlock />
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
};

export default Main;
