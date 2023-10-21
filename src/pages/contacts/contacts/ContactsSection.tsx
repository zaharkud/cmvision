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
              <div className={style.socialItem}>
                <p className={style.socialType}>Telegram</p>
                <p className={style.socialId}>@KMVision</p>
              </div>
              <div className={style.socialItem}>
                <p className={style.socialType}>WhatsApp</p>
                <p className={style.socialId}>+7 (980) 709-44-91</p>
              </div>
              <div className={style.socialItem}>
                <p className={style.socialType}>Телефон</p>
                <p className={style.socialId}>+7 (980) 709-44-91</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
