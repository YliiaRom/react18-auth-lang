// import { useState } from "react";
import {
  useUpdateUserRoleMutation,
  useAddUserMutation,
} from "@/entities/user/api/userApi";
// import { roles } from "@/shared/config/roles";
import UserForm from "@/entities/user/ui/UserForm";

export function UserEditForm({ user = {}, onSuccess }) {
  // const [email, setEmail] = useState(user?.email || "");

  // const [displayName, setDisplayName] = useState(user?.displayName || "");
  // const [role, setRole] = useState(user?.role || "user");

  const [updateUserRole, { isLoading: isUpdating, error: updateError }] =
    useUpdateUserRoleMutation();

  const [addUser, { isLoading: isAdding, error: addError }] =
    useAddUserMutation();

  const handleSubmit = async ({ email, password, displayName, role }) => {
    // e.preventDefault();

    if (user.id) {
      await updateUserRole({ uid: user.id, role });
    } else {
      await addUser({ email, password, displayName, role });
    }
    onSuccess && onSuccess();
  };

  return (
    <UserForm
      user={user}
      onSubmit={handleSubmit}
      isLoading={isUpdating || isAdding}
      error={updateError || addError}
    />
    // <form onSubmit={handleSubmit}>
    //   <input
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     placeholder="Email"
    //     disabled={!!user.id}
    //     required
    //   />

    //   <input
    //     value={displayName}
    //     onChange={(e) => setDisplayName(e.target.value)}
    //     placeholder="Ім'я"
    //     disabled={!!user.id}
    //     required
    //   />
    //   <select value={role} onChange={(e) => setRole(e.target.value)}>
    //     {Object.entries(roles).map(([key, value]) => (
    //       <option key={key} value={value}>
    //         {value}
    //       </option>
    //     ))}
    //   </select>

    //   <button type="submit" disabled={isUpdating || isAdding}>
    //     {user.id ? "Зберегти" : "Додати"}
    //   </button>
    //   {(updateError || addError) && (
    //     <div style={{ color: "red" }}>
    //       {updateError?.data?.message || addError?.data?.message || "Помилка"}
    //     </div>
    //   )}
    // </form>
  );
}
