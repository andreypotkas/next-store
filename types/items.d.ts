import React from "react";

export type NavigationBarItemType = {
  label: string;
  icon: React.ReactNode;
  link: boolean;
  action: () => void;
};
