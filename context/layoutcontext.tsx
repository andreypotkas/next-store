"use client";
import { ChildContainerProps, LayoutConfig, LayoutContextProps } from "@/types/layout";
import { createContext, useState } from "react";
export const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutProvider = ({ children }: ChildContainerProps) => {
  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
    ripple: true,
    sideBarVisible: false,
    isDesktop: true,
  });

  const toggleLeftSideBar = () => {
    setLayoutConfig({ ...layoutConfig, sideBarVisible: !layoutConfig.sideBarVisible, isDesktop: isDesktop() });
  };

  const isDesktop = () => {
    return window.innerWidth > 991;
  };

  const value: LayoutContextProps = {
    layoutConfig,
    setLayoutConfig,
    toggleLeftSideBar,
  };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};
