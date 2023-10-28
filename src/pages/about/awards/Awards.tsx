import style from "./awards.module.scss";

import mock from "assets/img/documents/mock.jpg";
import mock2 from "assets/img/promo/promo.jpg";

const Awards: React.FC = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title_h2__double}>
            <p>СЕРТИФИКАТЫ И НАГРАДЫ</p>
            <h2>И мы хороши в своем деле</h2>
          </div>
          <div className={style.filesList}>
            <div className={style.filesItem}>
              <img src={mock} alt="document" />
            </div>
            <div className={style.filesItem}>
              <img src={mock} alt="document" />
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

export default Awards;
