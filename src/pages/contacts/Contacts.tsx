import Header from "sections/header/header";
import Footer from "sections/footer/Footer";
import ContactsSection from "./contacts/ContactsSection";

const Contacts: React.FC = () => {
  return (
    <>
      <Header></Header>
      <ContactsSection></ContactsSection>
      <Footer></Footer>
    </>
  );
};

export default Contacts;
