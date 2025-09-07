import { Outlet } from "react-router";
import Header from "../Header/Header";

import ControlsPanel from "../ControlsPanel/ControlsPanel";

export function MainLayout() {
  return (
    <>
      <header className="header">
        <ControlsPanel />
        <Header />
      </header>

      <main>{<Outlet />}</main>
    </>
  );
}
