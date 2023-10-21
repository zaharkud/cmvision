import style from "./aboutPromo.module.scss";

const AboutPromo: React.FC = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.pageTitle}>О НАС</h1>
          <div className={style.aboutContent}>
            <div className={style.aboutInfo}>
              <div className={style.text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className={style.aboutStat}>
              <div className={style.statItem}>
                <span className={style.num}>98%</span>
                <p className={style.descr}>положительных отзывов</p>
              </div>
              <div className={style.statItem}>
                <span className={style.num}>20+</span>
                <p className={style.descr}>лет на рынке</p>
              </div>
              <div className={style.statItem}>
                <span className={style.num}>1500</span>
                <p className={style.descr}>выполненных заказов</p>
              </div>
              <div className={style.statItem}>
                <span className={style.num}>74</span>
                <p className={style.descr}>клиента</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPromo;
