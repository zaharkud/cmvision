import ServiceCardMini from "components/serviceCard/serviceCardMini";
import style from "./servicesPromo.module.scss";

import cam from "assets/img/techEquipment/cam1.png";

const ServicesPromo: React.FC = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.pageTitle}>Услуги</h1>
          <div className={style.servicesContent}>
            <div className={style.cards}>
              <ServiceCardMini></ServiceCardMini>
              <ServiceCardMini></ServiceCardMini>
              <ServiceCardMini></ServiceCardMini>
              <ServiceCardMini></ServiceCardMini>
            </div>
            <div className={style.serviceInfo}>
              <div className={style.text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
                <p>
                  g elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className={style.serviceImg}>
                <img src={cam} alt="Камера" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPromo;
