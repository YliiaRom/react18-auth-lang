import { useState } from "react";
import { roles } from "@/shared/config/roles.js";

function UserForm({ user = {}, onSubmit, isLoading, error }) {
  console.log("---------render UserForm");

  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [role, setRole] = useState(user?.role || "user");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState(user?.password || "");
  console.log(` user : `, displayName, role, email);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(displayName, role, email, password);

    //fn відправки данних

    onSubmit({
      email,
      ...(user.uid ? {} : { password }),
      displayName,
      role,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            className="border rounded px-2 py-1"
            placeholder="Юлія_1"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            disabled={!!user.uid}
            required
          />
        </label>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          {Object.entries(roles).map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>

        <label>
          Email:
          <input
            type="email"
            placeholder="xxxx@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!!user.uid}
            required
          />
        </label>
        {!user?.id && (
          <label>
            Password:
            <input
              type="password"
              placeholder="1234567"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!!user.uid}
              autoComplete={user?.uid ? "current-password" : "new-password"}
              required
            />
          </label>
        )}

        <button type="submit" disabled={isLoading}>
          {user?.uid ? "Зберегти" : "Додати"}
        </button>
        {error && (
          <p>
            {error?.data?.message || "Помилка при передачі значень в UserForm"}
          </p>
        )}
      </form>
    </>
  );
}

export default UserForm;
