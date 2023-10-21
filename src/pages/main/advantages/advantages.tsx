import style from "./advantages.module.scss";

import lineWrecked from "assets/img/deco/lineWrecked.svg";
import lineStraight from "assets/img/deco/lineStraight.svg";
import bgGrey from "assets/img/deco/bgGrey.svg";

import AdvantageItemRight from "./components/advantageItemRight";
import AdvantageItemLeft from "./components/advantageItemLeft";

import equipment from "assets/icons/advantages/equipment.svg";
import profTeam from "assets/icons/advantages/profTeam.svg";
import warrant from "assets/icons/advantages/warrant.svg";
import quickWork from "assets/icons/advantages/quickWork.svg";

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
            <AdvantageItemRight
              title="Гарантия от 3 лет"
              description="Предоставляем расширенную гарантию
              на оборудование от 3-х лет"
              img={warrant}
            />
            <AdvantageItemRight
              title="Современное оборудование"
              description="Монтируем только проверенное
              оборудование"
              img={equipment}
            />
            <AdvantageItemLeft
              title="Команда профессионалов"
              description="Сертифицированные специалисты с большим опытом работы"
              img={profTeam}
            />
            <AdvantageItemLeft
              title="Оперативность"
              description="Смета в течение часа,
              выезд на установку на следующий день"
              img={quickWork}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
