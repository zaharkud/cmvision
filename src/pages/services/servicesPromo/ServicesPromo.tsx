import { useState } from "react";

import ServiceCardMini from "components/serviceCard/serviceCardMini";
import style from "./servicesPromo.module.scss";

import camImage from "assets/img/techEquipment/cam1.png";

import camIcon from "assets/icons/services/cam.svg";
import alarmIcon from "assets/icons/services/alarm.svg";
import fingerprintIcon from "assets/icons/services/fingerprint.svg";
import soundIcon from "assets/icons/services/sound.svg";

const ServicesPromo: React.FC = () => {
  const [serviceDescription, setServiceDescription] =
    useState<JSX.Element>(camSystems);

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.pageTitle}>Услуги</h1>
          <div className={style.servicesContent}>
            <div className={style.cards}>
              <ServiceCardMini
                title="Системы видеонаблюдения"
                img={camIcon}
                onClick={() => setServiceDescription(camSystems)}
              ></ServiceCardMini>

              <ServiceCardMini
                title="Охранные системы"
                img={alarmIcon}
                onClick={() => setServiceDescription(securitySystems)}
              ></ServiceCardMini>

              <ServiceCardMini
                title="Системы котроля и доступа (СКУД)"
                img={fingerprintIcon}
                onClick={() => setServiceDescription(pacsSystems)}
              ></ServiceCardMini>

              <ServiceCardMini
                title="Потолочные акустические системы"
                img={soundIcon}
                onClick={() => setServiceDescription(soundSystems)}
              ></ServiceCardMini>
            </div>
            <div className={style.serviceInfo}>
              <div className={style.text}>{serviceDescription}</div>
              <div className={style.serviceImg}>
                <img src={camImage} alt="Камера" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPromo;

const camSystems = () => {
  return (
    <div className={style.text}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

const securitySystems = () => {
  return (
    <div className={style.text}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor
      </p>
      <p>
        g elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

const pacsSystems = () => {
  return (
    <div className={style.text}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur
      </p>
      <p>g elit. Lorem ipsum dolor sit amet,</p>
    </div>
  );
};

const soundSystems = () => {
  return (
    <div className={style.text}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
    </div>
  );
};
