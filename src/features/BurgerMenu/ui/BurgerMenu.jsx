import { changeMenu } from "@/shared/slices/burgerMenuSlice";
// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function BurgerMenu() {
  const burgerMenu = useSelector((state) => state.burgerMenu.isMenu);
  const dispatch = useDispatch();

  // const [isMenu, setIsMenu] = useState(false);
  // useEffect(() => {
  //   if (isMenu === true) {
  //     const changeMenuClass = () => {
  //       const mainMenu = document.querySelector(".navLinkWrapper");
  //       console.log(mainMenu);
  //       mainMenu.classList.add("openMenu");
  //     };
  //     changeMenuClass();
  //   } else {
  //     const dalMenuBurger = () => {
  //       const mainMenu = document.querySelector(".navLinkWrapper");
  //       console.log(mainMenu);
  //       mainMenu.classList.remove("openMenu");
  //     };
  //     dalMenuBurger();
  //   }
  // }, [isMenu]);
  // const handlerClick = () => {
  //   setIsMenu((v) => !v);
  //   console.log(isMenu);
  // };
  const handlerClick = () => {
    dispatch(changeMenu(burgerMenu));
  };
  return (
    <div className="burgerMenuWrapper">
      <button onClick={handlerClick} className="burgerMenuBtn">
        {burgerMenu ? "close" : "menu"}
      </button>
    </div>
  );
}

export default BurgerMenu;
