import style from "./contactUs.module.scss";

import telephoneIcon from "assets/icons/social/telephone.svg";
import whatsappIcon from "assets/icons/social/whatsapp.svg";
import telegramIcon from "assets/icons/social/telegram.svg";

const ContactUs: React.FC = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.contactsCard}>
            <p className={style.descr}>
              Есть вопросы или нужно рассчитать заказ?
            </p>
            <div className={style.contactsBtns}>
              <a className={style.btn} href="#">
                <img src={telephoneIcon} />
                <span>Позвонить</span>
              </a>
              <a className={style.btn} href="#">
                <img src={whatsappIcon} />
                <span>WhatsApp</span>
              </a>
              <a className={style.btn} href="#">
                <img src={telegramIcon} />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
