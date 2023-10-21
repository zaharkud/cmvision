import style from "./documents.module.scss";

import mock from "assets/img/documents/mock.jpg";

const Documents: React.FC = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title_h2__double}>
            <p>ДОКУМЕНТЫ</p>
            <h2>У нас есть все необходимые разрешения</h2>
          </div>
          <div className={style.documentsList}>
            <div className={style.documentsItem}>
              <img src={mock} alt="document" />
              <div className={style.bg}></div>
            </div>
            <div className={style.documentsItem}>
              <img src={mock} alt="document" />
              <div className={style.bg}></div>
            </div>
            <div className={style.documentsItem}>
              <img src={mock} alt="document" />
              <div className={style.bg}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
