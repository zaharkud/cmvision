import { useState } from "react";

import ServiceCardMini from "components/serviceCard/serviceCardMini";
import style from "./servicesPromo.module.scss";

import camSystemsImage from "assets/img/techEquipment/cam__6.webp";
import securitySystemsImage from "assets/img/techEquipment/securitySystems.webp";
import pacsSystesImage from "assets/img/techEquipment/pacsSystems.webp";
import soundSystemsImage from "assets/img/techEquipment/soundSystems.webp";

import camIcon from "assets/icons/services/cam.svg";
import alarmIcon from "assets/icons/services/alarm.svg";
import fingerprintIcon from "assets/icons/services/fingerprint.svg";
import soundIcon from "assets/icons/services/sound.svg";

const ServicesPromo: React.FC = () => {
  const [serviceContent, setServiceContent] = useState<JSX.Element>(camSystems);

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
                onClick={() => setServiceContent(camSystems)}
              ></ServiceCardMini>

              <ServiceCardMini
                title="Охранные системы"
                img={alarmIcon}
                onClick={() => setServiceContent(securitySystems)}
              ></ServiceCardMini>

              <ServiceCardMini
                title="Системы котроля и доступа (СКУД)"
                img={fingerprintIcon}
                onClick={() => setServiceContent(pacsSystems)}
              ></ServiceCardMini>

              <ServiceCardMini
                title="Потолочные акустические системы"
                img={soundIcon}
                onClick={() => setServiceContent(soundSystems)}
              ></ServiceCardMini>
            </div>
            {serviceContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPromo;

const camSystems = () => {
  return (
    <div className={style.serviceInfo}>
      <div className={style.text}>
        <p>
          Сейчас системы видеонаблюдения устанавливаются не только на таких
          крупных коммерческих объектах, как банки, заводы, предприятия, но и в
          небольших офисах, жилых домах, квартирах.
        </p>
        <p>
          Система видеонаблюдения позволит отслеживать происходящее на
          охраняемом объекте в режиме реального времени, играя важную роль в
          обеспечении безопасности. К этому вопросу необходимо подходить
          предельно серьезно. Настройка камер и монтаж камер видеонаблюдения
          лучше доверить опытным специалистам.
        </p>
      </div>
      <div className={style.serviceImg}>
        <img src={camSystemsImage} alt="Камера" />
      </div>
    </div>
  );
};

const securitySystems = () => {
  return (
    <div className={style.serviceInfo}>
      <div className={style.text}>
        <p>
          Охранные системы – это современный способ обеспечения безопасности на
          объекте, включая такие угрозы, как пожар или утечка воды.
        </p>
        <p>
          Безусловно, можно установить только систему видеонаблюдения и
          стараться постоянно контролировать ситуацию на объекте. Но лучшим
          вариантом является тандем охранной системы и видеонаблюдения в доме, в
          офисе, на складе или в магазине. Это позволит не только разобраться в
          деталях уже произошедшего, но и предотвращать неприятные случаи.
        </p>
      </div>
      <div className={style.serviceImg}>
        <img src={securitySystemsImage} alt="Камера" />
      </div>
    </div>
  );
};

const pacsSystems = () => {
  return (
    <div className={style.serviceInfo}>
      <div className={style.text}>
        <p>
          Большинство современных предприятий, офисов, складских комплексов и
          прочих объектов не обходятся без системы контроля и управления
          доступом (СКУД).
        </p>
        <p>
          Установка системы контроля и управления доступом (СКУД) не только
          обеспечивает безопасность вашему бизнесу и сотрудникам, но и позволяет
          решать такие задачи, как: учет рабочего времени, предоставление
          выборочного доступа в помещения конкретным сотрудникам, организация
          пропускной системы, оперативное блокирование или разблокирование
          дверей, идентификация личности и прочие.
        </p>
      </div>
      <div className={style.serviceImg}>
        <img src={pacsSystesImage} alt="Камера" />
      </div>
    </div>
  );
};

const soundSystems = () => {
  return (
    <div className={style.serviceInfo}>
      <div className={style.text}>
        <p>
          Различные типы акустических систем позволят решить такие задачи, как:
          оповещение об опасной ситуации, транслирование объявление и рекламных
          сообщений, воспроизведение фоновой музыки и организация двухсторонней
          аудиосвязи.
        </p>
      </div>
      <div className={style.serviceImg}>
        <img src={soundSystemsImage} alt="Камера" />
      </div>
    </div>
  );
};
