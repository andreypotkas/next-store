import { MenuItem } from "primereact/menuitem";
import React, { Dispatch, ReactNode, SetStateAction } from "react";

type ChildContainerProps = {
  children: ReactNode;
};

export type LayoutConfig = {
  leftSideBarVisible: boolean;
  cartVisible: boolean;
  isDesktop: boolean;
  searchVisible: boolean;
};

export interface LayoutContextProps {
  layoutConfig: LayoutConfig;
  setLayoutConfig: Dispatch<SetStateAction<LayoutConfig>>;
  toggleLeftSideBar: () => void;
  toggleCart: () => void;
  toggleSearch: () => void;
}

export interface MenuContextProps {
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
}

/* AppConfig Types */
export interface AppConfigProps {
  simple?: boolean;
}

/* AppTopbar Types */
export type NodeRef = MutableRefObject<ReactNode>;
export interface AppTopbarRef {
  menubutton?: HTMLButtonElement | null;
  topbarmenu?: HTMLDivElement | null;
  topbarmenubutton?: HTMLButtonElement | null;
}

/* AppMenu Types */
type CommandProps = {
  originalEvent: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
  item: MenuModelItem;
};

export interface MenuProps {
  model: MenuModel[];
}

export interface SideBarMenuItem extends MenuItem {
  to: string;
}
