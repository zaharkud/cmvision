import style from "./projectCardExtra.module.scss";

import { useState } from "react";

import SliderBtns from "components/sliderBtns/SliderBtns";
import mock from "assets/img/projects/mock.jpg";

import officeSolutionImage from "assets/img/solutions/officeSolutionImage.jpg";
import restaurantSolutionImage from "assets/img/solutions/restaurantSolutionImage.jpg";
import retailSolutionImage from "assets/img/solutions/retailSolutionImage.jpg";
import warehouseSolutionImage from "assets/img/solutions/warehouseSolutionImage.jpg";

const ProjectCardExtra: React.FC = () => {
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
        <div className={style.contentLeft}>
          <img
            src={images[imageCount]}
            alt="gazprom"
            onClick={() => {
              changeCount();
            }}
          />
          <img
            src={images[imageCount - 1]}
            alt="gazprom"
            onClick={() => {
              changeCount();
            }}
          />
          <img
            src={images[imageCount - 2]}
            alt="gazprom"
            onClick={() => {
              changeCount();
            }}
          />
        </div>
        <div className={style.contentRight}>
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
