import style from "./serviceCard.module.scss";
import img from "assets/icons/services/cam.svg";

const ServiceCard: React.FC = () => {
  return (
    <div className={style.content}>
      <div className={style.top}>
        <img src={img} />
      </div>
      <div className={style.bottom}>
        <h4 className={style.title_h4}>Системы видеонаблюдения</h4>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, conse ctetur adipiscing.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
