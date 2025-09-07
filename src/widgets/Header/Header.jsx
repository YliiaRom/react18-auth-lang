import { MainMenu } from "./MainMenu";
import logoImg from "@/assets/img/title.png";
import { UserInfo } from "./UserInfo";
import BurgerMenu from "@/features/BurgerMenu/ui/BurgerMenu";

export default function Header() {
  return (
    <header className="headerWrap">
      <div className="mainRov">
        <div className="logoImg">
          <img src={logoImg} alt="logo" />
        </div>
        <MainMenu />
        <BurgerMenu />
      </div>

      <UserInfo />
    </header>
  );
}
