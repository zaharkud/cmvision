import style from "./sliderBtns.module.scss";

const SliderBtns: React.FC = () => {
  return (
    <div className={style.content}>
      <div className={style.btn}></div>
      <div className={style.btn}></div>
      <div className={`${style.btn} ${style.btn__active}`}></div>
    </div>
  );
};

export default SliderBtns;
