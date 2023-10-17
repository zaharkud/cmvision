import ServiceCard from "components/serviceCard/serviceCard";
import style from "./services.module.scss";

const Services: React.FC = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title_h2}>Услуги</h2>
          <div className={style.cards}>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
