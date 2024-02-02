"use client";
import { LayoutContext } from "@/context/layoutcontext";
import { Moon, Sun } from "lucide-react";
import { Button } from "primereact/button";
import React, { useContext } from "react";

const ThemeSwitcherIcon: Record<string, React.ReactNode> = {
  ["dark"]: <Sun />,
  ["light"]: <Moon />,
};

export default function ThemeSwitcher() {
  const { changeAppTheme, layoutConfig } = useContext(LayoutContext);
  const changeTheme = () => {
    const themeColor = layoutConfig.colorScheme === "light" ? "dark" : "light";
    const theme = layoutConfig.theme === "lara-light-teal" ? "lara-dark-teal" : "lara-light-teal";
    changeAppTheme(theme, themeColor);
  };

  return (
    <div>
      <Button text icon={ThemeSwitcherIcon[layoutConfig.colorScheme]} onClick={changeTheme}></Button>
    </div>
  );
}
