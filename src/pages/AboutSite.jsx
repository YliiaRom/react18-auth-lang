import { useTranslation } from "react-i18next";

function AboutSite() {
  const { t } = useTranslation();
  return (
    <div className="aboutSitePageWrapper">
      <a
        href="https://firebase.google.com/docs/firestore/security/get-started?hl=ru"
        target="_blank"
      >
        <button> {t(`about.firebaseDoc`)}</button>
      </a>
      <a href="https://react.i18next.com/guides/quick-start" target="_blank">
        <button> {t(`about.i18nextDoc`)}</button>
      </a>

      <h1>{t(`about.title`)}</h1>
      <p>{t(`about.description`)}</p>

      <div>
        <h2>{t(`about.passwordSection.title`)} :</h2>
        <hr />
        <h3>Manager(yyy): Email/Password -yyy@gmail.com</h3>
        <p>{t(`about.passwordSection.manager.access`)}</p>
        <p>{t(`about.passwordSection.manager.rulesNote`)}</p>
        <hr />
        <h3>User (aaa): Email/Password -aaa@gmail.com</h3>
        <div>
          <p>{t(`about.passwordSection.user.access`)}</p>
          <p>{t(`about.passwordSection.user.note`)}</p>
        </div>
        <hr /> <h3> Admin (xxx): Email/Password -11111@gmail.com</h3>
        <p>Admin(Доступ):</p>
        <p>{t(`about.passwordSection.admin.accessUserPage`)}</p>
        <p>{t(`about.passwordSection.admin.accessProductsPage`)}</p>
        <p>{t(`about.passwordSection.admin.rulesNote`)}</p>
      </div>
      <a
        href="https://www.youtube.com/live/AokEUO1Frt4?feature=share"
        target="_blank"
      >
        {t(`about.theoryLink`)}
      </a>
    </div>
  );
}

export default AboutSite;
