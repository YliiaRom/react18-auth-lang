import { useParams, useNavigate } from "react-router";
import { useGetAllUsersQuery } from "../entities/user/api/userApi";
import { UserEditForm } from "@/features/users";
import { frontRoutes } from "../shared/config/routes/frontRoutes";

export default function UserEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: users = [], isLoading } = useGetAllUsersQuery();
  const user = users.find((u) => u.id === id);

  const handleSuccess = () => {
    // navigate(frontRoutes.pages.UsersPage.navigationPath);
    console.log(`onSuccess = handleSuccess()---in UserEditPage`);
  };

  if (isLoading) return <div>Завантаження...</div>;

  return (
    <div>
      <h1>{user ? "Редагування користувача" : "Створення користувача"}</h1>
      <UserEditForm user={user} onSuccess={handleSuccess} />
    </div>
  );
}
