import style from "./header.module.scss";
import logo from "assets/img/logo/logo.png";
import { useState } from "react";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  function burgerBtnHandler() {
    setMobileMenuActive((prev) => !prev);

    mobileMenuActive
      ? (document.documentElement.style.overflowY = "auto")
      : (document.documentElement.style.overflowY = "hidden");
  }

  return (
    <header className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <Link className={style.logo} to="/">
            <img src={logo} alt="Системы Безопасности" />
            <p>Системы безопасности</p>
          </Link>
          <nav>
            <ul
              className={`${style.menu} ${
                mobileMenuActive ? style.mobileMenu : ""
              }`}
            >
              <li>
                <Link to="/" className={style.link}>
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className={style.link}>
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/services" className={style.link}>
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/projects" className={style.link}>
                  Проекты
                </Link>
              </li>
              <li>
                <Link to="/contacts" className={style.link}>
                  Контакты
                </Link>
              </li>
            </ul>
            <div
              className={`${style.burgerBtn} ${
                mobileMenuActive ? style.burgerBtnActive : ""
              }`}
              onClick={burgerBtnHandler}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
