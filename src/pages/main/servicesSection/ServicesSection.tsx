import ServiceCard from "components/serviceCard/serviceCard";
import style from "./servicesSection.module.scss";

import cam from "assets/icons/services/cam.svg";
import alarm from "assets/icons/services/alarm.svg";
import fingerprint from "assets/icons/services/fingerprint.svg";
import sound from "assets/icons/services/sound.svg";

const ServicesSection: React.FC = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title_h2}>Услуги</h2>
          <div className={style.cards}>
            <ServiceCard
              title="Системы видеонаблюдения"
              text="Установка камер и вспомогательного оборудования"
              img={cam}
            ></ServiceCard>
            <ServiceCard
              title="Охранные системы"
              text="Проектирование и монтирование охранной системы "
              img={alarm}
            ></ServiceCard>
            <ServiceCard
              title="Системы котроля и доступа (СКУД)"
              text="Установка систем СКУД для преприятий"
              img={fingerprint}
            ></ServiceCard>
            <ServiceCard
              title="Потолочные акустические системы"
              text="Установка звукового оборудования"
              img={sound}
            ></ServiceCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
