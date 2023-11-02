import style from "./serviceCard.module.scss";

interface IServiceCard {
  title: string;
  text: string;
  img: string;
}

const ServiceCard = ({ title, text, img }: IServiceCard) => {
  return (
    <article className={style.content}>
      <div className={style.top}>
        <img src={img} />
      </div>
      <div className={style.bottom}>
        <h4 className={style.title_h4}>{title}</h4>
        <p className={style.text}>{text}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
