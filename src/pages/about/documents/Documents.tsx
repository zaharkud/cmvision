import { useRef } from "react";

import style from "./documents.module.scss";

import mock from "assets/img/documents/mock.jpg";
import mock2 from "assets/img/promo/promo.jpg";

const Documents: React.FC = () => {
  //calculating max block`s witdh based on the inner image
  const imgRef = useRef<HTMLImageElement>(null);
  const filesItemMaxWidth = imgRef?.current?.clientWidth;

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title_h2__double}>
            <p>ДОКУМЕНТЫ</p>
            <h2>У нас есть все необходимые разрешения</h2>
          </div>
          <div className={style.filesList}>
            <div className={style.filesItem}>
              <img src={mock} alt="document" />
            </div>
            <div className={style.filesItem}>
              <img src={mock2} alt="document" />
            </div>
            <div className={style.filesItem}>
              <img src={mock} alt="document" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
