"use client";
import { ChildContainerProps, ColorSchemes, LayoutConfig, LayoutContextProps, LayoutState, Themes } from "@/types/layout";
import { PrimeReactContext } from "primereact/api";
import { createContext, useContext, useState } from "react";

export const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutProvider = ({ children }: ChildContainerProps) => {
  const { changeTheme } = useContext(PrimeReactContext);

  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
    ripple: true,
    menuMode: "static",
    colorScheme: "dark",
    theme: "lara-dark-teal",
  });

  const [layoutState, setLayoutState] = useState<LayoutState>({
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
  });

  const changeAppTheme = (theme: Themes, colorScheme: ColorSchemes) => {
    changeTheme?.(layoutConfig.theme, theme, "theme-css", () => {
      setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, theme, colorScheme }));
    });
  };

  const onMenuToggle = () => {
    if (isOverlay()) {
      setLayoutState((prevLayoutState) => ({ ...prevLayoutState, overlayMenuActive: !prevLayoutState.overlayMenuActive }));
    }

    if (isDesktop()) {
      setLayoutState((prevLayoutState) => ({ ...prevLayoutState, staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive }));
    } else {
      setLayoutState((prevLayoutState) => ({ ...prevLayoutState, staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive }));
    }
  };

  const showProfileSidebar = () => {
    setLayoutState((prevLayoutState) => ({ ...prevLayoutState, profileSidebarVisible: !prevLayoutState.profileSidebarVisible }));
  };

  const isOverlay = () => {
    return layoutConfig.menuMode === "overlay";
  };

  const isDesktop = () => {
    return window.innerWidth > 991;
  };

  const value: LayoutContextProps = {
    layoutState,
    layoutConfig,
    changeAppTheme,
    setLayoutConfig,
    setLayoutState,
    onMenuToggle,
    showProfileSidebar,
  };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};
