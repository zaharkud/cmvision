import style from "./projectCardExtra.module.scss";

import { useState } from "react";

interface IProjectCard {
  images: string[];
  title: string;
  description: JSX.Element;
}

const ProjectCardExtra = ({ images, title, description }: IProjectCard) => {
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
            alt="Выполненный проект"
            onClick={() => {
              changeCount();
            }}
          />
          <img src={images[2]} alt="Выполненный проект" />
          <img src={images[1]} alt="Выполненный проект" />
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
            <h3 className={style.title_h3}>{title}</h3>
            <div className={style.text}>{description}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCardExtra;
