import style from "./advantages.module.scss";

import lineWrecked from "assets/img/deco/lineWrecked.svg";
import lineStraight from "assets/img/deco/lineStraight.svg";
import bgGrey from "assets/img/deco/bgGrey.svg";
import AdvantageItemRight from "./components/advantageItemRight";
import AdvantageItemLeft from "./components/advantageItemLeft";

const Advantages: React.FC = () => {
  return (
    <div className={style.section}>
      <div className={style.deco}>
        <img className={style.lineWrecked} src={lineWrecked} />
        <img className={style.bgGrey} src={bgGrey} />
        <img className={style.lineStraight} src={lineStraight} />
      </div>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title_h2__double}>
            <p>ПОЧЕМУ МЫ?</p>
            <h2>4 весомые причины</h2>
          </div>
          <div className={style.advantages}>
            <AdvantageItemRight></AdvantageItemRight>
            <AdvantageItemRight></AdvantageItemRight>
            <AdvantageItemLeft></AdvantageItemLeft>
            <AdvantageItemLeft></AdvantageItemLeft>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
