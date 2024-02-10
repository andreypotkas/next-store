"use client";
import { ChildContainerProps, LayoutConfig, LayoutContextProps } from "@/types/layout";
import { createContext, useState } from "react";
export const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutProvider = ({ children }: ChildContainerProps) => {
  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
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

  const value: LayoutContextProps = {
    layoutConfig,
    setLayoutConfig,
    toggleLeftSideBar,
    toggleCart,
    toggleSearch,
  };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};
