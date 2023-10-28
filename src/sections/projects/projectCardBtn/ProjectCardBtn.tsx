import SliderBtns from "components/sliderBtns/SliderBtns";
import style from "./projectCardBtn.module.scss";
import mock from "assets/img/projects/mock.jpg";
import { Link } from "react-router-dom";

const ProjectCardBtn: React.FC = () => {
  return (
    <article className={style.card}>
      <div className={style.content}>
        <div className={style.contentTop}>
          <Link to="/projects" className={style.link}>
            Смотреть все проекты
          </Link>
        </div>
        <div className={style.contentBottom}>
          <div className={style.descr}></div>
          <div className={style.sliderBtns}>
            <SliderBtns></SliderBtns>
          </div>
        </div>
      </div>
      <div className={style.bg}></div>
    </article>
  );
};

export default ProjectCardBtn;
