"use client";
import { ChildContainerProps, LayoutConfig, LayoutContextProps, LayoutState } from "@/types/layout";
import { PrimeReactContext } from "primereact/api";
import { createContext, useContext, useState } from "react";
export const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutProvider = ({ children }: ChildContainerProps) => {
  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
    ripple: true,
    menuMode: "static",
    colorScheme: "light",
    theme: "lara-light-teal",
  });

  const [layoutState, setLayoutState] = useState<LayoutState>({
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
  });
  const { changeTheme } = useContext(PrimeReactContext);

  const changeAppTheme = (theme: string, colorScheme: string) => {
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
    layoutConfig,
    setLayoutConfig,
    changeAppTheme,
    layoutState,
    setLayoutState,
    onMenuToggle,
    showProfileSidebar,
  };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};
