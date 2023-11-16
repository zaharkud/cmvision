import style from "./serviceCardMini.module.scss";

interface IServiceCardMini {
  title: string;
  img: string;
  onClick(): void;
}

const ServiceCardMini = ({ title, img, onClick }: IServiceCardMini) => {
  return (
    <article className={style.content} onClick={onClick}>
      <div className={style.top}>
        <img src={img} />
      </div>
      <div className={style.bottom}>
        <h4 className={style.title_h4} style={{ fontWeight: "200" }}>
          {title}
        </h4>
      </div>
    </article>
  );
};

export default ServiceCardMini;
