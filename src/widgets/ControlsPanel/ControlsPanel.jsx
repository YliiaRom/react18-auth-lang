import ThemeToggle from "@/features/swithers/theme/ui/ThemeToggle";
import SwitcherLang from "../Header/SwitcherLang";

function ControlsPanel() {
  return (
    <div className="ControlsPanelWrapper">
      <ThemeToggle />
      <SwitcherLang />
    </div>
  );
}

export default ControlsPanel;
