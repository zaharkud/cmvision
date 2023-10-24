import style from "./equipment.module.scss";

import lineWrecked from "assets/img/deco/lineWrecked.svg";
import lineStraight from "assets/img/deco/lineStraight.svg";
import bgBlack from "assets/img/deco/bgBlack.svg";

import cam from "assets/img/techEquipment/cam1.png";
import gaussLogo from "assets/img/producersLogos/gauss.jpg";

const Equipment: React.FC = () => {
  return (
    <section className={style.section}>
      <div className={style.deco}>
        <img className={style.lineWrecked} src={lineWrecked} />
        <img className={style.bgGrey} src={bgBlack} />
        <img className={style.lineStraight} src={lineStraight} />
      </div>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.title_h2}>Мы используем</h1>
          <div className={style.equipmentContent}>
            <div className={style.cards}>
              <article className={style.cardItem}>
                <img src={cam} alt="Камера" />
              </article>
              <article className={style.cardItem}>
                <img src={cam} alt="Камера" />
              </article>
              <article className={style.cardItem}>
                <img src={cam} alt="Камера" />
              </article>
              <article className={style.cardItem}>
                <img src={cam} alt="Камера" />
              </article>
              <article className={style.cardItem}>
                <img src={cam} alt="Камера" />
              </article>
            </div>
            <div className={style.equipmentInfo}>
              <div className={style.descr}>
                <h3 className={style.title_h3}>IP-видеокамеры</h3>
                <div className={style.text}>
                  <p>
                    IP-камера – это сетевое устройство, основная функция
                    которого заключается в передаче видеоизображения в цифровом
                    формате по TCP/IP сетям, например через Ethernet или Wi-Fi.
                    Каждая IP-камера имеет сетевой интерфейс и, зачастую,
                    встроенный веб-сервер
                  </p>
                  <p>
                    Cетям, например через Ethernet или Wi-Fi. Каждая IP-камера
                    имеет сетевой интерфейс и, зачастую, встроенный веб-сервер
                  </p>
                </div>
              </div>
              <div className={style.producers}>
                <h3 className={style.title_h3}>Производители</h3>
                <div className={style.producersLogos}>
                  <img src={gaussLogo} alt="Gauss" />
                  <img src={gaussLogo} alt="Gauss" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
