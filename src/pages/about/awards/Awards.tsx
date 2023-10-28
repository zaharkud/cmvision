import { useRef } from "react";

import style from "./awards.module.scss";

import mock from "assets/img/documents/mock.jpg";
import mock2 from "assets/img/promo/promo.jpg";
import FileItem from "components/fileItem/fileItem";

const Awards: React.FC = () => {
  //TODO: перенести рассчет длины на все элементы
  //calculating max block`s witdh based on the inner image
  const imgRef = useRef<HTMLImageElement>(null);
  const filesItemMaxWidth = imgRef?.current?.clientWidth;

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title_h2__double}>
            <p>СЕРТИФИКАТЫ И НАГРАДЫ</p>
            <h2>И мы хороши в своем деле</h2>
          </div>
          <div className={style.filesList}>
            <FileItem img={mock}></FileItem>
            <FileItem img={mock}></FileItem>
            <FileItem img={mock2}></FileItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
