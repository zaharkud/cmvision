import style from "./header.module.scss";
import logo from "assets/img/logo/logo.png";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <a className={style.logo} href="#">
            <img src={logo} alt="Системы Безопасности" />
            <p>Системы безопасности</p>
          </a>
          <nav>
            <ul className={style.menu}>
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
                <Link to="/contacts" className={style.link}>
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/" className={style.link}>
                  Проекты
                </Link>
              </li>
              <li>
                <Link to="/contacts" className={style.link}>
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
