import { useLogout } from "@/features/auth/logout/model/useLogout";
import userDefault from "@/assets/user-default.svg";
import { GoogleAuthProvider } from "firebase/auth";

import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth/api/authSlice";
import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import { useTranslation } from "react-i18next";

export function UserInfo() {
  const { t } = useTranslation();
  const user = useSelector(selectAuthUser);

  const navigate = useNavigate();

  const { logout } = useLogout();

  if (!user) {
    return (
      <div className="userInfoWrapper">
        <Link
          to={frontRoutes.pages.LoginPage.navigationPath}
          className="userInfoWrapperBtn"
        >
          Увійти
        </Link>
      </div>
    );
  }
  const onLogout = () => {
    logout();
    navigate(frontRoutes.pages.LoginPage.navigationPath);
  };

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  return (
    <div className="userInfoWrapper">
      <img
        src={user.photoURL || userDefault}
        alt="user avatar"
        className="w-8 h-8 rounded-full object-cover border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      />
      <span>
        {user.email} - {user.role}{" "}
      </span>
      <button onClick={onLogout}>{t(`commandBtn.logout`)}</button>
    </div>
  );
}
