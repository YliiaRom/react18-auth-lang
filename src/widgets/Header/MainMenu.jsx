import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth/api/authSlice";
import { NavLink } from "react-router";
import { getPagesObjectList } from "@/shared/config/routes/frontRoutes";
import BurgerMenu from "@/features/BurgerMenu/ui/BurgerMenu";
import { useTranslation } from "react-i18next";

export function MainMenu() {
  const { t } = useTranslation();
  const user = useSelector(selectAuthUser);
  const burgerMainMenu = useSelector((state) => state.burgerMenu.isMenu);
  // Фільтруємо маршрути, які потрібно показати в меню (ті, що мають title)
  // І враховуємо requireAuth і ролі

  const allowedRoutes = getPagesObjectList().filter(({ meta }) => {
    if (!meta.isInMenu) return false;
    if (!meta.requireAuth) return true;
    if (!user) return false;
    if (!meta.roles) return true;
    return meta?.roles.includes(user?.role);
  });

  return (
    <div>
      <nav className={`navLinkWrapper ${burgerMainMenu ? "openMenu" : ""}`}>
        <ul className="mainMenuList">
          {allowedRoutes.map(({ path, meta }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {/* {meta.title} */}
                {t(`${meta?.title}.menuLabel`)}
              </NavLink>
            </li>
          ))}
        </ul>
        <BurgerMenu />
      </nav>
    </div>
  );
}
