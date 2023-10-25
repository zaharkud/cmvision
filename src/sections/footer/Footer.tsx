import style from "./footer.module.scss";

import { Link } from "react-router-dom";

import logo from "assets/img/logo/logo.png";

import lineWrecked from "assets/img/deco/lineWrecked.svg";
import lineStraight from "assets/img/deco/lineStraight.svg";

import telephoneIcon from "assets/icons/social/telephone.svg";
import whatsappIcon from "assets/icons/social/whatsapp.svg";
import telegramIcon from "assets/icons/social/telegram.svg";

const Footer: React.FC = () => {
  return (
    <header className={style.section}>
      <div className={style.deco}>
        <img className={style.lineWrecked} src={lineWrecked} />
        <img className={style.lineStraight} src={lineStraight} />
      </div>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.footerTop}>
            <a className={style.logo} href="#">
              <img src={logo} alt="Системы Безопасности" />
              <p>Системы безопасности</p>
            </a>
          </div>
          <div className={style.footerCenter}>
            <div className={style.column_1}>
              <p className={style.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sagittis mauris ac enim sagittis dignissim.
              </p>
              <div className={style.social}>
                <a href="#">
                  <img src={telephoneIcon} />
                </a>
                <a href="#">
                  <img src={whatsappIcon} />
                </a>
                <a href="#">
                  <img src={telegramIcon} />
                </a>
              </div>
            </div>
            <div className={style.column_2}>
              <h4 className={style.title_h4}>ГОРОДА</h4>
              <div className={style.cities}>
                <ul className={style.citiesUl}>
                  <li>Пятигорск</li>
                  <li>Кисловодск</li>
                  <li>Ессентуки</li>
                  <li>Георгиевск</li>
                  <li>Железноводск</li>
                </ul>
                <ul className={style.citiesUl}>
                  <li>Минеральные Воды</li>
                  <li>Зеленокумск</li>
                  <li>Суворовская</li>
                  <li>Новопавловск</li>
                  <li>И другие...</li>
                </ul>
              </div>
            </div>
            <div className={style.column_3}>
              <h4 className={style.title_h4}>СТРАНИЦЫ</h4>
              <nav>
                <ul className={style.menu}>
                  <li>
                    <Link to="/">Главная</Link>
                  </li>
                  <li>
                    <Link to="/about">О нас</Link>
                  </li>
                  <li>
                    <Link to="/services">Услуги</Link>
                  </li>
                  <li>
                    <Link to="/projects">Проекты </Link>
                  </li>
                  <li>
                    <Link to="/contacts">Контакты </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={style.footerBottom}>
            <p>© KMVision, 2023. KMVision - системы безопасности</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
