import ProjectCardExtra from "./projectCardExtra/ProjectCardExtra";
import ProjectCardMini from "./projectCardMini/ProjectCardMini";
import style from "./projectsSection.module.scss";

import {
  bankCardInfo,
  officeCardInfo,
  retailCardInfo,
} from "assets/cards/CardsInfo";

const ProjectsSection: React.FC = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.pageTitle}>Проекты</h1>
          <p className={style.text}>
            Уже выполнили много проектов различной сложности – от установки
            видеонаблюдения в частном доме до работы с крупными организациями.
            Вот некоторые из наших работ:
          </p>
          <div className={style.projectsList}>
            <ProjectCardMini
              images={officeCardInfo.images}
              title={officeCardInfo.title}
              description={officeCardInfo.description}
            />
            <ProjectCardMini
              images={retailCardInfo.images}
              title={retailCardInfo.title}
              description={retailCardInfo.description}
            />
            <ProjectCardExtra
              images={bankCardInfo.images}
              title={bankCardInfo.title}
              description={bankCardInfo.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
