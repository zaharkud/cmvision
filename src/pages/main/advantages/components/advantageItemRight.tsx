import style from "./advantageItem.module.scss";

interface IAdvantageItemRight {
  title: string;
  description: string;
  img: any;
}

const AdvantageItemRight = ({
  title,
  description,
  img,
}: IAdvantageItemRight) => {
  return (
    <div className={style.content}>
      <div className={style.graphics}>
        <img src={img} alt="" />
      </div>
      <div className={style.descr}>
        <h3 className={style.title_h3}>{title}</h3>
        <p className={style.text}>{description}</p>
      </div>
    </div>
  );
};

export default AdvantageItemRight;
