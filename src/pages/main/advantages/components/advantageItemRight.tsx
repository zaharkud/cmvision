import style from "./advantageItem.module.scss";
import cam from "assets/icons/services/cam.svg";

const AdvantageItem: React.FC = () => {
  return (
    <div className={style.content}>
      <div className={style.graphics}>
        <img src={cam} alt="" />
      </div>
      <div className={style.descr}>
        <h3 className={style.title_h3}>Команда профессионалов</h3>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, conse ctetur adipiscing.
        </p>
      </div>
    </div>
  );
};

export default AdvantageItem;
