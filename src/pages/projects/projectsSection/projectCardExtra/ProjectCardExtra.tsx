import style from "./projectCardExtra.module.scss";

import SliderBtns from "components/sliderBtns/SliderBtns";
import mock from "assets/img/projects/mock.jpg";

const ProjectCardExtra: React.FC = () => {
  return (
    <article className={style.card}>
      <div className={style.content}>
        <div className={style.contentLeft}>
          <img src={mock} alt="gazprom" />
          <img src={mock} alt="gazprom" />
          <img src={mock} alt="gazprom" />
        </div>
        <div className={style.contentRight}>
          <div className={style.sliderBtns}>
            <SliderBtns></SliderBtns>
          </div>
          <div className={style.descr}>
            <h3 className={style.title_h3}>ОАО “Газпром”</h3>
            <p className={style.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              sagittis mauris ac enim sagittis dignissim.
            </p>
            <p className={style.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              sagittis mauris ac enim sagittis dignissim.
            </p>
            <p className={style.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              sagittis mauris ac enim sagittis dignissim.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCardExtra;
