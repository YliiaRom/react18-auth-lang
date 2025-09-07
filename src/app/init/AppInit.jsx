import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/shared/config/firebase-config";
import { logout } from "@/features/auth";

import { useRefreshMutation } from "@/features/auth/api/authApi";
import { useTranslation } from "react-i18next";

export function AppInit() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const [refresh] = useRefreshMutation();
  useEffect(() => {
    const runColorTheme = () => {
      try {
        const dataThemeColor = window.localStorage.getItem("wino-theme");
        if (!dataThemeColor) return;
        const body = document.documentElement;
        body.classList.remove("black", "white");
        body.classList.add(dataThemeColor);
      } catch (error) {
        console.log(error.message);
      }
    };
    runColorTheme();

    const changeThemeColor = (e) => {
      if (e.key === "wino-theme") runColorTheme();
    };
    window.addEventListener("storage", changeThemeColor);
    return () => window.removeEventListener("storage", changeThemeColor);
  }, []);

  useEffect(() => {
    const onStorage = (e) => {
      if (
        e.key === "i18nextLng" &&
        e.newValue &&
        e.newValue !== i18n.language
      ) {
        i18n.changeLanguage(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [i18n]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          await refresh().unwrap();
        } catch {
          dispatch(logout());
        }
      } else {
        dispatch(logout());
      }
    });
    return () => unsubscribe();
  }, [dispatch, refresh]);
}
