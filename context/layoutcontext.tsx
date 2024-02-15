"use client";
import { ChildContainerProps, LayoutConfig, LayoutContextProps } from "@/types/layout";
import { PrimeReactContext } from "primereact/api";
import { createContext, useContext, useState } from "react";
export const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutProvider = ({ children }: ChildContainerProps) => {
  const { changeTheme } = useContext(PrimeReactContext);

  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
    colorScheme: "dark",
    theme: "viva-dark",
    leftSideBarVisible: false,
    cartVisible: false,
    searchVisible: false,
    isDesktop: true,
  });

  const toggleLeftSideBar = () => {
    setLayoutConfig({ ...layoutConfig, leftSideBarVisible: !layoutConfig.leftSideBarVisible, isDesktop: isDesktop() });
  };

  const toggleCart = () => {
    setLayoutConfig({ ...layoutConfig, cartVisible: !layoutConfig.cartVisible });
  };

  const toggleSearch = () => {
    setLayoutConfig({ ...layoutConfig, searchVisible: !layoutConfig.searchVisible });
  };

  const isDesktop = () => {
    return window.innerWidth > 991;
  };

  const changeAppTheme = (theme: string, colorScheme: string) => {
    changeTheme?.(layoutConfig.theme, theme, "theme-css", () => {
      setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, theme, colorScheme }));
    });
  };

  const value: LayoutContextProps = {
    layoutConfig,
    setLayoutConfig,
    toggleLeftSideBar,
    toggleCart,
    toggleSearch,
    changeAppTheme,
  };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};
