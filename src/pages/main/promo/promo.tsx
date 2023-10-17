import style from "./promo.module.scss";

const Promo: React.FC = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.title}>
            Продажа и установка <span>видеонаблюдения</span>
          </h1>
          <p className={style.subtitle}>Кавказкие Минеральные Воды</p>
        </div>
      </div>
    </div>
  );
};

export default Promo;
