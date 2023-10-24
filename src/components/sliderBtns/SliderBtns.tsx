import style from "./sliderBtns.module.scss";

const SliderBtns: React.FC = () => {
  return (
    <div className={style.content}>
      <div className={style.btnCircle}></div>
      <div className={style.btnCircle}></div>
      <div className={`${style.btnCircle} ${style.btnCircle__active}`}></div>
    </div>
  );
};

export default SliderBtns;
