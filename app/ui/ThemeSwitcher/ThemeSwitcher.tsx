import { LayoutContext } from "@/context/layoutcontext";
import { Button } from "primereact/button";
import { useContext } from "react";

export default function ThemeSwitcher() {
  const { layoutConfig, changeAppTheme } = useContext(LayoutContext);
  const isDark = layoutConfig.colorScheme === "dark";

  const handleClick = () => {
    isDark ? changeAppTheme("viva-light", "light") : changeAppTheme("viva-dark", "dark");
  };

  return <Button icon={isDark ? "pi pi-sun" : "pi pi-moon"} onClick={handleClick} style={{ border: "none", width: "2rem", height: "2rem" }} />;
}
