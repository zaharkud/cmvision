import style from "./promo.module.scss";

const Promo: React.FC = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.title}>Видео- наблюдение</h1>
          <h1 className={`${style.title} ${style.titleMobile}`}>
            Видео наблю дение
          </h1>
          <p className={style.subtitle}>Продажа и установка на КМВ</p>
        </div>
      </div>
    </div>
  );
};

export default Promo;
