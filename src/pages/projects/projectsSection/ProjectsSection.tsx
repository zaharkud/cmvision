import ProjectCardExtra from "./projectCardExtra/ProjectCardExtra";
import ProjectCardMini from "./projectCardMini/ProjectCardMini";
import style from "./projectsSection.module.scss";

const ProjectsSection: React.FC = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.pageTitle}>Проекты</h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            sagittis mauris ac enim sagittis dignissim.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nunc sagittis mauris ac enim
            sagittis dignissim.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc sagittis mauris ac enim sagittis
            dignissim.Lorem ipsum
          </p>
          <div className={style.projectsList}>
            <ProjectCardMini />
            <ProjectCardMini />
            <ProjectCardExtra />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
