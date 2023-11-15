import style from "./documents.module.scss";

import certificate__1 from "assets/img/documents/certificates/certificate__1.jpg";
import certificate__2 from "assets/img/documents/certificates/certificate__2.jpg";
import certificate__3 from "assets/img/documents/certificates/certificate__3.jpg";

const Documents: React.FC = () => {
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
              <img src={certificate__1} alt="Сертификат" />
            </div>
            <div className={style.filesItem}>
              <img src={certificate__2} alt="Сертификат" />
            </div>
            <div className={style.filesItem}>
              <img src={certificate__3} alt="Сертификат" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
