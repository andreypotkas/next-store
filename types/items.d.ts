import React from "react";

export type NavigationBarItemType = {
  label: string;
  icon: React.ReactNode;
  link: boolean;
  badge?: number;
  action: () => void;
};
