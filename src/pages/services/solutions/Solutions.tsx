import style from "./solutions.module.scss";

import mock from "assets/img/projects/mock.jpg";

const Solutions: React.FC = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title_h2__double}>
            <p>РАСЧЕТ СТОИМОСТИ</p>
            <h2>Типовые решения</h2>
          </div>
          <div className={style.solutionsSwitcher}>
            <div className={style.solutionsMenu}>
              <ul>
                <li className={style.btn}>Розничный магазин</li>
                <li className={style.btn}>Розничный магазин</li>
                <li className={style.btn}>Розничный магазин</li>
                <li className={style.btn}>Розничный магазин</li>
                <li className={style.btn}>Розничный магазин</li>
              </ul>
            </div>
            <div className={style.solutionsCard}>
              <div className={style.cardContent}>
                <div className={style.cardImg}>
                  <img src={mock} alt="gazprom"></img>
                </div>
                <div className={style.cardInfo}>
                  <div className={style.cardLeft}>
                    <div className={style.descr}>
                      <h3 className={style.title_h3}>ОАО “Газпром”</h3>
                      <p className={style.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc sagittis mauris ac enim sagittis dignissim.
                      </p>
                    </div>
                  </div>
                  <div className={style.cardRight}>
                    <p className={style.purchaseLine}>
                      Камера 15 шт. по
                      <br /> 2 500 РУБ
                    </p>
                    <p className={style.purchaseLine}>
                      Ноутбук 2 шт. по <br />
                      25 000 РУБ
                    </p>
                    <p className={style.purchaseLine}>
                      Провод 35 м. по <br />
                      300 РУБ
                    </p>
                    <p className={style.finalCost}>50 000 РУБ</p>
                  </div>
                </div>
              </div>
              <div className={style.bg}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
