import style from "./awards.module.scss";

import award__1 from "assets/img/documents/awards/award__1.jpg";
import award__2 from "assets/img/documents/awards/award__2.jpg";
import award__3 from "assets/img/documents/awards/award__3.jpg";

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
              <img src={award__1} alt="Награда" />
            </div>
            <div className={style.filesItem}>
              <img src={award__2} alt="Награда" />
            </div>
            <div className={style.filesItem}>
              <img src={award__3} alt="Награда" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
