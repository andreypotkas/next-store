import { MenuItem } from "primereact/menuitem";
import { Dispatch, ReactNode, SetStateAction } from "react";

type ChildContainerProps = {
  children: ReactNode;
};

export type LayoutConfig = {
  colorScheme: string;
  theme: string;
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
  changeAppTheme: (theme: string, colorScheme: string) => void;
}

export interface MenuProps {
  model: MenuModel[];
}

export interface SideBarMenuItem extends MenuItem {
  category: string;
}
