import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import { useNavigate } from "react-router";

function UserAddButton() {
  const navigate = useNavigate();
  const handleClick = () =>
    navigate(frontRoutes.pages.UserEditPage.navigationPath());
  return (
    <>
      <button onClick={handleClick}>Додати користувача</button>
    </>
  );
}

export default UserAddButton;
