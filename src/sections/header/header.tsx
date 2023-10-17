import style from "./header.module.scss";
import logo from "assets/img/logo/logo.png";

const Header: React.FC = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <header className={style.content}>
          <a className={style.logo} href="#">
            <img src={logo} alt="Системы Безопасности" />
            <p>Системы безопасности</p>
          </a>
          <nav>
            <ul className={style.menu}>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Проекты</a>
              </li>
              <li>
                <a href="#">Контакты </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
