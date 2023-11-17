import style from "./contactsSection.module.scss";

const ContactsSection: React.FC = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.pageTitle}>КОНТАКТЫ</h1>
          <div className={style.contactsCard}>
            <div className={style.contactsForm}>
              <form>
                <input type="text" placeholder="Полное имя" />
                <input type="email" placeholder="Почта" />
                <input type="text" placeholder="Сообщение" />
                <button>Отправить</button>
              </form>
            </div>
            <div className={style.contactsSocial}>
              <a
                className={style.socialItem}
                href="https://t.me/kmvision"
                target="_blank"
                rel="noreferrer"
              >
                <p className={style.socialType}>Telegram</p>
                <p className={style.socialId}>@KMVision</p>
              </a>

              <a
                className={style.socialItem}
                href="https://api.whatsapp.com/send?phone=79197450867"
              >
                <p className={style.socialType}>WhatsApp</p>
                <p className={style.socialId}>+7 (980) 709-44-91</p>
              </a>

              <a className={style.socialItem} href="tel:+79197450867">
                <p className={style.socialType}>Телефон</p>
                <p className={style.socialId}>+7 (980) 709-44-91</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
