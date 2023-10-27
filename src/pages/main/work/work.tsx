import style from "./work.module.scss";

const Work: React.FC = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.contentLeft}>
            <h2 className={style.title_h2}>Как мы работаем</h2>
            <div className={style.workScheme}>
              <div className={style.workItem}>
                <div className={style.graphics}>
                  <span>1</span>
                </div>
                <div className={style.descr}>
                  <h4 className={style.title_h4}>
                    Выезд на объект нашего специалиста
                  </h4>
                  <p className={style.text}>
                    Специалист осмотрит объект, соорентирует по ценам и
                    необходимому оборудованию
                  </p>
                </div>
              </div>
              <div className={style.workItem}>
                <div className={style.graphics}>
                  <span>2</span>
                </div>
                <div className={style.descr}>
                  <h4 className={style.title_h4}>
                    Подготовка сметы и других документов
                  </h4>
                  <p className={style.text}>
                    Обсуждение, составление сметы и коммерческого предложения.
                    Если всё подходит - заключаем договор на оказание услуг
                  </p>
                </div>
              </div>
              <div className={style.workItem}>
                <div className={style.graphics}>
                  <span>3</span>
                </div>
                <div className={style.descr}>
                  <h4 className={style.title_h4}>Монтаж оборудования</h4>
                  <p className={style.text}>
                    После выполнения работ и того, как вы примете объект
                    подписываем акт о выполненных работах
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.contentRight}>
            <div className={style.decoOut}></div>
            <div className={style.decoIn}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
