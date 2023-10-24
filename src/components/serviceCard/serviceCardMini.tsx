import style from "./serviceCard.module.scss";
import img from "assets/icons/services/cam.svg";

const ServiceCardMini: React.FC = () => {
  return (
    <article className={style.content}>
      <div className={style.top}>
        <img src={img} />
      </div>
      <div className={style.bottom}>
        <h4 className={style.title_h4} style={{ fontWeight: "200" }}>
          Системы видеонаблюдения
        </h4>
      </div>
    </article>
  );
};

export default ServiceCardMini;
