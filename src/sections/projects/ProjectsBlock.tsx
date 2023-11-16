import ProjectCard from "./projectCard/ProjectCard";
import ProjectCardBtn from "./projectCardBtn/ProjectCardBtn";
import style from "./projectsBlock.module.scss";

import { retailCardInfo, officeCardInfo } from "assets/cards/CardsInfo";

const Projects: React.FC = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title_h2__double}>
            <p>Выполненные проекты</p>
            <h2>У нас серьёзные заказчики</h2>
          </div>
          <div className={style.slider}>
            <div className={style.sliderCards}>
              <ProjectCard
                images={retailCardInfo.images}
                title={retailCardInfo.title}
                description={retailCardInfo.description}
              ></ProjectCard>

              <ProjectCard
                images={officeCardInfo.images}
                title={officeCardInfo.title}
                description={officeCardInfo.description}
              ></ProjectCard>
              <ProjectCardBtn></ProjectCardBtn>
            </div>
            <div className={style.nextBtn}>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
