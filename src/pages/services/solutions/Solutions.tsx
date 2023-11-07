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
                Установка системы видеонаблюдения в розничном магазине.
                Используются купольные камеры внутреннего типа. Настройка
                удаленного доступа на видеорегистраторе в подарок.
              </p>
            </div>
          </div>
          <div className={style.cardRight}>
            <p className={style.purchaseLine}>
              Монтаж кабеля, 20м. по 16р.
              <br /> 320 РУБ
            </p>
            <p className={style.purchaseLine}>
              Установка камер видеонаблюдения 4шт. по 550р.
              <br />
              2200 РУБ
            </p>
            <p className={style.purchaseLine}>
              Подключение блока питания 1шт. по 350р.
              <br />
              350 РУБ
            </p>
            <p className={style.purchaseLine}>
              Установка и настройка видеорегистратора <br />
              1500 РУБ
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
                Установка системы видеонаблюдения на производстве. Используются
                уличные камеры видеонаблюдения для контроля за периметром.
                Настройка удаленного доступа на видеорегистраторе в подарок.
              </p>
            </div>
          </div>
          <div className={style.cardRight}>
            <p className={style.purchaseLine}>
              Монтаж кабеля, 150м. по 16р.
              <br /> 2400 РУБ
            </p>
            <p className={style.purchaseLine}>
              Установка камер видеонаблюдения 4шт. по 850р.
              <br />
              3400 РУБ
            </p>
            <p className={style.purchaseLine}>
              Подключение блока питания 1шт. по 350р.
              <br />
              350 РУБ
            </p>
            <p className={style.purchaseLine}>
              Установка и настройка видеорегистратора <br />
              1500 РУБ
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
              <h3 className={style.title_h3}>Банк</h3>
              <p className={style.text}>
                Установка системы видеонаблюдения в складском помещении.
                Используются уличные камеры видеонаблюдения для контроля за
                периметром. Настройка удаленного доступа на видеорегистраторе в
                подарок.
              </p>
            </div>
          </div>
          <div className={style.cardRight}>
            <p className={style.purchaseLine}>
              Монтаж кабеля, 200м. по 16р.
              <br /> 3200 РУБ
            </p>
            <p className={style.purchaseLine}>
              Установка камер видеонаблюдения 8шт. по 850р.
              <br />
              6800 РУБ
            </p>
            <p className={style.purchaseLine}>
              Подключение блока питания 1шт. по 350р.
              <br />
              350 РУБ
            </p>
            <p className={style.purchaseLine}>
              Установка и настройка видеорегистратора <br />
              1500 РУБ
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
              <h3 className={style.title_h3}>Банк</h3>
              <p className={style.text}>
                Установка системы видеонаблюдения в ресторане. Используются
                купольные камеры внутреннего типа. Настройка удаленного доступа
                на видеорегистраторе в подарок.
              </p>
            </div>
          </div>
          <div className={style.cardRight}>
            <p className={style.purchaseLine}>
              Монтаж кабеля, 100м. по 16р.
              <br /> 1600 РУБ
            </p>
            <p className={style.purchaseLine}>
              Монтаж кабель-канала, 100м. по 35р.
              <br /> 3500 РУБ
            </p>
            <p className={style.purchaseLine}>
              Установка камер видеонаблюдения 8шт. по 550р.
              <br />
              4400 РУБ
            </p>
            <p className={style.purchaseLine}>
              Подключение блока питания 1шт. по 350р.
              <br />
              350 РУБ
            </p>
            <p className={style.purchaseLine}>
              Установка и настройка видеорегистратора <br />
              1500 РУБ
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
              <h3 className={style.title_h3}>Банк</h3>
              <p className={style.text}>
                Установка системы видеонаблюдения в помещениях офиса.
                Используются купольные камеры внутреннего типа. Настройка
                удаленного доступа на видеорегистраторе в подарок.
              </p>
            </div>
          </div>
          <div className={style.cardRight}>
            <p className={style.purchaseLine}>
              Монтаж кабеля, 160м. по 16р.
              <br /> 2560 РУБ
            </p>
            <p className={style.purchaseLine}>
              Монтаж кабель-канала, 160м. по 35р.
              <br /> 5600 РУБ
            </p>
            <p className={style.purchaseLine}>
              Установка камер видеонаблюдения 8шт. по 550р.
              <br />
              4400 РУБ
            </p>
            <p className={style.purchaseLine}>
              Подключение блока питания 1шт. по 350р.
              <br />
              350 РУБ
            </p>
            <p className={style.purchaseLine}>
              Установка и настройка видеорегистратора <br />
              1500 РУБ
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
              <h3 className={style.title_h3}>Банк</h3>
              <p className={style.text}>
                Установка системы видеонаблюдения в на территории частного дома.
                Используются уличные камеры видеонаблюдения для контроля за
                периметром. Настройка удаленного доступа на видеорегистраторе в
                подарок.
              </p>
            </div>
          </div>
          <div className={style.cardRight}>
            <p className={style.purchaseLine}>
              Монтаж кабеля в гофротрубе, 40м. по 19р.
              <br /> 760 РУБ
            </p>
            <p className={style.purchaseLine}>
              Монтаж гофротрубы, 40м. по 17р.
              <br /> 680 РУБ
            </p>
            <p className={style.purchaseLine}>
              Установка камер видеонаблюдения 4шт. по 850р.
              <br />
              3400 РУБ
            </p>
            <p className={style.purchaseLine}>
              Подключение блока питания 1шт. по 350р.
              <br />
              350 РУБ
            </p>
            <p className={style.purchaseLine}>
              Установка и настройка видеорегистратора <br />
              1500 РУБ
            </p>
            <p className={style.finalCost}>6 690 РУБ</p>
          </div>
        </div>
      </div>
    </div>
  );
};
