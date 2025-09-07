import { LoginForm } from "../features/auth/login";
import { SignUpForm } from "../features/auth/signup";
import { useState } from "react";

export default function LoginPage() {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="loginPageWrapper">
      <div className="loginFormWrap">
        <h1>{showSignUp ? "Реєстрація" : "Вхід"}</h1>
        {showSignUp ? (
          <SignUpForm onSuccess={() => setShowSignUp(false)} />
        ) : (
          <LoginForm onSuccess={() => {}} />
        )}
        <button type="button" onClick={() => setShowSignUp((v) => !v)}>
          {showSignUp ? "Увійти" : "Зареєструватися"}
        </button>
      </div>
    </div>
  );
}
