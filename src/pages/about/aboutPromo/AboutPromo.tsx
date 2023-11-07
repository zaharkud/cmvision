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
                  Наша команда – это высококвалифицированные специалисты,
                  которые готовы спроектировать, установить и настроить
                  видеонаблюдение на объекте любой сложности. Мы работаем с
                  современным оборудованием, знаем тонкости и особенности работы
                  с оборудование разных производителей.
                </p>
                <p>
                  Работаем оперативно. Монтаж системы видеонаблюдения может быть
                  осуществлен всего за 1 день.
                </p>
                <p>
                  Сотрудничаем как с физическими, так и с юридическими лицами,
                  предоставляя все необходимые документы для отчетности.
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
                <span className={style.num}>345</span>
                <p className={style.descr}>выполненных заказов</p>
              </div>
              <div className={style.statItem}>
                <span className={style.num}>242</span>
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
