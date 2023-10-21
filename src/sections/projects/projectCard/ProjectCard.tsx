import SliderBtns from "components/sliderBtns/SliderBtns";
import style from "./projectCard.module.scss";
import mock from "assets/img/projects/mock.jpg";

const ProjectCard: React.FC = () => {
  return (
    <article className={style.card}>
      <div className={style.content}>
        <div className={style.contentTop}>
          <img src={mock} alt="gazprom"></img>
        </div>
        <div className={style.contentBottom}>
          <div className={style.descr}>
            <h3 className={style.title_h3}>ОАО “Газпром”</h3>
            <p className={style.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              sagittis mauris ac enim sagittis dignissim.
            </p>
          </div>
          <div className={style.sliderBtns}>
            <SliderBtns></SliderBtns>
          </div>
        </div>
      </div>
      <div className={style.bg}></div>
    </article>
  );
};

export default ProjectCard;
