import style from "./projectCard.module.scss";

import { useState } from "react";

import officeSolutionImage from "assets/img/solutions/officeSolutionImage.jpg";
import restaurantSolutionImage from "assets/img/solutions/restaurantSolutionImage.jpg";
import retailSolutionImage from "assets/img/solutions/retailSolutionImage.jpg";
import warehouseSolutionImage from "assets/img/solutions/warehouseSolutionImage.jpg";

const ProjectCard: React.FC = () => {
  const images: string[] = [
    officeSolutionImage,
    restaurantSolutionImage,
    retailSolutionImage,
  ];

  const [imageCount, setImageCount] = useState<number>(0);

  //меняем state с порядковым номером изображения из массива
  const changeCount = (): void => {
    imageCount < images.length - 1
      ? setImageCount((prev) => prev + 1)
      : setImageCount(0);
  };

  //выставляем активный класс для кнопки слайдера, если показывается изображение, соответствующее этой кнопке
  const setClassesForBtn = (index: number): string => {
    if (index === imageCount) {
      return `${style.btnCircle} ${style.btnCircle__active}`;
    }
    return `${style.btnCircle}`;
  };

  return (
    <article className={style.card}>
      <div className={style.content}>
        <div
          className={style.contentTop}
          onClick={() => {
            changeCount();
          }}
        >
          <img src={images[imageCount]} alt="gazprom" />
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
            {images.map((item, index) => {
              return (
                <div
                  key={index}
                  className={setClassesForBtn(index)}
                  onClick={() => setImageCount(index)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.bg}></div>
    </article>
  );
};

export default ProjectCard;
