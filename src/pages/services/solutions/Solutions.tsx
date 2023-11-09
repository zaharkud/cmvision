import { useState } from "react";

import style from "./solutions.module.scss";

import mock from "assets/img/projects/mock.jpg";

const Solutions: React.FC = () => {
  const [solutionDescription, setSolutionDescription] =
    useState<JSX.Element>(retailSolution);

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
                <li
                  className={style.btn}
                  onClick={() => setSolutionDescription(retailSolution)}
                >
                  Розничный магазин
                </li>
                <li
                  className={style.btn}
                  onClick={() => setSolutionDescription(factorySolution)}
                >
                  Производство
                </li>
                <li
                  className={style.btn}
                  onClick={() => setSolutionDescription(warehouseSolution)}
                >
                  Склад
                </li>
                <li
                  className={style.btn}
                  onClick={() => setSolutionDescription(restaurantSolution)}
                >
                  Ресторан
                </li>
                <li
                  className={style.btn}
                  onClick={() => setSolutionDescription(officeSolution)}
                >
                  Офис
                </li>
                <li
                  className={style.btn}
                  onClick={() => setSolutionDescription(houseSolution)}
                >
                  Частный дом
                </li>
              </ul>
            </div>
            {solutionDescription}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

const retailSolution = () => {
  return (
    <div className={style.solutionsCard}>
      <div className={style.cardContent}>
        <div className={style.cardImg}>
          <img src={mock} alt="gazprom"></img>
        </div>
        <div className={style.cardInfo}>
          <div className={style.cardLeft}>
            <div className={style.descr}>
              <h3 className={style.title_h3}>Розничный магазин</h3>
              <p className={style.text}>
                <p>Установка системы видеонаблюдения в розничном магазине.</p>
                <p>Используются купольные камеры внутреннего типа.</p>
                <p>
                  Настройка удаленного доступа на видеорегистраторе в подарок.
                </p>
              </p>
            </div>
          </div>
          <div className={style.cardRight}>
            <p className={style.purchaseLine}>
              <p>Монтаж кабеля,</p>
              <p>20м. по 16р.</p>
              <p>320 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Установка камер,</p>
              <p>4шт. по 550р.</p>
              <p>2200 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Подключение блока питания,</p>
              <p>1шт. по 350р.</p>
              <p>350 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Установка и настройка видеорегистратора,</p>
              <p>1шт. по 1500р.</p>
              <p>1500 РУБ</p>
            </p>
            <p className={style.finalCost}>4 370 РУБ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const factorySolution = () => {
  return (
    <div className={style.solutionsCard}>
      <div className={style.cardContent}>
        <div className={style.cardImg}>
          <img src={mock} alt="gazprom"></img>
        </div>
        <div className={style.cardInfo}>
          <div className={style.cardLeft}>
            <div className={style.descr}>
              <h3 className={style.title_h3}>Производство</h3>
              <p className={style.text}>
                <p>Установка системы видеонаблюдения на производстве.</p>
                <p>
                  Используются уличные камеры видеонаблюдения для контроля за
                  периметром.
                </p>
                <p>
                  Настройка удаленного доступа на видеорегистраторе в подарок.
                </p>
              </p>
            </div>
          </div>
          <div className={style.cardRight}>
            <p className={style.purchaseLine}>
              <p>Монтаж кабеля,</p>
              <p>150м. по 16р.</p>
              <p>2400 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Установка камер,</p>
              <p>4шт. по 850р.</p>
              <p>3400 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Подключение блока питания,</p>
              <p>1шт. по 350р.</p>
              <p>350 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Установка и настройка видеорегистратора,</p>
              <p>1шт. по 1500р.</p>
              <p>1500 РУБ</p>
            </p>
            <p className={style.finalCost}>7 650 РУБ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const warehouseSolution = () => {
  return (
    <div className={style.solutionsCard}>
      <div className={style.cardContent}>
        <div className={style.cardImg}>
          <img src={mock} alt="gazprom"></img>
        </div>
        <div className={style.cardInfo}>
          <div className={style.cardLeft}>
            <div className={style.descr}>
              <h3 className={style.title_h3}>Склад</h3>
              <p className={style.text}>
                <p>Установка системы видеонаблюдения в складском помещении.</p>
                <p>
                  Используются уличные камеры видеонаблюдения для контроля за
                  периметром.
                </p>
                <p>
                  Настройка удаленного доступа на видеорегистраторе в подарок.
                </p>
              </p>
            </div>
          </div>
          <div className={style.cardRight}>
            <p className={style.purchaseLine}>
              <p>Монтаж кабеля,</p>
              <p>200м. по 16р.</p>
              <p>3200 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Установка камер,</p>
              <p>8шт. по 850р.</p>
              <p>6800 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Подключение блока питания,</p>
              <p>1шт. по 350р.</p>
              <p>350 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Установка и настройка видеорегистратора,</p>
              <p>1шт. по 1500р.</p>
              <p>1500 РУБ</p>
            </p>
            <p className={style.finalCost}>11 850 РУБ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const restaurantSolution = () => {
  return (
    <div className={style.solutionsCard}>
      <div className={style.cardContent}>
        <div className={style.cardImg}>
          <img src={mock} alt="gazprom"></img>
        </div>
        <div className={style.cardInfo}>
          <div className={style.cardLeft}>
            <div className={style.descr}>
              <h3 className={style.title_h3}>Ресторан</h3>
              <p className={style.text}>
                <p>Установка системы видеонаблюдения в ресторане.</p>
                <p>Используются купольные камеры внутреннего типа.</p>
                <p>
                  Настройка удаленного доступа на видеорегистраторе в подарок.
                </p>
              </p>
            </div>
          </div>
          <div className={style.cardRight}>
            <p className={style.purchaseLine}>
              <p>Монтаж кабеля,</p>
              <p>100м. по 16р.</p>
              <p>1600 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Монтаж кабель-канала,</p>
              <p>100м. по 35р.</p>
              <p>3500 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Установка камер,</p>
              <p>8шт. по 550р.</p>
              <p>4400 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Подключение блока питания,</p>
              <p>1шт. по 350р.</p>
              <p>350 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Установка и настройка видеорегистратора,</p>
              <p>1шт. по 1500р.</p>
              <p>1500 РУБ</p>
            </p>
            <p className={style.finalCost}>11 350 РУБ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const officeSolution = () => {
  return (
    <div className={style.solutionsCard}>
      <div className={style.cardContent}>
        <div className={style.cardImg}>
          <img src={mock} alt="gazprom"></img>
        </div>
        <div className={style.cardInfo}>
          <div className={style.cardLeft}>
            <div className={style.descr}>
              <h3 className={style.title_h3}>Офис</h3>
              <p className={style.text}>
                <p>Установка системы видеонаблюдения в помещениях офиса.</p>
                <p>Используются купольные камеры внутреннего типа.</p>
                <p>
                  Настройка удаленного доступа на видеорегистраторе в подарок.
                </p>
              </p>
            </div>
          </div>
          <div className={style.cardRight}>
            <p className={style.purchaseLine}>
              <p>Монтаж кабеля,</p>
              <p>160м. по 16р.</p>
              <p>2560 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Монтаж кабель-канала,</p>
              <p>160м. по 35р.</p>
              <p>5600 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Установка камер,</p>
              <p>8шт. по 550р.</p>
              <p>4400 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Подключение блока питания,</p>
              <p>1шт. по 350р.</p>
              <p>350 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Установка и настройка видеорегистратора,</p>
              <p>1шт. по 1500р.</p>
              <p>1500 РУБ</p>
            </p>
            <p className={style.finalCost}>16 900 РУБ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const houseSolution = () => {
  return (
    <div className={style.solutionsCard}>
      <div className={style.cardContent}>
        <div className={style.cardImg}>
          <img src={mock} alt="gazprom"></img>
        </div>
        <div className={style.cardInfo}>
          <div className={style.cardLeft}>
            <div className={style.descr}>
              <h3 className={style.title_h3}>Частный дом</h3>
              <p className={style.text}>
                <p>
                  Установка системы видеонаблюдения в на территории частного
                  дома.
                </p>
                <p>
                  Используются уличные камеры видеонаблюдения для контроля за
                  периметром.
                </p>
                <p>
                  Настройка удаленного доступа на видеорегистраторе в подарок.
                </p>
              </p>
            </div>
          </div>
          <div className={style.cardRight}>
            <p className={style.purchaseLine}>
              <p>Монтаж кабеля в гофротрубе, </p>
              <p>40м. по 19р.</p>
              <p>760 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Монтаж гофротрубы,</p>
              <p>40м. по 17р.</p>
              <p>680 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Установка камер,</p>
              <p>4шт. по 850р.</p>
              <p>3400 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Подключение блока питания,</p>
              <p>1шт. по 350р.</p>
              <p>350 РУБ</p>
            </p>
            <p className={style.purchaseLine}>
              <p>Установка и настройка видеорегистратора,</p>
              <p>1шт. по 1500р.</p>
              <p>1500 РУБ</p>
            </p>
            <p className={style.finalCost}>6 690 РУБ</p>
          </div>
        </div>
      </div>
    </div>
  );
};
