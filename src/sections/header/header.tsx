import style from "./header.module.scss";
import logo from "assets/img/logo/logo.png";
import { useRef, useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const mobileMenu = useRef<HTMLUListElement>(null);
  const burgerBtn = useRef<HTMLDivElement>(null);

  const currentLocation = useLocation();

  //Closing mobile menu if user clicks on the same page as current
  useEffect(() => {
    setMobileMenuActive(false);
  }, [currentLocation]);

  const burgerBtnHandler = () => {
    mobileMenu?.current?.classList.remove(style.mobileMenuClose);

    if (!mobileMenuActive) {
      setMobileMenuActive((prev) => !prev);
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
      mobileMenu?.current?.classList.add(style.mobileMenuClose);

      //deleting active class from burgerBtn to show animation without delay
      burgerBtn?.current?.classList.remove(style.burgerBtnActive);

      //adding time for hide-menu animation
      setTimeout(() => {
        setMobileMenuActive((prev) => !prev);
      }, 500);
    }
  };

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
              ref={mobileMenu}
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
              ref={burgerBtn}
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
