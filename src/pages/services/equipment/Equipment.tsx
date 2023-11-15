import style from "./equipment.module.scss";

import { useState } from "react";

import lineWrecked from "assets/img/deco/lineWrecked.svg";
import lineStraight from "assets/img/deco/lineStraight.svg";
import bgBlack from "assets/img/deco/bgBlack.svg";

import domeCam from "assets/img/techEquipment/cams/domeCam.webp";
import fixedCam from "assets/img/techEquipment/cams/fixedCam.webp";
import ptzCam from "assets/img/techEquipment/cams/ptzCam.webp";
import miniCam from "assets/img/techEquipment/cams/miniCam.webp";
import ipCam from "assets/img/techEquipment/cams/ipCam.webp";
import outsideCam from "assets/img/techEquipment/cams/outsideCam.webp";

import hikvisionProducer from "assets/img/producersLogos/hikvisionProducer.webp";
import dahuaProducer from "assets/img/producersLogos/dahuaProducer.jpg";

const Equipment: React.FC = () => {
  const [equipmentContent, setEquipmentContent] =
    useState<JSX.Element>(domeCamContent);

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
              <article
                className={style.cardItem}
                onClick={() => setEquipmentContent(domeCamContent)}
              >
                <img src={domeCam} alt="Купольные видеокамеры" />
              </article>
              <article
                className={style.cardItem}
                onClick={() => setEquipmentContent(ipCamContent)}
              >
                <img src={ipCam} alt="IP-видеокамеры" />
              </article>
              <article
                className={style.cardItem}
                onClick={() => setEquipmentContent(ptzCamContent)}
              >
                <img src={ptzCam} alt="Поворотные видеокамеры" />
              </article>
              <article
                className={style.cardItem}
                onClick={() => setEquipmentContent(miniCamContent)}
              >
                <img src={miniCam} alt="Мини-видеокамеры" />
              </article>
              <article
                className={style.cardItem}
                onClick={() => setEquipmentContent(outsideCamContent)}
              >
                <img src={outsideCam} alt="Наружные видеокамеры" />
              </article>
            </div>
            <div className={style.equipmentInfo}>
              {equipmentContent}
              <div className={style.producers}>
                <h3 className={style.title_h3}>Производители</h3>
                <div className={style.producersLogos}>
                  <a
                    href="https://hikvision.ru/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={hikvisionProducer} alt="HikVision" />
                  </a>
                  <a
                    href="https://www.dahuasecurity.com/ea"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={dahuaProducer} alt="Dahua" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const domeCamContent = () => {
  return (
    <div className={style.descr}>
      <h3 className={style.title_h3}>Купольные видеокамеры</h3>
      <div className={style.text}>
        <p>
          Обладают привлекательным дизайном, могут быть установлены на потолке и
          стенах внутри помещения или на улице (в антивандальном исполнении),
          могут быть с ИК-подсветкой для работы в темноте.
        </p>
        <p>
          Это скоростное поворотное устройство в полусферическом корпусе с
          трансфокаторным объективом, которое может непрерывно двигаться на 180
          градусов по вертикали и 360 по горизонтали, давая возможность
          наблюдать за большой территорией с быстро передвигающимися объектами.
        </p>
      </div>
    </div>
  );
};

const ipCamContent = () => {
  return (
    <div className={style.descr}>
      <h3 className={style.title_h3}>IP-видеокамеры</h3>
      <div className={style.text}>
        <p>
          IP камера видеонаблюдения представляет собой видеокамеру и компьютер,
          объединенные в одно устройство. IP.
        </p>
        <p>
          Захват и передача в реальном времени изображений в сетевой ip камере
          происходит через сеть, позволяя авторизованным пользователям
          локально/удаленно просматривать, хранить и управлять видеопотоком по
          стандартной сетевой инфраструктуре на базе
        </p>
      </div>
    </div>
  );
};

const ptzCamContent = () => {
  return (
    <div className={style.descr}>
      <h3 className={style.title_h3}>Поворотные видеокамеры</h3>
      <div className={style.text}>
        <p>
          Поворотный механизм дает возможность камере двигаться и изменять зону
          наблюдения, применяются на складах, автомобильных стоянках, любых
          обширных территориях с большим количеством людей. Позволяют
          запрограммировать последовательность движения на определенные
          временные промежутки, масштабируют картинку, благодаря зуму.
        </p>
      </div>
    </div>
  );
};

const outsideCamContent = () => {
  return (
    <div className={style.descr}>
      <h3 className={style.title_h3}>Наружные видеокамеры</h3>
      <div className={style.text}>
        <p>
          Наружная видео камера отличается от внутренних моделей большей
          прочностью корпуса, расчетом на работу в условиях разных температур,
          высокой влажности.
        </p>
        <p>
          Цена наружной видеокамеры не обязательно превышает внутренние модели.
          Здесь все зависит от ряда технических особенностей и характеристик.
        </p>
      </div>
    </div>
  );
};

const miniCamContent = () => {
  return (
    <div className={style.descr}>
      <h3 className={style.title_h3}>Мини-видеокамеры</h3>
      <div className={style.text}>
        <p>
          Используются для скрытого видеонаблюдения, заключены в миниатюрный
          корпус и имеют объектив в виде игольного ушка диаметром менее
          миллиметра. Устанавливаются в предметы интерьера, потолок и т.п. так,
          что их невозможно заметить. За счет ограниченного обзора, способны
          обеспечить наблюдение за какой-либо фиксированной областью.
        </p>
        <p>Установка осуществляется в соотвествии с законодательством РФ.</p>
      </div>
    </div>
  );
};

export default Equipment;
